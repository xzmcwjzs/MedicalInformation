using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_Hospitalization
    {
        public string id { get; set; }
        public string resident_id { get; set; }
        public string name { get; set; }
        public string sex { get; set; }
        public string id_card_number { get; set; }
        public Nullable<System.DateTime> birth_date { get; set; }
        public string community_code { get; set; }
        public string nationality { get; set; }
        public string nation { get; set; }
        public string marriage { get; set; }
        public string culture { get; set; }
        public string blood_group { get; set; }
        public string permanent_home_commitcode { get; set; }
        public string permanent_address { get; set; }
        public string post_code { get; set; }
        public string phone { get; set; }
        public string email { get; set; }
        public string contact_person { get; set; }
        public string contact_phone { get; set; }
        public string relationship { get; set; }
        public Nullable<System.DateTime> hospitalization_date { get; set; }
        public string hospitalization_number { get; set; }
        public string bed_number { get; set; }
        public string hospital { get; set; }
        public string department { get; set; }
        public string zs { get; set; }
        public string xbs { get; set; }
        public string jws { get; set; }
        public string t { get; set; }
        public string p { get; set; }
        public string r { get; set; }
        public string ssy1 { get; set; }
        public string szy1 { get; set; }
        public string ssy2 { get; set; }
        public string szy2 { get; set; }
        public string other { get; set; }
        public string type { get; set; }
        public string worker_user_name { get; set; }
        public Nullable<System.DateTime> create_time { get; set; }
        public string sign { get; set; }
    }
}
