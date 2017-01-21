/// <reference path="../jquery-1.8.2.min.js" />
//全纪录
$(function () {
    $.post("/BasicInformation/ShowFirstPage?id=" + id,
       function (data) {
           dat = eval(data);
           if (dat != "") {
               var czz = "";

               czz = dat[0].community_code + dat[0].permanent_home_address;
                
               var xzz = "";
               if (dat[0].present_community_code != "" && dat[0].present_community_code !=null) {
                   xzz = dat[0].present_community_code + dat[0].residence_address;
               } 

               var time = new Date();
               var years = time.getFullYear();

               var month = time.getMonth();
               if (parseInt(month) < 10) {
                   month = "0" + month;
               }
               var day = time.getDate();
               if (parseInt(day) < 10) {
                   day = "0" + day;
               }

               if (dat[0].fill_community_code = "" && dat[0].fill_community_code == null) {
                   dat[0].fill_community_code = "";
               }


              if (dat[0].create_time != "" && dat[0].create_time != null) {
                   //处理json返回过来的 日期格式问题
                   var date = new Date(parseInt(dat[0].create_time.replace("/Date(", "").replace(")/", ""), 10));
                   var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                   var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                   //var a = dat[0].create_time.split('/');
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
               }



               $("#d").append('<table style="width:100%;height:100%">' +
                   '<tr>' +
                      '<td style="font-size:16px;text-align:left;font-family:FangSong_GB2312;">健康档案号：<a style="font-family:Calibri;font-weight:500">' + dat[0].resident_id + '</a><div style="float:right"><img src="/images/3.jpg"/></div></td>' +
                   '</tr>' +
                   '<tr>' +
                      '<td style="text-align:center;letter-spacing:10px;font-size:36px;font-weight:bold;font-family:SimHei">个人医疗健康档案</td>' +
                   '</tr>' +
                   '<tr>' +
                      '<td style="height:60px;">' +
                          '<table align="center" style="width:98%">' +
                               '<tr>' +
                                    '<td style="text-align:left;font-size:18px;width:18%;font-family:SimSun">姓<a style="padding-left:2em"></a>名：</td>' +
                                    '<td style="text-align:center;letter-spacing:12px;font-size:18px;width:80%;font-family:FangSong_GB2312;border-bottom:solid 1px #000;">' + dat[0].resident_name + '</td>' +
                               '</tr>' +
                            '</table>' +
                      '</td>' +
                   '</tr>' +
                  '<tr>' +
                      '<td style="height:60px;">' +
                          '<table align="center" style="width:98%">' +
                               '<tr>' +
                                    '<td style="text-align:left;font-size:18px;width:18%;font-family:SimSun">常住地址：</td>' +
                                    '<td style="text-align:center;font-size:18px;width:80%;font-family:FangSong_GB2312;border-bottom:solid 1px #000;overflow:hidden">' + czz + '</td>' +
                               '</tr>' +
                            '</table>' +
                      '</td>' +
                   '</tr>' +
                   '<tr>' +
                      '<td style="height:60px;">' +
                          '<table align="center" style="width:98%">' +
                               '<tr>' +
                                    '<td style="text-align:left;font-size:18px;width:18%;font-family:SimSun">现住地址：</td>' +
                                    '<td style="text-align:center;font-size:18px;width:80%;font-family:FangSong_GB2312;border-bottom:solid 1px #000;overflow:hidden">' + xzz + '</td>' +
                               '</tr>' +
                            '</table>' +
                      '</td>' +
                   '</tr>' +
                   '<tr>' +
                      '<td style="height:60px;">' +
                          '<table align="center" style="width:98%">' +
                               '<tr>' +
                                    '<td style="text-align:left;font-size:18px;width:18%;font-family:SimSun">联系电话：</td>' +
                                    '<td style="font-size:18px;width:80%;font-family:FangSong_GB2312">' +
                                         '<table style="width:100%">' +
                                         '<tr>' +
                                               '<td style="width:14%;"><a style="font-size:18px;font-family:SimSun;text-align:left;">手机：</a></td>' +
                                               '<td style="width:25%;border-bottom:solid 1px #000;text-align:center;overflow:hidden"><a style="font-family:Times New Roman">' + dat[0].individual_phone + '</a></td>' +
                                               '<td style="width:30%;"><a style="font-size:18px;font-family:SimSun;">固定电话：</a></td>' +
                                               '<td style="width:30%;border-bottom:solid 1px #000;text-align:center;overflow:hidden"><a style="font-family:Times New Roman">' + dat[0].family_phone + '</a></td>' +
                                        '</tr>' +
                                        '</table>' +
                                    '</td>' +
                               '</tr>' +
                            '</table>' +
                      '</td>' +
                   '</tr>' +
                   '<tr>' +
                      '<td style="height:60px;">' +
                          '<table align="center" style="width:98%">' +
                               '<tr>' +
                                    '<td style="text-align:left;font-size:18px;width:25%;font-family:SimSun">乡镇/街道名称：</td>' +
                                    '<td style="text-align:center;font-size:18px;width:70%;font-family:FangSong_GB2312;border-bottom:solid 1px #000;overflow:hidden">' + dat[0].community_code + '</td>' +
                               '</tr>' +
                            '</table>' +
                      '</td>' +
                   '</tr>' +

                   '<tr>' +
                      '<td style="height:60px;">' +
                          '<table align="center" style="width:98%">' +
                               '<tr>' +
                                    '<td style="text-align:left;font-size:18px;width:25%;font-family:SimSun">村/居委会名称：</td>' +
                                    '<td style="text-align:center;font-size:18px;width:70%;font-family:FangSong_GB2312;border-bottom:solid 1px #000;overflow:hidden">' + dat[0].community_code + '</td>' +
                               '</tr>' +
                            '</table>' +
                      '</td>' +
                   '</tr>' +
                   '<tr>' +
                      '<td style="height:60px;">' +
                          '<table align="center" style="width:98%">' +
                               '<tr>' +
                                    '<td style="text-align:left;font-size:18px;width:18%;font-family:SimSun">建档机构：</td>' +
                                    '<td style="text-align:center;font-size:18px;width:80%;font-family:FangSong_GB2312;border-bottom:solid 1px #000;overflow:hidden">' + dat[0].fill_community_code + '</td>' +
                               '</tr>' +
                            '</table>' +
                      '</td>' +
                   '</tr>' +
                   '<tr>' +
                      '<td style="height:60px;">' +
                          '<table align="center" style="width:98%">' +
                               '<tr>' +
                                    '<td style="text-align:left;font-size:18px;width:18%;font-family:SimSun;">建&nbsp;档&nbsp;人：</td>' +
                                    '<td style="text-align:center;letter-spacing:12px;font-size:18px;width:80%;font-family:FangSong_GB2312;border-bottom:solid 1px #000;">' + dat[0].worker_user_name + '</td>' +
                               '</tr>' +
                            '</table>' +
                      '</td>' +
                   '</tr>' +
                   '<tr>' +
                      '<td style="height:60px;">' +
                          '<table align="center" style="width:98%">' +
                               '<tr>' +
                                    '<td style="text-align:left;font-size:18px;width:18%;font-family:SimSun">责任医生：</td>' +
                                    '<td style="text-align:center;letter-spacing:12px;font-size:18px;width:80%;font-family:FangSong_GB2312;border-bottom:solid 1px #000;">' + dat[0].worker_user_name +
                                    '</td>' +
                               '</tr>' +
                            '</table>' +
                      '</td>' +
                   '</tr>' +
                   '<tr>' +
                      '<td style="height:60px;">' +
                          '<table align="center" style="width:98%">' +
                               '<tr>' +
                                    '<td style="text-align:left;font-size:18px;width:18%;font-family:SimSun">建档日期：</td>' +
                                    '<td style="text-align:center;font-size:18px;width:80%;font-family:FangSong_GB2312;border-bottom:solid 1px #000;"><a style="font-family:Times New Roman">' + date.getFullYear() + '</a>年<a style="font-family:Times New Roman">' + a1 + '</a>月<a style="font-family:Times New Roman">' + a2 + '</a>日' + '</td>' +
                               '</tr>' +
                            '</table>' +
                      '</td>' +
                   '</tr>' +

                   '</table>');
           }
       })



    //$.post("/BasicInformation/FullRecode",
    //        { "resident_id": resident_id },
    //            function (data) {
    //                if (data != "") {
    //                    $("#d2").html(data);
    //                } else {
    //                    $("#d1").hide();
    //                }
    //            })
})

function print() {

    $("#form1").jqprint();
}