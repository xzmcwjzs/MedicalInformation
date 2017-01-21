using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Comm_ResidentFile_Change_Address
    {
        public string id { get; set; }
        public string contact_id { get; set; }
        public string resident_id { get; set; }
        public string community_code { get; set; }
        public string permanent_address { get; set; }
        public string fill_person { get; set; }
        public string fill_community_code { get; set; }
        public Nullable<System.DateTime> create_time { get; set; }
    }
}
