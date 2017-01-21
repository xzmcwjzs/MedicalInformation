var types = 'blood';
$(function () {

    //============================================================改变选项 加载内容====================================================================================
    //=====1======
    $("#project1").autocomplete('/Data/DataNames1?type=' + types, {
        multiple: false,   //是否允许搜索框追加
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
        },
        formatItem: function (item) {
            return item.name;
        },
    });

    function log1(event, data, formatted) {

        $.post("/Data/DataUnit?type=" + types,
                       { Name: data.name },
                        function (datas) {
                            $("#Text1").val(datas);
                        });
        $.post("/Data/DataSection1?type=" + types,
                        { Name: data.name },
                          function (datas) {
                              $("#Text2").val(datas);
                          });

    }

    $("#project1").result(log1).click(function () {
        $(this).prev().search();
    });
    //=====2======
    $("#project2").autocomplete('/Data/DataNames1?type=' + types, {
        multiple: false,   //是否允许搜索框追加
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
        },
        formatItem: function (item) {
            return item.name;
        },

    });

    function log2(event, data, formatted) {
        $.post("/Data/DataUnit?type=" + types,
                              { Name: data.name },
                               function (datas) {
                                   $("#Text6").val(datas);
                               });
        $.post("/Data/DataSection1?type=" + types,
                        { Name: data.name },
                          function (datas) {
                              $("#Text7").val(datas);
                          });
    }

    $("#project2").result(log2).click(function () {
        $(this).prev().search();
    });
    //=====3======
    $("#project3").autocomplete('/Data/DataNames1?type=' + types, {
        multiple: false,   //是否允许搜索框追加
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
        },
        formatItem: function (item) {
            return item.name;
        },

    });

    function log3(event, data, formatted) {

        $.post("/Data/DataUnit?type=" + types,
                       { Name: data.name },
                        function (datas) {
                            $("#Text10").val(datas);
                        });
        $.post("/Data/DataSection1?type=" + types,
                        { Name: data.name },
                          function (datas) {
                              $("#Text11").val(datas);
                          });
    }

    $("#project3").result(log3).click(function () {
        $(this).prev().search();
    });

    //=====4======
    $("#project4").autocomplete('/Data/DataNames1?type=' + types, {
        multiple: false,   //是否允许搜索框追加
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
        },
        formatItem: function (item) {
            return item.name;
        },

    });

    function log4(event, data, formatted) {

        $.post("/Data/DataUnit?type=" + types,
                       { Name: data.name },
                        function (datas) {
                            $("#Text14").val(datas);
                        });
        $.post("/Data/DataSection1?type=" + types,
                        { Name: data.name },
                          function (datas) {
                              $("#Text15").val(datas);
                          });
    }

    $("#project4").result(log4).click(function () {
        $(this).prev().search();
    });

    //=====5======
    $("#project5").autocomplete('/Data/DataNames1?type=' + types, {
        multiple: false,   //是否允许搜索框追加
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
        },
        formatItem: function (item) {
            return item.name;
        },

    });

    function log5(event, data, formatted) {

        $.post("/Data/DataUnit?type=" + types,
                      { Name: data.name },
                       function (datas) {
                           $("#Text18").val(datas);
                       });
        $.post("/Data/DataSection1?type=" + types,
                        { Name: data.name },
                          function (datas) {
                              $("#Text19").val(datas);
                          });
    }

    $("#project5").result(log5).click(function () {
        $(this).prev().search();
    });
    //============================================================判断输入的值，给出相应的提示==============================================================
    //========================1===================================
    $("#res1").keyup(function () {
        var a = $("#res1").val();
        var b = $("#project1").val();
        if (a != "") {
            if (b == "白细胞计数") {
                if (a < 4.0) {
                    $("#Text3").val("↓");
                } else if (a >= 4.0 && a <= 10.0) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "中性粒细胞分类") {
                if (a < 50) {
                    $("#Text3").val("↓");
                } else if (a >= 50 && a <= 70) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "淋巴细胞分类") {
                if (a < 20) {
                    $("#Text3").val("↓");
                } else if (a >= 20 && a <= 40) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "单核细胞分类") {
                if (a < 3) {
                    $("#Text3").val("↓");
                } else if (a >= 3 && a <= 8) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "嗜酸细胞分类") {
                if (a < 0.5) {
                    $("#Text3").val("↓");
                } else if (a >= 0.5 && a <= 5) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "嗜碱细胞分类") {
                if (a >= 0 && a <= 1) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "中性粒细胞计数") {
                if (a < 2.0) {
                    $("#Text3").val("↓");
                } else if (a >= 2.0 && a <= 7.0) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "淋巴细胞计数") {
                if (a < 0.8) {
                    $("#Text3").val("↓");
                } else if (a >= 0.8 && a <= 4.0) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "单核细胞计数") {
                if (a < 0.12) {
                    $("#Text3").val("↓");
                } else if (a >= 0.12 && a <= 0.8) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "嗜酸细胞计数") {
                if (a < 0.05) {
                    $("#Text3").val("↓");
                } else if (a >= 0.05 && a <= 0.5) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "嗜碱细胞计数") {
                if (a >= 0 && a <= 1.0) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "红细胞计数") {
                if (a < 3.5) {
                    $("#Text3").val("↓");
                } else if (a >= 3.5 && a <= 5.0) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "血红蛋白") {
                if (a < 110) {
                    $("#Text3").val("↓");
                } else if (a >= 110 && a <= 150) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "红细胞压积") {
                if (a < 0.37) {
                    $("#Text3").val("↓");
                } else if (a >= 0.37 && a <= 0.47) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "平均红细胞体积") {
                if (a < 80) {
                    $("#Text3").val("↓");
                } else if (a >= 80 && a <= 100) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "平均血红蛋白量") {
                if (a < 27.0) {
                    $("#Text3").val("↓");
                } else if (a >= 27.0 && a <= 31.0) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "平均血红蛋白浓度") {
                if (a < 320) {
                    $("#Text3").val("↓");
                } else if (a >= 320 && a <= 360) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "红细胞分布宽度") {
                if (a < 11.6) {
                    $("#Text3").val("↓");
                } else if (a >= 11.6 && a <= 14.6) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "血小板计数") {
                if (a < 100) {
                    $("#Text3").val("↓");
                } else if (a >= 100 && a <= 300) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "平均血小板体积") {
                if (a < 7.6) {
                    $("#Text3").val("↓");
                } else if (a >= 7.6 && a <= 13.2) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "血小板分布宽度") {
                if (a < 14.8) {
                    $("#Text3").val("↓");
                } else if (a >= 14.8 && a <= 17.2) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "血小板压积") {
                if (a < 0.1) {
                    $("#Text3").val("↓");
                } else if (a >= 0.1 && a <= 0.2) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            } else if (b == "血沉") {
                if (a >= 0 && a <= 15.0) {
                    $("#Text3").val("--");
                } else {
                    $("#Text3").val("↑");
                }
            }

        }
    });
    //========================2===================================
    $("#res2").keyup(function () {
        var a = $("#res2").val();
        var b = $("#project2").val();
        if (a != "") {
            if (b == "白细胞计数") {
                if (a < 4.0) {
                    $("#Text8").val("↓");
                } else if (a >= 4.0 && a <= 10.0) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "中性粒细胞分类") {
                if (a < 50) {
                    $("#Text8").val("↓");
                } else if (a >= 50 && a <= 70) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "淋巴细胞分类") {
                if (a < 20) {
                    $("#Text8").val("↓");
                } else if (a >= 20 && a <= 40) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "单核细胞分类") {
                if (a < 3) {
                    $("#Text8").val("↓");
                } else if (a >= 3 && a <= 8) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "嗜酸细胞分类") {
                if (a < 0.5) {
                    $("#Text8").val("↓");
                } else if (a >= 0.5 && a <= 5) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "嗜碱细胞分类") {
                if (a >= 0 && a <= 1) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "中性粒细胞计数") {
                if (a < 2.0) {
                    $("#Text8").val("↓");
                } else if (a >= 2.0 && a <= 7.0) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "淋巴细胞计数") {
                if (a < 0.8) {
                    $("#Text8").val("↓");
                } else if (a >= 0.8 && a <= 4.0) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "单核细胞计数") {
                if (a < 0.12) {
                    $("#Text8").val("↓");
                } else if (a >= 0.12 && a <= 0.8) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "嗜酸细胞计数") {
                if (a < 0.05) {
                    $("#Text8").val("↓");
                } else if (a >= 0.05 && a <= 0.5) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "嗜碱细胞计数") {
                if (a >= 0 && a <= 1.0) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "红细胞计数") {
                if (a < 3.5) {
                    $("#Text8").val("↓");
                } else if (a >= 3.5 && a <= 5.0) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "血红蛋白") {
                if (a < 110) {
                    $("#Text8").val("↓");
                } else if (a >= 110 && a <= 150) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "红细胞压积") {
                if (a < 0.37) {
                    $("#Text8").val("↓");
                } else if (a >= 0.37 && a <= 0.47) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "平均红细胞体积") {
                if (a < 80) {
                    $("#Text8").val("↓");
                } else if (a >= 80 && a <= 100) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "平均血红蛋白量") {
                if (a < 27.0) {
                    $("#Text8").val("↓");
                } else if (a >= 27.0 && a <= 31.0) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "平均血红蛋白浓度") {
                if (a < 320) {
                    $("#Text8").val("↓");
                } else if (a >= 320 && a <= 360) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "红细胞分布宽度") {
                if (a < 11.6) {
                    $("#Text8").val("↓");
                } else if (a >= 11.6 && a <= 14.6) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "血小板计数") {
                if (a < 100) {
                    $("#Text8").val("↓");
                } else if (a >= 100 && a <= 300) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "平均血小板体积") {
                if (a < 7.6) {
                    $("#Text8").val("↓");
                } else if (a >= 7.6 && a <= 13.2) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "血小板分布宽度") {
                if (a < 14.8) {
                    $("#Text8").val("↓");
                } else if (a >= 14.8 && a <= 17.2) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "血小板压积") {
                if (a < 0.1) {
                    $("#Text8").val("↓");
                } else if (a >= 0.1 && a <= 0.2) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            } else if (b == "血沉") {
                if (a >= 0 && a <= 15.0) {
                    $("#Text8").val("--");
                } else {
                    $("#Text8").val("↑");
                }
            }

        }
    });
    //========================3===================================
    $("#res3").keyup(function () {
        var a = $("#res3").val();
        var b = $("#project3").val();
        if (a != "") {
            if (b == "白细胞计数") {
                if (a < 4.0) {
                    $("#Text12").val("↓");
                } else if (a >= 4.0 && a <= 10.0) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "中性粒细胞分类") {
                if (a < 50) {
                    $("#Text12").val("↓");
                } else if (a >= 50 && a <= 70) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "淋巴细胞分类") {
                if (a < 20) {
                    $("#Text12").val("↓");
                } else if (a >= 20 && a <= 40) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "单核细胞分类") {
                if (a < 3) {
                    $("#Text12").val("↓");
                } else if (a >= 3 && a <= 8) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "嗜酸细胞分类") {
                if (a < 0.5) {
                    $("#Text12").val("↓");
                } else if (a >= 0.5 && a <= 5) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "嗜碱细胞分类") {
                if (a >= 0 && a <= 1) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "中性粒细胞计数") {
                if (a < 2.0) {
                    $("#Text12").val("↓");
                } else if (a >= 2.0 && a <= 7.0) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "淋巴细胞计数") {
                if (a < 0.8) {
                    $("#Text12").val("↓");
                } else if (a >= 0.8 && a <= 4.0) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "单核细胞计数") {
                if (a < 0.12) {
                    $("#Text12").val("↓");
                } else if (a >= 0.12 && a <= 0.8) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "嗜酸细胞计数") {
                if (a < 0.05) {
                    $("#Text12").val("↓");
                } else if (a >= 0.05 && a <= 0.5) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "嗜碱细胞计数") {
                if (a >= 0 && a <= 1.0) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "红细胞计数") {
                if (a < 3.5) {
                    $("#Text12").val("↓");
                } else if (a >= 3.5 && a <= 5.0) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "血红蛋白") {
                if (a < 110) {
                    $("#Text12").val("↓");
                } else if (a >= 110 && a <= 150) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "红细胞压积") {
                if (a < 0.37) {
                    $("#Text12").val("↓");
                } else if (a >= 0.37 && a <= 0.47) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "平均红细胞体积") {
                if (a < 80) {
                    $("#Text12").val("↓");
                } else if (a >= 80 && a <= 100) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "平均血红蛋白量") {
                if (a < 27.0) {
                    $("#Text12").val("↓");
                } else if (a >= 27.0 && a <= 31.0) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "平均血红蛋白浓度") {
                if (a < 320) {
                    $("#Text12").val("↓");
                } else if (a >= 320 && a <= 360) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "红细胞分布宽度") {
                if (a < 11.6) {
                    $("#Text12").val("↓");
                } else if (a >= 11.6 && a <= 14.6) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "血小板计数") {
                if (a < 100) {
                    $("#Text12").val("↓");
                } else if (a >= 100 && a <= 300) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "平均血小板体积") {
                if (a < 7.6) {
                    $("#Text12").val("↓");
                } else if (a >= 7.6 && a <= 13.2) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "血小板分布宽度") {
                if (a < 14.8) {
                    $("#Text12").val("↓");
                } else if (a >= 14.8 && a <= 17.2) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "血小板压积") {
                if (a < 0.1) {
                    $("#Text12").val("↓");
                } else if (a >= 0.1 && a <= 0.2) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            } else if (b == "血沉") {
                if (a >= 0 && a <= 15.0) {
                    $("#Text12").val("--");
                } else {
                    $("#Text12").val("↑");
                }
            }

        }
    });

    //========================4===================================
    $("#res4").keyup(function () {
        var a = $("#res4").val();
        var b = $("#project4").val();
        if (a != "") {
            if (b == "白细胞计数") {
                if (a < 4.0) {
                    $("#Text16").val("↓");
                } else if (a >= 4.0 && a <= 10.0) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "中性粒细胞分类") {
                if (a < 50) {
                    $("#Text16").val("↓");
                } else if (a >= 50 && a <= 70) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "淋巴细胞分类") {
                if (a < 20) {
                    $("#Text16").val("↓");
                } else if (a >= 20 && a <= 40) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "单核细胞分类") {
                if (a < 3) {
                    $("#Text16").val("↓");
                } else if (a >= 3 && a <= 8) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "嗜酸细胞分类") {
                if (a < 0.5) {
                    $("#Text16").val("↓");
                } else if (a >= 0.5 && a <= 5) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "嗜碱细胞分类") {
                if (a >= 0 && a <= 1) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "中性粒细胞计数") {
                if (a < 2.0) {
                    $("#Text16").val("↓");
                } else if (a >= 2.0 && a <= 7.0) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "淋巴细胞计数") {
                if (a < 0.8) {
                    $("#Text16").val("↓");
                } else if (a >= 0.8 && a <= 4.0) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "单核细胞计数") {
                if (a < 0.12) {
                    $("#Text16").val("↓");
                } else if (a >= 0.12 && a <= 0.8) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "嗜酸细胞计数") {
                if (a < 0.05) {
                    $("#Text16").val("↓");
                } else if (a >= 0.05 && a <= 0.5) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "嗜碱细胞计数") {
                if (a >= 0 && a <= 1.0) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "红细胞计数") {
                if (a < 3.5) {
                    $("#Text16").val("↓");
                } else if (a >= 3.5 && a <= 5.0) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "血红蛋白") {
                if (a < 110) {
                    $("#Text16").val("↓");
                } else if (a >= 110 && a <= 150) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "红细胞压积") {
                if (a < 0.37) {
                    $("#Text16").val("↓");
                } else if (a >= 0.37 && a <= 0.47) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "平均红细胞体积") {
                if (a < 80) {
                    $("#Text16").val("↓");
                } else if (a >= 80 && a <= 100) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "平均血红蛋白量") {
                if (a < 27.0) {
                    $("#Text16").val("↓");
                } else if (a >= 27.0 && a <= 31.0) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "平均血红蛋白浓度") {
                if (a < 320) {
                    $("#Text16").val("↓");
                } else if (a >= 320 && a <= 360) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "红细胞分布宽度") {
                if (a < 11.6) {
                    $("#Text16").val("↓");
                } else if (a >= 11.6 && a <= 14.6) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "血小板计数") {
                if (a < 100) {
                    $("#Text16").val("↓");
                } else if (a >= 100 && a <= 300) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "平均血小板体积") {
                if (a < 7.6) {
                    $("#Text16").val("↓");
                } else if (a >= 7.6 && a <= 13.2) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "血小板分布宽度") {
                if (a < 14.8) {
                    $("#Text16").val("↓");
                } else if (a >= 14.8 && a <= 17.2) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "血小板压积") {
                if (a < 0.1) {
                    $("#Text16").val("↓");
                } else if (a >= 0.1 && a <= 0.2) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            } else if (b == "血沉") {
                if (a >= 0 && a <= 15.0) {
                    $("#Text16").val("--");
                } else {
                    $("#Text16").val("↑");
                }
            }

        }
    });

    //========================5===================================
    $("#res5").keyup(function () {
        var a = $("#res5").val();
        var b = $("#project5").val();
        if (a != "") {
            if (b == "白细胞计数") {
                if (a < 4.0) {
                    $("#Text20").val("↓");
                } else if (a >= 4.0 && a <= 10.0) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "中性粒细胞分类") {
                if (a < 50) {
                    $("#Text20").val("↓");
                } else if (a >= 50 && a <= 70) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "淋巴细胞分类") {
                if (a < 20) {
                    $("#Text20").val("↓");
                } else if (a >= 20 && a <= 40) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "单核细胞分类") {
                if (a < 3) {
                    $("#Text20").val("↓");
                } else if (a >= 3 && a <= 8) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "嗜酸细胞分类") {
                if (a < 0.5) {
                    $("#Text20").val("↓");
                } else if (a >= 0.5 && a <= 5) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "嗜碱细胞分类") {
                if (a >= 0 && a <= 1) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "中性粒细胞计数") {
                if (a < 2.0) {
                    $("#Text20").val("↓");
                } else if (a >= 2.0 && a <= 7.0) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "淋巴细胞计数") {
                if (a < 0.8) {
                    $("#Text20").val("↓");
                } else if (a >= 0.8 && a <= 4.0) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "单核细胞计数") {
                if (a < 0.12) {
                    $("#Text20").val("↓");
                } else if (a >= 0.12 && a <= 0.8) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "嗜酸细胞计数") {
                if (a < 0.05) {
                    $("#Text20").val("↓");
                } else if (a >= 0.05 && a <= 0.5) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "嗜碱细胞计数") {
                if (a >= 0 && a <= 1.0) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "红细胞计数") {
                if (a < 3.5) {
                    $("#Text20").val("↓");
                } else if (a >= 3.5 && a <= 5.0) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "血红蛋白") {
                if (a < 110) {
                    $("#Text20").val("↓");
                } else if (a >= 110 && a <= 150) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "红细胞压积") {
                if (a < 0.37) {
                    $("#Text20").val("↓");
                } else if (a >= 0.37 && a <= 0.47) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "平均红细胞体积") {
                if (a < 80) {
                    $("#Text20").val("↓");
                } else if (a >= 80 && a <= 100) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "平均血红蛋白量") {
                if (a < 27.0) {
                    $("#Text20").val("↓");
                } else if (a >= 27.0 && a <= 31.0) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "平均血红蛋白浓度") {
                if (a < 320) {
                    $("#Text20").val("↓");
                } else if (a >= 320 && a <= 360) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "红细胞分布宽度") {
                if (a < 11.6) {
                    $("#Text20").val("↓");
                } else if (a >= 11.6 && a <= 14.6) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "血小板计数") {
                if (a < 100) {
                    $("#Text20").val("↓");
                } else if (a >= 100 && a <= 300) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "平均血小板体积") {
                if (a < 7.6) {
                    $("#Text20").val("↓");
                } else if (a >= 7.6 && a <= 13.2) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "血小板分布宽度") {
                if (a < 14.8) {
                    $("#Text20").val("↓");
                } else if (a >= 14.8 && a <= 17.2) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "血小板压积") {
                if (a < 0.1) {
                    $("#Text20").val("↓");
                } else if (a >= 0.1 && a <= 0.2) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            } else if (b == "血沉") {
                if (a >= 0 && a <= 15.0) {
                    $("#Text20").val("--");
                } else {
                    $("#Text20").val("↑");
                }
            }

        }
    });
    //===============================================================修改内容 打开显示======================================================================
    $.post("/MedicalHistory_TestReport_Blood/Show?id=" + id,
               function (data) {
                   dts = eval(data);
                   if (dts != "") {
                       $("#name").val(dts[0].names);
                       $("input[name=" + "sex" + "][value=" + dts[0].sex + "]").attr("checked", "checked");
                       $("#id_card_number").val(dts[0].id_card_number);
                       //$("#id_card_number").attr("readonly", "readonly");
                      // $("#age").val(dts[0].age);
                       var s = dts[0].id_card_number;
                       if (dts[0].birth_date != "" && dts[0].birth_date != null) {
                           var date = new Date(parseInt(dts[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].birth_date.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}
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
                       if (dts[0].community_code != "" && dts[0].community_code != null) {
                           var code1 = dts[0].community_code;
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
                           $("#perment_community_address").val(dts[0].address);
                       }

                       $("#phone").val(dts[0].phone);
                       $("#resident_id").val(dts[0].resident_id);
                       $("#numb").val(dts[0].samplenumber);

                       $("#sjdoctor").val(dts[0].inspect_doctor);
                       $("#jcdoctor").val(dts[0].check_doctor);
                       $("#bgdoctor").val(dts[0].report_doctor);

                       if (dts[0].inspect_time != "" && dts[0].inspect_time != null) {
                           var date = new Date(parseInt(dts[0].inspect_time.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].inspect_time.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}
                           $("#sjtime").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }
                       if (dts[0].report_time != "" && dts[0].report_time != null) {
                           var date = new Date(parseInt(dts[0].report_time.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].report_time.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}
                           $("#bgtime").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }
                       if (dts[0].create_time != "" && dts[0].create_time != null) {
                           var date = new Date(parseInt(dts[0].create_time.replace("/Date(", "").replace(")/", ""), 10));
                           var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                           var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                           //var a = dts[0].create_time.split('/');
                           //if (a[1].length < 2) {
                           //    var a1 = "0" + a[1];
                           //} else {
                           //    var a1 = a[1];
                           //}
                           //if (a[2].split(' ')[0].length < 2) {
                           //    var a2 = "0" + a[2].split(' ')[0];
                           //} else {
                           //    var a2 = a[2].split(' ')[0];
                           //}
                           $("#create_time").val(date.getFullYear() + '-' + a1 + '-' + a2);
                       }
                       $("#project1").val(dts[0].name1);
                       $("#res1").val(dts[0].result1);
                       $("#Text1").val(dts[0].unit1);
                       $("#Text2").val(dts[0].qujian1);
                       $("#Text3").val(dts[0].tishi1);
                       $("#Text4").val(dts[0].beizhu1);

                       $("#project2").val(dts[0].name2);
                       $("#res2").val(dts[0].result2);
                       $("#Text6").val(dts[0].unit2);
                       $("#Text7").val(dts[0].qujian2);
                       $("#Text8").val(dts[0].tishi2);
                       $("#Text9").val(dts[0].beizhu2);

                       $("#project3").val(dts[0].name3);
                       $("#res3").val(dts[0].result3);
                       $("#Text10").val(dts[0].unit3);
                       $("#Text11").val(dts[0].qujian3);
                       $("#Text12").val(dts[0].tishi3);
                       $("#Text13").val(dts[0].beizhu3);

                       $("#project4").val(dts[0].name4);
                       $("#res4").val(dts[0].result4);
                       $("#Text14").val(dts[0].unit4);
                       $("#Text15").val(dts[0].qujian4);
                       $("#Text16").val(dts[0].tishi4);
                       $("#Text17").val(dts[0].beizhu4);

                       $("#project5").val(dts[0].name5);
                       $("#res5").val(dts[0].result5);
                       $("#Text18").val(dts[0].unit5);
                       $("#Text19").val(dts[0].qujian5);
                       $("#Text20").val(dts[0].tishi5);
                       $("#Text21").val(dts[0].beizhu5);

                   }
               })
    $.post("/MedicalHistory_TestReport_Blood/ShowAdd?id=" + id,
        function (data) {
            dat = eval(data);
            if (dat != "") {
                for (i = 1; i <= dat.length; i++) {
                    $("#tab1").append('<tr style="height:30px"><td class="auto-style184">' + (5 + i) + '</td><td class="auto-style185">' +
                           '<span class="ui-widget">' +
                                '<input type="text" id="project_' + i + '" name="project_' + i + '" style="width: 180px;height: 20px;"/>' +
                           '</span>' +
                       '</td>' +
                       '<td style="background-color:#e2ebfb">' +
                           '<div id="d_' + i + '">' +
                               '<input type="text" name="res_' + i + '" id="res_' + i + '" style="width:150px;height: 20px;"/>' +
                           '</div>' +
                       '</td>' +
                       '<td class="auto-style195">' +
                           '<input type="text" id="unit_' + i + '" name="unit_' + i + '" style="text-align:center;border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width: 60px;"" />' +
                       '</td>' +
                       '<td class="auto-style188">' +
                           '<input type="text" id="qujian_' + i + '" name="qujian_' + i + '"  style="text-align:center;overflow:hidden;border-style: none; border-color: inherit; background-color: #e2ebfb; border-width: 0px;width:220px"/>' +
                       '</td>' +
                       '</td>' +
                       '<td class="auto-style222">' +
                           '<input type="text" id="tishi_' + i + '" name="tishi_' + i + '" style="text-align:center;border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width:40px" />' +
                       '</td>' +
                       '<td class="auto-style190">' +
                           '<input type="text" id="beizhu_' + i + '" name="beizhu_' + i + '" style="width: 205px; height: 20px" />' +
                       '</td>' +
                   '</tr>');
                    $('#project_' + i + '').val(dat[i - 1].name);
                    $('#res_' + i + '').val(dat[i - 1].result);
                    $('#unit_' + i + '').val(dat[i - 1].unit);
                    $('#qujian_' + i + '').val(dat[i - 1].qujian);
                    $('#tishi_' + i + '').val(dat[i - 1].tishi);
                    $('#beizhu_' + i + '').val(dat[i - 1].beizhu);

                    //------------------------------------------------------------------------------增加事件-------------------------------------------------------------------------
                    $('#project_' + i + '').autocomplete('/Data/DataNames1?type=' + types, {
                        multiple: false,   //是否允许搜索框追加
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
                        },
                        formatItem: function (item) {
                            return item.name;
                        },

                    });

                    function log6(event, data, formatted) {

                        $.post("/Data/DataSection1?type=" + types,
                                          { Name: data.name },
                                          function (datas) {
                                              $('#qujian_' + (i - 1) + '').val(datas);
                                          });
                        $.post("/Data/DataUnit?type=" + types,
                                        { Name: data.name },
                                        function (datas) {
                                            $('#unit_' + (i - 1) + '').val(datas);
                                        });
                    }

                    $('#project_' + i + '').result(log6).click(function () {
                        $(this).prev().search();
                    });


                    $('#res_' + i + '').keyup(function () {
                        var a = $('#res_' + (i - 1) + '').val();
                        var b = $('#project_' + (i - 1) + '').val();
                        if (a != "") {
                            if (b == "白细胞计数") {
                                if (a < 4.0) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 4.0 && a <= 10.0) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "中性粒细胞分类") {
                                if (a < 50) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 50 && a <= 70) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "淋巴细胞分类") {
                                if (a < 20) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 20 && a <= 40) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "单核细胞分类") {
                                if (a < 3) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 3 && a <= 8) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "嗜酸细胞分类") {
                                if (a < 0.5) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 0.5 && a <= 5) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "嗜碱细胞分类") {
                                if (a >= 0 && a <= 1) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "中性粒细胞计数") {
                                if (a < 2.0) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 2.0 && a <= 7.0) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "淋巴细胞计数") {
                                if (a < 0.8) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 0.8 && a <= 4.0) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "单核细胞计数") {
                                if (a < 0.12) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 0.12 && a <= 0.8) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "嗜酸细胞计数") {
                                if (a < 0.05) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 0.05 && a <= 0.5) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "嗜碱细胞计数") {
                                if (a >= 0 && a <= 1.0) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "红细胞计数") {
                                if (a < 3.5) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 3.5 && a <= 5.0) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "血红蛋白") {
                                if (a < 110) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 110 && a <= 150) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "红细胞压积") {
                                if (a < 0.37) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 0.37 && a <= 0.47) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "平均红细胞体积") {
                                if (a < 80) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 80 && a <= 100) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "平均血红蛋白量") {
                                if (a < 27.0) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 27.0 && a <= 31.0) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "平均血红蛋白浓度") {
                                if (a < 320) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 320 && a <= 360) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "红细胞分布宽度") {
                                if (a < 11.6) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 11.6 && a <= 14.6) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "血小板计数") {
                                if (a < 100) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 100 && a <= 300) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "平均血小板体积") {
                                if (a < 7.6) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 7.6 && a <= 13.2) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "血小板分布宽度") {
                                if (a < 14.8) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 14.8 && a <= 17.2) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "血小板压积") {
                                if (a < 0.1) {
                                    $('#tishi_' + (i - 1) + '').val("↓");
                                } else if (a >= 0.1 && a <= 0.2) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            } else if (b == "血沉") {
                                if (a >= 0 && a <= 15.0) {
                                    $('#tishi_' + (i - 1) + '').val("--");
                                } else {
                                    $('#tishi_' + (i - 1) + '').val("↑");
                                }
                            }

                        }
                    });
                }
            }
        })
    //=============================================================================================================================================
})
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
    } else if ($("#bgtime").val() == "") {
        alert("报告日期不能为空！")
    } else if ($("#sjtime").val() == "") {
        alert("检测日期不能为空！")
    }
    else {
        $.post("/MedicalHistory_TestReport_Blood/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
            $("#form1").serialize(),
            function (msgs) {
                var msg = msgs.split(',');
                alert(msg[0]);
                //window.location.href = 'View.aspx?id=' + msg[1];
                window.close();
            })
    }
}

//============================================================================动态增加一行=============================================================================
var i = 1;
function added1() {
    if ($("#project1").val() != "" && $("#project2").val() != "" && $("#project3").val() != "" && $("#project4").val() != "" && $("#project5").val() != "" && $('#project_' + (i - 1) + '').val() != "") {
        if (i < 20) {
            $("#tab1").append('<tr style="height:30px"><td class="auto-style184">' + (5 + i) + '</td><td class="auto-style185">' +
                                '<span class="ui-widget">' +
                                     '<input type="text" id="project_' + i + '" name="project_' + i + '" style="width: 180px;height: 20px;"/>' +
                                '</span>' +
                            '</td>' +
                            '<td style="background-color:#e2ebfb">' +
                                '<div id="d_' + i + '">' +
                                    '<input type="text" name="res_' + i + '" id="res_' + i + '" style="width:150px;height: 20px;"/>' +
                                '</div>' +
                            '</td>' +
                            '<td class="auto-style195">' +
                                '<input type="text" id="unit_' + i + '" name="unit_' + i + '" style="text-align:center;border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width: 60px;"" />' +
                            '</td>' +
                            '<td class="auto-style188">' +
                                '<input type="text" id="qujian_' + i + '" name="qujian_' + i + '"  style="text-align:center;overflow:hidden;border-style: none; border-color: inherit; background-color: #e2ebfb; border-width: 0px;width:220px"/>' +
                            '</td>' +
                            '</td>' +
                            '<td class="auto-style222">' +
                                '<input type="text" id="tishi_' + i + '" name="tishi_' + i + '" style="text-align:center;border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;width:40px" />' +
                            '</td>' +
                            '<td class="auto-style190">' +
                                '<input type="text" id="beizhu_' + i + '" name="beizhu_' + i + '" style="width: 205px; height: 20px" />' +
                            '</td>' +
                        '</tr>');
            //------------------------------------------------------------------------------增加事件-------------------------------------------------------------------------
            $('#project_' + i + '').autocomplete('/Data/DataNames1?type=' + types, {
                multiple: false,   //是否允许搜索框追加
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
                },
                formatItem: function (item) {
                    return item.name;
                },

            });

            function log6(event, data, formatted) {

                $.post("/Data/DataSection1?type=" + types,
                                  { Name: data.name },
                                  function (datas) {
                                      $('#qujian_' + (i - 1) + '').val(datas);
                                  });
                $.post("/Data/DataUnit?type=" + types,
                                { Name: data.name },
                                function (datas) {
                                    $('#unit_' + (i - 1) + '').val(datas);
                                });
            }

            $('#project_' + i + '').result(log6).click(function () {
                $(this).prev().search();
            });


            $('#res_' + i + '').keyup(function () {
                var a = $('#res_' + (i - 1) + '').val();
                var b = $('#project_' + (i - 1) + '').val();
                if (a != "") {
                    if (b == "白细胞计数") {
                        if (a < 4.0) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 4.0 && a <= 10.0) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "中性粒细胞分类") {
                        if (a < 50) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 50 && a <= 70) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "淋巴细胞分类") {
                        if (a < 20) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 20 && a <= 40) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "单核细胞分类") {
                        if (a < 3) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 3 && a <= 8) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "嗜酸细胞分类") {
                        if (a < 0.5) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 0.5 && a <= 5) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "嗜碱细胞分类") {
                        if (a >= 0 && a <= 1) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "中性粒细胞计数") {
                        if (a < 2.0) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 2.0 && a <= 7.0) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "淋巴细胞计数") {
                        if (a < 0.8) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 0.8 && a <= 4.0) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "单核细胞计数") {
                        if (a < 0.12) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 0.12 && a <= 0.8) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "嗜酸细胞计数") {
                        if (a < 0.05) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 0.05 && a <= 0.5) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "嗜碱细胞计数") {
                        if (a >= 0 && a <= 1.0) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "红细胞计数") {
                        if (a < 3.5) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 3.5 && a <= 5.0) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "血红蛋白") {
                        if (a < 110) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 110 && a <= 150) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "红细胞压积") {
                        if (a < 0.37) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 0.37 && a <= 0.47) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "平均红细胞体积") {
                        if (a < 80) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 80 && a <= 100) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "平均血红蛋白量") {
                        if (a < 27.0) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 27.0 && a <= 31.0) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "平均血红蛋白浓度") {
                        if (a < 320) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 320 && a <= 360) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "红细胞分布宽度") {
                        if (a < 11.6) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 11.6 && a <= 14.6) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "血小板计数") {
                        if (a < 100) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 100 && a <= 300) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "平均血小板体积") {
                        if (a < 7.6) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 7.6 && a <= 13.2) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "血小板分布宽度") {
                        if (a < 14.8) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 14.8 && a <= 17.2) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "血小板压积") {
                        if (a < 0.1) {
                            $('#tishi_' + (i - 1) + '').val("↓");
                        } else if (a >= 0.1 && a <= 0.2) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    } else if (b == "血沉") {
                        if (a >= 0 && a <= 15.0) {
                            $('#tishi_' + (i - 1) + '').val("--");
                        } else {
                            $('#tishi_' + (i - 1) + '').val("↑");
                        }
                    }

                }
            });
        }
        i++;
    } else {
        alert("请填写上一行内容！");
    }
}

