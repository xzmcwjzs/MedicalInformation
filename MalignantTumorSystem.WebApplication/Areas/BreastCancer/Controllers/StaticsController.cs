using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Areas.BreastCancer.Controllers
{
    public class StaticsController : Controller
    {
        // GET: BreastCancer/Statics
        public ActionResult Frame()
        {
            return View();
        }
        public ActionResult SexRate()
        {
            return View();
        }
        public ActionResult Welcome()
        {
            return View();
        }
    }
}