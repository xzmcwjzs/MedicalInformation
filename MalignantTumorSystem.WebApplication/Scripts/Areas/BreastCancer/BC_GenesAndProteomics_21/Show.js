$(function () {
    $.ajax({
        type:"post",
        dataType:"json",
        url: "/BreastCancer/BC_GenesAndProteomics_21/Show",
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
            //if (data[0].fl != "" && data[0].fl != null) {
            //    $("input:radio[name='fl'][value=" + data[0].fl + "]").attr("checked", true);
            //}

            //if (data[0].zl != "" && data[0].zl != null) {
            //    var strs = new Array();
            //    strs = data[0].zl.split(',');
            //    for (var i = 0; i < strs.length; i++) {
            //        $("input:checkbox[name='zl'][value=" + strs[i] + "]").attr("checked", true);
            //    }
            //}
             

            $("#Ki67").val(data[0].Ki67);
            $("#STK15").val(data[0].STK15);
            $("#Survivin").val(data[0].Survivin);
            $("#CyclinB1").val(data[0].CyclinB1);
            $("#MYBL2").val(data[0].MYBL2);
            $("#Stromolysin").val(data[0].Stromolysin);
            $("#Cathepsin").val(data[0].Cathepsin);
            $("#GBR7").val(data[0].GBR7);
            $("#HER2").val(data[0].HER2);
            $("#ER").val(data[0].ER);
            $("#PR").val(data[0].PR);
            $("#BCL").val(data[0].BCL);
            $("#SCUBE").val(data[0].SCUBE);
            $("#GSTM1").val(data[0].GSTM1);
            $("#CD68").val(data[0].CD68);
            $("#BAG1").val(data[0].BAG1);
            $("#actin").val(data[0].actin);
            $("#GAPDH").val(data[0].GAPDH);
            $("#RPLPO").val(data[0].RPLPO);
            $("#GUS").val(data[0].GUS);
            $("#TFRC").val(data[0].TFRC);

            $("#RS").val(data[0].RS);
            $("#rsscore").html(data[0].RS);
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