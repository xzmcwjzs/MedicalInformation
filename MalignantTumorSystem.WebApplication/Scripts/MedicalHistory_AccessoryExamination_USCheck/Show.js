$(function () {
    $.post("/MedicalHistory_AccessoryExamination_USCheck/Show?id=" + id,
          function (data) {
              dts = eval(data);
              if (dts != "" && dts != null) {
                  $("#name").val(dts[0].names);
                  $("input[name=" + "sex" + "][value=" + dts[0].sex + "]").attr("checked", "checked");
                  $("#id_card_number").val(dts[0].id_card_number);
                  var s = dts[0].id_card_number;
                  if (dts[0].birth_date != "" && dts[0].birth_date != null) {
                      var date = new Date(parseInt(dts[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                      var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                      var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

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
                  if (dts[0].community_code != "") {
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
                  $("#types").val(dts[0].check_project);
                  $("#inspect_doctor").val(dts[0].inspect_doctor);
                  $("#check_doctor").val(dts[0].check_doctor);
                  $("#report_doctor").val(dts[0].report_doctor);
                  $("#position").val(dts[0].check_position);
                  $("#view").val(dts[0].check_view);
                  $("#judge").val(dts[0].check_judge);
                  $("#suggest").val(dts[0].doctor_suggest);

                  if (dts[0].inspect_time != "" && dts[0].inspect_time != null) {
                      var date = new Date(parseInt(dts[0].inspect_time.replace("/Date(", "").replace(")/", ""), 10));
                      var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                      var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                      $("#sjtime").val(date.getFullYear() + '-' + a1 + '-' + a2);
                  }

                  if (dts[0].report_time != "" && dts[0].report_time != null) {
                      var date = new Date(parseInt(dts[0].report_time.replace("/Date(", "").replace(")/", ""), 10));
                      var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                      var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                      $("#bgtime").val(date.getFullYear() + '-' + a1 + '-' + a2);
                  }
              }
          })
})