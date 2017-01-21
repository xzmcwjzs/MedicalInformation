using MalignantTumorSystem.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MalignantTumorSystem.WebAPI.Repository
{
    public class CustomerRepository
    {
        private List<CustomerModel> data = new List<CustomerModel>
        {
            new CustomerModel {CustomerId=1,CustomerName="Tom",Location="北京" },
            new CustomerModel {CustomerId=2,CustomerName="Lily",Location="北京" },
            new CustomerModel {CustomerId=3,CustomerName="Jay",Location="北京" }
        };

        public static CustomerRepository repo = new CustomerRepository();
        public static CustomerRepository CurrentRepository { get { return repo; } }

        /// <summary>
        /// 查询全部数据
        /// </summary>
        /// <returns></returns>
        public IEnumerable<CustomerModel> GetAll()
        {
            return data;
        }
        /// <summary>
        /// 根据ID获取某一项
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public CustomerModel GetById(int id)
        {
            return data.Where(t => t.CustomerId == id).FirstOrDefault();
        }
        /// <summary>
        /// 添加用户
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public CustomerModel AddCustomer(CustomerModel model)
        {
            model.CustomerId = data.Count() + 1;
            data.Add(model);
            return model;
        }
        /// <summary>
        /// 删除一个用户
        /// </summary>
        /// <param name="id"></param>
        public void Remove(int id)
        {
            var item = GetById(id);
            if (item != null)
            {
                data.Remove(item);
            }
        }
        /// <summary>
        /// 更新用户
        /// </summary>
        /// <param name="model"></param>
        /// <returns></returns>
        public bool Update(CustomerModel model)
        {
            CustomerModel item = GetById(model.CustomerId);

            if (item != null)
            {
                item.CustomerName = model.CustomerName;
                item.Location = model.Location;
                return true;
            }
            else
            {
                return false;
            }

        }
    }
}