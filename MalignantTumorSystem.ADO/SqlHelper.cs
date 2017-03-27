using System;
using System.Collections;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.ADO
{
   public class SqlHelper
    {
       //读取配置文件里的数据库连接字符串
       public static readonly string connectionString = ConfigurationManager.ConnectionStrings["MalignantTumorEntities"].ConnectionString;
        #region 超时时间
        /// <summary>
        /// 超时时间
        /// </summary>
        public static int CommandTimeOut = 600;
        #endregion
      
        #region PrepareCommand 准备一个待执行的SqlCommand
        /// <summary>
        /// 准备一个待执行的SqlCommand
        /// </summary>
        /// <param name="cmd"></param>
        /// <param name="conn"></param>
        /// <param name="trans"></param>
        /// <param name="commandType"></param>
        /// <param name="commandText"></param>
        /// <param name="paras"></param>
        private static void PrepareCommand(SqlCommand cmd, SqlConnection conn, SqlTransaction trans, CommandType commandType, string commandText, params SqlParameter[] paras)
       {
           try
           {
               if (conn.State != ConnectionState.Open)
               {
                   conn.Open();
               }
               cmd.Connection = conn;
                cmd.CommandTimeout = CommandTimeOut;
               if (commandText != null)
               {
                   cmd.CommandText = commandText;
               }
               cmd.CommandType = commandType;

               if (trans != null)
               {
                   cmd.Transaction = trans;
               }
               if (paras != null && paras.Length > 0)
               {
                   for (int i = 0; i < paras.Length; i++)
                   {
                       if ((paras[i].Direction==ParameterDirection.InputOutput || paras[i].Direction==ParameterDirection.Input) && (paras[i].Value == null))
                       {
                           paras[i].Value = DBNull.Value;//插入修改时 如果有参数是空字符串 那么以NULL的形式插入数据库
                       }
                       cmd.Parameters.Add(paras[i]);
                   }
               }
           }
           catch (Exception ex)
           {
               throw new Exception(ex.Message);
           }
       } 
       #endregion

       #region ExecuteNonQuery 执行增删改【常用】
       /// <summary>
       /// 执行增删改【常用】
       /// </summary>
       /// <param name="commandType">CommandType.Text表示执行sql语句</param>
       /// <param name="commandText">执行的sql语句</param>
       /// <param name="paras">参数</param>
       /// <returns></returns>
       public static int ExecuteNonQuery(CommandType commandType, string commandText, params SqlParameter[] paras)
       {
           SqlCommand cmd = new SqlCommand();
           using (SqlConnection conn = new SqlConnection(connectionString))
           {
               PrepareCommand(cmd, conn, null, commandType, commandText, paras);
               int val = cmd.ExecuteNonQuery();
               cmd.Parameters.Clear();
               return val;
           }
       } 
       #endregion 

        #region ExecuteNonQuery 执行多条sql语句（List泛型集合）【事务】（无参数）
       public static int ExecuteNonQuery(List<string> listSql)
       {
           SqlCommand cmd = new SqlCommand();
           SqlConnection conn = new SqlConnection(connectionString);
           conn.Open();
           SqlTransaction trans = conn.BeginTransaction();
           PrepareCommand(cmd, conn, trans, CommandType.Text, null, null);
           try
           {
               int count=0;
               for (int i = 0; i < listSql.Count; i++)
               {
                   string strSql = listSql[i];
                   if (strSql.Trim().Length > 1)
                   {
                       cmd.CommandText = strSql;
                       count += cmd.ExecuteNonQuery();
                   }
               }
               trans.Commit();
               cmd.Parameters.Clear();
               return count;
           }
           catch (Exception)
           {
               trans.Rollback();
               cmd.Parameters.Clear();
               return 0;
           }
           finally
           {
               conn.Close();
           }
       }
        #endregion

        #region ExecuteNonQuery  执行多条sql语句（Hashtable）【事务】（带一组参数，一个参数也得封装成组)
       /// <summary>
       /// 执行多条sql语句（Hashtable）【事务】（带一组参数，一个参数也得封装成组)
       /// </summary>
       /// <param name="sqlStringList">Hashtable表，键值对形式</param>
       public static void ExecuteNonQuery(Hashtable sqlStringList)
       {
           using (SqlConnection conn=new SqlConnection(connectionString))
           {
               conn.Open();
               using (SqlTransaction trans=conn.BeginTransaction())
               {
                   SqlCommand cmd = new SqlCommand();
                   try
                   {
                       foreach (DictionaryEntry item in sqlStringList)
                       {
                           string cmdText = item.Key.ToString();//key 中存的是sql语句
                           SqlParameter[] cmdParas = (SqlParameter[])item.Value;//sql语句对应的参数
                           int val = cmd.ExecuteNonQuery();
                           cmd.Parameters.Clear();
                       }
                       if (sqlStringList.Count > 0)
                       {
                           trans.Commit();
                       }
                   }
                   catch (Exception)
                   {
                       trans.Rollback();
                       throw;
                   }
               }
           }
       }
        #endregion
        
        #region ExecuteReader 返回DataReader对象 只读  最后别忘了reader.Close()
        public static SqlDataReader ExecuteReader(CommandType commandType, string commandText, params SqlParameter[] paras)
       {
           SqlCommand cmd = new SqlCommand();
           SqlConnection conn = new SqlConnection(connectionString);
           try
           {
               PrepareCommand(cmd, conn, null, commandType, commandText, paras);
               SqlDataReader reader = cmd.ExecuteReader(CommandBehavior.CloseConnection);
               cmd.Parameters.Clear();
               return reader;
           }
           catch (Exception)
           {
               conn.Close();
               throw;
           }
       }
        #endregion

        #region ExecuteScalar 返回第一行第一列信息（可能是字符串 所以返回类型是object）【常用】

       public static object ExecuteScalar(CommandType commandType, string commandText, params SqlParameter[] paras)
       {
           SqlCommand cmd = new SqlCommand();
           using (SqlConnection conn=new SqlConnection(connectionString))
           {
               PrepareCommand(cmd, conn, null, commandType, commandText, paras);
               try
               {
                   object val = cmd.ExecuteScalar();
                   cmd.Parameters.Clear();
                   if ((Object.Equals(val, null)) || (Object.Equals(val, System.DBNull.Value)))
                   {
                       conn.Close();
                       return null;
                   }
                   else
                   {
                       conn.Close();
                       return val;
                   }
               }
               catch (Exception)
               {
                   conn.Close();
                   return null; 
               }
           }
       }
        #endregion

        #region GetDataTable 返回DataTable
       public static DataTable GetDataTable(CommandType commandType, string commandText, params SqlParameter[] paras)
       {
           SqlCommand cmd = new SqlCommand();
           using (SqlConnection conn=new SqlConnection(connectionString))
           {
               PrepareCommand(cmd, conn, null, commandType, commandText, paras);
               using (SqlDataAdapter da=new SqlDataAdapter(cmd))
               {
                   DataTable dt = new DataTable();
                   da.Fill(dt);
                   return dt;
               }
           }
       }
        #endregion

        #region GetDataSet 返回DataSet
       public static DataSet GetDataSet(CommandType commandType, string commandText, params SqlParameter[] paras)
       {
           SqlCommand cmd = new SqlCommand();
           using (SqlConnection conn=new SqlConnection(connectionString))
           {
               PrepareCommand(cmd, conn, null, commandType, commandText, paras);
               using (SqlDataAdapter da=new SqlDataAdapter(cmd))
               {
                   DataSet ds = new DataSet();
                   try
                   {
                       da.Fill(ds, "ds");
                       cmd.Parameters.Clear();
                   }
                   catch (Exception ex)
                   {
                       throw new Exception(ex.Message);
                   }
                   conn.Close();
                   return ds;
               }
           }
       }
        #endregion

        #region 异步执行
       /// <summary>
       /// 异步执行相应的命令，返回一个SqlDataReader数据对象，如果没有则返回null值
       /// </summary>
       /// <param name="commandType"></param>
       /// <param name="commandText"></param>
       /// <param name="paras"></param>
       /// <returns></returns>
       public static async Task<SqlDataReader> ExecuteReaderAsync(CommandType commandType, string commandText, params SqlParameter[] paras)
       {
           SqlCommand cmd = new SqlCommand();
           SqlConnection conn = new SqlConnection(connectionString);
           try
           {
               PrepareCommand(cmd, conn, null, commandType, commandText, paras);
               SqlDataReader reader =await cmd.ExecuteReaderAsync(CommandBehavior.CloseConnection);
               cmd.Parameters.Clear();
               return reader;
           }
           catch (Exception)
           {
               conn.Close();
               throw;
           }
       }

       /// <summary>
       /// 异步执行相应的命令，返回影响的数据记录数 
       /// </summary>
       /// <param name="commandType"></param>
       /// <param name="commandText"></param>
       /// <param name="paras"></param>
       /// <returns></returns>
       public static async Task<int> ExecuteNonQueryAsync(CommandType commandType, string commandText, params SqlParameter[] paras)
       {
           SqlCommand cmd = new SqlCommand();
           using (SqlConnection conn = new SqlConnection(connectionString))
           {
               PrepareCommand(cmd, conn, null, commandType, commandText, paras);
               int val =await cmd.ExecuteNonQueryAsync();
               cmd.Parameters.Clear();
               return val;
           }
       }
       /// <summary>
       /// 异步执行相应的命令，返回结果集中的第一行第一列的值，如果不成功则返回null值
       /// </summary>
       /// <param name="commandType"></param>
       /// <param name="commandText"></param>
       /// <param name="paras"></param>
       /// <returns></returns>
       public static async Task<object> ExecuteScalarAsync(CommandType commandType, string commandText, params SqlParameter[] paras)
       {
           SqlCommand cmd = new SqlCommand();
           using (SqlConnection conn = new SqlConnection(connectionString))
           {
               PrepareCommand(cmd, conn, null, commandType, commandText, paras);
               object val =await cmd.ExecuteScalarAsync();
               cmd.Parameters.Clear();
               return val;
           }
       }
        
        #endregion

        #region 批量操作
       /// <summary>
       /// 批量插入
       /// </summary>
       /// <param name="dt"></param>
       /// <param name="tableName"></param>
       public static void InsertBySqlBulkCopy(DataTable dt, string tableName)
       {
           using (SqlConnection conn=new SqlConnection(connectionString))
           {
               conn.Open();
               using (SqlTransaction trans=conn.BeginTransaction())
               {
                   using (SqlBulkCopy bulkCopy=new SqlBulkCopy(conn,SqlBulkCopyOptions.Default,trans))
                   {
                       bulkCopy.BatchSize = dt.Rows.Count;
                       bulkCopy.DestinationTableName = tableName;
                       try
                       {
                           bulkCopy.WriteToServer(dt);
                           trans.Commit();
                       }
                       catch (Exception)
                       {
                           trans.Rollback();
                           throw;
                       }
                   }
               }
           }
       }

       public static void InsertBySqlBulkCopy<T>(List<T> listModel, string tableName) where T : class,new()
       {
           List<PropertyInfo> listProperty = new List<PropertyInfo>();
           Type type = typeof(T);
           DataTable dt = new DataTable();
           Array.ForEach(type.GetProperties(), p =>
           {
               listProperty.Add(p);
               if (p.PropertyType.IsGenericParameter)
               {
                   dt.Columns.Add(p.Name);
               }
               else
               {
                   dt.Columns.Add(p.Name, p.PropertyType);
               }
           });
           if (listModel != null)
           {
               foreach (var item in listModel)
               {
                   DataRow row = dt.NewRow();
                   listProperty.ForEach(p =>
                   {
                       row[p.Name] = p.GetValue(item, null);
                   });
                   dt.Rows.Add(row);
               }
           }

           using (SqlConnection conn = new SqlConnection(connectionString))
           {
               conn.Open();
               using (SqlTransaction trans = conn.BeginTransaction())
               {
                   using (SqlBulkCopy bulkCopy = new SqlBulkCopy(conn, SqlBulkCopyOptions.Default, trans))
                   {
                       bulkCopy.BatchSize = dt.Rows.Count;
                       bulkCopy.DestinationTableName = tableName;
                       try
                       {
                           bulkCopy.WriteToServer(dt);
                           trans.Commit();
                       }
                       catch (Exception)
                       {
                           trans.Rollback();
                           throw;
                       }
                   }
               }
           }

       }
        #endregion
    }
}
