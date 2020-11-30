$(document).ready(function() {
    $(".container").load("home.html");
    console.log($("ul.navbar-nav li a").attr("data-page"));
});

$("ul.navbar-nav li a").each(function() {
    $(this).on("click", function(){
        console.log($(this).attr("data-page"));
        $(".container").load($(this).attr("data-page")+".html");
    });
});
