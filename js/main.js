$(function(){ /*DEBUT DOCUMENT READY*/
	/*===== JQUERY =====*/
    /*Navigation Responsive*/
    $(".animOpacity-In").fadeIn("300");
    $(".navBurger").click(function() {
        $(".navResponsive").fadeIn("slow");
        $(".navBurger").fadeOut("slow");
    });
    $(".navClose").click(function () {
        $(".navResponsive").fadeOut('slow');
        $(".navBurger").fadeIn("slow");
    });

    $("#buttonContact").click(function () {
        $("#dialogContact").fadeIn('slow');
    });

	/*===== TWEENMAX =====*/
    /*Animation page d'accueil*/
    TweenMax.to('#blcTitleindex',1.1,{top: '50%',opacity: 1, delay:0.3,  ease: Power1.easeOut,});/*ANIMATION 1 INDEX*/
});
