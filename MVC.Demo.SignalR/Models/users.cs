using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC.Demo.SignalR.Models
{
    public class users
    {
        public string id { get; set; }
        public string name { get; set; }
        public string password { get; set; }
        public int age { get; set; }  
        public DateTime createtime { get; set; }
    }
}