$(function () {
  clickOutsideMenu();

  // menu
  $('.js-open-menu').on('click', function(e) {
    e.preventDefault();
    openMenu();
  });

  $('.js-close-menu').on('click', function(e) {
    e.preventDefault();
    closeMenu();
  });

	// menu fixo ao scrollar
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 30) {
      $('.header').addClass('header--scrolling');
      $('.header__logo .logo').removeClass('logo--white');
    } else{
    	$('.header').removeClass('header--scrolling');
    	$('.header__logo .logo').addClass('logo--white');
    }
  });

  // slider baner
  $('.js-banner-slider').slick({
    arrows: false
  });

  // slider youtube
  $('.js-video-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

  // SCROLLBAR
  if ($('.js-scrollbar').length > 0) {
    const ps = new PerfectScrollbar('.js-scrollbar');
  }

  // SMOOTH SCROLL
  $('.js-scroll').on('click', function(event) {
    smoothScroll();
  });

  $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

  $('.accordion__trigger').click(function(e) {
    console.log($(this));
    var dropDown = $(this).siblings('.accordion__content');
    console.log(dropDown);

    $(this).closest('.accordion').find('.accordion__content').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).closest('.accordion').find('a.active').removeClass('active');
        $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();

    e.preventDefault();
  });

  // Filtro produtos
  var grid = new Muuri('.grid', {
    // items: '[data-produto="melhorador"]',
    layout: {
      // rounding: true
    }
    // sortData: {
    //   produto: function (item, element) {
    //     return element.getAttribute('data-produto').toUpperCase();
    //   }
    // }
  });

  grid.filter('[data-produto="melhorador"]');

  $('.js-melhoradores').on('click', function () {
    grid.filter('[data-produto="melhorador"]');
  });

  $('.js-linha').on('click', function () {
    grid.filter('[data-produto="rustyk"]');
  });
});

function closeMenu() {
  $('.nav').removeClass('nav--open');
  $('.js-trigger-nav').removeClass('menu-icon--open');
  $('.menu__item').removeClass('menu__item--is-selected');
  $('body').removeClass('overflow-hidden');
}

function openMenu() {
  $('.js-trigger-nav').addClass('menu-icon--open');
  $('.nav').addClass('nav--open');
  $('body').addClass('overflow-hidden');
}

function viewport() {
  var e = window, a = 'inner';
  if (!('innerWidth' in window )) {
      a = 'client';
      e = document.documentElement || document.body;
  }
  return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}

function checkWindowWidth() {
  var w = viewport().width;
  var size = '';
  if(w > 991){
    size = 'desktop';
  } else{
    size = 'mobile';
  }

  return size;
}

function clickOutsideMenu() {
  $(document).on('mouseup', function(e) {
    var elem = $('.nav');

    if (!elem.is(e.target) && elem.has(e.target).length === 0) {
      closeMenu();
    }
  });
}

function smoothScroll() {
	if (this.hash !== '') {
		event.preventDefault();
		var hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top - 100
		}, 800, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			//window.location.hash = hash;
		});
	}
}
