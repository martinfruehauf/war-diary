$(document).ready(function() {
    $(".container").load("diary.html");
});

$("ul.navbar-nav li a").each(function() {
    $(this).on("click", function(){
        $(".container").load($(this).attr("data-page")+".html");
    });
});
