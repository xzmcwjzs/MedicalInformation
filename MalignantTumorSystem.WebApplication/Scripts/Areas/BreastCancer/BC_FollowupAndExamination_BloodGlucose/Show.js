$(function () {
    //Jquery版本的ajax异步请求
    $.ajax({
        cache: false,
        async: false,
        url: "/BreastCancer/BC_FollowupAndExamination_BloodGlucose/ShowText",
        type: "post",
        data: { id: id },
        dataType: "json",
        success: function (data) {
            if (data != "" && data != null) {
                var startDate = data.start;
                var endDate = data.end;
                var dateArr = new Array();

                var bloodArr1 = new Array();
                var bloodArr2 = new Array();
                var bloodArr3 = new Array();
                var bloodArr4 = new Array();
                var bloodArr5 = new Array();
                var bloodArr6 = new Array();
                var timeArr = new Array();

                for (var i = 0; i < 7; i++) {
                    var dd = new Date(startDate);
                    dd.setDate(dd.getDate() + i);
                    var y = dd.getFullYear();
                    var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;//获取当前月份的日期
                    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
                    dateArr[i] = y + "-" + m + "-" + d;
                }
                var seriesData = data.res;
                var weekArray = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");

                for (var i = 0; i < seriesData.length; i++) {
                    if (seriesData[i].types == "1") {
                        bloodArr1.push(parseInt(seriesData[i].bloodsugar));
                    } else if (seriesData[i].types == "2") {
                        bloodArr2.push(parseInt(seriesData[i].bloodsugar));
                    } else if (seriesData[i].types == "3") {
                        bloodArr3.push(parseInt(seriesData[i].bloodsugar));
                    } else if (seriesData[i].types == "4") {
                        bloodArr4.push(parseInt(seriesData[i].bloodsugar));
                    } else if (seriesData[i].types == "5") {
                        bloodArr5.push(parseInt(seriesData[i].bloodsugar));
                    } else {
                        bloodArr6.push(parseInt(seriesData[i].bloodsugar));
                    }

                    var date = new Date(parseInt(seriesData[i].data.replace("/Date(", "").replace(")/", ""), 10));
                    var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                    var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                    timeArr.push(date.getFullYear() + "-" + a1 + "-" + a2 + "\n" + weekArray[date.getDay()]);
                }
                var myChart = echarts.init(document.getElementById('container'));
                var legendArr = new Array("空腹血糖", "餐前血糖", "餐后血糖", "睡前血糖", "随机血糖", "糖化血红蛋白(%)");


                myChart.showLoading({
                    text: '图表数据正在努力加载...'
                });

                option = {
                    title: {
                        text: '血糖监测',
                        subtext: '最近一周内的数据'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: []
                    },
                    grid: {
                        x: 80,
                        y: 60,
                        x2: 80,
                        y2: 60,
                        width: 850,
                        height: 400,
                        borderWidth: 1,
                        borderColor: '#ccc'
                    },
                    toolbox: {
                        show: true,
                        orient: 'horizontal',
                        x: 'right',
                        y: 'top',
                        color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
                        backgroundColor: 'rgba(0,0,0,0)',
                        borderColor: '#ccc',
                        borderWidth: 0,
                        padding: 5,
                        showTitle: true,
                        feature: {
                            mark: {
                                show: true,
                                title: {
                                    mark: '辅助线-开关',
                                    markUndo: '辅助线-删除',
                                    markClear: '辅助线-清空'
                                },
                                lineStyle: {
                                    width: 1,
                                    color: '#1e90ff',
                                    type: 'dashed'
                                }
                            },
                            saveAsImage: {
                                show: true,
                                title: '保存为图片',
                                type: 'png',
                                lang: ['点击保存']
                            }
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: true,
                        data: [],
                        name: '日期',
                        axisLabel: {
                            interval: 0
                        }
                    },
                    yAxis: {
                        type: 'value',
                        min: 0,
                        max: 20,
                        splitNumber: 10,
                        name: 'mmol/L',
                        nameLocation: 'start'
                    },
                    series: [
            {
                name: '空腹血糖',
                type: 'line',
                data: [],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            },
            {
                name: '餐前血糖',
                type: 'line',
                data: [],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            },
            {
                name: '餐后血糖',
                type: 'line',
                data: [],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            },
            {
                name: '睡前血糖',
                type: 'line',
                data: [],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            },
            {
                name: '随机血糖',
                type: 'line',
                data: [],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            },
            {
                name: '糖化血红蛋白(%)',
                type: 'line',
                data: [],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            }
                    ]
                };
                option.title.subtext = "最近一周内的数据(" + dateArr[0] + "到" + dateArr[6] + ")";
                option.legend.data = legendArr;
                option.xAxis.data = timeArr;
                option.series[0].data = bloodArr1;
                option.series[1].data = bloodArr2;
                option.series[2].data = bloodArr3;
                option.series[3].data = bloodArr4;
                option.series[4].data = bloodArr5;
                option.series[5].data = bloodArr6;
                myChart.hideLoading();
                myChart.setOption(option);
            }
        }
    });
     
})
 

