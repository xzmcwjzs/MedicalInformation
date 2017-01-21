using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class MT_RoleInfo
    {
       public int id { get; set; }
       public string role { get; set; }
       public string role_name { get; set; }
       public string comment { get; set; }
       public string image_name { get; set; }
        //疾病拼音首字母
       public string first_letter { get; set; }
       public virtual ICollection<MT_WorkerRoleInfo> MT_WorkerRoleInfo { get; set; }
    }
}
