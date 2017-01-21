using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Model.SearchParam;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_HospitalizationService : IBaseService<Chronic_disease_Hospitalization>
    {
        IQueryable<Chronic_disease_Hospitalization> LoadSearchEntities(MedicalHistory_HospitalizationParam pam);
    }
}
