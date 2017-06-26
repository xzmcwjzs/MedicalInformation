using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    [Table("MT_BC_QOL")]
    public class MT_BC_QOL
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
        public string q1 { get; set; }
        [MaxLength(50)]
        public string q2 { get; set; }
        [MaxLength(50)]
        public string q3 { get; set; }
        [MaxLength(50)]
        public string q4 { get; set; }
        [MaxLength(50)]
        public string q5 { get; set; }
        [MaxLength(50)]
        public string q6 { get; set; }
        [MaxLength(50)]
        public string q7 { get; set; }
        [MaxLength(50)]
        public string q8 { get; set; }
        [MaxLength(50)]
        public string q9 { get; set; }
        [MaxLength(50)]
        public string q10 { get; set; }
        [MaxLength(50)]
        public string q11 { get; set; }
        [MaxLength(50)]
        public string q12 { get; set; }
        [MaxLength(50)]
        public string q13 { get; set; }
        [MaxLength(50)]
        public string q14 { get; set; }
        [MaxLength(50)]
        public string q15 { get; set; }
        [MaxLength(50)]
        public string q16 { get; set; }
        [MaxLength(50)]
        public string q17 { get; set; }
        [MaxLength(50)]
        public string q18 { get; set; }
        [MaxLength(50)]
        public string q19 { get; set; }
        [MaxLength(50)]
        public string q20 { get; set; }
        [MaxLength(50)]
        public string q21 { get; set; }
        [MaxLength(50)]
        public string q22 { get; set; }
        [MaxLength(50)]
        public string q23{ get; set; }
        [MaxLength(50)]
        public string q24{ get; set; }
        [MaxLength(50)]
        public string q25 { get; set; }
        [MaxLength(50)]
        public string q26 { get; set; }
        [MaxLength(50)]
        public string q27 { get; set; }
        [MaxLength(50)]
        public string q28 { get; set; }
        [MaxLength(50)]
        public string q29 { get; set; }
        [MaxLength(50)]
        public string q30 { get; set; }


        [MaxLength(50)]
        public string rs1 { get; set; }
        [MaxLength(50)]
        public string rs2 { get; set; }
        [MaxLength(50)]
        public string rs3 { get; set; }
        [MaxLength(50)]
        public string rs4 { get; set; }
        [MaxLength(50)]
        public string rs5 { get; set; }
        [MaxLength(50)]
        public string rs6 { get; set; }
        [MaxLength(50)]
        public string rs7 { get; set; }
        [MaxLength(50)]
        public string rs8 { get; set; }
        [MaxLength(50)]
        public string rs9 { get; set; }
        [MaxLength(50)]
        public string rs10 { get; set; }
        [MaxLength(50)]
        public string rs11 { get; set; }
        [MaxLength(50)]
        public string rs12 { get; set; }
        [MaxLength(50)]
        public string rs13 { get; set; }
        [MaxLength(50)]
        public string rs14 { get; set; }
        [MaxLength(50)]
        public string rs15 { get; set; }

        [MaxLength(50)]
        public string s1 { get; set; }
        [MaxLength(50)]
        public string s2 { get; set; }
        [MaxLength(50)]
        public string s3 { get; set; }
        [MaxLength(50)]
        public string s4 { get; set; }
        [MaxLength(50)]
        public string s5 { get; set; }
        [MaxLength(50)]
        public string s6 { get; set; }
        [MaxLength(50)]
        public string s7 { get; set; }
        [MaxLength(50)]
        public string s8 { get; set; }
        [MaxLength(50)]
        public string s9 { get; set; }
        [MaxLength(50)]
        public string s10 { get; set; }
        [MaxLength(50)]
        public string s11 { get; set; }
        [MaxLength(50)]
        public string s12 { get; set; }
        [MaxLength(50)]
        public string s13 { get; set; }
        [MaxLength(50)]
        public string s14 { get; set; }
        [MaxLength(50)]
        public string s15 { get; set; }

        [MaxLength(1000)]
        public string advice { get; set; }

        [MaxLength(50)]
        public string doctor { get; set; }
        public DateTime? checkdate { get; set; }
    }
}
