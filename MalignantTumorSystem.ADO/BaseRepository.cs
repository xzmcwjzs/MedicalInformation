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
  public  class BaseRepository<T> where T: class,new()
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
        public List<T> GetList()
        {
            DataTable dt = SqlHelper.GetDataTable(CommandType.Text, "select * from " + typeof(T).Name + "");
            return new TBToList<T>().ToList(dt).ToList();
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
            public  IList<TEntity> ToList(DataTable dt)
            {
                List<TEntity> lis = new List<TEntity>();
                Type type = typeof(TEntity);
                string tempName = string.Empty;
                foreach (DataRow dr in dt.Rows)
                {
                    TEntity t = new TEntity();
                    PropertyInfo[] propertys = t.GetType().GetProperties();
                    foreach (PropertyInfo pi in propertys)
                    {
                        tempName = pi.Name;
                        if (dt.Columns.Contains(tempName))
                        {
                            if (!pi.CanWrite) continue;
                            object value = dr[tempName];
                            if (value != DBNull.Value) { pi.SetValue(t, value, null); }
                        }

                    }
                    lis.Add(t);
                }
                return lis;
            }
        } 
        #endregion

    }
}
