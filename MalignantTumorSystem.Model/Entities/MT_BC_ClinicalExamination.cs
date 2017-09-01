using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    [Table("MT_BC_ClinicalExamination")]
  public  class MT_BC_ClinicalExamination
    {
        [Key]
        [Required]
        [MaxLength(50)]
        public string id { get; set; }
        [Required]
        [MaxLength(50)]
        public string resident_id { get; set; }
        [Required]
        [MaxLength(50)]
        public string name { get; set; }
        [Required]
        [MaxLength(50)]
        public string sex { get; set; }
        [Required]
        [MaxLength(50)]
        public string age { get; set; }
        [Required]
        [MaxLength(50)]
        public string id_card_number { get; set; }
        public Nullable<System.DateTime> birth_date { get; set; }
        [Required]
        [MaxLength(50)]
        public string community_code { get; set; }
        [MaxLength(200)]
        public string address { get; set; }
        [Required]
        [MaxLength(50)]
        public string phone { get; set; }
        public Nullable<System.DateTime> create_time { get; set; }
        [Required]
        [MaxLength(50)]
        public string worker_user_name { get; set; }
        [Required]
        [MaxLength(50)]
        public string worker_user_realname { get; set; }
        [MaxLength(50)]
        public string tumorsizeleft { get; set; }
        [MaxLength(50)]
        public string tumorsizeright { get; set; }
        [MaxLength(50)]
        public string tumorpositionleft { get; set; }
        [MaxLength(50)]
        public string tumorpositionright { get; set; }
        [MaxLength(50)]
        public string tumorshapeleft { get; set; }
        [MaxLength(50)]
        public string tumorshaperight { get; set; }
        [MaxLength(50)]
        public string tumorqualityleft { get; set; }
        [MaxLength(50)]
        public string tumorqualityright { get; set; }
        [MaxLength(50)]
        public string tumorborderleft { get; set; }
        [MaxLength(50)]
        public string tumorborderright { get; set; }
        [MaxLength(50)]
        public string tumoractivityleft { get; set; }
        [MaxLength(50)]
        public string tumoractivityright { get; set; }
        [MaxLength(50)]
        public string dischargeleft { get; set; }
        [MaxLength(50)]
        public string dischargeright { get; set; }
        [MaxLength(50)]
        public string papillaleft { get; set; }
        [MaxLength(50)]
        public string papillaright { get; set; }
        [MaxLength(50)]
        public string skinleft { get; set; }
        [MaxLength(50)]
        public string skinright { get; set; }
        [MaxLength(50)]
        public string ylymphright { get; set; }
        [MaxLength(50)]
        public string ylymphleft { get; set; }
        [MaxLength(50)]
        public string sglymphleft { get; set; }
        [MaxLength(50)]
        public string sglymphright { get; set; }
        [MaxLength(50)]
        public string isre_examine { get; set; }
        [MaxLength(50)]
        public string firstresult { get; set; }
        [MaxLength(1000)]
        public string comment { get; set; }
        [MaxLength(50)]
        public string doctor { get; set; } 
        public DateTime? checkdate { get; set; }


    }
}
