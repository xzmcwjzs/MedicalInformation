using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.SearchParam
{
   public class BasicInformationParam:BaseParam
    {
       //public string ddlProvince { get; set; }
       //public string ddlCity { get; set; }
       //public string ddlCounty { get; set; }
       //public string ddlStreet { get; set; }
       //public string ddlCommunity { get; set; }
       public string region_code { get; set; }
       public string name { get; set; }
       public string sex { get; set; }
       public string txtBirthDateBegin { get; set; }
       public string txtBirthDateEnd { get; set; }

       public string idCard { get; set; }
       public string address { get; set; } 
    }
}
