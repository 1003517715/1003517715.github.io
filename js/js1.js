// JavaScript Document
window.onload = function(){
	
	//$（id）
	function $(id){
		return document.getElementById(id);
	}
	
	//获取飞行物的Y轴坐标
	function getY(myplane){
		return myplane.style.bottom.replace("px"," ")- 0;
	}
	//获取飞行物的x轴坐标
	function getX(myplane){
		return myplane.style.left.replace("px"," ")- 0;
	}
	
	
	//设置飞行物Y轴坐标
	function setY(myplane,y){
		myplane.style.bottom = y + "px";
	}
	
	//设置飞行物x轴坐标
	function setX(myplane,x){
		myplane.style.left = x + "px";
	}

	
	
	
	//开始游戏
	var game = false;
	$("start").onclick = function(){
		$("gameStart").style.display = "none";
		$("gameEnter").style.display = "block";
		game = true;
		if(game){
			
	//控制飞机上下左右(旧)
/*	document.body.onkeydown = function(e){
		var e = e || Event;
		var keycode = e.keyCode;
		//alert(keycode);
			if(keycode == 87)//上
			{
				//1先获取飞机原来的bottom（要转换为数字）
				//var y = $("myPlane").style.bottom;
				//y = y.replace("px"," ") - 0;
				
				//使用getY方法
				var y = getY($("myPlane"));
				
				
				//2更改y的坐标，得到新坐标
				y+=10;
				//上边界判断
				if(y>670)
					{
						return;
					}
				
				//3 把新坐标重新赋值给飞机
				//$("myPlane").style.bottom = y +"px";
				
				//使用setY方法
				setY($("myPlane"),y);
			}
		
		
			if(keycode == 83)//下
			{ 
				//1先获取飞机原来的bottom（要转换为数字）
				var y = $("myPlane").style.bottom;
				y = y.replace("px"," ") - 0;
				//2更改y的坐标，得到新坐标
				y-=10;
				if(y<0)
					{
						return;
					}
				//3 把新坐标重新赋值给飞机
				$("myPlane").style.bottom = y +"px";
			}
		
		
		
			if(keycode == 65)//左
			{ 
				//1先获取飞机原来的left（要转换为数字）
				var x = $("myPlane").style.left;
				x = x.replace("px"," ") - 0;
				//2更改y的坐标，得到新坐标
				x-=10;
				if(x<0)
					{
						return;
					}
				//3 把新坐标重新赋值给飞机
				$("myPlane").style.left = x +"px";
			}
		
		
		
		if(keycode == 68)//右
			{ 
				//1先获取飞机原来的left（要转换为数字）
				var x = $("myPlane").style.left;
				x = x.replace("px"," ") - 0;
				//2更改y的坐标，得到新坐标
				x+=10;
				if(x>920)
					{
						return;
					}
				//3 把新坐标重新赋值给飞机
				$("myPlane").style.left = x +"px";
			}
	}
	*/
	
	//敌机x坐标的计时器
	var time = 0;
	
	//分数
	var test = 0;
	
	
	//控制飞机上下左右 新
	
	//让方向默认是false
	var goingup = false;
	var goingleft = false;
	var goingright = false;
	var goingdown = false;
	

	//根据keycode的不同判断飞机该飞往什么方向,按下 上下左右键，就变成true
	document.onkeydown = function(e){
		var e= e || Event;
		var keyCode = e.keyCode;
		if(keyCode == 87)
			{
				goingup = true;
			}
		if(keyCode == 83)
			{
				goingdown = true;
			}
		if(keyCode == 65)
			{
				goingleft = true;
			}
		if(keyCode == 68)
			{
				goingright = true;
			}
	}
	
	
	//松开上下左右键就变成false
	document.onkeyup = function(e){
		var e= e || Event;
		var keyCode = e.keyCode;
		if(keyCode == 87)
			{
				goingup = false;
			}
		if(keyCode == 83)
			{
				goingdown = false;
			}
		if(keyCode == 65)
			{
				goingleft = false;
			}
		if(keyCode == 68)
			{
				goingright = false;
			}
	}
	
	
	//设置游戏的帧动画定时器
	 var gameInterval = setInterval(function(){
		 if(goingup)//ture就执行计时器，false就不执行  上
			 {
				 /*//1先获取飞机原来的bottom（要转换为数字）
				var y = $("myPlane").style.bottom;
				y = y.replace("px"," ") - 0;*/
				
				//使用getY方法
				var y = getY($("myPlane"));
				
				
				//2更改y的坐标，得到新坐标
				y+=10;
				//上边界判断
				if(y>670)
					{
						return;
					}
				
				//3 把新坐标重新赋值给飞机
				/*$("myPlane").style.bottom = y +"px";*/
				
				//使用setY方法
				setY($("myPlane"),y);
			 }
		 
		 
		  if(goingdown)//ture就执行计时器，false就不执行   下
			 {
				 /*//1先获取飞机原来的bottom（要转换为数字）
				var y = $("myPlane").style.bottom;
				y = y.replace("px"," ") - 0;*/
				
				//使用getY方法
				var y = getY($("myPlane"));
				
				
				//2更改y的坐标，得到新坐标
				y-=10;
				//上边界判断
				if(y<0)
					{
						return;
					}
				
				//3 把新坐标重新赋值给飞机
				/*$("myPlane").style.bottom = y +"px";*/
				
				//使用setY方法
				setY($("myPlane"),y);
			 }
		 
		 
		 if(goingleft)//ture就执行计时器，false就不执行   左
			 {
				 /*//1先获取飞机原来的left（要转换为数字）
				var y = $("myPlane").style.left;
				y = y.replace("px"," ") - 0;*/
				
				//使用getX方法
				var y = getX($("myPlane"));
				
				
				//2更改y的坐标，得到新坐标
				y-=10;
				//上边界判断
				if(y<0)
					{
						return;
					}
				
				//3 把新坐标重新赋值给飞机
				/*$("myPlane").style.left = y +"px";*/
				
				//使用setY方法
				setX($("myPlane"),y);
			 }
		 
		 
		 
		  if(goingright)//ture就执行计时器，false就不执行   右
			 {
				 /*//1先获取飞机原来的left（要转换为数字）
				var y = $("myPlane").style.left;
				y = y.replace("px"," ") - 0;*/
				
				//使用getX方法
				var y = getX($("myPlane"));
				
				
				//2更改y的坐标，得到新坐标
				y+=10;
				//上边界判断
				if(y>920)
					{
						return;
					}
				
				//3 把新坐标重新赋值给飞机
				/*$("myPlane").style.left = y +"px";*/
				
				//使用setY方法
				setX($("myPlane"),y);
				 
			 } 
		 
		 
		 	//扫描全局所有的子弹
		 	var bullets = document.getElementsByClassName('bullet');
		 	if(bullets)
				{
					for(var i = 0;i<bullets.length;i++)
						{
							
							var y = getY(bullets[i]);
							y+=20;
							if(y>720)
								{
									$("gameEnter").removeChild(bullets[i]);
									$("gameEnter").removeChild($("muisc"));
									
									continue;
								}
							setY(bullets[i],y);
							
							
							//扫描所有的子弹是否和敌机发生碰撞
							//遍历所有的敌机
							var enemies = document.getElementsByClassName("enemys");
							for(var j=0;j<enemies.length;j++)
								{
									//敌机的位置
									var x1 = getX(enemies[j])+40;
									var y1 = getY(enemies[j]);
									
									//子弹的位置
									var x2 = getX(bullets[i]);
									var y2 = y;	
									
									//判断是否相交
									if(Math.abs(x1 - x2)< 60 && Math.abs(y1 - y2)<81)
										{
											$("gameEnter").removeChild(enemies[j]);
											test++;
											$("test").innerHTML ="你的分数是 ： "+test+" 分  "
										}
									
									//判断玩家飞机是否和敌方飞机碰撞
									var x3 = getX($("myPlane"));
									var y3 = getY($("myPlane"));
									//判断是否相交
									if(Math.abs(x1 - x3)< 65 && Math.abs(y1 - y3)<80)
										{	
											clearInterval(t1);
											clearInterval(t2);
											clearInterval(t3);
											clearInterval(gameInterval);
											alert(" YOU DIE ");
											location.reload();
										}
								}

						}
				}
		 
		 	time+=0.1;
		 
	 },20);
	
	
	
	
	
	
	
		//设置定时器，动态绘制子弹
		 //<img src="images/timg.png" style="width: 10px; height: 50px;position: absolute;bottom: : 0;left: 45px;z-index: -1">
		var t1=setInterval(function(){
			var bulletX = getX($("myPlane"))+45;
			var bulletY = getY($("myPlane"))+100;
			$("gameEnter").innerHTML +="<img class='bullet' src=\"images/timg.png\" style=\"width: 10px; height: 50px;position: absolute;bottom:"+bulletY+"px;left:"+bulletX+"px;z-index: 1\"><audio id='muisc' src=\"sound/shoot.mp3\" autoplay></audio>"
		},300);
	
	
	
	
		
		//敌机的移动
		var t2=setInterval(function(){
			var enemies = document.getElementsByClassName("enemys");
			for(var i =0;i<enemies.length;i++)
				{
					var y = getY(enemies[i]) - 3;
					
					
					setY(enemies[i],y);
					//敌机边界
					if(y<0)
						{
							$("gameEnter").removeChild(enemies[i]);
							return;
						}
					
					
					var roll = enemies[i].attributes.roll.value;
					console.log(roll);
					if(roll == 1)
						{
							var x = getX(enemies[i]);
							x=x+30*Math.sin(time);
							setX(enemies[i],x);
						}
					
				}
		},46)
	
	
	
	
	
	
		//敌机的生成
		var t3=setInterval(function(){
			var x = Math.floor(768*Math.random());
			var y = Math.floor(x*Math.random());
			var roll = 0;
			if(Math.sin(x)>0)
				{
					roll = 1;
				}
			$("gameEnter").innerHTML+="<img roll='"+roll+"' src=\"images/ship_1.png\" class=\"enemys\" style=\"position: absolute;bottom: 700px;left: "+x+"px;\"><img roll='"+roll+"' src=\"images/ship_2.png\" class=\"enemys\" style=\"position: absolute;bottom: 700px;left: "+y+"px;\">";
		},500)
	
	
	
	
	
	
	
	//背景的移动
	var indxe_bj = 3840;
	setInterval(function(){
		if(indxe_bj>0)
			{
				indxe_bj--
				$("ul").style.marginTop = -1*indxe_bj+"px";
			}
		else
			{
				indxe_bj =3840;
				$("ul").style.marginTop = -1*indxe_bj+"px";
			}
	},50)
	
}
	}
	
	
	

}	
	
	
	
