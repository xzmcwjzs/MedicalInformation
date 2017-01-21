using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    public class BaseTopController : Controller
    {
        //
        // GET: /BaseTop/

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            base.OnActionExecuting(filterContext);
            if (Session["worker"] == null || !(Session["worker"] is Model.Entities.Comm_Platform_Worker))
            {
                //filterContext.Result = Redirect("/Home/Index");
                filterContext.HttpContext.Response.Write("<script type='text/javascript'> window.top.location.href='/Home/Index';</script>");
            } 
        }
        public void redirectTo()
        {
           Response.Write("<script type='text/javascript'> window.top.location.href='/Home/Index';</script>");
        }
         
    }
}
