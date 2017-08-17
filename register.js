/**
 * Created by Administrator on 2017/5/28.
 */

$(function(){
	$("input[name='phone_num']").focus();
    $("input[name='phone_num']").blur(function(){
        var phone_num = $("input[name='phone_num']").val();
        if(phone_num == "") {
            $(".error_account").text("手机号不能为空！").show();
        }else {
            var regExp = /^((13[0-9])|(15[^4])|(18[0,2,3,5-9])|(17[0-8])|(147))\d{8}$/;
            if (!regExp.test(phone_num)) {
                $(".error_account").text("请输入正确的手机号！").show();
            }else{
                $(".error_account").hide();
            }
        }
    });
    $("input[name='email']").blur(function(){
        var email = $("input[name='email']").val();
        if(email == "") {
            $(".error_email").text("邮箱不能为空！").show();
        }else {
            var regExp = /^[0-9a-zA-Z\-_\.]+@[0-9a-z\.]+[a-z]+$/;
            if (!regExp.test(email)) {
                $(".error_email").text("请输入正确的邮箱！").show();
            }else{
                $(".error_email").hide();
            }
        }
    });
    $("input[name='key']").blur(function(){
        var key = $("input[name='key']").val();
        if(key == "") {
            $(".error_key").text("密码不能为空！").show();
        }else {
            var len = 0 || key.length;
            if (len < 6) {
                $(".error_key").text("密码长度不能少于6位！").show();
            }else{
                $(".error_key").hide();
            }
        }
    });

	$(".get_verify_code").bind("click", function () {
		if ($(".error_account").is(":hidden") && $(".error_email").is(":hidden") && $(".error_key").is(":hidden") && (!$(".get_verify_code").hasClass("disable"))) {
			var seconds = parseInt(5);

			var s = setInterval(function () {
				if(seconds>0){
					seconds--;
					$(".get_verify_code").addClass("disable")
						.text("已发送" + seconds + "s");
				}else if(seconds == 0) {
					clearTimeout(s);
					$(".get_verify_code").removeClass("disable")
						.text("重新发送");
					$(".input_v").focus();
				}
			},1000);
		}
	});

	$(".submit").bind("click",function () {
		$(".submit").addClass("focus");
	});


	$(".input_v").blur(function(){
		var vcode = $(".input_v").val();
		if(vcode == "") {
			$(".error_vcode").text("验证码不能为空！").show();
		}else{
			$(".error_vcode").hide();
		}
	});

		$("input[name='phone_num']").bind("keyup", function (e) {
        if(e.which == 13){
            $("input[name='email']").focus();
        }
    });
    $("input[name='email']").bind("keyup", function (e) {
        if(e.which == 13){
            $("input[name='key']").focus();
        }
    });
    $("input[name='key']").bind("keyup", function (e) {
        if(e.which == 13){
	        $("input[name='key']").trigger("blur");
            $(".get_verify_code").trigger("click");
        }
    });
    $(".get_verify_code").bind("keyup", function (e) {
        if(e.which == 13){
            $(".input_v").focus();
        }
    });
    $(".input_v").bind("keyup", function (e) {
        if(e.which == 13){
	        $(".input_v").trigger("blur");
            $(".submit").trigger("click");
        }
    });
});