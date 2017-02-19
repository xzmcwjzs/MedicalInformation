using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace ConsoleApplication2
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Parallel.Invoke方法--------------------------------------");
            ParallelInvokeMethod();
            Console.WriteLine("Parallel.For方法--------------------------------------");
            ParallelForMethod();
            Console.WriteLine("由于并行同时访问全局变量，会出现资源争夺，大多数时间消耗在了资源等待上面,此时Parallel.For不如For");
            ParallelForMethod2();
            Console.WriteLine("Parallel.Foreach方法--------------------------------------");
            ParallelForeachMethod();
            Console.WriteLine("中途退出stop或break--------------------------------------");
            ParallelBreak();
            Console.WriteLine("中途异常--------------------------------------");
            ParallelInvokeMethodException();
            Console.ReadKey();
        }
        #region Parallel.Invoke方法
        private static Stopwatch stopWatch = new Stopwatch();

        public static void Run1()
        {
            Thread.Sleep(2000);
            Console.WriteLine("Task 1 is cost 2 sec");
        }
        public static void Run2()
        {
            Thread.Sleep(3000);
            Console.WriteLine("Task 2 is cost 3 sec");
        }

        public static void ParallelInvokeMethod()
        {
            stopWatch.Start();
            Parallel.Invoke(Run1, Run2);
            stopWatch.Stop();
            Console.WriteLine("Parallel run " + stopWatch.ElapsedMilliseconds + " ms.");

            stopWatch.Restart();
            Run1();
            Run2();
            stopWatch.Stop();
            Console.WriteLine("Normal run " + stopWatch.ElapsedMilliseconds + " ms.");
        }

        #endregion

        #region Parallel.For
        public static void ParallelForMethod()
        {
            stopWatch.Start();
            for (int i = 0; i < 10000; i++)
            {
                for (int j = 0; j < 60000; j++)
                {
                    int sum = 0;
                    sum += i;
                }
            }
            stopWatch.Stop();
            Console.WriteLine("NormalFor run " + stopWatch.ElapsedMilliseconds + " ms.");

            stopWatch.Reset();
            stopWatch.Start();
            Parallel.For(0, 10000, item =>
            {
                for (int j = 0; j < 60000; j++)
                {
                    int sum = 0;
                    sum += item;
                }
            });
            stopWatch.Stop();
            Console.WriteLine("ParallelFor run " + stopWatch.ElapsedMilliseconds + " ms.");
            Console.WriteLine("一直说并行，那么从哪里可以看出来Parallel.For是并行执行的呢？");
            Parallel.For(0,100, i =>
            {
                Console.Write(i + "\t");
            });
        }

        public static void ParallelForMethod2()
        {
            var obj = new Object();
            long num = 0;
            ConcurrentBag<long> bag = new ConcurrentBag<long>();

            stopWatch.Start();
            for (int i = 0; i < 10000; i++)
            {
                for (int j = 0; j < 60000; j++)
                {
                    //int sum = 0;
                    //sum += item;
                    num++;
                }
            }
            stopWatch.Stop();
            Console.WriteLine("NormalFor run " + stopWatch.ElapsedMilliseconds + " ms.");

            stopWatch.Reset();
            stopWatch.Start();
            Parallel.For(0, 10000, item =>
            {
                for (int j = 0; j < 60000; j++)
                {
                    //int sum = 0;
                    //sum += item;
                    lock (obj)
                    {
                        num++;
                    }
                }
            });
            stopWatch.Stop();
            Console.WriteLine("ParallelFor run " + stopWatch.ElapsedMilliseconds + " ms.");

        }
        #endregion

        #region Parallel.Foreach
        public static void ParallelForeachMethod()
        {
            List<int> list = new List<int>();
            for (int i = 0; i < 100000; i++)
            {
                list.Add(i);
            }
            stopWatch.Start();
            foreach (var item in list)
            {
                int sum = 0;
                sum += item;
            }
            stopWatch.Stop();
            Console.WriteLine("NormalForeach run " + stopWatch.ElapsedMilliseconds + " ms.");

            stopWatch.Reset();
            stopWatch.Start();
            Parallel.ForEach(list, item =>
            {
                int sum = 0;
                sum += item;
            });
            stopWatch.Stop();
            Console.WriteLine("ParallelForeach run " + stopWatch.ElapsedMilliseconds + " ms.");
        }


        #endregion

        #region Parallel中途退出和异常处理
        public static void ParallelBreak()
        {
            ConcurrentBag<int> bag = new ConcurrentBag<int>();
            stopWatch.Start();
            Parallel.For(0, 1000, (i, state) =>
            {
                if (bag.Count == 300)
                {
                    // state.Stop();
                    state.Break();
                    return;
                }
                bag.Add(i);
            });
            stopWatch.Stop();
            Console.WriteLine("Bag count is " + bag.Count + ", " + stopWatch.ElapsedMilliseconds);
        }

        public static void Run3()
        {
            Thread.Sleep(2000);
            Console.WriteLine("Task 1 is cost 2 sec");
            throw new Exception("Exception in task 1");
        }
        public static void Run4()
        {
            Thread.Sleep(3000);
            Console.WriteLine("Task 2 is cost 3 sec");
            throw new Exception("Exception in task 2");
        }
        public static void ParallelInvokeMethodException()
        {
            stopWatch.Start();
            try
            {
                Parallel.Invoke(Run3, Run4);
            }
            catch (AggregateException aex)
            {
                foreach (var ex in aex.InnerExceptions)
                {
                    Console.WriteLine(ex.Message);
                }
            }
            stopWatch.Stop();
            Console.WriteLine("Parallel run " + stopWatch.ElapsedMilliseconds + " ms.");

            stopWatch.Reset();
            stopWatch.Start();
            try
            {
                Run3();
                Run4();
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
            stopWatch.Stop();
            Console.WriteLine("Normal run " + stopWatch.ElapsedMilliseconds + " ms.");
        }
        #endregion
    }
    
        
  
}  