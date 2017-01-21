using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.BLL
{
    public partial class Chronic_disease_Comm_Testing_BMCService : BaseService<Chronic_disease_Comm_Testing_BMC>, IChronic_disease_Comm_Testing_BMCService
    {

        public IQueryable<Chronic_disease_Comm_Testing_BMC> LoadSearchEntities(Model.SearchParam.CommonParam parms)
        {
            var temp = CurrentDal.LoadEntityAsNoTracking(t => true);
            if (!string.IsNullOrEmpty(parms.idCard))
            {
                //身份证号不为空的情况下：只要输入身份证号，其他条件一律过滤掉，只以身份证号为准
                temp = temp.Where(t => t.id_card_number == parms.idCard).OrderBy(t => t.create_time);
            }
            else
            {
                temp = temp.Where(t => t.community_code.StartsWith(parms.region_code) && t.type.Contains("Therioma"));
                if (!string.IsNullOrEmpty(parms.name))
                {
                    temp = temp.Where(t => t.names.Contains(parms.name));
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
                    temp = temp.Where(t => t.address.Contains(parms.address));
                }
                temp = temp.OrderByDescending(t => t.create_time);
            }
            parms.TotalCount = temp.Count();
            return temp.Skip((parms.PageIndex - 1) * parms.PageSize).Take(parms.PageSize);
        }
    }  
}
