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
    public class Share_StreetADORepository : BaseRepository<Share_Street>
    {
        public List<Share_Street> GetStreetByCode(string code)
        {
            string sql = "select top 1 * from Share_Street where code=@code";
            SqlParameter[] parameters = { new SqlParameter("@code", code) };
            DataTable dt = SqlHelper.GetDataTable(CommandType.Text, sql, parameters);
            IList<Share_Street> IList = new TBToList<Share_Street>().ToList(dt);
            return IList.ToList();

        }

        public List<Share_Street> GetStreetByParentCode(string parent_code)
        {
            string sql = "select * from Share_Street where parent_code like @parent_code";
            SqlParameter[] parameters = { new SqlParameter("@parent_code", parent_code + "%") };
            DataTable dt = SqlHelper.GetDataTable(CommandType.Text, sql, parameters);
            return (new TBToList<Share_Street>().ToList(dt)).ToList();
        }
    }
}
