using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            // filters.Add(new HandleErrorAttribute());
            filters.Add(new MalignantTumorSystem.WebApplication.Common.MyAttributes.MyExceptionAttribute());
        }
    }
}
