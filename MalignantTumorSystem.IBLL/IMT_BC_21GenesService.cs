using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IMT_BC_21GenesService : IBaseService<MT_BC_21Genes>
    {
        IQueryable<Model.Entities.MT_BC_21Genes> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
