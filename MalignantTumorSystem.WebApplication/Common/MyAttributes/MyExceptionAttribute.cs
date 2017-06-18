using MalignantTumorSystem.Common.Log;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Common.MyAttributes
{
    public class MyExceptionAttribute : HandleErrorAttribute
    {
        public override void OnException(ExceptionContext filterContext)
        {
            base.OnException(filterContext);

            LogHelper.WriteLog(filterContext.Exception.ToString());

            //filterContext.HttpContext.Response.Redirect("/Common/Error.html");
            //filterContext.HttpContext.Response.Redirect("/Home/Index");
            //filterContext.HttpContext.Response.Write("<script type='text/javascript'> window.top.location.href='/Home/Index';</script>"); 
        }
    }
}