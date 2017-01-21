using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Model.SearchParam;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_BloodGlucoseService : IBaseService<Chronic_disease_BloodGlucose>
    {
        IQueryable<Chronic_disease_BloodGlucose> LoadSearchEntities(CommonParam pam);
    }
}
