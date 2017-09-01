using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IMT_BC_OperativeTreatmentService : IBaseService<MT_BC_OperativeTreatment>
    {
        IQueryable<Model.Entities.MT_BC_OperativeTreatment> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
