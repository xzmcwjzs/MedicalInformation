using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IMT_BC_TCMTreatmentService : IBaseService<MT_BC_TCMTreatment>
    {
        IQueryable<Model.Entities.MT_BC_TCMTreatment> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
