$(document).ready(function(){
    $(".link1").click(function(){
        $(".whoAmi").addClass("active");
    });
    $(".contact_me_link").click(function(){
        $(".contactMe").addClass("active");
    });
    $(".portfolio_link").click(function(){
        $(".portfolio").addClass("active");
    });
    $(".back-to-main").click(function(){
        $(".whoAmi").removeClass("active");
        $(".contactMe").removeClass("active");
        $(".portfolio").removeClass("active");
    });

    $(".hover3d").hover3d({
        selector: ".hover3d-child"
    });
})