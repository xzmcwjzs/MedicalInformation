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
    public class BC_FollowupAndExamination_ConstitutionController : BaseTopController
    {
        //
        // GET: /BreastCancer/BC_FollowupAndExamination_Constitution/

        [Inject]
        public IComm_ResidentFileService residentFileService { get; set; }
        [Inject]
        public IComm_EHR_AbstractService eHRAbstractService { get; set; }
        [Inject]
        public IComm_ResidentFile_Change_AddressService residentFileChangeAddressService { get; set; }
        [Inject]
        public IChronic_disease_ConstitutionService disease_ConstitutionService { get; set; }
        
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
        public ActionResult Constitution()
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
            var disease_Comm_Testing_BloodList = disease_ConstitutionService.LoadSearchEntities(commonParam);
            totalCount = commonParam.TotalCount;
            int PageCount = Convert.ToInt32(Math.Ceiling((double)totalCount / pageSize));

            List<Model.ViewModel.BasicAndConstitutionViewModel> result = new List<Model.ViewModel.BasicAndConstitutionViewModel>();
            result.AddRange(disease_Comm_Testing_BloodList);
            PagerInfo pager = new PagerInfo();
            pager.PageIndex = pageIndex;
            pager.PageSize = pageSize;
            pager.TotalCount = totalCount;
            PagerQuery<PagerInfo, List<Model.ViewModel.BasicAndConstitutionViewModel>> query = new PagerQuery<PagerInfo, List<Model.ViewModel.BasicAndConstitutionViewModel>>(pager, result);
            ViewData.Model = query;
            ViewBag.dell_user_name = dell_user_name;
            ViewBag.PageIndex = pageIndex;
            ViewBag.PageSize = pageSize;
            return View();
        }

        //新增 更新
        public ActionResult AddAndUpdate()
        {
            string id = CommonFunc.SafeGetStringFromObj(Request["id"]);
            string fill_community_code = CommonFunc.SafeGetStringFromObj(Request["community_code"]);
            string worker = CommonFunc.SafeGetStringFromObj(Request["worker"]);
            Chronic_disease_Constitution entity = new Chronic_disease_Constitution();
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
            entity.worker_user_name = worker;
            //阳虚质
            entity.yangxz_1 = Request["test1"];
            entity.yangxz_2 = Request["test2"];
            entity.yangxz_3 = Request["test3"];
            entity.yangxz_4 = Request["test4"];
            entity.yangxz_5 = Request["test5"];
            entity.yangxz_6 = Request["test6"];
            entity.yangxz_7 = Request["test7"];
            //阴虚质
            entity.yinxz_1 = Request["test8"];
            entity.yinxz_2 = Request["test9"];
            entity.yinxz_3 = Request["test10"];
            entity.yinxz_4 = Request["test11"];
            entity.yinxz_5 = Request["test12"];
            entity.yinxz_6 = Request["test13"];
            entity.yinxz_7 = Request["test14"];
            entity.yinxz_8 = Request["test15"];
            //气虚质
            entity.qixz_1 = Request["test16"];
            entity.qixz_2 = Request["test17"];
            entity.qixz_3 = Request["test18"];
            entity.qixz_4 = Request["test19"];
            entity.qixz_5 = Request["test20"];
            entity.qixz_6 = Request["test21"];
            entity.qixz_7 = Request["test22"];
            entity.qixz_8 = Request["test23"];
            //痰湿质
            entity.tansz_1 = Request["test24"];
            entity.tansz_2 = Request["test25"];
            entity.tansz_3 = Request["test26"];
            entity.tansz_4 = Request["test27"];
            entity.tansz_5 = Request["test28"];
            entity.tansz_6 = Request["test29"];
            entity.tansz_7 = Request["test30"];
            entity.tansz_8 = Request["test31"];
            //湿热质
            entity.shirz_1 = Request["test32"];
            entity.shirz_2 = Request["test33"];
            entity.shirz_3 = Request["test34"];
            entity.shirz_4 = Request["test35"];
            entity.shirz_5 = Request["test36"];
            entity.shirz_6 = Request["test37"];
            entity.shirz_7 = Request["test38"];
            //血瘀质
            entity.xueyz_1 = Request["test39"];
            entity.xueyz_2 = Request["test40"];
            entity.xueyz_3 = Request["test41"];
            entity.xueyz_4 = Request["test42"];
            entity.xueyz_5 = Request["test43"];
            entity.xueyz_6 = Request["test44"];
            entity.xueyz_7 = Request["test45"];
            //特禀质
            entity.tebz_1 = Request["test46"];
            entity.tebz_2 = Request["test47"];
            entity.tebz_3 = Request["test48"];
            entity.tebz_4 = Request["test49"];
            entity.tebz_5 = Request["test50"];
            entity.tebz_6 = Request["test51"];
            entity.tebz_7 = Request["test52"];
            //气郁质
            entity.qiyz_1 = Request["test53"];
            entity.qiyz_2 = Request["test54"];
            entity.qiyz_3 = Request["test55"];
            entity.qiyz_4 = Request["test56"];
            entity.qiyz_5 = Request["test57"];
            entity.qiyz_6 = Request["test58"];
            entity.qiyz_7 = Request["test59"];
            //平和质
            entity.pinghz_1 = Request["test60"];
            entity.pinghz_2 = Request["test61"];
            entity.pinghz_3 = Request["test62"];
            entity.pinghz_4 = Request["test63"];
            entity.pinghz_5 = Request["test64"];
            entity.pinghz_6 = Request["test65"];
            entity.pinghz_7 = Request["test66"];
            entity.pinghz_8 = Request["test67"];

            entity.scores_yangxz = (Convert.ToInt16(entity.yangxz_1) + Convert.ToInt16(entity.yangxz_2) + Convert.ToInt16(entity.yangxz_3) + Convert.ToInt16(entity.yangxz_4) + Convert.ToInt16(entity.yangxz_5) + Convert.ToInt16(entity.yangxz_6) + Convert.ToInt16(entity.yangxz_7)).ToString();
            entity.scores_yinxz = (Convert.ToInt16(entity.yinxz_1) + Convert.ToInt16(entity.yinxz_2) + Convert.ToInt16(entity.yinxz_3) + Convert.ToInt16(entity.yinxz_4) + Convert.ToInt16(entity.yinxz_5) + Convert.ToInt16(entity.yinxz_6) + Convert.ToInt16(entity.yinxz_7) + Convert.ToInt16(entity.yinxz_8)).ToString();
            entity.scores_qixz = (Convert.ToInt16(entity.qixz_1) + Convert.ToInt16(entity.qixz_2) + Convert.ToInt16(entity.qixz_3) + Convert.ToInt16(entity.qixz_4) + Convert.ToInt16(entity.qixz_5) + Convert.ToInt16(entity.qixz_6) + Convert.ToInt16(entity.qixz_7) + Convert.ToInt16(entity.qixz_8)).ToString();
            entity.scores_tansz = (Convert.ToInt16(entity.tansz_1) + Convert.ToInt16(entity.tansz_2) + Convert.ToInt16(entity.tansz_3) + Convert.ToInt16(entity.tansz_4) + Convert.ToInt16(entity.tansz_5) + Convert.ToInt16(entity.tansz_6) + Convert.ToInt16(entity.tansz_7) + Convert.ToInt16(entity.tansz_8)).ToString();
            entity.scores_shirz = (Convert.ToInt16(entity.shirz_1) + Convert.ToInt16(entity.shirz_2) + Convert.ToInt16(entity.shirz_3) + Convert.ToInt16(entity.shirz_4) + Convert.ToInt16(entity.shirz_5) + Convert.ToInt16(entity.shirz_6) + Convert.ToInt16(entity.shirz_7)).ToString();
            entity.scores_xueyz = (Convert.ToInt16(entity.xueyz_1) + Convert.ToInt16(entity.xueyz_2) + Convert.ToInt16(entity.xueyz_3) + Convert.ToInt16(entity.xueyz_4) + Convert.ToInt16(entity.xueyz_5) + Convert.ToInt16(entity.xueyz_6) + Convert.ToInt16(entity.xueyz_7)).ToString();
            entity.scores_tebz = (Convert.ToInt16(entity.tebz_1) + Convert.ToInt16(entity.tebz_2) + Convert.ToInt16(entity.tebz_3) + Convert.ToInt16(entity.tebz_4) + Convert.ToInt16(entity.tebz_5) + Convert.ToInt16(entity.tebz_6) + Convert.ToInt16(entity.tebz_7)).ToString();
            entity.scores_qiyz = (Convert.ToInt16(entity.qiyz_1) + Convert.ToInt16(entity.qiyz_2) + Convert.ToInt16(entity.qiyz_3) + Convert.ToInt16(entity.qiyz_4) + Convert.ToInt16(entity.qiyz_5) + Convert.ToInt16(entity.qiyz_6) + Convert.ToInt16(entity.qiyz_7)).ToString();
            entity.scores_pinghz = (Convert.ToInt16(entity.pinghz_1) + Convert.ToInt16(entity.pinghz_2) + Convert.ToInt16(entity.pinghz_3) + Convert.ToInt16(entity.pinghz_4) + Convert.ToInt16(entity.pinghz_5) + Convert.ToInt16(entity.pinghz_6) + Convert.ToInt16(entity.pinghz_7) + Convert.ToInt16(entity.pinghz_8)).ToString();


            int a = (int)(((float)(Int32.Parse(entity.scores_yangxz) - 7)) / 28 * 100);
            int b = (int)(((float)(Int32.Parse(entity.scores_yinxz) - 8)) / 32 * 100);
            int c = (int)(((float)(Int32.Parse(entity.scores_qixz) - 8)) / 32 * 100);
            int d = (int)(((float)(Int32.Parse(entity.scores_tansz) - 8)) / 32 * 100);
            int e = 0;
            if (Request["test1"].Equals("01"))
            {
                e = (int)(((float)(Int32.Parse(entity.scores_shirz) - 6)) / 24 * 100);
            }
            else
            {
                e = (int)(((float)(Int32.Parse(entity.scores_shirz) - 7)) / 28 * 100);
            }
            int f = (int)(((float)(Int32.Parse(entity.scores_xueyz) - 7)) / 28 * 100);
            int g = (int)(((float)(Int32.Parse(entity.scores_tebz) - 7)) / 28 * 100);
            int h = (int)(((float)(Int32.Parse(entity.scores_qiyz) - 7)) / 28 * 100);
            int i = (int)(((float)(Int32.Parse(entity.scores_pinghz) - 8)) / 32 * 100);

            int[] array = new int[] { a, b, c, d, e, f, g, h };
            int temp = 0;
            int index = 0;

            for (int x = 0; x < array.Length; x++)
            {
                if (temp < array[x])    //如果用<= 则找到的是最大值(多个中的最后一个) <则是多个中的第一个
                {
                    temp = array[x];
                    index = x;
                }
            }

            if (i >= 60)
            {
                switch (index)
                {
                    case 0:
                        if (temp >= 40)
                        {
                            entity.result = "阳虚质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "基本是平和质，有阳虚质倾向";
                        }
                        else
                        {
                            entity.result = "平和质";
                        }
                        break;
                    case 1:
                        if (temp >= 40)
                        {
                            entity.result = "阴虚质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "基本是平和质，有阴虚质倾向";
                        }
                        else
                        {
                            entity.result = "平和质";
                        }
                        break;
                    case 2:
                        if (temp >= 40)
                        {
                            entity.result = "气虚质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "基本是平和质，有气虚质倾向";
                        }
                        else
                        {
                            entity.result = "平和质";
                        }
                        break;
                    case 3:
                        if (temp >= 40)
                        {
                            entity.result = "痰湿质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "基本是平和质，有痰湿质倾向";
                        }
                        else
                        {
                            entity.result = "平和质";
                        }
                        break;
                    case 4:
                        if (temp >= 40)
                        {
                            entity.result = "湿热质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "基本是平和质，有湿热质倾向";
                        }
                        else
                        {
                            entity.result = "平和质";
                        }
                        break;
                    case 5:
                        if (temp >= 40)
                        {
                            entity.result = "血瘀质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "基本是平和质，有血瘀质倾向";
                        }
                        else
                        {
                            entity.result = "平和质";
                        }
                        break;
                    case 6:
                        if (temp >= 40)
                        {
                            entity.result = "特禀质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "基本是平和质，有特禀质倾向";
                        }
                        else
                        {
                            entity.result = "平和质";
                        }
                        break;
                    case 7:
                        if (temp >= 40)
                        {
                            entity.result = "气郁质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "基本是平和质，有气郁质倾向";
                        }
                        else
                        {
                            entity.result = "平和质";
                        }
                        break;
                    default:
                        break;
                }
            }
            else
            {
                switch (index)
                {
                    case 0:
                        if (temp >= 40)
                        {
                            entity.result = "阳虚质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "有阳虚质倾向";
                        }
                        else
                        {
                            entity.result = "";
                        }
                        break;
                    case 1:
                        if (temp >= 40)
                        {
                            entity.result = "阴虚质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "有阴虚质倾向";
                        }
                        else
                        {
                            entity.result = "";
                        }
                        break;
                    case 2:
                        if (temp >= 40)
                        {
                            entity.result = "气虚质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "有气虚质倾向";
                        }
                        else
                        {
                            entity.result = "";
                        }
                        break;
                    case 3:
                        if (temp >= 40)
                        {
                            entity.result = "痰湿质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "有痰湿质倾向";
                        }
                        else
                        {
                            entity.result = "";
                        }
                        break;
                    case 4:
                        if (temp >= 40)
                        {
                            entity.result = "湿热质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "有湿热质倾向";
                        }
                        else
                        {
                            entity.result = "";
                        }
                        break;
                    case 5:
                        if (temp >= 40)
                        {
                            entity.result = "血瘀质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "有血瘀质倾向";
                        }
                        else
                        {
                            entity.result = "";
                        }
                        break;
                    case 6:
                        if (temp >= 40)
                        {
                            entity.result = "特禀质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "有特禀质倾向";
                        }
                        else
                        {
                            entity.result = "";
                        }
                        break;
                    case 7:
                        if (temp >= 40)
                        {
                            entity.result = "气郁质";
                        }
                        else if (temp >= 30 && temp < 40)
                        {
                            entity.result = "有气郁质倾向";
                        }
                        else
                        {
                            entity.result = "";
                        }
                        break;
                    default:
                        break;
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
            string s = Request["id_card_number"];
            string s1 = "", s2 = "", s3 = "";
            if (s.Length == 15)
            {
                s1 = s.Substring(6, 2);
                s2 = s.Substring(8, 2);
                s3 = s.Substring(10, 2);
                resident.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj("19" + s1 + "-" + s2 + "-" + s3));
            }
            else if (s.Length == 18)
            {
                s1 = s.Substring(6, 4);
                s2 = s.Substring(10, 2);
                s3 = s.Substring(12, 2);
                resident.birth_date = CommonFunc.SafeGetDateTimeFromObj(CommonFunc.SafeGetStringFromObj(s1 + "-" + s2 + "-" + s3));
            }
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
                ehr1.community_code = Request["ddlCommunity"];
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
                if (disease_ConstitutionService.AddEntity(entity))
                {
                    Comm_EHR_Abstract ehr = new Comm_EHR_Abstract();
                    ehr.id = Guid.NewGuid().ToString();
                    ehr.resident_id = entity.resident_id;
                    ehr.community_code = Request["ddlCommunity"];
                    ehr.create_time = DateTime.Now;
                    ehr.item_id = entity.id;
                    ehr.item_type = Model.Enum.EHRAbstractTypeEnum.Constitution.ToString();

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
            return Content(msg + ',' + entity.id + "," + entity.result);
        }

        //查看全部测量结果
        public ActionResult Show()
        {
            string resident_id = CommonFunc.SafeGetStringFromObj(Request.QueryString["resident_id"]);
            string resident_name = CommonFunc.SafeGetStringFromObj(Request.QueryString["resident_name"]);
            string sex = CommonFunc.SafeGetStringFromObj(Request.QueryString["sex"]);
            ViewBag.resident_id = resident_id;
            ViewBag.resident_name = resident_name;
            ViewBag.sex = sex;
            return View();
        }
        [HttpPost]
        public ActionResult Show(string resident_id)
        {

            if (resident_id != "")
            {
                var result = disease_ConstitutionService.LoadEntityAsNoTracking(t => t.resident_id.Contains(resident_id)).OrderByDescending(t => t.create_time).FirstOrDefault();
                return Json(result, JsonRequestBehavior.AllowGet);
            }
            else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
    }
}
