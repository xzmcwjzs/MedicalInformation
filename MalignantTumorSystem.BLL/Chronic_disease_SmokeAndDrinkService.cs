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
    public partial class Chronic_disease_SmokeAndDrinkService : BaseService<Chronic_disease_SmokeAndDrink>, IChronic_disease_SmokeAndDrinkService
    {
        DbContext Db = DAL.DALFactory.DbContextFactory.CreateDbContext();
        //分页 多条件搜索
        public IQueryable<Chronic_disease_SmokeAndDrink> LoadSearchEntities(Model.SearchParam.CommonParam commonParam)
        {
            var temp = CurrentDal.LoadEntityAsNoTracking(t => true);
            if (!string.IsNullOrEmpty(commonParam.idCard))
            {
                //身份证号不为空的情况下：只要输入身份证号，其他条件一律过滤掉，只以身份证号为准
                temp = temp.Where(t => t.id_card_number == commonParam.idCard).OrderByDescending(t => t.create_time);
            }
            else
            {
                temp = temp.Where(t => t.community_code.StartsWith(commonParam.region_code));
                if (!string.IsNullOrEmpty(commonParam.name))
                {
                    temp = temp.Where(t => t.name.Contains(commonParam.name));
                }
                if (!string.IsNullOrEmpty(commonParam.sex))
                {
                    temp = temp.Where(t => t.sex == commonParam.sex);
                }
                if (!string.IsNullOrEmpty(commonParam.txtBirthDateBegin) && !string.IsNullOrEmpty(commonParam.txtBirthDateEnd))
                {
                    DateTime birthDateBegin = Convert.ToDateTime(commonParam.txtBirthDateBegin);
                    DateTime birthDateEnd = Convert.ToDateTime(commonParam.txtBirthDateEnd);
                    temp = temp.Where(t => birthDateBegin <= t.birth_date && birthDateEnd >= t.birth_date);
                }
                if (!string.IsNullOrEmpty(commonParam.address))
                {
                    temp = temp.Where(t => t.permanent_address.Contains(commonParam.address));
                }
                temp = temp.OrderByDescending(t => t.create_time);
            }
            commonParam.TotalCount = temp.Count();
            return temp.Skip((commonParam.PageIndex - 1) * commonParam.PageSize).Take(commonParam.PageSize);
        }
    }  
}
