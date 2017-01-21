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
    public partial class Comm_ResidentFile_Followup_SurgeryService : BaseService<Comm_ResidentFile_Followup_Surgery>, IComm_ResidentFile_Followup_SurgeryService
    {
        DbContext Db = DbContextFactory.CreateDbContext();
         
        public bool UpdateSubjective(List<Comm_ResidentFile_Followup_Surgery> subjectiveList, string resident_id)
        {
            int count = CurrentDal.LoadEntities(t=>t.resident_id==resident_id).Count();
            if (count > 0)
            {
                CurrentDal.DeleteByLambda(t => t.resident_id == resident_id);
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
