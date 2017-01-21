using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_Pictures
    {
        public string id { get; set; }
        public string id_card_number { get; set; }
        public string type { get; set; }
        public string src { get; set; }
        public Nullable<System.DateTime> create_time { get; set; }
    }
}
