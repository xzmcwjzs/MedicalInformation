using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    [Table("MT_BC_Followup")]
    public  class MT_BC_Followup
    {
        [Key]
        [Required]
        [MaxLength(50)]
        public string id { get; set; }
        [MaxLength(50)]
        public string bc_id { get; set; }
        [MaxLength(50)]
        public string resident_id { get; set; }
        [MaxLength(50)]
        public string name { get; set; } 
        [MaxLength(50)]
        public string sex { get; set; } 
        [MaxLength(50)]
        public string age { get; set; } 
        [MaxLength(50)]
        public string id_card_number { get; set; }

        public Nullable<System.DateTime> birth_date { get; set; }
        [MaxLength(50)]
        public string community_code { get; set; }
        [MaxLength(200)]
        public string address { get; set; }
        [MaxLength(50)]
        public string phone { get; set; }
        [MaxLength(50)]
        public string zipcode { get; set; }
        [MaxLength(50)]
        public string followup_physician { get; set; }
        [MaxLength(50)]
        public string followup_type { get; set; } 
        public DateTime? followup_date { get; set; }
        [MaxLength(50)]
        public string followup_result { get; set; }
        [MaxLength(50)]
        public string height { get; set; }
        [MaxLength(50)]
        public string weight { get; set; }
        [MaxLength(50)]
        public string height_weight_index { get; set; }
        [MaxLength(50)]
        public string systolic_pressure { get; set; }
        [MaxLength(50)]
        public string diastolic_pressure { get; set; }
        [MaxLength(50)]
        public string dcsc { get; set; }
        [MaxLength(50)]
        public string dpac { get; set; }
        [MaxLength(50)]
        public string food_judge { get; set; }
        [MaxLength(50)]
        public string cycle_suggestion { get; set; }
        [MaxLength(50)]
        public string abidance_result { get; set; } 
        public DateTime? create_time { get; set; }
        [MaxLength(50)]
        public string worker_user_name { get; set; }
        [MaxLength(50)]
        public string worker_user_realname { get; set; }
        public DateTime? finish_time { get; set; }
        [MaxLength(50)]
        public string heart_rate { get; set; }
        [MaxLength(50)]
        public string next_heart_rate { get; set; }
        [MaxLength(50)]
        public string next_weight { get; set; }
        [MaxLength(50)]
        public string signs_other { get; set; }
        [MaxLength(50)]
        public string next_daily_smoke { get; set; }
        [MaxLength(50)]
        public string next_daily_drink { get; set; }
        [MaxLength(50)]
        public string next_salt { get; set; }
        [MaxLength(50)]
        public string sport1 { get; set; }
        [MaxLength(50)]
        public string sport2 { get; set; }
        [MaxLength(50)]
        public string next_sport1 { get; set; }
        [MaxLength(50)]
        public string next_sport2 { get; set; }
        [MaxLength(50)]
        public string xltz { get; set; }
        [MaxLength(50)]
        public string bloodsugar { get; set; }
        [MaxLength(50)]
        public string bloodsugar_other { get; set; }
        [MaxLength(50)]
        public string org { get; set; }
        [MaxLength(50)]
        public string reason { get; set; }
        [MaxLength(50)]
        public string salt { get; set; } 
        public DateTime? next_time { get; set; }
        [MaxLength(50)]
        public string ssy1 { get; set; }
        [MaxLength(50)]
        public string szy1 { get; set; }

        public DateTime? firstsymptomdate { get; set; }
        public DateTime? firstvisitdate { get; set; }
        public DateTime? firstdiagnosisdate { get; set; }
        [MaxLength(50)]
        public string diagnosishospital { get; set; }
        [MaxLength(50)]
        public string diseasename { get; set; }
        [MaxLength(50)]
        public string diagnosisbasis { get; set; }
        [MaxLength(50)]
        public string pathologictype { get; set; }
        [MaxLength(50)]
        public string treatmentsituation { get; set; }
        [MaxLength(50)]
        public string complication { get; set; }
        [MaxLength(50)]
        public string treatmenthospital { get; set; }
        [MaxLength(50)]
        public string treatment { get; set; }
        [MaxLength(50)]
        public string treatmentother { get; set; }
        [MaxLength(50)]
        public string firstoperationhospital { get; set; } 
        public DateTime? firstoperationdate { get; set; }
        [MaxLength(50)]
        public string firstoperationnature { get; set; }
        [MaxLength(50)]
        public string transfer { get; set; }
        [MaxLength(50)]
        public string transferposition { get; set; }
        [MaxLength(50)]
        public string recrudescence { get; set; } 
        public DateTime? recrudescencedate { get; set; }
        [MaxLength(50)]
        public string tumorhistory { get; set; }
        [MaxLength(50)]
        public string tumorhistoryrelation { get; set; }
        [MaxLength(50)]
        public string tumorhistorytype { get; set; }
        [MaxLength(50)]
        public string tumorhistorytypeother { get; set; }
        [MaxLength(50)]
        public string correctdiagnosis { get; set; }
        [MaxLength(50)]
        public string correctdiagnosissite { get; set; }
        public DateTime? correctdiagnosisdate { get; set; }
        [MaxLength(50)]
        public string presentsituation { get; set; }
        [MaxLength(50)]
        public string guidecontent { get; set; }
        [MaxLength(50)]
        public string cardscore { get; set; } 
        public DateTime? revokemanagedate { get; set; }
        [MaxLength(50)]
        public string revokereason { get; set; }
        [MaxLength(50)]
        public string isdeath { get; set; } 
        public DateTime? deathdate { get; set; }
        [MaxLength(50)]
        public string deathreason { get; set; }
        [MaxLength(50)]
        public string deathsite { get; set; }
        [MaxLength(50)]
        public string surviveyear { get; set; }
        [MaxLength(50)]
        public string survivemonth { get; set; }

    }
}
