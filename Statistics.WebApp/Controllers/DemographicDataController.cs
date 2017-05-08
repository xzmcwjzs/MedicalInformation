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
            residentFileADORepository.GetDemographicDataNumberNumSP(regionCode, out lb4, out lb4M, out lb4F, out lb3, out lb3M, out lb3F, out lb2, out lb2M, out lb2F, out lb1, out lb1M, out lb1F, out lb0, out lb0M, out lb0F);

            return Json(new { lb4, lb4M, lb4F, lb3, lb3M, lb3F, lb2, lb2M, lb2F, lb1, lb1M, lb1F, lb0, lb0M, lb0F }, JsonRequestBehavior.AllowGet);
        }
        //获取人口数量资料数据填充图表
        public ActionResult InitNumberChart()
        {
            string regionCode = CommonFunc.SafeGetStringFromObj(Request["regionCode"]);
            int lb4, lb4M, lb4F, lb3, lb3M, lb3F, lb2, lb2M, lb2F, lb1, lb1M, lb1F, lb0, lb0M, lb0F;
            //residentFileADORepository.GetDemographicDataNumberNum(regionCode, out lb4, out lb4M, out lb4F, out lb3, out lb3M, out lb3F, out lb2, out lb2M, out lb2F, out lb1, out lb1M, out lb1F, out lb0, out lb0M, out lb0F);
            residentFileADORepository.GetDemographicDataNumberNumSP(regionCode, out lb4, out lb4M, out lb4F, out lb3, out lb3M, out lb3F, out lb2, out lb2M, out lb2F, out lb1, out lb1M, out lb1F, out lb0, out lb0M, out lb0F);
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
        //获取人口构成数据填充表格
        public ActionResult InitConstituteData()
        {
            string regionCode = CommonFunc.SafeGetStringFromObj(Request["regionCode"]);
             int lb0m,lb0f,lb10m, lb10f,  lb20m,  lb20f,  lb30m,  lb30f,  lb40m,  lb40f,  lb50m,  lb50f,  lb60m,  lb60f,  lb70m,  lb70f,  lb80m,  lb80f,  lb90m,  lb90f;
            residentFileADORepository.GetDemographicDataConstituteNumSP(regionCode, out lb0m, out  lb0f, out  lb10m, out  lb10f, out  lb20m, out  lb20f, out  lb30m, out  lb30f, out  lb40m, out  lb40f, out  lb50m, out  lb50f, out  lb60m, out  lb60f, out  lb70m, out  lb70f, out  lb80m, out  lb80f, out  lb90m, out  lb90f);

            int lb0h, lb10h, lb20h, lb30h, lb40h, lb50h, lb60h, lb70h, lb80h, lb90h, lb100m, lb100f, lb100h;

            double lb0mb, lb0fb, lb0hb, lb10mb, lb10fb, lb10hb, lb20mb, lb20fb, lb20hb, lb30mb, lb30fb, lb30hb, lb40mb, lb40fb, lb40hb, lb50mb, lb50fb, lb50hb, lb60mb, lb60fb, lb60hb, lb70mb, lb70fb, lb70hb, lb80mb, lb80fb, lb80hb, lb90mb, lb90fb, lb90hb,lb100mb,lb100fb,lb100hb;

            lb0h = lb0m + lb0f;lb0mb = Math.Round(100 * ((double)lb0m / ((double)lb0h==0?1: (double)lb0h)), 1);lb0fb = Math.Round(100 * ((double)lb0f / ((double)lb0h == 0 ? 1 : (double)lb0h)), 1);
            lb10h = lb10m + lb10f; lb10mb = Math.Round(100 * ((double)lb10m / ((double)lb10h == 0 ? 1 : (double)lb10h)), 1); lb10fb = Math.Round(100 * ((double)lb10f / (double)lb10h == 0 ? 1 : (double)lb10h), 1);
            lb20h = lb20m + lb20f; lb20mb = Math.Round(100 * ((double)lb20m / ((double)lb20h==0?1: (double)lb20h)), 1); lb20fb = Math.Round(100 * ((double)lb20f / ((double)lb20h==0?1: (double)lb20h)), 1);
            lb30h = lb30m + lb30f; lb30mb = Math.Round(100 * ((double)lb30m / ((double)lb30h==0?1: (double)lb30h)), 1); lb30fb = Math.Round(100 * ((double)lb30f / ((double)lb30h==0?1: (double)lb30h)), 1);
            lb40h = lb40m + lb40f; lb40mb = Math.Round(100 * ((double)lb40m / ((double)lb40h==0?1: (double)lb40h)), 1); lb40fb = Math.Round(100 * ((double)lb40f / ((double)lb40h==0?1: (double)lb40h)), 1);
            lb50h = lb50m + lb50f; lb50mb = Math.Round(100 * ((double)lb50m / ((double)lb50h==0?1: (double)lb50h)), 1); lb50fb = Math.Round(100 * ((double)lb50f / ((double)lb50h==0?1: (double)lb50h)), 1);
            lb60h = lb60m + lb60f; lb60mb = Math.Round(100 * ((double)lb60m / ((double)lb60h==0?1: (double)lb60h)), 1); lb60fb = Math.Round(100 * ((double)lb60f / ((double)lb60h==0?1: (double)lb60h)), 1);
            lb70h = lb70m + lb70f; lb70mb = Math.Round(100 * ((double)lb70m / ((double)lb70h==0?1: (double)lb70h)), 1); lb70fb = Math.Round(100 * ((double)lb70f / ((double)lb70h==0?1: (double)lb70h)), 1);
            lb80h = lb80m + lb80f; lb80mb = Math.Round(100 * ((double)lb80m / ((double)lb80h==0?1: (double)lb80h)), 1); lb80fb = Math.Round(100 * ((double)lb80f / ((double)lb80h==0?1: (double)lb80h)), 1);
            lb90h = lb90m + lb90f; lb90mb = Math.Round(100 * ((double)lb90m / ((double)lb90h==0?1: (double)lb90h)), 1); lb90fb = Math.Round(100 * ((double)lb90f / ((double)lb90h == 0 ? 1 : (double)lb90h)), 1);

            lb100m = lb0m + lb10m + lb20m + lb30m + lb40m + lb50m + lb60m + lb70m + lb80m + lb90m;
            lb100f = lb0f + lb10f + lb20f + lb30f + lb40f + lb50f + lb60f + lb70f + lb80f + lb90f;
            lb100h = lb100m + lb100f;

            lb0hb= Math.Round(100 * ((double)lb0h / ((double)lb100h == 0 ? 1 : (double)lb100h)), 1);
            lb10hb = Math.Round(100 * ((double)lb10h / ((double)lb100h== 0 ? 1 : (double)lb100h)), 1);
            lb20hb = Math.Round(100 * ((double)lb20h / ((double)lb100h== 0 ? 1 : (double)lb100h)), 1);
            lb30hb = Math.Round(100 * ((double)lb30h / ((double)lb100h== 0 ? 1 : (double)lb100h)), 1);
            lb40hb = Math.Round(100 * ((double)lb40h / ((double)lb100h== 0 ? 1 : (double)lb100h)), 1);
            lb50hb = Math.Round(100 * ((double)lb50h / ((double)lb100h== 0 ? 1 : (double)lb100h)), 1);
            lb60hb = Math.Round(100 * ((double)lb60h / ((double)lb100h== 0 ? 1 : (double)lb100h)), 1);
            lb70hb = Math.Round(100 * ((double)lb70h / ((double)lb100h== 0 ? 1 : (double)lb100h)), 1);
            lb80hb = Math.Round(100 * ((double)lb80h / ((double)lb100h== 0 ? 1 : (double)lb100h)), 1);
            lb90hb = Math.Round(100 * ((double)lb90h / ((double)lb100h == 0 ? 1 : (double)lb100h)), 1);
            lb100mb= Math.Round(100 * ((double)lb100m / ((double)lb100h == 0 ? 1 : (double)lb100h)), 1);
            lb100fb = Math.Round(100 * ((double)lb100f / ((double)lb100h == 0 ? 1 : (double)lb100h)), 1);
            lb100hb = Math.Round(100 * ((double)lb100h / ((double)lb100h == 0 ? 1 : (double)lb100h)), 1);

            return Json(new { lb0m, lb0f, lb10m, lb10f, lb20m, lb20f, lb30m, lb30f, lb40m, lb40f, lb50m, lb50f, lb60m, lb60f, lb70m, lb70f, lb80m, lb80f, lb90m, lb90f, lb0h, lb10h, lb20h, lb30h, lb40h, lb50h, lb60h, lb70h, lb80h, lb90h, lb100m, lb100f, lb100h, lb0mb, lb0fb, lb0hb, lb10mb, lb10fb, lb10hb, lb20mb, lb20fb, lb20hb, lb30mb, lb30fb, lb30hb, lb40mb, lb40fb, lb40hb, lb50mb, lb50fb, lb50hb, lb60mb, lb60fb, lb60hb, lb70mb, lb70fb, lb70hb, lb80mb, lb80fb, lb80hb, lb90mb, lb90fb, lb90hb , lb100mb, lb100fb, lb100hb }, JsonRequestBehavior.AllowGet);
        }

    }
}