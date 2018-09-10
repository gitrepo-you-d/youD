

$(window).scroll(function () {
    var hT = $('.slide2-container').offset().top,
        hH = $('.slide2-container').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    var s2reach = wS + (hT - wH);
    // console.log(wS + " -> " + s2reach);
    if (s2reach >= -150) {
        //display
        //console.log("Display!");
        $('.header-text').fadeIn();
        $('.username-container').fadeOut();
        $('.password-container').fadeOut();
        $('header').css('background-color', '#000');
    }
    else {
        $('.header-text').fadeOut();
        $('.username-container').fadeIn();
        $('.password-container').fadeIn();
        $('header').css('background-color', 'transparent');
    }


    // var lastScrollTop = 0;
    // var st = $(this).scrollTop();
    // if (st > lastScrollTop) {
    //     debugger
    //     if (974 > st > 0) {
    //         $([document.documentElement, document.body]).animate({
    //             scrollTop: 974
    //         }, 2000);
    //     }
    //     else if (st > 974){
    //         $([document.documentElement, document.body]).animate({
    //             scrollTop: 1106
    //         }, 2000);
    //     }
    // } else {
    //     if (1106 > st) {
    //         $([document.documentElement, document.body]).animate({
    //             scrollTop: 974
    //         }, 2000);
    //     }
    //     else if (st < 974){
    //         $([document.documentElement, document.body]).animate({
    //             scrollTop: 0
    //         }, 2000);
    //     }
    // }
    // lastScrollTop = st;

    // if(974 > wS > 0){
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $(".slide2-container").offset().top
    //     }, 2000);
    // }
    // else if (1106 > wS > 974) {
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $("footer").offset().top
    //     }, 2000);
    // }
    // else if (wS < 974){
    //     $([document.documentElement, document.body]).animate({
    //         scrollTop: $(".slide1-container").offset().top
    //     }, 2000);
    // }
});

$(document).ready(function () {
    $('#sld1left').addClass('slideIn');
    $('#sld1right').addClass('slideIn');
    $('#sld2left').css('opacity', '0');
    $('#sld3left').css('opacity', '0');
    $('#sld4left').css('opacity', '0');

    var i = 1;
    $('#sld2right').css('opacity', '0');
    $('#sld3right').css('opacity', '0');
    $('#sld4right').css('opacity', '0');

    setInterval(function () {

        $("#sld" + i + "left").removeClass('slideIn').addClass('slideOut');
        $("#sld" + i + "right").removeClass('slideIn').addClass('slideOut');

        i = i + 1;
        $("#sld" + i + "left").removeClass('slideOut').addClass('slideIn');
        $("#sld" + i + "right").removeClass('slideOut').addClass('slideIn');

        if (i > 4) {
            i = 1;
            $("#sld" + i + "left").removeClass('slideOut').addClass('slideIn');
            $("#sld" + i + "right").removeClass('slideOut').addClass('slideIn');
        }

    }, 5000);

    $('.leftback').on('click', function () {
        $('.left-form').hide();
        $('.left-hero').show();
    });
    $('.rightback').on('click', function () {
        $('.right-form').hide();
        $('.right-hero').show();
    });

    $('.leftSignUp').click(function () {
        $('.left-hero').hide();
        $('.left-form').show();
    });
    $('.rightSignUp').click(function () {
        $('.right-hero').hide();
        $('.right-form').show();
    });

    $(".infoUsername").mouseenter(function () {
        $(".usernameTooltip").css('visibility', 'visible');
    });
    $(".infoUsername").mouseout(function () {
        $(".usernameTooltip").css('visibility', 'hidden');
    });
    $(".infoPassword").mouseenter(function () {
        $(".passwordTooltip").css('visibility', 'visible');
    });
    $(".infoPassword").mouseout(function () {
        $(".passwordTooltip").css('visibility', 'hidden');
    });
    $(".infoDob").mouseenter(function () {
        $(".dobTooltip").css('visibility', 'visible');
    });
    $(".infoDob").mouseout(function () {
        $(".dobTooltip").css('visibility', 'hidden');
    });
    /* Right Section */
    $(".infoUsernameright").mouseenter(function () {
        $(".usernameTooltipright").css('visibility', 'visible');
    });
    $(".infoUsernameright").mouseout(function () {
        $(".usernameTooltipright").css('visibility', 'hidden');
    });
    $(".infoPasswordright").mouseenter(function () {
        $(".passwordTooltipright").css('visibility', 'visible');
    });
    $(".infoPasswordright").mouseout(function () {
        $(".passwordTooltipright").css('visibility', 'hidden');
    });
    $(".infoDobright").mouseenter(function () {
        $(".dobTooltipright").css('visibility', 'visible');
    });
    $(".infoDobright").mouseout(function () {
        $(".dobTooltipright").css('visibility', 'hidden');
    });


});

// Left OTP Scripts

$('.otpinputs input').bind('keypress', function (event) {
    if (this.value.length == 1) { return false; }
    $(this).next().focus();

    $('.otpinputs input').keyup(function (e) {
        if (e.keyCode == 8) {
            $(this).prev().focus();
        }
    })
});
$('.otpinputs input').bind('click', function (event) {
    this.value = "";
});


var otpsubmit = false;
$('.otpinputs input').on('change paste keyup', function () {
    $('.otpincorrectmsg').show();
    checkAllOtpSubmit();
});

function checkAllOtpSubmit() {
    var otpArray = new Array();
    var finalOtp = "";
    for (i = 1; i <= 8; i++) {
        otpArray.push($("#otp" + i).val());
        finalOtp = finalOtp + $("#otp" + i).val();
    }
    if (finalOtp.length == 8 && finalOtp == '12345678') {
        $('.otpincorrectmsg p').html('Success!');
        $('.otpincorrectmsg p').css('color', 'blue');
        console.log("Left OTP = " + finalOtp);
        $('.otpinputs input').prop('disabled', true);
        $('.otpinputs input').css('border-color', '#d6d6d6');
    }
    else {
        $('.otpinputs input').css('border-color', 'red');
    }
}


// Right OTP Scripts

$('.otpinputsright input').bind('keypress', function (event) {
    if (this.value.length == 1) { return false; }
    $(this).next().focus();

    $('.otpinputsright input').keyup(function (e) {
        if (e.keyCode == 8) {
            $(this).prev().focus();
        }
    })
});
$('.otpinputsright input').bind('click', function (event) {
    this.value = "";
});


var otpsubmit = false;
$('.otpinputsright input').on('change paste keyup', function () {
    $('.otpincorrectmsgright').show();
    checkAllOtpSubmitRight();
});

function checkAllOtpSubmitRight() {
    var otpArrayRight = new Array();
    var finalOtpr = "";
    for (i = 1; i <= 8; i++) {
        otpArrayRight.push($("#otpr" + i).val());
        finalOtpr = finalOtpr + $("#otpr" + i).val();
    }
    if (finalOtpr.length == 8 && finalOtpr == '12345678') {
        $('.otpincorrectmsgright p').html('Success!');
        $('.otpincorrectmsgright p').css('color', 'blue');
        console.log("Right OTP = " + finalOtpr);
        $('.otpinputsright input').prop('disabled', true);
        $('.otpinputsright input').css('border-color', '#d6d6d6');
    }
    else {
        $('.otpinputsright input').css('border-color', 'red');
    }
}




$("#signup").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".slide2-container").offset().top
    }, 2000);
});

$('.sendotpbtn').click(function () {
    $(".otpsection").show();
    $(".sendotpbtn").html('Resend OTP');
    $(".sendotpbtn").hide();
    $('.termsAndConditionsContainer').hide();
    startOtpTimer(30);
});

function startOtpTimer(x) {
    i = 0;
    var timer = setInterval(function() {   
        if(x < 10){     
            $('.otpTimer').html('00:0' + x); 
        }else{
            $('.otpTimer').html('00:' + x); 
        }
        x--;
        if(x < 0){
            clearInterval(timer);
            $('.sendotpbtn').show();
        }
    }, 1000);
}

$('.sendotpbtnright').click(function () {
    $(".otpsectionright").show();
    $(".sendotpbtnright").html('Resend OTP');
    $(".sendotpbtnright").hide();
    $('.termsAndConditionsContainerright').hide();
    startOtpTimerRight(30);
});

function startOtpTimerRight(x) {
    i = 0;
    var timer = setInterval(function() {    
        if(x < 10){
            $('.otpTimerRight').html('00:0' + x); 
        }else{    
            $('.otpTimerRight').html('00:' + x); 
        }
        x--;
        if(x < 0){
            clearInterval(timer);
            $('.sendotpbtnright').show();
        }
    }, 1000);
}

$('.password').keyup(function () {
    var pwd = $('.password').val();
    var strength = 0

    if (pwd.length > 5) {
        strength += 1;
    }

    if (pwd.match(/([a-zA-Z])/) && pwd.match(/([0-9])/)) {
        strength += 1;
    }

    if (pwd.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1
    }
    if (strength == 0) {
        $('.password-indicator div:nth-child(1)').css('background-color', '#fff');
        $('.password-indicator div:nth-child(2)').css('background-color', '#fff');
        $('.password-indicator div:nth-child(3)').css('background-color', '#fff');
    }
    if (strength == 1) {
        $('.password-indicator div:nth-child(1)').css('background-color', '#e16e6e');
        $('.password-indicator div:nth-child(2)').css('background-color', '#fff');
        $('.password-indicator div:nth-child(3)').css('background-color', '#fff');
    }
    if (strength == 2) {
        $('.password-indicator div:nth-child(1)').css('background-color', '#e16e6e');
        $('.password-indicator div:nth-child(2)').css('background-color', '#fcbf7c');
        $('.password-indicator div:nth-child(3)').css('background-color', '#fff');
    }
    if (strength == 3) {
        $('.password-indicator div:nth-child(1)').css('background-color', '#e16e6e');
        $('.password-indicator div:nth-child(2)').css('background-color', '#fcbf7c');
        $('.password-indicator div:nth-child(3)').css('background-color', '#97ff5f');
    }

    if (pwd.length < 6) {
        $('.password-status').show();
    }
    else {
        $('.password-status').hide();
    }
});

$('.passwordright').keyup(function () {
    var pwd = $('.passwordright').val();
    var strength = 0

    if (pwd.length > 5) {
        strength += 1;
    }

    if (pwd.match(/([a-zA-Z])/) && pwd.match(/([0-9])/)) {
        strength += 1;
    }

    if (pwd.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1
    }
    if (strength == 0) {
        $('.password-indicator-right div:nth-child(1)').css('background-color', '#fff');
        $('.password-indicator-right div:nth-child(2)').css('background-color', '#fff');
        $('.password-indicator-right div:nth-child(3)').css('background-color', '#fff');
    }
    if (strength == 1) {
        $('.password-indicator-right div:nth-child(1)').css('background-color', '#e16e6e');
        $('.password-indicator-right div:nth-child(2)').css('background-color', '#fff');
        $('.password-indicator-right div:nth-child(3)').css('background-color', '#fff');
    }
    if (strength == 2) {
        $('.password-indicator-right div:nth-child(1)').css('background-color', '#e16e6e');
        $('.password-indicator-right div:nth-child(2)').css('background-color', '#fcbf7c');
        $('.password-indicator-right div:nth-child(3)').css('background-color', '#fff');
    }
    if (strength == 3) {
        $('.password-indicator-right div:nth-child(1)').css('background-color', '#e16e6e');
        $('.password-indicator-right div:nth-child(2)').css('background-color', '#fcbf7c');
        $('.password-indicator-right div:nth-child(3)').css('background-color', '#97ff5f');
    }

    if (pwd.length < 6) {
        $('.password-status-right').show();
    }
    else {
        $('.password-status-right').hide();
    }

});