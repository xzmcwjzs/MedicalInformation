using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Model.SearchParam;
using MalignantTumorSystem.Model.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IBasicInformationService 
    {
        IQueryable<BasicInformationViewModel> LoadSearchEntities(BasicInformationParam basicInformationParam);
    }
}
