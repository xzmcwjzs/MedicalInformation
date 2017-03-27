using MalignantTumorSystem.ADO.StatisticsOperation;
using MalignantTumorSystem.Model.ADOModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.Common;

namespace Statistics.WebApp.Controllers
{
    public class BaseController : Controller
    {
        Comm_Platform_WorkerADORepository workerADORepository = new Comm_Platform_WorkerADORepository();
        public string GetRegionCode(string name,string password)
        {
            Comm_Platform_Worker model = new Comm_Platform_Worker();
            model = workerADORepository.GetModelByNameAndPassword(name, password);
            if (model != null)
            {
                return CommonFunc.SafeGetStringFromObj(model.region_code);
            }
            else
            {
                return "";
            }
        }

        public string defaultname = "wangj";
        public string defaultpassword = "123456";
    }
     
}