using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Comm_Testing_BMCAddService :IBaseService<Chronic_disease_Comm_Testing_BMCAdd>
    {
        bool UpdateSubjective(List<Chronic_disease_Comm_Testing_BMCAdd> subjectiveList, string id);
    }
}
