$(function () {
    if (no == "1") {
        $("#last").hide();
    } else if (no == "2") {
        $("#cd").hide();
    } else {
        return true;
    }

    $("#bt1").click(function () {
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

        if ($("#checkdate").val() == "") {
            alert("检查日期不能为空！");
            return false;
        }
        var form1=$("#form1").serialize();
        $.ajax({
            type:"post",
            url: "/BreastCancer/BC_ScreeningAndDiagnosis_SelfCheck/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker+"&real_name="+real_name,
            dataType:"text",
            data:form1,
            success: function (data) {
                var msg = data.split(',');
                alert(msg[0]);
                window.close();
            }
        });
    })
})