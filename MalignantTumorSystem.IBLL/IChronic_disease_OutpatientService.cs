using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Model.SearchParam;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_OutpatientService : IBaseService<Chronic_disease_Outpatient>
    {
        IQueryable<Chronic_disease_Outpatient> LoadSearchEntities(MedicalHistory_OutpatientParam pam);
    }
}
