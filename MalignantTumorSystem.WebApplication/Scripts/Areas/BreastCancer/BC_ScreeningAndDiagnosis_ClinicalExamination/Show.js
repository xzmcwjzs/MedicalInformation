$(function () {
    $.ajax({
        type:"post",
        dataType:"json",
        url: "/BreastCancer/BC_ScreeningAndDiagnosis_ClinicalExamination/Show",
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
            if (data[0].tumorsizeleft != "" && data[0].tumorsizeleft != null) {
                var strs = new Array();
                strs = data[0].tumorsizeleft.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='tumorsizeleft'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].tumorsizeright != "" && data[0].tumorsizeright != null) {
                var strs = new Array();
                strs = data[0].tumorsizeright.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='tumorsizeright'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].tumorpositionleft != "" && data[0].tumorpositionleft != null) {
                var strs = new Array();
                strs = data[0].tumorpositionleft.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='tumorpositionleft'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].tumorpositionright != "" && data[0].tumorpositionright != null) {
                var strs = new Array();
                strs = data[0].tumorpositionright.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='tumorpositionright'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].tumorshapeleft != "" && data[0].tumorshapeleft != null) {
                $("input:radio[name='tumorshapeleft'][value=" + data[0].tumorshapeleft + "]").attr("checked", true);
            }
            if (data[0].tumorshaperight != "" && data[0].tumorshaperight != null) {
                $("input:radio[name='tumorshaperight'][value=" + data[0].tumorshaperight + "]").attr("checked", true);
            }
            if (data[0].tumorqualityleft != "" && data[0].tumorqualityleft != null) {
                $("input:radio[name='tumorqualityleft'][value=" + data[0].tumorqualityleft + "]").attr("checked", true);
            }
            if (data[0].tumorqualityright != "" && data[0].tumorqualityright != null) {
                $("input:radio[name='tumorqualityright'][value=" + data[0].tumorqualityright + "]").attr("checked", true);
            }
            if (data[0].tumorborderleft != "" && data[0].tumorborderleft != null) {
                $("input:radio[name='tumorborderleft'][value=" + data[0].tumorborderleft + "]").attr("checked", true);
            }
            if (data[0].tumorborderright != "" && data[0].tumorborderright != null) {
                $("input:radio[name='tumorborderright'][value=" + data[0].tumorborderright + "]").attr("checked", true);
            }
            if (data[0].tumoractivityleft != "" && data[0].tumoractivityleft != null) {
                $("input:radio[name='tumoractivityleft'][value=" + data[0].tumoractivityleft + "]").attr("checked", true);
            }
            if (data[0].tumoractivityright != "" && data[0].tumoractivityright != null) {
                $("input:radio[name='tumoractivityright'][value=" + data[0].tumoractivityright + "]").attr("checked", true);
            }
            if (data[0].dischargeleft != "" && data[0].dischargeleft != null) {
                var strs = new Array();
                strs = data[0].dischargeleft.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='dischargeleft'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].dischargeright != "" && data[0].dischargeright != null) {
                var strs = new Array();
                strs = data[0].dischargeright.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='dischargeright'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].papillaleft != "" && data[0].papillaleft != null) {
                var strs = new Array();
                strs = data[0].papillaleft.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='papillaleft'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].papillaright != "" && data[0].papillaright != null) {
                var strs = new Array();
                strs = data[0].papillaright.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='papillaright'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].skinleft != "" && data[0].skinleft != null) {
                var strs = new Array();
                strs = data[0].skinleft.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='skinleft'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].skinright != "" && data[0].skinright != null) {
                var strs = new Array();
                strs = data[0].skinright.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='skinright'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].ylymphleft != "" && data[0].ylymphleft != null) {
                var strs = new Array();
                strs = data[0].ylymphleft.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='ylymphleft'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].ylymphright != "" && data[0].ylymphright != null) {
                var strs = new Array();
                strs = data[0].ylymphright.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='ylymphright'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].sglymphleft != "" && data[0].sglymphleft != null) {
                var strs = new Array();
                strs = data[0].sglymphleft.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='sglymphleft'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].sglymphright != "" && data[0].sglymphright != null) {
                var strs = new Array();
                strs = data[0].sglymphright.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='sglymphright'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].isre_examine != "" && data[0].isre_examine != null) {
                $("input:radio[name='isre_examine'][value=" + data[0].isre_examine + "]").attr("checked", true);
            }
            if (data[0].firstresult != "" && data[0].firstresult != null) {
                $("input:radio[name='firstresult'][value=" + data[0].firstresult + "]").attr("checked", true);
            }
            $("#comment").val(data[0].comment);
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