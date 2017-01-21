using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MalignantTumorSystem.WebAPI.Models
{
    public class CustomerModel
    {
        public int CustomerId { get; set; }

        public string CustomerName { get; set; }

        public string Location { get; set; }
    }
}