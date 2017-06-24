using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    [Table("MT_BC_21Genes")]
    public class MT_BC_21Genes
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
        public string Ki67 { get; set; }
        [MaxLength(50)]
        public string STK15 { get; set; }
        [MaxLength(50)]
        public string Survivin { get; set; }
        [MaxLength(50)]
        public string CyclinB1 { get; set; }
        [MaxLength(50)]
        public string MYBL2 { get; set; }
        [MaxLength(50)]
        public string Stromolysin { get; set; }
        [MaxLength(50)]
        public string Cathepsin { get; set; }
        [MaxLength(50)]
        public string GBR7 { get; set; }
        [MaxLength(50)]
        public string HER2 { get; set; }
        [MaxLength(50)]
        public string ER { get; set; }
        [MaxLength(50)]
        public string PR { get; set; }
        [MaxLength(50)]
        public string BCL { get; set; }
        [MaxLength(50)]
        public string SCUBE { get; set; }
        [MaxLength(50)]
        public string GSTM1 { get; set; }
        [MaxLength(50)]
        public string CD68 { get; set; }
        [MaxLength(50)]
        public string BAG1 { get; set; }
        [MaxLength(50)]
        public string actin { get; set; }
        [MaxLength(50)]
        public string RPLPO { get; set; }
        [MaxLength(50)]
        public string GUS { get; set; }
        [MaxLength(50)]
        public string TFRC { get; set; }
        [MaxLength(50)]
        public string GAPDH { get; set; }
        [MaxLength(50)]
        public string RS { get; set; }
        [MaxLength(100)]
        public string advice { get; set; }


        [MaxLength(50)]
        public string doctor { get; set; }
        public DateTime? checkdate { get; set; }
    }
}
