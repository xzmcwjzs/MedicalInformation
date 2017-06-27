using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Model.SearchParam;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IMT_BC_FollowupService : IBaseService<MT_BC_Followup>
    {
        IQueryable<MT_BC_Followup> LoadSearchEntities(FollowupParam pam);

        int GetBreastCancerFollowupAlertCount(string regionCode);
        int GetBreastCancerFollowupExpireCount(string regionCode);
        
    }
}
