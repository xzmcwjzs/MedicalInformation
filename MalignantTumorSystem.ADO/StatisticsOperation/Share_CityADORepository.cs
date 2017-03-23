using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks; 
using MalignantTumorSystem.Model.ADOModel;
using System.Data.SqlClient;
using System.Data;
using MalignantTumorSystem.Common;

namespace MalignantTumorSystem.ADO.StatisticsOperation
{
    public class Share_CityADORepository : BaseRepository<Share_City>
    {
        public List<Share_City> GetCityByCode(string code)
        {
            string sql = "select top 1 * from Share_City where code = @code";
            SqlParameter[] parameters = { new SqlParameter("@code", code) };
            DataTable dt = SqlHelper.GetDataTable(CommandType.Text, sql, parameters);
            IList<Share_City> IList = new TBToList<Share_City>().ToList(dt);
            return IList.ToList();

        }

        public List<Share_City> GetCityByParentCode(string parent_code)
        {
            string sql = "select * from Share_City where parent_code like @parent_code";
            SqlParameter[] parameters = { new SqlParameter("@parent_code", parent_code+"%") };
            DataTable dt = SqlHelper.GetDataTable(CommandType.Text, sql, parameters);
            return (new TBToList<Share_City>().ToList(dt)).ToList();
        }

    }
}
