using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.SearchParam
{
   public class FollowupParam:BaseParam
    {
        public string region_code { get; set; }
        public string name { get; set; }
        public string sex { get; set; }
        public string txtBirthDateBegin { get; set; }
        public string txtBirthDateEnd { get; set; }

        public string idCard { get; set; }
        public string address { get; set; }
        //随访日期  开始
        public string followupstart { get; set; }
        //随访日期  结束
        public string followupend { get; set; }
        //随访方式
        public string way { get; set; }
    }
}
