using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace System.Web.Mvc
{
    public static class HtmlPagerHelper
    { 
        #region 数字分页
        //public static HtmlString ShowPager(this HtmlHelper htmlHelper,int currentPage,int pageSize,int totalCount) {

           
            //var redirectTo = htmlHelper.ViewContext.RequestContext.HttpContext.Request.Url.AbsolutePath;
            //pageSize = pageSize == 0 ? 3 : pageSize;
            ////总页数
            //var totalPages = Math.Max((totalCount + pageSize - 1) / pageSize, 1);
            ////var totalPages = Convert.ToInt32(Math.Ceiling((double)totalCount/pageSize));
            //StringBuilder output = new StringBuilder();

            //if (totalPages > 1)
            //{
            //    output.AppendFormat("<a class='pageLink' href='{0}?pageIndex=1&pageSize={1}'>首页</a> ", redirectTo, pageSize);
            //    if (currentPage > 1)
            //    {//处理上一页的连接
            //        output.AppendFormat("<a class='pageLink' href='{0}?pageIndex={1}&pageSize={2}'>上一页</a> ", redirectTo, currentPage - 1, pageSize);
            //    }

            //    output.Append(" ");
            //    int currint = 5;
            //    for (int i = 0; i <= 10; i++)
            //    {//一共最多显示10个页码，前面5个，后面5个
            //        if ((currentPage + i - currint) >= 1 && (currentPage + i - currint) <= totalPages)
            //        {
            //            if (currint == i)
            //            {//当前页处理                           
            //                output.AppendFormat("<a class='cpb' href='{0}?pageIndex={1}&pageSize={2}'>{3}</a> ", redirectTo, currentPage, pageSize, currentPage);
            //            }
            //            else
            //            {//一般页处理
            //                output.AppendFormat("<a class='pageLink' href='{0}?pageIndex={1}&pageSize={2}'>{3}</a> ", redirectTo, currentPage + i - currint, pageSize, currentPage + i - currint);
            //            }
            //        }
            //        output.Append(" ");
            //    }
            //    if (currentPage < totalPages)
            //    {//处理下一页的链接
            //        output.AppendFormat("<a class='pageLink' href='{0}?pageIndex={1}&pageSize={2}'>下一页</a> ", redirectTo, currentPage + 1, pageSize);
            //    }

            //    output.Append(" ");
            //    if (currentPage != totalPages)
            //    {
            //        output.AppendFormat("<a class='pageLink' href='{0}?pageIndex={1}&pageSize={2}'>末页</a> ", redirectTo, totalPages, pageSize);
            //    }
            //    output.Append(" ");
            //}
            //output.AppendFormat("<label>第{0}页 / 共{1}页</label>", currentPage, totalPages);//这个统计加不加都行

            //return new HtmlString(output.ToString()); 
           
        //} 
        #endregion

        #region 普通分页

        public static HtmlString ShowPager(this HtmlHelper htmlHelper, int pageIndex, int pageSize, int totalCount)
         {  
             var redirectTo = htmlHelper.ViewContext.RequestContext.HttpContext.Request.Url.AbsolutePath;
             pageSize = pageSize == 0 ? 15 : pageSize;
             //总页数
             var totalPages = Math.Max((totalCount + pageSize - 1) / pageSize, 1);
             //var totalPages = Convert.ToInt32(Math.Ceiling((double)totalCount/pageSize));
            
             StringBuilder sb = new StringBuilder();
             if (totalPages <= 1) {
                 sb.AppendFormat("<div style='text-align: center; vertical-align: middle; margin-top: 10px;'><label>共{0}条<a style='padding-left:1em;'></a>分{1}页<a style='padding-left:1em;'></a>" +
       "第{2}页<a style='padding-left:1em;'></a>跳转到<input type='Text' id='index' name='index' style='width:20px;height:18px;padding:0;vertical-align:middle;'/>" +
       "<input type='Button' id='go' value='GO' style='width:22px;height:20px;font-size:8pt;padding:0;vertical-align:middle;'/><a style='padding-left:1em;'></a>" +
       "每页15条<a style='padding-left:2em;'></a></label>" +
       "<a href='javascript:void(0)'><img src='/Helpers/images/first.gif' style='border:#fff'/></a><a style='padding-left:1em;'></a>" +
       "<a href='javascript:void(0)'><img src='/Helpers/images/prev.gif' style='border:#fff'/></a><a style='padding-left:1em;'></a>" +
   "<a href='javascript:void(0)'><img src='/Helpers/images/next.gif' style='border:#fff' /></a><a style='padding-left:1em;'></a>" +
   "<a href='javascript:void(0)'><img src='/Helpers/images/last.gif' style='border:#fff'/></a></div>", totalCount, totalPages, pageIndex);
             }
             else
             {
                 sb.Append("<div style='text-align: center; vertical-align: middle; margin-top: 10px;'>");
                 sb.AppendFormat("<label>共{0}条<a style='padding-left:1em;'></a>分{1}页<a style='padding-left:1em;'></a>第{2}页<a style='padding-left:1em;'></a>", totalCount, totalPages, pageIndex);
                 sb.AppendFormat("跳转到<input type='Text' id='index' name='index' style='width:20px;height:18px;padding:0;vertical-align:middle;'/>" +
           "<input type='Button' id='go' value='GO' style='width:22px;height:20px;font-size:8pt;padding:0;vertical-align:middle;' onclick=\"javascript:location.href='{0}?pageIndex='+parseInt(document.getElementById('index').value)+'&pageSize={1}'\"/><a style='padding-left:1em;'></a>" +
           "每页15条<a style='padding-left:2em;'></a></label>", redirectTo, pageSize);

                 if (pageIndex == 1)
                     sb.Append("<a href='javascript:void(0)'><img src='/Helpers/images/first.gif' style='border:#fff'/></a><a style='padding-left:1em;'></a>");
                 else
                 {
                     sb.AppendFormat("<a href='{0}?pageIndex=1&pageSize={1}'><img src='/Helpers/images/first.gif' style='border:#fff'/></a><a style='padding-left:1em;'></a>", redirectTo, pageSize);
                 }
                 if (pageIndex > 1)
                 {
                     sb.AppendFormat("<a href='{0}?pageIndex={1}&pageSize={2}'><img src='/Helpers/images/prev.gif' style='border:#fff'/></a><a style='padding-left:1em;'></a>", redirectTo, pageIndex - 1, pageSize);
                 }
                 else
                     sb.Append("<a href='javascript:void(0)'><img src='/Helpers/images/prev.gif' style='border:#fff'/></a><a style='padding-left:1em;'></a>");

                 if (pageIndex < totalPages)
                 {
                     sb.AppendFormat("<a href='{0}?pageIndex={1}&pageSize={2}'><img src='/Helpers/images/next.gif' style='border:#fff' /></a><a style='padding-left:1em;'></a>", redirectTo, pageIndex + 1, pageSize);
                 }
                 else
                     sb.Append("<a href='javascript:void(0)'><img src='/Helpers/images/next.gif' style='border:#fff' /></a><a style='padding-left:1em;'></a>");

                 if (pageIndex == totalPages)
                     sb.Append("<a href='javascript:void(0)'><img src='/Helpers/images/last.gif' style='border:#fff'/></a>");
                 else
                 {
                     sb.AppendFormat("<a href='{0}?pageIndex={1}&pageSize={2}'><img src='/Helpers/images/last.gif' style='border:#fff'/></a>", redirectTo, totalPages, pageSize);
                 }
                 sb.AppendFormat("</div>");
             }
            
            return new HtmlString(sb.ToString());
        }
	#endregion

    }

}