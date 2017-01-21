using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_Outpatient_Prescription
    {
        public string id { get; set; }
        public string contact_id { get; set; }
        public string medical_name { get; set; }
        public string medical_specifications { get; set; }
        public string medical_usage { get; set; }
        public string medical_dosage { get; set; }
        public string medical_frequency { get; set; }
        public string medical_day { get; set; }
        public string medical_total { get; set; }
        public string medical_unit { get; set; }
        public string medical_price { get; set; }
        public string medical_min_unit { get; set; }
        public string medical_manufacturer { get; set; }
    }
}
