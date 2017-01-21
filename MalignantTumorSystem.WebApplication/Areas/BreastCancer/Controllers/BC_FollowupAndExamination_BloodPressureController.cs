 using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model;
using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Model.SearchParam;
using MalignantTumorSystem.Common;
using Ninject;
using MalignantTumorSystem.WebApplication.Helpers;

namespace MalignantTumorSystem.WebApplication.Areas.BreastCancer.Controllers
{ 
    public class BC_FollowupAndExamination_BloodPressureController : BaseTopController
    {
        //
        // GET: /BreastCancer/BC_FollowupAndExamination_BloodPressure/
        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IComm_EHR_AbstractService eHRAbstractService { get; set; }
        [Inject]
        public IComm_ResidentFile_Change_AddressService residentFileChangeAddressService { get; set; }
        [Inject]
        public IChronic_disease_BloodPressureService disease_BloodPressureService { get; set; }
        [Inject]
        public IChronic_disease_BloodPressure_AddService disease_BloodPressure_AddService { get; set; }
        #region 框架页

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
        #endregion

        //新增 页面
        public ActionResult BloodPressure()
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
        //列表页
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
            var disease_Comm_Testing_BloodList = disease_BloodPressureService.LoadSearchEntities(commonParam);
            totalCount = commonParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<Chronic_disease_BloodPressure> result = new List<Chronic_disease_BloodPressure>();
            result.AddRange(disease_Comm_Testing_BloodList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<Chronic_disease_BloodPressure>> query = new PagerQuery<PagerInfo, List<Chronic_disease_BloodPressure>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View();
        }

        //新增 更新
        public ActionResult AddAndUpdate()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            string fill_community_code = CommonFunc.SafeGetStringFromObj(Request["community_code"]);
            string worker = CommonFunc.SafeGetStringFromObj(Request["worker"]);
            Chronic_disease_BloodPressure entity = new Chronic_disease_BloodPressure();

            string id_card_number = CommonFunc.SafeGetStringFromObj(Request["id_card_number"]);
            string ddlCommunity = CommonFunc.SafeGetStringFromObj(Request["ddlCommunity"]);

            var result = disease_BloodPressureService.LoadEntityAsNoTracking(t => t.id_card_number == id_card_number).FirstOrDefault();
            string bpId = string.Empty;
            if (result == null)
            {
                bpId = "";
            }
            else
            {
                bpId = MalignantTumorSystem.Common.CommonFunc.SafeGetStringFromObj(result.id);
            } 
            
            string residentId = CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t => t.id_card_number == id_card_number).Select(t => t.resident_id).FirstOrDefault());
            if (string.IsNullOrEmpty(bpId))
            {
                entity.id = Guid.NewGuid().ToString();
                entity.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                if (!string.IsNullOrEmpty(residentId))
                {
                    entity.resident_id = residentId; 
                }
                else
                {
                    entity.resident_id = residentFileService.GetNumberByCode1(ddlCommunity);
                }
            }
            else
            {
                entity.id = bpId;
                entity.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                entity.resident_id = CommonFunc.SafeGetStringFromObj(result.resident_id);
            }
            entity.name = Request["name"];
            entity.sex = Request["sex"];
            entity.id_card_number = Request["id_card_number"];
            entity.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["birth_date"]));
            entity.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
            entity.permanent_address = Request["perment_community_address"];
            entity.phone = Request["txtIndividualPhone"];      
    
            entity.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
            entity.worker_user_name = worker;
            entity.community_code = Request["ddlCommunity"];

            
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
                string[] propertyName = new string[] { "resident_name", "sex", "id_card_number", "community_code","permanent_home_address" };
                residentFileService.UpdatePartialPropertity(resident, propertyName);
            }

            // ================================================================
            System.Collections.Generic.List<Chronic_disease_BloodPressure_Add> subjectiveList = new System.Collections.Generic.List<Chronic_disease_BloodPressure_Add>();
            for (int i = 0; i < 24; i++)
            {
                if (!string.IsNullOrEmpty(Request["date" + i]))
                {
                    Chronic_disease_BloodPressure_Add entitys = new Chronic_disease_BloodPressure_Add();
                    entitys.id = Guid.NewGuid().ToString();
                    entitys.add_id = entity.id;
                    entitys.data = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["date" + i] + " " + Request["ttime" + i]));
                    entitys.time = Request["ttime" + i];
                    entitys.ssy = Request["ssy" + i];
                    entitys.szy = Request["szy" + i];
                    entitys.ssy1 = Request["K_ssy" + i];
                    entitys.szy1 = Request["K_szy" + i];
                    entitys.heart = Request["heart" + i];
                    entitys.place = Request["place" + i];
                    entitys.state = Request["state" + i];

                    subjectiveList.Add(entitys);
                }
            }

            string msg = "";
            if (string.IsNullOrEmpty(bpId))
            {
                if (disease_BloodPressureService.AddEntity(entity)&&disease_BloodPressure_AddService.AddRangeEntity(subjectiveList))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.BloodPressure.ToString();

                    if (eHRAbstractService.AddEntity(ehr))
                    {
                        msg = "保存成功";
                    }
                    else
                    {
                        msg = "保存失败";
                    }
                }

            }
            else
            {
                if (disease_BloodPressureService.UpdateEntity(entity)&&disease_BloodPressure_AddService.AddRangeEntity(subjectiveList))
                {
                    msg = "保存成功";
                }
            }
            return Content(msg + ',' + entity.id);
        }

        public ActionResult ShowText2()
        {
            string id_card_number = CommonFunc.SafeGetStringFromObj(Request["id_card_number"]);
            string startD = string.Empty;
            string endD = string.Empty;
            if (id_card_number != "")
            {
                var result = disease_BloodPressure_AddService.GetListByNum(id_card_number, out startD, out endD);
                return Json(new { start = startD, end = endD, res=result }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
            
        }

        //列表 显示 查看
        public ActionResult Show()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            ViewBag.id = id;
            return View();
        }
        public ActionResult ShowAll()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            ViewBag.id = id;
            return View();
        }
        public ActionResult ShowAllDataBase()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            ViewBag.id = id;
            return View();
        }

        //最近一周检测处理
        public ActionResult ShowText()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            string startD = string.Empty;
            string endD = string.Empty;
            if (id != "")
            {
                var result = disease_BloodPressure_AddService.GetListById(id, out startD, out endD);
                return Json(new { start = startD, end = endD, res = result }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult ShowAllBasic()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            if (id != "")
            {
                var result = disease_BloodPressureService.LoadEntityAsNoTracking(t => t.id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ShowAllTime()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            if (id != "")
            {
                var result = disease_BloodPressure_AddService.GetDiffTimeList(id);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ShowAllText()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            string i = CommonFunc.SafeGetStringFromObj(Request["i"]);
            string year = CommonFunc.SafeGetStringFromObj(Request["year"]);
            string month = CommonFunc.SafeGetStringFromObj(Request["month"]);
            if (id != "")
            {
                var result = disease_BloodPressure_AddService.GetYearMonth(id, year, month);
                return Json(new { i = i, month = month, year = year, res = result }, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        [HttpPost]
        public ActionResult ShowAllDataBase(string id)
        {
            string tag = CommonFunc.SafeGetStringFromObj(id);
            if (tag != "")
            {
                var result = disease_BloodPressure_AddService.LoadEntityAsNoTracking(t => t.add_id.Contains(tag)).OrderByDescending(t => t.data);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

    }
}
