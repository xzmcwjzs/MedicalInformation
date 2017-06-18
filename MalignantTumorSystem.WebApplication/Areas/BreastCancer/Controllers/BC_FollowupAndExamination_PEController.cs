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
    public class BC_FollowupAndExamination_PEController : BaseTopController
    {
        //
        // GET: /BreastCancer/BC_FollowupAndExamination_PE/
        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IComm_EHR_AbstractService eHRAbstractService { get; set; }
        [Inject]
        public IComm_ResidentFile_Change_AddressService residentFileChangeAddressService { get; set; }
        [Inject]
        public IMT_Comm_Adults_Health_Examination_NewService comm_Adults_Health_Examination_NewService { get; set; }
        [Inject]
        public IComm_ResidentFile_Followup_DiseaseService comm_ResidentFile_Followup_DiseaseService { get; set; }
        [Inject]
        public IChronic_disease_SmokeAndDrinkService chronic_disease_SmokeAndDrinkService { get; set; }
        [Inject]
        public IChronic_disease_DailyLifeService chronic_disease_DailyLifeService { get; set; }
        [Inject]
        public IChronic_disease_PhysicalExerciseService chronic_disease_PhysicalExerciseService { get; set; }

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

        public ActionResult PE()
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

        //新增或修改
        public ActionResult AddAndUpdate()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request.QueryString["id"]);
            string community_code = CommonFunc.SafeGetStringFromObj(Request.QueryString["community_code"]);
            string worker = CommonFunc.SafeGetStringFromObj(Request.QueryString["worker"]);
            string real_name = CommonFunc.SafeGetStringFromObj(Request.QueryString["real_name"]);
            MT_Comm_Adults_Health_Examination_New entity = new MT_Comm_Adults_Health_Examination_New();

            if (string.IsNullOrEmpty(id))
            {
                entity.id = Guid.NewGuid().ToString();
                entity.create_time = entity.create_time = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(DateTime.Now.ToString("yyyy-MM-dd")));
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
            entity.worker_user_name = worker;
            entity.worker_user_realname = real_name;

            entity.tijianriqi = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["time"]));
            entity.company = Request["company"];

            

            entity.ybzk_tiwen = Request["t"];
            entity.ybzk_mailv = Request["p"];
            entity.ybzk_huxipinglv = Request["r"];
            entity.ybzk_xueya_h = Request["ssy"];
            entity.ybzk_xueya_l = Request["szy"];
            entity.ybzk_shenggao = Request["height"];
            entity.ybzk_tizhong = Request["weight"];
            entity.ybzk_tizhizhishu = Request["bmi"];
            entity.ybzk_yaowei = Request["w"];
            entity.ybzk_tunwei = Request["h"];
            entity.ybzk_yaotunweibi = Request["w_h"];

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

            //1.药物过敏史
            if (!string.IsNullOrEmpty(Request["chGuoMin"]) || !string.IsNullOrEmpty(Request["GuoMin_Other"]))
            {
                resident.drug_allergy_type = Request["chGuoMin"];
                resident.drug_allergy_other = Request["GuoMin_Other"];
            }
            else
            {
                resident.drug_allergy_type = "无";
            }

            resident.work_unit = Request["txtWorkUnit"];
            resident.work_type = Request["ddlcraft"];
            resident.worker_time_everyweek = Request["work_time"];
            //10.残疾情况
            if (!string.IsNullOrEmpty(Request["chdisability"]) || !string.IsNullOrEmpty(Request["disability_other"]))
            {
                resident.disability_type = Request["chdisability"];
                resident.disability_other = Request["disability_other"]; 
            }

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

            //======================病史信息=====================
            Comm_ResidentFile_Followup_Disease entity1 = new Comm_ResidentFile_Followup_Disease();
            //获取id
            string id1 = CommonFunc.SafeGetStringFromObj(comm_ResidentFile_Followup_DiseaseService.LoadEntityAsNoTracking(t => t.resident_id == entity.resident_id).Select(t => t.id).FirstOrDefault());
            if (!string.IsNullOrEmpty(Request["chdisease"]) || !string.IsNullOrEmpty(Request["Disease_Other"]))
            {
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
                    comm_ResidentFile_Followup_DiseaseService.AddEntity(entity1);
                }
                else
                {
                    comm_ResidentFile_Followup_DiseaseService.UpdateEntity(entity1);
                }
            }

            //------------------------------------------------吸烟与饮酒-----------------------------------------------
            Chronic_disease_SmokeAndDrink entity2 = new Chronic_disease_SmokeAndDrink();
            //获取id
            string id2 = CommonFunc.SafeGetStringFromObj(chronic_disease_SmokeAndDrinkService.LoadEntityAsNoTracking(t => t.resident_id == entity.resident_id).Select(t => t.id).FirstOrDefault());
            if (string.IsNullOrEmpty(id2))
            {
                entity2.id = Guid.NewGuid().ToString(); 
            }
            else
            {
                entity2.id = id2;
            }
            entity2.name = Request["name"];
            entity2.sex = Request["sex"];
            entity2.id_card_number = Request["id_card_number"];
            if (string.IsNullOrEmpty(Request["birth_date"]))
            {
                entity2.birth_date = null;
            }
            else
            {
                entity2.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(Request["birth_date"]));

            }
            //常住地址
            entity2.resident_id = entity.resident_id;
            entity2.permanent_address = Request["perment_community_address"];
            entity2.post_code = Request["zipCode"];
            entity2.community_code = Request["ddlCommunity"];
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
                chronic_disease_SmokeAndDrinkService.AddEntity(entity2);
            }
            else
            {
                chronic_disease_SmokeAndDrinkService.UpdateEntity(entity2);
            }

            Chronic_disease_DailyLife eh = new Chronic_disease_DailyLife();
            Chronic_disease_PhysicalExercise pe = new Chronic_disease_PhysicalExercise();
            
            //=================体育锻炼========================
            string id3 = CommonFunc.SafeGetStringFromObj(chronic_disease_PhysicalExerciseService.LoadEntityAsNoTracking(t => t.resident_id == entity.resident_id).Select(t => t.id).FirstOrDefault());
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
            pe.create_time = entity.create_time;
            if (string.IsNullOrEmpty(id3))
            {
               chronic_disease_PhysicalExerciseService.AddEntity(pe);
            }
            else
            {
                chronic_disease_PhysicalExerciseService.UpdateEntity(pe);
            }
            //-------------饮食习惯------------
            //获取id

            string id4 = CommonFunc.SafeGetStringFromObj(chronic_disease_DailyLifeService.LoadEntityAsNoTracking(t => t.resident_id == entity.resident_id).Select(t => t.id).FirstOrDefault());
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
            eh.create_time = entity.create_time;
            if (string.IsNullOrEmpty(id4))
            {
                chronic_disease_DailyLifeService.AddEntity(eh);
            }
            else
            {
                chronic_disease_DailyLifeService.UpdateEntity(eh);
            }

            string msg = "";
            if (string.IsNullOrEmpty(id))
            {
                if (comm_Adults_Health_Examination_NewService.AddEntity(entity))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = entity.community_code;
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.AdultsHealthExamination.ToString();

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
                if (comm_Adults_Health_Examination_NewService.UpdateEntity(entity))
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
            var list = comm_Adults_Health_Examination_NewService.LoadSearchEntities(commonParam);
            totalCount = commonParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<MT_Comm_Adults_Health_Examination_New> result = new List<MT_Comm_Adults_Health_Examination_New>();
            result.AddRange(list);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<MT_Comm_Adults_Health_Examination_New>> query = new PagerQuery<PagerInfo, List<MT_Comm_Adults_Health_Examination_New>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View();
        }

        //查看
        public ActionResult PEShow()
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

        public ActionResult ShowPE()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            if (id != "")
            {
                var result = comm_Adults_Health_Examination_NewService.LoadEntityAsNoTracking(t => t.id.Contains(id));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        //修改
        public ActionResult PEUpdate()
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

        //全部体检
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

            var list = comm_Adults_Health_Examination_NewService.LoadPageEntities(pageSize, pageIndex, out totalCount, t => t.resident_id.Contains(resident_id), t => t.create_time, false);

            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<MT_Comm_Adults_Health_Examination_New> result = new List<MT_Comm_Adults_Health_Examination_New>();
            result.AddRange(list);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<MT_Comm_Adults_Health_Examination_New>> query = new PagerQuery<PagerInfo, List<MT_Comm_Adults_Health_Examination_New>>(pager, result);
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
