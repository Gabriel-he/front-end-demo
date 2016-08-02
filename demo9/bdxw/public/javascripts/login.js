$(document).ready(function(){
	// body...
	$('#submit_btn').click(function() {
		/* Act on the event */
		var userName = $('#user-id').val();
		var pswd = $('#user-pswd').val();
		if (userName == "admin" && pswd == "admin"){
			sessionStorage.setItem("username", "admin");
			window.location.href = "/manage";
		} else{
			alert("登录信息有误，请重试");
		}
	});
});