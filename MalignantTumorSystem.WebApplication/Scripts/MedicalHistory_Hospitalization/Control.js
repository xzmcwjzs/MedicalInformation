$(function () {
    //判断是否是医院，如果是，则自动添加诊治医院，且不允许修改
    if (type != "") {
        $("#hospital").val(departments);
        $("#hospital").attr("readonly", "readonly");
    }

})
//==============================提交页面=======================================
function save() {
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
    }
    else if ($("#hospital").val() == "") {
        alert("收治医院不能为空！")
    }
    else if ($("#zs").val() == "") {
        alert("主诉不能为空！")
    }
    else if ($("#xbs").val() == "") {
        alert("现病史不能为空！")
    }
    else if ($("#t").val() == "") {
        alert("体温不能为空！")
    }
    else if ($("#p").val() == "") {
        alert("脉搏不能为空！")
    }
    else if ($("#r").val() == "") {
        alert("呼吸不能为空！")
    }
    else if (($("#ssy").val() == "" && $("#szy").val() == "") && ($("#ssy1").val() == "" && $("#szy1").val() == "")) {
        alert("血压不能为空！")
    } else {
        $("#bt1").attr("disabled", "disabled");
        $.post("/MedicalHistory_Hospitalization/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
                $("#form1").serialize(),
                function (msgs) {
                    var msg = msgs.split(',');
                    alert(msg[0]);
                    //window.location.href = 'View.aspx?id=' + msg[1];
                    window.close();
                })
    }
}
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
    }
    else if ($("#hospital").val() == "") {
        alert("收治医院不能为空！")
    }
    else if ($("#zs").val() == "") {
        alert("主诉不能为空！")
    }
    else if ($("#xbs").val() == "") {
        alert("现病史不能为空！")
    }
    else if ($("#t").val() == "") {
        alert("体温不能为空！")
    }
    else if ($("#p").val() == "") {
        alert("脉搏不能为空！")
    }
    else if ($("#r").val() == "") {
        alert("呼吸不能为空！")
    }
    else if (($("#ssy").val() == "" && $("#szy").val() == "") && ($("#ssy1").val() == "" && $("#szy1").val() == "")) {
        alert("血压不能为空！")
    } else {
        if (window.confirm('请确定是否提交，提交完成后将不能对此条信息进行修改。并且与此次住院相关的会诊记录、病程录、出院小结和住院费用都将自动提交！')) {
            $("#bt2").attr("disabled", "disabled");
            $.post("/MedicalHistory_Hospitalization/Sure?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
                $("#form1").serialize(),
                function (msgs) {
                    var msg = msgs.split(',');
                    alert(msg[0]);
                    //window.location.href = 'View.aspx?id=' + msg[1];
                    window.close();
                })
            return true;
        } else {
            return false;
        }

    }
}
