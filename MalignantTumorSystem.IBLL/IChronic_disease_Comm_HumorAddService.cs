using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Comm_HumorAddService : IBaseService<Chronic_disease_Comm_HumorAdd>
    {
        bool UpdateSubjective(List<Chronic_disease_Comm_HumorAdd> subjectiveList, string id);
    }
}
