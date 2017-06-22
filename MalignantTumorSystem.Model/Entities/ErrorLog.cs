using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    [Table("ErrorLog")]
    public  class ErrorLog
    {
        [Key]
        [Required]
        public int nId { get; set; }
        public DateTime? dtDate { get; set; }
        [MaxLength(100)]
        public string sThread { get; set; }
        [MaxLength(200)]
        public string sLevel { get; set; }
        [MaxLength(500)]
        public string sLogger { get; set; }
        [MaxLength(3000)]
        public string sMessage { get; set; }
        [MaxLength(4000)]
        public string sException { get; set; }
    }
}
