using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    [Table("MT_BC_Followup_Dose")]
   public class MT_BC_Followup_Dose
    {
        [Key]
        [Required]
        [MaxLength(50)]
        public string id { get; set; }
        [MaxLength(50)]
        public string bc_followup_id { get; set; }
        [MaxLength(50)]
        public string resident_id { get; set; }
        [MaxLength(50)]
        public string community_code { get; set; }
        [MaxLength(50)]
        public string dose_dependence { get; set; }
        [MaxLength(50)]
        public string drug_name { get; set; }
        [MaxLength(50)]
        public string drug_frequence { get; set; }
        [MaxLength(50)]
        public string dosage_unit { get; set; }
        [MaxLength(50)]
        public string dosage_per_time { get; set; }
        [MaxLength(50)]
        public string dosage_total { get; set; }
        [MaxLength(50)]
        public string medication_approach { get; set; }
        [MaxLength(50)]
        public string has_side_effect { get; set; }
        [MaxLength(100)]
        public string side_effect_description { get; set; } 
        public DateTime? create_time { get; set; }
        [MaxLength(50)]
        public string worker_user_name { get; set; }
        [MaxLength(500)]
        public string other { get; set; }
        [MaxLength(50)]
        public string drug_name1 { get; set; }
        [MaxLength(50)]
        public string drug_frequence1 { get; set; }
        [MaxLength(50)]
        public string dosage_unit1 { get; set; }
        [MaxLength(50)]
        public string dosage_per_time1 { get; set; }
        [MaxLength(50)]
        public string dosage_total1 { get; set; }
        [MaxLength(50)]
        public string medication_approach1 { get; set; }
        [MaxLength(50)]
        public string drug_name2 { get; set; }
        [MaxLength(50)]
        public string drug_frequence2 { get; set; }
        [MaxLength(50)]
        public string dosage_unit2 { get; set; }
        [MaxLength(50)]
        public string dosage_per_time2 { get; set; }
        [MaxLength(50)]
        public string dosage_total2 { get; set; }
        [MaxLength(50)]
        public string medication_approach2 { get; set; }
        [MaxLength(50)]
        public string drug_name3 { get; set; }
        [MaxLength(50)]
        public string drug_frequence3 { get; set; }
        [MaxLength(50)]
        public string dosage_unit3 { get; set; }
        [MaxLength(50)]
        public string dosage_per_time3 { get; set; }
        [MaxLength(50)]
        public string dosage_total3 { get; set; }
        [MaxLength(50)]
        public string medication_approach3 { get; set; }

    }
}
