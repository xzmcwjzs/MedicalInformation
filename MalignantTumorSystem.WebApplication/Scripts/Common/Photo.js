$(function () {
    $.post("/Data/ShowPhoto?id_card_number=" + id_card + '&type=' + type, function (data) {
        dat = eval(data);
        if (dat != "") {
            $("#Div1").before('<div id="Div" style="margin:20px;font:700 24px 黑体" align="center">' + resident_name + '全部检查报告照片</div>');
            $.each(dat, function (index, item) {
                var time = '';
                if (item.create_time != "" && item.create_time != null) {
                    var date = new Date(parseInt(item.create_time.replace("/Date(", "").replace(")/", ""), 10));
                    var a1 = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
                    var a2 = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

                    //var a = item.create_time.split('/');
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
                    time = date.getFullYear() + '年' + a1 + '月' + a2 + '日';
                }
                $("#Div1").append('<div align="center"><div style="margin:30px;padding-bottom:20px;font:700 24px 黑体;border-bottom:1px solid #808080;width:80%;" >' + time + '</div><div><img src="../photo/' + item.src + '" style="width:80%;height:500px"><div></div>');
            })
        } else {
            $("#Div1").append('<div class="modal" id="mymodal">' +
    '<div class="modal-dialog">' +
        '<div class="modal-content">' +
            '<div class="modal-header">' +
				'<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>' +
				'<h4 class="modal-title">检查报告照片</h4>' +
			'</div>' +
			'<div class="modal-body">' +
				'<p>没有此人检查报告照片</p>' +
            '</div>' +
			'<div class="modal-footer">' +
				'<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>' +
				'<button type="button" class="btn btn-primary">保存</button>' +
			'</div>' +
		'</div><!-- /.modal-content -->' +
	'</div><!-- /.modal-dialog -->' +
'</div><!-- /.modal -->');

            $("#mymodal").modal("toggle");
            setInterval(function () {
                window.close();
            }, 5000)
        }
    })
})