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

namespace MalignantTumorSystem.WebApplication.Controllers
{
    public class MedicalHistory_DiagnosticInformationController : BaseTopController
    {
        //
        // GET: /MedicalHistory_DiagnosticInformation/
        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IComm_EHR_AbstractService eHRAbstractService { get; set; }
        [Inject]
        public IComm_ResidentFile_Change_AddressService residentFileChangeAddressService { get; set; }
        [Inject]
        public IICD_10_oldService iCD_10_oldService { get; set; }
        [Inject]
        public IChronic_disease_Comm_DiagnosticService disease_Comm_DiagnosticService { get; set; }
        [Inject]
        public IChronic_disease_Comm_DiagnosticAddService disease_Comm_DiagnosticAddService { get; set; }

        #region 基本框架页
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

        //新增页面
        public ActionResult Diagnostic()
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
            var disease_Comm_DiagnosticList = disease_Comm_DiagnosticService.LoadSearchEntities(commonParam);
            totalCount = commonParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<Chronic_disease_Comm_Diagnostic> result = new List<Chronic_disease_Comm_Diagnostic>();
            result.AddRange(disease_Comm_DiagnosticList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<Chronic_disease_Comm_Diagnostic>> query = new PagerQuery<PagerInfo, List<Chronic_disease_Comm_Diagnostic>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View();
        }

        //诊断疾病名称文本框自动搜索
        public ActionResult Handler()
        {
            string key = Request["q"];
            if (key != null && key != "")
            {
                var result = iCD_10_oldService.LoadEntityAsNoTracking(t => t.name.Contains(key));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        //打开显示修改
        public ActionResult Handler3()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            if (!string.IsNullOrEmpty(id))
            {
                var result = disease_Comm_DiagnosticService.LoadEntityAsNoTracking(t => t.id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult Handler4()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            if (!string.IsNullOrEmpty(id))
            {
                var result = disease_Comm_DiagnosticAddService.LoadEntityAsNoTracking(t => t.diag_id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        //新增更新操作
        public ActionResult AddAndUpdate()
        {
            string id = Request["id"];
            string fill_community_code = Request["community_code"];
            string worker = Request["worker"];
            Chronic_disease_Comm_Diagnostic entity = new Chronic_disease_Comm_Diagnostic();
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
            entity.names = Request["name"];
            entity.sex = Request["sex"];
            entity.age=Request["age"];
            entity.id_card_number = Request["id_card_number"];
            entity.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["birth_date"]));
            entity.address = Request["perment_community_address"];
            entity.phone = Request["phone"];
            if (string.IsNullOrEmpty(Request["time1"]))
            {
                entity.data1 = null;
            }
            else
            {
                entity.data1 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["time1"]));
            }
            if (string.IsNullOrEmpty(Request["time2"]))
            {
                entity.data2 = null;
            }
            else
            {
                entity.data2= CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["time2"]));
            }
            if (string.IsNullOrEmpty(Request["time3"]))
            {
                entity.data3 = null;
            }
            else
            {
                entity.data3= CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["time3"]));
            }
            if (string.IsNullOrEmpty(Request["time4"]))
            {
                entity.data4 = null;
            }
            else
            {
                entity.data4 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["time4"]));
            }
            if (string.IsNullOrEmpty(Request["time5"]))
            {
                entity.data5= null;
            }
            else
            {
                entity.data5= CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["time5"]));
            } 
            entity.name1 = Request["name1"];
            entity.name2 = Request["name2"];
            entity.name3 = Request["name3"];
            entity.name4 = Request["name4"];
            entity.name5 = Request["name5"];

            entity.numb1 = Request["numb1"];
            entity.numb2 = Request["numb2"];
            entity.numb3 = Request["numb3"];
            entity.numb4 = Request["numb4"];
            entity.numb5 = Request["numb5"];

            entity.hospital1 = Request["hospital1"];
            entity.hospital2 = Request["hospital2"];
            entity.hospital3 = Request["hospital3"];
            entity.hospital4 = Request["hospital4"];
            entity.hospital5 = Request["hospital5"];

            entity.doctor1 = Request["doctor1"];
            entity.doctor2 = Request["doctor2"];
            entity.doctor3 = Request["doctor3"];
            entity.doctor4 = Request["doctor4"];
            entity.doctor5 = Request["doctor5"];
            entity.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
            entity.worker = worker;
            entity.community_code = Request["ddlCommunity"];


            List<Chronic_disease_Comm_DiagnosticAdd> subjectiveList = new List<Chronic_disease_Comm_DiagnosticAdd>();
            for (int i = 1; i < 100; i++)
            {
                if (!string.IsNullOrEmpty(Request["name_" + i]))
                {
                    Chronic_disease_Comm_DiagnosticAdd entity1 = new Chronic_disease_Comm_DiagnosticAdd();
                    entity1.id = Guid.NewGuid().ToString();
                    entity1.diag_id = entity.id;
                    if (string.IsNullOrEmpty(Request["time_" + i]))
                    {
                        entity1.data = null;
                    }
                    else
                    {
                        entity1.data = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["time_" + i]));
                    } 
                    entity1.name = Request["name_" + i];
                    entity1.numb = Request["numb_" + i];
                    entity1.hospital = Request["hospital_" + i];
                    entity1.doctor = Request["doctor_" + i];

                    if (entity1.name != null)
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
                if (disease_Comm_DiagnosticService.AddEntity(entity) && disease_Comm_DiagnosticAddService.UpdateSubjective(subjectiveList, entity.id))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.DiaInfo.ToString();

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
                if (disease_Comm_DiagnosticService.UpdateEntity(entity) && disease_Comm_DiagnosticAddService.UpdateSubjective(subjectiveList, entity.id))
                {
                    msg = "修改成功";
                }
            }
            return Content(msg + ',' + entity.id);
        }

        //查看
        public ActionResult view()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            ViewBag.id = id;
            return View();
        }

    }
}
