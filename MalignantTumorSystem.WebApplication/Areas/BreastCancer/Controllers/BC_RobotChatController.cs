using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace MalignantTumorSystem.WebApplication.Areas.BreastCancer.Controllers
{
    public class BC_RobotChatController : Controller
    {
        // GET: BreastCancer/BC_RobotChat
        #region 框架页

        public ActionResult Frame()
        {
            return View();
        }
        public ActionResult Top()
        {
            return View();
        }
        public ActionResult Body()
        {
            return View();
        }

        #endregion
        //列表页
        public ActionResult List()
        {
            return View();
        }

        //智能聊天
        public ActionResult RobotChat()
        {
            string information = Request["information"];
            if (string.IsNullOrEmpty(information))
            {
                return Json("",JsonRequestBehavior.AllowGet);
            }
            else
            {
                try
                {
                    string result = null;
                    string APIKey = "6df030b6bd254284b78fb42618c0a812"; 
                    string message = Encoding.UTF8.GetString(Encoding.UTF8.GetBytes(information));
                    string getURL = "http://www.tuling123.com/openapi/api?key="+APIKey+"&info="+message+"";
                    HttpWebRequest request = (HttpWebRequest)HttpWebRequest.Create(getURL);
                    HttpWebResponse response = (HttpWebResponse)request.GetResponse();
                    using (Stream stream=response.GetResponseStream())
                    { 
                        byte[] by = new byte[1024]; 
                        int size = stream.Read(by, 0, by.Length);
                        Encoding encoding = Encoding.UTF8;
                        while (size>0)
                        { 
                            result += encoding.GetString(by, 0, size);
                            size = stream.Read(by, 0, by.Length);
                        }
                    }
                    return Json(result, JsonRequestBehavior.AllowGet);

                }
                catch (Exception)
                { 
                    throw;
                }
               
            }
        }

    }
}