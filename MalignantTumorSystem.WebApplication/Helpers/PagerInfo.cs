using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MalignantTumorSystem.WebApplication.Helpers
{
    public class PagerInfo
    {
        public int TotalCount { get; set; }

        public int PageIndex { get; set; }

        public int PageSize { get; set; }
    }
}