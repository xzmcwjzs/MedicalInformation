var types = 'sputum';
$(function () { 
    //============================================================改变选项 加载内容====================================================================================
    $.post("/Data/DataNames?type=" + types,
        function (data1) {
            dat1 = eval(data1);
            $("#project1").empty();
            $("#project1").append("<option value=" + "" + ">==请选择==</option>");
            $("#project2").empty();
            $("#project2").append("<option value=" + "" + ">==请选择==</option>");
            $("#project3").empty();
            $("#project3").append("<option value=" + "" + ">==请选择==</option>");
            $("#project4").empty();
            $("#project4").append("<option value=" + "" + ">==请选择==</option>");
            $("#project5").empty();
            $("#project5").append("<option value=" + "" + ">==请选择==</option>");
            $("#project6").empty();
            $("#project6").append("<option value=" + "" + ">==请选择==</option>");

            if (dat1 != null) {
                for (var i = 0; i < dat1.length; i++) {
                    $("#project1").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                    $("#project2").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                    $("#project3").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                    $("#project4").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                    $("#project5").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                    $("#project6").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                }
            }
        });
    //=====1======
    $("#project1").change(function () {
        $("#Select1").val("");
        $('#Text1').val("");
        $('#Text2').val("");
        $('#Text3').val("");
        $('#Text4').val("");
        $.post("/Data/DataResults?type=" + types,
             { Name: $('#project1').val() },
                 function (data) {
                     dat1 = eval(data);
                     $("#Select1").empty();
                     $("#Select1").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != null) {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#Select1").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                         }
                     }
                 });
    })

    $("#Select1").change(function () {
        var a = $("#Select1").val();
        var b = $("#project1").val();
        if (a != "") {
            if (b == "痰液量") {
                if (a == "＜50") {
                    $("#Text3").val("↓");
                } else if (a == "50-100") {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            }
        }
    });
    //=====2======
    $("#project2").change(function () {
        $("#Select2").val("");
        $('#Text5').val("");
        $('#Text6').val("");
        $('#Text7').val("");
        $('#Text8').val("");
        $.post("/Data/DataResults?type=" + types,
             { Name: $('#project2').val() },
                 function (data) {
                     dat1 = eval(data);
                     $("#Select2").empty();
                     $("#Select2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != null) {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#Select2").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                         }
                     }
                 });
    })

    $("#Select2").change(function () {
        var a = $("#Select2").val();
        var b = $("#project2").val();
        if (a != "") {
            if (b == "痰液量") {
                if (a == "＜50") {
                    $("#Text7").val("↓");
                } else if (a == "50-100") {
                    $("#Text7").val("--");
                } else {
                    $("#Text7").val("↑");
                }
            }
        }
    });
    //=====3======
    $("#project3").change(function () {
        $("#Select3").val("");
        $('#Text9').val("");
        $('#Text10').val("");
        $('#Text11').val("");
        $('#Text12').val("");

        $.post("/Data/DataResults?type=" + types,
             { Name: $('#project3').val() },
                 function (data) {
                     dat1 = eval(data);
                     $("#Select3").empty();
                     $("#Select3").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != null) {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#Select3").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                         }
                     }
                 });
    })
    $("#Select3").change(function () {
        var a = $("#Select3").val();
        var b = $("#project3").val();
        if (a != "") {
            if (b == "痰液量") {
                if (a == "＜50") {
                    $("#Text11").val("↓");
                } else if (a == "50-100") {
                    $("#Text11").val("--");
                } else {
                    $("#Text11").val("↑");
                }
            }
        }
    });
    //=====4======
    $("#project4").change(function () {
        $("#Select4").val("");
        $('#Text14').val("");
        $('#Text15').val("");
        $('#Text16').val("");
        $('#Text13').val("");

        $.post("/Data/DataResults?type=" + types,
             { Name: $('#project4').val() },
                 function (data) {
                     dat1 = eval(data);
                     $("#Select4").empty();
                     $("#Select4").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != null) {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#Select4").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                         }
                     }
                 });
    })
    $("#Select4").change(function () {
        var a = $("#Select4").val();
        var b = $("#project4").val();
        if (a != "") {
            if (b == "痰液量") {
                if (a == "＜50") {
                    $("#Text15").val("↓");
                } else if (a == "50-100") {
                    $("#Text15").val("--");
                } else {
                    $("#Text15").val("↑");
                }
            }
        }
    });
    //=====5======
    $("#project5").change(function () {
        $("#Select5").val("");
        $('#Text18').val("");
        $('#Text19').val("");
        $('#Text20').val("");
        $('#Text17').val("");

        $.post("/Data/DataResults?type=" + types,
             { Name: $('#project5').val() },
                 function (data) {
                     dat1 = eval(data);
                     $("#Select5").empty();
                     $("#Select5").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != null) {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#Select5").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                         }
                     }
                 });
    })
    $("#Select5").change(function () {
        var a = $("#Select5").val();
        var b = $("#project5").val();
        if (a != "") {
            if (b == "痰液量") {
                if (a == "＜50") {
                    $("#Text19").val("↓");
                } else if (a == "50-100") {
                    $("#Text19").val("--");
                } else {
                    $("#Text19").val("↑");
                }
            }
        }
    });
    //=====6======
    $("#project6").change(function () {
        $("#Select6").val("");
        $('#Text21').val("");
        $('#Text22').val("");
        $('#Text23').val("");
        $('#Text24').val("");

        $.post("/Data/DataResults?type=" + types,
             { Name: $('#project6').val() },
                 function (data) {
                     dat1 = eval(data);
                     $("#Select6").empty();
                     $("#Select6").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != null) {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#Select6").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                         }
                     }
                 });
    })
    $("#Select6").change(function () {
        var a = $("#Select6").val();
        var b = $("#project6").val();
        if (a != "") {
            if (b == "痰液量") {
                if (a == "＜50") {
                    $("#Text23").val("↓");
                } else if (a == "50-100") {
                    $("#Text23").val("--");
                } else {
                    $("#Text23").val("↑");
                }
            }
        }
    });

    //===============================================================修改内容 打开显示======================================================================
    $.post("/MedicalHistory_TestReport_Sputum/Show?id=" + id,
               function (data) {
                   dts = eval(data);
                   if (dts != "") {
                       $("#name").val(dts[0].names);
                       $("input[name=" + "sex" + "][value=" + dts[0].sex + "]").attr("checked", "checked");
                       $("#id_card_number").val(dts[0].id_card_number);
                       //$("#id_card_number").attr("readonly", "readonly");
                       var s = dts[0].id_card_number;
                       if (dts[0].birth_date != "" && dts[0].birth_date != null) { 
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

                       if (dts[0].inspect_time != "" && dts[0].inspect_time != null) {
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
                           $("#sjtime").val(date.getFullYear()+ '-' + a1 + '-' + a2);
                       }
                       if (dts[0].report_time != "" && dts[0].report_time != null) {
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
                       if (dts[0].create_time != "" && dts[0].create_time != null) {
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
                       $.post("/Data/DataResults?type=" + types,
                        { Name: dts[0].name1 },
                         function (data) {
                             dat1 = eval(data);
                             $("#Select1").empty();
                             $("#Select1").append("<option value=" + "" + ">==请选择==</option>");
                             if (dat1 != null) {
                                 for (var i = 0; i < dat1.length; i++) {
                                     $("#Select1").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                                 }
                             }
                             $("#Select1").val(dts[0].result1);
                         });
                       $("#Text1").val(dts[0].unit1);
                       $("#Text2").val(dts[0].qujian1);
                       $("#Text3").val(dts[0].tishi1);
                       $("#Text4").val(dts[0].beizhu1);

                       $("#project2").val(dts[0].name2);
                       $.post("/Data/DataResults?type=" + types,
                        { Name: dts[0].name2 },
                         function (data) {
                             dat1 = eval(data);
                             $("#Select2").empty();
                             $("#Select2").append("<option value=" + "" + ">==请选择==</option>");
                             if (dat1 != null) {
                                 for (var i = 0; i < dat1.length; i++) {
                                     $("#Select2").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                                 }
                             }
                             $("#Select2").val(dts[0].result2);
                         });
                       $("#Text5").val(dts[0].unit2);
                       $("#Text6").val(dts[0].qujian2);
                       $("#Text7").val(dts[0].tishi2);
                       $("#Text8").val(dts[0].beizhu2);

                       $("#project3").val(dts[0].name3);
                       $.post("/Data/DataResults?type=" + types,
                        { Name: dts[0].name3 },
                         function (data) {
                             dat1 = eval(data);
                             $("#Select3").empty();
                             $("#Select3").append("<option value=" + "" + ">==请选择==</option>");
                             if (dat1 != null) {
                                 for (var i = 0; i < dat1.length; i++) {
                                     $("#Select3").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                                 }
                             }
                             $("#Select3").val(dts[0].result3);
                         });
                       $("#Text9").val(dts[0].unit3);
                       $("#Text10").val(dts[0].qujian3);
                       $("#Text11").val(dts[0].tishi3);
                       $("#Text12").val(dts[0].beizhu3);

                       $("#project4").val(dts[0].name4);
                       $.post("/Data/DataResults?type=" + types,
                        { Name: dts[0].name4 },
                         function (data) {
                             dat1 = eval(data);
                             $("#Select4").empty();
                             $("#Select4").append("<option value=" + "" + ">==请选择==</option>");
                             if (dat1 != null) {
                                 for (var i = 0; i < dat1.length; i++) {
                                     $("#Select4").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                                 }
                             }
                             $("#Select4").val(dts[0].result4);
                         });
                       $("#Text13").val(dts[0].unit4);
                       $("#Text14").val(dts[0].qujian4);
                       $("#Text15").val(dts[0].tishi4);
                       $("#Text16").val(dts[0].beizhu4);

                       $("#project5").val(dts[0].name5);
                       $.post("/Data/DataResults?type=" + types,
                        { Name: dts[0].name5 },
                         function (data) {
                             dat1 = eval(data);
                             $("#Select5").empty();
                             $("#Select5").append("<option value=" + "" + ">==请选择==</option>");
                             if (dat1 != null) {
                                 for (var i = 0; i < dat1.length; i++) {
                                     $("#Select5").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                                 }
                             }
                             $("#Select5").val(dts[0].result5);
                         });
                       $("#Text17").val(dts[0].unit5);
                       $("#Text18").val(dts[0].qujian5);
                       $("#Text19").val(dts[0].tishi5);
                       $("#Text20").val(dts[0].beizhu5);

                       $("#project6").val(dts[0].name6);
                       $.post("/Data/DataResults?type=" + types,
                        { Name: dts[0].name6 },
                         function (data) {
                             dat1 = eval(data);
                             $("#Select6").empty();
                             $("#Select6").append("<option value=" + "" + ">==请选择==</option>");
                             if (dat1 != null) {
                                 for (var i = 0; i < dat1.length; i++) {
                                     $("#Select6").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                                 }
                             }
                             $("#Select6").val(dts[0].result6);
                         });
                       $("#Text21").val(dts[0].unit6);
                       $("#Text22").val(dts[0].qujian6);
                       $("#Text23").val(dts[0].tishi6);
                       $("#Text24").val(dts[0].beizhu6);

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
        $.post("/MedicalHistory_TestReport_Sputum/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
            $("#form1").serialize(),
            function (msgs) {
                var msg = msgs.split(',');
                alert(msg[0]);
                window.close();
            })
    }
}
