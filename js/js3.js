// JavaScript Document
$(document).ready(function(){
	var _index = 0;
	$(".small img").mouseenter(function(){
				$(this).addClass("current").siblings().removeClass("current");
				var imgsrc = $(this).attr("src");
				$(".big img").attr("src",imgsrc);
				$(".show img").attr("src",imgsrc);
			});
			$(".fuck").mouseenter(function(){
				$(".move").show();
				$(".show").show();
				$(".show img").show();
				$(".show").css("z-index",10);
			});
		$(".fuck").mousemove(function(e){
			var mousex = e.pageX;
			var mousey = e.pageY;
			var fuckx = $(".fuck").offset().left;
			var fucky = $(".fuck").offset().top;
			var moveleft = mousex - fuckx -$(".move").width()/2;
			var movetop = mousey - fucky -$(".move").height()/2;
			$(".move").css({
				"left":moveleft,
				"top":movetop
			});
			var maxtop = $(".fuck").height() - $(".move").height();
			var maxleft = $(".fuck").width() - $(".move").width();
			if(moveleft<0){
				$(".move").css("left",0);
			}
			else if(moveleft>maxleft){
				$(".move").css("left",maxleft);
			}
			if(movetop<0){
				$(".move").css("top",0)
			}
			else if(movetop>maxtop){
				$(".move").css("top",maxtop);
			}
			var showleft = - $(".move").position().left*5.5;
			var showtop = - $(".move").position().top*1.9;
			$(".show img").css({
				"left":showleft,
				"top":showtop
			});
		})
		$(".fuck").mouseleave(function(){
				$(".move").hide();
				$(".show").hide();
				$(".show img").hide();
				$(".show").css("z-index",-1);
			})
	
	
	
	$(".btn2").click(function(){
			$(".uls").animate({
				top:"-500px"
			})
		})
		
		$(".btn1").click(function(){
			$(".uls").animate({
				top:"0px"
			})
		})
	
	
	
	
	
	$(".bt").click(function(){
		 _index = $(this).index();
		$(".bt").eq(_index-1).addClass("borders").siblings().removeClass("borders");
		$(".bt .bt_r").eq(_index-1).addClass("bg").siblings().removeClass("bg");
	})
	$(".bt_r").hover(function(){
		$(this).addClass("bg2")
	},function(){
		$(this).removeClass("bg2");
	})
	
	
	$(".navs div").hover(function(){
		_index = $(this).index();
		$(".navs div").eq(_index).css({"background-color":"darkturquoise","color":"gold"}).siblings().css({"background-color":"#E5E0E0","color":"#726E6E"});
		$(".box4 div").eq(_index).addClass("boxcss").siblings().removeClass("boxcss");
	})
		
	$(".bt1").click(function(){
		$(".zfb").animate({zIndex:"10"},10)
				 .animate({opacity:"0.5"},10)
				 .animate({top:"140px"},400)
				 .animate({opacity:"1"},10)
	})
	
	$(".bt2").click(function(){
		
		$(".zfb").animate({top:"-140px"},500)
				 .animate({opacity:"0"},100)
				 .animate({zIndex:"-10"},100)

	})
	
	$("#totop").hide();
		$(window).scroll(function(){
			if($(window).scrollTop()>500)
				{
					$("#totop").fadeIn();
				}
				
			else
				{
					$("#totop").fadeOut();
				}
				
		});
		$("#totop").click(function(){
			$("body,html").animate({
				scrollTop:0
			},500);
		});
	
	
	window.setTimeout(function(){
		$(".adver").animate({opacity:"1"},100)
				   .animate({width:"180px"},100)
				   .animate({width:"200px"},100)
				   .animate({width:"180px"},100)
				   .animate({width:"200px"},100)
		
	},4000)
	
	$(".bt5").click(function(){
		$(".adver").animate({opacity:"0"},100)
	})
})