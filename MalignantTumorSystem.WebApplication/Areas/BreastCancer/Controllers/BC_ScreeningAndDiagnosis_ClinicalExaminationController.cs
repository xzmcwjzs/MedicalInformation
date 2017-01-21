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
        public ActionResult Frame()
        {
            return View();
        }
    }
}