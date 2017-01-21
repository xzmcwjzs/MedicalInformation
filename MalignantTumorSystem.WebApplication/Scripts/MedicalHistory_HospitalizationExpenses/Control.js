$(function () {
    if (no == "1") {
        $("#last").hide();
    } else if (no == "2") {
        $("#cd").hide();
    }

})
//==============================保存页面=======================================
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
    else {
        $.post("/MedicalHistory_HospitalizationExpenses/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
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
    else {
        if (window.confirm('请确定是否提交，提交完成后将不能对此条信息进行修改！')) {
            $("#bt2").attr("disabled", "disabled");
            $.post("/MedicalHistory_HospitalizationExpenses/Sure?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
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
