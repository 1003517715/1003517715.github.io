// JavaScript Document
	function tabnav(){
		let nav2Alla = document.querySelectorAll(".nav2_main>a");
		let nav2Allbox = document.querySelectorAll(".nav2_child>div");
		/*选中部分*/
		/*
		思路:
		循环遍历导航条
		点击导航条切换类名控制显示与隐藏
		*/

		for( var i = 0; i<nav2Alla.length;i++)
			{
				nav2Alla[i].index = i;
				nav2Alla[i].onmouseenter = function(){
					for(var j= 0;j<nav2Alla.length;j++)
						{
							nav2Allbox[j].className = "";
						}
					nav2Allbox[this.index].className = "items";
				}
				/*nav2Alla[i].onmouseout  = function(){
					for(var j= 0;j<nav2Alla.length;j++)
						{
							nav2Allbox[j].className = "";
						}
				}*/
			}
	}
	tabnav();
	
/*<!--本实例由李明振本人完成-->*/



	function lunbotu(){
		var benner = document.getElementById("bennerul");
		var maxlen = 4;
		var indexs = 0;
		var tiemr1 = null ;
		tiemr1 = setInterval(change,3000);
		
		function change(){
			if(indexs<maxlen)
				{
					indexs++;
					getnext();
				}
			else{
				indexs = 0;
				getOrigin();
			}
		}
		function getnext(){
			
			benner.style.marginLeft = -1925*indexs + "px";
			benner.style.transition  = 1+"s";
		}
		function getOrigin(){
			benner.style.marginLeft = 0;
			benner.style.transition  = 0+"s";
		}
	}
lunbotu();
	



function lunbotu2(){
		var box3ul = document.getElementById("box3ul");
		var maxlen2 = 2;
		var index2s = 0;
		var tiemr2 = null ;
		tiemr2 = setInterval(change,3000);
		
		function change(){
			if(index2s<maxlen2)
				{
					index2s++;
					getnext();
				}
			else{
				index2s = 0;
				getOrigin();
			}
		}
		function getnext(){
			
			box3ul.style.marginLeft = -700*index2s + "px";
			box3ul.style.transition  = 1+"s";
		}
		function getOrigin(){
			box3ul.style.marginLeft = 0;
			box3ul.style.transition  = 0+"s";
		}
	}
lunbotu2();
















function home(){
	var bodyB = document.getElementById("bodyB");
	var bodyA = document.getElementById("bodyA");
	var d1 = document.getElementById("d1");
	var d2 = document.getElementById("d2");
	var box1 =document.getElementById("box1");
	var box2 =document.getElementById("box2");
	var box4 =document.getElementById("box4");
	var top1 = document.getElementById("top1");
	var top2 = document.getElementById("top2");
	var button1 = document.getElementById("button1")
	var button2 = document.getElementById("button2")
	window.onscroll = function(){
			var x = document.documentElement.scrollTop;
			if(x>150)
				{
					bodyB.className = "bodyBs";
					bodyA.className = "bodyAs"
				}
			if(x==0)
				{
					bodyB.className = "bodyBss";
					bodyA.className = "bodyAss"
				}
			if(x>1300)
				{
					d1.className = "d1s";
					d2.className = "d2s";
				}
			if(x<1300)
				{
					d1.className = "d1";
					d2.className = "d2";
				}
			if(x>2100)
				{
					box1.className = "box1ss";
					box2.className = "box2ss";
					box4.className = "box4ss";
				}
			if(x<2100)
				{
					box1.className = "box1s";
					box2.className = "box2s";
					box4.className = "box4s";
				}
			if(x>3600)
				{
					top1.className = "tops";
					top2.className = "tops";
					button1.className = "buttons";
					button2.className = "buttons";
				}
			if(x<3500)
				{
					top1.className = "top";
					top2.className = "top";
					button1.className = "button";
					button2.className = "button";
				}
		}
	
}
home();

function erweima(){
	var a1 = document.getElementById("a1");
	var a2 = document.getElementById("a2");
	var a3 = document.getElementById("a3");
	var a4 = document.getElementById("a4");
	a1.onmouseover = function(){
		a3.style.opacity = 1;
	}
	a1.onmouseout = function(){
		a3.style.opacity = 0;
	}
	a2.onmouseover = function(){
		a4.style.opacity = 1;
	}
	a2.onmouseout = function(){
		a4.style.opacity = 0;
	}
}
erweima();
