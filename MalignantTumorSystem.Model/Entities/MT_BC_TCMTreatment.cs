using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    [Table("MT_BC_TCMTreatment")]
    public class MT_BC_TCMTreatment
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
        public string zl { get; set; }
        [MaxLength(100)]
        public string zl1jj { get; set; }
        [MaxLength(100)]
        public string zl2jj { get; set; }
        [MaxLength(100)]
        public string zl3jj { get; set; }
        [MaxLength(100)]
        public string zl4jj { get; set; }
        [MaxLength(100)]
        public string zl5jj { get; set; }
        [MaxLength(100)]
        public string zl6jj { get; set; }
        [MaxLength(100)]
        public string zl7jj { get; set; }
        [MaxLength(100)]
        public string zl8jj { get; set; }
        [MaxLength(100)]
        public string zl9jj { get; set; }
        [MaxLength(100)]
        public string zl10jj { get; set; }
        [MaxLength(100)]
        public string zl11jj { get; set; }
        [MaxLength(100)]
        public string zl12jj { get; set; }
        [MaxLength(50)]
        public string wyy { get; set; }
        [MaxLength(500)]
        public string zl13jj { get; set; } 

        [MaxLength(50)]
        public string doctor { get; set; }
        public DateTime? checkdate { get; set; }
    }
}
