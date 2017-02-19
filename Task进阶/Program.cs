using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Task进阶
{
    class Program
    {
        static void Main(string[] args)
        {
            #region Task无关联嵌套
            //var pTask = Task.Factory.StartNew(() =>
            //    {
            //        var cTask = Task.Factory.StartNew(() =>
            //        {
            //            System.Threading.Thread.Sleep(2000);
            //            Console.WriteLine("Childen task finished!");
            //        });
            //        Console.WriteLine("Parent task finished!");
            //    });
            //pTask.Wait();
            //Console.WriteLine("Flag"); 
            #endregion

            #region Task父子关联嵌套
            //var pTask = Task.Factory.StartNew(() =>
            //{
            //    var cTask = Task.Factory.StartNew(() =>
            //    {
            //        System.Threading.Thread.Sleep(2000);
            //        Console.WriteLine("Childen task finished!");
            //    },TaskCreationOptions.AttachedToParent);
            //    Console.WriteLine("Parent task finished!");
            //});
            //pTask.Wait();
            //Console.WriteLine("Flag");
            #endregion

            #region 多任务处理案例
            //Task.Factory.StartNew(() =>
            //{
            //    var t1 = Task.Factory.StartNew<int>(() =>
            //    {
            //        Console.WriteLine("Task 1 running...");
            //        return 1;
            //    });
            //    t1.Wait(); //等待任务一完成
            //    var t3 = Task.Factory.StartNew<int>(() =>
            //    {
            //        Console.WriteLine("Task 3 running...");
            //        return t1.Result + 3;
            //    });
            //    var t4 = Task.Factory.StartNew<int>(() =>
            //    {
            //        Console.WriteLine("Task 2 running...");
            //        return t1.Result + 2;
            //    }).ContinueWith<int>(task =>
            //    {
            //        Console.WriteLine("Task 4 running...");
            //        return task.Result + 4;
            //    });
            //    Task.WaitAll(t3, t4);  //等待任务三和任务四完成
            //    var result = Task.Factory.StartNew(() =>
            //    {
            //        Console.WriteLine("Task Finished! The result is {0}", t3.Result + t4.Result);
            //    });
            //});
            #endregion

            #region Task的异常处理1
            //try
            //{
            //    var pTask = Task.Factory.StartNew(() =>
            //    {
            //        var cTask = Task.Factory.StartNew(() =>
            //        {
            //            System.Threading.Thread.Sleep(2000);
            //            throw new Exception("cTask Error!");
            //            Console.WriteLine("Childen task finished!");
            //        });
            //        throw new Exception("pTask Error!");
            //        Console.WriteLine("Parent task finished!");
            //    });

            //    pTask.Wait();
            //}
            //catch (Exception ex)
            //{
            //    Console.WriteLine(ex.Message);
            //}
            //Console.WriteLine("Flag");
            #endregion

            #region Task的异常处理2
            try
            {
                var pTask = Task.Factory.StartNew(() =>
                {
                    var cTask = Task.Factory.StartNew(() =>
                    {
                        System.Threading.Thread.Sleep(2000);
                        throw new Exception("cTask Error!");
                        Console.WriteLine("Childen task finished!");
                    });
                    throw new Exception("pTask Error!");
                    Console.WriteLine("Parent task finished!");
                });

                pTask.Wait();
            }
            catch (AggregateException ex)
            {
                foreach (Exception inner in ex.InnerExceptions)
                {
                    Console.WriteLine(inner.Message);
                }
            }
            Console.WriteLine("Flag");
            #endregion
            Console.ReadKey();
        }
    }
}
