using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    [Table("MT_BC_Ultrasonography")]
   public class MT_BC_Ultrasonography
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
        public string syz { get; set; }
        [MaxLength(50)]
        public string syzqt { get; set; }
        [MaxLength(1000)]
        public string jcbw { get; set; }
        [MaxLength(1000)]
        public string lcbx { get; set; }
        [MaxLength(1000)]
        public string csbx { get; set; }
        [MaxLength(1000)]
        public string jczd { get; set; }
        [MaxLength(1000)]
        public string ysjy { get; set; }
         
        [MaxLength(50)]
        public string doctor { get; set; }
        public DateTime? checkdate { get; set; }
    }
}
