using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Model.SearchParam;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Hospitalization_DischargeAbstractService :IBaseService<Chronic_disease_Hospitalization_DischargeAbstract>
    {
        IQueryable<Chronic_disease_Hospitalization_DischargeAbstract> LoadSearchEntities(MedicalHistory_HospitalizationParam pam);
    }
}
