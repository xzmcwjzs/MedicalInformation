using MalignantTumorSystem.DAL.DALFactory;
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
    public partial class Chronic_disease_DailyLifeService : BaseService<Chronic_disease_DailyLife>, IChronic_disease_DailyLifeService
    {
        DbContext Db = DbContextFactory.CreateDbContext();
        //多条件分页查询 
        public IQueryable<Chronic_disease_DailyLife> LoadSearchEntities(Model.SearchParam.CommonParam parms)
        {
            var temp = CurrentDal.LoadEntityAsNoTracking(t => true);
            if (!string.IsNullOrEmpty(parms.idCard))
            {
                //身份证号不为空的情况下：只要输入身份证号，其他条件一律过滤掉，只以身份证号为准
                temp = temp.Where(t => t.id_card_number == parms.idCard).OrderBy(t => t.create_time);
            }
            else
            {
                temp = temp.Where(t => t.community_code.StartsWith(parms.region_code));
                if (!string.IsNullOrEmpty(parms.name))
                {
                    temp = temp.Where(t => t.name.Contains(parms.name));
                }
                if (!string.IsNullOrEmpty(parms.sex))
                {
                    temp = temp.Where(t => t.sex == parms.sex);
                }
                if (!string.IsNullOrEmpty(parms.txtBirthDateBegin) && !string.IsNullOrEmpty(parms.txtBirthDateEnd))
                {
                    DateTime birthDateBegin = Convert.ToDateTime(parms.txtBirthDateBegin);
                    DateTime birthDateEnd = Convert.ToDateTime(parms.txtBirthDateEnd);
                    temp = temp.Where(t => (birthDateBegin <= t.birth_date) && (birthDateEnd >= t.birth_date));
                }
                if (!string.IsNullOrEmpty(parms.address))
                {
                    temp = temp.Where(t => t.permanent_address.Contains(parms.address));
                }
                temp = temp.OrderByDescending(t => t.create_time);
            }
            parms.TotalCount = temp.Count();
            return temp.Skip((parms.PageIndex - 1) * parms.PageSize).Take(parms.PageSize);
        }
    }  
}
