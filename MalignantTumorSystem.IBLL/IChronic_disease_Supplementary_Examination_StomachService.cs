using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Supplementary_Examination_StomachService : IBaseService<Chronic_disease_Supplementary_Examination_Stomach>
    {
        IQueryable<Model.Entities.Chronic_disease_Supplementary_Examination_Stomach> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
