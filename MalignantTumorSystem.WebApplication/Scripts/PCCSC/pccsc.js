/// <reference path="../jquery-1.8.2.min.js" />
//-----------------------------------------------省市县三级联动--------------------------------------------------------------
$(function () {
    $.post("/PCCSC/Province", function (data) {
        dat = eval(data);
        $("#ddlProvince").empty();
        $("#ddlProvince").append("<option value=" + "" + ">=请选择=</option>");
        $("#ddlProvince1").empty();
        $("#ddlProvince1").append("<option value=" + "" + ">=请选择=</option>");
        $("#ddlProvince2").empty();
        $("#ddlProvince2").append("<option value=" + "" + ">=请选择=</option>");
        if (dat != "") {
            for (var i = 0; i < dat.length; i++) {
                $("#ddlProvince").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                $("#ddlProvince1").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                $("#ddlProvince2").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
            }
        }
    })
    //=========================常住地址==============================
    $("#ddlProvince").change(function () {
        $.post("/PCCSC/City?code=" + $("#ddlProvince").val(),
        function (data) {
            dat = eval(data);
            $("#ddlCity").empty();
            $("#ddlCity").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlCounty").empty();
            $("#ddlCounty").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlStreet").empty();
            $("#ddlStreet").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlCommunity").empty();
            $("#ddlCommunity").append("<option value=" + "" + ">=请选择=</option>");
            if ($("#ddlProvince").val() == "11" || $("#ddlProvince").val() == "12" || $("#ddlProvince").val() == "31" || $("#ddlProvince").val() == "50") {
                if (dat != "") {
                    for (var i = 0; i < dat.length; i++) {
                        $("#ddlCity").append("<option value=" + dat[i].code + " selected ='selected'>" + dat[i].name + "</option>");
                        $.post("/PCCSC/County?code=" + dat[i].code,
                            function (data) {
                                dat = eval(data);
                                $("#ddlCounty").empty();
                                $("#ddlCounty").append("<option value=" + "" + ">=请选择=</option>");
                                $("#ddlStreet").empty();
                                $("#ddlStreet").append("<option value=" + "" + ">=请选择=</option>");
                                $("#ddlCommunity").empty();
                                $("#ddlCommunity").append("<option value=" + "" + ">=请选择=</option>");
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
        $.post("/PCCSC/County?code=" + $("#ddlCity").val(),
        function (data) {
            dat = eval(data);
            $("#ddlCounty").empty();
            $("#ddlCounty").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlStreet").empty();
            $("#ddlStreet").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlCommunity").empty();
            $("#ddlCommunity").append("<option value=" + "" + ">=请选择=</option>");
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlCounty").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        })
    })


    $("#ddlCounty").change(function () {
        $.post("/PCCSC/Street?code=" + $("#ddlCounty").val(),
        function (data) {
            dat = eval(data);
            $("#ddlStreet").empty();
            $("#ddlStreet").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlCommunity").empty();
            $("#ddlCommunity").append("<option value=" + "" + ">=请选择=</option>");
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlStreet").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        })
    })

    $("#ddlStreet").change(function () {
        $.post("/PCCSC/Community?code=" + $("#ddlStreet").val(),
        function (data) {
            dat = eval(data);
            $("#ddlCommunity").empty();
            $("#ddlCommunity").append("<option value=" + "" + ">=请选择=</option>");
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlCommunity").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        })
    })
    //===============================出生地址======================================
    $("#ddlProvince1").change(function () {
        $.post("/PCCSC/City?code=" + $("#ddlProvince1").val(),
        function (data) {
            dat = eval(data);
            $("#ddlCity1").empty();
            $("#ddlCity1").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlCounty1").empty();
            $("#ddlCounty1").append("<option value=" + "" + ">=请选择=</option>");

            if ($("#ddlProvince1").val() == "11" || $("#ddlProvince1").val() == "12" || $("#ddlProvince1").val() == "31" || $("#ddlProvince1").val() == "50") {
                if (dat != "") {
                    for (var i = 0; i < dat.length; i++) {
                        $("#ddlCity1").append("<option value=" + dat[i].code + " selected ='selected'>" + dat[i].name + "</option>");
                        $.post("/PCCSC/County?code=" + dat[i].code,
                            function (data) {
                                dat = eval(data);
                                $("#ddlCounty1").empty();
                                $("#ddlCounty1").append("<option value=" + "" + ">=请选择=</option>");
                                if (dat != "") {
                                    for (var i = 0; i < dat.length; i++) {
                                        $("#ddlCounty1").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                                    }
                                }
                            })
                    }
                }
            } else {
                if (dat != "") {
                    for (var i = 0; i < dat.length; i++) {
                        $("#ddlCity1").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                    }
                }
            }

        })

    })

    $("#ddlCity1").change(function () {
        $.post("/PCCSC/County?code=" + $("#ddlCity1").val(),
        function (data) {
            dat = eval(data);
            $("#ddlCounty1").empty();
            $("#ddlCounty1").append("<option value=" + "" + ">=请选择=</option>");
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlCounty1").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        })
    })
    //==================================现住地址===================================
    $("#ddlProvince2").change(function () {
        $.post("/PCCSC/City?code=" + $("#ddlProvince2").val(),
        function (data) {
            dat = eval(data);
            $("#ddlCity2").empty();
            $("#ddlCity2").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlCounty2").empty();
            $("#ddlCounty2").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlStreet2").empty();
            $("#ddlStreet2").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlCommunity2").empty();
            $("#ddlCommunity2").append("<option value=" + "" + ">=请选择=</option>");
            if ($("#ddlProvince2").val() == "11" || $("#ddlProvince2").val() == "12" || $("#ddlProvince2").val() == "31" || $("#ddlProvince2").val() == "50") {
                if (dat != "") {
                    for (var i = 0; i < dat.length; i++) {
                        $("#ddlCity2").append("<option value=" + dat[i].code + " selected ='selected'>" + dat[i].name + "</option>");
                        $.post("/PCCSC/County?code=" + dat[i].code,
                            function (data) {
                                dat = eval(data);
                                $("#ddlCounty2").empty();
                                $("#ddlCounty2").append("<option value=" + "" + ">=请选择=</option>");
                                $("#ddlStreet2").empty();
                                $("#ddlStreet2").append("<option value=" + "" + ">=请选择=</option>");
                                $("#ddlCommunity2").empty();
                                $("#ddlCommunity2").append("<option value=" + "" + ">=请选择=</option>");
                                if (dat != "") {
                                    for (var i = 0; i < dat.length; i++) {
                                        $("#ddlCounty2").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                                    }
                                }
                            })
                    }
                }
            } else {
                if (dat != "") {
                    for (var i = 0; i < dat.length; i++) {
                        $("#ddlCity2").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                    }
                }
            }
        })
    })

    $("#ddlCity2").change(function () {
        $.post("/PCCSC/County?code=" + $("#ddlCity2").val(),
        function (data) {
            dat = eval(data);
            $("#ddlCounty2").empty();
            $("#ddlCounty2").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlStreet2").empty();
            $("#ddlStreet2").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlCommunity2").empty();
            $("#ddlCommunity2").append("<option value=" + "" + ">=请选择=</option>");
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlCounty2").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        })
    })


    $("#ddlCounty2").change(function () {
        $.post("/PCCSC/Street?code=" + $("#ddlCounty2").val(),
        function (data) {
            dat = eval(data);
            $("#ddlStreet2").empty();
            $("#ddlStreet2").append("<option value=" + "" + ">=请选择=</option>");
            $("#ddlCommunity2").empty();
            $("#ddlCommunity2").append("<option value=" + "" + ">=请选择=</option>");
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlStreet2").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        })
    })

    $("#ddlStreet2").change(function () {
        $.post("/PCCSC/Community?code=" + $("#ddlStreet2").val(),
        function (data) {
            dat = eval(data);
            $("#ddlCommunity2").empty();
            $("#ddlCommunity2").append("<option value=" + "" + ">=请选择=</option>");
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    $("#ddlCommunity2").append("<option value=" + dat[i].code + ">" + dat[i].name + "</option>");
                }
            }
        })
    })

})