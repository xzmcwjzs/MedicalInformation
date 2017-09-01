using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IMT_BC_EndocrinotherapyService : IBaseService<MT_BC_Endocrinotherapy>
    {
        IQueryable<Model.Entities.MT_BC_Endocrinotherapy> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
