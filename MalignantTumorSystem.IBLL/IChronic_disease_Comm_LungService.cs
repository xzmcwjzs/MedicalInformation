using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Model.SearchParam;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Comm_LungService : IBaseService<Chronic_disease_Comm_Lung>
    {
        IQueryable<Chronic_disease_Comm_Lung> LoadSearchEntities(CommonParam pam);
    }
}
