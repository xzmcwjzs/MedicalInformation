$(function () {
    $.post("/BreastCancer/BC_FollowupAndExamination_Constitution/Show?resident_id=" + resident_id,
        function (data) { 
            if (data != null && data != "") {  
                var time = ""; 
                    if (data.create_time != "") {
                        var date = new Date(parseInt(data.create_time.replace("/Date(", "").replace(")/", ""), 10));
                        var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                        var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                         
                        time = date.getFullYear() + '年' + a1 + '月' + a2 + '日';
                    }
                    var a = parseInt(parseFloat(parseInt(data.scores_yangxz) - 7) / 28 * 100);
                    var b = parseInt(parseFloat(parseInt(data.scores_yinxz) - 8) / 32 * 100);
                    var c = parseInt(parseFloat(parseInt(data.scores_qixz) - 8) / 32 * 100);
                    var d = parseInt(parseFloat(parseInt(data.scores_tansz) - 8) / 32 * 100);
                    var e = 0;
                    if (sex == "01") {
                        e = parseInt(parseFloat(parseInt(data.scores_shirz) - 6) / 24 * 100);
                    } else {
                        e = parseInt(parseFloat(parseInt(data.scores_shirz) - 7) / 28 * 100);
                    }
                    var f = parseInt(parseFloat(parseInt(data.scores_xueyz) - 7) / 28 * 100);
                    var g = parseInt(parseFloat(parseInt(data.scores_tebz) - 7) / 28 * 100);
                    var h = parseInt(parseFloat(parseInt(data.scores_qiyz) - 7) / 28 * 100);
                    var j = parseInt(parseFloat(parseInt(data.scores_pinghz) - 8) / 32 * 100);

                    var result1 = null, result2 = null, result3 = null, result4 = null, result5 = null, result6 = null, result7 = null, result8 = null, result9 = null;
                    var array = [a, b, c, d, e, f, g, h];
                    var result = Math.max.apply(null, array);

                    if (j >= 60) {
                        if (result == a) {
                            result2 = "否";
                            result3 = "否";
                            result4 = "否";
                            result5 = "否";
                            result6 = "否";
                            result7 = "否";
                            result8 = "否";
                            if (result > 40) {
                                result1 = "是";
                                result9 = "否";
                            }
                            else if (result >= 30 && result < 40) {
                                result1 = "倾向是";
                                result9 = "基本是";
                            }
                            else if (result < 30) {
                                result1 = "否";
                                result9 = "是";
                            }
                        }
                        else if (result == b) {
                            result1 = "否";
                            result3 = "否";
                            result4 = "否";
                            result5 = "否";
                            result6 = "否";
                            result7 = "否";
                            result8 = "否";
                            if (result > 40) {
                                result2 = "是";
                                result9 = "否";
                            }
                            else if (result >= 30 && result < 40) {
                                result2 = "倾向是";
                                result9 = "基本是";
                            }
                            else if (result < 30) {
                                result2 = "否";
                                result9 = "是";
                            }
                        }
                        else if (result == c) {
                            result1 = "否";
                            result2 = "否";
                            result4 = "否";
                            result5 = "否";
                            result6 = "否";
                            result7 = "否";
                            result8 = "否";
                            if (result > 40) {
                                result3 = "是";
                                result9 = "否";
                            }
                            else if (result >= 30 && result < 40) {
                                result3 = "倾向是";
                                result9 = "基本是";
                            }
                            else if (result < 30) {
                                result3 = "否";
                                result9 = "是";
                            }
                        }
                        else if (result == d) {
                            result1 = "否";
                            result2 = "否";
                            result3 = "否";
                            result5 = "否";
                            result6 = "否";
                            result7 = "否";
                            result8 = "否";
                            if (result > 40) {
                                result4 = "是";
                                result9 = "否";
                            }
                            else if (result >= 30 && result < 40) {
                                result4 = "倾向是";
                                result9 = "基本是";
                            }
                            else if (result < 30) {
                                result4 = "否";
                                result9 = "是";
                            }
                        }
                        else if (result == e) {
                            result1 = "否";
                            result2 = "否";
                            result3 = "否";
                            result4 = "否";
                            result6 = "否";
                            result7 = "否";
                            result8 = "否";
                            if (result > 40) {
                                result5 = "是";
                                result9 = "否";
                            }
                            else if (result >= 30 && result < 40) {
                                result5 = "倾向是";
                                result9 = "基本是";
                            }
                            else if (result < 30) {
                                result5 = "否";
                                result9 = "是";
                            }
                        }
                        else if (result == f) {
                            result1 = "否";
                            result2 = "否";
                            result3 = "否";
                            result4 = "否";
                            result5 = "否";
                            result7 = "否";
                            result8 = "否";
                            if (result > 40) {
                                result6 = "是";
                                result9 = "否";
                            }
                            else if (result >= 30 && result < 40) {
                                result6 = "倾向是";
                                result9 = "基本是";
                            }
                            else if (result < 30) {
                                result6 = "否";
                                result9 = "是";
                            }
                        }
                        else if (result == g) {
                            result1 = "否";
                            result2 = "否";
                            result3 = "否";
                            result4 = "否";
                            result5 = "否";
                            result6 = "否";
                            result8 = "否";
                            if (result > 40) {
                                result7 = "是";
                                result9 = "否";
                            }
                            else if (result >= 30 && result < 40) {
                                result7 = "倾向是";
                                result9 = "基本是";
                            }
                            else if (result < 30) {
                                result7 = "否";
                                result9 = "是";
                            }
                        }
                        else if (result == h) {
                            result1 = "否";
                            result2 = "否";
                            result3 = "否";
                            result4 = "否";
                            result5 = "否";
                            result6 = "否";
                            result7 = "否";
                            if (result > 40) {
                                result8 = "是";
                                result9 = "否";
                            }
                            else if (result >= 30 && result < 40) {
                                result8 = "倾向是";
                                result9 = "基本是";
                            }
                            else if (result < 30) {
                                result8 = "否";
                                result9 = "是";
                            }
                        }
                    }
                    else {
                        if (result == a) {
                            result2 = "否";
                            result3 = "否";
                            result4 = "否";
                            result5 = "否";
                            result6 = "否";
                            result7 = "否";
                            result8 = "否";
                            result9 = "否";
                            if (result > 40) {
                                result1 = "是";
                            }
                            else if (result >= 30 && result < 40) {
                                result1 = "倾向是";
                            }
                            else if (result < 30) {
                                result1 = "否";
                            }
                        }
                        else if (result == b) {
                            result1 = "否";
                            result3 = "否";
                            result4 = "否";
                            result5 = "否";
                            result6 = "否";
                            result7 = "否";
                            result8 = "否";
                            result9 = "否";
                            if (result > 40) {
                                result2 = "是";
                            }
                            else if (result >= 30 && result < 40) {
                                result2 = "倾向是";
                            }
                            else if (result < 30) {
                                result2 = "否";
                            }
                        }
                        else if (result == c) {
                            result1 = "否";
                            result2 = "否";
                            result4 = "否";
                            result5 = "否";
                            result6 = "否";
                            result7 = "否";
                            result8 = "否";
                            result9 = "否";
                            if (result > 40) {
                                result3 = "是";
                            }
                            else if (result >= 30 && result < 40) {
                                result3 = "倾向是";
                            }
                            else if (result < 30) {
                                result3 = "否";
                            }
                        }
                        else if (result == d) {
                            result1 = "否";
                            result2 = "否";
                            result3 = "否";
                            result5 = "否";
                            result6 = "否";
                            result7 = "否";
                            result8 = "否";
                            result9 = "否";
                            if (result > 40) {
                                result4 = "是";
                            }
                            else if (result >= 30 && result < 40) {
                                result4 = "倾向是";
                            }
                            else if (result < 30) {
                                result4 = "否";
                            }
                        }
                        else if (result == e) {
                            result1 = "否";
                            result2 = "否";
                            result3 = "否";
                            result4 = "否";
                            result6 = "否";
                            result7 = "否";
                            result8 = "否";
                            result9 = "否";
                            if (result > 40) {
                                result5 = "是";
                            }
                            else if (result >= 30 && result < 40) {
                                result5 = "倾向是";
                            }
                            else if (result < 30) {
                                result5 = "否";
                            }
                        }
                        else if (result == f) {
                            result1 = "否";
                            result2 = "否";
                            result3 = "否";
                            result4 = "否";
                            result5 = "否";
                            result7 = "否";
                            result8 = "否";
                            result9 = "否";
                            if (result > 40) {
                                result6 = "是";
                            }
                            else if (result >= 30 && result < 40) {
                                result6 = "倾向是";
                            }
                            else if (result < 30) {
                                result6 = "否";
                            }
                        }
                        else if (result == g) {
                            result1 = "否";
                            result2 = "否";
                            result3 = "否";
                            result4 = "否";
                            result5 = "否";
                            result6 = "否";
                            result8 = "否";
                            result9 = "否";
                            if (result > 40) {
                                result7 = "是";
                            }
                            else if (result >= 30 && result < 40) {
                                result7 = "倾向是";
                            }
                            else if (result < 30) {
                                result7 = "否";
                            }
                        }
                        else if (result == h) {
                            result1 = "否";
                            result2 = "否";
                            result3 = "否";
                            result4 = "否";
                            result5 = "否";
                            result6 = "否";
                            result7 = "否";
                            result9 = "否";
                            if (result > 40) {
                                result8 = "是";
                            }
                            else if (result >= 30 && result < 40) {
                                result8 = "倾向是";
                            }
                            else if (result < 30) {
                                result8 = "否";
                            }
                        }
                    }

             
                    $("#Div1").before('<div><table class="table table-hover" contenteditable="true">' +
                        '<caption style="padding:20px;font-size:18px">' + time + '测量结果：' + data.result + '</caption>' +
'<thead>' +
'<tr>' +
'<th></th>' +
'<th>阳虚质</th>' +
'<th>阴虚质</th>' +
'<th>气虚质</th>' +
'<th>痰湿质</th>' +
'<th>湿热质</th>' +
'<th>血瘀质</th>' +
'<th>特禀质</th>' +
'<th>气郁质</th>' +
'<th>平和质</th>' +
'</tr>' +
'</thead>' +
'<tbody>' +
'<tr>' +
'<td>原始分</td>' +
'<td>' + data.scores_yangxz + '</td>' +
'<td>' + data.scores_yinxz + '</td>' +
'<td>' + data.scores_qixz + '</td>' +
'<td>' + data.scores_tansz + '</td>' +
'<td>' + data.scores_shirz + '</td>' +
'<td>' + data.scores_xueyz + '</td>' +
'<td>' + data.scores_tebz + '</td>' +
'<td>' + data.scores_qiyz + '</td>' +
'<td>' + data.scores_pinghz + '</td>' +
'</tr>' +
'<tr>' +
'<td>转化分</td>' +
'<td>' + a + '</td>' +
'<td>' + b + '</td>' +
'<td>' + c + '</td>' +
'<td>' + d + '</td>' +
'<td>' + e + '</td>' +
'<td>' + f + '</td>' +
'<td>' + g + '</td>' +
'<td>' + h + '</td>' +
'<td>' + j + '</td>' +
'</tr>' +
'<tr>' +
'<td>判定结果</td>' +
'<td>' + result1 + '</td>' +
'<td>' + result2 + '</td>' +
'<td>' + result3 + '</td>' +
'<td>' + result4 + '</td>' +
'<td>' + result5 + '</td>' +
'<td>' + result6 + '</td>' +
'<td>' + result7 + '</td>' +
'<td>' + result8 + '</td>' +
'<td>' + result9 + '</td>' +
'</tr>' +
'</tbody>' +

'</table></div>') 
            }
        })

})

