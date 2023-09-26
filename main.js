$(document).ready(function() {
    // Responsive menu toggle
    $(".menu-toggle").click(function() {
        $("ul").toggleClass("active");
    });

    // Smooth scrolling for anchor links
    $("ul li a").click(function() {
        $("ul").removeClass("active");
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top
        }, 800);
        return false;
    });

    // Add animations and interactivity as needed
    $("ul li a").hover(function() {
        $(this).css("color", "#ff4500");
    }, function() {
        $(this).css("color", "#ff9900");
    });
});
