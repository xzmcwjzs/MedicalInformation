function GetDateStr(DayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate() + DayCount);//获取DayCount天后的日期
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;//获取当前月份的日期
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
    return y + "-" + m + "-" + d; 
}

$(function () {
     var myChart = echarts.init(document.getElementById('container'));
     var legendArr = new Array("空腹血糖", "餐前血糖", "餐后血糖","睡前血糖","随机血糖","糖化血红蛋白(%)");
     var xAxisDateArr = new Array();
    
     var nowDate = new Date().getDay();//为4 即周四 
     for (var i = 0; i < nowDate; i++) {
         var diff = i - nowDate; 
         xAxisDateArr[i] = GetDateStr(diff); 
     }
     for (var i = nowDate; i < 7; i++) {
         var diff = i - nowDate;
         xAxisDateArr[i] = GetDateStr(diff); 
     }


     myChart.showLoading({
         text:'图表数据正在努力加载...'
     });

    option = {
        title: {
            text: '血压监测',
            subtext:'最近一周内的数据'
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
            orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
            // 'horizontal' ¦ 'vertical'
            x: 'right',                // 水平安放位置，默认为全图右对齐，可选为：
            // 'center' ¦ 'left' ¦ 'right'
            // ¦ {number}（x坐标，单位px）
            y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
            // 'top' ¦ 'bottom' ¦ 'center'
            // ¦ {number}（y坐标，单位px）
            color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
            backgroundColor: 'rgba(0,0,0,0)', // 工具箱背景颜色
            borderColor: '#ccc',       // 工具箱边框颜色
            borderWidth: 0,            // 工具箱边框线宽，单位px，默认为0（无边框）
            padding: 5,                // 工具箱内边距，单位px，默认各方向内边距为5，
            showTitle: true,
            feature: {
                mark : {
                    show : true,
                    title : {
                        mark : '辅助线-开关',
                        markUndo : '辅助线-删除',
                        markClear : '辅助线-清空'
                    },
                    lineStyle : {
                        width : 1,
                        color : '#1e90ff',
                        type : 'dashed'
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
            name: '日期'
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 20,
            splitNumber: 10,
            name: 'mmol/L',
            nameLocation: 'start',

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

    option.legend.data = legendArr; 
    option.xAxis.data = xAxisDateArr;

    myChart.hideLoading();
    myChart.setOption(option);
})