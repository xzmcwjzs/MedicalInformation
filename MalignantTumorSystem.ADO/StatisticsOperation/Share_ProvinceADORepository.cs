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
    public class Share_ProvinceADORepository : BaseRepository<Share_Province>
    {
        public List<Share_Province> GetProvinceByCode(string code)
        {
            string sql = "select top 1 * from Share_Province where code=@code";
            SqlParameter[] parameters = { new SqlParameter("@code", code) };
            DataTable dt = SqlHelper.GetDataTable(CommandType.Text, sql, parameters);
            return (new TBToList<Share_Province>().ToList(dt)).ToList();
        }
        
    }
}
