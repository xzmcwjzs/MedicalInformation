using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Areas.NasopharynxCancer
{
    public class NasopharynxCancerAreaRegistration : AreaRegistration 
    {
        public override string AreaName 
        {
            get 
            {
                return "NasopharynxCancer";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context) 
        {
            context.MapRoute(
                "NasopharynxCancer_default",
                "NasopharynxCancer/{controller}/{action}/{id}",
                new { action = "Index", id = UrlParameter.Optional }
            );
        }
    }
}