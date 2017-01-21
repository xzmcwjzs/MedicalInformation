using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.SearchParam
{
   public class MedicalHistory_HospitalizationParam:BaseParam
    {
        public string region_code { get; set; }
        public string name { get; set; }
        public string sex { get; set; }
        public string txtBirthDateBegin { get; set; }
        public string txtBirthDateEnd { get; set; }

        public string idCard { get; set; }
        public string address { get; set; }
        //住院日期  开始
        public string hospitalizationstart { get; set; }
        //住院日期  结束
        public string hospitalizationend { get; set; }
        //住院诊断
        public string judge { get; set; }
    }
}
