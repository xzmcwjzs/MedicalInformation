/// <reference path="../../../H-ui_v3.0/lib/jquery/1.9.1/jquery.min.js" />
$(function () {
   
    var regionCode = code;
    var regionName = "";
    $.ajax({
        type: "post",
        dataType: "json",
        url: "/DemographicData/InitDrinkData",
        data: { regionCode: regionCode },
        success: function (data) { 
            $("#s1").text(data.res[0].s1);
            $("#s2").text(data.res[0].s2);
            $("#s3").text(data.res[0].s3);
            $("#s4").text(data.res[0].s4);
            $("#s5").text(data.res[0].s5);
            $("#s6").text(data.res[0].s6);
            $("#sh").text(data.res[0].sh);

            $("#s1b").text(data.res[0].s1b);
            $("#s2b").text(data.res[0].s2b);
            $("#s3b").text(data.res[0].s3b);
            $("#s4b").text(data.res[0].s4b);
            $("#s5b").text(data.res[0].s5b);
            $("#s6b").text(data.res[0].s6b);
            $("#shb").text(data.res[0].shb);

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
            url: "/DemographicData/InitDrinkData",
            data: { regionCode: regionCode },
            success: function (data) {
                $("#s1").text(data.res[0].s1);
                $("#s2").text(data.res[0].s2);
                $("#s3").text(data.res[0].s3);
                $("#s4").text(data.res[0].s4);
                $("#s5").text(data.res[0].s5);
                $("#s6").text(data.res[0].s6);
                $("#sh").text(data.res[0].sh);

                $("#s1b").text(data.res[0].s1b);
                $("#s2b").text(data.res[0].s2b);
                $("#s3b").text(data.res[0].s3b);
                $("#s4b").text(data.res[0].s4b);
                $("#s5b").text(data.res[0].s5b);
                $("#s6b").text(data.res[0].s6b);
                $("#shb").text(data.res[0].shb);

            }
        })

        var seriesData = [];

        $.ajax({
            type: "post",
            dataType: "json",
            url: "/DemographicData/InitDrinkData",
            data: { regionCode: regionCode },
            success: function (data) {

                chart.series[0].setData(seriesData);

                seriesData = [["0-6岁", data.res[0].s1], ["7-17岁", data.res[0].s2], ["18-44岁", data.res[0].s3], ["45-59岁", data.res[0].s4], ["60-89岁", data.res[0].s5], ["90岁以上", data.res[0].s6]];

                chart.series[0].setData(seriesData);
            }
        })
    })

    var seriesData = [];

    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '饮酒年龄构成扇形图'
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
            name: '饮酒年龄占比',
            data: seriesData
        }]
    });

    $.ajax({
        type: "post",
        dataType: "json",
        url: "/DemographicData/InitDrinkData",
        data: { regionCode: regionCode },
        success: function (data) {
            chart = $("#container").highcharts();

            seriesData = [["0-6岁", data.res[0].s1], ["7-17岁", data.res[0].s2], ["18-44岁", data.res[0].s3], ["45-59岁", data.res[0].s4], ["60-89岁", data.res[0].s5], ["90岁以上", data.res[0].s6]];
            chart.series[0].setData(seriesData);
              
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