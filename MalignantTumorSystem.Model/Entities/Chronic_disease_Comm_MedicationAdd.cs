using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_Comm_MedicationAdd
    {
        public string id { get; set; }
        public string add_id { get; set; }
        public Nullable<System.DateTime> data { get; set; }
        public string name { get; set; }
        public string dosage { get; set; }
        public string usage { get; set; }
        public string manu_batch { get; set; }
    }
}

