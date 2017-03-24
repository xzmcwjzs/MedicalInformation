/// <reference path="../../../H-ui_v3.0/lib/jquery/1.9.1/jquery.min.js" />
$(function () {
    var regionCode = code;
    var regionName = "";
    var chart1, chart2;
    $.ajax({
        type: "post",
        dataType: "json",
        url: "/DemographicData/InitNumberData",
        data: { regionCode: regionCode },
        success: function (data) { 
            $("#lb4").text(data.lb4);
            $("#lb4M").text(data.lb4M);
            $("#lb4F").text(data.lb4F);
            $("#lb3").text(data.lb3);
            $("#lb3M").text(data.lb3M);
            $("#lb3F").text(data.lb3F);
            $("#lb2").text(data.lb2);
            $("#lb2M").text(data.lb2M);
            $("#lb2F").text(data.lb2F);
            $("#lb1").text(data.lb1);
            $("#lb1M").text(data.lb1M);
            $("#lb1F").text(data.lb1F);
            $("#lb0").text(data.lb0);
            $("#lb0M").text(data.lb0M);
            $("#lb0F").text(data.lb0F);

        }
    })


    $("#caculate").click(function () {
        if ($("#ddlCommunity").find("option:selected").val() != "") {
            regionCode = $("#ddlCommunity option:selected").val();
        } else if ($("#ddlStreet option:selected").val() != "") {
            regionCode = $("#ddlStreet option:selected").val();
        } else if ($("#ddlCounty option:selected").val() != "") {
            regionCode = $("#ddlCounty option:selected").val();
        } else if ($("#ddlCity option:selected").val() != "") {
            regionCode = $("#ddlCity option:selected").val();
        } else if ($("#ddlProvince option:selected").val() != "") {
            regionCode = $("#ddlProvince option:selected").val();
        } else {
            regionCode = code;
        }
        regionName = CodeToName(regionCode); 
        $.ajax({
            type: "post",
            dataType: "json",
            url: "/DemographicData/InitNumberData",
            data: { regionCode: regionCode },
            success: function (data) { 
                $("#lb4").text(data.lb4);
                $("#lb4M").text(data.lb4M);
                $("#lb4F").text(data.lb4F);
                $("#lb3").text(data.lb3);
                $("#lb3M").text(data.lb3M);
                $("#lb3F").text(data.lb3F);
                $("#lb2").text(data.lb2);
                $("#lb2M").text(data.lb2M);
                $("#lb2F").text(data.lb2F);
                $("#lb1").text(data.lb1);
                $("#lb1M").text(data.lb1M);
                $("#lb1F").text(data.lb1F);
                $("#lb0").text(data.lb0);
                $("#lb0M").text(data.lb0M);
                $("#lb0F").text(data.lb0F);

            }
        })

        //图表数据获取
       var categoriesData = [];
       var seriesData1 = [], seriesData2 = [], seriesData3 = [];
        
        $.ajax({
            type: "post",
            dataType: "json",
            url: "/DemographicData/InitNumberChart",
            data: { regionCode: regionCode },
            success: function (data) { 
                categoriesData.push(data.year0, data.year1, data.year2, data.year3, data.year4);
                //动态加载之前 要先清空
                chart1.series[0].setData(seriesData1); chart1.series[1].setData(seriesData2); chart1.series[2].setData(seriesData3);
                chart2.series[0].setData(seriesData1); chart2.series[1].setData(seriesData2); chart2.series[2].setData(seriesData3);
                
                seriesData1 = [parseInt(data.lb0), parseInt(data.lb1), parseInt(data.lb2), parseInt(data.lb3), parseInt(data.lb4)];
                seriesData2 = [parseInt(data.lb0M), parseInt(data.lb1M), parseInt(data.lb2M), parseInt(data.lb3M), parseInt(data.lb4M)];
                seriesData3 = [parseInt(data.lb0F), parseInt(data.lb1F), parseInt(data.lb2F), parseInt(data.lb3F), parseInt(data.lb4F)];

                chart1.xAxis[0].setCategories(categoriesData);
                chart1.series[0].setData(seriesData1); chart1.series[1].setData(seriesData2); chart1.series[2].setData(seriesData3);
                 
                chart2.xAxis[0].setCategories(categoriesData);
                chart2.series[0].setData(seriesData1); chart2.series[1].setData(seriesData2); chart2.series[2].setData(seriesData3);
                
            }
        })
         
    })
   
     
    var categoriesData = [];
    var seriesData1 = [], seriesData2 = [], seriesData3 = [];
   
    //加载折线图
    $('#container1').highcharts({
        title: {
            text: '人口数量资料折线图',
            x: -20
        }, 
        xAxis: { 
            categories:categoriesData
        },
        yAxis: {
            title: {
                text: '人数 (个)'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            valueSuffix: '个'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle',
            borderWidth: 0
        },
        series: [{ name: "人口数", data: seriesData1 }, { name: "男性人口", data: seriesData2 }, { name: "女性人口", data: seriesData3}]
    });
    
    //加载柱状图
    $('#container2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '人口数量资料柱状图'
        }, 
        xAxis: {
            categories:categoriesData,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: '人数 (个)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{ name: "人口数", data: seriesData1 }, { name: "男性人口", data: seriesData2 }, { name: "女性人口", data: seriesData3 }]
    });
   
    $.ajax({
        type: "post",
        dataType: "json",
        url: "/DemographicData/InitNumberChart",
        data: { regionCode: regionCode },
        success: function (data) {
             chart1 = $("#container1").highcharts();
             chart2 = $("#container2").highcharts();
            categoriesData.push(data.year0, data.year1, data.year2, data.year3, data.year4);
            seriesData1 = [parseInt(data.lb0), parseInt(data.lb1), parseInt(data.lb2), parseInt(data.lb3), parseInt(data.lb4)];
            seriesData2 = [parseInt(data.lb0M), parseInt(data.lb1M), parseInt(data.lb2M), parseInt(data.lb3M), parseInt(data.lb4M)];
            seriesData3 = [parseInt(data.lb0F), parseInt(data.lb1F), parseInt(data.lb2F), parseInt(data.lb3F), parseInt(data.lb4F)];

            chart1.xAxis[0].setCategories(categoriesData);
            chart1.series[0].setData(seriesData1); chart1.series[1].setData(seriesData2); chart1.series[2].setData(seriesData3);
            chart2.xAxis[0].setCategories(categoriesData);
            chart2.series[0].setData(seriesData1);
            chart2.series[1].setData(seriesData2);
            chart2.series[2].setData(seriesData3);
            
        }
    })
})

function CodeToName(num) {
    if (num.length == 2) {
        return $("#ddlProvince option:selected").text();
    } else if (num.length == 4) {
        return $("#ddlCity option:selected").text();
    } else if (num.length == 6) {
        return $("#ddlCounty option:selected").text();
    } else if (num.length == 9) {
        return $("#ddlStreet option:selected").text();
    } else if (num.length == 12) {
        return $("#ddlCommunity option:selected").text();
    } else {
        return "";
    }
}