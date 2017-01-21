using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.BLL
{
   public class SearchTest
    {
        //#region 多条件搜索
        ///// <summary>
        ///// 多条件搜索
        ///// </summary>
        ///// <param name="diseaseRegisterParam"></param>
        ///// <returns></returns>
        //public IQueryable<GP_Disease_Register2> LoadSearchEntities(Model.SearchParam.DiseaseRegisterParam diseaseRegisterParam)
        //{
        //    var temp = CurrentDal.LoadEntities(u => (u.students_name == diseaseRegisterParam.Name) && (u.training_base_code == diseaseRegisterParam.TrainingBaseCode));
        //    if (!string.IsNullOrEmpty(diseaseRegisterParam.DeptName))
        //    {
        //        temp = temp.Where<GP_Disease_Register2>(u => u.dept_name.Contains(diseaseRegisterParam.DeptName));
        //    }
        //    if (!string.IsNullOrEmpty(diseaseRegisterParam.DiseaseName))
        //    {
        //        temp = temp.Where<GP_Disease_Register2>(u => u.disease_name.Contains(diseaseRegisterParam.DiseaseName));
        //    }
        //    if (!string.IsNullOrEmpty(diseaseRegisterParam.RequiredNum))
        //    {
        //        temp = temp.Where<GP_Disease_Register2>(u => u.required_num == diseaseRegisterParam.RequiredNum);
        //    }
        //    if (!string.IsNullOrEmpty(diseaseRegisterParam.MasterDegree))
        //    {
        //        temp = temp.Where<GP_Disease_Register2>(u => u.master_degree.Contains(diseaseRegisterParam.MasterDegree));
        //    }
        //    diseaseRegisterParam.TotalCount = temp.Count();
        //    return temp.OrderByDescending<GP_Disease_Register2, string>(u => u.register_date).Skip<GP_Disease_Register2>((diseaseRegisterParam.PageIndex - 1) * diseaseRegisterParam.PageSize).Take<GP_Disease_Register2>(diseaseRegisterParam.PageSize);

        //}
        //#endregion
    }
}
