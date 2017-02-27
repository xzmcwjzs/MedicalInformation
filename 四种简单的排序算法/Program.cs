using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace 四种简单的排序算法
{
   static class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("冒泡排序结果为：");
            int[] arry1 = new int[] { 7, 2, 3, 4, -1, 1 };
            Program.BubbleSort(arry1); 
            for (int i = 0; i < arry1.Length; i++)
            {
                Console.WriteLine("\t" + arry1[i]);
            }

            Console.WriteLine("快速排序结果为：");
            int[] arry2 = new int[] { 34, 1, 221, 50, 44, 58, 12, 1, 1 };
            Program.QuickSort(arry2, 0, arry2.Length - 1);
            for (int i = 0; i < arry2.Length; i++)
            {
                Console.WriteLine("\t" + arry2[i]);
            }

            Console.WriteLine("插入排序结果为：");
            int[] arry3 = new int[] { 34, 1, 221, 50, 44, 58, 12 };
            Program.InsertSort(arry3);
            for (int i = 0; i < arry3.Length; i++)
            {
                Console.WriteLine("\t" + arry3[i]);
            }
            Console.ReadKey();
        }

        #region 冒泡排序 **
        public static void BubbleSort(this int[] arry)
        {
            for (int i = 0; i < arry.Length; i++)
            {
                for (int j = 0; j < arry.Length - 1 - i; j++)
                {
                    if (arry[j] > arry[j + 1])
                    {
                        int temp = arry[j + 1];
                        arry[j + 1] = arry[j];
                        arry[j] = temp;
                    }
                }
            }
        }
        #endregion

        #region 快速排序  *****
        public static void QuickSort(this int[] arry,int left,int right)
        {
            if (left < right)
            {
                int middle = arry[(left + right) / 2];
                int i = left - 1;
                int j = right + 1;
                while (true)
                {
                    while (arry[++i]<middle&&i<right) ;//等价于 while (i < right && nums[i] < middle) { i++; };
                    while (arry[--j] > middle && j > 0) ;//等价于while (j > 0 && nums[j] > middle) { j--; };
                    if (i >= j) break;
                    int temp = arry[i];
                    arry[i] = arry[j];
                    arry[j] = temp;
                }

                Program.QuickSort(arry, left, i - 1);
                Program.QuickSort(arry, j + 1, right);
            }
        }
        #endregion

        #region 插入排序 ****
        public static void InsertSort(this int[] arry) {
            //直接插入排序是将待比较的数值与它的前一个数值进行比较，所以外层循环是从第二个数值开始的
            for(int i = 1; i < arry.Length; i++)
            {
                if (arry[i] < arry[i - 1])
                {
                    //用一个变量来保存当前待比较的数值，因为当一趟比较完成时，我们要将待比较数值置入比它小的数值的后一位
                    int temp = arry[i];
                    int j = 0;
                    for ( j = i-1; j >= 0 && temp < arry[j]; j--)
                    {
                        arry[j + 1] = arry[j];
                    }
                    arry[j + 1] = temp;
                }
            }
        }
        #endregion

        #region 希尔排序

        #endregion
    }
 
}
