using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IMT_BC_QOLService : IBaseService<MT_BC_QOL>
    {
        IQueryable<Model.Entities.MT_BC_QOL> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
