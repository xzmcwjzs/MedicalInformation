/// <reference path="../../../H-ui_v3.0/lib/jquery/1.9.1/jquery.min.js" />
$(function () {
    var regionCode = code;
    var regionName = "";
    $.ajax({
        type: "post",
        dataType: "json",
        url: "/DemographicData/InitMedicalSecurityData",
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
            $("#sh").text(data.sh);

            $("#s1b").text(data.s1b);
            $("#s2b").text(data.s2b);
            $("#s3b").text(data.s3b);
            $("#s4b").text(data.s4b);
            $("#s5b").text(data.s5b);
            $("#s6b").text(data.s6b);
            $("#s7b").text(data.s7b);
            $("#s8b").text(data.s8b); 
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
            url: "/DemographicData/InitMedicalSecurityData",
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
                $("#sh").text(data.sh);

                $("#s1b").text(data.s1b);
                $("#s2b").text(data.s2b);
                $("#s3b").text(data.s3b);
                $("#s4b").text(data.s4b);
                $("#s5b").text(data.s5b);
                $("#s6b").text(data.s6b);
                $("#s7b").text(data.s7b);
                $("#s8b").text(data.s8b); 
                $("#shb").text(data.shb);

            }
        })

        var seriesData = [];

        $.ajax({
            type: "post",
            dataType: "json",
            url: "/DemographicData/InitMedicalSecurityData",
            data: { regionCode: regionCode },
            success: function (data) {

                chart.series[0].setData(seriesData);

                seriesData = [["社会基本医疗保险", data.s1], ["商业医疗保险", data.s2], ["大病统筹", data.s3], ["新型农村合作医疗", data.s4], ["城镇居民基本医疗保险", data.s5], ["公费医疗", data.s6], ["职工医疗保险", data.s7], ["其他", data.s8]];

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
            text: '医疗保障构成扇形图'
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
            name: '医疗保障构成占比',
            data: seriesData
        }]
    });

    $.ajax({
        type: "post",
        dataType: "json",
        url: "/DemographicData/InitMedicalSecurityData",
        data: { regionCode: regionCode },
        success: function (data) {
            chart = $("#container").highcharts();

            seriesData = [["社会基本医疗保险", data.s1], ["商业医疗保险", data.s2], ["大病统筹", data.s3], ["新型农村合作医疗", data.s4], ["城镇居民基本医疗保险", data.s5], ["公费医疗", data.s6], ["职工医疗保险", data.s7], ["其他", data.s8]];

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