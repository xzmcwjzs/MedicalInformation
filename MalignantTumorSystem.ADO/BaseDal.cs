using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.ADO
{
  public  class BaseDal<T> where T: class,new()
    {
       
        #region 获取某个表某列的最大值 GetMax
        public object GetMax(string fieldName, string tableName)
        {
            object myMax = null;
            DataSet myDs = SqlHelper.GetDataSet(CommandType.Text, "select max(" + fieldName + ") from " + tableName + "");
            if (myDs.Tables[0].Rows.Count > 0)
            {
                myMax = myDs.Tables[0].Rows[0][0];
            }
            return myMax;
        }
        #endregion

        #region 判断用Sql查询的数据是否存在,true表示存在，False表示不存在  Exists
        public bool Exists(string strSql, params SqlParameter[] paras)
        {
            object obj = SqlHelper.ExecuteScalar(CommandType.Text, strSql, paras);
            int result;
            if ((Object.Equals(obj, null)) || (Object.Equals(obj, System.DBNull.Value)))
            {
                result = 0;
            }
            else
            {
                result = int.Parse(obj.ToString());
            }
            if (result == 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
        #endregion

        #region 返回首行首列的值 GetSHSL
        public object GetSHSL(string strSql, params SqlParameter[] paras)
        {
            DataSet ds = SqlHelper.GetDataSet(CommandType.Text, strSql, paras);
            if (ds.Tables[0].Rows.Count > 0)
            {
                return ds.Tables[0].Rows[0][0];
            }
            else
            {
                return null;
            }
        }
        #endregion

        #region 查询表的所有记录
        public IQueryable<T> GetModel()
        {
            DataTable dt = SqlHelper.GetDataTable(CommandType.Text, "select * from " + typeof(T).Name + "");
            return new TBToList<T>().ToList(dt) as IQueryable<T>;
        }
        #endregion

        #region 删除 根据主键id删除
        public void Delete(string tableName,string id)
        {
            string commandText=string.Format("delete from {0} where id={1}",tableName,id);
            SqlHelper.ExecuteNonQuery(CommandType.Text, commandText);
        }
        #endregion

        #region datatable和list互转的一些公共方法
        public class TBToList<TEntity> where TEntity : new()
        {
            /// <summary>
            /// 获取列名集合
            /// </summary>
            private IList<string> GetColumnNames(DataColumnCollection dcc)
            {
                IList<string> list = new List<string>();
                foreach (DataColumn dc in dcc)
                {
                    list.Add(dc.ColumnName);
                }
                return list;
            }

            /// <summary>
            ///属性名称和类型名的键值对集合
            /// </summary>
            private Hashtable GetColumnType(DataColumnCollection dcc)
            {
                if (dcc == null || dcc.Count == 0)
                {
                    return null;
                }
                IList<string> colNameList = GetColumnNames(dcc);

                Type t = typeof(TEntity);
                PropertyInfo[] properties = t.GetProperties();
                Hashtable hashtable = new Hashtable();
                int i = 0;
                foreach (PropertyInfo p in properties)
                {
                    foreach (string col in colNameList)
                    {
                        if (col.ToLower().Contains(p.Name.ToLower()))
                        {
                            hashtable.Add(col, p.PropertyType.ToString() + i++);
                        }
                    }
                }

                return hashtable;
            }

            /// <summary>
            /// DataTable转换成IList
            /// </summary>
            /// <param name="dt"></param>
            /// <returns></returns>
            public IList<TEntity> ToList(DataTable dt)
            {
                if (dt == null || dt.Rows.Count == 0)
                {
                    return null;
                }

                PropertyInfo[] properties = typeof(TEntity).GetProperties();//获取实体类型的属性集合
                Hashtable hh = GetColumnType(dt.Columns);//属性名称和类型名的键值对集合
                IList<string> colNames = GetColumnNames(hh);//按照属性顺序的列名集合
                List<TEntity> list = new List<TEntity>();
                TEntity model = default(TEntity);
                foreach (DataRow dr in dt.Rows)
                {
                    model = new TEntity();//创建实体
                    int i = 0;
                    foreach (PropertyInfo p in properties)
                    {
                        if (p.PropertyType == typeof(string))
                        {
                            p.SetValue(model, dr[colNames[i++]], null);
                        }
                        else if (p.PropertyType == typeof(int))
                        {
                            p.SetValue(model, int.Parse(dr[colNames[i++]].ToString()), null);
                        }
                        else if (p.PropertyType == typeof(DateTime))
                        {
                            p.SetValue(model, DateTime.Parse(dr[colNames[i++]].ToString()), null);
                        }
                        else if (p.PropertyType == typeof(float))
                        {
                            p.SetValue(model, float.Parse(dr[colNames[i++]].ToString()), null);
                        }
                        else if (p.PropertyType == typeof(double))
                        {
                            p.SetValue(model, double.Parse(dr[colNames[i++]].ToString()), null);
                        }
                    }

                    list.Add(model);
                }

                return list;
            }

            /// <summary>
            /// 按照属性顺序的列名集合
            /// </summary>
            private IList<string> GetColumnNames(Hashtable hh)
            {
                PropertyInfo[] properties = typeof(TEntity).GetProperties();//获取实体类型的属性集合
                IList<string> ilist = new List<string>();
                int i = 0;
                foreach (PropertyInfo p in properties)
                {
                    ilist.Add(GetKey(p.PropertyType.ToString() + i++, hh));
                }
                return ilist;
            }

            /// <summary>
            /// 根据Value查找Key
            /// </summary>
            private string GetKey(string val, Hashtable tb)
            {
                foreach (DictionaryEntry de in tb)
                {
                    if (de.Value.ToString() == val)
                    {
                        return de.Key.ToString();
                    }
                }
                return null;
            }

        } 
        #endregion

    }
}
