using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace 认识Task
{
    class Program
    {
        static void Main(string[] args)
        {
            #region Task创建及生命周期
            ////创建Task的两种方法
            //var task1 = new Task(() =>
            //{
            //    Console.WriteLine("Hello,task");
            //});
            //task1.Start();

            //var task2 = Task.Factory.StartNew(() =>
            //{
            //    Console.WriteLine("Hollo,task started by task factory");
            //});
            //Console.WriteLine("------------------Task的生命周期如下：-----------------");
            //var task3 = new Task(() =>
            //{
            //    Console.WriteLine("Begin");
            //    System.Threading.Thread.Sleep(2000);
            //    Console.WriteLine("Finish");
            //});
            //Console.WriteLine("Before start:" + task3.Status);
            //task3.Start();
            //Console.WriteLine("After start:" + task3.Status);
            //task3.Wait();     //task1.Wait();就是等待任务执行完成，我们可以看到最后task1的状态变为Completed
            //Console.WriteLine("After Finish:" + task3.Status); 
            #endregion

            #region Task.WaitAll
            //var task1 = new Task(() =>
            //{
            //    Console.WriteLine("Task 1 Begin");
            //    System.Threading.Thread.Sleep(2000);
            //    Console.WriteLine("Task 1 Finish");
            //});
            //var task2 = new Task(() =>
            //{
            //    Console.WriteLine("Task 2 Begin");
            //    System.Threading.Thread.Sleep(3000);
            //    Console.WriteLine("Task 2 Finish");
            //});

            //task1.Start();
            //task2.Start();
            //Task.WaitAll(task1, task2);
            //Console.WriteLine("All task finished!");
            #endregion

            #region Task.WaitAny
            //var task1 = new Task(() =>
            //{
            //    Console.WriteLine("Task 1 Begin");
            //    System.Threading.Thread.Sleep(2000);
            //    Console.WriteLine("Task 1 Finish");
            //});
            //var task2 = new Task(() =>
            //{
            //    Console.WriteLine("Task 2 Begin");
            //    System.Threading.Thread.Sleep(3000);
            //    Console.WriteLine("Task 2 Finish");
            //});

            //task1.Start();
            //task2.Start();
            //Task.WaitAny(task1, task2);
            //Console.WriteLine("All task finished!");
            #endregion

            #region Task.ContinueWith
            //var task1 = new Task(() =>
            //{
            //    Console.WriteLine("Task 1 Begin");
            //    System.Threading.Thread.Sleep(2000);
            //    Console.WriteLine("Task 1 Finish");
            //});
            //var task2 = new Task(() =>
            //{
            //    Console.WriteLine("Task 2 Begin");
            //    System.Threading.Thread.Sleep(3000);
            //    Console.WriteLine("Task 2 Finish");
            //});


            //task1.Start();
            //task2.Start();
            //var result = task1.ContinueWith<string>(task =>
            //{
            //    Console.WriteLine("task1 finished!");
            //    return "This is task result!";
            //});

            //Console.WriteLine(result.Result.ToString());

            #endregion

            #region 每次调用ContinueWith方法时，每次会把上次Task的引用传入进来，以便检测上次Task的状态，比如我们可以使用上次Task的Result属性来获取返回值

            //var SendFeedBackTask = Task.Factory.StartNew(() => { Console.WriteLine("Get Some Data"); })
            //    .ContinueWith<bool>(s => { return true; }).ContinueWith<string>(r =>
            //    {
            //        if (r.Result)
            //        {
            //            return "Finished";
            //        }
            //        else
            //        {
            //            return "Error";
            //        }
            //    });
            //Console.WriteLine(SendFeedBackTask.Result);

            //简化写法
            //Task.Factory.StartNew<string>(() => {return "One";}).ContinueWith(ss => { Console.WriteLine(ss.Result);});
            #endregion
            #region Task取消
            var tokenSource = new CancellationTokenSource();
            var token = tokenSource.Token;
            var task = Task.Factory.StartNew(() =>
            {
                for (var i = 0; i < 1000; i++)
                {
                    System.Threading.Thread.Sleep(1000);
                    if (token.IsCancellationRequested)
                    {
                        Console.WriteLine("Abort mission success!");
                        return;
                    }
                }
            },token);
            token.Register(() => {
                Console.WriteLine("Canceled");
            });
            Console.WriteLine("Press enter to cancel task...");
            Console.ReadKey();
            tokenSource.Cancel();
            #endregion
            Console.ReadKey();
        }
    }
}
