
var times = new Date();
var year = times.getFullYear();
var months = times.getMonth() + 1;
var days = times.getDate();
var hour = times.getHours();
var secord = times.getMinutes();

if (months < 10) {
    months = "0" + months;
}
if (days < 10) {
    days = "0" + days;
}

var today = year + '-' + months + '-' + days;

$(function () {
    //---------------------------------日期判断-----------------------
    //获取日期,判断日期是否是今天
    $("#date0").val(today);
    for (var a = 0; a < 24; a++) {
        if (secord < 30) {
            secord = "00";
            if (a == 0) {
                if ((hour - a).toString().length == 1) {
                    $("#ttime0").append("<option value=" + "0" + (hour - a) + ":" + secord + ">" + "0" + (hour - a) + ":" + secord + "</option>");

                }
                else {
                    $("#ttime0").append("<option value=" + (hour - a) + ":" + secord + ">" + (hour - a) + ":" + secord + "</option>");
                }
            }
            else if (a > 0) {
                if ((hour - a).toString().length == 1) {

                    $("#ttime0").append("<option value=" + "0" + (hour - a) + ":30>" + "0" + (hour - a) + ":30</option>");
                    $("#ttime0").append("<option value=" + "0" + (hour - a) + ":00>" + "0" + (hour - a) + ":00</option>");
                }
                else {

                    $("#ttime0").append("<option value=" + (hour - a) + ":30>" + (hour - a) + ":30</option>");
                    $("#ttime0").append("<option value=" + (hour - a) + ":00>" + (hour - a) + ":00</option>");
                }
            }
        } else {
            secord = "30";
            if (a == 0) {
                if ((hour - a).toString().length == 1) {
                    $("#ttime0").append("<option value=" + "0" + (hour - a) + ":" + secord + ">" + "0" + (hour - a) + ":" + secord + "</option>");
                }
                else {
                    $("#ttime0").append("<option value=" + (hour - a) + ":" + secord + ">" + (hour - a) + ":" + secord + "</option>");
                    $("#ttime0").append("<option value=" + (hour - a) + ":00>" + (hour - a) + ":00</option>");
                }
            }
            else if (a > 0) {
                if ((hour - a).toString().length == 1) {

                    $("#ttime0").append("<option value=" + "0" + (hour - a) + ":30>" + "0" + (hour - a) + ":30</option>");
                    $("#ttime0").append("<option value=" + "0" + (hour - a) + ":00>" + "0" + (hour - a) + ":00</option>");
                }
                else {

                    $("#ttime0").append("<option value=" + (hour - a) + ":30>" + (hour - a) + ":30</option>");
                    $("#ttime0").append("<option value=" + (hour - a) + ":00>" + (hour - a) + ":00</option>");
                }
            }
        }

        if ((hour - a) < 1) {
            break;
        }
    }

})

function changed() {
    if (document.getElementById("date0").value == today) {

        $("#ttime0").empty();

        $("#ttime0").append("<option>=请选择=</option>");
        for (var a = 0; a < 24; a++) {
            if (secord < 30) {
                secord = "00";
                if (a == 0) {
                    if ((hour - a).toString().length == 1) {
                        $("#ttime0").append("<option value=" + "0" + (hour - a) + ":" + secord + ">" + "0" + (hour - a) + ":" + secord + "</option>");

                    }
                    else {
                        $("#ttime0").append("<option value=" + (hour - a) + ":" + secord + ">" + (hour - a) + ":" + secord + "</option>");
                    }
                }
                else if (a > 0) {
                    if ((hour - a).toString().length == 1) {
                        $("#ttime0").append("<option value=" + "0" + (hour - a) + ":30>" + "0" + (hour - a) + ":30</option>");
                        $("#ttime0").append("<option value=" + "0" + (hour - a) + ":00>" + "0" + (hour - a) + ":00</option>");
                    }
                    else {
                        $("#ttime0").append("<option value=" + (hour - a) + ":30>" + (hour - a) + ":30</option>");
                        $("#ttime0").append("<option value=" + (hour - a) + ":00>" + (hour - a) + ":00</option>");
                    }
                }
            } else {
                secord = "30";
                if (a == 0) {
                    if ((hour - a).toString().length == 1) {
                        $("#ttime0").append("<option value=" + "0" + (hour - a) + ":" + secord + ">" + "0" + (hour - a) + ":" + secord + "</option>");
                        $("#ttime0").append("<option value=" + "0" + (hour - a) + ":00>" + "0" + (hour - a) + ":00</option>");
                    }
                    else {
                        $("#ttime0").append("<option value=" + (hour - a) + ":" + secord + ">" + (hour - a) + ":" + secord + "</option>");
                        $("#ttime0").append("<option value=" + (hour - a) + ":00>" + (hour - a) + ":00</option>");
                    }
                }
                else if (a > 0) {
                    if ((hour - a).toString().length == 1) {
                        $("#ttime0").append("<option value=" + "0" + (hour - a) + ":30>" + "0" + (hour - a) + ":30</option>");
                        $("#ttime0").append("<option value=" + "0" + (hour - a) + ":00>" + "0" + (hour - a) + ":00</option>");
                    }
                    else {
                        $("#ttime0").append("<option value=" + (hour - a) + ":30>" + (hour - a) + ":30</option>");
                        $("#ttime0").append("<option value=" + (hour - a) + ":00>" + (hour - a) + ":00</option>");
                    }
                }
            }

            if ((hour - a) < 1) {
                break;
            }
        }
    } else if (document.getElementById("date0").value != today) {


        $("#ttime0").empty();

        $("#ttime0").append("<option>=请选择=</option>");
        for (var a = 1; a <= 24; a++) {
            if ((24 - a).toString().length == 1) {
                $("#ttime0").append("<option value=" + "0" + (24 - a) + ":30>" + "0" + (24 - a) + ":30</option>");
                $("#ttime0").append("<option value=" + "0" + (24 - a) + ":00>" + "0" + (24 - a) + ":00</option>");
            }
            else {
                $("#ttime0").append("<option value=" + (24 - a) + ":30>" + (24 - a) + ":30</option>");
                $("#ttime0").append("<option value=" + (24 - a) + ":00>" + (24 - a) + ":00</option>");
            }


            if ((24 - a) < 1) {
                break;
            }
        }
    }
}

