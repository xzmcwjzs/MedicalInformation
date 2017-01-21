var types = 'bmc';
$(function () {

    //============================================================改变选项 加载内容====================================================================================

    $.post("/Data/DataNames?type=" + types,
 function (data1) {
     dat1 = eval(data1);
     $("#project1").empty();
     $("#project1").append("<option value=" + "" + ">==请选择==</option>");
     $("#project2").empty();
     $("#project2").append("<option value=" + "" + ">==请选择==</option>");
     $("#project3").empty();
     $("#project3").append("<option value=" + "" + ">==请选择==</option>");
     $("#project4").empty();
     $("#project4").append("<option value=" + "" + ">==请选择==</option>");
     $("#project5").empty();
     $("#project5").append("<option value=" + "" + ">==请选择==</option>");
     if (dat1 != null) {
         for (var i = 0; i < dat1.length; i++) {
             $("#project1").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
             $("#project2").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
             $("#project3").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
             $("#project4").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
             $("#project5").append("<option value=" + dat1[i].name + ">" + dat1[i].name + "</option>");
         }
     }
 });
    $("#project1").change(function () {
        if ($("#project1").val() == "有核细胞增生程度") {
            document.getElementById("d5").style.display = "none";
            document.getElementById("d6").style.display = "";
            $.post("/Data/DataResults?type=" + types,
             { Name: $('#project1').val() },
                 function (data) {
                     dat1 = eval(data);
                     $("#Select1").empty();
                     $("#Select1").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != null) {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#Select1").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                         }
                     }
                 });
            $("#Select1").change(function () {
                $.post("/Data/DataSection?type=" + types,
                    { Name: $("#Select1").val() },
                    function (datas) {
                        var s = datas.split(')');
                        $("#Text2").html(s[0] + ')' + '<br/>' + s[1]);
                    });
            })
        } else {
            document.getElementById("d5").style.display = "";
            document.getElementById("d6").style.display = "none";
        }
    })

    $("#project2").change(function () {
        if ($("#project2").val() == "有核细胞增生程度") {
            document.getElementById("Div2").style.display = "";
            document.getElementById("Div1").style.display = "none";
            $.post("/Data/DataResults?type=" + types,
                   { Name: $('#project2').val() },
                   function (data) {
                       dat1 = eval(data);
                       $("#Select2").empty();
                       $("#Select2").append("<option value=" + "" + ">==请选择==</option>");
                       if (dat1 != null) {
                           for (var i = 0; i < dat1.length; i++) {
                               $("#Select2").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                           }
                       }
                   });
            $("#Select2").change(function () {
                $.post("/Data/DataSection?type=" + types,
                    { Name: $("#Select2").val() },
                    function (datas) {
                        var s = datas.split(')');
                        $("#Text7").html(s[0] + ')' + '<br/>' + s[1]);
                    });
            })
        } else {
            document.getElementById("Div1").style.display = "";
            document.getElementById("Div2").style.display = "none";
        }
    })

    $("#project3").change(function () {
        if ($("#project3").val() == "有核细胞增生程度") {
            document.getElementById("Div4").style.display = "";
            document.getElementById("Div3").style.display = "none";
            $.post("/Data/DataResults?type=" + types,
                    { Name: $('#project3').val() },
                    function (data) {
                        dat1 = eval(data);
                        $("#Select3").empty();
                        $("#Select3").append("<option value=" + "" + ">==请选择==</option>");
                        if (dat1 != null) {
                            for (var i = 0; i < dat1.length; i++) {
                                $("#Select3").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                            }
                        }
                    });
            $("#Select3").change(function () {
                $.post("/Data/DataSection?type=" + types,
                    { Name: $("#Select3").val() },
                    function (datas) {
                        var s = datas.split(')');
                        $("#Text11").html(s[0] + ')' + '<br/>' + s[1]);
                    });
            })
        } else {
            document.getElementById("Div3").style.display = "";
            document.getElementById("Div4").style.display = "none";
        }
    })

    $("#project4").change(function () {
        if ($("#project4").val() == "有核细胞增生程度") {
            document.getElementById("Div6").style.display = "";
            document.getElementById("Div5").style.display = "none";
            $.post("/Data/DataResults?type=" + types,
                    { Name: $('#project4').val() },
                    function (data) {
                        dat1 = eval(data);
                        $("#Select4").empty();
                        $("#Select4").append("<option value=" + "" + ">==请选择==</option>");
                        if (dat1 != null) {
                            for (var i = 0; i < dat1.length; i++) {
                                $("#Select4").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                            }
                        }
                    });
            $("#Select4").change(function () {
                $.post("/Data/DataSection?type=" + types,
                    { Name: $("#Select4").val() },
                    function (datas) {
                        var s = datas.split(')');
                        $("#Text15").html(s[0] + ')' + '<br/>' + s[1]);
                    });
            })
        } else {
            document.getElementById("Div5").style.display = "";
            document.getElementById("Div6").style.display = "none";
        }
    })

    $("#project5").change(function () {
        if ($("#project5").val() == "有核细胞增生程度") {
            document.getElementById("Div8").style.display = "";
            document.getElementById("Div7").style.display = "none";
            $.post("/Data/DataResults?type=" + types,
             { Name: $('#project5').val() },
             function (data) {
                 dat1 = eval(data);
                 $("#Select5").empty();
                 $("#Select5").append("<option value=" + "" + ">==请选择==</option>");
                 if (dat1 != null) {
                     for (var i = 0; i < dat1.length; i++) {
                         $("#Select5").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                     }
                 }
             });
            $("#Select5").change(function () {
                $.post("/Data/DataSection?type=" + types,
                    { Name: $("#Select5").val() },
                    function (datas) {
                        var s = datas.split(')');
                        $("#Text19").html(s[0] + ')' + '<br/>' + s[1]);
                    });
            })
        } else {
            document.getElementById("Div7").style.display = "";
            document.getElementById("Div8").style.display = "none";
        }
    })

    //===============================================================修改内容 打开显示======================================================================
    $.post("/MedicalHistory_TestReport_BMC/Show?id=" + id,
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
               if (dts[0].community_code != "") {
                   var code1 = dts[0].community_code;
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
                   $("#perment_community_address").val(dts[0].address);
               }
               $("#phone").val(dts[0].phone);
               $("#resident_id").val(dts[0].resident_id);
               $("#numb").val(dts[0].numb);
               $("#CheckCompany").val(dts[0].check_company);
               $("#sjdoctor").val(dts[0].inspect_doctor);
               $("#jcdoctor").val(dts[0].check_doctor);
               $("#bgdoctor").val(dts[0].report_doctor);
               if (dts[0].inspect_time != "") {
                   var date = new Date(parseInt(dts[0].inspect_time.replace("/Date(", "").replace(")/", ""), 10));
                   var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                   var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                   //var a = dts[0].inspect_time.split('/');
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
                   $("#sjtime").val(date.getFullYear() + '-' + a1 + '-' + a2);
               }
               if (dts[0].report_time != "") {
                   var date = new Date(parseInt(dts[0].report_time.replace("/Date(", "").replace(")/", ""), 10));
                   var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                   var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                   //var a = dts[0].report_time.split('/');
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
                   $("#bgtime").val(date.getFullYear() + '-' + a1 + '-' + a2);
               }

               $("#project1").val(dts[0].name1);
               $("#project2").val(dts[0].name2);
               $("#project3").val(dts[0].name3);
               $("#project4").val(dts[0].name4);
               $("#project5").val(dts[0].name5);
               if (dts[0].name1 == "有核细胞增生程度") {
                   document.getElementById("d5").style.display = "none";
                   document.getElementById("d6").style.display = "";
                   $.post("/Data/DataResults?type=" + types,
                      { Name: dts[0].name1 },
                       function (data) {
                           dat1 = eval(data);
                           $("#Select1").empty();
                           $("#Select1").append("<option value=" + "" + ">==请选择==</option>");
                           if (dat1 != null) {
                               for (var i = 0; i < dat1.length; i++) {
                                   $("#Select1").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                               }
                           }
                           $("#Select1").val(dts[0].result1);
                           var s1 = dts[0].qujian1.split(')');
                           $("#Text2").html(s1[0] + ')' + '<br/>' + s1[1]);
                       });
               } else {
                   document.getElementById("d5").style.display = "";
                   $("#res1").val(dts[0].result1);
                   $("#Text2").val(dts[0].qujian1);
                   document.getElementById("d6").style.display = "none";
               }

               if (dts[0].name2 == "有核细胞增生程度") {
                   document.getElementById("Div1").style.display = "none";
                   document.getElementById("Div2").style.display = "";
                   $.post("/Data/DataResults?type=" + types,
                     { Name: dts[0].name2 },
                      function (data) {
                          dat1 = eval(data);
                          $("#Select2").empty();
                          $("#Select2").append("<option value=" + "" + ">==请选择==</option>");
                          if (dat1 != null) {
                              for (var i = 0; i < dat1.length; i++) {
                                  $("#Select2").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                              }
                          }
                          $("#Select2").val(dts[0].result2);
                          var s2 = dts[0].qujian2.split(')');
                          $("#Text7").html(s2[0] + ')' + '<br/>' + s2[1]);
                      });
               } else {
                   document.getElementById("Div1").style.display = "";
                   $("#res2").val(dts[0].result2);
                   $("#Text7").val(dts[0].qujian2);
                   document.getElementById("Div2").style.display = "none";
               }

               if (dts[0].name3 == "有核细胞增生程度") {
                   document.getElementById("Div3").style.display = "none";
                   document.getElementById("Div4").style.display = "";
                   $.post("/Data/DataResults?type=" + types,
                      { Name: dts[0].name3 },
                       function (data) {
                           dat1 = eval(data);
                           $("#Select3").empty();
                           $("#Select3").append("<option value=" + "" + ">==请选择==</option>");
                           if (dat1 != null) {
                               for (var i = 0; i < dat1.length; i++) {
                                   $("#Select3").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                               }
                           }
                           $("#Select3").val(dts[0].result3);
                           var s3 = dts[0].qujian3.split(')');
                           $("#Text11").html(s3[0] + ')' + '<br/>' + s3[1]);
                       });
               } else {
                   document.getElementById("Div3").style.display = "";
                   $("#res3").val(dts[0].result3);
                   $("#Text11").val(dts[0].qujian3);
                   document.getElementById("Div4").style.display = "none";
               }

               if (dts[0].name4 == "有核细胞增生程度") {
                   document.getElementById("Div5").style.display = "none";
                   document.getElementById("Div6").style.display = "";
                   $.post("/Data/DataResults?type=" + types,
                    { Name: dts[0].name4 },
                     function (data) {
                         dat1 = eval(data);
                         $("#Select4").empty();
                         $("#Select4").append("<option value=" + "" + ">==请选择==</option>");
                         if (dat1 != null) {
                             for (var i = 0; i < dat1.length; i++) {
                                 $("#Select4").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                             }
                         }
                         $("#Select4").val(dts[0].result4);
                         var s4 = dts[0].qujian4.split(')');
                         $("#Text15").html(s4[0] + ')' + '<br/>' + s4[1]);
                     });
               } else {
                   document.getElementById("Div5").style.display = "";
                   $("#res4").val(dts[0].result4);
                   $("#Text15").val(dts[0].qujian4);
                   document.getElementById("Div6").style.display = "none";
               }

               if (dts[0].name5 == "有核细胞增生程度") {
                   document.getElementById("Div7").style.display = "none";
                   document.getElementById("Div8").style.display = "";
                   $.post("/Data/DataResults?type=" + types,
                    { Name: dts[0].name5 },
                     function (data) {
                         dat1 = eval(data);
                         $("#Select5").empty();
                         $("#Select5").append("<option value=" + "" + ">==请选择==</option>");
                         if (dat1 != null) {
                             for (var i = 0; i < dat1.length; i++) {
                                 $("#Select5").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                             }
                         }
                         $("#Select5").val(dts[0].result5);
                         var s5 = dts[0].qujian5.split(')');
                         $("#Text19").html(s5[0] + ')' + '<br/>' + s5[1]);
                     });
               } else {
                   document.getElementById("Div7").style.display = "";
                   $("#res5").val(dts[0].result5);
                   $("#Text19").val(dts[0].qujian5);
                   document.getElementById("Div8").style.display = "none";
               }


               $("#Text1").val(dts[0].unit1);
               $("#Text2").val(dts[0].qujian1);
               $("#Text3").val(dts[0].tishi1);
               $("#Text4").val(dts[0].beizhu1);


               $("#Text6").val(dts[0].unit2);
               $("#Text7").val(dts[0].qujian2);
               $("#Text8").val(dts[0].tishi2);
               $("#Text9").val(dts[0].beizhu2);


               $("#Text10").val(dts[0].unit3);
               $("#Text11").val(dts[0].qujian3);
               $("#Text12").val(dts[0].tishi3);
               $("#Text13").val(dts[0].beizhu3);


               $("#Text14").val(dts[0].unit4);
               $("#Text15").val(dts[0].qujian4);
               $("#Text16").val(dts[0].tishi4);
               $("#Text17").val(dts[0].beizhu4);


               $("#Text18").val(dts[0].unit5);
               $("#Text19").val(dts[0].qujian5);
               $("#Text20").val(dts[0].tishi5);
               $("#Text21").val(dts[0].beizhu5);


               $.post("/MedicalHistory_TestReport_BMC/ShowAdd?id=" + id,
                 function (datas) {
                     dat = eval(datas);
                     if (dat != "") {
                         for (j = 1; j < (dat.length + 1) ; j++) {
                             $("#tab1").append('<tr style="height:30px"><td class="auto-style184">' + (5 + j) + '</td><td class="auto-style185">' +
                    '<select id="project_' + j + '" name="project_' + j + '" style="width: 180px;">' +
                        '<option value="">==请选择==</option>' +
                    '</select>' +
                '</td>' +
                '<td style="background-color:#e2ebfb">' +
                    '<div id="d_' + j + '">' +
                        '<input type="text" name="res_' + j + '" id="res_' + j + '" style="width:150px"/>' +
                    '</div>' +
                    '<div id="f_' + j + '" style="display: none">' +
                        '<select id="Select_' + j + '" style="width:150px;" name="Select_' + j + '">' +
                            '<option value="">==请选择==</option>' +
                        '</select>' +
                    '</div>' +
                '</td>' +
                '<td class="auto-style195">' +
                    '<input type="text" id="unit_' + j + '" name="unit_' + j + '" style="border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width: 60px;"" />' +
                '</td>' +
                '<td class="auto-style188">' +
                    '<textarea id="qujian_' + j + '" name="qujian_' + j + '"  style="overflow:hidden;border-style: none; border-color: inherit; background-color: #e2ebfb; border-width: 0px;width:220px"></textarea>' +
                '</td>' +
                '</td>' +
                '<td class="auto-style222">' +
                    '<input type="text" id="tishi_' + j + '" name="tishi_' + j + '" style="border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width:40px" />' +
                '</td>' +
                '<td class="auto-style190">' +
                    '<input type="text" id="beizhu_' + j + '" name="beizhu_' + j + '" style="width: 205px; height: 20px" />' +
                '</td>' +
            '</tr>');


                             //-------------------------------------添加名称-------------------------------------------
                             $.post("/Data/DataNames?type=" + types,
                                            function (data1) {
                                                dat1 = eval(data1);
                                                for (var j2 = 1; j2 <= dat.length; j2++) {
                                                    $('#project_' + j2 + '').empty();
                                                    $('#project_' + j2 + '').append("<option value=" + "" + ">==请选择==</option>");
                                                    if (dat1 != null) {
                                                        for (var s = 0; s < dat1.length; s++) {
                                                            $('#project_' + j2 + '').append("<option value=" + dat1[s].name + ">" + dat1[s].name + "</option>");
                                                        }
                                                    }
                                                    $('#project_' + j2 + '').val(dat[j2 - 1].name);

                                                    if (dat[j2 - 1].name == "有核细胞增生程度") {
                                                        document.getElementById('d_' + j2 + '').style.display = "none";
                                                        document.getElementById('f_' + j2 + '').style.display = "";
                                                        $.post("/Data/DataResults?type=" + types,
                                                           { Name: dat[j2 - 1].name },
                                                            function (data) {
                                                                dat1 = eval(data);
                                                                //----------------------------添加名称------------------------------------
                                                                for (var j1 = 1; j1 <= dat.length; j1++) {
                                                                    $('#Select_' + j1 + '').empty();
                                                                    $('#Select_' + j1 + '').append("<option value=" + "" + ">==请选择==</option>");
                                                                    if (dat1 != null) {
                                                                        for (var i1 = 0; i1 < dat1.length; i1++) {
                                                                            $('#Select_' + j1 + '').append("<option value=" + dat1[i1].result_name + ">" + dat1[i1].result_name + "</option>");
                                                                        }
                                                                    }
                                                                    $('#Select_' + j1 + '').val(dat[j1 - 1].result);
                                                                }
                                                            });
                                                    } else {
                                                        document.getElementById('d_' + j2 + '').style.display = "";
                                                        $('#res_' + j2 + '').val(dat[j2 - 1].result);
                                                        document.getElementById('f_' + j2 + '').style.display = "none";
                                                    }
                                                    if ($('#project_' + j2 + '').val() == "有核细胞增生程度") {
                                                        var s = dat[j2 - 1].qujian.split(')');
                                                        $('#qujian_' + j2 + '').html(s[0] + ')' + '<br/>' + s[1]);
                                                    } else {
                                                        $('#qujian_' + j2 + '').html(dat[j2 - 1].qujian);
                                                    }
                                                    $('#unit_' + j2 + '').val(dat[j2 - 1].unit);
                                                    $('#qujian_' + j2 + '').val(dat[j2 - 1].qujian);
                                                    $('#tishi_' + j2 + '').val(dat[j2 - 1].tishi);
                                                    $('#beizhu_' + j2 + '').val(dat[j2 - 1].beizhu);
                                                }
                                            });

                         }

                     }
                 })
           }
       })
    //=============================================================================================================================================
})
//==============================提交页面=======================================
function sure() {
    if ($("#name").val() == "") {
        alert("姓名不能为空！")
    }
    else if ($("#sex").val() == "") {
        alert("性别不能为空！")
    }
    else if ($("#id_card_number").val() == "") {
        alert("身份证号码不能为空！")
    }
    else if ($("#ddlCommunity").val() == "") {
        alert("常住地址必须填写到社区、村或者居委会！")
    }
    else if ($("#phone").val() == "") {
        alert("手机号码不能为空！")
    } else if ($("#bgtime").val() == "") {
        alert("报告日期不能为空！")
    } else if ($("#sjtime").val() == "") {
        alert("检测日期不能为空！")
    }
    else {
        $.post("/MedicalHistory_TestReport_BMC/AddAndUpdate?id=" + id + "&worker=" + worker + "&community_code=" + community_code,
            $("#form1").serialize(),
            function (msgs) {
                var msg = msgs.split(',');
                alert(msg[0]);
                window.close();
            })
    }
}
//=============================================================================

//============================================================================动态增加一行=============================================================================
var i = 1;
function added1() {
    if ($("#project1").val() != "" && $("#project2").val() != "" && $("#project3").val() != "" && $("#project4").val() != "" && $("#project5").val() != "" && $('#project_' + (i - 1) + '').val() != "") {
        if (i < 4) {
            $("#tab1").append('<tr style="height:30px"><td class="auto-style184">' + (5 + i) + '</td><td class="auto-style185">' +
                                '<select id="project_' + i + '" name="project_' + i + '" style="width: 180px;">' +
                                    '<option value="">==请选择==</option>' +
                                '</select>' +
                            '</td>' +
                            '<td style="background-color:#e2ebfb">' +
                                '<div id="d_' + i + '">' +
                                    '<input type="text" name="res_' + i + '" id="res_' + i + '" style="width:150px"/>' +
                                '</div>' +
                                '<div id="f_' + i + '" style="display: none">' +
                                    '<select id="Select_' + i + '" style="width:150px;" name="Select_' + i + '">' +
                                        '<option value="">==请选择==</option>' +
                                    '</select>' +
                                '</div>' +
                            '</td>' +
                            '<td class="auto-style195">' +
                                '<input type="text" id="unit_' + i + '" name="unit_' + i + '" style="border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width: 60px;"" />' +
                            '</td>' +
                            '<td class="auto-style188">' +
                                '<textarea id="qujian_' + i + '" name="qujian_' + i + '"  style="overflow:hidden;border-style: none; border-color: inherit; background-color: #e2ebfb; border-width: 0px;width:220px"></textarea>' +
                            '</td>' +
                            '</td>' +
                            '<td class="auto-style222">' +
                                '<input type="text" id="tishi_' + i + '" name="tishi_' + i + '" style="border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width:40px" />' +
                            '</td>' +
                            '<td class="auto-style190">' +
                                '<input type="text" id="beizhu_' + i + '" name="beizhu_' + i + '" style="width: 205px; height: 20px" />' +
                            '</td>' +
                        '</tr>');
            //------------------------------------------------------------------------------增加事件-------------------------------------------------------------------------
            $.post("/Data/DataNames?type=" + types,
               function (data1) {
                   dat1 = eval(data1);
                   $('#project_' + i + '').empty();
                   $('#project_' + i + '').append("<option value=" + "" + ">==请选择==</option>");
                   if (dat1 != null) {
                       for (var s = 0; s < dat1.length; s++) {
                           $('#project_' + (i - 1) + '').append("<option value=" + dat1[s].name + ">" + dat1[s].name + "</option>");
                       }
                   }
               });
            $('#project_' + i + '').change(function () {
                if ($('#project_' + (i - 1) + '').val() == "有核细胞增生程度") {
                    document.getElementById('d_' + (i - 1) + '').style.display = "none";
                    document.getElementById('f_' + (i - 1) + '').style.display = "";
                    $.post("/Data/DataResults?type=" + types,
                    { Name: $('#project_' + (i - 1) + '').val() },
                    function (data) {
                        dat1 = eval(data);
                        $('#Select_' + i + '').empty();
                        $('#Select_' + i + '').append("<option value=" + "" + ">==请选择==</option>");
                        if (dat1 != null) {
                            for (var s = 0; s < dat1.length; s++) {
                                $('#Select_' + (i - 1) + '').append("<option value=" + dat1[s].result_name + ">" + dat1[s].result_name + "</option>");
                            }
                        }
                    });
                    $('#Select_' + (i - 1) + '').change(function () {
                        $.post("/Data/DataSection?type=" + types,
                            { Name: $('#Select_' + (i - 1) + '').val() },
                            function (datas) {
                                var s = datas.split(')');
                                $('#qujian_' + (i - 1) + '').html(s[0] + ')' + '<br/>' + s[1]);
                            });
                    })
                } else {
                    document.getElementById('d_' + (i - 1) + '').style.display = "";
                    document.getElementById('f_' + (i - 1) + '').style.display = "none";
                }
            })
        }
        i++;
    } else {
        alert("请填写上一行内容！");
    }
}

