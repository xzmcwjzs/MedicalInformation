using MalignantTumorSystem.WebApplication.Common.MyAttributes;
using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Common;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    [MyLogin]
    public class PCCSCController : Controller
    {
        //
        // GET: /PCCSC/
        [Inject]
        public IShare_ProvinceService provinceService { get; set; }
         [Inject]
        public IShare_CityService cityService { get; set; }
         [Inject]
        public IShare_CountyService countyService { get; set; }
         [Inject]
        public IShare_StreetService streetService { get; set; }
         [Inject]
        public IShare_CommunityInfoService communityInfoService { get; set; }
        public ActionResult Province()
        {
            var provinceList = provinceService.LoadEntityAsNoTracking(t=>true);
            return Json(provinceList,JsonRequestBehavior.AllowGet);
        }
        //根据省的代码  加载市
        public ActionResult City()
        {
            string parentCode = CommonFunc.SafeGetStringFromObj(Request["code"]); 
            if (parentCode != "")
            {
               var cityList = cityService.LoadEntityAsNoTracking(t => t.parent_code==parentCode);
               return Json(cityList, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
            
        }
        public ActionResult County() {
            string parentCode = CommonFunc.SafeGetStringFromObj(Request["code"]);
            if (parentCode != "")
            {
                var countyList = countyService.LoadEntityAsNoTracking(t => t.parent_code == parentCode);
                return Json(countyList, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult Street()
        {
            string parentCode = CommonFunc.SafeGetStringFromObj(Request["code"]);
            if (parentCode != "")
            {
                var streetList = streetService.LoadEntityAsNoTracking(t => t.parent_code == parentCode);
                return Json(streetList, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult Community()
        {
            string parentCode = CommonFunc.SafeGetStringFromObj(Request["code"]);
            if (parentCode != "")
            {
                var communityList = communityInfoService.LoadEntityAsNoTracking(t => t.street_code == parentCode);
                return Json(communityList, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

    }
}
