$(document).ready(function(){
    $(".prideStatus").click(function(){
        $(".prideStatusOptions").toggle();
    });

    $('.leftTabs button').click(function(){
        $('.leftTabs button').css('box-shadow','0px 1px 0px 1px rgba(0, 0, 0, 0.03)');
        $('.leftTabs button').css('background-color','#ffffff');
        $(this).css('box-shadow','rgba(0, 0, 0, 0.5) 0px 2px 3px 0px');
        $(this).css('background-color','#e4e4e4');
    });

    $('.viewCommentsBtn').click(function(){
        $('.comment-section').toggle();
        $('.viewMoreComment').toggle();
        if($('.viewCommentsBtn').html() == "Hide Comments"){
            $('.viewCommentsBtn').html('View Comments');
        }else{
            $('.viewCommentsBtn').html('Hide Comments');
        }
    });

    $('.replyCount').click(function(){
        $('.commentReplySection').toggle();
    });

    $('.mainContainer .primePhotosContainer .prime').on('mouseenter', function(){
        $(this).find('.post-actions').show(100);
    });
    $('.mainContainer .primePhotosContainer .prime').on('mouseleave', function(){
        $(this).find('.post-actions').hide(100);
    });

    $('.shield1 img').click(function(){
        $('.shieldHr').css('margin-left', '0px').css('background', '#ccc');
        $('.shieldImg').css('filter', 'none');
        $('.shield1 .shieldImg').css('filter', 'blur(3px)');
        $('.shieldLock').css('display', 'none');
        $('.shield1 .shieldLock').css('display', 'block');
        $('.primePhotosContainer').hide();
        $('.lockedPrimeContainer').show();
    });
    $('.shield2 img').click(function(){
        $('.shieldHr').css('margin-left', '120px').css('background', '#ccc');
        $('.shieldImg').css('filter', 'none');
        $('.shield2 .shieldImg').css('filter', 'blur(3px)');
        $('.shieldLock').css('display', 'none');
        $('.shield2 .shieldLock').css('display', 'block');
        $('.primePhotosContainer').hide();
        $('.lockedPrimeContainer').show();
    });
    $('.shield3 img').click(function(){
        $('.shieldHr').css('margin-left', '238px').css('background', '#ccc');
        $('.shieldImg').css('filter', 'none');
        $('.shield3 .shieldImg').css('filter', 'blur(3px)');
        $('.shieldLock').css('display', 'none');
        $('.shield3 .shieldLock').css('display', 'block');
        $('.primePhotosContainer').hide();
        $('.lockedPrimeContainer').show();
    });
    $('.shield4 img').click(function(){
        $('.shieldHr').css('margin-left', '357px').css('background', '#ccc');
        $('.shieldImg').css('filter', 'none');
        $('.shield4 .shieldImg').css('filter', 'blur(3px)');
        $('.shieldLock').css('display', 'none');
        $('.shield4 .shieldLock').css('display', 'block');
        $('.primePhotosContainer').hide();
        $('.lockedPrimeContainer').show();
    });
    $('.shield5 img').click(function(){
        $('.shieldHr').css('margin-left', '480px').css('background', '#000');
        $('.shieldImg').css('filter', 'none');
        $('.shieldLock').css('display', 'none');
        $('.shield5 .shieldImg').css('filter', 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))');
        $('.primePhotosContainer').show();
        $('.lockedPrimeContainer').hide();
    });
    $('.shield6 img').click(function(){
        $('.shieldHr').css('margin-left', '604px').css('background', '#7ed322');
        $('.shieldImg').css('filter', 'none');
        $('.shieldLock').css('display', 'none');
        $('.shield6 .shieldImg').css('filter', 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))');
        $('.primePhotosContainer').show();
        $('.lockedPrimeContainer').hide();
    });
    $('.shield7 img').click(function(){
        $('.shieldHr').css('margin-left', '723px').css('background', '#ccc');
        $('.shieldImg').css('filter', 'none');
        $('.shield7 .shieldImg').css('filter', 'blur(3px)');
        $('.shieldLock').css('display', 'none');
        $('.shield7 .shieldLock').css('display', 'block');
        $('.primePhotosContainer').hide();
        $('.lockedPrimeContainer').show();
    });
    $('.shield8 img').click(function(){
        $('.shieldHr').css('margin-left', '839px').css('background', '#ccc');
        $('.shieldImg').css('filter', 'none');
        $('.shield8 .shieldImg').css('filter', 'blur(3px)');
        $('.shieldLock').css('display', 'none');
        $('.shield8 .shieldLock').css('display', 'block');
        $('.primePhotosContainer').hide();
        $('.lockedPrimeContainer').show();
    });
    $('.shield9 img').click(function(){
        $('.shieldHr').css('margin-left', '960px').css('background', '#ccc');
        $('.shieldImg').css('filter', 'none');
        $('.shield9 .shieldImg').css('filter', 'blur(3px)');
        $('.shieldLock').css('display', 'none');
        $('.shield9 .shieldLock').css('display', 'block');
        $('.primePhotosContainer').hide();
        $('.lockedPrimeContainer').show();
    });
});