
//检测
 // .onclick = function(){
	//  console.log("3333");
 // }




//随机颜色
var li = document.querySelectorAll(".item");
var j = 0;
var getRandomColor = function () {
    var r = Math.round(Math.random() * 255), g = Math.round(Math.random() * 255), b = Math.round(Math.random() * 255);
    var color = r << 16 | g << 8 | b;
    return "#" + color.toString(16)
}
var a= 0;
	for(var i=0; i<li.length;i++){
		li[i].style.background = getRandomColor();
		li[i].style.left = 64*a +"px";
		a++;
		li[i].style.top = 18*j + "px";
		 if((i+1)%8 == 0){
		 	j++;
			
			li[i].style.left = 0 +"px";
			a=1;
			li[i].style.top = 18*j + "px";
		 }
	}

//开始按键
	var start = document.querySelector(".start");
	start.onclick = function (){
//底板远动
var di = document.querySelector(".bubble");
var box = document.querySelector(".box");
di.onmousedown = function(e){ //鼠标按下事件
	var ev = e||window.event;
	basex = ev.pageX;
	  //base 点击的数值
	
	
	movex =0;
	
	
	//给主频幕 加鼠标移动事件
	
	box.onmousemove = function(e){
		var en = e||window.event;
		movex = en.pageX-basex;
		basex = en.pageX;
		if(di.offsetLeft + movex >0 && di.offsetLeft + movex + 140 < 450 ){ //不出box 边界
		di.style.left=di.offsetLeft + movex + 'px';	
		}
		 
	}
	
}
	

//让大强动
var daqiang = document.querySelector(".board");
var liAll = document.querySelectorAll("li");
var speedX = 5;
var speedY = 3;
var daqiangID  = setInterval(function(){
	
	daqiang.style.left = daqiang.offsetLeft - speedX +"px";
	daqiang.style.top =  daqiang.offsetTop - speedY + "px";

	//大强碰撞检测 -->box
		pengzhuangbox(daqiang);
	
	//大强碰撞-->底板
	 pengzhuangdiban(daqiang,di);
	 
	 //大强碰撞-->li
	pengzhuangzhuankuai(liAll,daqiang);
		

	
	
},15);


	//大强碰撞检测 -->box
	var damahou = document.querySelector(".damahou");
	function  pengzhuangbox(daqiang){
			if(daqiang.offsetLeft<0 )
		{   
			
			speedX *=-1;
			
		}
		if(daqiang.offsetLeft + 50> 450 ){
			speedX *=-1;
		}
		if( daqiang.offsetTop<box.offsetTop){
			speedY *=-1; 
		}
		if(daqiang.offsetTop+50>680){
			damahou.style.display = "block";
			for(var i=0; i<100;i++){
				clearInterval(i);
				
			}
			
		}
	}
	
	//大强碰撞-->底板
	function pengzhuangdiban(daqiang,di){
		if((daqiang.offsetLeft > di.offsetLeft && daqiang.offsetLeft + 50 < di.offsetLeft +140 )&&
		daqiang.offsetTop + 50 == di.offsetTop ){
			daban();
			speedY *=-1;	
		}
	}

	//大强碰撞  -->砖块
	
	 function pengzhuangzhuankuai(liAll,daqiang){
		for(var i=0; i<liAll.length;i++){
			if(pengzhuang(liAll[i],daqiang)){
			fenshu();
 			speedY *=-1;
			var ul = document.querySelector("ul");
			ul.removeChild(liAll[i]);
	 			break;
			}
	 	}
	 }

function pengzhuang(obj1,obj2){
	  var obj1left = obj1.offsetLeft;
	  var obj1width = obj1left + obj1.offsetWidth;
	  var obj1top = obj1.offsetTop;
	  var obj1height = obj1top + obj1.offsetHeight;
	  
	  var obj2left = obj2.offsetLeft;
	  var obj2width = obj2left + obj2.offsetWidth;
	  var obj2top = obj2.offsetTop;
	  var obj2height = obj2top + obj2.offsetHeight;
	  
	  if(!(obj1left > obj2width || obj1width < obj2left || obj1top > obj2height || obj1height < obj2top)){
		  return true;
	  }else{
		  return false;
	  }
  }

	//当前时间
	var span = document.querySelectorAll("span");
	var count = 0;
	var count2 = 0;
		var timeId = setInterval(function(){
			var day = new Date();
			var a = day.toLocaleDateString();//2019/7/14
			var b = day.toLocaleTimeString();//上午9:59:29
			span[2].innerHTML = a+b;
		},1000); 
	//游戏状态
	span[4].innerHTML = "正在正常运行";
	//分数
	function fenshu(){
		count++;
		span[8].innerHTML = count; 
	}
	function daban(){
		count2++;
		span[6].innerHTML = count2;
	}
	
	
		//加油动画
		var jiayou = document.querySelectorAll("img");
		var i= 0;
	var donghaID = setInterval(function(){
		
		jiayou[1].style.display = "none"; 
		
	},200);
	
	var donghaID = setInterval(function(){
		
		jiayou[1].style.display = "block"; 
		
	},300);
	
	var donghaID = setInterval(function(){
		
		jiayou[3].style.display = "none"; 
		
	},200);
	
	var donghaID = setInterval(function(){
		
		jiayou[3].style.display = "block"; 
		
	},300);
	

}

