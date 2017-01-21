var types = 'csf';
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
        if ($("#project1").val() == "颜色" || $("#project1").val() == "透明度" || $("#project1").val() == "凝固物") {
            document.getElementById("d5").style.display = "none";
            document.getElementById("d6").style.display = "";
            $.post("/Data/DataResults?type=" + types,
             { Name: $("#project1").val() },
                 function (data) {
                     dat1 = eval(data);
                     $("#Select1").empty();
                     $("#Select1").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != null) {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#Select1").append("<option>" + dat1[i].result_name + "</option>");
                         }
                     }
                 });
        } else {
            document.getElementById("d5").style.display = "";
            document.getElementById("d6").style.display = "none";

        }
        $.post("/Data/DataUnit?type=" + types,
                   { Name: $("#project1").val() },
                   function (datas) {
                       $("#Text1").val(datas);
                   });

        $.post("/Data/DataSection1?type=" + types,
                   { Name: $("#project1").val() },
                   function (datas) {
                       if ($("#project1").val() == "压力(kPa)") {
                           var s = $("#age").html();
                           if (s != "") {
                               var s1 = s.split('岁');
                               if (s1[0] < 12) {
                                   $("#Text2").val("儿童0.4~1.0kPa");
                               } else {
                                   $("#Text2").val(datas);
                               }
                           }
                       } else {
                           $("#Text2").val(datas);
                       }
                   });

    })

    $("#project2").change(function () {
        if ($("#project2").val() == "颜色" || $("#project2").val() == "透明度" || $("#project2").val() == "凝固物") {
            document.getElementById("Div1").style.display = "none";
            document.getElementById("Div2").style.display = "";
            $.post("/Data/DataResults?type=" + types,
             { Name: $("#project2").val() },
                 function (data) {
                     dat1 = eval(data);
                     $("#Select2").empty();
                     $("#Select2").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != null) {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#Select2").append("<option>" + dat1[i].result_name + "</option>");
                         }
                     }
                 });
        } else {
            document.getElementById("Div1").style.display = "";
            document.getElementById("Div2").style.display = "none";
        }
        $.post("/Data/DataUnit?type=" + types,
                  { Name: $("#project2").val() },
                  function (datas) {
                      $("#Text6").val(datas);
                  });
        $.post("/Data/DataSection1?type=" + types,
                  { Name: $("#project2").val() },
                  function (datas) {
                      if ($("#project2").val() == "压力") {
                          var s = $("#age").html();
                          if (s != "") {
                              var s1 = s.split('岁');
                              if (s1[0] < 12) {
                                  $("#Text7").val("儿童0.4~1.0kPa");
                              } else {
                                  $("#Text7").val(datas);
                              }
                          }
                      } else {
                          $("#Text7").val(datas);
                      }
                  });
    })

    $("#project3").change(function () {
        if ($("#project3").val() == "颜色" || $("#project3").val() == "透明度" || $("#project3").val() == "凝固物") {
            document.getElementById("Div3").style.display = "none";
            document.getElementById("Div4").style.display = "";
            $.post("/Data/DataResults?type=" + types,
             { Name: $("#project3").val() },
                 function (data) {
                     dat1 = eval(data);
                     $("#Select3").empty();
                     $("#Select3").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != null) {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#Select3").append("<option>" + dat1[i].result_name + "</option>");
                         }
                     }
                 });
        } else {
            document.getElementById("Div3").style.display = "";
            document.getElementById("Div4").style.display = "none";
        }
        $.post("/Data/DataUnit?type=" + types,
                  { Name: $("#project3").val() },
                  function (datas) {
                      $("#Text10").val(datas);
                  });
        $.post("/Data/DataSection1?type=" + types,
                   { Name: $("#project3").val() },
                   function (datas) {
                       if ($("#project3").val() == "压力") {
                           var s = $("#age").html();
                           if (s != "") {
                               var s1 = s.split('岁');
                               if (s1[0] < 12) {
                                   $("#Text11").val("儿童0.4~1.0kPa");
                               } else {
                                   $("#Text11").val(datas);
                               }
                           }
                       } else {
                           $("#Text11").val(datas);
                       }
                   });
    })


    $("#project4").change(function () {
        if ($("#project4").val() == "颜色" || $("#project4").val() == "透明度" || $("#project4").val() == "凝固物") {
            document.getElementById("Div5").style.display = "none";
            document.getElementById("Div6").style.display = "";
            $.post("/Data/DataResults?type=" + types,
             { Name: $("#project4").val() },
                 function (data) {
                     dat1 = eval(data);
                     $("#Select4").empty();
                     $("#Select4").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != null) {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#Select4").append("<option>" + dat1[i].result_name + "</option>");
                         }
                     }
                 });
        } else {
            document.getElementById("Div5").style.display = "";
            document.getElementById("Div6").style.display = "none";
        }
        $.post("/Data/DataUnit?type=" + types,
                 { Name: $("#project4").val() },
                 function (datas) {
                     $("#Text14").val(datas);
                 });
        $.post("/Data/DataSection1?type=" + types,
                   { Name: $("#project4").val() },
                   function (datas) {
                       if ($("#project4").val() == "压力") {
                           var s = $("#age").html();
                           if (s != "") {
                               var s1 = s.split('岁');
                               if (s1[0] < 12) {
                                   $("#Text15").val("儿童0.4~1.0kPa");
                               } else {
                                   $("#Text15").val(datas);
                               }
                           }
                       } else {
                           $("#Text15").val(datas);
                       }
                   });
    })
    $("#project5").change(function () {
        if ($("#project5").val() == "颜色" || $("#project5").val() == "透明度" || $("#project5").val() == "凝固物") {
            document.getElementById("Div7").style.display = "none";
            document.getElementById("Div8").style.display = "";
            $.post("/Data/DataResults?type=" + types,
             { Name: $("#project5").val() },
                 function (data) {
                     dat1 = eval(data);
                     $("#Select5").empty();
                     $("#Select5").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != null) {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#Select5").append("<option>" + dat1[i].result_name + "</option>");
                         }
                     }
                 });
        } else {
            document.getElementById("Div7").style.display = "";
            document.getElementById("Div8").style.display = "none";
        }
        $.post("/Data/DataUnit?type=" + types,
                  { Name: $("#project5").val() },
                  function (datas) {
                      $("#Text18").val(datas);
                  });
        $.post("/Data/DataSection1?type=" + types,
                   { Name: $("#project5").val() },
                   function (datas) {
                       if ($("#project5").val() == "压力") {
                           var s = $("#age").html();
                           if (s != "") {
                               var s1 = s.split('岁');
                               if (s1[0] < 12) {
                                   $("#Text19").val("儿童0.4~1.0kPa");
                               } else {
                                   $("#Text19").val(datas);
                               }
                           }
                       } else {
                           $("#Text19").val(datas);
                       }
                   });
    })
    //===============================================================填入结果 给出提示======================================================================
    $("#res1").keyup(function () {
        var name = $("#project1").val();
        var a = $("#res1").val();
        if (name == "压力(kPa)") {
            var s = $("#age").html();
            if (s != "") {
                var s1 = s.split('岁');
                if (s1[0] < 12) {
                    if (a < 0.4) {
                        $("#Text3").val("↓");
                    } else if (a <= 1.0 && a >= 0.4) {
                        $("#Text3").val("--");
                    } else {
                        $("#Text3").val("↑");
                    }
                } else {
                    if (a < 0.78) {
                        $("#Text3").val("↓");
                    } else if (a >= 0.78 && a <= 1.76) {
                        $("#Text3").val("--");
                    } else {
                        $("#Text3").val("↑");
                    }
                }
            }
        } else if (name == "压力(mmH2O)") {
            if (a < 80) {
                $("#Text3").val("↓");
            } else if (a >= 80 && a <= 180) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "蛋白定性试验(Pandy)") {
            if (a.indexOf("阴") != -1 || a.indexOf("弱阳") != -1) {
                $("#Text3").val("正常");
            } else {
                $("#Text3").val("异常");
            }
        } else if (name == "蛋白定量试验(腰椎穿刺)") {
            if (a < 0.20) {
                $("#Text3").val("↓");
            } else if (a >= 0.20 && a <= 0.45) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "蛋白定量试验(小脑延髓池穿刺)") {
            if (a < 0.10) {
                $("#Text3").val("↓");
            } else if (a >= 0.10 && a <= 0.25) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "蛋白定量试验(脑室穿刺)") {
            if (a < 0.05) {
                $("#Text3").val("↓");
            } else if (a >= 0.05 && a <= 0.15) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "葡萄糖测定") {
            if (a < 2.5) {
                $("#Text3").val("↓");
            } else if (a >= 2.5 && a <= 4.5) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "氯化物测定") {
            if (a < 120) {
                $("#Text3").val("↓");
            } else if (a >= 120 && a <= 130) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "脑脊液pH值") {
            if (a < 7.31) {
                $("#Text3").val("↓");
            } else if (a >= 7.31 && a <= 7.34) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "乳酸脱氢酶测定(LDH)") {
            if (a < 3) {
                $("#Text3").val("↓");
            } else if (a >= 3 && a <= 4) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "天冬氨酸氨基转移酶(AST)测定") {
            if (a < 5) {
                $("#Text3").val("↓");
            } else if (a >= 5 && a <= 20) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "肌酸激酶(CK)测定") {
            if (a < 0.68) {
                $("#Text3").val("↓");
            } else if (a >= 0.68 && a <= 1.20) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "腺苷脱氢酶(ADA)") {
            if (a <= 8) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "显微镜检查") {
            if (a <= 8) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "免疫球蛋白(IgG)") {
            if (a < 0.01) {
                $("#Text3").val("↓");
            } else if (a >= 0.01 && a <= 0.04) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "免疫球蛋白(IgA)") {
            if (a < 0.001) {
                $("#Text3").val("↓");
            } else if (a >= 0.001 && a <= 0.006) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "免疫球蛋白(IgM)") {
            if (a < 0.00011) {
                $("#Text3").val("↓");
            } else if (a >= 0.00011 && a <= 0.00022) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "结核性脑膜炎抗体" || name == "乙型脑炎病毒抗原" || name == "肿瘤细胞") {
            if (a.indexOf("阴性") != -1) {
                $("#Text3").val("正常");
            } else {
                $("#Text3").val("异常");
            }
        } else if (name == "髓鞘碱性蛋白测定") {
            if (a <= 4) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "tau蛋白测定") {
            if (a < 375) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "前清蛋白") {
            if (a < 2) {
                $("#Text3").val("↓");
            } else if (a >= 2 && a <= 7) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "清蛋白") {
            if (a < 56) {
                $("#Text3").val("↓");
            } else if (a >= 56 && a <= 76) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "α1球蛋白") {
            if (a < 2) {
                $("#Text3").val("↓");
            } else if (a >= 2 && a <= 7) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "α2球蛋白") {
            if (a < 0.01) {
                $("#Text3").val("↓");
            } else if (a >= 4 && a <= 12) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "β球蛋白") {
            if (a < 0.01) {
                $("#Text3").val("↓");
            } else if (a >= 8 && a <= 18) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        } else if (name == "γ球蛋白") {
            if (a < 0.01) {
                $("#Text3").val("↓");
            } else if (a >= 3 && a <= 12) {
                $("#Text3").val("--");
            } else {
                $("#Text3").val("↑");
            }
        }
    })

    $("#res2").keyup(function () {
        var name = $("#project2").val();
        var a = $("#res2").val();
        if (name == "压力(kPa)") {
            var s = $("#age").html();
            if (s != "") {
                var s1 = s.split('岁');
                if (s1[0] < 12) {
                    if (a < 0.4) {
                        $("#Text8").val("↓");
                    } else if (a <= 1.0 && a >= 0.4) {
                        $("#Text8").val("--");
                    } else {
                        $("#Text8").val("↑");
                    }
                } else {
                    if (a < 0.78) {
                        $("#Text8").val("↓");
                    } else if (a >= 0.78 && a <= 1.76) {
                        $("#Text8").val("--");
                    } else {
                        $("#Text8").val("↑");
                    }
                }
            }
        } else if (name == "压力(mmH2O)") {
            if (a < 80) {
                $("#Text8").val("↓");
            } else if (a >= 80 && a <= 180) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "蛋白定性试验(Pandy)") {
            if (a.indexOf("阴") != -1 || a.indexOf("弱阳") != -1) {
                $("#Text8").val("正常");
            } else {
                $("#Text8").val("异常");
            }
        } else if (name == "蛋白定量试验(腰椎穿刺)") {
            if (a < 0.20) {
                $("#Text8").val("↓");
            } else if (a >= 0.20 && a <= 0.45) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "蛋白定量试验(小脑延髓池穿刺)") {
            if (a < 0.10) {
                $("#Text8").val("↓");
            } else if (a >= 0.10 && a <= 0.25) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "蛋白定量试验(脑室穿刺)") {
            if (a < 0.05) {
                $("#Text8").val("↓");
            } else if (a >= 0.05 && a <= 0.15) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "葡萄糖测定") {
            if (a < 2.5) {
                $("#Text8").val("↓");
            } else if (a >= 2.5 && a <= 4.5) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "氯化物测定") {
            if (a < 120) {
                $("#Text8").val("↓");
            } else if (a >= 120 && a <= 130) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "脑脊液pH值") {
            if (a < 7.31) {
                $("#Text8").val("↓");
            } else if (a >= 7.31 && a <= 7.34) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "乳酸脱氢酶测定(LDH)") {
            if (a < 3) {
                $("#Text8").val("↓");
            } else if (a >= 3 && a <= 4) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "天冬氨酸氨基转移酶(AST)测定") {
            if (a < 5) {
                $("#Text8").val("↓");
            } else if (a >= 5 && a <= 20) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "肌酸激酶(CK)测定") {
            if (a < 0.68) {
                $("#Text8").val("↓");
            } else if (a >= 0.68 && a <= 1.20) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "腺苷脱氢酶(ADA)") {
            if (a <= 8) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "显微镜检查") {
            if (a <= 8) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "免疫球蛋白(IgG)") {
            if (a < 0.01) {
                $("#Text8").val("↓");
            } else if (a >= 0.01 && a <= 0.04) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "免疫球蛋白(IgA)") {
            if (a < 0.001) {
                $("#Text8").val("↓");
            } else if (a >= 0.001 && a <= 0.006) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "免疫球蛋白(IgM)") {
            if (a < 0.00011) {
                $("#Text8").val("↓");
            } else if (a >= 0.00011 && a <= 0.00022) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "结核性脑膜炎抗体" || name == "乙型脑炎病毒抗原" || name == "肿瘤细胞") {
            if (a.indexOf("阴性") != -1) {
                $("#Text8").val("正常");
            } else {
                $("#Text8").val("异常");
            }
        } else if (name == "髓鞘碱性蛋白测定") {
            if (a <= 4) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "tau蛋白测定") {
            if (a < 375) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "前清蛋白") {
            if (a < 2) {
                $("#Text8").val("↓");
            } else if (a >= 2 && a <= 7) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "清蛋白") {
            if (a < 56) {
                $("#Text8").val("↓");
            } else if (a >= 56 && a <= 76) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "α1球蛋白") {
            if (a < 2) {
                $("#Text8").val("↓");
            } else if (a >= 2 && a <= 7) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "α2球蛋白") {
            if (a < 0.01) {
                $("#Text8").val("↓");
            } else if (a >= 4 && a <= 12) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "β球蛋白") {
            if (a < 0.01) {
                $("#Text8").val("↓");
            } else if (a >= 8 && a <= 18) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        } else if (name == "γ球蛋白") {
            if (a < 0.01) {
                $("#Text8").val("↓");
            } else if (a >= 3 && a <= 12) {
                $("#Text8").val("--");
            } else {
                $("#Text8").val("↑");
            }
        }
    })

    $("#res3").keyup(function () {
        var name = $("#project3").val();
        var a = $("#res3").val();
        if (name == "压力(kPa)") {
            var s = $("#age").html();
            if (s != "") {
                var s1 = s.split('岁');
                if (s1[0] < 12) {
                    if (a < 0.4) {
                        $("#Text12").val("↓");
                    } else if (a <= 1.0 && a >= 0.4) {
                        $("#Text12").val("--");
                    } else {
                        $("#Text12").val("↑");
                    }
                } else {
                    if (a < 0.78) {
                        $("#Text12").val("↓");
                    } else if (a >= 0.78 && a <= 1.76) {
                        $("#Text12").val("--");
                    } else {
                        $("#Text12").val("↑");
                    }
                }
            }
        } else if (name == "压力(mmH2O)") {
            if (a < 80) {
                $("#Text12").val("↓");
            } else if (a >= 80 && a <= 180) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "蛋白定性试验(Pandy)") {
            if (a.indexOf("阴") != -1 || a.indexOf("弱阳") != -1) {
                $("#Text12").val("正常");
            } else {
                $("#Text12").val("异常");
            }
        } else if (name == "蛋白定量试验(腰椎穿刺)") {
            if (a < 0.20) {
                $("#Text12").val("↓");
            } else if (a >= 0.20 && a <= 0.45) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "蛋白定量试验(小脑延髓池穿刺)") {
            if (a < 0.10) {
                $("#Text12").val("↓");
            } else if (a >= 0.10 && a <= 0.25) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "蛋白定量试验(脑室穿刺)") {
            if (a < 0.05) {
                $("#Text12").val("↓");
            } else if (a >= 0.05 && a <= 0.15) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "葡萄糖测定") {
            if (a < 2.5) {
                $("#Text12").val("↓");
            } else if (a >= 2.5 && a <= 4.5) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "氯化物测定") {
            if (a < 120) {
                $("#Text12").val("↓");
            } else if (a >= 120 && a <= 130) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "脑脊液pH值") {
            if (a < 7.31) {
                $("#Text12").val("↓");
            } else if (a >= 7.31 && a <= 7.34) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "乳酸脱氢酶测定(LDH)") {
            if (a < 3) {
                $("#Text12").val("↓");
            } else if (a >= 3 && a <= 4) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "天冬氨酸氨基转移酶(AST)测定") {
            if (a < 5) {
                $("#Text12").val("↓");
            } else if (a >= 5 && a <= 20) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "肌酸激酶(CK)测定") {
            if (a < 0.68) {
                $("#Text12").val("↓");
            } else if (a >= 0.68 && a <= 1.20) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "腺苷脱氢酶(ADA)") {
            if (a <= 8) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "显微镜检查") {
            if (a <= 8) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "免疫球蛋白(IgG)") {
            if (a < 0.01) {
                $("#Text12").val("↓");
            } else if (a >= 0.01 && a <= 0.04) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "免疫球蛋白(IgA)") {
            if (a < 0.001) {
                $("#Text12").val("↓");
            } else if (a >= 0.001 && a <= 0.006) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "免疫球蛋白(IgM)") {
            if (a < 0.00011) {
                $("#Text12").val("↓");
            } else if (a >= 0.00011 && a <= 0.00022) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "结核性脑膜炎抗体" || name == "乙型脑炎病毒抗原" || name == "肿瘤细胞") {
            if (a.indexOf("阴性") != -1) {
                $("#Text12").val("正常");
            } else {
                $("#Text12").val("异常");
            }
        } else if (name == "髓鞘碱性蛋白测定") {
            if (a <= 4) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "tau蛋白测定") {
            if (a < 375) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "前清蛋白") {
            if (a < 2) {
                $("#Text12").val("↓");
            } else if (a >= 2 && a <= 7) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "清蛋白") {
            if (a < 56) {
                $("#Text12").val("↓");
            } else if (a >= 56 && a <= 76) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "α1球蛋白") {
            if (a < 2) {
                $("#Text12").val("↓");
            } else if (a >= 2 && a <= 7) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "α2球蛋白") {
            if (a < 0.01) {
                $("#Text12").val("↓");
            } else if (a >= 4 && a <= 12) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "β球蛋白") {
            if (a < 0.01) {
                $("#Text12").val("↓");
            } else if (a >= 8 && a <= 18) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        } else if (name == "γ球蛋白") {
            if (a < 0.01) {
                $("#Text12").val("↓");
            } else if (a >= 3 && a <= 12) {
                $("#Text12").val("--");
            } else {
                $("#Text12").val("↑");
            }
        }
    })

    $("#res4").keyup(function () {
        var name = $("#project4").val();
        var a = $("#res4").val();
        if (name == "压力(kPa)") {
            var s = $("#age").html();
            if (s != "") {
                var s1 = s.split('岁');
                if (s1[0] < 12) {
                    if (a < 0.4) {
                        $("#Text16").val("↓");
                    } else if (a <= 1.0 && a >= 0.4) {
                        $("#Text16").val("--");
                    } else {
                        $("#Text16").val("↑");
                    }
                } else {
                    if (a < 0.78) {
                        $("#Text16").val("↓");
                    } else if (a >= 0.78 && a <= 1.76) {
                        $("#Text16").val("--");
                    } else {
                        $("#Text16").val("↑");
                    }
                }
            }
        } else if (name == "压力(mmH2O)") {
            if (a < 80) {
                $("#Text16").val("↓");
            } else if (a >= 80 && a <= 180) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "蛋白定性试验(Pandy)") {
            if (a.indexOf("阴") != -1 || a.indexOf("弱阳") != -1) {
                $("#Text16").val("正常");
            } else {
                $("#Text16").val("异常");
            }
        } else if (name == "蛋白定量试验(腰椎穿刺)") {
            if (a < 0.20) {
                $("#Text16").val("↓");
            } else if (a >= 0.20 && a <= 0.45) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "蛋白定量试验(小脑延髓池穿刺)") {
            if (a < 0.10) {
                $("#Text16").val("↓");
            } else if (a >= 0.10 && a <= 0.25) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "蛋白定量试验(脑室穿刺)") {
            if (a < 0.05) {
                $("#Text16").val("↓");
            } else if (a >= 0.05 && a <= 0.15) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "葡萄糖测定") {
            if (a < 2.5) {
                $("#Text16").val("↓");
            } else if (a >= 2.5 && a <= 4.5) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "氯化物测定") {
            if (a < 120) {
                $("#Text16").val("↓");
            } else if (a >= 120 && a <= 130) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "脑脊液pH值") {
            if (a < 7.31) {
                $("#Text16").val("↓");
            } else if (a >= 7.31 && a <= 7.34) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "乳酸脱氢酶测定(LDH)") {
            if (a < 3) {
                $("#Text16").val("↓");
            } else if (a >= 3 && a <= 4) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "天冬氨酸氨基转移酶(AST)测定") {
            if (a < 5) {
                $("#Text16").val("↓");
            } else if (a >= 5 && a <= 20) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "肌酸激酶(CK)测定") {
            if (a < 0.68) {
                $("#Text16").val("↓");
            } else if (a >= 0.68 && a <= 1.20) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "腺苷脱氢酶(ADA)") {
            if (a <= 8) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "显微镜检查") {
            if (a <= 8) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "免疫球蛋白(IgG)") {
            if (a < 0.01) {
                $("#Text16").val("↓");
            } else if (a >= 0.01 && a <= 0.04) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "免疫球蛋白(IgA)") {
            if (a < 0.001) {
                $("#Text16").val("↓");
            } else if (a >= 0.001 && a <= 0.006) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "免疫球蛋白(IgM)") {
            if (a < 0.00011) {
                $("#Text16").val("↓");
            } else if (a >= 0.00011 && a <= 0.00022) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "结核性脑膜炎抗体" || name == "乙型脑炎病毒抗原" || name == "肿瘤细胞") {
            if (a.indexOf("阴性") != -1) {
                $("#Text16").val("正常");
            } else {
                $("#Text16").val("异常");
            }
        } else if (name == "髓鞘碱性蛋白测定") {
            if (a <= 4) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "tau蛋白测定") {
            if (a < 375) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "前清蛋白") {
            if (a < 2) {
                $("#Text16").val("↓");
            } else if (a >= 2 && a <= 7) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "清蛋白") {
            if (a < 56) {
                $("#Text16").val("↓");
            } else if (a >= 56 && a <= 76) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "α1球蛋白") {
            if (a < 2) {
                $("#Text16").val("↓");
            } else if (a >= 2 && a <= 7) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "α2球蛋白") {
            if (a < 0.01) {
                $("#Text16").val("↓");
            } else if (a >= 4 && a <= 12) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "β球蛋白") {
            if (a < 0.01) {
                $("#Text16").val("↓");
            } else if (a >= 8 && a <= 18) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        } else if (name == "γ球蛋白") {
            if (a < 0.01) {
                $("#Text16").val("↓");
            } else if (a >= 3 && a <= 12) {
                $("#Text16").val("--");
            } else {
                $("#Text16").val("↑");
            }
        }
    })

    $("#res5").keyup(function () {
        var name = $("#project5").val();
        var a = $("#res5").val();
        if (name == "压力(kPa)") {
            var s = $("#age").html();
            if (s != "") {
                var s1 = s.split('岁');
                if (s1[0] < 12) {
                    if (a < 0.4) {
                        $("#Text20").val("↓");
                    } else if (a <= 1.0 && a >= 0.4) {
                        $("#Text20").val("--");
                    } else {
                        $("#Text20").val("↑");
                    }
                } else {
                    if (a < 0.78) {
                        $("#Text20").val("↓");
                    } else if (a >= 0.78 && a <= 1.76) {
                        $("#Text20").val("--");
                    } else {
                        $("#Text20").val("↑");
                    }
                }
            }
        } else if (name == "压力(mmH2O)") {
            if (a < 80) {
                $("#Text20").val("↓");
            } else if (a >= 80 && a <= 180) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "蛋白定性试验(Pandy)") {
            if (a.indexOf("阴") != -1 || a.indexOf("弱阳") != -1) {
                $("#Text20").val("正常");
            } else {
                $("#Text20").val("异常");
            }
        } else if (name == "蛋白定量试验(腰椎穿刺)") {
            if (a < 0.20) {
                $("#Text20").val("↓");
            } else if (a >= 0.20 && a <= 0.45) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "蛋白定量试验(小脑延髓池穿刺)") {
            if (a < 0.10) {
                $("#Text20").val("↓");
            } else if (a >= 0.10 && a <= 0.25) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "蛋白定量试验(脑室穿刺)") {
            if (a < 0.05) {
                $("#Text20").val("↓");
            } else if (a >= 0.05 && a <= 0.15) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "葡萄糖测定") {
            if (a < 2.5) {
                $("#Text20").val("↓");
            } else if (a >= 2.5 && a <= 4.5) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "氯化物测定") {
            if (a < 120) {
                $("#Text20").val("↓");
            } else if (a >= 120 && a <= 130) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "脑脊液pH值") {
            if (a < 7.31) {
                $("#Text20").val("↓");
            } else if (a >= 7.31 && a <= 7.34) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "乳酸脱氢酶测定(LDH)") {
            if (a < 3) {
                $("#Text20").val("↓");
            } else if (a >= 3 && a <= 4) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "天冬氨酸氨基转移酶(AST)测定") {
            if (a < 5) {
                $("#Text20").val("↓");
            } else if (a >= 5 && a <= 20) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "肌酸激酶(CK)测定") {
            if (a < 0.68) {
                $("#Text20").val("↓");
            } else if (a >= 0.68 && a <= 1.20) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "腺苷脱氢酶(ADA)") {
            if (a <= 8) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "显微镜检查") {
            if (a <= 8) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "免疫球蛋白(IgG)") {
            if (a < 0.01) {
                $("#Text20").val("↓");
            } else if (a >= 0.01 && a <= 0.04) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "免疫球蛋白(IgA)") {
            if (a < 0.001) {
                $("#Text20").val("↓");
            } else if (a >= 0.001 && a <= 0.006) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "免疫球蛋白(IgM)") {
            if (a < 0.00011) {
                $("#Text20").val("↓");
            } else if (a >= 0.00011 && a <= 0.00022) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "结核性脑膜炎抗体" || name == "乙型脑炎病毒抗原" || name == "肿瘤细胞") {
            if (a.indexOf("阴性") != -1) {
                $("#Text20").val("正常");
            } else {
                $("#Text20").val("异常");
            }
        } else if (name == "髓鞘碱性蛋白测定") {
            if (a <= 4) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "tau蛋白测定") {
            if (a < 375) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "前清蛋白") {
            if (a < 2) {
                $("#Text20").val("↓");
            } else if (a >= 2 && a <= 7) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "清蛋白") {
            if (a < 56) {
                $("#Text20").val("↓");
            } else if (a >= 56 && a <= 76) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "α1球蛋白") {
            if (a < 2) {
                $("#Text20").val("↓");
            } else if (a >= 2 && a <= 7) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "α2球蛋白") {
            if (a < 0.01) {
                $("#Text20").val("↓");
            } else if (a >= 4 && a <= 12) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "β球蛋白") {
            if (a < 0.01) {
                $("#Text20").val("↓");
            } else if (a >= 8 && a <= 18) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        } else if (name == "γ球蛋白") {
            if (a < 0.01) {
                $("#Text20").val("↓");
            } else if (a >= 3 && a <= 12) {
                $("#Text20").val("--");
            } else {
                $("#Text20").val("↑");
            }
        }
    })
    //===============================================================修改内容 打开显示======================================================================
    $.post("/MedicalHistory_TestReport_CSF/Show?id=" + id,
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
                               $("#project1").val(dts[0].name1);
                               $("#project2").val(dts[0].name2);
                               $("#project3").val(dts[0].name3);
                               $("#project4").val(dts[0].name4);
                               $("#project5").val(dts[0].name5);
                           });


                       if (dts[0].name1 == "颜色" || dts[0].name1 == "透明度" || dts[0].name1 == "凝固物") {
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
                                               $("#Select1").append("<option>" + dat1[i].result_name + "</option>");
                                           }
                                       }
                                       $("#Select1").val(dts[0].result1);
                                   });
                       } else {
                           document.getElementById("d5").style.display = "";
                           document.getElementById("d6").style.display = "none";
                           $("#res1").val(dts[0].result1);
                       }
                       if (dts[0].name2 == "颜色" || dts[0].name2 == "透明度" || dts[0].name2 == "凝固物") {
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
                                               $("#Select2").append("<option>" + dat1[i].result_name + "</option>");
                                           }
                                       }
                                       $("#Select2").val(dts[0].result2);

                                   });
                       } else {
                           document.getElementById("Div1").style.display = "";
                           document.getElementById("Div2").style.display = "none";
                           $("#res2").val(dts[0].result2);
                       }

                       if (dts[0].name3 == "颜色" || dts[0].name3 == "透明度" || dts[0].name3 == "凝固物") {
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
                                               $("#Select3").append("<option>" + dat1[i].result_name + "</option>");
                                           }
                                       }
                                       $("#Select3").val(dts[0].result3);

                                   });
                       } else {
                           document.getElementById("Div3").style.display = "";
                           document.getElementById("Div4").style.display = "none";
                           $("#res3").val(dts[0].result3);
                       }

                       if (dts[0].name4 == "颜色" || dts[0].name4 == "透明度" || dts[0].name4 == "凝固物") {
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
                                               $("#Select4").append("<option>" + dat1[i].result_name + "</option>");
                                           }
                                       }
                                       $("#Select4").val(dts[0].result4);

                                   });
                       } else {
                           document.getElementById("Div5").style.display = "";
                           document.getElementById("Div6").style.display = "none";
                           $("#res4").val(dts[0].result4);
                       }
                       if (dts[0].name5 == "颜色" || dts[0].name5 == "透明度" || dts[0].name5 == "凝固物") {
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
                                               $("#Select5").append("<option>" + dat1[i].result_name + "</option>");
                                           }
                                       }
                                       $("#Select5").val(dts[0].result5);
                                   });
                       } else {
                           document.getElementById("Div7").style.display = "";
                           document.getElementById("Div8").style.display = "none";
                           $("#res5").val(dts[0].result5);
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



                       $.post("/MedicalHistory_TestReport_CSF/ShowAdd?id=" + id,
                         function (datas) {
                             dat = eval(datas);
                             if (dat != "") {
                                 for (i = 1; i < (dat.length + 1) ; i++) {
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
                        '<td class="auto-style226">' +
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
                                                            if (dat[j2 - 1].name == "颜色" || dat[j2 - 1].name == "透明度" || dat[j2 - 1].name == "凝固物") {
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
                                                                document.getElementById('f_' + j2 + '').style.display = "none";
                                                                $('#res_' + j2 + '').val(dat[j2 - 1].result);
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
        $.post("/MedicalHistory_TestReport_CSF/AddAndUpdate?id=" + id + "&worker=" + worker + "&community_code=" + community_code,
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
        if (i < 29) {
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
                            '<td class="auto-style226">' +
                                '<input type="text" id="unit_' + i + '" name="unit_' + i + '" style="border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width: 100px;"" />' +
                            '</td>' +
                            '<td class="auto-style188">' +
                                '<input type="text" id="qujian_' + i + '" name="qujian_' + i + '"  style="border-style: none; border-color: inherit; background-color: #e2ebfb; border-width: 0px;width:220px"/>' +
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
                if ($('#project_' + (i - 1) + '').val() == "颜色" || $('#project_' + (i - 1) + '').val() == "透明度" || $('#project_' + (i - 1) + '').val() == "凝固物") {
                    document.getElementById('d_' + (i - 1) + '').style.display = "none";
                    document.getElementById('f_' + (i - 1) + '').style.display = "";
                    $.post("/Data/DataResults?type=" + types,
                     { Name: $('#project_' + (i - 1) + '').val() },
                         function (data) {
                             dat1 = eval(data);
                             $('#Select_' + (i - 1) + '').empty();
                             $('#Select_' + (i - 1) + '').append("<option value=" + "" + ">==请选择==</option>");
                             if (dat1 != null) {
                                 for (var s = 0; s < dat1.length; s++) {
                                     $('#Select_' + (i - 1) + '').append("<option>" + dat1[s].result_name + "</option>");
                                 }
                             }
                         });
                } else {
                    document.getElementById('d_' + (i - 1) + '').style.display = "";
                    document.getElementById('f_' + (i - 1) + '').style.display = "none";
                }

                $.post("/Data/DataUnit?type=" + types,
                          { Name: $('#project_' + (i - 1) + '').val() },
                          function (datas) {
                              $('#unit_' + (i - 1) + '').val(datas);
                          });
                $.post("/Data/DataSection1?type=" + types,
                            { Name: $('#project_' + (i - 1) + '').val() },
                            function (datas) {
                                if ($('#project_' + (i - 1) + '').val() == "压力") {
                                    var s = $("#age").html();
                                    if (s != "") {
                                        var s1 = s.split('岁');
                                        if (s1[0] < 12) {
                                            $('#qujian_' + (i - 1) + '').val("儿童0.4~1.0kPa");
                                        } else {
                                            $('#qujian_' + (i - 1) + '').val(datas);
                                        }
                                    }
                                } else {
                                    $('#qujian_' + (i - 1) + '').val(datas);
                                }
                            });
            })
            $('#res_' + i + '').keyup(function () {
                var name = $('#project_' + (i - 1) + '').val();
                var a = $('#res_' + (i - 1) + '').val();
                if (name == "压力(kPa)") {
                    var s = $("#age").html();
                    if (s != "") {
                        var s1 = s.split('岁');
                        if (s1[0] < 12) {
                            if (a < 0.4) {
                                $('#tishi_' + (i - 1) + '').val("↓");
                            } else if (a <= 1.0 && a >= 0.4) {
                                $('#tishi_' + (i - 1) + '').val("--");
                            } else {
                                $('#tishi_' + (i - 1) + '').val("↑");
                            }
                        } else {
                            if (a < 0.78) {
                                $('#tishi_' + (i - 1) + '').val("↓");
                            } else if (a >= 0.78 && a <= 1.76) {
                                $('#tishi_' + (i - 1) + '').val("--");
                            } else {
                                $('#tishi_' + (i - 1) + '').val("↑");
                            }
                        }
                    }
                } else if (name == "压力(mmH2O)") {
                    if (a < 80) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 80 && a <= 180) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "蛋白定性试验(Pandy)") {
                    if (a.indexOf("阴") != -1 || a.indexOf("弱阳") != -1) {
                        $('#tishi_' + (i - 1) + '').val("正常");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("异常");
                    }
                } else if (name == "蛋白定量试验(腰椎穿刺)") {
                    if (a < 0.20) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 0.20 && a <= 0.45) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "蛋白定量试验(小脑延髓池穿刺)") {
                    if (a < 0.10) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 0.10 && a <= 0.25) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "蛋白定量试验(脑室穿刺)") {
                    if (a < 0.05) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 0.05 && a <= 0.15) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "葡萄糖测定") {
                    if (a < 2.5) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 2.5 && a <= 4.5) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "氯化物测定") {
                    if (a < 120) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 120 && a <= 130) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "脑脊液pH值") {
                    if (a < 7.31) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 7.31 && a <= 7.34) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "乳酸脱氢酶测定(LDH)") {
                    if (a < 3) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 3 && a <= 4) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "天冬氨酸氨基转移酶(AST)测定") {
                    if (a < 5) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 5 && a <= 20) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "肌酸激酶(CK)测定") {
                    if (a < 0.68) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 0.68 && a <= 1.20) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "腺苷脱氢酶(ADA)") {
                    if (a <= 8) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "显微镜检查") {
                    if (a <= 8) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "免疫球蛋白(IgG)") {
                    if (a < 0.01) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 0.01 && a <= 0.04) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "免疫球蛋白(IgA)") {
                    if (a < 0.001) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 0.001 && a <= 0.006) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "免疫球蛋白(IgM)") {
                    if (a < 0.00011) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 0.00011 && a <= 0.00022) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "结核性脑膜炎抗体" || name == "乙型脑炎病毒抗原" || name == "肿瘤细胞") {
                    if (a.indexOf("阴性") != -1) {
                        $('#tishi_' + (i - 1) + '').val("正常");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("异常");
                    }
                } else if (name == "髓鞘碱性蛋白测定") {
                    if (a <= 4) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "tau蛋白测定") {
                    if (a < 375) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "前清蛋白") {
                    if (a < 2) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 2 && a <= 7) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "清蛋白") {
                    if (a < 56) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 56 && a <= 76) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "α1球蛋白") {
                    if (a < 2) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 2 && a <= 7) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "α2球蛋白") {
                    if (a < 0.01) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 4 && a <= 12) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "β球蛋白") {
                    if (a < 0.01) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 8 && a <= 18) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                } else if (name == "γ球蛋白") {
                    if (a < 0.01) {
                        $('#tishi_' + (i - 1) + '').val("↓");
                    } else if (a >= 3 && a <= 12) {
                        $('#tishi_' + (i - 1) + '').val("--");
                    } else {
                        $('#tishi_' + (i - 1) + '').val("↑");
                    }
                }
            })
        }
        i++;
    } else {
        alert("请填写上一行内容！");
    }
}

