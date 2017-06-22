using MalignantTumorSystem.Common;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Model.SearchParam;
using MalignantTumorSystem.WebApplication.Helpers;
using Ninject;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Areas.BreastCancer.Controllers
{
    public class BC_Treatment_OperativeTreatmentController : BaseTopController
    {
        // GET: BreastCancer/BC_Treatment_OperativeTreatment
        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IComm_EHR_AbstractService eHRAbstractService { get; set; }
        [Inject]
        public IComm_ResidentFile_Change_AddressService residentFileChangeAddressService { get; set; }
        [Inject]
        public IMT_BC_OperativeTreatmentService mT_BC_OperativeTreatmentService { get; set; }
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
            string name = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["name"]).Trim());
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
            var list = mT_BC_OperativeTreatmentService.LoadSearchEntities(commonParam);
            totalCount = commonParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<MT_BC_OperativeTreatment> result = new List<MT_BC_OperativeTreatment>();
            result.AddRange(list);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<MT_BC_OperativeTreatment>> query = new PagerQuery<PagerInfo, List<MT_BC_OperativeTreatment>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View();
        }

        //新增页
        public ActionResult OperativeTreatment()
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
            string create_time = CommonFunc.SafeGetStringFromObj(Request.QueryString["create_time"]);
            ViewBag.id = id;
            ViewBag.no = no;
            ViewBag.resident_id = resident_id;
            ViewBag.create_time = create_time;
            return View();
        }

        //新增或修改
        public ActionResult AddAndUpdate()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            string fill_community_code = CommonFunc.SafeGetStringFromObj(Request["community_code"]);
            string worker = CommonFunc.SafeGetStringFromObj(Request["worker"]);
            string real_name = CommonFunc.SafeGetStringFromObj(Request["real_name"]);
            MT_BC_OperativeTreatment entity = new MT_BC_OperativeTreatment();
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
            entity.name = Request["name"];
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
            if (string.IsNullOrEmpty(Request["birth_date"]))
            {
                entity.birth_date = null;
            }
            else
            {
                entity.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["birth_date"]));
            }
            entity.community_code = Request["ddlCommunity"];
            entity.address = Request["perment_community_address"];
            entity.phone = Request["txtIndividualPhone"];
            entity.worker_user_name = worker;
            entity.worker_user_realname = real_name;
            //------------------------------------特有字段赋值-------------------------------------------------------
            entity.sh = Request["sh"];
            entity.shxj1 = Request["shxj1"];
            entity.shxj2 = Request["shxj2"];
            entity.shxj3 = Request["shxj3"];
            entity.shxj4 = Request["shxj4"]; 

            entity.doctor = Request["doctor"];
            entity.checkdate = CommonFunc.SafeGetDateTimeFromObj(Request["checkdate"]);

            //判断个人信息表中是否存在此人信息
            var dt = residentFileService.LoadEntityAsNoTracking(t => t.id_card_number == id_card_number);

            Comm_ResidentFile resident = new Comm_ResidentFile();
            resident.id = CommonFunc.SafeGetStringFromObj(dt.Select(t => t.id).FirstOrDefault());

            resident.resident_id = entity.resident_id;
            resident.resident_name = Request["name"];
            resident.sex = Request["sex"];
            resident.id_card_number = Request["id_card_number"];
            resident.birth_date = entity.birth_date;
            resident.community_code = Request["ddlCommunity"];
            resident.individual_phone = Request["txtIndividualPhone"];
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
                //根据身份证号查询个人信息表中是否存在此人信息，存在获取行政区划代码，与现在填写的常住地址作比较，不相同则将其添加到Comm_ResidentFile_Change_Address表中 
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

                string[] propertyName = new string[] { "resident_name", "sex", "id_card_number", "birth_date", "community_code", "individual_phone", "permanent_home_address" };
                residentFileService.UpdatePartialPropertity(resident, propertyName);
            }
            string msg = "";
            if (string.IsNullOrEmpty(id))
            {
                if (mT_BC_OperativeTreatmentService.AddEntity(entity))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.OperativeTreatment.ToString();
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
                if (mT_BC_OperativeTreatmentService.UpdateEntity(entity))
                {
                    msg = "修改成功";
                }
                else
                {
                    msg = "修改失败";
                }
            }

            return Content(msg + "," + entity.id);

        }

        public ActionResult OperativeTreatmentShow()
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
            string create_time = CommonFunc.SafeGetStringFromObj(Request.QueryString["create_time"]);
            ViewBag.id = id;
            ViewBag.no = no;
            ViewBag.resident_id = resident_id;
            ViewBag.create_time = create_time;
            return View();
        }

        public ActionResult OperativeTreatmentUpdate()
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
            string create_time = CommonFunc.SafeGetStringFromObj(Request.QueryString["create_time"]);
            ViewBag.id = id;
            ViewBag.no = no;
            ViewBag.resident_id = resident_id;
            ViewBag.create_time = create_time;
            return View();
        }

        public ActionResult Show()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            if (id != "")
            {
                var result = mT_BC_OperativeTreatmentService.LoadEntityAsNoTracking(t => t.id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
    }
}