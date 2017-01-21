using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_SmokeAndDrinkService : IBaseService<Chronic_disease_SmokeAndDrink>
    {
        IQueryable<Model.Entities.Chronic_disease_SmokeAndDrink> LoadSearchEntities(Model.SearchParam.CommonParam commonParam);
    }
}
