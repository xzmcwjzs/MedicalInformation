var sign = "closed";
function SwitchQryBar() {
    sign = window.parent.frames["bodyFrame"].window.sign;
    if (sign == "opened") {
        $("#qryImg").attr("src", "/images/imgs/arrow_right.gif");
        $("#qryTitle").text("打开查询");
    } else {
        $("#qryImg").attr("src", "/images/imgs/arrow_left.gif");
        $("#qryTitle").text("关闭查询");
    }
    window.parent.frames["bodyFrame"].window.SwitchQryBar();

}
function SwitchQryBarT() {
    sign = window.parent.frames["bodyFrame"].window.sign;
    if (sign == "closed") {
        $("#qryImg").attr("src", "/images/imgs/arrow_right.gif");
        $("#qryTitle").text("打开查询");
    } else {
        $("#qryImg").attr("src", "/images/imgs/arrow_left.gif");
        $("#qryTitle").text("关闭查询");
    }
}