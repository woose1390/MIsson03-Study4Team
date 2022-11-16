$(document).ready(function(){
    $(".faq .question .q").click(function(){
         if($(this).siblings(".a").hasClass("on")){
        $(this).siblings(".a").stop().slideUp();
        $(this).siblings(".a").removeClass("on");
        $(this).css("border","");
       }
       else{
        $(this).siblings(".a").stop().slideDown();
        $(this).siblings(".a").addClass("on");
        $(this).css("border","1px solid black").css("border-radius","3px");
        $(this).parents().siblings().children(".a").removeClass("on");
        $(this).parents().siblings().children(".a").slideUp();
        $(this).parents().siblings().children(".q").css("border","").css("border-radius","");
        console.log($(this));
       }
    });
    })
    
    
    