$(function () {
    if (no == "1") {
        $("#last").hide();
    } else if (no == "2") {
        $("#cd").hide();
    }
    //开始加载时---
    $("#smoke_time").attr("disabled", true);
    $("#times1").attr("disabled", true);
    $("#times2").attr("disabled", true);
    $("#times3").attr("disabled", true);
    $("#times4").attr("disabled", true);
    $("#times5").attr("disabled", true);
    $("#times6").attr("disabled", true);
    $("input[name='day_smoke']").attr("disabled", true);
    $("#began_smoke").attr("disabled", true);
    $("#smoke_age").attr("disabled", true);
    $("#smoked_time").attr("disabled", true);
    $("#smoke_again").attr("disabled", true);
    $("#smoked_long").attr("disabled", true);
    $("input[name='smoked_idea']").attr("disabled", true);
    $("#drink_time").attr("disabled", true);
    $("#drink_age").attr("disabled", true);
    $("#drunk_time").attr("disabled", true);
    $("#drink_again").attr("disabled", true);
    $("#drunk_long").attr("disabled", true);

    $("input[name='frequency1']").attr("disabled", true);
    $("input[name='frequency2']").attr("disabled", true);
    $("input[name='frequency3']").attr("disabled", true);
    $("input[name='frequency4']").attr("disabled", true);
    $("#other").attr("disabled", true);
    $("#other_du").attr("disabled", true);
    $("input[name='frequency5']").attr("disabled", true);

    $("input[name='count1']").attr("disabled", true);
    $("#count1_dl").attr("disabled", true);
    $("input[name='count2']").attr("disabled", true);
    $("#count2_dl").attr("disabled", true);
    $("input[name='count3']").attr("disabled", true);
    $("#count3_dl").attr("disabled", true);
    $("input[name='count4']").attr("disabled", true);
    $("#count4_dl").attr("disabled", true);
    $("#other_wine").attr("disabled", true);
    $("#wine_degree").attr("disabled", true);
    $("input[name='count5']").attr("disabled", true);
    $("#count5_dl").attr("disabled", true);

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
        $("#smoke_time").attr("disabled", true);
        $("#times1").attr("disabled", true);
        $("#times2").attr("disabled", true);
        $("#times3").attr("disabled", true);
        $("#times4").attr("disabled", true);
        $("#times5").attr("disabled", true);
        $("#times6").attr("disabled", true);
        $("input[name='day_smoke']").attr("disabled", true);
        $("#began_smoke").attr("disabled", true);
        $("#smoke_age").attr("disabled", true);
        $("#smoked_time").attr("disabled", true);
        $("#smoke_again").attr("disabled", true);
        $("#smoked_long").attr("disabled", true);
        $("input[name='smoked_idea']").attr("disabled", true);
        $("#drink_time").attr("disabled", true);
        $("#drink_age").attr("disabled", true);
        $("#drunk_time").attr("disabled", true);
        $("#drink_again").attr("disabled", true);
        $("#drunk_long").attr("disabled", true);

        $("input[name='frequency1']").attr("disabled", true);
        $("input[name='frequency2']").attr("disabled", true);
        $("input[name='frequency3']").attr("disabled", true);
        $("input[name='frequency4']").attr("disabled", true);
        $("#other").attr("disabled", true);
        $("#other_du").attr("disabled", true);
        $("input[name='frequency5']").attr("disabled", true);

        $("input[name='count1']").attr("disabled", true);
        $("#count1_dl").attr("disabled", true);
        $("input[name='count2']").attr("disabled", true);
        $("#count2_dl").attr("disabled", true);
        $("input[name='count3']").attr("disabled", true);
        $("#count3_dl").attr("disabled", true);
        $("input[name='count4']").attr("disabled", true);
        $("#count4_dl").attr("disabled", true);
        $("#other_wine").attr("disabled", true);
        $("#wine_degree").attr("disabled", true);
        $("input[name='count5']").attr("disabled", true);
        $("#count5_dl").attr("disabled", true);

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


    //---------------------------------------体质指数-------------------------------------------------
    $("#height").keyup(function () {
        var a = $("#height").val();
        var b = $("#weight").val();
        if (a != "" && b != "") {
            document.getElementById("bmi").value = parseFloat(b * 10000 / (a * a) + 1).toFixed(1);
        }
    })

    $("#weight").keyup(function () {
        var a = $("#height").val();
        var b = $("#weight").val();
        if (a != "" && b != "") {
            document.getElementById("bmi").value = parseFloat(b * 10000 / (a * a) + 1).toFixed(1);
        }
    })

    //---------------------------------------腰臀围比值-------------------------------------------------
    $("#w").keyup(function () {
        var a = $("#w").val();
        var b = $("#h").val();
        if (a != "" && b != "") {
            document.getElementById("w_h").value = parseFloat(a / b).toFixed(1);
        }
    })

    $("#h").keyup(function () {
        var a = $("#w").val();
        var b = $("#h").val();
        if (a != "" && b != "") {
            document.getElementById("w_h").value = parseFloat(a / b).toFixed(1);
        }
    })

    //3.吸烟史

    //烟龄
    $("#smoke_time").change(function () {
        var a = $("#smoke_time").val();
        var b = $("#smoked_time").val();
        var y = new Date()
        var year = y.getFullYear();

        if (a != "" && b != "") {
            if (parseInt(a) > parseInt(b)) {
                alert("开始吸烟年代不能大于开始戒烟年代！");
                $("#times1").val("");
            } else {
                $("#smoke_age").val(parseInt(b) - parseInt(a) + "年");
            }
        } else {
            $("#smoke_age").val(year - a + "年");
        }
    })
    //戒烟时间
    $("#smoked_time").change(function () {
        var a = $("#smoked_time").val();
        var b = $("#smoke_again").val();
        var c = $("#smoke_time").val();
        if (parseInt(a) < parseInt(c)) {
            alert("开始戒烟年代不能大于开始吸烟年代！");
            $("#times2").val("");
        } else {
            $("#smoke_age").val(parseInt(a) - parseInt(c) + "年");
        }
        var y = new Date()
        var year = y.getFullYear();
        if (a != "" && b != "") {
            if (parseInt(a) < parseInt(b)) {
                $("#smoked_long").val(parseInt(b) - parseInt(a) + "年");
            } else {
                alert("开始戒烟年代不能大于复吸时间！");
                $("#smoked_time").val("");
            }
        } else if (a != "" && b == "") {
            $("#smoked_long").val(year - parseInt(a) + "年");
        }
    })
    $("#smoke_again").change(function () {
        var a = $("#smoked_time").val();
        var b = $("#smoke_again").val();
        var y = new Date()
        var year = y.getFullYear();
        if (a != "" && b != "") {
            if (parseInt(a) < parseInt(b)) {
                $("#smoked_long").val(parseInt(b) - parseInt(a) + "年");
            } else {
                alert("复吸时间不能小于开始戒烟年代！");
                $("#smoke_again").val("");
            }
        } else if (a != "" && b == "") {
            $("#smoked_long").val(year - parseInt(a) + "年");
        }
    })

    $("input[name=" + "smoking" + "]").change(function () {
        var a = $("input[name='smoking']:checked").val();
        if (a == "吸烟") {
            //选择吸烟，如果之前选择已戒烟，则已戒烟清空数据，默认不能输入
            $("input[name='smoke']").attr("checked", false);
            $("#smoke_time").attr("disabled", false);
            $("input[name='day_smoke']").attr("disabled", false);
            $("#began_smoke").attr("disabled", false);
            $("#smoke_age").attr("disabled", false);
            $("input[name='smoked']").attr("disabled", false);
            $("#times1").attr("disabled", false);
            $("input[name='smoked_idea']").attr("disabled", false);
        } else {
            $("input[name='smoked']").attr("disabled", true);
            $("input[name='smoked']").attr("checked", false);
            $("#smoke_time").attr("disabled", true);
            $("input[name='day_smoke']").attr("disabled", true);
            $("#began_smoke").attr("disabled", true);
            $("#smoke_age").attr("disabled", true);
            $("#smoked_time").attr("disabled", true);
            $("#smoke_again").attr("disabled", true);
            $("#smoked_long").attr("disabled", true);
            $("input[name='smoked_idea']").attr("checked", false);
            $("input[name='smoked_idea']").attr("disabled", true);
            $("#times1").attr("disabled", true);
            $("#times2").attr("disabled", true);
            $("#times3").attr("disabled", true);
            $("#times1").val("请选择");
            $("#times2").val("请选择");
            $("#times3").val("请选择");
            $("#smoke_time").val("");
            $("#began_smoke").val("");
            $("#smoke_age").val("");
            $("#smoked_time").val("");
            $("#smoke_again").val("");
            $("#smoked_long").val("");
        }
    })
    $("input[name=" + "smoked" + "]").change(function () {
        var a = $("input[name='smoking']:checked").val();
        var b = $("input[name='smoked']:checked").val();

        if (a == "吸烟") {

            if (b == "已戒烟") {
                $("#smoked_time").attr("disabled", false);
                $("#smoke_again").attr("disabled", false);
                $("#smoked_long").attr("disabled", false);
                $("input[name='smoked']").attr("disabled", false);
                $("#times2").attr("disabled", false);
                $("#times3").attr("disabled", false);
                $("input[name='smoked_idea']").attr("checked", false);
                $("input[name='smoked_idea']").attr("disabled", true);
            } else {
                $("input[name='smoked']").attr("disabled", true);
                $("input[name='smoked']").attr("checked", false);
                $("#smoked_time").attr("disabled", true);
                $("#smoke_again").attr("disabled", true);
                $("#smoked_long").attr("disabled", true);
                $("input[name='smoked_idea']").attr("disabled", false);
                $("#times2").attr("disabled", true);
                $("#times3").attr("disabled", true);
                $("#times2").val("请选择");
                $("#times3").val("请选择");
                $("#smoked_time").val("");
                $("#smoke_again").val("");
                $("#smoked_long").val("");
            }

        } else {
            $("input[name='smoked']").attr("disabled", true);
            $("input[name='smoked']").attr("checked", false);
            $("#smoked_time").attr("disabled", true);
            $("#smoke_again").attr("disabled", true);
            $("#smoked_long").attr("disabled", true);
            $("input[name='smoked_idea']").attr("checked", false);
            $("input[name='smoked_idea']").attr("disabled", true);
            $("#times2").attr("disabled", true);
            $("#times3").attr("disabled", true);
            $("#times2").val("请选择");
            $("#times3").val("请选择");
            $("#smoked_time").val("");
            $("#smoke_again").val("");
            $("#smoked_long").val("");
        }


    })
    $("input[name=" + "smoke" + "]").change(function () {
        var a = $("input[name='smoke']:checked").val();
        if (a == "1") {
            //选择无，如果之前选择吸烟和(或)已戒烟，则吸烟和(或)已戒烟清空数据，默认不能输入
            $("#smoke_time").attr("disabled", true);
            //$("input[name='smoking']").attr("disabled", true);
            $("input[name='smoking']").attr("checked", false);
            $("input[name='smoked']").attr("disabled", true);
            $("input[name='smoked']").attr("checked", false);
            $("input[name='day_smoke']").attr("disabled", true);
            $("input[name='day_smoke']").attr("checked", false);
            $("#began_smoke").attr("disabled", true);
            $("#smoke_age").attr("disabled", true);

            $("#smoked_time").attr("disabled", true);
            $("#smoke_again").attr("disabled", true);
            $("#smoked_long").attr("disabled", true);
            $("input[name='smoked_idea']").attr("checked", false);
            $("input[name='smoked_idea']").attr("disabled", true);

            $("#times1").attr("disabled", true);
            $("#times2").attr("disabled", true);
            $("#times3").attr("disabled", true);
            $("#times1").val("请选择");
            $("#times2").val("请选择");
            $("#times3").val("请选择");

            $("#smoke_time").val("");
            $("#began_smoke").val("");
            $("#smoke_age").val("");
            $("#smoked_time").val("");
            $("#smoke_again").val("");
            $("#smoked_long").val("");
        }
    })
    //=================================增加年代=========================
    var riqi = new Date();
    var year = riqi.getFullYear();
    for (var ss = 0; ss < 100; ss++) {

        $("#smoke_time").append("<option value=" + (year - ss) + ">" + (year - ss) + "</option>");
        $("#smoked_time").append("<option value=" + (year - ss) + ">" + (year - ss) + "</option>");
        $("#smoke_again").append("<option value=" + (year - ss) + ">" + (year - ss) + "</option>");
        $("#drink_time").append("<option value=" + (year - ss) + ">" + (year - ss) + "</option>");
        $("#drunk_time").append("<option value=" + (year - ss) + ">" + (year - ss) + "</option>");
        $("#drink_again").append("<option value=" + (year - ss) + ">" + (year - ss) + "</option>");
        if ((year - ss) == '1950')
            break;

    }



    //4.饮酒史
    //酒龄
    $("#drink_time").change(function () {
        var a = $("#drink_time").val();
        var b = $("#drunk_time").val();
        var y = new Date()
        var year = y.getFullYear();
        if (a != "" && b != "") {
            if (parseInt(a) > parseInt(b)) {
                alert("开始饮酒年代不能大于开始戒酒年代！");
                $("#times4").val("");
            } else {
                $("#drink_age").val(parseInt(b) - parseInt(a) + "年");
            }
        } else {
            $("#drink_age").val(year - a + "年");
        }
    })
    //戒酒时间
    $("#drunk_time").change(function () {
        var a = $("#drunk_time").val();
        var b = $("#drink_again").val();
        var c = $("#drink_time").val();

        if (parseInt(a) < parseInt(c)) {
            alert("开始戒酒年代不能大于开始饮酒年代！");
            $("#times5").val("");
        } else {
            $("#drink_age").val(parseInt(a) - parseInt(c) + "年");
        }

        var y = new Date()
        var year = y.getFullYear();
        if (a != "" && b != "") {
            if (parseInt(a) < parseInt(b)) {
                $("#drunk_long").val(parseInt(b) - parseInt(a) + "年");
            } else {
                alert("开始戒酒年代不能大于复饮时间！");
                $("#drunk_time").val("");
            }
        } else if (a != "" && b == "") {
            $("#drunk_long").val(year - parseInt(a) + "年");
        }
    })
    $("#drink_again").change(function () {
        var a = $("#drunk_time").val();
        var b = $("#drink_again").val();
        var y = new Date()
        var year = y.getFullYear();
        if (a != "" && b != "") {
            if (parseInt(a) < parseInt(b)) {
                $("#drunk_long").val(parseInt(b) - parseInt(a) + "年");
            } else {
                alert("复吸时间不能小于开始戒烟年代！");
                $("#drink_again").val("");
            }
        } else if (a != "" && b == "") {
            $("#drunk_long").val(year - parseInt(a) + "年");
        }
    })


    $("input[name=" + "drinking" + "]").change(function () {
        var a = $("input[name='drinking']:checked").val();
        if (a == "饮酒") {
            //选择饮酒，如果之前选择已戒酒，则已戒酒清空数据，默认不能输入
            $("input[name='drink']").attr("checked", false);
            $("#drink_time").attr("disabled", false);
            $("#drink_age").attr("disabled", false);
            $("#drunk_time").attr("disabled", false);
            $("#drink_again").attr("disabled", false);
            $("#drunk_long").attr("disabled", false);

            $("input[name='frequency1']").attr("disabled", false);
            $("input[name='frequency2']").attr("disabled", false);
            $("input[name='frequency3']").attr("disabled", false);
            $("input[name='frequency4']").attr("disabled", false);
            $("#other").attr("disabled", false);


            $("input[name='count1']").attr("disabled", false);
            $("#count1_dl").attr("disabled", false);
            $("input[name='count2']").attr("disabled", false);
            $("#count2_dl").attr("disabled", false);
            $("input[name='count3']").attr("disabled", false);
            $("#count3_dl").attr("disabled", false);
            $("input[name='count4']").attr("disabled", false);
            $("#count4_dl").attr("disabled", false);
            $("#other_wine").attr("disabled", false);

            $("#times4").attr("disabled", false);
            $("#times5").attr("disabled", false);
            $("#times6").attr("disabled", false);

        } else {
            $("#drink_time").attr("disabled", true);
            $("#drink_age").attr("disabled", true);
            $("#drunk_time").attr("disabled", true);
            $("#drink_again").attr("disabled", true);
            $("#drunk_long").attr("disabled", true);

            $("#drink_time").val("");
            $("#drink_age").val("");
            $("#drunk_time").val("");
            $("#drink_again").val("");
            $("#drunk_long").val("");

            $("#times4").attr("disabled", true);
            $("#times5").attr("disabled", true);
            $("#times6").attr("disabled", true);
            $("#times4").val("请选择");
            $("#times5").val("请选择");
            $("#times6").val("请选择");

            $("input[name='frequency1']").attr("disabled", true);
            $("input[name='frequency1']").attr("checked", false);
            $("input[name='frequency2']").attr("disabled", true);
            $("input[name='frequency2']").attr("checked", false);
            $("input[name='frequency3']").attr("disabled", true);
            $("input[name='frequency3']").attr("checked", false);
            $("input[name='frequency4']").attr("disabled", true);
            $("input[name='frequency4']").attr("checked", false);
            $("#other").attr("disabled", true);
            $("#other").val("");
            $("#other_du").attr("disabled", true);
            $("#other_du").val("");
            $("input[name='frequency5']").attr("disabled", true);
            $("input[name='frequency5']").attr("checked", false);

            $("input[name='count1']").attr("disabled", true);
            $("input[name='count1']").attr("checked", false);
            $("#count1_dl").attr("disabled", true);
            $("#count1_dl").val("");
            $("input[name='count2']").attr("disabled", true);
            $("input[name='count2']").attr("checked", false);
            $("#count2_dl").attr("disabled", true);
            $("#count2_dl").val("");
            $("input[name='count3']").attr("disabled", true);
            $("input[name='count3']").attr("checked", false);
            $("#count3_dl").attr("disabled", true);
            $("#count3_dl").val("");
            $("input[name='count4']").attr("disabled", true);
            $("input[name='count4']").attr("checked", false);
            $("#count4_dl").attr("disabled", true);
            $("#count4_dl").val("");
            $("#other_wine").attr("disabled", true);
            $("#other_wine").val("");
            $("#wine_degree").attr("disabled", true);
            $("#wine_degree").val("");
            $("input[name='count5']").attr("disabled", true);
            $("input[name='count5']").attr("checked", false);
            $("#count5_dl").attr("disabled", true);
            $("#count5_dl").val("");

        }
    })
    $("input[name=" + "drink" + "]").change(function () {
        var a = $("input[name='drink']:checked").val();
        if (a == "1") {
            //选择无，如果之前选择吸烟和(或)已戒烟，则吸烟和(或)已戒烟清空数据，默认不能输入
            //$("input[name='drinking']").attr("disabled", true);
            $("input[name='drinking']").attr("checked", false);
            $("#drink_time").attr("disabled", true);
            $("#drink_age").attr("disabled", true);
            $("#drunk_time").attr("disabled", true);
            $("#drink_again").attr("disabled", true);
            $("#drunk_long").attr("disabled", true);
            $("#drink_time").val("");
            $("#drink_age").val("");
            $("#drunk_time").val("");
            $("#drink_again").val("");
            $("#drunk_long").val("");

            $("#times4").attr("disabled", true);
            $("#times5").attr("disabled", true);
            $("#times6").attr("disabled", true);
            $("#times4").val("请选择");
            $("#times5").val("请选择");
            $("#times6").val("请选择");

            $("input[name='frequency1']").attr("disabled", true);
            $("input[name='frequency1']").attr("checked", false);
            $("input[name='frequency2']").attr("disabled", true);
            $("input[name='frequency2']").attr("checked", false);
            $("input[name='frequency3']").attr("disabled", true);
            $("input[name='frequency3']").attr("checked", false);
            $("input[name='frequency4']").attr("disabled", true);
            $("input[name='frequency4']").attr("checked", false);
            $("#other").attr("disabled", true);
            $("#other").val("");
            $("#other_du").attr("disabled", true);
            $("#other_du").val("");
            $("input[name='frequency5']").attr("disabled", true);
            $("input[name='frequency5']").attr("checked", false);

            $("input[name='count1']").attr("disabled", true);
            $("input[name='count1']").attr("checked", false);
            $("#count1_dl").attr("disabled", true);
            $("#count1_dl").val("");
            $("input[name='count2']").attr("disabled", true);
            $("input[name='count2']").attr("checked", false);
            $("#count2_dl").attr("disabled", true);
            $("#count2_dl").val("");
            $("input[name='count3']").attr("disabled", true);
            $("input[name='count3']").attr("checked", false);
            $("#count3_dl").attr("disabled", true);
            $("#count3_dl").val("");
            $("input[name='count4']").attr("disabled", true);
            $("input[name='count4']").attr("checked", false);
            $("#count4_dl").attr("disabled", true);
            $("#count4_dl").val("");
            $("#other_wine").attr("disabled", true);
            $("#other_wine").val("");
            $("#wine_degree").attr("disabled", true);
            $("#wine_degree").val("");
            $("input[name='count5']").attr("disabled", true);
            $("input[name='count5']").attr("checked", false);
            $("#count5_dl").attr("disabled", true);
            $("#count5_dl").val("");
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
   
})

var d = 1;
function added() {
    if (d < 7) {
        $('#physical_other' + (d - 1) + '').unbind("keyup");
        $('#physical_other' + (d - 1) + '').one('keyup', function () {
            $('#tr' + (d + 1) + '').after('<tr id="tr' + (d + 2) + '">' +
                                  '<td class="auto-style2">其他<input type="text" id="physical_other' + d + '" name="physical_other' + d + '" style="width: 50px" onkeyup="added()"/></td>' +
                    '<td colspan="8" class="auto-style42">' +
                        ' <a>频次</a>' +
                        ' <input type="text" id="frequency' + d + '" name="frequency' + d + '" style="width: 150px" />' +
                    '</td></tr>');
            $("#physical").attr({ "rowspan": d + 18 });
            $("#life_way").attr({ "rowspan": d + 45 });
            d++;
        })
    }
}


//-----------手术史-------------
var i = 1;
//function added1() {
//    if (i < 50) {
//        $('#option_name' + (i - 1) + '').unbind("keyup");
//        $('#option_name' + (i - 1) + '').one('keyup', function () {
//            if ($('#option_name' + (i - 1) + '').val() != "") {
//                $('#option_time' + (i - 1) + '').after('<tr><td>' +
//                         '<a>手术名称</a>'+
//                         ' <input type="text" style="padding-top: 4px; width: 130px" id="option_name' + i + '" name="option_name' + i + '" onkeyup="added1()" />' +
//                         ' <a>手术时间</a>'+
//                         ' <input type="text" id="option_time' + i + '" name="option_time' + i + '" style="padding-top: 4px; width: 80px" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + ' })" />' +
//                     '</td></tr>')

//            }
//            i++;
//        })
//    }
//    //$("input[name='option']").attr("disabled", true);
//}
function added1() {
    $("input[name='option']").attr("checked", false);
    if (i < 50) {
        $('#option_name' + (i - 1) + '').unbind("keyup");
        $('#option_name' + (i - 1) + '').one('keyup', function () {
            if ($('#option_name' + (i - 1) + '').val() != "") {
                $('#option_add' + i + '').after('<tr id="option_add' + (i + 1) + '">' +
                                '<td class="detailContent" style="height: 25px; width: 100%;">' +
                                    '<a>手术名称</a>' +
                                    ' <input type="text" style="padding-top: 4px; width: 150px" id="option_name' + i + '" name="option_name' + i + '" onkeyup="added1()" />' +
                                    ' <a style="padding-left: 2em">手术时间</a>' +
                                    ' <input type="text" id="option_time' + i + '" name="option_time' + i + '" style="padding-top: 4px; width: 80px" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + '  })" />' +
                                    ' <a style="padding-left: 2em">手术医院</a>' +
                                    ' <input type="text" style="padding-top: 4px; width: 180px" id="option_hospital' + i + '" name="option_hospital' + i + '" />' +
                                    ' <a style="padding-left: 2em">手术结果</a>' +
                                    ' <span style="position: relative;">' +
                                        '<select id="option_change' + i + '"  name="option_change' + i + '" style="width: 88px" >' +
                                            '<option value="">请选择</option>' +
                                            '<option value="1">治愈</option>' +
                                            '<option value="2">好转</option>' +
                                            '<option value="3">无效</option>' +
                                            '<option value="4">其他</option>' +
                                        '</select>' +
                                        '<input id="option_result' + i + '" name="option_result' + i + '" style="position: absolute; width: 68px; height: 15px; left: 1px; top: 0px; border-bottom: 0px; border-right: 0px; border-left: 0px; border-top: 0px;"/>' +
                                    '</span>' +
                                    '</td></tr>')

            }
            $('#option_change' + i + '').change(function () {
                $('#option_result' + (i - 2) + '').val($('#option_change' + (i - 2) + '').find("option:selected").text());
            })
            $("input[name='option']").change(function () {
                var a = $("input[name='option']:checked").val();
                if (a == "无") {
                    for (i; i > 1; i--) {
                        $('#option_add' + i + '').remove();
                    }
                }
            })
            $("#cd").click(function () {
                for (i; i > 1; i--) {
                    $('#option_add' + i + '').remove();
                }
            })
            i++;
        })
    }
    //$$("input[name='option']").attr("disabled", true);
}
//-----------外伤史-------------
var a = 1;
//function added2() {
//    if (a < 50) {
//        $('#trauma_name' + (a - 1) + '').unbind("keyup");
//        $('#trauma_name' + (a - 1) + '').one('keyup', function () {
//            if ($('#trauma_name' + (a - 1) + '').val() != "") {
//                $('#trauma_time' + (a - 1) + '').after('<tr><td>' +
//                      ' <a>外伤名称</a>' +
//                                        ' <input type="text" style="padding-top: 4px;width:160px" id="trauma_name' + a + '" name="trauma_name' + a + '" onkeyup="added2()"/> ' +
//                    ' <a>外伤时间 </a>' +
//                                        ' <input type="text" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + ' })" name="trauma_time' + a + '" id="trauma_time' + a + '" style="padding-top: 4px;width:110px"/>' +

//                                        '</td></tr>')
//            }
//            a++;
//        })
//    }
//    //$("input[name='trauma']").attr("disabled", true);
//}
function added2() {
    $("input[name='trauma']").attr("checked", false);
    if (a < 50) {
        $('#trauma_name' + (a - 1) + '').unbind("keyup");
        $('#trauma_name' + (a - 1) + '').one('keyup', function () {
            if ($('#trauma_name' + (a - 1) + '').val() != "") {
                $('#trauma_add' + a + '').after('<tr id="trauma_add' + (a + 1) + '">' +
                                '<td class="detailContent" style="height: 25px; width: 100%;">' +
                                    '<a>外伤名称</a>' +
                                    ' <input type="text" style="padding-top: 4px; width: 150px" id="trauma_name' + a + '" name="trauma_name' + a + '" onkeyup="added2();" />' +
                                    ' <a style="padding-left: 2em">外伤时间</a>' +
                                    ' <input type="text" id="trauma_time' + a + '" name="trauma_time' + a + '" style="padding-top: 4px; width: 80px" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + '  })" />' +
                                    ' <a style="padding-left: 2em">处理医院</a>' +
                                    ' <input type="text" style="padding-top: 4px; width: 180px" id="deal_hospital' + a + '" name="deal_hospital' + a + '" />' +
                                     ' <a style="padding-left: 2em">处理结果</a>' +
                                     ' <span style="position: relative;">' +
                                     ' <select id="trauma_change' + a + '"  name="trauma_change' + a + '" style="width: 88px">' +
                                         '<option value="">==请选择==</option>' +
                                         '<option value="1">治愈</option>' +
                                         '<option value="2">好转</option>' +
                                         '<option value="3">无效</option>' +
                                         '<option value="4">其他</option>' +
                                     '</select>' +
                                     '<input id="deal_result' + a + '" name="deal_result' + a + '" style="position: absolute; width: 68px; height: 15px; left: 1px; top: 0px;border-bottom: 0px; border-right: 0px; border-left: 0px; border-top: 0px;"/>' +
                                     '</span>' +
                                     '</td></tr>')
            }
            $('#trauma_change' + a + '').change(function () {
                $('#deal_result' + (a - 2) + '').val($('#trauma_change' + (a - 2) + '').find("option:selected").text());
            })
            $("input[name='trauma']").change(function () {
                var a1 = $("input[name='trauma']:checked").val();
                if (a1 == "无") {
                    for (a; a > 1; a--) {
                        $('#trauma_add' + a + '').remove();
                    }
                }
            })
            $("#cd").click(function () {
                for (a; a > 1; a--) {
                    $('#trauma_add' + a + '').remove();
                }
            })
            a++;
        })
    }
    //$("input[name='trauma']").attr("disabled", true);
}
//-----------输血史-------------
var b = 1;
//function added3() {
//    if (b < 50) {
//        $('#blood_transfusion_name' + (b - 1) + '').unbind("keyup");
//        $('#blood_transfusion_name' + (b - 1) + '').one('keyup', function () {
//            if ($('#blood_transfusion_name' + (b - 1) + '').val() != "") {
//                $('#blood_transfusion_time' + (b - 1) + '').after('<tr><td>' +
//                     ' <a>输血原因</a>' +
//                                        ' <input type="text" style="padding-top: 4px;width:130px" id="blood_transfusion_name' + b + '" name="blood_transfusion_name' + b + '" onkeyup="added3()"/>' +
//                    ' <a>输血时间 </a>' +
//                                        ' <input type="text" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + '})" name="blood_transfusion_time' + b + '" id="blood_transfusion_time' + b + '" style="padding-top: 4px;width:80px"/>' +

//                                        '</td></tr>')
//            }
//            b++;
//        })
//    }
//    $("input[name='blood_transfusion']").attr("disabled", true);
//}
function added3() {
    $("input[name='blood_transfusion']").attr("checked", false);
    if (b < 50) {
        $('#blood_transfusion_name' + (b - 1) + '').unbind("keyup");
        $('#blood_transfusion_name' + (b - 1) + '').one('keyup', function () {
            if ($('#blood_transfusion_name' + (b - 1) + '').val() != "") {
                $('#blood_transfusion_add' + b + '').after('<tr id="blood_transfusion_add' + (b + 1) + '">' +
                        '<td class="detailContent" style="height: 25px; width: 100%;">' +
                            '<a>输血原因</a>' +
                            ' <input type="text" style="padding-top: 4px; width: 150px" id="blood_transfusion_name' + b + '" name="blood_transfusion_name' + b + '" onkeyup="added3();" />' +
                            ' <a style="padding-left: 2em">输血时间</a>' +
                            ' <input type="text" id="blood_transfusion_time' + b + '" name="blood_transfusion_time' + b + '" style="padding-top: 4px; width: 80px" onclick="WdatePicker({ dateFmt:' + ' ' + '\'yyyy-MM-dd\'' + ', maxDate:' + ' ' + '\'%y-%M-%d\'' + ' })" />' +
                            ' <a style="padding-left: 3em">输血量</a>' +
                                ' <input type="text" style="padding-top: 4px; width: 180px" id="blood_transfusion_amount' + b + '" name="blood_transfusion_amount' + b + '" />' +
                                ' <a style="padding-left: 2em">输血结果</a>' +
                                ' <span style="position: relative;">' +
                                 '<select id="blood_transfusion_change' + b + '" name="blood_transfusion_change' + b + '" style="width: 88px">' +
                                 '<option value="">==请选择==</option>' +
                                 '<option value="1">治愈</option>' +
                                 '<option value="2">好转</option>' +
                                '<option value="3">无效</option>' +
                                '<option value="4">其他</option>' +
                                '</select>' +
                            '<input id="blood_transfusion_result' + b + '" name="blood_transfusion_result' + b + '" style="position: absolute; width: 68px; height: 15px; left: 1px; top: 0px; border-bottom: 0px; border-right: 0px; border-left: 0px; border-top: 0px;"/>' +
                             '</span></td></tr>')
            }
            $('#blood_transfusion_change' + b + '').change(function () {
                $('#blood_transfusion_result' + (b - 2) + '').val($('#blood_transfusion_change' + (b - 2) + '').find("option:selected").text());
            })

            $("input[name='blood_transfusion']").change(function () {
                var a = $("input[name='blood_transfusion']:checked").val();
                if (a == "无") {
                    for (b; b > 1; b--) {
                        $('#blood_transfusion_add' + b + '').remove();
                    }
                }
            })
            $("#cd").click(function () {
                for (b; b > 1; b--) {
                    $('#blood_transfusion_add' + b + '').remove();
                }
            })
            b++;
        })
    }
    //$("input[name='blood_transfusion']").attr("disabled", true);
}
//-----------家族史-------------
var c = 1;
function added4() {
    $('input[name="rdfamily_disease"]').attr("checked", false);

    if (c < 8) {
        $('input[name="chfamilydisease' + (c - 1) + '"]').attr("disabled", false);
        $('#family_other_disease' + (c - 1) + '').attr("disabled", false);


        $('#chfamilydisease_change' + (c - 1) + '').unbind("change");
        $('#chfamilydisease_change' + (c - 1) + '').one('change', function () {
            $('#relationship' + (c - 1) + '').val($('#chfamilydisease_change' + (c - 1) + '').find("option:selected").text());
            //关系选择不能相同
            if (c >= 2) {
                var a = $('#relationship' + (c - 2) + '').val();
                var b = $('#relationship' + (c - 1) + '').val();
                if (a == b) {
                    alert("不能重复选择！");
                    $('#relationship' + (c - 1) + '').val("");
                }
            }

            if ($('#relationship' + (c - 1) + '').val() != "") {
                $('#family_disease_add' + c + '').after('<tr id="family_disease_add' + (c + 1) + '">' +
                                        '<td class="detailContent" style="height: 25px; width: 100%;">' +
                                        '<span style="position: relative;">' +
                                            '<select id="chfamilydisease_change' + c + '" name="chfamilydisease_change' + c + '" style="width: 80px" onchange="added4();">' +
                                                '<option value="">==请选择==</option>' +
                                                '<option value="01">祖父</option>' +
                                                '<option value="02">祖母</option>' +
                                                '<option value="03">父亲</option>' +
                                                '<option value="04">母亲</option>' +
                                                '<option value="05">兄弟</option>' +
                                                '<option value="06">姐妹</option>' +
                                                '<option value="07">儿子</option>' +
                                                '<option value="08">女儿</option>' +
                                            '</select>' +
                                            '<input id="relationship' + c + '" name="relationship' + c + '" style="position: absolute; width: 60px; height: 15px; left: 1px; top: 0px; border-bottom: 0px; border-right: 0px; border-left: 0px; border-top: 0px;"/>' +
                                            '</span>' +
                                            '<a style="margin-left:1em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="高血压" />高血压<a style="padding-left:2em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="糖尿病" />糖尿病<a style="padding-left:2em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="结核病" />结核病<a style="padding-left:2em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="冠心病" />冠心病<a style="padding-left:2em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="恶性肿瘤" />恶性肿瘤<a style="padding-left:1em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="脑卒中" />脑卒中<a style="padding-left:1em"></a>' +
                                            ' <input type="checkbox" name="chfamilydisease' + c + '" style="width: 20px" value="其他疾病" />其他疾病' +
                                            ' <input type="text" style="padding-top: 4px;width:100px" id="family_other_disease' + c + '" name="family_other_disease' + c + '"/>' +
                                            '</td>' +
                                            '</tr>');
                $('input[name="chfamilydisease' + c + '"]').attr("disabled", true);
                $('#family_other_disease' + c + '').attr("disabled", true);

            }

            $("input[name='rdfamily_disease']").change(function () {
                var a = $("input[name='rdfamily_disease']:checked").val();
                if (a == "无") {
                    for (c; c > 1; c--) {
                        $('#family_disease_add' + c + '').remove();
                    }
                    $('input[name="chfamilydisease' + (c - 1) + '"]').attr("disabled", true);
                    $('#family_other_disease' + (c - 1) + '').attr("disabled", true);
                }
            })
            $("#cd").click(function () {
                for (c; c > 1; c--) {
                    $('#family_disease_add' + c + '').remove();
                }
                $('input[name="chfamilydisease' + (c - 1) + '"]').attr("disabled", true);
                $('#family_other_disease' + (c - 1) + '').attr("disabled", true);
            })
            c++;
        })
    }
    //$("input[name='rdfamily_disease']").attr("disabled", true);
}

