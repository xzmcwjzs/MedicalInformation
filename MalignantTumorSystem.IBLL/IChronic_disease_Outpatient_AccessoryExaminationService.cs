using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Outpatient_AccessoryExaminationService : IBaseService<Chronic_disease_Outpatient_AccessoryExamination>
    {
        bool UpdateSubjective(List<Chronic_disease_Outpatient_AccessoryExamination> subjectiveList, string resident_id);
    }
}
