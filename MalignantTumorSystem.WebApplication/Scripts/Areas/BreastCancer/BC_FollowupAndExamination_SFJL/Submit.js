$(function () {
    $("#bt1").click(function () {
        if ($("#name").val() == "") {
            alert("姓名不能为空");
            return;
        } else if ($("#id_card_number").val() == "") {
            alert("身份证号码不能为空");
            return;
        }
        else if ($("#ddlCommunity").val() == "") {
            alert("常住地址必须填写到社区、村或者居委会");
            return;
        } else {
            $.ajax({
                type: "post",
                dataType:"text",
                url: "/BreastCancer/BC_FollowupAndExamination_SFJL/AddAndUpdate?id=" + id + "&worker=" + worker + "&community_code=" + community_code + "&real_name=" + real_name,
                data:  $("#form1").serialize(),
                success: function (data) {
                    alert(data);
                    window.close();
                }
            })
        }
    })
})