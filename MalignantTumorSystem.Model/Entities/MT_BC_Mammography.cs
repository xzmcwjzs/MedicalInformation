using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    [Table("MT_BC_Mammography")]
    public class MT_BC_Mammography
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
        public string xxtz { get; set; }
        [MaxLength(50)]
        public string zkdxz { get; set; }
        [MaxLength(50)]
        public string zkdxy { get; set; }
        [MaxLength(50)]
        public string zkxzz { get; set; }
        [MaxLength(50)]
        public string zkxzy { get; set; }
        [MaxLength(50)]
        public string zkbyz { get; set; }
        [MaxLength(50)]
        public string zkbyy { get; set; }
        [MaxLength(50)]
        public string zkmdz { get; set; }
        [MaxLength(50)]
        public string zkmdy { get; set; }
        [MaxLength(50)]
        public string ghdxz { get; set; }
        [MaxLength(50)]
        public string ghdxy { get; set; }
        [MaxLength(50)]
        public string ghsmz { get; set; }
        [MaxLength(50)]
        public string ghsmy { get; set; }
        [MaxLength(50)]
        public string ghxtz { get; set; }
        [MaxLength(50)]
        public string ghxty { get; set; }
        [MaxLength(50)]
        public string ghfbz { get; set; }
        [MaxLength(50)]
        public string ghfby { get; set; }
        [MaxLength(50)]
        public string jgnq { get; set; }
        [MaxLength(50)]
        public string bdczmy { get; set; }
        [MaxLength(50)]
        public string qthbzx { get; set; } 

        [MaxLength(50)]
        public string doctor { get; set; }
        public DateTime? checkdate { get; set; }
    }
}
