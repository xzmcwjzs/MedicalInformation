var type1 = 'yd';
var type2 = 'jy';
var type3 = 'qlxy';
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
        var HomeCommunityCode = data.community_code;
        var CommunityCode = data.community_code;
        $("#perment_community_address").val(data.permanent_home_address);
        if (HomeCommunityCode != "") {
            $("#ddlProvince").val(HomeCommunityCode.substring(0, 2));
            //-----市-----
            $.post("/Data/City?code=" + HomeCommunityCode.substring(0, 2),
             function (datas) {
                 dat1 = eval(datas);
                 $("#ddlCity").empty();
                 $("#ddlCity").append("<option value=" + "" + ">=请选择=</option>");
                 if (dat1 != "") {
                     for (var i = 0; i < dat1.length; i++) {
                         $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                     }
                     $("#ddlCity").val(HomeCommunityCode.substring(0, 4));
                 }
             })

            //-----区/县-----
            $.post("/Data/County?code=" + HomeCommunityCode.substring(0, 4),
             function (datas) {
                 dat1 = eval(datas);
                 $("#ddlCounty").empty();
                 $("#ddlCounty").append("<option value=" + "" + ">=请选择=</option>");
                 if (dat1 != "") {
                     for (var i = 0; i < dat1.length; i++) {
                         $("#ddlCounty").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                     }
                     $("#ddlCounty").val(HomeCommunityCode.substring(0, 6));
                 }
             })

            //-----镇/街道-----
            $.post("/Data/Street?code=" + HomeCommunityCode.substring(0, 6),
             function (datas) {
                 dat1 = eval(datas);
                 $("#ddlStreet").empty();
                 $("#ddlStreet").append("<option value=" + "" + ">=请选择=</option>");
                 if (dat1 != "") {
                     for (var i = 0; i < dat1.length; i++) {
                         $("#ddlStreet").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                     }
                     $("#ddlStreet").val(HomeCommunityCode.substring(0, 9));
                 }
             })

            //-----村/社区-----
            $.post("/Data/Community?code=" + HomeCommunityCode.substring(0, 9),
             function (datas) {
                 dat1 = eval(datas);
                 $("#ddlCommunity").empty();
                 $("#ddlCommunity").append("<option value=" + "" + ">=请选择=</option>");
                 if (dat1 != "") {
                     for (var i = 0; i < dat1.length; i++) {
                         $("#ddlCommunity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                     }
                     $("#ddlCommunity").val(HomeCommunityCode);
                 }
             })

        }
        else if (CommunityCode != "") {
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

        $("#id_card_number").val(data.id_card_number);

        //由出生日期推算其年龄
        if (data.birth_date != "") {
            var date = new Date(parseInt(data.birth_date.replace("/Date(", "").replace(")/", ""), 10));
            var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

            //var a = data.birth_date.split('/');
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
            $("#phone").val(data.individual_phone);
        }
        $("input[name=" + "sex" + "][value=" + data.sex + "]").attr("checked", "checked");
        $("#resident_id").val(data.resident_id);

        if (data.sex == "男") {
            $("#s1").remove(0);
            $("#s2").remove(0);
            $("#s3").remove(0);
            $("#s4").remove(0);
            $("#s").append("<option id=s4 value=>==请选择==</option>" +
                           "<option value=精液检测 id=s2>精液检测</option>" +
                            "<option value=前列腺液检测 id=s3>前列腺液检测</option>");
        } else if (data.sex == "女") {
            $("#s1").remove(0);
            $("#s2").remove(0);
            $("#s3").remove(0);
            $("#s4").remove(0);
            $("#s").append("<option value=阴道分泌物检测 id=s1>阴道分泌物检测</option>");
            if ($("#s").val() == "阴道分泌物检测") {
                $("#titles").html("阴道分泌物检测");
                $.post("/MedicalHistory_TestReport_HumorCheck/Handler?type=" + type1,
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
                if (dat1 != null) {
                    for (var i = 0; i < dat1.length; i++) {
                        $("#project1").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                        $("#project2").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                        $("#project3").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                        $("#project4").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                        $("#project5").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                    }
                }
            });
                $("#project1").change(function () {
                    if ($("#project1").val() == "酸碱度") {
                        document.getElementById("d5").style.display = "";
                        document.getElementById("res1").value = 'pH';
                        document.getElementById("d6").style.display = "none";
                    } else {
                        document.getElementById("d5").style.display = "none";
                        document.getElementById("d6").style.display = "";
                    }
                })

                $("#project2").change(function () {
                    if ($("#project2").val() == "酸碱度") {
                        document.getElementById("res2").value = 'pH';
                        document.getElementById("Div1").style.display = "";
                        document.getElementById("Div2").style.display = "none";
                    } else {
                        document.getElementById("Div2").style.display = "";
                        document.getElementById("Div1").style.display = "none";
                    }
                })

                $("#project3").change(function () {
                    if ($("#project3").val() == "酸碱度") {
                        document.getElementById("res3").value = 'pH';
                        document.getElementById("Div3").style.display = "";
                        document.getElementById("Div4").style.display = "none";
                    } else {
                        document.getElementById("Div4").style.display = "";
                        document.getElementById("Div3").style.display = "none";
                    }
                })

                $("#project4").change(function () {
                    if ($("#project4").val() == "酸碱度") {
                        document.getElementById("res4").value = 'pH';
                        document.getElementById("Div5").style.display = "";
                        document.getElementById("Div6").style.display = "none";
                    } else {
                        document.getElementById("Div6").style.display = "";
                        document.getElementById("Div5").style.display = "none";
                    }
                })

                $("#project5").change(function () {
                    if ($("#project5").val() == "酸碱度") {
                        document.getElementById("res5").value = 'pH';
                        document.getElementById("Div7").style.display = "";
                        document.getElementById("Div8").style.display = "none";
                    } else {
                        document.getElementById("Div8").style.display = "";
                        document.getElementById("Div7").style.display = "none";
                    }
                })

            }
        }
    }

    $("#name").result(log).click(function () {
        $(this).prev().search();
    });


    //---------------------------------------------------身份证号验证信息 身份证号验证  娄帅------------------------------------------------
    $("#id_card_number").blur(
        function () {
            var s = $("#id_card_number").val();
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
                        var s1 = s.substring(6, 10);
                        var s2 = s.substring(10, 12);
                        var s3 = s.substring(12, 14);

                        $("#birth_date").val(s1 + "-" + s2 + "-" + s3);
                        var a = new Date();
                        var year = a.getFullYear() - s1;
                        if (year > 0) {
                            $("#age").val(year + "岁");
                        } else if (year == 0) {
                            var month = a.getMonth() - s2;
                            if (month > 0) {
                                $("#age").val(month + "月");
                            } else if (month == 0) {
                                var day = a.getDay() - s3;
                                if (day > 0) {
                                    $("#age").val(day + "天");
                                }
                            }
                        }
                    }
                }
            } else {
                alert("二代身份证号码长度为18位，请检查后重新输入！");
                $("#id_card_number").val("");
                $("#birth_date").val("");
                $("#age").val("");
            }
        })

    //============================================================改变选项 加载内容====================================================================================
    $("#s").change(function () {
        if ($("#s").val() == "阴道分泌物检测") {
            $("#titles").html("阴道分泌物检测");
            $.post("/MedicalHistory_TestReport_HumorCheck/Handler?type=" + type1,
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
            if (dat1 != null) {
                for (var i = 0; i < dat1.length; i++) {
                    $("#project1").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                    $("#project2").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                    $("#project3").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                    $("#project4").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                    $("#project5").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                }
            }
        });
            $("#project1").change(function () {
                if ($("#project1").val() == "酸碱度") {
                    document.getElementById("d5").style.display = "";
                    document.getElementById("res1").value = 'pH';
                    document.getElementById("d6").style.display = "none";
                } else {
                    document.getElementById("d5").style.display = "none";
                    document.getElementById("d6").style.display = "";
                }
            })

            $("#project2").change(function () {
                if ($("#project2").val() == "酸碱度") {
                    document.getElementById("Div1").style.display = "";
                    document.getElementById("res2").value = 'pH';
                    document.getElementById("Div2").style.display = "none";
                } else {
                    document.getElementById("Div2").style.display = "";
                    document.getElementById("Div1").style.display = "none";
                }
            })

            $("#project3").change(function () {
                if ($("#project3").val() == "酸碱度") {
                    document.getElementById("Div3").style.display = "";
                    document.getElementById("res3").value = 'pH';
                    document.getElementById("Div4").style.display = "none";
                } else {
                    document.getElementById("Div4").style.display = "";
                    document.getElementById("Div3").style.display = "none";
                }
            })

            $("#project4").change(function () {
                if ($("#project4").val() == "酸碱度") {
                    document.getElementById("Div5").style.display = "";
                    document.getElementById("res4").value = 'pH';
                    document.getElementById("Div6").style.display = "none";
                } else {
                    document.getElementById("Div6").style.display = "";
                    document.getElementById("Div5").style.display = "none";
                }
            })

            $("#project5").change(function () {
                if ($("#project5").val() == "酸碱度") {
                    document.getElementById("Div7").style.display = "";
                    document.getElementById("res5").value = 'pH';
                    document.getElementById("Div8").style.display = "none";
                } else {
                    document.getElementById("Div8").style.display = "";
                    document.getElementById("Div7").style.display = "none";
                }
            })

        } else if ($("#s").val() == "精液检测") {
            $("#titles").html("精液检测");
            $.post("/MedicalHistory_TestReport_HumorCheck/Handler?type=" + type2,
            function (data2) {
                dat2 = eval(data2);
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
                if (dat2 != null) {
                    for (var i = 0; i < dat2.length; i++) {
                        $("#project1").append("<option value=" + dat2[i].name + ">" + dat2[i].name + "</option>");
                        $("#project2").append("<option value=" + dat2[i].name + ">" + dat2[i].name + "</option>");
                        $("#project3").append("<option value=" + dat2[i].name + ">" + dat2[i].name + "</option>");
                        $("#project4").append("<option value=" + dat2[i].name + ">" + dat2[i].name + "</option>");
                        $("#project5").append("<option value=" + dat2[i].name + ">" + dat2[i].name + "</option>");
                    }
                }
            });
            $("#project1").change(function () {
                if ($("#project1").val() == "颜色和透明度" || $("#project1").val() == "病原生物学检测" || $("#project1").val() == "抗精子抗体") {
                    document.getElementById("d6").style.display = "";
                    document.getElementById("d5").style.display = "none";
                } else {
                    document.getElementById("d6").style.display = "none";
                    document.getElementById("d5").style.display = "";
                    if ($("#project1").val() == "酸碱度") {
                        document.getElementById("res1").value = 'pH';
                    }
                }
            })

            $("#project2").change(function () {
                if ($("#project2").val() == "颜色和透明度" || $("#project2").val() == "病原生物学检测" || $("#project2").val() == "抗精子抗体") {
                    document.getElementById("Div2").style.display = "";
                    document.getElementById("Div1").style.display = "none";
                } else {
                    document.getElementById("Div1").style.display = "";
                    document.getElementById("Div2").style.display = "none";
                    if ($("#project2").val() == "酸碱度") {
                        document.getElementById("res2").value = 'pH';
                    }
                }
            })

            $("#project3").change(function () {
                if ($("#project3").val() == "颜色和透明度" || $("#project3").val() == "病原生物学检测" || $("#project3").val() == "抗精子抗体") {
                    document.getElementById("Div4").style.display = "";
                    document.getElementById("Div3").style.display = "none";
                } else {
                    document.getElementById("Div3").style.display = "";
                    document.getElementById("Div4").style.display = "none";
                    if ($("#project3").val() == "酸碱度") {
                        document.getElementById("res3").value = 'pH';
                    }
                }
            })

            $("#project4").change(function () {
                if ($("#project4").val() == "颜色和透明度" || $("#project4").val() == "病原生物学检测" || $("#project4").val() == "抗精子抗体") {
                    document.getElementById("Div6").style.display = "";
                    document.getElementById("Div5").style.display = "none";
                } else {
                    document.getElementById("Div5").style.display = "";
                    document.getElementById("Div6").style.display = "none";
                    if ($("#project4").val() == "酸碱度") {
                        document.getElementById("res4").value = 'pH';
                    }
                }
            })

            $("#project5").change(function () {
                if ($("#project5").val() == "颜色和透明度" || $("#project5").val() == "病原生物学检测" || $("#project5").val() == "抗精子抗体") {
                    document.getElementById("Div8").style.display = "";
                    document.getElementById("Div7").style.display = "none";
                } else {
                    document.getElementById("Div7").style.display = "";
                    document.getElementById("Div8").style.display = "none";
                    if ($("#project5").val() == "酸碱度") {
                        document.getElementById("res5").value = 'pH';
                    }
                }
            })
        } else {
            $("#titles").html("前列腺液检测");
            $.post("/MedicalHistroy_TestReport_HumorCheck/Handler?type=" + type3,
            function (data4) {
                dat4 = eval(data4);
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
                if (dat4 != null) {
                    for (var i = 0; i < dat4.length; i++) {
                        $("#project1").append("<option value=" + dat4[i].name + ">" + dat4[i].name + "</option>");
                        $("#project2").append("<option value=" + dat4[i].name + ">" + dat4[i].name + "</option>");
                        $("#project3").append("<option value=" + dat4[i].name + ">" + dat4[i].name + "</option>");
                        $("#project4").append("<option value=" + dat4[i].name + ">" + dat4[i].name + "</option>");
                        $("#project5").append("<option value=" + dat4[i].name + ">" + dat4[i].name + "</option>");
                    }
                }
            });


            $("#project1").change(function () {
                if ($("#project1").val() == "颜色和透明度") {
                    document.getElementById("d6").style.display = "";
                    document.getElementById("d5").style.display = "none";
                } else {
                    document.getElementById("d6").style.display = "none";
                    document.getElementById("d5").style.display = "";
                    if ($("#project1").val() == "酸碱度") {
                        document.getElementById("res1").value = 'pH';
                    }
                }
            })

            $("#project2").change(function () {
                if ($("#project2").val() == "颜色和透明度") {
                    document.getElementById("Div2").style.display = "";
                    document.getElementById("Div1").style.display = "none";
                } else {
                    document.getElementById("Div1").style.display = "";
                    document.getElementById("Div2").style.display = "none";
                    if ($("#project2").val() == "酸碱度") {
                        document.getElementById("res2").value = 'pH';
                    }
                }
            })

            $("#project3").change(function () {
                if ($("#project3").val() == "颜色和透明度") {
                    document.getElementById("Div4").style.display = "";
                    document.getElementById("Div3").style.display = "none";
                } else {
                    document.getElementById("Div3").style.display = "";
                    document.getElementById("Div4").style.display = "none";
                    if ($("#project3").val() == "酸碱度") {
                        document.getElementById("res3").value = 'pH';
                    }
                }
            })

            $("#project4").change(function () {
                if ($("#project4").val() == "颜色和透明度") {
                    document.getElementById("Div6").style.display = "";
                    document.getElementById("Div5").style.display = "none";
                } else {
                    document.getElementById("Div5").style.display = "";
                    document.getElementById("Div6").style.display = "none";
                    if ($("#project4").val() == "酸碱度") {
                        document.getElementById("res4").value = 'pH';
                    }
                }
            })

            $("#project5").change(function () {
                if ($("#project5").val() == "颜色和透明度") {
                    document.getElementById("Div8").style.display = "";
                    document.getElementById("Div7").style.display = "none";
                } else {
                    document.getElementById("Div7").style.display = "";
                    document.getElementById("Div8").style.display = "none";
                    if ($("#project5").val() == "酸碱度") {
                        document.getElementById("res5").value = 'pH';
                    }
                }
            })
        }
    });
    //================================================================================================================================================

    //================================================================改变所选的内容 显示对应的变化===================================================
    //1==================================
    $("#project1").change(function () {
        var ss = "";
        if ($("#s").val() == "阴道分泌物检测") {
            ss = 'yd';
        } else if ($("#s").val() == "精液检测") {
            ss = 'jy';
        } else if ($("#s").val() == "前列腺液检测") {
            ss = 'qlxy';
        }
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler1?type=" + ss,
                     { Name: $('#project1').val() },
                     function (data) {
                         $("#Text2").val(data);
                     });
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler3?type=" + ss,
                      { Name: $('#project1').val() },
                      function (data) {
                          $("#Text1").val(data);
                      });
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + ss,
            { Name: $('#project1').val() },
            function (data) {
                dat1 = eval(data);
                $("#select").empty();
                $("#select").append("<option value=" + "" + ">==请选择==</option>");
                if (dat1 != null) {
                    for (var i = 0; i < dat1.length; i++) {
                        $("#select").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                    }
                }
            });

        $("#res1").keyup(function () {
            if ($("#project1").val() == "酸碱度") {
                var a1 = document.getElementById("res1").value;
                var s = a1.split('pH');
                if ($("#s").val() == "阴道分泌物检测") {
                    if (s[1] < 4.0) {
                        document.getElementById("Text3").value = "↓";
                    } else if (s[1] > 4.5) {
                        document.getElementById("Text3").value = "↑";
                    } else {
                        document.getElementById("Text3").value = "--";
                    }
                } else if ($("#s").val() == "精液检测") {
                    if (s[1] < 7.2) {
                        document.getElementById("Text3").value = "↓";
                    } else if (s[1] > 8.0) {
                        document.getElementById("Text3").value = "↑";
                    } else {
                        document.getElementById("Text3").value = "--";
                    }
                } else {
                    if (s[1] < 6.3) {
                        document.getElementById("Text3").value = "↓";
                    } else if (s[1] > 6.5) {
                        document.getElementById("Text3").value = "↑";
                    } else {
                        document.getElementById("Text3").value = "--";
                    }
                }
            } else if ($("#project1").val() == "量") {
                var a1 = document.getElementById("res1").value;
                if ($("#s").val() == "精液检测") {
                    if (a1 < 1.5) {
                        document.getElementById("Text3").value = "↓";
                    } else if (a1 > 6.0) {
                        document.getElementById("Text3").value = "↑";
                    } else {
                        document.getElementById("Text3").value = "--";
                    }
                } else {
                    if (a1 > 1.0) {
                        document.getElementById("Text3").value = "↑";
                    } else {
                        document.getElementById("Text3").value = "--";
                    }
                }
            } else if ($("#project1").val() == "磷脂酰胆碱小体") {
                var a1 = document.getElementById("res1").value;

                if (a1 == "大量") {
                    document.getElementById("Text3").value = "--";
                } else {
                    document.getElementById("Text3").value = "↓";
                }

            } else if ($("#project1").val() == "红细胞") {
                var a1 = document.getElementById("res1").value;
                if ($("#s").val() == "精液检测") {
                    if (a1 == "偶见") {
                        document.getElementById("Text3").value = "--";
                    } else {
                        document.getElementById("Text3").value = "异常";
                    }
                } else {
                    if (a1 < 5) {
                        document.getElementById("Text3").value = "--";
                    } else {
                        document.getElementById("Text3").value = "↑";
                    }
                }
            } else if ($("#project1").val() == "白细胞") {
                var a1 = document.getElementById("res1").value;
                if ($("#s").val() == "精液检测") {
                    if (a1 <= 5) {
                        document.getElementById("Text3").value = "--";
                    } else {
                        document.getElementById("Text3").value = "↑";
                    }
                } else {
                    if (a1 < 10) {
                        document.getElementById("Text3").value = "--";
                    } else {
                        document.getElementById("Text3").value = "↑";
                    }
                }
            } else if ($("#project1").val() == "颗粒细胞") {
                var a1 = document.getElementById("res1").value;
                if (a1 < 1) {
                    document.getElementById("Text3").value = "--";
                } else {
                    document.getElementById("Text3").value = "↑";
                }
            } else if ($("#project1").val() == "淀粉样小体") {
                var a1 = document.getElementById("res1").value;
                if (a1 == "有") {
                    document.getElementById("Text3").value = "正常";
                } else {
                    document.getElementById("Text3").value = "异常";
                }
            } else if ($("#project1").val() == "精子") {
                var a1 = document.getElementById("res1").value;
                document.getElementById("Text3").value = "--";
            } else if ($("#project1").val() == "滴虫") {
                var a1 = document.getElementById("res1").value;
                if (a1 == "无") {
                    document.getElementById("Text3").value = "正常";
                } else {
                    document.getElementById("Text3").value = "异常";
                }
            } else if ($("#project1").val() == "结石") {
                var a1 = document.getElementById("res1").value;
                document.getElementById("Text3").value = "--";
            } else if ($("#project1").val() == "粘稠度") {
                var a1 = document.getElementById("res1").value;
                if (a1.indexOf("胶冻") == -1) {
                    document.getElementById("Text3").value = "异常";
                } else {
                    document.getElementById("Text3").value = "正常";
                }
            } else if ($("#project1").val() == "精液液化时间") {
                var a1 = document.getElementById("res1").value;
                if (a1 < 30) {
                    document.getElementById("Text3").value = "正常";
                } else {
                    document.getElementById("Text3").value = "异常";
                }
            } else if ($("#project1").val() == "气味") {
                var a1 = document.getElementById("res1").value;
                if (a1.indexOf("栗花") != -1 || a1.indexOf("石楠") != -1) {
                    document.getElementById("Text3").value = "正常";
                } else {
                    document.getElementById("Text3").value = "异常";
                }
            } else if ($("#project1").val() == "精子活动率") {
                var a1 = document.getElementById("res1").value;
                if (a1 < 80) {
                    document.getElementById("Text3").value = "↓";
                } else if (a1 > 90) {
                    document.getElementById("Text3").value = "↑";
                } else {
                    document.getElementById("Text3").value = "--";
                }
            } else if ($("#project1").val() == "精子活动力（PR+NP）") {
                var a1 = document.getElementById("res1").value;
                if (a1 >= 40) {
                    document.getElementById("Text3").value = "--";
                } else {
                    document.getElementById("Text3").value = "↓";
                }
            } else if ($("#project1").val() == "精子活动力（PR）") {
                var a1 = document.getElementById("res1").value;
                if (a1 >= 32) {
                    document.getElementById("Text3").value = "--";
                } else {
                    document.getElementById("Text3").value = "↓";
                }
            } else if ($("#project1").val() == "精子浓度") {
                var a1 = document.getElementById("res1").value;
                if (a1 >= 15) {
                    document.getElementById("Text3").value = "--";
                } else {
                    document.getElementById("Text3").value = "↓";
                }
            } else if ($("#project1").val() == "精子总数") {
                var a1 = document.getElementById("res1").value;
                if (a1 >= 39) {
                    document.getElementById("Text3").value = "--";
                } else {
                    document.getElementById("Text3").value = "↓";
                }
            } else if ($("#project1").val() == "精子形态") {
                var a1 = document.getElementById("res1").value;
                if (a1 < 20) {
                    document.getElementById("Text3").value = "正常";
                } else {
                    document.getElementById("Text3").value = "异常";
                }
            } else if ($("#project1").val() == "未成熟生殖细胞（生精细胞）") {
                var a1 = document.getElementById("res1").value;
                if (a1 < 1) {
                    document.getElementById("Text3").value = "--";
                } else {
                    document.getElementById("Text3").value = "↓";
                }
            } else if ($("#project1").val() == "果糖") {
                var a1 = document.getElementById("res1").value;
                if (a1 < 9.11) {
                    document.getElementById("Text3").value = "↓";
                } else if (a1 > 17.67) {
                    document.getElementById("Text3").value = "↑";
                } else {
                    document.getElementById("Text3").value = "--";
                }
            } else if ($("#project1").val() == "乳酸脱氢酶-X") {
                var a1 = document.getElementById("res1").value;
                if (a1 < 490) {
                    document.getElementById("Text3").value = "↓";
                } else if (a1 > 2370) {
                    document.getElementById("Text3").value = "↑";
                } else {
                    document.getElementById("Text3").value = "--";
                }
            } else if ($("#project1").val() == "顶体酶") {
                var a1 = document.getElementById("res1").value;
                if (a1 < 15) {
                    document.getElementById("Text3").value = "↓";
                } else if (a1 > 57) {
                    document.getElementById("Text3").value = "↑";
                } else {
                    document.getElementById("Text3").value = "--";
                }
            } else if ($("#project1").val() == "精子低渗肿胀试验") {
                var a1 = document.getElementById("res1").value;
                if (a1 <= 50) {
                    document.getElementById("Text3").value = "↓";
                } else {
                    document.getElementById("Text3").value = "--";
                }
            }
        });

        $("#select").change(function () {
            if ($("#project1").val() == "阴道清洁度") {
                var a1 = document.getElementById("select").value;
                if (a1 == "Ⅰ度" || a1 == "Ⅱ度") {
                    document.getElementById("Text3").value = "正常";
                } else {
                    document.getElementById("Text3").value = "重度";
                }
            } if ($("#project1").val() == "病原生物学检测") {
                var a1 = document.getElementById("select").value;
                if (a1 == "阴性") {
                    document.getElementById("Text3").value = "正常";
                } else {
                    document.getElementById("Text3").value = "异常";
                }
            } if ($("#project1").val() == "抗精子抗体") {
                var a1 = document.getElementById("select").value;
                if (a1 == "阴性") {
                    document.getElementById("Text3").value = "正常";
                } else {
                    document.getElementById("Text3").value = "异常";
                }
            }
        })
    });
    //2----------------------------------------------------------------------------------------------------------
    $("#project2").change(function () {
        var ss = "";
        if ($("#s").val() == "阴道分泌物检测") {
            ss = 'yd';
        } else if ($("#s").val() == "精液检测") {
            ss = 'jy';
        } else if ($("#s").val() == "前列腺液检测") {
            ss = 'qlxy';
        }
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler1?type=" + ss,
                     { Name: $('#project2').val() },
                     function (data) {
                         $("#Text7").val(data);
                     });
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler3?type=" + ss,
                      { Name: $('#project2').val() },
                      function (data) {
                          $("#Text6").val(data);
                      });
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + ss,
            { Name: $('#project2').val() },
            function (data) {
                dat1 = eval(data);
                $("#Select1").empty();
                $("#Select1").append("<option value=" + "" + ">==请选择==</option>");
                if (dat1 != null) {
                    for (var i = 0; i < dat1.length; i++) {
                        $("#Select1").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                    }
                }
            });

        $("#res2").keyup(function () {
            if ($("#project2").val() == "酸碱度") {
                var a2 = document.getElementById("res2").value;
                var s2 = a2.split('pH');
                if ($("#s").val() == "阴道分泌物检测") {
                    if (s2[1] < 4.0) {
                        document.getElementById("Text8").value = "↓";
                    } else if (s2[1] > 4.5) {
                        document.getElementById("Text8").value = "↑";
                    } else {
                        document.getElementById("Text8").value = "--";
                    }
                } else if ($("#s").val() == "精液检测") {
                    if (s2[1] < 7.2) {
                        document.getElementById("Text8").value = "↓";
                    } else if (s2[1] > 8.0) {
                        document.getElementById("Text8").value = "↑";
                    } else {
                        document.getElementById("Text8").value = "--";
                    }
                } else {
                    if (s2[1] < 6.3) {
                        document.getElementById("Text8").value = "↓";
                    } else if (s2[1] > 6.5) {
                        document.getElementById("Text8").value = "↑";
                    } else {
                        document.getElementById("Text8").value = "--";
                    }
                }
            } else if ($("#project2").val() == "量") {
                var a2 = document.getElementById("res2").value;
                if ($("#s").val() == "精液检测") {
                    if (a2 < 1.5) {
                        document.getElementById("Text8").value = "↓";
                    } else if (a2 > 6.0) {
                        document.getElementById("Text8").value = "↑";
                    } else {
                        document.getElementById("Text8").value = "--";
                    }
                } else {
                    if (a2 > 1.0) {
                        document.getElementById("Text8").value = "↑";
                    } else {
                        document.getElementById("Text8").value = "--";
                    }
                }
            } else if ($("#project2").val() == "磷脂酰胆碱小体") {
                var a2 = document.getElementById("res2").value;

                if (a2 == "大量") {
                    document.getElementById("Text8").value = "--";
                } else {
                    document.getElementById("Text8").value = "↓";
                }

            } else if ($("#project2").val() == "红细胞") {
                var a2 = document.getElementById("res2").value;
                if ($("#s").val() == "精液检测") {
                    if (a2 == "偶见") {
                        document.getElementById("Text8").value = "--";
                    } else {
                        document.getElementById("Text8").value = "异常";
                    }
                } else {
                    if (a2 < 5) {
                        document.getElementById("Text8").value = "--";
                    } else {
                        document.getElementById("Text8").value = "↑";
                    }
                }
            } else if ($("#project2").val() == "白细胞") {
                var a2 = document.getElementById("res2").value;
                if ($("#s").val() == "精液检测") {
                    if (a2 <= 5) {
                        document.getElementById("Text8").value = "--";
                    } else {
                        document.getElementById("Text8").value = "↑";
                    }
                } else {
                    if (a2 < 10) {
                        document.getElementById("Text8").value = "--";
                    } else {
                        document.getElementById("Text8").value = "↑";
                    }
                }
            } else if ($("#project2").val() == "颗粒细胞") {
                var a2 = document.getElementById("res2").value;
                if (a2 < 1) {
                    document.getElementById("Text8").value = "--";
                } else {
                    document.getElementById("Text8").value = "↑";
                }
            } else if ($("#project2").val() == "淀粉样小体") {
                var a2 = document.getElementById("res2").value;
                if (a2 == "有") {
                    document.getElementById("Text8").value = "正常";
                } else {
                    document.getElementById("Text8").value = "异常";
                }
            } else if ($("#project2").val() == "精子") {
                var a2 = document.getElementById("res2").value;
                document.getElementById("Text8").value = "--";
            } else if ($("#project2").val() == "滴虫") {
                var a2 = document.getElementById("res2").value;
                if (a2 == "无") {
                    document.getElementById("Text8").value = "正常";
                } else {
                    document.getElementById("Text8").value = "异常";
                }
            } else if ($("#project2").val() == "结石") {
                var a2 = document.getElementById("res2").value;
                document.getElementById("Text8").value = "--";
            } else if ($("#project2").val() == "粘稠度") {
                var a2 = document.getElementById("res2").value;
                if (a2.indexOf("胶冻") == -1) {
                    document.getElementById("Text8").value = "异常";
                } else {
                    document.getElementById("Text8").value = "正常";
                }
            } else if ($("#project2").val() == "精液液化时间") {
                var a2 = document.getElementById("res2").value;
                if (a2 < 30) {
                    document.getElementById("Text8").value = "正常";
                } else {
                    document.getElementById("Text8").value = "异常";
                }
            } else if ($("#project2").val() == "气味") {
                var a2 = document.getElementById("res2").value;
                if (a2.indexOf("栗花") != -1 || a2.indexOf("石楠") != -1) {
                    document.getElementById("Text8").value = "正常";
                } else {
                    document.getElementById("Text8").value = "异常";
                }
            } else if ($("#project2").val() == "精子活动率") {
                var a2 = document.getElementById("res2").value;
                if (a2 < 80) {
                    document.getElementById("Text8").value = "↓";
                } else if (a2 > 90) {
                    document.getElementById("Text8").value = "↑";
                } else {
                    document.getElementById("Text8").value = "--";
                }
            } else if ($("#project2").val() == "精子活动力（PR+NP）") {
                var a2 = document.getElementById("res2").value;
                if (a2 >= 40) {
                    document.getElementById("Text8").value = "--";
                } else {
                    document.getElementById("Text8").value = "↓";
                }
            } else if ($("#project2").val() == "精子活动力（PR）") {
                var a2 = document.getElementById("res2").value;
                if (a2 >= 32) {
                    document.getElementById("Text8").value = "--";
                } else {
                    document.getElementById("Text8").value = "↓";
                }
            } else if ($("#project2").val() == "精子浓度") {
                var a2 = document.getElementById("res2").value;
                if (a2 >= 15) {
                    document.getElementById("Text8").value = "--";
                } else {
                    document.getElementById("Text8").value = "↓";
                }
            } else if ($("#project2").val() == "精子总数") {
                var a2 = document.getElementById("res2").value;
                if (a2 >= 39) {
                    document.getElementById("Text8").value = "--";
                } else {
                    document.getElementById("Text8").value = "↓";
                }
            } else if ($("#project2").val() == "精子形态") {
                var a2 = document.getElementById("res2").value;
                if (a2 < 20) {
                    document.getElementById("Text8").value = "正常";
                } else {
                    document.getElementById("Text8").value = "异常";
                }
            } else if ($("#project2").val() == "未成熟生殖细胞（生精细胞）") {
                var a2 = document.getElementById("res2").value;
                if (a2 < 1) {
                    document.getElementById("Text8").value = "--";
                } else {
                    document.getElementById("Text8").value = "↓";
                }
            } else if ($("#project2").val() == "果糖") {
                var a2 = document.getElementById("res2").value;
                if (a2 < 9.11) {
                    document.getElementById("Text8").value = "↓";
                } else if (a2 > 17.67) {
                    document.getElementById("Text8").value = "↑";
                } else {
                    document.getElementById("Text8").value = "--";
                }
            } else if ($("#project2").val() == "乳酸脱氢酶-X") {
                var a2 = document.getElementById("res2").value;
                if (a2 < 490) {
                    document.getElementById("Text8").value = "↓";
                } else if (a2 > 2370) {
                    document.getElementById("Text8").value = "↑";
                } else {
                    document.getElementById("Text8").value = "--";
                }
            } else if ($("#project2").val() == "顶体酶") {
                var a2 = document.getElementById("res2").value;
                if (a2 < 15) {
                    document.getElementById("Text8").value = "↓";
                } else if (a2 > 57) {
                    document.getElementById("Text8").value = "↑";
                } else {
                    document.getElementById("Text8").value = "--";
                }
            } else if ($("#project2").val() == "精子低渗肿胀试验") {
                var a2 = document.getElementById("res2").value;
                if (a2 <= 50) {
                    document.getElementById("Text8").value = "↓";
                } else {
                    document.getElementById("Text8").value = "--";
                }
            }
        });

        $("#Select1").change(function () {
            if ($("#project2").val() == "阴道清洁度") {
                var a2 = document.getElementById("Select1").value;
                if (a2 == "Ⅰ度" || a2 == "Ⅱ度") {
                    document.getElementById("Text8").value = "正常";
                } else {
                    document.getElementById("Text8").value = "重度";
                }
            } if ($("#project2").val() == "病原生物学检测") {
                var a2 = document.getElementById("Select1").value;
                if (a2 == "阴性") {
                    document.getElementById("Text8").value = "正常";
                } else {
                    document.getElementById("Text8").value = "异常";
                }
            } if ($("#project2").val() == "抗精子抗体") {
                var a2 = document.getElementById("Select1").value;
                if (a2 == "阴性") {
                    document.getElementById("Text8").value = "正常";
                } else {
                    document.getElementById("Text8").value = "异常";
                }
            }
        })
    });
    //3----------------------------------------------------------------------------------------------------------
    $("#project3").change(function () {
        var ss = "";
        if ($("#s").val() == "阴道分泌物检测") {
            ss = 'yd';
        } else if ($("#s").val() == "精液检测") {
            ss = 'jy';
        } else if ($("#s").val() == "前列腺液检测") {
            ss = 'qlxy';
        }
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler1?type=" + ss,
                     { Name: $('#project3').val() },
                     function (data) {
                         $("#Text11").val(data);
                     });
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler3?type=" + ss,
                      { Name: $('#project3').val() },
                      function (data) {
                          $("#Text10").val(data);
                      });
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + ss,
            { Name: $('#project3').val() },
            function (data) {
                dat1 = eval(data);
                $("#Select2").empty();
                $("#Select2").append("<option value=" + "" + ">==请选择==</option>");
                if (dat1 != null) {
                    for (var i = 0; i < dat1.length; i++) {
                        $("#Select2").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                    }
                }
            });

        $("#res3").keyup(function () {
            if ($("#project3").val() == "酸碱度") {
                var a3 = document.getElementById("res3").value;
                var s3 = a3.split('pH');
                if ($("#s").val() == "阴道分泌物检测") {
                    if (s3[1] < 4.0) {
                        document.getElementById("Text12").value = "↓";
                    } else if (s3[1] > 4.5) {
                        document.getElementById("Text12").value = "↑";
                    } else {
                        document.getElementById("Text12").value = "--";
                    }
                } else if ($("#s").val() == "精液检测") {
                    if (s3[1] < 7.2) {
                        document.getElementById("Text12").value = "↓";
                    } else if (s3[1] > 8.0) {
                        document.getElementById("Text12").value = "↑";
                    } else {
                        document.getElementById("Text12").value = "--";
                    }
                } else {
                    if (s3[1] < 6.3) {
                        document.getElementById("Text12").value = "↓";
                    } else if (s3[1] > 6.5) {
                        document.getElementById("Text12").value = "↑";
                    } else {
                        document.getElementById("Text12").value = "--";
                    }
                }
            } else if ($("#project3").val() == "量") {
                var a3 = document.getElementById("res3").value;
                if ($("#s").val() == "精液检测") {
                    if (a3 < 1.5) {
                        document.getElementById("Text12").value = "↓";
                    } else if (a3 > 6.0) {
                        document.getElementById("Text12").value = "↑";
                    } else {
                        document.getElementById("Text12").value = "--";
                    }
                } else {
                    if (a3 > 1.0) {
                        document.getElementById("Text12").value = "↑";
                    } else {
                        document.getElementById("Text12").value = "--";
                    }
                }
            } else if ($("#project3").val() == "磷脂酰胆碱小体") {
                var a3 = document.getElementById("res3").value;

                if (a3 == "大量") {
                    document.getElementById("Text12").value = "--";
                } else {
                    document.getElementById("Text12").value = "↓";
                }

            } else if ($("#project3").val() == "红细胞") {
                var a3 = document.getElementById("res3").value;
                if ($("#s").val() == "精液检测") {
                    if (a3 == "偶见") {
                        document.getElementById("Text12").value = "--";
                    } else {
                        document.getElementById("Text12").value = "异常";
                    }
                } else {
                    if (a3 < 5) {
                        document.getElementById("Text12").value = "--";
                    } else {
                        document.getElementById("Text12").value = "↑";
                    }
                }
            } else if ($("#project3").val() == "白细胞") {
                var a3 = document.getElementById("res3").value;
                if ($("#s").val() == "精液检测") {
                    if (a3 <= 5) {
                        document.getElementById("Text12").value = "--";
                    } else {
                        document.getElementById("Text12").value = "↑";
                    }
                } else {
                    if (a3 < 10) {
                        document.getElementById("Text12").value = "--";
                    } else {
                        document.getElementById("Text12").value = "↑";
                    }
                }
            } else if ($("#project3").val() == "颗粒细胞") {
                var a3 = document.getElementById("res3").value;
                if (a3 < 1) {
                    document.getElementById("Text12").value = "--";
                } else {
                    document.getElementById("Text12").value = "↑";
                }
            } else if ($("#project3").val() == "淀粉样小体") {
                var a3 = document.getElementById("res3").value;
                if (a3 == "有") {
                    document.getElementById("Text12").value = "正常";
                } else {
                    document.getElementById("Text12").value = "异常";
                }
            } else if ($("#project3").val() == "精子") {
                var a3 = document.getElementById("res3").value;
                document.getElementById("Text12").value = "--";
            } else if ($("#project3").val() == "滴虫") {
                var a3 = document.getElementById("res3").value;
                if (a3 == "无") {
                    document.getElementById("Text12").value = "正常";
                } else {
                    document.getElementById("Text12").value = "异常";
                }
            } else if ($("#project3").val() == "结石") {
                var a3 = document.getElementById("res3").value;
                document.getElementById("Text12").value = "--";
            } else if ($("#project3").val() == "粘稠度") {
                var a3 = document.getElementById("res3").value;
                if (a3.indexOf("胶冻") == -1) {
                    document.getElementById("Text12").value = "异常";
                } else {
                    document.getElementById("Text12").value = "正常";
                }
            } else if ($("#project3").val() == "精液液化时间") {
                var a3 = document.getElementById("res3").value;
                if (a3 < 30) {
                    document.getElementById("Text12").value = "正常";
                } else {
                    document.getElementById("Text12").value = "异常";
                }
            } else if ($("#project3").val() == "气味") {
                var a3 = document.getElementById("res3").value;
                if (a3.indexOf("栗花") != -1 || a3.indexOf("石楠") != -1) {
                    document.getElementById("Text12").value = "正常";
                } else {
                    document.getElementById("Text12").value = "异常";
                }
            } else if ($("#project3").val() == "精子活动率") {
                var a3 = document.getElementById("res3").value;
                if (a3 < 80) {
                    document.getElementById("Text12").value = "↓";
                } else if (a3 > 90) {
                    document.getElementById("Text12").value = "↑";
                } else {
                    document.getElementById("Text12").value = "--";
                }
            } else if ($("#project3").val() == "精子活动力（PR+NP）") {
                var a3 = document.getElementById("res3").value;
                if (a3 >= 40) {
                    document.getElementById("Text12").value = "--";
                } else {
                    document.getElementById("Text12").value = "↓";
                }
            } else if ($("#project3").val() == "精子活动力（PR）") {
                var a3 = document.getElementById("res3").value;
                if (a3 >= 32) {
                    document.getElementById("Text12").value = "--";
                } else {
                    document.getElementById("Text12").value = "↓";
                }
            } else if ($("#project3").val() == "精子浓度") {
                var a3 = document.getElementById("res3").value;
                if (a3 >= 15) {
                    document.getElementById("Text12").value = "--";
                } else {
                    document.getElementById("Text12").value = "↓";
                }
            } else if ($("#project3").val() == "精子总数") {
                var a3 = document.getElementById("res3").value;
                if (a3 >= 39) {
                    document.getElementById("Text12").value = "--";
                } else {
                    document.getElementById("Text12").value = "↓";
                }
            } else if ($("#project3").val() == "精子形态") {
                var a3 = document.getElementById("res3").value;
                if (a3 < 20) {
                    document.getElementById("Text12").value = "正常";
                } else {
                    document.getElementById("Text12").value = "异常";
                }
            } else if ($("#project3").val() == "未成熟生殖细胞（生精细胞）") {
                var a3 = document.getElementById("res3").value;
                if (a3 < 1) {
                    document.getElementById("Text12").value = "--";
                } else {
                    document.getElementById("Text12").value = "↓";
                }
            } else if ($("#project3").val() == "果糖") {
                var a3 = document.getElementById("res3").value;
                if (a3 < 9.11) {
                    document.getElementById("Text12").value = "↓";
                } else if (a3 > 17.67) {
                    document.getElementById("Text12").value = "↑";
                } else {
                    document.getElementById("Text12").value = "--";
                }
            } else if ($("#project3").val() == "乳酸脱氢酶-X") {
                var a3 = document.getElementById("res3").value;
                if (a3 < 490) {
                    document.getElementById("Text12").value = "↓";
                } else if (a3 > 2370) {
                    document.getElementById("Text12").value = "↑";
                } else {
                    document.getElementById("Text12").value = "--";
                }
            } else if ($("#project3").val() == "顶体酶") {
                var a3 = document.getElementById("res3").value;
                if (a3 < 15) {
                    document.getElementById("Text12").value = "↓";
                } else if (a3 > 57) {
                    document.getElementById("Text12").value = "↑";
                } else {
                    document.getElementById("Text12").value = "--";
                }
            } else if ($("#project3").val() == "精子低渗肿胀试验") {
                var a3 = document.getElementById("res3").value;
                if (a3 <= 50) {
                    document.getElementById("Text12").value = "↓";
                } else {
                    document.getElementById("Text12").value = "--";
                }
            }
        });

        $("#Select2").change(function () {
            if ($("#project3").val() == "阴道清洁度") {
                var a3 = document.getElementById("Select2").value;
                if (a3 == "Ⅰ度" || a3 == "Ⅱ度") {
                    document.getElementById("Text12").value = "正常";
                } else {
                    document.getElementById("Text12").value = "重度";
                }
            } if ($("#project3").val() == "病原生物学检测") {
                var a3 = document.getElementById("Select2").value;
                if (a3 == "阴性") {
                    document.getElementById("Text12").value = "正常";
                } else {
                    document.getElementById("Text12").value = "异常";
                }
            } if ($("#project3").val() == "抗精子抗体") {
                var a3 = document.getElementById("Select2").value;
                if (a3 == "阴性") {
                    document.getElementById("Text12").value = "正常";
                } else {
                    document.getElementById("Text12").value = "异常";
                }
            }
        })
    });

    //4----------------------------------------------------------------------------------------------------------
    $("#project4").change(function () {
        var ss = "";
        if ($("#s").val() == "阴道分泌物检测") {
            ss = 'yd';
        } else if ($("#s").val() == "精液检测") {
            ss = 'jy';
        } else if ($("#s").val() == "前列腺液检测") {
            ss = 'qlxy';
        }
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler1?type=" + ss,
                     { Name: $('#project4').val() },
                     function (data) {
                         $("#Text15").val(data);
                     });
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler3?type=" + ss,
                      { Name: $('#project4').val() },
                      function (data) {
                          $("#Text14").val(data);
                      });
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + ss,
            { Name: $('#project4').val() },
            function (data) {
                dat1 = eval(data);
                $("#Select3").empty();
                $("#Select3").append("<option value=" + "" + ">==请选择==</option>");
                if (dat1 != null) {
                    for (var i = 0; i < dat1.length; i++) {
                        $("#Select3").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                    }
                }
            });

        $("#res4").keyup(function () {
            if ($("#project4").val() == "酸碱度") {
                var a4 = document.getElementById("res4").value;
                var s4 = a4.split('pH');
                if ($("#s").val() == "阴道分泌物检测") {
                    if (s4[1] < 4.0) {
                        document.getElementById("Text16").value = "↓";
                    } else if (s4[1] > 4.5) {
                        document.getElementById("Text16").value = "↑";
                    } else {
                        document.getElementById("Text16").value = "--";
                    }
                } else if ($("#s").val() == "精液检测") {
                    if (s4[1] < 7.2) {
                        document.getElementById("Text16").value = "↓";
                    } else if (s4[1] > 8.0) {
                        document.getElementById("Text16").value = "↑";
                    } else {
                        document.getElementById("Text16").value = "--";
                    }
                } else {
                    if (s4[1] < 6.3) {
                        document.getElementById("Text16").value = "↓";
                    } else if (s4[1] > 6.5) {
                        document.getElementById("Text16").value = "↑";
                    } else {
                        document.getElementById("Text16").value = "--";
                    }
                }
            } else if ($("#project4").val() == "量") {
                var a4 = document.getElementById("res4").value;
                if ($("#s").val() == "精液检测") {
                    if (a4 < 1.5) {
                        document.getElementById("Text16").value = "↓";
                    } else if (a4 > 6.0) {
                        document.getElementById("Text16").value = "↑";
                    } else {
                        document.getElementById("Text16").value = "--";
                    }
                } else {
                    if (a4 > 1.0) {
                        document.getElementById("Text16").value = "↑";
                    } else {
                        document.getElementById("Text16").value = "--";
                    }
                }
            } else if ($("#project4").val() == "磷脂酰胆碱小体") {
                var a4 = document.getElementById("res4").value;

                if (a4 == "大量") {
                    document.getElementById("Text16").value = "--";
                } else {
                    document.getElementById("Text16").value = "↓";
                }

            } else if ($("#project4").val() == "红细胞") {
                var a4 = document.getElementById("res4").value;
                if ($("#s").val() == "精液检测") {
                    if (a4 == "偶见") {
                        document.getElementById("Text16").value = "--";
                    } else {
                        document.getElementById("Text16").value = "异常";
                    }
                } else {
                    if (a4 < 5) {
                        document.getElementById("Text16").value = "--";
                    } else {
                        document.getElementById("Text16").value = "↑";
                    }
                }
            } else if ($("#project4").val() == "白细胞") {
                var a4 = document.getElementById("res4").value;
                if ($("#s").val() == "精液检测") {
                    if (a4 <= 5) {
                        document.getElementById("Text16").value = "--";
                    } else {
                        document.getElementById("Text16").value = "↑";
                    }
                } else {
                    if (a4 < 10) {
                        document.getElementById("Text16").value = "--";
                    } else {
                        document.getElementById("Text16").value = "↑";
                    }
                }
            } else if ($("#project4").val() == "颗粒细胞") {
                var a4 = document.getElementById("res4").value;
                if (a4 < 1) {
                    document.getElementById("Text16").value = "--";
                } else {
                    document.getElementById("Text16").value = "↑";
                }
            } else if ($("#project4").val() == "淀粉样小体") {
                var a4 = document.getElementById("res4").value;
                if (a4 == "有") {
                    document.getElementById("Text16").value = "正常";
                } else {
                    document.getElementById("Text16").value = "异常";
                }
            } else if ($("#project4").val() == "精子") {
                var a4 = document.getElementById("res4").value;
                document.getElementById("Text16").value = "--";
            } else if ($("#project4").val() == "滴虫") {
                var a4 = document.getElementById("res4").value;
                if (a4 == "无") {
                    document.getElementById("Text16").value = "正常";
                } else {
                    document.getElementById("Text16").value = "异常";
                }
            } else if ($("#project4").val() == "结石") {
                var a4 = document.getElementById("res4").value;
                document.getElementById("Text16").value = "--";
            } else if ($("#project4").val() == "粘稠度") {
                var a4 = document.getElementById("res4").value;
                if (a4.indexOf("胶冻") == -1) {
                    document.getElementById("Text16").value = "异常";
                } else {
                    document.getElementById("Text16").value = "正常";
                }
            } else if ($("#project4").val() == "精液液化时间") {
                var a4 = document.getElementById("res4").value;
                if (a4 < 30) {
                    document.getElementById("Text16").value = "正常";
                } else {
                    document.getElementById("Text16").value = "异常";
                }
            } else if ($("#project4").val() == "气味") {
                var a4 = document.getElementById("res4").value;
                if (a4.indexOf("栗花") != -1 || a4.indexOf("石楠") != -1) {
                    document.getElementById("Text16").value = "正常";
                } else {
                    document.getElementById("Text16").value = "异常";
                }
            } else if ($("#project4").val() == "精子活动率") {
                var a4 = document.getElementById("res4").value;
                if (a4 < 80) {
                    document.getElementById("Text16").value = "↓";
                } else if (a4 > 90) {
                    document.getElementById("Text16").value = "↑";
                } else {
                    document.getElementById("Text16").value = "--";
                }
            } else if ($("#project4").val() == "精子活动力（PR+NP）") {
                var a4 = document.getElementById("res4").value;
                if (a4 >= 40) {
                    document.getElementById("Text16").value = "--";
                } else {
                    document.getElementById("Text16").value = "↓";
                }
            } else if ($("#project4").val() == "精子活动力（PR）") {
                var a4 = document.getElementById("res4").value;
                if (a4 >= 32) {
                    document.getElementById("Text16").value = "--";
                } else {
                    document.getElementById("Text16").value = "↓";
                }
            } else if ($("#project4").val() == "精子浓度") {
                var a4 = document.getElementById("res4").value;
                if (a4 >= 15) {
                    document.getElementById("Text16").value = "--";
                } else {
                    document.getElementById("Text16").value = "↓";
                }
            } else if ($("#project4").val() == "精子总数") {
                var a4 = document.getElementById("res4").value;
                if (a4 >= 39) {
                    document.getElementById("Text16").value = "--";
                } else {
                    document.getElementById("Text16").value = "↓";
                }
            } else if ($("#project4").val() == "精子形态") {
                var a4 = document.getElementById("res4").value;
                if (a4 < 20) {
                    document.getElementById("Text16").value = "正常";
                } else {
                    document.getElementById("Text16").value = "异常";
                }
            } else if ($("#project4").val() == "未成熟生殖细胞（生精细胞）") {
                var a4 = document.getElementById("res4").value;
                if (a4 < 1) {
                    document.getElementById("Text16").value = "--";
                } else {
                    document.getElementById("Text16").value = "↓";
                }
            } else if ($("#project4").val() == "果糖") {
                var a4 = document.getElementById("res4").value;
                if (a4 < 9.11) {
                    document.getElementById("Text16").value = "↓";
                } else if (a4 > 17.67) {
                    document.getElementById("Text16").value = "↑";
                } else {
                    document.getElementById("Text16").value = "--";
                }
            } else if ($("#project4").val() == "乳酸脱氢酶-X") {
                var a4 = document.getElementById("res4").value;
                if (a4 < 490) {
                    document.getElementById("Text16").value = "↓";
                } else if (a4 > 2370) {
                    document.getElementById("Text16").value = "↑";
                } else {
                    document.getElementById("Text16").value = "--";
                }
            } else if ($("#project4").val() == "顶体酶") {
                var a4 = document.getElementById("res4").value;
                if (a4 < 15) {
                    document.getElementById("Text16").value = "↓";
                } else if (a4 > 57) {
                    document.getElementById("Text16").value = "↑";
                } else {
                    document.getElementById("Text16").value = "--";
                }
            } else if ($("#project4").val() == "精子低渗肿胀试验") {
                var a4 = document.getElementById("res4").value;
                if (a4 <= 50) {
                    document.getElementById("Text16").value = "↓";
                } else {
                    document.getElementById("Text16").value = "--";
                }
            }
        });

        $("#Select3").change(function () {
            if ($("#project4").val() == "阴道清洁度") {
                var a4 = document.getElementById("Select3").value;
                if (a4 == "Ⅰ度" || a4 == "Ⅱ度") {
                    document.getElementById("Text16").value = "正常";
                } else {
                    document.getElementById("Text16").value = "重度";
                }
            } if ($("#project4").val() == "病原生物学检测") {
                var a4 = document.getElementById("Select3").value;
                if (a4 == "阴性") {
                    document.getElementById("Text16").value = "正常";
                } else {
                    document.getElementById("Text16").value = "异常";
                }
            } if ($("#project4").val() == "抗精子抗体") {
                var a4 = document.getElementById("Select3").value;
                if (a4 == "阴性") {
                    document.getElementById("Text16").value = "正常";
                } else {
                    document.getElementById("Text16").value = "异常";
                }
            }
        })
    });

    //5----------------------------------------------------------------------------------------------------------
    $("#project5").change(function () {
        var ss = "";
        if ($("#s").val() == "阴道分泌物检测") {
            ss = 'yd';
        } else if ($("#s").val() == "精液检测") {
            ss = 'jy';
        } else if ($("#s").val() == "前列腺液检测") {
            ss = 'qlxy';
        }
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler1?type=" + ss,
                     { Name: $('#project5').val() },
                     function (data) {
                         $("#Text19").val(data);
                     });
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler3?type=" + ss,
                      { Name: $('#project5').val() },
                      function (data) {
                          $("#Text18").val(data);
                      });
        $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + ss,
            { Name: $('#project5').val() },
            function (data) {
                dat1 = eval(data);
                $("#Select4").empty();
                $("#Select4").append("<option value=" + "" + ">==请选择==</option>");
                if (dat1 != null) {
                    for (var i = 0; i < dat1.length; i++) {
                        $("#Select4").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                    }
                }
            });

        $("#res5").keyup(function () {
            if ($("#project5").val() == "酸碱度") {
                var a5 = document.getElementById("res5").value;
                var s5 = a5.split('pH');
                if ($("#s").val() == "阴道分泌物检测") {
                    if (s5[1] < 4.0) {
                        document.getElementById("Text20").value = "↓";
                    } else if (s5[1] > 4.5) {
                        document.getElementById("Text20").value = "↑";
                    } else {
                        document.getElementById("Text20").value = "--";
                    }
                } else if ($("#s").val() == "精液检测") {
                    if (s5[1] < 7.2) {
                        document.getElementById("Text20").value = "↓";
                    } else if (s5[1] > 8.0) {
                        document.getElementById("Text20").value = "↑";
                    } else {
                        document.getElementById("Text20").value = "--";
                    }
                } else {
                    if (s5[1] < 6.3) {
                        document.getElementById("Text20").value = "↓";
                    } else if (s5[1] > 6.5) {
                        document.getElementById("Text20").value = "↑";
                    } else {
                        document.getElementById("Text20").value = "--";
                    }
                }
            } else if ($("#project5").val() == "量") {
                var a5 = document.getElementById("res5").value;
                if ($("#s").val() == "精液检测") {
                    if (a5 < 1.5) {
                        document.getElementById("Text20").value = "↓";
                    } else if (a5 > 6.0) {
                        document.getElementById("Text20").value = "↑";
                    } else {
                        document.getElementById("Text20").value = "--";
                    }
                } else {
                    if (a5 > 1.0) {
                        document.getElementById("Text20").value = "↑";
                    } else {
                        document.getElementById("Text20").value = "--";
                    }
                }
            } else if ($("#project5").val() == "磷脂酰胆碱小体") {
                var a5 = document.getElementById("res5").value;

                if (a5 == "大量") {
                    document.getElementById("Text20").value = "--";
                } else {
                    document.getElementById("Text20").value = "↓";
                }

            } else if ($("#project5").val() == "红细胞") {
                var a5 = document.getElementById("res5").value;
                if ($("#s").val() == "精液检测") {
                    if (a5 == "偶见") {
                        document.getElementById("Text20").value = "--";
                    } else {
                        document.getElementById("Text20").value = "异常";
                    }
                } else {
                    if (a5 < 5) {
                        document.getElementById("Text20").value = "--";
                    } else {
                        document.getElementById("Text20").value = "↑";
                    }
                }
            } else if ($("#project5").val() == "白细胞") {
                var a5 = document.getElementById("res5").value;
                if ($("#s").val() == "精液检测") {
                    if (a5 <= 5) {
                        document.getElementById("Text20").value = "--";
                    } else {
                        document.getElementById("Text20").value = "↑";
                    }
                } else {
                    if (a5 < 10) {
                        document.getElementById("Text20").value = "--";
                    } else {
                        document.getElementById("Text20").value = "↑";
                    }
                }
            } else if ($("#project5").val() == "颗粒细胞") {
                var a5 = document.getElementById("res5").value;
                if (a5 < 1) {
                    document.getElementById("Text20").value = "--";
                } else {
                    document.getElementById("Text20").value = "↑";
                }
            } else if ($("#project5").val() == "淀粉样小体") {
                var a5 = document.getElementById("res5").value;
                if (a5 == "有") {
                    document.getElementById("Text20").value = "正常";
                } else {
                    document.getElementById("Text20").value = "异常";
                }
            } else if ($("#project5").val() == "精子") {
                var a5 = document.getElementById("res5").value;
                document.getElementById("Text20").value = "--";
            } else if ($("#project5").val() == "滴虫") {
                var a5 = document.getElementById("res5").value;
                if (a5 == "无") {
                    document.getElementById("Text20").value = "正常";
                } else {
                    document.getElementById("Text20").value = "异常";
                }
            } else if ($("#project5").val() == "结石") {
                var a5 = document.getElementById("res5").value;
                document.getElementById("Text20").value = "--";
            } else if ($("#project5").val() == "粘稠度") {
                var a5 = document.getElementById("res5").value;
                if (a5.indexOf("胶冻") == -1) {
                    document.getElementById("Text20").value = "异常";
                } else {
                    document.getElementById("Text20").value = "正常";
                }
            } else if ($("#project5").val() == "精液液化时间") {
                var a5 = document.getElementById("res5").value;
                if (a5 < 30) {
                    document.getElementById("Text20").value = "正常";
                } else {
                    document.getElementById("Text20").value = "异常";
                }
            } else if ($("#project5").val() == "气味") {
                var a5 = document.getElementById("res5").value;
                if (a5.indexOf("栗花") != -1 || a5.indexOf("石楠") != -1) {
                    document.getElementById("Text20").value = "正常";
                } else {
                    document.getElementById("Text20").value = "异常";
                }
            } else if ($("#project5").val() == "精子活动率") {
                var a5 = document.getElementById("res5").value;
                if (a5 < 80) {
                    document.getElementById("Text20").value = "↓";
                } else if (a5 > 90) {
                    document.getElementById("Text20").value = "↑";
                } else {
                    document.getElementById("Text20").value = "--";
                }
            } else if ($("#project5").val() == "精子活动力（PR+NP）") {
                var a5 = document.getElementById("res5").value;
                if (a5 >= 40) {
                    document.getElementById("Text20").value = "--";
                } else {
                    document.getElementById("Text20").value = "↓";
                }
            } else if ($("#project5").val() == "精子活动力（PR）") {
                var a5 = document.getElementById("res5").value;
                if (a5 >= 32) {
                    document.getElementById("Text20").value = "--";
                } else {
                    document.getElementById("Text20").value = "↓";
                }
            } else if ($("#project5").val() == "精子浓度") {
                var a5 = document.getElementById("res5").value;
                if (a5 >= 15) {
                    document.getElementById("Text20").value = "--";
                } else {
                    document.getElementById("Text20").value = "↓";
                }
            } else if ($("#project5").val() == "精子总数") {
                var a5 = document.getElementById("res5").value;
                if (a5 >= 39) {
                    document.getElementById("Text20").value = "--";
                } else {
                    document.getElementById("Text20").value = "↓";
                }
            } else if ($("#project5").val() == "精子形态") {
                var a5 = document.getElementById("res5").value;
                if (a5 < 20) {
                    document.getElementById("Text20").value = "正常";
                } else {
                    document.getElementById("Text20").value = "异常";
                }
            } else if ($("#project5").val() == "未成熟生殖细胞（生精细胞）") {
                var a5 = document.getElementById("res5").value;
                if (a5 < 1) {
                    document.getElementById("Text20").value = "--";
                } else {
                    document.getElementById("Text20").value = "↓";
                }
            } else if ($("#project5").val() == "果糖") {
                var a5 = document.getElementById("res5").value;
                if (a5 < 9.11) {
                    document.getElementById("Text20").value = "↓";
                } else if (a5 > 17.67) {
                    document.getElementById("Text20").value = "↑";
                } else {
                    document.getElementById("Text20").value = "--";
                }
            } else if ($("#project5").val() == "乳酸脱氢酶-X") {
                var a5 = document.getElementById("res5").value;
                if (a5 < 490) {
                    document.getElementById("Text20").value = "↓";
                } else if (a5 > 2370) {
                    document.getElementById("Text20").value = "↑";
                } else {
                    document.getElementById("Text20").value = "--";
                }
            } else if ($("#project5").val() == "顶体酶") {
                var a5 = document.getElementById("res5").value;
                if (a5 < 15) {
                    document.getElementById("Text20").value = "↓";
                } else if (a5 > 57) {
                    document.getElementById("Text20").value = "↑";
                } else {
                    document.getElementById("Text20").value = "--";
                }
            } else if ($("#project5").val() == "精子低渗肿胀试验") {
                var a5 = document.getElementById("res5").value;
                if (a5 <= 50) {
                    document.getElementById("Text20").value = "↓";
                } else {
                    document.getElementById("Text20").value = "--";
                }
            }
        });

        $("#Select4").change(function () {
            if ($("#project5").val() == "阴道清洁度") {
                var a5 = document.getElementById("Select4").value;
                if (a5 == "Ⅰ度" || a5 == "Ⅱ度") {
                    document.getElementById("Text20").value = "正常";
                } else {
                    document.getElementById("Text20").value = "重度";
                }
            } if ($("#project5").val() == "病原生物学检测") {
                var a5 = document.getElementById("Select4").value;
                if (a5 == "阴性") {
                    document.getElementById("Text20").value = "正常";
                } else {
                    document.getElementById("Text20").value = "异常";
                }
            } if ($("#project5").val() == "抗精子抗体") {
                var a5 = document.getElementById("Select4").value;
                if (a5 == "阴性") {
                    document.getElementById("Text20").value = "正常";
                } else {
                    document.getElementById("Text20").value = "异常";
                }
            }
        })
    });

    //===============================================================修改内容 打开显示======================================================================
    $.post("/MedicalHistory_TestReport_HumorCheck/Show?id=" + id,
               function (data) {
                   dts = eval(data);
                   if (dts != "") {
                       $("#name").val(dts[0].names);
                       $("input[name=" + "sex" + "][value=" + dts[0].sex + "]").attr("checked", "checked");
                       $("#id_card_number").val(dts[0].id_card_number);
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
                       $("#s").val(dts[0].check_project);
                       $("#numb").val(dts[0].sample_id);
                       $("#CheckCompany").val(dts[0].check_company);
                       $("#sjdoctor").val(dts[0].inspect_doctor);
                       $("#jcdoctor").val(dts[0].check_doctor);
                       $("#bgdoctor").val(dts[0].report_doctor);
                       if (dts[0].check_project == "阴道分泌物检测") {
                           $("#titles").html("阴道分泌物检测");
                       } else if (dts[0].check_project == "精液检测") {
                           $("#titles").html("精液检测");
                       } else {
                           $("#titles").html("前列腺液检测");
                       }

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
                           $("#bgtime").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }

                       var type = '';
                       if (dts[0].check_project == "阴道分泌物检测") {
                           type = 'yd';
                       } else if (dts[0].check_project == "精液检测") {
                           type = 'jy';
                       } else if (dts[0].check_project == "前列腺液检测") {
                           type = 'qlxy';
                       }
                       $.post("/MedicalHistory_TestReport_HumorCheck/Handler?type=" + type,
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
                               if (dat1 != null) {
                                   for (var i = 0; i < dat1.length; i++) {
                                       $("#project1").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                                       $("#project2").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                                       $("#project3").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                                       $("#project4").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                                       $("#project5").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
                                   }
                               }
                               $("#project1").val(dts[0].name1);
                               $("#project2").val(dts[0].name2);
                               $("#project3").val(dts[0].name3);
                               $("#project4").val(dts[0].name4);
                               $("#project5").val(dts[0].name5);
                           })

                       if (dts[0].check_project == "阴道分泌物检测") {
                           if (dts[0].name1 == "酸碱度") {
                               document.getElementById("d5").style.display = "";
                               document.getElementById("d6").style.display = "none";
                               $("#res1").val(dts[0].result1);
                           } else {
                               document.getElementById("d5").style.display = "none";
                               document.getElementById("d6").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                   { Name: dts[0].name1 },
                                    function (data) {
                                        dat1 = eval(data);
                                        $("#select").empty();
                                        $("#select").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat1 != null) {
                                            for (var i = 0; i < dat1.length; i++) {
                                                $("#select").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                            }
                                        }
                                        $("#select").val(dts[0].result1);
                                    });
                           }

                           if (dts[0].name2 == "酸碱度") {
                               document.getElementById("Div1").style.display = "";
                               $("#res2").val(dts[0].result2);
                               document.getElementById("Div2").style.display = "none";
                           } else {
                               document.getElementById("Div1").style.display = "none";
                               document.getElementById("Div2").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                  { Name: dts[0].name2 },
                                   function (data) {
                                       dat1 = eval(data);
                                       $("#Select1").empty();
                                       $("#Select1").append("<option value=" + "" + ">==请选择==</option>");
                                       if (dat1 != null) {
                                           for (var i = 0; i < dat1.length; i++) {
                                               $("#Select1").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                           }
                                       }
                                       $("#Select1").val(dts[0].result2);
                                   });
                           }

                           if (dts[0].name3 == "酸碱度") {
                               document.getElementById("Div3").style.display = "";
                               $("#res3").val(dts[0].result3);
                               document.getElementById("Div4").style.display = "none";
                           } else {
                               document.getElementById("Div3").style.display = "none";
                               document.getElementById("Div4").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                  { Name: dts[0].name3 },
                                   function (data) {
                                       dat1 = eval(data);
                                       $("#Select2").empty();
                                       $("#Select2").append("<option value=" + "" + ">==请选择==</option>");
                                       if (dat1 != null) {
                                           for (var i = 0; i < dat1.length; i++) {
                                               $("#Select2").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                           }
                                       }
                                       $("#Select2").val(dts[0].result3);
                                   });
                           }

                           if (dts[0].name4 == "酸碱度") {
                               document.getElementById("Div5").style.display = "";
                               $("#res4").val(dts[0].result4);
                               document.getElementById("Div6").style.display = "none";
                           } else {
                               document.getElementById("Div5").style.display = "none";
                               document.getElementById("Div6").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                  { Name: dts[0].name4 },
                                   function (data) {
                                       dat1 = eval(data);
                                       $("#Select3").empty();
                                       $("#Select3").append("<option value=" + "" + ">==请选择==</option>");
                                       if (dat1 != null) {
                                           for (var i = 0; i < dat1.length; i++) {
                                               $("#Select3").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                           }
                                       }
                                       $("#Select3").val(dts[0].result4);
                                   });
                           }

                           if (dts[0].name5 == "酸碱度") {
                               document.getElementById("Div7").style.display = "";
                               $("#res5").val(dts[0].result5);
                               document.getElementById("Div8").style.display = "none";
                           } else {
                               document.getElementById("Div7").style.display = "none";
                               document.getElementById("Div8").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                  { Name: dts[0].name5 },
                                   function (data) {
                                       dat1 = eval(data);
                                       $("#Select4").empty();
                                       $("#Select4").append("<option value=" + "" + ">==请选择==</option>");
                                       if (dat1 != null) {
                                           for (var i = 0; i < dat1.length; i++) {
                                               $("#Select4").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                           }
                                       }
                                       $("#Select4").val(dts[0].result5);
                                   });
                           }
                       } else if (dts[0].check_project == "精液检测") {
                           if (dts[0].name1 == "颜色和透明度" || dts[0].name1 == "病原生物学检测" || dts[0].name1 == "抗精子抗体") {
                               document.getElementById("d5").style.display = "none";
                               document.getElementById("d6").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                  { Name: dts[0].name1 },
                                   function (data) {
                                       dat1 = eval(data);
                                       $("#select").empty();
                                       $("#select").append("<option value=" + "" + ">==请选择==</option>");
                                       if (dat1 != null) {
                                           for (var i = 0; i < dat1.length; i++) {
                                               $("#select").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                           }
                                       }
                                       $("#select").val(dts[0].result1);
                                   });
                           } else {
                               document.getElementById("d5").style.display = "";
                               $("#res1").val(dts[0].result1);
                               document.getElementById("d6").style.display = "none";
                           }

                           if (dts[0].name2 == "颜色和透明度" || dts[0].name2 == "病原生物学检测" || dts[0].name2 == "抗精子抗体") {
                               document.getElementById("Div1").style.display = "none";
                               document.getElementById("Div2").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                 { Name: dts[0].name2 },
                                  function (data) {
                                      dat1 = eval(data);
                                      $("#Select1").empty();
                                      $("#Select1").append("<option value=" + "" + ">==请选择==</option>");
                                      if (dat1 != null) {
                                          for (var i = 0; i < dat1.length; i++) {
                                              $("#Select1").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                          }
                                      }
                                      $("#Select1").val(dts[0].result2);
                                  });
                           } else {
                               document.getElementById("Div1").style.display = "";
                               $("#res2").val(dts[0].result2);
                               document.getElementById("Div2").style.display = "none";
                           }

                           if (dts[0].name3 == "颜色和透明度" || dts[0].name3 == "病原生物学检测" || dts[0].name3 == "抗精子抗体") {
                               document.getElementById("Div3").style.display = "none";
                               document.getElementById("Div4").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                  { Name: dts[0].name3 },
                                   function (data) {
                                       dat1 = eval(data);
                                       $("#Select2").empty();
                                       $("#Select2").append("<option value=" + "" + ">==请选择==</option>");
                                       if (dat1 != null) {
                                           for (var i = 0; i < dat1.length; i++) {
                                               $("#Select2").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                           }
                                       }
                                       $("#Select2").val(dts[0].result3);
                                   });
                           } else {
                               document.getElementById("Div3").style.display = "";
                               $("#res3").val(dts[0].result3);
                               document.getElementById("Div4").style.display = "none";
                           }

                           if (dts[0].name4 == "颜色和透明度" || dts[0].name4 == "病原生物学检测" || dts[0].name4 == "抗精子抗体") {
                               document.getElementById("Div5").style.display = "none";
                               document.getElementById("Div6").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                  { Name: dts[0].name4 },
                                   function (data) {
                                       dat1 = eval(data);
                                       $("#Select3").empty();
                                       $("#Select3").append("<option value=" + "" + ">==请选择==</option>");
                                       if (dat1 != null) {
                                           for (var i = 0; i < dat1.length; i++) {
                                               $("#Select3").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                           }
                                       }
                                       $("#Select3").val(dts[0].result4);
                                   });
                           } else {
                               document.getElementById("Div5").style.display = "";
                               $("#res4").val(dts[0].result4);
                               document.getElementById("Div6").style.display = "none";
                           }
                           if (dts[0].name5 == "颜色和透明度" || dts[0].name5 == "病原生物学检测" || dts[0].name5 == "抗精子抗体") {
                               document.getElementById("Div7").style.display = "none";
                               document.getElementById("Div8").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                 { Name: dts[0].name5 },
                                  function (data) {
                                      dat1 = eval(data);
                                      $("#Select4").empty();
                                      $("#Select4").append("<option value=" + "" + ">==请选择==</option>");
                                      if (dat1 != null) {
                                          for (var i = 0; i < dat1.length; i++) {
                                              $("#Select4").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                          }
                                      }
                                      $("#Select4").val(dts[0].result5);
                                  });
                           } else {
                               document.getElementById("Div7").style.display = "";
                               $("#res5").val(dts[0].result5);
                               document.getElementById("Div8").style.display = "none";
                           }

                       } else if (dts[0].check_project == "前列腺液检测") {
                           if (dts[0].name1 == "颜色和透明度") {
                               document.getElementById("d5").style.display = "none";
                               document.getElementById("d6").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                  { Name: dts[0].name1 },
                                   function (data) {
                                       dat1 = eval(data);
                                       $("#select").empty();
                                       $("#select").append("<option value=" + "" + ">==请选择==</option>");
                                       if (dat1 != null) {
                                           for (var i = 0; i < dat1.length; i++) {
                                               $("#select").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                           }
                                       }
                                       $("#select").val(dts[0].result1);
                                   });
                           } else {
                               document.getElementById("d5").style.display = "";
                               $("#res1").val(dts[0].result1);
                               document.getElementById("d6").style.display = "none";
                           }

                           if (dts[0].name2 == "颜色和透明度") {
                               document.getElementById("Div1").style.display = "none";
                               document.getElementById("Div2").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                 { Name: dts[0].name2 },
                                  function (data) {
                                      dat1 = eval(data);
                                      $("#Select1").empty();
                                      $("#Select1").append("<option value=" + "" + ">==请选择==</option>");
                                      if (dat1 != null) {
                                          for (var i = 0; i < dat1.length; i++) {
                                              $("#Select1").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                          }
                                      }
                                      $("#Select1").val(dts[0].result2);
                                  });
                           } else {
                               document.getElementById("Div1").style.display = "";
                               $("#res2").val(dts[0].result2);
                               document.getElementById("Div2").style.display = "none";
                           }

                           if (dts[0].name3 == "颜色和透明度") {
                               document.getElementById("Div3").style.display = "none";
                               document.getElementById("Div4").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                  { Name: dts[0].name3 },
                                   function (data) {
                                       dat1 = eval(data);
                                       $("#Select2").empty();
                                       $("#Select2").append("<option value=" + "" + ">==请选择==</option>");
                                       if (dat1 != null) {
                                           for (var i = 0; i < dat1.length; i++) {
                                               $("#Select2").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                           }
                                       }
                                       $("#Select2").val(dts[0].result3);
                                   });
                           } else {
                               document.getElementById("Div3").style.display = "";
                               $("#res3").val(dts[0].result3);
                               document.getElementById("Div4").style.display = "none";
                           }

                           if (dts[0].name4 == "颜色和透明度") {
                               document.getElementById("Div5").style.display = "none";
                               document.getElementById("Div6").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                { Name: dts[0].name4 },
                                 function (data) {
                                     dat1 = eval(data);
                                     $("#Select3").empty();
                                     $("#Select3").append("<option value=" + "" + ">==请选择==</option>");
                                     if (dat1 != null) {
                                         for (var i = 0; i < dat1.length; i++) {
                                             $("#Select3").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                         }
                                     }
                                     $("#Select3").val(dts[0].result4);
                                 });
                           } else {
                               document.getElementById("Div5").style.display = "";
                               $("#res4").val(dts[0].result4);
                               document.getElementById("Div6").style.display = "none";
                           }

                           if (dts[0].name5 == "颜色和透明度") {
                               document.getElementById("Div7").style.display = "none";
                               document.getElementById("Div8").style.display = "";
                               $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + type,
                                { Name: dts[0].name5 },
                                 function (data) {
                                     dat1 = eval(data);
                                     $("#Select4").empty();
                                     $("#Select4").append("<option value=" + "" + ">==请选择==</option>");
                                     if (dat1 != null) {
                                         for (var i = 0; i < dat1.length; i++) {
                                             $("#Select4").append("<option value=" + dat1[i].result + ">" + dat1[i].result + "</option>");
                                         }
                                     }
                                     $("#Select4").val(dts[0].result5);
                                 });
                           } else {
                               document.getElementById("Div7").style.display = "";
                               $("#res5").val(dts[0].result5);
                               document.getElementById("Div8").style.display = "none";
                           }
                       }

                       $("#Text1").val(dts[0].unit1);
                       $("#Text2").val(dts[0].qujian1);
                       $("#Text3").val(dts[0].tishi1);
                       $("#Text4").val(dts[0].beizhu1);


                       $("#Text6").val(dts[0].unit2);
                       $("#Text7").val(dts[0].qujian2);
                       $("#Text8").val(dts[0].tishi2);
                       $("#Text9").val(dts[0].beizhu2);


                       $("#Text10").val(dts[0].unit3);
                       $("#Text11").val(dts[0].qujian3);
                       $("#Text12").val(dts[0].tishi3);
                       $("#Text13").val(dts[0].beizhu3);


                       $("#Text14").val(dts[0].unit4);
                       $("#Text15").val(dts[0].qujian4);
                       $("#Text16").val(dts[0].tishi4);
                       $("#Text17").val(dts[0].beizhu4);


                       $("#Text18").val(dts[0].unit5);
                       $("#Text19").val(dts[0].qujian5);
                       $("#Text20").val(dts[0].tishi5);
                       $("#Text21").val(dts[0].beizhu5);
                        
                   }

               })
    $.post("/MedicalHistory_TestReport_HumorCheck/ShowAdd?id=" + id,
                        function (datas) {
                            datss = eval(datas);
                            if (datss != "") {
                                for (i = 1; i <= datss.length; i++) {
                                    $("#tab1").append('<tr style="height:30px"><td class="auto-style184">' + (5 + i) + '</td><td class="auto-style185">' +
                            '<select id="project_' + i + '" name="project_' + i + '" style="width: 157px;">' +
                                '<option value="">==请选择==</option>' +
                            '</select>' +
                        '</td>' +
                        '<td style="background-color:#e2ebfb">' +
                            '<div id="d_' + i + '">' +
                                '<input type="text" name="res_' + i + '" id="res_' + i + '" style="width:200px"/>' +
                            '</div>' +
                            '<div id="f_' + i + '" style="display: none">' +
                                '<select id="select_' + i + '" style="width:200px;" name="select_' + i + '">' +
                                    '<option value="">==请选择==</option>' +
                                '</select>' +
                            '</div>' +
                        '</td>' +
                        '<td class="auto-style195">' +
                            '<input type="text" id="unit_' + i + '" name="unit_' + i + '" style="border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width: 60px;"" />' +
                        '</td>' +
                        '<td class="auto-style188">' +
                            '<input type="text" id="qujian_' + i + '" name="qujian_' + i + '" style="border-style: none; border-color: inherit;background-color:#e2ebfb; border-width: 0px;" />' +
                        '</td>' +
                        '<td class="auto-style191">' +
                            '<input type="text" id="tishi_' + i + '" name="tishi_' + i + '" style="border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width:40px" />' +
                        '</td>' +
                        '<td class="auto-style190">' +
                            '<input type="text" id="beizhu_' + i + '" name="beizhu_' + i + '" style="width: 205px; height: 20px" />' +
                        '</td>' +
                    '</tr>');
 
                                    //--------------------------------------------------------------------------------
                                    $('#project_' + i + '').val(dat[i - 1].name);
                                    $('#tresult_' + i + '').val(dat[i - 1].result);
                                    $('#unit_' + i + '').val(dat[i - 1].unit);
                                    $('#qujian_' + i + '').val(dat[i - 1].qujian);
                                    $('#tishi_' + i + '').val(dat[i - 1].tishi);
                                    $('#beizhu_' + i + '').val(dat[i - 1].beizhu);
                                    //--------------------------------------------------------------选择修改事件------------------------------------------------


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
        $.post("/MedicalHistory_TestReport_HumorCheck/AddAndUpdate?id=" + id + "&worker=" + worker + "&community_code=" + community_code,
            $("#form1").serialize(),
            function (msgs) {
                var msg = msgs.split(',');
                alert(msg[0]);
                window.close();
            })
    }
}
//=============================================================================

//============================================================================动态增加一行=============================================================================
var i = 1;
function added1() {
    if ($("#project1").val() != "" && $("#project2").val() != "" && $("#project3").val() != "" && $("#project4").val() != "" && $("#project5").val() != "" && $('#project_' + (i - 1) + '').val() != "") {
        if (i < 17) {
            $("#tab1").append('<tr style="height:30px"><td class="auto-style184">' + (5 + i) + '</td><td class="auto-style185">' +
                                '<select id="project_' + i + '" name="project_' + i + '" style="width: 157px;">' +
                                    '<option value="">==请选择==</option>' +
                                '</select>' +
                            '</td>' +
                            '<td style="background-color:#e2ebfb">' +
                                '<div id="d_' + i + '">' +
                                    '<input type="text" name="res_' + i + '" id="res_' + i + '" style="width:200px"/>' +
                                '</div>' +
                                '<div id="f_' + i + '" style="display: none">' +
                                    '<select id="select_' + i + '" style="width:200px;" name="select_' + i + '">' +
                                        '<option value="">==请选择==</option>' +
                                    '</select>' +
                                '</div>' +
                            '</td>' +
                            '<td class="auto-style195">' +
                                '<input type="text" id="unit_' + i + '" name="unit_' + i + '" style="border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width: 60px;"" />' +
                            '</td>' +
                            '<td class="auto-style188">' +
                                '<input type="text" id="qujian_' + i + '" name="qujian_' + i + '" style="border-style: none; border-color: inherit;background-color:#e2ebfb; border-width: 0px;" />' +
                            '</td>' +
                            '<td class="auto-style191">' +
                                '<input type="text" id="tishi_' + i + '" name="tishi_' + i + '" style="border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width:40px" />' +
                            '</td>' +
                            '<td class="auto-style190">' +
                                '<input type="text" id="beizhu_' + i + '" name="beizhu_' + i + '" style="width: 205px; height: 20px" />' +
                            '</td>' +
                        '</tr>');
            //------------------------------------------------------------------------------增加事件-------------------------------------------------------------------------
            var type1 = 'yd';
            var type2 = 'jy';
            var type3 = 'qlxy';
            if ($("#s").val() == "阴道分泌物检测") {
                $.post("/MedicalHistory_TestReport_HumorCheck/Handler?type=" + type1,
            function (data1) {
                dat1 = eval(data1);
                $('#project_' + i + '').empty();
                $('#project_' + i + '').append("<option value=" + "" + ">==请选择==</option>");
                if (dat1 != null) {
                    for (var j = 0; j < dat1.length; j++) {
                        $('#project_' + (i - 1) + '').append("<option value=" + dat1[j].name + ">" + dat1[j].name + "</option>");
                    }
                }
            });
                $('#project_' + i + '').change(function () {
                    if ($('#project_' + (i - 1) + '').val() == "酸碱度") {
                        document.getElementById('d_' + (i - 1) + '').style.display = "";
                        document.getElementById('res_' + (i - 1) + '').value = 'pH';
                        document.getElementById('f_' + (i - 1) + '').style.display = "none";
                    } else {
                        document.getElementById('d_' + (i - 1) + '').style.display = "none";
                        document.getElementById('f_' + (i - 1) + '').style.display = "";
                    }
                })
            } else if ($("#s").val() == "精液检测") {
                $.post("/MedicalHistory_TestReport_HumorCheck/Handler?type=" + type2,
               function (data1) {
                   dat1 = eval(data1);
                   $('#project_' + i + '').empty();
                   $('#project_' + i + '').append("<option value=" + "" + ">==请选择==</option>");
                   if (dat1 != null) {
                       for (var j = 0; j < dat1.length; j++) {
                           $('#project_' + (i - 1) + '').append("<option value=" + dat1[j].name + ">" + dat1[j].name + "</option>");
                       }
                   }
               });
                $('#project_' + i + '').change(function () {
                    if ($('#project_' + (i - 1) + '').val() == "颜色和透明度" || $('#project_' + (i - 1) + '').val() == "病原生物学检测" || $('#project_' + (i - 1) + '').val() == "抗精子抗体") {
                        document.getElementById('f_' + (i - 1) + '').style.display = "";
                        document.getElementById('d_' + (i - 1) + '').style.display = "none";
                    } else {
                        document.getElementById('f_' + (i - 1) + '').style.display = "none";
                        document.getElementById('d_' + (i - 1) + '').style.display = "";
                        if ($('#project_' + (i - 1) + '').val() == "酸碱度") {
                            document.getElementById('res_' + (i - 1) + '').value = 'pH';
                        }
                    }
                })
            } else if ($("#s").val() == "前列腺液检测") {
                $.post("/MedicalHistory_TestReport_HumorCheck/Handler?type=" + type3,
              function (data1) {
                  dat1 = eval(data1);
                  $('#project_' + i + '').empty();
                  $('#project_' + i + '').append("<option value=" + "" + ">==请选择==</option>");
                  if (dat1 != null) {
                      for (var j = 0; j < dat1.length; j++) {
                          $('#project_' + (i - 1) + '').append("<option value=" + dat1[j].name + ">" + dat1[j].name + "</option>");
                      }
                  }
              });

                $('#project_' + i + '').change(function () {
                    if ($('#project_' + (i - 1) + '').val() == "颜色和透明度") {
                        document.getElementById('f_' + (i - 1) + '').style.display = "";
                        document.getElementById('d_' + (i - 1) + '').style.display = "none";
                    } else {
                        document.getElementById('f_' + (i - 1) + '').style.display = "none";
                        document.getElementById('d_' + (i - 1) + '').style.display = "";
                        if ($('#project_' + (i - 1) + '').val() == "酸碱度") {
                            document.getElementById('res_' + (i - 1) + '').value = 'pH';
                        }
                    }
                })
            }
            //-----------------------------------------------------------------------判断----------------------------------------------------------------------
            $('#project_' + i + '').change(function () {
                var ss = "";
                if ($("#s").val() == "阴道分泌物检测") {
                    ss = 'yd';
                } else if ($("#s").val() == "精液检测") {
                    ss = 'jy';
                } else if ($("#s").val() == "前列腺液检测") {
                    ss = 'qlxy';
                }
                $.post("/MedicalHistory_TestReport_HumorCheck/Handler1?type=" + ss,
                             { Name: $('#project_' + (i - 1) + '').val() },
                             function (data) {
                                 $('#qujian_' + (i - 1) + '').val(data);
                             });
                $.post("/MedicalHistory_TestReport_HumorCheck/Handler3?type=" + ss,
                              { Name: $('#project_' + (i - 1) + '').val() },
                              function (data) {
                                  $('#unit_' + (i - 1) + '').val(data);
                              });
                $.post("/MedicalHistory_TestReport_HumorCheck/Handler4?type=" + ss,
                    { Name: $('#project_' + (i - 1) + '').val() },
                    function (data) {
                        dat1 = eval(data);
                        $('#select_' + (i - 1) + '').empty();
                        $('#select_' + (i - 1) + '').append("<option value=" + "" + ">==请选择==</option>");
                        if (dat1 != null) {
                            for (var m = 0; m < dat1.length; m++) {
                                $('#select_' + (i - 1) + '').append("<option value=" + dat1[m].result + ">" + dat1[m].result + "</option>");
                            }
                        }
                    });
            });
            $('#res_' + i + '').keyup(function () {
                var a1 = $('#res_' + (i - 1) + '').val();
                if ($('#project_' + (i - 1) + '').val() == "酸碱度") {
                    var s = a1.split('pH');
                    if ($("#s").val() == "阴道分泌物检测") {
                        if (s[1] < 4.0) {
                            document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                        } else if (s[1] > 4.5) {
                            document.getElementById('tishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('tishi_' + (i - 1) + '').value = "--";
                        }
                    } else if ($("#s").val() == "精液检测") {
                        if (s[1] < 7.2) {
                            document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                        } else if (s[1] > 8.0) {
                            document.getElementById('tishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('tishi_' + (i - 1) + '').value = "--";
                        }
                    } else {
                        if (s[1] < 6.3) {
                            document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                        } else if (s[1] > 6.5) {
                            document.getElementById('tishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('tishi_' + (i - 1) + '').value = "--";
                        }
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "量") {
                    if ($("#s").val() == "精液检测") {
                        if (a1 < 1.5) {
                            document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 6.0) {
                            document.getElementById('tishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('tishi_' + (i - 1) + '').value = "--";
                        }
                    } else {
                        if (a1 > 1.0) {
                            document.getElementById('tishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('tishi_' + (i - 1) + '').value = "--";
                        }
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "磷脂酰胆碱小体") {
                    if (a1 == "大量") {
                        document.getElementById('tishi_' + (i - 1) + '').value = "--";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                    }

                } else if ($('#project_' + (i - 1) + '').val() == "红细胞") {
                    if ($("#s").val() == "精液检测") {
                        if (a1 == "偶见") {
                            document.getElementById('tishi_' + (i - 1) + '').value = "--";
                        } else {
                            document.getElementById('tishi_' + (i - 1) + '').value = "异常";
                        }
                    } else {
                        if (a1 < 5) {
                            document.getElementById('tishi_' + (i - 1) + '').value = "--";
                        } else {
                            document.getElementById('tishi_' + (i - 1) + '').value = "↑";
                        }
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "白细胞") {
                    if ($("#s").val() == "精液检测") {
                        if (a1 <= 5) {
                            document.getElementById('tishi_' + (i - 1) + '').value = "--";
                        } else {
                            document.getElementById('tishi_' + (i - 1) + '').value = "↑";
                        }
                    } else {
                        if (a1 < 10) {
                            document.getElementById('tishi_' + (i - 1) + '').value = "--";
                        } else {
                            document.getElementById('tishi_' + (i - 1) + '').value = "↑";
                        }
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "颗粒细胞") {
                    if (a1 < 1) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "--";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↑";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "淀粉样小体") {
                    if (a1 == "有") {
                        document.getElementById('tishi_' + (i - 1) + '').value = "正常";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "异常";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "精子") {
                    document.getElementById('tishi_' + (i - 1) + '').value = "--";
                } else if ($('#project_' + (i - 1) + '').val() == "滴虫") {
                    if (a1 == "无") {
                        document.getElementById('tishi_' + (i - 1) + '').value = "正常";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "异常";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "结石") {
                    document.getElementById('tishi_' + (i - 1) + '').value = "--";
                } else if ($('#project_' + (i - 1) + '').val() == "粘稠度") {
                    if (a1.indexOf("胶冻") == -1) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "异常";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "正常";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "精液液化时间") {
                    if (a1 < 30) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "正常";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "异常";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "气味") {
                    if (a1.indexOf("栗花") != -1 || a1.indexOf("石楠") != -1) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "正常";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "异常";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "精子活动率") {
                    if (a1 < 80) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                    } else if (a1 > 90) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↑";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "--";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "精子活动力（PR+NP）") {
                    if (a1 >= 40) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "--";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "精子活动力（PR）") {
                    if (a1 >= 32) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "--";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "精子浓度") {
                    if (a1 >= 15) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "--";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "精子总数") {
                    if (a1 >= 39) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "--";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "精子形态") {
                    if (a1 < 20) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "正常";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "异常";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "未成熟生殖细胞（生精细胞）") {
                    if (a1 < 1) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "--";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "果糖") {
                    if (a1 < 9.11) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                    } else if (a1 > 17.67) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↑";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "--";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "乳酸脱氢酶-X") {
                    if (a1 < 490) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                    } else if (a1 > 2370) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↑";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "--";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "顶体酶") {
                    if (a1 < 15) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                    } else if (a1 > 57) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↑";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "--";
                    }
                } else if ($('#project_' + (i - 1) + '').val() == "精子低渗肿胀试验") {
                    if (a1 <= 50) {
                        document.getElementById('tishi_' + (i - 1) + '').value = "↓";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "--";
                    }
                }
            });

            $('#select_' + i + '').change(function () {
                var a1 = $('#select_' + (i - 1) + '').val();
                if ($('#project_' + (i - 1) + '').val() == "阴道清洁度") {
                    if (a1 == "Ⅰ度" || a1 == "Ⅱ度") {
                        document.getElementById('tishi_' + (i - 1) + '').value = "正常";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "重度";
                    }
                } if ($('#project_' + (i - 1) + '').val() == "病原生物学检测") {
                    if (a1 == "阴性") {
                        document.getElementById('tishi_' + (i - 1) + '').value = "正常";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "异常";
                    }
                } if ($('#project_' + (i - 1) + '').val() == "抗精子抗体") {
                    if (a1 == "阴性") {
                        document.getElementById('tishi_' + (i - 1) + '').value = "正常";
                    } else {
                        document.getElementById('tishi_' + (i - 1) + '').value = "异常";
                    }
                }
            });
            i++;
        }
    } else {
        alert("请填写上一行内容！");
    }
}

