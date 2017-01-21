using MalignantTumorSystem.Common;
using MalignantTumorSystem.Model.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Ninject;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model.SearchParam;
using MalignantTumorSystem.WebApplication.Helpers;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    public class FamilyInformationController : BaseTopController
    {
        //
        // GET: /FamilyInformation/
        [Inject]
        public IChronic_disease_Diabetes_familyService diseaseDiabetesfamilyService { get; set; }
        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IComm_EHR_AbstractService eHRAbstractService { get; set; }
        [Inject]
        public IComm_ResidentFile_Change_AddressService residentFileChangeAddressService { get; set; }
        [Inject]
        public IChronic_disease_Diabetes_family_relationService diseaseDiabetesfamilyrelationService { get; set; }
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
            FamilyInformationParam familyInformationParam = new FamilyInformationParam()
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
            var familyInformationList = diseaseDiabetesfamilyService.LoadSearchEntities(familyInformationParam);
            totalCount = familyInformationParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<Chronic_disease_Diabetes_family> result = new List<Chronic_disease_Diabetes_family>();
            result.AddRange(familyInformationList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<Chronic_disease_Diabetes_family>> query = new PagerQuery<PagerInfo, List<Chronic_disease_Diabetes_family>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            return View();
        }
        //新增家庭信息页面
        public ActionResult FamilyManage()
        {
            Comm_Platform_Worker workerModel = Session["worker"] as Comm_Platform_Worker;
            ViewBag.real_name = CommonFunc.SafeGetStringFromObj(workerModel.real_name);
            ViewBag.worker = CommonFunc.SafeGetStringFromObj(workerModel.user_name);
            ViewBag.community_code = CommonFunc.SafeGetStringFromObj(workerModel.region_code);


            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            string no = CommonFunc.SafeGetStringFromObj(Request.QueryString["NO"]); 
            ViewBag.id = id;
            ViewBag.no = no; 
            return View();
        }

        //提交 更新方法
        public ActionResult AddAndUpdate()
        {
            string id = Request["id"];
            string fill_community_code = Request["community_code"];
            string worker = Request.QueryString["worker"];
            Chronic_disease_Diabetes_family entity = new Chronic_disease_Diabetes_family();
            if (string.IsNullOrEmpty(id))
            {
                entity.id = Guid.NewGuid().ToString();
            }
            else
            {
                entity.id = id;
            }
            //根据身份证号查询个人信息表中是否存在此人信息，如果存在，则使用个人信息中的健康档案号，如果不存在，则创建一个新的17位的健康档案号
            string id_card_number = CommonFunc.SafeGetStringFromObj(Request["id_card_number"]);
            string ddlCommunity=CommonFunc.SafeGetStringFromObj(Request["ddlCommunity"]);
            string resident_id =CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t=>t.id_card_number==id_card_number).Select(t=>t.resident_id).FirstOrDefault());
            if (string.IsNullOrEmpty(resident_id))
            {
                entity.resident_id = residentFileService.GetNumberByCode1(ddlCommunity);
            }
            else
            {
                entity.resident_id = resident_id;
            }

            entity.host_name = Request["host_name"];
            entity.sex = Request["sex"];
            entity.id_card_number = Request["id_card_number"];

            entity.perment_community_code = Request["ddlCommunity"];
            entity.address = Request["perment_community_address"];
            string s = Request["id_card_number"];
            string s1 = "", s2 = "", s3 = "";
            if (s.Length == 15)
            {
                s1 = s.Substring(6, 2);
                s2 = s.Substring(8, 2);
                s3 = s.Substring(10, 2);
                entity.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj("19" + s1 + "-" + s2 + "-" + s3));
            }
            else if (s.Length == 18)
            {
                s1 = s.Substring(6, 4);
                s2 = s.Substring(10, 2);
                s3 = s.Substring(12, 2);
                entity.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(s1 + "-" + s2 + "-" + s3));
            }
            else
            {
                entity.birth_date = null;
            }

            entity.phone = Request["phone"];
            entity.post_code = Request["post_code"];

            entity.spouse_name = Request["spouse_name"];
            entity.spouse_id_card_number = Request["spouse_idCard"];
            entity.spouse_phone = Request["spouse_phone"];
            if (string.IsNullOrEmpty(Request["spouse_birth_date"]))
            {
                entity.spouse_birth_date = null;
            }
            else
            {
                entity.spouse_birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["spouse_birth_date"]));
            }
            
            entity.hostFather_name = Request["hostFather_name"];
            entity.hostFather_id_card_number = Request["hostFather_idCard"];
            entity.hostFather_phone = Request["hostFather_phone"];
            if (string.IsNullOrEmpty(Request["hostFather_birth_date"]))
            {
                entity.hostFather_birth_date = null;
            }
            else
            {
                entity.hostFather_birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["hostFather_birth_date"]));
            }
            
            entity.hostMother_name = Request["hostMother_name"];
            entity.hostMother_id_card_number = Request["hostMother_idCard"];
            entity.hostMother_phone = Request["hostMother_phone"];
            if (string.IsNullOrEmpty(Request["hostMother_birth_date"]))
            {
                entity.hostMother_birth_date = null;
            }
            else
            {
                entity.hostMother_birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["hostMother_birth_date"]));
            }
             
            entity.relation = Request["relation0"];
            entity.relation_name = Request["relation_names0"];
            entity.relation_id_card = Request["relation_id_card0"];
            entity.relation_phone = Request["relation_phone0"];
            if (string.IsNullOrEmpty(Request["relation_birth_date0"]))
            {
                entity.relation_birth_date = null;
            }
            else
            {
                entity.relation_birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["relation_birth_date0"]));
            }
             
            entity.community_code = Request["ddlCommunity"];
            entity.chronic_disease_type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
            entity.worker_user_name = Request["input_person"]; ;
            entity.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["createTime"]));
            List<Chronic_disease_Diabetes_family_relation> subjectiveList = new List<Chronic_disease_Diabetes_family_relation>(); 
            for (int i = 1; i < 10; i++)
            {
                if (!string.IsNullOrEmpty(Request["relation" + i]))
                {
                    Chronic_disease_Diabetes_family_relation entity1 = new Chronic_disease_Diabetes_family_relation();
                    entity1.id = Guid.NewGuid().ToString();
                    entity1.relation_id = entity.id;
                    entity1.relation = Request["relation" + i];
                    entity1.name = Request["relation_names" + i];
                    entity1.id_card_number = Request["relation_id_card" + i];
                    entity1.phone = Request["relation_phone" + i];
                    entity1.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["relation_birth_date" + i]));
                    if (entity1.name != null)
                    {
                        subjectiveList.Add(entity1);
                    }
                }
            }
            //-------------------------------------------------------------------------------------------------------
            //判断个人信息表中是否存在此人信息 2015-06-18 娄帅
            var dt = residentFileService.LoadEntityAsNoTracking(t=>t.id_card_number==id_card_number);
            
            Comm_ResidentFile resident = new Comm_ResidentFile();
            resident.id =CommonFunc.SafeGetStringFromObj(dt.Select(t=>t.id).FirstOrDefault());

            resident.resident_id = entity.resident_id;
            resident.resident_name = Request["host_name"];
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
                }else{
                    resident.create_time =CommonFunc.SafeGetDateTimeFromObj(entity.create_time);
                }
                
                resident.worker_user_name = worker;

                residentFileService.AddEntity(resident);

                // 添加摘要
                 
                Comm_EHR_Abstract ehr1=new Comm_EHR_Abstract();
                ehr1.id = Guid.NewGuid().ToString();
                ehr1.resident_id = entity.resident_id;
                ehr1.community_code = entity.community_code;
                ehr1.create_time = DateTime.Now;
                ehr1.item_id = resident.id;
                ehr1.item_type = Model.Enum.EHRAbstractTypeEnum.ResidentInfo.ToString();

                eHRAbstractService.AddEntity(ehr1);  
                 
            }else{
                 
             /** 根据身份证号查询个人信息表中是否存在此人信息，存在获取行政区划代码，与现在填写的常住地址作比较，不相同则将其添加到Comm_ResidentFile_Change_Address表中
             */

            string code = CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t=>t.id_card_number==id_card_number).Select(t=>t.community_code).FirstOrDefault());

            if (Request["ddlCommunity"]!=code)
            { 
                Comm_ResidentFile_Change_Address address=new Comm_ResidentFile_Change_Address(); 
                address.id = Guid.NewGuid().ToString();
                address.contact_id = entity.id;
                address.resident_id = entity.resident_id;
                address.community_code = code;
                address.fill_community_code = fill_community_code;
                address.fill_person = worker;
                address.permanent_address = CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t=>t.id_card_number==id_card_number).Select(t=>t.permanent_home_address).FirstOrDefault());
                address.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));

               residentFileChangeAddressService.AddEntity(address);
            } 
            //resident.id = dt.Select(t=>t.id).ToString(); 
                string[] propertyName=new string[]{"resident_name","sex","id_card_number","community_code","individual_phone","permanent_home_address"};
            residentFileService.UpdatePartialPropertity(resident,propertyName);
            }
            string msg="";
            if(string.IsNullOrEmpty(id)){
                if(diseaseDiabetesfamilyService.AddEntity(entity) && diseaseDiabetesfamilyrelationService.UpdateSubjective(subjectiveList,entity.id)){
                    Comm_EHR_Abstract ehr=new Comm_EHR_Abstract();
                    ehr.id=Guid.NewGuid().ToString();
                    ehr.resident_id=entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.Family.ToString();

                   if(eHRAbstractService.AddEntity(ehr)){
                       msg="提交成功";
                   }else{
                       msg="提交失败";
                   } 
                }

            }else{
                if(diseaseDiabetesfamilyService.UpdateEntity(entity) && diseaseDiabetesfamilyrelationService.UpdateSubjective(subjectiveList,entity.id)){
                    msg="修改成功";
                }
            }
            return Content(msg+','+entity.id);

        }

        //验证此人是否已经存在家庭信息
        public ActionResult Validate()
        {
            string id_card_number = Request["id_card_number"];
            if (string.IsNullOrEmpty(id_card_number))
            {
                var result = diseaseDiabetesfamilyService.LoadEntityAsNoTracking(t=>t.id_card_number==id_card_number);
                if (result.Count() >= 1)
                {
                    return Content("True");
                }
                else
                {
                    return Content("False");
                }
            }
            else
            {
                return Content("");
            }
        }

        //列表查看
        public ActionResult Show()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            if (!string.IsNullOrEmpty(id))
            {
                var result = diseaseDiabetesfamilyService.LoadEntityAsNoTracking(t => t.id.Contains(id));
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
                var result = diseaseDiabetesfamilyrelationService.LoadEntityAsNoTracking(t => t.relation_id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }


    }
}
