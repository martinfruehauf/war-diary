$(document).ready(function() {
    $(".container").load("home.html");
});

$("ul.navbar-nav li a").each(function() {
    $(this).on("click", function(){
        $(".container").load($(this).attr("data-page")+".html");
    });
});
