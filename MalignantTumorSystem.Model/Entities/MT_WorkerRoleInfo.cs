using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class MT_WorkerRoleInfo
    {
       public Guid id { get; set; }
       public string worker_id { get; set; }
       public Nullable<int> roleinfo_id { get; set; }
       public string worker_name { get; set; }
       public string comment { get; set; }

       public virtual Comm_Platform_Worker Comm_Platform_Worker { get; set; }
       public virtual MT_RoleInfo MT_RoleInfo { get; set; }
    }
}
