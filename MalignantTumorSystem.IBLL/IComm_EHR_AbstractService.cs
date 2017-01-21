using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IComm_EHR_AbstractService : IBaseService<Comm_EHR_Abstract>
    {
        bool IsExitsOneByResidentIdAndItemType(string resident_id,string type);
    }
}
