// JavaScript Document
$(document).ready(function(){
	$("#yanzhen").bind("click",function(){
		alert("不会真的可以吧")
	})
	
	var flag = null;
	
	//电话号码验证
	$("#phone").focus(function(){
		if($("#phone").val() == "")
			{
				$("#tip").html("电话号码不能为空");
				$("#tip").css("color","red");
			}
	})
	
	$("#phone").blur(function(){
		var phonereg = /^1[34578]\d{9}$/;
		var phonestring = $(this).val();
		if(phonereg.test(phonestring)){
			$("#tip").html("手机号码可以使用");
			$("#tip").css("color","green");
			$("#next1").attr("disabled",false);
		}
		else
			{
				$("#tip").html("手机号码无效");
				$("#tip").css("color","red");
				$("#next1").attr("disabled",true);
			}
	})
	
	
	
	
	
	
	//用户名验证
	$("#name").focus(function(){
		if($("#name").val() == "")
			{
				$("#tip2").html("用户名不能为空");
				$("#tip2").css("color","red");
			}
	})
	
	$("#name").blur(function(){
		var namereg = /^\w{4,9}$/;
		var namestring = $(this).val();
		if(namereg.test(namestring)){
			$("#tip2").html("该用户名可以使用");
			$("#tip2").css("color","green");
			flag = true;
		}
		else
			{
				$("#tip2").html("该用户名不能使用");
				$("#tip2").css("color","red");
				flag = false;
			}
		if(flag)
			{
				$("#password").attr("disabled",false);
			}
		else
			{
				$("#password").attr("disabled",true);
			}
		var storage = window.localStorage;
		var a = JSON.stringify(namestring);
		storage.setItem("name",a);
		console.log(typeof(a));
	})
	
	
	
	
	
	//密码验证
	$("#password").focus(function(){
		if($("#password").val() == "")
			{
				$("#tip3").html("密码不能为空");
				$("#tip3").css("color","red");
			}
	})
	
	$("#password").blur(function(){
		var passwordreg = /^\w{6,12}$/;
		var passwordsteing = $(this).val();
		if(passwordreg.test(passwordsteing)){
			$("#tip3").html("该密码可以使用");
			$("#tip3").css("color","green");
			flag = true;
		}
		else
			{
				$("#tip3").html("该密码不能使用");
				$("#tip3").css("color","red");
				flag = false;
			}
		if(flag)
			{
				$("#passwordtwo").attr("disabled",false);
			}
		else
			{
				$("#passwordtwo").attr("disabled",true);
			}
		var storage = window.localStorage;
		var b = JSON.stringify(passwordsteing);
		storage.setItem("password",b);
	})
	
	
	
	
	
	//密码重验证
	$("#passwordtwo").focus(function(){
		if($("#passwordtwo").val() == "")
			{
				$("#tip4").html("密码不能为空");
				$("#tip4").css("color","red");
			}
	})
	$("#passwordtwo").blur(function(){
		if($("#passwordtwo").val() == $("#password").val()){
			$("#tip4").html("该密码一致");
			$("#tip4").css("color","green");
			flag = true;
		}
		else
			{
				$("#tip4").html("该密码不一致");
				$("#tip4").css("color","red");
				flag = false;
			}
		if(flag)
			{
				$("#e_mail").attr("disabled",false);
			}
		else
			{
				$("#e_mail").attr("disabled",true);
			}
	})
	
	
	
	
	
	//邮箱验证
	$("#e_mail").focus(function(){
		if($("#e_mail").val() == "")
			{
				$("#tip5").html("邮箱名不能为空");
				$("#tip5").css("color","red");
			}
	})
	
	$("#e_mail").blur(function(){
		var e_mailreg = /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/;
		var e_mailstring = $(this).val();
		if(e_mailreg.test(e_mailstring)){
			$("#tip5").html("该邮箱可以使用");
			$("#tip5").css("color","green");
			flag = true;
		}
		else
			{
				$("#tip5").html("该邮箱不能使用");
				$("#tip5").css("color","red");
				flag = false;
			}
		
		if(flag)
		{
			$("#next2").attr("disabled",false);
		}
	else
		{
			$("#next2").attr("disabled",true);
		}
	})
	
	
	
	
	
	$("#next1").bind("click",function(){
		$("#ulmove").animate({right:"500px"},"slow")
	})
	$("#next2").bind("click",function(){
		$("#ulmove").animate({right:"1000px"},"slow")
	})
	
	
	var storage = window.localStorage;
	var a = 123;
	storage.setItem("name",a);
})