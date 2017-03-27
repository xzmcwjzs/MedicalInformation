using MalignantTumorSystem.Common;
using MalignantTumorSystem.Model.ADOModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.ADO.StatisticsOperation;

namespace Statistics.WebApp.Controllers
{
    public class PCCSCController : Controller
    {
        Share_ProvinceADORepository provinceADORepository = new Share_ProvinceADORepository();
        Share_CityADORepository cityADORepository = new Share_CityADORepository();
        Share_CountyADORepository countyADORepository = new Share_CountyADORepository();
        Share_StreetADORepository streetADORepository = new Share_StreetADORepository();
        Share_CommunityInfoADORepository communityInfoADORepository = new Share_CommunityInfoADORepository();
        public ActionResult Province()
        {
            //Comm_Platform_Worker model = Session["worker"] as Comm_Platform_Worker;
            //string code = CommonFunc.SafeGetStringFromObj(model.region_code);
            string code = CommonFunc.SafeGetStringFromObj(Request["code"]);
            string provinceCode;
            if (!string.IsNullOrEmpty(code) && code.Length >= 2)
            {
                provinceCode = code.Substring(0, 2);
                var list = provinceADORepository.GetProvinceByCode(provinceCode);
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var list = provinceADORepository.GetList();
                return Json(list, JsonRequestBehavior.AllowGet);
            }

        }
        public ActionResult City()
        {
            string parentCode = CommonFunc.SafeGetStringFromObj(Request["parentcode"]);
            //Comm_Platform_Worker model = Session["worker"] as Comm_Platform_Worker;
            //string code = CommonFunc.SafeGetStringFromObj(model.region_code);
            string code = CommonFunc.SafeGetStringFromObj(Request["code"]);
            string cityCode;
            if (!string.IsNullOrEmpty(code) && code.Length >= 4)
            {
                cityCode = code.Substring(0, 4);
                var list = cityADORepository.GetCityByCode(cityCode);
                return Json(list, JsonRequestBehavior.AllowGet);
            }else if (code.Length < 4 && code.Length >= 2)
            {
                parentCode = code.Substring(0, 2);
                var list = cityADORepository.GetCityByParentCode(parentCode);
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            else if (parentCode != "")
            {
                var list = cityADORepository.GetCityByParentCode(parentCode);
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }

        }
        public ActionResult County()
        {
            string parentCode = CommonFunc.SafeGetStringFromObj(Request["parentcode"]);
            //Comm_Platform_Worker model = Session["worker"] as Comm_Platform_Worker;
            //string code = CommonFunc.SafeGetStringFromObj(model.region_code);
            string code = CommonFunc.SafeGetStringFromObj(Request["code"]);
            string countyCode;
            if (!string.IsNullOrEmpty(code) && code.Length >= 6)
            {
                countyCode = code.Substring(0, 6);
                var list = countyADORepository.GetCountyByCode(countyCode);
                return Json(list, JsonRequestBehavior.AllowGet);
            }else if (code.Length < 6 && code.Length >= 4)
            {
                parentCode = code.Substring(0, 4);
                var list = countyADORepository.GetCountyByParentCode(parentCode);
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            else if ( parentCode != "")
            {
                var list = countyADORepository.GetCountyByParentCode(parentCode);
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult Street()
        {
            string parentCode = CommonFunc.SafeGetStringFromObj(Request["parentcode"]);
            //Comm_Platform_Worker model = Session["worker"] as Comm_Platform_Worker;
            //string code = CommonFunc.SafeGetStringFromObj(model.region_code);
            string code = CommonFunc.SafeGetStringFromObj(Request["code"]);
            string streetCode;
            if (!string.IsNullOrEmpty(code) && code.Length >= 9)
            {
                streetCode = code.Substring(0, 9);
                var list = streetADORepository.GetStreetByCode(streetCode);
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            else if (code.Length < 9 && code.Length >= 6)
            {
                parentCode = code.Substring(0, 6);
                var list = streetADORepository.GetStreetByParentCode(parentCode);
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            else if (parentCode != "")
            {
                var list = streetADORepository.GetStreetByParentCode(parentCode);
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult Community()
        {
            string parentCode = CommonFunc.SafeGetStringFromObj(Request["parentcode"]);
            //Comm_Platform_Worker model = Session["worker"] as Comm_Platform_Worker;
            //string code = CommonFunc.SafeGetStringFromObj(model.region_code);
            string code = CommonFunc.SafeGetStringFromObj(Request["code"]);
            string communityCode;
            if (!string.IsNullOrEmpty(code) && code.Length >= 12)
            {
                communityCode = code.Substring(0, 12);
                var list = communityInfoADORepository.GetCommunityByCode(communityCode);
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            else if (code.Length <12 && code.Length >= 9)
            {
                parentCode = code.Substring(0, 9);
                var list = communityInfoADORepository.GetCommunityByParentCode(parentCode);
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            else if (parentCode != "")
            {
                var list = communityInfoADORepository.GetCommunityByParentCode(parentCode);
                return Json(list, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
    }
}