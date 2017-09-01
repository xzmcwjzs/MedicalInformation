$(function () {
    $.ajax({
        type:"post",
        dataType:"json",
        url: "/BreastCancer/BC_QOL/Show",
        data:{id:id},
        success: function (data) { 
            if (data == null || data == "") {
                return;
            }
            $("#name").val(data[0].name)
            $("input[name=" + "sex" + "][value=" + data[0].sex + "]").attr("checked", "checked");
            $("#id_card_number").val(data[0].id_card_number);
            if (data[0].birth_date != "") {
                var date = new Date(parseInt(data[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                $("#birth_date").val(date.getFullYear() + '-' + a1 + '-' + a2);
                var dates = new Date();
                var year = dates.getFullYear() - date.getFullYear();
                if (year > 0) {
                    $("#age").val(year + "岁");
                } else if (year == 0) {
                    var month = dates.getMonth() - a1;
                    if (month > 0) {
                        $("#age").val(month + "月");
                    } else if (month == 0) {
                        var day = dates.getDay() - a2;
                        if (day > 0) {
                            $("#age").val(day + "天");
                        }
                    }
                }
            }
            //家庭常住住址-------------------------------------------------------------------------------------------------------------------------
            if (data[0].community_code != "") {
                var code1 = data[0].community_code;
                $("#ddlProvince").val(code1.substring(0, 2));
                //-----市-----
                $.post("/Data/City?code=" + code1.substring(0, 2),
                 function (data) {
                     dat1 = eval(data);
                     $("#ddlCity").empty();
                     $("#ddlCity").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCity").val(code1.substring(0, 4));
                     }
                 })

                //-----区/县-----
                $.post("/Data/County?code=" + code1.substring(0, 4),
                 function (data) {
                     dat1 = eval(data);
                     $("#ddlCounty").empty();
                     $("#ddlCounty").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCounty").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCounty").val(code1.substring(0, 6));
                     }
                 })
                //-------镇/村-------
                $.post("/Data/Street?code=" + code1.substring(0, 6),
                 function (data) {
                     dat1 = eval(data);
                     $("#ddlStreet").empty();
                     $("#ddlStreet").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlStreet").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlStreet").val(code1.substring(0, 9));
                     }
                 })
                $.post("/Data/Community?code=" + code1.substring(0, 9),
                 function (data) {
                     dat1 = eval(data);
                     $("#ddlCommunity").empty();
                     $("#ddlCommunity").append("<option value=" + "" + ">==请选择==</option>");
                     if (dat1 != "") {
                         for (var i = 0; i < dat1.length; i++) {
                             $("#ddlCommunity").append("<option value=" + dat1[i].code + ">" + dat1[i].name + "</option>");
                         }
                         $("#ddlCommunity").val(code1);
                     }
                 })
                $("#perment_community_address").val(data[0].address);
            }
            $("#txtIndividualPhone").val(data[0].phone);

            //--------------------------------------------------特有字段------------------------ 
            if (data[0].q1 != "" && data[0].q1 != null) { $("input:radio[name='radio1'][value=" + data[0].q1 + "]").attr("checked", true); } 
            if (data[0].q2 != "" && data[0].q2 != null) { $("input:radio[name='radio2'][value=" + data[0].q2 + "]").attr("checked", true); }
            if (data[0].q3 != "" && data[0].q3 != null) { $("input:radio[name='radio3'][value=" + data[0].q3 + "]").attr("checked", true); }
            if (data[0].q4 != "" && data[0].q4 != null) { $("input:radio[name='radio4'][value=" + data[0].q4 + "]").attr("checked", true); }
            if (data[0].q5 != "" && data[0].q5 != null) { $("input:radio[name='radio5'][value=" + data[0].q5 + "]").attr("checked", true); }
            if (data[0].q6 != "" && data[0].q6 != null) { $("input:radio[name='radio6'][value=" + data[0].q6 + "]").attr("checked", true); }
            if (data[0].q7 != "" && data[0].q7 != null) { $("input:radio[name='radio7'][value=" + data[0].q7 + "]").attr("checked", true); }
            if (data[0].q8 != "" && data[0].q8 != null) { $("input:radio[name='radio8'][value=" + data[0].q8 + "]").attr("checked", true); }
            if (data[0].q9 != "" && data[0].q9 != null) { $("input:radio[name='radio9'][value=" + data[0].q9 + "]").attr("checked", true); }
            if (data[0].q10 != "" && data[0].q10 != null) { $("input:radio[name='radio10'][value=" + data[0].q10 + "]").attr("checked", true); }
            if (data[0].q11 != "" && data[0].q11 != null) { $("input:radio[name='radio11'][value=" + data[0].q11 + "]").attr("checked", true); }
            if (data[0].q12 != "" && data[0].q12 != null) { $("input:radio[name='radio12'][value=" + data[0].q12 + "]").attr("checked", true); }
            if (data[0].q13 != "" && data[0].q13 != null) { $("input:radio[name='radio13'][value=" + data[0].q13 + "]").attr("checked", true); }
            if (data[0].q14 != "" && data[0].q14 != null) { $("input:radio[name='radio14'][value=" + data[0].q14 + "]").attr("checked", true); }
            if (data[0].q15 != "" && data[0].q15 != null) { $("input:radio[name='radio15'][value=" + data[0].q15 + "]").attr("checked", true); }
            if (data[0].q16 != "" && data[0].q16 != null) { $("input:radio[name='radio16'][value=" + data[0].q16 + "]").attr("checked", true); }
            if (data[0].q17 != "" && data[0].q17 != null) { $("input:radio[name='radio17'][value=" + data[0].q17 + "]").attr("checked", true); }
            if (data[0].q18 != "" && data[0].q18 != null) { $("input:radio[name='radio18'][value=" + data[0].q18 + "]").attr("checked", true); }
            if (data[0].q19 != "" && data[0].q19 != null) { $("input:radio[name='radio19'][value=" + data[0].q19 + "]").attr("checked", true); }
            if (data[0].q20 != "" && data[0].q20 != null) { $("input:radio[name='radio20'][value=" + data[0].q20 + "]").attr("checked", true); }
            if (data[0].q21 != "" && data[0].q21 != null) { $("input:radio[name='radio21'][value=" + data[0].q21 + "]").attr("checked", true); }
            if (data[0].q22 != "" && data[0].q22 != null) { $("input:radio[name='radio22'][value=" + data[0].q22 + "]").attr("checked", true); }
            if (data[0].q23 != "" && data[0].q23 != null) { $("input:radio[name='radio23'][value=" + data[0].q23 + "]").attr("checked", true); }
            if (data[0].q24 != "" && data[0].q24 != null) { $("input:radio[name='radio24'][value=" + data[0].q24 + "]").attr("checked", true); }
            if (data[0].q25 != "" && data[0].q25 != null) { $("input:radio[name='radio25'][value=" + data[0].q25 + "]").attr("checked", true); }
            if (data[0].q26 != "" && data[0].q26 != null) { $("input:radio[name='radio26'][value=" + data[0].q26 + "]").attr("checked", true); }
            if (data[0].q27 != "" && data[0].q27 != null) { $("input:radio[name='radio27'][value=" + data[0].q27 + "]").attr("checked", true); }
            if (data[0].q28 != "" && data[0].q28!= null) { $("input:radio[name='radio28'][value=" + data[0].q28 + "]").attr("checked", true); }
            if (data[0].q29 != "" && data[0].q29 != null) { $("input:radio[name='radio29'][value=" + data[0].q29 + "]").attr("checked", true); }
            if (data[0].q30 != "" && data[0].q30 != null) { $("input:radio[name='radio30'][value=" + data[0].q30 + "]").attr("checked", true); }
            $("#rs1").val(data[0].rs1);
            $("#rs2").val(data[0].rs2);
            $("#rs3").val(data[0].rs3);
            $("#rs4").val(data[0].rs4);
            $("#rs5").val(data[0].rs5);
            $("#rs6").val(data[0].rs6);
            $("#rs7").val(data[0].rs7);
            $("#rs8").val(data[0].rs8);
            $("#rs9").val(data[0].rs9);
            $("#rs10").val(data[0].rs10);
            $("#rs11").val(data[0].rs11);
            $("#rs12").val(data[0].rs12);
            $("#rs13").val(data[0].rs13);
            $("#rs14").val(data[0].rs14);
            $("#rs15").val(data[0].rs15);

            $("#s1").val(data[0].s1);
            $("#s2").val(data[0].s2);
            $("#s3").val(data[0].s3);
            $("#s4").val(data[0].s4);
            $("#s5").val(data[0].s5);
            $("#s6").val(data[0].s6);
            $("#s7").val(data[0].s7);
            $("#s8").val(data[0].s8);
            $("#s9").val(data[0].s9);
            $("#s10").val(data[0].s10);
            $("#s11").val(data[0].s11);
            $("#s12").val(data[0].s12);
            $("#s13").val(data[0].s13);
            $("#s14").val(data[0].s14);
            $("#s15").val(data[0].s15); 
            $("#advice").val(data[0].advice);
           
            $("#doctor").val(data[0].doctor);
            if (data[0].checkdate != "") { 
                $("#checkdate").val(ConvertDate(data[0].checkdate));
            }


        }
    })

})
 
function ConvertDate(data) {
    var date = new Date(parseInt(data.replace("/Date(", "").replace(")/", ""), 10));
    var a0 = date.getFullYear();
    var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
    var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    return a0 + '-' + a1 + '-' + a2;
}