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
    public class DemographicDataController : BaseController
    {
        Comm_Platform_WorkerADORepository workerADORepository = new Comm_Platform_WorkerADORepository();
        Comm_ResidentFileADORepository residentFileADORepository = new Comm_ResidentFileADORepository();
        //人口数量资料统计模块
        [HttpGet]
        public ActionResult Number()
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
        //获取人口数量资料数据填充表格
        public ActionResult InitNumberData()
        {
            string regionCode = CommonFunc.SafeGetStringFromObj(Request["regionCode"]);
            int lb4, lb4M, lb4F, lb3, lb3M, lb3F, lb2, lb2M, lb2F, lb1, lb1M, lb1F, lb0, lb0M, lb0F;
            residentFileADORepository.GetDemographicDataNumberNum(regionCode, out lb4, out lb4M, out lb4F, out lb3, out lb3M, out lb3F, out lb2, out lb2M, out lb2F, out lb1, out lb1M, out lb1F, out lb0, out lb0M, out lb0F);

            return Json(new { lb4, lb4M, lb4F, lb3, lb3M, lb3F, lb2, lb2M, lb2F, lb1, lb1M, lb1F, lb0, lb0M, lb0F }, JsonRequestBehavior.AllowGet);
        }
        //获取人口数量资料数据填充图表
        public ActionResult InitNumberChart()
        {
            string regionCode = CommonFunc.SafeGetStringFromObj(Request["regionCode"]);
            int lb4, lb4M, lb4F, lb3, lb3M, lb3F, lb2, lb2M, lb2F, lb1, lb1M, lb1F, lb0, lb0M, lb0F;
            residentFileADORepository.GetDemographicDataNumberNum(regionCode, out lb4, out lb4M, out lb4F, out lb3, out lb3M, out lb3F, out lb2, out lb2M, out lb2F, out lb1, out lb1M, out lb1F, out lb0, out lb0M, out lb0F);
            string year0 = DateTime.Now.AddYears(-0).ToString("yyyy年");
            string year1 = DateTime.Now.AddYears(-1).ToString("yyyy年");
            string year2 = DateTime.Now.AddYears(-2).ToString("yyyy年");
            string year3 = DateTime.Now.AddYears(-3).ToString("yyyy年");
            string year4 = DateTime.Now.AddYears(-4).ToString("yyyy年");

            return Json(new { lb4, lb4M, lb4F, lb3, lb3M, lb3F, lb2, lb2M, lb2F, lb1, lb1M, lb1F, lb0, lb0M, lb0F,year0,year1,year2,year3,year4 }, JsonRequestBehavior.AllowGet);
        }

        //人口构成统计模块 
        [HttpGet]
        public ActionResult Constitute()
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