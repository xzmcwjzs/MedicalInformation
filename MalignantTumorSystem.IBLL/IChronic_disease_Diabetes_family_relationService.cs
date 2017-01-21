using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_Diabetes_family_relationService : IBaseService<Chronic_disease_Diabetes_family_relation>
    {
        //输血 该表中 根据resident_id  有的进行删除  在添加，如果存在 删除失败则返回 添加失败则返回，批量增加
        bool UpdateSubjective(List<Chronic_disease_Diabetes_family_relation> subjectiveList, string id);
    }
}
