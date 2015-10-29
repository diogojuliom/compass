$("a[href*=#]").click(function(){
	event.preventDefault();
});
$("a#efetuarCadastro").click(function(){
	$("#cadastro").css('display', 'block');
});
$(document).ready(function(){
	$("a#linkperdilogin").click(function(){
		event.preventDefault();
		$("form#login").css('display', 'none');
		$("form#perdilogin").css('display', 'block');
		$("a#linkperdilogin").css('display','none');
		$("#linkvoltarlogin").css('display','inline-block');
		$("#linkmudarsenha").css('display','none');
	});	
	$("#linkvoltarlogin").click(function(){
		event.preventDefault();
		$("a#linkperdilogin").css('display','inline-block');
		$("form#login").css('display', 'block');
		$("form#perdilogin").css('display', 'none');
		$("#linkmudarsenha").css('display','inline-block');
		$("form#mudarsenha").css('display', 'none');
		$("#linkvoltarlogin").css('display','none');
	});
	$("#linkmudarsenha").click(function(){
		event.preventDefault();
		$("form#login").css('display', 'none');
		$("form#mudarsenha").css('display', 'block');
		$("a#linkperdilogin").css('display','none');
		$("#linkvoltarlogin").css('display','inline-block');
		$("#linkmudarsenha").css('display','none');
	});
});