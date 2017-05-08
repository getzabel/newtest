$(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
        $(".logo-mobile").hide();
    }
    else {
        $(".logo-mobile").show();
    }
});