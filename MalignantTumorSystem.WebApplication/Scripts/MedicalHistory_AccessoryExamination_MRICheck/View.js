$(function () {
    $.post("/MedicalHistory_AccessoryExamination_MRICheck/Show?id=" + id,
          function (data) {
              dts = eval(data);
              if (dts != "" && dts != null) {
                  $("#name").html(dts[0].names);
                  if (dts[0].sex == "01") {
                      $("#sex").html("男");
                  }
                  else if (dts[0].sex == "02") {
                      $("#sex").html("女");
                  }

                  if (dts[0].birth_date != "" && dts[0].birth_date != null) {
                      var date = new Date(parseInt(dts[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                      var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                      var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                      var dates = new Date();
                      var year = dates.getFullYear() - date.getFullYear();
                      if (year > 0) {
                          $("#age").html(year + "岁");
                      } else if (year == 0) {
                          var month = dates.getMonth() - a1;
                          if (month > 0) {
                              $("#age").html(month + "月");
                          } else if (month == 0) {
                              var day = dates.getDay() - a2;
                              if (day > 0) {
                                  $("#age").html(day + "天");
                              }
                          }
                      }
                  }

                  $("#id_card_number").html(dts[0].id_card_number);

                  $.post("/Data/ProvinceName?code=" + dts[0].community_code.substring(0, 2),
                  function (data1) {
                      $.post("/Data/CityName?code=" + dts[0].community_code.substring(0, 4),
                  function (data2) {
                      $.post("/Data/CountyName?code=" + dts[0].community_code.substring(0, 6),
                  function (data3) {
                      $.post("/Data/StreetName?code=" + dts[0].community_code.substring(0, 9),
                 function (data4) {
                     $.post("/Data/CommunityName?code=" + dts[0].community_code.substring(0, 12),
                 function (data5) {
                     $("#address").html(data1 + data2 + data3 + data4 + data5 + dts[0].address);
                 })
                 })
                  })
                  })
                  })

                  $("#phone").html(dts[0].phone);
                  $("#types").html(dts[0].check_project);
                  $("#inspect_doctor").html(dts[0].inspect_doctor);
                  $("#check_doctor").html(dts[0].check_doctor);
                  $("#report_doctor").html(dts[0].report_doctor);
                  $("#position").html(dts[0].check_position);
                  $("#view").html(dts[0].check_view);
                  $("#judge").html(dts[0].check_judge);
                  $("#suggest").html(dts[0].doctor_suggest);

                  if (dts[0].check_img1 != "") {
                      $("#Image1")[0].src = dts[0].check_img1.split(",")[0];
                      //alert($("#Image1")[0].src);
                  } else {
                      $("#a1").hide();
                  }
                  if (dts[0].check_img2 != "") {
                      $("#Image2")[0].src = dts[0].check_img2.split(",")[0];
                  } else {
                      $("#a2").hide();
                  }

                  if (dts[0].check_img3 != "") {
                      $("#Image3")[0].src = dts[0].check_img3.split(",")[0];
                  } else {
                      $("#a3").hide();
                  }

                  if (dts[0].check_img4 != "") {
                      $("#Image4")[0].src =  dts[0].check_img4.split(",")[0];
                  } else {
                      $("#a4").hide();
                  }

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