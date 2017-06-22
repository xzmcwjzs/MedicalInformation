using MalignantTumorSystem.Common;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.WebApplication.Helpers;
using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    public class Log_UserController : Controller
    {
        // GET: Log_User
        [Inject]
        public IUserLogService userLogService { get; set; }
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
        public ActionResult List()
        {
            int pageIndex = CommonFunc.SafeGetIntFromObj(this.Request["pageIndex"], 1);
            int pageSize = this.Request["pageSize"] == null ? 5 : int.Parse(Request["pageSize"]);
            int totalCount = 0;

            var list = userLogService.LoadPageEntities(pageSize, pageIndex, out totalCount, t => true, t => t.login_time, false);

            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<UserLog> result = new List<UserLog>();
            result.AddRange(list);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<UserLog>> query = new PagerQuery<PagerInfo, List<UserLog>>(pager, result);
            ViewData.Model = query;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View();
        }
    }
}