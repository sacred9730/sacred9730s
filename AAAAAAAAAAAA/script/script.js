$(document).ready(function(){
    $("a").click(function(e){e.preventDefault()});

   


    $("#link > ul > li").eq(0).click(im1);
    $("#link > ul > li").eq(1).click(im2);
    $("#link > ul > li").eq(2).click(im3);

    function im1(){
        $(".img").css("position","relative");
        $(".im").css("position","absolute");
        $(".im").hide().eq(0).show();
        let start = 0;
        let len = $(".im").length;
        setInterval(function(){
            let next = (start+1)%len;
            $(".im").eq(start).fadeOut(900);
            $(".im").eq(next).fadeIn(900);
            start = next;
        },2800);
    };
    function im2(){
        $(".img").append($(".im").eq(0).clone(true));
        let start = 0;
        let vh = $(".im").outerHeight();
        setInterval(function(){
            start++;
            $(".img").animate({marginTop: -start*vh});
            if(start == 3){setTimeout(function(){
                $(".img").animate({marginTop: 0}, 0);
                start = 0;
            })};
        },2800);
    };
    function im3(){
        $(".img").append($(".im").eq(0).clone(true));
        $(".img").css("display","flex");
        $(".img").css("width","400%");
        let start = 0;
        let vh = $(".im").outerWidth();
        setInterval(function(){
            start++;
            $(".img").animate({marginLeft: -start*vh});
            if(start == 3){setTimeout(function(){
                $(".img").animate({marginLeft: 0}, 0);
                start = 0;
            })};
        },2800);

    };

    $("#cg > ul > li > ul").hide().eq(0).show();
    $("#cg > ul > li > a").click(function(){
        $(this).next().show().parent().addClass("at").siblings().removeClass("at").find("ul").hide();
    });

    $(".im").click(function(){
        $('.pop').show();
        $(".pop2").show();
    });
    $(".close").click(function(){
        $(".pop").hide();
        $(".pop2").hide();
    });

    $(".nav > ul > li").hover(n1,n2);
    function n1(){
        
        $(this).find(".sm > li > a").stop().css("width","160px");
        $(this).find(".sm > li > a").stop().css("font-size","unset");
        $(".nav2").css("width","100%");

    };
    function n2(){
        $(this).find(".sm > li > a").stop().css("width","0px");
        $(this).find(".sm > li > a").stop().css("font-size","0%");

        $(".nav2").css("width","0%");
    };

});