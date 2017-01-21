using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
   public partial interface IChronic_disease_Diabetes_familyService:IBaseService<Chronic_disease_Diabetes_family>
    {
       IQueryable<Model.Entities.Chronic_disease_Diabetes_family> LoadSearchEntities(Model.SearchParam.FamilyInformationParam parms);
    }
}
