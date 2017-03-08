using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace 异步编程AsyncDemo
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        //【2】根据委托定义方法的实现
        private int ExecuteTask1(int num)//模拟一个比较耗时的任务
        {
            System.Threading.Thread.Sleep(5000);
            return num * num;
        }
        private int ExecuteTask2(int num)//执行比较快的任务
        {
            return num * num;
        }
        //同步执行
        private void button1_Click(object sender, EventArgs e)
        {
            this.label1.Text = ExecuteTask1(10).ToString();//占用时间长
            this.label2.Text = ExecuteTask2(10).ToString();
        }
        //【3】基于委托实现异步调用
        private void button2_Click(object sender, EventArgs e)
        {
            MyCalculator objMyCal = ExecuteTask1; ;//创建委托变量，并代表方法1（方法的指针）

            //异步执行第一个任务（通过独立的线程完成这个任务）
            IAsyncResult result = objMyCal.BeginInvoke(10, null, null);
            this.label1.Text = "正在计算请稍等........";

            //同时执行第二个任务(第一个任务没有完成，不会阻塞第二个任务的执行)
            this.label2.Text = ExecuteTask2(10).ToString();

            //获取异步执行的结果:EndInvoke()方法，借助IAsyncResult接口对象，不断查询异步执行是否结束（IsCompleted）
            //该方法知道异步调用的方法所有参数，所以异步调用结束后，取出异步调用的结果作为返回值。
            int res = objMyCal.EndInvoke(result);
            this.label1.Text = res.ToString();
        }
        //实现异步（多线程）思考：需要通过委托完成（因为委托专门提供了异步调用的方法）
        //【1】定义委托（方法的原型：返回值类型、参数类型和个数）
        public delegate int MyCalculator(int num);
       
    }
}
