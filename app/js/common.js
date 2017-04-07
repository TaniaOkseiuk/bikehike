
$(document).ready(function(){

//////////////////////////////////////preloader////////////////

$(window).on('load', function () {
	var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
	$spinner.fadeOut();
	$preloader.delay(350).fadeOut('slow');
});
//////////////////////////////////////preloader-end////////////////

/////////////play-pause-video////////////

  $(".tubular-pause").click(function(){
  $(this).hide();
  $(".tubular-play").show();

});
  $(".tubular-play").click(function(){
  $(this).hide();
  $(".tubular-pause").show();

});
  $(".volume_up").click(function(){
	$(this).hide();
	$('.volume_off').show();  
});
   $(".volume_off").click(function(){
	$(this).hide();
	$('.volume_up').show(); 
}); 

///////////////////play-pause-video-end////////

///////////////// scroll-animate//////


$(window).scroll(function(){
	var st = $(this).scrollTop();
if ( st>70){

	$("nav").fadeIn(300).css({"background-color":"#fff", "color":"#ccccccc", "height": "60px","-webkit-transition": "all .7s ", "transition": "all .7s ","border-bottom": "2px solid #f5f5f5"});
	$(".mainMenu li a").css({"color": "#000000", "text-shadow": "none"});
	$(".mainMenu_btn").css({"color": "#000000"});
	$(".mainMenu li a").hover(	
			   function () {
				  $(this).css({"color":"#fff"});
			   }, 
				
			   function () {
				  $(this).css({"color":"#000"});
			   }
			);


		
	
	}

	else {
		$("nav").css({"background-color":"transparent", "height": "80px", "-webkit-transition": "all .7s ", "transition": "all .7s ", "border-bottom":"none"});
		$(".mainMenu li a").css({"color": "#fff", "text-shadow": "0px 0px 5px rgba(0, 0, 0, 0.8)"});
		$(".mainMenu_btn").css({"color": "#fff"});
			$(".mainMenu li a").hover(	
			   function () {
				  $(this).css({"color":"#fff"});
			   }, 
				
			   function () {
				  $(this).css({"color":"#fff"});
			   }
			);
		
	}

	$(".header_title").css({ 
	"-webkit-transform": "translate(0%," + st/3 +"%"
	});


$(".header_content").css("opacity", 1-st*0.002);

});

///////////////// scroll-animate-end//////

///////////////animate menu////////////////
$(".mainMenu_btn").click(function(){
	$(".mainMenu_custom").slideToggle(250);

});
$(".mainMenu_custom a").click(function(){
	$(".mainMenu_custom").fadeOut(200)
});

$(".mainMenu a, .mainMenu_custom a, .logo a").click(function(e){
		e.preventDefault();
		var id = $(this).attr('href');
		var offset = $(id).offset().top;
		$('html, body').animate({
		  scrollTop: offset
		}, 300)
		
	  });

/////////////animate menu end//////////

// ///////////slider///////////////////

var width = $('.goal_wrapper').width();

 $('.goal_wrapper>.goals_bg').width(width);
 $('.goal_wrapper').width(width*$('.goal_wrapper>.goals_bg').length);

 $('.goal_wrapper').css('left',-width);
 $('.goal_wrapper>.goals_bg:last-child').prependTo('.goal_wrapper');

 function next_slide(){
 	$('.goal_wrapper').animate({
 		'margin-left':-width
 	},500, function(){
 		$('.goal_wrapper>.goals_bg:first-child').appendTo('.goal_wrapper');
 		$('.goal_wrapper').css('margin-left',0);
 	});
 }
  function prev_slide(){
 	$('.goal_wrapper').animate({
 		'margin-left': width
 	},500, function(){
 		$('.goal_wrapper>.goals_bg:last-child').prependTo('.goal_wrapper');
 		$('.goal_wrapper').css('margin-left',0);
 	});
 }

 $('.goals_next_btn').click(next_slide);
 $('.goals_prev_btn').click(prev_slide);
 
/////////////////////////slider end///////////////////
	$('.mfp_g').each(function(){
		$(this).magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-zoom-in',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		
		},
		zoom: {
			enabled: true,
			duration: 300, 
			opener: function(element) {
				return element.find('img');
			}
		
		}

		
		});
	});
	// //Таймер обратного отсчета
	// //Документация: http://keith-wood.name/countdown.html
	// //<div class="countdown" date-time="2015-01-07"></div>
	// var austDay = new Date($(".countdown").attr("date-time"));
	// $(".countdown").countdown({until: austDay, format: 'yowdHMS'});

// 	//Попап менеджер FancyBox
// 	//Документация: http://fancybox.net/howto
// 	//<a class="fancybox"><img src="image.jpg" /></a>
// 	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
// 	$(".fancybox").fancybox();

// 	//Навигация по Landing Page
// 	//$(".top_mnu") - это верхняя панель со ссылками.
// 	//Ссылки вида <a href="#contacts">Контакты</a>
// 	$(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	// $(".block").waypoint(function(direction) {
	// 	if (direction === "down") {
	// 		$(".class").addClass("active");
	// 	} else if (direction === "up") {
	// 		$(".class").removeClass("deactive");
	// 	};
	// }, {offset: 100});

// 	//Плавный скролл до блока .div по клику на .scroll
// 	//Документация: https://github.com/flesler/jquery.scrollTo
// 	$("a.scroll").click(function() {
// 		$.scrollTo($(".div"), 800, {
// 			offset: -90
// 		});
// 	});

// 	//Каруселька
// 	//Документация: http://owlgraphic.com/owlcarousel/
// 	var owl = $(".carousel");
// 	owl.owlCarousel({
// 		items : 4
// 	});
// 	owl.on("mousewheel", ".owl-wrapper", function (e) {
// 		if (e.deltaY > 0) {
// 			owl.trigger("owl.prev");
// 		} else {
// 			owl.trigger("owl.next");
// 		}
// 		e.preventDefault();
// 	});
// 	$(".next_button").click(function(){
// 		owl.trigger("owl.next");
// 	});
// 	$(".prev_button").click(function(){
// 		owl.trigger("owl.prev");
// 	});

// 	//Кнопка "Наверх"
// 	//Документация:
// 	//http://api.jquery.com/scrolltop/
// 	//http://api.jquery.com/animate/
// 	$("#top").click(function () {
// 		$("body, html").animate({
// 			scrollTop: 0
// 		}, 800);
// 		return false;
// 	});
	
// 	//Аякс отправка форм
// 	//Документация: http://api.jquery.com/jquery.ajax/
// 	$("form").submit(function() {
// 		$.ajax({
// 			type: "GET",
// 			url: "mail.php",
// 			data: $("form").serialize()
// 		}).done(function() {
// 			alert("Спасибо за заявку!");
// 			setTimeout(function() {
// 				$.fancybox.close();
// 			}, 1000);
// 		});
// 		return false;
// 	});

 });



if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vflWbfRpo/www-widgetapi.js';a.async = true;var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}



