using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_DailyLifeService : IBaseService<Chronic_disease_DailyLife>
    {
        IQueryable<Model.Entities.Chronic_disease_DailyLife> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
