function getstyle(el,property){  //为了区分IE的
	if(getComputedStyle){
		return getComputedStyle(el)[property];
	
	}else{
		return el.currentSyle[property];
	}
}
function animate(el,properties){
	clearInterval(el.timerId);  //清除定时器
	el.timerId = setInterval(function(){ //timerId  就是定时器的编号
		for(var property in properties){
			var current;
			var target = properties[property];
		
			if(property === "opacity"){
				current = Math.round(parseFloat(getstyle(el,"opacity"))*100);//round取整
				//因为透明度的值最大是1 所以乘以的100  方便计算
				
			}else{
				current = parseInt(getstyle(el,property));
				
			}
			var speed = (target - current)/30; //速度 就这么定义的  30越大越慢
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				
				if(property == "opacity"){
					el.style.opacity = (current + speed)/100;
					//计算完了  就在除以一百  返回原数值
				}else{
					el.style[property] = current + speed +"px";
				}
				}
				//
			},20)
		}
	
