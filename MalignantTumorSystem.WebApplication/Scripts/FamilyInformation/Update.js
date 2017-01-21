$(function () {
    $.post("/FamilyInformation/Show?id=" + id,
           function (data) {
               dat = eval(data);
               if (dat != "" && dat != null) {
                   $("#host_name").val(dat[0].host_name);
                   $("input[name=" + "sex" + "][value=" + dat[0].sex + "]").attr("checked", "checked");
                   $("#id_card_number").val(dat[0].id_card_number);
                   //$("#id_card_number").attr("readonly", "readonly");
                   var s = dat[0].id_card_number;

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

                   // var home_address = dat[0].permanent_home_address;
                   //家庭常住住址-------------------------------------------------------------------------------------------------------------------------
                   if (dat[0].perment_community_code != "") {
                       var code1 = dat[0].perment_community_code;
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
                       $("#perment_community_address").val(dat[0].address);
                   }

                   $("#phone").val(dat[0].phone);
                   $("#post_code").val(dat[0].post_code);
                   $("#resident_id").val(dat[0].resident_id);
                   $("#input_person").val(dat[0].worker_user_name);

                   if (dat[0].create_time != "" && dat[0].create_time != null) {
                       var date = new Date(parseInt(dat[0].create_time.replace("/Date(", "").replace(")/", ""), 10));
                       var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                       var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                       //var a = dat[0].create_time.split('/');
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
                       $("#createTime").val(date.getFullYear() + '-' + a1 + '-' + a2);
                   }

                   $("#spouse_name").val(dat[0].spouse_name);
                   $("#spouse_idCard").val(dat[0].spouse_id_card_number);
                   $("#spouse_phone").val(dat[0].spouse_phone);

                   if (dat[0].spouse_birth_date != "" && dat[0].spouse_birth_date != null) {
                       //var a = dat[0].spouse_birth_date.split('/');
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
                       var date = new Date(parseInt(dat[0].spouse_birth_date.replace("/Date(", "").replace(")/", ""), 10));
                       var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                       var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                       var dates = new Date();
                       var year = dates.getFullYear() - date.getFullYear();
                       if (year > 0) {
                           $("#spouse_age").val(year + "岁");
                       } else if (year == 0) {
                           var month = dates.getMonth() - a1;
                           if (month > 0) {
                               $("#spouse_age").val(month + "月");
                           } else if (month == 0) {
                               var day = dates.getDay() - a2;
                               if (day > 0) {
                                   $("#spouse_age").val(day + "天");
                               }
                           }
                       }
                   }
                   $("#hostFather_name").val(dat[0].hostFather_name);
                   $("#hostFather_idCard").val(dat[0].hostFather_id_card_number);
                   $("#hostFather_phone").val(dat[0].hostFather_phone);
                   //$("#hostFather_beizhu").val(dat[0].hostFather_birth_date);
                   if (dat[0].hostFather_birth_date != "" && dat[0].hostFather_birth_date != null) {
                       //var a = dat[0].hostfather_birth_date.split('/');
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
                       var date = new Date(parseInt(dat[0].hostFather_birth_date.replace("/Date(", "").replace(")/", ""), 10));
                       var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                       var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                       var dates = new Date();
                       var year = dates.getFullYear() - date.getFullYear();
                       if (year > 0) {
                           $("#hostFather_age").val(year + "岁");
                       } else if (year == 0) {
                           var month = dates.getMonth() - a1;
                           if (month > 0) {
                               $("#hostFather_age").val(month + "月");
                           } else if (month == 0) {
                               var day = dates.getDay() - a2;
                               if (day > 0) {
                                   $("#hostFather_age").val(day + "天");
                               }
                           }
                       }
                   }
                   $("#hostMother_name").val(dat[0].hostMother_name);
                   $("#hostMother_idCard").val(dat[0].hostMother_id_card_number);
                   $("#hostMother_phone").val(dat[0].hostMother_phone);
                   //$("#hostMother_beizhu").val(dat[0].hostMother_birth_date);
                   if (dat[0].hostMother_birth_date != "" && dat[0].hostMother_birth_date != null) {
                       //var a = dat[0].hostmother_birth_date.split('/');
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
                       var date = new Date(parseInt(dat[0].hostMother_birth_date.replace("/Date(", "").replace(")/", ""), 10));
                       var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                       var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                       var dates = new Date();
                       var year = dates.getFullYear() - date.getFullYear();
                       if (year > 0) {
                           $("#hostMother_age").val(year + "岁");
                       } else if (year == 0) {
                           var month = dates.getMonth() - a1;
                           if (month > 0) {
                               $("#hostMother_age").val(month + "月");
                           } else if (month == 0) {
                               var day = dates.getDay() - a2;
                               if (day > 0) {
                                   $("#hostMother_age").val(day + "天");
                               }
                           }
                       }
                   }

                   if (dat[0].relation != "" && dat[0].relation != null) {
                       $("#relation_names0").attr("disabled", false);
                       $("#relation_id_card0").attr("disabled", false);
                       $("#relation_phone0").attr("disabled", false);
                       $("#relation_age0").attr("disabled", false);
                       if (dat[0].relation == "1") {
                           $("#relation0").val("长子");
                       }
                       else if (dat[0].relation == "2") {
                           $("#relation0").val("长女");
                       }
                       else if (dat[0].relation == "3") {
                           $("#relation0").val("次子");
                       }
                       else if (dat[0].relation == "4") {
                           $("#relation0").val("次女");
                       }
                       else if (dat[0].relation == "5") {
                           $("#relation0").val("三子");
                       }
                       else if (dat[0].relation == "6") {
                           $("#relation0").val("三女");
                       } else {
                           $("#relation0").val(dat[0].relation);
                       }

                       $("#relation_names0").val(dat[0].relation_name);
                       $("#relation_id_card0").val(dat[0].relation_id_card);
                       $("#relation_phone0").val(dat[0].relation_phone);
                       //$("#relation_age0").val(dat[0]);
                       if (dat[0].relation_birth_date != "" && dat[0].relation_birth_date != null) {
                           //var a = dat[0].relation_birth_date.split('/');
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
                           var date = new Date(parseInt(dat[0].relation_birth_date.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                           var dates = new Date();
                           var year = dates.getFullYear() - date.getFullYear();
                           if (year > 0) {
                               $("#relation_age0").val(year + "岁");
                           } else if (year == 0) {
                               var month = dates.getMonth() - a1;
                               if (month > 0) {
                                   $("#relation_age0").val(month + "月");
                               } else if (month == 0) {
                                   var day = dates.getDay() - a2;
                                   if (day > 0) {
                                       $("#relation_age0").val(day + "天");
                                   }
                               }
                           }
                       }
                   }
                   $.post("/FamilyInformation/ShowAdd?id=" + id,
                     function (datas) {
                         dat = eval(datas);
                         if (dat != "") {
                             for (i = 1; i <= (dat.length + 1) ; i++) {
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

                                 //                 $('#tr' + i + '').after('<tr id="tr' + (i + 1) + '">' +
                                 //    '<td class="auto-style100">户主的<select id="relation' + i + '" name="relation' + i + '" style="height: 20px; width: 60px;" onchange="added()">' +
                                 //                '<option value="">请选择</option>' +
                                 //                '<option value="1">长子</option>' +
                                 //                '<option value="2">长女</option>' +
                                 //                '<option value="3">次子</option>' +
                                 //                '<option value="4">次女</option>' +
                                 //                '<option value="5">三子</option>' +
                                 //                '<option value="6">三女</option>' +
                                 //            '</select>姓名' +
                                 //'</td>' +
                                 //'<td class="auto-style36"><input type="text" id="relation_names' + i + '" name="relation_names' + i + '" style="height: 18px; padding-top: 2px;padding-left:1px; width: 100px;" />' +
                                 //'</td>' +
                                 //'<td class="auto-style68"></td>' +
                                 //'<td class="auto-style72"></td>' +
                                 //'<td class="auto-style119">身份证号码</td>' +
                                 //'<td class="auto-style40">' +
                                 //    '<input type="text" id="relation_id_card' + i + '" style="padding-top: 2px; height: 18px; width: 140px;"name="relation_id_card' + i + '"/>' +
                                 //'</td>' +
                                 //'<td class="auto-style119">手机号码</td>' +
                                 //'<td class="auto-style40">' +
                                 //    '<input type="text" id="relation_phone' + i + '" style="padding-top: 2px; height: 18px; width: 110px" name="relation_phone' + i + '"/>' +
                                 //'</td>' +
                                 //'<td class="auto-style118">年龄</td>' +
                                 //'<td class="auto-style1">' +
                                 //    '<input type="text" id="relation_birth_date' + i + '" style="padding-top: 2px;display:none" name="relation_birth_date' + i + '"/>' +
                                 //    '<input type="text" id="relation_age' + i + '" style="padding-top: 2px; height: 18px; width: 80px;" name="relation_age' + i + '" readonly="readonly"/>' +
                                 //'</td>' +
                                 //'</tr>');

                                 //=====================================显示信息===================================

                                 if (i <= dat.length) {
                                     $('#relation_names' + i + '').attr("disabled", false);
                                     $('#relation_id_card' + i + '').attr("disabled", false);
                                     $('#relation_phone' + i + '').attr("disabled", false);
                                     $('#relation_age' + i + '').attr("disabled", false);
                                 } else {
                                     $('#relation_names' + i + '').attr("disabled", true);
                                     $('#relation_id_card' + i + '').attr("disabled", true);
                                     $('#relation_phone' + i + '').attr("disabled", true);
                                     $('#relation_age' + i + '').attr("disabled", true);
                                 }

                                 if (i <= dat.length) {

                                     if (dat[i - 1].relation == "1") {
                                         $('#relation' + i + '').val("长子");
                                     }
                                     else if (dat[i - 1].relation == "2") {
                                         $('#relation' + i + '').val("长女");
                                     }
                                     else if (dat[i - 1].relation == "3") {
                                         $('#relation' + i + '').val("次子");
                                     }
                                     else if (dat[i - 1].relation == "4") {
                                         $('#relation' + i + '').val("次女");
                                     }
                                     else if (dat[i - 1].relation == "5") {
                                         $('#relation' + i + '').val("三子");
                                     }
                                     else if (dat[i - 1].relation == "6") {
                                         $('#relation' + i + '').val("三女");
                                     }
                                     else {
                                         $('#relation' + i + '').val(dat[i - 1].relation);
                                     }

                                     $('#relation_names' + i + '').val(dat[i - 1].name);
                                     $('#relation_id_card' + i + '').val(dat[i - 1].id_card_number);
                                     $('#relation_phone' + i + '').val(dat[i - 1].phone);
                                     $('#relation_age' + i + '').val(dat[i - 1].birth_date);
                                     if (dat[i - 1].birth_date != "") {
                                         //var a = dat[i - 1].birth_date.split('/');
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
                                         var date = new Date(parseInt(dat[i - 1].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                                         var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                                         var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                                         var dates = new Date();
                                         var year = dates.getFullYear() - date.getFullYear();
                                         if (year > 0) {
                                             $('#relation_age' + i + '').val(year + "岁");
                                         } else if (year == 0) {
                                             var month = dates.getMonth() - a1;
                                             if (month > 0) {
                                                 $('#relation_age' + i + '').val(month + "月");
                                             } else if (month == 0) {
                                                 var day = dates.getDay() - a2;
                                                 if (day > 0) {
                                                     $('#relation_age' + i + '').val(day + "天");
                                                 }
                                             }
                                         }
                                     }
                                 }


                             }

                         }
                     })
               }
           })
})