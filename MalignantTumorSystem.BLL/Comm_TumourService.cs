using MalignantTumorSystem.Common;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.BLL
{
    public partial class Comm_TumourService : BaseService<Comm_Tumour>, IComm_TumourService
    {
        DbContext Db = DAL.DALFactory.DbContextFactory.CreateDbContext();
        public int GetBreastCancerFollowupAlertCount(string regionCode)
        {
            string sql = "select count(id) from Comm_Tumour where community_code like @community_code and (last_cycle_suggestion - DATEDIFF(d , last_followup_date , GETDATE()))<=10 and (last_cycle_suggestion - DATEDIFF(d , last_followup_date ,GETDATE()))>=0 and last_cycle_suggestion<>'0'";
            SqlParameter[] parms = new SqlParameter[] { new SqlParameter("@community_code", regionCode+"%") };
            int count = CommonFunc.SafeGetIntFromObj(Db.Database.SqlQuery<int>(sql, parms).FirstOrDefault(),0);
            return count;
        }


        public int GetBreastCancerFollowupExpireCount(string regionCode)
        {
            string sql = "select count(id) from Comm_Tumour where community_code like @community_code and (last_cycle_suggestion - DATEDIFF(d , last_followup_date , GETDATE()))<=0  and last_cycle_suggestion<>'0'";
            SqlParameter[] parms = new SqlParameter[] { new SqlParameter("@community_code", regionCode+"%") };
            int count = CommonFunc.SafeGetIntFromObj(Db.Database.SqlQuery<int>(sql, parms).FirstOrDefault(), 0);
            return count;
        }
    }  
}
