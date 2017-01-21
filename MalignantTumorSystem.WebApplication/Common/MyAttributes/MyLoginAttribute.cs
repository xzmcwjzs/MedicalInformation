using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Common.MyAttributes
{
    public class MyLoginAttribute:AuthorizeAttribute
    { 
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
             if (!MalignantTumorSystem.Common.OneLoginHelper.CheckOnline())
            {
                filterContext.HttpContext.Response.Write("<script>alert('您的账号在别处登录，你被强迫下线'); window.location.href='/Home/Index';</script>");
            }
            }
        }

    }
