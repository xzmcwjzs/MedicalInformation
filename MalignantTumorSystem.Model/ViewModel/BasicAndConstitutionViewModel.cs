using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Model.ViewModel
{
   public class BasicAndConstitutionViewModel
    {
       //public List<Model.Entities.Comm_ResidentFile> BasicModel{get;set;}
       //public List<Model.Entities.Chronic_disease_Constitution> ConstitutionModel { get; set; }
       //public BasicAndConstitutionViewModel(List<Entities.Comm_ResidentFile> BasicList,List<Entities.Chronic_disease_Constitution> ConstitutionList)
       //{
       //    this.BasicModel = BasicList;
       //    this.ConstitutionModel = ConstitutionList;
       //}
        public string aid { get; set; }//Comm_ResidentFile
        public string bid { get; set; }//Chronic_disease_Constitution
        public string id_card_number { get; set; }
        public string community_code { get; set; }
        public string resident_name { get; set; }
        public string sex { get; set; }
        public Nullable<DateTime> birth_date { get; set; }
        public string permanent_home_address { get; set; }
        public string resident_id { get; set; }
        public string result { get; set; }
        public Nullable<DateTime> create_time { get; set; }
    }
}
