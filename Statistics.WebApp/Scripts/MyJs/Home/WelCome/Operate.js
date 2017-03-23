/// <reference path="../../../H-ui_v3.0/lib/jquery/1.9.1/jquery.min.js" />
$(function () {
    var regionCode = code;
    var regionName = "";  
    $.ajax({
        type: "post",
        dataType: "json",
        url: "/Home/InitData",
        data:{regionCode:regionCode},
        success: function (data) {
            $("#lbJKDA").text(data.lbJKDA);
            $("#lb0_6").text(data.lb0_6);
            $("#lb7_17").text(data.lb7_17);
            $("#lb18_44").text(data.lb18_44);
            $("#lb45_59").text(data.lb45_59);
            $("#lb60_74").text(data.lb60_74);
            $("#lb75_89").text(data.lb75_89);
            $("#lb90").text(data.lb90);
            $("#lbGXY").text(data.lbGXY);
            $("#lbTNB").text(data.lbTNB);
            $("#lbGXB").text(data.lbGXB);
            $("#lbJSB").text(data.lbJSB);
            $("#lbZL").text(data.lbZL);
            $("#lb65M").text(data.lb65M);
            $("#lb65F").text(data.lb65F);

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
        $("#title").text(regionName); 
        $.ajax({
            type: "post",
            dataType: "json",
            url: "/Home/InitData",
            data: { regionCode: regionCode },
            success: function (data) {
                $("#lbJKDA").text(data.lbJKDA);
                $("#lb0_6").text(data.lb0_6);
                $("#lb7_17").text(data.lb7_17);
                $("#lb18_44").text(data.lb18_44);
                $("#lb45_59").text(data.lb45_59);
                $("#lb60_74").text(data.lb60_74);
                $("#lb75_89").text(data.lb75_89);
                $("#lb90").text(data.lb90);
                $("#lbGXY").text(data.lbGXY);
                $("#lbTNB").text(data.lbTNB);
                $("#lbGXB").text(data.lbGXB);
                $("#lbJSB").text(data.lbJSB);
                $("#lbZL").text(data.lbZL);
                $("#lb65M").text(data.lb65M);
                $("#lb65F").text(data.lb65F); 
            }
        })

        //图表数据获取 
         
        $.ajax({
            type: "post",
            dataType: "json",
            url: "/Home/InitChar",
            data: { regionCode: regionCode },
            success: function (data) {
                 subtitleText = "";
                 name = "建档人数";
                 categoriesData = [];
                 seriesData = [];
                 var chart = $("#container").highcharts();
                 var series = chart.series;
                 while (series.length > 0) { 
                     series[0].remove(false); 
                 }
                 chart.redraw();

                 categoriesData.push(data.monthyear0, data.monthyear1, data.monthyear2, data.monthyear3, data.monthyear4, data.monthyear5, data.monthyear6, data.monthyear7, data.monthyear8, data.monthyear9,data.monthyear10,data.monthyear11);
                
                 seriesData = [parseInt(data.month0), parseInt(data.month1), parseInt(data.month2), parseInt(data.month3), parseInt(data.month4), parseInt(data.month5), parseInt(data.month6), parseInt(data.month7), parseInt(data.month8), parseInt(data.month9), parseInt(data.month10), parseInt(data.month11)];
                subtitleText = data.subtitleText;
                chart.setTitle(null, { text: subtitleText });
                chart.setTitle({ text: regionName + '新建档案人数 ' });

                chart.xAxis[0].setCategories(categoriesData);
                chart.addSeries({ name: name, data: seriesData });

            }
        })


    })

    //图表数据获取
    var subtitleText = "";
    var name = "建档人数";
    var categoriesData = [];
    var seriesData = [];
    
  
 $('#container').highcharts({
        chart: {
            type: 'bar'
        },
        title: {
            text: '新建档案人数'
        },
        subtitle: {
            text: subtitleText
        },
        xAxis: {
            categories: categoriesData,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '人数 (个)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' 个'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: seriesData
    });
  
 $.ajax({
     type: "post",
     dataType: "json",
     url: "/Home/InitChar",
     data: { regionCode: regionCode },
     success: function (data) { 
         var chart = $("#container").highcharts();
         categoriesData.push(data.monthyear0, data.monthyear1, data.monthyear2, data.monthyear3, data.monthyear4, data.monthyear5, data.monthyear6, data.monthyear7, data.monthyear8, data.monthyear9, data.monthyear10, data.monthyear11);

         seriesData = [parseInt(data.month0), parseInt(data.month1), parseInt(data.month2), parseInt(data.month3), parseInt(data.month4), parseInt(data.month5), parseInt(data.month6), parseInt(data.month7), parseInt(data.month8), parseInt(data.month9), parseInt(data.month10), parseInt(data.month11)];
         subtitleText = data.subtitleText;
         chart.setTitle(null, { text: subtitleText});
         chart.xAxis[0].setCategories(categoriesData); 
          chart.addSeries({ name: name, data: seriesData });
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