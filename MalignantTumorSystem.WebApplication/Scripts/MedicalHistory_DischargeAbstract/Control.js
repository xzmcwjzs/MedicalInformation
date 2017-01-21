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
        $.post("/MedicalHistory_DischargeAbstract/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
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
            $.post("/MedicalHistory_DischargeAbstract/Sure?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
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

//===============================增加一行==============================================
var i = 1;
function add() {
    if ($("#yz1").val() != "" && $("#yz2").val() != "" && $('#yz' + (i + 2) + '').val() != "") {
        if (i < 10) {
            $('#yz' + (i + 2) + '').unbind("keyup");
            $('#yz' + (i + 2) + '').one('keyup', function () {
                $('#Tr' + (i + 2) + '').after('<tr id="Tr' + (i + 3) + '">' +
                        '<td class="auto-style36" colspan="9">' + (i + 3) + '.<textarea id="yz' + (i + 3) + '" name="yz' + (i + 3) + '" style="height: 18px; width: 96%;"  onkeyup="add()"></textarea></td>' +
                    '</tr>');
                $("#yz").attr({ "rowspan": i + 3 });
                i++;
            })
        }
    }
}
