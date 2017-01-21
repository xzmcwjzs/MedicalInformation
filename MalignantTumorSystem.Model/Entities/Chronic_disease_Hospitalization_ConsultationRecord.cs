using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_Hospitalization_ConsultationRecord
    {
        public string id { get; set; }
        public string resident_id { get; set; }
        public string name { get; set; }
        public string sex { get; set; }
        public string id_card_number { get; set; }
        public Nullable<System.DateTime> birth_date { get; set; }
        public string community_code { get; set; }
        public string permanent_address { get; set; }
        public string phone { get; set; }
        public Nullable<System.DateTime> hospitalization_date { get; set; }
        public string hospitalization_number { get; set; }
        public string bed_number { get; set; }
        public string hospital { get; set; }
        public string department { get; set; }
        public Nullable<System.DateTime> time { get; set; }
        public string context { get; set; }
        public string type { get; set; }
        public string worker_user_name { get; set; }
        public Nullable<System.DateTime> create_time { get; set; }
        public string sign { get; set; }
    }
}
