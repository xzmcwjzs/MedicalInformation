using StackExchange.Profiling;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;

namespace MalignantTumorSystem.WebApplication
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            #region Ninject IOC/DI 注入 
            MalignantTumorSystem.WebApplication.Ninject.NinjectRegister.RegisterFovMvc(); //为ASP.NET MVC注册IOC容器
            MalignantTumorSystem.WebApplication.Ninject.NinjectRegister.RegisterFovWebApi(GlobalConfiguration.Configuration);//为WebApi注册IOC容器 

            #endregion

            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            //性能检测
            StackExchange.Profiling.EntityFramework6.MiniProfilerEF6.Initialize();

            #region 利用RouteDebug进行调试
            //RouteDebug.RouteDebugger.RewriteRoutesForTesting(RouteTable.Routes);
            #endregion
            #region LOG4Net读取配置
            //从配置文件读取log4net的配置，然后进行一个初始化工作。
            log4net.Config.XmlConfigurator.Configure();
            #endregion

            //code first数据迁移 先删除  后新建
            //System.Data.Entity.Database.SetInitializer(new System.Data.Entity.DropCreateDatabaseIfModelChanges<Model.EntityFrameworkCodeFirstEntities>());

            #region CodeFirst自动迁移，并允许数据丢失
            //手写update-database

            //Database.SetInitializer(new MigrateDatabaseToLatestVersion<Model.DataBaseContext.MalignantTumorEntities, MalignantTumorSystem.Model.Migrations.Configuration>());

            //var dbMigrator = new DbMigrator(new Model.Migrations.Configuration());
            //dbMigrator.Update();

            #endregion

            //避免数据库自动创建、自动迁移
            // Database.SetInitializer<Model.DataBaseContext.MalignantTumorEntities>(null);

        }
        //protected void Session_End(object sender, EventArgs e)
        //{
        //    MalignantTumorSystem.Common.OneLoginHelper.GlobalSessionEnd();
        //}

        protected void Application_BeginRequest(Object source, EventArgs e)
        {
            MiniProfiler.Start();
        }
        protected void Application_EndRequest()
        {
            MiniProfiler.Stop();
        }

    }
}
