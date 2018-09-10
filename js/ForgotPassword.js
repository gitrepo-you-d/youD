// $('#emailbtn').click(function(){
//     $("#emailRadio").prop("checked", true);
//     $('.identityBtn').css('box-shadow', 'none');
//     $(this).css('box-shadow', 'none');
// });
// $('#mobilebtn').click(function(){
//     $("#mobileRadio").prop("checked", true);
// });

$(document).ready(function () {
    tick(1);
});

$('.identityBtn').click(function () {
    $(this).children(".identityRadio").prop("checked", true);
    $('.identityBtn').css('box-shadow', 'none');
    $(this).css('box-shadow', 'rgb(151, 151, 151) 0px 0px 10px 1px');
});

function tick(x) {
    for (var i = 1; i <= x; i++) {
        $('.step' + i).css('background-image', 'linear-gradient(to bottom, #b4ec51, #429321)');
        $('.hr' + i).css('background-image', 'linear-gradient(to bottom, #b4ec51, #429321)');
        $('.tick' + i).show();
    }
}

$(".pwdQuestionmark").mouseenter(function () {
    $(".pwdTooltip").css('visibility', 'visible');
});
$(".pwdQuestionmark").mouseout(function () {
    $(".pwdTooltip").css('visibility', 'hidden');
});

$('.pwdEye').mousedown(function () {
    $('.newPassword').attr('type', 'text');
});

$('.pwdEye').mouseup(function () {
    $('.newPassword').attr('type', 'password');
});

$('.confirmPassword').on('keyup', function () {
    if ($('.confirmPassword').val() == $('.newPassword').val()) {
        if ($('.confirmPassword').val().length > 5) {
            $('.confirmPwdTick').show();
            $('.confirmPassword').css('border', '0');
        }
    }
    else {
        $('.confirmPwdTick').hide();
        $('.confirmPassword').css('border', '1px solid red');
    }
})


$('.newPassword').keyup(function () {
    var pwd = $('.newPassword').val();
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

$('#btnSearch').click(function () {
    if ($('.searchEmail').val().length > 0) {
        $('.SearchEmailStep').hide();
        $('.SendOTPStep').show();
        $('.steps').show();
        $('.searchEmail').css('border', '0');
    }
    else {
        $('.searchEmail').css('border', '1px solid red');
    }
});
$('#sendOtpBtn').click(function () {
    if ($(".selectOtpOption .identityRadio:checked").length == 1) {
        $('.SendOTPStep').hide();
        $('.enterOtpStep').show();
        $('.steps').show();
        tick(2);
        $(".selectOtpOption .identityBtn").css('border', '1px solid #979797');
    }
    else {
        $(".selectOtpOption .identityBtn").css('border', '1px solid red');
    }

});
$('#otpBtnCheck').click(function () {

    if ($('#otpInput').val().length == 8) {
        $('.enterOtpStep').hide();
        $('.createPwd').show();
        $('.steps').show();
        $('#otpInput').css('border', '0');
        tick(3);
    }
    else {
        $('#otpInput').css('border', '1px solid red');
    }


});
$('#ctreatePwdBtn').click(function () {
    if ($('.newPassword').val().length > 5 && $('.confirmPassword').val().length > 5) {
        if ($('.newPassword').val() == $('.confirmPassword').val()) {
            $('.createPwd').hide();
            $('.pwdChanged').show();
            $('.steps').show();
            tick(4);
            $('.newPassword').css('border', '0');
            $('.confirmPassword').css('border', '0');
        }
    }
    else {
        $('.newPassword').css('border', '1px solid red');
        $('.confirmPassword').css('border', '1px solid red');
    }

});
$('.finalBtn').click(function () {
    if ($(".stayloginsection .identityRadio:checked").length == 1) {
        alert('Submit');
    }
    else {
        $(".stayloginsection .identityBtn").css('border', '1px solid red');
    }
});

$('.searchEmail').on('keyup', function () {
    if ($('.searchEmail').val().length > 0)
        $('.searchEmail').css('border', '0');
});

$(".selectOtpOption .identityBtn").click(function () {
    if ($(".selectOtpOption .identityRadio:checked").length == 1) {
        $(".selectOtpOption .identityBtn").css('border', '1px solid #979797');
    }
    else {
        $(".selectOtpOption .identityBtn").css('border', '1px solid red');
    }
});

$('.newPassword').on('keyup', function () {
    if ($('.newPassword').val().length > 5) {
        $('.newPassword').css('border', '0');
    }
    else {
        $('.newPassword').css('border', '1px solid red');
    }
});
$('.confirmPassword').on('keyup', function () {
    if ($('.confirmPassword').val().length > 5) {
        if ($('.confirmPassword').val() == $('.newPassword').val()) {
            $('.confirmPassword').css('border', '0');
        }
    }
    else {
        $('.confirmPassword').css('border', '1px solid red');
    }
});

$(".stayloginsection .identityBtn").click(function () {
    if ($(".stayloginsection .identityRadio:checked").length == 1) {
        $(".stayloginsection .identityBtn").css('border', '1px solid #979797');
    }
    else {
        $(".stayloginsection .identityBtn").css('border', '1px solid red');
    }
});

$('#otpInput').on('keyup', function(){
    if($('#otpInput').val().length == 8){
        $('#otpInput').css('border', '0');
    }
    else{
        $('#otpInput').css('border', '1px solid red');
    }

});