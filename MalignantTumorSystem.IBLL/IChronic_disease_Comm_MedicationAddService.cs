using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Comm_MedicationAddService : IBaseService<Chronic_disease_Comm_MedicationAdd>
    {
        bool UpdateSubjective(List<Chronic_disease_Comm_MedicationAdd> subjectiveList, string resident_id);
    }
}
