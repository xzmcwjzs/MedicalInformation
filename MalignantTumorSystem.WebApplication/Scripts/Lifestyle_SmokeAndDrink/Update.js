$(function () {
    $.post("/Lifestyle_SmokeAndDrink/Show?id=" + id,
        function (data) {
            dat = eval(data);
            if (dat != "" && dat != null) {
                $("#name").val(dat[0].name);
                $("input[name=" + "sex" + "][value=" + dat[0].sex + "]").attr("checked", "checked");
                $("#id_card_number").val(dat[0].id_card_number);
                //$("#id_card_number").attr("readonly", "readonly");

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
                    var dates = new Date();
                    var year = dates.getFullYear() - date.getFullYear();
                    if (year > 0) {
                        $("#age").val(year + "岁");
                    }
                    else if (year == 0) {
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
                if (dat[0].community_code != "" && dat[0].community_code != null) {
                    var code1 = dat[0].community_code;
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
                    $("#perment_community_address").val(dat[0].permanent_address);
                }


                $("#zipCode").val(dat[0].post_code);
                $("#resident_id").val(dat[0].resident_id);
                $("#fillIdentity").val(dat[0].worker_user_name);
                //--------------------------吸烟情况------------------------------
                if (dat[0].smoke_never != "" && dat[0].smoke_never != null) {
                    $("input[name='smoke']").attr("checked", "checked");
                } else if (dat[0].smoking != "" && dat[0].smoking != null) {
                    //改变吸烟样式
                    $("input[name='smoke']").attr("checked", false);
                    $("#smoke_time").attr("disabled", false);
                    $("input[name='day_smoke']").attr("disabled", false);
                    $("#began_smoke").attr("disabled", false);
                    $("#smoke_age").attr("disabled", false);
                    $("input[name='smoked']").attr("disabled", false);
                    $("#times1").attr("disabled", false);
                    $("input[name='smoked_idea']").attr("disabled", false);

                    $("input[name='smoking']").attr("checked", "checked");
                    $("#times1").val(dat[0].smoking_begin_year);
                    $("input[name=" + "day_smoke" + "][value=" + dat[0].smoking_daily_amount + "]").attr("checked", "checked");
                    if (dat[0].smoking_age != "") {
                        $("#smoke_age").val(dat[0].smoking_age + "年");
                    }
                    if (dat[0].smoked_intent != "" && dat[0].smoked_intent != null) {
                        $("input[name='smoked_idea']").attr("checked", "checked");
                    }
                    if (dat[0].smoked != "" && dat[0].smoked != null) {
                        //改变戒烟样式
                        $("#smoked_time").attr("disabled", false);
                        $("#smoke_again").attr("disabled", false);
                        $("#smoked_long").attr("disabled", false);
                        $("input[name='smoked']").attr("disabled", false);
                        $("#times2").attr("disabled", false);
                        $("#times3").attr("disabled", false);
                        $("input[name='smoked_idea']").attr("checked", false);
                        $("input[name='smoked_idea']").attr("disabled", true);

                        $("input[name='smoked']").attr("checked", "checked");
                        $("#times2").val(dat[0].smoked_begin_year);
                        $("#times3").val(dat[0].smoked_smoking_again);
                        if (dat[0].smoked_long_time != "") {
                            $("#smoked_long").val(dat[0].smoked_long_time + "年");
                        }
                    }
                }
                if (dat[0].smoked_second_hand != "" && dat[0].smoked_second_hand != null) {
                    $("input[name='smoke_twice']").attr("checked", "checked");
                }
                //---------------------------饮酒情况------------------------------
                if (dat[0].drink_never != "" && dat[0].drink_never != null) {
                    $("input[name='drink']").attr("checked", "checked");
                } else if (dat[0].drinking != "" && dat[0].drinking != null) {
                    //------------------------改变页面样式---------------------------
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


                    $("input[name='drinking']").attr("checked", "checked");
                    $("#times4").val(dat[0].drinking_begin_year);

                    if (dat[0].drinking_age != "" && dat[0].drinking_age != null) {
                        $("#drink_age").val(dat[0].drinking_age + "年");
                    }

                    $("#times5").val(dat[0].drunk_begin_year);
                    $("#times6").val(dat[0].drunk_drinking_again);

                    if (dat[0].drunk_long_time != "" && dat[0].drunk_long_time != null) {
                        $("#drunk_long").val(dat[0].drunk_long_time + "年");
                    }

                    if (dat[0].drinking_spirit_frequency != "" && dat[0].drinking_spirit_frequency != null) {
                        $("input[name=" + "frequency1" + "][value=" + dat[0].drinking_spirit_frequency + "]").attr("checked", "checked");
                    }
                    if (dat[0].drinking_beer_frequency != "" && dat[0].drinking_beer_frequency != null) {
                        $("input[name=" + "frequency2" + "][value=" + dat[0].drinking_beer_frequency + "]").attr("checked", "checked");
                    }
                    if (dat[0].drinking_red_frequency != "" && dat[0].drinking_red_frequency != null) {
                        $("input[name=" + "frequency3" + "][value=" + dat[0].drinking_red_frequency + "]").attr("checked", "checked");
                    }
                    if (dat[0].drinking_yellow_frequency != "" && dat[0].drinking_yellow_frequency != null) {
                        $("input[name=" + "frequency4" + "][value=" + dat[0].drinking_yellow_frequency + "]").attr("checked", "checked");
                    }
                    if (dat[0].drinking_other_wine1 != "" && dat[0].drinking_other_wine1 != null) {
                        if (dat[0].drinking_other_frequency != "" && dat[0].drinking_other_frequency != null) {
                            $("input[name=" + "frequency5" + "][value=" + dat[0].drinking_other_frequency + "]").attr("checked", "checked");
                        }
                        $("#other_du").val(dat[0].drinking_other_degree1);
                    }


                    if (dat[0].drinking_spirit_amount != "" && dat[0].drinking_spirit_amount != null) {
                        $("input[name=" + "count1" + "][value=" + dat[0].drinking_spirit_amount + "]").attr("checked", "checked");
                        $("#count1_dl").val(dat[0].drinking_spirit_equivalent);
                    }
                    if (dat[0].drinking_beer_amount != "" && dat[0].drinking_beer_amount != null) {
                        $("input[name=" + "count2" + "][value=" + dat[0].drinking_beer_amount + "]").attr("checked", "checked");
                        $("#count2_dl").val(dat[0].drinking_beer_equivalent);
                    }
                    if (dat[0].drinking_red_amount != "" && dat[0].drinking_red_amount != null) {
                        $("input[name=" + "count3" + "][value=" + dat[0].drinking_red_amount + "]").attr("checked", "checked");
                        $("#count3_dl").val(dat[0].drinking_red_equivalent);
                    }
                    if (dat[0].drinking_yellow_amount != "" && dat[0].drinking_yellow_amount != null) {
                        $("input[name=" + "count4" + "][value=" + dat[0].drinking_yellow_amount + "]").attr("checked", "checked");
                        $("#count4_dl").val(dat[0].drinking_yellow_equivalent);
                    }
                    if (dat[0].drinking_other_wine2 != "" && dat[0].drinking_other_wine2 != null) {
                        if (dat[0].drinking_other_amount != "") {
                            $("input[name=" + "count5" + "][value=" + dat[0].drinking_other_amount + "]").attr("checked", "checked");
                            $("#count5_dl").val(dat[0].drinking_other_equivalent);
                        }
                        $("#wine_degree").val(dat[0].drinking_other_degree2);
                    }
                }



            }
        })
})