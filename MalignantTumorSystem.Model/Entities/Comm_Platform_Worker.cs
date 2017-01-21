using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
   public partial class Comm_Platform_Worker
    {
        public string id { get; set; }
        public string user_name { get; set; }
        public string password { get; set; }
        public string real_name { get; set; }
        public string region_code { get; set; }
        public string company { get; set; }
        public string department { get; set; }
        public string company_code { get; set; }
        public string company_classfy { get; set; }
        public string manager_power { get; set; }
        public string login_power { get; set; }
        public string id_card_number { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string weixin { get; set; }
        public string qq { get; set; }
        public Nullable<System.DateTime> create_time { get; set; }
        public string system_power { get; set; }
        public virtual ICollection<MT_WorkerRoleInfo> MT_WorkerRoleInfo { get; set; }

    }
}
