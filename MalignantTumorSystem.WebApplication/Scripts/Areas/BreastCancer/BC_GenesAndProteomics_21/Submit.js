$(function () {
    $("#rsbtn").click(function () {

        //if ($("#Ki67").val() < 15 || $("#Ki67").val() >35) {
        //    alert("Ki67基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#STK15").val() < 15 || $("#STK15").val() > 35) {
        //    alert("STK15基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#Survivin").val() < 15 || $("#Survivin").val() > 35) {
        //    alert("Survivin基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#CyclinB1").val() < 15 || $("#CyclinB1").val() > 35) {
        //    alert("CyclinB1基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#MYBL2").val() < 15 || $("#MYBL2").val() > 35) {
        //    alert("MYBL2基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#Stromolysin").val() < 15 || $("#Stromolysin").val() > 35) {
        //    alert("Stromolysin 3基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#Cathepsin").val() < 15 || $("#Cathepsin").val() > 35) {
        //    alert("Cathepsin L2基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#GBR7").val() < 15 || $("#GBR7").val() > 35) {
        //    alert("GBR7基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#HER2").val() < 15 || $("#HER2").val() > 35) {
        //    alert("HER2基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#ER").val() < 15 || $("#ER").val() > 35) {
        //    alert("ER基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#PR").val() < 15 || $("#PR").val() > 35) {
        //    alert("PR基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#BCL").val() < 15 || $("#BCL").val() > 35) {
        //    alert("BCL 2基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#SCUBE").val() < 15 || $("#SCUBE").val() > 35) {
        //    alert("SCUBE 2基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#GSTM1").val() < 15 || $("#GSTM1").val() > 35) {
        //    alert("GSTM1基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#CD68").val() < 15 || $("#CD68").val() > 35) {
        //    alert("CD68基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#BAG1").val() < 15 || $("#BAG1").val() > 35) {
        //    alert("BAG1基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#actin").val() < 15 || $("#actin").val() > 35) {
        //    alert("β-actin基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#GAPDH").val() < 15 || $("#GAPDH").val() > 35) {
        //    alert("GAPDH基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#RPLPO").val() < 15 || $("#RPLPO").val() > 35) {
        //    alert("RPLPO基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#GUS").val() < 15 || $("#GUS").val() > 35) {
        //    alert("GUS基因ct值范围应在15-35之间");
        //    return false;
        //}
        //if ($("#TFRC").val() < 15 || $("#TFRC").val() > 35) {
        //    alert("TFRC基因ct值范围应在15-35之间");
        //    return false;
        //}

        var Ki67 = parseFloat($("#Ki67").val());
        var STK15 = parseFloat($("#STK15").val());
        var Survivin = parseFloat($("#Survivin").val());
        var CyclinB1 = parseFloat($("#CyclinB1").val());
        var MYBL2 = parseFloat($("#MYBL2").val());

        var Stromolysin = parseFloat($("#Stromolysin").val());
        var Cathepsin = parseFloat($("#Cathepsin").val());

        var GBR7 = parseFloat($("#GBR7").val());
        var HER2 = parseFloat($("#HER2").val());

        var ER = parseFloat($("#ER").val());
        var PR = parseFloat($("#PR").val());
        var BCL = parseFloat($("#BCL").val());
        var SCUBE = parseFloat($("#SCUBE").val());

        var GSTM1 = parseFloat($("#GSTM1").val());
        var CD68 = parseFloat($("#CD68").val());
        var BAG1 = parseFloat($("#BAG1").val());

        var actin = parseFloat($("#actin").val());
        var GAPDH = parseFloat($("#GAPDH").val());
        var RPLPO = parseFloat($("#RPLPO").val());
        var GUS = parseFloat($("#GUS").val());
        var TFRC = parseFloat($("#TFRC").val());

        var PS = parseFloat(Ki67 + STK15 + Survivin + CyclinB1 + MYBL2) / 5;
        if (PS < 6.5) {
            PS = 6.5;
        }
        var LS = parseFloat(Stromolysin + Cathepsin) / 2;
        var ES = parseFloat(0.8*ER+1.2*PR+BCL+SCUBE) / 4;
        var HS = parseFloat(0.9 * GBR7 + 0.1 * HER2);
        if (HS < 8) {
            HS = 8;
        }

        var RSu = 0.47 * HS - 0.34 * ES + 1.04 * PS + 0.1 * LS + 0.05 * CD68 - 0.08 * GSTM1 - 0.07 * BAG1;
        var RS,advice;
        if (RSu < 0) {
            RS = 0;
        } else if (RSu >= 0 && RSu <= 100) {
            RS =parseFloat(20 * (RSu - 6.7)).toFixed(2);
        } else {
            RS = 100;
        }
        if (RS < 18) {
            advice = "复发风险较低，请谨慎选择化疗";
        } else if (RS >= 18 && RS <= 31) {
            advice = "复发风险中等，在考虑化疗时必须结合其他临床因素";
        } else {
            advice = "复发风险较高，化疗获益较大";
        }
        $("#RS").val(RS);
        $("#advice").val(advice);
        $("#rsscore").html(RS);
       
    })

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
        if ($("#doctor").val() == "") {
            alert("医师不能为空！");
            return false;
        }
        if ($("#checkdate").val() == "") {
            alert("日期不能为空！");
            return false;
        }
         
        var form1 = $("#form1").serialize();

        $.ajax({
            type: "post",
            url: "/BreastCancer/BC_GenesAndProteomics_21/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker + "&real_name=" + real_name,
            dataType: "text",
            data: form1,
            success: function (data) {
                var msg = data.split(',');
                alert(msg[0]);
                window.close();
            }
        });
    })
})