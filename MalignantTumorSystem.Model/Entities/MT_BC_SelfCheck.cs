using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    [Table("MT_BC_SelfCheck")]
   public class MT_BC_SelfCheck
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
        public DateTime checkdate { get; set; } 
        [MaxLength(50)]
        public string tumor { get; set; }
        [MaxLength(50)]
        public string tumorbreast { get; set; }
        [MaxLength(50)]
        public string thickening { get; set; }
        [MaxLength(50)]
        public string thickeningbreast { get; set; }
        [MaxLength(50)]
        public string symmetric { get; set; }
        [MaxLength(50)]
        public string uplift { get; set; }
        [MaxLength(50)]
        public string skin { get; set; }
        [MaxLength(50)]
        public string invagination { get; set; }
        [MaxLength(50)]
        public string discharge { get; set; }
    }
}
