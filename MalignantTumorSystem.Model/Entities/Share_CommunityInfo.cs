using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Share_CommunityInfo
    {
        public string id { get; set; }
        public string name { get; set; }
        public string address { get; set; }
        public string code { get; set; }
        public string street_code { get; set; }
        public string responsible_person { get; set; }
        public string responsible_person_phone { get; set; }
        public string post_code { get; set; }
        public Nullable<System.DateTime> create_time { get; set; }
        public Nullable<System.DateTime> last_static_time { get; set; }
    }
}
