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
    public partial class Chronic_disease_BloodPressure_AddService : BaseService<Chronic_disease_BloodPressure_Add>,IChronic_disease_BloodPressure_AddService
    {
        DbContext Db = DAL.DALFactory.DbContextFactory.CreateDbContext();


        public bool UpdateSubjective(List<Chronic_disease_BloodPressure_Add> subjectiveList, string id)
        {
            throw new NotImplementedException();
        }

        #region 根据身份证号取值

        public List<Chronic_disease_BloodPressure_Add> GetListByNum(string id_card_number, out string startDate, out string endDate)
        {
            string sql = "select max(b.data) data,a.id id from Chronic_disease_BloodPressure a left join Chronic_disease_BloodPressure_Add b on a.id=b.add_id where a.id_card_number=@id_card_number group by a.id";
            SqlParameter[] parms = new SqlParameter[] { new SqlParameter("@id_card_number", id_card_number) };
            var list = Db.Database.SqlQuery<myModel>(sql, parms).ToList();
            string date = Common.CommonFunc.SafeGetStringFromObj(list.Select(t => t.data).FirstOrDefault());
            string id = Common.CommonFunc.SafeGetStringFromObj(list.Select(t => t.id).FirstOrDefault());

            DateTime d = Convert.ToDateTime(date);
            int num = (int)d.DayOfWeek;
            int startNum = 0 - num;
            int endNum = 7 - num;
            startDate = d.AddDays(startNum).ToString("yyyy-MM-dd");
            endDate = d.AddDays(endNum).ToString("yyyy-MM-dd");

            string sqlList = "select * from Chronic_disease_BloodPressure_Add where add_id like @id and data between @startDate and @endDate order by data";
            SqlParameter[] sqlparms ={
                                        new SqlParameter("@id",id),
                                        new SqlParameter("@startDate",startDate),
                                        new SqlParameter("@endDate",endDate)
                                    };
            var resultList = Db.Database.SqlQuery<Chronic_disease_BloodPressure_Add>(sqlList, sqlparms).ToList();
            return resultList;
        }

        public class myModel
        {
            public string id { get; set; }
            public DateTime data { get; set; }
        } 
        #endregion
         
        #region 根据id取值
        public List<Chronic_disease_BloodPressure_Add> GetListById(string id, out string startDate, out string endDate)
        {
            string sql = "select max(data)  from Chronic_disease_BloodPressure_Add where add_id=@id";
            SqlParameter[] parms = new SqlParameter[] { new SqlParameter("@id", id) };
            DateTime maxDate = Db.Database.SqlQuery<DateTime>(sql, parms).FirstOrDefault();
            DateTime d = maxDate;
            int num = (int)d.DayOfWeek;
            int startNum = 0 - num;
            int endNum = 7 - num;
            startDate = d.AddDays(startNum).ToString("yyyy-MM-dd");
            endDate = d.AddDays(endNum).ToString("yyyy-MM-dd");

            string sqlList = "select * from Chronic_disease_BloodPressure_Add where add_id like @id and data between @startDate and @endDate order by data";
            SqlParameter[] sqlparms ={
                                        new SqlParameter("@id",id),
                                        new SqlParameter("@startDate",startDate),
                                        new SqlParameter("@endDate",endDate)
                                    };
            var resultList = Db.Database.SqlQuery<Chronic_disease_BloodPressure_Add>(sqlList, sqlparms).ToList();
            return resultList;
        } 
        #endregion
         

        public List<string> GetDiffTimeList(string id)
        {
            string sql = "select distinct convert(char(7),data,20) data from Chronic_disease_BloodPressure_Add where add_id=@id order by data desc";
            SqlParameter[] parms = new SqlParameter[] { new SqlParameter("@id", id) };
           var dateList = Db.Database.SqlQuery<string>(sql, parms).ToList();
           return dateList;
        }
         
        public List<Chronic_disease_BloodPressure_Add> GetYearMonth(string id, string year, string month)
        {
            string sql = "select * from Chronic_disease_BloodPressure_Add where add_id like @id and year(data)=@year and month(data)=@month order by data";
            SqlParameter[] parms = new SqlParameter[] { 
                new SqlParameter("@id", id),
                new SqlParameter("@year",year),
                new SqlParameter("@month",month)
            };
            var list = Db.Database.SqlQuery<Chronic_disease_BloodPressure_Add>(sql, parms).ToList();
            return list;

        }
    }  
}
