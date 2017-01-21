using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.SearchParam
{
   public class MedicalHistory_OutpatientParam:BaseParam
    {
        public string region_code { get; set; }
        public string name { get; set; }
        public string sex { get; set; }
        public string txtBirthDateBegin { get; set; }
        public string txtBirthDateEnd { get; set; }

        public string idCard { get; set; }
        public string address { get; set; }
       //门诊日期  开始
        public string outpatientstart { get; set; }
       //门诊日期  结束
        public string outpatientend { get; set; }
       //门诊诊断
        public string judge { get; set; }

    }
}
