using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.BLL;
using MalignantTumorSystem.Model;
using MalignantTumorSystem.Model.Entities;
using System.Diagnostics;
using MalignantTumorSystem.ADO;
using System.Data;

namespace MalignantTumorSystem.WebApplication.Controllers
{
    public class TestController : Controller
    {
        //
        // GET: /Test/
        ITestService testService = new TestService(); 
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Index2()
        {
            return View();
        }
        public ActionResult Index3()
        {
            return View();
        }
        public ActionResult Index4()
        {
            return View();
        }
        public ActionResult AddEF()
        { 
            List<Test> listModel = new List<Test>();
            int count = 10000;
            for (int i = 0; i < count; i++)
            {
                Model.Entities.Test model = new Test();

                model.id = Guid.NewGuid().ToString();
                model.id1 = i.ToString();
                model.id2 = "我不是大牛";
                model.id3 = "我从4月30日开始写这个系列到今天（5月20日已经全家人的支持表示感谢";
                model.id4 = "时间不等人";
                model.id5 = "呵呵哒";
                listModel.Add(model);
            }
            Stopwatch sw=new Stopwatch();
            sw.Start();
            testService.AddAllEntity(listModel);
            sw.Stop();
            var temp=sw.Elapsed;
            string date ="1W数据  使用EF的批量插入总耗时为："+ temp.ToString();
            return Content(date);
        }
        public ActionResult AddRange()
        {
            List<Test> listModel = new List<Test>();
            int count = 50000;
            for (int i = 0; i < count; i++)
            {
                Model.Entities.Test model = new Test();

                model.id = Guid.NewGuid().ToString();
                model.id1 = i.ToString();
                model.id2 = "我不是大牛";
                model.id3 = "我从4月30日开始写这个系列到今天（5月20日已经全家人的支持表示感谢";
                model.id4 = "时间不等人";
                model.id5 = "呵呵哒";
                listModel.Add(model);
            }
            Stopwatch sw = new Stopwatch();
            sw.Start();
            testService.AddRangeEntity(listModel);
            sw.Stop();
            var temp = sw.Elapsed;
            string date = "5W数据  使用AddRange的批量插入总耗时为：" + temp.ToString();
            return Content(date);
        }
        public ActionResult AddBulk()
        {
            List<Test> listModel = new List<Test>();
           
            int count = 100000;
            for (int i = 0; i < count; i++)
            {
                Model.Entities.Test model = new Test();

                model.id = Guid.NewGuid().ToString();
                model.id1 = i.ToString();
                model.id2 = "我不是大牛";
                model.id3 = "我从4月30日开始写这个系列到今天（5月20日已经全家人的支持表示感谢";
                model.id4 = "时间不等人";
                model.id5 = "呵呵哒";
                listModel.Add(model);
            }
            Stopwatch sw = new Stopwatch();
            sw.Start();
            //DataTable dt = new DataTable();
            //dt.Columns.Add("id", typeof(string));
            //dt.Columns.Add("id1", typeof(string));
            //dt.Columns.Add("id2", typeof(string));
            //dt.Columns.Add("id3", typeof(string));
            //dt.Columns.Add("id4", typeof(string));
            //dt.Columns.Add("id5", typeof(string));
            //foreach (Test item in listModel)
            //{
            //    DataRow row = dt.NewRow();
            //    row["id"] = item.id;
            //    row["id1"] = item.id1;
            //    row["id2"] = item.id2;
            //    row["id3"] = item.id3;
            //    row["id4"] = item.id4;
            //    row["id5"] = item.id5;
            //    dt.Rows.Add(row);
            //}
            //ado.InsertBySqlBulkCopy(dt, "Test");
            SqlHelper.InsertBySqlBulkCopy<Test>(listModel, "Test");
            sw.Stop();
            var temp = sw.Elapsed;
            string date = "10W 数据 使用BulkInsert的批量插入总耗时为：" + temp.ToString();
            return Content(date);
        }

        public ActionResult UpdateBulk()
        {
            Stopwatch sw = new Stopwatch();
            sw.Start();

            testService.BulkUpdate(t => t.id5 == "呵呵哒", t => new Test { id3 = "滴滴滴滴开始写这个系列到今天（5月20日已经全家人的支持表示感谢", id4 = "时间真的不等人啊" });
            sw.Stop();
            var temp = sw.Elapsed;
            string date = "5W数据  使用BulkUpdate的批量更新总耗时为：" + temp.ToString();
            return Content(date);
        }

        public ActionResult DeleteBulk()
        {
            Stopwatch sw = new Stopwatch();
            sw.Start();
            testService.BulkDelete(t => t.id5 == "呵呵哒");
            sw.Stop();
            var temp = sw.Elapsed;
            string date = "5W数据  使用BulkDelete的批量删除总耗时为：" + temp.ToString();
            return Content(date);
        }

    }
}
