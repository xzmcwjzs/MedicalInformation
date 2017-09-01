using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IMT_BC_UltrasonographyService : IBaseService<MT_BC_Ultrasonography>
    {
        IQueryable<Model.Entities.MT_BC_Ultrasonography> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
