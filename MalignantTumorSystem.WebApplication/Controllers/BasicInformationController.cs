using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.Common;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.WebApplication.Helpers;
using MalignantTumorSystem.Model.SearchParam;
using Ninject;
using MalignantTumorSystem.Model.ViewModel;
using MalignantTumorSystem.WebApplication.Common.ComunityCode; 

namespace MalignantTumorSystem.WebApplication.Controllers
{
    
    public class BasicInformationController : BaseTopController
    {
        //
        // GET: /BasicInformation/
        [Inject]
        public IBasicInformationService basicInformationService { get; set; }
        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IComm_ResidentFile_Followup_DiseaseService residentFileFollowupDiseaseService { get; set; }
        [Inject]
        public IChronic_disease_SmokeAndDrinkService smokeAndDrinkService { get; set; }
        [Inject]
        public IComm_ResidentFile_Followup_SurgeryService residentFileFollowupSurgeryService { get; set; }
        [Inject]
        public IComm_ResidentFile_Followup_TraumaService residentFileFollowupTraumaService { get; set; }
        [Inject]
        public IComm_ResidentFile_Followup_Blood_TransfusionService residentFileFollowupBloodTransfusionService { get; set; }
        [Inject]
        public IComm_ResidentFile_Followup_Family_DiseaseService residentFileFollowupFamilyDiseaseService { get; set; }
        [Inject]
        public IComm_EHR_AbstractService eHRAbstractService { get; set; }
        [Inject]
        public IComm_TumourService tumourService { get; set; }
        [Inject]
        public IComm_ResidentFile_Change_AddressService changeAddressService { get; set; }
        [Inject]
        public IComm_Platform_WorkerService platformWorkerService { get; set; }
        public ActionResult DWZPersonalFrame()
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

            int pageIndex = CommonFunc.SafeGetIntFromObj(this.Request["pageNum"], 1);
            int pageSize = this.Request["numPerPage"] == null ? PageSize.GetPageSize : int.Parse(Request["numPerPage"]);
            int totalCount = 0;
            BasicInformationParam basicInformationParam = new BasicInformationParam()
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
            var basicInformationList = basicInformationService.LoadSearchEntities(basicInformationParam);
            totalCount = basicInformationParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<BasicInformationViewModel> result = new List<BasicInformationViewModel>();
            result.AddRange(basicInformationList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<BasicInformationViewModel>> query = new PagerQuery<PagerInfo, List<BasicInformationViewModel>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
          
            return View();
        }
       
        public ActionResult PersonalFrame()
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
       
        public ActionResult Personal()
        {
            Comm_Platform_Worker workerModel = Session["worker"] as Comm_Platform_Worker; 
            ViewBag.real_name =CommonFunc.SafeGetStringFromObj(workerModel.real_name);
            ViewBag.user_name = CommonFunc.SafeGetStringFromObj(workerModel.user_name);
            ViewBag.community_code =CommonFunc.SafeGetStringFromObj(workerModel.region_code);


            string id =CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            string no = CommonFunc.SafeGetStringFromObj(Request.QueryString["NO"]);
            string resident_id =CommonFunc.SafeGetStringFromObj( Request.QueryString["resident_id"]);
            ViewBag.id = id;
            ViewBag.no = no;
            ViewBag.resident_id = resident_id;
            return View();
        }
       
        //加载显示列表页  
        public ActionResult List()
        {
            Comm_Platform_Worker workerModel=Session["worker"] as Comm_Platform_Worker;
            if (workerModel == null)
            {
                redirectTo();
                return null;
            } 
            string region_code =CommonFunc.SafeGetStringFromObj(workerModel.region_code);
            string dell_user_name =CommonFunc.SafeGetStringFromObj(workerModel.user_name);
            string  name = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["names"]).Trim());
            string  sex = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["sex"]).Trim());

            string  birthdateBegin = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["txtBirthDateBegin"]).Trim());
            string birthdateEnd = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["txtBirthDateEnd"]).Trim());
            string  id_card_number = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["idCard"]).Trim());
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
            BasicInformationParam basicInformationParam = new BasicInformationParam()
            {
                PageIndex=pageIndex,
                PageSize=pageSize,
                TotalCount=totalCount,
                region_code=region_code,
                name=name,
                sex=sex,
                txtBirthDateBegin=birthdateBegin,
                txtBirthDateEnd=birthdateEnd,
                idCard=id_card_number,
                address=address
            };
            var basicInformationList = basicInformationService.LoadSearchEntities(basicInformationParam);
            totalCount = basicInformationParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<BasicInformationViewModel> result = new List<BasicInformationViewModel>();
            result.AddRange(basicInformationList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<BasicInformationViewModel>> query = new PagerQuery<PagerInfo, List<BasicInformationViewModel>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            return View();
        }
        //全纪录页面
        public ActionResult Records()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]); 
            string resident_id = CommonFunc.SafeGetStringFromObj(Request.QueryString["resident_id"]);
            ViewBag.id = id;
            ViewBag.resident_id = resident_id;
            return View();
        }
        //加载全纪录第一页 居民健康档案中基本信息
        public ActionResult ShowFirstPage()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            if (id != "")
            {
                var result = residentFileService.LoadEntityAsNoTracking(t=>t.id.Contains(id));
                var entityList = result.ToList();
                string username =CommonFunc.SafeGetStringFromObj(result.Select(t => t.worker_user_name).FirstOrDefault());
                string realname = "";
                if (!string.IsNullOrEmpty(username))
                {
                     realname = CommonFunc.SafeGetStringFromObj(platformWorkerService.LoadEntityAsNoTracking(t => t.user_name == username).Select(t => t.real_name).FirstOrDefault());
                }
                var res = entityList.Select(t => new{
                    community_code=ConvertCode(t.community_code),
                    t.permanent_home_address,
                    present_community_code=ConvertCode(t.present_community_code),
                    t.residence_address,
                    t.create_time,
                    t.resident_id,
                    t.resident_name,
                    t.individual_phone,
                    t.family_phone,
                    fill_community_code=ConvertCode(t.fill_community_code),
                    worker_user_name=realname
                });
                return Json(res, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }

        }

        //表单提交
        public ActionResult AddAndUpdate()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            string worker = CommonFunc.SafeGetStringFromObj(Request.QueryString["worker"]);
            string community_code = CommonFunc.SafeGetStringFromObj(Request.QueryString["community_code"]);
            string txtCardNumber =CommonFunc.SafeGetStringFromObj(Request["txtCardNumber"]);
            string re_id =CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t => t.id_card_number == txtCardNumber).Select(t=>t.id).FirstOrDefault());

            Comm_ResidentFile entity = new Comm_ResidentFile();
            if (string.IsNullOrEmpty(re_id))
            {
                entity.id = Guid.NewGuid().ToString();
                entity.password = "654321";

                entity.worker_user_name = worker; 
                entity.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["txtCreateTime"]));
            }
            else
            {
                entity.id = re_id;
                entity.password = "654321";

                entity.worker_user_name = worker;
                entity.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["txtCreateTime"]));
                //entity.community_code =CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(u => u.resident_id == CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t => t.id_card_number == txtCardNumber).Select(t=>t.resident_id).FirstOrDefault())).Select(t=>t.community_code).FirstOrDefault()); 
            }
            //根据身份证号查询个人信息表中是否存在此人信息，如果存在，则使用个人信息中的健康档案号，如果不存在，则创建一个新的17位的健康档案号
            string residentId = CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t => t.id_card_number == txtCardNumber).Select(t=>t.resident_id).FirstOrDefault());
            if (string.IsNullOrEmpty(residentId))
            {
                entity.resident_id = residentFileService.GetNumberByCode1(Request["ddlCommunity"]);
            }
            else
            {
                entity.resident_id = residentId;
            }
            entity.resident_name = Request["txtResidentName"];
            entity.sex = Request["rdlSex"];
            entity.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["txtBirthDate"]));
            entity.id_card_number = Request["txtCardNumber"];
            entity.nationality_name = "中国";
            entity.nation = Request["ddlNation"];
            entity.marital_status = Request["ddlMarrigeState"];
            entity.education_qualification = Request["ddlEducationQualification"];
            entity.abo_blood_group = Request["ddlABOBloodType"];
            entity.post_code = Request["zipCode"];
            if (string.IsNullOrEmpty(Request["txtFamilyPhone1"]) || string.IsNullOrEmpty(Request["txtFamilyPhone2"]))
            {
                entity.family_phone = Request["txtFamilyPhone1"] + "-" + Request["txtFamilyPhone2"];
            }
            entity.individual_phone = Request["txtIndividualPhone"];
            entity.email = Request["txtEmail"];
            entity.contact_name = Request["txtcontact_name"];
            entity.contact_phone = Request["txtcontact_phone"];
            entity.contact_my_relationship = Request["ddlcontact_my_relationship"];
            entity.work_unit = Request["txtWorkUnit"];
            entity.work_type = Request["ddlcraft"];
            entity.worker_time_everyweek = Request["work_time"];
            entity.cost_method_payment = Request["ddlCostPayment"];
            entity.chronic_disease_type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
            //出生地址
            if (!Request["ddlCounty1"].Equals(""))
            {
                entity.birth_commitcode = Request["ddlCounty1"];
            }
            else
            {
                if (!Request["ddlCity1"].Equals(""))
                {
                    entity.birth_commitcode = Request["ddlCity1"];
                }
                else
                {
                    if (!Request["ddlProvince1"].Equals(""))
                    {
                        entity.birth_commitcode = Request["ddlProvince1"];
                    }
                }
            }
            entity.birth_address = Request["birth_address"];


            //常住地址
            entity.community_code = Request["ddlCommunity"];
            entity.permanent_home_address = Request["home_address"];


            //现住地址
            if (!Request["ddlCommunity2"].Equals(""))
            {
                entity.residence_commitcode = Request["ddlCommunity2"];
            }
            else
            {
                if (!Request["ddlStreet2"].Equals(""))
                {
                    entity.residence_commitcode = Request["ddlStreet2"];
                }
                else
                {
                    if (!Request["ddlCounty2"].Equals(""))
                    {
                        entity.residence_commitcode = Request["ddlCounty2"];
                    }
                    else
                    {
                        if (!Request["ddlCity2"].Equals(""))
                        {
                            entity.residence_commitcode = Request["ddlCity2"];
                        }
                        else
                        {
                            if (!Request["ddlProvince2"].Equals(""))
                            {
                                entity.residence_commitcode = Request["ddlProvince2"];
                            }
                        }
                    }
                }
            }
            entity.residence_address = Request["huji_address"];

            entity.father_name = Request["fatherName"];
            entity.father_id_card_numb = Request["fatherIdCard"];
            entity.father_phone = Request["fatherPhone"];
            entity.father_email = Request["father_email"];
            entity.mother_name = Request["motherName"];
            entity.mother_id_card_numb = Request["motherIdCard"];
            entity.mother_phone = Request["motherPhone"];
            entity.mother_email = Request["mother_email"];
            entity.tumour_flag = "TRUE";
            entity.fill_community_code = community_code;

            //-----------------------------------------病史信息--------------------------------------------
            //1.药物过敏史
            if (!string.IsNullOrEmpty(Request["chGuoMin"]) || !string.IsNullOrEmpty(Request["GuoMin_Other"]))
            {
                entity.drug_allergy_type = Request["chGuoMin"].Replace(",", "$");
                entity.drug_allergy_other = Request["GuoMin_Other"];
            }
            else
            {
                entity.drug_allergy_type = "无";
            }
            //2.疾病史
            Comm_ResidentFile_Followup_Disease entity1 = new Comm_ResidentFile_Followup_Disease(); 
            //获取id
            string id1 =CommonFunc.SafeGetStringFromObj(residentFileFollowupDiseaseService.LoadEntityAsNoTracking(t=>t.resident_id==entity1.resident_id).Select(t=>t.id).FirstOrDefault()); 
            if (!string.IsNullOrEmpty(Request["chdisease"]) || !string.IsNullOrEmpty(Request["Disease_Other"]))
            {
                entity.disease = "";
                if (string.IsNullOrEmpty(id1))
                {
                    entity1.id = Guid.NewGuid().ToString();
                }
                else
                {
                    entity1.id = id1;
                }
                entity1.resident_id = entity.resident_id;
                entity1.community_code = entity.community_code;
                entity1.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                entity1.worker_user_name = worker;
                entity1.disease_type = Request["chdisease"];
                entity1.disease_other = Request["Disease_Other"];
                entity1.tumor_type = Request["zl"];

                if (string.IsNullOrEmpty(id1))
                { 
                    residentFileFollowupDiseaseService.AddEntity(entity1);
                }
                else
                { 
                    residentFileFollowupDiseaseService.UpdateEntity(entity1);
                }
            }
            else
            {
                entity.disease = "无";
            }

            //5.手术史 
            List<Comm_ResidentFile_Followup_Surgery> subjectiveList = new List<Comm_ResidentFile_Followup_Surgery>();
            if (!string.IsNullOrEmpty(Request["option_time0"]) || !string.IsNullOrEmpty(Request["option_name0"]))
            {
                entity.surgery = "";
                for (int i = 0; i < 50; i++)
                {
                    if (!string.IsNullOrEmpty(Request["option_name" + i]))
                    { 
                        Comm_ResidentFile_Followup_Surgery entity4 = new Comm_ResidentFile_Followup_Surgery();
                        entity4.id = Guid.NewGuid().ToString();
                        entity4.resident_id = entity.resident_id;
                        entity4.community_code = entity.community_code;
                        entity4.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                        entity4.worker_user_name = worker; 
                        if (string.IsNullOrEmpty(Request["option_time" + i]))
                        {
                            entity4.find_date = null;
                        }
                        else
                        {
                            entity4.find_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["option_time" + i]));
                        }
                        entity4.surgery_name = Request["option_name" + i];
                        entity4.surgery_hospital = Request["option_hospital" + i];
                        entity4.surgery_result = Request["option_result" + i];
                        subjectiveList.Add(entity4);
                    }
                }
            }
            else
            {
                entity.surgery = "无";
            }
            //6.外伤史 
            List<Comm_ResidentFile_Followup_Trauma> subjectiveList1 = new List<Comm_ResidentFile_Followup_Trauma>();
            if (!string.IsNullOrEmpty(Request["trauma_time0"]) || !string.IsNullOrEmpty(Request["trauma_name0"]))
            {
                entity.trauma = "";
                for (int i = 0; i < 50; i++)
                {
                    if (!string.IsNullOrEmpty(Request["trauma_name" + i]))
                    { 
                        Comm_ResidentFile_Followup_Trauma entity5 = new Comm_ResidentFile_Followup_Trauma();
                        entity5.id = Guid.NewGuid().ToString();
                        entity5.resident_id = entity.resident_id;
                        entity5.community_code = entity.community_code;
                        entity5.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                        entity5.worker_user_name = worker;
                        //entity5.find_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["trauma_time" + i]));
                        if (string.IsNullOrEmpty(Request["trauma_time" + i]))
                        {
                            entity5.find_date = null;
                        }
                        else
                        {
                            entity5.find_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["trauma_time" + i]));
                        }
                        entity5.trauma_name = Request["trauma_name" + i];
                        entity5.trauma_hospital = Request["deal_hospital" + i];
                        entity5.trauma_result = Request["deal_result" + i];
                        subjectiveList1.Add(entity5);

                    }
                }
            }
            else
            {
                entity.trauma = "无";
            }

            //7.输血史 
            List<Comm_ResidentFile_Followup_Blood_Transfusion> subjectiveList2 = new List<Comm_ResidentFile_Followup_Blood_Transfusion>();
            if (!string.IsNullOrEmpty(Request["blood_transfusion_time0"]) || !string.IsNullOrEmpty(Request["blood_transfusion_name0"]))
            {
                entity.blood_transfusion = "";
                for (int i = 0; i < 50; i++)
                {
                    if (!string.IsNullOrEmpty(Request["blood_transfusion_name" + i]))
                    { 
                        Comm_ResidentFile_Followup_Blood_Transfusion entity6 = new Comm_ResidentFile_Followup_Blood_Transfusion();
                        entity6.id = Guid.NewGuid ().ToString();
                        entity6.resident_id = entity.resident_id;
                        entity6.community_code = entity.community_code;
                        entity6.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                        entity6.worker_user_name = worker;
                        //entity6.find_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["blood_transfusion_time" + i])); 
                        if (string.IsNullOrEmpty(Request["blood_transfusion_time" + i]))
                        {
                            entity6.find_date = null;
                        }
                        else
                        {
                            entity6.find_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["blood_transfusion_time" + i]));
                        }
                        entity6.blood_transfusion_reason = Request["blood_transfusion_name" + i];
                        entity6.blood_amount = Request["blood_transfusion_amount" + i];
                        entity6.blood_result = Request["blood_transfusion_result" + i];
                        subjectiveList2.Add(entity6);
                    }
                }
            }
            else
            {
                entity.blood_transfusion = "无";
            }

            //8.家族遗传史 
            List<Comm_ResidentFile_Followup_Family_Disease> subjectiveList3 = new List<Comm_ResidentFile_Followup_Family_Disease>();
            if (!string.IsNullOrEmpty(Request["relationship0"]) || !string.IsNullOrEmpty(Request["chfamilydisease0"]) || !string.IsNullOrEmpty(Request["family_other_disease0"]))
            {
                entity.family_disease = "";
                for (int i = 0; i < 4; i++)
                {
                    if (!string.IsNullOrEmpty(Request["relationship" + i]))
                    { 
                        Comm_ResidentFile_Followup_Family_Disease entity7 = new Comm_ResidentFile_Followup_Family_Disease();
                        entity7.id = Guid.NewGuid().ToString();
                        entity7.resident_id = entity.resident_id;
                        entity7.community_code = entity.community_code;
                        entity7.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                        entity7.worker_user_name = worker;
                        entity7.relationship_host = Request["relationship" + i];
                        entity7.family_disease_type = Request["chfamilydisease" + i];
                        entity7.family_disease_other = Request["family_other_disease" + i];
                        subjectiveList3.Add(entity7); 
                    }
                }
            }
            else
            {
                entity.family_disease = "无";
            }
            //10.残疾情况
            if (!string.IsNullOrEmpty(Request["chdisability"]) || !string.IsNullOrEmpty(Request["disability_other"]))
            {
                entity.disability_type = Request["chdisability"].Replace(",", "$");
                entity.disability_other = Request["disability_other"];
                //entity.Disability_certificate_number = Request["disability_numb"];
            }
            else
            {
                entity.disability_type = "无";
            }
            //--------------------吸烟与饮酒------------------------ 
            Chronic_disease_SmokeAndDrink entity2 = new Chronic_disease_SmokeAndDrink(); 
            //获取id 
            string id2 = CommonFunc.SafeGetStringFromObj(smokeAndDrinkService.LoadEntityAsNoTracking(t=>t.resident_id==entity.resident_id).Select(t=>t.id).FirstOrDefault());
            if (string.IsNullOrEmpty(id2))
            {
                entity2.id = Guid.NewGuid().ToString();
                entity2.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["txtCreateTime"]));
            }
            else
            {
                entity2.id = id2;
                entity2.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["txtCreateTime"]));
            }
            entity2.name = entity.resident_name;
            entity2.sex = entity.sex;
            entity2.id_card_number = entity.id_card_number;
            entity2.birth_date = entity.birth_date;
           // entity2.permanent_home_commitcode = entity.permanent_home_commitcode;
            entity2.resident_id = entity.resident_id;
            entity2.permanent_address = entity.permanent_home_address;
            entity2.post_code = entity.post_code;
            entity2.community_code = entity.community_code;
            //-----吸烟----
            entity2.smoking = Request["smoking"];

            if (!string.IsNullOrEmpty(Request["times1"]))
            {
                entity2.smoking_begin_year = Request["times1"];
            }
            else
            {
                entity2.smoking_begin_year = "";
            }

            entity2.smoking_daily_amount = Request["day_smoke"];
            if (!string.IsNullOrEmpty(Request["smoke_age"]))
            {
                entity2.smoking_age = Request["smoke_age"].Split('年')[0];
            }
            else
            {
                entity2.smoking_age = "";
            }

            if (!string.IsNullOrEmpty(Request["smoked"]))
            {
                entity2.smoked = Request["smoked"];
            }
            else
            {
                entity2.smoked = "";
            }

            if (!string.IsNullOrEmpty(Request["times2"]))
            {
                entity2.smoked_begin_year = Request["times2"];
            }
            else
            {
                entity2.smoked_begin_year = "";
            }

            if (!string.IsNullOrEmpty(Request["times3"]))
            {
                entity2.smoked_smoking_again = Request["times3"];
            }
            else
            {
                entity2.smoked_smoking_again = "";
            }

            if (!string.IsNullOrEmpty(Request["smoked_long"]))
            {
                entity2.smoked_long_time = Request["smoked_long"].Split('年')[0];
            }
            else
            {
                entity2.smoked_long_time = "";
            }
            entity2.smoked_intent = Request["smoked_idea"];
            entity2.smoked_second_hand = Request["smoke_twice"];
            entity2.smoke_never = Request["smoke"];

            //-----饮酒-----
            entity2.drinking = Request["drinking"];

            if (!string.IsNullOrEmpty(Request["times4"]))
            {
                entity2.drinking_begin_year = Request["times4"];
            }
            else
            {
                entity2.drinking_begin_year = "";
            }


            if (!string.IsNullOrEmpty(Request["drink_age"]))
            {
                entity2.drinking_age = Request["drink_age"].Split('年')[0];
            }
            else
            {
                entity2.drinking_age = "";
            }

            if (!string.IsNullOrEmpty(Request["times5"]))
            {
                entity2.drunk_begin_year = Request["times5"];
            }
            else
            {
                entity2.drunk_begin_year = "";
            }


            if (!string.IsNullOrEmpty(Request["times6"]))
            {
                entity2.drunk_drinking_again = Request["times6"];
            }
            else
            {
                entity2.drunk_drinking_again = "";
            }


            if (!string.IsNullOrEmpty(Request["drunk_long"]))
            {
                entity2.drunk_long_time = Request["drunk_long"].Split('年')[0];
            }
            else
            {
                entity2.drunk_long_time = "";
            }
            entity2.drink_never = Request["drink"];
            //-----饮酒频率-----
            entity2.drinking_spirit_frequency = Request["frequency1"];
            entity2.drinking_beer_frequency = Request["frequency2"];
            entity2.drinking_red_frequency = Request["frequency3"];
            entity2.drinking_yellow_frequency = Request["frequency4"];
            entity2.drinking_other_wine1 = Request["other"];
            entity2.drinking_other_degree1 = Request["other_du"];
            entity2.drinking_other_frequency = Request["frequency5"];


            entity2.drinking_spirit_amount = Request["count1"];
            entity2.drinking_beer_amount = Request["count2"];
            entity2.drinking_red_amount = Request["count3"];
            entity2.drinking_yellow_amount = Request["count4"];
            entity2.drinking_other_wine2 = Request["other_wine"];
            entity2.drinking_other_degree2 = Request["wine_degree"];
            entity2.drinking_other_amount = Request["count5"];

            entity2.drinking_spirit_equivalent = Request["count1_dl"];
            entity2.drinking_beer_equivalent = Request["count2_dl"];
            entity2.drinking_red_equivalent = Request["count3_dl"];
            entity2.drinking_yellow_equivalent = Request["count4_dl"];
            entity2.drinking_other_equivalent = Request["count5_dl"];

            entity2.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
            entity2.worker_user_name = worker;
            entity2.create_time = entity.create_time;
            if (string.IsNullOrEmpty(id2))
            { 
                smokeAndDrinkService.AddEntity(entity2);
            }
            else
            { 
                smokeAndDrinkService.UpdateEntity(entity2);
            }

            //进入恶性肿瘤信息表中
            Comm_Tumour tm = new Comm_Tumour();
            /*
             * 首先根据id,查找个人信息的resident_id，
             * 根据此resident_id到高血压信息表中找此人的id,
             * 如果没有，则新增，否则修改
           */
            if (string.IsNullOrEmpty(id))
            {
                tm.id = Guid.NewGuid().ToString();
                tm.responsible_physician = worker;
                tm.worker_user_name = worker;
                tm.community_code = entity.community_code;
                tm.resident_id = entity.resident_id;
                tm.tumour_type=Request["zl"];
                tm.last_followup_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["txtCreateTime"]));
                tm.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["txtCreateTime"]));
            }
            else
            {
                tm.id = id;
                tm.responsible_physician = worker;
                tm.worker_user_name = worker;
                tm.community_code = entity.community_code;
                tm.resident_id = entity.resident_id;
                tm.tumour_type = Request["zl"];
                tm.last_followup_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["txtCreateTime"]));
                tm.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["txtCreateTime"]));
            }
            tm.id_card_number = Request["txtCardNumber"];
            tm.resident_name = Request["txtResidentName"];
            tm.permanent_home_address = Request["home_address"];
            tm.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["txtBirthDate"]));
            if (string.IsNullOrEmpty(id))
            {
                tumourService.AddEntity(tm);
            }
            else
            {
                tumourService.UpdateEntity(tm);
            }

            #region  
            /*
         * 根据身份证号查询个人信息表中是否存在此人信息，存在获取行政区划代码，与现在填写的常住地址作比较，不相同则将其添加到Comm_ResidentFile_Change_Address表中
         */

            string code = CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t => t.id_card_number == txtCardNumber).Select(t=>t.community_code).FirstOrDefault());

            if (!Request["ddlCommunity"].Equals(code))
            {
                Comm_ResidentFile_Change_Address address = new Comm_ResidentFile_Change_Address();
                address.id = Guid.NewGuid().ToString();
                address.contact_id = entity.id;
                address.resident_id = entity.resident_id;
                address.community_code = code;
                address.fill_community_code = community_code;
                address.fill_person = worker;
                address.permanent_address = CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t=>t.id_card_number==txtCardNumber).Select(t=>t.permanent_home_address).FirstOrDefault()); 
                address.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));

                changeAddressService.AddEntity(address);
            }

            #endregion

            string msg = "";
            if (string.IsNullOrEmpty(re_id))
            {
                if (residentFileService.AddEntity(entity) && residentFileFollowupSurgeryService.UpdateSubjective(subjectiveList, entity.resident_id) && residentFileFollowupTraumaService.UpdateSubjective(subjectiveList1, entity.resident_id) && residentFileFollowupBloodTransfusionService.UpdateSubjective(subjectiveList2, entity.resident_id) && residentFileFollowupFamilyDiseaseService.UpdateSubjective(subjectiveList3, entity.resident_id))
                {
                    #region 添加摘要
                     
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time =CommonFunc.SafeGetDateTimeFromObj(DateTime.Now.ToString("yyyy-MM-dd"));
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.ResidentInfo.ToString();


                    if (string.IsNullOrEmpty(re_id))//添加数据
                    {  
                        eHRAbstractService.AddEntity(ehr);
                    }
                    else
                    {
                        eHRAbstractService.UpdateEntity(ehr);
                    }

                    #endregion
                    msg = "提交成功";
                }
                else
                {
                    msg = "提交失败";
                }
            }
            else
            { 
                Boolean b = false; 
                b = eHRAbstractService.IsExitsOneByResidentIdAndItemType(entity.resident_id, "ResidentInfo");

                if (!b)
                {
                    #region 添加摘要 
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = CommonFunc.SafeGetDateTimeFromObj(DateTime.Now);
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.ResidentInfo.ToString();
                    eHRAbstractService.AddEntity(ehr);
                    #endregion
                }

                if (residentFileService.UpdateEntity(entity) && residentFileFollowupSurgeryService.UpdateSubjective(subjectiveList, entity.resident_id) &&  residentFileFollowupTraumaService.UpdateSubjective(subjectiveList1, entity.resident_id) &&   residentFileFollowupBloodTransfusionService.UpdateSubjective(subjectiveList2, entity.resident_id) && residentFileFollowupFamilyDiseaseService.UpdateSubjective(subjectiveList3, entity.resident_id))
                {
                    msg = "修改成功";
                }
            }

            return Content(msg + "," + entity.resident_id);
        }

        //根据resident_id查询residentFileFollowupDisease表全部字段信息
        public ActionResult ShowDisease()
        {
            string resident_id = Request.QueryString["resident_id"];
            if (resident_id != "")
            {
                var result = residentFileFollowupDiseaseService.LoadEntityAsNoTracking(t => t.resident_id.Contains(resident_id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("");
            }
             
        }

        //根据resident_id查询吸烟与饮酒信息
        public ActionResult ShowSmokeAndDrink()
        {
            string resident_id = Request.QueryString["resident_id"];
            if (resident_id != "")
            {
                var result = smokeAndDrinkService.LoadEntityAsNoTracking(t => t.resident_id.Contains(resident_id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("");
            }
        }

        //根据resident_id查询Surgery
        public ActionResult ShowOption()
        {
            string resident_id = Request.QueryString["resident_id"];
            if (resident_id != "")
            {
                var result = residentFileFollowupSurgeryService.LoadEntityAsNoTracking(t => t.resident_id==resident_id);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("");
            }
        }

        //根据resident_id查询Trauma
        public ActionResult ShowTrauma()
        {
            string resident_id = Request.QueryString["resident_id"];
            if (resident_id != "")
            {
                var result = residentFileFollowupTraumaService.LoadEntityAsNoTracking(t => t.resident_id == resident_id);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("");
            }
        }
        //根据resident_id查询BloodTransfusion
        public ActionResult ShowBloodTransfusion()
        {
            string resident_id = Request.QueryString["resident_id"];
            if (resident_id != "")
            {
                var result = residentFileFollowupBloodTransfusionService.LoadEntityAsNoTracking(t => t.resident_id == resident_id);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("");
            }
        }
        //根据resident_id查询family
        public ActionResult ShowFamily()
        {
            string resident_id = Request.QueryString["resident_id"];
            if (resident_id != "")
            {
                var result = residentFileFollowupFamilyDiseaseService.LoadEntityAsNoTracking(t => t.resident_id == resident_id);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("");
            }
        }

        //根据id查找此人的信息是否已经登记过
        public ActionResult Validate()
        {
            string id_card_number = Request["id_card_number"];
            if (id_card_number != "")
            {
                int n = tumourService.LoadEntityAsNoTracking(t => t.id_card_number == id_card_number).Count();
                if (n >= 1)
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

        //查询  更新页面
        public ActionResult Show()
        {
            string resident_id = Request.QueryString["resident_id"];
            if (resident_id != "")
            {
                var result = residentFileService.LoadEntityAsNoTracking(t=>t.resident_id.Contains(resident_id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        //查询 Comm_Tumour
        public ActionResult ShowTumour()
        {
            string resident_id = Request.QueryString["resident_id"];
            if (resident_id != "")
            {
                var result = tumourService.LoadEntityAsNoTracking(t => t.resident_id.Contains(resident_id)).Select(t => new { t.worker_user_name,t.create_time});
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        //出生日期转年龄
        public string ConvertAge(string birthDate)
        {
            string temp = "";
            DateTime dtBirthDate = Convert.ToDateTime(birthDate);
            int age = DateTime.Now.Year - dtBirthDate.Year;
            if (age > 0)
                temp = age.ToString() + "岁";
            else if (age == 0)
            {
                int month = DateTime.Now.Month - dtBirthDate.Month;
                if (month > 0)
                    temp = month.ToString() + "月";
                else if (month == 0)
                {
                    int day = DateTime.Now.Day - dtBirthDate.Day;
                    if (day > 0)
                        temp = day.ToString() + "天";
                }
            }
            return temp;
        }

        //地址的code转地址名称
        public string ConvertCode(string code)
        {
            string temp = code;
            if (!string.IsNullOrEmpty(code))
            {
                if (code.Length == 12)
                {
                    temp = new Address().GetForwardAddress(code);
                }
                else if (code.Length == 9)
                {
                    temp = new Address().GetForwardAddress2(code);
                }
                else if (code.Length == 6)
                {
                    temp = new Address().GetForwardAddress1(code);
                }
                else if (code.Length == 4)
                {
                    temp = new Address().GetForwardAddress3(code);
                }
                else if (code.Length == 2)
                {
                    temp = new Address().GetForwardAddress4(code);
                }
            }
            return temp;

        }
    }
}
