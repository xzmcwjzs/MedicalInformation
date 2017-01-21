using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Areas.BreastCancer
{
    public class BreastCancerAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "BreastCancer";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "BreastCancer_default",
                "BreastCancer/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}