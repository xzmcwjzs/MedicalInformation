using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Outpatient_PrescriptionService : IBaseService<Chronic_disease_Outpatient_Prescription>
    {
        bool UpdateSubjective(List<Chronic_disease_Outpatient_Prescription> subjectiveList, string resident_id);
    }
}
