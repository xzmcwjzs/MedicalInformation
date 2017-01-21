using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.IBLL
{
    public partial interface IChronic_disease_BloodGlucose_AddService : IBaseService<Chronic_disease_BloodGlucose_Add>
    {
        bool UpdateSubjective(List<Chronic_disease_BloodGlucose_Add> subjectiveList, string id);
        List<Chronic_disease_BloodGlucose_Add> GetListByNum(string id_card_number, out string startDate, out string endDate);
        List<Chronic_disease_BloodGlucose_Add> GetListById(string id, out string startDate, out string endDate);
        List<string> GetDiffTimeList(string id);
        List<Chronic_disease_BloodGlucose_Add> GetYearMonth(string id, string year, string month);
    }
}
