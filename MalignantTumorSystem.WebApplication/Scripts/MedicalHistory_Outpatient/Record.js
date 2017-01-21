$(function () {
    $.post("/MedicalHistory_Outpatient/Show?id=" + id,
               function (data) {
                   //var tt = data.replace(/\r\n/ig, "");
                   //dts = eval(tt);
                   dts = eval(data);
                   if (dts != "") {
                      
                       $("#hospital").html(dts[0].hospital);
                       $("#name").html(dts[0].name);
                       if (dts[0].sex == "01") {
                           $("#sex").html("男");
                       }
                       else if (dts[0].sex == "02") {
                           $("#sex").html("女");
                       }
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
                               $("#age").html(year);
                           } else if (year == 0) {
                               var month = dates.getMonth() - a1;
                               if (month > 0) {
                                   $("#age").html(month);
                               } else if (month == 0) {
                                   var day = dates.getDay() - a2;
                                   if (day > 0) {
                                       $("#age").html(day);
                                   }
                               }
                           }
                       }
                       if (dts[0].community_code.length == "") {
                           $("#address").html(dts[0].permanent_address);
                       }
                       else {
                           $.post("/Data/ProvinceName?code=" + dts[0].community_code.substring(0, 2),
                   function (data1) {
                       $.post("/Data/CityName?code=" + dts[0].community_code.substring(0, 4),
                   function (data2) {
                       $.post("/Data/CountyName?code=" + dts[0].community_code.substring(0, 6),
                   function (data3) {
                       $.post("/Data/StreetName?code=" + dts[0].community_code.substring(0, 9),
                  function (data4) {
                      $.post("/Data/CommunityName?code=" + dts[0].community_code.substring(0, 12),
                  function (data5) {
                      $("#address").html(data1 + data2 + data3 + data4 + data5 + dts[0].permanent_address);
                  })
                  })
                   })
                   })
                   })
                       }

                       if (dts[0].outpatient_date != "" && dts[0].outpatient_date != null) {
                           var date = new Date(parseInt(dts[0].outpatient_date.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                           //var a = dts[0].outpatient_date.split('/');
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
                           $("#time").html(date.getFullYear() + '年' + a1 + '月' + a2 + '日');
                       }

                       if (dts[0].id_card_number != "" && dts[0].id_card_number != null) {
                           $.post("/Data/BasicInformation?id_card_number=" + dts[0].id_card_number,
                           function (data) {
                               dats = eval(data);
                               if (dats != "") {
                                   if (dats[0].drug_allergy_type != "" && dats[0].drug_allergy_other != "") {
                                       if (dats[0].drug_allergy_type != "") {
                                           if (dats[0].drug_allergy_type.Equals("1")) {
                                               $("#gms").html("细胞色素C过敏");
                                           }
                                           else if (dats[0].drug_allergy_type.Equals("2")) {
                                               $("#gms").html("青霉素过敏");
                                           }
                                           else if (dats[0].drug_allergy_type.Equals("3")) {
                                               $("#gms").html("磺胺过敏");
                                           }
                                           else if (dats[0].drug_allergy_type.Equals("4")) {
                                               $("#gms").html("链霉素过敏");
                                           }
                                           else if (dats[0].drug_allergy_type.Equals("5")) {
                                               $("#gms").html("碘过敏");
                                           }
                                           else if (dats[0].drug_allergy_type.Equals("6")) {
                                               $("#gms").html("普鲁卡因过敏");
                                           }
                                           else {
                                               $("#gms").html("无");
                                           }
                                       }
                                       if (dats[0].drug_allergy_other != "" && dats[0].drug_allergy_other != null) {
                                           $("#gms").html(dats[0].drug_allergy_other);
                                       }
                                   } else {
                                       $("#gms").html("未知");
                                   }

                                   $.post("/Data/Share_DataGetName?code=" + dats[0].marital_status + "&type=" + "marriage_state",
                                    function (data) {
                                        if (data != "") {
                                            $("#hy").html(data);
                                        } else {
                                            $("#hy").html("未知");
                                        }
                                    })

                                   $.post("/Data/Share_DataGetName?code=" + dats[0].occupation_situation + "&type=" + "occupation_state",
                                    function (data) {
                                        if (data != "") {
                                            $("#zy").html(data);
                                        } else {
                                            $("#zy").html("未知");
                                        }
                                    })
                               } else {
                                   $("#gms").html("未知");
                                   $("#hy").html("未知");
                                   $("#zy").html("未知");
                               }
                           })
                       } else {
                           $("#hy").html("未知");
                           $("#gms").html("未知");
                       }
                       //---------------------------------------------------------------------------基础情况---------------------------------------------------------------------------------

                       $("#zs").html("<a style='padding-left:4em'></a>" + dts[0].zs);
                       $("#xbs").html("<a style='padding-left:4em'></a>" + dts[0].xbs);
                       $("#tgjc").html("<a style='padding-left:4em'></a>" + "体温：" + dts[0].t + "℃<a style='padding-left:2em'></a>" + "脉搏：" + dts[0].p + "次/分钟<a style='padding-left:2em'></a>" + "呼吸：" + dts[0].r + "次/分钟<a style='padding-left:2em'></a>" + "血压：" + dts[0].ssy1 + "/" + dts[0].szy1 + "mmHg" + "(" + dts[0].ssy2 + "/" + dts[0].szy2 + "kPa" + ")");
                       if (dts[0].other != "") {
                           $("#Td1").html("<a style='padding-left:4em'></a>" + dts[0].other);
                       }
                       else {
                           $("#tr1").hide();
                       }

                       if (dts[0].orders != "" && dts[0].orders != null) {
                           $("#Td4").html("<a style='padding-left:4em'></a>" + dts[0].orders);
                       } else {
                           $("#tr4").hide();
                       }

                       $.post("/MedicalHistory_Outpatient/ShowAccessoryExamination?contact_id=" + id,
              function (data) {
                  dat = eval(data);
                  if (dat != "") {
                      for (i = 1; i <= dat.length; i++) {
                          $("#Td2").append("<a style='padding-left:4em'></a>" + i + "、" + dat[i - 1].context);
                      }
                  }
              })

                       $.post("/MedicalHistory_Outpatient/ShowJudge?contact_id=" + id,
              function (data) {
                  dat = eval(data);
                  if (dat != "") {
                      for (i = 1; i <= dat.length; i++) {
                          $("#Td3").append("<a style='padding-left:4em'></a>" + i + "、" + dat[i - 1].context);
                      }
                  }

              })


                       $.post("/MedicalHistory_Outpatient/ShowPrescription?contact_id=" + id,
              function (data) {
                  dat = eval(data);
                  if (dat != "") {
                      for (c = 0; c < dat.length; c++) {
                          var usages = "";
                          if (dat[c].medical_usage != "") {

                              if (dat[c].medical_usage == "1") {
                                  usages = "口服";
                              }
                              else if (dat[c].medical_usage == "2") {
                                  usages = "外用";
                              }
                              else if (dat[c].medical_usage == "3") {
                                  usages = "静脉注射";
                              }
                              else if (dat[c].medical_usage == "4") {
                                  usages = "肌肉注射";
                              }
                              else if (dat[c].medical_usage == "5") {
                                  usages = "皮下注射";
                              }
                              else if (dat[c].medical_usage == "6") {
                                  usages = "皮内注射";
                              }
                          }
                          var changes = "";
                          if (dat[c].medical_frequency != "" && dat[c].medical_frequency != null) {
                              if (dat[c].medical_frequency == "Qd") {
                                  changes = "一日一次";
                              } else if (dat[c].medical_frequency == "Bid") {
                                  changes = "一日两次";
                              } else if (dat[c].medical_frequency == "Tid") {
                                  changes = "一日三次";
                              } else if (dat[c].medical_frequency == "Qid") {
                                  changes = "一日四次";
                              } else if (dat[c].medical_frequency == "Q2h") {
                                  changes = "每两小时一次";
                              } else if (dat[c].medical_frequency == "Q8h") {
                                  changes = "每八小时一次";
                              } else if (dat[c].medical_frequency == "Qn") {
                                  changes = "每晚睡前一次";
                              } else if (dat[c].medical_frequency == "Qod") {
                                  changes = "隔日一次";
                              } else if (dat[c].medical_frequency == "Qw") {
                                  changes = "每周一次";
                              } else if (dat[c].medical_frequency == "Biw") {
                                  changes = "两周一次";
                              }
                          }
                          $("#Td5").append("<tr><td>" + (c + 1) + "、" + "</td><td>" + dat[c].medical_name + "（" + dat[c].medical_specifications + "）* " + dat[c].medical_total + dat[c].medical_unit + "</td></tr><tr><td colspan=2>" + usages + "，" + changes + "，每次" + dat[c].medical_dosage + dat[c].medical_min_unit + "</td>");
                          var prices = "";

                          if (dat[c].medical_price == "" || dat[c].medical_price == null || dat[c].medical_total == "" || dat[c].medical_total == null) {
                              prices = 0;
                          } else {
                              prices = parseFloat(dat[c].medical_price) * parseFloat(dat[c].medical_total).toFixed(2);
                          }
                          prices += prices;
                      }

                      if (dat[0].medical_price == "" || dat[0].medical_total == "" || dat[0].medical_price == null || dat[0].medical_total == null) {
                          totals = parseFloat(prices).toFixed(2);
                          $("#Td6").html("<a style='padding-left:4em'></a>" + totals + "元");
                      } else {
                          totals = parseFloat(parseFloat(dat[0].medical_price) * parseFloat(dat[0].medical_total) + parseFloat(prices)).toFixed(2);
                          $("#Td6").html("<a style='padding-left:4em'></a>" + totals + "元");
                      }

                  } else {
                      if (dat[0].medical_price == "" || dat[0].medical_total == "" || dat[0].medical_price == null || dat[0].medical_total == null) {
                          $("#Td6").html("<a style='padding-left:4em'></a>0元");
                      } else {
                          $("#Td6").html("<a style='padding-left:4em'></a>" + parseFloat(dat[0].medical_price) * parseFloat(dat[0].medical_total) + "元");
                      }

                  }
              })


                   }
               })
})