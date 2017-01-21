$(function () { 
    $("#name").autocomplete('/Data/NameMatch', {
        multiple: false,   //是否允许搜索框追加
        width: 800,
        max: 2000,
        position: 'absolute',
        matchContains: true,
        autoFill: false,
        delay: 40,
        dataType: "json", //json类型
        parse: function (data) {
            return $.map(data, function (row) {
                return {
                    data: row,
                    value: row.resident_name,
                    result: row.resident_name
                }
            });
        },
        formatItem: function (item) {
            return item.resident_name + "&nbsp;&nbsp;" + item.age1 + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + item.community_code1 + item.permanent_home_address;
        },

    });

    function log(event, data, formatted) {
        //获取家庭常住地址
        var CommunityCode = data.community_code;
        $("#perment_community_address").val(data.permanent_home_address);
        if (CommunityCode != "") {
            if (CommunityCode.length == 2) {
                $("#ddlProvince").val(CommunityCode.substring(0, 2));
            }
            else if (CommunityCode.length == 4) {
                $("#ddlProvince").val(CommunityCode.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + CommunityCode.substring(0, 2),
                 function (datas) {
                     dat1 = eval(datas);
                     $("#ddlCity").empty();
                     $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity").val(CommunityCode.substring(0, 4));
                     }
                 })
            }
            else if (CommunityCode.length == 6) {
                $("#ddlProvince").val(CommunityCode.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + CommunityCode.substring(0, 2),
                 function (data1) {
                     dat1 = eval(data1);
                     $("#ddlCity").empty();
                     $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity").val(CommunityCode.substring(0, 4));
                     }
                 })
                //-----区/县-----
                $.post("/Data/County?code=" + CommunityCode.substring(0, 4),
                 function (data2) {
                     dat2 = eval(data2);
                     $("#ddlCounty").empty();
                     $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat2 != "") {
                         for (var i1 = 0; i1 < dat2.length; i1++) {
                             $("#ddlCounty").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                         }
                         $("#ddlCounty").val(CommunityCode.substring(0, 6));
                     }
                 })
            }
            else if (CommunityCode.length == 9) {
                $("#ddlProvince").val(CommunityCode.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + CommunityCode.substring(0, 2),
                 function (data1) {
                     dat1 = eval(data1);
                     $("#ddlCity").empty();
                     $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity").val(CommunityCode.substring(0, 4));
                     }
                 })
                //-----区/县-----
                $.post("/Data/County?code=" + CommunityCode.substring(0, 4),
                 function (data2) {
                     dat2 = eval(data2);
                     $("#ddlCounty").empty();
                     $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat2 != "") {
                         for (var i1 = 0; i1 < dat2.length; i1++) {
                             $("#ddlCounty").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                         }
                         $("#ddlCounty").val(CommunityCode.substring(0, 6));
                     }
                 })

                //-----镇-----
                $.post("/Data/Street?code=" + CommunityCode.substring(0, 6),
                 function (data3) {
                     dat3 = eval(data3);
                     $("#ddlStreet").empty();
                     $("#ddlStreet").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat3 != "") {
                         for (var i2 = 0; i2 < dat3.length; i2++) {
                             $("#ddlStreet").append("<option value=" + dat3[i2].code + ">" + dat3[i2].name + "</option>");
                         }
                         $("#ddlStreet").val(CommunityCode);
                     }
                 })

            }
            else if (CommunityCode.length == 12) {
                $("#ddlProvince").val(CommunityCode.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + CommunityCode.substring(0, 2),
                 function (data1) {
                     dat1 = eval(data1);
                     $("#ddlCity").empty();
                     $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity").val(CommunityCode.substring(0, 4));

                     }
                 })
                //-----区/县-----
                $.post("/Data/County?code=" + CommunityCode.substring(0, 4),
                 function (data2) {
                     dat2 = eval(data2);
                     $("#ddlCounty").empty();
                     $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat2 != "") {
                         for (var i1 = 0; i1 < dat2.length; i1++) {
                             $("#ddlCounty").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                         }
                         $("#ddlCounty").val(CommunityCode.substring(0, 6));
                     }

                 })
                //-----镇-----
                $.post("/Data/Street?code=" + CommunityCode.substring(0, 6),
                 function (data3) {
                     dat3 = eval(data3);
                     $("#ddlStreet").empty();
                     $("#ddlStreet").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat3 != "") {
                         for (var i2 = 0; i2 < dat3.length; i2++) {
                             $("#ddlStreet").append("<option value=" + dat3[i2].code + ">" + dat3[i2].name + "</option>");
                         }
                         $("#ddlStreet").val(CommunityCode.substring(0, 9));
                     }
                 })

                //-----村-----
                $.post("/Data/Community?code=" + CommunityCode.substring(0, 9),
                 function (data4) {
                     dat4 = eval(data4);
                     $("#ddlCommunity").empty();
                     $("#ddlCommunity").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat4 != "") {
                         for (var i3 = 0; i3 < dat4.length; i3++) {
                             $("#ddlCommunity").append("<option value=" + dat4[i3].code + ">" + dat4[i3].name + "</option>");
                         }
                         $("#ddlCommunity").val(CommunityCode);
                     }
                 })
            }
        }

        $("#id_card_number").val(data.id_card_number);

        //由出生日期推算其年龄
        if (data.birth_date != "") {
            var date = new Date(parseInt(data.birth_date.replace("/Date(", "").replace(")/", ""), 10));
            var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

            $("#birth_date").val(date.getFullYear() + '-' + a1 + '-' + a2);
            var dates1 = new Date();
            var year1 = dates1.getFullYear() - date.getFullYear();
            if (year1 > 0) {
                $("#age").val(year1 + "岁");
            } else if (year1 == 0) {
                var month1 = dates1.getMonth() - a1;
                if (month1 > 0) {
                    $("#age").val(month1 + "月");
                } else if (month == 0) {
                    var day1 = dates1.getDay() - a2;
                    if (day1 > 0) {
                        $("#age").val(day1 + "天");
                    }
                }
            }
        }

        if (data.individual_phone != '') {
            $("#txtIndividualPhone").val(data.individual_phone);
        } 
        $("input[name=" + "sex" + "][value=" + data.sex + "]").attr("checked", "checked");
        $("#resident_id").val(data.resident_id);
        $("#txtcontact_name").val(data.contact_name);
        $("#txtcontact_phone").val(data.contact_phone);
        $("#txtEmail").val(data.email);
        $("#zipCode").val(data.post_code);
        $("#ddlcontact_my_relationship").val(data.contact_my_relationship);
           
        //-------------------------------------------身份证输入后 查询是否有血压监测--------------------------------------------------------------------------------------------------

        var ss1 = new Array();
        var ss2 = new Array();
        var ss3 = new Array();
        $.post("/BreastCancer/BC_FollowupAndExamination_BloodGlucose/ShowText2?id_card_number=" + $("#id_card_number").val(),
       function (datas) {
           if (datas != ""&&datas!=null) {
               var startDate = datas.start;
               var endDate = datas.end;
               var dateArr = new Array();

               var bloodArr1 = new Array();
               var bloodArr2 = new Array();
               var bloodArr3= new Array();
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
               var seriesData = datas.res;
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
                   timeArr.push(date.getFullYear()+"-"+a1+"-"+a2+"\n"+weekArray[date.getDay()]);
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
               option.title.subtext = "最近一周内的数据(" + dateArr[0] + "到" + dateArr[6]+")";
               option.legend.data = legendArr;
               //option.xAxis.data = dateArr;
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
            
       }); 
    }

    $("#name").result(log).click(function () {
        $(this).prev().search();
    });


    //---------------------------------------------------身份证号验证信息 身份证号验证  娄帅------------------------------------------------
    $("#id_card_number").blur(
        function () {
            var s = $("#id_card_number").val();
            if (s != "") {
                if (s.length == 18) {
                    num = s.toUpperCase();
                    var len, re;
                    re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
                    var arrSplit = num.match(re);

                    //检查生日日期是否正确 
                    var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
                    var bGoodDay;
                    bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
                    if (!bGoodDay) {
                        alert('输入的身份证号码中出生日期不对！');
                        $("#id_card_number").val("");
                        $("#birth_date").val("");
                        $("#age").val("");
                    }
                    else {
                        var valnum;
                        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                        var nTemp = 0, i;
                        for (i = 0; i < 17; i++) {
                            nTemp += num.substr(i, 1) * arrInt[i];
                        }
                        valnum = arrCh[nTemp % 11];
                        if (valnum != num.substr(17, 1)) {
                            alert('您输入的二代身份证号码有误，请检查后重新输入！');
                            $("#id_card_number").val("");
                            $("#birth_date").val("");
                            $("#age").val("");

                        }
                        else {
                            //根据身份证号得到个人信息
                            $.post("/Data/GetDataByIdCardNumber?id_card_number=" + $("#id_card_number").val(),
                                function (data) {
                                    dat = eval(data);
                                    if (dat != "") {
                                        $("#name").val(dat[0].resident_name);
                                        //获取家庭常住地址
                                        var CommunityCode = dat[0].community_code;
                                        $("#perment_community_address").val(dat[0].permanent_home_address);
                                        if (CommunityCode != "") {
                                            if (CommunityCode.length == 2) {
                                                $("#ddlProvince").val(CommunityCode.substring(0, 2));
                                            }
                                            else if (CommunityCode.length == 4) {
                                                $("#ddlProvince").val(CommunityCode.substring(0, 2));
                                                //-----市-----
                                                $.post("/Data/City?code=" + CommunityCode.substring(0, 2),
                                                 function (datas) {
                                                     dat1 = eval(datas);
                                                     $("#ddlCity").empty();
                                                     $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                                                     if (dat1 != "") {
                                                         for (var i = 0; i < dat1.length; i++) {
                                                             $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                         }
                                                         $("#ddlCity").val(CommunityCode.substring(0, 4));
                                                     }
                                                 })
                                            }
                                            else if (CommunityCode.length == 6) {
                                                $("#ddlProvince").val(CommunityCode.substring(0, 2));
                                                //-----市-----
                                                $.post("/Data/City?code=" + CommunityCode.substring(0, 2),
                                                 function (data1) {
                                                     dat1 = eval(data1);
                                                     $("#ddlCity").empty();
                                                     $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                                                     if (dat1 != "") {
                                                         for (var i = 0; i < dat1.length; i++) {
                                                             $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                         }
                                                         $("#ddlCity").val(CommunityCode.substring(0, 4));
                                                     }
                                                 })
                                                //-----区/县-----
                                                $.post("/Data/County?code=" + CommunityCode.substring(0, 4),
                                                 function (data2) {
                                                     dat2 = eval(data2);
                                                     $("#ddlCounty").empty();
                                                     $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                                                     if (dat2 != "") {
                                                         for (var i1 = 0; i1 < dat2.length; i1++) {
                                                             $("#ddlCounty").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                                                         }
                                                         $("#ddlCounty").val(CommunityCode.substring(0, 6));
                                                     }
                                                 })
                                            }
                                            else if (CommunityCode.length == 9) {
                                                $("#ddlProvince").val(CommunityCode.substring(0, 2));
                                                //-----市-----
                                                $.post("/Data/City?code=" + CommunityCode.substring(0, 2),
                                                 function (data1) {
                                                     dat1 = eval(data1);
                                                     $("#ddlCity").empty();
                                                     $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                                                     if (dat1 != "") {
                                                         for (var i = 0; i < dat1.length; i++) {
                                                             $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                         }
                                                         $("#ddlCity").val(CommunityCode.substring(0, 4));
                                                     }
                                                 })
                                                //-----区/县-----
                                                $.post("/Data/County?code=" + CommunityCode.substring(0, 4),
                                                 function (data2) {
                                                     dat2 = eval(data2);
                                                     $("#ddlCounty").empty();
                                                     $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                                                     if (dat2 != "") {
                                                         for (var i1 = 0; i1 < dat2.length; i1++) {
                                                             $("#ddlCounty").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                                                         }
                                                         $("#ddlCounty").val(CommunityCode.substring(0, 6));
                                                     }
                                                 })

                                                //-----镇-----
                                                $.post("/Data/Street?code=" + CommunityCode.substring(0, 6),
                                                 function (data3) {
                                                     dat3 = eval(data3);
                                                     $("#ddlStreet").empty();
                                                     $("#ddlStreet").append("<option value=" + "" + ">==请选择==</option>");
                                                     if (dat3 != "") {
                                                         for (var i2 = 0; i2 < dat3.length; i2++) {
                                                             $("#ddlStreet").append("<option value=" + dat3[i2].code + ">" + dat3[i2].name + "</option>");
                                                         }
                                                         $("#ddlStreet").val(CommunityCode);
                                                     }
                                                 })
                                            }
                                            else if (CommunityCode.length == 12) {
                                                $("#ddlProvince").val(CommunityCode.substring(0, 2));
                                                //-----市-----
                                                $.post("/Data/City?code=" + CommunityCode.substring(0, 2),
                                                 function (data1) {
                                                     dat1 = eval(data1);
                                                     $("#ddlCity").empty();
                                                     $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                                                     if (dat1 != "") {
                                                         for (var i = 0; i < dat1.length; i++) {
                                                             $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                         }
                                                         $("#ddlCity").val(CommunityCode.substring(0, 4));

                                                     }
                                                 })
                                                //-----区/县-----
                                                $.post("/Data/County?code=" + CommunityCode.substring(0, 4),
                                                 function (data2) {
                                                     dat2 = eval(data2);
                                                     $("#ddlCounty").empty();
                                                     $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                                                     if (dat2 != "") {
                                                         for (var i1 = 0; i1 < dat2.length; i1++) {
                                                             $("#ddlCounty").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                                                         }
                                                         $("#ddlCounty").val(CommunityCode.substring(0, 6));
                                                     }
                                                 })
                                                //-----镇-----
                                                $.post("/Data/Street?code=" + CommunityCode.substring(0, 6),
                                                 function (data3) {
                                                     dat3 = eval(data3);
                                                     $("#ddlStreet").empty();
                                                     $("#ddlStreet").append("<option value=" + "" + ">==请选择==</option>");
                                                     if (dat3 != "") {
                                                         for (var i2 = 0; i2 < dat3.length; i2++) {
                                                             $("#ddlStreet").append("<option value=" + dat3[i2].code + ">" + dat3[i2].name + "</option>");
                                                         }
                                                         $("#ddlStreet").val(CommunityCode.substring(0, 9));
                                                     }
                                                 })

                                                //-----村-----
                                                $.post("/Data/Community?code=" + CommunityCode.substring(0, 9),
                                                 function (data4) {
                                                     dat4 = eval(data4);
                                                     $("#ddlCommunity").empty();
                                                     $("#ddlCommunity").append("<option value=" + "" + ">==请选择==</option>");
                                                     if (dat3 != "") {
                                                         for (var i3 = 0; i3 < dat4.length; i3++) {
                                                             $("#ddlCommunity").append("<option value=" + dat4[i3].code + ">" + dat4[i3].name + "</option>");
                                                         }
                                                         $("#ddlCommunity").val(CommunityCode);
                                                     }
                                                 })
                                            }
                                        }
                                        //由出生日期推算其年龄
                                        if (dat[0].birth_date != "") {
                                            var date = new Date(parseInt(dat[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                                            var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                            var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                                            $("#birth_date").val(date.getFullYear() + '-' + a1 + '-' + a2);
                                            var dates1 = new Date();
                                            var year1 = dates1.getFullYear() - date.getFullYear();
                                            if (year1 > 0) {
                                                $("#age").val(year1 + "岁");
                                            } else if (year1 == 0) {
                                                var month1 = dates1.getMonth() - a1;
                                                if (month1 > 0) {
                                                    $("#age").val(month1 + "月");
                                                } else if (month == 0) {
                                                    var day1 = dates1.getDay() - a2;
                                                    if (day1 > 0) {
                                                        $("#age").val(day1 + "天");
                                                    }
                                                }
                                            }
                                        }

                                        if (dat[0].individual_phone != '') {
                                            $("#txtIndividualPhone").val(dat[0].individual_phone);
                                            $("#phone").val(dat[0].individual_phone);
                                        }
                                        $("input[name=" + "sex" + "][value=" + dat[0].sex + "]").attr("checked", "checked");
                                        $("#resident_id").val(dat[0].resident_id);
                                        $("#txtcontact_name").val(dat[0].contact_name);
                                        $("#txtcontact_phone").val(dat[0].contact_phone);
                                        $("#txtEmail").val(dat[0].email);

                                        $("#nationality").val(dat[0].nationality_name);
                                        $("#zipCode").val(dat[0].post_code);
                                        $("#ddlPermanent_address_type").val(dat[0].permanent_address_type);
                                        $("#ddlABOBloodType").val(dat[0].abo_blood_group);
                                        $("#ddlcontact_my_relationship").val(dat[0].contact_my_relationship);
                                        $("#ddlNation").val(dat[0].nation);
                                        $("#ddlEducationQualification").val(dat[0].education_qualification);
                                        $("#ddlMarrigeState").val(dat[0].marital_status);
                                        $("#ddlOccupationSituation").val(dat[0].occupation_situation);
                                    }
                                })

                            //-------------------------------------------身份证输入后 查询是否有血压监测--------------------------------------------------------------------------------------------------

                            var ss1 = new Array();
                            var ss2 = new Array();
                            var ss3 = new Array();
                            $.post("/BreastCancer/BC_FollowupAndExamination_BloodGlucose/ShowText2?id_card_number=" + $("#id_card_number").val(),
                           function (datas) {
                               if (datas != "" && datas != null) {
                                   var startDate = datas.start;
                                   var endDate = datas.end;
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
                                   var seriesData = datas.res;
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
                                   option.title.subtext = "最近一周内的数据(" + dateArr[0] + "到" + dateArr[6] + ")";
                                   option.legend.data = legendArr;
                                   //option.xAxis.data = dateArr;
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
                           });

                            //---------------------------------------------------------------------------------------------------------------------------------------------

                        }
                    }
                } else {
                    alert("二代身份证号码长度为18位，请检查后重新输入！");
                    $("#id_card_number").val("");
                    $("#birth_date").val("");
                    $("#age").val("");
                }
            }
        })

    //----------------------------------------------------合并血型  娄帅 2015-08-11------------------------------------------------------------

    //==============================联系人与本人的关系==============================
    $.post("/Data/Share_Data?type=" + "chronic_society_relation",
       function (data) {
           dat = eval(data);
           $("#ddlcontact_my_relationship").empty();
           $("#ddlcontact_my_relationship").append("<option value=" + "" + ">=请选择=</option>");
           if (dat != "") {
               for (var i = 0; i < dat.length; i++) {
                   $("#ddlcontact_my_relationship").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
               }
           }
       })
    //=====================================================血压======================================================

    $("#ssy0").keyup(function () {
        var a = $("#ssy0").val();
        if (a != "") {
            if (a < 200 && a > 100) {
                document.getElementById("K_ssy0").value = parseFloat(a * 0.1333 + 1).toFixed(1);
            }
        }


    });

    $("#szy0").keyup(function () {
        var a = $("#szy0").val();
        if (a != "") {
            if (a > 60 && a < 140) {
                document.getElementById("K_szy0").value = parseFloat(a * 0.1333 + 1).toFixed(1);
            }
        }

    });

    $("#K_ssy0").keyup(function () {
        var a = $("#K_ssy0").val();
        if (a != "") {
            if (a < 25 && a > 10) {
                document.getElementById("ssy0").value = parseInt(a / 0.1333 + 1);
            }
        }


    });

    $("#K_szy0").keyup(function () {
        var a = $("#K_szy0").val();
        if (a != "") {
            if (a < 15 && a > 2) {
                document.getElementById("szy0").value = parseInt(a / 0.1333 + 1);
            }
        }

    });


    //------------------------------------------------改变第一个日期 改变图表   娄帅 2015-11-19-------------------------------------------------

    //------------------------------------------------------------------------------------------------------------------------------------

})


var times = new Date();
var year = times.getFullYear();
var months = times.getMonth() + 1;
var days = times.getDate();
var hour = times.getHours();
var secord = times.getMinutes();

if (months < 10) {
    months = "0" + months;
}
if (days < 10) {
    days = "0" + days;
}

var today = year + '-' + months + '-' + days;

var a = 1;
function adds() {
    if ($('#date' + (a - 1) + '').val() == "") {
        alert("请先选择日期");
        $('#ttime' + (a - 1) + '').val("");
    } else {
        //alert("111");
        if (a < 24) {
            //----------------------------增加一行-----------------------------
            $('#ttime' + (a - 1) + '').unbind("change");
            $('#ttime' + (a - 1) + '').one('change', function () {
                if ($('#ttime' + (a - 1) + '').val() != "") {
                    $('#Tr' + a + '').after('<tr id="Tr' + (a + 1) + '">' +
                        '<td colspan="12">' +
                            '<table style="width:100%">' +
                                '<tr>' +
                                    '<td class="auto-style138">日期</td>' +
                                    '<td class="auto-style139">' +
                                        '<input type="text" id="date' + a + '" name="date' + a + '" style="padding-top: 2px; width: 80px" onfocus="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + ' })"/>' +
                                    '</td>' +
                                    '<td class="auto-style138">时间</td>' +
                                    '<td class="auto-style134">' +
                                        '<select id="ttime' + a + '" name="ttime' + a + '" onchange="adds()">' +
                                            '<option value="">=请选择=</option>' +
                                        '</select>' +
                                    '</td>' +
                                   ' <td class="auto-style138">血压</td>' +
                                    '<td class="auto-style135">' +
                                        '<input type="text" id="ssy' + a + '" style="height: 18px; width: 30px;" name="ssy' + a + '" />/ ' +
                                        '<input type="text" id="szy' + a + '" style="height: 18px; width: 30px;" name="szy' + a + '" />mmHg( ' +

                                        '<input type="text" id="K_ssy' + a + '" style="height: 18px; width: 30px;" name="K_ssy' + a + '" />/' +
                                        '<input type="text" id="K_szy' + a + '" style="height: 18px; width: 30px;" name="K_szy' + a + '" />kPa' +
                                        ')</td>' +
                                    '<td class="auto-style138">心率</td>' +
                                    '<td class="auto-style140">' +
                                        '<input type="text" id="heart' + a + '" name="heart' + a + '" style="padding-top: 2px; width: 40px" />次/分钟' +
                                    '</td>' +
                                    '<td class="auto-style137">测量地点</td>' +
                                    '<td class="auto-style19">' +
                                        '<select id="place' + a + '" name="place' + a + '" style="width: 75px">' +
                                            '<option value="">=请选择=</option>' +
                                            '<option value="1">家中</option>' +
                                            '<option value="2">社区</option>' +
                                            '<option value="3">医院</option>' +
                                            '<option value="4">办公室</option>' +
                                        '</select>' +
                                    '</td>' +
                                    '<td class="auto-style137">测量状态</td>' +
                                    '<td class="auto-style19">' +
                                        '<select id="state' + a + '" name="state' + a + '" style="width: 75px">' +
                                            '<option value="">=请选择=</option>' +
                                            '<option value="1">正常</option>' +
                                            '<option value="2">酒后3小时内</option>' +
                                            '<option value="3">酒后3-6小时</option>' +
                                            '<option value="4">酒后6小时后</option>' +
                                            '<option value="5">运动后</option>' +
                                            '<option value="6">用药后</option>' +
                                            '<option value="7">停药后</option>' +
                                            '<option value="8">换药后</option>' +
                                            '<option value="9">兴奋</option>' +
                                            '<option value="10">郁闷</option>' +
                                        '</select>' +
                                    '</td>' +
                                '</tr>' +
                            '</table>' +
                        '</td></tr>');

                    $('#ssy' + (a - 1) + '').keyup(function () {
                        var a1 = $('#ssy' + (a - 2) + '').val();
                        if (a1 != "") {
                            $('#K_ssy' + (a - 2) + '').val(parseFloat(a1 * 0.1333 + 1).toFixed(1));
                        }
                    });

                    $('#szy' + (a - 1) + '').keyup(function () {
                        var a1 = $('#szy' + (a - 2) + '').val();
                        if (a1 != "") {
                            $('#K_szy' + (a - 2) + '').val(parseFloat(a1 * 0.1333 + 1).toFixed(1));
                        }
                    });

                    $('#K_ssy' + (a - 1) + '').keyup(function () {
                        var a1 = $('#K_ssy' + (a - 2) + '').val();
                        if (a1 != "") {
                            $('#ssy' + (a - 2) + '').val(parseFloat(parseInt(a1 / 0.1333 + 1)));

                        }
                    });

                    $('#K_szy' + (a - 1) + '').keyup(function () {
                        var a1 = $('#K_szy' + (a - 2) + '').val();
                        if (a1 != "") {
                            $('#szy' + (a - 2) + '').val(parseFloat(parseInt(a1 / 0.1333 + 1)));
                        }
                    });

                    for (var a1 = 1; a1 <= 24; a1++) {
                        if ((24 - a1).toString().length == 1) {
                            $('#ttime' + a + '').append("<option value=" + "0" + (24 - a1) + ":30>" + "0" + (24 - a1) + ":30</option>");
                            $('#ttime' + a + '').append("<option value=" + "0" + (24 - a1) + ":00>" + "0" + (24 - a1) + ":00</option>");
                        }
                        else {
                            $('#ttime' + a + '').append("<option value=" + (24 - a1) + ":30>" + (24 - a1) + ":30</option>");
                            $('#ttime' + a + '').append("<option value=" + (24 - a1) + ":00>" + (24 - a1) + ":00</option>");
                        }
                        if ((24 - a1) < 1) {
                            break;
                        }
                    }
                    //------------------------------------------------改变日期 改变图表  娄帅 2015-11-19-------------------------------------------------
                    
                    //------------------------------------------------------------------------------------------------------------------------------------
                }
                a++;
            })
        }
    }
}


//=======================================提交===============
function save() {
    if ($("#name").val() == "") {
        alert("姓名不能为空！")
    }
    else if ($("#ddlCommunity").val() == "") {
        alert("常住地址必须填写到社区、村或者居委会！")
    }
    else if ($("#id_card_number").val() == "") {
        alert("身份证号码不能为空！")
    }
    else if ($("#phone").val() == "") {
        alert("手机号码不能为空！")
    } else if ($("#date0").val() == "") {
        alert("血糖监测日期不能为空！")
    }
    else if ($("#ttime0").val() == "") {
        alert("血糖监测时间不能为空！")
    } else if ($("#type0").val() == "") {
        alert("血糖类型不能为空！")
    }
    else {
        $("#bt1").attr("disabled", "disabled");
        $.post("/BreastCancer/BC_FollowupAndExamination_BloodGlucose/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
                $("#form1").serialize(),
                function (msgs) {
                    var msg = msgs.split(',');
                    alert(msg[0]);
                    window.close();
                })
    }
}