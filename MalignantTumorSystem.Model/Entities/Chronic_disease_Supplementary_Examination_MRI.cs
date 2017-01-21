using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_Supplementary_Examination_MRI
    {
        public string id { get; set; }
        public string names { get; set; }
        public string sex { get; set; }
        public string age { get; set; }
        public string id_card_number { get; set; }
        public string address { get; set; }
        public string phone { get; set; }
        public string check_project { get; set; }
        public string inspect_doctor { get; set; }
        public string check_doctor { get; set; }
        public string report_doctor { get; set; }
        public string check_position { get; set; }
        public string check_view { get; set; }
        public string check_img1 { get; set; }
        public string check_judge { get; set; }
        public string doctor_suggest { get; set; }
        public Nullable<System.DateTime> inspect_time { get; set; }
        public Nullable<System.DateTime> report_time { get; set; }
        public string check_img2 { get; set; }
        public string check_img3 { get; set; }
        public string check_img4 { get; set; }
        public Nullable<System.DateTime> create_time { get; set; }
        public string type { get; set; }
        public string doctor { get; set; }
        public string community_code { get; set; }
        public string resident_id { get; set; }
        public string permanent_home_commitcode { get; set; }
        public Nullable<System.DateTime> birth_date { get; set; }
    }
}
