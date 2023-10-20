
$(document).ready(function () {
    
    


    $(".menu-btn").on("click", function () {
        $(".small-left-menu").animate({ left: '250px' });
    
    });
    $("li").on("click", function () {
        $("li").removeClass("active1")
        $(this).addClass("active1")
    });
    $(".first").on("click", function () {          
        $("#team4").fadeIn(1000);
        $("#team5").fadeOut();
        $("#team6").fadeOut();
    });
    $(".second").on("click", function () {
        $("#team5").fadeIn(1000);
        $("#team4").fadeOut();
        $("#team6").fadeOut();
    });
    $(".third").on("click", function () {        
        $("#team6").fadeIn(1000);
        $("#team4").fadeOut();
        $("#team5").fadeOut();
    });



    $(".menu-wrapper nav .navbar-wrapper li a").on("click", function () {
        $(" .navbar-wrapper li a").removeClass(".navbar-wrapper li .active")
        $(".navbar-wrapper li a").addClass(" .navbar-wrapper li .active");
    });



    $(".toggle-btn").on("click", function () {

        $(this).toggleClass('sld')
        if($(this).hasClass('sld')){
            $(".layout-panel").animate({ right: '320px' });

        }else{
            $(".layout-panel").animate({ right: '0px' });
        }
        
    });
    


});





