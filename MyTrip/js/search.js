$(function(){
	$(".txt1").focus(function(){
		if($(this).val()=="邮箱地址"){
			$(this).val("");
		}
	}).blur(function(){
		if($(this).val()==""){
			$(this).val("邮箱地址");
		}
	});
});
