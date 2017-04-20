using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Statistics.WebApp.Controllers
{
    public class SystemManageController : Controller
    {
        // GET: SystemManage
        public ActionResult Logger()
        {
            return View();
        }
    }
}