using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Comm_MedicationService : IBaseService<Chronic_disease_Comm_Medication>
    {
        IQueryable<Model.Entities.Chronic_disease_Comm_Medication> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
