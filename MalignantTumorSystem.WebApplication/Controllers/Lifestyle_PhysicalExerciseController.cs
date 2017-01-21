using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.Model;
using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Common;
using Ninject;
using MalignantTumorSystem.WebApplication.Helpers;
using MalignantTumorSystem.Model.SearchParam;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    public class Lifestyle_PhysicalExerciseController : BaseTopController
    {
        //
        // GET: /Lifestyle_PhysicalExercise/
        [Inject]
        public IChronic_disease_PhysicalExerciseService diseasePhysicalExerciseService { get; set; }
        [Inject]
        public IChronic_disease_PhysicalExercise_AddService diseasePhysicalExerciseAddService { get; set; }

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
        //新增页面
        public ActionResult PhysicalExercise()
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
            var diseasePhysicalExerciseList = diseasePhysicalExerciseService.LoadSearchEntities(commonParam);
            totalCount = commonParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<Chronic_disease_PhysicalExercise> result = new List<Chronic_disease_PhysicalExercise>();
            result.AddRange(diseasePhysicalExerciseList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<Chronic_disease_PhysicalExercise>> query = new PagerQuery<PagerInfo, List<Chronic_disease_PhysicalExercise>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            return View();
        }
        //提交  更新页面
        public ActionResult AddAndUpdate()
        {
            string id = Request["id"];
            string fill_community_code = Request["community_code"];
            string worker = Request["worker"];
            Chronic_disease_PhysicalExercise entity = new Chronic_disease_PhysicalExercise();
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
            string id_card_number = CommonFunc.SafeGetStringFromObj(Request["id_card_number"]);
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

            entity.physical_1 = Request["run"];
            entity.physical_1_time = Request["every_time1"];
            entity.physical_1_week = Request["week1"];

            entity.physical_2 = Request["cut_it"];
            entity.physical_2_week = Request["week2"];
            entity.physical_2_time = Request["every_time2"];
            entity.physical_2_speed = Request["speed2"];


            entity.physical_3 = Request["by_bike"];
            entity.physical_3_week = Request["week3"];
            entity.physical_3_time = Request["every_time3"];
            entity.physical_3_speed = Request["speed3"];


            entity.physical_4 = Request["swim"];
            entity.physical_4_week = Request["week4"];
            entity.physical_4_time = Request["every_time4"];

            entity.physical_5 = Request["circuit"];
            entity.physical_5_week = Request["week5"];
            entity.physical_5_time = Request["every_time5"];

            entity.physical_6 = Request["ping_pong"];
            entity.physical_6_week = Request["week6"];
            entity.physical_6_time = Request["every_time6"];


            entity.physical_7 = Request["badminton"];
            entity.physical_7_week = Request["week7"];
            entity.physical_7_time = Request["every_time7"];

            entity.physical_8 = Request["football"];
            entity.physical_8_week = Request["week8"];
            entity.physical_8_time = Request["every_time8"];

            entity.physical_9 = Request["basketball"];
            entity.physical_9_week = Request["week9"];
            entity.physical_9_time = Request["every_time9"];

            entity.physical_10 = Request["tennis"];
            entity.physical_10_week = Request["week10"];
            entity.physical_10_time = Request["every_time10"];

            entity.physical_11 = Request["baseball"];
            entity.physical_11_week = Request["week11"];
            entity.physical_11_time = Request["every_time11"];

            entity.physical_12 = Request["golf"];
            entity.physical_12_week = Request["week12"];
            entity.physical_12_time = Request["every_time12"];

            entity.physical_13 = Request["bowling"];
            entity.physical_13_week = Request["week13"];
            entity.physical_13_time = Request["every_time13"];

            entity.physical_14 = Request["shadowboxing"];
            entity.physical_14_week = Request["week14"];
            entity.physical_14_time = Request["every_time14"];

            entity.physical_15 = Request["taekwondo"];
            entity.physical_15_week = Request["week15"];
            entity.physical_15_time = Request["every_time15"];

            entity.physical_16 = Request["mountaineering"];
            entity.physical_16_week = Request["week16"];
            entity.physical_16_time = Request["every_time16"];

            entity.physical_17 = Request["skip"];
            entity.physical_17_week = Request["week17"];
            entity.physical_17_time = Request["every_time17"];

            entity.physical_other = Request["other0"];
            entity.physical_other_frequency = Request["frequency0"];

            entity.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
            entity.worker_user_name = worker;

            List<Chronic_disease_PhysicalExercise_Add> subjectiveList = new List<Chronic_disease_PhysicalExercise_Add>();
            for (int i = 1; i < 7; i++)
            {
                if (!string.IsNullOrEmpty(Request["other" + i]))
                {
                    Chronic_disease_PhysicalExercise_Add entity1 = new Chronic_disease_PhysicalExercise_Add();
                    entity1.id = Guid.NewGuid().ToString();
                    entity1.add_id = entity.id;
                    entity1.physical = Request["other" + i];
                    entity1.frequency = Request["frequency" + i];

                    if (entity1.physical != null)
                    {
                        subjectiveList.Add(entity1);
                    }
                }
            }

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
                if (diseasePhysicalExerciseService.AddEntity(entity) && diseasePhysicalExerciseAddService.UpdateSubjective(subjectiveList,entity.id))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.Physical.ToString();

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
                if (diseasePhysicalExerciseService.UpdateEntity(entity) && diseasePhysicalExerciseAddService.UpdateSubjective(subjectiveList,entity.id))
                {
                    msg = "修改成功";
                }
            }
            return Content(msg + ',' + entity.id);
        }

        //显示页面
        public ActionResult Show()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            if (!string.IsNullOrEmpty(id))
            {
                var result = diseasePhysicalExerciseService.LoadEntityAsNoTracking(t => t.id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult ShowAdd()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            if (!string.IsNullOrEmpty(id))
            {
                var result = diseasePhysicalExerciseAddService.LoadEntityAsNoTracking(t => t.add_id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

    }
}
