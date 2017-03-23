using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Statistics.WebApp.Controllers
{
    public class DemographicDataController : Controller
    {
        // GET: DemographicData
        public ActionResult Number()
        {
            return View();
        }
        public ActionResult Constitute()
        {
            return View();
        }
    }
}