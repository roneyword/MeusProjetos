//    BOTAO 1
$(window).ready(function () {

    $(function () {
        $(".prin").on("click", function () {
            $(".seg").toggleClass("seg-efect", 3000);
            $(".ter").toggleClass("ter-efect", 4000);
            $(".quar").toggleClass("quar-efect", 5000);
        });
    });
});

//    BOTAO 2
$(window).ready(function () {

    $(function () {
        $(".open").on("click", function () {
            $(".menu-open").toggleClass("menu-close");
            $(".menu-conteudo").toggleClass("visivel");
        });
    });
});

//    BOTAO 3
$(window).ready(function () {

    $(function () {
        $(".open-box2").on("click", function () {
            $(".box2-menu").toggleClass("box2-menu-close");
        });
    });
});

//    BOTAO 4
$(window).ready(function () {
    $(function () {
        $(".box3-open").on("click", function () {
            $(".box3-menu").toggleClass("box3-menu-open");
            $(".box3-header").toggleClass("box3-header-open");
            $(".box3-content").toggleClass("box3-content-open");

        });
    });
});

//    BOTAO 5
$(window).ready(function () {
    $(function () {
        $(".box5-menu").on("click", function () {
            $(".icones1").toggleClass("icon1");
            $(".icones2").toggleClass("icon2");
            $(".icones3").toggleClass("icon3");
            $(".icones4").toggleClass("icon4");
        });
    });
});

//    BOTAO 6
$(document).ready(function () {

    $(".menu-icon").click(function () {
        $(".box6-menu").css("left", "0px");

        function showMenu() {
            $(".box6-menu").css("clip-path", "polygon(0 0, 100% 0, 100% 100%,0% 100%)");
            $(".menu-icon").animate({ right: '-100' }, 300);
        }
        setTimeout(showMenu, 100);
    });

    //    BOTAO 8
    $(".box6-close").click(function () {

        $(".box6-menu").css("left", "-200px");

        function hideMenu() {
            $(".box6-menu").css("clip-path", "polygon(0 0, 100% 0, 0% 100%,0% 100%)");
            $(".menu-icon").animate({ right: '10' }, 300);
        }
        setTimeout(hideMenu, 100);
    });
});