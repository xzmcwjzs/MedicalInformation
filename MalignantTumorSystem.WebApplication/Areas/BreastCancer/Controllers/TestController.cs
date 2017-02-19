using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Areas.BreastCancer.Controllers
{
    public class TestController : Controller
    {
        // GET: BreastCancer/Test
        public ActionResult Frame()
        {
            return View();
        }
    }
}