"use strict";

$(document).ready(function(){
    //팝업 닫기
    $(".project_v3_popup .project_v3_popup_close").on("click", function(){

        var popupWrap = $("iframe", window.parent.document);
        popupWrap.removeClass("on");
        
        $('html, body', parent.document).css('overflow','visible');
    });
    //PC / MO tabs
    var tabBtn = $(".project_v3_popup_tab_btn"),
        tabCont = $(".popup_list_box_more");

    tabBtn.on("click", function(){
        var target = $(this);
        var index = target.index();
        tabBtn.removeClass("active");
        target.addClass("active");

        // console.log(index);

        tabCont.removeClass("active").eq(index).addClass("active");
    });
});