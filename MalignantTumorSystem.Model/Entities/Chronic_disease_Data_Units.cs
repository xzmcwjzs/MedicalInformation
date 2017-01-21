using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_Data_Units
    {
        public string id { get; set; }
        public string unit { get; set; }
        public string code { get; set; }
        public string type { get; set; }
        public Nullable<System.DateTime> create_time { get; set; }
    }
}

