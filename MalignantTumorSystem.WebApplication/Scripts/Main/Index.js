/// <reference path="../jquery-1.8.2.min.js" />
$(function () {
    //加载dom是判断  是否会有滚动条  有的话  隐藏内容  并显示 更多链接
    var scrollHeight = $("#ScrollHeight")[0].scrollHeight;
    if (scrollHeight > $("#ScrollHeight").height()) {
        $("#ScrollHeight").css({
            "overflow-y":"hidden"
        });
        $("#more").css({
            "display": "block"
        });
    }
    //点击更多  链接后  出现滚动条 加载 其他癌症选项
    $("#more").click(function () {
        $("#ScrollHeight").css({
            "overflow-y": "auto"
        });
        $("#more").fadeOut(1000);
    })
})
 