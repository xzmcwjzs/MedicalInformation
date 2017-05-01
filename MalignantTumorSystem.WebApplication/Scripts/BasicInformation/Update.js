$(function () { 
        //==========================修改内容 打开显示====================
        $.post("/BasicInformation/Show?resident_id=" + resident_id,
                   function (data) {
                       dat = eval(data);
                       if (dat != "" && dat != null) {
                           $("#txtResidentName").val(dat[0].resident_name);
                           $("input[name=" + "rdlSex" + "][value=" + dat[0].sex + "]").attr("checked", "checked");
                           $("#txtCardNumber").val(dat[0].id_card_number);

                           if (dat[0].birth_date != "" && dat[0] != null) {
                               var date = new Date(parseInt(dat[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                               var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                               var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                               $("#txtBirthDate").val(date.getFullYear() + '-' + a1 + '-' + a2);
                               var dates = new Date();
                               var year = dates.getFullYear() - date.getFullYear();
                               if (year > 0) {
                                   $("#ltAge").val(year + "岁");
                               }
                               else if (year == 0) {
                                   var month = dates.getMonth() - a1;
                                   if (month > 0) {
                                       $("#ltAge").val(month + "月");
                                   } else if (month == 0) {
                                       var day = dates.getDay() - a2;
                                       if (day > 0) {
                                           $("#ltAge").val(day + "天");
                                       }
                                   }
                               }
                           }


                           $("#txtWorkUnit").val(dat[0].work_unit);
                           $("#ddlcraft").val(dat[0].work_type);
                           $("#txtFamilyPhone").val(dat[0].family_phone);
                           $("#txtIndividualPhone").val(dat[0].individual_phone);

                           //$("#txtpersonal_fixed_line_telephone").val(dat[0].personal_fixed_line_telephone);
                           $("#txtcontact_name").val(dat[0].contact_name);
                           $("#txtcontact_phone").val(dat[0].contact_phone);
                           $("#txtEmail").val(dat[0].email);

                           $("#nationality").val(dat[0].nationality_name);
                           $("#zipCode").val(dat[0].post_code);
                           $("#fatherName").val(dat[0].father_name);
                           $("#motherName").val(dat[0].mother_name);
                           $("#fatherIdCard").val(dat[0].father_id_card_numb);
                           $("#motherIdCard").val(dat[0].mother_id_card_numb);
                           $("#fatherPhone").val(dat[0].father_phone);
                           $("#motherPhone").val(dat[0].mother_phone);
                           $("#father_email").val(dat[0].father_email);
                           $("#mother_email").val(dat[0].mother_email);

                           //$("#fillIdentity").val(dat[0].worker_user_name);
                           if (dat[0].worker_time_everyweek != "" && dat[0].worker_time_everyweek != null) {
                               $("input[name=" + "work_time" + "][value=" + dat[0].worker_time_everyweek + "]").attr("checked", "checked");
                           }

                           if (dat[0].family_phone != "") {
                               var s = dat[0].family_phone;
                               $("#txtFamilyPhone1").val(s.split('-')[0]);
                               $("#txtFamilyPhone2").val(s.split('-')[1]);
                           }


                           $("#ddlABOBloodType").val(dat[0].abo_blood_group);
                           $("#ddlcontact_my_relationship").val(dat[0].contact_my_relationship);
                           $("#ddlNation").val(dat[0].nation);
                           $("#ddlEducationQualification").val(dat[0].education_qualification);
                           $("#ddlMarrigeState").val(dat[0].marital_status);
                           $("#ddlCostPayment").val(dat[0].cost_method_payment);
                           $("#ddlOccupationSituation").val(dat[0].occupation_situation);


                           //出生住址
                           //----省----
                           if (dat[0].birth_community_code != "" && dat[0].birth_community_code != null) {
                               var code = dat[0].birth_community_code;
                               $("#ddlProvince1").val(code.substring(0, 2));
                               //-----市-----
                               $.post("/Data/City?code=" + code.substring(0, 2),
                                function (datas) {
                                    dat1 = eval(datas);
                                    $("#ddlCity1").empty();
                                    $("#ddlCity1").append("<option value=" + "" + ">==请选择==</option>");
                                    if (dat1 != "") {
                                        for (i = 0; i < dat1.length; i++) {
                                            $("#ddlCity1").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                        }
                                        $("#ddlCity1").val(code.substring(0, 4));
                                    }
                                })

                               //-----区/县-----
                               $.post("/Data/County?code=" + code.substring(0, 4),
                                function (data) {
                                    dat1 = eval(data);
                                    $("#ddlCounty1").empty();
                                    $("#ddlCounty1").append("<option value=" + "" + ">==请选择==</option>");
                                    if (dat1 != "") {
                                        for (var i = 0; i < dat1.length; i++) {
                                            $("#ddlCounty1").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                        }
                                        $("#ddlCounty1").val(code.substring(0, 6));
                                    }
                                })

                               //-------镇/村-------
                               $("#birth_address").val(dat[0].birth_address);
                           } else if (dat[0].birth_address != "") {
                               var s = dat[0].birth_address.split('省');
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
                                    function (data) {
                                        dat1 = eval(data);
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
                                                         function (data) {
                                                             dat2 = eval(data);
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
                           var home_address = dat[0].permanent_home_address;
                           //家庭常住住址-------------------------------------------------------------------------------------------------------------------------
                           if (dat[0].community_code != "" && dat[0].community_code != null) {
                               var codes = dat[0].community_code;
                               if (codes.length == 2) {
                                   $("#ddlProvince").val(codes.substring(0, 2));
                               }
                               else if (codes.length == 4) {
                                   $("#ddlProvince").val(codes.substring(0, 2));
                                   //-----市-----
                                   $.post("/Data/City?code=" + codes.substring(0, 2),
                                    function (data) {
                                        dat1 = eval(data);
                                        $("#ddlCity").empty();
                                        $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat1 != "") {
                                            for (var i = 0; i < dat1.length; i++) {
                                                $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                            }
                                            $("#ddlCity").val(codes.substring(0, 4));
                                        }
                                    })

                               }
                               else if (codes.length == 6) {
                                   $("#ddlProvince").val(codes.substring(0, 2));
                                   //-----市-----
                                   $.post("/Data/City?code=" + codes.substring(0, 2),
                                    function (data1) {
                                        dat1 = eval(data1);
                                        $("#ddlCity").empty();
                                        $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat1 != "") {
                                            for (var i = 0; i < dat1.length; i++) {
                                                $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                            }
                                            $("#ddlCity").val(codes.substring(0, 4));
                                        }
                                    })

                                   //-----区/县-----
                                   $.post("/Data/County?code=" + codes.substring(0, 4),
                                    function (data2) {
                                        dat2 = eval(data2);
                                        $("#ddlCounty").empty();
                                        $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat2 != "") {
                                            for (var i1 = 0; i1 < dat2.length; i1++) {
                                                $("#ddlCounty").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                                            }
                                            $("#ddlCounty").val(codes.substring(0, 6));
                                        }
                                    })
                               }
                               else if (codes.length == 9) {
                                   $("#ddlProvince").val(codes.substring(0, 2));
                                   //-----市-----
                                   $.post("/Data/City?code=" + codes.substring(0, 2),
                                    function (data1) {
                                        dat1 = eval(data1);
                                        $("#ddlCity").empty();
                                        $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat1 != "") {
                                            for (var i = 0; i < dat1.length; i++) {
                                                $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                            }
                                            $("#ddlCity").val(codes.substring(0, 4));
                                        }
                                    })

                                   //-----区/县-----
                                   $.post("/Data/County?code=" + codes.substring(0, 4),
                                    function (data2) {
                                        dat2 = eval(data2);
                                        $("#ddlCounty").empty();
                                        $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat2 != "") {
                                            for (var i1 = 0; i1 < dat2.length; i1++) {
                                                $("#ddlCounty").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                                            }
                                            $("#ddlCounty").val(codes.substring(0, 6));
                                        }
                                    })


                                   $.post("/Data/Street?code=" + codes.substring(0, 6),
                               function (data3) {
                                   dat3 = eval(data3);
                                   $("#ddlStreet").empty();
                                   $("#ddlStreet").append("<option value=" + "" + ">==请选择==</option>");
                                   if (dat3 != "") {
                                       for (var i3 = 0; i3 < dat3.length; i3++) {
                                           $("#ddlStreet").append("<option value=" + dat3[i3].code + ">" + dat3[i3].name + "</option>");
                                       }
                                       $("#ddlStreet").val(codes.substring(0, 9));
                                   }
                               })

                                   $("#home_address").val(home_address);

                               }
                               else if (codes.length == 12) {
                                   $("#ddlProvince").val(codes.substring(0, 2));
                                   //-----市-----
                                   $.post("/Data/City?code=" + codes.substring(0, 2),
                                    function (data1) {
                                        dat1 = eval(data1);
                                        $("#ddlCity").empty();
                                        $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat1 != "") {
                                            for (var i = 0; i < dat1.length; i++) {
                                                $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                            }
                                            $("#ddlCity").val(codes.substring(0, 4));
                                        }
                                    })

                                   //-----区/县-----
                                   $.post("/Data/County?code=" + codes.substring(0, 4),
                                    function (data2) {
                                        dat2 = eval(data2);
                                        $("#ddlCounty").empty();
                                        $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat2 != "") {
                                            for (var i1 = 0; i1 < dat2.length; i1++) {
                                                $("#ddlCounty").append("<option value=" + dat2[i1].code + ">" + dat2[i1].name + "</option>");
                                            }
                                            $("#ddlCounty").val(codes.substring(0, 6));
                                        }
                                    })

                                   $.post("/Data/Street?code=" + codes.substring(0, 6),
                               function (data3) {
                                   dat3 = eval(data3);
                                   $("#ddlStreet").empty();
                                   $("#ddlStreet").append("<option value=" + "" + ">==请选择==</option>");
                                   if (dat3 != "") {
                                       for (var i3 = 0; i3 < dat3.length; i3++) {
                                           $("#ddlStreet").append("<option value=" + dat3[i3].code + ">" + dat3[i3].name + "</option>");
                                       }
                                       $("#ddlStreet").val(codes.substring(0, 9));
                                   }
                               })
                                   $.post("/Data/Community?code=" + codes.substring(0, 9),
                                    function (data4) {
                                        dat4 = eval(data4);
                                        $("#ddlCommunity").empty();
                                        $("#ddlCommunity").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat4 != "") {
                                            for (var i4 = 0; i4 < dat4.length; i4++) {
                                                $("#ddlCommunity").append("<option value=" + dat4[i4].code + ">" + dat4[i4].name + "</option>");
                                            }
                                            $("#ddlCommunity").val(codes);
                                        }
                                    })
                                   $("#home_address").val(home_address);

                               }
                           }

                           var residentAddress = dat[0].residence_address;
                           //现住住址------------------------------------------------------------------------------------------------------------------------------
                           if (dat[0].present_community_code != "" && dat[0].present_community_code != null) {
                               var code2 = dat[0].present_community_code;
                               if (code2.length == 2) {
                                   $("#ddlProvince2").val(code2.substring(0, 2));
                                   $("#residence_address").val(dat[0].residence_address);
                               }
                               else if (code2.length == 4) {
                                   $("#ddlProvince2").val(code2.substring(0, 2));
                                   //-----市-----
                                   $.post("/Data/City?code=" + code2.substring(0, 2),
                                    function (data) {
                                        dat1 = eval(data);
                                        $("#ddlCity2").empty();
                                        $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat1 != "") {
                                            for (var i = 0; i < dat1.length; i++) {
                                                $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                            }
                                            $("#ddlCity2").val(code2.substring(0, 4));
                                        }
                                    })
                                   $("#residence_address").val(dat[0].residence_address);
                               }
                               else if (code2.length == 6) {
                                   $("#ddlProvince2").val(code2.substring(0, 2));
                                   //-----市-----
                                   $.post("/Data/City?code=" + code2.substring(0, 2),
                                    function (data) {
                                        dat1 = eval(data);
                                        $("#ddlCity2").empty();
                                        $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat1 != "") {
                                            for (var i = 0; i < dat1.length; i++) {
                                                $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                            }
                                            $("#ddlCity2").val(code2.substring(0, 4));
                                        }
                                    })

                                   //-----区/县-----
                                   $.post("/Data/County?code=" + code2.substring(0, 4),
                                    function (data) {
                                        dat1 = eval(data);
                                        $("#ddlCounty2").empty();
                                        $("#ddlCounty2").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat1 != "") {
                                            for (var i = 0; i < dat1.length; i++) {
                                                $("#ddlCounty2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                            }
                                            $("#ddlCounty2").val(code2.substring(0, 6));
                                        }
                                    })

                                   $("#residence_address").val(dat[0].residence_address);
                               }
                               else if (code2.length == 9) {
                                   $("#ddlProvince2").val(code2.substring(0, 2));
                                   //-----市-----
                                   $.post("/Data/City?code=" + code2.substring(0, 2),
                                    function (data) {
                                        dat1 = eval(data);
                                        $("#ddlCity2").empty();
                                        $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat1 != "") {
                                            for (var i = 0; i < dat1.length; i++) {
                                                $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                            }
                                            $("#ddlCity2").val(code2.substring(0, 4));
                                        }
                                    })

                                   //-----区/县-----
                                   $.post("/Data/County?code=" + code2.substring(0, 4),
                                    function (data) {
                                        dat1 = eval(data);
                                        $("#ddlCounty2").empty();
                                        $("#ddlCounty2").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat1 != "") {
                                            for (var i = 0; i < dat1.length; i++) {
                                                $("#ddlCounty2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                            }
                                            $("#ddlCounty2").val(code2.substring(0, 6));
                                        }
                                    })

                                   //-------镇/村-------
                                   $.post("/Data/Street?code=" + codes.substring(0, 6),
                                   function (data3) {
                                       dat3 = eval(data3);
                                       $("#ddlStreet2").empty();
                                       $("#ddlStreet2").append("<option value=" + "" + ">==请选择==</option>");
                                       if (dat3 != "") {
                                           for (var i3 = 0; i3 < dat3.length; i3++) {
                                               $("#ddlStreet2").append("<option value=" + dat3[i3].code + ">" + dat3[i3].name + "</option>");
                                           }
                                           $("#ddlStreet2").val(codes.substring(0, 9));
                                       }
                                   })

                                   $("#residence_address").val(dat[0].residence_address);
                               }
                               else if (code2.length == 12) {
                                   $("#ddlProvince2").val(code2.substring(0, 2));
                                   //-----市-----
                                   $.post("/Data/City?code=" + code2.substring(0, 2),
                                    function (data) {
                                        dat1 = eval(data);
                                        $("#ddlCity2").empty();
                                        $("#ddlCity2").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat1 != "") {
                                            for (var i = 0; i < dat1.length; i++) {
                                                $("#ddlCity2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                            }
                                            $("#ddlCity2").val(code2.substring(0, 4));
                                        }
                                    })

                                   //-----区/县-----
                                   $.post("/Data/County?code=" + code2.substring(0, 4),
                                    function (data) {
                                        dat1 = eval(data);
                                        $("#ddlCounty2").empty();
                                        $("#ddlCounty2").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat1 != "") {
                                            for (var i = 0; i < dat1.length; i++) {
                                                $("#ddlCounty2").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                            }
                                            $("#ddlCounty2").val(code2.substring(0, 6));
                                        }
                                    })

                                   //-------镇/村-------
                                   $.post("/Data/Street?code=" + code2.substring(0, 6),
                                   function (data3) {
                                       dat3 = eval(data3);
                                       $("#ddlStreet2").empty();
                                       $("#ddlStreet2").append("<option value=" + "" + ">==请选择==</option>");
                                       if (dat3 != "") {
                                           for (var i3 = 0; i3 < dat3.length; i3++) {
                                               $("#ddlStreet2").append("<option value=" + dat3[i3].code + ">" + dat3[i3].name + "</option>");
                                           }
                                           $("#ddlStreet2").val(code2.substring(0, 9));
                                       }
                                   })
                                   $.post("/Data/Community?code=" + code2.substring(0, 9),
                                    function (data4) {
                                        dat4 = eval(data4);
                                        $("#ddlCommunity2").empty();
                                        $("#ddlCommunity2").append("<option value=" + "" + ">==请选择==</option>");
                                        if (dat4 != "") {
                                            for (var i4 = 0; i4 < dat4.length; i4++) {
                                                $("#ddlCommunity2").append("<option value=" + dat4[i4].code + ">" + dat4[i4].name + "</option>");
                                            }
                                            $("#ddlCommunity2").val(code2);
                                        }
                                    })

                                   $("#residence_address").val(dat[0].residence_address);
                               }
                           }

                           //药物过敏史----------------------------------------------------------------------------------------------------------------------------
                           if ((dat[0].drug_allergy_type == "未知" || dat[0].drug_allergy_type == "" || dat[0].drug_allergy_type == "无") && dat[0].drug_allergy_other == "") {
                               $("input[name=" + "rdGuoMin" + "]").attr("checked", "checked");
                           } else {
                               var s = dat[0].drug_allergy_type;
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
                               $("#GuoMin_Other").val(dat[0].drug_allergy_other);
                           }
                           //疾病史-------------------------------------------------------------------------------------------------------------------------------
                           if (dat[0].disease == "无") {
                               $("input[name=" + "rddisease" + "]").attr("checked", "checked");
                           } else {
                               $.post("/BasicInformation/ShowDisease?resident_id=" + resident_id,
                              function (data) {
                                  dat = eval(data);
                                  if (dat != "") {
                                      var s = dat[0].disease_type;
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
                                      $("#Disease_Other").val(dat[0].disease_other);
                                  } else {
                                      $("input[name=" + "rddisease" + "]").attr("checked", "checked");
                                  }
                              });
                           }




                           //手术史-------------------------------------------------------------------------------------------------------------------------------
                           if (dat[0].surgery == "无") {
                               $("input[name=" + "option" + "][value=" + "无" + "]").attr("checked", "checked");
                           }
                           else {
                               $.post("/BasicInformation/ShowOption?resident_id=" + resident_id,
                            function (data) {
                                dat = eval(data);
                                if (dat != "") {
                                    if (dat[0].find_date != "" && dat[0].find_date != null) {

                                        var date = new Date(parseInt(dat[0].find_date.replace("/Date(", "").replace(")/", ""), 10));
                                        var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                        var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                                        $('#option_time0').val(date.getFullYear() + '-' + a1 + '-' + a2);
                                        $('#option_name0').val(dat[0].surgery_name);
                                        $('#option_hospital0').val(dat[0].surgery_hospital);
                                        $('#option_result0').val(dat[0].surgery_result);
                                    }

                                    for (var i = 1; i <= dat.length; i++) {
                                        if (dat.length > 1) {
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
                                            if (dat[i].find_date != "" && dat[i].find_date != null) {
                                                var date = new Date(parseInt(dat[i].find_date.replace("/Date(", "").replace(")/", ""), 10));
                                                var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                                var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                                                $('#option_time' + i + '').val(date.getFullYear() + '-' + a1 + '-' + a2);
                                                $('#option_name' + i + '').val(dat[i].surgery_name);
                                                $('#option_hospital' + i + '').val(dat[i].surgery_hospital);
                                                $('#option_result' + i + '').val(dat[i].surgery_result);
                                            }
                                        }
                                    }
                                }
                                else {
                                    $("input[name=" + "option" + "][value=" + "无" + "]").attr("checked", "checked");
                                }
                            });
                           }
                           //外伤史-------------------------------------------------------------------------------------------------------------------------------
                           if (dat[0].trauma == "无") {
                               $("input[name=" + "trauma" + "][value=" + "无" + "]").attr("checked", "checked");
                           } else {
                               $.post("/BasicInformation/ShowTrauma?resident_id=" + resident_id,
                            function (data) {
                                dat = eval(data);
                                if (dat != "") {
                                    if (dat[0].find_date != "" && dat[0].find_date != null) {
                                        var date = new Date(parseInt(dat[0].find_date.replace("/Date(", "").replace(")/", ""), 10));
                                        var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                        var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                                        $('#trauma_time0').val(date.getFullYear() + '-' + a1 + '-' + a2);

                                        $('#trauma_name0').val(dat[0].trauma_name);
                                        $('#deal_hospital0').val(dat[0].trauma_hospital);
                                        $('#deal_result0').val(dat[0].trauma_result);
                                    }

                                    for (i = 1; i < dat.length ; i++) {
                                        $('#trauma_add' + i + '').after('<tr id="trauma_add' + (a + 1) + '">' +
                                        '<td class="detailContent" style="height: 25px; width: 100%;">' +
                                            '<a>外伤名称</a>' +
                                            ' <input type="text" style="padding-top: 4px; width: 150px" id="trauma_name' + i + '" name="trauma_name' + i + '" onkeyup="added2();" />' +
                                            ' <a style="padding-left: 2em">外伤时间</a>' +
                                            ' <input type="text" id="trauma_time' + i + '" name="trauma_time' + i + '" style="padding-top: 4px; width: 80px" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + '  })" />' +
                                            ' <a style="padding-left: 2em">处理医院</a>' +
                                            ' <input type="text" style="padding-top: 4px; width: 180px" id="deal_hospital' + i + '" name="deal_hospital' + i + '" />' +
                                             ' <a style="padding-left: 2em">处理结果</a>' +
                                             ' <span style="position: relative;">' +
                                             ' <select id="trauma_change' + i + '"  name="trauma_change' + i + '" style="width: 88px">' +
                                                 '<option value="">==请选择==</option>' +
                                                 '<option value="1">治愈</option>' +
                                                 '<option value="2">好转</option>' +
                                                 '<option value="3">无效</option>' +
                                                 '<option value="4">其他</option>' +
                                             '</select>' +
                                             '<input id="deal_result' + i + '" name="deal_result' + i + '" style="position: absolute; width: 68px; height: 15px; left: 1px; top: 0px;border-bottom: 0px; border-right: 0px; border-left: 0px; border-top: 0px;"/>' +
                                             '</span>' +
                                             '</td></tr>')

                                        if (dat[i].find_date != "" && dat[i].find_date != null) {
                                            var date = new Date(parseInt(dat[i].find_date.replace("/Date(", "").replace(")/", ""), 10));
                                            var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                            var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                                            $('#trauma_time' + i + '').val(date.getFullYear() + '-' + a1 + '-' + a2);
                                            $('#trauma_name' + i + '').val(dat[i].trauma_name);
                                            $('#deal_hospital' + i + '').val(dat[i].trauma_hospital);
                                            $('#deal_result' + i + '').val(dat[i].trauma_result);
                                        }

                                    }
                                }
                                else {
                                    $("input[name=" + "trauma" + "][value=" + "无" + "]").attr("checked", "checked");

                                }
                            });
                           }
                           //输血史-------------------------------------------------------------------------------------------------------------------------------
                           if (dat[0].blood_transfusion == "无") {
                               $("input[name=" + "blood_transfusion" + "][value=" + "无" + "]").attr("checked", "checked");
                           }
                           else {
                               $.post("/BasicInformation/ShowBloodTransfusion?resident_id=" + resident_id,
                            function (data) {
                                dat = eval(data);
                                if (dat != "") {
                                    if (dat[0].find_date != "" && dat[0].find_date != null) {
                                        var date = new Date(parseInt(dat[0].find_date.replace("/Date(", "").replace(")/", ""), 10));
                                        var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                        var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                                        $('#blood_transfusion_time0').val(date.getFullYear() + '-' + a1 + '-' + a2);

                                        $('#blood_transfusion_name0').val(dat[0].blood_transfusion_reason);
                                        $('#blood_transfusion_amount0').val(dat[0].blood_amount);
                                        $('#blood_transfusion_result0').val(dat[0].blood_result);
                                    }


                                    for (var i = 1; i < dat.length; i++) {
                                        if (dat.length > 1) {
                                            $('#blood_transfusion_add' + i + '').after('<tr id="blood_transfusion_add' + (i + 1) + '">' +
                             '<td class="detailContent" style="height: 25px; width: 100%;">' +
                                 '<a>输血原因</a>' +
                                 ' <input type="text" style="padding-top: 4px; width: 150px" id="blood_transfusion_name' + i + '" name="blood_transfusion_name' + i + '" onkeyup="added3();" />' +
                                 ' <a style="padding-left: 2em">输血时间</a>' +
                                 ' <input type="text" id="blood_transfusion_time' + i + '" name="blood_transfusion_time' + i + '" style="padding-top: 4px; width: 80px" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + ' })" />' +
                                 ' <a style="padding-left: 3em">输血量</a>' +
                                     ' <input type="text" style="padding-top: 4px; width: 180px" id="blood_transfusion_amount' + i + '" name="blood_transfusion_amount' + i + '" />' +
                                     ' <a style="padding-left: 2em">输血结果</a>' +
                                     ' <span style="position: relative;">' +
                                      '<select id="blood_transfusion_change' + i + '" name="blood_transfusion_change' + i + '" style="width: 88px">' +
                                      '<option value="">==请选择==</option>' +
                                      '<option value="1">治愈</option>' +
                                      '<option value="2">好转</option>' +
                                     '<option value="3">无效</option>' +
                                     '<option value="4">其他</option>' +
                                     '</select>' +
                                 '<input id="blood_transfusion_result' + i + '" name="blood_transfusion_result' + i + '" style="position: absolute; width: 68px; height: 15px; left: 1px; top: 0px; border-bottom: 0px; border-right: 0px; border-left: 0px; border-top: 0px;"/>' +
                                  '</span></td></tr>')
                                            if (dat[i].find_date != "" && dat[i].find_date != null) {
                                                var date = new Date(parseInt(dat[i].find_date.replace("/Date(", "").replace(")/", ""), 10));
                                                var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                                var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                                                $('#blood_transfusion_time' + i + '').val(date.getFullYear() + '-' + a1 + '-' + a2);

                                                $('#blood_transfusion_name' + i + '').val(dat[i].blood_transfusion_reason);
                                                $('#blood_transfusion_amount' + i + '').val(dat[i].blood_amount);
                                                $('#blood_transfusion_result' + i + '').val(dat[i].blood_result);
                                            }
                                        }
                                    }
                                }
                                else {
                                    $("input[name=" + "blood_transfusion" + "][value=" + "无" + "]").attr("checked", "checked");

                                }
                            });
                           }
                           //家族史-------------------------------------------------------------------------------------------------------------------------------
                           if (dat[0].family_disease == "无") {
                               $("input[name=" + "rdfamily_disease" + "][value=" + "无" + "]").attr("checked", "checked");
                           }
                           else {
                               $.post("/BasicInformation/ShowFamily?resident_id=" + resident_id,
                            function (data) {
                                dat = eval(data);
                                if (dat != "") {
                                    $("#relationship0").val(dat[0].relationship_host);
                                    var s = dat[0].family_disease_type;
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
                                    $("#family_other_disease0").val(dat[0].family_disease_other);

                                    for (var i = 1; i < dat.length; i++) {
                                        if (dat.length > 1) {
                                            $('#family_disease_add' + i + '').after('<tr id="family_disease_add' + (i + 1) + '">' +
                                            '<td class="detailContent" style="height: 25px; width: 100%;">' +
                                            '<span style="position: relative;">' +
                                                '<select id="chfamilydisease_change' + i + '" name="chfamilydisease_change' + i + '" style="width: 80px" onchange="added4();">' +
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
                                                '<input id="relationship' + i + '" name="relationship' + i + '" style="position: absolute; width: 60px; height: 15px; left: 1px; top: 0px; border-bottom: 0px; border-right: 0px; border-left: 0px; border-top: 0px;"/>' +
                                                '</span>' +
                                                '<a style="margin-left:1em"></a>' +
                                                ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="高血压" />高血压<a style="padding-left:2em"></a>' +
                                                ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="糖尿病" />糖尿病<a style="padding-left:2em"></a>' +
                                                ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="结核病" />结核病<a style="padding-left:2em"></a>' +
                                                ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="冠心病" />冠心病<a style="padding-left:2em"></a>' +
                                                ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="恶性肿瘤" />恶性肿瘤<a style="padding-left:1em"></a>' +
                                                ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="脑卒中" />脑卒中<a style="padding-left:1em"></a>' +
                                                ' <input type="checkbox" name="chfamilydisease' + i + '" style="width: 20px" value="其他疾病" />其他疾病' +
                                                ' <input type="text" style="padding-top: 4px;width:100px" id="family_other_disease' + i + '" name="family_other_disease' + i + '"/>' +
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
                                    }
                                }
                                else {
                                    $("input[name=" + "rdfamily_disease" + "][value=" + "无" + "]").attr("checked", "checked");

                                }
                            });
                           }

                           //残疾情况----------------------------------------------------------------------------------------------------------------------------
                           if ((dat[0].disability_type == "未知" || dat[0].disability_type == "" || dat[0].disability_type == "无") && dat[0].disability_other == "") {
                               $("input[name=" + "rddisability" + "]").attr("checked", "checked");
                           } else {
                               var s = dat[0].disability_type;
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
                               $("#disability_other").val(dat[0].disability_other);
                           }

                       }
                   });

        $.post("/BasicInformation/ShowTumour?resident_id=" + resident_id, function (data) {
            dat = eval(data);
            if (dat != "" && dat != null) {
                //$("#fillIdentity").val(dat[0].worker_user_name);转换为真实姓名
                $.post("/Data/UserNameConventToRealName?username=" + dat[0].worker_user_name, function (data) {
                    if (data != "" && data != null)
                        $("#fillIdentity").val(data);
                })

                if (dat[0].create_time != "") {
                    var date = new Date(parseInt(dat[0].create_time.replace("/Date(", "").replace(")/", ""), 10));
                    var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                    var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                    $("#txtCreateTime").val(date.getFullYear() + '-' + a1 + '-' + a2);
                }
            }
        })


        $.post("/BasicInformation/ShowSmokeAndDrink?resident_id=" + resident_id,
                            function (data) {
                                dat = eval(data);
                                if (dat != "" && dat != null) {
                                    if (dat[0].smoke_never != "" && dat[0].smoke_never != null) {
                                        $("input[name='smoke']").attr("checked", "checked");
                                    } else if (dat[0].smoking != "") {
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
                                        if (dat[0].smoked_intent != "") {
                                            $("input[name='smoked_idea']").attr("checked", "checked");
                                        }
                                        if (dat[0].smoked != "") {
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
                                    if (dat[0].smoked_second_hand != "") {
                                        $("input[name='smoke_twice']").attr("checked", "checked");
                                    }
                                    //---------------------------饮酒情况------------------------------
                                    if (dat[0].drink_never != "" && dat[0].drink_never != null) {
                                        $("input[name='drink']").attr("checked", "checked");
                                    } else if (dat[0].drinking != "") {
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

                                        if (dat[0].drinking_age != "") {
                                            $("#drink_age").val(dat[0].drinking_age + "年");
                                        }

                                        $("#times5").val(dat[0].drunk_begin_year);
                                        $("#times6").val(dat[0].drunk_drinking_again);

                                        if (dat[0].drunk_long_time != "") {
                                            $("#drunk_long").val(dat[0].drunk_long_time + "年");
                                        }

                                        if (dat[0].drinking_spirit_frequency != "") {
                                            $("input[name=" + "frequency1" + "][value=" + dat[0].drinking_spirit_frequency + "]").attr("checked", "checked");
                                        }
                                        if (dat[0].drinking_beer_frequency != "") {
                                            $("input[name=" + "frequency2" + "][value=" + dat[0].drinking_beer_frequency + "]").attr("checked", "checked");
                                        }
                                        if (dat[0].drinking_red_frequency != "") {
                                            $("input[name=" + "frequency3" + "][value=" + dat[0].drinking_red_frequency + "]").attr("checked", "checked");
                                        }
                                        if (dat[0].drinking_yellow_frequency != "") {
                                            $("input[name=" + "frequency4" + "][value=" + dat[0].drinking_yellow_frequency + "]").attr("checked", "checked");
                                        }
                                        if (dat[0].drinking_other_wine1 != "") {
                                            if (dat[0].drinking_other_frequency != "") {
                                                $("input[name=" + "frequency5" + "][value=" + dat[0].drinking_other_frequency + "]").attr("checked", "checked");
                                            }
                                            $("#other_du").val(dat[0].drinking_other_degree1);
                                        }


                                        if (dat[0].drinking_spirit_amount != "") {
                                            $("input[name=" + "count1" + "][value=" + dat[0].drinking_spirit_amount + "]").attr("checked", "checked");
                                            $("#count1_dl").val(dat[0].drinking_spirit_equivalent);
                                        }
                                        if (dat[0].drinking_beer_amount != "") {
                                            $("input[name=" + "count2" + "][value=" + dat[0].drinking_beer_amount + "]").attr("checked", "checked");
                                            $("#count2_dl").val(dat[0].drinking_beer_equivalent);
                                        }
                                        if (dat[0].drinking_red_amount != "") {
                                            $("input[name=" + "count3" + "][value=" + dat[0].drinking_red_amount + "]").attr("checked", "checked");
                                            $("#count3_dl").val(dat[0].drinking_red_equivalent);
                                        }
                                        if (dat[0].drinking_yellow_amount != "") {
                                            $("input[name=" + "count4" + "][value=" + dat[0].drinking_yellow_amount + "]").attr("checked", "checked");
                                            $("#count4_dl").val(dat[0].drinking_yellow_equivalent);
                                        }
                                        if (dat[0].drinking_other_wine2 != "") {
                                            if (dat[0].drinking_other_amount != "") {
                                                $("input[name=" + "count5" + "][value=" + dat[0].drinking_other_amount + "]").attr("checked", "checked");
                                                $("#count5_dl").val(dat[0].drinking_other_equivalent);
                                            }
                                            $("#wine_degree").val(dat[0].drinking_other_degree2);
                                        }
                                    }
                                }
                            });

   
})