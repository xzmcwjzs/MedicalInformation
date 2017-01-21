using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Supplementary_Examination_MRIService : IBaseService<Chronic_disease_Supplementary_Examination_MRI>
    {
        IQueryable<Model.Entities.Chronic_disease_Supplementary_Examination_MRI> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
