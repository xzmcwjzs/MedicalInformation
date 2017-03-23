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
  public  class Share_CommunityInfoADORepository:BaseRepository<Share_CommunityInfo>
    {
        public List<Share_CommunityInfo> GetCommunityByCode(string code)
        {
            string sql = "select top 1 * from Share_CommunityInfo where code=@code";
            SqlParameter[] parameters = { new SqlParameter("@code", code) };
            DataTable dt = SqlHelper.GetDataTable(CommandType.Text, sql, parameters);
            IList<Share_CommunityInfo> IList = new TBToList<Share_CommunityInfo>().ToList(dt);
            return IList.ToList();

        }

        public List<Share_CommunityInfo> GetCommunityByParentCode(string parent_code)
        {
            string sql = "select * from Share_CommunityInfo where street_code like @parent_code";
            SqlParameter[] parameters = { new SqlParameter("@parent_code", parent_code + "%") };
            DataTable dt = SqlHelper.GetDataTable(CommandType.Text, sql, parameters);
            return (new TBToList<Share_CommunityInfo>().ToList(dt)).ToList();
        }
    }
}
