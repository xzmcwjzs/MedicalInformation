using MalignantTumorSystem.WebAPI.Models;
using MalignantTumorSystem.WebAPI.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MalignantTumorSystem.WebAPI.Controllers
{
    public class CustomerController : ApiController
    {
        CustomerRepository repo = CustomerRepository.CurrentRepository;

        public IEnumerable<CustomerModel> GetAll()
        {
            return repo.GetAll();
        }

        [HttpGet]
        public CustomerModel Get(int id)
        {
            return repo.GetById(id);
        }

        [HttpPost]
        public CustomerModel CreateCustomer(CustomerModel model)
        {
            return repo.AddCustomer(model);
        }

        [HttpPut]
        public bool UpdateCustomer(CustomerModel model)
        {
            return repo.Update(model);
        }

        [HttpDelete]
        public void DeleteCustomer(int id)
        {
            repo.Remove(id);
        }
    }
}
