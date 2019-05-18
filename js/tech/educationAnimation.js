$(window).scroll(function() {
    if ($(window).scrollTop() > $("#education-right1").position().top -550) {
        $("#education-right1").addClass('show');
    } else {
        $("#education-right1").removeClass('show');
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > $("#education-right2").position().top -550) {
        $("#education-right2").addClass('show');
    } else {
        $("#education-right2").removeClass('show');
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() > $("#education-right3").position().top -550) {
        $("#education-right3").addClass('show');
    } else {
        $("#education-right3").removeClass('show');
    }
});