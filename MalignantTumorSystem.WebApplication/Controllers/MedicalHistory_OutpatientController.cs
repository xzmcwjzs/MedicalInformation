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
    public class MedicalHistory_OutpatientController : BaseTopController
    {
        //
        // GET: /MedicalHistory_Outpatient/
        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IComm_EHR_AbstractService eHRAbstractService { get; set; }
        [Inject]
        public IComm_ResidentFile_Change_AddressService residentFileChangeAddressService { get; set; }
        [Inject]
        public IChronic_disease_Comm_DiagnosticService disease_Comm_DiagnosticService { get; set; }
        [Inject]
        public IChronic_disease_Comm_MedicationService disease_Comm_MedicationService { get; set; }
        [Inject]
        public IChronic_disease_OutpatientService disease_OutpatientService { get; set; }
        [Inject]
        public IChronic_disease_Outpatient_AccessoryExaminationService disease_Outpatient_AccessoryExaminationService { get; set; }
        [Inject]
        public IChronic_disease_Outpatient_JudgeService disease_Outpatient_JudgeService { get; set; }
        [Inject]
        public IChronic_disease_Outpatient_PrescriptionService disease_Outpatient_PrescriptionService { get; set; }
        [Inject]
        public IShare_CommunityInfoService communityInfoService { get; set; }
        [Inject]
        public IComm_Platform_WorkerService platform_WorkerService { get; set; }
        [Inject]
        public IChronic_disease_Comm_MedicationAddService disease_Comm_MedicationAddService { get; set; }

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

           string outpatientstart = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["outpatientstart"]).Trim());
           string  outpatientend = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["outpatientend"]).Trim());
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
            MedicalHistory_OutpatientParam outpatientParam = new MedicalHistory_OutpatientParam()
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
                outpatientstart=outpatientstart,
                outpatientend=outpatientend,
                judge=judge
            };
            var disease_OutpatientList = disease_OutpatientService.LoadSearchEntities(outpatientParam);
            totalCount = outpatientParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<Chronic_disease_Outpatient> result = new List<Chronic_disease_Outpatient>();
            result.AddRange(disease_OutpatientList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<Chronic_disease_Outpatient>> query = new PagerQuery<PagerInfo, List<Chronic_disease_Outpatient>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View();
        }
        //新增页面
        public ActionResult Outpatient()
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

        //保存 更新
        public ActionResult AddAndUpdate()
        {
            string id = Request["id"];
            string fill_community_code = Request["community_code"];
            string worker = Request["worker"];
            Chronic_disease_Outpatient entity = new Chronic_disease_Outpatient();
            //将诊断信息放到诊断信息表中
            Chronic_disease_Comm_Diagnostic dia = new Chronic_disease_Comm_Diagnostic();

            //将用药情况放到用药信息表中
            Chronic_disease_Comm_Medication media = new Chronic_disease_Comm_Medication();

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

            entity.outpatient_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
            entity.outpatient_id = Request["outpatientId"];
            entity.hospital = Request["hospital"];
            entity.department = Request["department"];

            entity.zs = Request["zs"];
            entity.xbs = Request["xbs"];
            entity.t = Request["t"];
            entity.p = Request["p"];
            entity.r = Request["r"];
            entity.ssy1 = Request["ssy"];
            entity.szy1 = Request["szy"];
            entity.ssy2 = Request["ssy1"];
            entity.szy2 = Request["szy1"];
            entity.other = Request["other"];
            entity.orders = Request["advice"];
            if (string.IsNullOrEmpty(Request["date"]))
            {
                entity.finish_time = null;
            }
            else
            {
                entity.finish_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["date"]));
            }

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

            System.Collections.Generic.List<Chronic_disease_Outpatient_AccessoryExamination> subjectiveList1 = new System.Collections.Generic.List<Chronic_disease_Outpatient_AccessoryExamination>();
            System.Collections.Generic.List<Chronic_disease_Outpatient_Judge> subjectiveList2 = new System.Collections.Generic.List<Chronic_disease_Outpatient_Judge>();
            System.Collections.Generic.List<Chronic_disease_Outpatient_Prescription> subjectiveList4 = new System.Collections.Generic.List<Chronic_disease_Outpatient_Prescription>();

            for (int i = 1; i < 13; i++)
            {
                if (!string.IsNullOrEmpty(Request["fzjc" + i]))
                {
                    Chronic_disease_Outpatient_AccessoryExamination entity1 = new Chronic_disease_Outpatient_AccessoryExamination();
                    entity1.id = Guid.NewGuid().ToString();
                    entity1.contact_id = entity.id;
                    entity1.context = Request["fzjc" + i];
                    subjectiveList1.Add(entity1);
                }
            }
            for (int i = 1; i < 13; i++)
            {
                if (!string.IsNullOrEmpty(Request["judge" + i]))
                {
                    Chronic_disease_Outpatient_Judge entity2 = new Chronic_disease_Outpatient_Judge();
                    entity2.id = Guid.NewGuid().ToString();
                    entity2.contact_id = entity.id;
                    entity2.context = Request["judge" + i];
                    subjectiveList2.Add(entity2);
                }
            }


            for (int i = 1; i < 13; i++)
            {
                if (!string.IsNullOrEmpty(Request["medical_name" + i]))
                {
                    Chronic_disease_Outpatient_Prescription entity4 = new Chronic_disease_Outpatient_Prescription();
                    entity4.id = Guid.NewGuid().ToString();
                    entity4.contact_id = entity.id;
                    entity4.medical_name = Request["medical_name" + i];
                    entity4.medical_specifications = Request["specifications" + i];
                    entity4.medical_usage = Request["usage" + i];
                    entity4.medical_dosage = Request["dosage" + i];
                    entity4.medical_min_unit = Request["mix_unit" + i];
                    entity4.medical_frequency = Request["frequency" + i];
                    entity4.medical_day = Request["day" + i];
                    entity4.medical_total = Request["total" + i];
                    entity4.medical_unit = Request["unit" + i];
                    entity4.medical_price = Request["price" + i];
                    entity4.medical_manufacturer = Request["manufacturer" + i];
                    subjectiveList4.Add(entity4);
                }
            }
            //获取当前的诊断信息，统一存放到诊断信息表中
            DateTime date = CommonFunc.SafeGetDateTimeFromObj(disease_OutpatientService.LoadEntityAsNoTracking(t => t.id == entity.id).Select(t => t.outpatient_date).FirstOrDefault());
            string dia_id = CommonFunc.SafeGetStringFromObj(disease_Comm_DiagnosticService.LoadEntityAsNoTracking(t=>(t.resident_id==entity.resident_id)&&(t.data1==date)).Select(t=>t.id).FirstOrDefault());
            //获取当前的社区名称
            string com_name = CommonFunc.SafeGetStringFromObj(communityInfoService.LoadEntityAsNoTracking(t=>t.code==entity.community_code).Select(t=>t.name).FirstOrDefault());
            //将worker转换为姓名
            string real_name =CommonFunc.SafeGetStringFromObj(platform_WorkerService.LoadEntityAsNoTracking(t=>t.user_name==worker).Select(t=>t.real_name).FirstOrDefault());
            if (!string.IsNullOrEmpty(Request["judge"]))
            {
                if (string.IsNullOrEmpty(dia_id))
                {
                    dia.id = Guid.NewGuid().ToString();
                    dia.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                    dia.community_code = entity.community_code;
                    dia.worker = worker;
                    dia.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
                }
                else
                {
                    dia.id = dia_id;
                    dia.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                    dia.community_code = entity.community_code;
                    dia.worker = worker;
                    dia.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
                }
                dia.names = Request["name"];
                dia.sex = Request["sex"];
                dia.id_card_number = Request["id_card_number"];
                dia.address = Request["perment_community_address"];
                dia.phone = Request["phone"];
                dia.resident_id = entity.resident_id;
                dia.birth_date = entity.birth_date;
                if (string.IsNullOrEmpty(Request["data"]))
                {
                    dia.data1 = null;
                }
                else
                {
                    dia.data1 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                }
                
                dia.name1 = Request["judge"];
                dia.doctor1 = real_name;
                dia.hospital1 = com_name;
                dia.numb1 = Request["icd_10"];
                if (!string.IsNullOrEmpty(Request["judge_1"]))
                {
                    dia.name2 = Request["judge_1"];
                    if (string.IsNullOrEmpty(Request["data"]))
                    {
                        dia.data2 = null;
                    }
                    else
                    {
                        dia.data2 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                    }
                    
                    dia.doctor2 = real_name;
                    dia.hospital2 = com_name;
                    dia.numb2 = Request["icd_10_1"];
                    if (!string.IsNullOrEmpty(Request["judge_2"]))
                    {
                        dia.name3 = Request["judge_2"];
                        if (string.IsNullOrEmpty(Request["data"]))
                        {
                            dia.data3 = null;
                        }
                        else
                        {
                            dia.data3 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                        }
                        
                        dia.doctor3 = real_name;
                        dia.hospital3 = com_name;
                        dia.numb3 = Request["icd_10_2"];
                        if (!string.IsNullOrEmpty(Request["judge_3"]))
                        {
                            dia.name4 = Request["judge_3"];
                            if (string.IsNullOrEmpty(Request["data"]))
                            {
                                dia.data4 = null;
                            }
                            else
                            {
                                dia.data4 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                            } 
                            dia.doctor4 = real_name;
                            dia.hospital4 = com_name;
                            dia.numb4 = Request["icd_10_3"];
                            if (!string.IsNullOrEmpty(Request["judge_4"]))
                            {
                                dia.name5 = Request["judge_4"];
                                if (string.IsNullOrEmpty(Request["data"]))
                                {
                                    dia.data5 = null;
                                }
                                else
                                {
                                    dia.data5 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                                }  
                                dia.doctor5 = real_name;
                                dia.hospital5 = com_name;
                                dia.numb5 = Request["icd_10_4"];
                            }
                        }
                    }
                }

                if (string.IsNullOrEmpty(dia_id))
                {
                    disease_Comm_DiagnosticService.AddEntity(dia);
                }
                else
                {
                    disease_Comm_DiagnosticService.UpdateEntity(dia);
                }
            }

            //获取当前的用药，统一存放到用药信息表中
            string media_id = CommonFunc.SafeGetStringFromObj(disease_Comm_MedicationService.LoadEntityAsNoTracking(t=>(t.resident_id==entity.resident_id)&&(t.data1==date)).Select(t=>t.id).FirstOrDefault());
            if (!string.IsNullOrEmpty(Request["medical_name1"]))
            {
                if (string.IsNullOrEmpty(media_id))
                {
                    media.id = Guid.NewGuid().ToString();
                    media.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                    media.community_code = entity.community_code;
                    media.worker = worker;
                    media.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
                }
                else
                {
                    media.id = media_id;
                    media.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                    media.community_code = entity.community_code;
                    media.worker = worker;
                    media.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
                }

                media.names = Request["name"];
                media.sex = Request["sex"];
                media.id_card_number = Request["id_card_number"];

                media.address = Request["perment_community_address"];
                media.phone = Request["phone"];
                media.resident_id = entity.resident_id;
                media.birth_date = entity.birth_date;
                //判断是否有用药信息，如果有，怎添加到表中，没有跳过
                if (!string.IsNullOrEmpty(Request["medical_name1"]))
                {
                    if (string.IsNullOrEmpty(Request["data1"]))
                    {
                        media.data1 = null;
                    }
                    else
                    {
                        media.data1 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data1"]));
                    }   
                    media.name1 = Request["medical_name1"];
                    media.dosage1 = Request["frequency1"] + "," + Request["dosage1"] + Request["mix_unit1"];
                    media.usage1 = Request["usage1"];
                    media.manu_batch1 = Request["manufacturer1"];

                    if (!string.IsNullOrEmpty(Request["medical_name2"]))
                    {
                        if (string.IsNullOrEmpty(Request["data"]))
                        {
                            media.data2 = null;
                        }
                        else
                        {
                            media.data2 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                        }    
                        media.name2 = Request["medical_name2"];
                        media.dosage2 = Request["frequency2"] + "," + Request["dosage2"] + Request["mix_unit2"];
                        media.usage2 = Request["usage2"];
                        media.manu_batch2 = Request["manufacturer2"];
                        if (!string.IsNullOrEmpty(Request["medical_name3"]))
                        {
                            if (string.IsNullOrEmpty(Request["data"]))
                            {
                                media.data3 = null;
                            }
                            else
                            {
                                media.data3 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                            }     
                            media.name3 = Request["medical_name3"];
                            media.dosage3 = Request["frequency3"] + "," + Request["dosage3"] + Request["mix_unit3"];
                            media.usage3 = Request["usage3"];
                            media.manu_batch3 = Request["manufacturer3"];
                            if (!string.IsNullOrEmpty(Request["medical_name4"]))
                            {
                                if (string.IsNullOrEmpty(Request["data"]))
                                {
                                    media.data4 = null;
                                }
                                else
                                {
                                    media.data4 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                                }      
                                media.name4 = Request["medical_name4"];
                                media.dosage4 = Request["frequency4"] + "," + Request["dosage4"] + Request["mix_unit4"];
                                media.usage4 = Request["usage4"];
                                media.manu_batch4 = Request["manufacturer4"];
                                if (!string.IsNullOrEmpty(Request["medical_name5"]))
                                {
                                    if (string.IsNullOrEmpty(Request["data"]))
                                    {
                                        media.data5 = null;
                                    }
                                    else
                                    {
                                        media.data5 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                                    }      
                                    media.name5 = Request["medical_name5"];
                                    media.dosage5 = Request["frequency5"] + "," + Request["dosage5"] + Request["mix_unit5"];
                                    media.usage5 = Request["usage5"];
                                    media.manu_batch5 = Request["manufacturer5"];

                                }
                            }
                        }
                    }
                }

                //增加用药信息
                System.Collections.Generic.List<Chronic_disease_Comm_MedicationAdd> subjectiveList5 = new System.Collections.Generic.List<Chronic_disease_Comm_MedicationAdd>();
                for (int i = 5; i < 13; i++)
                {
                    if (!string.IsNullOrEmpty(Request["medical_name" + i]))
                    {
                        Chronic_disease_Comm_MedicationAdd entity5 = new Chronic_disease_Comm_MedicationAdd();
                        entity5.id = Guid.NewGuid().ToString();
                        entity5.add_id = media.id;
                        if (string.IsNullOrEmpty(Request["data"]))
                        {
                            entity5.data = null;
                        }
                        else
                        {
                            entity5.data = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                        }
                        
                        entity5.name = Request["medical_name" + i];
                        entity5.dosage = Request["frequency" + i] + "," + Request["dosage" + i] + Request["mix_unit" + i];
                        entity5.usage = Request["usage" + i];
                        entity5.manu_batch = Request["manufacturer" + i];

                        if (entity5.name != null)
                        {
                            subjectiveList5.Add(entity5);
                        }
                    }
                }


                if (string.IsNullOrEmpty(media_id))
                { 
                    disease_Comm_MedicationService.AddEntity(media);
                   disease_Comm_MedicationAddService.UpdateSubjective(subjectiveList5, media.id);
                }
                else
                {
                    disease_Comm_MedicationService.UpdateEntity(media);
                    disease_Comm_MedicationAddService.UpdateSubjective(subjectiveList5, media.id);
                }

            }


            string msg = "";
            if (string.IsNullOrEmpty(id))
            {
                if (disease_OutpatientService.AddEntity(entity) && disease_Outpatient_AccessoryExaminationService.UpdateSubjective(subjectiveList1, entity.id) && disease_Outpatient_JudgeService.UpdateSubjective(subjectiveList2, entity.id) && disease_Outpatient_PrescriptionService.UpdateSubjective(subjectiveList4, entity.id))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.Outpatient.ToString();

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
                if (disease_OutpatientService.UpdateEntity(entity) && disease_Outpatient_AccessoryExaminationService.UpdateSubjective(subjectiveList1, entity.id) && disease_Outpatient_JudgeService.UpdateSubjective(subjectiveList2, entity.id) && disease_Outpatient_PrescriptionService.UpdateSubjective(subjectiveList4, entity.id))
                {
                    msg = "保存成功";
                }
            }
            return Content(msg + ',' + entity.id);
        }
        //确认提交
        public ActionResult Sure()
        {
            string id = Request["id"];
            string fill_community_code = Request["community_code"];
            string worker = Request["worker"];
            Chronic_disease_Outpatient entity = new Chronic_disease_Outpatient();
            //将诊断信息放到诊断信息表中
            Chronic_disease_Comm_Diagnostic dia = new Chronic_disease_Comm_Diagnostic();

            //将用药情况放到用药信息表中
            Chronic_disease_Comm_Medication media = new Chronic_disease_Comm_Medication();

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
            entity.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["birth_date"]));

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

            entity.outpatient_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
            entity.outpatient_id = Request["outpatientId"];
            entity.hospital = Request["hospital"];
            entity.department = Request["department"];

            entity.zs = Request["zs"];
            entity.xbs = Request["xbs"];
            entity.t = Request["t"];
            entity.p = Request["p"];
            entity.r = Request["r"];
            entity.ssy1 = Request["ssy"];
            entity.szy1 = Request["szy"];
            entity.ssy2 = Request["ssy1"];
            entity.szy2 = Request["szy1"];
            entity.other = Request["other"];
            entity.orders = Request["advice"];
            if (string.IsNullOrEmpty(Request["date"]))
            {
                entity.finish_time = null;
            }
            else
            {
                entity.finish_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["date"]));
            }

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

            System.Collections.Generic.List<Chronic_disease_Outpatient_AccessoryExamination> subjectiveList1 = new System.Collections.Generic.List<Chronic_disease_Outpatient_AccessoryExamination>();
            System.Collections.Generic.List<Chronic_disease_Outpatient_Judge> subjectiveList2 = new System.Collections.Generic.List<Chronic_disease_Outpatient_Judge>();
            System.Collections.Generic.List<Chronic_disease_Outpatient_Prescription> subjectiveList4 = new System.Collections.Generic.List<Chronic_disease_Outpatient_Prescription>();

            for (int i = 1; i < 13; i++)
            {
                if (!string.IsNullOrEmpty(Request["fzjc" + i]))
                {
                    Chronic_disease_Outpatient_AccessoryExamination entity1 = new Chronic_disease_Outpatient_AccessoryExamination();
                    entity1.id = Guid.NewGuid().ToString();
                    entity1.contact_id = entity.id;
                    entity1.context = Request["fzjc" + i];
                    subjectiveList1.Add(entity1);
                }
            }
            for (int i = 1; i < 13; i++)
            {
                if (!string.IsNullOrEmpty(Request["judge" + i]))
                {
                    Chronic_disease_Outpatient_Judge entity2 = new Chronic_disease_Outpatient_Judge();
                    entity2.id = Guid.NewGuid().ToString();
                    entity2.contact_id = entity.id;
                    entity2.context = Request["judge" + i];
                    subjectiveList2.Add(entity2);
                }
            }


            for (int i = 1; i < 13; i++)
            {
                if (!string.IsNullOrEmpty(Request["medical_name" + i]))
                {
                    Chronic_disease_Outpatient_Prescription entity4 = new Chronic_disease_Outpatient_Prescription();
                    entity4.id = Guid.NewGuid().ToString();
                    entity4.contact_id = entity.id;
                    entity4.medical_name = Request["medical_name" + i];
                    entity4.medical_specifications = Request["specifications" + i];
                    entity4.medical_usage = Request["usage" + i];
                    entity4.medical_dosage = Request["dosage" + i];
                    entity4.medical_min_unit = Request["mix_unit" + i];
                    entity4.medical_frequency = Request["frequency" + i];
                    entity4.medical_day = Request["day" + i];
                    entity4.medical_total = Request["total" + i];
                    entity4.medical_unit = Request["unit" + i];
                    entity4.medical_price = Request["price" + i];
                    entity4.medical_manufacturer = Request["manufacturer" + i];
                    subjectiveList4.Add(entity4);
                }
            }
            //获取当前的诊断信息，统一存放到诊断信息表中
            DateTime date = CommonFunc.SafeGetDateTimeFromObj(disease_OutpatientService.LoadEntityAsNoTracking(t => t.id == entity.id).Select(t => t.outpatient_date).FirstOrDefault());
            string dia_id = CommonFunc.SafeGetStringFromObj(disease_Comm_DiagnosticService.LoadEntityAsNoTracking(t => (t.resident_id == entity.resident_id) && (t.data1 == date)).Select(t => t.id).FirstOrDefault());
            //获取当前的社区名称
            string com_name = CommonFunc.SafeGetStringFromObj(communityInfoService.LoadEntityAsNoTracking(t => t.code == entity.community_code).Select(t => t.name).FirstOrDefault());
            //将worker转换为姓名
            string real_name = CommonFunc.SafeGetStringFromObj(platform_WorkerService.LoadEntityAsNoTracking(t => t.user_name == worker).Select(t => t.real_name).FirstOrDefault());
            if (!string.IsNullOrEmpty(Request["judge"]))
            {
                if (string.IsNullOrEmpty(dia_id))
                {
                    dia.id = Guid.NewGuid().ToString();
                    dia.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                    dia.community_code = entity.community_code;
                    dia.worker = worker;
                    dia.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
                }
                else
                {
                    dia.id = dia_id;
                    dia.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                    dia.community_code = entity.community_code;
                    dia.worker = worker;
                    dia.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
                }
                dia.names = Request["name"];
                dia.sex = Request["sex"];
                dia.id_card_number = Request["id_card_number"];
                dia.address = Request["perment_community_address"];
                dia.phone = Request["phone"];
                dia.resident_id = entity.resident_id;
                dia.birth_date = entity.birth_date;
                if (string.IsNullOrEmpty(Request["data"]))
                {
                    dia.data1 = null;
                }
                else
                {
                    dia.data1 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                }

                dia.name1 = Request["judge"];
                dia.doctor1 = real_name;
                dia.hospital1 = com_name;
                dia.numb1 = Request["icd_10"];
                if (!string.IsNullOrEmpty(Request["judge_1"]))
                {
                    dia.name2 = Request["judge_1"];
                    if (string.IsNullOrEmpty(Request["data"]))
                    {
                        dia.data2 = null;
                    }
                    else
                    {
                        dia.data2 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                    }

                    dia.doctor2 = real_name;
                    dia.hospital2 = com_name;
                    dia.numb2 = Request["icd_10_1"];
                    if (!string.IsNullOrEmpty(Request["judge_2"]))
                    {
                        dia.name3 = Request["judge_2"];
                        if (string.IsNullOrEmpty(Request["data"]))
                        {
                            dia.data3 = null;
                        }
                        else
                        {
                            dia.data3 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                        }

                        dia.doctor3 = real_name;
                        dia.hospital3 = com_name;
                        dia.numb3 = Request["icd_10_2"];
                        if (!string.IsNullOrEmpty(Request["judge_3"]))
                        {
                            dia.name4 = Request["judge_3"];
                            if (string.IsNullOrEmpty(Request["data"]))
                            {
                                dia.data4 = null;
                            }
                            else
                            {
                                dia.data4 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                            }
                            dia.doctor4 = real_name;
                            dia.hospital4 = com_name;
                            dia.numb4 = Request["icd_10_3"];
                            if (!string.IsNullOrEmpty(Request["judge_4"]))
                            {
                                dia.name5 = Request["judge_4"];
                                if (string.IsNullOrEmpty(Request["data"]))
                                {
                                    dia.data5 = null;
                                }
                                else
                                {
                                    dia.data5 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                                }
                                dia.doctor5 = real_name;
                                dia.hospital5 = com_name;
                                dia.numb5 = Request["icd_10_4"];
                            }
                        }
                    }
                }

                if (string.IsNullOrEmpty(dia_id))
                {
                    disease_Comm_DiagnosticService.AddEntity(dia);
                }
                else
                {
                    disease_Comm_DiagnosticService.UpdateEntity(dia);
                }
            }

            //获取当前的用药，统一存放到用药信息表中
            string media_id = CommonFunc.SafeGetStringFromObj(disease_Comm_MedicationService.LoadEntityAsNoTracking(t => (t.resident_id == entity.resident_id) && (t.data1 == date)).Select(t => t.id).FirstOrDefault());
            if (!string.IsNullOrEmpty(Request["medical_name1"]))
            {
                if (string.IsNullOrEmpty(media_id))
                {
                    media.id = Guid.NewGuid().ToString();
                    media.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                    media.community_code = entity.community_code;
                    media.worker = worker;
                    media.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
                }
                else
                {
                    media.id = media_id;
                    media.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
                    media.community_code = entity.community_code;
                    media.worker = worker;
                    media.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
                }

                media.names = Request["name"];
                media.sex = Request["sex"];
                media.id_card_number = Request["id_card_number"];

                media.address = Request["perment_community_address"];
                media.phone = Request["phone"];
                media.resident_id = entity.resident_id;
                media.birth_date = entity.birth_date;
                //判断是否有用药信息，如果有，怎添加到表中，没有跳过
                if (!string.IsNullOrEmpty(Request["medical_name1"]))
                {
                    if (string.IsNullOrEmpty(Request["data1"]))
                    {
                        media.data1 = null;
                    }
                    else
                    {
                        media.data1 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data1"]));
                    }
                    media.name1 = Request["medical_name1"];
                    media.dosage1 = Request["frequency1"] + "," + Request["dosage1"] + Request["mix_unit1"];
                    media.usage1 = Request["usage1"];
                    media.manu_batch1 = Request["manufacturer1"];

                    if (!string.IsNullOrEmpty(Request["medical_name2"]))
                    {
                        if (string.IsNullOrEmpty(Request["data"]))
                        {
                            media.data2 = null;
                        }
                        else
                        {
                            media.data2 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                        }
                        media.name2 = Request["medical_name2"];
                        media.dosage2 = Request["frequency2"] + "," + Request["dosage2"] + Request["mix_unit2"];
                        media.usage2 = Request["usage2"];
                        media.manu_batch2 = Request["manufacturer2"];
                        if (!string.IsNullOrEmpty(Request["medical_name3"]))
                        {
                            if (string.IsNullOrEmpty(Request["data"]))
                            {
                                media.data3 = null;
                            }
                            else
                            {
                                media.data3 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                            }
                            media.name3 = Request["medical_name3"];
                            media.dosage3 = Request["frequency3"] + "," + Request["dosage3"] + Request["mix_unit3"];
                            media.usage3 = Request["usage3"];
                            media.manu_batch3 = Request["manufacturer3"];
                            if (!string.IsNullOrEmpty(Request["medical_name4"]))
                            {
                                if (string.IsNullOrEmpty(Request["data"]))
                                {
                                    media.data4 = null;
                                }
                                else
                                {
                                    media.data4 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                                }
                                media.name4 = Request["medical_name4"];
                                media.dosage4 = Request["frequency4"] + "," + Request["dosage4"] + Request["mix_unit4"];
                                media.usage4 = Request["usage4"];
                                media.manu_batch4 = Request["manufacturer4"];
                                if (!string.IsNullOrEmpty(Request["medical_name5"]))
                                {
                                    if (string.IsNullOrEmpty(Request["data"]))
                                    {
                                        media.data5 = null;
                                    }
                                    else
                                    {
                                        media.data5 = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                                    }
                                    media.name5 = Request["medical_name5"];
                                    media.dosage5 = Request["frequency5"] + "," + Request["dosage5"] + Request["mix_unit5"];
                                    media.usage5 = Request["usage5"];
                                    media.manu_batch5 = Request["manufacturer5"];

                                }
                            }
                        }
                    }
                }

                //增加用药信息
                System.Collections.Generic.List<Chronic_disease_Comm_MedicationAdd> subjectiveList5 = new System.Collections.Generic.List<Chronic_disease_Comm_MedicationAdd>();
                for (int i = 5; i < 13; i++)
                {
                    if (!string.IsNullOrEmpty(Request["medical_name" + i]))
                    {
                        Chronic_disease_Comm_MedicationAdd entity5 = new Chronic_disease_Comm_MedicationAdd();
                        entity5.id = Guid.NewGuid().ToString();
                        entity5.add_id = media.id;
                        if (string.IsNullOrEmpty(Request["data"]))
                        {
                            entity5.data = null;
                        }
                        else
                        {
                            entity5.data = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["data"]));
                        }

                        entity5.name = Request["medical_name" + i];
                        entity5.dosage = Request["frequency" + i] + "," + Request["dosage" + i] + Request["mix_unit" + i];
                        entity5.usage = Request["usage" + i];
                        entity5.manu_batch = Request["manufacturer" + i];

                        if (entity5.name != null)
                        {
                            subjectiveList5.Add(entity5);
                        }
                    }
                }


                if (string.IsNullOrEmpty(media_id))
                {
                    disease_Comm_MedicationService.AddEntity(media);
                    disease_Comm_MedicationAddService.UpdateSubjective(subjectiveList5, media.id);
                }
                else
                {
                    disease_Comm_MedicationService.UpdateEntity(media);
                    disease_Comm_MedicationAddService.UpdateSubjective(subjectiveList5, media.id);
                }

            }


            string msg = "";
            if (string.IsNullOrEmpty(id))
            {
                if (disease_OutpatientService.AddEntity(entity) && disease_Outpatient_AccessoryExaminationService.UpdateSubjective(subjectiveList1, entity.id) && disease_Outpatient_JudgeService.UpdateSubjective(subjectiveList2, entity.id) && disease_Outpatient_PrescriptionService.UpdateSubjective(subjectiveList4, entity.id))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.Outpatient.ToString();

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
                if (disease_OutpatientService.UpdateEntity(entity) && disease_Outpatient_AccessoryExaminationService.UpdateSubjective(subjectiveList1, entity.id) && disease_Outpatient_JudgeService.UpdateSubjective(subjectiveList2, entity.id) && disease_Outpatient_PrescriptionService.UpdateSubjective(subjectiveList4, entity.id))
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
            string resident_id =CommonFunc.SafeGetStringFromObj(Request.QueryString["resident_id"]);
            string resident_name =CommonFunc.SafeGetStringFromObj(Request.QueryString["resident_name"]);

            
            int pageIndex = CommonFunc.SafeGetIntFromObj(this.Request["pageIndex"], 1);
            int pageSize = this.Request["pageSize"] == null ? PageSize.GetPageSize : int.Parse(Request["pageSize"]);
            int totalCount = 0;

            var disease_OutpatientList = disease_OutpatientService.LoadPageEntities(pageSize,pageIndex,out totalCount,t=>t.resident_id.Contains(resident_id),t=>t.outpatient_date,false);

            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<Chronic_disease_Outpatient> result = new List<Chronic_disease_Outpatient>();
            result.AddRange(disease_OutpatientList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<Chronic_disease_Outpatient>> query = new PagerQuery<PagerInfo, List<Chronic_disease_Outpatient>>(pager, result);
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
            string id =CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            if (!string.IsNullOrEmpty(id))
            {
                var result = disease_OutpatientService.LoadEntityAsNoTracking(t=>t.id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("" , JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult ShowAccessoryExamination()
        {
            string contact_id = CommonFunc.SafeGetStringFromObj(Request.QueryString["contact_id"]);
            if (!string.IsNullOrEmpty(contact_id))
            {
                var result = disease_Outpatient_AccessoryExaminationService.LoadEntityAsNoTracking(t=>t.contact_id.Contains(contact_id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult ShowJudge()
        {
            string contact_id = CommonFunc.SafeGetStringFromObj(Request.QueryString["contact_id"]);
            if (!string.IsNullOrEmpty(contact_id))
            {
                var result = disease_Outpatient_JudgeService.LoadEntityAsNoTracking(t => t.contact_id.Contains(contact_id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult ShowPrescription()
        {
            string contact_id = CommonFunc.SafeGetStringFromObj(Request.QueryString["contact_id"]);
            if (!string.IsNullOrEmpty(contact_id))
            {
                var result = disease_Outpatient_PrescriptionService.LoadEntityAsNoTracking(t => t.contact_id.Contains(contact_id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        

    }
}
