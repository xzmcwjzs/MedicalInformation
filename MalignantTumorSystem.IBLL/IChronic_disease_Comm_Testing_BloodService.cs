using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Comm_Testing_BloodService : IBaseService<Chronic_disease_Comm_Testing_Blood>
    {
        IQueryable<Model.Entities.Chronic_disease_Comm_Testing_Blood> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
