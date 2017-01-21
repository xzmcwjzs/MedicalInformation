using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Common
{
    //实现只能允许  一个账号  同时只能在一个地方  登录
   public class OneLoginHelper
    {
       /// <summary>
       /// 登录后执行
       /// </summary>
       /// <param name="UserId"></param>
       public void LoginRegister(string UserId)
       {
           Hashtable hOnline = (Hashtable)System.Web.HttpContext.Current.Application["Online"];
           if (hOnline != null&&hOnline.Count>0)
           {
               IDictionaryEnumerator idE = hOnline.GetEnumerator();
               string strKey = "";
               while (idE.MoveNext())
               {
                   if (idE.Value != null && idE.Value.ToString().Equals(UserId))
                   {
                       //已经登录了
                       strKey = idE.Key.ToString();
                       hOnline[strKey] = "XXXXXX";
                       break;
                   } 
               }
               return; 
           }
           else
           {
               hOnline = new Hashtable();
           }
          hOnline[System.Web.HttpContext.Current.Session.SessionID] = UserId;
           System.Web.HttpContext.Current.Application.Lock();
           System.Web.HttpContext.Current.Application["Online"] = hOnline;
           System.Web.HttpContext.Current.Application.UnLock();
       }
       /// <summary>
       /// 检查是否唯一登录
       /// </summary>
       /// <returns></returns>
       public static bool CheckOnline()
       {
           Hashtable hOnline = (Hashtable)System.Web.HttpContext.Current.Application["Online"];
           if (hOnline != null)
           {
               IDictionaryEnumerator idE = hOnline.GetEnumerator();
               string strKey = string.Empty;
               if (hOnline.Count > 0)
               {
                   while (idE.MoveNext())
                   {
                      //判断登录时 保存的session是否与当前页面的session相同
                       if (hOnline.Contains(System.Web.HttpContext.Current.Session.SessionID))
                       {
                           if (idE.Key != null && idE.Key.ToString().Equals(System.Web.HttpContext.Current.Session.SessionID))
                           {
                               //判断当前session保存的值是否为被注销值
                               if (idE.Value != null && "XXXXXX".Equals(idE.Value.ToString()))
                               {
                                   //验证被注销则清空session
                                   hOnline.Remove(System.Web.HttpContext.Current.Session.SessionID);
                                   System.Web.HttpContext.Current.Application.Lock();
                                   System.Web.HttpContext.Current.Application["Online"] = hOnline;
                                   System.Web.HttpContext.Current.Application.UnLock();
                                   //System.Web.HttpContext.Current.Response.Write("<script>alert('您的账号在别处登录'); window.top.location.href='/Home/Index';</script>");
                                   return false;
                               }
                           }
                       }
                       else {
                           return false; 
                       }
                   }
                   return true;
               }
               else { 
                   return false;
               } 
           }
              return false;
           
       }
       /// <summary>
       /// global中sessionend  事件中代码
       /// </summary>
       public static void GlobalSessionEnd()
       {
           Hashtable hOnline = (Hashtable)System.Web.HttpContext.Current.Application["Online"];
           if (hOnline[System.Web.HttpContext.Current.Session.SessionID] != null)
           {
               hOnline.Remove(System.Web.HttpContext.Current.Session.SessionID);
               System.Web.HttpContext.Current.Application.Lock();
               System.Web.HttpContext.Current.Application["Online"] = hOnline;
               System.Web.HttpContext.Current.Application.UnLock();
           }
       }

    }
}
