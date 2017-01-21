$(function () { 
    //===============================================================修改内容 打开显示======================================================================
    $.post("/MedicalHistory_Hospitalization/Show?id=" + id,
               function (data) { 
                  // var tt = data.replace(/\r\n/ig, "");
                  // dat = eval(tt);
                   dat = eval(data);
                   if (dat != "" && dat != null) {
                       $("#name").val(dat[0].name);

                       $("input[name=" + "sex" + "][value=" + dat[0].sex + "]").attr("checked", "checked");
                       $("#id_card_number").val(dat[0].id_card_number);
                       //$("#id_card_number").attr("readonly", "readonly");
                       var s = dat[0].id_card_number;
                       if (dat[0].birth_date != "") {
                           var date = new Date(parseInt(dat[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
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
                           $("#birth_date").val(date.getFullYear() + '-' + a1 + '-' + a2);
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
                       $("#txtcontact_name").val(dat[0].contact_person);
                       $("#txtcontact_phone").val(dat[0].contact_phone);
                       $("#txtEmail").val(dat[0].email);
                       $("#ddlABOBloodType").val(dat[0].blood_group);
                       $("#ddlcontact_my_relationship").val(dat[0].relationship);
                       $("#ddlNation").val(dat[0].nation);
                       $("#ddlEducationQualification").val(dat[0].culture);
                       $("#ddlMarrigeState").val(dat[0].marriage);
                       $("#nationality").val(dat[0].nationality);
                       $("#zipCode").val(dat[0].post_code);

                       $("#txtIndividualPhone").val(dat[0].phone);
                       $("#resident_id").val(dat[0].resident_id);
                       $("#number").val(dat[0].hospitalization_number);
                       $("#hospital").val(dat[0].hospital);
                       $("#department").val(dat[0].department);

                       $("#zs").val(dat[0].zs);
                       $("#xbs").val(dat[0].xbs);
                       $("#jws").val(dat[0].jws);
                       $("#t").val(dat[0].t);
                       $("#p").val(dat[0].p);
                       $("#r").val(dat[0].r);
                       $("#ssy").val(dat[0].ssy1);
                       $("#szy").val(dat[0].szy1);
                       $("#ssy1").val(dat[0].ssy2);
                       $("#szy1").val(dat[0].szy2);
                       $("#other").val(dat[0].other);
                       $("#advice").val(dat[0].orders);

                       //if (dat[0].ssy1 != "" && dat[0].szy1 != "") {
                       //    var a = dat[0].ssy1;
                       //    var b = dat[0].szy1;
                       //    if (a >= 180 || b >= 110) {
                       //        $("#grade").html("Ⅲ级高血压");
                       //        $("#values").val("03");
                       //    } else if ((a >= 160 && a <= 179) || (b >= 100 && b <= 109)) {
                       //        $("#grade").html("Ⅱ级高血压");
                       //        $("#values").val("02");
                       //    } else if ((a >= 140 && a <= 159) || (b >= 90 && b <= 99)) {
                       //        $("#grade").html("Ⅰ级高血压");
                       //        $("#values").val("01");
                       //    } else {
                       //        $("#grade").html("血压正常");
                       //        $("#values").val("00");
                       //    }
                       //}


                       if (dat[0].hospitalization_date != "" && dat[0].hospitalization_date != null) {
                           //var a = dat[0].hospitalization_date.split('/');
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
                           var date = new Date(parseInt(dat[0].hospitalization_date.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                           $("#data").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }


                   }
               })

})