using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IMT_BC_ClinicalExaminationService : IBaseService<MT_BC_ClinicalExamination>
    {
        IQueryable<Model.Entities.MT_BC_ClinicalExamination> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
