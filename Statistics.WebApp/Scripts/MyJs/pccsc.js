/// <reference path="../H-ui_v3.0/lib/jquery/1.9.1/jquery.min.js" />
$(function () {
    $.post("/PCCSC/Province",{code:code} ,function (data) {
        dat = eval(data);
        $("#ddlProvince").empty();
        $("#ddlProvince").append("<option value=" + "" + ">请选择</option>");
        if (dat != "") {
            if (dat.length == 1) {
                $("#ddlProvince").empty();
                $("#ddlProvince").append("<option value=" + dat[0].code + " selected ='selected'>" + dat[0].name + "</option>");
            } else {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlProvince").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        }
    });
    $.post("/PCCSC/City", function (data) {
        dat = eval(data);
        $("#ddlCity").empty();
        $("#ddlCity").append("<option value=" + "" + ">请选择</option>");
        if (dat != "") { 
            if (dat.length == 1) {
                $("#ddlCity").empty();
                $("#ddlCity").append("<option value=" + dat[0].code + " selected ='selected'>" + dat[0].name + "</option>");
            } else {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlCity").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        }
    });
    $.post("/PCCSC/County", function (data) {
        dat = eval(data);
        $("#ddlCounty").empty();
        $("#ddlCounty").append("<option value=" + "" + ">请选择</option>");
        if (dat != "") {
            if (dat.length == 1) {
                $("#ddlCounty").empty();
                $("#ddlCounty").append("<option value=" + dat[0].code + " selected ='selected'>" + dat[0].name + "</option>");
            } else { 
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlCounty").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        }
    });
    $.post("/PCCSC/Street", function (data) {
        dat = eval(data);
        $("#ddlStreet").empty();
        $("#ddlStreet").append("<option value=" + "" + ">请选择</option>");
        if (dat != "") {
            if (dat.length == 1) {
                $("#ddlStreet").empty();
                $("#ddlStreet").append("<option value=" + dat[0].code + " selected ='selected'>" + dat[0].name + "</option>");
            } else { 
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlStreet").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        }
    });
    $.post("/PCCSC/Community", function (data) {
        dat = eval(data);
        $("#ddlCommunity").empty();
        $("#ddlCommunity").append("<option value=" + "" + ">请选择</option>");
        if (dat != "") {
            if (dat.length == 1) {
                $("#ddlCommunity").empty();
                $("#ddlCommunity").append("<option value=" + dat[0].code + " selected ='selected'>" + dat[0].name + "</option>");
            } else {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlCommunity").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        }
    });


    //=========================常住地址==============================
    $("#ddlProvince").change(function () {
        $.post("/PCCSC/City",{parentcode:$("#ddlProvince").val()},
        function (data) {
            dat = eval(data);
            $("#ddlCity").empty();
            $("#ddlCity").append("<option value=" + "" + ">请选择</option>");
            $("#ddlCounty").empty();
            $("#ddlCounty").append("<option value=" + "" + ">请选择</option>");
            $("#ddlStreet").empty();
            $("#ddlStreet").append("<option value=" + "" + ">请选择</option>");
            $("#ddlCommunity").empty();
            $("#ddlCommunity").append("<option value=" + "" + ">请选择</option>");
            if ($("#ddlProvince").val() == "11" || $("#ddlProvince").val() == "12" || $("#ddlProvince").val() == "31" || $("#ddlProvince").val() == "50") {
                if (dat != "") {
                    for (var i = 0; i < dat.length; i++) {
                        $("#ddlCity").append("<option value=" + dat[i].code + " selected ='selected'>" + dat[i].name + "</option>");
                        $.post("/PCCSC/County?code=" + dat[i].code,
                            function (data) {
                                dat = eval(data);
                                $("#ddlCounty").empty();
                                $("#ddlCounty").append("<option value=" + "" + ">请选择</option>");
                                $("#ddlStreet").empty();
                                $("#ddlStreet").append("<option value=" + "" + ">请选择</option>");
                                $("#ddlCommunity").empty();
                                $("#ddlCommunity").append("<option value=" + "" + ">请选择</option>");
                                if (dat != "") {
                                    for (var i = 0; i < dat.length; i++) {
                                        $("#ddlCounty").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                                    }
                                }
                            })
                    }
                }
            } else {
                if (dat != "") {
                        for (var i = 0; i < dat.length; i++) {
                            $("#ddlCity").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                        }
                    
                }
            }
        })

    })

    $("#ddlCity").change(function () {
        $.post("/PCCSC/County", { parentcode: $("#ddlCity").val() },
        function (data) {
            dat = eval(data);
            $("#ddlCounty").empty();
            $("#ddlCounty").append("<option value=" + "" + ">请选择</option>");
            $("#ddlStreet").empty();
            $("#ddlStreet").append("<option value=" + "" + ">请选择</option>");
            $("#ddlCommunity").empty();
            $("#ddlCommunity").append("<option value=" + "" + ">请选择</option>");
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlCounty").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        })
    })


    $("#ddlCounty").change(function () {
        $.post("/PCCSC/Street", { parentcode: $("#ddlCounty").val() },
        function (data) {
            dat = eval(data);
            $("#ddlStreet").empty();
            $("#ddlStreet").append("<option value=" + "" + ">请选择</option>");
            $("#ddlCommunity").empty();
            $("#ddlCommunity").append("<option value=" + "" + ">请选择</option>");
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlStreet").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        })
    })

    $("#ddlStreet").change(function () {
        $.post("/PCCSC/Community", { parentcode: $("#ddlStreet").val() },
        function (data) {
            dat = eval(data);
            $("#ddlCommunity").empty();
            $("#ddlCommunity").append("<option value=" + "" + ">请选择</option>");
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlCommunity").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        })
    });
   
})