using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IComm_TumourService : IBaseService<Comm_Tumour>
    {
        int GetBreastCancerFollowupAlertCount(string regionCode);
        int GetBreastCancerFollowupExpireCount(string regionCode);
    }
}
