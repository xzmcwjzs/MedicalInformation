using MalignantTumorSystem.WebApplication.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.IBLL;
using Ninject;
using MalignantTumorSystem.Common;
using MalignantTumorSystem.Model.Entities;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        [Inject]
        public IComm_Platform_WorkerService workerService { get; set; }
        [Inject]
        public IUserLogService userLogService { get; set; }

        public ActionResult Index()
        {
            ViewData["Message"] = "单元测试";
            return View();
        }

        #region 登录
        public ActionResult DengLu()
        {

            string validateCode = Session["validateCode"] != null ? Session["validateCode"].ToString() : string.Empty;
            if (string.IsNullOrEmpty(validateCode))
            {
                return Content("验证码输入错误");
            }
            string txtCode = CommonFunc.SafeGetStringFromObj(Request["txtValidateCode"]);
            if (!validateCode.Equals(txtCode, StringComparison.InvariantCultureIgnoreCase))
            {
                return Content("验证码输入错误");
            }
            string UserName = CommonFunc.SafeGetStringFromObj(Request["txtUserName"]);
            string Password = CommonFunc.SafeGetStringFromObj(Request["txtPassword"]);


            var loginInfo = workerService.LoadEntityAsNoTracking(u => u.user_name == UserName && u.password == Password).FirstOrDefault();

            if (loginInfo != null)
            {
                Session["worker"] = loginInfo;
                UserLog userLogModel = new UserLog();
                userLogModel.id = Guid.NewGuid().ToString();
                userLogModel.user_id = CommonFunc.SafeGetStringFromObj(loginInfo.id);
                userLogModel.user_real_name = CommonFunc.SafeGetStringFromObj(loginInfo.real_name);
                string ip = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];
                if (string.IsNullOrEmpty(ip))
                {
                    ip = Request.ServerVariables["REMOTE_ADDR"];
                }
                if (string.IsNullOrEmpty(ip))
                {
                    ip = Request.UserHostAddress;
                } 
                userLogModel.ip = CommonFunc.SafeGetStringFromObj(ip);
                userLogModel.computer_name = CommonFunc.SafeGetStringFromObj(Request.UserHostName);
                userLogModel.login_time = CommonFunc.SafeGetDateTimeFromObj(DateTime.Now);
                userLogModel.activex = Request.Browser.ActiveXControls;
                userLogModel.cookies = Request.Browser.Cookies;
                userLogModel.css = Request.Browser.SupportsCss;
                userLogModel.language = Request.UserLanguages[0];
                userLogModel.platform = CommonFunc.SafeGetStringFromObj(Request.Browser.Platform);
                userLogModel.user_agent = CommonFunc.SafeGetStringFromObj(Request.UserAgent);

                if (userLogService.AddEntity(userLogModel))
                {
                    return Content("ok");
                }
                else
                {
                    return Content("获取用户相关信息错误");
                }

            }
            else
            {
                return Content("用户名或密码错误");
            }
        }
        #endregion

        #region 显示验证码
        public ActionResult ShowValidateCode()
        {
            ValidateCode validateCode = new ValidateCode();
            string code = validateCode.CreateValidateCode(4);
            Session["validateCode"] = code;

            byte[] buffer = validateCode.CreateValidateGraphic(code);//将验证吗画到画布上
            return File(buffer, "image/jpeg");

        }
        #endregion
    }
}
