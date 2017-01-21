using MalignantTumorSystem.DAL.DALFactory;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Model.ViewModel;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks; 

namespace MalignantTumorSystem.BLL
{
     
    public partial class BasicInformationService : IBasicInformationService
    {
        DbContext Db = DbContextFactory.CreateDbContext();

        //多条件搜索
        public IQueryable<BasicInformationViewModel> LoadSearchEntities(Model.SearchParam.BasicInformationParam basicInformationParam)
        {
            var temp = from b in Db.Set<Comm_ResidentFile>()
                       join a in Db.Set<Comm_Tumour>()
                       on b.resident_id equals a.resident_id 
                       select new BasicInformationViewModel
                       {
                           id = a.id,
                           resident_id = a.resident_id,
                           resident_name = b.resident_name,
                           create_time = a.create_time,
                           community_code = b.community_code,
                           worker_user_name = a.worker_user_name,
                           id_card_number = b.id_card_number,
                           birth_date =b.birth_date,
                           permanent_home_address = a.permanent_home_address,
                           last_followup_date =a.last_followup_date,
                           id2 = b.id,
                           sex2 = b.sex,
                           community_code2 = b.community_code,
                           permanent_home_commitcode2 = b.permanent_home_commitcode
                       };
            if (!string.IsNullOrEmpty(basicInformationParam.idCard))
            {
                //身份证号不为空的情况下：只要输入身份证号，其他条件一律过滤掉，只以身份证号为准
                temp = temp.Where(t => t.id_card_number == basicInformationParam.idCard).OrderByDescending(t => t.create_time);
            }
            else
            {
                temp = temp.Where(t=>t.community_code.StartsWith(basicInformationParam.region_code));
                if (!string.IsNullOrEmpty(basicInformationParam.name))
                {
                    temp = temp.Where(t => t.resident_name == basicInformationParam.name);
                }
                if (!string.IsNullOrEmpty(basicInformationParam.sex))
                {
                    temp = temp.Where(t => t.sex2 == basicInformationParam.sex);
                }
                if (!string.IsNullOrEmpty(basicInformationParam.txtBirthDateBegin)&&!string.IsNullOrEmpty(basicInformationParam.txtBirthDateEnd))
                {
                    DateTime birthDateBegin = Convert.ToDateTime(basicInformationParam.txtBirthDateBegin);
                    DateTime birthDateEnd = Convert.ToDateTime(basicInformationParam.txtBirthDateEnd);
                    //temp = temp.Where(t =>(t.birth_date>=Convert.ToDateTime(basicInformationParam.txtBirthDateBegin) && t.birth_date<=Convert.ToDateTime(basicInformationParam.txtBirthDateEnd)));
                    //temp = temp.Where(t=>(string.Compare(basicInformationParam.txtBirthDateBegin,((DateTime)t.birth_date).ToString(),StringComparison.Ordinal)<=0) && (string.Compare(basicInformationParam.txtBirthDateEnd,((DateTime)t.birth_date).ToString(),StringComparison.Ordinal)>=0));
                    //temp = temp.Where(t => DateTime.Compare(birthDateBegin, t.birth_date) <= 0 && DateTime.Compare(birthDateEnd, t.birth_date) >= 0);
                    temp = temp.Where(t => birthDateBegin<=t.birth_date && birthDateEnd>= t.birth_date);
                }
                if (!string.IsNullOrEmpty(basicInformationParam.address))
                {
                    temp = temp.Where(t => t.permanent_home_address.Contains(basicInformationParam.address));
                }
                temp = temp.OrderByDescending(t=>t.create_time);
            }
            basicInformationParam.TotalCount = temp.Count();
            return temp.Skip((basicInformationParam.PageIndex - 1) * basicInformationParam.PageSize).Take(basicInformationParam.PageSize);
        }
    } 
}
