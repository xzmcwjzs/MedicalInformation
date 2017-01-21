using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MalignantTumorSystem.WebApplication.Helpers
{
    public static class PageSize
    {
        private static int pagesize=15;
        public static int GetPageSize {
            get { return pagesize; }
        }
    }
}