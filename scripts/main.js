var show = $('#struct a#showall');
var struct = $('div#struct ul li ');
struct.css('display', 'none');
var content = $('div#content');
content.css('border', '1px dashed #ddd');
var flag = 0;
show.click(function () {
    if (flag === 0) {
        struct.fadeIn('slow');
        $(this).text("收起");
        content.css('border-style', 'none');
        flag = 1;
    } else {
        struct.fadeOut('slow');
        $(this).text("详细查看");
        content.css('border', '1px dashed #ddd');
        flag = 0;
    }
});

$(document).ready(function () {
    $('tr:nth-child(odd)').addClass('alt');
});