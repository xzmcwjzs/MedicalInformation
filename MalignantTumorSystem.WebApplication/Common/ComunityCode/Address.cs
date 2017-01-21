using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MalignantTumorSystem.IBLL;
using MalignantTumorSystem.BLL;


namespace MalignantTumorSystem.WebApplication.Common.ComunityCode
{
    public class Address
    {
        
          IShare_ProvinceService provinceService=new Share_ProvinceService();
       
          IShare_CityService cityService =new Share_CityService();

          IShare_CountyService countyService = new Share_CountyService();

          IShare_StreetService streetService = new Share_StreetService();

          IShare_CommunityInfoService communityInfoService = new Share_CommunityInfoService();

        //12位
        public  string GetForwardAddress(string region_code)
        {
            string address = string.Empty;
            address += provinceService.LoadEntities(t => t.code == region_code.Substring(0, 2)).FirstOrDefault().name;
            address += cityService.LoadEntities(t => t.code == region_code.Substring(0, 4)).FirstOrDefault().name;
            address += countyService.LoadEntities(t => t.code == region_code.Substring(0, 6)).FirstOrDefault().name;
            address += streetService.LoadEntities(t => t.code == region_code.Substring(0, 9)).FirstOrDefault().name;
            address += communityInfoService.LoadEntities(t => t.code == region_code).FirstOrDefault().name;
            return address;
        }
        //6位
        public  string GetForwardAddress1(string region_code)
        {
            string address = string.Empty;
            address += provinceService.LoadEntities(t => t.code == region_code.Substring(0, 2)).FirstOrDefault().name;
            address += cityService.LoadEntities(t => t.code == region_code.Substring(0, 4)).FirstOrDefault().name;
            address += countyService.LoadEntities(t => t.code == region_code.Substring(0, 6)).FirstOrDefault().name;
            return address;
        }
        //9位
        public  string GetForwardAddress2(string region_code)
        {
            string address = string.Empty;
            address += provinceService.LoadEntities(t => t.code == region_code.Substring(0, 2)).FirstOrDefault().name;
            address += cityService.LoadEntities(t => t.code == region_code.Substring(0, 4)).FirstOrDefault().name;
            address += countyService.LoadEntities(t => t.code == region_code.Substring(0, 6)).FirstOrDefault().name;
            address += streetService.LoadEntities(t => t.code == region_code.Substring(0, 9)).FirstOrDefault().name; 

            return address;
        }
        //4位
        public  string GetForwardAddress3(string region_code)
        {
            string address = string.Empty;
            address += provinceService.LoadEntities(t => t.code == region_code.Substring(0, 2)).FirstOrDefault().name;
            address += cityService.LoadEntities(t => t.code == region_code.Substring(0, 4)).FirstOrDefault().name; 
            return address;
        }
        //2位
        public  string GetForwardAddress4(string region_code)
        {
            string address = string.Empty;
            address += provinceService.LoadEntities(t => t.code == region_code.Substring(0, 2)).FirstOrDefault().name; 
            return address;
        }

    }
}