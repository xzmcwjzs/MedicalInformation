$(function () {

    if (no == "1") {
        $("#last").hide();
    } else if (no == "2") {
        $("#cd").hide();
    }
    //开始加载时---
    $("#smoke_time").attr("disabled", true);
    $("#times1").attr("disabled", true);
    $("#times2").attr("disabled", true);
    $("#times3").attr("disabled", true);
    $("#times4").attr("disabled", true);
    $("#times5").attr("disabled", true);
    $("#times6").attr("disabled", true);
    $("input[name='day_smoke']").attr("disabled", true);
    $("#began_smoke").attr("disabled", true);
    $("#smoke_age").attr("disabled", true);
    $("#smoked_time").attr("disabled", true);
    $("#smoke_again").attr("disabled", true);
    $("#smoked_long").attr("disabled", true);
    $("input[name='smoked_idea']").attr("disabled", true);
    $("#drink_time").attr("disabled", true);
    $("#drink_age").attr("disabled", true);
    $("#drunk_time").attr("disabled", true);
    $("#drink_again").attr("disabled", true);
    $("#drunk_long").attr("disabled", true);

    $("input[name='frequency1']").attr("disabled", true);
    $("input[name='frequency2']").attr("disabled", true);
    $("input[name='frequency3']").attr("disabled", true);
    $("input[name='frequency4']").attr("disabled", true);
    $("#other").attr("disabled", true);
    $("#other_du").attr("disabled", true);
    $("input[name='frequency5']").attr("disabled", true);

    $("input[name='count1']").attr("disabled", true);
    $("#count1_dl").attr("disabled", true);
    $("input[name='count2']").attr("disabled", true);
    $("#count2_dl").attr("disabled", true);
    $("input[name='count3']").attr("disabled", true);
    $("#count3_dl").attr("disabled", true);
    $("input[name='count4']").attr("disabled", true);
    $("#count4_dl").attr("disabled", true);
    $("#other_wine").attr("disabled", true);
    $("#wine_degree").attr("disabled", true);
    $("input[name='count5']").attr("disabled", true);
    $("#count5_dl").attr("disabled", true);


    $("input[name='chfamilydisease0']").attr("disabled", true);
    $("#family_other_disease0").attr("disabled", true);
    //=============
    $("#cd").click(function () {
        $("input[name='chGuoMin'][value='7']").attr("checked", false);
        $("input[name='chdisease'][value='06']").attr("checked", false);
        $("input[name='chdisease'][value='10']").attr("checked", false);
        $("input[name='chfamilydisease0'][value='其他疾病']").attr("checked", false);
        $("input[name='chdisability'][value='08']").attr("checked", false);
        //重填回到初始状态
        $("#smoke_time").attr("disabled", true);
        $("#times1").attr("disabled", true);
        $("#times2").attr("disabled", true);
        $("#times3").attr("disabled", true);
        $("#times4").attr("disabled", true);
        $("#times5").attr("disabled", true);
        $("#times6").attr("disabled", true);
        $("input[name='day_smoke']").attr("disabled", true);
        $("#began_smoke").attr("disabled", true);
        $("#smoke_age").attr("disabled", true);
        $("#smoked_time").attr("disabled", true);
        $("#smoke_again").attr("disabled", true);
        $("#smoked_long").attr("disabled", true);
        $("input[name='smoked_idea']").attr("disabled", true);
        $("#drink_time").attr("disabled", true);
        $("#drink_age").attr("disabled", true);
        $("#drunk_time").attr("disabled", true);
        $("#drink_again").attr("disabled", true);
        $("#drunk_long").attr("disabled", true);

        $("input[name='frequency1']").attr("disabled", true);
        $("input[name='frequency2']").attr("disabled", true);
        $("input[name='frequency3']").attr("disabled", true);
        $("input[name='frequency4']").attr("disabled", true);
        $("#other").attr("disabled", true);
        $("#other_du").attr("disabled", true);
        $("input[name='frequency5']").attr("disabled", true);

        $("input[name='count1']").attr("disabled", true);
        $("#count1_dl").attr("disabled", true);
        $("input[name='count2']").attr("disabled", true);
        $("#count2_dl").attr("disabled", true);
        $("input[name='count3']").attr("disabled", true);
        $("#count3_dl").attr("disabled", true);
        $("input[name='count4']").attr("disabled", true);
        $("#count4_dl").attr("disabled", true);
        $("#other_wine").attr("disabled", true);
        $("#wine_degree").attr("disabled", true);
        $("input[name='count5']").attr("disabled", true);
        $("#count5_dl").attr("disabled", true);


        $("input[name='chfamilydisease0']").attr("disabled", true);
        $("#family_other_disease0").attr("disabled", true);
         
    })

     //用户名  输入时 自动搜索
    $("#txtResidentName").autocomplete('/Data/NameMatch', {
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
        //===========================================================================================================================================================
        $("#txtResidentName").val(data.resident_name);
        $("input[name=" + "rdlSex" + "][value=" + data.sex + "]").attr("checked", "checked");
        $("#ltAge").val(data.age1);
        $("#txtCardNumber").val(data.id_card_number);
         
        if (data.birth_date != "") {
           // var a = data.birth_date.split('/');

            var date = new Date(parseInt(data.birth_date.replace("/Date(", "").replace(")/", ""), 10));
            var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
            var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
 
            $("#txtBirthDate").val(date.getFullYear() + '-' + a1 + '-' + a2);
        } 
        //if (data.start_work_date != "") {
        //    var a = data.start_work_date.split('/');
        //    if (a[1].length < 2) {
        //        var a1 = "0" + a[1];
        //    } else {
        //        var a1 = a[1];
        //    }
        //    if (a[2].split(' ')[0].length < 2) {
        //        var a2 = "0" + a[2].split(' ')[0];
        //    } else {
        //        var a2 = a[2].split(' ')[0];
        //    }
        //    $("#txtStartWorkDate").val(a[0] + '-' + a1 + '-' + a2);
        //}  

        //前台无txtStartWorkDate  标签

        //if (data.start_work_date != "") {
        //    var a = new Date(parseInt(data.start_work_date.replace("/Date(", "").replace(")/", ""), 10));
        //    var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
        //    var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
        //    $("#txtStartWorkDate").val(a.getFullYear()+'-' + a1 + '-' + a2);
        //} 

        $("#txtWorkUnit").val(data.work_unit);
        $("#ddlcraft").val(data.work_type);
        $("input[name=" + "work_time" + "][value=" + data.worker_time_everyweek + "]").attr("checked", "checked");

        $("#txtFamilyPhone").val(data.family_phone);
        $("#txtIndividualPhone").val(data.individual_phone);

        $("#txtpersonal_fixed_line_telephone").val(data.personal_fixed_line_telephone);
        $("#txtcontact_name").val(data.contact_name);
        $("#txtcontact_phone").val(data.contact_phone);
        $("#txtEmail").val(data.email);

        $("#nationality").val(data.nationality_name);
        $("#zipCode").val(data.post_code);
        $("#fatherName").val(data.father_name);
        $("#motherName").val(data.mother_name);
        $("#fatherIdCard").val(data.father_id_card_numb);
        $("#motherIdCard").val(data.mother_id_card_numb);
        $("#fatherPhone").val(data.father_phone);
        $("#motherPhone").val(data.mother_phone);
        /*显示当前用户的填写人姓名，提交处理时，提交原填写人姓名*/
        //$("#fillIdentity").val(data.worker_user_name);

        $("#ddlPermanent_address_type").val(data.permanent_address_type);
        $("#ddlABOBloodType").val(data.abo_blood_group);
        $("#ddlcontact_my_relationship").val(data.contact_my_relationship);
        $("#ddlNation").val(data.nation);
        $("#ddlEducationQualification").val(data.education_qualification);
        $("#ddlRHBloodType").val(data.rh_blood_group);
        $("#ddlMarrigeState").val(data.marital_status);
        $("#ddlCostPayment").val(data.cost_method_payment);
        $("#ddlOccupationSituation").val(data.occupation_situation);
        $("#ddlAddressType").val(data.other_address_type);
        $("#other_address").val(data.other_address);

        
        //出生住址
        //----省---- 
        var CommunityCode = data.community_code; 
        var BirthCommitcode = data.birth_commitcode;  
        if (BirthCommitcode != "" && BirthCommitcode != null) { 
            $("#ddlProvince1").val(BirthCommitcode.substring(0, 2));
            //-----市-----
            $.post("/Data/City?code=" + BirthCommitcode.substring(0, 2),
             function (datas) {
                 dat1 = eval(datas);
                 $("#ddlCity1").empty();
                 $("#ddlCity1").append("<option value=" + "" + ">==请选择==</option>");
                 if (dat1 != "") {
                     for (var i = 0; i < dat1.length; i++) {
                         $("#ddlCity1").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                     }
                     $("#ddlCity1").val(BirthCommitcode.substring(0, 4));
                 }
             })
            //-----区/县-----
            $.post("/Data/County?code=" + BirthCommitcode.substring(0,4),
             function (datas) {
                 dat1 = eval(datas);
                 $("#ddlCounty1").empty();
                 $("#ddlCounty1").append("<option value=" + "" + ">==请选择==</option>");
                 if (dat1 != "") {
                     for (var i = 0; i < dat1.length; i++) {
                         $("#ddlCounty1").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                     }
                     $("#ddlCounty1").val(BirthCommitcode.substring(0, 6));
                 }
             })
            $("#birth_address").val(data.birth_address);

        } else if (data.birth_address != "" && data.birth_address != null) { 
            var s = data.birth_address.split('省');
            var pro = s[0] + "省";
            var s1 = s[1].split('市');
            var cit = s1[0] + "市";
            var couty = s1[1];
            $.post("/Data/ProvinceCode",
                { Name: pro },
            function (data1) {
                //===========================显示省==========================
                $("#ddlProvince1").val(data1);
                //加载省内市-------------------------------------------------------------------------------------------------------------------------
                $.post("/Data/City?code=" + data1,
                 function (datas) {
                     dat1 = eval(datas);
                     $("#ddlCity1").empty();
                     $("#ddlCity1").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity1").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                     }
                 });
                $.post("/Data/CityCode",
                                { Name: cit },
                                 function (data2) {
                                     //=======================显示市================================
                                     $("#ddlCity1").val(data2);
                                     //加载市内区/县/市----------------------------------------------------------------------------------------------------------------
                                     $.post("/Data/County?code=" + data2,
                                      function (datas) {
                                          dat2 = eval(datas);
                                          $("#ddlCounty1").empty();
                                          $("#ddlCounty1").append("<option value=" + "" + ">==请选择==</option>");
                                          if (dat2 != "") {
                                              for (var i1 = 0; i1 < dat2.length; i1++) {
                                                  $("#ddlCounty1").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                                              }
                                          }
                                      });
                                     $.post("/Data/CountyCode",
                                         { Name: couty },
                                          function (data3) {
                                              //=======================显示区/县/市================================
                                              $("#ddlCounty1").val(data3);
                                              $.post("/Data/CountyName?code=" + data3,
                                       function (data4) {
                                           $("#birth_address").val(couty.split(data4)[1]);
                                       });

                                          });
                                 });
            });
        }
         
        var PermanentHomeCommitcode = data.permanent_home_commitcode;

        $("#home_address").val(data.permanent_home_address);
        //家庭常住住址-------------------------------------------------------------------------------------------------------------------------
        if (PermanentHomeCommitcode != ""&&PermanentHomeCommitcode != null) {
            $("#ddlProvince").val(PermanentHomeCommitcode.substring(0, 2));
            //-----市-----
            $.post("/Data/City?code=" + PermanentHomeCommitcode.substring(0, 2),
             function (datas) {
                 dat1 = eval(datas);
                 $("#ddlCity").empty();
                 $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                 if (dat1 != "") {
                     for (var i = 0; i < dat1.length; i++) {
                         $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                     }
                     $("#ddlCity").val(PermanentHomeCommitcode.substring(0, 4));
                 }
             })
            //-----区/县-----
            $.post("/Data/County?code=" + PermanentHomeCommitcode.substring(0, 4),
             function (datas) {
                 dat1 = eval(datas);
                 $("#ddlCounty").empty();
                 $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                 if (dat1 != "") {
                     for (var i = 0; i < dat1.length; i++) {
                         $("#ddlCounty").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                     }
                     $("#ddlCounty").val(PermanentHomeCommitcode.substring(0, 6));
                 }
             })

            //-----镇/街道-----
            $.post("/Data/Street?code=" + PermanentHomeCommitcode.substring(0, 6),
             function (datas) {
                 dat1 = eval(datas);
                 $("#ddlStreet").empty();
                 $("#ddlStreet").append("<option value=" + "" + ">==请选择==</option>");
                 if (dat1 != "") {
                     for (var i = 0; i < dat1.length; i++) {
                         $("#ddlStreet").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                     }
                     $("#ddlStreet").val(PermanentHomeCommitcode.substring(0, 9));
                 }
             })
            //-----村/社区-----
            $.post("/Data/Community?code=" + PermanentHomeCommitcode.substring(0, 9),
             function (datas) {
                 dat1 = eval(datas);
                 $("#ddlCommunity").empty();
                 $("#ddlCommunity").append("<option value=" + "" + ">==请选择==</option>");
                 if (dat1 != "") {
                     for (var i = 0; i < dat1.length; i++) {
                         $("#ddlCommunity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                     }
                     $("#ddlCommunity").val(PermanentHomeCommitcode);
                 }
             })
            //-------镇/村-------
        } else if (CommunityCode != ""&& CommunityCode!=null) {

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

        $("#huji_address").val(data.residence_address);
        var ResidenceCommitcode = data.residence_commitcode;
        //现住地址------------------------------------------------------------------------------------------------------------------------------
        if (ResidenceCommitcode != ""&&ResidenceCommitcode!=null) {
            if (ResidenceCommitcode.length == 2) {
                $("#ddlProvince2").val(ResidenceCommitcode.substring(0, 2));
            }
            else if (ResidenceCommitcode.length == 4) {
                $("#ddlProvince2").val(ResidenceCommitcode.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + ResidenceCommitcode.substring(0, 2),
                 function (datas) {
                     dat1 = eval(datas);
                     $("#ddlCity2").empty();
                     $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity2").val(ResidenceCommitcode.substring(0, 4));
                     }
                 })

            }
            else if (ResidenceCommitcode.length == 6) {
                $("#ddlProvince2").val(ResidenceCommitcode.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + ResidenceCommitcode.substring(0, 2),
                 function (datas) {
                     dat1 = eval(datas);
                     $("#ddlCity2").empty();
                     $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity2").val(ResidenceCommitcode.substring(0, 4));
                     }
                 })
                //-----区/县-----
                $.post("/Data/County?code=" + ResidenceCommitcode.substring(0, 4),
                 function (datas) {
                     dat1 = eval(datas);
                     $("#ddlCounty2").empty();
                     $("#ddlCounty2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCounty2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCounty2").val(ResidenceCommitcode.substring(0, 6));
                     }
                 })
            }
            else if (ResidenceCommitcode.length == 9) {
                $("#ddlProvince2").val(ResidenceCommitcode.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + ResidenceCommitcode.substring(0, 2),
                 function (datas) {
                     dat1 = eval(datas);
                     $("#ddlCity2").empty();
                     $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity2").val(ResidenceCommitcode.substring(0, 4));
                     }
                 })
                //-----区/县-----
                $.post("/Data/County?code=" + ResidenceCommitcode.substring(0, 4),
                 function (datas) {
                     dat1 = eval(datas);
                     $("#ddlCounty2").empty();
                     $("#ddlCounty2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCounty2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCounty2").val(ResidenceCommitcode.substring(0, 6));
                     }
                 })
                //-----镇-----
                $.post("/Data/Street?code=" + ResidenceCommitcode.substring(0, 6),
                 function (data3) {
                     dat3 = eval(data3);
                     $("#ddlStreet2").empty();
                     $("#ddlStreet2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat3 != "") {
                         for (var i2 = 0; i2 < dat3.length; i2++) {
                             $("#ddlStreet2").append("<option value=" + dat3[i2].code + ">" + dat3[i2].name + "</option>");
                         }
                         $("#ddlStreet2").val(ResidenceCommitcode.substring(0, 9));
                     }
                 })
            }
            else if (ResidenceCommitcode.length == 12) {
                $("#ddlProvince2").val(ResidenceCommitcode.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + ResidenceCommitcode.substring(0, 2),
                 function (datas) {
                     dat1 = eval(datas);
                     $("#ddlCity2").empty();
                     $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity2").val(ResidenceCommitcode.substring(0, 4));
                     }
                 })
                //-----区/县-----
                $.post("/Data/County?code=" + ResidenceCommitcode.substring(0, 4),
                 function (datas) {
                     dat1 = eval(datas);
                     $("#ddlCounty2").empty();
                     $("#ddlCounty2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCounty2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCounty2").val(ResidenceCommitcode.substring(0, 6));
                     }
                 })
                //-----镇-----
                $.post("/Data/Street?code=" + ResidenceCommitcode.substring(0, 6),
                 function (data3) {
                     dat3 = eval(data3);
                     $("#ddlStreet2").empty();
                     $("#ddlStreet2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat3 != "") {
                         for (var i2 = 0; i2 < dat3.length; i2++) {
                             $("#ddlStreet2").append("<option value=" + dat3[i2].code + ">" + dat3[i2].name + "</option>");
                         }
                         $("#ddlStreet2").val(ResidenceCommitcode.substring(0, 9));
                     }
                 })

                //-----村-----
                $.post("/Data/Community?code=" + ResidenceCommitcode.substring(0, 9),
                 function (data4) {
                     dat4 = eval(data4);
                     $("#ddlCommunity2").empty();
                     $("#ddlCommunity2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat3 != "") {
                         for (var i3 = 0; i3 < dat4.length; i3++) {
                             $("#ddlCommunity2").append("<option value=" + dat4[i3].code + ">" + dat4[i3].name + "</option>");
                         }
                         $("#ddlCommunity2").val(ResidenceCommitcode);
                     }
                 })
            }

        }
        else if (CommunityCode != ""&&CommunityCode!=null) {
            if (CommunityCode.length == 2) {
                $("#ddlProvince2").val(CommunityCode.substring(0, 2));
            }
            else if (CommunityCode.length == 4) {
                $("#ddlProvince2").val(CommunityCode.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + CommunityCode.substring(0, 2),
                 function (datas) {
                     dat1 = eval(datas);
                     $("#ddlCity2").empty();
                     $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity2").val(CommunityCode.substring(0, 4));
                     }
                 })
            }
            else if (CommunityCode.length == 6) {
                $("#ddlProvince2").val(CommunityCode.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + CommunityCode.substring(0, 2),
                 function (data1) {
                     dat1 = eval(data1);
                     $("#ddlCity2").empty();
                     $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity2").val(CommunityCode.substring(0, 4));
                     }
                 });
                //-----区/县-----
                $.post("/Data/County?code=" + CommunityCode.substring(0, 4),
                 function (data2) {
                     dat2 = eval(data2);
                     $("#ddlCounty2").empty();
                     $("#ddlCounty2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat2 != "") {
                         for (var i1 = 0; i1 < dat2.length; i1++) {
                             $("#ddlCounty2").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                         }
                         $("#ddlCounty2").val(CommunityCode.substring(0, 6));
                     }
                 });
            }
            else if (CommunityCode.length == 9) {
                $("#ddlProvince2").val(CommunityCode.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + CommunityCode.substring(0, 2),
                 function (data1) {
                     dat1 = eval(data1);
                     $("#ddlCity2").empty();
                     $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity2").val(CommunityCode.substring(0, 4));
                     }
                 })
                //-----区/县-----
                $.post("/Data/County?code=" + CommunityCode.substring(0, 4),
                 function (data2) {
                     dat2 = eval(data2);
                     $("#ddlCounty2").empty();
                     $("#ddlCounty2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat2 != "") {
                         for (var i1 = 0; i1 < dat2.length; i1++) {
                             $("#ddlCounty2").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                         }
                         $("#ddlCounty2").val(CommunityCode.substring(0, 6));
                     }
                 })
                //-----镇-----
                $.post("/Data/Street?code=" + CommunityCode.substring(0, 6),
                 function (data3) {
                     dat3 = eval(data3);
                     $("#ddlStreet2").empty();
                     $("#ddlStreet2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat3 != "") {
                         for (var i2 = 0; i2 < dat3.length; i2++) {
                             $("#ddlStreet2").append("<option value=" + dat3[i2].code + ">" + dat3[i2].name + "</option>");
                         }
                         $("#ddlStreet2").val(CommunityCode.substring(0, 9));
                     }
                 })

                //-----村-----
                //$.post("../../Data/Community?code=" + CommunityCode.substring(0, 9),
                // function (data4) {
                //     dat4 = eval(data4);
                //     $("#ddlCommunity2").empty();
                //     $("#ddlCommunity2").append("<option value=" + "" + ">==请选择==</option>");
                //     if (dat3 != "") {
                //         for (var i3 = 0; i3 < dat4.length; i3++) {
                //             $("#ddlCommunity2").append("<option value=" + dat4[i3].code + ">" + dat4[i3].name + "</option>");
                //         }
                //         $("#ddlCommunity2").val(CommunityCode);
                //     }
                // })
            }
            else if (CommunityCode.length == 12) {
                $("#ddlProvince2").val(CommunityCode.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + CommunityCode.substring(0, 2),
                 function (data1) {
                     dat1 = eval(data1);
                     $("#ddlCity2").empty();
                     $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity2").val(CommunityCode.substring(0, 4));
                     }
                 })
                //-----区/县-----
                $.post("/Data/County?code=" + CommunityCode.substring(0, 4),
                 function (data2) {
                     dat2 = eval(data2);
                     $("#ddlCounty2").empty();
                     $("#ddlCounty2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat2 != "") {
                         for (var i1 = 0; i1 < dat2.length; i1++) {
                             $("#ddlCounty2").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                         }
                         $("#ddlCounty2").val(CommunityCode.substring(0, 6));
                     }
                 })
                //-----镇-----
                $.post("/Data/Street?code=" + CommunityCode.substring(0, 6),
                 function (data3) {
                     dat3 = eval(data3);
                     $("#ddlStreet2").empty();
                     $("#ddlStreet2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat3 != "") {
                         for (var i2 = 0; i2 < dat3.length; i2++) {
                             $("#ddlStreet2").append("<option value=" + dat3[i2].code + ">" + dat3[i2].name + "</option>");
                         }
                         $("#ddlStreet2").val(CommunityCode.substring(0, 9));
                     }
                 })

                //-----村-----
                $.post("/Data/Community?code=" + CommunityCode.substring(0, 9),
                 function (data4) {
                     dat4 = eval(data4);
                     $("#ddlCommunity2").empty();
                     $("#ddlCommunity2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat3 != "") {
                         for (var i3 = 0; i3 < dat4.length; i3++) {
                             $("#ddlCommunity2").append("<option value=" + dat4[i3].code + ">" + dat4[i3].name + "</option>");
                         }
                         $("#ddlCommunity2").val(CommunityCode);
                     }
                 })
            }
        }


        //药物过敏史----------------------------------------------------------------------------------------------------------------------------
        if ((data.drug_allergy_type == "未知" || data.drug_allergy_type == "" || data.drug_allergy_type == "无") && data.drug_allergy_other == "") {
            $("input[name=" + "rdGuoMin" + "]").attr("checked", "checked");
        } else {
            var s = data.drug_allergy_type;
            var checkboxs = s.split('$');
            var box = document.getElementsByName("chGuoMin");
            for (var i = 0; i < box.length; i++) {
                if (box[i].type == "checkbox") {
                    for (var j = 0; j < checkboxs.length; j++) {
                        if (box[i].value == checkboxs[j]) {
                            box[i].checked = true;
                        }
                    }
                }
            }
            $("#GuoMin_Other").val(data.drug_allergy_other);
        }
        //疾病史-------------------------------------------------------------------------------------------------------------------------------
        if (data.disease == "无") {
            $("input[name=" + "rddisease" + "]").attr("checked", "checked");
        } else {
            $.post("/BasicInformation/ShowDisease?resident_id=" + resident_id,
           function (data) {
               dat = eval(data);
               if (dat != "") {
                   var s = data.disease_type;
                   var checkboxs = s.split(',');
                   var box = document.getElementsByName("chdisease");
                   for (var i = 0; i < box.length; i++) {
                       if (box[i].type == "checkbox") {
                           for (var j = 0; j < checkboxs.length; j++) {
                               if (box[i].value == checkboxs[j]) {
                                   box[i].checked = true;
                               }
                           }
                       }
                   }
                   $("#Disease_Other").val(data.disease_other);
               } else {
                   $("input[name=" + "rddisease" + "]").attr("checked", "checked");
               }
           });
        }

        //吸烟史-------------------------------------------------------------------------------------------------------------------------------
        if (data.smoking != "无"&&data.smoking!="未知"&&data.smoking!="") {
           
            $.post("/BasicInformation/ShowSmokeAndDrink?resident_id=" + resident_id,
           function (data) {
               dat = eval(data);
               if (dat != "") {
                   $("input[name=" + "smoke_twice" + "][value=" + dat.smoked_second_hand + "]").attr("checked", "checked");
                   $("input[name=" + "smoke" + "][value=" + dat.smoke_never + "]").attr("checked", "checked");
                   if (dat.smoking == "吸烟") {
                       $("input[name=" + "smoking" + "][value=" + dat.smoking + "]").attr("checked", "checked");
                       $("#times1").val(dat.smoking_begin_year);
                       $("input[name=" + "day_smoke" + "][value=" + dat.smoking_daily_amount + "]").attr("checked", "checked");
                       $("#smoke_age").val(dat.smoking_age);
                       $("#smoked_long").val(dat.smoked_long_time);
                       $("input[name=" + "smoked_idea" + "][value=" + dat.smoked_intent + "]").attr("checked", "checked");
                   } 
                   if (dat.smoked == "已戒烟") {
                       $("input[name=" + "smoked" + "][value=" + dat.smoked + "]").attr("checked", "checked");
                       $("#times2").val(dat.smoked_begin_year);
                       $("#times3").val(dat.smoked_smoking_again);
                        
                   } else {
                       $("input[name=" + "smoke" + "][value=" + s + "]").attr("checked", "checked");
                       $("#began_smoke").val(data.start_smoking_age);
                       $("#end_smoke").val(data.quit_smoking_age);
                       $("#day_smoke").attr("disabled", true);
                       $("#begin_smoke").attr("disabled", true);
                   }
               } else {
                   $("input[name=" + "smoke" + "][value=" + "无" + "]").attr("checked", "checked");
                   $("#day_smoke").attr("disabled", true);
                   $("#begin_smoke").attr("disabled", true);
                   $("#began_smoke").attr("disabled", true);
                   $("#end_smoke").attr("disabled", true);
               }
           });
        }
        //饮酒史-------------------------------------------------------------------------------------------------------------------------------
        if (data.drinking != "无" && data.drinking != "未知" && data.drinking != "") {
           
            $.post("/BasicInformation/ShowSmokeAndDrink?resident_id=" + resident_id,
           function (data) {
               dat = eval(data);
               if (dat != "") {
                   $("input[name=" + "drinking" + "][value=" + dat.drinking + "]").attr("checked", "checked");
                   $("#times4").val(dat.drinking_begin_year);
                   $("#drink_age").val(dat.drinking_age);
                   $("#times5").val(dat.drunk_begin_year);
                   $("#times6").val(dat.drunk_drinking_again);
                   $("#drunk_long").val(dat.drunk_long_time);
                   $("input[name=" + "drink" + "][value=" + dat.drink_never + "]").attr("checked", "checked");
                   $("input[name=" + "frequency1" + "][value=" + dat.drinking_spirit_frequency + "]").attr("checked", "checked");
                   $("input[name=" + "frequency2" + "][value=" + dat.drinking_beer_frequency + "]").attr("checked", "checked");
                   $("input[name=" + "frequency3" + "][value=" + dat.drinking_red_frequency + "]").attr("checked", "checked");
                   $("input[name=" + "frequency4" + "][value=" + dat.drinking_yellow_frequency + "]").attr("checked", "checked");
                   $("#other").val(dat.drinking_other_wine1); $("#other_du").val(dat.drinking_other_degree1);
                   $("input[name=" + "frequency5" + "][value=" + dat.drinking_other_frequency + "]").attr("checked", "checked");
                   $("input[name=" + "count1" + "][value=" + dat.drinking_spirit_amount + "]").attr("checked", "checked");
                   $("#count1_dl").val(dat.drinking_spirit_equivalent);
                   $("input[name=" + "count2" + "][value=" + dat.drinking_beer_amount + "]").attr("checked", "checked");
                   $("#count2_dl").val(dat.drinking_beer_equivalent);

                   $("input[name=" + "count3" + "][value=" + dat.drinking_red_amount + "]").attr("checked", "checked");
                   $("#count3_dl").val(dat.drinking_red_equivalent);
                   $("input[name=" + "count4" + "][value=" + dat.drinking_yellow_amount + "]").attr("checked", "checked");
                   $("#count4_dl").val(dat.drinking_yellow_equivalent);
                   $("#other_wine").val(dat.drinking_other_wine2);
                   $("#wine_degree").val(dat.drinking_other_degree2);
                   $("input[name=" + "count5" + "][value=" + dat.drinking_other_amount + "]").attr("checked", "checked");
                   $("#count5_dl").val(dat.drinking_other_equivalent);

               } 
           });
        }
        //手术史-------------------------------------------------------------------------------------------------------------------------------
        if (data.surgery == "无") {
            $("input[name=" + "option" + "][value=" + "无" + "]").attr("checked", "checked");
            $("#img1").attr("disabled", true);
        } else {
            $.post("/BasicInformation/ShowOption?resident_id=" + resident_id,
         function (data) {
             dat = eval(data);
             if (dat != "") {
                 if (data.find_date != "" && data.find_date != null) { 
                     var date = new Date(parseInt(data.find_date.replace("/Date(", "").replace(")/", ""), 10));
                     var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                     var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                 }
                 $('#option_time0').val(date.getFullYear() + '-' + a1 + '-' + a2);
                 $('#option_name0').val(data.surgery_name);

                 for (var i = 1; i < dat.length; i++) {
                     if (dat.length > 1) {
                         $('#option_add1').append('<tr id="option_add' + (i + 1) + '"><td class="detailContent" style="height: 25px; width: 100%;">' +
                      '<a>手术时间</a>' +
                      ' <input type="text" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + ' })" name="option_time' + i + '" id="option_time' + i + '" style="padding-top: 4px;"/>' +
                      ' <a>手术名称</a>' +
                      ' <input type="text" style="padding-top: 4px;" id="option_name' + i + '" name="option_name' + i + '"/>' +
                      '</td></tr>');
                         if (dat[i].find_date != "") {
                             var date = new Date(parseInt(dat[i].find_date.replace("/Date(", "").replace(")/", ""), 10));
                             var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                             var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                         }
                         $('#option_time' + i + '').val(date.getFullYear() + '-' + a1 + '-' + a2);
                         $('#option_name' + i + '').val(dat[i].surgery_name);
                     }
                     $("input[name='option']").attr("disabled", true);
                 }
             }
             else {
                 $("input[name=" + "option" + "][value=" + "无" + "]").attr("checked", "checked");
             }
         });
        }
        //外伤史-------------------------------------------------------------------------------------------------------------------------------
        if (data.trauma == "无") {
            $("input[name=" + "trauma" + "][value=" + "无" + "]").attr("checked", "checked");
            $("#img2").attr("disabled", true);
        } else {
            $.post("/BasicInformation/ShowTrauma?resident_id=" + resident_id,
         function (data) {
             dat = eval(data);
             if (dat != "") {
                 if (data.find_date != "") {
                     var date = new Date(parseInt(data.find_date.replace("/Date(", "").replace(")/", ""), 10));
                     var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                     var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                 }
                 $('#trauma_time0').val(date.getFullYear() + '-' + a1 + '-' + a2);
                 $('#trauma_name0').val(data.trauma_name);

                 for (var i = 1; i < dat.length; i++) {
                     if (dat.length > 1) {
                         $('#trauma_add1').append('<tr id="trauma_add' + (i + 1) + '"><td class="detailContent" style="height: 25px; width: 100%;">' +
                 '<a>外伤时间</a>' +
                 ' <input type="text" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + ' })" name="trauma_time' + i + '" id="trauma_time' + i + '" style="padding-top: 4px;"/>' +
                 ' <a>外伤名称</a>' +
                 ' <input type="text" style="padding-top: 4px;" id="trauma_name' + i + '" name="trauma_name' + i + '"/>' +
                 '</td></tr>');
                         if (dat[i].find_date != "") {
                             var date = new Date(parseInt(dat[i].find_date.replace("/Date(", "").replace(")/", ""), 10));
                             var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                             var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                         }
                         $('#trauma_time' + i + '').val(date.getFullYear() + '-' + a1 + '-' + a2);
                         $('#trauma_name' + i + '').val(dat[i].trauma_name);
                     }
                     $("input[name='trauma']").attr("disabled", true);
                 }
             }
             else {
                 $("input[name=" + "trauma" + "][value=" + "无" + "]").attr("checked", "checked");
             }
         });
        }
        //输血史-------------------------------------------------------------------------------------------------------------------------------
        if (data.blood_transfusion == "无") {
            $("input[name=" + "blood_transfusion" + "][value=" + "无" + "]").attr("checked", "checked");
            $("#img3").attr("disabled", true);
        } else {
            $.post("/BasicInformation/ShowBloodTransfusion?resident_id=" + resident_id,
         function (data) {
             dat = eval(data);
             if (dat != "") {
                 if (data.find_date != "") {
                     var date = new Date(parseInt(data.find_date.replace("/Date(", "").replace(")/", ""), 10));
                     var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                     var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                 }
                 $('#blood_transfusion_time0').val(date.getFullYear() + '-' + a1 + '-' + a2);
                 $('#blood_transfusion_name0').val(data.blood_transfusion_reason);

                 for (var i = 1; i < dat.length; i++) {
                     if (dat.length > 1) {
                         $('#blood_transfusion_add1').append('<tr id="blood_transfusion_add' + (i + 1) + '"><td class="detailContent" style="height: 25px; width: 100%;">' +
                 '<a>输血时间</a>' +
                 ' <input type="text" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + ' })" name="blood_transfusion_time' + i + '" id="blood_transfusion_time' + i + '" style="padding-top: 4px;"/>' +
                 ' <a>输血原因</a>' +
                 ' <input type="text" style="padding-top: 4px;" id="blood_transfusion_name' + i + '" name="blood_transfusion_name' + i + '"/>' +
                 '</td></tr>');
                         if (dat[i].find_date != "") {
                             var date = new Date(parseInt(dat[i].find_date.replace("/Date(", "").replace(")/", ""), 10));
                             var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                             var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                         }
                         $('#blood_transfusion_time' + i + '').val(date.getFullYear() + '-' + a1 + '-' + a2);
                         $('#blood_transfusion_name' + i + '').val(dat[i].blood_transfusion_reason);
                     }
                     $("input[name='blood_transfusion']").attr("disabled", true);
                 }
             }
             else {
                 $("input[name=" + "blood_transfusion" + "][value=" + "无" + "]").attr("checked", "checked");
             }
         });
        }
        //家族史-------------------------------------------------------------------------------------------------------------------------------
        if (data.family_disease == "无") {
            $("input[name=" + "rdfamily_disease" + "][value=" + "无" + "]").attr("checked", "checked");
            $("#img4").attr("disabled", true);
        } else {
            $.post("/BasicInformation/ShowFamily?resident_id=" + resident_id,
         function (data) {
             dat = eval(data);
             if (dat != "") {
                 $("#relationship0").val(data.relationship_host);
                 var s = data.family_disease_type;
                 var checkboxs = s.split(',');
                 var box = document.getElementsByName("chfamilydisease0");
                 for (var i2 = 0; i2 < box.length; i2++) {
                     if (box[i2].type == "checkbox") {
                         for (var j = 0; j < checkboxs.length; j++) {
                             if (box[i2].value == checkboxs[j]) {
                                 box[i2].checked = true;
                             }

                         }
                     }
                 }
                 $("#family_other_disease0").val(data.family_disease_other);

                 for (var i = 1; i < dat.length; i++) {
                     if (dat.length > 1) {
                         $('#family_disease_add1').append('<tr id="family_disease_add' + (i + 1) + '">' +
                 '<td class="detailContent" style="height: 25px; width: 100%;">' +
                     '<select id="relationship' + i + '" name="relationship' + i + '">' +
                         '<option value="">==请选择==</option>' +
                                        '<option value="01">祖父</option>' +
                                        '<option value="02">祖母</option>' +
                                        '<option value="03">父亲</option>' +
                                        '<option value="04">母亲</option>' +
                                        '<option value="05">兄弟</option>' +
                                        '<option value="06">姐妹</option>' +
                                        '<option value="07">儿子</option>' +
                                        '<option value="08">女儿</option>' +
                     '</select>' +
                     '<a style="margin-left:1em"></a>' +
                     ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="高血压" />高血压' +
                     ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="糖尿病" />糖尿病' +
                     ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="结核病" />结核病' +
                     ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="冠心病" />冠心病' +
                     ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="恶性肿瘤" />恶性肿瘤' +
                     ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="脑卒中" />脑卒中' +
                     ' <a style="margin-left:1em">其他疾病</a>' +
                     ' <input type="text" style="padding-top: 4px;width:80px" id="family_other_disease' + i + '" />' +
                     '</td>' +
                     '</tr>');
                         $('#relationship' + i + '').val(dat[i].relationship_host);
                         var s = dat[i].family_disease_type;
                         var checkboxs = s.split(',');
                         var box = document.getElementsByName('chfamilydisease' + i + '');
                         for (var i1 = 0; i1 < box.length; i1++) {
                             if (box[i1].type == "checkbox") {
                                 for (var j = 0; j < checkboxs.length; j++) {
                                     if (box[i1].value == checkboxs[j]) {
                                         box[i1].checked = true;
                                     }
                                 }
                             }
                         }
                         $('#family_other_disease' + i + '').val(dat[i].family_disease_other);
                     }
                     $("input[name='rdfamily_disease']").attr("disabled", true);
                 }
             }
             else {
                 $("input[name=" + "rdfamily_disease" + "][value=" + "无" + "]").attr("checked", "checked");
             }
         });
        }
        
        //残疾情况----------------------------------------------------------------------------------------------------------------------------
        if ((data.disability_type == "未知" || data.disability_type == "" || data.disability_type == "无") && data.disability_other == "") {
            $("input[name=" + "rddisability" + "]").attr("checked", "checked");
        } else {
            var s = data.disability_type;
            var checkboxs = s.split('$');
            var box = document.getElementsByName("chdisability");
            for (var i = 0; i < box.length; i++) {
                if (box[i].type == "checkbox") {
                    for (var j = 0; j < checkboxs.length; j++) {
                        if (box[i].value == checkboxs[j]) {
                            box[i].checked = true;
                        }
                    }
                }
            }
            $("#disability_other").val(data.disability_other);
            $("#disability_numb").val(data.disability_certificate_number);
        }

        $.post("/BasicInformation/Validate?id_card_number=" + data.id_card_number,
           function (data) {
               if (data == "True") {
                   alert("此人已经登记，个人信息只能登记一次！");
                   form1.reset();
               } else {
                   alert("请将此人信息补充完整！");
               }
           });
        //-----------------------------------------------------------------------------------------------------------------------------------------------------------
    }

    $("#txtResidentName").result(log).click(function () {
        $(this).prev().search();
    });
    //========================================================================自动匹配结束================================================================================


    //---------------------------------------------------身份证号验证信息  娄帅------------------------------------------------
    $("#txtCardNumber").blur(
        function () {
            $.post("/BasicInformation/Validate?id_card_number=" + $("#txtCardNumber").val(),
         function (data) {
             if (data == "True") {
                 alert("此人已经登记，个人信息只能登记一次！");
                 form1.reset();
             }
             else {
                 var s = $("#txtCardNumber").val();
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
                         $("#txtCardNumber").val("");
                         $("#txtBirthDate").val("");
                         $("#ltAge").val("");
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
                             $("#txtCardNumber").val("");
                             $("#txtBirthDate").val("");
                             $("#ltAge").val("");
                         }
                         else {
                             var s1 = s.substring(6, 10);
                             var s2 = s.substring(10, 12);
                             var s3 = s.substring(12, 14);

                             $("#txtBirthDate").val(s1 + "-" + s2 + "-" + s3);
                             var a = new Date();
                             var year = a.getFullYear() - s1;
                             if (year > 0) {
                                 $("#ltAge").val(year + "岁");
                             } else if (year == 0) {
                                 var month = a.getMonth() - s2;
                                 if (month > 0) {
                                     $("#ltAge").val(month + "月");
                                 } else if (month == 0) {
                                     var day = a.getDay() - s3;
                                     if (day > 0) {
                                         $("#ltAge").val(day + "天");
                                     }
                                 }
                             }

                             $.post('/Data/GetDataByIdCardNumber?id_card_number=' + s,
                                    function (datas) {
                                        data = eval(datas);
                                        if (data != "") {
                                            $("#txtResidentName").val(data[0].resident_name);
                                            $("input[name=" + "rdlSex" + "][value=" + data[0].sex + "]").attr("checked", "checked");

                                            $("#txtCardNumber").val(data[0].id_card_number);

                                            if (data[0].start_work_date != "") {
                                                var a = data[0].start_work_date.split('/');
                                                if (a[1].length < 2) {
                                                    var a1 = "0" + a[1];
                                                } else {
                                                    var a1 = a[1];
                                                }
                                                if (a[2].split(' ')[0].length < 2) {
                                                    var a2 = "0" + a[2].split(' ')[0];
                                                } else {
                                                    var a2 = a[2].split(' ')[0];
                                                }
                                                $("#txtStartWorkDate").val(a[0] + '-' + a1 + '-' + a2);
                                            }

                                            $("#txtWorkUnit").val(data[0].work_unit);
                                            $("#ddlcraft").val(data[0].work_type);
                                            $("input[name=" + "work_time" + "][value=" + data[0].worker_time_everyweek + "]").attr("checked", "checked");

                                            $("#txtFamilyPhone").val(data[0].family_phone);
                                            $("#txtIndividualPhone").val(data[0].individual_phone);

                                            $("#txtpersonal_fixed_line_telephone").val(data[0].personal_fixed_line_telephone);
                                            $("#txtcontact_name").val(data[0].contact_name);
                                            $("#txtcontact_phone").val(data[0].contact_phone);
                                            $("#txtEmail").val(data[0].email);

                                            $("#nationality").val(data[0].nationality_name);
                                            $("#zipCode").val(data[0].post_code);
                                            $("#fatherName").val(data[0].father_name);
                                            $("#motherName").val(data[0].mother_name);
                                            $("#fatherIdCard").val(data[0].father_id_card_numb);
                                            $("#motherIdCard").val(data[0].mother_id_card_numb);
                                            $("#fatherPhone").val(data[0].father_phone);
                                            $("#motherPhone").val(data[0].mother_phone);
                                            /*显示当前用户的填写人姓名，提交处理时，提交原填写人姓名*/
                                            //$("#fillIdentity").val(data.worker_user_name);

                                            $("#ddlPermanent_address_type").val(data[0].permanent_address_type);
                                            $("#ddlABOBloodType").val(data[0].abo_blood_group);
                                            $("#ddlcontact_my_relationship").val(data[0].contact_my_relationship);
                                            $("#ddlNation").val(data[0].nation);
                                            $("#ddlEducationQualification").val(data[0].education_qualification);
                                            $("#ddlRHBloodType").val(data[0].rh_blood_group);
                                            $("#ddlMarrigeState").val(data[0].marital_status);
                                            $("#ddlCostPayment").val(data[0].cost_method_payment);
                                            $("#ddlOccupationSituation").val(data[0].occupation_situation);
                                            $("#ddlAddressType").val(data[0].other_address_type);
                                            $("#other_address").val(data[0].other_address);

                                            //出生住址
                                            //----省----
                                            var CommunityCode = data[0].community_code;
                                            var BirthCommitcode = data[0].birth_community_code;

                                            if (BirthCommitcode != "") {
                                                $("#ddlProvince1").val(BirthCommitcode.substring(0, 2));
                                                //-----市-----
                                                $.post("/Data/City?code=" + BirthCommitcode.substring(0, 2),
                                                 function (datas) {
                                                     dat1 = eval(datas);
                                                     $("#ddlCity1").empty();
                                                     $("#ddlCity1").append("<option value=" + "" + ">==请选择==</option>");
                                                     if (dat1 != "") {
                                                         for (var i = 0; i < dat1.length; i++) {
                                                             $("#ddlCity1").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                         }
                                                         $("#ddlCity1").val(BirthCommitcode.substring(0, 4));
                                                     }
                                                 })
                                                //-----区/县-----
                                                $.post("/Data/County?code=" + BirthCommitcode.substring(0, 4),
                                                 function (datas) {
                                                     dat1 = eval(datas);
                                                     $("#ddlCounty1").empty();
                                                     $("#ddlCounty1").append("<option value=" + "" + ">==请选择==</option>");
                                                     if (dat1 != "") {
                                                         for (var i = 0; i < dat1.length; i++) {
                                                             $("#ddlCounty1").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                         }
                                                         $("#ddlCounty1").val(BirthCommitcode.substring(0, 6));
                                                     }
                                                 })
                                                $("#birth_address").val(data[0].birth_address);

                                            } else if (data[0].birth_address != "") {
                                                var s = data[0].birth_address.split('省');
                                                var pro = s[0] + "省";
                                                var s1 = s[1].split('市');
                                                var cit = s1[0] + "市";
                                                var couty = s1[1];
                                                $.post("/Data/ProvinceCode",
                                                    { Name: pro },
                                                function (data1) {
                                                    //===========================显示省==========================
                                                    $("#ddlProvince1").val(data1);
                                                    //加载省内市-------------------------------------------------------------------------------------------------------------------------
                                                    $.post("/Data/City?code=" + data1,
                                                     function (datas) {
                                                         dat1 = eval(datas);
                                                         $("#ddlCity1").empty();
                                                         $("#ddlCity1").append("<option value=" + "" + ">==请选择==</option>");
                                                         if (dat1 != "") {
                                                             for (var i = 0; i < dat1.length; i++) {
                                                                 $("#ddlCity1").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                             }
                                                         }
                                                     });
                                                    $.post("/Data/CityCode",
                                                                    { Name: cit },
                                                                     function (data2) {
                                                                         //=======================显示市================================
                                                                         $("#ddlCity1").val(data2);
                                                                         //加载市内区/县/市----------------------------------------------------------------------------------------------------------------
                                                                         $.post("/Data/County?code=" + data2,
                                                                          function (datas) {
                                                                              dat2 = eval(datas);
                                                                              $("#ddlCounty1").empty();
                                                                              $("#ddlCounty1").append("<option value=" + "" + ">==请选择==</option>");
                                                                              if (dat2 != "") {
                                                                                  for (var i1 = 0; i1 < dat2.length; i1++) {
                                                                                      $("#ddlCounty1").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                                                                                  }
                                                                              }
                                                                          });
                                                                         $.post("/Data/CountyCode",
                                                                             { Name: couty },
                                                                              function (data3) {
                                                                                  //=======================显示区/县/市================================
                                                                                  $("#ddlCounty1").val(data3);
                                                                                  $.post("/Data/CountyName?code=" + data3,
                                                                           function (data4) {
                                                                               $("#birth_address").val(couty.split(data4)[1]);
                                                                           });

                                                                              });
                                                                     });
                                                });
                                            }

                                            $("#home_address").val(data[0].permanent_home_address);
                                            //家庭常住住址-------------------------------------------------------------------------------------------------------------------------
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

                                            $("#residence_address").val(data[0].residence_address);
                                            var ResidenceCommitcode = data[0].present_community_code;
                                            //现住地址------------------------------------------------------------------------------------------------------------------------------
                                            if (ResidenceCommitcode != "") {
                                                if (ResidenceCommitcode.length == 2) {
                                                    $("#ddlProvince2").val(ResidenceCommitcode.substring(0, 2));
                                                }
                                                else if (ResidenceCommitcode.length == 4) {
                                                    $("#ddlProvince2").val(ResidenceCommitcode.substring(0, 2));
                                                    //-----市-----
                                                    $.post("/Data/City?code=" + ResidenceCommitcode.substring(0, 2),
                                                     function (datas) {
                                                         dat1 = eval(datas);
                                                         $("#ddlCity2").empty();
                                                         $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                                                         if (dat1 != "") {
                                                             for (var i = 0; i < dat1.length; i++) {
                                                                 $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                             }
                                                             $("#ddlCity2").val(ResidenceCommitcode.substring(0, 4));
                                                         }
                                                     })

                                                }
                                                else if (ResidenceCommitcode.length == 6) {
                                                    $("#ddlProvince2").val(ResidenceCommitcode.substring(0, 2));
                                                    //-----市-----
                                                    $.post("/Data/City?code=" + ResidenceCommitcode.substring(0, 2),
                                                     function (datas) {
                                                         dat1 = eval(datas);
                                                         $("#ddlCity2").empty();
                                                         $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                                                         if (dat1 != "") {
                                                             for (var i = 0; i < dat1.length; i++) {
                                                                 $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                             }
                                                             $("#ddlCity2").val(ResidenceCommitcode.substring(0, 4));
                                                         }
                                                     })
                                                    //-----区/县-----
                                                    $.post("/Data/County?code=" + ResidenceCommitcode.substring(0, 4),
                                                     function (datas) {
                                                         dat1 = eval(datas);
                                                         $("#ddlCounty2").empty();
                                                         $("#ddlCounty2").append("<option value=" + "" + ">==请选择==</option>");
                                                         if (dat1 != "") {
                                                             for (var i = 0; i < dat1.length; i++) {
                                                                 $("#ddlCounty2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                             }
                                                             $("#ddlCounty2").val(ResidenceCommitcode.substring(0, 6));
                                                         }
                                                     })
                                                }
                                                else if (ResidenceCommitcode.length == 9) {
                                                    $("#ddlProvince2").val(ResidenceCommitcode.substring(0, 2));
                                                    //-----市-----
                                                    $.post("/Data/City?code=" + ResidenceCommitcode.substring(0, 2),
                                                     function (datas) {
                                                         dat1 = eval(datas);
                                                         $("#ddlCity2").empty();
                                                         $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                                                         if (dat1 != "") {
                                                             for (var i = 0; i < dat1.length; i++) {
                                                                 $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                             }
                                                             $("#ddlCity2").val(ResidenceCommitcode.substring(0, 4));
                                                         }
                                                     })
                                                    //-----区/县-----
                                                    $.post("/Data/County?code=" + ResidenceCommitcode.substring(0, 4),
                                                     function (datas) {
                                                         dat1 = eval(datas);
                                                         $("#ddlCounty2").empty();
                                                         $("#ddlCounty2").append("<option value=" + "" + ">==请选择==</option>");
                                                         if (dat1 != "") {
                                                             for (var i = 0; i < dat1.length; i++) {
                                                                 $("#ddlCounty2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                             }
                                                             $("#ddlCounty2").val(ResidenceCommitcode.substring(0, 6));
                                                         }
                                                     })
                                                    //-----镇-----
                                                    $.post("/Data/Street?code=" + ResidenceCommitcode.substring(0, 6),
                                                     function (data3) {
                                                         dat3 = eval(data3);
                                                         $("#ddlStreet2").empty();
                                                         $("#ddlStreet2").append("<option value=" + "" + ">==请选择==</option>");
                                                         if (dat3 != "") {
                                                             for (var i2 = 0; i2 < dat3.length; i2++) {
                                                                 $("#ddlStreet2").append("<option value=" + dat3[i2].code + ">" + dat3[i2].name + "</option>");
                                                             }
                                                             $("#ddlStreet2").val(ResidenceCommitcode.substring(0, 9));
                                                         }
                                                     })
                                                }
                                                else if (ResidenceCommitcode.length == 12) {
                                                    $("#ddlProvince2").val(ResidenceCommitcode.substring(0, 2));
                                                    //-----市-----
                                                    $.post("/Data/City?code=" + ResidenceCommitcode.substring(0, 2),
                                                     function (datas) {
                                                         dat1 = eval(datas);
                                                         $("#ddlCity2").empty();
                                                         $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                                                         if (dat1 != "") {
                                                             for (var i = 0; i < dat1.length; i++) {
                                                                 $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                             }
                                                             $("#ddlCity2").val(ResidenceCommitcode.substring(0, 4));
                                                         }
                                                     })
                                                    //-----区/县-----
                                                    $.post("/Data/County?code=" + ResidenceCommitcode.substring(0, 4),
                                                     function (datas) {
                                                         dat1 = eval(datas);
                                                         $("#ddlCounty2").empty();
                                                         $("#ddlCounty2").append("<option value=" + "" + ">==请选择==</option>");
                                                         if (dat1 != "") {
                                                             for (var i = 0; i < dat1.length; i++) {
                                                                 $("#ddlCounty2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                                             }
                                                             $("#ddlCounty2").val(ResidenceCommitcode.substring(0, 6));
                                                         }
                                                     })
                                                    //-----镇-----
                                                    $.post("/Data/Street?code=" + ResidenceCommitcode.substring(0, 6),
                                                     function (data3) {
                                                         dat3 = eval(data3);
                                                         $("#ddlStreet2").empty();
                                                         $("#ddlStreet2").append("<option value=" + "" + ">==请选择==</option>");
                                                         if (dat3 != "") {
                                                             for (var i2 = 0; i2 < dat3.length; i2++) {
                                                                 $("#ddlStreet2").append("<option value=" + dat3[i2].code + ">" + dat3[i2].name + "</option>");
                                                             }
                                                             $("#ddlStreet2").val(ResidenceCommitcode.substring(0, 9));
                                                         }
                                                     })

                                                    //-----村-----
                                                    $.post("/Data/Community?code=" + ResidenceCommitcode.substring(0, 9),
                                                     function (data4) {
                                                         dat4 = eval(data4);
                                                         $("#ddlCommunity2").empty();
                                                         $("#ddlCommunity2").append("<option value=" + "" + ">==请选择==</option>");
                                                         if (dat3 != "") {
                                                             for (var i3 = 0; i3 < dat4.length; i3++) {
                                                                 $("#ddlCommunity2").append("<option value=" + dat4[i3].code + ">" + dat4[i3].name + "</option>");
                                                             }
                                                             $("#ddlCommunity2").val(ResidenceCommitcode);
                                                         }
                                                     })
                                                }
                                            }


                                            //药物过敏史----------------------------------------------------------------------------------------------------------------------------
                                            if ((data[0].drug_allergy_type == "未知" || data[0].drug_allergy_type == "" || data[0].drug_allergy_type == "无") && data[0].drug_allergy_other == "") {
                                                $("input[name=" + "rdGuoMin" + "]").attr("checked", "checked");
                                            } else {
                                                var s = data[0].drug_allergy_type;
                                                var checkboxs = s.split('$');
                                                var box = document.getElementsByName("chGuoMin");
                                                for (var i = 0; i < box.length; i++) {
                                                    if (box[i].type == "checkbox") {
                                                        for (var j = 0; j < checkboxs.length; j++) {
                                                            if (box[i].value == checkboxs[j]) {
                                                                box[i].checked = true;
                                                            }
                                                        }
                                                    }
                                                }
                                                $("#GuoMin_Other").val(data[0].drug_allergy_other);
                                            }
                                            //疾病史-------------------------------------------------------------------------------------------------------------------------------
                                            if (data[0].disease == "无") {
                                                $("input[name=" + "rddisease" + "]").attr("checked", "checked");
                                            } else {
                                                $.post("ASHX/ShowDisease?resident_id=" + resident_id,
                                               function (data) {
                                                   dat = eval(data);
                                                   if (dat != "") {
                                                       var s = data[0].disease_type;
                                                       var checkboxs = s.split(',');
                                                       var box = document.getElementsByName("chdisease");
                                                       for (var i = 0; i < box.length; i++) {
                                                           if (box[i].type == "checkbox") {
                                                               for (var j = 0; j < checkboxs.length; j++) {
                                                                   if (box[i].value == checkboxs[j]) {
                                                                       box[i].checked = true;
                                                                   }
                                                               }
                                                           }
                                                       }
                                                       $("#Disease_Other").val(data[0].disease_other);
                                                   } else {
                                                       $("input[name=" + "rddisease" + "]").attr("checked", "checked");
                                                   }
                                               });
                                            }

                                            //吸烟史-------------------------------------------------------------------------------------------------------------------------------
                                            if (data[0].smoking == "无") {
                                                $("input[name=" + "smoke" + "][value=" + "无" + "]").attr("checked", "checked");
                                                $("#day_smoke").attr("disabled", true);
                                                $("#begin_smoke").attr("disabled", true);
                                                $("#began_smoke").attr("disabled", true);
                                                $("#end_smoke").attr("disabled", true);
                                            } else {
                                                $.post("/BasicInformation/ShowSmoke?resident_id=" + resident_id,
                                               function (data) {
                                                   dat = eval(data);
                                                   if (dat != "") {
                                                       var s = data[0].smoking_status;
                                                       if (s == "吸烟") {
                                                           $("input[name=" + "smoke" + "][value=" + s + "]").attr("checked", "checked");
                                                           $("#day_smoke").val(data[0].daily_smoking_amount);
                                                           $("#begin_smoke").val(data[0].start_smoking_age);
                                                           $("#began_smoke").attr("disabled", true);
                                                           $("#end_smoke").attr("disabled", true);
                                                       } else {
                                                           $("input[name=" + "smoke" + "][value=" + s + "]").attr("checked", "checked");
                                                           $("#began_smoke").val(data[0].start_smoking_age);
                                                           $("#end_smoke").val(data[0].quit_smoking_age);
                                                           $("#day_smoke").attr("disabled", true);
                                                           $("#begin_smoke").attr("disabled", true);
                                                       }
                                                   } else {
                                                       $("input[name=" + "smoke" + "][value=" + "无" + "]").attr("checked", "checked");
                                                       $("#day_smoke").attr("disabled", true);
                                                       $("#begin_smoke").attr("disabled", true);
                                                       $("#began_smoke").attr("disabled", true);
                                                       $("#end_smoke").attr("disabled", true);
                                                   }
                                               });
                                            }
                                            //饮酒史-------------------------------------------------------------------------------------------------------------------------------
                                            if (data[0].drinking == "无") {
                                                $("input[name=" + "rddrink" + "][value=" + "无" + "]").attr("checked", "checked");
                                                $("#day_drink").attr("disabled", true);
                                                $("#begin_drink").attr("disabled", true);
                                                $("#began_drink").attr("disabled", true);
                                                $("#end_drink").attr("disabled", true);
                                            } else {
                                                $.post("/BasicInformation/ShowDrink?resident_id=" + resident_id,
                                               function (data) {
                                                   dat = eval(data);
                                                   if (dat != "") {
                                                       var s = data[0].quit_drinking_yes_or_no;
                                                       if (s == "未戒酒") {
                                                           $("input[name=" + "smoke" + "][value=" + "饮酒" + "]").attr("checked", "checked");
                                                           $("#day_drink").val(data[0].daily_drinking_amount);
                                                           $("#begin_drink").val(data[0].start_drinking_age);
                                                           $("#began_drink").attr("disabled", true);
                                                           $("#end_drink").attr("disabled", true);
                                                       } else {
                                                           $("input[name=" + "smoke" + "][value=" + "已戒酒" + "]").attr("checked", "checked");
                                                           $("#began_drink").val(data[0].start_drinking_age);
                                                           $("#end_drink").val(data[0].quit_drinking_age);
                                                           $("#day_drink").attr("disabled", true);
                                                           $("#begin_drink").attr("disabled", true);
                                                       }
                                                   } else {
                                                       $("input[name=" + "rddrink" + "][value=" + "无" + "]").attr("checked", "checked");
                                                       $("#day_drink").attr("disabled", true);
                                                       $("#begin_drink").attr("disabled", true);
                                                       $("#began_drink").attr("disabled", true);
                                                       $("#end_drink").attr("disabled", true);
                                                   }
                                               });
                                            }
                                            //手术史-------------------------------------------------------------------------------------------------------------------------------
                                            if (data[0].surgery == "无") {
                                                $("input[name=" + "option" + "][value=" + "无" + "]").attr("checked", "checked");
                                                $("#img1").attr("disabled", true);
                                            } else {
                                                $.post("/BasicInformation/ShowOption?resident_id=" + resident_id,
                                             function (data) {
                                                 dat = eval(data);
                                                 if (dat != "") {
                                                     if (data[0].find_date != "") {
                                                         var a = data[0].find_date.split('/');
                                                         if (a[1].length < 2) {
                                                             var a1 = "0" + a[1];
                                                         } else {
                                                             var a1 = a[1];
                                                         }
                                                         if (a[2].split(' ')[0].length < 2) {
                                                             var a2 = "0" + a[2].split(' ')[0];
                                                         } else {
                                                             var a2 = a[2].split(' ')[0];
                                                         }
                                                     }
                                                     $('#option_time0').val(a[0] + '-' + a1 + '-' + a2);
                                                     $('#option_name0').val(data[0].surgery_name);

                                                     for (var i = 1; i < dat.length; i++) {
                                                         if (dat.length > 1) {
                                                             $('#option_add1').append('<tr id="option_add' + (i + 1) + '"><td class="detailContent" style="height: 25px; width: 100%;">' +
                                                          '<a>手术时间</a>' +
                                                          ' <input type="text" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + ' })" name="option_time' + i + '" id="option_time' + i + '" style="padding-top: 4px;"/>' +
                                                          ' <a>手术名称</a>' +
                                                          ' <input type="text" style="padding-top: 4px;" id="option_name' + i + '" name="option_name' + i + '"/>' +
                                                          '</td></tr>');
                                                             if (dat[i].find_date != "") {
                                                                 var a = dat[i].find_date.split('/');
                                                                 if (a[1].length < 2) {
                                                                     var a1 = "0" + a[1];
                                                                 } else {
                                                                     var a1 = a[1];
                                                                 }
                                                                 if (a[2].split(' ')[0].length < 2) {
                                                                     var a2 = "0" + a[2].split(' ')[0];
                                                                 } else {
                                                                     var a2 = a[2].split(' ')[0];
                                                                 }
                                                             }
                                                             $('#option_time' + i + '').val(a[0] + '-' + a1 + '-' + a2);
                                                             $('#option_name' + i + '').val(dat[i].surgery_name);
                                                         }
                                                         $("input[name='option']").attr("disabled", true);
                                                     }
                                                 }
                                                 else {
                                                     $("input[name=" + "option" + "][value=" + "无" + "]").attr("checked", "checked");
                                                 }
                                             });
                                            }
                                            //外伤史-------------------------------------------------------------------------------------------------------------------------------
                                            if (data[0].trauma == "无") {
                                                $("input[name=" + "trauma" + "][value=" + "无" + "]").attr("checked", "checked");
                                                $("#img2").attr("disabled", true);
                                            } else {
                                                $.post("/BasicInformation/ShowTrauma?resident_id=" + resident_id,
                                             function (data) {
                                                 dat = eval(data);
                                                 if (dat != "") {
                                                     if (data[0].find_date != "") {
                                                         var a = data[0].find_date.split('/');
                                                         if (a[1].length < 2) {
                                                             var a1 = "0" + a[1];
                                                         } else {
                                                             var a1 = a[1];
                                                         }
                                                         if (a[2].split(' ')[0].length < 2) {
                                                             var a2 = "0" + a[2].split(' ')[0];
                                                         } else {
                                                             var a2 = a[2].split(' ')[0];
                                                         }
                                                     }
                                                     $('#trauma_time0').val(a[0] + '-' + a1 + '-' + a2);
                                                     $('#trauma_name0').val(data[0].trauma_name);

                                                     for (var i = 1; i < dat.length; i++) {
                                                         if (dat.length > 1) {
                                                             $('#trauma_add1').append('<tr id="trauma_add' + (i + 1) + '"><td class="detailContent" style="height: 25px; width: 100%;">' +
                                                     '<a>外伤时间</a>' +
                                                     ' <input type="text" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + ' })" name="trauma_time' + i + '" id="trauma_time' + i + '" style="padding-top: 4px;"/>' +
                                                     ' <a>外伤名称</a>' +
                                                     ' <input type="text" style="padding-top: 4px;" id="trauma_name' + i + '" name="trauma_name' + i + '"/>' +
                                                     '</td></tr>');
                                                             if (dat[i].find_date != "") {
                                                                 var a = dat[i].find_date.split('/');
                                                                 if (a[1].length < 2) {
                                                                     var a1 = "0" + a[1];
                                                                 } else {
                                                                     var a1 = a[1];
                                                                 }
                                                                 if (a[2].split(' ')[0].length < 2) {
                                                                     var a2 = "0" + a[2].split(' ')[0];
                                                                 } else {
                                                                     var a2 = a[2].split(' ')[0];
                                                                 }
                                                             }
                                                             $('#trauma_time' + i + '').val(a[0] + '-' + a1 + '-' + a2);
                                                             $('#trauma_name' + i + '').val(dat[i].trauma_name);
                                                         }
                                                         $("input[name='trauma']").attr("disabled", true);
                                                     }
                                                 }
                                                 else {
                                                     $("input[name=" + "trauma" + "][value=" + "无" + "]").attr("checked", "checked");
                                                 }
                                             });
                                            }
                                            //输血史-------------------------------------------------------------------------------------------------------------------------------
                                            if (data[0].blood_transfusion == "无") {
                                                $("input[name=" + "blood_transfusion" + "][value=" + "无" + "]").attr("checked", "checked");
                                                $("#img3").attr("disabled", true);
                                            } else {
                                                $.post("/BasicInformation/ShowBloodTransfusion?resident_id=" + resident_id,
                                             function (data) {
                                                 dat = eval(data);
                                                 if (dat != "") {
                                                     if (data[0].find_date != "") {
                                                         var a = data[0].find_date.split('/');
                                                         if (a[1].length < 2) {
                                                             var a1 = "0" + a[1];
                                                         } else {
                                                             var a1 = a[1];
                                                         }
                                                         if (a[2].split(' ')[0].length < 2) {
                                                             var a2 = "0" + a[2].split(' ')[0];
                                                         } else {
                                                             var a2 = a[2].split(' ')[0];
                                                         }
                                                     }
                                                     $('#blood_transfusion_time0').val(a[0] + '-' + a1 + '-' + a2);
                                                     $('#blood_transfusion_name0').val(data[0].blood_transfusion_reason);

                                                     for (var i = 1; i < dat.length; i++) {
                                                         if (dat.length > 1) {
                                                             $('#blood_transfusion_add1').append('<tr id="blood_transfusion_add' + (i + 1) + '"><td class="detailContent" style="height: 25px; width: 100%;">' +
                                                     '<a>输血时间</a>' +
                                                     ' <input type="text" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + ' })" name="blood_transfusion_time' + i + '" id="blood_transfusion_time' + i + '" style="padding-top: 4px;"/>' +
                                                     ' <a>输血原因</a>' +
                                                     ' <input type="text" style="padding-top: 4px;" id="blood_transfusion_name' + i + '" name="blood_transfusion_name' + i + '"/>' +
                                                     '</td></tr>');
                                                             if (dat[i].find_date != "") {
                                                                 var a = dat[i].find_date.split('/');
                                                                 if (a[1].length < 2) {
                                                                     var a1 = "0" + a[1];
                                                                 } else {
                                                                     var a1 = a[1];
                                                                 }
                                                                 if (a[2].split(' ')[0].length < 2) {
                                                                     var a2 = "0" + a[2].split(' ')[0];
                                                                 } else {
                                                                     var a2 = a[2].split(' ')[0];
                                                                 }
                                                             }
                                                             $('#blood_transfusion_time' + i + '').val(a[0] + '-' + a1 + '-' + a2);
                                                             $('#blood_transfusion_name' + i + '').val(dat[i].blood_transfusion_reason);
                                                         }
                                                         $("input[name='blood_transfusion']").attr("disabled", true);
                                                     }
                                                 }
                                                 else {
                                                     $("input[name=" + "blood_transfusion" + "][value=" + "无" + "]").attr("checked", "checked");
                                                 }
                                             });
                                            }
                                            //家族史-------------------------------------------------------------------------------------------------------------------------------
                                            if (data[0].family_disease == "无") {
                                                $("input[name=" + "rdfamily_disease" + "][value=" + "无" + "]").attr("checked", "checked");
                                                $("#img4").attr("disabled", true);
                                            } else {
                                                $.post("/BasicInformation/ShowFamily?resident_id=" + resident_id,
                                             function (data) {
                                                 dat = eval(data);
                                                 if (dat != "") {
                                                     $("#relationship0").val(data[0].relationship_host);
                                                     var s = data[0].family_disease_type;
                                                     var checkboxs = s.split(',');
                                                     var box = document.getElementsByName("chfamilydisease0");
                                                     for (var i2 = 0; i2 < box.length; i2++) {
                                                         if (box[i2].type == "checkbox") {
                                                             for (var j = 0; j < checkboxs.length; j++) {
                                                                 if (box[i2].value == checkboxs[j]) {
                                                                     box[i2].checked = true;
                                                                 }

                                                             }
                                                         }
                                                     }
                                                     $("#family_other_disease0").val(data[0].family_disease_other);

                                                     for (var i = 1; i < dat.length; i++) {
                                                         if (dat.length > 1) {
                                                             $('#family_disease_add1').append('<tr id="family_disease_add' + (i + 1) + '">' +
                                                     '<td class="detailContent" style="height: 25px; width: 100%;">' +
                                                         '<select id="relationship' + i + '" name="relationship' + i + '">' +
                                                             '<option value="">==请选择==</option>' +
                                                                            '<option value="01">祖父</option>' +
                                                                            '<option value="02">祖母</option>' +
                                                                            '<option value="03">父亲</option>' +
                                                                            '<option value="04">母亲</option>' +
                                                                            '<option value="05">兄弟</option>' +
                                                                            '<option value="06">姐妹</option>' +
                                                                            '<option value="07">儿子</option>' +
                                                                            '<option value="08">女儿</option>' +
                                                         '</select>' +
                                                         '<a style="margin-left:1em"></a>' +
                                                         ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="高血压" />高血压' +
                                                         ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="糖尿病" />糖尿病' +
                                                         ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="结核病" />结核病' +
                                                         ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="冠心病" />冠心病' +
                                                         ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="恶性肿瘤" />恶性肿瘤' +
                                                         ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="脑卒中" />脑卒中' +
                                                         ' <a style="margin-left:1em">其他疾病</a>' +
                                                         ' <input type="text" style="padding-top: 4px;width:80px" id="family_other_disease' + i + '" />' +
                                                         '</td>' +
                                                         '</tr>');
                                                             $('#relationship' + i + '').val(dat[i].relationship_host);
                                                             var s = dat[i].family_disease_type;
                                                             var checkboxs = s.split(',');
                                                             var box = document.getElementsByName('chfamilydisease' + i + '');
                                                             for (var i1 = 0; i1 < box.length; i1++) {
                                                                 if (box[i1].type == "checkbox") {
                                                                     for (var j = 0; j < checkboxs.length; j++) {
                                                                         if (box[i1].value == checkboxs[j]) {
                                                                             box[i1].checked = true;
                                                                         }
                                                                     }
                                                                 }
                                                             }
                                                             $('#family_other_disease' + i + '').val(dat[i].family_disease_other);
                                                         }
                                                         $("input[name='rdfamily_disease']").attr("disabled", true);
                                                     }
                                                 }
                                                 else {
                                                     $("input[name=" + "rdfamily_disease" + "][value=" + "无" + "]").attr("checked", "checked");
                                                 }
                                             });
                                            }

                                            //残疾情况----------------------------------------------------------------------------------------------------------------------------
                                            if ((data[0].disability_type == "未知" || data[0].disability_type == "" || data[0].disability_type == "无") && data[0].disability_other == "") {
                                                $("input[name=" + "rddisability" + "]").attr("checked", "checked");
                                            } else {
                                                var s = data[0].disability_type;
                                                var checkboxs = s.split('$');
                                                var box = document.getElementsByName("chdisability");
                                                for (var i = 0; i < box.length; i++) {
                                                    if (box[i].type == "checkbox") {
                                                        for (var j = 0; j < checkboxs.length; j++) {
                                                            if (box[i].value == checkboxs[j]) {
                                                                box[i].checked = true;
                                                            }
                                                        }
                                                    }
                                                }
                                                $("#disability_other").val(data[0].disability_other);
                                                $("#disability_numb").val(data[0].disability_certificate_number);
                                            }
                                        }
                                    })
                         }
                     }
                 } else {
                     alert("二代身份证号码长度为18位，请检查后重新输入！");
                     $("#txtCardNumber").val("");
                     $("#txtBirthDate").val("");
                     $("#ltAge").val("");
                 }
             }
         });
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
    //---------------------------------------------------父亲身份证号验证信息  娄帅------------------------------------------------
    $("#fatherIdCard").blur(
        function () {
            var s = $("#fatherIdCard").val();
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
                    alert('输入的父亲身份证号码中出生日期不对！');
                    $("#fatherIdCard").val("");
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
                        alert('您输入父亲的二代身份证号码有误，请检查后重新输入！');
                        $("#fatherIdCard").val("");

                    }
                }
            } else {
                alert("父亲的二代身份证号码长度为18位，请检查后重新输入！");
                $("#fatherIdCard").val("");
            }
        });
    //---------------------------------------------------母亲身份证号验证信息  娄帅------------------------------------------------
    $("#motherIdCard").blur(
     function () {
         var s = $("#motherIdCard").val();
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
                 alert('输入母亲的身份证号码中出生日期不对！');
                 $("#motherIdCard").val("");
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
                     alert('您输入母亲的二代身份证号码有误，请检查后重新输入！');
                     $("#motherIdCard").val("");

                 }
             }
         } else {
             alert("母亲的二代身份证号码长度为18位，请检查后重新输入！");
             $("#motherIdCard").val("");
         }
     });
    //------------------------------检查邮件地址是否合法------------------------------------
    $("#txtEmail,#father_email,#mother_email").blur(function () {
        var string = $("#txtEmail").val();
        var string1 = $("#father_email").val();
        var string2 = $("#mother_email").val();
        if (string.length != 0) {
            var re = new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/);
            var a = string.match(re);
            if (a == null) {
                alert("电子邮箱填写不符合规则！");
                $("#txtEmail").val("");
            }
        }

        if (string1.length != 0) {
            var re = new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/);
            var a = string1.match(re);
            if (a == null) {
                alert("父亲邮箱填写不符合规则！");
                $("#father_email").val("");
            }
        }

        if (string2.length != 0) {
            var re = new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/);
            var a = string2.match(re);
            if (a == null) {
                alert("母亲邮箱填写不符合规则！");
                $("#mother_email").val("");
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
    //=============================常住类型========================================
    $.post("/Data/Share_Data?type=" + "permanent_address_type",
       function (data) {
           dat = eval(data);
           $("#ddlPermanent_address_type").empty();
           $("#ddlPermanent_address_type").append("<option value=" + "" + ">==请选择==</option>");
           if (dat != "") {
               for (var i = 0; i < dat.length; i++) {
                   $("#ddlPermanent_address_type").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
               }
           }
       })

    //----------------------------------------------------合并血型  娄帅 2015-08-11------------------------------------------------------------
    //=============================ABO血型========================================
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
    //$.post("/Data/Share_Data?type=" + "blood_type",
    //   function (data) {
    //       dat = eval(data);
    //       $("#ddlABOBloodType").empty();
    //       $("#ddlABOBloodType").append("<option value=" + "" + ">=请选择=</option>");
    //       if (dat != "") {
    //           for (var i = 0; i < dat.length-1 ; i++) {
    //               $("#ddlABOBloodType").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
    //           }
    //       }
    //   })
    ////=============================RH血型========================================
    //$.post("/Data/Share_Data?type=" + "hiv_antibody_test_results",
    //   function (data) {
    //       dat = eval(data);
    //       if (dat != "") {
    //           for (var i = 0; i < dat.length; i++) {
    //               if (i < dat.length - 1) {
    //                   $("#ddlABOBloodType").append("<option value=0" + (parseInt(dat[i].code) + 5) + ">Rh" + dat[i].name + "</option>");
    //               } else {
    //                   $("#ddlABOBloodType").append("<option value=0" + (parseInt(dat[i].code) + 2) + ">" + dat[i].name + "</option>");
    //               }
    //           }
    //       }
    //   })
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
    //=============================医保方式========================================
    $.post("/Data/Share_Data?type=" + "chronic_cost_payment",
       function (data) {
           dat = eval(data);
           $("#ddlCostPayment").empty();
           $("#ddlCostPayment").append("<option value=" + "" + ">==请选择==</option>");
           if (dat != "") {
               for (var i = 0; i < dat.length; i++) {
                   $("#ddlCostPayment").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
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
    //=============================职业类别========================================
    $.post("/Data/Share_Data?type=" + "occupation_state",
       function (data) {
           dat = eval(data);
           $("#ddlOccupationSituation").empty();
           $("#ddlOccupationSituation").append("<option value=" + "" + ">====请选择====</option>");
           if (dat != "") {
               for (var i = 0; i < dat.length; i++) {
                   $("#ddlOccupationSituation").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
               }
           }
       })
    //=============================恶性肿瘤========================================
    $.post("/Data/Share_Data?type=" + "chronic_tumor",
       function (data) {
           dat = eval(data);
           $("#zl").empty();
           $("#zl").append("<option value=" + "" + ">==请选择==</option>");
           if (dat != "") {
               for (var i = 0; i < dat.length; i++) {
                   $("#zl").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
               }
           }
       })

    $("#ddlcontact_my_relationship").change(function () {
        var a = $("#ddlcontact_my_relationship").val();
        var b = $("#txtcontact_phone").val();
        var c = $("#txtcontact_name").val();
        if (a != "") {
            if (a == "51") {
                $("#fatherPhone").val(b);
                $("#fatherName").val(c);
                $("#motherName").val("");
                $("#motherPhone").val("");
            }
            else if (a == "52") {
                $("#motherPhone").val(b);
                $("#motherName").val(c);
                $("#fatherName").val("");
                $("#fatherPhone").val("");
            }
            else {
                $("#fatherName").val("");
                $("#fatherPhone").val("");
                $("#motherName").val("");
                $("#motherPhone").val("");
            }
        }
    })
     


    //=================================病史情况==================================//
    //                                                                           //
    //                                                                           //
    //===========================================================================//
    //1.药物过敏史
    $("input[name=" + "chGuoMin" + "]").change(function () {
        var a = $("input[name='chGuoMin']:checked").val();
        if (a != "") {
            $("input[name='rdGuoMin']").attr("checked", false);
        }
    })
    $("input[name=" + "rdGuoMin" + "]").change(function () {
        var a = $("input[name='rdGuoMin']:checked").val();
        if (a == "无") {
            $("#GuoMin_Other").val("");
            $("input[name='chGuoMin']").attr("checked", false);
        }
    })
    $("#GuoMin_Other").keyup(function () {
        var a = $("#GuoMin_Other").val();
        if (a != "") {
            $("input[name='chGuoMin'][value='7']").attr("checked", true);
            $("input[name='rdGuoMin']").attr("checked", false);
        }
        else {
            $("input[name='chGuoMin'][value='7']").attr("checked", false);
        }
    })


    //2.疾病史
    $("input[name=" + "chdisease" + "]").change(function () {
        var a = $("input[name='chdisease']:checked").val();
        if (a != "") {
            $("input[name='rddisease']").attr("checked", false);
            if (a == "02") {
                $("#tr1").show();
            } else {
                $("#tr1").hide();
            }
        }
    })

    $("#zl").change(function () {
        var a = $("#zl").val();
        if (a != "") {
            $("input[name='chdisease'][value='06']").attr("checked", true);
            $("input[name='rddisease']").attr("checked", false);
        } else {
            $("input[name='chdisease'][value='06']").attr("checked", false);
        }
    })

    $("#Disease_Other").keyup(function () {
        var a = $("#Disease_Other").val();
        if (a != "") {
            $("input[name='chdisease'][value='10']").attr("checked", true);
            $("input[name='rddisease']").attr("checked", false);
        }
        else {
            $("input[name='chdisease'][value='10']").attr("checked", false);
        }
    })

    $("input[name=" + "rddisease" + "]").change(function () {
        var a = $("input[name='rddisease']:checked").val();
        if (a == "无") {
            $("#Disease_Other").val("");
            $("input[name='chdisease']").attr("checked", false);
            $("#hy_classfy").val("");
            $("#zl").val("");
            $("#tr1").hide();
            $("#a1").hide();
            $("#a2").hide();
            $("#a3").hide();
        }
    })
    $("#hy_classfy").change(function () {
        var a = $("#hy_classfy").val();
        if (a == "01") {
            $("#a1").show();
            $("#a2").hide();
            $("#a3").hide();
        } else if (a == "02") {
            $("#a1").hide();
            $("#a2").show();
            $("#a3").hide();
        } else if (a == "03") {
            $("#a1").hide();
            $("#a2").hide();
            $("#a3").show();
        } else {
            $("#a1").hide();
            $("#a2").hide();
            $("#a3").hide();
        }
    })

    $("#Disease_Other").keyup(function () {
        if ($("#Disease_Other").val() != "") {
            $("input[name='rddisease']").attr("checked", false);
        }
    })
     
    //3.吸烟史

    //烟龄
    $("#smoke_time").change(function () {
        var a = $("#smoke_time").val();
        var b = $("#smoked_time").val();
        var y = new Date()
        var year = y.getFullYear();

        if (a != "" && b != "") {
            if (parseInt(a) > parseInt(b)) {
                alert("开始吸烟年代不能大于开始戒烟年代！");
                $("#times1").val("");
            } else {
                $("#smoke_age").val(parseInt(b) - parseInt(a) + "年");
            }
        } else {
            $("#smoke_age").val(year - a + "年");
        }
    })
    //戒烟时间
    $("#smoked_time").change(function () {
        var a = $("#smoked_time").val();
        var b = $("#smoke_again").val();
        var c = $("#smoke_time").val();

        if (parseInt(a) < parseInt(c)) {
            alert("开始戒烟年代不能大于开始吸烟年代！");
            $("#times2").val("");
        } else {
            $("#smoke_age").val(parseInt(a) - parseInt(c) + "年");
        }
        var y = new Date()
        var year = y.getFullYear();
        if (a != "" && b != "") {
            if (parseInt(a) < parseInt(b)) {
                $("#smoked_long").val(parseInt(b) - parseInt(a) + "年");
            } else {
                alert("开始戒烟年代不能大于复吸时间！");
                $("#smoked_time").val("");
            }
        } else if (a != "" && b == "") {
            $("#smoked_long").val(year - parseInt(a) + "年");
        }
    })
    $("#smoke_again").change(function () {
        var a = $("#smoked_time").val();
        var b = $("#smoke_again").val();
        var y = new Date()
        var year = y.getFullYear();
        if (a != "" && b != "") {
            if (parseInt(a) < parseInt(b)) {
                $("#smoked_long").val(parseInt(b) - parseInt(a) + "年");
            } else {
                alert("复吸时间不能小于开始戒烟年代！");
                $("#smoke_again").val("");
            }
        } else if (a != "" && b == "") {
            $("#smoked_long").val(year - parseInt(a) + "年");
        }
    })

    $("input[name=" + "smoking" + "]").change(function () {
        var a = $("input[name='smoking']:checked").val();
        if (a == "吸烟") {
            //选择吸烟，如果之前选择已戒烟，则已戒烟清空数据，默认不能输入
            $("input[name='smoke']").attr("checked", false);
            $("#smoke_time").attr("disabled", false);
            $("input[name='day_smoke']").attr("disabled", false);
            $("#began_smoke").attr("disabled", false);
            $("#smoke_age").attr("disabled", false);
            $("input[name='smoked']").attr("disabled", false);
            $("#times1").attr("disabled", false);
            $("input[name='smoked_idea']").attr("disabled", false);

        } else {
            $("input[name='smoked']").attr("disabled", true);
            $("input[name='smoked']").attr("checked", false);
            $("#smoke_time").attr("disabled", true);
            $("input[name='day_smoke']").attr("disabled", true);
            $("input[name='day_smoke']").attr("checked", false);
            $("#began_smoke").attr("disabled", true);
            $("#smoke_age").attr("disabled", true);
            $("#smoked_time").attr("disabled", true);
            $("#smoke_again").attr("disabled", true);
            $("#smoked_long").attr("disabled", true);
            $("input[name='smoked_idea']").attr("checked", false);
            $("input[name='smoked_idea']").attr("disabled", true);
            $("#times1").attr("disabled", true);
            $("#times2").attr("disabled", true);
            $("#times3").attr("disabled", true);
            $("#times1").val("请选择");
            $("#times2").val("请选择");
            $("#times3").val("请选择");
            $("#smoke_time").val("");
            $("#began_smoke").val("");
            $("#smoke_age").val("");
            $("#smoked_time").val("");
            $("#smoke_again").val("");
            $("#smoked_long").val("");
        }
    })
    $("input[name=" + "smoked" + "]").change(function () {
        var a = $("input[name='smoking']:checked").val();
        var b = $("input[name='smoked']:checked").val();

        if (a == "吸烟") {

            if (b == "已戒烟") {
                $("#smoked_time").attr("disabled", false);
                $("#smoke_again").attr("disabled", false);
                $("#smoked_long").attr("disabled", false);
                $("input[name='smoked']").attr("disabled", false);
                $("#times2").attr("disabled", false);
                $("#times3").attr("disabled", false);
                $("input[name='smoked_idea']").attr("checked", false);
                $("input[name='smoked_idea']").attr("disabled", true);
            } else {
                //$("input[name='smoked']").attr("disabled", true);
                $("input[name='smoked']").attr("checked", false);
                $("#smoked_time").attr("disabled", true);
                $("#smoke_again").attr("disabled", true);
                $("#smoked_long").attr("disabled", true);

                $("input[name='smoked_idea']").attr("disabled", false);

                $("#times2").attr("disabled", true);
                $("#times3").attr("disabled", true);
                $("#times2").val("请选择");
                $("#times3").val("请选择");
                $("#smoked_time").val("");
                $("#smoke_again").val("");
                $("#smoked_long").val("");
            }

        } else {
            //$("input[name='smoked']").attr("disabled", true);
            $("input[name='smoked']").attr("checked", false);
            $("#smoked_time").attr("disabled", true);
            $("#smoke_again").attr("disabled", true);
            $("#smoked_long").attr("disabled", true);
            $("input[name='smoked_idea']").attr("checked", false);
            $("input[name='smoked_idea']").attr("disabled", true);
            $("#times2").attr("disabled", true);
            $("#times3").attr("disabled", true);
            $("#times2").val("请选择");
            $("#times3").val("请选择");
            $("#smoked_time").val("");
            $("#smoke_again").val("");
            $("#smoked_long").val("");
        }


    })
    $("input[name=" + "smoke" + "]").change(function () {
        var a = $("input[name='smoke']:checked").val();
        if (a == "1") {
            //选择无，如果之前选择吸烟和(或)已戒烟，则吸烟和(或)已戒烟清空数据，默认不能输入
            $("#smoke_time").attr("disabled", true);
            //$("input[name='smoking']").attr("disabled", true);
            $("input[name='smoking']").attr("checked", false);
            $("input[name='smoked']").attr("disabled", true);
            $("input[name='smoked']").attr("checked", false);
            $("input[name='day_smoke']").attr("disabled", true);
            $("input[name='day_smoke']").attr("checked", false);
            $("#began_smoke").attr("disabled", true);
            $("#smoke_age").attr("disabled", true);

            $("#smoked_time").attr("disabled", true);
            $("#smoke_again").attr("disabled", true);
            $("#smoked_long").attr("disabled", true);

            $("input[name='smoked_idea']").attr("checked", false);
            $("input[name='smoked_idea']").attr("disabled", true);

            $("#times1").attr("disabled", true);
            $("#times2").attr("disabled", true);
            $("#times3").attr("disabled", true);
            $("#times1").val("请选择");
            $("#times2").val("请选择");
            $("#times3").val("请选择");

            $("#smoke_time").val("");
            $("#began_smoke").val("");
            $("#smoke_age").val("");
            $("#smoked_time").val("");
            $("#smoke_again").val("");
            $("#smoked_long").val("");
        }
    })
    //=================================增加年代=========================
    var riqi = new Date();
    var year = riqi.getFullYear();
    for (var ss = 0; ss < 100; ss++) {

        $("#smoke_time").append("<option value=" + (year - ss) + ">" + (year - ss) + "</option>");
        $("#smoked_time").append("<option value=" + (year - ss) + ">" + (year - ss) + "</option>");
        $("#smoke_again").append("<option value=" + (year - ss) + ">" + (year - ss) + "</option>");
        $("#drink_time").append("<option value=" + (year - ss) + ">" + (year - ss) + "</option>");
        $("#drunk_time").append("<option value=" + (year - ss) + ">" + (year - ss) + "</option>");
        $("#drink_again").append("<option value=" + (year - ss) + ">" + (year - ss) + "</option>");
        if ((year - ss) == '1950')
            break;
    }

    //4.饮酒史
    //酒龄
    $("#drink_time").change(function () {
        var a = $("#drink_time").val();
        var b = $("#drunk_time").val();
        var y = new Date()
        var year = y.getFullYear();
        if (a != "" && b != "") {
            if (parseInt(a) > parseInt(b)) {
                alert("开始饮酒年代不能大于开始戒酒年代！");
                $("#times4").val("");
            } else {
                $("#drink_age").val(parseInt(b) - parseInt(a) + "年");
            }
        } else {
            $("#drink_age").val(year - a + "年");
        }
    })
    //戒酒时间
    $("#drunk_time").change(function () {
        var a = $("#drunk_time").val();
        var b = $("#drink_again").val();
        var c = $("#drink_time").val();

        if (parseInt(a) < parseInt(c)) {
            alert("开始戒酒年代不能大于开始饮酒年代！");
            $("#times5").val("");
        } else {
            $("#drink_age").val(parseInt(a) - parseInt(c) + "年");
        }


        var y = new Date()
        var year = y.getFullYear();
        if (a != "" && b != "") {
            if (parseInt(a) < parseInt(b)) {
                $("#drunk_long").val(parseInt(b) - parseInt(a) + "年");
            } else {
                alert("开始戒酒年代不能大于复饮时间！");
                $("#drunk_time").val("");
            }
        } else if (a != "" && b == "") {
            $("#drunk_long").val(year - parseInt(a) + "年");
        }
    })
    $("#drink_again").change(function () {
        var a = $("#drunk_time").val();
        var b = $("#drink_again").val();
        var y = new Date()
        var year = y.getFullYear();
        if (a != "" && b != "") {
            if (parseInt(a) < parseInt(b)) {
                $("#drunk_long").val(parseInt(b) - parseInt(a) + "年");
            } else {
                alert("复吸时间不能小于开始戒烟年代！");
                $("#drink_again").val("");
            }
        } else if (a != "" && b == "") {
            $("#drunk_long").val(year - parseInt(a) + "年");
        }
    })


    $("input[name=" + "drinking" + "]").change(function () {
        var a = $("input[name='drinking']:checked").val();
        if (a == "饮酒") {
            //选择饮酒，如果之前选择已戒酒，则已戒酒清空数据，默认不能输入
            $("input[name='drink']").attr("checked", false);
            $("#drink_time").attr("disabled", false);
            $("#drink_age").attr("disabled", false);
            $("#drunk_time").attr("disabled", false);
            $("#drink_again").attr("disabled", false);
            $("#drunk_long").attr("disabled", false);

            $("input[name='frequency1']").attr("disabled", false);
            $("input[name='frequency2']").attr("disabled", false);
            $("input[name='frequency3']").attr("disabled", false);
            $("input[name='frequency4']").attr("disabled", false);
            $("#other").attr("disabled", false);


            $("input[name='count1']").attr("disabled", false);
            $("#count1_dl").attr("disabled", false);
            $("input[name='count2']").attr("disabled", false);
            $("#count2_dl").attr("disabled", false);
            $("input[name='count3']").attr("disabled", false);
            $("#count3_dl").attr("disabled", false);
            $("input[name='count4']").attr("disabled", false);
            $("#count4_dl").attr("disabled", false);
            $("#other_wine").attr("disabled", false);

            $("#times4").attr("disabled", false);
            $("#times5").attr("disabled", false);
            $("#times6").attr("disabled", false);

        } else {
            $("#drink_time").attr("disabled", true);
            $("#drink_age").attr("disabled", true);
            $("#drunk_time").attr("disabled", true);
            $("#drink_again").attr("disabled", true);
            $("#drunk_long").attr("disabled", true);

            $("#drink_time").val("");
            $("#drink_age").val("");
            $("#drunk_time").val("");
            $("#drink_again").val("");
            $("#drunk_long").val("");

            $("#times4").attr("disabled", true);
            $("#times5").attr("disabled", true);
            $("#times6").attr("disabled", true);
            $("#times4").val("请选择");
            $("#times5").val("请选择");
            $("#times6").val("请选择");

            $("input[name='frequency1']").attr("disabled", true);
            $("input[name='frequency1']").attr("checked", false);
            $("input[name='frequency2']").attr("disabled", true);
            $("input[name='frequency2']").attr("checked", false);
            $("input[name='frequency3']").attr("disabled", true);
            $("input[name='frequency3']").attr("checked", false);
            $("input[name='frequency4']").attr("disabled", true);
            $("input[name='frequency4']").attr("checked", false);
            $("#other").attr("disabled", true);
            $("#other").val("");
            $("#other_du").attr("disabled", true);
            $("#other_du").val("");
            $("input[name='frequency5']").attr("disabled", true);
            $("input[name='frequency5']").attr("checked", false);

            $("input[name='count1']").attr("disabled", true);
            $("input[name='count1']").attr("checked", false);
            $("#count1_dl").attr("disabled", true);
            $("#count1_dl").val("");
            $("input[name='count2']").attr("disabled", true);
            $("input[name='count2']").attr("checked", false);
            $("#count2_dl").attr("disabled", true);
            $("#count2_dl").val("");
            $("input[name='count3']").attr("disabled", true);
            $("input[name='count3']").attr("checked", false);
            $("#count3_dl").attr("disabled", true);
            $("#count3_dl").val("");
            $("input[name='count4']").attr("disabled", true);
            $("input[name='count4']").attr("checked", false);
            $("#count4_dl").attr("disabled", true);
            $("#count4_dl").val("");
            $("#other_wine").attr("disabled", true);
            $("#other_wine").val("");
            $("#wine_degree").attr("disabled", true);
            $("#wine_degree").val("");
            $("input[name='count5']").attr("disabled", true);
            $("input[name='count5']").attr("checked", false);
            $("#count5_dl").attr("disabled", true);
            $("#count5_dl").val("");

        }
    })
    $("input[name=" + "drink" + "]").change(function () {
        var a = $("input[name='drink']:checked").val();
        if (a == "1") {
            //选择无，如果之前选择吸烟和(或)已戒烟，则吸烟和(或)已戒烟清空数据，默认不能输入
            //$("input[name='drinking']").attr("disabled", true);
            $("input[name='drinking']").attr("checked", false);
            $("#drink_time").attr("disabled", true);
            $("#drink_age").attr("disabled", true);
            $("#drunk_time").attr("disabled", true);
            $("#drink_again").attr("disabled", true);
            $("#drunk_long").attr("disabled", true);
            $("#drink_time").val("");
            $("#drink_age").val("");
            $("#drunk_time").val("");
            $("#drink_again").val("");
            $("#drunk_long").val("");

            $("#times4").attr("disabled", true);
            $("#times5").attr("disabled", true);
            $("#times6").attr("disabled", true);
            $("#times4").val("请选择");
            $("#times5").val("请选择");
            $("#times6").val("请选择");


            $("input[name='frequency1']").attr("disabled", true);
            $("input[name='frequency1']").attr("checked", false);
            $("input[name='frequency2']").attr("disabled", true);
            $("input[name='frequency2']").attr("checked", false);
            $("input[name='frequency3']").attr("disabled", true);
            $("input[name='frequency3']").attr("checked", false);
            $("input[name='frequency4']").attr("disabled", true);
            $("input[name='frequency4']").attr("checked", false);
            $("#other").attr("disabled", true);
            $("#other").val("");
            $("#other_du").attr("disabled", true);
            $("#other_du").val("");
            $("input[name='frequency5']").attr("disabled", true);
            $("input[name='frequency5']").attr("checked", false);

            $("input[name='count1']").attr("disabled", true);
            $("input[name='count1']").attr("checked", false);
            $("#count1_dl").attr("disabled", true);
            $("#count1_dl").val("");
            $("input[name='count2']").attr("disabled", true);
            $("input[name='count2']").attr("checked", false);
            $("#count2_dl").attr("disabled", true);
            $("#count2_dl").val("");
            $("input[name='count3']").attr("disabled", true);
            $("input[name='count3']").attr("checked", false);
            $("#count3_dl").attr("disabled", true);
            $("#count3_dl").val("");
            $("input[name='count4']").attr("disabled", true);
            $("input[name='count4']").attr("checked", false);
            $("#count4_dl").attr("disabled", true);
            $("#count4_dl").val("");
            $("#other_wine").attr("disabled", true);
            $("#other_wine").val("");
            $("#wine_degree").attr("disabled", true);
            $("#wine_degree").val("");
            $("input[name='count5']").attr("disabled", true);
            $("input[name='count5']").attr("checked", false);
            $("#count5_dl").attr("disabled", true);
            $("#count5_dl").val("");
        }
    })

    //计算当量  2015-08-18 娄帅============================================================
    //1.白酒（50°）
    $("input[name=" + "count1" + "]").change(function () {
        var a = $("input[name='count1']:checked").val();
        if (a == "1") {
            $("#count1_dl").val(parseFloat((0.5 * 0.79) * 500 * 0.2 / 12).toFixed(1));
        } else if (a == "2") {
            $("#count1_dl").val(parseFloat((0.5 * 0.79) * 500 * 0.35 / 12).toFixed(1));
        } else if (a == "3") {
            $("#count1_dl").val(parseFloat((0.5 * 0.79) * 500 * 0.55 / 12).toFixed(1));
        } else if (a == "4") {
            $("#count1_dl").val(parseFloat((0.5 * 0.79) * 500 * 0.65 / 12).toFixed(1));
        } else if (a == "5") {
            $("#count1_dl").val(parseFloat((0.5 * 0.79) * 500 * 1.0 / 12).toFixed(1));
        } else if (a == "6") {
            $("#count1_dl").val(parseFloat((0.5 * 0.79) * 500 * 1.2 / 12).toFixed(1));
        }
    })
    //2.啤酒（12°）
    $("input[name=" + "count2" + "]").change(function () {
        var a = $("input[name='count2']:checked").val();
        if (a == "1") {
            $("#count2_dl").val(parseFloat((0.12 * 0.79) * 500 * 0.5 / 12).toFixed(1));
        } else if (a == "2") {
            $("#count2_dl").val(parseFloat((0.12 * 0.79) * 500 * 1.0 / 12).toFixed(1));
        } else if (a == "3") {
            $("#count2_dl").val(parseFloat((0.12 * 0.79) * 500 * 1.5 / 12).toFixed(1));
        } else if (a == "4") {
            $("#count2_dl").val(parseFloat((0.12 * 0.79) * 500 * 2.0 / 12).toFixed(1));
        } else if (a == "5") {
            $("#count2_dl").val(parseFloat((0.12 * 0.79) * 500 * 3.0 / 12).toFixed(1));
        } else if (a == "6") {
            $("#count2_dl").val(parseFloat((0.12 * 0.79) * 500 * 4.0 / 12).toFixed(1));
        }
    })
    //3.红酒（15°）
    $("input[name=" + "count3" + "]").change(function () {
        var a = $("input[name='count3']:checked").val();
        if (a == "1") {
            $("#count3_dl").val(parseFloat((0.15 * 0.79) * 500 * 0.2 / 12).toFixed(1));
        } else if (a == "2") {
            $("#count3_dl").val(parseFloat((0.15 * 0.79) * 500 * 0.35 / 12).toFixed(1));
        } else if (a == "3") {
            $("#count3_dl").val(parseFloat((0.15 * 0.79) * 500 * 0.55 / 12).toFixed(1));
        } else if (a == "4") {
            $("#count3_dl").val(parseFloat((0.15 * 0.79) * 500 * 0.65 / 12).toFixed(1));
        } else if (a == "5") {
            $("#count3_dl").val(parseFloat((0.15 * 0.79) * 500 * 1.0 / 12).toFixed(1));
        } else if (a == "6") {
            $("#count3_dl").val(parseFloat((0.15 * 0.79) * 500 * 1.2 / 12).toFixed(1));
        }
    })
    //4.黄酒（15°）
    $("input[name=" + "count4" + "]").change(function () {
        var a = $("input[name='count4']:checked").val();
        if (a == "1") {
            $("#count4_dl").val(parseFloat((0.15 * 0.79) * 500 * 0.5 / 12).toFixed(1));
        } else if (a == "2") {
            $("#count4_dl").val(parseFloat((0.15 * 0.79) * 500 * 1.0 / 12).toFixed(1));
        } else if (a == "3") {
            $("#count4_dl").val(parseFloat((0.15 * 0.79) * 500 * 1.5 / 12).toFixed(1));
        } else if (a == "4") {
            $("#count4_dl").val(parseFloat((0.15 * 0.79) * 500 * 2.0 / 12).toFixed(1));
        } else if (a == "5") {
            $("#count4_dl").val(parseFloat((0.15 * 0.79) * 500 * 3.0 / 12).toFixed(1));
        } else if (a == "6") {
            $("#count4_dl").val(parseFloat((0.15 * 0.79) * 500 * 4.0 / 12).toFixed(1));
        }
    })
    //5.其他  
    $("#wine_degree").keyup(function () {
        var a = $("input[name='count5']:checked").val();
        var b = $("#wine_degree").val();
        var r = /^[0-9]*[1-9][0-9]*$/　　//正整数 
        if (!r.test(b)) {
            alert("请输入正整数！");
            $("#wine_degree").val("");
        } else {
            if (a != "") {
                if (a == "1") {
                    $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 0.2 / 12).toFixed(1));
                } else if (a == "2") {
                    $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 0.4 / 12).toFixed(1));
                } else if (a == "3") {
                    $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 0.7 / 12).toFixed(1));
                } else if (a == "4") {
                    $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 1.0 / 12).toFixed(1));
                } else if (a == "5") {
                    $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 1.2 / 12).toFixed(1));
                }
            }
        }
    });

    $("input[name=" + "count5" + "]").change(function () {
        var a = $("input[name='count5']:checked").val();
        var b = $("#wine_degree").val();
        if (b == "") {
            alert("请填写酒精度！");
            $("#wine_degree").focus();
        } else {
            if (a == "1") {
                $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 0.2 / 12).toFixed(1));
            } else if (a == "2") {
                $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 0.4 / 12).toFixed(1));
            } else if (a == "3") {
                $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 0.7 / 12).toFixed(1));
            } else if (a == "4") {
                $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 1.0 / 12).toFixed(1));
            } else if (a == "5") {
                $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 1.2 / 12).toFixed(1));
            }
        }
    })
    //关于其他的控制=========================================
    //1.饮酒种类
    $("#other").keyup(function () {
        var a = $("#other").val();
        if (a != "") {
            $("#other_du").attr("disabled", false);
            $("input[name='frequency5']").attr("disabled", false);
        } else {
            $("#other_du").attr("disabled", true);
            $("#other_du").val("");
            $("input[name='frequency5']").attr("disabled", true);
            $("input[name='frequency5']").attr("checked", false);
        }
    })
    //2.饮酒量
    $("#other_wine").keyup(function () {
        var a = $("#other_wine").val();
        if (a != "") {
            $("#wine_degree").attr("disabled", false);
            $("input[name='count5']").attr("disabled", false);
            $("#count5_dl").attr("disabled", false);
        } else {
            $("#wine_degree").attr("disabled", true);
            $("#wine_degree").val("");
            $("input[name='count5']").attr("disabled", true);
            $("input[name='count5']").attr("checked", false);
            $("#count5_dl").attr("disabled", true);
            $("#count5_dl").val("");
        }
    })


    //5.手术史
    $("input[name=" + "option" + "]").change(function () {
        var a = $("input[name='option']:checked").val();
        if (a == "无") {
            $("#option_time0").val("");
            $("#option_name0").val("");
            $("#option_hospital0").val("");
            $("#option_result0").val("");

        }
    })
    $("#option_hospital0,#option_result0").keyup(function () {
        if ($("#option_hospital0").val() != "" || $("#option_result0").val() != "") {
            $("input[name='option']").attr("checked", false);
        }
    })
    $("#option_change0").change(function () {
        if ($("#option_change0").val() != "") {
            $("input[name='option']").attr("checked", false);
        }
    })
    $("#option_time0").focus(function () {
        if ($("#option_time0").val() != "") {
            $("input[name='option']").attr("checked", false);

        }
    })

    
    //6.外伤史
    $("input[name=" + "trauma" + "]").change(function () {
        var a = $("input[name='trauma']:checked").val();
        if (a == "无") {
            $("#trauma_time0").val("");
            $("#trauma_name0").val("");
            $("#deal_hospital0").val("");
            $("#deal_result0").val("");
        }
    })
    $("#deal_hospital0,#deal_result0").keyup(function () {
        if ($("#deal_hospital0").val() != "" || $("#deal_result0").val() != "") {
            $("input[name='trauma']").attr("checked", false);
        }
    })
    $("#trauma_change0").change(function () {
        if ($("#trauma_change0").val() != "") {
            $("input[name='trauma']").attr("checked", false);
        }
    })

    $("#trauma_time0").focus(function () {
        if ($("#trauma_time0").val() != "") {
            $("input[name='trauma']").attr("checked", false);
        }
    })
    //7.输血史
    $("input[name=" + "blood_transfusion" + "]").change(function () {
        var a = $("input[name='blood_transfusion']:checked").val();
        if (a == "无") {
            $("#blood_transfusion_time0").val("");
            $("#blood_transfusion_name0").val("");
            $("#blood_transfusion_amount0").val("");
            $("#blood_transfusion_result0").val("");
        }
    })
    $("#blood_transfusion_amount0,#blood_transfusion_result0").keyup(function () {
        if ($("#blood_transfusion_amount0").val() != "" || $("#blood_transfusion_result0").val() != "") {
            $("input[name='blood_transfusion']").attr("checked", false);
        }
    })
    $("#blood_transfusion_change0").change(function () {
        if ($("#blood_transfusion_change0").val() != "") {
            $("input[name='blood_transfusion']").attr("checked", false);
        }
    })

    $("#blood_transfusion_time0").focus(function () {
        if ($("#blood_transfusion_time0").val() != "") {
            $("input[name='blood_transfusion']").attr("checked", false);
        }
    })

    //8.家族史
    $("#chfamilydisease_change0").change(function () {
        var a = $("#chfamilydisease_change0").val();
        if (a != "") {
            $("input[name='rdfamily_disease']").attr("checked", false);

        }
    })
    $("input[name=" + "chfamilydisease0" + "]").change(function () {
        var a = $("input[name='chfamilydisease0']:checked").val();
        if (a != "") {
            $("input[name='rdfamily_disease']").attr("checked", false);
        }
    })
    $("input[name=" + "rdfamily_disease" + "]").change(function () {
        var a = $("input[name='rdfamily_disease']:checked").val();
        if (a == "无") {
            $("#family_other_disease0").val("");
            $("#relationship0").val("");
            $("input[name='chfamilydisease0']").attr("checked", false);
        }
    })

    $("#family_other_disease0").keyup(function () {
        var a = $("#family_other_disease0").val();
        if (a != "") {
            $("input[name='chfamilydisease0'][value='其他疾病']").attr("checked", true);
            $("input[name='rdfamily_disease']").attr("checked", false);
        }
        else {
            $("input[name='chfamilydisease0'][value='其他疾病']").attr("checked", false);
        }
    })
    
    //10.残疾情况
    $("input[name=" + "chdisability" + "]").change(function () {
        var a = $("input[name='chdisability']:checked").val();
        if (a != "") {
            $("input[name='rddisability']").attr("checked", false);
        }
    })
    $("input[name=" + "rddisability" + "]").change(function () {
        var a = $("input[name='rddisability']:checked").val();
        if (a == "无") {
            $("#disability_other").val("");
            $("#disability_numb").val("");
            $("input[name='chdisability']").attr("checked", false);
        }
    })
    $("#disability_numb").keyup(function () {
        if ($("#disability_numb").val() != "") {
            $("input[name='rddisability']").attr("checked", false);
        }
    })

    $("#disability_other").keyup(function () {
        var a = $("#disability_other").val();
        if (a != "") {
            $("input[name='chdisability'][value='08']").attr("checked", true);
            $("input[name='rddisability']").attr("checked", false);
        }
        else {
            $("input[name='chdisability'][value='08']").attr("checked", false);
        }
    })

})
 
//==============================提交页面1=======================================
function sure() {
    alert("执行提交");
    if ($("#txtResidentName").val() == "") {
        alert("姓名不能为空！")
    }
    else if ($("#txtBirthDate").val() == "") {
        alert("出生日期不能为空！")
    }
    else if ($("#txtCardNumber").val() == "") {
        alert("身份证号码不能为空！")
    }
    else if ($("#txtWorkUnit").val() == "") {
        alert("工作单位不能为空，如退休或无工作单位，请填无！")
    }
    else if ($("#txtFamilyPhone1").val() == "" && $("#txtFamilyPhone2").val() == "" && $("#txtIndividualPhone").val() == "") {
        alert("家庭电话与本人手机不能全部为空，至少填写一项！")
    }
    else if ($("#ddlABOBloodType").val() == "") {
        alert("ABO血型不能为空！")
    }
    else if ($("#ddlNation").val() == "") {
        alert("民族不能为空！")
    }
    else if ($("#ddlEducationQualification").val() == "") {
        alert("文化程度不能为空！")
    }
    else if ($("#ddlMarrigeState").val() == "") {
        alert("婚姻状况不能为空！")
    }
    else if ($("#ddlCostPayment").val() == "") {
        alert("医疗费用支付方式不能为空！")
    }
    else if ($("#ddlOccupationSituation").val() == "") {
        alert("职业类别不能为空！")
    }
    else if ($("#ddlCommunity").val() == "") {
        alert("常住地址必须填写到社区、村或者居委会！")
    }
    else if ($("#fillIdentity").val() == "") {
        alert("填写人身份不能为空！")
    }
    else if ($("#txtCreateTime").val() == "") {
        alert("建档日期不能为空！")
    }
    else {
        $("#bt1").attr("disabled", "disabled");
        $.post("/BasicInformation/AddAndUpdate?id=" + id + "&worker=" + worker + "&community_code=" + community_code,
                $("#form1").serialize(),
                function (msgs) {
                    var msg = msgs.split(',');
                    alert(msg[0]); 
                    window.close();
                })
    }
}
 
//==================================增加一行===========================================
//-----------手术史-------------
var i = 1;
  
function added1() { 
    $("input[name='option']").attr("checked", false);
    if (i < 50) {
        $('#option_name' + (i - 1) + '').unbind("onkeyup");
        $('#option_name' + (i - 1) + '').one('onkeyup', function () {
            if ($('#option_name' + (i - 1) + '').val() != "") {
                $('#option_add' + i + '').after('<tr id="option_add' + (i + 1) + '">' +
                                '<td class="detailContent" style="height: 25px; width: 100%;">' +
                                    '<a>手术名称</a>' +
                                    ' <input type="text" style="padding-top: 4px; width: 150px" id="option_name' + i + '" name="option_name' + i + '" onkeyup="added1()" />' +
                                    ' <a style="padding-left: 2em">手术时间</a>' +
                                    ' <input type="text" id="option_time' + i + '" name="option_time' + i + '" style="padding-top: 4px; width: 80px" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + '  })" />' +
                                    ' <a style="padding-left: 2em">手术医院</a>' +
                                    ' <input type="text" style="padding-top: 4px; width: 180px" id="option_hospital' + i + '" name="option_hospital' + i + '" />' +
                                    ' <a style="padding-left: 2em">手术结果</a>' +
                                    ' <span style="position: relative;">' +
                                        '<select id="option_change' + i + '"  name="option_change' + i + '" style="width: 88px" >' +
                                            '<option value="">请选择</option>' +
                                            '<option value="1">治愈</option>' +
                                            '<option value="2">好转</option>' +
                                            '<option value="3">无效</option>' +
                                            '<option value="4">其他</option>' +
                                        '</select>' +
                                        '<input id="option_result' + i + '" name="option_result' + i + '" style="position: absolute; width: 68px; height: 15px; left: 1px; top: 0px; border-bottom: 0px; border-right: 0px; border-left: 0px; border-top: 0px;"/>' +
                                    '</span>' +
                                    '</td></tr>')

            }
            $('#option_change' + i + '').change(function () {
                $('#option_result' + (i - 2) + '').val($('#option_change' + (i - 2) + '').find("option:selected").text());
            })
            $("input[name='option']").change(function () {
                var a = $("input[name='option']:checked").val();
                if (a == "无") {
                    for (i; i > 1; i--) {
                        $('#option_add' + i + '').remove();
                    }
                }
            })
            $("#cd").click(function () {
                for (i; i > 1; i--) {
                    $('#option_add' + i + '').remove();
                }
            })
            i++;
        })
    } 
}
//-----------外伤史-------------
var a = 1;
 
function added2() {
    $("input[name='trauma']").attr("checked", false);
    if (a < 50) {
        $('#trauma_name' + (a - 1) + '').unbind("keyup");
        $('#trauma_name' + (a - 1) + '').one('keyup', function () {
            if ($('#trauma_name' + (a - 1) + '').val() != "") {
                $('#trauma_add' + a + '').after('<tr id="trauma_add' + (a + 1) + '">' +
                                '<td class="detailContent" style="height: 25px; width: 100%;">' +
                                    '<a>外伤名称</a>' +
                                    ' <input type="text" style="padding-top: 4px; width: 150px" id="trauma_name' + a + '" name="trauma_name' + a + '" onkeyup="added2();" />' +
                                    ' <a style="padding-left: 2em">外伤时间</a>' +
                                    ' <input type="text" id="trauma_time' + a + '" name="trauma_time' + a + '" style="padding-top: 4px; width: 80px" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + '  })" />' +
                                    ' <a style="padding-left: 2em">处理医院</a>' +
                                    ' <input type="text" style="padding-top: 4px; width: 180px" id="deal_hospital' + a + '" name="deal_hospital' + a + '" />' +
                                     ' <a style="padding-left: 2em">处理结果</a>' +
                                     ' <span style="position: relative;">' +
                                     ' <select id="trauma_change' + a + '"  name="trauma_change' + a + '" style="width: 88px">' +
                                         '<option value="">==请选择==</option>' +
                                         '<option value="1">治愈</option>' +
                                         '<option value="2">好转</option>' +
                                         '<option value="3">无效</option>' +
                                         '<option value="4">其他</option>' +
                                     '</select>' +
                                     '<input id="deal_result' + a + '" name="deal_result' + a + '" style="position: absolute; width: 68px; height: 15px; left: 1px; top: 0px;border-bottom: 0px; border-right: 0px; border-left: 0px; border-top: 0px;"/>' +
                                     '</span>' +
                                     '</td></tr>')
            }
            $('#trauma_change' + a + '').change(function () {
                $('#deal_result' + (a - 2) + '').val($('#trauma_change' + (a - 2) + '').find("option:selected").text());
            })
            $("input[name='trauma']").change(function () {
                var a1 = $("input[name='trauma']:checked").val();
                if (a1 == "无") {
                    for (a; a > 1; a--) {
                        $('#trauma_add' + a + '').remove();
                    }
                }
            })
            $("#cd").click(function () {
                for (a; a > 1; a--) {
                    $('#trauma_add' + a + '').remove();
                }
            })
            a++;
        })
    }
    
}
//-----------输血史-------------
var b = 1;
 
function added3() {
    $("input[name='blood_transfusion']").attr("checked", false);
    if (b < 50) {
        $('#blood_transfusion_name' + (b - 1) + '').unbind("keyup");
        $('#blood_transfusion_name' + (b - 1) + '').one('keyup', function () {
            if ($('#blood_transfusion_name' + (b - 1) + '').val() != "") {
                $('#blood_transfusion_add' + b + '').after('<tr id="blood_transfusion_add' + (b + 1) + '">' +
                        '<td class="detailContent" style="height: 25px; width: 100%;">' +
                            '<a>输血原因</a>' +
                            ' <input type="text" style="padding-top: 4px; width: 150px" id="blood_transfusion_name' + b + '" name="blood_transfusion_name' + b + '" onkeyup="added3();" />' +
                            ' <a style="padding-left: 2em">输血时间</a>' +
                            ' <input type="text" id="blood_transfusion_time' + b + '" name="blood_transfusion_time' + b + '" style="padding-top: 4px; width: 80px" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + ' })" />' +
                            ' <a style="padding-left: 3em">输血量</a>' +
                                ' <input type="text" style="padding-top: 4px; width: 180px" id="blood_transfusion_amount' + b + '" name="blood_transfusion_amount' + b + '" />' +
                                ' <a style="padding-left: 2em">输血结果</a>' +
                                ' <span style="position: relative;">' +
                                 '<select id="blood_transfusion_change' + b + '" name="blood_transfusion_change' + b + '" style="width: 88px">' +
                                 '<option value="">==请选择==</option>' +
                                 '<option value="1">治愈</option>' +
                                 '<option value="2">好转</option>' +
                                '<option value="3">无效</option>' +
                                '<option value="4">其他</option>' +
                                '</select>' +
                            '<input id="blood_transfusion_result' + b + '" name="blood_transfusion_result' + b + '" style="position: absolute; width: 68px; height: 15px; left: 1px; top: 0px; border-bottom: 0px; border-right: 0px; border-left: 0px; border-top: 0px;"/>' +
                             '</span></td></tr>')
            }
            $('#blood_transfusion_change' + b + '').change(function () {
                $('#blood_transfusion_result' + (b - 2) + '').val($('#blood_transfusion_change' + (b - 2) + '').find("option:selected").text());
            })

            $("input[name='blood_transfusion']").change(function () {
                var a = $("input[name='blood_transfusion']:checked").val();
                if (a == "无") {
                    for (b; b > 1; b--) {
                        $('#blood_transfusion_add' + b + '').remove();
                    }
                }
            })
            $("#cd").click(function () {
                for (b; b > 1; b--) {
                    $('#blood_transfusion_add' + b + '').remove();
                }
            })
            b++;
        })
    } 
}
//-----------家族史-------------
var c = 1;
function added4() {
    $('input[name="rdfamily_disease"]').attr("checked", false);

    if (c < 8) {
        $('input[name="chfamilydisease' + (c - 1) + '"]').attr("disabled", false);
        $('#family_other_disease' + (c - 1) + '').attr("disabled", false);


        $('#chfamilydisease_change' + (c - 1) + '').unbind("change");
        $('#chfamilydisease_change' + (c - 1) + '').one('change', function () {
            $('#relationship' + (c - 1) + '').val($('#chfamilydisease_change' + (c - 1) + '').find("option:selected").text());
            //关系选择不能相同
            if (c >= 2) {
                var a = $('#relationship' + (c - 2) + '').val();
                var b = $('#relationship' + (c - 1) + '').val();
                if (a == b) {
                    alert("不能重复选择！");
                    $('#relationship' + (c - 1) + '').val("");
                }
            }

            if ($('#relationship' + (c - 1) + '').val() != "") {
                $('#family_disease_add' + c + '').after('<tr id="family_disease_add' + (c + 1) + '">' +
                                        '<td class="detailContent" style="height: 25px; width: 100%;">' +
                                        '<span style="position: relative;">' +
                                            '<select id="chfamilydisease_change' + c + '" name="chfamilydisease_change' + c + '" style="width: 80px" onchange="added4();">' +
                                                '<option value="">==请选择==</option>' +
                                                '<option value="01">祖父</option>' +
                                                '<option value="02">祖母</option>' +
                                                '<option value="03">父亲</option>' +
                                                '<option value="04">母亲</option>' +
                                                '<option value="05">兄弟</option>' +
                                                '<option value="06">姐妹</option>' +
                                                '<option value="07">儿子</option>' +
                                                '<option value="08">女儿</option>' +
                                            '</select>' +
                                            '<input id="relationship' + c + '" name="relationship' + c + '" style="position: absolute; width: 60px; height: 15px; left: 1px; top: 0px; border-bottom: 0px; border-right: 0px; border-left: 0px; border-top: 0px;"/>' +
                                            '</span>' +
                                            '<a style="margin-left:1em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="高血压" />高血压<a style="padding-left:2em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="糖尿病" />糖尿病<a style="padding-left:2em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="结核病" />结核病<a style="padding-left:2em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="冠心病" />冠心病<a style="padding-left:2em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="恶性肿瘤" />恶性肿瘤<a style="padding-left:1em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="脑卒中" />脑卒中<a style="padding-left:1em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="其他疾病" />其他疾病' +
                                            ' <input type="text" style="padding-top: 4px;width:100px" id="family_other_disease' + c + '" name="family_other_disease' + c + '"/>' +
                                            '</td>' +
                                            '</tr>');
                $('input[name="chfamilydisease' + c + '"]').attr("disabled", true);
                $('#family_other_disease' + c + '').attr("disabled", true);

            }

            $("input[name='rdfamily_disease']").change(function () {
                var a = $("input[name='rdfamily_disease']:checked").val();
                if (a == "无") {
                    for (c; c > 1; c--) {
                        $('#family_disease_add' + c + '').remove();
                    }
                    $('input[name="chfamilydisease' + (c - 1) + '"]').attr("disabled", true);
                    $('#family_other_disease' + (c - 1) + '').attr("disabled", true);
                }
            })
            $("#cd").click(function () {
                for (c; c > 1; c--) {
                    $('#family_disease_add' + c + '').remove();
                }
                $('input[name="chfamilydisease' + (c - 1) + '"]').attr("disabled", true);
                $('#family_other_disease' + (c - 1) + '').attr("disabled", true);
            })
            c++;
        })
    }
    //$("input[name='rdfamily_disease']").attr("disabled", true);
}