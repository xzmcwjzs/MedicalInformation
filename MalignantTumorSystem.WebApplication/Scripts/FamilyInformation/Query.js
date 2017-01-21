$(function () {
    if (no == "1") {
        $("#last").hide();
    } else if (no == "2") {
        $("#cd").hide();
    }

    $("#relation_names0").attr("disabled", true);
    $("#relation_id_card0").attr("disabled", true);
    $("#relation_phone0").attr("disabled", true);
    $("#relation_age0").attr("disabled", true);


    $("#cd").click(function () {
        $("#relation_names0").attr("disabled", true);
        $("#relation_id_card0").attr("disabled", true);
        $("#relation_phone0").attr("disabled", true);
        $("#relation_age0").attr("disabled", true);
    })

    $("#host_name").autocomplete('/Data/NameMatch', {
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
            var date = new Date(parseInt(data.birth_date.replace("/Date(", "").replace(")/", ""), 10));
            var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

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
        $("#post_code").val(data.post_code);
        $("#resident_id").val(data.resident_id);
        $("#hostFather_name").val(data.father_name);
        $("#hostFather_idCard").val(data.father_id_card_numb);
        $("#hostFather_phone").val(data.father_phone);
        $("#hostMother_name").val(data.mother_name);
        $("#hostMother_idCard").val(data.mother_id_card_numb);
        $("#hostMother_phone").val(data.mother_phone);

        //验证此人是否已经存在家庭信息
        $.post("/FamilyInformation/Validate?id_card_number=" + data.id_card_number,
         function (data) {
             if (data == "True") {
                 alert("此人家庭信息已经存在！");
                 //form1.reset();
                 window.location.reload();
             }
         });
    }

    $("#host_name").result(log).click(function () {
        $(this).prev().search();
    });
    //---------------------------------------------------身份证号验证信息 户主身份证号验证  娄帅------------------------------------------------
    $("#id_card_number").blur(
        function () {
            if ($("#id_card_number").val() != "") {
                $.post("/FamilyInformation/Validate?id_card_number=" + $("#id_card_number").val(),
             function (data) {
                 if (data == "True") {
                     alert("此人家庭信息已经存在！");
                     form1.reset();
                 }
                 else {
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
                                 $("#age").val("");

                             }
                             else {
                                 var s1 = s.substring(6, 10);
                                 var s2 = s.substring(10, 12);
                                 var s3 = s.substring(12, 14);

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
                         $("#age").val("");
                     }
                 }
             });
            }
        })

    //1========户主配偶身份证号验证==========
    $("#spouse_idCard").blur(function () {
        var s = $("#spouse_idCard").val();
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
                    $("#spouse_idCard").val("");
                    $("#spouse_age").val("");
                    $("#spouse_birth_date").val("");
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
                        $("#spouse_idCard").val("");
                        $("#spouse_age").val("");
                        $("#spouse_birth_date").val("");
                    }
                    else {
                        var s1 = s.substring(6, 10);
                        var s2 = s.substring(10, 12);
                        var s3 = s.substring(12, 14);
                        $("#spouse_birth_date").val(s1 + "-" + s2 + "-" + s3);

                        var a = new Date();
                        var year = a.getFullYear() - s1;
                        if (year > 0) {
                            $("#spouse_age").val(year + "岁");
                        } else if (year == 0) {
                            var month = a.getMonth() - s2;
                            if (month > 0) {
                                $("#spouse_age").val(month + "月");
                            } else if (month == 0) {
                                var day = a.getDay() - s3;
                                if (day > 0) {
                                    $("#spouse_age").val(day + "天");
                                }
                            }
                        }
                    }
                }
            } else {
                alert("二代身份证号码长度为18位，请检查后重新输入！");
                $("#spouse_idCard").val("");
                $("#spouse_age").val("");
                $("#spouse_birth_date").val("");
            }
        }
    })
    //2========户主父亲身份证号验证==========
    $("#hostFather_idCard").blur(function () {
        var s = $("#hostFather_idCard").val();
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
                    $("#hostFather_idCard").val("");
                    $("#hostFather_age").val("");
                    $("#hostFather_birth_date").val("");
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
                        $("#hostFather_idCard").val("");
                        $("#hostFather_age").val("");
                        $("#hostFather_birth_date").val("");
                    }
                    else {
                        var s1 = s.substring(6, 10);
                        var s2 = s.substring(10, 12);
                        var s3 = s.substring(12, 14);
                        $("#hostFather_birth_date").val(s1 + "-" + s2 + "-" + s3);
                        var a = new Date();
                        var year = a.getFullYear() - s1;
                        if (year > 0) {
                            $("#hostFather_age").val(year + "岁");
                        } else if (year == 0) {
                            var month = a.getMonth() - s2;
                            if (month > 0) {
                                $("#hostFather_age").val(month + "月");
                            } else if (month == 0) {
                                var day = a.getDay() - s3;
                                if (day > 0) {
                                    $("#hostFather_age").val(day + "天");
                                }
                            }
                        }
                    }
                }
            } else {
                alert("二代身份证号码长度为18位，请检查后重新输入！");
                $("#hostFather_idCard").val("");
                $("#hostFather_age").val("");
                $("#hostFather_birth_date").val("");
            }
        }
    })
    //3========户主母亲身份证号验证==========
    $("#hostMother_idCard").blur(function () {
        var s = $("#hostMother_idCard").val();
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
                    $("#hostMother_idCard").val("");
                    $("#hostMother_age").val("");
                    $("#hostMother_birth_date").val("");
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
                        $("#hostMother_idCard").val("");
                        $("#hostMother_age").val("");
                        $("#hostMother_birth_date").val("");
                    }
                    else {
                        var s1 = s.substring(6, 10);
                        var s2 = s.substring(10, 12);
                        var s3 = s.substring(12, 14);
                        $("#hostMother_birth_date").val(s1 + "-" + s2 + "-" + s3);
                        var a = new Date();
                        var year = a.getFullYear() - s1;
                        if (year > 0) {
                            $("#hostMother_age").val(year + "岁");
                        } else if (year == 0) {
                            var month = a.getMonth() - s2;
                            if (month > 0) {
                                $("#hostMother_age").val(month + "月");
                            } else if (month == 0) {
                                var day = a.getDay() - s3;
                                if (day > 0) {
                                    $("#hostMother_age").val(day + "天");
                                }
                            }
                        }
                    }
                }
            } else {
                alert("二代身份证号码长度为18位，请检查后重新输入！");
                $("#hostMother_idCard").val("");
                $("#hostMother_age").val("");
                $("#hostMother_birth_date").val("");
            }
        }
    })

    //验证邮政编码  
    $("#post_code").blur(function () {
        var postcode = $("#post_code").val();
        if (postcode != "") {
            if (!/^[1-9][0-9]{5}$/.test(postcode)) {
                alert("邮编格式不正确");
                $("#post_code").val("");
            }
        }
    });
})



//==============================提交页面=======================================
function sure() {
    if ($("#host_name").val() == "") {
        alert("户主姓名不能为空！")
    }
    else if (!$("#host_name").val().match(/^[\u4e00-\u9fa5]{2,4}$/i)) {
        alert("请正确输入户主姓名！")
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
    }
        //else if ($("#hostFather_name").val() == "") {
        //    alert("户主父亲姓名不能为空！")
        //}
    else if ($("#hostFather_name").val() != "" && !$("#hostFather_name").val().match(/^[\u4e00-\u9fa5]{2,4}$/i)) {
        alert("请正确输入户主父亲姓名！")
    }
        //else if ($("#hostMother_name").val() == "") {
        //    alert("户主母亲姓名不能为空！")
        //}
    else if ($("#hostMother_name").val() != "" && !$("#hostMother_name").val().match(/^[\u4e00-\u9fa5]{2,4}$/i)) {
        alert("请正确输入户主母亲姓名！")
    } else {
        $("#bt1").attr("disabled", "disabled");
        $.post("/FamilyInformation/AddAndUpdate?id=" + id + "&worker=" + worker + "&community_code=" + community_code,
            $("#form1").serialize(),
            function (msgs) {
                var msg = msgs.split(',');
                alert(msg[0]);
                //window.location.href = 'View.aspx?id=' + msg[1];
                window.close();
            })
    }
}

//============================================================================动态增加一行=============================================================================
var i = 1;
function added() {
    if (i < 10) {
        $('#relation_names' + (i - 1) + '').attr("disabled", false);
        $('#relation_id_card' + (i - 1) + '').attr("disabled", false);
        $('#relation_phone' + (i - 1) + '').attr("disabled", false);
        $('#relation_age' + (i - 1) + '').attr("disabled", false);


        $('#relative_' + (i - 1) + '').unbind("change");
        $('#relative_' + (i - 1) + '').one('change', function () {
            $('#relation' + (i - 1) + '').val($('#relative_' + (i - 1) + '').find("option:selected").text());
            //关系选择不能相同
            //if (i >= 2) {
            //    var a = $('#relation' + (i - 2) + '').val();
            //    var b = $('#relation' + (i - 1) + '').val();
            //    if (a == b) {
            //        alert("不能重复选择！");
            //        $('#relation' + (i - 1) + '').val("");
            //    }
            //}
            if ($('#relation' + (i - 1) + '').val() != "") {
                $('#tr' + i + '').after('<tr id="tr' + (i + 1) + '">' +
                        '<td class="auto-style100">户主的' +
                        ' <span style="position: relative;">' +
                                '<select id="relative_' + i + '"  style="width: 60px" onchange="added();">' +
                                    '<option value="">请选择</option>' +
                                    '<option value="1">长子</option>' +
                                    '<option value="2">长女</option>' +
                                    '<option value="3">次子</option>' +
                                    '<option value="4">次女</option>' +
                                    '<option value="5">三子</option>' +
                                    '<option value="6">三女</option>' +
                                '</select>' +
                                '<input id="relation' + i + '" name="relation' + i + '" style="position: absolute; width: 40px; height: 15px; left: 1px; top: 0px; border-bottom: 0px; border-right: 0px; border-left: 0px; border-top: 0px;"/>' +
                     '</span> 姓名' +
                    '</td>' +
                    '<td class="auto-style36"><input type="text" id="relation_names' + i + '" name="relation_names' + i + '" style="height: 18px; padding-top: 2px;padding-left:1px; width: 100px;" />' +
                    '</td>' +
                    '<td class="auto-style68"></td>' +
                    '<td class="auto-style72"></td>' +
                    '<td class="auto-style119">身份证号码</td>' +
                    '<td class="auto-style40">' +
                        '<input type="text" id="relation_id_card' + i + '" style="padding-top: 2px; height: 18px; width: 140px;"name="relation_id_card' + i + '"/>' +
                    '</td>' +
                    '<td class="auto-style119">手机号码</td>' +
                    '<td class="auto-style40">' +
                        '<input type="text" id="relation_phone' + i + '" style="padding-top: 2px; height: 18px; width: 110px" name="relation_phone' + i + '"/>' +
                    '</td>' +
                    '<td class="auto-style118">年龄</td>' +
                    '<td class="auto-style1">' +
                        '<input type="text" id="relation_birth_date' + i + '" style="padding-top: 2px;display:none" name="relation_birth_date' + i + '"/>' +
                        '<input type="text" id="relation_age' + i + '" style="padding-top: 2px; height: 18px; width: 80px;" name="relation_age' + i + '" readonly="readonly"/>' +
                    '</td>' +
                    '</tr>');
                $('#relation_names' + i + '').attr("disabled", true);
                $('#relation_id_card' + i + '').attr("disabled", true);
                $('#relation_phone' + i + '').attr("disabled", true);
                $('#relation_age' + i + '').attr("disabled", true);
                //关系选择不能相同
                //if (i >= 2) {
                //    var a = $('#relation' + (i - 2) + '').val();
                //    var b = $('#relation' + (i - 1) + '').val();
                //    if (a == b) {
                //        alert("不能重复选择！");
                //        $('#relation' + (i - 1) + '').val("");
                //    }
                //}
            }
            $("#cd").click(function () {
                for (i; i > 1; i--) {
                    $('#tr' + i + '').remove();
                }
            })
            //========户主关系身份证号验证==========
            $('#relation_id_card' + (i - 1) + '').blur(
             function () {
                 var card = $('#relation_id_card' + (i - 2) + '').val();
                 var ages = $('#relation_age' + (i - 2) + '').val();
                 if (card != "") {
                     if (card.length == 18) {
                         num = card.toUpperCase();
                         var len, re;
                         re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
                         var arrSplit = num.match(re);

                         //检查生日日期是否正确 
                         var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
                         var bGoodDay;
                         bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
                         if (!bGoodDay) {
                             alert('输入的身份证号码中出生日期不对！');
                             $('#relation_id_card' + (i - 2) + '').val("");
                             $('#relation_age' + (i - 2) + '').val("");
                             $('#relation_birth_date' + (i - 2) + '').val("");
                         }
                         else {
                             var valnum;
                             var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
                             var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
                             var nTemp = 0, a;
                             for (a = 0; a < 17; a++) {
                                 nTemp += num.substr(a, 1) * arrInt[a];
                             }
                             valnum = arrCh[nTemp % 11];
                             if (valnum != num.substr(17, 1)) {
                                 alert('您输入的二代身份证号码有误，请检查后重新输入！');
                                 $('#relation_id_card' + (i - 2) + '').val("");
                                 $('#relation_age' + (i - 2) + '').val("");
                                 $('#relation_birth_date' + (i - 2) + '').val("");
                             }
                             else {
                                 var s1 = card.substring(6, 10);
                                 var s2 = card.substring(10, 12);
                                 var s3 = card.substring(12, 14);
                                 $('#relation_birth_date' + (i - 2) + '').val(s1 + "-" + s2 + "-" + s3);

                                 var a = new Date();
                                 var year = a.getFullYear() - s1;
                                 if (year > 0) {
                                     $('#relation_age' + (i - 2) + '').val(year + "岁");
                                 } else if (year == 0) {
                                     var month = a.getMonth() - s2;
                                     if (month > 0) {
                                         $('#relation_age' + (i - 2) + '').val(month + "月");
                                     } else if (month == 0) {
                                         var day = a.getDay() - s3;
                                         if (day > 0) {
                                             $('#relation_age' + (i - 2) + '').val(day + "天");
                                         }
                                     }
                                 }
                             }
                         }
                     } else {
                         alert("二代身份证号码长度为18位，请检查后重新输入！");
                         $('#relation_id_card' + (i - 2) + '').val("");
                         $('#relation_age' + (i - 2) + '').val("");
                         $('#relation_birth_date' + (i - 2) + '').val("");
                     }
                 }
             })
            i++;
        })
    }
}
