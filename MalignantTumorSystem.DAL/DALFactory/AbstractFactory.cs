using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.DAL.DALFactory
{
   public partial class AbstractFactory
   {
       private static readonly string AssemblyPath = ConfigurationManager.AppSettings["AssemblyPath"];
       private static readonly string NameSpacePath = ConfigurationManager.AppSettings["NameSpacePath"];

        //public static Comm_Platform_WorkerDal GetUserInfoDal()
        //{
        //    return Assembly.Load(AssemblyPath).CreateInstance(NameSpacePath + ".UserInfoDal") as Comm_Platform_WorkerDal;
        //}
    }
}
