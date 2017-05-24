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
            int itemCount = tumourService.GetBreastCancerFollowupAlertCount(regionCode);
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
            int itemCount = tumourService.GetBreastCancerFollowupExpireCount(regionCode);
            ViewBag.count = itemCount;
            string type = CommonFunc.SafeGetStringFromObj(Request.QueryString["type"]);
            ViewBag.type = type;
            return View();
        }
        //随访预警列表
        public ActionResult ListAlert()
        {
            return View();
        }
        //随访过期列表
        public ActionResult ListExpire()
        {
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
