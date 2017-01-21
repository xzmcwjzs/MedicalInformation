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
    public class MedicalHistory_TestReport_BloodController : BaseTopController
    {
        //
        // GET: /MedicalHistory_TestReport_Blood/
        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IComm_EHR_AbstractService eHRAbstractService { get; set; }
        [Inject]
        public IComm_ResidentFile_Change_AddressService residentFileChangeAddressService { get; set; }
        [Inject]
        public IChronic_disease_Comm_Testing_BloodService disease_Comm_Testing_BloodService { get; set; }
        [Inject]
        public IChronic_disease_Comm_Testing_Blood_AddService disease_Comm_Testing_Blood_AddService { get; set; }

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
        //新增页面
        public ActionResult Blood()
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
            var disease_Comm_Testing_BloodList = disease_Comm_Testing_BloodService.LoadSearchEntities(commonParam);
            totalCount = commonParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<Chronic_disease_Comm_Testing_Blood> result = new List<Chronic_disease_Comm_Testing_Blood>();
            result.AddRange(disease_Comm_Testing_BloodList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<Chronic_disease_Comm_Testing_Blood>> query = new PagerQuery<PagerInfo, List<Chronic_disease_Comm_Testing_Blood>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View();
        }
        //更新显示页面
        public ActionResult Show()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            if (id != "")
            {
                var result = disease_Comm_Testing_BloodService.LoadEntityAsNoTracking(t=>t.id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult ShowAdd()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            if (id != "")
            {
                var result = disease_Comm_Testing_Blood_AddService.LoadEntityAsNoTracking(t => t.blood_id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        //新增 更新
        public ActionResult AddAndUpdate()
        {
            string id = Request["id"];
            string fill_community_code = Request["community_code"];
            string worker = Request["worker"];
            Chronic_disease_Comm_Testing_Blood entity = new Chronic_disease_Comm_Testing_Blood();
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
            entity.names = Request["name"];
            entity.sex = Request["sex"];
            entity.age = Request["age"];
            entity.id_card_number = Request["id_card_number"];
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
            entity.address = Request["perment_community_address"];
            entity.phone = Request["phone"];
            entity.samplenumber = Request["numb"];
            entity.community_code = Request["ddlCommunity"];
            entity.inspect_doctor = Request["sjdoctor"];
            entity.check_doctor = Request["jcdoctor"];
            entity.report_doctor = Request["bgdoctor"];

            if (string.IsNullOrEmpty(Request["sjtime"]))
            {
                entity.inspect_time = null;
            }
            else
            {
                entity.inspect_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["sjtime"]));
            }

            if (string.IsNullOrEmpty(Request["bgtime"]))
            {
                entity.report_time = null;
            }
            else
            {
                entity.report_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["bgtime"]));
            }

            entity.name1 = Request["project1"];
            entity.name2 = Request["project2"];
            entity.name3 = Request["project3"];
            entity.name4 = Request["project4"];
            entity.name5 = Request["project5"];
            entity.result1 = Request["res1"];
            entity.result2 = Request["res2"];
            entity.result3 = Request["res3"];
            entity.result4 = Request["res4"];
            entity.result5 = Request["res5"];
            entity.unit1 = Request["Text1"];
            entity.unit2 = Request["Text6"];
            entity.unit3 = Request["Text10"];
            entity.unit4 = Request["Text14"];
            entity.unit5 = Request["Text18"];
            entity.qujian1 = Request["Text2"];
            entity.qujian2 = Request["Text7"];
            entity.qujian3 = Request["Text11"];
            entity.qujian4 = Request["Text15"];
            entity.qujian5 = Request["Text19"];
            entity.tishi1 = Request["Text3"];
            entity.tishi2 = Request["Text8"];
            entity.tishi3 = Request["Text12"];
            entity.tishi4 = Request["Text16"];
            entity.tishi5 = Request["Text20"];
            entity.beizhu1 = Request["Text4"];
            entity.beizhu2 = Request["Text9"];
            entity.beizhu3 = Request["Text13"];
            entity.beizhu4 = Request["Text17"];
            entity.beizhu5 = Request["Text21"];
            entity.doctor = worker;
            entity.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
             
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

            System.Collections.Generic.List<Chronic_disease_Comm_Testing_Blood_Add> subjectiveList = new System.Collections.Generic.List<Chronic_disease_Comm_Testing_Blood_Add>();

            for (int i = 1; i < 20; i++)
            {
                if (!string.IsNullOrEmpty(Request["project_" + i]))
                { 
                    Chronic_disease_Comm_Testing_Blood_Add entity1 = new Chronic_disease_Comm_Testing_Blood_Add();
                    entity1.id = Guid.NewGuid().ToString();
                    entity1.blood_id = entity.id;
                    entity1.name = Request["project_" + i];
                    entity1.result = Request["res_" + i];
                    entity1.unit = Request["unit_" + i];
                    entity1.qujian = Request["qujian_" + i];
                    entity1.tishi = Request["tishi_" + i];
                    entity1.beizhu = Request["beizhu_" + i];
                    entity1.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                    subjectiveList.Add(entity1);

                }
            }

            string msg = "";
            if (string.IsNullOrEmpty(id))
            {
                if (disease_Comm_Testing_BloodService.AddEntity(entity) && disease_Comm_Testing_Blood_AddService.UpdateSubjective(subjectiveList, entity.id))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.Blood.ToString();

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
                if (disease_Comm_Testing_BloodService.UpdateEntity(entity) && disease_Comm_Testing_Blood_AddService.UpdateSubjective(subjectiveList, entity.id))
                {
                    msg = "修改成功";
                }
            }
            return Content(msg + ',' + entity.id);
        }

        //查看页面
        public ActionResult view()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            ViewBag.id = id;
            return View();
        }

        //影像图片
        public ActionResult Photos()
        {
           var id_card =CommonFunc.SafeGetStringFromObj(Request.QueryString["id_card"]);
           var resident_name = CommonFunc.SafeGetStringFromObj(Request.QueryString["resident_name"]);
           var type =CommonFunc.SafeGetStringFromObj( Request.QueryString["type"]);
            return View();
        }
    }
}
