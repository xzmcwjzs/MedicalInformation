using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.Model.ADOModel;
using System.Data.SqlClient;
using System.Data;

namespace MalignantTumorSystem.ADO.StatisticsOperation
{
   public partial class Comm_Platform_WorkerADORepository:BaseRepository<Comm_Platform_Worker>
    { 
        //通过用户名和密码获取一条记录的model
        public Comm_Platform_Worker GetModelByNameAndPassword(string name,string password)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select top 1 * from Comm_Platform_Worker ");
            strSql.Append(" where user_name=@user_name and password=@password ");
            SqlParameter[] parameters = { new SqlParameter("@user_name",name),
            new SqlParameter("@password",password)};

            Comm_Platform_Worker model = new Comm_Platform_Worker();
            DataSet ds = SqlHelper.GetDataSet(CommandType.Text, strSql.ToString(), parameters);
            if (ds.Tables[0].Rows.Count > 0)
            {
                return DataRowToModel(ds.Tables[0].Rows[0]);
            }
            else
            {
                return null;
            }
        }
        public  Comm_Platform_Worker DataRowToModel(DataRow row)
        {
            Comm_Platform_Worker model = new Comm_Platform_Worker();
            if (row != null)
            {
                if (row["id"] != null)
                {
                    model.id = row["id"].ToString();
                }
                if (row["user_name"] != null)
                {
                    model.user_name = row["user_name"].ToString();
                }
                if (row["password"] != null)
                {
                    model.password = row["password"].ToString();
                }
                if (row["real_name"] != null)
                {
                    model.real_name = row["real_name"].ToString();
                }
                if (row["region_code"] != null)
                {
                    model.region_code = row["region_code"].ToString();
                }
                if (row["company"] != null)
                {
                    model.company = row["company"].ToString();
                }
                if (row["department"] != null)
                {
                    model.department = row["department"].ToString();
                }
                if (row["company_code"] != null)
                {
                    model.company_code = row["company_code"].ToString();
                }
                if (row["company_classfy"] != null)
                {
                    model.company_classfy = row["company_classfy"].ToString();
                }
                if (row["manager_power"] != null)
                {
                    model.manager_power = row["manager_power"].ToString();
                }
                if (row["login_power"] != null)
                {
                    model.login_power = row["login_power"].ToString();
                }
                if (row["id_card_number"] != null)
                {
                    model.id_card_number = row["id_card_number"].ToString();
                }
                if (row["phone"] != null)
                {
                    model.phone = row["phone"].ToString();
                }
                if (row["email"] != null)
                {
                    model.email = row["email"].ToString();
                }
                if (row["weixin"] != null)
                {
                    model.weixin = row["weixin"].ToString();
                }
                if (row["qq"] != null)
                {
                    model.qq = row["qq"].ToString();
                }
                if (row["create_time"] != null && row["create_time"].ToString() != "")
                {
                    model.create_time = DateTime.Parse(row["create_time"].ToString());
                }
                if (row["system_power"] != null)
                {
                    model.system_power = row["system_power"].ToString();
                }
            }
            return model;
        }
    }
}
