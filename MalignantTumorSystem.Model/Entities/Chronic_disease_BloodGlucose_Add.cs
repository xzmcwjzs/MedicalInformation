using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_BloodGlucose_Add
    {
        public string id { get; set; }
        public string add_id { get; set; }
        public Nullable<System.DateTime> data { get; set; }
        public string time { get; set; }
        public string bloodsugar { get; set; }
        public string place { get; set; }
        public string types { get; set; }
        public string state { get; set; }
    }
}
