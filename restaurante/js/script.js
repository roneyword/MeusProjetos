// scroll suave
$('.navbar a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffset = $(id).offset().top;

    $('html, body').animate({
        scrollTop: targetOffset - 120
    }, 900);
});

// MASCARA PARA O CAMPO CELULAR
$("#telefone, #celular").mask("(00) 00000-0000");
// MASCARA PARA O CAMPO DATA
$("#data").mask("00/00/0000");

// ICONE DO TELEFONE
var valorLog = $("#log span"), bottom, botaoVoltarAoTopo = $("#voltarAoTopo");
$(document).on("scroll", function (event) {
    valorLog.text(window.scrollY);

    if (window.scrollY < 100) {
        bottom = -80 + window.scrollY;
    } else {
        bottom = 35;
    }
    botaoVoltarAoTopo.css('bottom', bottom + "px")

})