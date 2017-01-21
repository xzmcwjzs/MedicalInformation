$(function () {
    //========================================================手术字典============================================================================
    $("#name1,#name2,#name3,#name4,#name5").autocomplete('/MedicalHistory_OperationRecord/Handler', {
        multiple: false,   //是否允许搜索框追加
        multipleSeparator: '，',  //搜索框追加后缀格式 如：搜索值1,搜索值2
        max: 50,
        width: 800,
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
    //=======================================================================疾病字典============================================================================
    function log1(event, data, formatted) {
        $("#numb1").val(data.code);
    }
    function log2(event, data, formatted) {
        $("#numb2").val(data.code);
    }
    function log3(event, data, formatted) {
        $("#numb3").val(data.code);
    }
    function log4(event, data, formatted) {
        $("#numb4").val(data.code);
    }
    function log5(event, data, formatted) {
        $("#numb5").val(data.code);
    }
    function log6(event, data, formatted) {
        $("#numb1").val(data.code);
    }
    function log7(event, data, formatted) {
        $("#numb2").val(data.code);
    }
    function log8(event, data, formatted) {
        $("#numb3").val(data.code);
    }
    function log9(event, data, formatted) {
        $("#numb4").val(data.code);
    }
    function log10(event, data, formatted) {
        $("#numb5").val(data.code);
    }


    $("#bj1,#bj2,#bj3,#bj4,#bj5,#mj1,#mj2,#mj3,#mj4,#mj5").autocomplete('/MedicalHistory_OperationRecord/Handler5', {
        multiple: false,   //是否允许搜索框追加
        multipleSeparator: '，',  //搜索框追加后缀格式 如：搜索值1,搜索值2
        max: 50,
        width: 800,
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
    $("#bj1").result(log1).click(function () {
        $(this).prev().search();
    });
    $("#bj2").result(log2).click(function () {
        $(this).prev().search();
    });
    $("#bj3").result(log3).click(function () {
        $(this).prev().search();
    });
    $("#bj4").result(log4).click(function () {
        $(this).prev().search();
    });
    $("#bj5").result(log5).click(function () {
        $(this).prev().search();
    });
    $("#mj1").result(log6).click(function () {
        $(this).prev().search();
    });
    $("#mj2").result(log7).click(function () {
        $(this).prev().search();
    });
    $("#mj3").result(log8).click(function () {
        $(this).prev().search();
    });
    $("#mj4").result(log9).click(function () {
        $(this).prev().search();
    });
    $("#mj5").result(log10).click(function () {
        $(this).prev().search();
    });
    //========================================================打开显示修改======================================================================================
    $.post("/MedicalHistory_OperationRecord/Handler3?id=" + id,
               function (data) {
                   dts = eval(data);
                   if (dts != "") {
                       $("#name").val(dts[0].names);
                       $("input[name=" + "sex" + "][value=" + dts[0].sex + "]").attr("checked", "checked");
                       $("#id_card_number").val(dts[0].id_card_number);
                       var s = dts[0].id_card_number;
                       if (dts[0].birth_date != "") {
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
                           $("#birth_date").val(date.getFullYear()+ "-" + a1 + "-" + a2);
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
                       var HomeCommunityCode = dts[0].community_code;

                       if (HomeCommunityCode != "") {
                           $("#ddlProvince").val(HomeCommunityCode.substring(0, 2));
                           //-----市-----
                           $.post("/Data/City?code=" + HomeCommunityCode.substring(0, 2),
                            function (datas) {
                                dat1 = eval(datas);
                                $("#ddlCity").empty();
                                $("#ddlCity").append("<option value=" + "" + ">=请选择=</option>");
                                if (dat1 != "") {
                                    for (var i = 0; i < dat1.length; i++) {
                                        $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                    }
                                    $("#ddlCity").val(HomeCommunityCode.substring(0, 4));
                                }
                            })

                           //-----区/县-----
                           $.post("/Data/County?code=" + HomeCommunityCode.substring(0, 4),
                            function (datas) {
                                dat1 = eval(datas);
                                $("#ddlCounty").empty();
                                $("#ddlCounty").append("<option value=" + "" + ">=请选择=</option>");
                                if (dat1 != "") {
                                    for (var i = 0; i < dat1.length; i++) {
                                        $("#ddlCounty").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                    }
                                    $("#ddlCounty").val(HomeCommunityCode.substring(0, 6));
                                }
                            })

                           //-----镇/街道-----
                           $.post("/Data/Street?code=" + HomeCommunityCode.substring(0, 6),
                            function (datas) {
                                dat1 = eval(datas);
                                $("#ddlStreet").empty();
                                $("#ddlStreet").append("<option value=" + "" + ">=请选择=</option>");
                                if (dat1 != "") {
                                    for (var i = 0; i < dat1.length; i++) {
                                        $("#ddlStreet").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                    }
                                    $("#ddlStreet").val(HomeCommunityCode.substring(0, 9));
                                }
                            })

                           //-----村/社区-----
                           $.post("/Data/Community?code=" + HomeCommunityCode.substring(0, 9),
                            function (datas) {
                                dat1 = eval(datas);
                                $("#ddlCommunity").empty();
                                $("#ddlCommunity").append("<option value=" + "" + ">=请选择=</option>");
                                if (dat1 != "") {
                                    for (var i = 0; i < dat1.length; i++) {
                                        $("#ddlCommunity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                                    }
                                    $("#ddlCommunity").val(HomeCommunityCode);
                                }
                            })
                       }

                       $("#perment_community_address").val(dts[0].address);
                       $("#phone").val(dts[0].phone);
                       $("#resident_id").val(dts[0].resident_id);

                       $("#name1").val(dts[0].diag_name1);
                       if (dts[0].data1 != "" && dts[0].data1 != null) {
                           var date = new Date(parseInt(dts[0].data1.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].data1.split('/');
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
                           $("#time1").val(date.getFullYear()+ '-' + a1 + '-' + a2);
                       }

                       $("#numb1").val(dts[0].numb1);
                       $("#bj1").val(dts[0].diag_bj1);
                       $("#mj1").val(dts[0].diag_mj1);
                       $("#doctor1").val(dts[0].doctor1);

                       if (dts[0].data2 != "" && dts[0].data2 != null) {
                           var date = new Date(parseInt(dts[0].data2.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].data2.split('/');
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
                           $("#time2").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }

                       $("#name2").val(dts[0].diag_name2);
                       $("#numb2").val(dts[0].numb2);
                       $("#bj2").val(dts[0].diag_bj2);
                       $("#mj2").val(dts[0].diag_mj2);
                       $("#doctor2").val(dts[0].doctor2);


                       if (dts[0].data3 != "" && dts[0].data3 != null) {
                           var date = new Date(parseInt(dts[0].data3.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].data3.split('/');
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
                           $("#time3").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }

                       $("#name3").val(dts[0].diag_name3);
                       $("#numb3").val(dts[0].numb3);
                       $("#bj3").val(dts[0].diag_bj3);
                       $("#mj3").val(dts[0].diag_mj3);
                       $("#doctor3").val(dts[0].doctor3);

                       if (dts[0].data4 != "" && dts[0].data4 != null) {
                           var date = new Date(parseInt(dts[0].data4.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].data4.split('/');
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
                           $("#time4").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }

                       $("#name4").val(dts[0].diag_name4);
                       $("#numb4").val(dts[0].numb4);
                       $("#bj4").val(dts[0].diag_bj4);
                       $("#mj4").val(dts[0].diag_mj4);
                       $("#doctor4").val(dts[0].doctor4);

                       if (dts[0].data5 != "" && dts[0].data5 != null) {
                           var date = new Date(parseInt(dts[0].data5.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].data5.split('/');
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
                           $("#time5").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }

                       $("#name5").val(dts[0].diag_name5);
                       $("#numb5").val(dts[0].numb5);
                       $("#bj5").val(dts[0].diag_bj5);
                       $("#mj5").val(dts[0].diag_mj5);
                       $("#doctor5").val(dts[0].doctor5);
                   }
               });
    $.post("/MedicalHistory_OperationRecord/Handler4?id=" + id,
      function (datas) {
          dats = eval(datas);
          if (dats != "") {
              for (i = 1; i <= dats.length; i++) {
                  $("#tab").append('<tr style="height: 30px;">' +
                    '<td class="auto-style184">' + (5 + i) + '</td>' +
                    '<td class="auto-style185">' +
                        '<input type="text" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + '   })" style="width: 80px; height: 20px;" id="time_' + i + '" name="time_' + i + '" />' +
                    '</td>' +
                      '<td class="auto-style186">' +
                       '<span class="ui-widget">' +
                            '<input type="text" id="bj_' + i + '" name="bj_' + i + '" style="width: 200px; height: 20px;" />' +
                       ' </span>' +
                   ' </td>' +
                   ' <td class="auto-style195">' +
                     '   <input type="text" id="mj_' + i + '" name="mj_' + i + '" style="height: 20px; width: 200px;" />' +
                    '</td>' +
                   ' <td class="auto-style188">' +
                  '  <input type="text" id="name_' + i + '" name="name_' + i + '" style="height: 20px; width: 150px;" />' +
                   ' </td>' +

                    '<td class="auto-style191">' +
                    '    <input type="text" id="numb_' + i + '" name="numb_' + i + '" style="height: 20px;width: 60px;" />' +
                   ' </td>' +
                   '<td class="auto-style191">' +
                        '<input type="text" id="doctor_" name="doctor_" style="height: 20px;width:80px" />' +
                    '</td>' +
                '</tr>');
                  if (dats[i - 1].data != "" && dats[i - 1].data != null) {
                      var date = new Date(parseInt(dats[i - 1].data.replace("/Date(", "").replace(")/", ""), 10));
                      var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                      var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                      $('#time_' + i + '').val(date.getFullYear()+ '-' + a1+ '-' + a2);

                      //var a6 = dats[i - 1].data.split('/');
                      //$('#time_' + i + '').val(a6[0] + '-' + a6[1] + '-' + a6[2].split(' ')[0]);

                  }
                  $('#name_' + i + '').val(dats[i - 1].diag_name);
                  $('#numb_' + i + '').val(dats[i - 1].numb);
                  $('#doctor_' + i + '').val(dats[i - 1].doctor);
                  $('#bj_' + i + '').val(dats[i - 1].diag_bj);
                  $('#mj_' + i + '').val(dats[i - 1].diag_mj);


                  //----------------------添加事件------------------------------------------

                  $('#name_' + i + '').autocomplete('/MedicalHistory_OperationRecord/Handler', {
                      multiple: false,   //是否允许搜索框追加
                      multipleSeparator: '，',  //搜索框追加后缀格式 如：搜索值1,搜索值2
                      max: 50,
                      width: 800,
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



                  //=======================疾病名称==============================
                  function log(event, data, formatted) {
                      $('#numb_' + (i - 1) + '').val(data.code);
                  }
                  function log1(event, data, formatted) {
                      $('#numb_' + (i - 1) + '').val(data.code);
                  }
                  $('#bj_' + i + ',#mj_' + i + '').autocomplete('/MedicalHistory_OperationRecordHandler5', {
                      multiple: false,   //是否允许搜索框追加
                      multipleSeparator: '，',  //搜索框追加后缀格式 如：搜索值1,搜索值2
                      max: 50,
                      width: 800,
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
                  $('#bj_' + i + '').result(log).click(function () {
                      $(this).prev().search();
                  });
                  $('#mj_' + i + '').result(log1).click(function () {
                      $(this).prev().search();
                  });
              }
          }
      });


    $("#bt1").click(function () {
        if ($("#name").val() == "") {
            alert("姓名不能为空！")
        }
        else if ($("#id_card_number").val() == "") {
            alert("身份证号码不能为空！")
        }
        else if ($("#ddlCommunity").val() == "") {
            alert("常住地址必须填写到社区、村或者居委会！")
        }
        else if ($("#phone").val() == "") {
            alert("手机号码不能为空！")
        }
        else {
            $("#bt1").attr("disabled", "disabled");
            $.post("/MedicalHistory_OperationRecord/AddAndUpdate?id=" + id + "&worker=" + worker + "&community_code=" + community_code,
                $("#form1").serialize(),
                function (msgs) {
                    var msg = msgs.split(',');
                    alert(msg[0]);
                    window.location.href = '/MedicalHistory_OperationRecord/Detail?id=' + msg[1];
                })
        }
    })
})

//=====================================================================增加一行=================================================================================
var i = 1;
function added() {
    if ($("#bj1").val() != "" && $("#bj2").val() != "" && $("#bj3").val() != "" && $("#bj4").val() != "" && $("#bj5").val() != "" && $('#bj_' + (i - 1) + '').val() != "") {
        if (i < 100) {
            $("#tab").append('<tr style="height: 30px;">' +
                        '<td class="auto-style184">' + (5 + i) + '</td>' +
                        '<td class="auto-style185">' +
                            '<input type="text" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + '   })" style="width: 80px; height: 20px;" id="time_' + i + '" name="time_' + i + '" />' +
                        '</td>' +
                          '<td class="auto-style186">' +
                           '<span class="ui-widget">' +
                                '<input type="text" id="bj_' + i + '" name="bj_' + i + '" style="width: 200px; height: 20px;" />' +
                           ' </span>' +
                       ' </td>' +
                       ' <td class="auto-style195">' +
                         '   <input type="text" id="mj_' + i + '" name="mj_' + i + '" style="height: 20px; width: 200px;" />' +
                        '</td>' +
                       ' <td class="auto-style188">' +
                      '  <input type="text" id="name_' + i + '" name="name_' + i + '" style="height: 20px; width: 150px;" />' +
                       ' </td>' +

                        '<td class="auto-style191">' +
                        '    <input type="text" id="numb_' + i + '" name="numb_' + i + '" style="height: 20px;width: 60px;" />' +
                       ' </td>' +
                       '<td class="auto-style191">' +
                            '<input type="text" id="doctor_" name="doctor_" style="height: 20px;width:80px" />' +
                        '</td>' +
                    '</tr>');
            //===========================================自动匹配=============================================

            $('#name_' + i + '').autocomplete('Handler', {
                multiple: false,   //是否允许搜索框追加
                multipleSeparator: '，',  //搜索框追加后缀格式 如：搜索值1,搜索值2
                max: 50,
                width: 800,
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

            //======================疾病名称==============================
            function logs(event, data, formatted) {
                $('#numb_' + (i - 1) + '').val(data.code);
            }
            function logs1(event, data, formatted) {
                $('#numb_' + (i - 1) + '').val(data.code);
            }

            $('#bj_' + i + ',#mj_' + i + '').autocomplete('Handler5', {
                multiple: false,   //是否允许搜索框追加
                multipleSeparator: '，',  //搜索框追加后缀格式 如：搜索值1,搜索值2
                max: 50,
                width: 800,
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
            $('#bj_' + i + '').result(logs).click(function () {
                $(this).prev().search();
            });
            $('#mj_' + i + '').result(logs1).click(function () {
                $(this).prev().search();
            });
            i++;
        }
    } else {
        alert("请填写上一行内容！");
    }
}

