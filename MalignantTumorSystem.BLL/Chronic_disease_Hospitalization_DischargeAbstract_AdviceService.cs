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
    public partial class Chronic_disease_Hospitalization_DischargeAbstract_AdviceService : BaseService<Chronic_disease_Hospitalization_DischargeAbstract_Advice>,IChronic_disease_Hospitalization_DischargeAbstract_AdviceService
    {
        DbContext Db = DAL.DALFactory.DbContextFactory.CreateDbContext();
        public bool UpdateSubjective(List<Chronic_disease_Hospitalization_DischargeAbstract_Advice> subjectiveList, string id)
        {
            int count = CurrentDal.LoadEntities(t => t.advice_id == id).Count();
            if (count > 0)
            {
                CurrentDal.DeleteByLambda(t => t.advice_id == id);
                if (!(Db.SaveChanges() > 0))
                {
                    return false;
                }
            }
            if (subjectiveList.Count() != 0)
            {
                CurrentDal.AddAllEntity(subjectiveList);
                if (!(Db.SaveChanges() > 0))
                {
                    return false;
                }
            }
            return true;
        }
    }  
}
