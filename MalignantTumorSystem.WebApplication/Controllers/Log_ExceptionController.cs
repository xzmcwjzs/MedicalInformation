using MalignantTumorSystem.Common;
using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.WebApplication.Helpers;
using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.IBLL;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    public class Log_ExceptionController : BaseTopController
    {
        [Inject]
        public IErrorLogService errorLogService { get; set; }
        // GET: Log_Exception
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
            int pageSize = this.Request["pageSize"] == null ? 10 : int.Parse(Request["pageSize"]);
            int totalCount = 0;

            var list = errorLogService.LoadPageEntities(pageSize, pageIndex, out totalCount, t =>true, t => t.dtDate, false);

            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<ErrorLog> result = new List<ErrorLog>();
            result.AddRange(list);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<ErrorLog>> query = new PagerQuery<PagerInfo, List<ErrorLog>>(pager, result);
            ViewData.Model = query;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize; 
            return View();
        }
        public ActionResult Show()
        {
            int id = CommonFunc.SafeGetIntFromObj(Request.QueryString["id"], 1);
            var model =errorLogService.LoadEntityAsNoTracking(t => t.nId == id).FirstOrDefault();
            ViewData.Model = model;
            return View();
        }
    }
}