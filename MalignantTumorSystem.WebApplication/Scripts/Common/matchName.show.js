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
            $("#phone").val(data.individual_phone);
        }
        $("input[name=" + "sex" + "][value=" + data.sex + "]").attr("checked", "checked");
        $("#resident_id").val(data.resident_id);
        $("#txtcontact_name").val(data.contact_name);
        $("#txtcontact_phone").val(data.contact_phone);
        $("#txtEmail").val(data.email);

        $("#nationality").val(data.nationality_name);
        $("#zipCode").val(data.post_code);
        $("#ddlPermanent_address_type").val(data.permanent_address_type);
        $("#ddlABOBloodType").val(data.abo_blood_group);
        $("#ddlcontact_my_relationship").val(data.contact_my_relationship);
        $("#ddlNation").val(data.nation);
        $("#ddlEducationQualification").val(data.education_qualification);
        $("#ddlMarrigeState").val(data.marital_status);
        $("#ddlOccupationSituation").val(data.occupation_situation);
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
                                    if (dat != "" && dat != null) {
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
                                                     if (dat4 != "") {
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
                                            //var a = dat[0].birth_date.split('/');
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
                                    else {
                                        var s = $("#id_card_number").val();
                                        var s1 = s.substring(6, 10);
                                        var s2 = s.substring(10, 12);
                                        var s3 = s.substring(12, 14);
                                        $("#birth_date").val(s1 + '-' + s2 + '-' + s3);
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
                                })
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



    //=============================血型========================================
    $.post("/Data/Share_Data?type=blood_type&type1=hiv_antibody_test_results",
      function (data) {
          dat = eval(data);
          $("#ddlABOBloodType").empty();
          $("#ddlABOBloodType").append("<option value=" + "" + ">=请选择=</option>");
          if (dat != "") {
              $.each(dat, function (i, obj) {
                  if (i < 6 && i > 3) {
                      $("#ddlABOBloodType").append("<option value=" + obj.code + ">RH" + obj.name + "</option>");
                  }
                  else {
                      $("#ddlABOBloodType").append("<option value=" + obj.code + ">" + obj.name + "</option>");
                  }
              })
          }
      })
    //=============================婚姻状况========================================
    $.post("/Data/Share_Data?type=" + "chronic_marriage",
       function (data) {
           dat = eval(data);
           $("#ddlMarrigeState").empty();
           $("#ddlMarrigeState").append("<option value=" + "" + ">==请选择==</option>");
           if (dat != "") {
               for (var i = 0; i < dat.length; i++) {
                   $("#ddlMarrigeState").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
               }
           }
       })
    //==============================民族==============================
    $.post("/Data/Share_Data?type=" + "nation",
       function (data) {
           dat = eval(data);
           $("#ddlNation").empty();
           $("#ddlNation").append("<option value=" + "" + ">==请选择==</option>");
           if (dat != "") {
               for (var i = 0; i < dat.length; i++) {
                   if (i == 0) {
                       $("#ddlNation").append("<option value=" + dat[i].code + "  selected='selected'>" + dat[i].name + "</option>");
                   } else {
                       $("#ddlNation").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                   }
               }
           }
       })
    //=============================文化程度========================================
    $.post("/Data/Share_Data?type=" + "chronic_education",
       function (data) {
           dat = eval(data);
           $("#ddlEducationQualification").empty();
           $("#ddlEducationQualification").append("<option value=" + "" + ">==请选择==</option>");
           if (dat != "") {
               for (var i = 0; i < dat.length; i++) {
                   $("#ddlEducationQualification").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
               }
           }
       })
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

    //=============================工作工种========================================
    $.post("/Data/Share_Data?type=" + "chronic_work_classfy",
       function (data) {
           dat = eval(data);
           $("#ddlcraft").empty();
           $("#ddlcraft").append("<option value=" + "" + ">==请选择==</option>");
           if (dat != "") {
               for (var i = 0; i < dat.length; i++) {
                   $("#ddlcraft").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
               }
           }
       })

    //验证邮政编码  
    $("#zipCode").blur(function () {
        var postcode = $("#zipCode").val();
        if (postcode != "") {
            if (!/^[1-9][0-9]{5}$/.test(postcode)) {
                alert("邮编格式不正确");
                $("#zipCode").val("");
            }
        }
    });

    //------------------手机号码验证----------------
    $("#txtIndividualPhone").blur(function () {
        var a = $("#txtIndividualPhone").val();
        if (a != "") {
            if (! /^1[3|4|5|8]\d{9}$/.test(a)) {
                alert("请输入正确的手机号码！");
                $("#txtIndividualPhone").val("");
            }
        }
    })
    $("#txtcontact_phone").blur(function () {
        var a = $("#txtcontact_phone").val();
        if (a != "") {
            if (! /^1[3|4|5|8]\d{9}$/.test(a)) {
                alert("请输入正确的手机号码！");
                $("#txtcontact_phone").val("");
            }
        }
    })
    $("#fatherPhone").blur(function () {
        var a = $("#fatherPhone").val();
        if (a != "") {
            if (! /^1[3|4|5|8]\d{9}$/.test(a)) {
                alert("请输入正确的手机号码！");
                $("#fatherPhone").val("");
            }
        }
    })
    $("#motherPhone").blur(function () {
        var a = $("#motherPhone").val();
        if (a != "") {
            if (! /^1[3|4|5|8]\d{9}$/.test(a)) {
                alert("请输入正确的手机号码！");
                $("#motherPhone").val("");
            }
        }
    })

    $("#txtFamilyPhone1").keyup(function () {
        var a = $("#txtFamilyPhone1").val();
        if (a != "") {
            if (!isNaN(a)) {
                if (a.length >= 4) {
                    $("#txtFamilyPhone2")[0].focus();
                }
            }
        }
    })

    //=====================================================血压======================================================

    $("#ssy").keyup(function () {
        var a = $("#ssy").val();
        if (a != "") {
            //if (a < 200 && a > 100) {
            document.getElementById("ssy1").value = parseFloat(a * 0.1333 + 1).toFixed(1);
            //}
        }

    });

    $("#szy").keyup(function () {
        var a = $("#szy").val();
        if (a != "") {
            //if (a > 60 && a < 140) {
            document.getElementById("szy1").value = parseFloat(a * 0.1333 + 1).toFixed(1);
            //}
        }

    });

    $("#ssy1").keyup(function () {
        var a = $("#ssy1").val();
        if (a != "") {
            //if (a < 25 && a > 10) {
            document.getElementById("ssy").value = parseInt(a / 0.1333 + 1);
            //}
        }

    });

    $("#szy1").keyup(function () {
        var a = $("#szy1").val();
        if (a != "") {
            //if (a < 15 && a > 2) {
            document.getElementById("szy").value = parseInt(a / 0.1333 + 1);
            //}
        }
    });




})

//=========================================================================参考模板========================================================================================

function templete() {
    window.showModalDialog("/Data/Template?type=zs", window, "status:yes;scroll:yes;resizable:no;dialogWidth =850px;dialogHeight = 500px");
}
function templete1() {
    window.showModalDialog("/Data/Template?type=xbs", window, "status:yes;scroll:yes;resizable:no;dialogWidth =850px;dialogHeight = 500px");
}
function templete2() {
    window.showModalDialog("/Data/Template?type=jws", window, "status:yes;scroll:yes;resizable:no;dialogWidth =850px;dialogHeight = 600px");
}