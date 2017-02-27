using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EHR.Statistics.WepApp.Startup))]
namespace EHR.Statistics.WepApp
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
