// TOGGLE RESPONSIVE NAV ACTIVE STATE
$( document).on('click', '#rsp-menu', function() {
    $('nav#main-nav').toggleClass('nav-active');

    $('nav#main-nav a').on('click', function() {
        $('nav#main-nav').removeClass('nav-active');
    });
});

// OFFENER TREFF TIME BTN OVERLAY BOX
$(document).on('click', '.btn-time', function(){
    var time = $(this).data('time');
    $('#offener-treff .box-overlay').fadeIn('fast');
    if(time == 'jugend') {
        var timeText = '<b>Montag - Mittwoch</b><br>15:00 - 20:00 Uhr<br><span>13 - 21 Jahre</span>';
    } else {
        var timeText = '<b>Montag - Mittwoch</b><br>15:00 - 19:00 Uhr<br><span>8 - 12 Jahre</span>';
    }
    $('#offener-treff .box-overlay p').html(timeText);
});

// TEAM FAVOURITE FOOD INFO
$(document).on('click', '.team-food', function(){
    var food = $(this).data('food');
    $('#team .box-overlay').fadeIn('fast');
    $('#team .box-overlay p').html(food);
});

$(document).on('click', '.box-overlay', function() {
    $(this).fadeOut('fast');
});

// START INTRO HEADER
$(window).on('load', function(){
    $('.slide-item img').animate({
        opacity: 0.4
    });
    $('.slide div').css({
        'opacity':'1',
        'transform':'translateY(0px)'
    });
    setTimeout(function(){
        $('a.bx-next, a.bx-prev').css({
            'transform':'translateX(0px)',
            'opacity':'1'
        });
    }, 400);
});

// INTRO SUB HEADER
$(window).on('load', function(){
    $('img.raeume-header-img').animate({
        'opacity':'0.4'
    });
    $('.page-header-raeume-details').css({
        'opacity':'1',
        'transform':'translateX(0px)'
    });
    $('img.page-header-img').css({'opacity':'0.3'});
    $('.page-header h1').css({'transform':'translateY(0px)', 'opacity':'1'});
});

// SLICK CAROUSEL
$(document).ready(function () {
	$('.slick-carousel').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1
	});
});

// MAIN SLIDER
$(document).ready(function(){
    $('.slide').bxSlider({
        nextSelector: '.next',
        prevSelector: '.prev',
        pager: true
    });
});	

// RÄUME SLIDER
$(document).ready(function(){
    $('.raeume-slider').bxSlider({
        nextSelector: '.next',
        prevSelector: '.prev',
    });
});	

// CLONE NAV LOGO FOR ANIMATION PURPOSE
$(document).ready(function() {
	$('#main-nav').clone(true).attr('id','main-nav-clone').insertAfter('#main-nav');
});

// NAVIGATION CLONE ANIMATION
$(function(){
	var scr_pos = 0;
	if ($(window).width() > 1024) {
		$(window).scroll(function(){
			var cur_pos = $(this).scrollTop();
			var stick = $('body').offset().top + 400;
			if(cur_pos > scr_pos){
				if(cur_pos > stick) {
					setTimeout(function(){
						$('#main-nav-clone').css({'opacity':'1'});
					}, 400);
					
					$('#main-nav-clone').show();			
				}
			} else {
				if(cur_pos < stick) {
					setTimeout(function(){
						$('#main-nav-clone').hide();
					}, 400);
					
					$('#main-nav-clone').css({'opacity':'0'});
				}
			}
			scr_pos = cur_pos;
		});
	}
});

// Calendar toggle active state for Events
const calendar = document.querySelector('.calendar-grid');
const calendarHeader = document.querySelectorAll('.calendar-events');

calendarHeader.forEach(function(cal){
    cal.addEventListener('click', function() {
        calSibling = cal.nextElementSibling;
        calSibling.classList.toggle('calendar-active');
        cal.classList.toggle('calendar-header-active');
    });
});

// Year active state toggle for News
const calendarNews = document.querySelectorAll('.calendar-news');

calendarNews.forEach((cn)=> {
    cn.addEventListener('click', () => {
        let calendarCurrent = document.querySelector('.calendar-header-active');
        calendarCurrent.classList.remove('calendar-header-active');
        cn.classList.add('calendar-header-active');
    });
});

// On click scroll to animation
// $(document).ready(function(){
//     const btns = document.querySelectorAll('.btn-scroll');

//     btns.forEach((btn) => {
//         const target = btn.dataset.target;
    
//         btn.addEventListener('click', (e) => {       
//             e.preventDefault();
//             let duration = e.target.dataset.duration;
    
//             if(duration === undefined) {
//                 duration = 1000;
//             }

//             let offSet;
            
//             if ($(window).width() > 1024) {
//                 offSet = 0;
//             } else {
//                 offSet = 1;
//             }
            
//             jump(target,{
//                 duration: duration, 
//                 offset: offSet
//             });
//         });
//     });
// });

// Handle overlay animations
$(document).on('click', '.overlay-show', function(e) {
    e.preventDefault();

    const overlayContent = $(this).data('content');

    $('.overlay').css({'display':'block'});
    $(overlayContent).css({'display':'block'});
    $('body').addClass('noscroll');
    setTimeout (() => {
        $(overlayContent).css({'opacity':'1'});
        $('.overlay-mask').css({'opacity':'1'});
    }, 100);

    $('.overlay-close').on('click', function() {
        $(overlayContent).css({'opacity':'0'});
        $('.overlay-mask').css({'opacity':'0'});
        setTimeout (() => {
            $(overlayContent).css({'display':'none'});
            $('.overlay').css({'display':'none'});
            $('body').removeClass('noscroll');
        }, 400);
    });
});

// BACK BUTTON 
var backBtn = document.querySelector('.back-btn');
backBtn.addEventListener('click', () => {
    window.history.back();
});