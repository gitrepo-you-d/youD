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
});