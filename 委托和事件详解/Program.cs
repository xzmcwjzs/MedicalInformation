using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 委托和事件详解
{
    //示例来源于 SkySoot 博客

    //public delegate void GreetingDelegate(string name);

    public delegate void GreetingDelegate(string name);

    public class GreetingManager
    {
        /// <summary>
        /// 在 GreetingManager 类的内部声明 delegate1 变量
        /// </summary>
        //public GreetingDelegate delegate1;
        //public void GreetPeople(string name, GreetingDelegate MakeGreeting)
        //{
        //    MakeGreeting(name);
        //}

        /// <summary>
        /// 在 GreetingManager 类的内部声明 delegate1 变量
        /// </summary>
        //public GreetingDelegate delegate1;

        //public void GreetPeople(string name)
        //{
        //    if (delegate1 != null) // 如果有方法注册委托变量
        //    {
        //        delegate1(name); // 通过委托调用方法
        //    }
        //}

        //声明一个事件   声明一个事件不过类似于声明一个进行了封装的委托类型的变量而已
        public event GreetingDelegate MakeGreet;//声明事件  委托是一种类型  事件是委托类型的实例
        public void GreetPeople(string name)
        {
            MakeGreet(name);
        }
    }
    class Program
    {
        #region 将方法作为方法的参数
        //委托是一个类，它定义了方法的类型，使得可以将方法当作另一个方法的参数来进行传递，这种将方法动态地赋给参数的做法，可以避免在程序中大量使用If … Else(Switch)语句，同时使得程序具有更好的可扩展性
        //private static void EnglishGreeting(string name)
        //{
        //    Console.WriteLine("good morning" + name);
        //}
        //private static void ChineseGreeting(string name)
        //{
        //    Console.WriteLine("早上好" + name);
        //}
        //private static void GreetPeople(string name, GreetingDelegate MakeGreeting)
        //{
        //    MakeGreeting(name);
        //}
        #endregion

        #region 将方法绑定到委托

        #endregion

        private static void EnglishGreeting(string name)
        {
            Console.WriteLine("Good Morning, " + name);
        }

        private static void ChineseGreeting(string name)
        {
            Console.WriteLine("早上好, " + name);
        }
        static void Main(string[] args)
        {
            #region 将方法作为方法的参数
            //GreetPeople("Liker", EnglishGreeting);
            //GreetPeople("李志忠", ChineseGreeting); 
            #endregion

            #region 将方法绑定到委托
            //使用委托可以将多个方法绑定到同一个委托变量，当调用此变量时(这里用“调用”这个词，是因为此变量代表一个方法)，可以依次调用所有绑定的方法。

            //GreetingDelegate delegate1;
            //delegate1 = EnglishGreeting;
            //delegate1 += ChineseGreeting;
            //GreetPeople("Liker", delegate1);

            //GreetingDelegate delegate1;
            //delegate1 = EnglishGreeting;
            //delegate1 += ChineseGreeting;
            //delegate1("Liker");
            #endregion

            //GreetingManager gm = new GreetingManager();
            //gm.GreetPeople("Liker", EnglishGreeting);
            //gm.GreetPeople("李志中", ChineseGreeting);


            //GreetingDelegate delegate1;
            //delegate1 = EnglishGreeting;
            //delegate1 += ChineseGreeting;
            //gm.GreetPeople("Liker", delegate1);

            //gm.delegate1 = EnglishGreeting;
            //gm.delegate1 += ChineseGreeting;
            //gm.GreetPeople("Liker", gm.delegate1);

            //gm.delegate1 = EnglishGreeting;
            //gm.delegate1 += ChineseGreeting;
            //gm.GreetPeople("Liker"); //注意，这次不需要再传递 delegate1 变量

            //于是，Event 出场了，它封装了委托类型的变量，使得：在类的内部，不管你声明它是public还是protected，它总是private 的。在类的外部，注册“+=”和注销“-=”的访问限定符与你在声明事件时使用的访问符相同

            GreetingManager gm = new GreetingManager();
            //gm.MakeGreet = EnglishGreeting; // 编译错误1     
            //事件 1、不能被初始化，防止外面 直接 赋值为null  导致注册失效  
                    //2、不能被外部调用（权限的控制）比如按钮的触发事件，外界不能随意调用
            gm.MakeGreet += EnglishGreeting;
            gm.MakeGreet += ChineseGreeting;
            gm.GreetPeople("Liker");


            //事件是观察者模式的具体实现


            Console.ReadKey();
        }

    }

}
