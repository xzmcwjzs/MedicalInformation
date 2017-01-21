using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Comm_Testing_UrineService : IBaseService<Chronic_disease_Comm_Testing_Urine>
    {
        IQueryable<Model.Entities.Chronic_disease_Comm_Testing_Urine> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
