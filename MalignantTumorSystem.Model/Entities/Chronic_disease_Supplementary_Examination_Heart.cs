using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_Supplementary_Examination_Heart
    {
        public string id { get; set; }
        public string name { get; set; }
        public string id_card_number { get; set; }
        public string sex { get; set; }
        public string age { get; set; }
        public string address { get; set; }
        public string phone { get; set; }
        public string record { get; set; }
        public string check_position { get; set; }
        public string inspect_doctor { get; set; }
        public string check_doctor { get; set; }
        public string report_doctor { get; set; }
        public string xinjie_rhythm { get; set; }
        public string xinfang_rhythm { get; set; }
        public string xinshi_rhythm { get; set; }
        public string xindianzhou { get; set; }
        public string p_r { get; set; }
        public string qrs_limit { get; set; }
        public string q_t { get; set; }
        public string limit { get; set; }
        public string p { get; set; }
        public string qrs { get; set; }
        public string st { get; set; }
        public string t { get; set; }
        public string suggest { get; set; }
        public Nullable<System.DateTime> inspect_time { get; set; }
        public Nullable<System.DateTime> report_time { get; set; }
        public Nullable<System.DateTime> create_time { get; set; }
        public string check_img1 { get; set; }
        public string check_img2 { get; set; }
        public string check_img3 { get; set; }
        public string check_img4 { get; set; }
        public string type { get; set; }
        public string doctor { get; set; }
        public string community_code { get; set; }
        public string resident_id { get; set; }
        public string permanent_home_commitcode { get; set; }
        public Nullable<System.DateTime> birth_date { get; set; }
    }
}
