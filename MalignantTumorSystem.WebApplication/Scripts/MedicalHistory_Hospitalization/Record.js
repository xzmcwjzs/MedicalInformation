$(function () {
    $.post("/MedicalHistory_Hospitalization/Show?id=" + id,
               function (data) {
                  // var tt = data.replace(/\r\n/ig, "");
                  // dts = eval(tt);
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
                       if (dts[0].community_code == "" || dts[0].community_code == null) {
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

                       if (dts[0].hospitalization_date != "" && dts[0].hospitalization_date != null) {
                           //var a = dts[0].hospitalization_date.split('/');
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
                           var date = new Date(parseInt(dts[0].hospitalization_date.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                           $("#time").html(date.getFullYear()+ '年' + a1 + '月' + a2 + '日');
                       }

                       if (dts[0].id_card_number != "" && dts[0].id_card_number != null) {
                           $.post("/Data/BasicInformation?id_card_number=" + dts[0].id_card_number,
                           function (data) {
                               dats = eval(data);
                               if (dats != "") {
                                   if (dats[0].drug_allergy_type != "" && dats[0].drug_allergy_other != "" && dats[0].drug_allergy_type != null && dats[0].drug_allergy_other != null) {
                                       if (dats[0].drug_allergy_type != "" && dats[0].drug_allergy_type != null) {
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
                                       if (dats[0].drug_allergy_other != "") {
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
                       var numbers = "";
                       if (dts[0].bed_number != "" && dts[0].bed_number != null) {
                           numbers = dts[0].bed_number;
                       }
                       else {
                           numbers = "";
                       }
                       $("#Td3").html("住院号：" + dts[0].hospitalization_number + "<a style='padding-left:2em'></a>" + "床位号：" + numbers + "<a style='padding-left:2em'></a>" + "收治科室：" + dts[0].department);
                       $("#zs").html("<a style='padding-left:4em'></a>" + dts[0].zs);
                       $("#xbs").html("<a style='padding-left:4em'></a>" + dts[0].xbs);
                       $("#jws").html("<a style='padding-left:4em'></a>" + dts[0].jws);
                       $("#tgjc").html("<a style='padding-left:4em'></a>" + "体温：" + dts[0].t + "℃<a style='padding-left:2em'></a>" + "脉搏：" + dts[0].p + "次/分钟<a style='padding-left:2em'></a>" + "呼吸：" + dts[0].r + "次/分钟<a style='padding-left:2em'></a>" + "血压：" + dts[0].ssy1 + "/" + dts[0].szy1 + "mmHg" + "(" + dts[0].ssy2 + "/" + dts[0].szy2 + "kPa" + ")");
                       if (dts[0].other != "") {
                           $("#Td1").html("<a style='padding-left:4em'></a>" + dts[0].other);
                       }
                       else {
                           $("#tr1").hide();
                       }

                       if (dts[0].other != ""&&dts[0].other != null) {
                           $("#Td4").html("<a style='padding-left:4em'></a>" + dts[0].orders);
                       } else {
                           $("#tr4").hide();
                       }

                       $.post('/MedicalHistory_Hospitalization/ShowConsultationRecord?number=' + dts[0].hospitalization_number + "&id_card_number=" + dts[0].id_card_number,
                           function (data) {
                               dat = eval(data);
                               if (dat != "") {
                                   var s = "";
                                   if (dat[0].time != "" && dat[0].time != null) {
                                       var date = new Date(parseInt(dat[0].time.replace("/Date(", "").replace(")/", ""), 10));
                                       var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                       var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                                       //var a = dat[0].time.split('/');
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

                                      // var b = a[2].split(' ')[1].split(':');
                                       // s = a[0] + '年' + a1 + '月' + a2 + "日 " + b[0] + "点" + b[1] + "分";
                                        s = date.getFullYear() + '年' + a1 + '月' + a2 + "日 " + date.getHours() + "点" + date.getMinutes() + "分";
                                   }
                                   $("#Td5").html("<a style='padding-left:4em'></a>" + s + "<a style='padding-left:2em'></a>" + dat[0].context);
                               }
                               else {
                                   $("#Td5").html("<a style='padding-left:4em'>未填写</a>");
                               }
                           })
                       $.post('/MedicalHistory_Hospitalization/ShowCourseRecord?number=' + dts[0].hospitalization_number + "&id_card_number=" + dts[0].id_card_number,
                            function (data) {
                                dat = eval(data);
                                if (dat != "") {
                                    var s = "";
                                    if (dat[0].time != "" && dat[0].time != null) {
                                        var date = new Date(parseInt(dat[0].time.replace("/Date(", "").replace(")/", ""), 10));
                                        var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                        var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                                        //var a = dat[0].time.split('/');
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

                                        //var b = a[2].split(' ')[1].split(':');
                                        s = date.getFullYear() + '年' + a1 + '月' + a2 + "日 " + date.getHours() + "点" +date.getMinutes() + "分";
                                    }
                                    $("#Td2").html("<a style='padding-left:4em'></a>" + s + "<a style='padding-left:2em'></a>" + dat[0].context);
                                }
                                else {
                                    $("#Td2").html("<a style='padding-left:4em'>未填写</a>");
                                }
                            })



                       $.post('/MedicalHistory_Hospitalization/ShowDischargeAbstract?number=' + dts[0].hospitalization_number + "&id_card_number=" + dts[0].id_card_number,
                           function (data) {
                               dat = eval(data);
                               if (dat != "") {

                                   var s = "";
                                   if (dat[0].time != "" && dat[0].time != null) {
                                       //var a = dat[0].time.split('/');
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

                                       //var b = a[2].split(' ')[1].split(':');
                                       var date = new Date(parseInt(dat[0].time.replace("/Date(", "").replace(")/", ""), 10));
                                       var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                       var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                                       s = date.getFullYear() + '年' + a1 + '月' + a2 + "日 " + date.getHours() + "点" + date.getMinutes() + "分";
                                   }

                                   var s1 = "";
                                   if (dat[0].d_a != "" && dat[0].d_a != null) {
                                       //var a = dat[0].d_a.split('/');
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
                                       var date = new Date(parseInt(dat[0].d_a.replace("/Date(", "").replace(")/", ""), 10));
                                       var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                       var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                                       s1 = date.getFullYear() + '年' + a1 + '月' + a2 + "日";
                                   }

                                   var s2 = "";
                                   if (dat[0].c_a != "" && dat[0].c_a != null) {
                                       //var a = dat[0].c_a.split('/');
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
                                       var date = new Date(parseInt(dat[0].c_a.replace("/Date(", "").replace(")/", ""), 10));
                                       var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                       var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                                       s2 = date.getFullYear() + '年' + a1 + '月' + a2 + "日";
                                   }

                                   var s3 = "";
                                   if (dat[0].l_a != "" && dat[0].l_a != null) {
                                       //var a = dat[0].l_a.split('/');
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
                                       var date = new Date(parseInt(dat[0].l_a.replace("/Date(", "").replace(")/", ""), 10));
                                       var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                       var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                                       s3 = date.getFullYear()+ '年' + a1 + '月' + a2 + "日";
                                   }
                                   var b = "";
                                   var b1 = "";
                                   $("#Td4").html("<a style='padding-left:4em'>入院诊断：</a>" + dat[0].hospitalization_judge + "<a style='padding-left:2em'>疾病状态：</a>" + dat[0].morbid_state + "<a style='padding-left:2em'>发病日期：</a>" + s1 + "<a style='padding-left:2em'>确认日期：</a>" + s2 + "<br/><br/>" +
                                                 "<a style='padding-left:4em'>住院过程：</a>" + s + " " + dat[0].context + "<br/><br/>" + "<a style='padding-left:4em'>出院日期：</a>" + s3 + "<a style='padding-left:2em'>出院诊断：</a>" + dat[0].l_judge + "<a style='padding-left:2em'>治疗结果：</a>" + dat[0].outcome + "<br/><br/>" +
                                                 "<a style='padding-left:4em'>医嘱：</a>");
                                   $.post("/MedicalHistory_Hospitalization/ShowAdvice?contact_id=" + dat[0].id,
                                        function (data1) {
                                            dat1 = eval(data1);
                                            if (dat1 != "") {
                                                for (i = 1; i <= dat1.length; i++) {
                                                    $("#Td4").append("<br/>" + "<a style='padding-left:6em'>" + i + "</a>" + "、" + dat1[i - 1].context);
                                                }

                                            }
                                        })

                               }
                               else {
                                   $("#Td4").html("<a style='padding-left:4em'>未填写</a>");
                               }
                           })



                       $.post('/MedicalHistory_Hospitalization/ShowHospitalizationExpenses?number=' + dts[0].hospitalization_number + "&id_card_number=" + dts[0].id_card_number,
                           function (data) {
                               dat = eval(data);
                               if (dat != "") {
                                   $("#Td6").html("<a style='padding-left:4em'>住院总费用：</a>" + dat[0].total + "元" + "<a style='padding-left:2em'>出院费用付款方式：</a>" + dat[0].pay_way + "<a style='padding-left:2em'>自付费用金额：</a>" + dat[0].self_cost + "元");
                               } else {
                                   $("#Td6").html("<a style='padding-left:4em'>未填写</a>");
                               }
                           })

                   }
               })
})