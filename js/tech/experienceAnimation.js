$(window).scroll(function() {
    if ($(window).scrollTop() >  $("#card-experience-right1").position().top - 450) {
        $("#card-experience-right1").addClass('show');
    } else {
        $("#card-experience-right1").removeClass('show');
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() >  $("#card-experience-right2").position().top - 450) {
        $("#card-experience-right2").addClass('show');
    } else {
        $("#card-experience-right2").removeClass('show');
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() >  $("#card-experience-left1").position().top - 450) {
        $("#card-experience-left1").addClass('show');
    } else {
        $("#card-experience-left1").removeClass('show');
    }
});

$(window).scroll(function() {
    if ($(window).scrollTop() >  $("#card-experience-left2").position().top - 450) {
        $("#card-experience-left2").addClass('show');
    } else {
        $("#card-experience-left2").removeClass('show');
    }
});