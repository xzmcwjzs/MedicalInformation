$(function () {
    //====================================================================修改=========================================================================
    $.post("/Lifestyle_EatingHabits/Show?id=" + id,
              function (data) {
                  dat = eval(data);
                  if (dat != "" && dat != null) {
                      $("#name").val(dat[0].name);
                      $("input[name=" + "sex" + "][value=" + dat[0].sex + "]").attr("checked", "checked");
                      $("#age").val(dat[0].age);
                      $("#id_card_number").val(dat[0].id_card_number);
                      //$("#id_card_number").attr("readonly", "readonly");
                      var s = dat[0].id_card_number;
                      if (dat[0].birth_date != "" && dat[0].birth_date != null) {
                          //var a = dat[0].birth_date.split('/');
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
                          var date = new Date(parseInt(dat[0].birth_date.replace("/Date(", "").replace(")/", ""), 10));
                          var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                          var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
                          $("#birth_date").val(date.getFullYear() + '-' + a1 + '-' + a2);
                          var dates = new Date();
                          var year = dates.getFullYear() - date.getFullYear();
                          if (year > 0) {
                              $("#age").val(year + "岁");
                          }
                          else if (year == 0) {
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
                      if (dat[0].community_code != "" && dat[0].community_code != null) {
                          var code1 = dat[0].community_code;
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
                          $("#perment_community_address").val(dat[0].permanent_address);
                      }

                      $("#zipCode").val(dat[0].post_code);
                      $("#resident_id").val(dat[0].resident_id);

                      $("input[name=" + "morning" + "][value=" + dat[0].living_getup + "]").attr("checked", "checked");
                      $("input[name=" + "noon" + "][value=" + dat[0].living_noonbreak + "]").attr("checked", "checked");
                      $("input[name=" + "night" + "][value=" + dat[0].living_sleep + "]").attr("checked", "checked");

                      $("input[name=" + "law" + "][value=" + dat[0].diet_three_meals + "]").attr("checked", "checked");
                      $("input[name=" + "food" + "][value=" + dat[0].diet_staple_food + "]").attr("checked", "checked");

                      var s = dat[0].diet_eating;
                      var checkboxs = s.split(',');
                      var box = document.getElementsByName("taste");
                      for (var i = 0; i < box.length; i++) {
                          if (box[i].type == "checkbox") {
                              for (var j = 0; j < checkboxs.length; j++) {
                                  if (box[i].value == checkboxs[j]) {
                                      box[i].checked = true;
                                  }
                              }
                          }
                      }

                      $("#taste_other").val(dat[0].diet_eating_other);


                      var s1 = dat[0].diet_oil_salt;
                      var checkboxs1 = s1.split(',');
                      var box1 = document.getElementsByName("oil_salt");
                      for (var i = 0; i < box1.length; i++) {
                          if (box1[i].type == "checkbox") {
                              for (var j = 0; j < checkboxs1.length; j++) {
                                  if (box1[i].value == checkboxs1[j]) {
                                      box1[i].checked = true;
                                  }
                              }
                          }
                      }
                      $("#oil_salt_other").val(dat[0].diet_oil_salt_other);


                      $("input[name=" + "salt_eat" + "][value=" + dat[0].diet_salt_amount + "]").attr("checked", "checked");
                      $("input[name=" + "oil_eat" + "][value=" + dat[0].diet_oil_amount + "]").attr("checked", "checked");
                      $("input[name=" + "sugar_eat" + "][value=" + dat[0].diet_sugar_amount + "]").attr("checked", "checked");
                      $("input[name=" + "water" + "][value=" + dat[0].diet_drinkwater_morning + "]").attr("checked", "checked");
                      $("input[name=" + "amount" + "][value=" + dat[0].diet_drink_amount + "]").attr("checked", "checked");
                      $("input[name=" + "time" + "][value=" + dat[0].diet_drink_interval + "]").attr("checked", "checked");

                      var s2 = dat[0].diet_drinks;
                      var checkboxs2 = s2.split(',');
                      var box2 = document.getElementsByName("drink");
                      for (var i = 0; i < box2.length; i++) {
                          if (box2[i].type == "checkbox") {
                              for (var j = 0; j < checkboxs2.length; j++) {
                                  if (box2[i].value == checkboxs2[j]) {
                                      box2[i].checked = true;
                                  }
                              }
                          }
                      }
                      $("#other").val(dat[0].diet_drinks_other);

                      var s3 = dat[0].diet_fruits;
                      var checkboxs3 = s3.split(',');
                      var box3 = document.getElementsByName("melon_fruit");
                      for (var i = 0; i < box3.length; i++) {
                          if (box3[i].type == "checkbox") {
                              for (var j = 0; j < checkboxs3.length; j++) {
                                  if (box3[i].value == checkboxs3[j]) {
                                      box3[i].checked = true;
                                  }
                              }
                          }
                      }


                      var s4 = dat[0].diet_vegetables;
                      var checkboxs4 = s4.split(',');
                      var box4 = document.getElementsByName("vegetables");
                      for (var i = 0; i < box4.length; i++) {
                          if (box4[i].type == "checkbox") {
                              for (var j = 0; j < checkboxs4.length; j++) {
                                  if (box4[i].value == checkboxs4[j]) {
                                      box4[i].checked = true;
                                  }
                              }
                          }
                      }


                      var s5 = dat[0].diet_grain;
                      var checkboxs5 = s5.split(',');
                      var box5 = document.getElementsByName("grain");
                      for (var i = 0; i < box5.length; i++) {
                          if (box5[i].type == "checkbox") {
                              for (var j = 0; j < checkboxs5.length; j++) {
                                  if (box5[i].value == checkboxs5[j]) {
                                      box5[i].checked = true;
                                  }
                              }
                          }
                      }
                      $("#other_grain").val(dat[0].diet_grain_other);

                      var s6 = dat[0].diet_aquatic_products;
                      var checkboxs6 = s6.split(',');
                      var box6 = document.getElementsByName("aquatic");
                      for (var i = 0; i < box6.length; i++) {
                          if (box6[i].type == "checkbox") {
                              for (var j = 0; j < checkboxs6.length; j++) {
                                  if (box6[i].value == checkboxs6[j]) {
                                      box6[i].checked = true;
                                  }
                              }
                          }
                      }
                      $("#other_aquatic").val(dat[0].diet_aquatic_products_other);



                      var s7 = dat[0].diet_livestock_poultry_eggs;
                      var checkboxs7 = s7.split(',');
                      var box7 = document.getElementsByName("meat");
                      for (var i = 0; i < box7.length; i++) {
                          if (box7[i].type == "checkbox") {
                              for (var j = 0; j < checkboxs7.length; j++) {
                                  if (box7[i].value == checkboxs7[j]) {
                                      box7[i].checked = true;
                                  }
                              }
                          }
                      }
                      $("#other_meat").val(dat[0].diet_livestock_poultry_eggs_other);



                      var s8 = dat[0].diet_health_products;
                      var checkboxs8 = s8.split(',');
                      var box8 = document.getElementsByName("health_products");
                      for (var i = 0; i < box8.length; i++) {
                          if (box8[i].type == "checkbox") {
                              for (var j = 0; j < checkboxs8.length; j++) {
                                  if (box8[i].value == checkboxs8[j]) {
                                      box8[i].checked = true;
                                  }
                              }
                          }
                      }
                      $("#other_health_products").val(dat[0].diet_health_products_other);


                      var s9 = dat[0].diet_hobby;
                      var checkboxs9 = s9.split(',');
                      var box9 = document.getElementsByName("other_diet");
                      for (var i = 0; i < box9.length; i++) {
                          if (box9[i].type == "checkbox") {
                              for (var j = 0; j < checkboxs9.length; j++) {
                                  if (box9[i].value == checkboxs9[j]) {
                                      box9[i].checked = true;
                                  }
                              }
                          }
                      }
                      $("#other_diet_other").val(dat[0].diet_hobby_other);

                  }
              })
})