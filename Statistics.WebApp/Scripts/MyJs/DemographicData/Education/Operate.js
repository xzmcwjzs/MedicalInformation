/// <reference path="../../../H-ui_v3.0/lib/jquery/1.9.1/jquery.min.js" />
$(function () {
    var regionCode = code;
    var regionName = "";
    $.ajax({
        type: "post",
        dataType: "json",
        url: "/DemographicData/InitEducationData",
        data: { regionCode: regionCode },
        success: function (data) {
            $("#s1").text(data.s1);
            $("#s2").text(data.s2);
            $("#s3").text(data.s3);
            $("#s4").text(data.s4);
            $("#s5").text(data.s5);
            $("#s6").text(data.s6);
            $("#s7").text(data.s7);
            $("#s8").text(data.s8);
            $("#s9").text(data.s9);
            $("#s10").text(data.s10);
            $("#sh").text(data.sh);
            
            $("#s1b").text(data.s1b);
            $("#s2b").text(data.s2b);
            $("#s3b").text(data.s3b);
            $("#s4b").text(data.s4b);
            $("#s5b").text(data.s5b);
            $("#s6b").text(data.s6b);
            $("#s7b").text(data.s7b);
            $("#s8b").text(data.s8b);
            $("#s9b").text(data.s9b);
            $("#s10b").text(data.s10b);
            $("#shb").text(data.shb);

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
            url: "/DemographicData/InitEducationData",
            data: { regionCode: regionCode },
            success: function (data) {
                $("#s1").text(data.s1);
                $("#s2").text(data.s2);
                $("#s3").text(data.s3);
                $("#s4").text(data.s4);
                $("#s5").text(data.s5);
                $("#s6").text(data.s6);
                $("#s7").text(data.s7);
                $("#s8").text(data.s8);
                $("#s9").text(data.s9);
                $("#s10").text(data.s10);
                $("#sh").text(data.sh);

                $("#s1b").text(data.s1b);
                $("#s2b").text(data.s2b);
                $("#s3b").text(data.s3b);
                $("#s4b").text(data.s4b);
                $("#s5b").text(data.s5b);
                $("#s6b").text(data.s6b);
                $("#s7b").text(data.s7b);
                $("#s8b").text(data.s8b);
                $("#s9b").text(data.s9b);
                $("#s10b").text(data.s10b);
                $("#shb").text(data.shb);

            }
        })

        var seriesData = [];

        $.ajax({
            type: "post",
            dataType: "json",
            url: "/DemographicData/InitEducationData",
            data: { regionCode: regionCode },
            success: function (data) {
              
                chart.series[0].setData(seriesData);

                seriesData = [["研究生", data.s1], ["大学本科", data.s2], ["大学专科和专科学校", data.s3], ["中等专业学校", data.s4], ["技工学校", data.s5], ["高中", data.s6], ["初中", data.s7], ["小学", data.s8], ["文盲或半文盲", data.s9], ["其他", data.s10]];

                chart.series[0].setData(seriesData);
            }
        })
    })

    var seriesData= [];
   
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        title: {
            text: '人口文化程度构成扇形图'
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
            name: '文化程度占比',
            data: seriesData
        }]
    });

    $.ajax({
        type: "post",
        dataType: "json",
        url: "/DemographicData/InitEducationData",
        data: { regionCode: regionCode },
        success: function (data) {
            chart = $("#container").highcharts(); 

            seriesData = [["研究生", data.s1], ["大学本科", data.s2], ["大学专科和专科学校", data.s3], ["中等专业学校", data.s4], ["技工学校", data.s5], ["高中", data.s6], ["初中", data.s7], ["小学", data.s8], ["文盲或半文盲", data.s9], ["其他", data.s10]];
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