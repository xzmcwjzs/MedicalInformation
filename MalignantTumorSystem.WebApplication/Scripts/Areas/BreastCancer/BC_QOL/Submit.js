$(function () { 
    $("#tijiaobtn").click(function () {
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

        if ($('input:radio[name="radio1"]:checked').val() == null) {
            alert("第一题未回答！");
            return false;
        }
        if ($('input:radio[name="radio1"]:checked').val() == null) {
            alert("第一题未回答！");
            return false;
        }
        if ($('input:radio[name="radio2"]:checked').val() == null) {
            alert("第二题未回答！");
            return false;
        }
        if ($('input:radio[name="radio3"]:checked').val() == null) {
            alert("第三题未回答！");
            return false;
        }
        if ($('input:radio[name="radio4"]:checked').val() == null) {
            alert("第四题未回答！");
            return false;
        }
        if ($('input:radio[name="radio5"]:checked').val() == null) {
            alert("第五题未回答！");
            return false;
        }
        if ($('input:radio[name="radio6"]:checked').val() == null) {
            alert("第六题未回答！");
            return false;
        }
        if ($('input:radio[name="radio7"]:checked').val() == null) {
            alert("第七题未回答！");
            return false;
        }
        if ($('input:radio[name="radio8"]:checked').val() == null) {
            alert("第八题未回答！");
            return false;
        }
        if ($('input:radio[name="radio9"]:checked').val() == null) {
            alert("第九题未回答！");
            return false;
        }
        if ($('input:radio[name="radio10"]:checked').val() == null) {
            alert("第十题未回答！");
            return false;
        }
        if ($('input:radio[name="radio11"]:checked').val() == null) {
            alert("第十一题未回答！");
            return false;
        }
        if ($('input:radio[name="radio12"]:checked').val() == null) {
            alert("第十二题未回答！");
            return false;
        }
        if ($('input:radio[name="radio13"]:checked').val() == null) {
            alert("第十三题未回答！");
            return false;
        }
        if ($('input:radio[name="radio14"]:checked').val() == null) {
            alert("第十四题未回答！");
            return false;
        }
        if ($('input:radio[name="radio15"]:checked').val() == null) {
            alert("第十五题未回答！");
            return false;
        }
        if ($('input:radio[name="radio16"]:checked').val() == null) {
            alert("第十六题未回答！");
            return false;
        }
        if ($('input:radio[name="radio17"]:checked').val() == null) {
            alert("第十七题未回答！");
            return false;
        }
        if ($('input:radio[name="radio18"]:checked').val() == null) {
            alert("第十八题未回答！");
            return false;
        }
        if ($('input:radio[name="radio19"]:checked').val() == null) {
            alert("第十九题未回答！");
            return false;
        }
        if ($('input:radio[name="radio20"]:checked').val() == null) {
            alert("第二十题未回答！");
            return false;
        }
        if ($('input:radio[name="radio21"]:checked').val() == null) {
            alert("第二十一题未回答！");
            return false;
        }
        if ($('input:radio[name="radio22"]:checked').val() == null) {
            alert("第二十二题未回答！");
            return false;
        }
        if ($('input:radio[name="radio23"]:checked').val() == null) {
            alert("第二十三题未回答！");
            return false;
        }
        if ($('input:radio[name="radio24"]:checked').val() == null) {
            alert("第二十四题未回答！");
            return false;
        }
        if ($('input:radio[name="radio25"]:checked').val() == null) {
            alert("第二十五题未回答！");
            return false;
        }
        if ($('input:radio[name="radio26"]:checked').val() == null) {
            alert("第二十六题未回答！");
            return false;
        }
        if ($('input:radio[name="radio27"]:checked').val() == null) {
            alert("第二十七题未回答！");
            return false;
        }
        if ($('input:radio[name="radio28"]:checked').val() == null) {
            alert("第二十八题未回答！");
            return false;
        }
        if ($('input:radio[name="radio29"]:checked').val() == null) {
            alert("第二十九题未回答！");
            return false;
        }
        if ($('input:radio[name="radio30"]:checked').val() == null) {
            alert("第三十题未回答！");
            return false;
        }

        if ($("#doctor").val() == "") {
            alert("医师不能为空！");
            return false;
        }
        if ($("#checkdate").val() == "") {
            alert("日期不能为空！");
            return false;
        }
      
        var q1 = parseFloat($('input:radio[name="radio1"]:checked').val());
        var q2 = parseFloat($('input:radio[name="radio2"]:checked').val());
        var q3 = parseFloat($('input:radio[name="radio3"]:checked').val());
        var q4 = parseFloat($('input:radio[name="radio4"]:checked').val());
        var q5 = parseFloat($('input:radio[name="radio5"]:checked').val());
        var q6 = parseFloat($('input:radio[name="radio6"]:checked').val());
        var q7 = parseFloat($('input:radio[name="radio7"]:checked').val());
        var q8 = parseFloat($('input:radio[name="radio8"]:checked').val());
        var q9 = parseFloat($('input:radio[name="radio9"]:checked').val());
        var q10 = parseFloat($('input:radio[name="radio10"]:checked').val());
        var q11 = parseFloat($('input:radio[name="radio11"]:checked').val());
        var q12 = parseFloat($('input:radio[name="radio12"]:checked').val());
        var q13 = parseFloat($('input:radio[name="radio13"]:checked').val());
        var q14 = parseFloat($('input:radio[name="radio14"]:checked').val());
        var q15 = parseFloat($('input:radio[name="radio15"]:checked').val());
        var q16 = parseFloat($('input:radio[name="radio16"]:checked').val());
        var q17 = parseFloat($('input:radio[name="radio17"]:checked').val());
        var q18 = parseFloat($('input:radio[name="radio18"]:checked').val());
        var q19 = parseFloat($('input:radio[name="radio19"]:checked').val());
        var q20 = parseFloat($('input:radio[name="radio20"]:checked').val());
        var q21 = parseFloat($('input:radio[name="radio21"]:checked').val());
        var q22 = parseFloat($('input:radio[name="radio22"]:checked').val());
        var q23 = parseFloat($('input:radio[name="radio23"]:checked').val());
        var q24 = parseFloat($('input:radio[name="radio24"]:checked').val());
        var q25 = parseFloat($('input:radio[name="radio25"]:checked').val());
        var q26 = parseFloat($('input:radio[name="radio26"]:checked').val());
        var q27 = parseFloat($('input:radio[name="radio27"]:checked').val());
        var q28 = parseFloat($('input:radio[name="radio28"]:checked').val());
        var q29 = parseFloat($('input:radio[name="radio29"]:checked').val());
        var q30 = parseFloat($('input:radio[name="radio30"]:checked').val());

        //整体生活质量量表计算
        var rs1 = parseFloat((q29 + q30) / 2).toFixed(3); var s1 = parseFloat(((rs1 - 1) / 6) * 100).toFixed(3); $("#rs1").val(rs1); $("#s1").val(s1);
        //功能子量表 躯体功能
        var rs2 = parseFloat((q1 + q2 + q3 + q4 + q5) / 5).toFixed(3); var s2 = parseFloat((1 - (rs2 - 1) / 3) * 100).toFixed(3); $("#rs2").val(rs1); $("#s2").val(s1);
        //功能子量表 角色功能
        var rs3 = parseFloat((q6 + q7) / 2).toFixed(3); var s3 = parseFloat((1 - (rs3 - 1) / 3) * 100).toFixed(3); $("#rs3").val(rs1); $("#s3").val(s1);
        //功能子量表 情感功能
        var rs4 = parseFloat((q21 + q22 + q23 + q24) / 4).toFixed(3); var s4 = parseFloat((1 - (rs4 - 1) / 3) * 100).toFixed(3); $("#rs4").val(rs1); $("#s4").val(s1);
        //功能子量表 认知功能
        var rs5 = parseFloat((q20 + q25) / 2).toFixed(3); var s5 = parseFloat((1 - (rs5 - 1) / 3) * 100).toFixed(3); $("#rs5").val(rs1); $("#s5").val(s1);
        //功能子量表 社会功能
        var rs6 = parseFloat((q26 + q27) / 2).toFixed(3); var s6 = parseFloat((1 - (rs6 - 1) / 3) * 100).toFixed(3); $("#rs6").val(rs1); $("#s6").val(s1);
        //症状子量表 疲劳
        var rs7 = parseFloat((q10 + q12 + q18) / 3).toFixed(3); var s7 = parseFloat(((rs7 - 1) / 3) * 100).toFixed(3); $("#rs7").val(rs1); $("#s7").val(s1);
        //症状子量表 恶心呕吐
        var rs8 = parseFloat((q14 + q15) / 2).toFixed(3); var s8 = parseFloat(((rs8 - 1) / 3) * 100).toFixed(3); $("#rs8").val(rs1); $("#s8").val(s1);
        //症状子量表 疼痛
        var rs9 = parseFloat((q9 + q19) / 2).toFixed(3); var s9 = parseFloat(((rs9 - 1) / 3) * 100).toFixed(3); $("#rs9").val(rs1); $("#s9").val(s1);
        //症状子量表 气促
        var rs10 = parseFloat((q8) / 1).toFixed(3); var s10 = parseFloat(((rs10 - 1) / 3) * 100).toFixed(3); $("#rs10").val(rs1); $("#s10").val(s1);
        //症状子量表 失眠
        var rs11 = parseFloat((q11) / 1).toFixed(3); var s11 = parseFloat(((rs11 - 1) / 3) * 100).toFixed(3); $("#rs11").val(rs1); $("#s11").val(s1);
        //症状子量表 食欲丧失
        var rs12 = parseFloat((q13) / 1).toFixed(3); var s12 = parseFloat(((rs12 - 1) / 3) * 100).toFixed(3); $("#rs12").val(rs1); $("#s12").val(s1);
        //症状子量表 便秘
        var rs13 = parseFloat((q16) / 1).toFixed(3); var s13 = parseFloat(((rs13 - 1) / 3) * 100).toFixed(3); $("#rs13").val(rs1); $("#s13").val(s1);
        //症状子量表 腹泻
        var rs14 = parseFloat((q17) / 1).toFixed(3); var s14 = parseFloat(((rs14 - 1) / 3) * 100).toFixed(3); $("#rs14").val(rs1); $("#s14").val(s1);
        //症状子量表 经济困难
        var rs15 = parseFloat((q28) / 1).toFixed(3); var s15 = parseFloat(((rs15 - 1) / 3) * 100).toFixed(3); $("#rs15").val(rs1); $("#s15").val(s1);

         
        var form1 = $("#form1").serialize();

        $.ajax({
            type: "post",
            url: "/BreastCancer/BC_QOL/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker + "&real_name=" + real_name,
            dataType: "text",
            data: form1,
            success: function (data) {
                var msg = data.split(',');
                alert(msg[0]);
                location.href = "/BreastCancer/BC_QOL/QOLShow?id="+msg[1];
            }
        });
    })
})