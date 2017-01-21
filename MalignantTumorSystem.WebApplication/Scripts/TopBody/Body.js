var sign = "closed";
function SwitchQryBar() {
    if ($("#switchPoint").text() == "opened") {
        $("#switchPoint").text("closed");
        $("#BoardTitle").css("display", "none");
        $("#direction").html("打<br />开<br />查<br />询");
        sign = "closed";
    }
    else if ($("#switchPoint").text() == "closed") {
        $("#switchPoint").text("opened");
        $("#BoardTitle").css("display", "block");
        $("#direction").html("关<br />闭<br />查<br />询");
        sign = "opened";
    }
    window.parent.frames["topFrame"].window.SwitchQryBarT();
}
function Load() {
    document.getElementById("loadDiv").style.display = "none";
    document.getElementById("frmright").style.display = "";
}