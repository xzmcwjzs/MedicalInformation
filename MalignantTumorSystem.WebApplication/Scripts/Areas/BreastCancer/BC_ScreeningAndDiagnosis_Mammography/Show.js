$(function () {
    $.ajax({
        type:"post",
        dataType:"json",
        url: "/BreastCancer/BC_ScreeningAndDiagnosis_Mammography/Show",
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
            if (data[0].xxtz != "" && data[0].xxtz != null) {
                $("input:radio[name='xxtz'][value=" + data[0].xxtz + "]").attr("checked", true);
            }
            $("#zkdxz").val(data[0].zkdxz);
            $("#zkdxy").val(data[0].zkdxy);
            if (data[0].zkxzz != "" && data[0].zkxzz != null) {
                $("input:radio[name='zkxzz'][value=" + data[0].zkxzz + "]").attr("checked", true);
            }
            if (data[0].zkxzy != "" && data[0].zkxzy != null) {
                $("input:radio[name='zkxzy'][value=" + data[0].zkxzy + "]").attr("checked", true);
            }
            if (data[0].zkbyz != "" && data[0].zkbyz != null) {
                $("input:radio[name='zkbyz'][value=" + data[0].zkbyz + "]").attr("checked", true);
            }
            if (data[0].zkbyy != "" && data[0].zkbyy != null) {
                $("input:radio[name='zkbyy'][value=" + data[0].zkbyy + "]").attr("checked", true);
            }
            if (data[0].zkmdz != "" && data[0].zkmdz != null) {
                $("input:radio[name='zkmdz'][value=" + data[0].zkmdz + "]").attr("checked", true);
            }
            if (data[0].zkmdy != "" && data[0].zkmdy != null) {
                $("input:radio[name='zkmdy'][value=" + data[0].zkmdy + "]").attr("checked", true);
            }
            $("#ghdxz").val(data[0].ghdxz);
            $("#ghdxy").val(data[0].ghdxy);
            $("#ghsmz").val(data[0].ghsmz);
            $("#ghsmy").val(data[0].ghsmy);
            if (data[0].ghxtz != "" && data[0].ghxtz != null) {
                $("input:radio[name='ghxtz'][value=" + data[0].ghxtz + "]").attr("checked", true);
            }
            if (data[0].ghxty != "" && data[0].ghxty != null) {
                $("input:radio[name='ghxty'][value=" + data[0].ghxty + "]").attr("checked", true);
            }
            if (data[0].ghfbz != "" && data[0].ghfbz != null) {
                $("input:radio[name='ghfbz'][value=" + data[0].ghfbz + "]").attr("checked", true);
            }
            if (data[0].ghfby != "" && data[0].ghfby != null) {
                $("input:radio[name='ghfby'][value=" + data[0].ghfby + "]").attr("checked", true);
            } 
            if (data[0].jgnq != "" && data[0].jgnq != null) {
                var strs = new Array();
                strs = data[0].jgnq.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='jgnq'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].bdczmy != "" && data[0].bdczmy != null) {
                var strs = new Array();
                strs = data[0].bdczmy.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='bdczmy'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].qthbzx != "" && data[0].qthbzx != null) {
                var strs = new Array();
                strs = data[0].qthbzx.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='qthbzx'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
           
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