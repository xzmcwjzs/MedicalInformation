$(function () {


    //通气--------------------------------------------
    //1==================================
    $("#ts1").change(function () {
        $("#tresult1").empty();
        $("#ttishi1").empty();
        var s1 = $("#sex").val();
        if (s1 == "男") {
            s1 = "01";
        } else {
            s1 = "02";
        }
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1?sex=" + s1,
                     { Name: $('#ts1').val() },
                     function (data) {
                         $("#tqujian1").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#ts1').val() },
                      function (data) {
                          $("#tunit1").val(data);
                      });
        $("#tresult1").keyup(function () {
            if ($("#ts1").val() == "潮气容积") {
                var a1 = document.getElementById("tresult1").value;
                if (a1 < 500) {
                    document.getElementById("ttishi1").value = "↓";
                } else if (a1 == 500) {
                    document.getElementById("ttishi1").value = "--";
                } else {
                    document.getElementById("ttishi1").value = "↑";
                }
            } else if ($("#ts1").val() == "补呼气容积") {
                var a1 = document.getElementById("tresult1").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 1117) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 2109) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                } else {
                    if (a1 < 788) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 1464) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                }
            } else if ($("#ts1").val() == "补吸气容积") {
                var a1 = document.getElementById("tresult1").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 2160) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 2160) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                } else {
                    if (a1 < 1400) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 1400) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                }
            } else if ($("#ts1").val() == "深吸气量") {
                var a1 = document.getElementById("tresult1").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 2069) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 3165) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                } else {
                    if (a1 < 1589) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 2351) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                }
            } else if ($("#ts1").val() == "肺活量") {
                var a1 = document.getElementById("tresult1").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 3527) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 4907) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                } else {
                    if (a1 < 2653) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 3557) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                }
            } else if ($("#ts1").val() == "功能残气量") {
                var a1 = document.getElementById("tresult1").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 2501) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 3723) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                } else {
                    if (a1 < 1869) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 2827) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                }
            } else if ($("#ts1").val() == "残气量") {
                var a1 = document.getElementById("tresult1").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 1218) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 2012) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                } else {
                    if (a1 < 909) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 1581) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                }
            } else if ($("#ts1").val() == "肺总量") {
                var a1 = document.getElementById("tresult1").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 5020) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 5020) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                } else {
                    if (a1 < 3460) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 3460) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                }
            } else if ($("#ts1").val() == "每分钟静息通气量") {
                var a1 = document.getElementById("tresult1").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 6463) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 6863) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                } else {
                    if (a1 < 4057) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 4377) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                }
            } else if ($("#ts1").val() == "最大自主通气量") {
                var a1 = document.getElementById("tresult1").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 101.29) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 106.71) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                } else {
                    if (a1 < 80.33) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 84.67) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                }
            } else if ($("#ts1").val() == "用力肺活量") {
                var a1 = document.getElementById("tresult1").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 3062) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 3296) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                } else {
                    if (a1 < 2266) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 2362) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                }
            } else if ($("#ts1").val() == "最大呼气中断流量") {
                var a1 = document.getElementById("tresult1").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 2292) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 4612) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                } else {
                    if (a1 < 1890) {
                        document.getElementById("ttishi1").value = "↓";
                    } else if (a1 > 3782) {
                        document.getElementById("ttishi1").value = "↑";
                    } else {
                        document.getElementById("ttishi1").value = "--";
                    }
                }
            } else if ($("#ts1").val() == "肺泡通气量") {
                var a1 = document.getElementById("tresult1").value;
                if (a1 < 5.25) {
                    document.getElementById("ttishi1").value = "↓";
                } else if (a1 > 5.25) {
                    document.getElementById("ttishi1").value = "↑";
                } else {
                    document.getElementById("ttishi1").value = "--";
                }
            }
        })
    });
    //2----------------------------------------------------------------------
    $("#ts2").change(function () {
        $("#tresult2").empty();
        $("#ttishi2").empty();
        var s2 = $("#sex").val();
        if (s2 == "男") {
            s2 = "01";
        } else {
            s2 = "02";
        }
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1?sex=" + s2,
                     { Name: $('#ts2').val() },
                     function (data) {
                         $("#tqujian2").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#ts2').val() },
                      function (data) {
                          $("#tunit2").val(data);
                      });
        $("#tresult2").keyup(function () {
            if ($("#ts2").val() == "潮气容积") {
                var a2 = document.getElementById("tresult2").value;
                if (a2 < 500) {
                    document.getElementById("ttishi2").value = "↓";
                } else if (a2 == 500) {
                    document.getElementById("ttishi2").value = "--";
                } else {
                    document.getElementById("ttishi2").value = "↑";
                }
            } else if ($("#ts2").val() == "补呼气容积") {
                var a2 = document.getElementById("tresult2").value;
                if ($("#sex").val() == "男") {
                    if (a2 < 1117) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 2109) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                } else {
                    if (a2 < 788) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 1464) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                }
            } else if ($("#ts2").val() == "补吸气容积") {
                var a2 = document.getElementById("tresult2").value;
                if ($("#sex").val() == "男") {
                    if (a2 < 2160) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 2160) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                } else {
                    if (a2 < 1400) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 1400) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                }
            } else if ($("#ts2").val() == "深吸气量") {
                var a2 = document.getElementById("tresult2").value;
                if ($("#sex").val() == "男") {
                    if (a2 < 2069) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 3165) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                } else {
                    if (a2 < 1589) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 2351) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                }
            } else if ($("#ts2").val() == "肺活量") {
                var a2 = document.getElementById("tresult2").value;
                if ($("#sex").val() == "男") {
                    if (a2 < 3527) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 4907) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                } else {
                    if (a2 < 2653) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 3557) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                }
            } else if ($("#ts2").val() == "功能残气量") {
                var a2 = document.getElementById("tresult2").value;
                if ($("#sex").val() == "男") {
                    if (a2 < 2501) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 3723) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                } else {
                    if (a2 < 1869) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 2827) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                }
            } else if ($("#ts2").val() == "残气量") {
                var a2 = document.getElementById("tresult2").value;
                if ($("#sex").val() == "男") {
                    if (a2 < 1218) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 2012) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                } else {
                    if (a2 < 909) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 1581) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                }
            } else if ($("#ts2").val() == "肺总量") {
                var a2 = document.getElementById("tresult2").value;
                if ($("#sex").val() == "男") {
                    if (a2 < 5020) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 5020) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                } else {
                    if (a2 < 3460) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 3460) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                }
            } else if ($("#ts2").val() == "每分钟静息通气量") {
                var a2 = document.getElementById("tresult2").value;
                if ($("#sex").val() == "男") {
                    if (a2 < 6463) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 6863) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                } else {
                    if (a2 < 4057) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 4377) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                }
            } else if ($("#ts2").val() == "最大自主通气量") {
                var a2 = document.getElementById("tresult2").value;
                if ($("#sex").val() == "男") {
                    if (a2 < 101.29) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 106.71) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                } else {
                    if (a2 < 80.33) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 84.67) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                }
            } else if ($("#ts2").val() == "用力肺活量") {
                var a2 = document.getElementById("tresult2").value;
                if ($("#sex").val() == "男") {
                    if (a2 < 3062) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 3296) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                } else {
                    if (a2 < 2266) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 2362) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                }
            } else if ($("#ts2").val() == "最大呼气中断流量") {
                var a2 = document.getElementById("tresult2").value;
                if ($("#sex").val() == "男") {
                    if (a2 < 2292) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 4612) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                } else {
                    if (a2 < 1890) {
                        document.getElementById("ttishi2").value = "↓";
                    } else if (a2 > 3782) {
                        document.getElementById("ttishi2").value = "↑";
                    } else {
                        document.getElementById("ttishi2").value = "--";
                    }
                }
            } else if ($("#ts2").val() == "肺泡通气量") {
                var a2 = document.getElementById("tresult2").value;
                if (a2 < 5.25) {
                    document.getElementById("ttishi2").value = "↓";
                } else if (a2 > 5.25) {
                    document.getElementById("ttishi2").value = "↑";
                } else {
                    document.getElementById("ttishi2").value = "--";
                }
            }
        })
    });
    //3----------------------------------------------------------------------
    $("#ts3").change(function () {
        $("#tresult3").empty();
        $("#ttishi3").empty();
        var s3 = $("#sex").val();
        if (s3 == "男") {
            s3 = "01";
        } else {
            s3 = "02";
        }
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1?sex=" + s3,
                     { Name: $('#ts3').val() },
                     function (data) {
                         $("#tqujian3").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#ts3').val() },
                      function (data) {
                          $("#tunit3").val(data);
                      });
        $("#tresult3").keyup(function () {
            if ($("#ts3").val() == "潮气容积") {
                var a3 = document.getElementById("tresult3").value;
                if (a3 < 500) {
                    document.getElementById("ttishi3").value = "↓";
                } else if (a3 == 500) {
                    document.getElementById("ttishi3").value = "--";
                } else {
                    document.getElementById("ttishi3").value = "↑";
                }
            } else if ($("#ts3").val() == "补呼气容积") {
                var a3 = document.getElementById("tresult3").value;
                if ($("#sex").val() == "男") {
                    if (a3 < 1117) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 2109) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                } else {
                    if (a3 < 788) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 1464) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                }
            } else if ($("#ts3").val() == "补吸气容积") {
                var a3 = document.getElementById("tresult3").value;
                if ($("#sex").val() == "男") {
                    if (a3 < 2160) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 2160) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                } else {
                    if (a3 < 1400) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 1400) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                }
            } else if ($("#ts3").val() == "深吸气量") {
                var a3 = document.getElementById("tresult3").value;
                if ($("#sex").val() == "男") {
                    if (a3 < 2069) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 3165) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                } else {
                    if (a3 < 1589) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 2351) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                }
            } else if ($("#ts3").val() == "肺活量") {
                var a3 = document.getElementById("tresult3").value;
                if ($("#sex").val() == "男") {
                    if (a3 < 3527) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 4907) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                } else {
                    if (a3 < 2653) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 3557) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                }
            } else if ($("#ts3").val() == "功能残气量") {
                var a3 = document.getElementById("tresult3").value;
                if ($("#sex").val() == "男") {
                    if (a3 < 2501) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 3723) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                } else {
                    if (a3 < 1869) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 2827) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                }
            } else if ($("#ts3").val() == "残气量") {
                var a3 = document.getElementById("tresult3").value;
                if ($("#sex").val() == "男") {
                    if (a3 < 1218) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 2012) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                } else {
                    if (a3 < 909) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 1581) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                }
            } else if ($("#ts3").val() == "肺总量") {
                var a3 = document.getElementById("tresult3").value;
                if ($("#sex").val() == "男") {
                    if (a3 < 5020) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 5020) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                } else {
                    if (a3 < 3460) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 3460) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                }
            } else if ($("#ts3").val() == "每分钟静息通气量") {
                var a3 = document.getElementById("tresult3").value;
                if ($("#sex").val() == "男") {
                    if (a3 < 6463) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 6863) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                } else {
                    if (a3 < 4057) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 4377) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                }
            } else if ($("#ts3").val() == "最大自主通气量") {
                var a3 = document.getElementById("tresult3").value;
                if ($("#sex").val() == "男") {
                    if (a3 < 101.29) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 106.71) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                } else {
                    if (a3 < 80.33) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 84.67) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                }
            } else if ($("#ts3").val() == "用力肺活量") {
                var a3 = document.getElementById("tresult3").value;
                if ($("#sex").val() == "男") {
                    if (a3 < 3062) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 3296) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                } else {
                    if (a3 < 2266) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 2362) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                }
            } else if ($("#ts3").val() == "最大呼气中断流量") {
                var a3 = document.getElementById("tresult3").value;
                if ($("#sex").val() == "男") {
                    if (a3 < 2292) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 4612) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                } else {
                    if (a3 < 1890) {
                        document.getElementById("ttishi3").value = "↓";
                    } else if (a3 > 3782) {
                        document.getElementById("ttishi3").value = "↑";
                    } else {
                        document.getElementById("ttishi3").value = "--";
                    }
                }
            } else if ($("#ts3").val() == "肺泡通气量") {
                var a3 = document.getElementById("tresult3").value;
                if (a3 < 5.25) {
                    document.getElementById("ttishi3").value = "↓";
                } else if (a3 > 5.25) {
                    document.getElementById("ttishi3").value = "↑";
                } else {
                    document.getElementById("ttishi3").value = "--";
                }
            }
        })
    });
    //4----------------------------------------------------------------------
    $("#ts4").change(function () {
        $("#tresult4").empty();
        $("#ttishi4").empty();
        var s4 = $("#sex").val();
        if (s4 == "男") {
            s4 = "01";
        } else {
            s4 = "02";
        }
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1?sex=" + s4,
                     { Name: $('#ts4').val() },
                     function (data) {
                         $("#tqujian4").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#ts4').val() },
                      function (data) {
                          $("#tunit4").val(data);
                      });
        $("#tresult4").keyup(function () {
            if ($("#ts4").val() == "潮气容积") {
                var a4 = document.getElementById("tresult4").value;
                if (a4 < 500) {
                    document.getElementById("ttishi4").value = "↓";
                } else if (a4 == 500) {
                    document.getElementById("ttishi4").value = "--";
                } else {
                    document.getElementById("ttishi4").value = "↑";
                }
            } else if ($("#ts4").val() == "补呼气容积") {
                var a4 = document.getElementById("tresult4").value;
                if ($("#sex").val() == "男") {
                    if (a4 < 1117) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 2109) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                } else {
                    if (a4 < 788) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 1464) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                }
            } else if ($("#ts4").val() == "补吸气容积") {
                var a4 = document.getElementById("tresult4").value;
                if ($("#sex").val() == "男") {
                    if (a4 < 2160) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 2160) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                } else {
                    if (a4 < 1400) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 1400) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                }
            } else if ($("#ts4").val() == "深吸气量") {
                var a4 = document.getElementById("tresult4").value;
                if ($("#sex").val() == "男") {
                    if (a4 < 2069) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 3165) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                } else {
                    if (a4 < 1589) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 2351) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                }
            } else if ($("#ts4").val() == "肺活量") {
                var a4 = document.getElementById("tresult4").value;
                if ($("#sex").val() == "男") {
                    if (a4 < 3527) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 4907) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                } else {
                    if (a4 < 2653) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 3557) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                }
            } else if ($("#ts4").val() == "功能残气量") {
                var a4 = document.getElementById("tresult4").value;
                if ($("#sex").val() == "男") {
                    if (a4 < 2501) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 3723) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                } else {
                    if (a4 < 1869) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 2827) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                }
            } else if ($("#ts4").val() == "残气量") {
                var a4 = document.getElementById("tresult4").value;
                if ($("#sex").val() == "男") {
                    if (a4 < 1218) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 2012) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                } else {
                    if (a4 < 909) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 1581) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                }
            } else if ($("#ts4").val() == "肺总量") {
                var a4 = document.getElementById("tresult4").value;
                if ($("#sex").val() == "男") {
                    if (a4 < 5020) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 5020) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                } else {
                    if (a4 < 3460) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 3460) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                }
            } else if ($("#ts4").val() == "每分钟静息通气量") {
                var a4 = document.getElementById("tresult4").value;
                if ($("#sex").val() == "男") {
                    if (a4 < 6463) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 6863) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                } else {
                    if (a4 < 4057) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 4377) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                }
            } else if ($("#ts4").val() == "最大自主通气量") {
                var a4 = document.getElementById("tresult4").value;
                if ($("#sex").val() == "男") {
                    if (a4 < 101.29) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 106.71) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                } else {
                    if (a4 < 80.33) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 84.67) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                }
            } else if ($("#ts4").val() == "用力肺活量") {
                var a4 = document.getElementById("tresult4").value;
                if ($("#sex").val() == "男") {
                    if (a4 < 3062) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 3296) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                } else {
                    if (a4 < 2266) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 2362) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                }
            } else if ($("#ts4").val() == "最大呼气中断流量") {
                var a4 = document.getElementById("tresult4").value;
                if ($("#sex").val() == "男") {
                    if (a4 < 2292) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 4612) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                } else {
                    if (a4 < 1890) {
                        document.getElementById("ttishi4").value = "↓";
                    } else if (a4 > 3782) {
                        document.getElementById("ttishi4").value = "↑";
                    } else {
                        document.getElementById("ttishi4").value = "--";
                    }
                }
            } else if ($("#ts4").val() == "肺泡通气量") {
                var a4 = document.getElementById("tresult4").value;
                if (a4 < 5.25) {
                    document.getElementById("ttishi4").value = "↓";
                } else if (a4 > 5.25) {
                    document.getElementById("ttishi4").value = "↑";
                } else {
                    document.getElementById("ttishi4").value = "--";
                }
            }
        })
    });
    //5----------------------------------------------------------------------
    $("#ts5").change(function () {
        $("#tresult5").empty();
        $("#ttishi5").empty();
        var s5 = $("#sex").val();
        if (s5 == "男") {
            s5 = "01";
        } else {
            s5 = "02";
        }
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1?sex=" + s5,
                     { Name: $('#ts5').val() },
                     function (data) {
                         $("#tqujian5").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#ts5').val() },
                      function (data) {
                          $("#tunit5").val(data);
                      });
        $("#tresult5").keyup(function () {
            if ($("#ts5").val() == "潮气容积") {
                var a5 = document.getElementById("tresult5").value;
                if (a5 < 500) {
                    document.getElementById("ttishi5").value = "↓";
                } else if (a5 == 500) {
                    document.getElementById("ttishi5").value = "--";
                } else {
                    document.getElementById("ttishi5").value = "↑";
                }
            } else if ($("#ts5").val() == "补呼气容积") {
                var a5 = document.getElementById("tresult5").value;
                if ($("#sex").val() == "男") {
                    if (a5 < 1117) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 2109) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                } else {
                    if (a5 < 788) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 1464) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                }
            } else if ($("#ts5").val() == "补吸气容积") {
                var a5 = document.getElementById("tresult5").value;
                if ($("#sex").val() == "男") {
                    if (a5 < 2160) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 2160) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                } else {
                    if (a5 < 1400) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 1400) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                }
            } else if ($("#ts5").val() == "深吸气量") {
                var a5 = document.getElementById("tresult5").value;
                if ($("#sex").val() == "男") {
                    if (a5 < 2069) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 3165) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                } else {
                    if (a5 < 1589) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 2351) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                }
            } else if ($("#ts5").val() == "肺活量") {
                var a5 = document.getElementById("tresult5").value;
                if ($("#sex").val() == "男") {
                    if (a5 < 3527) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 4907) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                } else {
                    if (a5 < 2653) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 3557) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                }
            } else if ($("#ts5").val() == "功能残气量") {
                var a5 = document.getElementById("tresult5").value;
                if ($("#sex").val() == "男") {
                    if (a5 < 2501) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 3723) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                } else {
                    if (a5 < 1869) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 2827) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                }
            } else if ($("#ts5").val() == "残气量") {
                var a5 = document.getElementById("tresult5").value;
                if ($("#sex").val() == "男") {
                    if (a5 < 1218) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 2012) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                } else {
                    if (a5 < 909) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 1581) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                }
            } else if ($("#ts5").val() == "肺总量") {
                var a5 = document.getElementById("tresult5").value;
                if ($("#sex").val() == "男") {
                    if (a5 < 5020) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 5020) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                } else {
                    if (a5 < 3460) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 3460) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                }
            } else if ($("#ts5").val() == "每分钟静息通气量") {
                var a5 = document.getElementById("tresult5").value;
                if ($("#sex").val() == "男") {
                    if (a5 < 6463) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 6863) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                } else {
                    if (a5 < 4057) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 4377) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                }
            } else if ($("#ts5").val() == "最大自主通气量") {
                var a5 = document.getElementById("tresult5").value;
                if ($("#sex").val() == "男") {
                    if (a5 < 101.29) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 106.71) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                } else {
                    if (a5 < 80.33) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 84.67) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                }
            } else if ($("#ts5").val() == "用力肺活量") {
                var a5 = document.getElementById("tresult5").value;
                if ($("#sex").val() == "男") {
                    if (a5 < 3062) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 3296) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                } else {
                    if (a5 < 2266) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 2362) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                }
            } else if ($("#ts5").val() == "最大呼气中断流量") {
                var a5 = document.getElementById("tresult5").value;
                if ($("#sex").val() == "男") {
                    if (a5 < 2292) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 4612) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                } else {
                    if (a5 < 1890) {
                        document.getElementById("ttishi5").value = "↓";
                    } else if (a5 > 3782) {
                        document.getElementById("ttishi5").value = "↑";
                    } else {
                        document.getElementById("ttishi5").value = "--";
                    }
                }
            } else if ($("#ts5").val() == "肺泡通气量") {
                var a5 = document.getElementById("tresult5").value;
                if (a5 < 5.25) {
                    document.getElementById("ttishi5").value = "↓";
                } else if (a5 > 5.25) {
                    document.getElementById("ttishi5").value = "↑";
                } else {
                    document.getElementById("ttishi5").value = "--";
                }
            }
        })
    });
    //换气------------------------------------------------------------------------------------

    //1-------------
    $("#hs1").change(function () {
        $("#hresult1").empty();
        $("#htishi1").empty();
        var s1 = $("#sex").val();
        if (s1 == "男") {
            s1 = "01";
        } else {
            s1 = "02";
        }
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1?sex=" + s1,
                     { Name: $('#hs1').val() },
                     function (data) {
                         $("#hqujian1").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#hs1').val() },
                      function (data) {
                          $("#hunit1").val(data);
                      });
        $("#hresult1").keyup(function () {
            if ($("#hs1").val() == "气体分布（单次呼吸法）") {
                var a1 = document.getElementById("hresult1").value;
                if (a1 < 1.5) {
                    document.getElementById("htishi1").value = "--";
                } else {
                    document.getElementById("htishi1").value = "↑";
                }
            } else if ($("#hs1").val() == "气体分布（重复呼吸法）") {
                var a1 = document.getElementById("hresult1").value;
                if (a1 >= 2.5) {
                    document.getElementById("htishi1").value = "↑";
                } else {
                    document.getElementById("htishi1").value = "--";
                }
            } else if ($("#hs1").val() == "通气/血流比值") {
                var a1 = document.getElementById("hresult1").value;
                if (a1 < 0.8) {
                    document.getElementById("htishi1").value = "↓";
                } else if (a1 > 0.8) {
                    document.getElementById("htishi1").value = "↑";
                } else {
                    document.getElementById("htishi1").value = "--";
                }
            } else if ($("#hs1").val() == "肺泡弥散功能（单次呼吸法）(ml/(mmHg·min))") {
                var a1 = document.getElementById("hresult1").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 18.23) {
                        document.getElementById("htishi1").value = "↓";
                    } else if (a1 > 38.41) {
                        document.getElementById("htishi1").value = "↑";
                    } else {
                        document.getElementById("htishi1").value = "--";
                    }
                } else {
                    if (a1 < 20.85) {
                        document.getElementById("htishi1").value = "↓";
                    } else if (a1 > 23.9) {
                        document.getElementById("htishi1").value = "↑";
                    } else {
                        document.getElementById("htishi1").value = "--";
                    }
                }
            } else if ($("#hs1").val() == "肺泡弥散功能（重复呼吸法）(ml/(kPa·min))") {
                var a1 = document.getElementById("hresult1").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 187.52) {
                        document.getElementById("htishi1").value = "↓";
                    } else if (a1 > 188.8) {
                        document.getElementById("htishi1").value = "↑";
                    } else {
                        document.getElementById("htishi1").value = "--";
                    }
                } else {
                    if (a1 < 156.77) {
                        document.getElementById("htishi1").value = "↓";
                    } else if (a1 > 179.7) {
                        document.getElementById("htishi1").value = "↑";
                    } else {
                        document.getElementById("htishi1").value = "--";
                    }
                }
            }
        })
    });
    //2-------------
    $("#hs2").change(function () {
        $("#hresult2").empty();
        $("#htishi2").empty();
        var s1 = $("#sex").val();
        if (s1 == "男") {
            s1 = "01";
        } else {
            s1 = "02";
        }
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1?sex=" + s1,
                     { Name: $('#hs2').val() },
                     function (data) {
                         $("#hqujian2").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#hs2').val() },
                      function (data) {
                          $("#hunit2").val(data);
                      });
        $("#hresult2").keyup(function () {
            if ($("#hs2").val() == "气体分布（单次呼吸法）") {
                var a1 = document.getElementById("hresult2").value;
                if (a1 < 1.5) {
                    document.getElementById("htishi2").value = "--";
                } else {
                    document.getElementById("htishi2").value = "↑";
                }
            } else if ($("#hs2").val() == "气体分布（重复呼吸法）") {
                var a1 = document.getElementById("hresult2").value;
                if (a1 >= 2.5) {
                    document.getElementById("htishi2").value = "↑";
                } else {
                    document.getElementById("htishi2").value = "--";
                }
            } else if ($("#hs2").val() == "通气/血流比值") {
                var a1 = document.getElementById("hresult2").value;
                if (a1 < 0.8) {
                    document.getElementById("htishi2").value = "↓";
                } else if (a1 > 0.8) {
                    document.getElementById("htishi2").value = "↑";
                } else {
                    document.getElementById("htishi2").value = "--";
                }
            } else if ($("#hs2").val() == "肺泡弥散功能（单次呼吸法）(ml/(mmHg·min))") {
                var a1 = document.getElementById("hresult2").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 18.23) {
                        document.getElementById("htishi2").value = "↓";
                    } else if (a1 > 38.41) {
                        document.getElementById("htishi2").value = "↑";
                    } else {
                        document.getElementById("htishi2").value = "--";
                    }
                } else {
                    if (a1 < 20.85) {
                        document.getElementById("htishi2").value = "↓";
                    } else if (a1 > 23.9) {
                        document.getElementById("htishi2").value = "↑";
                    } else {
                        document.getElementById("htishi2").value = "--";
                    }
                }
            } else if ($("#hs2").val() == "肺泡弥散功能（重复呼吸法）(ml/(kPa·min))") {
                var a1 = document.getElementById("hresult2").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 187.52) {
                        document.getElementById("htishi2").value = "↓";
                    } else if (a1 > 188.8) {
                        document.getElementById("htishi2").value = "↑";
                    } else {
                        document.getElementById("htishi2").value = "--";
                    }
                } else {
                    if (a1 < 156.77) {
                        document.getElementById("htishi2").value = "↓";
                    } else if (a1 > 179.7) {
                        document.getElementById("htishi2").value = "↑";
                    } else {
                        document.getElementById("htishi2").value = "--";
                    }
                }
            }
        })
    });
    //3-------------
    $("#hs3").change(function () {
        $("#hresult3").empty();
        $("#htishi3").empty();
        var s1 = $("#sex").val();
        if (s1 == "男") {
            s1 = "01";
        } else {
            s1 = "02";
        }
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1?sex=" + s1,
                     { Name: $('#hs3').val() },
                     function (data) {
                         $("#hqujian3").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#hs3').val() },
                      function (data) {
                          $("#hunit3").val(data);
                      });
        $("#hresult3").keyup(function () {
            if ($("#hs3").val() == "气体分布（单次呼吸法）") {
                var a1 = document.getElementById("hresult3").value;
                if (a1 < 1.5) {
                    document.getElementById("htishi3").value = "--";
                } else {
                    document.getElementById("htishi3").value = "↑";
                }
            } else if ($("#hs3").val() == "气体分布（重复呼吸法）") {
                var a1 = document.getElementById("hresult3").value;
                if (a1 >= 2.5) {
                    document.getElementById("htishi3").value = "↑";
                } else {
                    document.getElementById("htishi3").value = "--";
                }
            } else if ($("#hs3").val() == "通气/血流比值") {
                var a1 = document.getElementById("hresult3").value;
                if (a1 < 0.8) {
                    document.getElementById("htishi3").value = "↓";
                } else if (a1 > 0.8) {
                    document.getElementById("htishi3").value = "↑";
                } else {
                    document.getElementById("htishi3").value = "--";
                }
            } else if ($("#hs3").val() == "肺泡弥散功能（单次呼吸法）(ml/(mmHg·min))") {
                var a1 = document.getElementById("hresult3").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 18.23) {
                        document.getElementById("htishi3").value = "↓";
                    } else if (a1 > 38.41) {
                        document.getElementById("htishi3").value = "↑";
                    } else {
                        document.getElementById("htishi3").value = "--";
                    }
                } else {
                    if (a1 < 20.85) {
                        document.getElementById("htishi3").value = "↓";
                    } else if (a1 > 23.9) {
                        document.getElementById("htishi3").value = "↑";
                    } else {
                        document.getElementById("htishi3").value = "--";
                    }
                }
            } else if ($("#hs3").val() == "肺泡弥散功能（重复呼吸法）(ml/(kPa·min))") {
                var a1 = document.getElementById("hresult3").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 187.52) {
                        document.getElementById("htishi3").value = "↓";
                    } else if (a1 > 188.8) {
                        document.getElementById("htishi3").value = "↑";
                    } else {
                        document.getElementById("htishi3").value = "--";
                    }
                } else {
                    if (a1 < 156.77) {
                        document.getElementById("htishi3").value = "↓";
                    } else if (a1 > 179.7) {
                        document.getElementById("htishi3").value = "↑";
                    } else {
                        document.getElementById("htishi3").value = "--";
                    }
                }
            }
        })
    });

    //4-------------
    $("#hs4").change(function () {
        $("#hresult4").empty();
        $("#htishi4").empty();
        var s1 = $("#sex").val();
        if (s1 == "男") {
            s1 = "01";
        } else {
            s1 = "02";
        }
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1?sex=" + s1,
                     { Name: $('#hs4').val() },
                     function (data) {
                         $("#hqujian4").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#hs4').val() },
                      function (data) {
                          $("#hunit4").val(data);
                      });
        $("#hresult4").keyup(function () {
            if ($("#hs4").val() == "气体分布（单次呼吸法）") {
                var a1 = document.getElementById("hresult4").value;
                if (a1 < 1.5) {
                    document.getElementById("htishi4").value = "--";
                } else {
                    document.getElementById("htishi4").value = "↑";
                }
            } else if ($("#hs4").val() == "气体分布（重复呼吸法）") {
                var a1 = document.getElementById("hresult4").value;
                if (a1 >= 2.5) {
                    document.getElementById("htishi4").value = "↑";
                } else {
                    document.getElementById("htishi4").value = "--";
                }
            } else if ($("#hs4").val() == "通气/血流比值") {
                var a1 = document.getElementById("hresult4").value;
                if (a1 < 0.8) {
                    document.getElementById("htishi4").value = "↓";
                } else if (a1 > 0.8) {
                    document.getElementById("htishi4").value = "↑";
                } else {
                    document.getElementById("htishi4").value = "--";
                }
            } else if ($("#hs4").val() == "肺泡弥散功能（单次呼吸法）(ml/(mmHg·min))") {
                var a1 = document.getElementById("hresult4").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 18.23) {
                        document.getElementById("htishi4").value = "↓";
                    } else if (a1 > 38.41) {
                        document.getElementById("htishi4").value = "↑";
                    } else {
                        document.getElementById("htishi4").value = "--";
                    }
                } else {
                    if (a1 < 20.85) {
                        document.getElementById("htishi4").value = "↓";
                    } else if (a1 > 23.9) {
                        document.getElementById("htishi4").value = "↑";
                    } else {
                        document.getElementById("htishi4").value = "--";
                    }
                }
            } else if ($("#hs4").val() == "肺泡弥散功能（重复呼吸法）(ml/(kPa·min))") {
                var a1 = document.getElementById("hresult4").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 187.52) {
                        document.getElementById("htishi4").value = "↓";
                    } else if (a1 > 188.8) {
                        document.getElementById("htishi4").value = "↑";
                    } else {
                        document.getElementById("htishi4").value = "--";
                    }
                } else {
                    if (a1 < 156.77) {
                        document.getElementById("htishi4").value = "↓";
                    } else if (a1 > 179.7) {
                        document.getElementById("htishi4").value = "↑";
                    } else {
                        document.getElementById("htishi4").value = "--";
                    }
                }
            }
        })
    });

    //5-------------
    $("#hs5").change(function () {
        $("#hresult5").empty();
        $("#htishi5").empty();
        var s1 = $("#sex").val();
        if (s1 == "男") {
            s1 = "01";
        } else {
            s1 = "02";
        }
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1?sex=" + s1,
                     { Name: $('#hs5').val() },
                     function (data) {
                         $("#hqujian5").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#hs5').val() },
                      function (data) {
                          $("#hunit5").val(data);
                      });
        $("#hresult5").keyup(function () {
            if ($("#hs5").val() == "气体分布（单次呼吸法）") {
                var a1 = document.getElementById("hresult5").value;
                if (a1 < 1.5) {
                    document.getElementById("htishi5").value = "--";
                } else {
                    document.getElementById("htishi5").value = "↑";
                }
            } else if ($("#hs5").val() == "气体分布（重复呼吸法）") {
                var a1 = document.getElementById("hresult5").value;
                if (a1 >= 2.5) {
                    document.getElementById("htishi5").value = "↑";
                } else {
                    document.getElementById("htishi5").value = "--";
                }
            } else if ($("#hs5").val() == "通气/血流比值") {
                var a1 = document.getElementById("hresult5").value;
                if (a1 < 0.8) {
                    document.getElementById("htishi5").value = "↓";
                } else if (a1 > 0.8) {
                    document.getElementById("htishi5").value = "↑";
                } else {
                    document.getElementById("htishi5").value = "--";
                }
            } else if ($("#hs5").val() == "肺泡弥散功能（单次呼吸法）(ml/(mmHg·min))") {
                var a1 = document.getElementById("hresult5").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 18.23) {
                        document.getElementById("htishi5").value = "↓";
                    } else if (a1 > 38.41) {
                        document.getElementById("htishi5").value = "↑";
                    } else {
                        document.getElementById("htishi5").value = "--";
                    }
                } else {
                    if (a1 < 20.85) {
                        document.getElementById("htishi5").value = "↓";
                    } else if (a1 > 23.9) {
                        document.getElementById("htishi5").value = "↑";
                    } else {
                        document.getElementById("htishi5").value = "--";
                    }
                }
            } else if ($("#hs5").val() == "肺泡弥散功能（重复呼吸法）(ml/(kPa·min))") {
                var a1 = document.getElementById("hresult5").value;
                if ($("#sex").val() == "男") {
                    if (a1 < 187.52) {
                        document.getElementById("htishi5").value = "↓";
                    } else if (a1 > 188.8) {
                        document.getElementById("htishi5").value = "↑";
                    } else {
                        document.getElementById("htishi5").value = "--";
                    }
                } else {
                    if (a1 < 156.77) {
                        document.getElementById("htishi5").value = "↓";
                    } else if (a1 > 179.7) {
                        document.getElementById("htishi5").value = "↑";
                    } else {
                        document.getElementById("htishi5").value = "--";
                    }
                }
            }
        })
    });
    //小气道---------------------------------------------------------------
    //1-------------------------------------
    $("#xq1").change(function () {
        if ($("#xq1").val() == "频率依赖性肺顺应性") {
            $("#xqresult1").empty();
            $("#htishi1").empty();

            $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1",
                         { Name: $('#xq1').val() },
                         function (data) {
                             $("#xqqujian1").val(data);
                         });
            $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                          { Name: $('#xq1').val() },
                          function (data) {
                              $("#xqunit1").val(data);
                          });
        }
    });
    $("#xqresult11").keyup(function () {

        var a1 = document.getElementById("xqresult1").value;
        var a11 = document.getElementById("xqresult11").value;
        if (a1 == 2.0 && a11 > 1.5 && a11 < 3.5) {
            document.getElementById("xqtishi1").value = "正常";
        } else {
            document.getElementById("xqtishi1").value = "异常";
        }

    })

    //2-------------------------------------
    $("#xq2").change(function () {
        if ($("#xq2").val() == "频率依赖性肺顺应性") {
            $("#xqresult2").empty();
            $("#htishi2").empty();

            $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1",
                         { Name: $('#xq2').val() },
                         function (data) {
                             $("#xqqujian2").val(data);
                         });
            $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                          { Name: $('#xq2').val() },
                          function (data) {
                              $("#xqunit2").val(data);
                          });
        }
    });
    $("#xqresult22").keyup(function () {

        var a2 = document.getElementById("xqresult2").value;
        var a22 = document.getElementById("xqresult22").value;
        if (a2 == 2.0 && a22 > 1.5 && a22 < 3.5) {
            document.getElementById("xqtishi2").value = "正常";
        } else {
            document.getElementById("xqtishi2").value = "异常";
        }

    })

    //3-------------------------------------
    $("#xq3").change(function () {
        if ($("#xq3").val() == "频率依赖性肺顺应性") {
            $("#xqresult3").empty();
            $("#htishi3").empty();

            $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1",
                         { Name: $('#xq3').val() },
                         function (data) {
                             $("#xqqujian3").val(data);
                         });
            $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                          { Name: $('#xq3').val() },
                          function (data) {
                              $("#xqunit3").val(data);
                          });
        }
    });
    $("#xqresult33").keyup(function () {

        var a3 = document.getElementById("xqresult3").value;
        var a33 = document.getElementById("xqresult33").value;
        if (a3 == 2.0 && a33 > 1.5 && a33 < 3.5) {
            document.getElementById("xqtishi3").value = "正常";
        } else {
            document.getElementById("xqtishi3").value = "异常";
        }

    })


    //血气--------------------------------------------
    //1----------------------------
    $("#xs1").change(function () {
        $("#xresult1").empty();
        $("#xtishi1").empty();

        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1",
                     { Name: $('#xs1').val() },
                     function (data) {
                         $("#xqujian1").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#xs1').val() },
                      function (data) {
                          $("#xunit1").val(data);
                      });
        $("#xresult1").keyup(function () {
            if ($("#xs1").val() == "动脉血氧分压(PaO2)") {
                var a1 = document.getElementById("xresult1").value;
                var a2 = a1.split('/');
                if (a2[0] < 95) {
                    if (a2[1] < 13.3) {
                        document.getElementById("xtishi1").value = "↓";
                    } else {
                        document.getElementById("xtishi1").value = "异常";
                    }
                } else if (a2[0] > 100) {
                    if (a2[1] >= 12.6) {
                        document.getElementById("xtishi1").value = "↑";
                    } else {
                        document.getElementById("xtishi1").value = "异常";
                    }
                } else {
                    if (a2[1] < 12.6) {
                        document.getElementById("xtishi1").value = "↓";
                    } else if (a2[1] > 13.3) {
                        document.getElementById("xtishi1").value = "↑";
                    } else {
                        document.getElementById("xtishi1").value = "--";
                    }
                }
            } else if ($("#xs1").val() == "肺泡-动脉血氧分压差") {
                var a1 = document.getElementById("xresult1").value;
                var a2 = a1.split('/');
                if (a2[0] < 30) {
                    if (a2[1] < 4.0) {
                        document.getElementById("xtishi1").value = "--";
                    } else {
                        document.getElementById("xtishi1").value = "↑";
                    }
                } else {
                    document.getElementById("xtishi1").value = "↑";
                }
            } else if ($("#xs1").val() == "动脉血氧饱和度(SaO2)") {
                var a1 = document.getElementById("xresult1").value;

                if (a1 < 95) {
                    document.getElementById("xtishi1").value = "↓";
                } else if (a1 > 98) {
                    document.getElementById("xtishi1").value = "↑";
                } else {
                    document.getElementById("xtishi1").value = "--";
                }

            } else if ($("#xs1").val() == "混合静脉血氧分压(PvO2)" || $("#xs1").val() == "动脉血二氧化碳分压(PaCO2)") {
                var a1 = document.getElementById("xresult1").value;
                var a2 = a1.split('/');
                if (a2[0] < 35) {
                    if (a2[1] < 6.0) {
                        document.getElementById("xtishi1").value = "↓";
                    } else {
                        document.getElementById("xtishi1").value = "异常";
                    }
                } else if (a2[0] > 45) {
                    if (a2[1] >= 4.7) {
                        document.getElementById("xtishi1").value = "↑";
                    } else {
                        document.getElementById("xtishi1").value = "异常";
                    }
                } else {
                    if (a2[1] < 4.7) {
                        document.getElementById("xtishi1").value = "↓";
                    } else if (a2[1] > 6.0) {
                        document.getElementById("xtishi1").value = "↑";
                    } else {
                        document.getElementById("xtishi1").value = "--";
                    }
                }
            } else if ($("#xs1").val() == "动脉血氧含量(CaO2)(mmol/L)") {
                var a1 = document.getElementById("xresult1").value;

                if (a1 < 8.55) {
                    document.getElementById("xtishi1").value = "↓";
                } else if (a1 > 9.45) {
                    document.getElementById("xtishi1").value = "↑";
                } else {
                    document.getElementById("xtishi1").value = "--";
                }

            } else if ($("#xs1").val() == "动脉血氧含量(CaO2)(ml/dl)") {
                var a1 = document.getElementById("xresult1").value;

                if (a1 < 19) {
                    document.getElementById("xtishi1").value = "↓";
                } else if (a1 > 21) {
                    document.getElementById("xtishi1").value = "↑";
                } else {
                    document.getElementById("xtishi1").value = "--";
                }

            } else if ($("#xs1").val() == "pH值") {
                var a1 = document.getElementById("xresult1").value;
                if (a1 < 7.35) {
                    document.getElementById("xtishi1").value = "↓";
                } else if (a1 > 7.45) {
                    document.getElementById("xtishi1").value = "↑";
                } else {
                    document.getElementById("xtishi1").value = "--";
                }
            } else if ($("#xs1").val() == "标准碳酸氢盐(SB)" || $("#xs1").val() == "实际碳酸氢盐(AB)") {
                var a1 = document.getElementById("xresult1").value;
                if (a1 < 22) {
                    document.getElementById("xtishi1").value = "↓";
                } else if (a1 > 27) {
                    document.getElementById("xtishi1").value = "↑";
                } else {
                    document.getElementById("xtishi1").value = "--";
                }
            } else if ($("#xs1").val() == "缓冲碱(BB)") {
                var a1 = document.getElementById("xresult1").value;
                if (a1 < 45) {
                    document.getElementById("xtishi1").value = "↓";
                } else if (a1 > 55) {
                    document.getElementById("xtishi1").value = "↑";
                } else {
                    document.getElementById("xtishi1").value = "--";
                }
            } else if ($("#xs1").val() == "剩余碱") {
                var a1 = document.getElementById("xresult1").value;
                if (a1 < -2.3) {
                    document.getElementById("xtishi1").value = "↓";
                } else if (a1 > 2.3) {
                    document.getElementById("xtishi1").value = "↑";
                } else {
                    document.getElementById("xtishi1").value = "--";
                }
            } else if ($("#xs1").val() == "血浆CO2含量") {
                var a1 = document.getElementById("xresult1").value;
                if (a1 < 25.2) {
                    document.getElementById("xtishi1").value = "↓";
                } else if (a1 > 25.2) {
                    document.getElementById("xtishi1").value = "↑";
                } else {
                    document.getElementById("xtishi1").value = "--";
                }
            } else if ($("#xs1").val() == "阴离子间隙") {
                var a1 = document.getElementById("xresult1").value;
                if (a1 < 8) {
                    document.getElementById("xtishi1").value = "↓";
                } else if (a1 > 16) {
                    document.getElementById("xtishi1").value = "↑";
                } else {
                    document.getElementById("xtishi1").value = "--";
                }
            }
        })
    });

    //2----------------------------
    $("#xs2").change(function () {
        $("#xresult2").empty();
        $("#xtishi2").empty();

        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1",
                     { Name: $('#xs2').val() },
                     function (data) {
                         $("#xqujian2").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#xs2').val() },
                      function (data) {
                          $("#xunit2").val(data);
                      });
        $("#xresult2").keyup(function () {
            if ($("#xs2").val() == "动脉血氧分压(PaO2)") {
                var a1 = document.getElementById("xresult2").value;
                var a2 = a1.split('/');
                if (a2[0] < 95) {
                    if (a2[1] < 13.3) {
                        document.getElementById("xtishi2").value = "↓";
                    } else {
                        document.getElementById("xtishi2").value = "异常";
                    }
                } else if (a2[0] > 100) {
                    if (a2[1] >= 12.6) {
                        document.getElementById("xtishi2").value = "↑";
                    } else {
                        document.getElementById("xtishi2").value = "异常";
                    }
                } else {
                    if (a2[1] < 12.6) {
                        document.getElementById("xtishi2").value = "↓";
                    } else if (a2[1] > 13.3) {
                        document.getElementById("xtishi2").value = "↑";
                    } else {
                        document.getElementById("xtishi2").value = "--";
                    }
                }
            } else if ($("#xs2").val() == "肺泡-动脉血氧分压差") {
                var a1 = document.getElementById("xresult2").value;
                var a2 = a1.split('/');
                if (a2[0] < 30) {
                    if (a2[1] < 4.0) {
                        document.getElementById("xtishi2").value = "--";
                    } else {
                        document.getElementById("xtishi2").value = "↑";
                    }
                } else {
                    document.getElementById("xtishi2").value = "↑";
                }
            } else if ($("#xs2").val() == "动脉血氧饱和度(SaO2)") {
                var a1 = document.getElementById("xresult2").value;

                if (a1 < 95) {
                    document.getElementById("xtishi2").value = "↓";
                } else if (a1 > 98) {
                    document.getElementById("xtishi2").value = "↑";
                } else {
                    document.getElementById("xtishi2").value = "--";
                }

            } else if ($("#xs2").val() == "混合静脉血氧分压(PvO2)" || $("#xs2").val() == "动脉血二氧化碳分压(PaCO2)") {
                var a1 = document.getElementById("xresult2").value;
                var a2 = a1.split('/');
                if (a2[0] < 35) {
                    if (a2[1] < 6.0) {
                        document.getElementById("xtishi2").value = "↓";
                    } else {
                        document.getElementById("xtishi2").value = "异常";
                    }
                } else if (a2[0] > 45) {
                    if (a2[1] >= 4.7) {
                        document.getElementById("xtishi2").value = "↑";
                    } else {
                        document.getElementById("xtishi2").value = "异常";
                    }
                } else {
                    if (a2[1] < 4.7) {
                        document.getElementById("xtishi2").value = "↓";
                    } else if (a2[1] > 6.0) {
                        document.getElementById("xtishi2").value = "↑";
                    } else {
                        document.getElementById("xtishi2").value = "--";
                    }
                }
            } else if ($("#xs2").val() == "动脉血氧含量(CaO2)(mmol/L)") {
                var a1 = document.getElementById("xresult2").value;

                if (a1 < 8.55) {
                    document.getElementById("xtishi2").value = "↓";
                } else if (a1 > 9.45) {
                    document.getElementById("xtishi2").value = "↑";
                } else {
                    document.getElementById("xtishi2").value = "--";
                }

            } else if ($("#xs2").val() == "动脉血氧含量(CaO2)(ml/dl)") {
                var a1 = document.getElementById("xresult2").value;

                if (a1 < 19) {
                    document.getElementById("xtishi2").value = "↓";
                } else if (a1 > 21) {
                    document.getElementById("xtishi2").value = "↑";
                } else {
                    document.getElementById("xtishi2").value = "--";
                }

            } else if ($("#xs2").val() == "pH值") {
                var a1 = document.getElementById("xresult2").value;
                if (a1 < 7.35) {
                    document.getElementById("xtishi2").value = "↓";
                } else if (a1 > 7.45) {
                    document.getElementById("xtishi2").value = "↑";
                } else {
                    document.getElementById("xtishi2").value = "--";
                }
            } else if ($("#xs2").val() == "标准碳酸氢盐(SB)" || $("#xs2").val() == "实际碳酸氢盐(AB)") {
                var a1 = document.getElementById("xresult2").value;
                if (a1 < 22) {
                    document.getElementById("xtishi2").value = "↓";
                } else if (a1 > 27) {
                    document.getElementById("xtishi2").value = "↑";
                } else {
                    document.getElementById("xtishi2").value = "--";
                }
            } else if ($("#xs2").val() == "缓冲碱(BB)") {
                var a1 = document.getElementById("xresult2").value;
                if (a1 < 45) {
                    document.getElementById("xtishi2").value = "↓";
                } else if (a1 > 55) {
                    document.getElementById("xtishi2").value = "↑";
                } else {
                    document.getElementById("xtishi2").value = "--";
                }
            } else if ($("#xs2").val() == "剩余碱") {
                var a1 = document.getElementById("xresult2").value;
                if (a1 < -2.3) {
                    document.getElementById("xtishi2").value = "↓";
                } else if (a1 > 2.3) {
                    document.getElementById("xtishi2").value = "↑";
                } else {
                    document.getElementById("xtishi2").value = "--";
                }
            } else if ($("#xs2").val() == "血浆CO2含量") {
                var a1 = document.getElementById("xresult2").value;
                if (a1 < 25.2) {
                    document.getElementById("xtishi2").value = "↓";
                } else if (a1 > 25.2) {
                    document.getElementById("xtishi2").value = "↑";
                } else {
                    document.getElementById("xtishi2").value = "--";
                }
            } else if ($("#xs2").val() == "阴离子间隙") {
                var a1 = document.getElementById("xresult2").value;
                if (a1 < 8) {
                    document.getElementById("xtishi2").value = "↓";
                } else if (a1 > 16) {
                    document.getElementById("xtishi2").value = "↑";
                } else {
                    document.getElementById("xtishi2").value = "--";
                }
            }
        })
    });

    //3----------------------------
    $("#xs3").change(function () {
        $("#xresult3").empty();
        $("#xtishi3").empty();

        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1",
                     { Name: $('#xs3').val() },
                     function (data) {
                         $("#xqujian3").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#xs3').val() },
                      function (data) {
                          $("#xunit3").val(data);
                      });
        $("#xresult3").keyup(function () {
            if ($("#xs3").val() == "动脉血氧分压(PaO2)") {
                var a1 = document.getElementById("xresult3").value;
                var a2 = a1.split('/');
                if (a2[0] < 95) {
                    if (a2[1] < 13.3) {
                        document.getElementById("xtishi3").value = "↓";
                    } else {
                        document.getElementById("xtishi3").value = "异常";
                    }
                } else if (a2[0] > 100) {
                    if (a2[1] >= 12.6) {
                        document.getElementById("xtishi3").value = "↑";
                    } else {
                        document.getElementById("xtishi3").value = "异常";
                    }
                } else {
                    if (a2[1] < 12.6) {
                        document.getElementById("xtishi3").value = "↓";
                    } else if (a2[1] > 13.3) {
                        document.getElementById("xtishi3").value = "↑";
                    } else {
                        document.getElementById("xtishi3").value = "--";
                    }
                }
            } else if ($("#xs3").val() == "肺泡-动脉血氧分压差") {
                var a1 = document.getElementById("xresult3").value;
                var a2 = a1.split('/');
                if (a2[0] < 30) {
                    if (a2[1] < 4.0) {
                        document.getElementById("xtishi3").value = "--";
                    } else {
                        document.getElementById("xtishi3").value = "↑";
                    }
                } else {
                    document.getElementById("xtishi3").value = "↑";
                }
            } else if ($("#xs3").val() == "动脉血氧饱和度(SaO2)") {
                var a1 = document.getElementById("xresult3").value;

                if (a1 < 95) {
                    document.getElementById("xtishi3").value = "↓";
                } else if (a1 > 98) {
                    document.getElementById("xtishi3").value = "↑";
                } else {
                    document.getElementById("xtishi3").value = "--";
                }

            } else if ($("#xs3").val() == "混合静脉血氧分压(PvO2)" || $("#xs3").val() == "动脉血二氧化碳分压(PaCO2)") {
                var a1 = document.getElementById("xresult3").value;
                var a2 = a1.split('/');
                if (a2[0] < 35) {
                    if (a2[1] < 6.0) {
                        document.getElementById("xtishi3").value = "↓";
                    } else {
                        document.getElementById("xtishi3").value = "异常";
                    }
                } else if (a2[0] > 45) {
                    if (a2[1] >= 4.7) {
                        document.getElementById("xtishi3").value = "↑";
                    } else {
                        document.getElementById("xtishi3").value = "异常";
                    }
                } else {
                    if (a2[1] < 4.7) {
                        document.getElementById("xtishi3").value = "↓";
                    } else if (a2[1] > 6.0) {
                        document.getElementById("xtishi3").value = "↑";
                    } else {
                        document.getElementById("xtishi3").value = "--";
                    }
                }
            } else if ($("#xs3").val() == "动脉血氧含量(CaO2)(mmol/L)") {
                var a1 = document.getElementById("xresult3").value;

                if (a1 < 8.55) {
                    document.getElementById("xtishi3").value = "↓";
                } else if (a1 > 9.45) {
                    document.getElementById("xtishi3").value = "↑";
                } else {
                    document.getElementById("xtishi3").value = "--";
                }

            } else if ($("#xs3").val() == "动脉血氧含量(CaO2)(ml/dl)") {
                var a1 = document.getElementById("xresult3").value;

                if (a1 < 19) {
                    document.getElementById("xtishi3").value = "↓";
                } else if (a1 > 21) {
                    document.getElementById("xtishi3").value = "↑";
                } else {
                    document.getElementById("xtishi3").value = "--";
                }

            } else if ($("#xs3").val() == "pH值") {
                var a1 = document.getElementById("xresult3").value;
                if (a1 < 7.35) {
                    document.getElementById("xtishi3").value = "↓";
                } else if (a1 > 7.45) {
                    document.getElementById("xtishi3").value = "↑";
                } else {
                    document.getElementById("xtishi3").value = "--";
                }
            } else if ($("#xs3").val() == "标准碳酸氢盐(SB)" || $("#xs3").val() == "实际碳酸氢盐(AB)") {
                var a1 = document.getElementById("xresult3").value;
                if (a1 < 22) {
                    document.getElementById("xtishi3").value = "↓";
                } else if (a1 > 27) {
                    document.getElementById("xtishi3").value = "↑";
                } else {
                    document.getElementById("xtishi3").value = "--";
                }
            } else if ($("#xs3").val() == "缓冲碱(BB)") {
                var a1 = document.getElementById("xresult3").value;
                if (a1 < 45) {
                    document.getElementById("xtishi3").value = "↓";
                } else if (a1 > 55) {
                    document.getElementById("xtishi3").value = "↑";
                } else {
                    document.getElementById("xtishi3").value = "--";
                }
            } else if ($("#xs3").val() == "剩余碱") {
                var a1 = document.getElementById("xresult3").value;
                if (a1 < -2.3) {
                    document.getElementById("xtishi3").value = "↓";
                } else if (a1 > 2.3) {
                    document.getElementById("xtishi3").value = "↑";
                } else {
                    document.getElementById("xtishi3").value = "--";
                }
            } else if ($("#xs3").val() == "血浆CO2含量") {
                var a1 = document.getElementById("xresult3").value;
                if (a1 < 25.2) {
                    document.getElementById("xtishi3").value = "↓";
                } else if (a1 > 25.2) {
                    document.getElementById("xtishi3").value = "↑";
                } else {
                    document.getElementById("xtishi3").value = "--";
                }
            } else if ($("#xs3").val() == "阴离子间隙") {
                var a1 = document.getElementById("xresult3").value;
                if (a1 < 8) {
                    document.getElementById("xtishi3").value = "↓";
                } else if (a1 > 16) {
                    document.getElementById("xtishi3").value = "↑";
                } else {
                    document.getElementById("xtishi3").value = "--";
                }
            }
        })
    });

    //4----------------------------
    $("#xs4").change(function () {
        $("#xresult4").empty();
        $("#xtishi4").empty();

        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1",
                     { Name: $('#xs4').val() },
                     function (data) {
                         $("#xqujian4").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#xs4').val() },
                      function (data) {
                          $("#xunit4").val(data);
                      });
        $("#xresult4").keyup(function () {
            if ($("#xs4").val() == "动脉血氧分压(PaO2)") {
                var a1 = document.getElementById("xresult4").value;
                var a2 = a1.split('/');
                if (a2[0] < 95) {
                    if (a2[1] < 13.3) {
                        document.getElementById("xtishi4").value = "↓";
                    } else {
                        document.getElementById("xtishi4").value = "异常";
                    }
                } else if (a2[0] > 100) {
                    if (a2[1] >= 12.6) {
                        document.getElementById("xtishi4").value = "↑";
                    } else {
                        document.getElementById("xtishi4").value = "异常";
                    }
                } else {
                    if (a2[1] < 12.6) {
                        document.getElementById("xtishi4").value = "↓";
                    } else if (a2[1] > 13.3) {
                        document.getElementById("xtishi4").value = "↑";
                    } else {
                        document.getElementById("xtishi4").value = "--";
                    }
                }
            } else if ($("#xs4").val() == "肺泡-动脉血氧分压差") {
                var a1 = document.getElementById("xresult4").value;
                var a2 = a1.split('/');
                if (a2[0] < 30) {
                    if (a2[1] < 4.0) {
                        document.getElementById("xtishi4").value = "--";
                    } else {
                        document.getElementById("xtishi4").value = "↑";
                    }
                } else {
                    document.getElementById("xtishi4").value = "↑";
                }
            } else if ($("#xs4").val() == "动脉血氧饱和度(SaO2)") {
                var a1 = document.getElementById("xresult4").value;

                if (a1 < 95) {
                    document.getElementById("xtishi4").value = "↓";
                } else if (a1 > 98) {
                    document.getElementById("xtishi4").value = "↑";
                } else {
                    document.getElementById("xtishi4").value = "--";
                }

            } else if ($("#xs4").val() == "混合静脉血氧分压(PvO2)" || $("#xs4").val() == "动脉血二氧化碳分压(PaCO2)") {
                var a1 = document.getElementById("xresult4").value;
                var a2 = a1.split('/');
                if (a2[0] < 35) {
                    if (a2[1] < 6.0) {
                        document.getElementById("xtishi4").value = "↓";
                    } else {
                        document.getElementById("xtishi4").value = "异常";
                    }
                } else if (a2[0] > 45) {
                    if (a2[1] >= 4.7) {
                        document.getElementById("xtishi4").value = "↑";
                    } else {
                        document.getElementById("xtishi4").value = "异常";
                    }
                } else {
                    if (a2[1] < 4.7) {
                        document.getElementById("xtishi4").value = "↓";
                    } else if (a2[1] > 6.0) {
                        document.getElementById("xtishi4").value = "↑";
                    } else {
                        document.getElementById("xtishi4").value = "--";
                    }
                }
            } else if ($("#xs4").val() == "动脉血氧含量(CaO2)(mmol/L)") {
                var a1 = document.getElementById("xresult4").value;

                if (a1 < 8.55) {
                    document.getElementById("xtishi4").value = "↓";
                } else if (a1 > 9.45) {
                    document.getElementById("xtishi4").value = "↑";
                } else {
                    document.getElementById("xtishi4").value = "--";
                }

            } else if ($("#xs4").val() == "动脉血氧含量(CaO2)(ml/dl)") {
                var a1 = document.getElementById("xresult4").value;

                if (a1 < 19) {
                    document.getElementById("xtishi4").value = "↓";
                } else if (a1 > 21) {
                    document.getElementById("xtishi4").value = "↑";
                } else {
                    document.getElementById("xtishi4").value = "--";
                }

            } else if ($("#xs4").val() == "pH值") {
                var a1 = document.getElementById("xresult4").value;
                if (a1 < 7.35) {
                    document.getElementById("xtishi4").value = "↓";
                } else if (a1 > 7.45) {
                    document.getElementById("xtishi4").value = "↑";
                } else {
                    document.getElementById("xtishi4").value = "--";
                }
            } else if ($("#xs4").val() == "标准碳酸氢盐(SB)" || $("#xs4").val() == "实际碳酸氢盐(AB)") {
                var a1 = document.getElementById("xresult4").value;
                if (a1 < 22) {
                    document.getElementById("xtishi4").value = "↓";
                } else if (a1 > 27) {
                    document.getElementById("xtishi4").value = "↑";
                } else {
                    document.getElementById("xtishi4").value = "--";
                }
            } else if ($("#xs4").val() == "缓冲碱(BB)") {
                var a1 = document.getElementById("xresult4").value;
                if (a1 < 45) {
                    document.getElementById("xtishi4").value = "↓";
                } else if (a1 > 55) {
                    document.getElementById("xtishi4").value = "↑";
                } else {
                    document.getElementById("xtishi4").value = "--";
                }
            } else if ($("#xs4").val() == "剩余碱") {
                var a1 = document.getElementById("xresult4").value;
                if (a1 < -2.3) {
                    document.getElementById("xtishi4").value = "↓";
                } else if (a1 > 2.3) {
                    document.getElementById("xtishi4").value = "↑";
                } else {
                    document.getElementById("xtishi4").value = "--";
                }
            } else if ($("#xs4").val() == "血浆CO2含量") {
                var a1 = document.getElementById("xresult4").value;
                if (a1 < 25.2) {
                    document.getElementById("xtishi4").value = "↓";
                } else if (a1 > 25.2) {
                    document.getElementById("xtishi4").value = "↑";
                } else {
                    document.getElementById("xtishi4").value = "--";
                }
            } else if ($("#xs4").val() == "阴离子间隙") {
                var a1 = document.getElementById("xresult4").value;
                if (a1 < 8) {
                    document.getElementById("xtishi4").value = "↓";
                } else if (a1 > 16) {
                    document.getElementById("xtishi4").value = "↑";
                } else {
                    document.getElementById("xtishi4").value = "--";
                }
            }
        })
    });

    //5----------------------------
    $("#xs5").change(function () {
        $("#xresult5").empty();
        $("#xtishi5").empty();

        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1",
                     { Name: $('#xs5').val() },
                     function (data) {
                         $("#xqujian5").val(data);
                     });
        $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                      { Name: $('#xs5').val() },
                      function (data) {
                          $("#xunit5").val(data);
                      });
        $("#xresult5").keyup(function () {
            if ($("#xs5").val() == "动脉血氧分压(PaO2)") {
                var a1 = document.getElementById("xresult5").value;
                var a2 = a1.split('/');
                if (a2[0] < 95) {
                    if (a2[1] < 13.3) {
                        document.getElementById("xtishi5").value = "↓";
                    } else {
                        document.getElementById("xtishi5").value = "异常";
                    }
                } else if (a2[0] > 100) {
                    if (a2[1] >= 12.6) {
                        document.getElementById("xtishi5").value = "↑";
                    } else {
                        document.getElementById("xtishi5").value = "异常";
                    }
                } else {
                    if (a2[1] < 12.6) {
                        document.getElementById("xtishi5").value = "↓";
                    } else if (a2[1] > 13.3) {
                        document.getElementById("xtishi5").value = "↑";
                    } else {
                        document.getElementById("xtishi5").value = "--";
                    }
                }
            } else if ($("#xs5").val() == "肺泡-动脉血氧分压差") {
                var a1 = document.getElementById("xresult5").value;
                var a2 = a1.split('/');
                if (a2[0] < 30) {
                    if (a2[1] < 4.0) {
                        document.getElementById("xtishi5").value = "--";
                    } else {
                        document.getElementById("xtishi5").value = "↑";
                    }
                } else {
                    document.getElementById("xtishi5").value = "↑";
                }
            } else if ($("#xs5").val() == "动脉血氧饱和度(SaO2)") {
                var a1 = document.getElementById("xresult5").value;

                if (a1 < 95) {
                    document.getElementById("xtishi5").value = "↓";
                } else if (a1 > 98) {
                    document.getElementById("xtishi5").value = "↑";
                } else {
                    document.getElementById("xtishi5").value = "--";
                }

            } else if ($("#xs5").val() == "混合静脉血氧分压(PvO2)" || $("#xs5").val() == "动脉血二氧化碳分压(PaCO2)") {
                var a1 = document.getElementById("xresult5").value;
                var a2 = a1.split('/');
                if (a2[0] < 35) {
                    if (a2[1] < 6.0) {
                        document.getElementById("xtishi5").value = "↓";
                    } else {
                        document.getElementById("xtishi5").value = "异常";
                    }
                } else if (a2[0] > 45) {
                    if (a2[1] >= 4.7) {
                        document.getElementById("xtishi5").value = "↑";
                    } else {
                        document.getElementById("xtishi5").value = "异常";
                    }
                } else {
                    if (a2[1] < 4.7) {
                        document.getElementById("xtishi5").value = "↓";
                    } else if (a2[1] > 6.0) {
                        document.getElementById("xtishi5").value = "↑";
                    } else {
                        document.getElementById("xtishi5").value = "--";
                    }
                }
            } else if ($("#xs5").val() == "动脉血氧含量(CaO2)(mmol/L)") {
                var a1 = document.getElementById("xresult5").value;

                if (a1 < 8.55) {
                    document.getElementById("xtishi5").value = "↓";
                } else if (a1 > 9.45) {
                    document.getElementById("xtishi5").value = "↑";
                } else {
                    document.getElementById("xtishi5").value = "--";
                }

            } else if ($("#xs5").val() == "动脉血氧含量(CaO2)(ml/dl)") {
                var a1 = document.getElementById("xresult5").value;

                if (a1 < 19) {
                    document.getElementById("xtishi5").value = "↓";
                } else if (a1 > 21) {
                    document.getElementById("xtishi5").value = "↑";
                } else {
                    document.getElementById("xtishi5").value = "--";
                }

            } else if ($("#xs5").val() == "pH值") {
                var a1 = document.getElementById("xresult5").value;
                if (a1 < 7.35) {
                    document.getElementById("xtishi5").value = "↓";
                } else if (a1 > 7.45) {
                    document.getElementById("xtishi5").value = "↑";
                } else {
                    document.getElementById("xtishi5").value = "--";
                }
            } else if ($("#xs5").val() == "标准碳酸氢盐(SB)" || $("#xs5").val() == "实际碳酸氢盐(AB)") {
                var a1 = document.getElementById("xresult5").value;
                if (a1 < 22) {
                    document.getElementById("xtishi5").value = "↓";
                } else if (a1 > 27) {
                    document.getElementById("xtishi5").value = "↑";
                } else {
                    document.getElementById("xtishi5").value = "--";
                }
            } else if ($("#xs5").val() == "缓冲碱(BB)") {
                var a1 = document.getElementById("xresult5").value;
                if (a1 < 45) {
                    document.getElementById("xtishi5").value = "↓";
                } else if (a1 > 55) {
                    document.getElementById("xtishi5").value = "↑";
                } else {
                    document.getElementById("xtishi5").value = "--";
                }
            } else if ($("#xs5").val() == "剩余碱") {
                var a1 = document.getElementById("xresult5").value;
                if (a1 < -2.3) {
                    document.getElementById("xtishi5").value = "↓";
                } else if (a1 > 2.3) {
                    document.getElementById("xtishi5").value = "↑";
                } else {
                    document.getElementById("xtishi5").value = "--";
                }
            } else if ($("#xs5").val() == "血浆CO2含量") {
                var a1 = document.getElementById("xresult5").value;
                if (a1 < 25.2) {
                    document.getElementById("xtishi5").value = "↓";
                } else if (a1 > 25.2) {
                    document.getElementById("xtishi5").value = "↑";
                } else {
                    document.getElementById("xtishi5").value = "--";
                }
            } else if ($("#xs5").val() == "阴离子间隙") {
                var a1 = document.getElementById("xresult5").value;
                if (a1 < 8) {
                    document.getElementById("xtishi5").value = "↓";
                } else if (a1 > 16) {
                    document.getElementById("xtishi5").value = "↑";
                } else {
                    document.getElementById("xtishi5").value = "--";
                }
            }
        })
    });
})

var i = 1;
function added1() {
    if ($("#ts1").val() != "" && $("#ts2").val() != "" && $("#ts3").val() != "" && $("#ts4").val() != "" && $("#ts5").val() != "" && $('#ts_' + (i - 1) + '').val() != "") {
        if (i < 9) {
            $("#tab1").append('<tr style="height:30px"><td class="auto-style184">' + (5 + i) + '</td><td class="auto-style185">' +
                                '<select id="ts_' + i + '" name="ts_' + i + '" style="width: 157px;">' +
                                    '<option value="">==请选择==</option>' +
                                    '<option value="潮气容积">潮气容积</option>' +
                                    '<option value="补呼气容积">补呼气容积</option>' +
                                    '<option value="补吸气容积">补吸气容积</option>' +
                                    '<option value="深吸气量">深吸气量</option>' +
                                    '<option value="肺活量">肺活量</option>' +
                                    '<option value="功能残气量">功能残气量</option>' +
                                    '<option value="残气量">残气量</option>' +
                                    '<option value="肺总量">肺总量</option>' +
                                    '<option value="每分钟静息通气量">每分钟静息通气量</option>' +
                                    '<option value="最大自主通气量">最大自主通气量</option>' +
                                    '<option value="用力肺活量">用力肺活量</option>' +
                                    '<option value="最大呼气中断流量">最大呼气中断流量</option>' +
                                    '<option value="肺泡通气量">肺泡通气量</option>' +
                                '</select>' +
                            '</td>' +
                            '<td class="auto-style186">' +
                                '<input type="text" id="tresult_' + i + '" name="tresult_' + i + '" style="width: 100px; height: 20px;" />' +
                            '</td>' +
                            '<td class="auto-style195">' +
                                '<input type="text" id="tunit_' + i + '" name="tunit_' + i + '" style="border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;" />' +
                            '</td>' +
                            '<td class="auto-style188">' +
                                '<input type="text" id="tqujian_' + i + '" name="tqujian_' + i + '" style="border-style: none; border-color: inherit;background-color:#e2ebfb; border-width: 0px;" />' +
                            '</td>' +
                            '<td class="auto-style191">' +
                                '<input type="text" id="ttishi_' + i + '" name="ttishi_' + i + '" style="border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;" />' +
                            '</td>' +
                            '<td class="auto-style190">' +
                                '<input type="text" id="tbeizhu_' + i + '" name="tbeizhu_' + i + '" style="width: 205px; height: 20px" />' +
                            '</td>' +
                        '</tr>');
            //--------------------------------------------------------------------------

            $('#ts_' + i + '').change(function () {
                $('#tresult_' + (i - 1) + '').empty();
                $('#ttishi_' + (i - 1) + '').empty();
                var s1 = $("#sex").val();
                if (s1 == "男") {
                    s1 = "01";
                } else {
                    s1 = "02";
                }
                $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1?sex=" + s1,
                             { Name: $('#ts_' + (i - 1) + '').val() },
                             function (data) {
                                 $('#tqujian_' + (i - 1) + '').val(data);
                             });
                $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                              { Name: $('#ts_' + (i - 1) + '').val() },
                              function (data) {
                                  $('#tunit_' + (i - 1) + '').val(data);
                              });

            });
            //-------------------------------------
            $('#tresult_' + i + '').keyup(function () {
                var a = document.getElementById('ts_' + (i - 1) + '').value;
                var a1 = document.getElementById('tresult_' + (i - 1) + '').value;
                if (a == "潮气容积") {
                    if (a1 < 500) {
                        document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                    } else if (a1 == 500) {
                        document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                    } else {
                        document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                    }
                } else if (a == "补呼气容积") {
                    if ($("#sex").val() == "男") {
                        if (a1 < 1117) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 2109) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    } else {
                        if (a1 < 788) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 1464) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    }
                } else if (a == "补吸气容积") {
                    if ($("#sex").val() == "男") {
                        if (a1 < 2160) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 2160) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    } else {
                        if (a1 < 1400) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 1400) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    }
                } else if (a == "深吸气量") {
                    if ($("#sex").val() == "男") {
                        if (a1 < 2069) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 3165) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    } else {
                        if (a1 < 1589) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 2351) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    }
                } else if (a == "肺活量") {
                    if ($("#sex").val() == "男") {
                        if (a1 < 3527) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 4907) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    } else {
                        if (a1 < 2653) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 3557) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    }
                } else if (a == "功能残气量") {
                    if ($("#sex").val() == "男") {
                        if (a1 < 2501) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 3723) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    } else {
                        if (a1 < 1869) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 2827) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    }
                } else if (a == "残气量") {
                    if ($("#sex").val() == "男") {
                        if (a1 < 1218) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 2012) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    } else {
                        if (a1 < 909) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 1581) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    }
                } else if (a == "肺总量") {
                    if ($("#sex").val() == "男") {
                        if (a1 < 5020) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 5020) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    } else {
                        if (a1 < 3460) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 3460) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    }
                } else if (a == "每分钟静息通气量") {
                    if ($("#sex").val() == "男") {
                        if (a1 < 6463) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 6863) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    } else {
                        if (a1 < 4057) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 4377) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    }
                } else if (a == "最大自主通气量") {
                    if ($("#sex").val() == "男") {
                        if (a1 < 101.29) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 106.71) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    } else {
                        if (a1 < 80.33) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 84.67) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    }
                } else if (a == "用力肺活量") {
                    if ($("#sex").val() == "男") {
                        if (a1 < 3062) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 3296) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    } else {
                        if (a1 < 2266) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 2362) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    }
                } else if (a == "最大呼气中断流量") {
                    if ($("#sex").val() == "男") {
                        if (a1 < 2292) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 4612) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    } else {
                        if (a1 < 1890) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                        } else if (a1 > 3782) {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                        } else {
                            document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                        }
                    }
                } else if (a == "肺泡通气量") {
                    if (a1 < 5.25) {
                        document.getElementById('ttishi_' + (i - 1) + '').value = "↓";
                    } else if (a1 > 5.25) {
                        document.getElementById('ttishi_' + (i - 1) + '').value = "↑";
                    } else {
                        document.getElementById('ttishi_' + (i - 1) + '').value = "--";
                    }
                }
            })
            i++;
        }
    } else {
        alert("请填写上一行内容！");
    }
}

var i1 = 1;
function added2() {
    if ($("#xs1").val() != "" && $("#xs2").val() != "" && $("#xs3").val() != "" && $("#xs4").val() != "" && $("#xs5").val() != "" && $('#xs_' + (i1 - 1) + '').val() != "") {
        if (i1 < 10) {
            $("#tab2").append('<tr style="height:30px"><td class="auto-style184">' + (5 + i1) + '</td><td class="auto-style185">' +
                                '<select id="xs_' + i1 + '" name="xs_' + i1 + '" style="width: 157px;">' +
                                    '<option value="">==请选择==</option>' +
                                    '<option value="动脉血氧分压(PaO2)">动脉血氧分压(PaO2)</option>' +
                                    '<option value="肺泡-动脉血氧分压差">肺泡-动脉血氧分压差</option>' +
                                    '<option value="动脉血氧饱和度(SaO2)">动脉血氧饱和度(SaO2)</option>' +
                                    '<option value="混合静脉血氧分压(PvO2)">混合静脉血氧分压(PvO2)</option>' +
                                    '<option value="动脉血氧含量(CaO2)(mmol/L)">动脉血氧含量(CaO2)(mmol/L)</option>' +
                                    '<option value="动脉血氧含量(CaO2)(ml/dl)">动脉血氧含量(CaO2)(ml/dl)</option>' +
                                    '<option value="动脉血二氧化碳分压(PaCO2)">动脉血二氧化碳分压(PaCO2)</option>' +
                                    '<option value="pH值">pH值</option>' +
                                    '<option value="标准碳酸氢盐(SB)">标准碳酸氢盐(SB)</option>' +
                                    '<option value="实际碳酸氢盐(AB)">实际碳酸氢盐(AB)</option>' +
                                    '<option value="缓冲碱(BB)">缓冲碱(BB)</option>' +
                                    '<option value="剩余碱">剩余碱</option>' +
                                    '<option value="血浆CO2含量">血浆CO2含量</option>' +
                                    '<option value="阴离子间隙">阴离子间隙</option>' +
                                '</select>' +
                            '</td>' +
                            '<td class="auto-style186">' +
                                '<input type="text" id="xresult_' + i1 + '" name="xresult_' + i1 + '" style="width: 100px; height: 20px;" />' +
                            '</td>' +
                            '<td class="auto-style195">' +
                                '<input type="text" id="xunit_' + i1 + '" name="xunit_' + i1 + '" style="border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;" />' +
                            '</td>' +
                            '<td class="auto-style188">' +
                                '<input type="text" id="xqujian_' + i1 + '" name="xqujian_' + i1 + '" style="border-style: none; border-color: inherit;background-color:#e2ebfb; border-width: 0px;" />' +
                            '</td>' +
                            '<td class="auto-style191">' +
                                '<input type="text" id="xtishi_' + i1 + '" name="xtishi_' + i1 + '" style="border-style: none; border-color: inherit;background-color:#f1f3f5; border-width: 0px;" />' +
                            '</td>' +
                            '<td class="auto-style190">' +
                                '<input type="text" id="xbeizhu_' + i1 + '" name="xbeizhu_' + i1 + '" style="width: 205px; height: 20px" />' +
                            '</td>' +
                        '</tr>');
            //--------------------------------------------------------------------------

            $('#xs_' + i1 + '').change(function () {
                $('#xresult_' + (i1 - 1) + '').empty();
                $('#xtishi_' + (i1 - 1) + '').empty();
                $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler1",
                             { Name: $('#xs_' + (i1 - 1) + '').val() },
                             function (data) {
                                 $('#xqujian_' + (i1 - 1) + '').val(data);
                             });
                $.post("/MedicalHistory_AccessoryExamination_LungCheck/Handler3",
                              { Name: $('#xs_' + (i1 - 1) + '').val() },
                              function (data) {
                                  $('#xunit_' + (i1 - 1) + '').val(data);
                              });

            });
            //-------------------------------------
            $('#xresult_' + i1 + '').keyup(function () {
                var a = document.getElementById('xs_' + (i1 - 1) + '').value;
                var a1 = document.getElementById('xresult_' + (i1 - 1) + '').value;
                if (a == "动脉血氧分压(PaO2)") {
                    var a2 = a1.split('/');
                    if (a2[0] < 95) {
                        if (a2[1] < 13.3) {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "↓";
                        } else {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "异常";
                        }
                    } else if (a2[0] > 100) {
                        if (a2[1] >= 12.6) {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                        } else {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "异常";
                        }
                    } else {
                        if (a2[1] < 12.6) {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "↓";
                        } else if (a2[1] > 13.3) {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                        } else {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "--";
                        }
                    }
                } else if (a == "肺泡-动脉血氧分压差") {

                    var a2 = a1.split('/');
                    if (a2[0] < 30) {
                        if (a2[1] < 4.0) {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "--";
                        } else {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                        }
                    } else {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                    }
                } else if (a == "动脉血氧饱和度(SaO2)") {

                    if (a1 < 95) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↓";
                    } else if (a1 > 98) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                    } else {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "--";
                    }

                } else if (a == "混合静脉血氧分压(PvO2)" || a == "动脉血二氧化碳分压(PaCO2)") {
                    var a2 = a1.split('/');
                    if (a2[0] < 35) {
                        if (a2[1] < 6.0) {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "↓";
                        } else {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "异常";
                        }
                    } else if (a2[0] > 45) {
                        if (a2[1] >= 4.7) {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                        } else {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "异常";
                        }
                    } else {
                        if (a2[1] < 4.7) {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "↓";
                        } else if (a2[1] > 6.0) {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                        } else {
                            document.getElementById('xtishi_' + (i1 - 1) + '').value = "--";
                        }
                    }
                } else if (a == "动脉血氧含量(CaO2)(mmol/L)") {

                    if (a1 < 8.55) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↓";
                    } else if (a1 > 9.45) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                    } else {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "--";
                    }

                } else if (a == "动脉血氧含量(CaO2)(ml/dl)") {

                    if (a1 < 19) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↓";
                    } else if (a1 > 21) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                    } else {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "--";
                    }

                } else if (a == "pH值") {

                    if (a1 < 7.35) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↓";
                    } else if (a1 > 7.45) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                    } else {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "--";
                    }
                } else if (a == "标准碳酸氢盐(SB)" || a == "实际碳酸氢盐(AB)") {

                    if (a1 < 22) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↓";
                    } else if (a1 > 27) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                    } else {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "--";
                    }
                } else if (a == "缓冲碱(BB)") {
                    if (a1 < 45) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↓";
                    } else if (a1 > 55) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                    } else {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "--";
                    }
                } else if (a == "剩余碱") {
                    if (a1 < -2.3) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↓";
                    } else if (a1 > 2.3) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                    } else {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "--";
                    }
                } else if (a == "血浆CO2含量") {
                    if (a1 < 25.2) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↓";
                    } else if (a1 > 25.2) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                    } else {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "--";
                    }
                } else if (a == "阴离子间隙") {
                    if (a1 < 8) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↓";
                    } else if (a1 > 16) {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "↑";
                    } else {
                        document.getElementById('xtishi_' + (i1 - 1) + '').value = "--";
                    }
                }
            })
            i1++;
        }
    } else {
        alert("请填写上一行内容！");
    }
}