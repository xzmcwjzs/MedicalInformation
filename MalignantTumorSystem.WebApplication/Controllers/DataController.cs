using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Ninject;
using MalignantTumorSystem.Common;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.Model.Entities;
using MalignantTumorSystem.WebApplication.Common.ComunityCode;
using System.Linq.Expressions;
using MalignantTumorSystem.WebApplication.Helpers;
using MalignantTumorSystem.Model.SearchParam;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    //公共的获取数据的控制器
    public class DataController : BaseTopController
    {
        //
        // GET: /Data/
        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IShare_ProvinceService provinceService { get; set; }
        [Inject]
        public IShare_CityService cityService { get; set; }
        [Inject]
        public IShare_CountyService countyService { get; set; }
        [Inject]
        public IShare_StreetService streetService { get; set; }
        [Inject]
        public IShare_CommunityInfoService communityInfoService { get; set; }
        [Inject]
        public IShare_DataDictionaryService dataDictionaryService { get; set; }
        [Inject]
        public IComm_Platform_WorkerService platformWorkerService { get; set; }
        [Inject]
        public IICD_10_oldService iCD10oldService { get; set; }
        [Inject]
        public IChronic_disease_Comm_MedicineService diseaseCommMedicineService { get; set; }
        [Inject]
        public IChronic_disease_Data_DiseaseNameService diseaseDataDiseaseNameService { get; set; }
        [Inject]
        public IChronic_disease_Data_NamesService disease_Data_NamesService { get; set; }
        [Inject]
        public IChronic_disease_Data_UnitsService disease_Data_UnitsService { get; set; }
        [Inject]
        public IChronic_disease_Data_SectionsService disease_Data_SectionsService { get; set; }
        [Inject]
        public IChronic_disease_PicturesService disease_PicturesService { get; set; }
        [Inject]
        public IChronic_disease_Data_ResultsService disease_Data_ResultsService { get; set; }

        //个人信息中  姓名的自动搜索匹配
        public ActionResult NameMatch()
        {
            string Key=Request.Params["q"]; 

            if (Key != null && Key != "")
            {
                var entityList = residentFileService.LoadEntityAsNoTracking(t => t.resident_name == Key).OrderByDescending(t => t.birth_date).ToList();
                var result = entityList.Select(
                         t=>new {
                           t.id,t.family_id,t.resident_id,t.password,t.resident_committee_code,t.resident_detail_address,t.resident_name,t.father_name,t.mother_name,t.father_id,t.mother_id,t.resident_host_relation,t.individual_phone,t.work_unit,t.id_card_number,t.birth_date,t.sex,t.age,t.nation,t.height,t.weight,t.weight_exponent,t.marital_status,t.education_qualification,t.occupation_situation,t.irritability_history,t.blood_group,t.cost_method_payment,t.residence_character,t.agency_baoka_number,
                           t.moving_out_y_n,t.moving_out_date,t.death_y_n,t.death_date,t.resident_host_id,t.resident_host_name,t.family_phone,t.email,t.nationality_code,t.nationality_name,t.post_code,t.start_work_date,t.resident_address_type,t.rh_blood_group,t.abo_blood_group,t.disability_status,t.id_card_active_date,t.id_card_unactive_date,t.id_card_organization,t.create_time,t.community_code,t.worker_user_name,t.chronic_manage_no,t.permanent_home_address,t.residence_address,t.workplace_address,t.birth_address,t.other_address,t.other_address_type,t.community_subordinate_address_id,t.personal_fixed_line_telephone,t.contact_name,t.contact_phone,t.contact_my_relationship,t.drug_allergy_type,t.drug_allergy_other,t.disability_type,t.disability_other,t.disability_certificate_number,t.file_number,t.file_cover_number,t.permanent_address_type,t.smoking,t.drinking,t.disease,t.surgery,t.trauma,t.blood_transfusion,t.family_disease,t.genetic_disease,t.hypertension_flag,t.diabetes_flag,t.chd_flag,t.tumour_flag,t.schiz_flag,t.adult_exam_count,t.father_id_card_numb,t.mother_id_card_numb,t.permanent_home_commitcode,t.residence_commitcode,t.doctor,t.father_phone,t.mother_phone,t.work_type,t.fill_identity_type,t.birth_commitcode,t.worker_time_everyweek,t.father_email,t.mother_email,t.chronic_disease_type,t.birth_community_code,t.present_community_code,t.fill_community_code,
                           community_code1 =ConvertCommunityCode(t.community_code.ToString()),
                          // permanent_home_commitcode1=ConvertPermanentHomeCommitCode(t.permanent_home_commitcode.ToString()),
                           age1=ConvertAge(t.birth_date.ToString())
                         }
                    ); 
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
            
        }

        //挡name文本框失去焦点时 查找
        public ActionResult NameMatch2()
        {
            string Key = Request["key"];

            if (Key != null && Key != "")
            {
                var entityList = residentFileService.LoadEntityAsNoTracking(t => t.resident_name == Key).OrderByDescending(t => t.birth_date).ToList();
                var result = entityList.Select(
                         t => new {
                             t.id,
                             t.family_id,
                             t.resident_id,
                             t.password,
                             t.resident_committee_code,
                             t.resident_detail_address,
                             t.resident_name,
                             t.father_name,
                             t.mother_name,
                             t.father_id,
                             t.mother_id,
                             t.resident_host_relation,
                             t.individual_phone,
                             t.work_unit,
                             t.id_card_number,
                             t.birth_date,
                             t.sex,
                             t.age,
                             t.nation,
                             t.height,
                             t.weight,
                             t.weight_exponent,
                             t.marital_status,
                             t.education_qualification,
                             t.occupation_situation,
                             t.irritability_history,
                             t.blood_group,
                             t.cost_method_payment,
                             t.residence_character,
                             t.agency_baoka_number,
                             t.moving_out_y_n,
                             t.moving_out_date,
                             t.death_y_n,
                             t.death_date,
                             t.resident_host_id,
                             t.resident_host_name,
                             t.family_phone,
                             t.email,
                             t.nationality_code,
                             t.nationality_name,
                             t.post_code,
                             t.start_work_date,
                             t.resident_address_type,
                             t.rh_blood_group,
                             t.abo_blood_group,
                             t.disability_status,
                             t.id_card_active_date,
                             t.id_card_unactive_date,
                             t.id_card_organization,
                             t.create_time,
                             t.community_code,
                             t.worker_user_name,
                             t.chronic_manage_no,
                             t.permanent_home_address,
                             t.residence_address,
                             t.workplace_address,
                             t.birth_address,
                             t.other_address,
                             t.other_address_type,
                             t.community_subordinate_address_id,
                             t.personal_fixed_line_telephone,
                             t.contact_name,
                             t.contact_phone,
                             t.contact_my_relationship,
                             t.drug_allergy_type,
                             t.drug_allergy_other,
                             t.disability_type,
                             t.disability_other,
                             t.disability_certificate_number,
                             t.file_number,
                             t.file_cover_number,
                             t.permanent_address_type,
                             t.smoking,
                             t.drinking,
                             t.disease,
                             t.surgery,
                             t.trauma,
                             t.blood_transfusion,
                             t.family_disease,
                             t.genetic_disease,
                             t.hypertension_flag,
                             t.diabetes_flag,
                             t.chd_flag,
                             t.tumour_flag,
                             t.schiz_flag,
                             t.adult_exam_count,
                             t.father_id_card_numb,
                             t.mother_id_card_numb,
                             t.permanent_home_commitcode,
                             t.residence_commitcode,
                             t.doctor,
                             t.father_phone,
                             t.mother_phone,
                             t.work_type,
                             t.fill_identity_type,
                             t.birth_commitcode,
                             t.worker_time_everyweek,
                             t.father_email,
                             t.mother_email,
                             t.chronic_disease_type,
                             t.birth_community_code,
                             t.present_community_code,
                             t.fill_community_code,
                             community_code1 = ConvertCommunityCode(t.community_code.ToString()),
                             // permanent_home_commitcode1=ConvertPermanentHomeCommitCode(t.permanent_home_commitcode.ToString()),
                             age1 = ConvertAge(t.birth_date.ToString())
                         }
                    );
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }

        }

        //常住地址的code转地址名称
        public string ConvertPermanentHomeCommitCode(string code)
        {
            string temp=code;
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
        //社区地址的code转社区名称
        public string ConvertCommunityCode(string code)
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
        //出生日期转年龄
        public string ConvertAge(string birthDate)
        {
            string temp="";
            if (string.IsNullOrEmpty(birthDate))
            {
                return temp;
            }
            else
            {
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
            
        }

        //根据parentcode加载city
        public ActionResult City()
        {
            string code = Request["code"];
            if (code != "")
            {
                var result = cityService.LoadEntityAsNoTracking(t => t.parent_code == code);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("",JsonRequestBehavior.AllowGet);
            }
            

        }

        //根据parentcode加载county
        public ActionResult County()
        {
            string code = Request["code"];
            if (code != "")
            {
                var result = countyService.LoadEntityAsNoTracking(t => t.parent_code == code);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }


        }

        //通过省名获取代码
        public ActionResult ProvinceCode()
        {
            string name = Request["Name"];
            if (name != "")
            {
                string code =CommonFunc.SafeGetStringFromObj(provinceService.LoadEntityAsNoTracking(t => t.name == name).Select(t => t.code).FirstOrDefault());
                return Content(code);
            }
            else
            {
                return Content("");
            }
        }

        //通过市名获取代码
        public ActionResult CityCode()
        {
            string name = Request["Name"];
            if (name != "")
            {
                string code = CommonFunc.SafeGetStringFromObj(cityService.LoadEntityAsNoTracking(t => t.name == name).Select(t => t.code).FirstOrDefault());
                return Content(code);
            }
            else
            {
                return Content("");
            }
        }

        //通过县名获取代码
        public ActionResult CountyCode()
        {
            string name = Request["Name"];
            if (name != "")
            {
                string code = CommonFunc.SafeGetStringFromObj(countyService.GetCodeByName(name));
                return Content(code);
            }
            else
            {
                return Content("");
            }
        }

        public ActionResult CountyName()
        {
            string code = Request["code"];
            if (code != "")
            {
                string result =CommonFunc.SafeGetStringFromObj(countyService.LoadEntityAsNoTracking(t => t.code == code).Select(t=>t.name).FirstOrDefault());
                return Content(result);
            }
            else
            {
                return Content("");
            }
        }

        //根据parentcode加载street
        public ActionResult Street()
        {
            string code = Request["code"];
            if (code != "")
            {
                var result = streetService.LoadEntityAsNoTracking(t => t.parent_code == code);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }


        }

        //根据parentcode加载Community
        public ActionResult Community()
        {
            string code = Request["code"];
            if (code != "")
            {
                var result = communityInfoService.LoadEntityAsNoTracking(t => t.street_code == code);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }


        }

        //操作表Share_DataDictionary
        public ActionResult Share_Data()
        {
            string type = CommonFunc.SafeGetStringFromObj(Request["type"]);
            string type1 = CommonFunc.SafeGetStringFromObj(Request["type1"]);
            if (type != "" && type1 != "")
            {
                var result = dataDictionaryService.LoadEntityAsNoTracking(t => (t.type == type) && (t.code != "05") || t.type == type1).OrderBy(t => t.code);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else if (type != "" && type1 == "")
            {
                var result = dataDictionaryService.LoadEntityAsNoTracking(t => t.type == type).OrderBy(t => t.code);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
            
        }

        //通过身份证号获取信息
        public ActionResult GetDataByIdCardNumber()
        {
            string id_card = Request["id_card_number"];
            if (id_card != "")
            {
                var result = residentFileService.LoadEntityAsNoTracking(t => t.id_card_number == id_card);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        //用户名转真实姓名
        public ActionResult UserNameConventToRealName()
        {
            string username = Request.QueryString["username"];
            if (username != "")
            {
                string result =CommonFunc.SafeGetStringFromObj(platformWorkerService.LoadEntityAsNoTracking(t => t.user_name == username).Select(t => t.real_name).FirstOrDefault());
                return Content(result);
            }
            else
            {
                return Content("");
            }
        }

        //自动搜索 ICD10表
        public ActionResult ICD10()
        {
            string key=Request["q"];
            if (key != null && key != "")
            {
                var result = iCD10oldService.LoadEntityAsNoTracking(t=>t.name.Contains(key));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("",JsonRequestBehavior.AllowGet);
            }
        }
        //药品信息
        public ActionResult Medical_Query()
        {
            string key = Request["q"];
            if (key != null && key != "")
            {
                var result = diseaseCommMedicineService.LoadEntityAsNoTracking(t => t.medicine_name.Contains(key)).OrderBy(t=>t.medicine_name);
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        //模板
        public ActionResult Template()
        {
            Comm_Platform_Worker workerModel = Session["worker"] as Comm_Platform_Worker;
            if (workerModel == null)
            {
                redirectTo();
                return null;
            }
            string types =CommonFunc.SafeGetStringFromObj(Request.QueryString["type"]);
            if (types.Equals("zs"))
            {
                types = "主诉";
                ViewBag.types= "主诉";
            }
            else if (types.Equals("xbs"))
            {
                types = "现病史";
                ViewBag.types = "现病史";
            }
            else if (types.Equals("jws"))
            {
                types = "既往史";
                ViewBag.types = "既往史";
            }
            else
            {
                types = "";
                ViewBag.types = "";
            }
            
            int pageIndex = CommonFunc.SafeGetIntFromObj(this.Request["pageIndex"], 1);
            int pageSize = this.Request["pageSize"] == null ? PageSize.GetPageSize : int.Parse(Request["pageSize"]);
            int totalCount = 0;  
            var diseaseDataDiseaseNameList = diseaseDataDiseaseNameService.LoadPageEntities(pageSize, pageIndex,out totalCount,t => t.classfy.Contains(types), t => t.disease_name,true);

            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<Chronic_disease_Data_DiseaseName> result = new List<Chronic_disease_Data_DiseaseName>();
            result.AddRange(diseaseDataDiseaseNameList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<Chronic_disease_Data_DiseaseName>> query = new PagerQuery<PagerInfo, List<Chronic_disease_Data_DiseaseName>>(pager, result);
            ViewData.Model = query;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View();
        }
        //门诊病史中根据id_card_number获取记录
        public ActionResult BasicInformation()
        {
            string id_card_number = CommonFunc.SafeGetStringFromObj(Request.QueryString["id_card_number"]);
            if (!string.IsNullOrEmpty(id_card_number))
            {
                var result = residentFileService.LoadEntityAsNoTracking(t=>t.id_card_number.Contains(id_card_number));
                return Json(result,JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("",JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult Share_DataGetName()
        {
            string type =CommonFunc.SafeGetStringFromObj (Request["type"]);
            string code =CommonFunc.SafeGetStringFromObj (Request["code"]);
            string name = "";
            if (!string.IsNullOrEmpty(code))
            {
                name =CommonFunc.SafeGetStringFromObj(dataDictionaryService.LoadEntityAsNoTracking(t=>t.code==code && t.type==type).Select(t=>t.name).FirstOrDefault());
                return Content(name);
            }
            else
            {
                return Content(name);
            }
        }

        //根据社区代码  获取名称
        public ActionResult ProvinceName()
        {
            string code = CommonFunc.SafeGetStringFromObj(Request.QueryString["code"]);
            string name = "";
            if (code != "")
            {
                name = CommonFunc.SafeGetStringFromObj(provinceService.LoadEntityAsNoTracking(t=>t.code==code).Select(t=>t.name).FirstOrDefault());
                return Content(name);
            }
            else
            {
                return Content("");
            }
        }
        public ActionResult CityName()
        {
            string code = CommonFunc.SafeGetStringFromObj(Request.QueryString["code"]);
            string name = "";
            if (code != "")
            {
                name = CommonFunc.SafeGetStringFromObj(cityService.LoadEntityAsNoTracking(t => t.parent_code == code).Select(t => t.name).FirstOrDefault());
                return Content(name);
            }
            else
            {
                return Content("");
            }
        }

        
        public ActionResult StreetName()
        {
            string code = CommonFunc.SafeGetStringFromObj(Request.QueryString["code"]);
            string name = "";
            if (code != "")
            {
                name = CommonFunc.SafeGetStringFromObj(streetService.LoadEntityAsNoTracking(t => t.code == code).Select(t => t.name).FirstOrDefault());
                return Content(name);
            }
            else
            {
                return Content("");
            }
        }
        public ActionResult CommunityName()
        {
            string code = CommonFunc.SafeGetStringFromObj(Request.QueryString["code"]);
            string name = "";
            if (code != "")
            {
                name = CommonFunc.SafeGetStringFromObj(communityInfoService.LoadEntityAsNoTracking(t => t.code == code).Select(t => t.name).FirstOrDefault());
                return Content(name);
            }
            else
            {
                return Content("");
            }
        }
        //自动搜索（Chronic_disease_Data_Names） 血液检测、
        public ActionResult DataNames1()
        {
            string a =CommonFunc.SafeGetStringFromObj(Request["type"]);
            string key = CommonFunc.SafeGetStringFromObj(Request.Params["q"]);

            if (a != "" && key != "")
            {
                var result = disease_Data_NamesService.LoadEntityAsNoTracking(t=>t.name.Contains(key) && t.type.Contains(a));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
        //单位
        public ActionResult DataUnit()
        {
            string a = CommonFunc.SafeGetStringFromObj(Request["type"]);
            string name = CommonFunc.SafeGetStringFromObj(Request["Name"]);
            string code = "";
            string unit = "";
            if (a != "")
            {
                code = CommonFunc.SafeGetStringFromObj(disease_Data_NamesService.LoadEntityAsNoTracking(t=>t.name==name && t.type==a).Select(t=>t.code).FirstOrDefault());
                if (!string.IsNullOrEmpty(code))
                {
                    unit = CommonFunc.SafeGetStringFromObj(disease_Data_UnitsService.LoadEntityAsNoTracking(t=>t.code==code &&t.type==a).Select(t=>t.unit).FirstOrDefault());
                }
            }
            return Content(unit);

        }
        //参考区间
        public ActionResult DataSection1()
        {
            string a = CommonFunc.SafeGetStringFromObj(Request["type"]);
            string name = CommonFunc.SafeGetStringFromObj(Request["Name"]);
            string code = "";
            string section = "";
            if (a != "")
            {
                code = CommonFunc.SafeGetStringFromObj(disease_Data_NamesService.LoadEntityAsNoTracking(t => t.name == name && t.type == a).Select(t => t.code).FirstOrDefault());
                if (!string.IsNullOrEmpty(code))
                {
                    section = CommonFunc.SafeGetStringFromObj(disease_Data_SectionsService.LoadEntityAsNoTracking(t => t.code == code && t.type == a).Select(t => t.section).FirstOrDefault());
                }
            }
            return Content(section);
        }

        //影像检测图片
        public ActionResult ShowPhoto()
        {
            string id_card_number =CommonFunc.SafeGetStringFromObj(Request["id_card_number"]);
            string type =CommonFunc.SafeGetStringFromObj( Request["type"]);
            Chronic_disease_Pictures entity = new Chronic_disease_Pictures();
            if (id_card_number != "" && type != "")
            {
                var result = disease_PicturesService.LoadEntityAsNoTracking(t=>t.id_card_number.Contains(id_card_number)&&t.type.Contains(type)).OrderByDescending(t=>t.create_time);
                return Json(result,JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }

        }

        //尿液检测
        public ActionResult DataNames()
        {
            string a = CommonFunc.SafeGetStringFromObj(Request["type"]);
            
            if (a != "")
            {
                var result = disease_Data_NamesService.LoadEntityAsNoTracking(t =>t.type.Contains(a));
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }

        public ActionResult DataResults()
        {
            string a = CommonFunc.SafeGetStringFromObj(Request["type"]);
            string name = CommonFunc.SafeGetStringFromObj(Request["Name"]);
            string code = "";
            
            if (a != "")
            {
                code = CommonFunc.SafeGetStringFromObj(disease_Data_NamesService.LoadEntityAsNoTracking(t => t.name == name && t.type == a).Select(t => t.code).FirstOrDefault());
                if (!string.IsNullOrEmpty(code))
                {
                   var res =disease_Data_ResultsService.LoadEntityAsNoTracking(t => t.code.Contains(code) && t.type.Contains(a)); 
                    return Json(res,JsonRequestBehavior.AllowGet);
                }
                else
                {
                    return Json("", JsonRequestBehavior.AllowGet);
                }
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
             
        }



    }
}
