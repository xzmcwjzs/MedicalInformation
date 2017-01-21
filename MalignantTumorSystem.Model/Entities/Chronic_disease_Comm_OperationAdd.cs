using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.Entities
{
    public partial class Chronic_disease_Comm_OperationAdd
    {
        public string id { get; set; }
        public string add_id { get; set; }
        public Nullable<System.DateTime> data { get; set; }
        public string diag_bj { get; set; }
        public string diag_mj { get; set; }
        public string diag_name { get; set; }
        public string numb { get; set; }
        public string doctor { get; set; }
    }
}
