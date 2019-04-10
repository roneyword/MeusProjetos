// SCROLL SUAVE
$('.navbar a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 60
    }, 900);
});

// DEIXANDO O NAVBAR TRANSPARENTE
var integra = $("#destaque").offset().top - 60;

    $(window).scroll(function () {
      if ($(document).scrollTop() >= integra) {
        $('#nav').removeClass('bg-nav');
        $('#nav').addClass('bg-nav-roxo');

      } else {
        $('#nav').removeClass('bg-nav-roxo');
        $('#nav').addClass('bg-nav');
      }
    });