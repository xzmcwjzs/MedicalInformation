using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model;
using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Common;
using Ninject;
using MalignantTumorSystem.WebApplication.Helpers;
using MalignantTumorSystem.Model.SearchParam;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    public class Lifestyle_SmokeAndDrinkController : BaseTopController
    {
        //
        // GET: /Lifestyle_SmokeAndDrink/
        [Inject]
        public IChronic_disease_SmokeAndDrinkService diseaseSmokeAndDrinkService { get; set; }
        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IComm_EHR_AbstractService eHRAbstractService { get; set; }
        [Inject]
        public IComm_ResidentFile_Change_AddressService residentFileChangeAddressService { get; set; }


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
        public ActionResult Left()
        {
            return View();
        }
        //列表页面
        public ActionResult List()
        {
            Comm_Platform_Worker workerModel = Session["worker"] as Comm_Platform_Worker;
            if (workerModel == null)
            {
                redirectTo();
                return null;
            }
            string region_code = CommonFunc.SafeGetStringFromObj(workerModel.region_code);
            string dell_user_name = CommonFunc.SafeGetStringFromObj(workerModel.user_name);
            string name = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["names"]).Trim());
            string sex = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["sex"]).Trim());

            string birthdateBegin = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["txtBirthDateBegin"]).Trim());
            string birthdateEnd = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["txtBirthDateEnd"]).Trim());
            string id_card_number = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["idCard"]).Trim());
            string address = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["address"]).Trim());
            string s = string.Empty;
            //获取区域代码
            if (!string.IsNullOrEmpty(CommonFunc.SafeGetStringFromObj(Request["ddlProvince"])))
                s = CommonFunc.SafeGetStringFromObj(Request["ddlProvince"]);
                if (!string.IsNullOrEmpty(CommonFunc.SafeGetStringFromObj(Request["ddlCity"])))
                    s = CommonFunc.SafeGetStringFromObj(Request["ddlCity"]);
            if (!string.IsNullOrEmpty(CommonFunc.SafeGetStringFromObj(Request["ddlCounty"])))
                s = CommonFunc.SafeGetStringFromObj(Request["ddlCounty"]);
            if (!string.IsNullOrEmpty(CommonFunc.SafeGetStringFromObj(Request["ddlStreet"])))
                s = CommonFunc.SafeGetStringFromObj(Request["ddlStreet"]);
            if (!string.IsNullOrEmpty(CommonFunc.SafeGetStringFromObj(Request["ddlCommunity"])))
                s = CommonFunc.SafeGetStringFromObj(Request["ddlCommunity"]);
            if (s.Length > region_code.Length)
                region_code = s;

            int pageIndex = CommonFunc.SafeGetIntFromObj(this.Request["pageIndex"], 1);
            int pageSize = this.Request["pageSize"] == null ? PageSize.GetPageSize : int.Parse(Request["pageSize"]);
            int totalCount = 0;
            CommonParam commonParam = new CommonParam()
            {
                PageIndex = pageIndex,
                PageSize = pageSize,
                TotalCount = totalCount,
                region_code = region_code,
                name = name,
                sex = sex,
                txtBirthDateBegin = birthdateBegin,
                txtBirthDateEnd = birthdateEnd,
                idCard = id_card_number,
                address = address
            };
            var basicInformationList = diseaseSmokeAndDrinkService.LoadSearchEntities(commonParam);
            totalCount = commonParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<Chronic_disease_SmokeAndDrink> result = new List<Chronic_disease_SmokeAndDrink>();
            result.AddRange(basicInformationList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<Chronic_disease_SmokeAndDrink>> query = new PagerQuery<PagerInfo, List<Chronic_disease_SmokeAndDrink>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            return View();
        }
        //新增页面
        public ActionResult SmokeAndDrink()
        {
            Comm_Platform_Worker workerModel = Session["worker"] as Comm_Platform_Worker;
            ViewBag.real_name = CommonFunc.SafeGetStringFromObj(workerModel.real_name);
            ViewBag.worker = CommonFunc.SafeGetStringFromObj(workerModel.user_name);
            ViewBag.community_code = CommonFunc.SafeGetStringFromObj(workerModel.region_code);


            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            string no = CommonFunc.SafeGetStringFromObj(Request.QueryString["NO"]);
            string resident_id = CommonFunc.SafeGetStringFromObj(Request.QueryString["resident_id"]);
            ViewBag.id = id;
            ViewBag.no = no;
            ViewBag.resident_id = resident_id;
            return View();
        }

        //提交 更新页面
        public ActionResult AddAndUpdate()
        {
            string id = Request["id"];
            string fill_community_code = Request["community_code"];
            string worker = Request["worker"];
            Chronic_disease_SmokeAndDrink entity = new Chronic_disease_SmokeAndDrink();
            if (string.IsNullOrEmpty(id))
            {
                entity.id = Guid.NewGuid().ToString();
                entity.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
            }
            else
            {
                entity.id = id;
                entity.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
            }
            //根据身份证号查询个人信息表中是否存在此人信息，如果存在，则使用个人信息中的健康档案号，如果不存在，则创建一个新的17位的健康档案号
            string id_card_number=CommonFunc.SafeGetStringFromObj(Request["id_card_number"]);
            string ddlCommunity = CommonFunc.SafeGetStringFromObj(Request["ddlCommunity"]);
            string residentId = CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t => t.id_card_number == id_card_number).Select(t => t.resident_id).FirstOrDefault());
            if (string.IsNullOrEmpty(residentId))
            {
                entity.resident_id = residentFileService.GetNumberByCode1(ddlCommunity);
            }
            else
            {
                entity.resident_id = residentId;
            }
            entity.name = Request["name"];
            entity.sex = Request["sex"];
            entity.id_card_number = Request["id_card_number"];
            entity.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["birth_date"]));

            entity.permanent_address = Request["perment_community_address"];
            entity.post_code = Request["zipCode"];
            entity.community_code = Request["ddlCommunity"];

            //-----吸烟----
            entity.smoking = Request["smoking"];
            if (!string.IsNullOrEmpty(Request["times1"]))
            {
                entity.smoking_begin_year = Request["times1"];
            }
            else
            {
                entity.smoking_begin_year = "";
            }

            entity.smoking_daily_amount = Request["day_smoke"];
            if (!string.IsNullOrEmpty(Request["smoke_age"]))
            {
                entity.smoking_age = Request["smoke_age"].Split('年')[0];
            }
            else
            {
                entity.smoking_age = "";
            }

            if (!string.IsNullOrEmpty(Request["smoked"]))
            {
                entity.smoked = Request["smoked"];
            }
            else
            {
                entity.smoked = "";
            }

            if (!string.IsNullOrEmpty(Request["times2"]))
            {
                entity.smoked_begin_year = Request["times2"];
            }
            else
            {
                entity.smoked_begin_year = "";
            }

            if (!string.IsNullOrEmpty(Request["times3"]))
            {
                entity.smoked_smoking_again = Request["times3"];
            }
            else
            {
                entity.smoked_smoking_again = "";
            }

            if (!string.IsNullOrEmpty(Request["smoked_long"]))
            {
                entity.smoked_long_time = Request["smoked_long"].Split('年')[0];
            }
            else
            {
                entity.smoked_long_time = "";
            }
            entity.smoked_intent = Request["smoked_idea"];
            entity.smoked_second_hand = Request["smoke_twice"];
            entity.smoke_never = Request["smoke"];
            //-----饮酒-----
            entity.drinking = Request["drinking"];

            if (!string.IsNullOrEmpty(Request["times4"]))
            {
                entity.drinking_begin_year = Request["times4"];
            }
            else
            {
                entity.drinking_begin_year = "";
            }


            if (!string.IsNullOrEmpty(Request["drink_age"]))
            {
                entity.drinking_age = Request["drink_age"].Split('年')[0];
            }
            else
            {
                entity.drinking_age = "";
            }

            if (!string.IsNullOrEmpty(Request["times5"]))
            {
                entity.drunk_begin_year = Request["times5"];
            }
            else
            {
                entity.drunk_begin_year = "";
            }


            if (!string.IsNullOrEmpty(Request["times6"]))
            {
                entity.drunk_drinking_again = Request["times6"];
            }
            else
            {
                entity.drunk_drinking_again = "";
            }


            if (!string.IsNullOrEmpty(Request["drunk_long"]))
            {
                entity.drunk_long_time = Request["drunk_long"].Split('年')[0];
            }
            else
            {
                entity.drunk_long_time = "";
            }
            entity.drink_never = Request["drink"];
            //-----饮酒频率-----
            entity.drinking_spirit_frequency = Request["frequency1"];
            entity.drinking_beer_frequency = Request["frequency2"];
            entity.drinking_red_frequency = Request["frequency3"];
            entity.drinking_yellow_frequency = Request["frequency4"];
            entity.drinking_other_wine1 = Request["other"];
            entity.drinking_other_degree1 = Request["other_du"];
            entity.drinking_other_frequency = Request["frequency5"];


            entity.drinking_spirit_amount = Request["count1"];
            entity.drinking_beer_amount = Request["count2"];
            entity.drinking_red_amount = Request["count3"];
            entity.drinking_yellow_amount = Request["count4"];
            entity.drinking_other_wine2 = Request["other_wine"];
            entity.drinking_other_degree2 = Request["wine_degree"];
            entity.drinking_other_amount = Request["count5"];
                   
            entity.drinking_spirit_equivalent = Request["count1_dl"];
            entity.drinking_beer_equivalent = Request["count2_dl"];
            entity.drinking_red_equivalent = Request["count3_dl"];
            entity.drinking_yellow_equivalent = Request["count4_dl"];
            entity.drinking_other_equivalent = Request["count5_dl"];

            entity.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
            //entity.worker_user_name = Request["fillIdentity"];
            entity.worker_user_name = worker;
            //判断个人信息表中是否存在此人信息 2015-06-18 娄帅
            var dt = residentFileService.LoadEntityAsNoTracking(t => t.id_card_number == id_card_number);

            Comm_ResidentFile resident = new Comm_ResidentFile();
            resident.id = CommonFunc.SafeGetStringFromObj(dt.Select(t => t.id).FirstOrDefault());

            resident.resident_id = entity.resident_id;
            resident.resident_name = Request["name"];
            resident.sex = Request["sex"];
            resident.id_card_number = Request["id_card_number"];
            resident.birth_date = entity.birth_date;
            resident.community_code = Request["ddlCommunity"];
            resident.individual_phone = Request["phone"];
            resident.permanent_home_address = Request["perment_community_address"];
            resident.nationality_name = "中国";
            resident.nationality_code = "156";

            if (dt.Count() < 1)
            {
                resident.id = Guid.NewGuid().ToString();
                resident.community_code = Request["ddlCommunity"];
                if (entity.create_time == null)
                {
                    resident.create_time = CommonFunc.SafeGetDateTimeFromObj(DateTime.Now.ToString("yyyy-MM-dd"));
                }
                else
                {
                    resident.create_time = CommonFunc.SafeGetDateTimeFromObj(entity.create_time);
                }

                resident.worker_user_name = worker;

                residentFileService.AddEntity(resident);

                // 添加摘要

                Comm_EHR_Abstract ehr1 = new Comm_EHR_Abstract();
                ehr1.id = Guid.NewGuid().ToString();
                ehr1.resident_id = entity.resident_id;
                ehr1.community_code = entity.community_code;
                ehr1.create_time = DateTime.Now;
                ehr1.item_id = resident.id;
                ehr1.item_type = Model.Enum.EHRAbstractTypeEnum.ResidentInfo.ToString();

                eHRAbstractService.AddEntity(ehr1);

            }
            else
            {

                /** 根据身份证号查询个人信息表中是否存在此人信息，存在获取行政区划代码，与现在填写的常住地址作比较，不相同则将其添加到Comm_ResidentFile_Change_Address表中
                */

                string code = CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t => t.id_card_number == id_card_number).Select(t => t.community_code).FirstOrDefault());

                if (Request["ddlCommunity"] != code)
                {
                    Comm_ResidentFile_Change_Address address = new Comm_ResidentFile_Change_Address();
                    address.id = Guid.NewGuid().ToString();
                    address.contact_id = entity.id;
                    address.resident_id = entity.resident_id;
                    address.community_code = code;
                    address.fill_community_code = fill_community_code;
                    address.fill_person = worker;
                    address.permanent_address = CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t => t.id_card_number == id_card_number).Select(t => t.permanent_home_address).FirstOrDefault());
                    address.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));

                    residentFileChangeAddressService.AddEntity(address);
                }
                //resident.id = dt.Select(t=>t.id).ToString(); 
                string[] propertyName = new string[] { "resident_name", "sex", "id_card_number", "community_code", "individual_phone", "permanent_home_address" };
                residentFileService.UpdatePartialPropertity(resident, propertyName);
            }
            string msg = "";
            if (string.IsNullOrEmpty(id))
            {
                if (diseaseSmokeAndDrinkService.AddEntity(entity))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.SmokeAndDrink.ToString();

                    if (eHRAbstractService.AddEntity(ehr))
                    {
                        msg = "提交成功";
                    }
                    else
                    {
                        msg = "提交失败";
                    }
                }

            }
            else
            {
                if (diseaseSmokeAndDrinkService.UpdateEntity(entity))
                {
                    msg = "修改成功";
                }
            }
            return Content(msg + ',' + entity.id);
        }
        //显示页面
        public ActionResult Show()
        {
            string id =CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            if (!string.IsNullOrEmpty(id))
            {
                var result = diseaseSmokeAndDrinkService.LoadEntityAsNoTracking(t=>t.id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

    }
}
