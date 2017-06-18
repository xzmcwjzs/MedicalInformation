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
   
    public class BC_FollowupAndExamination_SFJLController : BaseTopController
    {
        //
        // GET: /BreastCancer/BC_FollowupAndExamination_SFJL/
        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IComm_EHR_AbstractService eHRAbstractService { get; set; }
        [Inject]
        public IComm_ResidentFile_Change_AddressService residentFileChangeAddressService { get; set; }
        [Inject]
        public IMT_BC_FollowupService bc_FollowupService { get; set; }
        [Inject]
        public IMT_BC_Followup_DoseService bc_Followup_DoseService { get; set; }
        [Inject]
        public IChronic_disease_SmokeAndDrinkService disease_SmokeAndDrinkService { get; set; }
        [Inject]
        public IChronic_disease_DailyLifeService disease_DailyLifeService { get; set; }
        [Inject]
        public IChronic_disease_PhysicalExerciseService disease_PhysicalExerciseService{ get; set; }

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
        public ActionResult SFJL()
        {
            Comm_Platform_Worker workerModel = Session["worker"] as Comm_Platform_Worker;
            ViewBag.real_name = CommonFunc.SafeGetStringFromObj(workerModel.real_name);
            ViewBag.worker = CommonFunc.SafeGetStringFromObj(workerModel.user_name);
            ViewBag.community_code = CommonFunc.SafeGetStringFromObj(workerModel.region_code);


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

            string followupstart = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["followupstart"]).Trim());
            string followupend = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["followupend"]).Trim());
            string way = CommonFunc.FilterSpecialString(CommonFunc.SafeGetStringFromObj(Request["way"]).Trim());
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
            FollowupParam followupParam = new FollowupParam()
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
                followupstart = followupstart,
                followupend = followupend,
                way = way
            };
            var followupList = bc_FollowupService.LoadSearchEntities(followupParam);
            totalCount = followupParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<MT_BC_Followup> result = new List<MT_BC_Followup>();
            result.AddRange(followupList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<MT_BC_Followup>> query = new PagerQuery<PagerInfo, List<MT_BC_Followup>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View();
        }
        //新增
        public ActionResult AddAndUpdate()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            string community_code = CommonFunc.SafeGetStringFromObj(Request.QueryString["community_code"]);
            string worker = CommonFunc.SafeGetStringFromObj(Request.QueryString["worker"]);
            string real_name = CommonFunc.SafeGetStringFromObj(Request.QueryString["real_name"]);

            MT_BC_Followup entity = new MT_BC_Followup();
            MT_BC_Followup_Dose medentity = new MT_BC_Followup_Dose();

            if (string.IsNullOrEmpty(id))
            {
                entity.id = Guid.NewGuid().ToString();
                entity.create_time= entity.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
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
            entity.zipcode = Request["zipCode"];
            string residentId = CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t => t.id_card_number == id_card_number).Select(t => t.resident_id).FirstOrDefault());
            if (string.IsNullOrEmpty(residentId))
            {
                entity.resident_id = residentFileService.GetNumberByCode1(ddlCommunity);
            }
            else
            {
                entity.resident_id = residentId;
            }
            
            entity.community_code = Request["ddlCommunity"];
            entity.address = Request["perment_community_address"];
            entity.followup_physician = real_name;
            entity.followup_type = Request["way"];
            if (string.IsNullOrEmpty(Request["time"]))
            {
                entity.followup_date = null;
            }
            else
            {
                entity.followup_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["time"]));
            }
          
            entity.followup_result= Request["sffl"];
            entity.height= Request["height"];
            entity.weight= Request["weight1"];
            entity.height_weight_index = Request["bmi"];
            entity.systolic_pressure = Request["ssy"];
            entity.diastolic_pressure = Request["szy"];
            entity.abidance_result= Request["zyxw"];
            entity.worker_user_name = worker;
            entity.worker_user_realname = real_name;
            entity.heart_rate= Request["heart1"];
            entity.next_heart_rate = Request["heart2"];
            entity.next_weight= Request["weight2"];
            
            entity.xltz = Request["xltz"];
            entity.bloodsugar= Request["bs"];
            entity.bloodsugar_other= Request["other4"];
            entity.org= Request["org"];
            entity.reason= Request["reason"];
            if (string.IsNullOrEmpty(Request["nexttime"]))
            {
                entity.next_time = null;
            }
            else
            {
                entity.next_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["nexttime"]));
            }
           
            entity.ssy1= Request["ssy1"];
            entity.szy1= Request["szy1"];
            if (string.IsNullOrEmpty(Request["firstsymptomdate"]))
            {
                entity.firstsymptomdate = null;
            }
            else
            {
                entity.firstsymptomdate = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["firstsymptomdate"]));
            }
            if (string.IsNullOrEmpty(Request["firstvisitdate"]))
            {
                entity.firstvisitdate = null;
            }
            else
            {
                entity.firstvisitdate = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["firstvisitdate"]));
            }
           
            if (string.IsNullOrEmpty(Request["firstdiagnosisdate"]))
            {
                entity.firstdiagnosisdate = null;
            }
            else
            {
                entity.firstdiagnosisdate = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["firstdiagnosisdate"]));
            }
           
            entity.diagnosishospital = Request["diagnosishospital"];
            entity.diseasename = Request["diseasename"];
            entity.diagnosisbasis = Request["diagnosisbasis"];
            entity.pathologictype = Request["pathologictype"];
            entity.treatmentsituation = Request["treatmentsituation"];
            entity.complication = Request["complication"];
            entity.treatmenthospital = Request["treatmenthospital"];
            entity.treatment = Request["treatment"];
            entity.treatmentother = Request["treatmentother"];
            entity.firstoperationhospital = Request["firstoperationhospital"];
            if (string.IsNullOrEmpty(Request["firstoperationdate"]))
            {
                entity.firstoperationdate = null;
            }
            else
            {
                entity.firstoperationdate = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["firstoperationdate"]));
            }
          
            entity.firstoperationnature = Request["firstoperationnature"];
            entity.transfer = Request["transfer"];
            entity.transferposition = Request["transferposition"];
            entity.recrudescence = Request["recrudescence"];
            if (string.IsNullOrEmpty(Request["recrudescencedate"]))
            {
                entity.recrudescencedate = null;
            }
            else
            {
                entity.recrudescencedate = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["recrudescencedate"]));
            }
            
            entity.tumorhistory = Request["tumorhistory"];
            entity.tumorhistoryrelation = Request["tumorhistoryrelation"];
            entity.tumorhistorytype = Request["tumorhistorytype"];
            entity.tumorhistorytypeother = Request["tumorhistorytypeother"];
            entity.correctdiagnosis = Request["correctdiagnosis"];
            entity.correctdiagnosissite = Request["correctdiagnosissite"];
            if (string.IsNullOrEmpty(Request["correctdiagnosisdate"]))
            {
                entity.correctdiagnosisdate = null;
            }
            else
            {
                entity.correctdiagnosisdate = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["correctdiagnosisdate"]));
            }
           
            entity.presentsituation = Request["presentsituation"];
            entity.guidecontent = Request["guidecontent"];
            entity.cardscore = Request["cardscore"];
            if (string.IsNullOrEmpty(Request["revokemanagedate"]))
            {
                entity.revokemanagedate = null;
            }
            else
            {
                entity.revokemanagedate = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["revokemanagedate"]));
            }
            
            entity.revokereason = Request["revokereason"];
            entity.isdeath = Request["isdeath"];
            if (string.IsNullOrEmpty(Request["deathdate"]))
            {
                entity.deathdate = null;
            }
            else
            {
                entity.deathdate = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["deathdate"]));
            }
          
            entity.deathreason = Request["deathreason"];
            entity.deathsite = Request["deathsite"];
            entity.surviveyear = Request["surviveyear"];
            entity.survivemonth = Request["survivemonth"];

            string med_id =CommonFunc.SafeGetStringFromObj(bc_Followup_DoseService.LoadEntityAsNoTracking(t => t.bc_followup_id == id).Select(t => t.id).FirstOrDefault());
            if (string.IsNullOrEmpty(med_id))
            {
                medentity.id = Guid.NewGuid().ToString();
                medentity.bc_followup_id = entity.id;
                medentity.community_code = Request["ddlCommunity"];
                medentity.resident_id = entity.resident_id;
                medentity.worker_user_name = entity.followup_physician;
                medentity.create_time= CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
            }
            else
            {
                medentity.id = med_id;
                medentity.bc_followup_id = entity.id;
                medentity.community_code = Request["ddlCommunity"];
                medentity.resident_id = entity.resident_id;
                medentity.worker_user_name = entity.followup_physician;
                medentity.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
            }
            medentity.dose_dependence = Request["fyycx"];
            medentity.drug_name = Request["name1"];
            medentity.drug_frequence = Request["few1"];
            medentity.dosage_per_time = Request["few2"];

            medentity.drug_name1 = Request["name2"];
            medentity.drug_frequence1 = Request["few3"];
            medentity.dosage_per_time1 = Request["few4"];

            medentity.drug_name2 = Request["name3"];
            medentity.drug_frequence2 = Request["few5"];
            medentity.dosage_per_time2 = Request["few6"];

            medentity.drug_name3 = Request["other_medicals"];
            medentity.drug_frequence3 = Request["few7"];
            medentity.dosage_per_time3 = Request["few8"];

            medentity.has_side_effect = Request["blfy"];
            medentity.side_effect_description = Request["discript"];

            if (string.IsNullOrEmpty(med_id))
            {
                bc_Followup_DoseService.AddEntity(medentity);
            }
            else
            {
                bc_Followup_DoseService.UpdateEntity(medentity);
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
                    address.fill_community_code = community_code;
                    address.fill_person = worker;
                    address.permanent_address = CommonFunc.SafeGetStringFromObj(residentFileService.LoadEntityAsNoTracking(t => t.id_card_number == id_card_number).Select(t => t.permanent_home_address).FirstOrDefault());
                    address.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));

                    residentFileChangeAddressService.AddEntity(address);
                }
                //resident.id = dt.Select(t=>t.id).ToString(); 
                string[] propertyName = new string[] { "resident_name", "sex", "id_card_number", "community_code", "individual_phone", "permanent_home_address" };
                residentFileService.UpdatePartialPropertity(resident, propertyName);
            }

            //添加吸烟、饮酒、饮食习惯、体育锻炼信息
            Chronic_disease_SmokeAndDrink sd = new Chronic_disease_SmokeAndDrink();
            Chronic_disease_DailyLife eh = new Chronic_disease_DailyLife();
            Chronic_disease_PhysicalExercise pe = new Chronic_disease_PhysicalExercise();

            //------------------------------------------------吸烟与饮酒-----------------------------------------------
            //获取id
            string id2 = CommonFunc.SafeGetStringFromObj(disease_SmokeAndDrinkService.LoadEntityAsNoTracking(t => t.resident_id == entity.resident_id).Select(t => t.id).FirstOrDefault());
            if (string.IsNullOrEmpty(id2))
            {
                sd.id = Guid.NewGuid().ToString();
            }
            else
            {
                sd.id = id2;
            }
            sd.name = Request["name"];
            sd.sex = Request["sex"];
            sd.id_card_number = Request["id_card_number"];
            if (string.IsNullOrEmpty(Request["birth_date"]))
            {
                sd.birth_date = null;
            }
            else
            {
                sd.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["birth_date"]));

            }
            //常住地址
            sd.resident_id = entity.resident_id;
            sd.permanent_address = Request["perment_community_address"];
            sd.post_code = Request["zipCode"];
            sd.community_code = Request["ddlCommunity"];
            //-----吸烟----


            if (Request["day_smoke"] != "")
            {
                sd.smoking_daily_amount = Request["day_smoke"];
                sd.smoking = "吸烟";
            }
            //-----饮酒-----

            //-----饮酒频率-----
            if (Request["count1"] != "" || Request["count2"] != "" || Request["count3"] != "" || Request["count4"] != "" || Request["count5"] != "")
            {
                sd.drinking = "饮酒";
                sd.drinking_spirit_amount = Request["count1"];
                sd.drinking_beer_amount = Request["count2"];
                sd.drinking_red_amount = Request["count3"];
                sd.drinking_yellow_amount = Request["count4"];
                sd.drinking_other_wine2 = Request["other_wine"];
                sd.drinking_other_degree2 = Request["wine_degree"];
                sd.drinking_other_amount = Request["count5"];

                sd.drinking_spirit_equivalent = Request["count1_dl"];
                sd.drinking_beer_equivalent = Request["count2_dl"];
                sd.drinking_red_equivalent = Request["count3_dl"];
                sd.drinking_yellow_equivalent = Request["count4_dl"];
                sd.drinking_other_equivalent = Request["count5_dl"];
            }
            sd.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
            sd.worker_user_name = worker;
            sd.create_time = entity.followup_date;
            if (string.IsNullOrEmpty(id2))
            {
                disease_SmokeAndDrinkService.AddEntity(sd);
            }
            else
            {
                disease_SmokeAndDrinkService.UpdateEntity(sd);
            }
            //=================体育锻炼========================
            string id3 =CommonFunc.SafeGetStringFromObj(disease_PhysicalExerciseService.LoadEntityAsNoTracking(t => t.resident_id == entity.resident_id).Select(t => t.id).FirstOrDefault());
            if (string.IsNullOrEmpty(id3))
            {
                pe.id = Guid.NewGuid().ToString();
            }
            else
            {
                pe.id = id3;
            }
            pe.name = Request["name"];
            pe.sex = Request["sex"];
            pe.id_card_number = Request["id_card_number"];
            if (string.IsNullOrEmpty(Request["birth_date"]))
            {
                pe.birth_date = null;
            }
            else
            {
                pe.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["birth_date"]));

            }
            //常住地址
            pe.resident_id = entity.resident_id;
            pe.permanent_address = Request["perment_community_address"];
            pe.post_code = Request["zipCode"];
            pe.community_code = Request["ddlCommunity"];

            pe.physical_1 = Request["run"];
            pe.physical_1_time = Request["every_time1"];
            pe.physical_1_week = Request["week1"];

            pe.physical_2 = Request["cut_it"];
            pe.physical_2_week = Request["week2"];
            pe.physical_2_time = Request["every_time2"];
            pe.physical_2_speed = Request["speed2"];


            pe.physical_3 = Request["by_bike"];
            pe.physical_3_week = Request["week3"];
            pe.physical_3_time = Request["every_time3"];
            pe.physical_3_speed = Request["speed3"];


            pe.physical_4 = Request["swim"];
            pe.physical_4_week = Request["week4"];
            pe.physical_4_time = Request["every_time4"];

            pe.physical_5 = Request["circuit"];
            pe.physical_5_week = Request["week5"];
            pe.physical_5_time = Request["every_time5"];

            pe.physical_6 = Request["ping_pong"];
            pe.physical_6_week = Request["week6"];
            pe.physical_6_time = Request["every_time6"];


            pe.physical_7 = Request["badminton"];
            pe.physical_7_week = Request["week7"];
            pe.physical_7_time = Request["every_time7"];

            pe.physical_8 = Request["football"];
            pe.physical_8_week = Request["week8"];
            pe.physical_8_time = Request["every_time8"];

            pe.physical_9 = Request["basketball"];
            pe.physical_9_week = Request["week9"];
            pe.physical_9_time = Request["every_time9"];

            pe.physical_10 = Request["tennis"];
            pe.physical_10_week = Request["week10"];
            pe.physical_10_time = Request["every_time10"];

            pe.physical_11 = Request["baseball"];
            pe.physical_11_week = Request["week11"];
            pe.physical_11_time = Request["every_time11"];

            pe.physical_12 = Request["golf"];
            pe.physical_12_week = Request["week12"];
            pe.physical_12_time = Request["every_time12"];

            pe.physical_13 = Request["bowling"];
            pe.physical_13_week = Request["week13"];
            pe.physical_13_time = Request["every_time13"];

            pe.physical_14 = Request["shadowboxing"];
            pe.physical_14_week = Request["week14"];
            pe.physical_14_time = Request["every_time14"];

            pe.physical_15 = Request["taekwondo"];
            pe.physical_15_week = Request["week15"];
            pe.physical_15_time = Request["every_time15"];

            pe.physical_16 = Request["mountaineering"];
            pe.physical_16_week = Request["week16"];
            pe.physical_16_time = Request["every_time16"];

            pe.physical_17 = Request["skip"];
            pe.physical_17_week = Request["week17"];
            pe.physical_17_time = Request["every_time17"];

            pe.physical_other = Request["other0"];
            pe.physical_other_frequency = Request["frequency0"];


            pe.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
            pe.worker_user_name = worker;
            pe.create_time = entity.followup_date;
            if (string.IsNullOrEmpty(id3))
            {
                disease_PhysicalExerciseService.AddEntity(pe);
            }
            else
            {
                disease_PhysicalExerciseService.UpdateEntity(pe);
            }
            //-------------饮食习惯------------
            //获取id

            string id4 = CommonFunc.SafeGetStringFromObj(disease_DailyLifeService.LoadEntityAsNoTracking(t=>t.resident_id==entity.resident_id).Select(t=>t.id).FirstOrDefault());
            if (string.IsNullOrEmpty(id4))
            {
                eh.id = Guid.NewGuid().ToString();
            }
            else
            {
                eh.id = id4;
            }
            eh.name = Request["name"];
            eh.sex = Request["sex"];
            eh.id_card_number = Request["id_card_number"];
            if (string.IsNullOrEmpty(Request["birth_date"]))
            {
                eh.birth_date = null;
            }
            else
            {
                eh.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["birth_date"]));

            }
            //常住地址
            eh.resident_id = entity.resident_id;
            eh.permanent_address = Request["perment_community_address"];
            eh.post_code = Request["zipCode"];
            eh.community_code = Request["ddlCommunity"];

            eh.living_getup = Request["morning"];
            eh.living_noonbreak = Request["noon"];
            eh.living_sleep = Request["night"];
            eh.diet_three_meals = Request["law"];
            eh.diet_staple_food = Request["food"];
            eh.diet_eating = Request["taste"];
            eh.diet_eating_other = Request["taste_other"];
            eh.diet_oil_salt = Request["oil_salt"];
            eh.diet_oil_salt_other = Request["oil_salt_other"];
            eh.diet_salt_amount = Request["salt_eat"];
            eh.diet_oil_amount = Request["oil_eat"];
            eh.diet_sugar_amount = Request["sugar_eat"];
            eh.diet_drinkwater_morning = Request["water"];
            eh.diet_drink_amount = Request["amount"];
            eh.diet_drink_interval = Request["time"];
            eh.diet_drinks = Request["drink"];
            eh.diet_drinks_other = Request["other"];
            eh.diet_fruits = Request["melon_fruit"];
            eh.diet_vegetables = Request["vegetables"];
            eh.diet_grain = Request["grain"];
            eh.diet_grain_other = Request["other_grain"];
            eh.diet_aquatic_products = Request["aquatic"];
            eh.diet_aquatic_products_other = Request["other_aquatic"];
            eh.diet_livestock_poultry_eggs = Request["meat"];
            eh.diet_livestock_poultry_eggs_other = Request["other_meat"];
            eh.diet_health_products = Request["health_products"];
            eh.diet_health_products_other = Request["other_health_products"];
            eh.diet_hobby = Request["other_diet"];
            eh.diet_hobby_other = Request["other_diet_other"];

            eh.type = Enum.GetName(typeof(Model.Enum.EntityTypeEnum), 1);
            eh.worker_user_name = worker;
            eh.create_time = entity.followup_date;
            if (string.IsNullOrEmpty(id4))
            {
                disease_DailyLifeService.AddEntity(eh);
            }
            else
            {
                disease_DailyLifeService.UpdateEntity(eh);
            }
            string msg = "";
            if (string.IsNullOrEmpty(id))
            {
                if (bc_FollowupService.AddEntity(entity))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.Followup.ToString();

                    if (eHRAbstractService.AddEntity(ehr))
                    {
                        msg = "提交成功";
                    }
                    else
                    {
                        msg = "提交失败";
                    }
                }
                else
                {
                    msg = "提交失败";
                }
            }
            else
            {
                if (bc_FollowupService.UpdateEntity(entity))
                {
                    msg = "提交成功";
                }
                else
                {
                    msg = "提交失败";
                }
            }
             
            return Content(msg);
        }

        public ActionResult SFJLShow()
        {
            Comm_Platform_Worker workerModel = Session["worker"] as Comm_Platform_Worker;
            ViewBag.real_name = CommonFunc.SafeGetStringFromObj(workerModel.real_name);
            ViewBag.worker = CommonFunc.SafeGetStringFromObj(workerModel.user_name);
            ViewBag.community_code = CommonFunc.SafeGetStringFromObj(workerModel.region_code);
             
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

        public ActionResult SFJLUpdate()
        {
            Comm_Platform_Worker workerModel = Session["worker"] as Comm_Platform_Worker;
            ViewBag.real_name = CommonFunc.SafeGetStringFromObj(workerModel.real_name);
            ViewBag.worker = CommonFunc.SafeGetStringFromObj(workerModel.user_name);
            ViewBag.community_code = CommonFunc.SafeGetStringFromObj(workerModel.region_code);

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

        public ActionResult ShowFollowup()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            if (id != "")
            {
                var result = bc_FollowupService.LoadEntityAsNoTracking(t => t.id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult ShowFollowupDose()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            if (id != "")
            {
                var result = bc_Followup_DoseService.LoadEntityAsNoTracking(t => t.bc_followup_id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
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

            var list = bc_FollowupService.LoadPageEntities(pageSize, pageIndex, out totalCount, t => t.resident_id.Contains(resident_id), t => t.followup_date, false);

            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<MT_BC_Followup> result = new List<MT_BC_Followup>();
            result.AddRange(list);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<MT_BC_Followup>> query = new PagerQuery<PagerInfo, List<MT_BC_Followup>>(pager, result);
            ViewData.Model = query;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.resident_id = resident_id;
            ViewBag.resident_name = resident_name;
            return View();
        }
    }
}
