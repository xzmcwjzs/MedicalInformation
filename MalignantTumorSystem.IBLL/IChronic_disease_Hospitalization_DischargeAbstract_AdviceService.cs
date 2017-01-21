using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Hospitalization_DischargeAbstract_AdviceService :IBaseService<Chronic_disease_Hospitalization_DischargeAbstract_Advice>
    {
        bool UpdateSubjective(List<Chronic_disease_Hospitalization_DischargeAbstract_Advice> subjectiveList, string id);
    }
}
