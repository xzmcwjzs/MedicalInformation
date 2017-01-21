using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Comm_Testing_SputumService :IBaseService<Chronic_disease_Comm_Testing_Sputum>
    {
        IQueryable<Model.Entities.Chronic_disease_Comm_Testing_Sputum> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
