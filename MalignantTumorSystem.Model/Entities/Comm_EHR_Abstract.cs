using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Comm_EHR_Abstract
    {
        public string id { get; set; }
        public string resident_id { get; set; }
        public string community_code { get; set; }
        public string item_type { get; set; }
        public string item_id { get; set; }
        public System.DateTime create_time { get; set; }
    }
}
