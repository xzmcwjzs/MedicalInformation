using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Comm_Testing_SCEAddService : IBaseService<Chronic_disease_Comm_Testing_SCEAdd>
    {
        bool UpdateSubjective(List<Chronic_disease_Comm_Testing_SCEAdd> subjectiveList, string id);
    }
}
