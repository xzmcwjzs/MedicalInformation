$(function () {
    //===============================================================修改内容 打开显示======================================================================
    $.post("/MedicalHistory_Outpatient/Show?id=" + id,
               function (data) {
                   //var tt = data.replace(/\r\n/ig, "");
                   //dat = eval(tt);
                   dat = eval(data);
                   if (dat != "" && dat != null) {
                       $("#name").val(dat[0].name);
                       $("input[name=" + "sex" + "][value=" + dat[0].sex + "]").attr("checked", "checked");
                       $("#id_card_number").val(dat[0].id_card_number);
                       //$("#id_card_number").attr("readonly", "readonly");
                       var s = dat[0].id_card_number;
                       if (dat[0].birth_date != "" && dat[0].birth_date != null) {
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
                       $("#outpatientId").val(dat[0].outpatient_id);
                       $("#hospital").val(dat[0].hospital);
                       $("#department").val(dat[0].department);

                       $("#zs").val(dat[0].zs);
                       $("#xbs").val(dat[0].xbs);
                       $("#t").val(dat[0].t);
                       $("#p").val(dat[0].p);
                       $("#r").val(dat[0].r);
                       $("#ssy").val(dat[0].ssy1);
                       $("#szy").val(dat[0].szy1);
                       $("#ssy1").val(dat[0].ssy2);
                       $("#szy1").val(dat[0].szy2);
                       $("#other").val(dat[0].other);
                       $("#advice").val(dat[0].orders);
                       $("#doctor").val(dat[0].worker_user_name);

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


                       if (dat[0].outpatient_date != "" && dat[0].outpatient_date != null) {
                           var date = new Date(parseInt(dat[0].outpatient_date.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                           //var a = dat[0].outpatient_date.split('/');
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
                           $("#data").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }


                   }
               })


    $.post("/MedicalHistory_Outpatient/ShowAccessoryExamination?contact_id=" + id,
              function (data) {
                  dat = eval(data);
                  if (dat != "" && dat != null) {
                      if (dat[0].context != "") {
                          $("#fzjc1").val(dat[0].context);
                      }
                      if (dat[1].context != "") {
                          $("#fzjc2").val(dat[1].context);
                      }
                      if (dat[2].context != "") {
                          $("#fzjc3").val(dat[2].context);
                      }
                      for (i = 1; i <= dat.length; i++) {
                          if (i > 3) {
                              $('#Tr' + (i - 1) + '').after('<tr id="Tr' + i + '">' +
                             '<td class="auto-style36" colspan="9">' + i + '.<textarea id="fzjc' + i + '" name="fzjc' + i + '" style="height: 18px; width: 96%;"  onkeyup="add1()"></textarea></td>' +
                         '</tr>');
                              $("#fzjc").attr({ "rowspan": i });
                              $('#fzjc' + i + '').val(dat[i - 1].context);
                          }
                      }
                  }
              })

    $.post("/MedicalHistory_Outpatient/ShowJudge?contact_id=" + id,
              function (data) {
                  dat = eval(data);
                  if (dat != "" && dat != null) {
                      if (dat[0].context != "") {
                          $("#judge1").val(dat[0].context);
                      }
                      if (dat[1].context != "") {
                          $("#judge2").val(dat[1].context);
                      }
                      if (dat[2].context != "") {
                          $("#judge3").val(dat[2].context);
                      }
                      for (a = 1; a <= dat.length; a++) {
                          if (a > 3) {
                              $('#Judge' + (a - 1) + '').after('<tr id="Judge' + a + '">' +
                                '<td class="auto-style36" colspan="9">' + a + '.<textarea id="judge' + a + '" name="judge' + a + '" style="height: 18px; width: 96%;"  onkeyup="add2()"></textarea><input type="text" id="icd' + a + '" name="icd' + a + '" style="display:none"/></td>' +
                            '</tr>');
                              $("#judge").attr({ "rowspan": a });
                              $('#judge' + a + '').val(dat[a - 1].context);

                              $('#judge' + a + '').autocomplete('/Data/ICD10', {
                                  multiple: false,   //是否允许搜索框追加
                                  max: 50,
                                  position: 'absolute',
                                  matchContains: true,
                                  autoFill: false,
                                  delay: 40,
                                  dataType: "json", //json类型
                                  parse: function (data) {
                                      return $.map(data, function (row) {
                                          return {
                                              data: row,
                                              value: row.name,
                                              result: row.name
                                          }
                                      });
                                  }, formatItem: function (item) {
                                      return item.name;
                                  }
                              });
                              $('#judge' + a + '').result(judged).click(function () {
                                  $(this).prev().search();
                              });

                              function judged(event, data, formatted) {
                                  $('#icd' + a + '').val(data.code);
                              }
                          }
                      }


                  }
              })

    $.post("/MedicalHistory_Outpatient/ShowPrescription?contact_id=" + id,
             function (data) {
                 dat = eval(data);
                 if (dat != "" && dat != null) {
                     if (dat[0].medical_name) {
                         $("#medical_name1").val(dat[0].medical_name);
                         $("#specifications1").val(dat[0].medical_specifications);
                         $("#usage1").val(dat[0].medical_usage);
                         $("#dosage1").val(dat[0].medical_dosage);
                         $("#frequency1").val(dat[0].medical_frequency);
                         $("#day1").val(dat[0].medical_day);
                         $("#total1").val(dat[0].medical_total);
                         $("#unit1").val(dat[0].medical_unit);
                         $("#price1").val(dat[0].medical_price);
                         $("#mix_unit1").val(dat[0].medical_min_unit);
                         $("#manufacturer1").val(dat[0].medical_manufacturer);
                     }
                     if (dat[1].medical_name) {
                         $("#medical_name2").val(dat[1].medical_name);
                         $("#specifications2").val(dat[1].medical_specifications);
                         $("#usage2").val(dat[1].medical_usage);
                         $("#dosage2").val(dat[1].medical_dosage);
                         $("#frequency2").val(dat[1].medical_frequency);
                         $("#day2").val(dat[1].medical_day);
                         $("#total2").val(dat[1].medical_total);
                         $("#unit2").val(dat[1].medical_unit);
                         $("#price2").val(dat[1].medical_price);
                         $("#mix_unit2").val(dat[1].medical_min_unit);
                         $("#manufacturer2").val(dat[1].medical_manufacturer);
                     }
                     if (dat[2].medical_name) {
                         $("#medical_name3").val(dat[2].medical_name);
                         $("#specifications3").val(dat[2].medical_specifications);
                         $("#usage3").val(dat[2].medical_usage);
                         $("#dosage3").val(dat[2].medical_dosage);
                         $("#frequency3").val(dat[2].medical_frequency);
                         $("#day3").val(dat[2].medical_day);
                         $("#total3").val(dat[2].medical_total);
                         $("#unit3").val(dat[2].medical_unit);
                         $("#price3").val(dat[2].medical_price);
                         $("#mix_unit3").val(dat[2].medical_min_unit);
                         $("#manufacturer3").val(dat[2].medical_manufacturer);
                     }
                     for (c = 1; c <= dat.length; c++) {
                         if (c > 3) {
                             $('#Pre' + (c - 1) + '').after('<tr style="height: 35px;" id="Pre' + c + '">' +
                                    '<td style="text-align: left; background-color: #f1f3f5; border: 1px solid white; border-left: 0px;; border-bottom: 0px">' + c + '.<input type="text" name="medical_name' + c + '" id="medical_name' + c + '" style="width: 90%" onkeyup="add3()"/>' +
                                    '</td>' +
                                    '<td style="background-color: #e2ebfb; border: 1px solid white;; border-bottom: 0px">' +
                                        '<input type="text" name="specifications' + c + '" id="specifications' + c + '" style="width: 98%" />' +
                                    '</td>' +
                                    '<td style="background-color: #f1f3f5; border: 1px solid white;; border-bottom: 0px">' +
                                        '<select id="usage' + c + '" name="usage' + c + '">' +
                                            '<option value="">=请选择=</option>' +
                                            '<option value="1">口服</option>' +
                                            '<option value="2">外用</option>' +
                                            '<option value="3">静脉注射</option>' +
                                            '<option value="4">肌肉注射</option>' +
                                            '<option value="5">皮下注射</option>' +
                                            '<option value="6">皮内注射</option>' +
                                        '</select>' +
                                    '</td>' +
                                    '<td style="background-color: #e2ebfb; border: 1px solid white;; border-bottom: 0px">' +
                                        '<input type="text" id="dosage' + c + '" name="dosage' + c + '" style="width: 40px" />' +
                                        '<input type="text" id="mix_unit' + c + '" name="mix_unit' + c + '" style="border: none; background-color: #e2ebfb; width: 30px" />' +
                                    '</td>' +
                                    '<td style="background-color: #f1f3f5; border: 1px solid white;; border-bottom: 0px">' +
                                        '<select id="frequency' + c + '" name="frequency' + c + '" style="width: 60px">' +
                                            '<option value="">请选择</option>' +
                                            '<option value="Qd">Qd</option>' +
                                            '<option value="Bid">Bid</option>' +
                                            '<option value="Tid">Tid</option>' +
                                            '<option value="Qid">Qid</option>' +
                                            '<option value="Q2h">Q2h</option>' +
                                            '<option value="Q8h">Q8h</option>' +
                                            '<option value="Qn">Qn</option>' +
                                            '<option value="Qod">Qod</option>' +
                                            '<option value="Qw">Qw</option>' +
                                            '<option value="Biw">Biw</option>' +
                                        '</select>' +
                                    '</td>' +
                                    '<td style="background-color: #e2ebfb; border: 1px solid white;; border-bottom: 0px">' +
                                        '<input type="text" id="day' + c + '" name="day' + c + '" style="width: 45px" />' +
                                    '</td>' +
                                    '<td style="background-color: #f1f3f5; border: 1px solid white;; border-bottom: 0px">' +
                                        '<input type="text" id="total' + c + '" name="total' + c + '" style="width: 40px" />' +
                                        ' <select id="unit' + c + '" name="unit' + c + '">' +
                                            '<option value=""></option>' +
                                            '<option value="片">片</option>' +
                                            '<option value="粒">粒</option>' +
                                            '<option value="盒">盒</option>' +
                                            '<option value="瓶">瓶</option>' +
                                            '<option value="支">支</option>' +
                                            '<option value="枚">枚</option>' +
                                            '<option value="袋">袋</option>' +
                                        '</select>' +
                                    '</td>' +
                                    '<td style="background-color: #e2ebfb; border: 1px solid white; border-right: 0px; border-bottom: 0px">' +
                                        '<input type="text" id="price' + c + '" name="price' + c + '" style="border: none; background-color: #e2ebfb; width: 70px;text-align:center" />' +
                                    '</td>' +
                                    '<td style="background-color: #f1f3f5; border: 1px solid white; display: none">' +
                                        '<input type="text" id="manufacturer' + c + '" name="manufacturer' + c + '" style="border: none; background-color: #f1f3f5; width: 10px" />' +
                                    '</td>' +
                                '</tr>');


                             $('#medical_name' + c + '').autocomplete('/Data/Medical_Query', {
                                 multiple: false,   //是否允许搜索框追加
                                 multipleSeparator: '，',  //搜索框追加后缀格式 如：搜索值1,搜索值2
                                 max: 20,
                                 width: 900,
                                 position: 'absolute',
                                 matchContains: true,
                                 autoFill: false,
                                 delay: 40,
                                 dataType: "json", //json类型
                                 parse: function (data) {
                                     return $.map(data, function (row) {
                                         return {
                                             data: row,
                                             value: row.medicine_name,
                                             result: row.medicine_name
                                         }
                                     });
                                 }, formatItem: function (item) {
                                     return '<td style="width:320px;">' + item.medicine_name + '</td><td style="width:200px;">' + item.specifications + '</td><td style="width:100px;">' + item.common_price + "元/" + item.min_unit + '</td><td style="width:280px;">' + item.manufacturer + '<td>';
                                 }

                             });
                             $('#medical_name' + c + '').result(log).click(function () {
                                 $(this).prev().search();
                             });

                             function log(event, data, formatted) {
                                 $('#price' + (c - 1) + '').val(parseFloat(data.common_price).toFixed(2));
                                 $('#specifications' + (c - 1) + '').val(data.specifications);
                                 $('#mix_unit' + (c - 1) + '').val(data.min_unit);
                                 $('#manufacturer' + (c - 1) + '').val(data.manufacturer);
                             }
                         }

                         $('#medical_name' + c + '').val(dat[c - 1].medical_name);
                         $('#specifications' + c + '').val(dat[c - 1].medical_specifications);
                         $('#usage' + c + '').val(dat[c - 1].medical_usage);
                         $('#dosage' + c + '').val(dat[c - 1].medical_dosage);
                         $('#mix_unit' + c + '').val(dat[c - 1].medical_min_unit);
                         $('#frequency' + c + '').val(dat[c - 1].medical_frequency);
                         $('#day' + c + '').val(dat[c - 1].medical_day);
                         $('#total' + c + '').val(dat[c - 1].medical_total);
                         $('#unit' + c + '').val(dat[c - 1].medical_unit);
                         $('#price' + c + '').val(dat[c - 1].medical_price);
                         $('#manufacturer' + c + '').val(dat[c - 1].medical_manufacturer);
                     }
                 }
             })
})