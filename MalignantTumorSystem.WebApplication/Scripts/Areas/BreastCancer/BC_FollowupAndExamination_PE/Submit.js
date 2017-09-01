$(function () {
    $("#bt2").click(function () {
        if ($("#name").val() == "") {
            alert("姓名不能为空！")
        }
        else if ($("#id_card_number").val() == "") {
            alert("身份证号码不能为空！")
        }
        else if ($("#ddlProvince").val() == "" && $("#ddlCity").val() == "" && $("#ddlCounty").val() == "" && $("#perment_community_address").val() == "") {
            alert("常住地址不能为空！")
        }
        else if ($("#time").val() == "") {
            alert("体检时间不能为空！")
        } else {
            $.ajax({
                type: "post",
                dataType: "text",
                url: "/BreastCancer/BC_FollowupAndExamination_PE/AddAndUpdate?id=" + id + "&worker=" + worker + "&community_code=" + community_code + "&real_name=" + real_name,
                data: $("#form1").serialize(),
                success: function (data) {
                    alert(data);
                    window.close();
                }
            })
        }

    })
})