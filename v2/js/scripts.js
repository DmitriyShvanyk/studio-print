(function($){
	
	"use strict";	
		
	/*-------------------------------------------------*/
    /* =  fonts
    /*-------------------------------------------------*/
	//$("head").append("<link href='http://fonts.googleapis.com/css?family=PT+Serif:400,700,400italic,700italic|Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800|Roboto+Slab:300,700,100,400&subset=latin,cyrillic-ext,cyrillic' rel='stylesheet' type='text/css'>");
	
	
	/*-------------------------------------------------*/
    /* =  placeholder
    /*-------------------------------------------------*/
	jQuery('input[placeholder], textarea[placeholder]').placeholder();
	
	
	/*-------------------------------------------------*/
    /* =  nav menu 
    /*-------------------------------------------------*/	
	$('#btn-menu').click(function() {
        $(this).toggleClass('open');
        $('.b-menu-inner').toggleClass('b-menu-inner--open');
    });
    $('.b-menu-list__link').click(function() {
        $('#btn-menu').toggleClass('open');
        $('.b-menu-inner').toggleClass('b-menu-inner--open');
    });
	
	
	/*-------------------------------------------------*/
    /* =  tabs 
    /*-------------------------------------------------*/	
	$('.b-studio-tabs__list-item').on('click', function(){		
		$('.b-studio-tabs__list-item__current').removeClass('b-studio-tabs__list-item__current');
		$(this).addClass('b-studio-tabs__list-item__current');			
		
		$('.b-studio-tabs__content--current').removeClass('b-studio-tabs__content--current');		
		$('.b-studio-tabs__content').eq($(this).index()).addClass('b-studio-tabs__content--current');			
	});
	
	
	/*-------------------------------------------------*/
    /* =  fancybox popup
    /*-------------------------------------------------*/
	
    $(".modalbox").fancybox({
        padding: 0,
        fitToView: false,
        maxWidth: 400,
        maxHeight: 9999,
        width: '96%',
        height: '85%',
        autoSize: false,
		wrapCSS: 'custom-popup-order',
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
	
	
	jQuery(".foto-projects").attr('rel', 'group').fancybox({		
        margin: [45, 10, 10, 10],
		wrapCSS: 'fancybox-foto-projects',
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
	
	
	/*-------------------------------------------------*/
    /* =  slider-programm
    /*-------------------------------------------------*/

    $("[id^=slider-studio-product-]").owlCarousel({
        items: 1,
        navigation: true,
        pagination: false,
        slideSpeed: 300,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1],
        itemsTablet: [768, 1],
        itemsMobile: [479, 1]
    });
	
	
	/*-------------------------------------------------*/
    /* =  constructor hide/show
    /*-------------------------------------------------*/
	$('.b-studio-constructor').find('.btn>a').click(function(e){
		e.preventDefault();
		$('.b-studio-constructor__code').slideToggle();
	})
	
	
	
	$('a[href=#product-1]').on('click', function(e){
		$('.b-menu-list__link').removeClass('act');
		$(this).addClass('act');
		$('.b-studio-tabs__list-item__current').removeClass('b-studio-tabs__list-item__current');
		$('.b-studio-tabs__list-item').eq(0).addClass('b-studio-tabs__list-item__current');
		$('.b-studio-tabs__content').hide();
		$('#product-1').show();		
	});
	$('a[href=#product-2]').on('click', function(e){
		$('.b-menu-list__link').removeClass('act');
		$(this).addClass('act');
		$('.b-studio-tabs__list-item__current').removeClass('b-studio-tabs__list-item__current');
		$('.b-studio-tabs__list-item').eq(1).addClass('b-studio-tabs__list-item__current');
		$('.b-studio-tabs__content').hide();
		$('#product-2').show();		
	});
	$('a[href=#product-3]').on('click', function(e){
		$('.b-menu-list__link').removeClass('act');
		$(this).addClass('act');
		$('.b-studio-tabs__list-item__current').removeClass('b-studio-tabs__list-item__current');
		$('.b-studio-tabs__list-item').eq(2).addClass('b-studio-tabs__list-item__current');
		$('.b-studio-tabs__content').hide();
		$('#product-3').show();		
	});
	
	
	
	/*-------------------------------------------------*/
    /* =  scrolling 
    /*-------------------------------------------------*/
    $('.link-logo').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 0
        }, 500);
        e.preventDefault();
    });
	
	$('a[href^=#product-]').bind("click", function(e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 250
        }, 500);
        e.preventDefault();
    });	
	
	
})(window.jQuery);