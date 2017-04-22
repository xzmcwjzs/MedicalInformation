/// <reference path="../../../H-ui_v3.0/lib/jquery/1.9.1/jquery.min.js" />
$(function () {
    var regionCode = code;
    var regionName = "";
    $.ajax({
        type: "post",
        dataType: "json",
        url: "/DemographicData/InitNumberData",
        data: { regionCode: regionCode },
        success: function (data) {
            $("#lb4").text(data.lb4);
            $("#lb4M").text(data.lb4M);
            $("#lb4F").text(data.lb4F);
            $("#lb3").text(data.lb3);
            $("#lb3M").text(data.lb3M);
            $("#lb3F").text(data.lb3F);
            $("#lb2").text(data.lb2);
            $("#lb2M").text(data.lb2M);
            $("#lb2F").text(data.lb2F);
            $("#lb1").text(data.lb1);
            $("#lb1M").text(data.lb1M);
            $("#lb1F").text(data.lb1F);
            $("#lb0").text(data.lb0);
            $("#lb0M").text(data.lb0M);
            $("#lb0F").text(data.lb0F);

        }
    })


    $("#caculate").click(function () {
        if ($("#ddlCommunity").find("option:selected").val() != "") {
            regionCode = $("#ddlCommunity option:selected").val();
        } else if ($("#ddlStreet option:selected").val() != "") {
            regionCode = $("#ddlStreet option:selected").val();
        } else if ($("#ddlCounty option:selected").val() != "") {
            regionCode = $("#ddlCounty option:selected").val();
        } else if ($("#ddlCity option:selected").val() != "") {
            regionCode = $("#ddlCity option:selected").val();
        } else if ($("#ddlProvince option:selected").val() != "") {
            regionCode = $("#ddlProvince option:selected").val();
        } else {
            regionCode = code;
        }
        regionName = CodeToName(regionCode);
        $.ajax({
            type: "post",
            dataType: "json",
            url: "/DemographicData/InitNumberData",
            data: { regionCode: regionCode },
            success: function (data) {
                $("#lb4").text(data.lb4);
                $("#lb4M").text(data.lb4M);
                $("#lb4F").text(data.lb4F);
                $("#lb3").text(data.lb3);
                $("#lb3M").text(data.lb3M);
                $("#lb3F").text(data.lb3F);
                $("#lb2").text(data.lb2);
                $("#lb2M").text(data.lb2M);
                $("#lb2F").text(data.lb2F);
                $("#lb1").text(data.lb1);
                $("#lb1M").text(data.lb1M);
                $("#lb1F").text(data.lb1F);
                $("#lb0").text(data.lb0);
                $("#lb0M").text(data.lb0M);
                $("#lb0F").text(data.lb0F);

            }
        })

    })

})

function CodeToName(num) {
    if (num.length == 2) {
        return $("#ddlProvince option:selected").text();
    } else if (num.length == 4) {
        return $("#ddlCity option:selected").text();
    } else if (num.length == 6) {
        return $("#ddlCounty option:selected").text();
    } else if (num.length == 9) {
        return $("#ddlStreet option:selected").text();
    } else if (num.length == 12) {
        return $("#ddlCommunity option:selected").text();
    } else {
        return "";
    }
}