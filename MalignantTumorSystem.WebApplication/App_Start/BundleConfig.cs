using System.Web;
using System.Web.Optimization;

namespace MalignantTumorSystem.WebApplication
{
    public class BundleConfig
    {
        // 有关绑定的详细信息，请访问 http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // 使用要用于开发和学习的 Modernizr 的开发版本。然后，当你做好
            // 生产准备时，请使用 http://modernizr.com 上的生成工具来仅选择所需的测试。
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/bundles/dwz").Include(
                "~/JS/dwz/js/jquery-2.1.4.min.js",
                "~/JS/dwz/js/jquery.cookie.js",
                "~/JS/dwz/js/jquery.validate.js",
                 "~/JS/dwz/js/jquery.bgiframe.js",
                  "~/JS/dwz/xheditor/xheditor-1.2.2.min.js",
                   "~/JS/dwz/xheditor/xheditor_lang/zh-cn.js",
                    "~/JS/dwz/uploadify/scripts/jquery.uploadify.js",
                    "~/JS/dwz/chart/raphael.js",
                    "~/JS/dwz/chart/g.bar.js",
                     "~/JS/dwz/chart/g.line.js",
                     "~/JS/dwz/chart/g.pie.js",
                      "~/JS/dwz/chart/g.dot.js",
                      "~/JS/dwz/js/dwz.core.js",
                       "~/JS/dwz/js/dwz.util.date.js",
                        "~/JS/dwz/js/dwz.validate.method.js",
                        "~/JS/dwz/js/dwz.barDrag.js",
                     "~/JS/dwz/js/dwz.drag.js",
                      "~/JS/dwz/js/dwz.tree.js",
                      "~/JS/dwz/js/dwz.accordion.js",
                       "~/JS/dwz/js/dwz.ui.js",
                        "~/JS/dwz/js/dwz.theme.js",
                        "~/JS/dwz/js/dwz.switchEnv.js",
                     "~/JS/dwz/js/dwz.alertMsg.js",
                      "~/JS/dwz/js/dwz.contextmenu.js",
                      "~/JS/dwz/js/dwz.navTab.js",
                       "~/JS/dwz/js/dwz.tab.js",
                        "~/JS/dwz/js/dwz.resize.js",
                        "~/JS/dwz/js/dwz.dialog.js",
                        "~/JS/dwz/js/dwz.sortDrag.js",
                      "~/JS/dwz/js/dwz.cssTable.js",
                      "~/JS/dwz/js/dwz.stable.js",
                       "~/JS/dwz/js/dwz.taskBar.js",
                        "~/JS/dwz/js/dwz.ajax.js",
                        "~/JS/dwz/js/dwz.pagination.js",
                        "~/JS/dwz/js/dwz.database.js",
                      "~/JS/dwz/js/dwz.datepicker.js",
                      "~/JS/dwz/js/dwz.effects.js",
                       "~/JS/dwz/js/dwz.panel.js",
                        "~/JS/dwz/js/dwz.checkbox.js",
                        "~/JS/dwz/js/dwz.history.js",
                           "~/JS/dwz/js/dwz.combox.js",
                      "~/JS/dwz/js/dwz.file.js",
                      "~/JS/dwz/js/dwz.print.js",
                       "~/JS/dwz/js/dwz.regional.zh.js",
                        "~/Scripts/MyJs/My97DatePicker/WdatePicker.js" 
                ));
            bundles.Add(new StyleBundle("~/dwz/css").Include(
                "~/JS/dwz/themes/default/style.css",
                "~/JS/dwz/themes/css/core.css",
                "~/JS/dwz/themes/css/print.css",
                "~/JS/dwz/uploadify/css/uploadify.css"
                ));
        }
    }
}
