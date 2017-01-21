using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
   public partial class Comm_Tumour
    {
        public string id { get; set; }
        public string tumour_type { get; set; }
        public string is_tell_iller { get; set; }
        public string tumour_class { get; set; }
        public string responsible_physician { get; set; }
        public string pathology_id { get; set; }
        public string tumour_tnm_staging { get; set; }
        public string tumour_clinic_staging { get; set; }
        public Nullable<System.DateTime> first_diagnose_time { get; set; }
        public Nullable<System.DateTime> sure_diagnose_time { get; set; }
        public string diagnose_dependence { get; set; }
        public string tumour_diagnose_studio { get; set; }
        public string report_doctor { get; set; }
        public string record_department { get; set; }
        public string family_tumour_history { get; set; }
        public string relationship_of_sufferer { get; set; }
        public string family_tumour_type { get; set; }
        public Nullable<System.DateTime> record_time { get; set; }
        public System.DateTime create_time { get; set; }
        public string resident_id { get; set; }
        public string community_code { get; set; }
        public string worker_user_name { get; set; }
        public string resident_name { get; set; }
        public string id_card_number { get; set; }
        public Nullable<System.DateTime> birth_date { get; set; }
        public string permanent_home_address { get; set; }
        public Nullable<System.DateTime> last_followup_date { get; set; }
        public string last_cycle_suggestion { get; set; }
    }
}
