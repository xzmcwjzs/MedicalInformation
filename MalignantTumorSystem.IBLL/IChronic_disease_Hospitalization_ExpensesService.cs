using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Model.SearchParam;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Hospitalization_ExpensesService :IBaseService<Chronic_disease_Hospitalization_Expenses>
    {
        IQueryable<Chronic_disease_Hospitalization_Expenses> LoadSearchEntities(MedicalHistory_HospitalizationParam pam);
    }
}
