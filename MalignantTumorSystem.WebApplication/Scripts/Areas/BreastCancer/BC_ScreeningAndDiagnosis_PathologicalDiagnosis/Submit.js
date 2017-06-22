$(function () {
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

        //if ($("#checkdate").val() == "") {
        //    alert("检查日期不能为空！");
        //    return false;
        //}

        //.dcm、.jpg、.jpeg、.png、.gif、.bmp、.tif
        var pic = $("#gjsj").val(); 
        if (pic) {
            var ext = pic.substring(pic.lastIndexOf(".") + 1).toLocaleLowerCase();
            if (ext != "dcm" && ext != "jpg" && ext != "jpeg" && ext != "png" && ext != "gif" && ext != "bmp" && ext != "tif") {
                alert("请选择格式为：dcm、jpg、jpeg、png、gif、bmp、tif的图像进行上传");
                return;
            }
        }
         
        $("#form1").ajaxSubmit({
            type: "post",
            url: "/BreastCancer/BC_ScreeningAndDiagnosis_PathologicalDiagnosis/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker + "&real_name=" + real_name,
            dataType: "text",
            success: function (data) {
                var msg = data.split(',');
                alert(msg[0]);
                window.close();
            }
        })

    })
})