/// <reference path="../../../H-ui_v3.0/lib/jquery/1.9.1/jquery.min.js" />
$(function () {
 
    var regionCode = code;
    var regionName = "";
    $.ajax({
        type: "post",
        dataType: "json",
        url: "/DemographicData/InitConstituteData",
        data: { regionCode: regionCode },
        success: function (data) {  
            $("#lb0m").text(data.lb0m);
            $("#lb0mb").text(data.lb0mb);
            $("#lb0f").text(data.lb0f);
            $("#lb0fb").text(data.lb0fb);
            $("#lb0h").text(data.lb0h);
            $("#lb0hb").text(data.lb0hb);
            $("#lb10m").text(data.lb10m);
            $("#lb10mb").text(data.lb10mb);
            $("#lb10f").text(data.lb10f);
            $("#lb10fb").text(data.lb10fb);
            $("#lb10h").text(data.lb10h);
            $("#lb10hb").text(data.lb10hb);
            $("#lb20m").text(data.lb20m);
            $("#lb20mb").text(data.lb20mb);
            $("#lb20f").text(data.lb20f);
            $("#lb20fb").text(data.lb20fb);
            $("#lb20h").text(data.lb20h);
            $("#lb20hb").text(data.lb20hb);
            $("#lb30m").text(data.lb30m);
            $("#lb30mb").text(data.lb30mb);
            $("#lb30f").text(data.lb30f);
            $("#lb30fb").text(data.lb30fb);
            $("#lb30h").text(data.lb30h);
            $("#lb30hb").text(data.lb30hb);
            $("#lb40m").text(data.lb40m);
            $("#lb40mb").text(data.lb40mb);
            $("#lb40f").text(data.lb40f);
            $("#lb40fb").text(data.lb40fb);
            $("#lb40h").text(data.lb40h);
            $("#lb40hb").text(data.lb40hb);
            $("#lb50m").text(data.lb50m);
            $("#lb50mb").text(data.lb50mb);
            $("#lb50f").text(data.lb50f);
            $("#lb50fb").text(data.lb50fb);
            $("#lb50h").text(data.lb50h);
            $("#lb50hb").text(data.lb50hb);
            $("#lb60m").text(data.lb60m);
            $("#lb60mb").text(data.lb60mb);
            $("#lb60f").text(data.lb60f);
            $("#lb60fb").text(data.lb60fb);
            $("#lb60h").text(data.lb60h);
            $("#lb60hb").text(data.lb60hb);
            $("#lb70m").text(data.lb70m);
            $("#lb70mb").text(data.lb70mb);
            $("#lb70f").text(data.lb70f);
            $("#lb70fb").text(data.lb70fb);
            $("#lb70h").text(data.lb70h);
            $("#lb70hb").text(data.lb70hb);
            $("#lb80m").text(data.lb80m);
            $("#lb80mb").text(data.lb80mb);
            $("#lb80f").text(data.lb80f);
            $("#lb80fb").text(data.lb80fb);
            $("#lb80h").text(data.lb80h);
            $("#lb80hb").text(data.lb80hb);
            $("#lb90m").text(data.lb90m);
            $("#lb90mb").text(data.lb90mb);
            $("#lb90f").text(data.lb90f);
            $("#lb90fb").text(data.lb90fb);
            $("#lb90h").text(data.lb90h);
            $("#lb90hb").text(data.lb90hb);

            $("#lb100m").text(data.lb100m);
            $("#lb100mb").text(data.lb100mb);
            $("#lb100f").text(data.lb100f);
            $("#lb100fb").text(data.lb100fb);
            $("#lb100h").text(data.lb100h);
            $("#lb100hb").text(data.lb100hb);

            //alert(data.second);
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
            url: "/DemographicData/InitConstituteData",
            data: { regionCode: regionCode },
            success: function (data) {
                $("#lb0m").text(data.lb0m);
                $("#lb0mb").text(data.lb0mb);
                $("#lb0f").text(data.lb0f);
                $("#lb0fb").text(data.lb0fb);
                $("#lb0h").text(data.lb0h);
                $("#lb0hb").text(data.lb0hb);
                $("#lb10m").text(data.lb10m);
                $("#lb10mb").text(data.lb10mb);
                $("#lb10f").text(data.lb10f);
                $("#lb10fb").text(data.lb10fb);
                $("#lb10h").text(data.lb10h);
                $("#lb10hb").text(data.lb10hb);
                $("#lb20m").text(data.lb20m);
                $("#lb20mb").text(data.lb20mb);
                $("#lb20f").text(data.lb20f);
                $("#lb20fb").text(data.lb20fb);
                $("#lb20h").text(data.lb20h);
                $("#lb20hb").text(data.lb20hb);
                $("#lb30m").text(data.lb30m);
                $("#lb30mb").text(data.lb30mb);
                $("#lb30f").text(data.lb30f);
                $("#lb30fb").text(data.lb30fb);
                $("#lb30h").text(data.lb30h);
                $("#lb30hb").text(data.lb30hb);
                $("#lb40m").text(data.lb40m);
                $("#lb40mb").text(data.lb40mb);
                $("#lb40f").text(data.lb40f);
                $("#lb40fb").text(data.lb40fb);
                $("#lb40h").text(data.lb40h);
                $("#lb40hb").text(data.lb40hb);
                $("#lb50m").text(data.lb50m);
                $("#lb50mb").text(data.lb50mb);
                $("#lb50f").text(data.lb50f);
                $("#lb50fb").text(data.lb50fb);
                $("#lb50h").text(data.lb50h);
                $("#lb50hb").text(data.lb50hb);
                $("#lb60m").text(data.lb60m);
                $("#lb60mb").text(data.lb60mb);
                $("#lb60f").text(data.lb60f);
                $("#lb60fb").text(data.lb60fb);
                $("#lb60h").text(data.lb60h);
                $("#lb60hb").text(data.lb60hb);
                $("#lb70m").text(data.lb70m);
                $("#lb70mb").text(data.lb70mb);
                $("#lb70f").text(data.lb70f);
                $("#lb70fb").text(data.lb70fb);
                $("#lb70h").text(data.lb70h);
                $("#lb70hb").text(data.lb70hb);
                $("#lb80m").text(data.lb80m);
                $("#lb80mb").text(data.lb80mb);
                $("#lb80f").text(data.lb80f);
                $("#lb80fb").text(data.lb80fb);
                $("#lb80h").text(data.lb80h);
                $("#lb80hb").text(data.lb80hb);
                $("#lb90m").text(data.lb90m);
                $("#lb90mb").text(data.lb90mb);
                $("#lb90f").text(data.lb90f);
                $("#lb90fb").text(data.lb90fb);
                $("#lb90h").text(data.lb90h);
                $("#lb90hb").text(data.lb90hb);

                $("#lb100m").text(data.lb100m);
                $("#lb100mb").text(data.lb100mb);
                $("#lb100f").text(data.lb100f);
                $("#lb100fb").text(data.lb100fb);
                $("#lb100h").text(data.lb100h);
                $("#lb100hb").text(data.lb100hb);
  
            }
        })

        var categoriesData = [];
        var seriesData1 = [], seriesData2 = [], seriesData3 = [];

        $.ajax({
            type: "post",
            dataType: "json",
            url: "/DemographicData/InitConstituteData",
            data: { regionCode: regionCode },
            success: function (data) { 
                categoriesData.push("0~", "10~", "20~", "30~", "40~", "50~", "60~", "70~", "80~", "90~");
                //动态加载之前 要先清空
                chart1.series[0].setData(seriesData1); chart1.series[1].setData(seriesData2);  
               chart2.series[0].setData(seriesData3);

                seriesData1 = [parseInt(data.lb0m), parseInt(data.lb10m), parseInt(data.lb20m), parseInt(data.lb30m), parseInt(data.lb40m), parseInt(data.lb50m), parseInt(data.lb60m), parseInt(data.lb70m), parseInt(data.lb80m), parseInt(data.lb90m)];
                seriesData2 = [parseInt(data.lb0f), parseInt(data.lb10f), parseInt(data.lb20f), parseInt(data.lb30f), parseInt(data.lb40f), parseInt(data.lb50f), parseInt(data.lb60f), parseInt(data.lb70f), parseInt(data.lb80f), parseInt(data.lb90f)];

                chart1.xAxis[0].setCategories(categoriesData);
                chart1.series[0].setData(seriesData1); chart1.series[1].setData(seriesData2);
                seriesData3 = [["0~", data.lb0hb], ["10~", data.lb10hb], ["20~", data.lb20hb], ["30~", data.lb30hb], ["40~", data.lb40hb], ["50~", data.lb50hb], ["60~", data.lb60hb], ["70~", data.lb70hb], ["80~", data.lb80hb], ["90~", data.lb90hb]]

                chart2.series[0].setData(seriesData3);
            }
        })
    })

    var categoriesData = [];
    var seriesData1 = [], seriesData2 = [], seriesData3 = [];
    //加载柱状图
    $('#container1').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: '人口年龄、性别构成柱状图'
        },
        xAxis: {
            categories: categoriesData,
            crosshair: true,
            title: {
                text: '年龄段'
            }
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
        series: [{ name: "男性人口", data: seriesData1 }, { name: "女性人口", data: seriesData2 }]
    });

    $('#container2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '人口年龄、性别构成扇形图'
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: '年龄段占比',
            data: seriesData3
        }]
    });

    $.ajax({
        type: "post",
        dataType: "json",
        url: "/DemographicData/InitConstituteData",
        data: { regionCode: regionCode },
        success: function (data) {
            chart1 = $("#container1").highcharts();
            chart2 = $("#container2").highcharts();

            categoriesData.push("0~", "10~", "20~", "30~", "40~", "50~", "60~", "70~", "80~", "90~");
            seriesData1 = [parseInt(data.lb0m), parseInt(data.lb10m), parseInt(data.lb20m), parseInt(data.lb30m), parseInt(data.lb40m), parseInt(data.lb50m), parseInt(data.lb60m), parseInt(data.lb70m), parseInt(data.lb80m), parseInt(data.lb90m)];
            seriesData2 = [parseInt(data.lb0f), parseInt(data.lb10f), parseInt(data.lb20f), parseInt(data.lb30f), parseInt(data.lb40f), parseInt(data.lb50f), parseInt(data.lb60f), parseInt(data.lb70f), parseInt(data.lb80f), parseInt(data.lb90f)];
             
            chart1.xAxis[0].setCategories(categoriesData);
            chart1.series[0].setData(seriesData1); chart1.series[1].setData(seriesData2); 
           
            seriesData3 = [["0~", data.lb0hb], ["10~", data.lb10hb], ["20~", data.lb20hb], ["30~", data.lb30hb], ["40~", data.lb40hb], ["50~", data.lb50hb], ["60~", data.lb60hb], ["70~", data.lb70hb], ["80~", data.lb80hb], ["90~", data.lb90hb]]
            
            chart2.series[0].setData(seriesData3);
             
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