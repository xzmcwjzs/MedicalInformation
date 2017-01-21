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


        //$(':input','#form1').not(':button, :submit, :reset, :hidden')  
        //                    .val('')  
        //                    .removeAttr('checked')  
        //                    .removeAttr('selected'); 
        //    $("input[type=reset]").trigger("click");//
    })

    //===============================吸烟饮酒情况================================//
    //                                                                           //
    //                                                                           //
    //===========================================================================//


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



})
//==============================提交页面=======================================
function sure() {
    if ($("#name").val() == "") {
        alert("姓名不能为空！")
    }
    else if ($("#id_card_number").val() == "") {
        alert("身份证号码不能为空！")
    }
    else if ($("#ddlCommunity").val() == "") {
        alert("常住地址必须填写到社区、村或者居委会！")
    }
    else {
        $("#bt1").attr("disabled", "disabled");
        $.post("/Lifestyle_SmokeAndDrink/AddAndUpdate?id=" + id + "&worker=" + worker + "&community_code=" + community_code,
                $("#form1").serialize(),
                function (msgs) {
                    var msg = msgs.split(',');
                    alert(msg[0]);
                    //window.location.href = 'View.aspx?resident_id=' + msg[1];
                    window.close();
                })
    }
}

