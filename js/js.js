"use strict";

gsap.registerPlugin(ScrollTrigger);

$(function(){
    gsap.timeline({
        scrollTrigger:{
            trigger:'.page-one',
            start:'0% 50%',
            end:'30% 0',
            scrub:1,
            markers:false,
        }
    })
    .fromTo(
        '.circle-box',
        {'width':'0', 'height':'0', 'duration':'10', 'ease':'elastic', 'top':'3%'},
        {'width':'2500px', 'height':'2500px', 'duration':'10', 'opacity':'1', 'top':'40%'},
        0)

    gsap.timeline({
        scrollTrigger:{
            trigger:'.page-one .circle-text',
            start:'0% 80%',
            end:'100% 80%',
            scrub:1,
            markers:false,
        }
    })
    .fromTo(
        '.circle-text',
        {'top':'50%', 'duration':'5', 'ease':'elastic', 'opacity':'0'},
        {'duration':'5', 'ease':'none', 'opacity':'1', 'top':'75%'},
        0)

    //scroll
    $(window).on('load scroll', function(){
        var winScroll = $(this).scrollTop(),
            pageOneTop = $(".page-one").offset().top;

        //nav on/off
        var mainContentLength = $(".main-content").length,
            mainContent = $(".main-content"),
            headerHeight = $("header").outerHeight(),
            navMenu = $("nav li");

        for(var i=0;i<mainContentLength;i++){
            if(winScroll >= mainContent.eq(i).offset().top - headerHeight){
                navMenu.removeClass("on").eq(i).addClass("on");
            }
        }

        //header nav scroll
        $('header nav li a').on("click", function(){
            $('html, body').stop().animate({scrollTop: $($(this).attr('href')).position().top - headerHeight},700);
            return false
        });

        //top fade in/out
        if(winScroll >= pageOneTop) {
            $('.floating-btn-box').fadeIn(200);
        }else{
            $('.floating-btn-box').fadeOut(200);
        }

        //scroll effect
        $('.scroll-effect').each(function(){
            var bottomOfElement = $(this).offset().top + $(this).outerHeight() / 5,
                bottomOfWindow = $(window).scrollTop() + $(window).height();
            
            if( bottomOfWindow > bottomOfElement ){
                $(this).stop().animate({'opacity':'1'},300);
            }
        }); 

        //top scroll
        $('.floating-btn-box .top-btn').on("click", function(){
            $('html, body').stop().animate({scrollTop: 0 },700);
            return false
        });

    });

    //tab
    $('.project-tab-btn li').on('click', function(){
        var btnClass = $(this).attr('class');

        // btn ======
        $('.project-tab-btn li').removeClass('on');
        $(this).addClass('on');

        // cont ======
        if(btnClass == 'project-all'){
            $('.project-wrap .project-box').show();
        }else{
            $('.project-wrap .project-box').hide();
            $('.project-wrap .project-box' + '.' + btnClass).show();
        }
    });

    //팝업 열기
    $(".project-wrap").on("click", ".view-iframe", function(){
        var popupName= $(this).attr("id");
        
        $(".project_v3_popup_ifrm").attr("src" , "./project_pop/" + popupName + ".html");

        setTimeout(function(){
            $(".project_v3_popup_ifrm").addClass("on");
        },300);

        $('html, body').css('overflow','hidden');
    });
    //popup iframe body 배경
    $('.project_v3_popup_ifrm').on("load", function(){  
        $(this).contents().find('body').css("background-color", "rgba(0,0,0,0.5)");
    });

    //ham menu
    $("header nav .ham-menu").on("click", function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
            $("header nav ul").removeClass("on");
            $(".page-dim").hide();
            $('html, body').css('overflow','visible');
        }else{
            $(this).addClass("on");
            $("header nav ul").addClass("on");
            $(".page-dim").show();
            $('html, body').css('overflow','hidden');
        }

        $("header nav ul a").on("click", function(){
            if($("header nav .ham-menu").hasClass("on")){
                $("header nav .ham-menu").removeClass("on");
                $("header nav ul").removeClass("on");
                $(".page-dim").hide();
                $('html, body').css('overflow','visible');
            }
        });
    });

    //career 경력기술서
    $(".career-btn").on("click", function(){
        $(".career").addClass("on");
        $(".page-dim").show();
        $('html, body').css('overflow','hidden');
    });
    $(".career-close").on("click", function(){
        $(".career").removeClass("on");
        $(".page-dim").hide();
        $('html, body').css('overflow','visible');
    });
    var listBox = $(".list-box"),
        listBoxLength = $(".list-box").length,
        pLine = $(".p-line li .num"),
        pLineLength = $(".p-line").length;

    for(var j=0;j<listBoxLength;j++){
        listBox.eq(j).find(pLine).each(function(i){
            i = i+1;
            $(this).text(i + ".");
            if(i == pLineLength+1){return false;}
        });
    };
});

