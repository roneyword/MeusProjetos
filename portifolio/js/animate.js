
// função para acionar uma objeto quando clicado
$(function(){
	var animacao = "almentar";
	var fimAnimacao = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

	$("#anima").click(function(e){

		$("#recebeAnimacao").addClass(animacao).one(fimAnimacao, function(){
			$(this).removeClass(animacao);
		});
		e.preventDefault();
	});
});

// //função para fazer o scroll suave
// $('.navbar a[href^="#"]').on('click', function(e) {
// 	e.preventDefault();
// 	var id = $(this).attr('href'),
// 			targetOffset = $(id).offset().top;
			
// 	$('html, body').animate({ 
// 		scrollTop: targetOffset - 54
// 	}, 900);
// });
	

// $(function(){
//       $('#animateBtn').hover(function(){
//         animate('#anim-head', 'shake');
//         return false;
//       });

//       // $('#animateBtn2').click(function(){
//       //   animate('header', 'slideOutUp');
//       //   setTimeout(function(){
//       //     $('header').css('visibility','hidden');
//       //   }, 1000);
//       //   return false;
//       // });

//       // Animate
//       function animate(element, animation){
//         $(element).addClass('animated '+animation);
//         var wait = setTimeout(function(){
//           $(element).removeClass('animated '+animation);
//         }, 1000);
//       }
//     });