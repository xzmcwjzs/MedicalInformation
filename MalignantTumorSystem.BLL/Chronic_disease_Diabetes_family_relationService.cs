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
    public partial class Chronic_disease_Diabetes_family_relationService : BaseService<Chronic_disease_Diabetes_family_relation>, IChronic_disease_Diabetes_family_relationService
    {
        DbContext Db = DbContextFactory.CreateDbContext();
        public bool UpdateSubjective(List<Chronic_disease_Diabetes_family_relation> subjectiveList, string relation_id)
        {
            int count = CurrentDal.LoadEntities(t => t.relation_id == relation_id).Count();
            if (count > 0)
            {
                CurrentDal.DeleteByLambda(t => t.relation_id == relation_id);
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
