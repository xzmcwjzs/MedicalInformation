using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Areas.BreastCancer.Controllers
{
    public class BC_ScreeningAndDiagnosis_ClinicalExaminationController : Controller
    {
        // GET: BreastCancer/BC_ScreeningAndDiagnosis_ClinicalExamination

        #region 框架页

        public ActionResult Frame()
        {
            return View();
        }
        public ActionResult Top()
        {
            return View();
        }
        public ActionResult Body()
        {
            return View();
        }
        public ActionResult Left()
        {
            return View();
        }
        #endregion

        //列表页
        public ActionResult List()
        {
            return View();
        }

        //新增页
        public ActionResult ClinicalExamination()
        {
            return View();
        }

    }
}