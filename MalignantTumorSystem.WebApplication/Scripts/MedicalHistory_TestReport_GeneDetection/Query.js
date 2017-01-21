$(function () {

    //===============================================================修改内容 打开显示======================================================================
    $.post("/MedicalHistory_TestReport_GeneDetection/Show?id=" + id,
               function (data) {
                   dts = eval(data);
                   if (dts != "") {
                       $("#name").val(dts[0].names);
                       $("input[name=" + "sex" + "][value=" + dts[0].sex + "]").attr("checked", "checked");
                       $("#id_card_number").val(dts[0].id_card_number);
                       //$("#id_card_number").attr("readonly", "readonly");
                       var s = dts[0].id_card_number;
                       if (dts[0].birth_date != "") {
                           var date = new Date(parseInt(dts[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].birth_date.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}
                           var dates = new Date();
                           var year = dates.getFullYear() - date.getFullYear();
                           if (year > 0) {
                               $("#age").val(year + "岁");
                           } else if (year == 0) {
                               var month = dates.getMonth() - a1;
                               if (month > 0) {
                                   $("#age").val(month + "月");
                               } else if (month == 0) {
                                   var day = dates.getDay() - a2;
                                   if (day > 0) {
                                       $("#age").val(day + "天");
                                   }
                               }
                           }
                       }

                       //家庭常住住址-------------------------------------------------------------------------------------------------------------------------
                       if (dts[0].community_code != "") {
                           var code1 = dts[0].community_code;
                           $("#ddlProvince").val(code1.substring(0, 2));
                           //-----市-----
                           $.post("/Data/City?code=" + code1.substring(0, 2),
                            function (data) {
                                dat1 = eval(data);
                                $("#ddlCity").empty();
                                $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                                if (dat1 != "") {
                                    for (var i = 0; i < dat1.length; i++) {
                                        $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                    }
                                    $("#ddlCity").val(code1.substring(0, 4));
                                }
                            })

                           //-----区/县-----
                           $.post("/Data/County?code=" + code1.substring(0, 4),
                            function (data) {
                                dat1 = eval(data);
                                $("#ddlCounty").empty();
                                $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                                if (dat1 != "") {
                                    for (var i = 0; i < dat1.length; i++) {
                                        $("#ddlCounty").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                    }
                                    $("#ddlCounty").val(code1.substring(0, 6));
                                }
                            })
                           //-------镇/村-------
                           $.post("/Data/Street?code=" + code1.substring(0, 6),
                            function (data) {
                                dat1 = eval(data);
                                $("#ddlStreet").empty();
                                $("#ddlStreet").append("<option value=" + "" + ">==请选择==</option>");
                                if (dat1 != "") {
                                    for (var i = 0; i < dat1.length; i++) {
                                        $("#ddlStreet").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                    }
                                    $("#ddlStreet").val(code1.substring(0, 9));
                                }
                            })
                           $.post("/Data/Community?code=" + code1.substring(0, 9),
                            function (data) {
                                dat1 = eval(data);
                                $("#ddlCommunity").empty();
                                $("#ddlCommunity").append("<option value=" + "" + ">==请选择==</option>");
                                if (dat1 != "") {
                                    for (var i = 0; i < dat1.length; i++) {
                                        $("#ddlCommunity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                    }
                                    $("#ddlCommunity").val(code1);
                                }
                            })
                           $("#perment_community_address").val(dts[0].address);
                       }

                       $("#phone").val(dts[0].phone);
                       $("#resident_id").val(dts[0].resident_id);
                       $("#numb").val(dts[0].samplenumber);

                       $("#sjdoctor").val(dts[0].inspect_doctor);
                       $("#jcdoctor").val(dts[0].check_doctor);
                       $("#bgdoctor").val(dts[0].report_doctor);

                       if (dts[0].inspect_time != "") {
                           var date = new Date(parseInt(dts[0].inspect_time.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].inspect_time.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}
                           $("#sjtime").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }
                       if (dts[0].report_time != "") {
                           var date = new Date(parseInt(dts[0].report_time.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].report_time.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}
                           $("#bgtime").val(date.getFullYear()+ '-' + a1 + '-' + a2);
                       }
                       if (dts[0].create_time != "") {
                           var date = new Date(parseInt(dts[0].create_time.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].create_time.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}
                           $("#create_time").val(date.getFullYear()+ '-' + a1 + '-' + a2);
                       }
                       $("#project1").val(dts[0].name1);
                       $("#res1").val(dts[0].result1);
                       $("#Text1").val(dts[0].unit1);
                       $("#Text2").val(dts[0].qujian1);
                       $("#Text3").val(dts[0].tishi1);
                       $("#Text4").val(dts[0].beizhu1);

                       $("#project2").val(dts[0].name2);
                       $("#res2").val(dts[0].result2);
                       $("#Text6").val(dts[0].unit2);
                       $("#Text7").val(dts[0].qujian2);
                       $("#Text8").val(dts[0].tishi2);
                       $("#Text9").val(dts[0].beizhu2);

                       $("#project3").val(dts[0].name3);
                       $("#res3").val(dts[0].result3);
                       $("#Text10").val(dts[0].unit3);
                       $("#Text11").val(dts[0].qujian3);
                       $("#Text12").val(dts[0].tishi3);
                       $("#Text13").val(dts[0].beizhu3);

                       $("#project4").val(dts[0].name4);
                       $("#res4").val(dts[0].result4);
                       $("#Text14").val(dts[0].unit4);
                       $("#Text15").val(dts[0].qujian4);
                       $("#Text16").val(dts[0].tishi4);
                       $("#Text17").val(dts[0].beizhu4);

                       $("#project5").val(dts[0].name5);
                       $("#res5").val(dts[0].result5);
                       $("#Text18").val(dts[0].unit5);
                       $("#Text19").val(dts[0].qujian5);
                       $("#Text20").val(dts[0].tishi5);
                       $("#Text21").val(dts[0].beizhu5);

                   }
               })
    $.post("/MedicalHistory_TestReport_GeneDetection/ShowAdd?id=" + id,
        function (data) {
            dat = eval(data);
            if (dat != "") {
                for (i = 1; i <= dat.length; i++) {
                    $("#tab1").append('<tr style="height:30px"><td class="auto-style184">' + (5 + i) + '</td><td class="auto-style185">' +
                           '<span class="ui-widget">' +
                                '<input type="text" id="project_' + i + '" name="project_' + i + '" style="width: 180px;height: 20px;"/>' +
                           '</span>' +
                       '</td>' +
                       '<td style="background-color:#e2ebfb">' +
                           '<div id="d_' + i + '">' +
                               '<input type="text" name="res_' + i + '" id="res_' + i + '" style="width:150px;height: 20px;"/>' +
                           '</div>' +
                       '</td>' +
                       '<td class="auto-style195">' +
                           '<input type="text" id="unit_' + i + '" name="unit_' + i + '" style="width: 60px;"" />' +
                       '</td>' +
                       '<td class="auto-style188">' +
                           '<input type="text" id="qujian_' + i + '" name="qujian_' + i + '"  style="width:220px"/>' +
                       '</td>' +
                       '</td>' +
                       '<td class="auto-style222">' +
                           '<input type="text" id="tishi_' + i + '" name="tishi_' + i + '" style="width:40px" />' +
                       '</td>' +
                       '<td class="auto-style190">' +
                           '<input type="text" id="beizhu_' + i + '" name="beizhu_' + i + '" style="width: 205px; height: 20px" />' +
                       '</td>' +
                   '</tr>');
                    $('#project_' + i + '').val(dat[i - 1].name);
                    $('#res_' + i + '').val(dat[i - 1].result);
                    $('#unit_' + i + '').val(dat[i - 1].unit);
                    $('#qujian_' + i + '').val(dat[i - 1].qujian);
                    $('#tishi_' + i + '').val(dat[i - 1].tishi);
                    $('#beizhu_' + i + '').val(dat[i - 1].beizhu);
                }
            }

        })
    //=============================================================================================================================================
})
//==============================提交页面=======================================
function sure() {
    if ($("#name").val() == "") {
        alert("姓名不能为空！")
    }
    else if ($("#sex").val() == "") {
        alert("性别不能为空！")
    }
    else if ($("#id_card_number").val() == "") {
        alert("身份证号码不能为空！")
    }
    else if ($("#ddlCommunity").val() == "") {
        alert("常住地址必须填写到社区、村或者居委会！")
    }
    else if ($("#phone").val() == "") {
        alert("手机号码不能为空！")
    } else if ($("#bgtime").val() == "") {
        alert("报告日期不能为空！")
    } else if ($("#sjtime").val() == "") {
        alert("检测日期不能为空！")
    }
    else { 
        $.post("/MedicalHistory_TestReport_GeneDetection/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
            $("#form1").serialize(),
            function (msgs) {
                var msg = msgs.split(',');
                alert(msg[0]);
                window.close();
            })
    }
}

//============================================================================动态增加一行=============================================================================
var i = 1;
function added1() {
    if ($("#project1").val() != "" && $("#project2").val() != "" && $("#project3").val() != "" && $("#project4").val() != "" && $("#project5").val() != "" && $('#project_' + (i - 1) + '').val() != "") {
        if (i < 20) {
            $("#tab1").append('<tr style="height:30px"><td class="auto-style184">' + (5 + i) + '</td><td class="auto-style185">' +
                                '<span class="ui-widget">' +
                                     '<input type="text" id="project_' + i + '" name="project_' + i + '" style="width: 180px;height: 20px;"/>' +
                                '</span>' +
                            '</td>' +
                            '<td style="background-color:#e2ebfb">' +
                                '<div id="d_' + i + '">' +
                                    '<input type="text" name="res_' + i + '" id="res_' + i + '" style="width:150px;height: 20px;"/>' +
                                '</div>' +
                            '</td>' +
                            '<td class="auto-style195">' +
                                '<input type="text" id="unit_' + i + '" name="unit_' + i + '" style="width: 60px;"" />' +
                            '</td>' +
                            '<td class="auto-style188">' +
                                '<input type="text" id="qujian_' + i + '" name="qujian_' + i + '"  style="width:220px"/>' +
                            '</td>' +
                            '</td>' +
                            '<td class="auto-style222">' +
                                '<input type="text" id="tishi_' + i + '" name="tishi_' + i + '" style="width:40px" />' +
                            '</td>' +
                            '<td class="auto-style190">' +
                                '<input type="text" id="beizhu_' + i + '" name="beizhu_' + i + '" style="width: 205px; height: 20px" />' +
                            '</td>' +
                        '</tr>');

        }
        i++;
    } else {
        alert("请填写上一行内容！");
    }
}

