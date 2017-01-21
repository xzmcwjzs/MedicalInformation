using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Comm_Testing_SCEService : IBaseService<Chronic_disease_Comm_Testing_SCE>
    {
        IQueryable<Model.Entities.Chronic_disease_Comm_Testing_SCE> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
