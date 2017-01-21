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
using System.IO;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    public class MedicalHistory_AccessoryExamination_LungCheckController : BaseTopController
    {
        //
        // GET: /MedicalHistory_AccessoryExamination_LungCheck/
        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IComm_EHR_AbstractService eHRAbstractService { get; set; }
        [Inject]
        public IComm_ResidentFile_Change_AddressService residentFileChangeAddressService { get; set; }
        [Inject]
        public IChronic_disease_Comm_LungService disease_Comm_LungService { get; set; }
        [Inject]
        public IChronic_disease_Comm_LungAddService disease_Comm_LungAddService { get; set; }
        [Inject]
        public IChronic_disease_Comm_LungProjectNamesService disease_Comm_LungProjectNamesService { get; set; }
        [Inject]
        public IChronic_disease_Comm_LungQuJianService disease_Comm_LungQuJianService { get; set; }
        [Inject]
        public IChronic_disease_Comm_LungSexQuJianService disease_Comm_LungSexQuJianService { get; set; }
        [Inject]
        public IChronic_disease_Comm_LungUnitService disease_Comm_LungUnitService { get;set; } 
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

        //新增页
        public ActionResult LungCheck()
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
            var disease_Comm_Testing_BloodList = disease_Comm_LungService.LoadSearchEntities(commonParam);
            totalCount = commonParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<Chronic_disease_Comm_Lung> result = new List<Chronic_disease_Comm_Lung>();
            result.AddRange(disease_Comm_Testing_BloodList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<Chronic_disease_Comm_Lung>> query = new PagerQuery<PagerInfo, List<Chronic_disease_Comm_Lung>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View();
        }

        public ActionResult Handler()
        {
            string a = CommonFunc.SafeGetStringFromObj(Request["type"]);
            if (a != "")
            {
                var result = disease_Comm_LungProjectNamesService.LoadEntityAsNoTracking(t => t.type.Contains(a));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult Handler1()
        {
            string name = CommonFunc.SafeGetStringFromObj(Request["Name"]);
            string sex = CommonFunc.SafeGetStringFromObj(Request["sex"]);
            string code = "";
            string qujian = "";
            if (name != "")
            {
                code = CommonFunc.SafeGetStringFromObj(disease_Comm_LungProjectNamesService.LoadEntityAsNoTracking(t => t.name == name).Select(t => t.code).FirstOrDefault());
                if (code != "")
                {
                    if (string.IsNullOrEmpty(sex) || sex.Equals("01"))
                    {
                        qujian = CommonFunc.SafeGetStringFromObj(disease_Comm_LungQuJianService.LoadEntityAsNoTracking(t => t.code == code).Select(t => t.qujian).FirstOrDefault());
                    }
                    else
                    {
                        qujian = CommonFunc.SafeGetStringFromObj(disease_Comm_LungSexQuJianService.LoadEntityAsNoTracking(t => t.code == code).Select(t => t.qujian).FirstOrDefault());
                    }
                }
            }
            return Content(qujian);
        }

        public ActionResult Handler3()
        {
            string name = CommonFunc.SafeGetStringFromObj(Request["Name"]);
            string code = "";
            string danwei = "";
            if (name != "")
            {
                code = CommonFunc.SafeGetStringFromObj(disease_Comm_LungProjectNamesService.LoadEntityAsNoTracking(t => t.name == name).Select(t => t.code).FirstOrDefault());
                if (code != "")
                {
                    danwei = CommonFunc.SafeGetStringFromObj(disease_Comm_LungUnitService.LoadEntityAsNoTracking(t => t.code == code).Select(t => t.danwei).FirstOrDefault());
                }
            }
            return Content(danwei);
        }

        //显示
        public ActionResult Show()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            if (id != "")
            {
                var result = disease_Comm_LungService.LoadEntityAsNoTracking(t => t.id.Contains(id));
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
                var result = disease_Comm_LungAddService.LoadEntityAsNoTracking(t => t.add_id.Contains(id));
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
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            string fill_community_code = CommonFunc.SafeGetStringFromObj(Request["community_code"]);
            string worker = CommonFunc.SafeGetStringFromObj(Request["worker"]);
            Chronic_disease_Comm_Lung entity = new Chronic_disease_Comm_Lung();
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
            entity.inspect_doctor = Request["sjdoctor"];
            entity.check_doctor = Request["jcdoctor"];
            entity.report_doctor = Request["bgdoctor"];
            entity.check_project = Request["s"];
           
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

             System.Collections.Generic.List<Chronic_disease_Comm_LungAdd> subjectiveList = new System.Collections.Generic.List<Chronic_disease_Comm_LungAdd>();
        entity.community_code = Request["ddlCommunity"];
        entity.type = entity.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
        entity.doctor = worker;
            
        if (Request["s"].Equals("通气功能检查")) 
        {
            entity.name1 = Request["ts1"];
            entity.name2 = Request["ts2"];
            entity.name3 = Request["ts3"];
            entity.name4 = Request["ts4"];
            entity.name5 = Request["ts5"];
            entity.result1 = Request["tresult1"];
            entity.result2 = Request["tresult2"];
            entity.result3 = Request["tresult3"];
            entity.result4 = Request["tresult4"];
            entity.result5 = Request["tresult5"];
            entity.unit1 = Request["tunit1"];
            entity.unit2 = Request["tunit2"];
            entity.unit3 = Request["tunit3"];
            entity.unit4 = Request["tunit4"];
            entity.unit5 = Request["tunit5"];
            entity.qujian1 = Request["tqujian1"];
            entity.qujian2 = Request["tqujian2"];
            entity.qujian3 = Request["tqujian3"];
            entity.qujian4 = Request["tqujian4"];
            entity.qujian5 = Request["tqujian5"];
            entity.tishi1 = Request["ttishi1"];
            entity.tishi2 = Request["ttishi2"];
            entity.tishi3 = Request["ttishi3"];
            entity.tishi4 = Request["ttishi4"];
            entity.tishi5 = Request["ttishi5"];
            entity.beizhu1 = Request["tbeizhu1"];
            entity.beizhu2 = Request["tbeizhu2"];
            entity.beizhu3 = Request["tbeizhu3"];
            entity.beizhu4 = Request["tbeizhu4"];
            entity.beizhu5 = Request["tbeizhu5"];

            for (int i = 1; i < 9; i++)
            {
                if (Request.Form["ts_" + i] != "")
                {
                    Chronic_disease_Comm_LungAdd entity1 = new Chronic_disease_Comm_LungAdd();
                    entity1.id = Guid.NewGuid().ToString();
                    entity1.add_id = entity.id;
                    entity1.name = Request.Form["ts_" + i];
                    entity1.result = Request.Form["tresult_" + i];
                    entity1.unit = Request.Form["tunit_" + i];
                    entity1.qujian = Request.Form["tqujian_" + i];
                    entity1.tishi = Request.Form["ttishi_" + i];
                    entity1.beizhu = Request.Form["tbeizhu_" + i];
                    if (entity1.name != null)
                    {
                        subjectiveList.Add(entity1);
                    }

                }
            } 
        }
        else if (Request["s"].Equals("换气功能检查"))
        {
            entity.name1 = Request["hs1"];
            entity.name2 = Request["hs2"];
            entity.name3 = Request["hs3"];
            entity.name4 = Request["hs4"];
            entity.name5 = Request["hs5"];
            entity.result1 = Request["hresult1"];
            entity.result2 = Request["hresult2"];
            entity.result3 = Request["hresult3"];
            entity.result4 = Request["hresult4"];
            entity.result5 = Request["hresult5"];
            entity.unit1 = Request["hunit1"];
            entity.unit2 = Request["hunit2"];
            entity.unit3 = Request["hunit3"];
            entity.unit4 = Request["hunit4"];
            entity.unit5 = Request["hunit5"];
            entity.qujian1 = Request["hqujian1"];
            entity.qujian2 = Request["hqujian2"];
            entity.qujian3 = Request["hqujian3"];
            entity.qujian4 = Request["hqujian4"];
            entity.qujian5 = Request["hqujian5"];
            entity.tishi1 = Request["htishi1"];
            entity.tishi2 = Request["htishi2"];
            entity.tishi3 = Request["htishi3"];
            entity.tishi4 = Request["htishi4"];
            entity.tishi5 = Request["htishi5"];
            entity.beizhu1 = Request["hbeizhu1"];
            entity.beizhu2 = Request["hbeizhu2"];
            entity.beizhu3 = Request["hbeizhu3"];
            entity.beizhu4 = Request["hbeizhu4"];
            entity.beizhu5 = Request["hbeizhu5"];
        }
        else if (Request["s"].Equals("小气道功能检查"))
        {
            entity.name1 = Request["xq1"];
            entity.name2 = Request["xq2"];
            entity.name3 = Request["xq3"];
            if (Request["xq1"].Equals("闭合容积(氮气法)") || Request["xq1"].Equals("最大呼气流量-容积曲线"))
            {
                //获取file
                HttpPostedFileBase file = Request.Files["jctx1"];
                if (file != null)
                { 
                    string fileNames = Path.GetFileName(file.FileName);
                    if (!string.IsNullOrEmpty(fileNames))
                    {
                        string mapPath = Server.MapPath("~");
                        string path = "/UploadFiles/Lung/" + DateTime.Now.ToString("yyyyMM") + "/" + DateTime.Now.ToString("dd") + "/";
                        string savePath = mapPath + path;
                        if (!System.IO.Directory.Exists(savePath))
                        {
                            Directory.CreateDirectory(savePath);
                        }
                        file.SaveAs(savePath + fileNames);
                        entity.image1 = path + fileNames + "," + Path.GetFullPath(file.FileName);
                    }
                }
            }
            else if (Request["xq1"].Equals("频率依赖性肺顺应性"))
            {
                entity.result1 = Request["xqresult1"];
                entity.result11 = Request["xqresult11"];
                entity.unit1 = Request["xqunit1"];
                entity.qujian1 = Request["xqqujian1"];
                entity.tishi1 = Request["xqtishi1"];
                entity.beizhu1 = Request["xqbeizhu1"];

            }

            if (Request["xq2"].Equals("闭合容积(氮气法)") || Request["xq2"].Equals("最大呼气流量-容积曲线"))
            {
                //获取file
                HttpPostedFileBase file1 = Request.Files["jctx2"];
                if (file1 != null)
                {
                    string fileName1 = Path.GetFileName(file1.FileName);
                    if (!string.IsNullOrEmpty(fileName1))
                    {
                        string mapPath = Server.MapPath("~");
                        string path = "/UploadFiles/Lung/" + DateTime.Now.ToString("yyyyMM") + "/" + DateTime.Now.ToString("dd") + "/";
                        string savePath = mapPath + path;
                        if (!System.IO.Directory.Exists(savePath))
                        {
                            Directory.CreateDirectory(savePath);
                        }
                        file1.SaveAs(savePath + fileName1);
                        entity.image2 = path + fileName1 + "," + Path.GetFullPath(file1.FileName);
                    }
                }
            }
            else if (Request["xq2"].Equals("频率依赖性肺顺应性"))
            {
                entity.result2 = Request["xqresult2"];
                entity.result22 = Request["xqresult22"];
                entity.unit2 = Request["xqunit2"];
                entity.qujian2 = Request["xqqujian2"];
                entity.tishi2 = Request["xqtishi2"];
                entity.beizhu2 = Request["xqbeizhu2"];

            }

            if (Request["xq3"].Equals("闭合容积(氮气法)") || Request["xq3"].Equals("最大呼气流量-容积曲线"))
            {
                //获取file
                HttpPostedFileBase file2 = Request.Files["jctx3"];
                if (file2 != null)
                {
                    string fileName2 = Path.GetFileName(file2.FileName);
                    if (!string.IsNullOrEmpty(fileName2))
                    {
                        string mapPath = Server.MapPath("~");
                        string path = "/UploadFiles/Lung/" + DateTime.Now.ToString("yyyyMM") + "/" + DateTime.Now.ToString("dd") + "/";
                        string savePath = mapPath + path;
                        if (!System.IO.Directory.Exists(savePath))
                        {
                            Directory.CreateDirectory(savePath);
                        }
                        file2.SaveAs(savePath + fileName2);
                        entity.image3 = path + fileName2 + "," + Path.GetFullPath(file2.FileName);
                    }
                }
            }
            else if (Request["xq3"].Equals("频率依赖性肺顺应性"))
            {
                entity.result3 = Request["xqresult3"];
                entity.result33 = Request["xqresult33"];
                entity.unit3 = Request["xqunit3"];
                entity.qujian3 = Request["xqqujian3"];
                entity.tishi3 = Request["xqtishi3"];
                entity.beizhu3 = Request["xqbeizhu3"];

            }
        }
        else if (Request["s"].Equals("血气分析和酸碱测定"))
        {
            entity.name1 = Request["xs1"];
            entity.name2 = Request["xs2"];
            entity.name3 = Request["xs3"];
            entity.name4 = Request["xs4"];
            entity.name5 = Request["xs5"];
            entity.result1 = Request["xresult1"];
            entity.result2 = Request["xresult2"];
            entity.result3 = Request["xresult3"];
            entity.result4 = Request["xresult4"];
            entity.result5 = Request["xresult5"];
            entity.unit1 = Request["xunit1"];
            entity.unit2 = Request["xunit2"];
            entity.unit3 = Request["xunit3"];
            entity.unit4 = Request["xunit4"];
            entity.unit5 = Request["xunit5"];
            entity.qujian1 = Request["xqujian1"];
            entity.qujian2 = Request["xqujian2"];
            entity.qujian3 = Request["xqujian3"];
            entity.qujian4 = Request["xqujian4"];
            entity.qujian5 = Request["xqujian5"];
            entity.tishi1 = Request["xtishi1"];
            entity.tishi2 = Request["xtishi2"];
            entity.tishi3 = Request["xtishi3"];
            entity.tishi4 = Request["xtishi4"];
            entity.tishi5 = Request["xtishi5"];
            entity.beizhu1 = Request["xbeizhu1"];
            entity.beizhu2 = Request["xbeizhu2"];
            entity.beizhu3 = Request["xbeizhu3"];
            entity.beizhu4 = Request["xbeizhu4"];
            entity.beizhu5 = Request["xbeizhu5"];

            for (int i = 1; i < 10; i++)
            {
                if (Request["xs_" + i] != "")
                {
                    Chronic_disease_Comm_LungAdd entity1 = new Chronic_disease_Comm_LungAdd();
                    entity1.id = Guid.NewGuid().ToString();
                    entity1.add_id = entity.id;
                    entity1.name = Request["xs_" + i];
                    entity1.result = Request["xresult_" + i];
                    entity1.unit = Request["xunit_" + i];
                    entity1.qujian = Request["xqujian_" + i];
                    entity1.tishi = Request["xtishi_" + i];
                    entity1.beizhu = Request["xbeizhu_" + i];
                    if (entity1.name != null)
                    {
                        subjectiveList.Add(entity1);
                    }

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
                if (disease_Comm_LungService.AddEntity(entity)&&disease_Comm_LungAddService.UpdateSubjective(subjectiveList,entity.id))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.Lung.ToString();

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
                if (disease_Comm_LungService.UpdateEntity(entity)&&disease_Comm_LungAddService.UpdateSubjective(subjectiveList,entity.id))
                {
                    msg = "修改成功";
                }
            }
            return Content(msg + ',' + entity.id);
        }

        //查看
        public ActionResult Detail()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            string id_card = CommonFunc.SafeGetStringFromObj(Request.QueryString["id_card"]);
            ViewBag.id = id;
            ViewBag.id_card = id_card;
            return View();
        }

        //图像
        public ActionResult Photos()
        {
            var id_card = CommonFunc.SafeGetStringFromObj(Request.QueryString["id_card"]);
            var resident_name = CommonFunc.SafeGetStringFromObj(Request.QueryString["resident_name"]);
            var type = CommonFunc.SafeGetStringFromObj(Request.QueryString["type"]);
            return View();
        }
    }
}
