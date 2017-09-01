$(function () {
    if (no == "1") {
        $("#last").hide();
    } else if (no == "2") {
        $("#cd").hide();
    }

    //开始加载时---
    $("input[name='week1']").attr("disabled", true);
    $("input[name='week2']").attr("disabled", true);
    $("input[name='week3']").attr("disabled", true);
    $("input[name='week4']").attr("disabled", true);
    $("input[name='week5']").attr("disabled", true);
    $("input[name='week6']").attr("disabled", true);
    $("input[name='week7']").attr("disabled", true);
    $("input[name='week8']").attr("disabled", true);
    $("input[name='week9']").attr("disabled", true);
    $("input[name='week10']").attr("disabled", true);
    $("input[name='week11']").attr("disabled", true);
    $("input[name='week12']").attr("disabled", true);
    $("input[name='week13']").attr("disabled", true);
    $("input[name='week14']").attr("disabled", true);
    $("input[name='week15']").attr("disabled", true);
    $("input[name='week16']").attr("disabled", true);
    $("input[name='week17']").attr("disabled", true);
    $("input[name='every_time1']").attr("disabled", true);
    $("input[name='every_time2']").attr("disabled", true);
    $("input[name='every_time3']").attr("disabled", true);
    $("input[name='every_time4']").attr("disabled", true);
    $("input[name='every_time5']").attr("disabled", true);
    $("input[name='every_time6']").attr("disabled", true);
    $("input[name='every_time7']").attr("disabled", true);
    $("input[name='every_time8']").attr("disabled", true);
    $("input[name='every_time9']").attr("disabled", true);
    $("input[name='every_time10']").attr("disabled", true);
    $("input[name='every_time11']").attr("disabled", true);
    $("input[name='every_time12']").attr("disabled", true);
    $("input[name='every_time13']").attr("disabled", true);
    $("input[name='every_time14']").attr("disabled", true);
    $("input[name='every_time15']").attr("disabled", true);
    $("input[name='every_time16']").attr("disabled", true);
    $("input[name='every_time17']").attr("disabled", true);
    $("input[name='speed2']").attr("disabled", true);
    $("input[name='speed3']").attr("disabled", true);

    //=============
    $("#cd").click(function () {
        $("input[name='week1']").attr("disabled", true);
        $("input[name='week2']").attr("disabled", true);
        $("input[name='week3']").attr("disabled", true);
        $("input[name='week4']").attr("disabled", true);
        $("input[name='week5']").attr("disabled", true);
        $("input[name='week6']").attr("disabled", true);
        $("input[name='week7']").attr("disabled", true);
        $("input[name='week8']").attr("disabled", true);
        $("input[name='week9']").attr("disabled", true);
        $("input[name='week10']").attr("disabled", true);
        $("input[name='week11']").attr("disabled", true);
        $("input[name='week12']").attr("disabled", true);
        $("input[name='week13']").attr("disabled", true);
        $("input[name='week14']").attr("disabled", true);
        $("input[name='week15']").attr("disabled", true);
        $("input[name='week16']").attr("disabled", true);
        $("input[name='week17']").attr("disabled", true);
        $("input[name='every_time1']").attr("disabled", true);
        $("input[name='every_time2']").attr("disabled", true);
        $("input[name='every_time3']").attr("disabled", true);
        $("input[name='every_time4']").attr("disabled", true);
        $("input[name='every_time5']").attr("disabled", true);
        $("input[name='every_time6']").attr("disabled", true);
        $("input[name='every_time7']").attr("disabled", true);
        $("input[name='every_time8']").attr("disabled", true);
        $("input[name='every_time9']").attr("disabled", true);
        $("input[name='every_time10']").attr("disabled", true);
        $("input[name='every_time11']").attr("disabled", true);
        $("input[name='every_time12']").attr("disabled", true);
        $("input[name='every_time13']").attr("disabled", true);
        $("input[name='every_time14']").attr("disabled", true);
        $("input[name='every_time15']").attr("disabled", true);
        $("input[name='every_time16']").attr("disabled", true);
        $("input[name='every_time17']").attr("disabled", true);
        $("input[name='speed2']").attr("disabled", true);
        $("input[name='speed3']").attr("disabled", true);

    })

    //=====================================================血压======================================================

    $("#ssy").keyup(function () {
        var a = $("#ssy").val();
        if (a != "") {
            if (a < 200 && a > 100) {
                document.getElementById("ssy1").value = parseFloat(a * 0.1333 + 1).toFixed(1);
            }
        }
    });

    $("#szy").keyup(function () {
        var a = $("#szy").val();
        if (a != "") {
            if (a > 60 && a < 140) {
                document.getElementById("szy1").value = parseFloat(a * 0.1333 + 1).toFixed(1);
            }
        }
    });

    $("#ssy1").keyup(function () {
        var a = $("#ssy1").val();
        if (a != "") {
            if (a < 25 && a > 10) {
                document.getElementById("ssy").value = parseInt(a / 0.1333 + 1);
            }
        }
    });

    $("#szy1").keyup(function () {
        var a = $("#szy1").val();
        if (a != "") {
            if (a < 15 && a > 2) {
                document.getElementById("szy").value = parseInt(a / 0.1333 + 1);
            }
        }
    });
    //---------------------------------------体质指数-------------------------------------------------
    $("#height").keyup(function () {
        var a = $("#height").val();
        var b = $("#weight1").val();
        if (a != "" && b != "") {
            document.getElementById("bmi").value = parseFloat(b * 10000 / (a * a) + 1).toFixed(1);
        }
    })

    $("#weight1").keyup(function () {
        var a = $("#height").val();
        var b = $("#weight1").val();
        if (a != "" && b != "") {
            document.getElementById("bmi").value = parseFloat(b * 10000 / (a * a) + 1).toFixed(1);
        }
    })

    //计算当量  2015-08-18 娄帅============================================================
    //1.白酒（50°）
    $("input[name=" + "count1" + "]").change(function () {
        var a = $("input[name='count1']:checked").val();
        if (a == "1") {
            $("#count1_dl").val(parseFloat((0.5 * 0.79) * 500 * 0.2 / 12).toFixed(1));
        } else if (a == "2") {
            $("#count1_dl").val(parseFloat((0.5 * 0.79) * 500 * 0.35 / 12).toFixed(1));
        } else if (a == "3") {
            $("#count1_dl").val(parseFloat((0.5 * 0.79) * 500 * 0.55 / 12).toFixed(1));
        } else if (a == "4") {
            $("#count1_dl").val(parseFloat((0.5 * 0.79) * 500 * 0.65 / 12).toFixed(1));
        } else if (a == "5") {
            $("#count1_dl").val(parseFloat((0.5 * 0.79) * 500 * 1.0 / 12).toFixed(1));
        } else if (a == "6") {
            $("#count1_dl").val(parseFloat((0.5 * 0.79) * 500 * 1.2 / 12).toFixed(1));
        }
    })
    //2.啤酒（12°）
    $("input[name=" + "count2" + "]").change(function () {
        var a = $("input[name='count2']:checked").val();
        if (a == "1") {
            $("#count2_dl").val(parseFloat((0.12 * 0.79) * 500 * 0.5 / 12).toFixed(1));
        } else if (a == "2") {
            $("#count2_dl").val(parseFloat((0.12 * 0.79) * 500 * 1.0 / 12).toFixed(1));
        } else if (a == "3") {
            $("#count2_dl").val(parseFloat((0.12 * 0.79) * 500 * 1.5 / 12).toFixed(1));
        } else if (a == "4") {
            $("#count2_dl").val(parseFloat((0.12 * 0.79) * 500 * 2.0 / 12).toFixed(1));
        } else if (a == "5") {
            $("#count2_dl").val(parseFloat((0.12 * 0.79) * 500 * 3.0 / 12).toFixed(1));
        } else if (a == "6") {
            $("#count2_dl").val(parseFloat((0.12 * 0.79) * 500 * 4.0 / 12).toFixed(1));
        }
    })
    //3.红酒（15°）
    $("input[name=" + "count3" + "]").change(function () {
        var a = $("input[name='count3']:checked").val();
        if (a == "1") {
            $("#count3_dl").val(parseFloat((0.15 * 0.79) * 500 * 0.2 / 12).toFixed(1));
        } else if (a == "2") {
            $("#count3_dl").val(parseFloat((0.15 * 0.79) * 500 * 0.35 / 12).toFixed(1));
        } else if (a == "3") {
            $("#count3_dl").val(parseFloat((0.15 * 0.79) * 500 * 0.55 / 12).toFixed(1));
        } else if (a == "4") {
            $("#count3_dl").val(parseFloat((0.15 * 0.79) * 500 * 0.65 / 12).toFixed(1));
        } else if (a == "5") {
            $("#count3_dl").val(parseFloat((0.15 * 0.79) * 500 * 1.0 / 12).toFixed(1));
        } else if (a == "6") {
            $("#count3_dl").val(parseFloat((0.15 * 0.79) * 500 * 1.2 / 12).toFixed(1));
        }
    })
    //4.黄酒（15°）
    $("input[name=" + "count4" + "]").change(function () {
        var a = $("input[name='count4']:checked").val();
        if (a == "1") {
            $("#count4_dl").val(parseFloat((0.15 * 0.79) * 500 * 0.5 / 12).toFixed(1));
        } else if (a == "2") {
            $("#count4_dl").val(parseFloat((0.15 * 0.79) * 500 * 1.0 / 12).toFixed(1));
        } else if (a == "3") {
            $("#count4_dl").val(parseFloat((0.15 * 0.79) * 500 * 1.5 / 12).toFixed(1));
        } else if (a == "4") {
            $("#count4_dl").val(parseFloat((0.15 * 0.79) * 500 * 2.0 / 12).toFixed(1));
        } else if (a == "5") {
            $("#count4_dl").val(parseFloat((0.15 * 0.79) * 500 * 3.0 / 12).toFixed(1));
        } else if (a == "6") {
            $("#count4_dl").val(parseFloat((0.15 * 0.79) * 500 * 4.0 / 12).toFixed(1));
        }
    })
    //5.其他  
    $("#wine_degree").keyup(function () {
        var a = $("input[name='count5']:checked").val();
        var b = $("#wine_degree").val();
        var r = /^[0-9]*[1-9][0-9]*$/　　//正整数 
        if (!r.test(b)) {
            alert("请输入正整数！");
            $("#wine_degree").val("");
        } else {
            if (a != "") {
                if (a == "1") {
                    $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 0.2 / 12).toFixed(1));
                } else if (a == "2") {
                    $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 0.4 / 12).toFixed(1));
                } else if (a == "3") {
                    $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 0.7 / 12).toFixed(1));
                } else if (a == "4") {
                    $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 1.0 / 12).toFixed(1));
                } else if (a == "5") {
                    $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 1.2 / 12).toFixed(1));
                }
            }
        }
    });

    $("input[name=" + "count5" + "]").change(function () {
        var a = $("input[name='count5']:checked").val();
        var b = $("#wine_degree").val();
        if (b == "") {
            alert("请填写酒精度！");
            $("#wine_degree").focus();
        } else {
            if (a == "1") {
                $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 0.2 / 12).toFixed(1));
            } else if (a == "2") {
                $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 0.4 / 12).toFixed(1));
            } else if (a == "3") {
                $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 0.7 / 12).toFixed(1));
            } else if (a == "4") {
                $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 1.0 / 12).toFixed(1));
            } else if (a == "5") {
                $("#count5_dl").val(parseFloat((b / 100 * 0.79) * 500 * 1.2 / 12).toFixed(1));
            }
        }
    })
    //关于其他的控制=========================================
    //1.饮酒种类
    $("#other").keyup(function () {
        var a = $("#other").val();
        if (a != "") {
            $("#other_du").attr("disabled", false);
            $("input[name='frequency5']").attr("disabled", false);
        } else {
            $("#other_du").attr("disabled", true);
            $("#other_du").val("");
            $("input[name='frequency5']").attr("disabled", true);
            $("input[name='frequency5']").attr("checked", false);
        }
    })
    //2.饮酒量
    $("#other_wine").keyup(function () {
        var a = $("#other_wine").val();
        if (a != "") {
            $("#wine_degree").attr("disabled", false);
            $("input[name='count5']").attr("disabled", false);
            $("#count5_dl").attr("disabled", false);
        } else {
            $("#wine_degree").attr("disabled", true);
            $("#wine_degree").val("");
            $("input[name='count5']").attr("disabled", true);
            $("input[name='count5']").attr("checked", false);
            $("#count5_dl").attr("disabled", true);
            $("#count5_dl").val("");
        }
    })

    //--------------------------------------体育锻炼样式控制----------------------------------------
    //------1------
    $("input[name=" + "run" + "]").change(function () {
        var a = $("input[name='run']:checked").val();
        if (a == "1") {
            $("input[name='week1']").attr("disabled", false);
            $("input[name='every_time1']").attr("disabled", false);
        } else {
            $("input[name='week1']").attr("checked", false);
            $("input[name='week1']").attr("disabled", true);
            $("input[name='every_time1']").attr("checked", false);
            $("input[name='every_time1']").attr("disabled", true);
        }
    })
    //------2------
    $("input[name=" + "cut_it" + "]").change(function () {
        var a = $("input[name='cut_it']:checked").val();
        if (a == "1") {
            $("input[name='week2']").attr("disabled", false);
            $("input[name='every_time2']").attr("disabled", false);
            $("input[name='speed2']").attr("disabled", false);
        } else {
            $("input[name='week2']").attr("checked", false);
            $("input[name='week2']").attr("disabled", true);
            $("input[name='every_time2']").attr("checked", false);
            $("input[name='every_time2']").attr("disabled", true);
            $("input[name='speed2']").attr("checked", false);
            $("input[name='speed2']").attr("disabled", true);
        }
    })
    //------3------
    $("input[name=" + "by_bike" + "]").change(function () {
        var a = $("input[name='by_bike']:checked").val();
        if (a == "1") {
            $("input[name='week3']").attr("disabled", false);
            $("input[name='every_time3']").attr("disabled", false);
            $("input[name='speed3']").attr("disabled", false);
        } else {
            $("input[name='week3']").attr("checked", false);
            $("input[name='week3']").attr("disabled", true);
            $("input[name='every_time3']").attr("checked", false);
            $("input[name='every_time3']").attr("disabled", true);
            $("input[name='speed3']").attr("checked", false);
            $("input[name='speed3']").attr("disabled", true);
        }
    })
    //------4------
    $("input[name=" + "swim" + "]").change(function () {
        var a = $("input[name='swim']:checked").val();
        if (a == "1") {
            $("input[name='week4']").attr("disabled", false);
            $("input[name='every_time4']").attr("disabled", false);
        } else {
            $("input[name='week4']").attr("checked", false);
            $("input[name='week4']").attr("disabled", true);
            $("input[name='every_time4']").attr("checked", false);
            $("input[name='every_time4']").attr("disabled", true);
        }
    })
    //------5------
    $("input[name=" + "circuit" + "]").change(function () {
        var a = $("input[name='circuit']:checked").val();
        if (a == "1") {
            $("input[name='week5']").attr("disabled", false);
            $("input[name='every_time5']").attr("disabled", false);
        } else {
            $("input[name='week5']").attr("checked", false);
            $("input[name='week5']").attr("disabled", true);
            $("input[name='every_time5']").attr("checked", false);
            $("input[name='every_time5']").attr("disabled", true);
        }
    })
    //------6------
    $("input[name=" + "ping_pong" + "]").change(function () {
        var a = $("input[name='ping_pong']:checked").val();
        if (a == "1") {
            $("input[name='week6']").attr("disabled", false);
            $("input[name='every_time6']").attr("disabled", false);
        } else {
            $("input[name='week6']").attr("checked", false);
            $("input[name='week6']").attr("disabled", true);
            $("input[name='every_time6']").attr("checked", false);
            $("input[name='every_time6']").attr("disabled", true);
        }
    })
    //------7------
    $("input[name=" + "badminton" + "]").change(function () {
        var a = $("input[name='badminton']:checked").val();
        if (a == "1") {
            $("input[name='week7']").attr("disabled", false);
            $("input[name='every_time7']").attr("disabled", false);
        } else {
            $("input[name='week7']").attr("checked", false);
            $("input[name='week7']").attr("disabled", true);
            $("input[name='every_time7']").attr("checked", false);
            $("input[name='every_time7']").attr("disabled", true);
        }
    })
    //------8------
    $("input[name=" + "football" + "]").change(function () {
        var a = $("input[name='football']:checked").val();
        if (a == "1") {
            $("input[name='week8']").attr("disabled", false);
            $("input[name='every_time8']").attr("disabled", false);
        } else {
            $("input[name='week8']").attr("checked", false);
            $("input[name='week8']").attr("disabled", true);
            $("input[name='every_time8']").attr("checked", false);
            $("input[name='every_time8']").attr("disabled", true);
        }
    })
    //------9------
    $("input[name=" + "basketball" + "]").change(function () {
        var a = $("input[name='basketball']:checked").val();
        if (a == "1") {
            $("input[name='week9']").attr("disabled", false);
            $("input[name='every_time9']").attr("disabled", false);
        } else {
            $("input[name='week9']").attr("checked", false);
            $("input[name='week9']").attr("disabled", true);
            $("input[name='every_time9']").attr("checked", false);
            $("input[name='every_time9']").attr("disabled", true);
        }
    })
    //------10------
    $("input[name=" + "tennis" + "]").change(function () {
        var a = $("input[name='tennis']:checked").val();
        if (a == "1") {
            $("input[name='week10']").attr("disabled", false);
            $("input[name='every_time10']").attr("disabled", false);
        } else {
            $("input[name='week10']").attr("checked", false);
            $("input[name='week10']").attr("disabled", true);
            $("input[name='every_time10']").attr("checked", false);
            $("input[name='every_time10']").attr("disabled", true);
        }
    })
    //------11------
    $("input[name=" + "baseball" + "]").change(function () {
        var a = $("input[name='baseball']:checked").val();
        if (a == "1") {
            $("input[name='week11']").attr("disabled", false);
            $("input[name='every_time11']").attr("disabled", false);
        } else {
            $("input[name='week11']").attr("checked", false);
            $("input[name='week11']").attr("disabled", true);
            $("input[name='every_time11']").attr("checked", false);
            $("input[name='every_time11']").attr("disabled", true);
        }
    })
    //------12------
    $("input[name=" + "golf" + "]").change(function () {
        var a = $("input[name='golf']:checked").val();
        if (a == "1") {
            $("input[name='week12']").attr("disabled", false);
            $("input[name='every_time12']").attr("disabled", false);
        } else {
            $("input[name='week12']").attr("checked", false);
            $("input[name='week12']").attr("disabled", true);
            $("input[name='every_time12']").attr("checked", false);
            $("input[name='every_time12']").attr("disabled", true);
        }
    })
    //------13------
    $("input[name=" + "bowling" + "]").change(function () {
        var a = $("input[name='bowling']:checked").val();
        if (a == "1") {
            $("input[name='week13']").attr("disabled", false);
            $("input[name='every_time13']").attr("disabled", false);
        } else {
            $("input[name='week13']").attr("checked", false);
            $("input[name='week13']").attr("disabled", true);
            $("input[name='every_time13']").attr("checked", false);
            $("input[name='every_time13']").attr("disabled", true);
        }
    })
    //------14------
    $("input[name=" + "shadowboxing" + "]").change(function () {
        var a = $("input[name='shadowboxing']:checked").val();
        if (a == "1") {
            $("input[name='week14']").attr("disabled", false);
            $("input[name='every_time14']").attr("disabled", false);
        } else {
            $("input[name='week14']").attr("checked", false);
            $("input[name='week14']").attr("disabled", true);
            $("input[name='every_time14']").attr("checked", false);
            $("input[name='every_time14']").attr("disabled", true);
        }
    })
    //------15------
    $("input[name=" + "taekwondo" + "]").change(function () {
        var a = $("input[name='taekwondo']:checked").val();
        if (a == "1") {
            $("input[name='week15']").attr("disabled", false);
            $("input[name='every_time15']").attr("disabled", false);
        } else {
            $("input[name='week15']").attr("checked", false);
            $("input[name='week15']").attr("disabled", true);
            $("input[name='every_time15']").attr("checked", false);
            $("input[name='every_time15']").attr("disabled", true);
        }
    })
    //------16------
    $("input[name=" + "mountaineering" + "]").change(function () {
        var a = $("input[name='mountaineering']:checked").val();
        if (a == "1") {
            $("input[name='week16']").attr("disabled", false);
            $("input[name='every_time16']").attr("disabled", false);
        } else {
            $("input[name='week16']").attr("checked", false);
            $("input[name='week16']").attr("disabled", true);
            $("input[name='every_time16']").attr("checked", false);
            $("input[name='every_time16']").attr("disabled", true);
        }
    })
    //------17------
    $("input[name=" + "skip" + "]").change(function () {
        var a = $("input[name='skip']:checked").val();
        if (a == "1") {
            $("input[name='week17']").attr("disabled", false);
            $("input[name='every_time17']").attr("disabled", false);
        } else {
            $("input[name='week17']").attr("checked", false);
            $("input[name='week17']").attr("disabled", true);
            $("input[name='every_time17']").attr("checked", false);
            $("input[name='every_time17']").attr("disabled", true);
        }
    })
  
    //乳腺癌随访中相关控制
    $("input[name='diagnosisbasis']").click(function () { 
        $("input[name='diagnosisbasis']:checked").each(function () {
            if (this.value == "13") {
                $("input[name='diagnosisbasis']:not(:last)").removeAttr("checked");
            }
        });
    })
    $("input:radio[name='treatmentsituation']").click(function () { 
        var value = $("input:radio[name='treatmentsituation']:checked").val(); 
        if (value == "02") {
            $("#istreatment").hide();

            $("#treatmenthospital").val("");
            $("#treatmentother").val("");
            $("input[name='treatment']").attr("checked", false);
        } else {
            $("#istreatment").show();
        }
    })

    $("input:radio[name='transfer']").click(function () { 
        var value = $("input:radio[name='transfer']:checked").val(); 
        if (value == "02") { 
            $("#istransfer").hide();
            $("#transferposition").val("");
        } else {
            $("#istransfer").show();
        }
    })

    $("input:radio[name='recrudescence']").click(function () { 
        var value = $("input:radio[name='recrudescence']:checked").val();
        if (value == "02") {
            $("#isrecrudescence").hide();
            $("#recrudescencedate").val("");
        } else {
            $("#isrecrudescence").show();
        }
    })

    $("input:radio[name='tumorhistory']").click(function () {
        var value = $("input:radio[name='tumorhistory']:checked").val();
        if (value == "02") {
            $("#istumorhistory1").hide();
            $("input:radio[name='tumorhistoryrelation']").removeAttr("checked");
            $("#istumorhistory2").hide();
            $("input:checkbox[name='tumorhistorytype']").removeAttr("checked");
            $("#tumorhistorytypeother").val("");
            $("#tumorhistoryrowspan").attr("rowspan", 1);
        } else {
            $("#istumorhistory1").show();
            $("#istumorhistory2").show();
            $("#tumorhistoryrowspan").attr("rowspan", 2);
        }
    })

    $("input:radio[name='correctdiagnosis']").click(function () {
        var value = $("input:radio[name='correctdiagnosis']:checked").val();
        if(value=="02"){
            $("#iscorrectdiagnosis").hide();
            $("#correctdiagnosissite").val("");
            $("#correctdiagnosisdate").val("");
        }else{
            $("#iscorrectdiagnosis").show();
        }
    })

    $("#cardscore").change(function () {
        var value = $("#cardscore").val(); 
        if (value == "0") {
            $("#cardscoretip").html("<a style='padding-left:1em'></a><span style='color: #ff0000'>*死亡</span>");
        }else if(value=="10"){
            $("#cardscoretip").html("<a style='padding-left:1em'></a><span style='color: #ff0000'>*垂危</span>");
        } else if (value == "20") {
            $("#cardscoretip").html("<a style='padding-left:1em'></a><span style='color: #ff0000'>*病重，需住院及积极支持治疗</span>");
        } else if (value == "30") {
            $("#cardscoretip").html("<a style='padding-left:1em'></a><span style='color: #ff0000'>*严重失去活动力，要住医院，但暂时未有死亡威胁</span>");
        } else if (value == "40") {
            $("#cardscoretip").html("<a style='padding-left:1em'></a><span style='color: #ff0000'>*失去活动能力，需要特别照顾和帮助</span>");
        } else if (value == "50") {
            $("#cardscoretip").html("<a style='padding-left:1em'></a><span style='color: #ff0000'>*需要颇多的帮助及经常的医疗护理</span>");
        } else if (value == "60") {
            $("#cardscoretip").html("<a style='padding-left:1em'></a><span style='color: #ff0000'>*生活偶需帮助，但能照顾大部分私人的需求</span>");
        } else if (value == "70") {
            $("#cardscoretip").html("<a style='padding-left:1em'></a><span style='color: #ff0000'>*生活可自理，但不能维持正常活动或工作</span>");
        } else if (value == "80") {
            $("#cardscoretip").html("<a style='padding-left:1em'></a><span style='color: #ff0000'>*勉强可进行正常活动，有一些症状和体征</span>");
        } else if (value == "90") {
            $("#cardscoretip").html("<a style='padding-left:1em'></a><span style='color: #ff0000'>*能进行正常活动，有轻微病症</span>");
        } else if (value == "100") {
            $("#cardscoretip").html("<a style='padding-left:1em'></a><span style='color: #ff0000'>*一切正常，无不适或病症</span>");
        }
        else {
            $("#cardscoretip").html("");
        }
    })

    $("input:radio[name='isdeath']").click(function () {
        var value = $("input:radio[name='isdeath']:checked").val();
        if (value == "02") {
            $("#isdeatht").hide();
            $("#deathdate").val("");
            $("#surviveyear").val("");
            $("#survivemonth").val("");
            $("input:radio[name='deathreason']").removeAttr("checked");
            $("input:radio[name='deathsite']").removeAttr("checked");
        } else {
            $("#isdeatht").show();
        }
    })

})

var i = 1;
function added() {
    if (i < 7) {
        $('#physical_other' + (i - 1) + '').unbind("keyup");
        $('#physical_other' + (i - 1) + '').one('keyup', function () {
            $('#tr' + i + '').after('<tr id="tr' + (i + 1) + '">' +
                              '<td class="auto-style2">其他<input type="text" id="physical_other' + i + '" name="physical_other' + i + '" style="width: 50px" onkeyup="added()"/></td>' +
                '<td colspan="8" class="auto-style42">' +
                    ' <a>频次</a>' +
                    ' <input type="text" id="frequency' + i + '" name="frequency' + i + '" style="width: 150px" />' +
                '</td></tr>');
            $("#physical").attr({ "rowspan": i + 18 });
            $("#life_way").attr({ "rowspan": i + 45 });
            i++;
        })
    }
}
