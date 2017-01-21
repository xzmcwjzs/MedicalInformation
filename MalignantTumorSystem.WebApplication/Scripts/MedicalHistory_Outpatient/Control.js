$(function () {
    //判断是否是医院，如果是，则自动添加诊治医院，且不允许修改
    if (type != "") {
        $("#hospital").val(departments);
        $("#hospital").attr("readonly", "readonly");
    }



    //=====================================================血压======================================================

    $("#ssy").keyup(function () {
        var a = $("#ssy").val();
        if (a != "") {
            //if (a < 200 && a > 100) {
            document.getElementById("ssy1").value = parseFloat(a * 0.1333 + 1).toFixed(1);
            //}
        }

    });

    $("#szy").keyup(function () {
        var a = $("#szy").val();
        if (a != "") {
            //if (a > 60 && a < 140) {
            document.getElementById("szy1").value = parseFloat(a * 0.1333 + 1).toFixed(1);
            //}
        }

    });

    $("#ssy1").keyup(function () {
        var a = $("#ssy1").val();
        if (a != "") {
            //if (a < 25 && a > 10) {
            document.getElementById("ssy").value = parseInt(a / 0.1333 + 1);
            //}
        }


    });

    $("#szy1").keyup(function () {
        var a = $("#szy1").val();
        if (a != "") {
            //if (a < 15 && a > 2) {
            document.getElementById("szy").value = parseInt(a / 0.1333 + 1);
            //}
        }


    });



    //============================================================诊断=====================================================================================
    $("#judge1,#judge2,#judge3").autocomplete('/Data/ICD10', {
        multiple: false,   //是否允许搜索框追加
        multipleSeparator: '，',  //搜索框追加后缀格式 如：搜索值1,搜索值2
        max: 50,
        position: 'absolute',
        matchContains: true,
        autoFill: false,
        delay: 40,
        dataType: "json", //json类型
        parse: function (data) {
            return $.map(data, function (row) {
                return {
                    data: row,
                    value: row.name,
                    result: row.name
                }
            });
        }, formatItem: function (item) {
            return item.name;
        }
    });

    $("#judge1").result(judged1).click(function () {
        $(this).prev().search();
    });
    $("#judge2").result(judged2).click(function () {
        $(this).prev().search();
    });
    $("#judge3").result(judged3).click(function () {
        $(this).prev().search();
    });
    function judged1(event, data, formatted) {
        $("#icd1").val(data.code);
    }
    function judged2(event, data, formatted) {
        $("#icd2").val(data.code);
    }
    function judged3(event, data, formatted) {
        $("#icd3").val(data.code);
    }
    //====================================================================处方==============================================================================
    $("#medical_name1,#medical_name2,#medical_name3").autocomplete('/Data/Medical_Query', {
        multiple: false,   //是否允许搜索框追加
        multipleSeparator: '，',  //搜索框追加后缀格式 如：搜索值1,搜索值2
        max: 20,
        width: 900,
        position: 'absolute',
        matchContains: true,
        autoFill: false,
        delay: 40,
        dataType: "json", //json类型
        parse: function (data) {
            return $.map(data, function (row) {
                return {
                    data: row,
                    value: row.medicine_name,
                    result: row.medicine_name
                }
            });
        }, formatItem: function (item) {
            return '<td style="width:320px;">' + item.medicine_name + '</td><td style="width:200px;">' + item.specifications + '</td><td style="width:100px;">' + item.common_price + "元/" + item.min_unit + '</td><td style="width:280px;">' + item.manufacturer + '<td>';
        }

    });
    $("#medical_name1").result(log1).click(function () {
        $(this).prev().search();
    });
    $("#medical_name2").result(log2).click(function () {
        $(this).prev().search();
    });
    $("#medical_name3").result(log3).click(function () {
        $(this).prev().search();
    });
    function log1(event, data, formatted) {
        $("#price1").val(parseFloat(data.common_price).toFixed(2));
        $("#specifications1").val(data.specifications);
        $("#mix_unit1").val(data.min_unit);
        $("#manufacturer1").val(data.manufacturer);
    }
    function log2(event, data, formatted) {
        $("#price2").val(parseFloat(data.common_price).toFixed(2));
        $("#specifications2").val(data.specifications);
        $("#mix_unit2").val(data.min_unit);
        $("#manufacturer2").val(data.manufacturer);
    }
    function log3(event, data, formatted) {
        $("#price3").val(parseFloat(data.common_price).toFixed(2));
        $("#specifications3").val(data.specifications);
        $("#mix_unit3").val(data.min_unit);
        $("#manufacturer3").val(data.manufacturer);
    }

})
//==============================保存页面=======================================
function save() {
    if ($("#name").val() == "") {
        alert("姓名不能为空！")
    }
    else if ($("#sex").val() == "") {
        alert("性别不能为空！")
    }
    else if ($("#id_card_number").val() == "") {
        alert("身份证号码不能为空！")
    }
    else if ($("#ddlCommunity").val() == "") {
        alert("常住地址必须填写到社区、村或者居委会！")
    }
    else if ($("#phone").val() == "") {
        alert("手机号码不能为空！")
    }
    else if ($("#hospital").val() == "") {
        alert("诊治医院不能为空！")
    }
    else if ($("#zs").val() == "") {
        alert("主诉不能为空！")
    }
    else if ($("#xbs").val() == "") {
        alert("现病史不能为空！")
    }
    else if ($("#t").val() == "") {
        alert("体温不能为空！")
    }
    else if ($("#p").val() == "") {
        alert("脉搏不能为空！")
    }
    else if ($("#r").val() == "") {
        alert("呼吸不能为空！")
    }
    else if (($("#ssy").val() == "" && $("#szy").val() == "") && ($("#ssy1").val() == "" && $("#szy1").val() == "")) {
        alert("血压不能为空！")
    } else {
        $("#bt1").attr("disabled", "disabled");
        $.post("/MedicalHistory_Outpatient/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
                $("#form1").serialize(),
                function (msgs) {
                    var msg = msgs.split(',');
                    alert(msg[0]);
                    //window.location.href = 'View.aspx?id=' + msg[1];
                    window.close();
                })
    }
}

//==============================提交页面=======================================
function sure() {
    if ($("#name").val() == "") {
        alert("姓名不能为空！")
    }
    else if ($("#sex").val() == "") {
        alert("性别不能为空！")
    }
    else if ($("#id_card_number").val() == "") {
        alert("身份证号码不能为空！")
    }
    else if ($("#ddlCommunity").val() == "") {
        alert("常住地址必须填写到社区、村或者居委会！")
    }
    else if ($("#phone").val() == "") {
        alert("手机号码不能为空！")
    }
    else if ($("#hospital").val() == "") {
        alert("诊治医院不能为空！")
    }
    else if ($("#zs").val() == "") {
        alert("主诉不能为空！")
    }
    else if ($("#xbs").val() == "") {
        alert("现病史不能为空！")
    }
    else if ($("#t").val() == "") {
        alert("体温不能为空！")
    }
    else if ($("#p").val() == "") {
        alert("脉搏不能为空！")
    }
    else if ($("#r").val() == "") {
        alert("呼吸不能为空！")
    }
    else if (($("#ssy").val() == "" && $("#szy").val() == "") && ($("#ssy1").val() == "" && $("#szy1").val() == "")) {
        alert("血压不能为空！")
    } else {
        if (window.confirm('请确定是否提交，提交完成后将不能对此条信息进行修改！')) {
            $("#bt2").attr("disabled", "disabled");
            $.post("/MedicalHistory_Outpatient/Sure?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
                $("#form1").serialize(),
                function (msgs) {
                    var msg = msgs.split(',');
                    alert(msg[0]);
                    //window.location.href = 'View.aspx?id=' + msg[1];
                    window.close();
                })
            return true;
        } else {
            return false;
        }

    }
}
//===============================增加一行==============================================
var i = 1;
function add1() {
    if ($("#fzjc1").val() != "" && $("#fzjc2").val() != "" && $('#fzjc' + (i + 2) + '').val() != "") {
        if (i < 10) {
            $('#fzjc' + (i + 2) + '').unbind("keyup");
            $('#fzjc' + (i + 2) + '').one('keyup', function () {
                $('#Tr' + (i + 2) + '').after('<tr id="Tr' + (i + 3) + '">' +
                        '<td class="auto-style36" colspan="9">' + (i + 3) + '.<textarea id="fzjc' + (i + 3) + '" name="fzjc' + (i + 3) + '" style="height: 18px; width: 96%;"  onkeyup="add1()"></textarea></td>' +
                    '</tr>');
                $("#fzjc").attr({ "rowspan": i + 3 });
                i++;
            })
        }
    }
}
var a = 1;
function add2() {
    if ($("#judge1").val() != "" && $("#judge2").val() != "" && $('#judge' + (a + 2) + '').val() != "") {
        if (a < 10) {
            $('#judge' + (a + 2) + '').unbind("keyup");
            $('#judge' + (a + 2) + '').one('keyup', function () {


                $('#Judge' + (a + 2) + '').after('<tr id="Judge' + (a + 3) + '">' +
                        '<td class="auto-style36" colspan="9">' + (a + 3) + '.<textarea id="judge' + (a + 3) + '" name="judge' + (a + 3) + '" style="height: 18px; width: 96%;"  onkeyup="add2()"></textarea><input type="text" id="icd' + (a + 3) + '" name="icd' + (a + 3) + '" style="display:none"/></td>' +
                    '</tr>');
                $("#judge").attr({ "rowspan": a + 3 });

                $('#judge' + (a + 3) + '').autocomplete('/Data/ICD10', {
                    multiple: false,   //是否允许搜索框追加
                    max: 50,
                    position: 'absolute',
                    matchContains: true,
                    autoFill: false,
                    delay: 40,
                    dataType: "json", //json类型
                    parse: function (data) {
                        return $.map(data, function (row) {
                            return {
                                data: row,
                                value: row.name,
                                result: row.name
                            }
                        });
                    }, formatItem: function (item) {
                        return item.name;
                    }
                });
                $('#judge' + (a + 3) + '').result(judged).click(function () {
                    $(this).prev().search();
                });

                function judged(event, data, formatted) {
                    $('#icd' + (a + 3) + '').val(data.code);
                }
                a++;
            })
        }

    }
}

var c = 1;
function add3() {
    if ($("#medical_name1").val() != "" && $("#medical_name2").val() != "" && $('#medical_name' + (c + 2) + '').val() != "") {
        if (c < 10) {
            $('#medical_name' + (c + 2) + '').unbind("keyup");
            $('#medical_name' + (c + 2) + '').one('keyup', function () {
                $('#Pre' + (c + 2) + '').after('<tr style="height: 35px;" id="Pre' + (c + 3) + '">' +
                                '<td style="text-align: left; background-color: #f1f3f5; border: 1px solid white; border-left: 0px;; border-bottom: 0px">' + (c + 3) + '.<input type="text" name="medical_name' + (c + 3) + '" id="medical_name' + (c + 3) + '" style="width: 90%" onkeyup="add3()"/>' +
                                '</td>' +
                                '<td style="background-color: #e2ebfb; border: 1px solid white;; border-bottom: 0px">' +
                                    '<input type="text" name="specifications' + (c + 3) + '" id="specifications' + (c + 3) + '" style="width: 98%" />' +
                                '</td>' +
                                '<td style="background-color: #f1f3f5; border: 1px solid white;; border-bottom: 0px">' +
                                    '<select id="usage' + (c + 3) + '" name="usage' + (c + 3) + '">' +
                                        '<option value="">=请选择=</option>' +
                                        '<option value="1">口服</option>' +
                                        '<option value="2">外用</option>' +
                                        '<option value="3">静脉注射</option>' +
                                        '<option value="4">肌肉注射</option>' +
                                        '<option value="5">皮下注射</option>' +
                                        '<option value="6">皮内注射</option>' +
                                    '</select>' +
                                '</td>' +
                                '<td style="background-color: #e2ebfb; border: 1px solid white;; border-bottom: 0px">' +
                                    '<input type="text" id="dosage' + (c + 3) + '" name="dosage' + (c + 3) + '" style="width: 40px" />' +
                                    '<input type="text" id="mix_unit' + (c + 3) + '" name="mix_unit' + (c + 3) + '" style="border: none; background-color: #e2ebfb; width: 30px" />' +
                                '</td>' +
                                '<td style="background-color: #f1f3f5; border: 1px solid white;; border-bottom: 0px">' +
                                    '<select id="frequency' + (c + 3) + '" name="frequency' + (c + 3) + '" style="width: 60px">' +
                                        '<option value="">请选择</option>' +
                                        '<option value="Qd">Qd</option>' +
                                        '<option value="Bid">Bid</option>' +
                                        '<option value="Tid">Tid</option>' +
                                        '<option value="Qid">Qid</option>' +
                                        '<option value="Q2h">Q2h</option>' +
                                        '<option value="Q8h">Q8h</option>' +
                                        '<option value="Qn">Qn</option>' +
                                        '<option value="Qod">Qod</option>' +
                                        '<option value="Qw">Qw</option>' +
                                        '<option value="Biw">Biw</option>' +
                                    '</select>' +
                                '</td>' +
                                '<td style="background-color: #e2ebfb; border: 1px solid white;; border-bottom: 0px">' +
                                    '<input type="text" id="day' + (c + 3) + '" name="day' + (c + 3) + '" style="width: 45px" />' +
                                '</td>' +
                                '<td style="background-color: #f1f3f5; border: 1px solid white;; border-bottom: 0px">' +
                                    '<input type="text" id="total' + (c + 3) + '" name="total' + (c + 3) + '" style="width: 40px" />' +
                                    ' <select id="unit' + (c + 3) + '" name="unit' + (c + 3) + '">' +
                                        '<option value=""></option>' +
                                        '<option value="片">片</option>' +
                                        '<option value="粒">粒</option>' +
                                        '<option value="盒">盒</option>' +
                                        '<option value="瓶">瓶</option>' +
                                        '<option value="支">支</option>' +
                                        '<option value="枚">枚</option>' +
                                        '<option value="袋">袋</option>' +
                                    '</select>' +
                                '</td>' +
                                '<td style="background-color: #e2ebfb; border: 1px solid white; border-right: 0px; border-bottom: 0px">' +
                                    '<input type="text" id="price' + (c + 3) + '" name="price' + (c + 3) + '" style="border: none; background-color: #e2ebfb; width: 70px;text-align:center" />' +
                                '</td>' +
                                '<td style="background-color: #f1f3f5; border: 1px solid white; display: none">' +
                                    '<input type="text" id="manufacturer' + (c + 3) + '" name="manufacturer' + (c + 3) + '" style="border: none; background-color: #f1f3f5; width: 10px" />' +
                                '</td>' +
                            '</tr>');

                $('#medical_name' + (c + 3) + '').autocomplete('/Data/Medical_Query', {
                    multiple: false,   //是否允许搜索框追加
                    multipleSeparator: '，',  //搜索框追加后缀格式 如：搜索值1,搜索值2
                    max: 20,
                    width: 900,
                    position: 'absolute',
                    matchContains: true,
                    autoFill: false,
                    delay: 40,
                    dataType: "json", //json类型
                    parse: function (data) {
                        return $.map(data, function (row) {
                            return {
                                data: row,
                                value: row.medicine_name,
                                result: row.medicine_name
                            }
                        });
                    }, formatItem: function (item) {
                        return '<td style="width:320px;">' + item.medicine_name + '</td><td style="width:200px;">' + item.specifications + '</td><td style="width:100px;">' + item.common_price + "元/" + item.min_unit + '</td><td style="width:280px;">' + item.manufacturer + '<td>';
                    }

                });
                $('#medical_name' + (c + 3) + '').result(log).click(function () {
                    $(this).prev().search();
                });

                function log(event, data, formatted) {
                    $('#price' + (c + 1) + '').val(parseFloat(data.common_price).toFixed(2));
                    $('#specifications' + (c + 1) + '').val(data.specifications);
                    $('#mix_unit' + (c + 1) + '').val(data.min_unit);
                    $('#manufacturer' + (c + 1) + '').val(data.manufacturer);
                }
                c++;
            })
        }

    }
}
