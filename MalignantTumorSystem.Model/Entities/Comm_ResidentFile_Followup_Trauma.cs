using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
  public partial  class Comm_ResidentFile_Followup_Trauma
    {
        public  string id { get; set; }

        public  string resident_file_id { get; set; }

        public  string family_id { get; set; }

        public  string resident_id { get; set; }

        public  string community_code { get; set; }

        public  DateTime? create_time { get; set; }

        public  string worker_user_name { get; set; }

        public  DateTime? find_date { get; set; }

        public  string trauma_name { get; set; }

        public  string trauma_name_ICD { get; set; }
        public string trauma_hospital { get; set; }
        public string trauma_result { get; set; }
    }
}
