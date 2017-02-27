using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 深入分析委托与事件
{
    class Program
    {
        static void Main(string[] args)
        {
            #region 委托与多播委托
            //Console.WriteLine("----------------初步认识委托---------------------");
            //Example example = new Example();
            //MyDelegate1 myDelegate1 = new MyDelegate1(example.Method1);
            //myDelegate1("委托的初步认识");
            //Console.WriteLine("");
            //Console.WriteLine("-------------------带有返回值的委托-------------------"); ;
            //MyDelegate2 myDelegate2 = new MyDelegate2(example.Method2);
            //string message = myDelegate2("我是参数");
            //Console.WriteLine(message);

            //Console.WriteLine(""); ;
            //Console.WriteLine("---------------多播委托------------");
            //Price price = new Price();
            //Mydelegate3 myDelegate3 = new Mydelegate3(price.Ordinary);
            //myDelegate3 += new Mydelegate3(price.Favourable);
            //Console.WriteLine("Current Price：" + myDelegate3(100));

            #endregion

            #region 普通的观察者模式
            //Worker manager = new Manager();
            //Worker assistant = new Assistant();
            //RegisterWorker(manager);
            //RegisterWorker(assistant);

            //Excute(8000);
            #endregion

            #region 委托版的观察者模式
            //Manager manager = new Manager();
            //Handler managerHandler = new Handler(manager.GetWages);
            //Attach(managerHandler);

            //Assistant assistant = new Assistant();
            //Handler assistantHandler = new Handler(assistant.GetWages);
            //Attach(assistantHandler);

            //Excute(8000);
            #endregion

            #region 委托协变与逆变
            //委托协变的概念就应运而生，此时委托可以按照传统的继承规则进行转换。即 GetWorkerHandler 委托可以直接绑定 GetManager 方法
            //委托逆变，是指委托方法的参数同样可以接收 “继承” 这个传统规则。像下面的例子，以 object 为参数的委托，可以接受任何 object 子类的对象作为参数。最后可以在处理方法中使用 is 对输入数据的类型进行判断，分别处理对不同的类型的对象
            //Handler handler = new Handler(GetMessage);
            //handler(29);
            #endregion

            #region 泛型委托
            //委托逆变虽然实用，但如果都以 object 作为参数，则需要每次都对参数进行类型的判断，这不禁令人感到厌烦。
            //为此，泛型委托应运而生，泛型委托有着委托逆变的优点，同时利用泛型的特性，可以使一个委托绑定多个不同类型参数的方法，而且在方法中不需要使用 is 进行类型判断，从而简化了代码
            //Handler<Worker> workerHandler = new Handler<Worker>(GetWorkerWages);
            //Worker worker = new Worker();
            //worker.Wages = 3000;
            //workerHandler(worker);

            //Handler<Manager> managerHandler = new Handler<Manager>(GetManagerWages);
            //Manager manager = new Manager();
            //manager.Wages = 4500;
            //managerHandler(manager);
            #endregion

            #region 事件

            #endregion



            Console.ReadKey();
        }
        #region 委托与多播委托
        //delegate void MyDelegate1(string message);//无返回值的委托
        //delegate string MyDelegate2(string message);
        //public class Example
        //{
        //    public void Method1(string message)
        //    {
        //        Console.WriteLine(message);
        //    }

        //    public string Method2(string message)
        //    {
        //        return "带有返回值的委托" + message;
        //    }
        //}

        //delegate double Mydelegate3(double message);
        //public class Price
        //{
        //    public double Ordinary(double price)
        //    {
        //        double price1 = 0.95 * price;
        //        Console.WriteLine("Ordinary Price : " + price1);
        //        return price1;
        //    }

        //    public double Favourable(double price)
        //    {
        //        double price1 = 0.85 * price;
        //        Console.WriteLine("Favourable Price : " + price1);
        //        return price1;
        //    }
        //} 
        #endregion

        #region 普通的观察者模式  
        //简单的 Observer 模式，它使用一对多的方式，可以让多个观察者同时关注同一个事物，并作出不同的响应
        //public abstract class Worker
        //{
        //    public abstract double GetWages(double basicWages);
        //}
        //public class Manager : Worker
        //{
        //    //Manager实际工资为底薪1.5倍
        //    public override double GetWages(double basicWages)
        //    {
        //        double totalWages = 1.5 * basicWages;
        //        Console.WriteLine("Manager's wages is " + totalWages);
        //        return totalWages;
        //    }
        //}
        //public class Assistant : Worker
        //{
        //    //Assistant实际工资为底薪的1.2倍
        //    public override double GetWages(double basicWages)
        //    {
        //        double totalWages = 1.2 * basicWages;
        //        Console.WriteLine("Assistant's wages is " + totalWages);
        //        return totalWages;
        //    }
        //}

        //static IList<Worker> workerList = new List<Worker>();

        //public static void RegisterWorker(Worker worker)
        //{
        //    workerList.Add(worker);
        //}
        //public  static void RemoveWorker(Worker worker)
        //{
        //    workerList.Remove(worker);
        //}

        //public static void Excute(double basicWages)
        //{
        //    if (workerList.Count != 0)
        //    {
        //        foreach (var worker in workerList)
        //        {
        //            worker.GetWages(basicWages);
        //        }
        //    }
        //}
        #endregion

        #region 委托版的观察者模式
        //public class Manager
        //{
        //    public double GetWages(double basicWages)
        //    {
        //        double totalWages = 1.5 * basicWages;
        //        Console.WriteLine("Manager's wages is : " + totalWages);
        //        return totalWages;
        //     }
        // }

        // public class Assistant
        // {
        //     public double GetWages(double basicWages)
        //     {
        //         double totalWages = 1.2 * basicWages;
        //         Console.WriteLine("Assistant's wages is : " + totalWages);
        //         return totalWages;
        //     }
        // }

        //public delegate double Handler(double basicWages);
        //private static Handler wageHandler;

        ////加入观察者
        //public static void Attach(Handler handler)
        //{
        //    wageHandler += handler;
        //}
        ////删除观察者
        //public static void Detach(Handler handler)
        //{
        //    wageHandler -= handler;
        //}
        ////通过GetInvodationList方法获取多路广播委托列表，如果观察者数量大于0即执行方法

        //public static void Excute(double basicWages)
        //{
        //    if (wageHandler != null)
        //    {
        //        if (wageHandler.GetInvocationList().Count() != 0)
        //        {
        //            wageHandler(basicWages);
        //        }
        //    }
        //}
        #endregion

        #region 委托逆变
        //public delegate void Handler(object obj);

        //public static void GetMessage(object message)
        //{
        //    if (message is string)
        //        Console.WriteLine("His name is : " + message.ToString());
        //    if (message is int)
        //        Console.WriteLine("His age is : " + message.ToString());
        //}
        #endregion

        #region 泛型委托
        //public delegate void Handler<T>(T obj);

        //public static void GetWorkerWages(Worker worker)
        //{
        //    Console.WriteLine("Worker's total wages is " + worker.Wages);
        //}

        //public static void GetManagerWages(Manager manager)
        //{
        //    Console.WriteLine("Manager's total wages is " + manager.Wages);
        //}
        //public class Worker
        //{
        //    public double Wages { get; set; }
        //}
        //public class Manager
        //{
        //    public double Wages { get; set; }
        //}
        #endregion

        #region 事件

        #endregion

        #region 系统自带的泛型委托有
        //Predicate<T>、Action<T>、Func<>支持0~16个参数
        #endregion
        #region 匿名方法=>Lambda

        #endregion
    }
}
