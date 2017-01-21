$(function () {
    var dates = new Date();
    $.post("/BreastCancer/BC_FollowupAndExamination_BloodGlucose/ShowAllBasic?id=" + id,
        function (data) {
            dat = eval(data);
            if (dat != "") {

                $('#Td1').html(dat[0].name);
                if (dat[0].sex == "01") {
                    $('#Td2').html("男");
                }
                else {
                    $('#Td2').html("女");
                }

                $('#Td3').html(dat[0].id_card_number);

                if (dat[0].birth_date != "") {
                    var date = new Date(parseInt(dat[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                    var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                    var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                     
                    $('#Td4').html(date.getFullYear() + '-' + a1 + '-' + a2);
                    var dates = new Date();
                    var year = dates.getFullYear() - date.getFullYear();
                    if (year > 0) {
                        $("#Td5").html(year + "岁");
                    } else if (year == 0) {
                        var month = dates.getMonth() - a1;
                        if (month > 0) {
                            $("#Td5").html(month + "月");
                        } else if (month == 0) {
                            var day = dates.getDay() - a2;
                            if (day > 0) {
                                $("#Td5").html(day + "天");
                            }
                        }
                    }
                }

                var codes = dat[0].community_code;
                var address = dat[0].permanent_address;
                $.post("/Data/ProvinceName?code=" + codes.substring(0, 2),
                   function (data1) {
                       $.post("/Data/CityName?code=" + codes.substring(0, 4),
                     function (data2) {
                         $.post("/Data/CountyName?code=" + codes.substring(0, 6),
                     function (data3) {
                         $.post("/Data/StreetName?code=" + codes.substring(0, 9),
                     function (data4) {
                         $.post("/Data/CommunityName?code=" + codes.substring(0, 12),
                   function (data5) {

                       $("#Td6").html(data1 + data2 + data3 + data4 + data5 + address);

                   })
                     })
                     })
                     })
                   }) 
                $('#Td8').html(dat[0].phone); 
            }
        })


    $.post("/BreastCancer/BC_FollowupAndExamination_BloodGlucose/ShowAllDataBase?id=" + id,
         function (data) {
             dat = eval(data);
             if (dat != "") {
                 for (var i = 0; i < dat.length; i++) { 
                     if (i > 0) {
                         if (i % 60 == 0) {
                             $('#d' + ((i / 60) - 1) + '').after('<div style="width: 100%;padding-top:10px" id="d' + (i / 60) + '"><div style="border-bottom:1px solid black;height:5px;width:100%;clear:both" id="top' + (i / 60) + '"></div>' +
                                                  '<div style="width: 49.8%;float: left;border-right:1px solid black;text-align: center; margin-top: 10px;height:760px;" id="left' + (i / 60) + '">' +
                                                         '<table style="width:100%;" border="0" cellpadding="0" cellspacing="0">' +
                                                              '<tr id="t' + i + '">' +
                                                                   '<td style="line-height:2em;">日期</td>' +
                                                                   '<td>测量血糖类型</td>' +
                                                                   '<td>血糖值（mmol/L）</td>' +
                                                              '</tr>' +
                                                          '</table>' +
                                                  '</div>' +
                                                  '<div style="width: 50%;float: left;text-align: center;  margin-top: 10px;height:760px;" id="right' + (i / 60) + '">' +
                                                      '<table style="width:100%;" border="0" cellpadding="0" cellspacing="0">' +
                                                              '<tr id="tr' + i + '">' +
                                                                  '<td style="line-height:2em;">日期</td>' +
                                                                  '<td>测量血糖类型</td>' +
                                                                  '<td>血糖值（mmol/L）</td>' +
                                                              '</tr>' +
                                                      '</table>' +
                                                  '</div>' +
                                                 '<div style="border-bottom:1px solid black;height:5px;width:100%;clear:both" id="bottom' + (i / 60) + '"></div></div>');

                         }
                     }

                     //判断该值在左边还是右边显示
                     if (parseInt(i / 30) % 2 == 0) {
                         //在左侧显示
                         if (i % 5 == 0) {
                             $('#t' + i + '').after('<tr id="t' + (i + 1) + '">' +
                                 '<td id="times' + i + '" style="line-height:2em;border-top:1px solid black;"></td>' +
                                 '<td id="type' + i + '" style="line-height:2em;border-top:1px solid black;"></td>' +
                                 '<td id="bloodsugar' + i + '" style="line-height:2em;border-top:1px solid black;"></td>' +
                                 '</tr>');
                         } else {
                             $('#t' + i + '').after('<tr id="t' + (i + 1) + '" >' +
                                     '<td id="times' + i + '" style="line-height:2em;"></td>' +
                                     '<td id="type' + i + '" style="line-height:2em;"></td>' +
                                     '<td id="bloodsugar' + i + '" style="line-height:2em;"></td>' +
                                     '</tr>');
                         }
                     }
                     else if (parseInt(i / 30) % 2 == 1) {
                         //在右侧显示
                         if (i % 5 == 0) {
                             $('#tr' + (i - 30) + '').after('<tr id="tr' + (i - 29) + '">' +
                                 '<td id="times' + i + '" style="line-height:2em;border-top:1px solid black;"></td>' +
                                 '<td id="type' + i + '" style="line-height:2em;border-top:1px solid black;"></td>' +
                                 '<td id="bloodsugar' + i + '" style="line-height:2em;border-top:1px solid black;"></td>' +
                                 '</tr>');
                         } else {
                             $('#tr' + (i - 30) + '').after('<tr id="tr' + (i - 29) + '" >' +
                                     '<td id="times' + i + '" style="line-height:2em;"></td>' +
                                     '<td id="type' + i + '" style="line-height:2em;"></td>' +
                                     '<td id="bloodsugar' + i + '" style="line-height:2em;"></td>' +
                                     '</tr>');
                         }
                     }


                     if (dat[i].data != "") {
                         var date = new Date(parseInt(dat[i].data.replace("/Date(", "").replace(")/", ""), 10));
                         var a0 = date.getFullYear();
                         var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                         var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                         s = a0 + '-' + a1 + '-' + a2 + ' ' + dat[i].time;
                         $('#times' + i + '').html(s);
                     }
                     if (dat[i].types == "1") {
                         dat[i].types = "空腹血糖";
                     } else if (dat[i].types == "2") {
                         dat[i].types = "餐前血糖";
                     } else if (dat[i].types == "3") {
                         dat[i].types = "餐后血糖";
                     } else if (dat[i].types == "4") {
                         dat[i].types = "睡前血糖";
                     } else if (dat[i].types == "5") {
                         dat[i].types = "随机血糖";
                     } else if (dat[i].types == "6") {
                         dat[i].types = "糖化血红蛋白（%）";
                     }
                     $('#type' + i + '').html(dat[i].types);
                     $('#bloodsugar' + i + '').html(dat[i].bloodsugar);

                 }
             }
         })
})
 