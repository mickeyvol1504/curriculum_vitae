$(document).ready(function() {

	var today = new Date();
	var options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'long',
	};
	document.getElementById("today").innerHTML = today.toLocaleString("en-US", options);
		digitalWatch();

	// Навигация сайта
	$('#first-page').on('click', function(){
		$("#side1" ).removeClassWild("side-*").addClass("side-first");
		$("#side1 .side-wrap" ).css("opacity", "1");
		$("#side2" ).removeClassWild("side-*").addClass("side-second");
		$("#side2 .side-wrap" ).css("opacity", "0.1");
		$("#side3" ).removeClassWild("side-*").addClass("side-third");
		$("#side3 .side-wrap" ).css("opacity", "0.1");
		$("#side4" ).removeClassWild("side-*").addClass("side-fourth");
		$("#side4 .side-wrap" ).css("opacity", "0.1");
		$('.active-button').removeClass('active-button');
		$('#first-page').addClass('active-button');
	});
	$('#second-page').on('click', function(){
		$("#side2" ).removeClassWild("side-*").addClass("side-first");
		$("#side2 .side-wrap" ).css("opacity", "1");
		$("#side3" ).removeClassWild("side-*").addClass("side-second");
		$("#side3 .side-wrap" ).css("opacity", "0.1");
		$("#side4" ).removeClassWild("side-*").addClass("side-third");
		$("#side4 .side-wrap" ).css("opacity", "0.1");
		$("#side1" ).removeClassWild("side-*").addClass("side-fourth");
		$("#side1 .side-wrap" ).css("opacity", "0.1");
		$('.active-button').removeClass('active-button');
		$('#second-page').addClass('active-button');
	});
	$('#third-page').on('click', function(){
		$("#side3" ).removeClassWild("side-*").addClass("side-first");
		$("#side3 .side-wrap" ).css("opacity", "1");
		$("#side4" ).removeClassWild("side-*").addClass("side-second");
		$("#side4 .side-wrap" ).css("opacity", "0.1");
		$("#side1" ).removeClassWild("side-*").addClass("side-third");
		$("#side1 .side-wrap" ).css("opacity", "0.1");
		$("#side2" ).removeClassWild("side-*").addClass("side-fourth");
		$("#side2 .side-wrap" ).css("opacity", "0.1");
		$('.active-button').removeClass('active-button');
		$('#third-page').addClass('active-button');
	});
	$('#fourth-page').on('click', function(){
		$("#side4" ).removeClassWild("side-*").addClass("side-first");
		$("#side4 .side-wrap" ).css("opacity", "1");
		$("#side1" ).removeClassWild("side-*").addClass("side-second");
		$("#side1 .side-wrap" ).css("opacity", "0.1");
		$("#side2" ).removeClassWild("side-*").addClass("side-third");
		$("#side2 .side-wrap" ).css("opacity", "0.1");
		$("#side3" ).removeClassWild("side-*").addClass("side-fourth");
		$("#side3 .side-wrap" ).css("opacity", "0.1");
		$('.active-button').removeClass('active-button');
		$('#fourth-page').addClass('active-button');
	});

	// Owl-carousel
	var owl = $(".owl-carousel");
	owl.owlCarousel({
		items: 4,
		slideSpeed : 800,
		autoPlay: true
	});
	$(".next-button").click(function(){
		owl.trigger('owl.next');
		paginationSpeed : 600;
	});
	$(".prev-button").click(function(){
		owl.trigger('owl.prev');
		paginationSpeed : 600;
	});

});

	// Удаление класса в CSS
	(function($) {
		$.fn.removeClassWild = function(mask) {
			return this.removeClass(function(index, cls) {
				var re = mask.replace(/\*/g, '\\S+');
				return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
			});
		};
	})(jQuery);

	// Электронные часы
	function digitalWatch() {
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		if (hours < 10) hours = "0" + hours;
		if (minutes < 10) minutes = "0" + minutes;
		if (seconds < 10) seconds = "0" + seconds;
		document.getElementById("digital-watch").innerHTML = hours + ":" + minutes + ":" + seconds;
		setTimeout("digitalWatch()", 1000);
	};
