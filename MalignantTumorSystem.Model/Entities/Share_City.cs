using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Share_City
    {
        public string id { get; set; }
        public string code { get; set; }
        public string name { get; set; }
        public string parent_code { get; set; }
        public System.DateTime create_time { get; set; }
    }
}
