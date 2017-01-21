using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.ViewModel
{
   public class BasicInformationViewModel
    {
        
        public string id { get; set; } //Comm_Tumour
        public System.DateTime create_time { get; set; }
        public string resident_id { get; set; }
        public string community_code { get; set; }
        public string worker_user_name { get; set; }
        public string resident_name { get; set; }
        public string id_card_number { get; set; }
        public Nullable<System.DateTime> birth_date { get; set; }
        public string permanent_home_address { get; set; }
        public Nullable<System.DateTime> last_followup_date { get; set; } 
        public string id2 { get; set; }//Comm_ResidentFile
        public string sex2 { get; set; }
        public string community_code2 { get; set; }
        public string permanent_home_commitcode2 { get; set; }
        
    }
}
