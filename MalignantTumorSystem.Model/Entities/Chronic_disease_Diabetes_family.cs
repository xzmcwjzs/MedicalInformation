using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_Diabetes_family
    {
        public string id { get; set; }
        public string host_name { get; set; }
        public string sex { get; set; }
        public string age { get; set; }
        public string id_card_number { get; set; }
        public string address { get; set; }
        public string phone { get; set; }
        public string spouse_name { get; set; }
        public string spouse_id_card_number { get; set; }
        public string spouse_phone { get; set; }
        public Nullable<System.DateTime> spouse_birth_date { get; set; }
        public string hostFather_name { get; set; }
        public string hostFather_id_card_number { get; set; }
        public string hostFather_phone { get; set; }
        public Nullable<System.DateTime> hostFather_birth_date { get; set; }
        public string hostMother_name { get; set; }
        public string hostMother_id_card_number { get; set; }
        public string hostMother_phone { get; set; }
        public Nullable<System.DateTime> hostMother_birth_date { get; set; }
        public string relation { get; set; }
        public string relation_name { get; set; }
        public string relation_id_card { get; set; }
        public string relation_phone { get; set; }
        public Nullable<System.DateTime> relation_birth_date { get; set; }
        public Nullable<System.DateTime> create_time { get; set; }
        public string chronic_disease_type { get; set; }
        public string community_code { get; set; }
        public string worker_user_name { get; set; }
        public string resident_id { get; set; }
        public Nullable<System.DateTime> birth_date { get; set; }
        public string perment_community_code { get; set; }
        public string post_code { get; set; }
    }
}

