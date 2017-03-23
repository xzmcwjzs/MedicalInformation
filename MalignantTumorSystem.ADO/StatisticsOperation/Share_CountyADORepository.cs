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
 public   class Share_CountyADORepository:BaseRepository<Share_County>
    {
        public List<Share_County> GetCountyByCode(string code)
        {
            string sql = "select top 1 * from Share_County where code=@code";
            SqlParameter[] parameters = { new SqlParameter("@code", code) };
            DataTable dt = SqlHelper.GetDataTable(CommandType.Text, sql, parameters);
            IList<Share_County> IList = new TBToList<Share_County>().ToList(dt);
            return IList.ToList();

        }

        public List<Share_County> GetCountyByParentCode(string parent_code)
        {
            string sql = "select * from Share_County where parent_code like @parent_code";
            SqlParameter[] parameters = { new SqlParameter("@parent_code", parent_code+"%") };
            DataTable dt = SqlHelper.GetDataTable(CommandType.Text, sql, parameters);
            return (new TBToList<Share_County>().ToList(dt)).ToList();
        }
    }
}
