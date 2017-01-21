using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MVC.Demo.SignalR.Startup))]
namespace MVC.Demo.SignalR
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.MapSignalR();
        }
    }
}
