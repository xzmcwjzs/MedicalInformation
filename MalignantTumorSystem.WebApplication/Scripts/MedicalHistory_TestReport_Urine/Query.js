var types = 'urine';
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
    //=====1======
    $("#project1").change(function () {
        $("#res1").val("");
        $("#Select1").val("");
        $('#Text1').val("");
        $('#Text2').val("");
        $('#Text3').val("");
        $('#Text4').val("");
        if ($("#project1").val() == "尿液外观" || $("#project1").val() == "气味") {
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
        } else {
            document.getElementById("d5").style.display = "";
            document.getElementById("d6").style.display = "none";
            $.post("/Data/DataSection1?type=" + types,
                              { Name: $("#project1").val() },
                              function (datas) {
                                  $('#Text2').val(datas);
                              });
            $.post("/Data/DataUnit?type=" + types,
                            { Name: $("#project1").val() },
                            function (datas) {
                                $('#Text1').val(datas);
                            });
        }
    })

    $("#res1").keyup(function () {
        var a = $("#res1").val();
        var b = $("#project1").val();
        if (a != "") {
            if (b == "尿量") {
                if (a < 1000) {
                    $("#Text3").val("↓");
                } else if (a >= 1000 && a <= 2000) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "酸碱反应") {
                if (a < 4.5) {
                    $("#Text3").val("↓");
                } else if (a >= 4.5 && a <= 8.0) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "尿液比密") {
                if (a < 1.015) {
                    $("#Text3").val("↓");
                } else if (a >= 1.015 && a <= 1.025) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "尿蛋白") {
                if (a >= 0 && a <= 80) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "尿糖") {
                if (a < 0.56) {
                    $("#Text3").val("↓");
                } else if (a >= 0.56 && a <= 5.0) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "酮体") {
                if (a.indexOf("阴") != -1) {
                    $("#Text3").val("正常");
                } else {
                    $("#Text3").val("异常");
                }
            } else if (b == "尿胆红素") {
                if (a <= 2.0 || a.indexOf("阴") != -1) {
                    $("#Text3").val("正常");
                } else {
                    $("#Text3").val("异常");
                }
            } else if (b == "尿胆原") {
                if (a <= 10 || a.indexOf("阴") != -1 || a.indexOf("弱阳") != -1) {
                    $("#Text3").val("正常");
                } else {
                    $("#Text3").val("异常");
                }
            } else if (b == "红细胞(陂片法)") {
                if (a >= 0 && a <= 3) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "红细胞(定量检查)") {
                if (a >= 0 && a <= 5) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "白细胞和脓细胞(陂片法)") {
                if (a >= 0 && a <= 5) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "白细胞和脓细胞(定量检查)") {
                if (a >= 0 && a <= 10) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "尿钠(mmol/24h)") {
                if (a < 130) {
                    $("#Text3").val("↓");
                } else if (a >= 130 && a <= 260) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "尿钠(g/24h)") {
                if (a < 3) {
                    $("#Text3").val("↓");
                } else if (a >= 3 && a <= 5) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "尿钙(mmol/24h)") {
                if (a < 2.5) {
                    $("#Text3").val("↓");
                } else if (a >= 2.5 && a <= 7.5) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "尿钙(g/24h)") {
                if (a < 0.1) {
                    $("#Text3").val("↓");
                } else if (a >= 0.1 && a <= 0.3) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "尿钾") {
                if (a < 51) {
                    $("#Text3").val("↓");
                } else if (a >= 51 && a <= 102) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            }

        }
    });
    //=====2======
    $("#project2").change(function () {
        $("#res2").val("");
        $("#Select2").val("");
        $('#Text6').val("");
        $('#Text7').val("");
        $('#Text8').val("");
        $('#Text9').val("");
        if ($("#project2").val() == "尿液外观" || $("#project2").val() == "气味") {
            document.getElementById("Div1").style.display = "none";
            document.getElementById("Div2").style.display = "";
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
        } else {
            document.getElementById("Div1").style.display = "";
            document.getElementById("Div2").style.display = "none";
            $.post("/Data/DataSection1?type=" + types,
                              { Name: $("#project2").val() },
                              function (datas) {
                                  $('#Text7').val(datas);
                              });
            $.post("/Data/DataUnit?type=" + types,
                            { Name: $("#project2").val() },
                            function (datas) {
                                $('#Text6').val(datas);
                            });

        }
    })
    $("#res2").keyup(function () {
        var a = $("#res2").val();
        var b = $("#project2").val();
        if (a != "") {
            if (b == "尿量") {
                if (a < 1000) {
                    $("#Text8").val("↓");
                } else if (a >= 1000 && a <= 2000) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "酸碱反应") {
                if (a < 4.5) {
                    $("#Text8").val("↓");
                } else if (a >= 4.5 && a <= 8.0) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "尿液比密") {
                if (a < 1.015) {
                    $("#Text8").val("↓");
                } else if (a >= 1.015 && a <= 1.025) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "尿蛋白") {
                if (a >= 0 && a <= 80) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "尿糖") {
                if (a < 0.56) {
                    $("#Text8").val("↓");
                } else if (a >= 0.56 && a <= 5.0) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "酮体") {
                if (a.indexOf("阴") != -1) {
                    $("#Text8").val("正常");
                } else {
                    $("#Text8").val("异常");
                }
            } else if (b == "尿胆红素") {
                if (a <= 2.0 || a.indexOf("阴") != -1) {
                    $("#Text8").val("正常");
                } else {
                    $("#Text8").val("异常");
                }
            } else if (b == "尿胆原") {
                if (a <= 10 || a.indexOf("阴") != -1 || a.indexOf("弱阳") != -1) {
                    $("#Text8").val("正常");
                } else {
                    $("#Text8").val("异常");
                }
            } else if (b == "红细胞(陂片法)") {
                if (a >= 0 && a <= 3) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "红细胞(定量检查)") {
                if (a >= 0 && a <= 5) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "白细胞和脓细胞(陂片法)") {
                if (a >= 0 && a <= 5) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "白细胞和脓细胞(定量检查)") {
                if (a >= 0 && a <= 10) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "尿钠(mmol/24h)") {
                if (a < 130) {
                    $("#Text8").val("↓");
                } else if (a >= 130 && a <= 260) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "尿钠(g/24h)") {
                if (a < 3) {
                    $("#Text8").val("↓");
                } else if (a >= 3 && a <= 5) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "尿钙(mmol/24h)") {
                if (a < 2.5) {
                    $("#Text8").val("↓");
                } else if (a >= 2.5 && a <= 7.5) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "尿钙(g/24h)") {
                if (a < 0.1) {
                    $("#Text8").val("↓");
                } else if (a >= 0.1 && a <= 0.3) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "尿钾") {
                if (a < 51) {
                    $("#Text8").val("↓");
                } else if (a >= 51 && a <= 102) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            }

        }
    });
    //=====3======
    $("#project3").change(function () {
        $("#res3").val("");
        $("#Select3").val("");
        $('#Text10').val("");
        $('#Text11').val("");
        $('#Text12').val("");
        $('#Text13').val("");
        if ($("#project3").val() == "尿液外观" || $("#project3").val() == "气味") {
            document.getElementById("Div3").style.display = "none";
            document.getElementById("Div4").style.display = "";
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
        } else {
            document.getElementById("Div3").style.display = "";
            document.getElementById("Div4").style.display = "none";
            $.post("/Data/DataSection1?type=" + types,
                              { Name: $("#project3").val() },
                              function (datas) {
                                  $('#Text11').val(datas);
                              });
            $.post("/Data/DataUnit?type=" + types,
                            { Name: $("#project3").val() },
                            function (datas) {
                                $('#Text10').val(datas);
                            });

        }
    })
    $("#res3").keyup(function () {
        var a = $("#res3").val();
        var b = $("#project3").val();
        if (a != "") {
            if (b == "尿量") {
                if (a < 1000) {
                    $("#Text12").val("↓");
                } else if (a >= 1000 && a <= 2000) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "酸碱反应") {
                if (a < 4.5) {
                    $("#Text12").val("↓");
                } else if (a >= 4.5 && a <= 8.0) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "尿液比密") {
                if (a < 1.015) {
                    $("#Text12").val("↓");
                } else if (a >= 1.015 && a <= 1.025) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "尿蛋白") {
                if (a >= 0 && a <= 80) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "尿糖") {
                if (a < 0.56) {
                    $("#Text12").val("↓");
                } else if (a >= 0.56 && a <= 5.0) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "酮体") {
                if (a.indexOf("阴") != -1) {
                    $("#Text12").val("正常");
                } else {
                    $("#Text12").val("异常");
                }
            } else if (b == "尿胆红素") {
                if (a <= 2.0 || a.indexOf("阴") != -1) {
                    $("#Text12").val("正常");
                } else {
                    $("#Text12").val("异常");
                }
            } else if (b == "尿胆原") {
                if (a <= 10 || a.indexOf("阴") != -1 || a.indexOf("弱阳") != -1) {
                    $("#Text12").val("正常");
                } else {
                    $("#Text12").val("异常");
                }
            } else if (b == "红细胞(陂片法)") {
                if (a >= 0 && a <= 3) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "红细胞(定量检查)") {
                if (a >= 0 && a <= 5) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "白细胞和脓细胞(陂片法)") {
                if (a >= 0 && a <= 5) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "白细胞和脓细胞(定量检查)") {
                if (a >= 0 && a <= 10) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "尿钠(mmol/24h)") {
                if (a < 130) {
                    $("#Text12").val("↓");
                } else if (a >= 130 && a <= 260) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "尿钠(g/24h)") {
                if (a < 3) {
                    $("#Text12").val("↓");
                } else if (a >= 3 && a <= 5) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "尿钙(mmol/24h)") {
                if (a < 2.5) {
                    $("#Text12").val("↓");
                } else if (a >= 2.5 && a <= 7.5) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "尿钙(g/24h)") {
                if (a < 0.1) {
                    $("#Text12").val("↓");
                } else if (a >= 0.1 && a <= 0.3) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "尿钾") {
                if (a < 51) {
                    $("#Text12").val("↓");
                } else if (a >= 51 && a <= 102) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            }

        }
    });
    //=====4======
    $("#project4").change(function () {
        $("#res4").val("");
        $("#Select4").val("");
        $('#Text14').val("");
        $('#Text15').val("");
        $('#Text16').val("");
        $('#Text17').val("");
        if ($("#project4").val() == "尿液外观" || $("#project4").val() == "气味") {
            document.getElementById("Div5").style.display = "none";
            document.getElementById("Div6").style.display = "";
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
        } else {
            document.getElementById("Div5").style.display = "";
            document.getElementById("Div6").style.display = "none";
            $.post("/Data/DataSection1?type=" + types,
                              { Name: $("#project4").val() },
                              function (datas) {
                                  $('#Text15').val(datas);
                              });
            $.post("/Data/DataUnit?type=" + types,
                            { Name: $("#project4").val() },
                            function (datas) {
                                $('#Text14').val(datas);
                            });

        }
    })
    $("#res4").keyup(function () {
        var a = $("#res4").val();
        var b = $("#project4").val();
        if (a != "") {
            if (b == "尿量") {
                if (a < 1000) {
                    $("#Text16").val("↓");
                } else if (a >= 1000 && a <= 2000) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "酸碱反应") {
                if (a < 4.5) {
                    $("#Text16").val("↓");
                } else if (a >= 4.5 && a <= 8.0) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "尿液比密") {
                if (a < 1.015) {
                    $("#Text16").val("↓");
                } else if (a >= 1.015 && a <= 1.025) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "尿蛋白") {
                if (a >= 0 && a <= 80) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "尿糖") {
                if (a < 0.56) {
                    $("#Text16").val("↓");
                } else if (a >= 0.56 && a <= 5.0) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "酮体") {
                if (a.indexOf("阴") != -1) {
                    $("#Text16").val("正常");
                } else {
                    $("#Text16").val("异常");
                }
            } else if (b == "尿胆红素") {
                if (a <= 2.0 || a.indexOf("阴") != -1) {
                    $("#Text16").val("正常");
                } else {
                    $("#Text16").val("异常");
                }
            } else if (b == "尿胆原") {
                if (a <= 10 || a.indexOf("阴") != -1 || a.indexOf("弱阳") != -1) {
                    $("#Text16").val("正常");
                } else {
                    $("#Text16").val("异常");
                }
            } else if (b == "红细胞(陂片法)") {
                if (a >= 0 && a <= 3) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "红细胞(定量检查)") {
                if (a >= 0 && a <= 5) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "白细胞和脓细胞(陂片法)") {
                if (a >= 0 && a <= 5) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "白细胞和脓细胞(定量检查)") {
                if (a >= 0 && a <= 10) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "尿钠(mmol/24h)") {
                if (a < 130) {
                    $("#Text16").val("↓");
                } else if (a >= 130 && a <= 260) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "尿钠(g/24h)") {
                if (a < 3) {
                    $("#Text16").val("↓");
                } else if (a >= 3 && a <= 5) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "尿钙(mmol/24h)") {
                if (a < 2.5) {
                    $("#Text16").val("↓");
                } else if (a >= 2.5 && a <= 7.5) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "尿钙(g/24h)") {
                if (a < 0.1) {
                    $("#Text16").val("↓");
                } else if (a >= 0.1 && a <= 0.3) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "尿钾") {
                if (a < 51) {
                    $("#Text16").val("↓");
                } else if (a >= 51 && a <= 102) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            }

        }
    });
    //=====5======
    $("#project5").change(function () {
        $("#res5").val("");
        $("#Select5").val("");
        $('#Text18').val("");
        $('#Text19').val("");
        $('#Text20').val("");
        $('#Text21').val("");
        if ($("#project5").val() == "尿液外观" || $("#project5").val() == "气味") {
            document.getElementById("Div7").style.display = "none";
            document.getElementById("Div8").style.display = "";
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
        } else {
            document.getElementById("Div7").style.display = "";
            document.getElementById("Div8").style.display = "none";
            $.post("/Data/DataSection1?type=" + types,
                              { Name: $("#project5").val() },
                              function (datas) {
                                  $('#Text19').val(datas);
                              });
            $.post("/Data/DataUnit?type=" + types,
                            { Name: $("#project5").val() },
                            function (datas) {
                                $('#Text18').val(datas);
                            });

        }
    })
    $("#res5").keyup(function () {
        var a = $("#res5").val();
        var b = $("#project5").val();
        if (a != "") {
            if (b == "尿量") {
                if (a < 1000) {
                    $("#Text20").val("↓");
                } else if (a >= 1000 && a <= 2000) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "酸碱反应") {
                if (a < 4.5) {
                    $("#Text20").val("↓");
                } else if (a >= 4.5 && a <= 8.0) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "尿液比密") {
                if (a < 1.015) {
                    $("#Text20").val("↓");
                } else if (a >= 1.015 && a <= 1.025) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "尿蛋白") {
                if (a >= 0 && a <= 80) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "尿糖") {
                if (a < 0.56) {
                    $("#Text20").val("↓");
                } else if (a >= 0.56 && a <= 5.0) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "酮体") {
                if (a.indexOf("阴") != -1) {
                    $("#Text20").val("正常");
                } else {
                    $("#Text20").val("异常");
                }
            } else if (b == "尿胆红素") {
                if (a <= 2.0 || a.indexOf("阴") != -1) {
                    $("#Text20").val("正常");
                } else {
                    $("#Text20").val("异常");
                }
            } else if (b == "尿胆原") {
                if (a <= 10 || a.indexOf("阴") != -1 || a.indexOf("弱阳") != -1) {
                    $("#Text20").val("正常");
                } else {
                    $("#Text20").val("异常");
                }
            } else if (b == "红细胞(陂片法)") {
                if (a >= 0 && a <= 3) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "红细胞(定量检查)") {
                if (a >= 0 && a <= 5) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "白细胞和脓细胞(陂片法)") {
                if (a >= 0 && a <= 5) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "白细胞和脓细胞(定量检查)") {
                if (a >= 0 && a <= 10) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "尿钠(mmol/24h)") {
                if (a < 130) {
                    $("#Text20").val("↓");
                } else if (a >= 130 && a <= 260) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "尿钠(g/24h)") {
                if (a < 3) {
                    $("#Text20").val("↓");
                } else if (a >= 3 && a <= 5) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "尿钙(mmol/24h)") {
                if (a < 2.5) {
                    $("#Text20").val("↓");
                } else if (a >= 2.5 && a <= 7.5) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "尿钙(g/24h)") {
                if (a < 0.1) {
                    $("#Text20").val("↓");
                } else if (a >= 0.1 && a <= 0.3) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "尿钾") {
                if (a < 51) {
                    $("#Text20").val("↓");
                } else if (a >= 51 && a <= 102) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            }

        }
    });
    //===============================================================修改内容 打开显示======================================================================
    $.post("/MedicalHistory_TestReport_Urine/Show?id=" + id,
               function (data) {
                   dts = eval(data);
                   if (dts != "") {
                       $("#name").val(dts[0].names);
                       $("input[name=" + "sex" + "][value=" + dts[0].sex + "]").attr("checked", "checked");
                       $("#id_card_number").val(dts[0].id_card_number);
                       //$("#id_card_number").attr("readonly", "readonly");
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
                       if (dts[0].community_code != "" && dts[0].community_code != null) {
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
                       $("#numb").val(dts[0].samplenumber);

                       $("#sjdoctor").val(dts[0].inspect_doctor);
                       $("#jcdoctor").val(dts[0].check_doctor);
                       $("#bgdoctor").val(dts[0].report_doctor);

                       if (dts[0].inspect_time != "" && dts[0].inspect_time != null) {
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
                       if (dts[0].report_time != "" && dts[0].report_time != null) {
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
                       if (dts[0].create_time != "" && dts[0].create_time != null) {
                           var date = new Date(parseInt(dts[0].create_time.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].create_time.split('/');
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
                           $("#create_time").val(date.getFullYear()+ '-' + a1 + '-' + a2);
                       }
                       $("#project1").val(dts[0].name1);
                       //if (dts[0].name1 == "尿液外观" || dts[0].name1 == "气味") {
                       //    document.getElementById("d5").style.display = "none";
                       //    document.getElementById("d6").style.display = "";
                       //    $.post("/Data/DataResults?type=" + types,
                       //     { Name: dts[0].name1 },
                       //      function (data) {
                       //          dat1 = eval(data);
                       //          $("#Select1").empty();
                       //          $("#Select1").append("<option value=" + "" + ">==请选择==</option>");
                       //          if (dat1 != null) {
                       //              for (var i = 0; i < dat1.length; i++) {
                       //                  $("#Select1").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                       //              }
                       //          }
                       //      });
                       //    $("#Select1").val(dts[0].result1);
                       //} else {
                       //    document.getElementById("d5").style.display = "";
                       //    document.getElementById("d6").style.display = "none";
                       //    $("#res1").val(dts[0].result1);
                       //}
                       $("#res1").val(dts[0].result1);
                       $("#Text1").val(dts[0].unit1);
                       $("#Text2").val(dts[0].qujian1);
                       $("#Text3").val(dts[0].tishi1);
                       $("#Text4").val(dts[0].beizhu1);

                       $("#project2").val(dts[0].name2);
                       //if (dts[0].name2 == "尿液外观" || dts[0].name2 == "气味") {
                       //    document.getElementById("Div1").style.display = "none";
                       //    document.getElementById("Div2").style.display = "";
                       //    $.post("/Data/DataResults?type=" + types,
                       //     { Name: dts[0].name2 },
                       //      function (data) {
                       //          dat1 = eval(data);
                       //          $("#Select2").empty();
                       //          $("#Select2").append("<option value=" + "" + ">==请选择==</option>");
                       //          if (dat1 != null) {
                       //              for (var i = 0; i < dat1.length; i++) {
                       //                  $("#Select2").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                       //              }
                       //          }
                       //      });
                       //    $("#Select2").val(dts[0].result2);
                       //} else {
                       //    document.getElementById("Div1").style.display = "";
                       //    document.getElementById("Div2").style.display = "none";
                       //    $("#res2").val(dts[0].result2);
                       //}
                       $("#res2").val(dts[0].result2);
                       $("#Text6").val(dts[0].unit2);
                       $("#Text7").val(dts[0].qujian2);
                       $("#Text8").val(dts[0].tishi2);
                       $("#Text9").val(dts[0].beizhu2);

                       $("#project3").val(dts[0].name3);
                       //if (dts[0].name3 == "尿液外观" || dts[0].name3 == "气味") {
                       //    document.getElementById("Div3").style.display = "none";
                       //    document.getElementById("Div4").style.display = "";
                       //    $.post("/Data/DataResults?type=" + types,
                       //     { Name: dts[0].name3 },
                       //      function (data) {
                       //          dat1 = eval(data);
                       //          $("#Select3").empty();
                       //          $("#Select3").append("<option value=" + "" + ">==请选择==</option>");
                       //          if (dat1 != null) {
                       //              for (var i = 0; i < dat1.length; i++) {
                       //                  $("#Select3").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                       //              }
                       //          }
                       //          $("#Select3").val(dts[0].result3);
                       //      });
                       //} else {
                       //    document.getElementById("Div3").style.display = "";
                       //    document.getElementById("Div4").style.display = "none";
                       //    $("#res3").val(dts[0].result3);
                       //}
                       $("#res3").val(dts[0].result3);
                       $("#Text10").val(dts[0].unit3);
                       $("#Text11").val(dts[0].qujian3);
                       $("#Text12").val(dts[0].tishi3);
                       $("#Text13").val(dts[0].beizhu3);

                       $("#project4").val(dts[0].name4);
                       //if (dts[0].name4 == "尿液外观" || dts[0].name4 == "气味") {
                       //    document.getElementById("Div5").style.display = "none";
                       //    document.getElementById("Div6").style.display = "";
                       //    $.post("/Data/DataResults?type=" + types,
                       //     { Name: dts[0].name4 },
                       //      function (data) {
                       //          dat1 = eval(data);
                       //          $("#Select4").empty();
                       //          $("#Select4").append("<option value=" + "" + ">==请选择==</option>");
                       //          if (dat1 != null) {
                       //              for (var i = 0; i < dat1.length; i++) {
                       //                  $("#Select4").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                       //              }
                       //          }
                       //          $("#Select4").val(dts[0].result4);
                       //      });
                       //} else {
                       //    document.getElementById("Div5").style.display = "";
                       //    document.getElementById("Div6").style.display = "none";
                       //    $("#res4").val(dts[0].result4);
                       //}
                       $("#res4").val(dts[0].result4);
                       $("#Text14").val(dts[0].unit4);
                       $("#Text15").val(dts[0].qujian4);
                       $("#Text16").val(dts[0].tishi4);
                       $("#Text17").val(dts[0].beizhu4);

                       $("#project5").val(dts[0].name5);
                       //if (dts[0].name5 == "尿液外观" || dts[0].name5 == "气味") {
                       //    document.getElementById("Div7").style.display = "none";
                       //    document.getElementById("Div8").style.display = "";
                       //    $.post("/Data/DataResults?type=" + types,
                       //     { Name: dts[0].name5 },
                       //      function (data) {
                       //          dat1 = eval(data);
                       //          $("#Select5").empty();
                       //          $("#Select5").append("<option value=" + "" + ">==请选择==</option>");
                       //          if (dat1 != null) {
                       //              for (var i = 0; i < dat1.length; i++) {
                       //                  $("#Select5").append("<option value=" + dat1[i].result_name + ">" + dat1[i].result_name + "</option>");
                       //              }
                       //          }
                       //          $("#Select5").val(dts[0].result5);
                       //      });
                       //} else {
                       //    document.getElementById("Div7").style.display = "";
                       //    document.getElementById("Div8").style.display = "none";
                       //    $("#res5").val(dts[0].result5);
                       //}
                       $("#res5").val(dts[0].result5);
                       $("#Text18").val(dts[0].unit5);
                       $("#Text19").val(dts[0].qujian5);
                       $("#Text20").val(dts[0].tishi5);
                       $("#Text21").val(dts[0].beizhu5);

                   }
               })
    $.post("/MedicalHistory_TestReport_Urine/ShowAdd?id=" + id,
        function (data) {
            dat = eval(data);
            if (dat != "") {
                for (i = 1; i <= dat.length; i++) {
                    $("#tab1").append('<tr style="height:30px"><td class="auto-style184">' + (5 + i) + '</td><td class="auto-style185">' +
                           '<select id="project_' + i + '" name="project_' + i + '" style="width: 180px;">' +
                               '<option value="">==请选择==</option>' +
                           '</select>' +
                       '</td>' +
                       '<td style="background-color: #e2ebfb">' +
                           '<div id="Div1_' + i + '">' +
                               '<input type="text" name="res_' + i + '" id="res_' + i + '" style="width: 150px" />' +
                           '</div>' +
                           '<div id="Div2_' + i + '" style="display: none">' +
                               '<select id="Select_' + i + '" style="width: 150px;" name="Select_' + i + '">' +
                                   '<option value="">==请选择==</option>' +
                               '</select>' +
                           '</div>' +
                       '</td>' +
                       '<td class="auto-style195">' +
                           '<input type="text" id="unit_' + i + '" name="unit_' + i + '" style="text-align:center;border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width: 60px;"" />' +
                       '</td>' +
                       '<td class="auto-style188">' +
                           '<input type="text" id="qujian_' + i + '" name="qujian_' + i + '"  style="text-align:center;overflow:hidden;border-style: none; border-color: inherit; background-color: #e2ebfb; border-width: 0px;width:220px"/>' +
                       '</td>' +
                       '</td>' +
                       '<td class="auto-style222">' +
                           '<input type="text" id="tishi_' + i + '" name="tishi_' + i + '" style="text-align:center;border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width:40px" />' +
                       '</td>' +
                       '<td class="auto-style190">' +
                           '<input type="text" id="beizhu_' + i + '" name="beizhu_' + i + '" style="width: 205px; height: 20px" />' +
                       '</td>' +
                   '</tr>');

                    //------------------------------------------------------------------------------增加事件-------------------------------------------------------------------------
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

                                //if (dat[j2 - 1].name == "尿液外观" || dat[j2 - 1].name == "气味") {
                                //    document.getElementById('Div1_' + j2 + '').style.display = "none";
                                //    document.getElementById('Div2_' + j2 + '').style.display = "";
                                //    $.post("/Data/DataResults?type=" + types,
                                //       { Name: dat[j2 - 1].name },
                                //        function (data) {
                                //            dat1 = eval(data);
                                //            //----------------------------添加名称------------------------------------
                                //            for (var j1 = 1; j1 <= dat.length; j1++) {
                                //                $('#Select_' + j1 + '').empty();
                                //                $('#Select_' + j1 + '').append("<option value=" + "" + ">==请选择==</option>");
                                //                if (dat1 != null) {
                                //                    for (var i1 = 0; i1 < dat1.length; i1++) {
                                //                        $('#Select_' + j1 + '').append("<option value=" + dat1[i1].result_name + ">" + dat1[i1].result_name + "</option>");
                                //                    }
                                //                }
                                //                $('#Select_' + j1 + '').val(dat[j1 - 1].result);
                                //            }
                                //        });
                                //} else {
                                //    document.getElementById('Div1_' + j2 + '').style.display = "";
                                //    $('#res_' + j2 + '').val(dat[j2 - 1].result);
                                //    document.getElementById('Div2_' + j2 + '').style.display = "none";
                                //}
                                $('#res_' + j2 + '').val(dat[j2 - 1].result);
                                $('#qujian_' + j2 + '').val(dat[j2 - 1].qujian);
                                $('#unit_' + j2 + '').val(dat[j2 - 1].unit);
                                $('#tishi_' + j2 + '').val(dat[j2 - 1].tishi);
                                $('#beizhu_' + j2 + '').val(dat[j2 - 1].beizhu);
                            }
                        });
                }
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
        $.post("/MedicalHistory_TestReport_Urine/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
            $("#form1").serialize(),
            function (msgs) {
                var msg = msgs.split(',');
                alert(msg[0]);
                window.close();
            })
    }
}

//============================================================================动态增加一行=============================================================================
var i = 1;
function added1() {
    if ($("#project1").val() != "" && $("#project2").val() != "" && $("#project3").val() != "" && $("#project4").val() != "" && $("#project5").val() != "" && $('#project_' + (i - 1) + '').val() != "") {
        if (i < 20) {
            $("#tab1").append('<tr style="height:30px"><td class="auto-style184">' + (5 + i) + '</td><td class="auto-style185">' +
                                '<select id="project_' + i + '" name="project_' + i + '" style="width: 180px;">' +
                                    '<option value="">==请选择==</option>' +
                                '</select>' +
                            '</td>' +
                            '<td style="background-color: #e2ebfb">' +
                                '<div id="Div1_' + i + '">' +
                                    '<input type="text" name="res_' + i + '" id="res_' + i + '" style="width: 150px" />' +
                                '</div>' +
                                '<div id="Div2_' + i + '" style="display: none">' +
                                    '<select id="Select_' + i + '" style="width: 150px;" name="Select_' + i + '">' +
                                        '<option value="">==请选择==</option>' +
                                    '</select>' +
                                '</div>' +
                            '</td>' +
                            '<td class="auto-style195">' +
                                '<input type="text" id="unit_' + i + '" name="unit_' + i + '" style="text-align:center;border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width: 60px;"" />' +
                            '</td>' +
                            '<td class="auto-style188">' +
                                '<input type="text" id="qujian_' + i + '" name="qujian_' + i + '"  style="text-align:center;overflow:hidden;border-style: none; border-color: inherit; background-color: #e2ebfb; border-width: 0px;width:220px"/>' +
                            '</td>' +
                            '</td>' +
                            '<td class="auto-style222">' +
                                '<input type="text" id="tishi_' + i + '" name="tishi_' + i + '" style="text-align:center;border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width:40px" />' +
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
                $('#res_' + (i - 1) + '').val("");
                $('#Select_' + (i - 1) + '').val("");
                $('#unit_' + (i - 1) + '').val("");
                $('#qujian_' + (i - 1) + '').val("");
                $('#tishi_' + (i - 1) + '').val("");
                $('#beizhu_' + (i - 1) + '').val("");
                if ($('#project_' + (i - 1) + '').val() == "尿液外观" || $('#project_' + (i - 1) + '').val() == "气味") {
                    document.getElementById('Div1_' + (i - 1) + '').style.display = "none";
                    document.getElementById('Div2_' + (i - 1) + '').style.display = "";
                    $.post("/Data/DataResults?type=" + types,
                     { Name: $('#project_' + (i - 1) + '').val() },
                         function (data) {
                             dat1 = eval(data);
                             $('#Select_' + (i - 1) + '').empty();
                             $('#Select_' + (i - 1) + '').append("<option value=" + "" + ">==请选择==</option>");
                             if (dat1 != null) {
                                 for (var j = 0; j < dat1.length; j++) {
                                     $('#Select_' + (i - 1) + '').append("<option value=" + dat1[j].result_name + ">" + dat1[j].result_name + "</option>");
                                 }
                             }
                         });
                } else {
                    document.getElementById('Div1_' + (i - 1) + '').style.display = "";
                    document.getElementById('Div2_' + (i - 1) + '').style.display = "none";
                    $.post("/Data/DataSection1?type=" + types,
                                      { Name: $('#project_' + (i - 1) + '').val() },
                                      function (datas) {
                                          $('#qujian_' + (i - 1) + '').val(datas);
                                      });
                    $.post("/Data/DataUnit?type=" + types,
                                    { Name: $('#project_' + (i - 1) + '').val() },
                                    function (datas) {
                                        $('#unit_' + (i - 1) + '').val(datas);
                                    });

                }
            })

            $('#res_' + i + '').keyup(function () {
                var a = $('#res_' + (i - 1) + '').val();
                var b = $('#project_' + (i - 1) + '').val();
                if (a != "") {
                    if (b == "尿量") {
                        if (a < 1000) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 1000 && a <= 2000) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "酸碱反应") {
                        if (a < 4.5) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 4.5 && a <= 8.0) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "尿液比密") {
                        if (a < 1.015) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 1.015 && a <= 1.025) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "尿蛋白") {
                        if (a >= 0 && a <= 80) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "尿糖") {
                        if (a < 0.56) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 0.56 && a <= 5.0) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "酮体") {
                        if (a.indexOf("阴") != -1) {
                            $('#tishi_' + (i - 1) + '').val("正常");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("异常");
                        }
                    } else if (b == "尿胆红素") {
                        if (a <= 2.0 || a.indexOf("阴") != -1) {
                            $('#tishi_' + (i - 1) + '').val("正常");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("异常");
                        }
                    } else if (b == "尿胆原") {
                        if (a <= 10 || a.indexOf("阴") != -1 || a.indexOf("弱阳") != -1) {
                            $('#tishi_' + (i - 1) + '').val("正常");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("异常");
                        }
                    } else if (b == "红细胞(陂片法)") {
                        if (a >= 0 && a <= 3) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "红细胞(定量检查)") {
                        if (a >= 0 && a <= 5) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "白细胞和脓细胞(陂片法)") {
                        if (a >= 0 && a <= 5) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "白细胞和脓细胞(定量检查)") {
                        if (a >= 0 && a <= 10) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "尿钠(mmol/24h)") {
                        if (a < 130) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 130 && a <= 260) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "尿钠(g/24h)") {
                        if (a < 3) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 3 && a <= 5) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "尿钙(mmol/24h)") {
                        if (a < 2.5) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 2.5 && a <= 7.5) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "尿钙(g/24h)") {
                        if (a < 0.1) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 0.1 && a <= 0.3) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "尿钾") {
                        if (a < 51) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 51 && a <= 102) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    }

                }
            });
        }
        i++;
    } else {
        alert("请填写上一行内容！");
    }
}

