$(function () {
    var arr1 = ["您手脚发凉吗？", "您胃脘部、背部或腰膝部怕冷吗？", "您感到怕冷、衣服比别人穿得多吗？", "您比一般人耐受不了寒冷（冬天的寒冷，夏天的冷空调、电扇等）吗？", "您比别人容易患感冒吗？", "您吃（喝）凉的东西会感到不舒服或者怕吃（喝）凉东西吗？", "你受凉或吃（喝）凉的东西后，容易腹泻（拉肚子）吗？"];
    var arr2 = ["您感到手脚心发热吗？", "您感觉身体、脸上发热吗？", "您皮肤或口唇干吗？", "您口唇的颜色比一般人红吗？", "您容易便秘或大便干燥吗？", "您面部两潮红或偏红吗？", "您感到眼睛干涩吗？", "您感到口干咽燥、总想喝水吗？"];
    var arr3 = ["你容易疲乏吗？", "您容易气短（呼吸短促，接不上气吗？", "您容易心慌吗？", "您容易头晕或站起时晕眩吗？", "您比别人容易患感冒吗？", "您喜欢安静、懒得说话吗？", "您说话声音无力吗？", "您活动量稍大就容易出虚汗吗？"];
    var arr4 = ["您感到胸闷或腹部胀满吗？", "您感到身体学生不轻松或不爽快吗？", "您腹部肥满松软吗？", "您有额部油脂分泌多的现象吗？", "您上眼睑比别人肿（仍轻微隆起的现象）吗？", "您嘴里有黏黏的感觉吗？", "您平时痰多，特别是咽喉部总感到有痰堵着吗？", "您舌苔厚腻或有舌苔厚厚的感觉吗？"];
    var arr5 = ["您面部或鼻部有油腻感或者油亮发光吗？", "你容易生痤疮或疮疖吗？", "您感到口苦或嘴里有异味吗？", "您大使黏滞不爽、有解不尽的感觉吗？", "您小便时尿道有发热感、尿色浓（深）吗？", "您带下色黄（白带颜色发黄）吗？（限女性回答）", "您的阴囊部位潮湿吗？"];
    var arr6 = ["您的皮肤在不知不觉中会出现青紫瘀斑（皮下出血）吗？", "您两颧部有细微红丝吗？", "您身体上有哪里疼痛吗？", "您面色晦黯或容易出现褐斑吗？", "您容易有黑眼圈吗？", "您容易忘事（健忘）吗？", "您口唇颜色偏黯吗？"];
    var arr7 = ["您没有感冒时也会打喷嚏吗？", "您没有感冒时也会鼻塞、流鼻涕吗？", "您有因季节变化、温度变化或异味等原因而咳喘的现象吗？", "您容易过敏（对药物、食物、气味、花粉或在季节交替、气候变化时）吗？", "您的皮肤容易起荨麻疹（风团、风疹块、风疙瘩）吗？", "您的因过敏出现过紫癜（紫红色瘀点、瘀斑）吗？", "您的皮肤一抓就红，并出现抓痕吗？"];
    var arr8 = ["您感到闷闷不乐吗？", "您容易精神紧张、焦虑不安吗？", "您多愁善感、感情脆弱吗？", "您容易感到害怕或受到惊吓吗？", "您胁肋部或乳房腹痛吗？", "您无缘无故叹气吗？", "您咽喉部有异物感，且吐之不出、咽之不下吗？"];
    var arr9 = ["您精力充沛吗？", "您容易疲乏吗？", "您说话声音无力吗？", "您感到闷闷不乐吗？", "您比一般 人耐受不了寒冷（冬天的寒冷，夏天的冷空调、电扇）吗？", "您能适应外界自然和社会环境的变化吗？", "您容易失眠吗？", "您容易忘事（健忘）吗？"];
    $.each(arr1, function (i) {
        
        if (i % 2 == 0) {
            $("#yangxz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 1) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 1) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 1) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 1) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 1) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#yangxz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 1) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 1) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 1) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 1) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 1) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }

    })
    $.each(arr2, function (i) {
        if (i % 2 == 0) {
            $("#yinxz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 8) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 8) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 8) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 8) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 8) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#yinxz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 8) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 8) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 8) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 8) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 8) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }

    })
    $.each(arr3, function (i) {

        if (i % 2 == 0) {
            $("#qixz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 16) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 16) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 16) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 16) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 16) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#qixz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 16) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 16) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 16) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 16) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 16) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }

    })
    $.each(arr4, function (i) {

        if (i % 2 == 0) {
            $("#tansz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 24) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 24) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 24) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 24) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 24) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#tansz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 24) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 24) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 24) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 24) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 24) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }

    })
    $.each(arr5, function (i) {

        if (i % 2 == 0) {
            $("#shirz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 32) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 32) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 32) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 32) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 32) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#shirz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 32) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 32) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 32) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 32) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 32) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }
    })
    $.each(arr6, function (i) {

        if (i % 2 == 0) {
            $("#xueyz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 39) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 39) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 39) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 39) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 39) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#xueyz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 39) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 39) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 39) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 39) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 39) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }
    })
    $.each(arr7, function (i) {

        if (i % 2 == 0) {
            $("#tebz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 46) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 46) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 46) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 46) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 46) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#tebz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 46) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 46) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 46) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 46) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 46) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }
    })
    $.each(arr8, function (i) {

        if (i % 2 == 0) {
            $("#qiyz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 53) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 53) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 53) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 53) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 53) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        } else {
            $("#qiyz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 53) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 53) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 53) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 53) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 53) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
        }
    })
    $.each(arr9, function (i) {
        if (i == 0 || i == 5) {


            if (i % 2 == 0) {
                $("#pinghz").before('<tr>' +
                        '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style38" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style41" colspan="4">' +
                            '<input type="radio" name="test' + (i + 60) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 60) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 60) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 60) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 60) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
            } else {
                $("#pinghz").before('<tr>' +
                        '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                        '<td class="auto-style36" colspan="5">' + this +
                        '</td>' +
                        '<td class="auto-style42" colspan="4">' +
                            '<input type="radio" name="test' + (i + 60) + '" value="1" />A' +
                            '<input type="radio" name="test' + (i + 60) + '" value="2" />B' +
                            '<input type="radio" name="test' + (i + 60) + '" value="3" />C' +
                            '<input type="radio" name="test' + (i + 60) + '" value="4" />D' +
                            '<input type="radio" name="test' + (i + 60) + '" value="5" />E' +
                        '</td>' +
                    '</tr>');
            }
        } else {


            if (i % 2 == 0) {
                $("#pinghz").before('<tr>' +
                       '<td class="auto-style122">（' + (i + 1) + '）</td>' +
                       '<td class="auto-style38" colspan="5">' + this +
                       '</td>' +
                       '<td class="auto-style41" colspan="4">' +
                           '<input type="radio" name="test' + (i + 60) + '" value="5" />A' +
                           '<input type="radio" name="test' + (i + 60) + '" value="4" />B' +
                           '<input type="radio" name="test' + (i + 60) + '" value="3" />C' +
                           '<input type="radio" name="test' + (i + 60) + '" value="2" />D' +
                           '<input type="radio" name="test' + (i + 60) + '" value="1" />E' +
                       '</td>' +
                   '</tr>');
            } else {
                $("#pinghz").before('<tr>' +
                       '<td class="auto-style124">（' + (i + 1) + '）</td>' +
                       '<td class="auto-style36" colspan="5">' + this +
                       '</td>' +
                       '<td class="auto-style42" colspan="4">' +
                           '<input type="radio" name="test' + (i + 60) + '" value="5" />A' +
                           '<input type="radio" name="test' + (i + 60) + '" value="4" />B' +
                           '<input type="radio" name="test' + (i + 60) + '" value="3" />C' +
                           '<input type="radio" name="test' + (i + 60) + '" value="2" />D' +
                           '<input type="radio" name="test' + (i + 60) + '" value="1" />E' +
                       '</td>' +
                   '</tr>');
            }
        }

        $("input[name=" + "test37" + "]").change(function () {
            var a = $("input[name=" + "sex" + "]").val();
            if (a == "01") {
                $("input[name='test37']").attr("disabled", true);
                $("input[name='test37']").attr("checked", false);
            }
        })


    })

    //==============================提交页面=======================================
    $("#bt1").click(function () {
         
        if ($("#name").val() == "") {
            alert("姓名不能为空！")
        }
        else if ($("#id_card_number").val() == "") {
            alert("身份证号码不能为空！")
        }
        else if ($("#ddlCommunity").val() == "") {
            alert("常住地址必须填写到社区、村或者居委会！")
        }
        else if ($('input:radio[name="test1"]:checked').val()==null) {
            alert("请选择阳虚质第1题答案");
        }
        else if ($('input:radio[name="test2"]:checked').val()==null) {
            alert("请选择阳虚质第2题答案");
        }
        else if ($('input:radio[name="test3"]:checked').val() == null) {
            alert("请选择阳虚质第3题答案");
        }
        else if ($('input:radio[name="test4"]:checked').val() == null) {
            alert("请选择阳虚质第4题答案");
        }
        else if ($('input:radio[name="test5"]:checked').val() == null) {
            alert("请选择阳虚质第5题答案");
        }
        else if ($('input:radio[name="test6"]:checked').val() == null) {
            alert("请选择阳虚质第6题答案");
        }
        else if ($('input:radio[name="test7"]:checked').val() == null) {
            alert("请选择阳虚质第7题答案");
        }
        else if ($('input:radio[name="test8"]:checked').val() == null) {
            alert("请选择阴虚质第1题答案");
        }
        else if ($('input:radio[name="test9"]:checked').val() == null) {
            alert("请选择阴虚质第2题答案");
        }
        else if ($('input:radio[name="test10"]:checked').val() == null) {
            alert("请选择阴虚质第3题答案");
        }
        else if ($('input:radio[name="test11"]:checked').val() == null) {
            alert("请选择阴虚质第4题答案");
        }
        else if ($('input:radio[name="test12"]:checked').val() == null) {
            alert("请选择阴虚质第5题答案");
        }
        else if ($('input:radio[name="test13"]:checked').val() == null) {
            alert("请选择阴虚质第6题答案");
        }
        else if ($('input:radio[name="test14"]:checked').val() == null) {
            alert("请选择阴虚质第7题答案");
        }
        else if ($('input:radio[name="test15"]:checked').val() == null) {
            alert("请选择阴虚质第8题答案");
        }
        else if ($('input:radio[name="test16"]:checked').val() == null) {
            alert("请选择气虚质第1题答案");
        }
        else if ($('input:radio[name="test17"]:checked').val() == null) {
            alert("请选择气虚质第2题答案");
        }
        else if ($('input:radio[name="test18"]:checked').val() == null) {
            alert("请选择气虚质第3题答案");
        }
        else if ($('input:radio[name="test19"]:checked').val() == null) {
            alert("请选择气虚质第4题答案");
        }
        else if ($('input:radio[name="test20"]:checked').val() == null) {
            alert("请选择气虚质第5题答案");
        }
        else if ($('input:radio[name="test21"]:checked').val() == null) {
            alert("请选择气虚质第6题答案");
        }
        else if ($('input:radio[name="test22"]:checked').val() == null) {
            alert("请选择气虚质第7题答案");
        }
        else if ($('input:radio[name="test23"]:checked').val() == null) {
            alert("请选择气虚质第8题答案");
        }
        else if ($('input:radio[name="test24"]:checked').val() == null) {
            alert("请选择痰湿质第1题答案");
        }
        else if ($('input:radio[name="test25"]:checked').val() == null) {
            alert("请选择痰湿质第2题答案");
        }
        else if ($('input:radio[name="test26"]:checked').val() == null) {
            alert("请选择痰湿质第3题答案");
        }
        else if ($('input:radio[name="test27"]:checked').val() == null) {
            alert("请选择痰湿质第4题答案");
        }
        else if ($('input:radio[name="test28"]:checked').val() == null) {
            alert("请选择痰湿质第5题答案");
        }
        else if ($('input:radio[name="test29"]:checked').val() == null) {
            alert("请选择痰湿质第6题答案");
        }
        else if ($('input:radio[name="test30"]:checked').val() == null) {
            alert("请选择痰湿质第7题答案");
        }
        else if ($('input:radio[name="test31"]:checked').val() == null) {
            alert("请选择痰湿质第8题答案");
        }
        else if ($('input:radio[name="test32"]:checked').val() == null) {
            alert("请选择湿热质第1题答案");
        }
        else if ($('input:radio[name="test33"]:checked').val() == null) {
            alert("请选择湿热质第2题答案");
        }
        else if ($('input:radio[name="test34"]:checked').val() == null) {
            alert("请选择湿热质第3题答案");
        }
        else if ($('input:radio[name="test35"]:checked').val() == null) {
            alert("请选择湿热质第4题答案");
        }
        else if ($('input:radio[name="test36"]:checked').val() == null) {
            alert("请选择湿热质第5题答案");
        }
        else if ($('input:radio[name="test37"]:checked').val() == null && $("#sex").val() == "02") {
            alert("请选择湿热质第6题答案");
        }
        else if ($('input:radio[name="test38"]:checked').val() == null) {
            alert("请选择湿热质第7题答案");
        }
        else if ($('input:radio[name="test39"]:checked').val() == null) {
            alert("请选择血瘀质第1题答案");
        }
        else if ($('input:radio[name="test40"]:checked').val() == null) {
            alert("请选择血瘀质第2题答案");
        }
        else if ($('input:radio[name="test41"]:checked').val() == null) {
            alert("请选择血瘀质第3题答案");
        }
        else if ($('input:radio[name="test42"]:checked').val() == null) {
            alert("请选择血瘀质第4题答案");
        }
        else if ($('input:radio[name="test43"]:checked').val() == null) {
            alert("请选择血瘀质第5题答案");
        }
        else if ($('input:radio[name="test44"]:checked').val() == null) {
            alert("请选择血瘀质第6题答案");
        }
        else if ($('input:radio[name="test45"]:checked').val() == null) {
            alert("请选择血瘀质第7题答案");
        }
        else if ($('input:radio[name="test46"]:checked').val() == null) {
            alert("请选择特禀质第1题答案");
        }
        else if ($('input:radio[name="test47"]:checked').val() == null) {
            alert("请选择特禀质第2题答案");
        }
        else if ($('input:radio[name="test48"]:checked').val() == null) {
            alert("请选择特禀质第3题答案");
        }
        else if ($('input:radio[name="test49"]:checked').val() == null) {
            alert("请选择特禀质第4题答案");
        }
        else if ($('input:radio[name="test50"]:checked').val() == null) {
            alert("请选择特禀质第5题答案");
        }
        else if ($('input:radio[name="test51"]:checked').val() == null) {
            alert("请选择特禀质第6题答案");
        }
        else if ($('input:radio[name="test52"]:checked').val() == null) {
            alert("请选择特禀质第7题答案");
        }
        else if ($('input:radio[name="test53"]:checked').val() == null) {
            alert("请选择气郁质第1题答案");
        }
        else if ($('input:radio[name="test54"]:checked').val() == null) {
            alert("请选择气郁质第2题答案");
        }
        else if ($('input:radio[name="test55"]:checked').val() == null) {
            alert("请选择气郁质第3题答案");
        }
        else if ($('input:radio[name="test56"]:checked').val() == null) {
            alert("请选择气郁质第4题答案");
        }
        else if ($('input:radio[name="test57"]:checked').val() == null) {
            alert("请选择气郁质第5题答案");
        }
        else if ($('input:radio[name="test58"]:checked').val() == null) {
            alert("请选择气郁质第6题答案");
        }
        else if ($('input:radio[name="test59"]:checked').val() == null) {
            alert("请选择气郁质第7题答案");
        }
        else if ($('input:radio[name="test60"]:checked').val() == null) {
            alert("请选择平和质第1题答案");
        }
        else if ($('input:radio[name="test61"]:checked').val() == null) {
            alert("请选择平和质第2题答案");
        }
        else if ($('input:radio[name="test62"]:checked').val() == null) {
            alert("请选择平和质第3题答案");
        }
        else if ($('input:radio[name="test63"]:checked').val() == null) {
            alert("请选择平和质第4题答案");
        }
        else if ($('input:radio[name="test64"]:checked').val() == null) {
            alert("请选择平和质第5题答案");
        }
        else if ($('input:radio[name="test65"]:checked').val() == null) {
            alert("请选择平和质第6题答案");
        }
        else if ($('input:radio[name="test66"]:checked').val() == null) {
            alert("请选择平和质第7题答案");
        }
        else if ($('input:radio[name="test67"]:checked').val() == null) {
            alert("请选择平和质第8题答案");
        }
        else {
            $("#bt1").attr("disabled", "disabled");
            $.post("/BreastCancer/BC_FollowupAndExamination_Constitution/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
                $("#form1").serialize(),
                function (msgs) {
                    var msg = msgs.split(',');
                    alert(msg[0] + ',' + "体质判定结果为：" + msg[2]);
                    window.close();
                })
        }
    })
})

//=============================================================================

