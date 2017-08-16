using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.Common;
using MalignantTumorSystem.ADO.StatisticsOperation;
using MalignantTumorSystem.Model.ADOModel;

namespace Statistics.WebApp.Controllers
{
    public class HomeController : BaseController
    {
        Comm_Platform_WorkerADORepository workerADORepository = new Comm_Platform_WorkerADORepository();
        Comm_ResidentFileADORepository residentFileADORepository = new Comm_ResidentFileADORepository();
        public ActionResult Index()
        {
            var name = Request.QueryString["name"] ?? defaultname;
            var password = Request.QueryString["password"] ?? defaultpassword;
            Comm_Platform_Worker model = new Comm_Platform_Worker();
            model = workerADORepository.GetModelByNameAndPassword(name, password);
            if (model != null)
            {
                Session["worker"] = model;
            }
            else
            {
                throw new Exception("用户名，密码错误，尚未找到该记录");
            } 
            return View();
        }

        //主页统计模块
        [HttpGet]
        public ActionResult WelCome()
        {
            Comm_Platform_Worker model = Session["worker"] as Comm_Platform_Worker;
            var name = Request.QueryString["name"];
            var password = Request.QueryString["password"];
            string region_code = GetRegionCode(name, password);
            string code;
            if (name == null && password == null)
            {
                code = CommonFunc.SafeGetStringFromObj(model.region_code);
            }
            else
            {
                code = CommonFunc.SafeGetStringFromObj(region_code);
            }
            ViewBag.code = code;
            return View();
        }

        public ActionResult InitData()
        {
            string regionCode = CommonFunc.SafeGetStringFromObj(Request["regionCode"]);
            int lbJKDA, lb0_6, lb7_17, lb18_44, lb45_59, lb60_74, lb75_89, lb90, lbGXY, lbTNB, lbGXB, lbJSB, lbZL, lb65M, lb65F;
            //residentFileADORepository.GetInitJCDANum(regionCode,out lbJKDA, out lb0_6, out lb7_17, out lb18_44, out lb45_59, out lb60_74, out lb75_89, out lb90,out lbGXY,out lbTNB,out lbGXB,out lbJSB,out lbZL,out lb65M,out lb65F);
            residentFileADORepository.GetInitJCDANumSP(regionCode, out lbJKDA, out lb0_6, out lb7_17, out lb18_44, out lb45_59, out lb60_74, out lb75_89, out lb90, out lbGXY, out lbTNB, out lbGXB, out lbJSB, out lbZL, out lb65M, out lb65F);

            return Json(new { lbJKDA, lb0_6, lb7_17, lb18_44, lb45_59, lb60_74, lb75_89, lb90, lbGXY, lbTNB, lbGXB, lbJSB, lbZL, lb65M, lb65F }, JsonRequestBehavior.AllowGet);

        }
        public ActionResult InitChar()
        {
            string regionCode = CommonFunc.SafeGetStringFromObj(Request["regionCode"]);

            int month0, month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11;
            //residentFileADORepository.GetInitJCDAChar(regionCode, out month0, out month1, out month2, out month3, out month4, out month5, out month6, out month7, out month8, out month9,out month10,out month11);

            residentFileADORepository.GetInitJCDACharSP(regionCode, out month0, out month1, out month2, out month3, out month4, out month5, out month6, out month7, out month8, out month9, out month10, out month11);
            string subtitleText = DateTime.Now.AddMonths(-11).ToString("yyyy年MM月") + "-" + DateTime.Now.AddMonths(-0).ToString("yyyy年MM月");
            string monthyear0 = DateTime.Now.AddMonths(-0).ToString("yyyy年MM月");
            string monthyear1 = DateTime.Now.AddMonths(-1).ToString("yyyy年MM月");
            string monthyear2 = DateTime.Now.AddMonths(-2).ToString("yyyy年MM月");
            string monthyear3 = DateTime.Now.AddMonths(-3).ToString("yyyy年MM月");
            string monthyear4 = DateTime.Now.AddMonths(-4).ToString("yyyy年MM月");
            string monthyear5 = DateTime.Now.AddMonths(-5).ToString("yyyy年MM月");
            string monthyear6 = DateTime.Now.AddMonths(-6).ToString("yyyy年MM月");
            string monthyear7 = DateTime.Now.AddMonths(-7).ToString("yyyy年MM月");
            string monthyear8 = DateTime.Now.AddMonths(-8).ToString("yyyy年MM月");
            string monthyear9 = DateTime.Now.AddMonths(-9).ToString("yyyy年MM月");
            string monthyear10 = DateTime.Now.AddMonths(-10).ToString("yyyy年MM月");
            string monthyear11 = DateTime.Now.AddMonths(-11).ToString("yyyy年MM月");
            return Json(new { subtitleText, month0, month1, month2, month3, month4, month5, month6, month7, month8, month9, month10, month11, monthyear0, monthyear1, monthyear2, monthyear3, monthyear4, monthyear5, monthyear6, monthyear7, monthyear8, monthyear9, monthyear10, monthyear11 }, JsonRequestBehavior.AllowGet);
        }

        //人员分布
        [OutputCache(Duration = 30)]
        public ActionResult Distribution()
        {
            Comm_Platform_Worker model = Session["worker"] as Comm_Platform_Worker;
            var name = Request.QueryString["name"];
            var password = Request.QueryString["password"];
            string region_code = GetRegionCode(name, password);
            string code;
            if (name == null && password == null)
            {
                code = CommonFunc.SafeGetStringFromObj(model.region_code);
            }
            else
            {
                code = CommonFunc.SafeGetStringFromObj(region_code);
            }
            ViewBag.code = code;
            return View();
        }

        public ActionResult InitDistributionData()
        {
            if (CacheHelper.GetCache("DistributionStatics") == null)
            {
                int s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34,s1_1,s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10, s1_11, s1_12, s1_13, s1_10_1,  s1_10_2,  s1_10_3,  s1_10_4,  s1_10_5,  s1_10_6,  s1_10_7,  s1_10_8;
                residentFileADORepository.GetHomeDataDistributionNumSP(out s1, out s2, out s3, out s4, out s5, out s6, out s7, out s8, out s9, out s10, out s11, out s12, out s13, out s14, out s15, out s16, out s17, out s18, out s19, out s20, out s21, out s22, out s23, out s24, out s25, out s26, out s27, out s28, out s29, out s30, out s31, out s32, out s33, out s34, out s1_1, out s1_2, out s1_3, out s1_4, out s1_5, out s1_6, out s1_7, out s1_8, out s1_9, out s1_10, out s1_11, out s1_12, out s1_13, out s1_10_1, out s1_10_2, out s1_10_3, out s1_10_4, out s1_10_5, out s1_10_6, out s1_10_7, out s1_10_8);

                var list = new { s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s1_1, s1_2, s1_3, s1_4, s1_5, s1_6, s1_7, s1_8, s1_9, s1_10, s1_11, s1_12, s1_13, s1_10_1, s1_10_2, s1_10_3, s1_10_4, s1_10_5, s1_10_6, s1_10_7, s1_10_8 };
                var res = Enumerable.Repeat(list, 1).ToList();

                CacheHelper.SetCache("DistributionStatics", res, DateTime.Now.AddMinutes(1), TimeSpan.Zero);

                return Json(new { res }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var res = CacheHelper.GetCache("DistributionStatics");
                return Json(new { res }, JsonRequestBehavior.AllowGet);
            }
              
            
        }

        public ActionResult Distribution2()
        {
            Comm_Platform_Worker model = Session["worker"] as Comm_Platform_Worker;
            var name = Request.QueryString["name"];
            var password = Request.QueryString["password"];
            string region_code = GetRegionCode(name, password);
            string code;
            if (name == null && password == null)
            {
                code = CommonFunc.SafeGetStringFromObj(model.region_code);
            }
            else
            {
                code = CommonFunc.SafeGetStringFromObj(region_code);
            }
            ViewBag.code = code;
            return View();
        }

    }
}