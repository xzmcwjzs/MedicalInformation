$(function () {
    //Jquery版本的ajax异步请求
    $.ajax({
        cache: false,
        async: false,
        url: "/BreastCancer/BC_FollowupAndExamination_BloodPressure/ShowText",
        type: "post",
        data: { id: id },
        dataType: "json",
        success: function (data) { 
            if (data != "" && data != null) { 
                var startDate = data.start;
                var endDate = data.end; 
                var dateArr = new Array();

                var ssyArr = new Array(); var szyArr = new Array(); var xlArr = new Array(); var timeArr = new Array();

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
                    ssyArr.push(parseInt(seriesData[i].ssy));
                    szyArr.push(parseInt(seriesData[i].szy));
                    xlArr.push(parseInt(seriesData[i].heart));

                    var date = new Date(parseInt(seriesData[i].data.replace("/Date(", "").replace(")/", ""), 10));
                    var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                    var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                    timeArr.push(date.getFullYear() + "-" + a1 + "-" + a2 + "\n" + weekArray[date.getDay()]);
                } 
                var myChart = echarts.init(document.getElementById('container'));
                var legendArr = new Array("收缩压", "舒张压", "心率");


                myChart.showLoading({
                    text: '图表数据正在努力加载...'
                });

                option = {
                    title: {
                        text: '血压监测',
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
                        max: 200,
                        splitNumber: 20,
                        name: 'mmHg',
                        nameLocation: 'start'
                    },
                    series: [
                        {
                            name: '收缩压',
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
                            name: '舒张压',
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
                            name: '心率',
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
                option.series[0].data = ssyArr;
                option.series[1].data = szyArr;
                option.series[2].data = xlArr;
                myChart.hideLoading();
                myChart.setOption(option);
            }
        }
    });
     
    //var url = "/BreastCancer/BC_FollowupAndExamination_BloodPressure/ShowText";
    //var parameter = "id=" + id;
    //sendAsyncRequest(url, parameter, loadCallBack);

})
//睡眠 功能
function sleep(numberMillis) {
    var now = new Date();
    var exitTime = now.getTime() + numberMillis;
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime)
            return;
    }
}

//------------------------原生js的ajax异步请求-------------------------
//（1）根据不同浏览器使用对应的方式来创建异步对象
var xhr;
function createXmlHttpRequest() {
    xhr = false;
    try {
        xhr = new ActiveXObject("Msxml2.XMLHTTP");//iemsxml3.0+ 高版本ie浏览器 受msxml3.dll+支持
    } catch (e) {
        try {
            xhr = new ActiveXObject("Microsoft.XMLHTTP"); //iemsxml2.6 低版本ie浏览器  
        } catch (e2) {
            xhr = false;
        }
    }
    if (!xhr && typeof XMLHttpRequest != 'undefined')//由于XMLHttpRequest对象在IE下是由ActiveXObject对象引入 而在ff下直接就能引入(默认被初始化)
        //typeof XMLHttpRequest != 'undefined' 字面理解是XMLHttpRequest的类型并不是为定义的 这也可以间接判断当前浏览器是不是IE
    {
        xhr = new XMLHttpRequest();
    }
    return xhr;
}

//（2）用于发送异步请求的方法
function sendAsyncRequest(url,parameter,callback) {
    createXmlHttpRequest();
    if (parameter == null) {//get请求
        //设置一个事件处理器，当XMLHttp状态发生变化，就会出发该事件处理器，由他调用callback指定的javascript函数
        xhr.open("GET", url, true);//设置请求参数，此处为get方法，则send方法应设为null，若需传大量参数并且不使用缓存时，涉及用户输入传参时，post更可靠
        //true表示同步 false表示异步  方法一： xhr.open("GET","demo.asp?t=" + Math.random(),true);避免缓存
        xhr.sendRequestHeader("If-Modified-Since", "0");//方法二：设置浏览器不适用缓存
        xhr.onreadystatechange = callback;
        xhr, send(null);
    } else {//post请求
        xhr.open("POST", url, true);
        xhr.sendRequestHeader("Content-Type", "application/x-www-form-urlencoded");//设置post的请求报文数据格式 否则数据无法正常接收
        xhr.onreadystatechange = callback;
        xhr.send(parameter);
    }
}
//（3）调用方法
//（4）指定回调方法
function loadCallBack() {
    if (xhr.readyState == 4) {//当服务器已经将数据发回浏览器了，其中0表示请求未初始化，1表示服务器连接已建立，2表示请求已接收，3表示请求处理中，4表示请求已完成，且响应已就绪
        if (xhr.status == 200) {//如果返回的响应报文的状态码为200时，才代表服务器运行正确，404表示页面未找到
            var data = xhr.responseText;                   //xhr.responseText 获得服务器响应的数据
            if (data != null && data != "") {
                alert(data);
            }
        }
    }
}
 
