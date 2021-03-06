/*
Author: LIQUID DESIGN
Author URI: https://lqd.jp/wp/
Licensed under GPLv2 (http://www.gnu.org/licenses/gpl-2.0.html)
*/
jQuery(function ($) {
    $('a[href^="#"]:not(a.carousel-control-prev, a.carousel-control-next, a.nav-link, a[data-toggle="collapse"], a[data-toggle="tab"])').click(function () {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('body,html').animate({
            scrollTop: position
        }, speed, 'swing');
        return false
    });
    $('.post_links').click(function() {
        location.href = $(this).find('.post_ttl a').attr('href');
    });
    $('.navbar-toggler').click(function () {
        $(this).toggleClass('collapsed');
        $('.navbar li').toggleClass("d-none d-md-block")
    });
    $('iframe[src*="youtube"]').wrap('<div class="rwdwrap"></div>');
    $('.detail_comments input[type="text"], .detail_comments input[type="radio"], .detail_comments textarea, .detail_comments select').addClass("form-control");
    $('.detail_comments input[type="submit"]').addClass("btn btn-primary");
    $('.searchform').addClass("form-inline");
    $('.searchform input[type="text"]').addClass("form-control");
    $('.searchform input[type="submit"]').addClass("btn btn-primary");
    $('.widget_search input[type="text"]').addClass("form-control");
    $('.detail table').addClass("table table-bordered");
    $('.post_body h1, .post_body h2, .ttl').wrapInner("<span></span>");
    if (navigator.userAgent.indexOf('iPhone') > 0 || navigator.userAgent.indexOf('iPod') > 0 || navigator.userAgent.indexOf('Android') > 0) {
        $('.copy').prepend('<div class="rwd"><div class="rwd_in"><strong class="hidden">Mobile</strong><a href="javascript:void(0);" class="rwd_sp hidden_sp">Mobile</a> | <strong class="hidden_sp">Desktop</strong><a href="javascript:void(0);" class="rwd_pc hidden">Desktop</a></div></div>');
        $(".hidden_sp").hide();
        $(".rwd_in").css({
            'color': '#333',
            'display': 'inline-block',
            'background': '#eee',
            'margin': '20px',
            'padding': '10px 15px',
            'border-radius': '5px',
            '-webkit-border-radius': '5px',
            '-moz-border-radius': '5px'
        });
        if (localStorage.rwd) {
            mode = localStorage.rwd
        } else {
            mode = "sp"
        }
        if (mode == "sp") {
            $(".rwd *").removeClass("hidden")
        } else {
            $(".rwd .hidden").hide();
            $(".rwd .hidden_rp").hide();
            $(".rwd .hidden_sp").show();
            $('meta[name="viewport"]').attr('content', 'width=1280, initial-scale=0.25');
            $(".rwd").css({
                'font-size': '50px'
            })
        }
        $(".rwd_pc").click(function () {
            localStorage.rwd = "pc";
            url = location.href;
            location.href = url;
            return false
        });
        $(".rwd_sp").click(function () {
            localStorage.rwd = "sp";
            url = location.href;
            location.href = url;
            return false
        });
        $('.nav>.menu-item-has-children>ul, .nav>.page_item_has_children>ul').show()
    } else {
        $('.nav>.menu-item-has-children, .nav>.page_item_has_children').addClass("dropdown");
        $('.nav>.menu-item-has-children>a, .nav>.page_item_has_children>a').addClass("dropdown-toggle");
        $('.nav>.menu-item-has-children>ul, .nav>.page_item_has_children>ul').addClass("dropdown-menu");
        $('.nav>.menu-item-has-children>ul>li, .nav>.page_item_has_children>ul>li').addClass("dropdown-item");
        $('.menu-item-has-children, .page_item_has_children').hover(function () {
            $(this).toggleClass('open')
        }, function () {
            $(this).toggleClass('open')
        })
    }
});