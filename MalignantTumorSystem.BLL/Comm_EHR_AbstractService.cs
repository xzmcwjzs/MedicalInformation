using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.BLL
{
    public partial class Comm_EHR_AbstractService : BaseService<Comm_EHR_Abstract>, IComm_EHR_AbstractService
    {

        public bool IsExitsOneByResidentIdAndItemType(string resident_id,string type)
        {
            int count = CurrentDal.LoadEntityAsNoTracking(t => (t.resident_id == resident_id) && (t.item_type == type)).Count();
            if (count == 1)
            {
                return true;
            }
            return false;
        }

    }  
}
