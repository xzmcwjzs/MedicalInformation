using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_Comm_Medicine
    {
        public string medicine_code { get; set; }
        public string medicine_name { get; set; }
        public string common_name { get; set; }
        public string specifications { get; set; }
        public string dosage_forms { get; set; }
        public string manufacturer { get; set; }
        public string common_unit { get; set; }
        public string common_price { get; set; }
        public string min_unit { get; set; }
        public string conversion_coefficient { get; set; }
        public string statistical_classification { get; set; }
        public string account_category { get; set; }
        public string basic_drugs { get; set; }
        public string basic_drugs_code { get; set; }
        public string basic_drugs_name { get; set; }
        public string source { get; set; }
        public string split { get; set; }
        public string medicine_classification { get; set; }
        public string approval_number { get; set; }
        public string skin_test { get; set; }
        public string supervision_code { get; set; }
        public string standard_code { get; set; }
        public string value_classification { get; set; }
        public string storage_instructions { get; set; }
        public string take_instructions { get; set; }
        public string remarks { get; set; }
        public string state { get; set; }
        public string skin_test_information { get; set; }
        public string default_frequency { get; set; }
        public string type { get; set; }
    }
}

