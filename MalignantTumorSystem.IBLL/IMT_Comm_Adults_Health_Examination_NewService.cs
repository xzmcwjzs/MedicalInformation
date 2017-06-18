using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
  public partial  interface IMT_Comm_Adults_Health_Examination_NewService : IBaseService<MT_Comm_Adults_Health_Examination_New>
    {
        IQueryable<Model.Entities.MT_Comm_Adults_Health_Examination_New> LoadSearchEntities(Model.SearchParam.CommonParam parms);
    }
}
