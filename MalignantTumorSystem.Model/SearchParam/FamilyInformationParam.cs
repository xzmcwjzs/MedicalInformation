using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.SearchParam
{
   public class FamilyInformationParam:BaseParam
    {
        public string region_code { get; set; }
        public string name { get; set; }
        public string sex { get; set; }
        public string txtBirthDateBegin { get; set; }
        public string txtBirthDateEnd { get; set; }

        public string idCard { get; set; }
        public string address { get; set; }
    }
}
