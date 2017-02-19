using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 并行集合和PLinq
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("------------------List<T>是非线程安全集合，所有的线程可以改变他的值-------------------");
            PEnumerable.ListWithParallel();
            Console.WriteLine("-----------ConcurrentBag<T>是线程安全集合------------------------------");
            PEnumerable.ConcurrentBagWithPallel();
            Console.WriteLine("---------Parallel Linq中的AsParallel的用法-------------------------------------");
            PEnumerable.TestPLinq();
            Console.WriteLine("---------Parallel Linq中的ToLookup的用法与GroupBy对比-------------------------------------");
            PEnumerable.GroupByTest();
            Console.ReadKey();
        }
    }
}
