$(function () {
    $("input:radio[name='tumor']").click(function () {
        var value = $("input:radio[name='tumor']:checked").val();
        if (value == "无") {
            $("#istumor").hide();
            $("input:checkbox[name='tumorbreast']").removeAttr("checked");
        } else {
            $("#istumor").show();
        }
    })

    $("input:radio[name='thickening']").click(function () {
        var value = $("input:radio[name='thickening']:checked").val();
        if (value == "无") {
            $("#isthickening").hide();
            $("input:checkbox[name='thickeningbreast']").removeAttr("checked");
        } else {
            $("#isthickening").show();
        }
    })
     
})