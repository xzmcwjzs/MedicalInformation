$(function () {
    if (no == "1") {
        $("#last").hide();
    } else if (no == "2") {
        $("#cd").hide();
    }


    var arr1 = ["白开水", "矿泉水", "纯净水", "绿茶", "红茶", "咖啡", "牛奶", "酸奶", "豆奶", "可乐", "雪碧", "王老吉"];
    var arr2 = ["西瓜", "梨", "大枣", "桃", "橘", "金橘", "葡萄", "苹果", "香蕉", "荔枝", "枇杷", "核桃", "桂圆", "芒果"];
    var arr3 = ["白菜", "圆白菜", "扁豆", "白萝卜", "胡萝卜", "芹菜", "韭菜", "木耳", "冬瓜", "洋葱", "生菜", "卷心菜", "菜花", "黄瓜",
                "苦瓜", "番茄", "西葫芦", "魔芋", "莴笋", "芦笋", "银耳", "黑木耳", "草菇", "金针菇", "猴头菇", "香椿", "豆芽"];
    var arr4 = ["玉米", "小米", "黑米", "黄豆", "绿豆", "黑豆", "红豆", "豇豆", "花生", "芝麻", "大麦", "薏苡仁", "燕麦", "荞麦"];
    var arr5 = ["带鱼", "鳗鱼", "黄鱼", "昌扁鱼", "三文鱼", "金枪鱼", "牡蛎", "海参", "蛤蜊", "海带", "紫菜", "海虾", "河虾", "鲫鱼", "鲢鱼", "鲤鱼", "青鱼", "黄鳝", "甲鱼"];
    var arr6 = ["猪肉", "猪肝", "牛肉", "羊肉", "鸡蛋", "雀肉", "鹿肉", "兔肉", "鹌鹑", "鸡肉", "鸭肉", "驴肉"];
    var arr7 = ["人参", "西洋参", "枸杞", "黄芪", "鱼油", "阿胶", "燕窝"];
    var arr8 = ["生姜", "大蒜"];
    var arr9 = ["酸", "甜", "苦", "辛辣", "咸"];
    var arr10 = ["橄榄油", "葵花油", "菜籽油", "芝麻油", "动物油", "低钠盐", "无碘盐", "加碘盐", "醋", "酱"];
    var arr11 = ["5点之前", "5-6点", "6-7点", "7-8点", "8-9点", "9点之后"];
    var arr12 = ["小于20分钟", "20-40分钟", "40-60分钟", "1-1.5小时", "大于1.5小时", "不休息"];
    var arr13 = ["21:30之前", "21:30-22点", "22点-22:30", "22:30-23点", "23点-24点", "24点以后"];
    $.each(arr1, function (i) {
        if (i > 0 && i % 10 == 0) {
            $("#td1").append('<br/><br/><span style="clear:both;width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="drink" value=' + (i + 1) + ' />' + this + '</span>');
        } else {
            $("#td1").append('<span style="width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="drink" value=' + (i + 1) + ' />' + this + '</span>');
        }

        if (i == arr1.length - 1) {
            $("#td1").append('<span style="float:left;display:block;line-height:30px">其他<input type="text" id="other" name="other" style="width: 50px;" /></span>');
        }
    })
    $.each(arr2, function (i) {
        if (i > 0 && i % 10 == 0) {
            $("#td2").append('<br/><br/><span style="clear:both;width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="melon_fruit" value=' + (i + 1) + ' />' + this + '</span>');
        } else {
            $("#td2").append('<span style="width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="melon_fruit" value=' + (i + 1) + ' />' + this + '</span>');
        }
    })
    $.each(arr3, function (i) {
        if (i > 0 && i % 10 == 0) {
            $("#td3").append('<br/><br/><span style="clear:both;width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="vegetables" value=' + (i + 1) + ' />' + this + '</span>');
        } else {
            $("#td3").append('<span style="width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="vegetables" value=' + (i + 1) + ' />' + this + '</span>');
        }
    })
    $.each(arr4, function (i) {
        if (i > 0 && i % 10 == 0) {
            $("#td4").append('<br/><br/><span style="clear:both;width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="grain" value=' + (i + 1) + ' />' + this + '</span>');
        } else {
            $("#td4").append('<span style="width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="grain" value=' + (i + 1) + ' />' + this + '</span>');
        }

        if (i == arr4.length - 1) {
            $("#td4").append('<span style="float:left;display:block;line-height:30px">其他<input type="text" id="other_grain" name="other_grain" style="width: 50px;" /></span>');
        }
    })

    $.each(arr5, function (i) {
        if (i > 0 && i % 10 == 0) {
            $("#td5").append('<br/><br/><span style="clear:both;width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="aquatic" value=' + (i + 1) + ' />' + this + '</span>');
        } else {
            $("#td5").append('<span style="width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="aquatic" value=' + (i + 1) + ' />' + this + '</span>');
        }

        if (i == arr5.length - 1) {
            $("#td5").append('<span style="float:left;display:block;line-height:30px">其他<input type="text" id="other_grain" name="other_aquatic" style="width: 50px;" /></span>');
        }
    })

    $.each(arr6, function (i) {
        if (i > 0 && i % 10 == 0) {
            $("#td6").append('<br/><br/><span style="clear:both;width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="meat" value=' + (i + 1) + ' />' + this + '</span>');
        } else {
            $("#td6").append('<span style="width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="meat" value=' + (i + 1) + ' />' + this + '</span>');
        }

        if (i == arr6.length - 1) {
            $("#td6").append('<span style="float:left;display:block;line-height:30px">其他<input type="text" id="other_grain" name="other_meat" style="width: 50px;" /></span>');
        }
    })

    $.each(arr7, function (i) {
        if (i > 0 && i % 10 == 0) {
            $("#td7").append('<br/><br/><span style="clear:both;width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="health_products" value=' + (i + 1) + ' />' + this + '</span>');
        } else {
            $("#td7").append('<span style="width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="health_products" value=' + (i + 1) + ' />' + this + '</span>');
        }

        if (i == arr7.length - 1) {
            $("#td7").append('<span style="float:left;display:block;line-height:30px">其他<input type="text" id="other_health_products" name="other_health_products" style="width: 50px;" /></span>');
        }
    })

    $.each(arr8, function (i) {
        if (i > 0 && i % 10 == 0) {
            $("#td8").append('<br/><br/><span style="clear:both;width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="other_diet" value=' + (i + 1) + ' />' + this + '</span>');
        } else {
            $("#td8").append('<span style="width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="other_diet" value=' + (i + 1) + ' />' + this + '</span>');
        }

        if (i == arr8.length - 1) {
            $("#td8").append('<span style="float:left;display:block;line-height:30px">其他<input type="text" id="other_diet_other" name="other_diet_other" style="width: 50px;" /></span>');
        }
    })

    $.each(arr9, function (i) {
        if (i > 0 && i % 10 == 0) {
            $("#td9").append('<br/><br/><span style="clear:both;width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="taste" value=' + (i + 1) + ' />' + this + '</span>');
        } else {
            $("#td9").append('<span style="width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="taste" value=' + (i + 1) + ' />' + this + '</span>');
        }

        if (i == arr9.length - 1) {
            $("#td9").append('<span style="float:left;display:block;line-height:30px">其他<input type="text" id="taste_other" name="taste_other" style="width: 50px;" /></span>');
        }
    })


    $.each(arr10, function (i) {
        if (i > 0 && i % 10 == 0) {
            $("#td10").append('<br/><br/><span style="clear:both;width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="oil_salt" value=' + (i + 1) + ' />' + this + '</span>');
        } else {
            $("#td10").append('<span style="width:6em;float:left;display:block;line-height:30px"><input type="checkbox" name="oil_salt" value=' + (i + 1) + ' />' + this + '</span>');
        }

        if (i == arr10.length - 1) {
            $("#td10").append('<span style="float:left;display:block;line-height:30px">其他<input type="text" id="oil_salt_other" name="oil_salt_other" style="width: 50px;" /></span>');
        }
    })


    $.each(arr11, function (i) {
        $("#td11").append('<span style="width:10em;float:left;display:block;line-height:30px"><input type="radio" name="morning" value=' + (i + 1) + ' />' + this + '</span>');
    })
    $.each(arr12, function (i) {
        $("#td12").append('<span style="width:10em;float:left;display:block;line-height:30px"><input type="radio" name="noon" value=' + (i + 1) + ' />' + this + '</span>');
    })
    $.each(arr13, function (i) {
        $("#td13").append('<span style="width:10em;float:left;display:block;line-height:30px"><input type="radio" name="night" value=' + (i + 1) + ' />' + this + '</span>');
    })
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
    else if ($("#phone").val() == "") {
        alert("手机号码不能为空！")
    }
    else if ($("#ddlCommunity").val() == "") {
        alert("常住地址必须填写到社区、村或者居委会！")
    }
    else if ($("input[name='night']:checked").val() == "") {
        alert("睡觉时间不能为空！")
    }
    else if ($("input[name='food']:checked").val() == "") {
        alert("主食不能为空！")
    }
    else {
        $("#bt1").attr("disabled", "disabled");
        $.post("/Lifestyle_EatingHabits/AddAndUpdate?id=" + id + "&community_code=" + community_code + "&worker=" + worker,
            $("#form1").serialize(),
            function (msgs) {
                var msg = msgs.split(',');
                alert(msg[0]);
                //window.location.href = 'View.aspx?id=' + msg[1];
                window.close();
            })
    }
}
//=============================================================================

