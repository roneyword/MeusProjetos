$(window).ready(function () {

    $(function () {
        $(".ponto").mouseenter(function () {
            $(".linha1").toggleClass("linha1-efect");
            $(".linha2").toggleClass("linha2-efect");
            $(".linha3").toggleClass("linha3-efect");
            $(".titulo").toggleClass("titulo-visible");
        });
    });

    $(function () {
        $(".ponto2").mouseenter(function () {
            $(".linhatela1").toggleClass("linha1-efect-tela");
            $(".linhatela2").toggleClass("linha2-efect-tela");
            $(".linhatela3").toggleClass("linha3-efect-tela");
            $(".titulotela").toggleClass("titulo-visible-tela");
        });
    });

    $(function () {
        $(".ponto3").mouseenter(function () {
            $(".linhabotao1").toggleClass("linha1-efect-botao");
            $(".linhabotao2").toggleClass("linha2-efect-botao");
            $(".linhabotao3").toggleClass("linha3-efect-botao");
            $(".titulobotao").toggleClass("titulo-visible-botao");
        });
    });

    $(function () {
        $(".ponto4").mouseenter(function () {
            $(".linhapower1").toggleClass("linha1-efect-power");
            $(".linhapower2").toggleClass("linha2-efect-power");
            $(".linhapower3").toggleClass("linha3-efect-power");
            $(".titulopower").toggleClass("titulo-visible-power");
        });
    });

});