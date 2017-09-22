var nav={
	liNode:$("#nav li"),
	dtNode:$("#nav li dl dt"),
	init:function(){
		var _this=this;
		_this.liNode.mouseenter(function(){
			$(this).children(".products-nav").stop().slideDown();
		})
		_this.liNode.mouseleave(function(){
			$(this).children(".products-nav").stop().slideUp();
		})
		_this.dtNode.mouseenter(function(){
			$(this).children(".products-nav2").stop().slideDown();
		})
		_this.dtNode.mouseleave(function(){
			$(this).children(".products-nav2").stop().slideUp();
		})
	},
}
nav.init();

var slider={
	sliderNode:$("#slider"),
	pptNode:$("#slider .ppt"),
	liNode:$("#slider .ppt li"),
	iNode:$("#slider i"),
	spanNode:$("#slider .small-btn span"),
	timeout:null,
	move:function(obj){
		var _this=this;
		var newpos,oldpos;
		oldpos=$(".current").index();
		newpos=obj.index();
		//console.log(oldpos,newpos)
		//console.log(_this.spanNode.eq(oldpos),_this.spanNode.eq(newpos))
		if(newpos==oldpos){return;}		
		else{
			_this.spanNode.eq(oldpos).removeClass("current");
			_this.spanNode.eq(newpos).addClass("current");
			_this.liNode.eq(oldpos).stop().fadeOut("normal");
			_this.liNode.eq(newpos).stop().fadeIn("normal");
		}
	},
	leftMove:function(){
		var _this=this;
		var newpos,oldpos;
		oldpos=$("#slider .current").index();
		newpos=oldpos-1;
		if(newpos<0){
			newpos=_this.spanNode.length-1;
		}
		_this.spanNode.eq(oldpos).removeClass("current");
		_this.spanNode.eq(newpos).addClass("current");
		_this.liNode.eq(oldpos).stop().fadeOut("normal");
		_this.liNode.eq(newpos).stop().fadeIn("normal");
	},
	rightMove:function(){
		var _this=this;
		var newpos,oldpos;
		oldpos=$("#slider .current").index();
		newpos=oldpos+1;
		if(newpos>=_this.spanNode.length){
			newpos=0;
		}
		_this.spanNode.eq(oldpos).removeClass("current");
		_this.spanNode.eq(newpos).addClass("current");
		_this.liNode.eq(oldpos).stop().fadeOut("normal");
		_this.liNode.eq(newpos).stop().fadeIn("normal");
	},
	init:function(){
		var _this=this;
		_this.sliderNode.mouseenter(function(){
			_this.iNode.fadeIn("slow");
			clearInterval(_this.timeout);
		})
		_this.sliderNode.mouseleave(function(){
			_this.iNode.fadeOut("slow");
			_this.timeout=setInterval(function(){
				_this.rightMove();
			},3000)
			
		})
		_this.spanNode.mouseenter(function(){
			_this.move($(this));
		})
		_this.iNode.eq(0).click(function(){
			_this.leftMove();
		})
		_this.iNode.eq(1).click(function(){
			_this.rightMove();
		})
		_this.timeout=setInterval(function(){
			_this.rightMove();
		},3000)
	},
}
slider.init();

var flash={
	flash4Node:$("#flash4"),
	change:function(obj){
		var _this=this;
		var oldobj,newobj;
		//obj.removeClass("boll-hidden").addClass("boll-show");
		//obj.siblings().addClass("boll-hidden").removeClass("boll-show");
		oldobj=_this.flash4Node.find(".boll-show");
		newobj=obj;
		if(oldobj==newobj){return;}
		oldobj.stop(true,false).animate({"width":"175px"},500).addClass("boll-hidden").removeClass("boll-show");
		newobj.stop(true,false).animate({"width":"465px"},500).addClass("boll-show").removeClass("boll-hidden");
	},
	init:function(){
		var _this=this;
		//console.log(_this.flash4Node)
		//console.log(_this.flash4Node.find(".boll-hidden"))
		_this.flash4Node.on("mouseenter","li",function(){
			//console.log(123)
			_this.change($(this));
		})
	}
}
flash.init();

var Aboutus={
	Aboutus:$("#Aboutus"),
	Aboutusleft:$("#Aboutus .Aboutus-left"),
	Aboutusright:$("#Aboutus .Aboutus-right"),
	pNode:$("#Aboutus .Aboutus-right p"),
	iNode:$("#Aboutus .Aboutus-right i"),
	showbig:function(){
		var _this=this;
		_this.Aboutusleft.find("img").stop().animate({
			"width":"110%",
			"height":"110%",
			"margin-top":"-5%",
			"margin-bottom":"-5%",
			},500);
		_this.Aboutusleft.find("a").stop().animate({"top":"0%"},500);
		/*transform:rotate(7deg)*/
	},
	showsmall:function(){
		var _this=this;
		_this.Aboutusleft.find("img").stop().animate({
			"width":"100%",
			"height":"100%",
			"margin-top":"0%",
			"margin-bottom":"0%",
			},500);
		_this.Aboutusleft.find("a").stop().animate({"top":"100%"},500);
	},
	rightmove:function(){
		var _this=this;
		var newpos,oldpos;
		oldpos=$("#Aboutus .currentp").index();
		newpos=oldpos+1;
		//console.log(newpos,oldpos)
		if(newpos==_this.pNode.length){
			newpos=0;
		}
		_this.pNode.eq(newpos).addClass("currentp");
		_this.pNode.eq(oldpos).removeClass("currentp");
	},
	leftmove:function(){
		var _this=this;
		var newpos,oldpos;
		oldpos=$("#Aboutus .currentp").index();
		newpos=oldpos-1;
		//console.log(newpos,oldpos)
		if(newpos<0){
			newpos=_this.pNode.length-1;
		}
		_this.pNode.eq(newpos).addClass("currentp");
		_this.pNode.eq(oldpos).removeClass("currentp");
	},
	init:function(){
		var _this=this;
		_this.Aboutusleft.mouseenter(function(){
			_this.showbig();
		})
		_this.Aboutusleft.mouseleave(function(){
			_this.showsmall();
		})
		_this.iNode.eq(1).click(function(){
			_this.rightmove();
		})
		_this.iNode.eq(0).click(function(){
			_this.leftmove();
		})
	}
}
Aboutus.init();

var Ourclient={
	liwidth:192,
	iNode:$("#Ourclient .main-section i"),
	ulNode:$("#Ourclient .main-section ul"),
	bool:true,
	rightmove:function(){
		var _this=this;
		
		if(_this.bool){
			_this.ulNode.find("li").eq(0).animate({"margin-left":-_this.liwidth+"px"},500,function(){
				$(this).appendTo("#Ourclient .main-section ul").css({"margin-left":0});
				_this.bool=true;
			});
			_this.bool=false;
		}
		
	},
	leftmove:function(){
		var _this=this;
		var len=_this.ulNode.find("li").length;
		//console.log(_this.ulNode.find("li").eq(len));
		_this.ulNode.find("li").eq(len-1).prependTo("#Ourclient .main-section ul").css({"margin-left":-_this.liwidth+"px"}).stop().animate({"margin-left":0},500);
			
	},
	init:function(){
		var _this=this;
		_this.iNode.eq(1).click(function(){
			_this.rightmove();
			//_this.bool=true;
		})
		_this.iNode.eq(0).click(function(){
			_this.leftmove();
		})
		
	}
}
Ourclient.init();


var totop={
	footertotop:$(".footer .to-top"),
	fixedtotop:$(".fixed-nav .to-top"),
	totop:function(){
		$("body,html").animate({scrollTop:0},500);
	},
	init:function(){
		var _this=this;
		_this.footertotop.click(function(){
			_this.totop();
		})
		_this.fixedtotop.click(function(){
			//console.log(123)
			_this.totop();
		})
	}
}
totop.init();


var isotope={
	navNode:$("#content-filter-header"),
	ulNode:$("#public-content-example .example-main"),
	init:function(){
		var _this=this;
		$('.example-main').isotope({
			itemSelector: '.example-main li',
		});
		
		_this.navNode.on("click","li",function(){
			$(this).addClass("checked");
			$(this).siblings().removeClass("checked");
			var dataValue=$(this).attr('data');
			$('.example-main').isotope({
				itemSelector: '.example-main li',
				filter:dataValue
			});
		})
	}
}
isotope.init();

/*$('.main').isotope({
	itemSelector: '.main li'
});

$('.nav li').click(function(){
	$(this).addClass('current').siblings('li').removeClass('current');
	var dataValue=$(this).attr('data');
	$('.main').isotope({
		itemSelector: '.main li',
		filter:dataValue
	});
});*/