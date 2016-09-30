/*导航栏下拉菜单*/
$(".header-bt li,.nav dd").each(function(){
	if($(this).children(".nav").hasClass("nav")){
		$(this).mouseenter(function(){
			if(this.nodeName=="DD"){
				$(this).children("a").addClass("CurRent");
			}
			$(this).children(".nav").show();
		});
		$(this).mouseleave(function(){
			if(this.nodeName=="DD"){
				$(this).children("a").removeClass("CurRent");
			}
			$(this).children(".nav").hide();
		});
	}
});
/*幻灯片*/
var fadeObj={
	flashNode:$('#center01'),
	lisNode:$("#center01 li"),
	spansNode:$("#center01 .flash_btn span"),
	leftNode:$('#flash_left'),
	rightNode:$('#flash_right'),
	spanCurString:'#center01 .flash_btn .current',
	spanCurName:"current",
	fadeInOut:function(oldPos,curPos){
		fadeObj.spansNode.eq(oldPos).removeClass();
		fadeObj.spansNode.eq(curPos).addClass(fadeObj.spanCurName);
		
		fadeObj.lisNode.eq(oldPos).stop(false,true).fadeOut();
		fadeObj.lisNode.eq(curPos).stop(false,true).fadeIn();
	},
	autoDo:null
};
fadeObj.flashNode.hover(
	function(){//移入
		fadeObj.leftNode.show();
		fadeObj.rightNode.show();
		window.clearInterval(fadeObj.autoDo);
	},
	function(){//移出
		fadeObj.leftNode.hide();
		fadeObj.rightNode.hide();
		fadeObj.autoDo=window.setInterval(function(){
			fadeObj.rightNode.click();
		},3000);
	}
);

fadeObj.spansNode.mouseenter(function(){
	if($(this).is("."+fadeObj.spanCurName))
	{
		return;
	}
	
	var oldPos=$(fadeObj.spanCurString).index();
	var curPos=$(this).index();
	
	fadeObj.fadeInOut(oldPos,curPos);
});

fadeObj.rightNode.click(function(){
	var oldPos=$(fadeObj.spanCurString).index();
	var lastPos=fadeObj.spansNode.length-1;
	var curPos=oldPos==lastPos?0:oldPos+1;
	
	fadeObj.fadeInOut(oldPos,curPos);
});
fadeObj.leftNode.click(function(){
	var oldPos=$(fadeObj.spanCurString).index();
	var lastPos=fadeObj.spansNode.length-1;
	var curPos=oldPos==0?lastPos:oldPos-1;
	
	fadeObj.fadeInOut(oldPos,curPos);
});
if(fadeObj.length!=0){
fadeObj.autoDo=window.setInterval(function(){
	fadeObj.rightNode.click();
},5000);
}

/*四个球*/
    $(".center02-ul li").mouseenter(function(){
	if($(this).hasClass("current")){
		return;};
		
	var oldPos=$("#center02 .current").index();
	
	$(this).addClass("current").stop().animate({width:"502px"},300);
	
	$(".center02-ul li").eq(oldPos).removeClass("current").stop().animate({width:"160px"},300);
		
});

/*关于*/	
$(".center03-left").mouseenter(function(){
	$(this).find("img").stop().animate({width:"110%",height:"110%",margin:"-20px 0 0 -30px"},300);
	$(this).find("p").stop().animate({top:"0"},300);
});
$(".center03-left").mouseleave(function(){
	$(this).find("img").stop().animate({width:"100%",height:"100%",margin:"0px 0 0 0px"},300);
	$(this).find("p").stop().animate({top:"241px"},300);
});

$('.center03-li-right').click(function(){
	var firstLi=$('.center03-ul li:first');
	$('.center03-ul').append(firstLi);
});
$('.center03-li-left').click(function(){
	var lastLi=$('.center03-ul li:last');
	$('.center03-ul').prepend(lastLi);
});


/*合作*/
var liW=191;
$('.center04-li-left').click(function(){
	$('.center04-client li:first').animate({marginLeft:-liW+'px'},200,function(){
		   $('.center04-client').append($(this));
		   $(this).css('margin-left','0px');
	 });
});
$('.center04-li-right').click(function(){
	$('.center04-client li:last').css('margin-left',-liW+'px');
	$('.center04-client').prepend($('.center04-client li:last'));
	$('.center04-client li:first').animate({marginLeft:'0px'},200);
});

/*列表筛选*/
$('.product-ul').isotope({
	itemSelector: '.product-ul li'
});

$('.list-nav li').click(function(){
	$(this).addClass('list-nav-current').siblings('li').removeClass('list-nav-current');
	var dataValue=$(this).attr('data');
	$('.product-ul').isotope({
		itemSelector: '.product-ul li',
		filter:dataValue
	});
});

/*关于页面公司简介列表*/
$('.text-nav li').click(function(){
	$(this).addClass('current-nav').siblings('li').removeClass('current-nav');
});

/*回到网页顶部*/
$(window).scroll(function(){
	var winH=$(window).height();
	var scrollTop=$(window).scrollTop();
	if(scrollTop<=winH){
		$("#gotop").hide();
	}
	else{
		$("#gotop").show();
	}
});

$("#gotop").click(function(){
	$("body,html").animate({scrollTop:0},1000);
});
