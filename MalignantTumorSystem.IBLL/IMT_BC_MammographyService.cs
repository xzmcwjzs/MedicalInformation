using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IMT_BC_MammographyService : IBaseService<MT_BC_Mammography>
    {
        IQueryable<Model.Entities.MT_BC_Mammography> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
