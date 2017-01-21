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
    public class MedicalHistory_HospitalizationController : BaseTopController
    {
        //
        // GET: /MedicalHistory_Hospitalization/
        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IComm_EHR_AbstractService eHRAbstractService { get; set; }
        [Inject]
        public IComm_ResidentFile_Change_AddressService residentFileChangeAddressService { get; set; }
        [Inject]
        public IChronic_disease_HospitalizationService disease_HospitalizationService { get; set; }
        [Inject]
        public IChronic_disease_Comm_DiagnosticService disease_Comm_DiagnosticService { get; set; }
        [Inject]
        public IChronic_disease_Hospitalization_ConsultationRecordService disease_Hospitalization_ConsultationRecordService { get; set; }
        [Inject]
        public IChronic_disease_Hospitalization_CourseRecordService disease_Hospitalization_CourseRecordService { get; set; }
        [Inject]
        public IChronic_disease_Hospitalization_DischargeAbstractService disease_Hospitalization_DischargeAbstractService { get; set; }
        [Inject]
        public IChronic_disease_Hospitalization_ExpensesService disease_Hospitalization_ExpensesService { get; set; }
        [Inject]
        public IChronic_disease_Hospitalization_DischargeAbstract_AdviceService disease_Hospitalization_DischargeAbstract_AdviceService { get; set; }
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

            string hospitalizationstart = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["hospitalizationstart"]).Trim());
            string hospitalizationend = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["hospitalizationend"]).Trim());
            string judge = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["judge"]).Trim());
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
            MedicalHistory_HospitalizationParam hospitalizationParam = new MedicalHistory_HospitalizationParam()
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
                address = address,
                hospitalizationstart = hospitalizationstart,
                hospitalizationend = hospitalizationend,
                judge = judge
            };
            var disease_HospitalizationList = disease_HospitalizationService.LoadSearchEntities(hospitalizationParam);
            totalCount = hospitalizationParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<Chronic_disease_Hospitalization> result = new List<Chronic_disease_Hospitalization>();
            result.AddRange(disease_HospitalizationList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<Chronic_disease_Hospitalization>> query = new PagerQuery<PagerInfo, List<Chronic_disease_Hospitalization>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View();
        }
        //新增页面
        public ActionResult Hospitalization()
        {
            Comm_Platform_Worker workerModel = Session["worker"] as Comm_Platform_Worker;
            ViewBag.real_name = CommonFunc.SafeGetStringFromObj(workerModel.real_name);
            ViewBag.worker = CommonFunc.SafeGetStringFromObj(workerModel.user_name);
            ViewBag.community_code = CommonFunc.SafeGetStringFromObj(workerModel.region_code);
            ViewBag.type = CommonFunc.SafeGetStringFromObj(workerModel.company_classfy);
            ViewBag.departments = CommonFunc.SafeGetStringFromObj(workerModel.department);

            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            string no = CommonFunc.SafeGetStringFromObj(Request.QueryString["NO"]);
            string resident_id = CommonFunc.SafeGetStringFromObj(Request.QueryString["resident_id"]);
            ViewBag.id = id;
            ViewBag.no = no;
            ViewBag.resident_id = resident_id;
            return View();
        }
        //保存
        public ActionResult AddAndUpdate()
        {
            string id = Request["id"];
            string fill_community_code = Request["community_code"];
            string worker = Request["worker"];
            Chronic_disease_Hospitalization entity = new Chronic_disease_Hospitalization();
            //将诊断信息放到诊断信息表中
            Chronic_disease_Comm_Diagnostic dia = new Chronic_disease_Comm_Diagnostic();
 
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
            if (string.IsNullOrEmpty(Request["birth_date"]))
            {
                entity.birth_date = null;
            }
            else
            {
                entity.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["birth_date"]));
            }
             
            entity.permanent_address = Request["perment_community_address"];
            entity.post_code = Request["zipCode"];
            entity.community_code = Request["ddlCommunity"];
             
            entity.nationality = Request["nationality"];
            entity.nation = Request["ddlNation"];
            entity.marriage = Request["ddlMarrigeState"];
            entity.blood_group = Request["ddlABOBloodType"];
            entity.culture = Request["ddlEducationQualification"];
            entity.phone = Request["txtIndividualPhone"];
            entity.contact_person = Request["txtcontact_name"];
            entity.email = Request["txtEmail"];
            entity.contact_phone = Request["txtcontact_phone"];
            entity.relationship = Request["ddlcontact_my_relationship"];
            if (string.IsNullOrEmpty(Request["data"]))
            {
                entity.hospitalization_date = null;
            }
            else
            {
                entity.hospitalization_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
            }
            
            entity.hospitalization_number = Request["number"];
            entity.bed_number = Request["bed_number"];
            entity.hospital = Request["hospital"];
            entity.department = Request["department"];

            entity.zs = Request["zs"];
            entity.xbs = Request["xbs"];
            entity.jws = Request["jws"];
            entity.t = Request["t"];
            entity.p = Request["p"];
            entity.r = Request["r"];
            entity.ssy1 = Request["ssy"];
            entity.szy1 = Request["szy"];
            entity.ssy2 = Request["ssy1"];
            entity.szy2 = Request["szy1"];
            entity.other = Request["other"];

            entity.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
            entity.worker_user_name = worker;
            entity.sign = "0";

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
                if (disease_HospitalizationService.AddEntity(entity))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.Hospitalization.ToString();

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
                if (disease_HospitalizationService.UpdateEntity(entity))
                {
                    msg = "保存成功";
                }
            }
            return Content(msg + ',' + entity.id); 
        }

        //提交
        public ActionResult Sure()
        {
            string id = Request["id"];
            string fill_community_code = Request["community_code"];
            string worker = Request["worker"];
            Chronic_disease_Hospitalization entity = new Chronic_disease_Hospitalization();
            //将诊断信息放到诊断信息表中
            Chronic_disease_Comm_Diagnostic dia = new Chronic_disease_Comm_Diagnostic();

            if (string.IsNullOrEmpty(id))
            {
                entity.id = Guid.NewGuid().ToString();
                entity.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                entity.sign = "1";
            }
            else
            {
                entity.id = id;
                entity.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                entity.sign = "1";
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
            if (string.IsNullOrEmpty(Request["birth_date"]))
            {
                entity.birth_date = null;
            }
            else
            {
                entity.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["birth_date"]));
            }

            entity.permanent_address = Request["perment_community_address"];
            entity.post_code = Request["zipCode"];
            entity.community_code = Request["ddlCommunity"];

            entity.nationality = Request["nationality"];
            entity.nation = Request["ddlNation"];
            entity.marriage = Request["ddlMarrigeState"];
            entity.blood_group = Request["ddlABOBloodType"];
            entity.culture = Request["ddlEducationQualification"];
            entity.phone = Request["txtIndividualPhone"];
            entity.contact_person = Request["txtcontact_name"];
            entity.email = Request["txtEmail"];
            entity.contact_phone = Request["txtcontact_phone"];
            entity.relationship = Request["ddlcontact_my_relationship"];
            if (string.IsNullOrEmpty(Request["data"]))
            {
                entity.hospitalization_date = null;
            }
            else
            {
                entity.hospitalization_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
            }

            entity.hospitalization_number = Request["number"];
            entity.bed_number = Request["bed_number"];
            entity.hospital = Request["hospital"];
            entity.department = Request["department"];

            entity.zs = Request["zs"];
            entity.xbs = Request["xbs"];
            entity.jws = Request["jws"];
            entity.t = Request["t"];
            entity.p = Request["p"];
            entity.r = Request["r"];
            entity.ssy1 = Request["ssy"];
            entity.szy1 = Request["szy"];
            entity.ssy2 = Request["ssy1"];
            entity.szy2 = Request["szy1"];
            entity.other = Request["other"];

            entity.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
            entity.worker_user_name = worker;
            entity.sign = "1";

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
                if (disease_HospitalizationService.AddEntity(entity))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.Hospitalization.ToString();

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
                if (disease_HospitalizationService.UpdateEntity(entity))
                {
                    msg = "提交成功";
                }
            }
            return Content(msg + ',' + entity.id); 
        }

        public ActionResult EmergencyRecords()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            ViewBag.id = id;
            return View();
        }

        public ActionResult ListAll()
        {
            Comm_Platform_Worker workerModel = Session["worker"] as Comm_Platform_Worker;
            string region_code = CommonFunc.SafeGetStringFromObj(workerModel.region_code);
            string dell_user_name = CommonFunc.SafeGetStringFromObj(workerModel.user_name);
            string resident_id = CommonFunc.SafeGetStringFromObj(Request.QueryString["resident_id"]);
            string resident_name = CommonFunc.SafeGetStringFromObj(Request.QueryString["resident_name"]);


            int pageIndex = CommonFunc.SafeGetIntFromObj(this.Request["pageIndex"], 1);
            int pageSize = this.Request["pageSize"] == null ? PageSize.GetPageSize : int.Parse(Request["pageSize"]);
            int totalCount = 0;

            var disease_HospitalizationList = disease_HospitalizationService.LoadPageEntities(pageSize, pageIndex, out totalCount, t => t.resident_id.Contains(resident_id), t => t.hospitalization_date, false);

            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<Chronic_disease_Hospitalization> result = new List<Chronic_disease_Hospitalization>();
            result.AddRange(disease_HospitalizationList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<Chronic_disease_Hospitalization>> query = new PagerQuery<PagerInfo, List<Chronic_disease_Hospitalization>>(pager, result);
            ViewData.Model = query;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.resident_id = resident_id;
            ViewBag.resident_name = resident_name;
            return View();
        }

        public ActionResult Show()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            if (id != "")
            {
                var result = disease_HospitalizationService.LoadEntityAsNoTracking(t => t.id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ShowConsultationRecord()
        {
            string number =CommonFunc.SafeGetStringFromObj(Request.QueryString["number"]);
            string id_card_number = CommonFunc.SafeGetStringFromObj(Request.QueryString["id_card_number"]);
            if (number != "" && id_card_number != "") {
                var result = disease_Hospitalization_ConsultationRecordService.LoadEntityAsNoTracking(t=>t.hospitalization_number.Contains(number) && t.id_card_number.Contains(id_card_number));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ShowCourseRecord()
        {
            string number = CommonFunc.SafeGetStringFromObj(Request.QueryString["number"]);
            string id_card_number = CommonFunc.SafeGetStringFromObj(Request.QueryString["id_card_number"]);
            if (number != "" && id_card_number != "")
            {
                var result = disease_Hospitalization_CourseRecordService.LoadEntityAsNoTracking(t => t.hospitalization_number.Contains(number) && t.id_card_number.Contains(id_card_number));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ShowDischargeAbstract()
        {
            string number = CommonFunc.SafeGetStringFromObj(Request.QueryString["number"]);
            string id_card_number = CommonFunc.SafeGetStringFromObj(Request.QueryString["id_card_number"]);
            if (number != "" && id_card_number != "")
            {
                var result = disease_Hospitalization_DischargeAbstractService.LoadEntityAsNoTracking(t => t.hospitalization_number.Contains(number) && t.id_card_number.Contains(id_card_number));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult ShowAdvice()
        {
            string contact_id =CommonFunc.SafeGetStringFromObj(Request.QueryString["contact_id"]);
            if (contact_id != "")
            {
                var result = disease_Hospitalization_DischargeAbstract_AdviceService.LoadEntityAsNoTracking(t=>t.advice_id.Contains(contact_id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ShowHospitalizationExpenses()
        {
            string number = CommonFunc.SafeGetStringFromObj(Request.QueryString["number"]);
            string id_card_number = CommonFunc.SafeGetStringFromObj(Request.QueryString["id_card_number"]);
            if (number != "" && id_card_number != "")
            {
                var result = disease_Hospitalization_ExpensesService.LoadEntityAsNoTracking(t => t.hospitalization_number.Contains(number) && t.id_card_number.Contains(id_card_number));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

       
    }
}
