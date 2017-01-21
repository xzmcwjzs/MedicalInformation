$(function () {
    if (no == "1") {
        $("#last").hide();
    } else if (no == "2") {
        $("#cd").hide();
    }
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
    //============================================================改变选项 加载内容====(2015-02-04删)================================================================================
    //$("input[name=" + "exercise" + "]").change(function () {
    //    var a = $("input[name='exercise']:checked").val();
    //    if (a == "从不锻炼") {
    //        $("#exercised").hide();
    //    } else {
    //        $("#exercised").show();
    //    }
    //})
    //====================================================================修改=========================================================================

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
    else {
        $("#bt1").attr("disabled", "disabled");
        $.post("/Lifestyle_PhysicalExercise/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
            $("#form1").serialize(),
            function (msgs) {
                var msg = msgs.split(',');
                alert(msg[0]);
                //window.location.href = 'View.aspx?id=' + msg[1];
                window.close();
            })
    }
}
//=============================================================================

var i = 1;
function added() {
    if (i < 7) {
        $('#other' + (i - 1) + '').unbind("keyup");
        $('#other' + (i - 1) + '').one('keyup', function () {
            if ($('#other' + (i - 1) + '').val() != "") {
                $('#tr' + i + '').after('<tr id="tr' + (i + 1) + '">' +
                                '<td class="auto-style1"><a style=padding-left:2em></a><input type="text" id="other' + i + '" name="other' + i + '" style="width: 50px" onkeyup="added()"/></td>' +
                                '<td class="auto-style36" colspan="9">' +
                                    '<a>频次</a>' +
                                    '<input type="text" id="frequency' + i + '" name="frequency' + i + '" style="width: 150px" />' +
                                '</td>' +
                            '</tr>');
                i++;
            }
        })
    }
}