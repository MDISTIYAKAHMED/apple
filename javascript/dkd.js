$(document).ready(function () {

    // ! Timer Clock Script
    $("#clock").countdown("2020/10/15", function (event) {
        let $this = $(this).html(event.strftime(""
            // +"<div><span>%W</span><span>Weeks</span></div>"
            + '<div class="day_div cl_div"><span class="ctt cln">%D</span><span class="txt">Days</span></div>'
            + '<div class="hour_div cl_div"><span class="ctt cln">%H</span><span class="txt">Hours</span></div>'
            + '<div class="minute_div cl_div"><span class="ctt cln">%M</span><span class="txt">Minutes</span></div>'
            + '<div class="secund_div cl_div"><span class="ctt">%S</span><span class="txt">Second</span></div>'
        ));
    });

});   //Ready Function