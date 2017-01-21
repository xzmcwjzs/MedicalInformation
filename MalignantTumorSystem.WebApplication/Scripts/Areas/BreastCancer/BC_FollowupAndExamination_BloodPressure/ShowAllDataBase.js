$(function () {
    var dates = new Date();
    $.post("/BreastCancer/BC_FollowupAndExamination_BloodPressure/ShowAllBasic?id=" + id,
       function (data) {
           dat = eval(data);
           if (dat != "") {

               $('#Td1').html("姓<a style='padding-left: 2em'></a>名：" + dat[0].name);
               if (dat[0].sex == "01") {
                   $('#Td2').html("性别：" + "男");
               }
               else {
                   $('#Td2').html("性别：" + "女");
               }

               $('#Td3').html("身份证号码：" + dat[0].id_card_number);

               if (dat[0].birth_date != "" && dat[0].birth_date != null) {
                   var date = new Date(parseInt(dat[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                   var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                   var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                   var year = dates.getFullYear() - date.getFullYear();
                   if (year > 0) {
                       $('#Td5').html("年龄：" + year + "岁");
                   } else if (year == 0) {
                       var month = dates.getMonth() - a1;
                       if (month > 0) {
                           $('#Td5').html("年龄：" + month + "月");
                       } else if (month == 0) {
                           var day = dates.getDay() - a2;
                           if (day > 0) {
                               $('#Td5').html("年龄：" + day + "天");
                           }
                       }
                   }
                   $('#Td4').html("出生日期：" + date.getFullYear()+ '-' + a1 + '-' + a2);
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

                      $("#Td6").html("常住地址：" + data1 + data2 + data3 + data4 + data5 + address);

                  })
                    })
                    })
                    })
                  })
               $('#Td8').html("手机号码：" + dat[0].phone);

           }
       })


    $.post("/BreastCancer/BC_FollowupAndExamination_BloodPressure/ShowAllDataBase?id=" + id,
        function (data) {
            dat = eval(data);
            if (dat != "") {
                for (var i = 0; i < dat.length; i++) {
                    //增加3个div
                    if (i > 0) {
                        if (i % 60 == 0) {
                            $('#d' + ((i / 60) - 1) + '').after('<div style="width: 100%;padding-top:10px" id="d' + (i / 60) + '"><div class="auto-style11" id="top' + (i / 60) + '"></div>' +
                                                 '<div class="auto-style12" id="left' + (i / 60) + '">' +
                                                        '<table style="width:100%;" border="0" cellpadding="0" cellspacing="0">' +
                                                             '<tr id="t' + i + '">' +
                                                                  '<td class="auto-style8">日期</td>' +
                                                                  '<td class="auto-style9">血压<a style="padding-left:1em"></a>mmHg（kPa）</td>' +
                                                                  '<td class="auto-style10">心率（次/分）</td>' +
                                                             '</tr>' +
                                                         '</table>' +
                                                 '</div>' +
                                                 '<div class="auto-style13" id="right' + (i / 60) + '">' +
                                                        '<table style="width:100%;" border="0" cellpadding="0" cellspacing="0">' +
                                                             '<tr id="tr' + i + '">' +
                                                                 '<td class="auto-style8">日期</td>' +
                                                                 '<td class="auto-style9">血压 mmHg（kPa）</td>' +
                                                                 '<td class="auto-style10">心率（次/分）</td>' +
                                                             '</tr>' +
                                                        '</table>' +
                                                 '</div>' +
                                                '<div class="auto-style11" id="bottom' + (i / 60) + '"></div></div>');

                        }
                    }


                    //判断该值在左边还是右边显示
                    if (parseInt(i / 30) % 2 == 0) {
                        //在左侧显示
                        if (i % 5 == 0) {
                            $('#t' + i + '').after('<tr id="t' + (i + 1) + '">' +
                                '<td id="times' + i + '" style="line-height:2em;border-top:1px solid #808080;"></td>' +
                                '<td id="bloodpressure' + i + '" style="line-height:2em;border-top:1px solid #808080;"></td>' +
                                '<td id="heart' + i + '" style="line-height:2em;border-top:1px solid #808080;text-align:center;"></td>' +
                                '</tr>');
                        } else {
                            $('#t' + i + '').after('<tr id="t' + (i + 1) + '" >' +
                                    '<td id="times' + i + '" style="line-height:2em;"></td>' +
                                    '<td id="bloodpressure' + i + '" style="line-height:2em;"></td>' +
                                    '<td id="heart' + i + '" style="line-height:2em;text-align:center;"></td>' +
                                    '</tr>');
                        }
                    }
                    else if (parseInt(i / 30) % 2 == 1) {
                        //在右侧显示
                        if (i % 5 == 0) {
                            $('#tr' + (i - 30) + '').after('<tr id="tr' + (i - 29) + '">' +
                                '<td id="times' + i + '" style="line-height:2em;border-top:1px solid #808080;"></td>' +
                                '<td id="bloodpressure' + i + '" style="line-height:2em;border-top:1px solid #808080;"></td>' +
                                '<td id="heart' + i + '" style="line-height:2em;border-top:1px solid #808080;text-align:center;"></td>' +
                                '</tr>');
                        } else {
                            $('#tr' + (i - 30) + '').after('<tr id="tr' + (i - 29) + '" >' +
                                    '<td id="times' + i + '" style="line-height:2em;"></td>' +
                                    '<td id="bloodpressure' + i + '" style="line-height:2em;"></td>' +
                                    '<td id="heart' + i + '" style="line-height:2em;text-align:center;"></td>' +
                                    '</tr>');
                        }
                    }

                    if (dat[i].data != "" && dat[i].data != null) {
                        var date = new Date(parseInt(dat[i].data.replace("/Date(", "").replace(")/", ""), 10));
                        var a0 = date.getFullYear();
                        var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                        var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                        s = a0 + '-' + a1 + '-' + a2 + ' ' + dat[i].time;

                        $('#times' + i + '').html(s);
                    }
                    $('#bloodpressure' + i + '').html(dat[i].ssy + SBC("/") + dat[i].szy + "（" + dat[i].ssy1 + SBC("/") + dat[i].szy1 + "）");
                    $('#heart' + i + '').html(dat[i].heart);

                }
            }
        })
})

//全角
function SBC(text) {
    return text.replace(/[\x20-\x7e]/g, function ($0) {
        return $0 == " " ? "\u3000" : String.fromCharCode($0.charCodeAt(0) + 0xfee0);
    });
}