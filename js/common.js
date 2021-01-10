function gnbFnc(element) {
    var menu1 = element.find('> li > a');
    var subMenu1 = element.find('ul');
    var headerWrap = element.closest('header');
    var headerBg = $('<div class="header-bg"></div>').css({
        'position': 'absolute',
        'left': '0',
        'top': '107px',
        'height': '310px',
        'display': 'none',
        'width': '100%',
        'background-color': '#fff',
        'box-shadow': '0 5px 5px rgba(0,0,0,0.1)'
    });
    headerWrap.append(headerBg);

    var oldMenu = null;
    menu1.on('mouseover focus', function() {
        if (!$('html').hasClass('pc')) return;
        // if (oldMenu != null) oldMenu.removeClass('on');
        menu1.filter('.on').removeClass('on');
        $(this).addClass('on');
        subMenu1.stop(true).slideDown(500);
        headerBg.stop(true).slideDown(500);
        oldMenu = $(this);
    });
    menu1.on('click', function(e) {
        if (!$('html').hasClass('mobile')) return;
        $(this).toggleClass('on');
        e.preventDefault();
    });
    element.on('mouseleave', function() {
        subMenu1.slideUp(500);
        headerBg.slideUp(500);
        if (oldMenu != null) oldMenu.removeClass('on');
    });
}

function allMenuFnc(element) {
    element.on('click', function(e) {
        if ($('html').hasClass('mobile')) {
            $('.gnb-wrap').addClass('on');
        } else {
            $(this).toggleClass('on');
        }
        e.preventDefault();
    });
    $('.mobile-btn-close').on('click', function(e) {
        $('.gnb-wrap').removeClass('on');
        e.preventDefault();
    });
}

function deviceSizeChkFnc() {
    var root = $('html');
    $(window).on('resize', function() {
        var w = $(this).innerWidth();
        //PC: 1096이상
        //Mobile: 1095이하 (751이상)
        //small Mobile: 750이하
        root.attr('class', '');
        if (w >= 1096) {
            root.addClass('pc');
        } else if (w >= 751) {
            root.addClass('mobile');
        } else {
            root.addClass('small mobile');
        }
    });
    //$(window).resize();
    $(window).trigger('resize');
}

function mainVisualControls() {
    $('.main-row-1 .controls a').on('click', function(e) {
        if ($(this).hasClass('pause')) {
            $('.main-row-slide-1').slick('slickPause');
            $(this).removeClass('pause');
        } else {
            $('.main-row-slide-1').slick('slickPlay');
            $(this).addClass('pause');
        }
        e.preventDefault();
    });
}
$(function() {
    deviceSizeChkFnc();
    gnbFnc($('#gnb'));
    mainVisualControls();
    allMenuFnc($('.btn-allemnu'));
    $('.main-row-slide-1').slick({
        'autoplay': true,
        'dots': true
    });
    $('.main-row-slide-3').slick({
        'autoplay': true,
        'dots': true
    });
});