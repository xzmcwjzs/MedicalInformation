using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using MalignantTumorSystem.WebApplication;
using MalignantTumorSystem.WebApplication.Controllers;

namespace MalignantTumorSystem.WebApplication.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Index() as ViewResult;
            ViewDataDictionary viewData = result.ViewData;
            // Assert
            Assert.IsNotNull("单元测试",viewData["Message"] as string);
        }
 
    }
}
