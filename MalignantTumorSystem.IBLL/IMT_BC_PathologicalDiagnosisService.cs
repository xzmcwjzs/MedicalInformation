using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IMT_BC_PathologicalDiagnosisService : IBaseService<MT_BC_PathologicalDiagnosis>
    {
        IQueryable<Model.Entities.MT_BC_PathologicalDiagnosis> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
