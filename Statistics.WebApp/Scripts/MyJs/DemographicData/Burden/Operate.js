/// <reference path="../../../H-ui_v3.0/lib/jquery/1.9.1/jquery.min.js" />
$(function () {
    var regionCode = code;
    var regionName = "";
    $.ajax({
        type: "post",
        dataType: "json",
        url: "/DemographicData/InitBurdenData",
        data: { regionCode: regionCode },
        success: function (data) {
            $("#lb0m").text(data.lb0m);
            $("#lb0mb").text(data.lb0mb);
            $("#lb0f").text(data.lb0f);
            $("#lb0fb").text(data.lb0fb);
            $("#lb0h").text(data.lb0h);
            $("#lb0hb").text(data.lb0hb);
            $("#lb15m").text(data.lb15m);
            $("#lb15mb").text(data.lb15mb);
            $("#lb15f").text(data.lb15f);
            $("#lb15fb").text(data.lb15fb);
            $("#lb15h").text(data.lb15h);
            $("#lb15hb").text(data.lb15hb);
            $("#lb65m").text(data.lb65m);
            $("#lb65mb").text(data.lb65mb);
            $("#lb65f").text(data.lb65f);
            $("#lb65fb").text(data.lb65fb);
            $("#lb65h").text(data.lb65h);
            $("#lb65hb").text(data.lb65hb);


            $("#lbhjm").text(data.lbhjm);
            $("#lbhjmb").text(data.lbhjmb);
            $("#lbhjf").text(data.lbhjf);
            $("#lbhjfb").text(data.lbhjfb);
            $("#lbhjh").text(data.lbhjh);
            $("#lbhjhb").text(data.lbhjhb);
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
            url: "/DemographicData/InitBurdenData",
            data: { regionCode: regionCode },
            success: function (data) {
                $("#lb0m").text(data.lb0m);
                $("#lb0mb").text(data.lb0mb);
                $("#lb0f").text(data.lb0f);
                $("#lb0fb").text(data.lb0fb);
                $("#lb0h").text(data.lb0h);
                $("#lb0hb").text(data.lb0hb);
                $("#lb15m").text(data.lb15m);
                $("#lb15mb").text(data.lb15mb);
                $("#lb15f").text(data.lb15f);
                $("#lb15fb").text(data.lb15fb);
                $("#lb15h").text(data.lb15h);
                $("#lb15hb").text(data.lb15hb);
                $("#lb65m").text(data.lb65m);
                $("#lb65mb").text(data.lb65mb);
                $("#lb65f").text(data.lb65f);
                $("#lb65fb").text(data.lb65fb);
                $("#lb65h").text(data.lb65h);
                $("#lb65hb").text(data.lb65hb);


                $("#lbhjm").text(data.lbhjm);
                $("#lbhjmb").text(data.lbhjmb);
                $("#lbhjf").text(data.lbhjf);
                $("#lbhjfb").text(data.lbhjfb);
                $("#lbhjh").text(data.lbhjh);
                $("#lbhjhb").text(data.lbhjhb);

            }
        })

        var categoriesData = [];
        var seriesData1 = [], seriesData2 = [], seriesData3 = [];

        $.ajax({
            type: "post",
            dataType: "json",
            url: "/DemographicData/InitBurdenData",
            data: { regionCode: regionCode },
            success: function (data) {
                categoriesData.push("0~15", "15~65", "65~");
                //动态加载之前 要先清空
                chart1.series[0].setData(seriesData1); chart1.series[1].setData(seriesData2);
                chart2.series[0].setData(seriesData3);

                seriesData1 = [parseInt(data.lb0m), parseInt(data.lb15m), parseInt(data.lb65m)];
                seriesData2 = [parseInt(data.lb0f), parseInt(data.lb15f), parseInt(data.lb65f)];

                chart1.xAxis[0].setCategories(categoriesData);
                chart1.series[0].setData(seriesData1); chart1.series[1].setData(seriesData2);
                seriesData3 = [["0~15", data.lb0hb], ["15~65", data.lb15hb], ["65~", data.lb65hb]]

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
            text: '人口负担构成柱状图'
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
        series: [{ name: "男性", data: seriesData1 }, { name: "女性", data: seriesData2 }]
    });

    $('#container2').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '人口负担构成扇形图'
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
        url: "/DemographicData/InitBurdenData",
        data: { regionCode: regionCode },
        success: function (data) {
            chart1 = $("#container1").highcharts();
            chart2 = $("#container2").highcharts();

            categoriesData.push("0~15", "15~65", "65~");
            seriesData1 = [parseInt(data.lb0m), parseInt(data.lb15m), parseInt(data.lb65m)];
            seriesData2 = [parseInt(data.lb0f), parseInt(data.lb15f), parseInt(data.lb65f)];

            chart1.xAxis[0].setCategories(categoriesData);
            chart1.series[0].setData(seriesData1); chart1.series[1].setData(seriesData2);
            seriesData3 = [["0~15", data.lb0hb], ["15~65", data.lb15hb], ["65~", data.lb65hb]]
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