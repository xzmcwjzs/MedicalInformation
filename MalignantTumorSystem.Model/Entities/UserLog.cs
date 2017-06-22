using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    [Table("UserLog")]
    public class UserLog
    {
        [Key]
        [Required]
        public string id { get; set; }
        [MaxLength(50)]
        public string user_id { get; set; } 
        [MaxLength(50)]
        public string user_real_name { get; set; }
        [MaxLength(50)]
        public string ip { get; set; }
        [MaxLength(50)]
        public string computer_name { get; set; } 
        public DateTime? login_time { get; set; } 
        public bool activex { get; set; } 
        public bool cookies { get; set; } 
        public bool css { get; set; }
        [MaxLength(100)]
        public string language { get; set; }
        [MaxLength(100)]
        public string platform { get; set; }
        [MaxLength(500)]
        public string user_agent { get; set; }
    }
}
