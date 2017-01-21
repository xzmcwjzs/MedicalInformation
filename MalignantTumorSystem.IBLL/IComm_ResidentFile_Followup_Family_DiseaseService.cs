using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IComm_ResidentFile_Followup_Family_DiseaseService : IBaseService<Comm_ResidentFile_Followup_Family_Disease>
    {
        //家族 该表中 根据resident_id  有的进行删除  在添加，如果存在 删除失败则返回 添加失败则返回，批量增加
        bool UpdateSubjective(List<Comm_ResidentFile_Followup_Family_Disease> subjectiveList, string resident_id);
    }
}
