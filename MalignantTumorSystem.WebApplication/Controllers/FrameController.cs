using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.IBLL;
using Ninject;
using MalignantTumorSystem.Model;
using MalignantTumorSystem.Common;
using MalignantTumorSystem.WebApplication.Common.MyAttributes;
using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.WebApplication.Helpers;
using MalignantTumorSystem.Model.SearchParam; 
using System.Data.Entity;

namespace MalignantTumorSystem.WebApplication.Controllers
{ 
    public class FrameController : BaseController
    {
        //
        // GET: /Frame/
        [Inject]
        public IComm_Platform_WorkerService workerService { get; set; }
        [Inject]
        public IComm_TumourService tumourService { get; set; }
        [Inject]
        public IMT_BC_FollowupService mT_BC_FollowupService { get; set; }
        public ActionResult Index()
        {
            string UserName = CommonFunc.SafeGetStringFromObj(Request.QueryString["user_name"]);
            string Password = CommonFunc.SafeGetStringFromObj(Request.QueryString["password"]);
            Model.Entities.Comm_Platform_Worker workerModel = new Model.Entities.Comm_Platform_Worker();
            if (!string.IsNullOrEmpty(UserName) && !string.IsNullOrEmpty(Password))
            {
                var loginInfo = workerService.LoadEntityAsNoTracking(u => u.user_name == UserName && u.password == Password).FirstOrDefault(); 
                if (loginInfo != null)
                {
                    Session["worker"] = loginInfo;
                    workerModel= Session["worker"] as Model.Entities.Comm_Platform_Worker;
                }
            }
            else
            { 
                workerModel = Session["worker"] as Model.Entities.Comm_Platform_Worker;
            }
             
            ViewData.Model = workerModel;
            string type = CommonFunc.SafeGetStringFromObj(Request.QueryString["type"]);
            TempData["type"] = type;
            string typename = string.Empty;
            if (type == "BreastCancer")
            {
                typename = "乳腺癌";
            }
            else if (type == "NasopharynxCancer")
            {
                typename = "鼻咽癌";
            }
            else if (type == "CervicalCancer") {
                typename = "宫颈癌";
            }
            else
            {
                typename = "恶性肿瘤";
            }
            ViewBag.type = typename;
            ViewBag.name = CommonFunc.SafeGetStringFromObj(workerModel.user_name);
            ViewBag.password = CommonFunc.SafeGetStringFromObj(workerModel.password);
            
            return View();
        }
        

        public ActionResult LeftFrame()
        { 
            return View();
        }
        public ActionResult LeftBreastCancer()
        {
            Model.Entities.Comm_Platform_Worker workerModel = new Model.Entities.Comm_Platform_Worker();
            workerModel = Session["worker"] as Model.Entities.Comm_Platform_Worker;
            string password = CommonFunc.SafeGetStringFromObj(workerModel.password);
            string name = CommonFunc.SafeGetStringFromObj(workerModel.user_name);
            ViewBag.password = password;
            ViewBag.name = name;
            return View();
        }
        public ActionResult MainFrame()
        {
            string type = TempData["type"] as string;
            string typename = string.Empty;
            if (type == "BreastCancer")
            {
                typename = "乳腺癌";
            }
            else if (type == "NasopharynxCancer")
            {
                typename = "鼻咽癌";
            }
            else if (type == "CervicalCancer")
            {
                typename = "宫颈癌";
            }
            else
            {
                typename = "恶性肿瘤";
            }
            ViewBag.type = typename;
            return View();
        }

        [HttpGet]
        public ActionResult ModifyPassword()
        {
            TempData["tag"] =CommonFunc.SafeGetStringFromObj(Request.QueryString["tag"]);
            string id = TempData["tag"].ToString();
            ViewBag.id = id;
            return View();
        }
        [HttpPost]
        public ActionResult ModifyPsw()
        {
            Model.Entities.Comm_Platform_Worker workerModel = new Model.Entities.Comm_Platform_Worker();
            string tag = CommonFunc.SafeGetStringFromObj(Request.Form["tag"]);
            string txtPwd = CommonFunc.SafeGetStringFromObj(Request.Form["txtPwd"]);
            string txtConfirmPwd = CommonFunc.SafeGetStringFromObj(Request.Form["txtConfirmPwd"]);
            if (txtPwd.Equals(txtConfirmPwd))
            {
                workerModel.id = tag;
                workerModel.password = txtPwd;
                string[] propertyName = { "password" };
                if (workerService.UpdatePartialPropertity(workerModel, propertyName))
                {
                    return Content("0");
                }
                else
                {
                    return Content("1");
                }
            }
            else
            {
                return Content("2");
            }
        }

        
        //随访预警提示
        public ActionResult Alert()
        {
            Model.Entities.Comm_Platform_Worker entity = Session["worker"] as Model.Entities.Comm_Platform_Worker;
            string regionCode = CommonFunc.SafeGetStringFromObj(entity.region_code);
            int itemCount = mT_BC_FollowupService.GetBreastCancerFollowupAlertCount(regionCode);
            ViewBag.count = itemCount;
            string type = CommonFunc.SafeGetStringFromObj(Request.QueryString["type"]);
            ViewBag.type = type;
            return View();
        }
        //随访过期提示
        public ActionResult Overdue()
        {
            Model.Entities.Comm_Platform_Worker entity = Session["worker"] as Model.Entities.Comm_Platform_Worker;
            string regionCode = CommonFunc.SafeGetStringFromObj(entity.region_code);
            int itemCount = mT_BC_FollowupService.GetBreastCancerFollowupExpireCount(regionCode);
            ViewBag.count = itemCount;
            string type = CommonFunc.SafeGetStringFromObj(Request.QueryString["type"]);
            ViewBag.type = type;
            return View();
        }
        //随访预警列表
        public ActionResult ListAlert()
        {
            string type = CommonFunc.SafeGetStringFromObj(Request.QueryString["type"]);
            ViewBag.type = type;
            Comm_Platform_Worker workerModel = Session["worker"] as Comm_Platform_Worker; 
            string region_code = CommonFunc.SafeGetStringFromObj(workerModel.region_code);
            string dell_user_name = CommonFunc.SafeGetStringFromObj(workerModel.user_name);
             
            int pageIndex = CommonFunc.SafeGetIntFromObj(this.Request["pageIndex"], 1);
            int pageSize = this.Request["pageSize"] == null ? PageSize.GetPageSize : int.Parse(Request["pageSize"]);
            int totalCount = 0; 
            var list = mT_BC_FollowupService.LoadPageEntities(pageSize, pageIndex, out totalCount, t => t.community_code.Contains(region_code), t => t.followup_date, false);
            if (type == "乳腺癌")
            {
                 list = mT_BC_FollowupService.LoadPageEntities(pageSize, pageIndex, out totalCount, t => t.community_code.Contains(region_code) && DbFunctions.DiffDays(t.next_time, DateTime.Now) <= 0, t => t.followup_date, false);
            }
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<MT_BC_Followup> result = new List<MT_BC_Followup>();
            result.AddRange(list);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<MT_BC_Followup>> query = new PagerQuery<PagerInfo, List<MT_BC_Followup>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View(); 
        }
        //随访过期列表
        public ActionResult ListExpire()
        {
            string type = CommonFunc.SafeGetStringFromObj(Request.QueryString["type"]);
            ViewBag.type = type;
            Comm_Platform_Worker workerModel = Session["worker"] as Comm_Platform_Worker;
            string region_code = CommonFunc.SafeGetStringFromObj(workerModel.region_code);
            string dell_user_name = CommonFunc.SafeGetStringFromObj(workerModel.user_name);

            int pageIndex = CommonFunc.SafeGetIntFromObj(this.Request["pageIndex"], 1);
            int pageSize = this.Request["pageSize"] == null ? PageSize.GetPageSize : int.Parse(Request["pageSize"]);
            int totalCount = 0;
            var list = mT_BC_FollowupService.LoadPageEntities(pageSize, pageIndex, out totalCount, t => t.community_code.Contains(region_code), t => t.followup_date, false);
            if (type == "乳腺癌")
            {
                list = mT_BC_FollowupService.LoadPageEntities(pageSize, pageIndex, out totalCount, t => t.community_code.Contains(region_code) && DbFunctions.DiffDays(t.next_time, DateTime.Now) >= 0 , t => t.followup_date, false);
            }
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<MT_BC_Followup> result = new List<MT_BC_Followup>();
            result.AddRange(list);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<MT_BC_Followup>> query = new PagerQuery<PagerInfo, List<MT_BC_Followup>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View();
        }

        public ActionResult LogOut()
        {
            Session.Clear();
            System.Web.HttpContext.Current.Application["Online"] = null;
            return Redirect("/Home/Index");
        }

        //鼻咽癌 页面
        public ActionResult LeftNasopharynxCancer()
        {
            Model.Entities.Comm_Platform_Worker workerModel = new Model.Entities.Comm_Platform_Worker();
            workerModel = Session["worker"] as Model.Entities.Comm_Platform_Worker;
            string password = CommonFunc.SafeGetStringFromObj(workerModel.password);
            string name = CommonFunc.SafeGetStringFromObj(workerModel.user_name);
            ViewBag.password = password;
            ViewBag.name = name;
            return View();
        }
    }
}
