$(function () {
    $.post("/Lifestyle_PhysicalExercise/Show?id=" + id,
                 function (data) {
                     dat = eval(data);
                     if (dat != "" && dat != null) {
                         $("#name").val(dat[0].name);
                         $("input[name=" + "sex" + "][value=" + dat[0].sex + "]").attr("checked", "checked");
                         $("#age").val(dat[0].age);
                         $("#id_card_number").val(dat[0].id_card_number);
                         //$("#id_card_number").attr("readonly", "readonly");
                         var s = dat[0].id_card_number;
                         if (dat[0].birth_date != "" && dat[0].birth_date != null) {
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

                         if (dat[0].physical_1 != "" && dat[0].physical_1 != null) {
                             $("input[name='week1']").attr("disabled", false);
                             $("input[name='every_time1']").attr("disabled", false);
                             $("input[name='run'][value='1']").attr("checked", true);

                             $("input[name=" + "week1" + "][value=" + dat[0].physical_1_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time1" + "][value=" + dat[0].physical_1_time + "]").attr("checked", "checked");
                         }


                         if (dat[0].physical_2 != "" && dat[0].physical_2 != null) {
                             $("input[name='week2']").attr("disabled", false);
                             $("input[name='every_time2']").attr("disabled", false);
                             $("input[name='speed2']").attr("disabled", false);

                             $("input[name='cut_it'][value='1']").attr("checked", true);
                             $("input[name=" + "week2" + "][value=" + dat[0].physical_2_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time2" + "][value=" + dat[0].physical_2_time + "]").attr("checked", "checked");
                             $("input[name=" + "speed2" + "][value=" + dat[0].physical_2_speed + "]").attr("checked", "checked");
                         }

                         if (dat[0].physical_3 != "" && dat[0].physical_3 != null) {
                             $("input[name='week3']").attr("disabled", false);
                             $("input[name='every_time3']").attr("disabled", false);
                             $("input[name='speed3']").attr("disabled", false);

                             $("input[name='by_bike'][value='1']").attr("checked", true);
                             $("input[name=" + "week3" + "][value=" + dat[0].physical_3_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time3" + "][value=" + dat[0].physical_3_time + "]").attr("checked", "checked");
                             $("input[name=" + "speed3" + "][value=" + dat[0].physical_3_speed + "]").attr("checked", "checked");
                         }

                         if (dat[0].physical_4 != "" && dat[0].physical_4 != null) {
                             $("input[name='week4']").attr("disabled", false);
                             $("input[name='every_time4']").attr("disabled", false);

                             $("input[name='swim'][value='1']").attr("checked", true);
                             $("input[name=" + "week4" + "][value=" + dat[0].physical_4_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time4" + "][value=" + dat[0].physical_4_time + "]").attr("checked", "checked");
                         }

                         if (dat[0].physical_5 != "" && dat[0].physical_5 != null) {
                             $("input[name='week5']").attr("disabled", false);
                             $("input[name='every_time5']").attr("disabled", false);

                             $("input[name='circuit'][value='1']").attr("checked", true);
                             $("input[name=" + "week5" + "][value=" + dat[0].physical_5_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time5" + "][value=" + dat[0].physical_5_time + "]").attr("checked", "checked");
                         }

                         if (dat[0].physical_6 != "" && dat[0].physical_6 != null) {
                             $("input[name='week6']").attr("disabled", false);
                             $("input[name='every_time6']").attr("disabled", false);

                             $("input[name='ping_pong'][value='1']").attr("checked", true);
                             $("input[name=" + "week6" + "][value=" + dat[0].physical_6_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time6" + "][value=" + dat[0].physical_6_time + "]").attr("checked", "checked");
                         }


                         if (dat[0].physical_7 != "" && dat[0].physical_7 != null) {
                             $("input[name='week7']").attr("disabled", false);
                             $("input[name='every_time7']").attr("disabled", false);

                             $("input[name='badminton'][value='1']").attr("checked", true);
                             $("input[name=" + "week7" + "][value=" + dat[0].physical_7_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time7" + "][value=" + dat[0].physical_7_time + "]").attr("checked", "checked");
                         }

                         if (dat[0].physical_8 != "" && dat[0].physical_8 != null) {
                             $("input[name='week8']").attr("disabled", false);
                             $("input[name='every_time8']").attr("disabled", false);

                             $("input[name='football'][value='1']").attr("checked", true);
                             $("input[name=" + "week8" + "][value=" + dat[0].physical_8_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time8" + "][value=" + dat[0].physical_8_time + "]").attr("checked", "checked");
                         }

                         if (dat[0].physical_9 != "" && dat[0].physical_9 != null) {
                             $("input[name='week9']").attr("disabled", false);
                             $("input[name='every_time9']").attr("disabled", false);

                             $("input[name='basketball'][value='1']").attr("checked", true);
                             $("input[name=" + "week9" + "][value=" + dat[0].physical_9_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time9" + "][value=" + dat[0].physical_9_time + "]").attr("checked", "checked");
                         }

                         if (dat[0].physical_10 != "" && dat[0].physical_10 != null) {
                             $("input[name='week10']").attr("disabled", false);
                             $("input[name='every_time10']").attr("disabled", false);

                             $("input[name='tennis'][value='1']").attr("checked", true);
                             $("input[name=" + "week10" + "][value=" + dat[0].physical_10_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time10" + "][value=" + dat[0].physical_10_time + "]").attr("checked", "checked");
                         }


                         if (dat[0].physical_11 != "" && dat[0].physical_11 != null) {
                             $("input[name='week11']").attr("disabled", false);
                             $("input[name='every_time11']").attr("disabled", false);

                             $("input[name='baseball'][value='1']").attr("checked", true);
                             $("input[name=" + "week11" + "][value=" + dat[0].physical_11_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time11" + "][value=" + dat[0].physical_11_time + "]").attr("checked", "checked");
                         }

                         if (dat[0].physical_12 != "" && dat[0].physical_12 != null) {
                             $("input[name='week12']").attr("disabled", false);
                             $("input[name='every_time12']").attr("disabled", false);

                             $("input[name='golf'][value='1']").attr("checked", true);
                             $("input[name=" + "week12" + "][value=" + dat[0].physical_12_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time12" + "][value=" + dat[0].physical_12_time + "]").attr("checked", "checked");
                         }


                         if (dat[0].physical_13 != "" && dat[0].physical_13 != null) {
                             $("input[name='week13']").attr("disabled", false);
                             $("input[name='every_time13']").attr("disabled", false);

                             $("input[name='bowling'][value='1']").attr("checked", true);
                             $("input[name=" + "week13" + "][value=" + dat[0].physical_13_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time13" + "][value=" + dat[0].physical_13_time + "]").attr("checked", "checked");
                         }


                         if (dat[0].physical_14 != "" && dat[0].physical_14 != null) {
                             $("input[name='week14']").attr("disabled", false);
                             $("input[name='every_time14']").attr("disabled", false);

                             $("input[name='shadowboxing'][value='1']").attr("checked", true);
                             $("input[name=" + "week14" + "][value=" + dat[0].physical_14_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time14" + "][value=" + dat[0].physical_14_time + "]").attr("checked", "checked");
                         }


                         if (dat[0].physical_15 != "" && dat[0].physical_15 != null) {
                             $("input[name='week15']").attr("disabled", false);
                             $("input[name='every_time15']").attr("disabled", false);

                             $("input[name='taekwondo'][value='1']").attr("checked", true);
                             $("input[name=" + "week15" + "][value=" + dat[0].physical_15_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time15" + "][value=" + dat[0].physical_15_time + "]").attr("checked", "checked");
                         }


                         if (dat[0].physical_16 != "" && dat[0].physical_16 != null) {
                             $("input[name='week16']").attr("disabled", false);
                             $("input[name='every_time16']").attr("disabled", false);

                             $("input[name='mountaineering'][value='1']").attr("checked", true);
                             $("input[name=" + "week16" + "][value=" + dat[0].physical_16_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time16" + "][value=" + dat[0].physical_16_time + "]").attr("checked", "checked");
                         }

                         if (dat[0].physical_17 != "" && dat[0].physical_17 != null) {
                             $("input[name='week17']").attr("disabled", false);
                             $("input[name='every_time17']").attr("disabled", false);

                             $("input[name='skip'][value='1']").attr("checked", true);
                             $("input[name=" + "week17" + "][value=" + dat[0].physical_17_week + "]").attr("checked", "checked");
                             $("input[name=" + "every_time17" + "][value=" + dat[0].physical_17_time + "]").attr("checked", "checked");
                         }

                         if (dat[0].physical_other != "" && dat[0].physical_other != null) {
                             $("#other0").val(dat[0].physical_other);
                             $("#frequency0").val(dat[0].physical_other_frequency);

                         }
                     }
                 })

    $.post("/Lifestyle_PhysicalExercise/ShowAdd?id=" + id,
                      function (data) {
                          dat = eval(data);
                          if (dat != "" && dat != null) {
                              for (i = 1; i < dat.length + 1; i++) {
                                  $('#tr' + i + '').after('<tr id="tr' + (i + 1) + '">' +
                                '<td class="auto-style1"><a style=padding-left:2em></a><input type="text" id="other' + i + '" name="other' + i + '" style="width: 50px" onkeyup="added()"/></td>' +
                                '<td class="auto-style36" colspan="9">' +
                                    '<a>频次</a>' +
                                    ' <input type="text" id="frequency' + i + '" name="frequency' + i + '" style="width: 150px" />' +
                                '</td>' +
                            '</tr>');
                                  $('#other' + i + '').val(dat[i - 1].physical);
                                  $('#frequency' + i + '').val(dat[i - 1].frequency);

                              }
                          }

                      });
})