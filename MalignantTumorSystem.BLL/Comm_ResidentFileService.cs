using MalignantTumorSystem.DAL.DALFactory;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MalignantTumorSystem.Common;


namespace MalignantTumorSystem.BLL
{
    public partial class Comm_ResidentFileService : BaseService<Comm_ResidentFile>, IComm_ResidentFileService
    {
        DbContext Db = DbContextFactory.CreateDbContext();
        public string GetNumberByCode(string community_code)
        {
            string sql = "select MAX(resident_id) from Comm_ResidentFile where community_code=@community_code and LEN(resident_id)=17";
            SqlParameter[] parms =new SqlParameter[] { new SqlParameter("@community_code",community_code) };
            string result =CommonFunc.SafeGetStringFromObj(Db.Database.SqlQuery<string>(sql,parms).FirstOrDefault());
            return result;
        }

        public string GetNumberByCode1(string community_code)
        {
            string code = "";
            string sql = "select MAX(resident_id) from Comm_ResidentFile where  LEN(resident_id)=17 and SUBSTRING(resident_id,1,12)=@community_code";
            SqlParameter[] parms = new SqlParameter[] { new SqlParameter("@community_code", community_code) };
            string s = CommonFunc.SafeGetStringFromObj(Db.Database.SqlQuery<string>(sql,parms).FirstOrDefault());
            //判断这个社区之前有没有录入或建档的人，如果是空，则此人为本社区健康档案的第一人，健康档案号为本社区行政代码+00001
            if (!string.IsNullOrEmpty(s))
            {
                string f1 = s.Substring(0, 12);
                string f2 = s.Substring(12, 5);

                int a = int.Parse(f2) + 1;
                string a1 = "";
                if (a >= 1 && a < 10)
                {
                    a1 = "0000" + a;
                }
                else if (a >= 10 && a < 100)
                {
                    a1 = "000" + a;
                }
                else if (a >= 100 && a < 1000)
                {
                    a1 = "00" + a;
                }
                else if (a >= 1000 && a < 10000)
                {
                    a1 = "0" + a;
                }
                else if (a >= 10000 && a < 100000)
                {
                    a1 = a.ToString();
                }
                code = f1 + a1;
            }
            else
            {
                code = community_code + "00001";
            }
            return code;
        }


    }  
}
