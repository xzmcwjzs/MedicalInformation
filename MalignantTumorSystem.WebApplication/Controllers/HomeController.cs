using MalignantTumorSystem.WebApplication.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.IBLL;
using Ninject;
using MalignantTumorSystem.Common;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/
        [Inject]
        public IComm_Platform_WorkerService workerService { get; set; }
        
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
            string UserName =CommonFunc.SafeGetStringFromObj(Request["txtUserName"]);
            string Password =CommonFunc.SafeGetStringFromObj( Request["txtPassword"]);

            MalignantTumorSystem.Common.OneLoginHelper oneLogin = new OneLoginHelper();
            oneLogin.LoginRegister(UserName);

            var loginInfo = workerService.LoadEntityAsNoTracking(u => u.user_name == UserName && u.password == Password).FirstOrDefault();

            if (loginInfo != null)
            {
                Session["worker"] = loginInfo;
                return Content("ok"); 
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
