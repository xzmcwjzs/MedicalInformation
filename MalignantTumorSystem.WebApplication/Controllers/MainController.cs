using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.Model;
using MalignantTumorSystem.Common;
using Ninject;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.WebApplication.Common.MyAttributes;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    //[MyLoginAttribute]
    public class MainController : BaseController
    {
        //
        // GET: /Main/
        [Inject]
        public IMT_RoleInfoService roleInfoService { get; set; }
        public ActionResult Index()
        {
            string tmp = "";
            int outNum;
            Model.Entities.Comm_Platform_Worker workerModel=(Model.Entities.Comm_Platform_Worker)Session["worker"];
            ViewBag.HospitalName = CommonFunc.SafeGetStringFromObj(workerModel.company);
            ViewBag.RealName = CommonFunc.SafeGetStringFromObj(workerModel.real_name);
            //通过导航属性关联获取角色信息
            var roleInfo = (from t in workerModel.MT_WorkerRoleInfo
                            select t.MT_RoleInfo).ToList();
            ViewBag.RoleInfo = roleInfo;
            var cancerList = roleInfoService.LoadEntities(t=>true).ToList();
            ViewBag.CancerList = cancerList;
            //根据身份证号 判断性别
            string IdCard =CommonFunc.SafeGetStringFromObj(workerModel.id_card_number);
            tmp = IdCard.Substring(16,1);
            int sx = int.Parse(tmp);
            Math.DivRem(sx,2,out outNum);
            if (outNum == 0)
            { 
                ViewBag.Sex = "女士";
            }
            else
            { 
                ViewBag.Sex = "先生";
            } 
            return View();
        }

    }
}
