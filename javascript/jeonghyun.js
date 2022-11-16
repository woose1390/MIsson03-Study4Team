$(document).ready(function(){

    // $(".faq > ul").click(function(){
    //     $(this).children.toggleClass("on");
    // });
    // console.log($(".faq > ul").children(".a").hasClass("on"));
    
    $(".faq .question .q").click(function(){
        // console.log($(this));
         if($(this).siblings(".a").hasClass("on")){
        $(this).siblings(".a").stop().slideUp();
        $(this).siblings(".a").removeClass("on");
        console.log($(this.sibling));
       }
       else{
        $(this).siblings(".a").stop().slideDown();
        $(this).siblings(".a").addClass("on");
        console.log($(this));
       }
      
        // console.log( $(".faq > .q").children("li").hasClass("on"))
    });
    })
    
    
    