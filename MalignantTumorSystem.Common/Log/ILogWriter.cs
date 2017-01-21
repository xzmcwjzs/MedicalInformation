using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MalignantTumorSystem.Common.Log
{
    public interface ILogWriter
    {
        void WriteLogInfo(string txt);
    }
}
