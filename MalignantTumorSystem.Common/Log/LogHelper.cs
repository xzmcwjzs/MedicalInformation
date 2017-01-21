using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Common.Log
{
    //观察者模式
    public class LogHelper
    {
        public static Queue<string> ExceptionStringQueue = new Queue<string>();
        public static List<ILogWriter> LogWriterList = new List<ILogWriter>();

        static LogHelper()
        {
            //LogWriterList.Add(new TextFileWriter());//变化点 
            LogWriterList.Add(new Log4NetWriter());

            ThreadPool.QueueUserWorkItem(o =>
            {
                while (true)
                {
                    lock (ExceptionStringQueue)
                    {
                        if (ExceptionStringQueue.Count > 0)
                        {
                            string str = ExceptionStringQueue.Dequeue();
                            foreach (var logWriter in LogWriterList)
                            {
                                logWriter.WriteLogInfo(str);
                            }
                        }
                        else
                        {
                            Thread.Sleep(3000);
                        }
                    }
                } 
            });
        }

        public static void WriteLog(string exceptionText)
        {
            lock (ExceptionStringQueue)
            {
                ExceptionStringQueue.Enqueue(exceptionText);
            }
        }
    }
}
