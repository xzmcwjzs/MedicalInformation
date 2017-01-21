$(function () {

    $("#types").change(function () {
        var a = $("#types").val();
        if (a == "B超") {
            $("#head").html("新增B超检查报告单");
        } else if (a == "频谱多普勒") {
            $("#head").html("新增频谱多普勒检查报告单");
        } else if (a == "彩色多普勒") {
            $("#head").html("新增彩色多普勒检查报告单");
        } else {
            $("#head").html("新增检查报告单");
        }
    });

    $("#form1").ajaxForm({
        success: function (msgs) {
            var start = msgs.indexOf(">");
            if (start != -1) {
                var end = msgs.indexOf("<", start + 1);
                if (end != -1) {
                    msgs = msgs.substring(start + 1, end);
                }
            }
            var msg = msgs.split(',');
            alert(msg[0]);
            window.close();
        }
    });
    $("#save").click(function () {
        if ($("#name").val() == "") {
            alert("姓名不能为空！");
            return false;
        }
        if ($("#id_card_number").val() == "") {
            alert("身份证号码不能为空！");
            return false;
        }
        if ($("#ddlCommunity").val() == "") {
            alert("常住地址必须填写到社区、村或者居委会！");
            return false;
        }
        if ($("#phone").val() == "") {
            alert("手机号码不能为空！");
            return false;
        }
        if ($("#sjtime").val() == "") {
            alert("送检日期不能为空！");
            return false;
        }
        if ($("#bgtime").val() == "") {
            alert("报告日期不能为空！");
            return false;
        }
    })
})