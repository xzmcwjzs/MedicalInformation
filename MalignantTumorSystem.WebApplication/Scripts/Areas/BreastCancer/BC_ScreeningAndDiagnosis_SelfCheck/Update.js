$(function () {
    $.ajax({
        type:"post",
        dataType:"json",
        url:"/BreastCancer/BC_ScreeningAndDiagnosis_SelfCheck/Show",
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

            if (data[0].checkdate != "") {
                var date = new Date(parseInt(data[0].checkdate.replace("/Date(", "").replace(")/", ""), 10));
                var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                $("#checkdate").val(date.getFullYear() + '-' + a1 + '-' + a2);
            }
            if(data[0].tumor!=""&&data[0].tumor!=null){
                $("input:radio[name='tumor'][value=" + data[0].tumor + "]").attr("checked", true);
            }
            if(data[0].tumorbreast!=""&&data[0].tumorbreast!=null){
                var strs = new Array();
                strs = data[0].tumorbreast.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='tumorbreast'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].thickening != "" && data[0].thickening != null) {
                $("input:radio[name='thickening'][value=" + data[0].thickening + "]").attr("checked", true);
            }
            if (data[0].thickeningbreast != "" && data[0].thickeningbreast != null) {
                var strs = new Array();
                strs = data[0].thickeningbreast.split(',');
                for (var i = 0; i < strs.length; i++) {
                    $("input:checkbox[name='thickeningbreast'][value=" + strs[i] + "]").attr("checked", true);
                }
            }
            if (data[0].symmetric != "" && data[0].symmetric != null) {
                $("input:radio[name='symmetric'][value=" + data[0].symmetric + "]").attr("checked", true);
            }
            if (data[0].uplift != "" && data[0].uplift != null) {
                $("input:radio[name='uplift'][value=" + data[0].uplift + "]").attr("checked", true);
            }
            if (data[0].skin != "" && data[0].skin != null) {
                $("input:radio[name='skin'][value=" + data[0].skin + "]").attr("checked", true);
            }
            if (data[0].invagination != "" && data[0].invagination != null) {
                $("input:radio[name='invagination'][value=" + data[0].invagination + "]").attr("checked", true);
            }
            if (data[0].discharge != "" && data[0].discharge != null) {
                $("input:radio[name='discharge'][value=" + data[0].discharge + "]").attr("checked", true);
            }
            
        }
    })
})