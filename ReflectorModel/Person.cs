using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReflectorModel
{
    public class Person
    {
        private string address;
        private string email;

        public string Name { set; get; }

        public int Age { set; get; }

        public void SayHello()
        {
            Console.WriteLine("你好");
        }

        public static string MystaticPro { set; get; }
        public static void MyStatic()
        {
            Console.WriteLine("我是static方法");
        }
    }
}
