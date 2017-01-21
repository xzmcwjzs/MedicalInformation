using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Comm_Testing_CSFAddService :IBaseService<Chronic_disease_Comm_Testing_CSFAdd>
    {
        bool UpdateSubjective(List<Chronic_disease_Comm_Testing_CSFAdd> subjectiveList, string id);
    }
}
