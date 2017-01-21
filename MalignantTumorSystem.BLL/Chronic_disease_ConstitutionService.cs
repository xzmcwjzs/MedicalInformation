using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.BLL
{
    public partial class Chronic_disease_ConstitutionService : BaseService<Chronic_disease_Constitution>,IChronic_disease_ConstitutionService
    {
        DbContext Db = DAL.DALFactory.DbContextFactory.CreateDbContext();
        public IQueryable<Model.ViewModel.BasicAndConstitutionViewModel> LoadSearchEntities(Model.SearchParam.CommonParam pam)
        {
            int start = (pam.PageIndex - 1) * pam.PageSize + 1;
            int end = pam.PageSize * pam.PageIndex;
            string sql = "select * from (select a.id aid, b.id bid,a.id_card_number,a.community_code,a.resident_name,a.sex,a.birth_date,a.permanent_home_address,b.resident_id,b.result,b.create_time,ROW_NUMBER() over (order by b.create_time) as num from Comm_ResidentFile a left join Chronic_disease_Constitution b on a.resident_id=b.resident_id where b.create_time in (select MAX(create_time) from Chronic_disease_Constitution group by resident_id)";

            if (!string.IsNullOrEmpty(pam.idCard))
            {
                //身份证号不为空的情况下：只要输入身份证号，其他条件一律过滤掉，只以身份证号为准
                sql += "and a.id_card_number like '%" + pam.idCard + "%'";
                sql += ")as t where t.num>=" + start + " and t.num<=" + end + "";
            }
            else
            {
                sql += "and a.community_code like '%" + pam.region_code + "%'";
                if (!string.IsNullOrEmpty(pam.name))
                {
                    sql += "and a.resident_name like '%" + pam.name + "%'";
                }
                if (!string.IsNullOrEmpty(pam.sex))
                {
                    sql += "and a.sex like '%" + pam.sex + "%'";
                }
                if (!string.IsNullOrEmpty(pam.txtBirthDateBegin) && !string.IsNullOrEmpty(pam.txtBirthDateEnd))
                {
                    DateTime birthDateBegin = Convert.ToDateTime(pam.txtBirthDateBegin);
                    DateTime birthDateEnd = Convert.ToDateTime(pam.txtBirthDateEnd);
                    sql += "and a.birth_date between '" + birthDateBegin + "' and '" + birthDateEnd + "'";
                }
                if (!string.IsNullOrEmpty(pam.address))
                {
                    sql += "and a.permanent_home_address like '%" + pam.address + "%'";
                } 
                sql += ")as t where t.num>=" + start + " and t.num<=" + end + "";

            }
            string sql2 = "select count(*) from  Chronic_disease_Constitution where create_time in (select  MAX(create_time) from Chronic_disease_Constitution group by resident_id)";
            var totalCount = Db.Database.SqlQuery<int>(sql2).FirstOrDefault();
            pam.TotalCount = totalCount;
            var temp = Db.Database.SqlQuery<Model.ViewModel.BasicAndConstitutionViewModel>(sql).AsQueryable();
            return temp;
        }

    }  
}
