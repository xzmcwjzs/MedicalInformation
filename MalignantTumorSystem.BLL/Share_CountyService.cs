using MalignantTumorSystem.Common;
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

namespace MalignantTumorSystem.BLL
{
    public partial class Share_CountyService : BaseService<Share_County>, IShare_CountyService
    {
        DbContext Db = DbContextFactory.CreateDbContext();
        public string GetCodeByName(string name)
        {
            string sql = "select code from Share_County where CHARINDEX(name,@name)<>0";
            SqlParameter[] parms = new SqlParameter[] { new SqlParameter("@name", name) };
            string result = CommonFunc.SafeGetStringFromObj(Db.Database.SqlQuery<string>(sql, parms).FirstOrDefault());
            return result;
        }

    }
}
