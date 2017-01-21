using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_Diabetes_family_relation
    {
        public string id { get; set; }
        public string relation_id { get; set; }
        public string relation { get; set; }
        public string name { get; set; }
        public string id_card_number { get; set; }
        public string phone { get; set; }
        public Nullable<DateTime> birth_date { get; set; }
    }
}

