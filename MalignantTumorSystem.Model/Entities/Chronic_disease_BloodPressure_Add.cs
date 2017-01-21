using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_BloodPressure_Add
    {
        public string id { get; set; }
        public string add_id { get; set; }
        public Nullable<System.DateTime> data { get; set; }
        public string time { get; set; }
        public string ssy { get; set; }
        public string szy { get; set; }
        public string ssy1 { get; set; }
        public string szy1 { get; set; }
        public string heart { get; set; }
        public string place { get; set; }
        public string state { get; set; }
    }
}

