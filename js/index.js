/**
 * Created by yangliu on 2018/1/24.
 */
var $position = $("#shortcut .position"),
    $position_a = $("#shortcut .position a"),
    $allposition = $("#shortcut .all-position"),
    $allposition_span = $("#shortcut .all-position span"),
    $myjd_btn = $("#shortcut .myjd_btn"),
    $myjd_layout = $("#shortcut .myjd_layout"),
    $service_btn = $("#shortcut .service_btn"),
    $service_layout = $("#shortcut .service_layout");
/******************快捷连接***************************/
//鼠标悬浮dropdown内容区块
mouseenter($position,$allposition,$position);
mouseenter($allposition,$allposition,$position);
mouseleave($position,$allposition,$position);
mouseleave($allposition,$allposition,$position);

//我的京东
mouseenter($myjd_btn,$myjd_layout,$myjd_btn);
mouseleave($myjd_btn,$myjd_layout,$myjd_btn);
mouseenter($myjd_layout,$myjd_layout,$myjd_btn);
mouseleave($myjd_layout,$myjd_layout,$myjd_btn);
//地点点击
$allposition_span.on("click",function(){
    $(this).parents("li").siblings().find("span").removeClass("bg-style-red");
    $(this).addClass("bg-style-red");
    $position_a.text($(this).html());
})

//客户服务
mouseenter($service_btn,$service_layout,$service_btn);
mouseleave($service_btn,$service_layout,$service_btn);
mouseenter($service_layout,$service_layout,$service_btn);
mouseleave($service_layout,$service_layout,$service_btn);

function mouseenter($button,$block,$btn){
    $button.on("mouseenter",function(){
        $block.css("display","block");
        $btn.addClass("dropdown");
    });
}
function mouseleave($button,$block,$btn){
    $button.on("mouseleave",function(){
        $block.css("display","none");
        $btn.removeClass("dropdown");
    });
}
/******************fs***************************/
var $fs_list = $(".fs_list"),
    $fs_list_li = $("#fs .fs_list .fs_list_title li"),
    $fs_list_layout_wrap = $("#fs_list_layout_item"),
    $fs_list_layout = $("#fs .fs_list #fs_list_layout_item .list_layout_item"),
    $slide_li = $(".slide_list .slide_img li"),  //轮播图片li
    $slide_left_button = $(".slide_wrap .slide_left_button"), //轮播上的左箭头
    $slide_right_button = $(".slide_wrap .slide_right_button"), //轮播上的右箭头
    $slide_indicators_btn = $(".slide_wrap .slide_indicators_btn"),  //轮播西面的小圆点
    $tab_head_item = $("#J_news .mod_tab_head_item"),
    $tab_content_item = $("#J_news .mod_tab_content_item"),
    $news_tab_active = $("#J_news .news_tab_active");

//菜单
$fs_list_li.on("mouseenter",function(){
    var index = $(this).index();
    $(this).siblings().removeClass("hover");
    $(this).addClass("hover");
    $fs_list_layout_wrap.css("display","block");
    $fs_list_layout.eq(index).siblings().css("display","none");
    $fs_list_layout.eq(index).css("display","block");
})
$fs_list_layout.on("mouseenter",function(){
    var index = $(this).index();
    $(this).siblings().css("display","none");
    $fs_list_li.eq(index).addClass("hover");
})
$fs_list_layout.on("mouseleave",function(){
    var index = $(this).index();
    $fs_list_layout_wrap.css("display","none");
    $(this).css("display","none");
    $fs_list_li.eq(index).removeClass("hover");
})
$fs_list.on("mouseleave",function(){
    $fs_list_li.removeClass("hover");
    $fs_list_layout_wrap.css("display","none");
    $fs_list_layout.css("display","none");
})
//轮播
slide();
function slide(){
    var slideindex = 1,
        slideTime,
        slideTime2,
        slideTime3;

    sliding();
    $slide_indicators_btn.on("mouseenter",function(){
        clearslideTime();
        var index = $(this).index();
            slideindex = index+1;
        $(this).addClass("slide_indicators_active");
        $(this).siblings().removeClass("slide_indicators_active");
        $slide_li.eq(index).siblings().removeClass("slide_img_active");
        $slide_li.eq(index).addClass("slide_img_active");
        slideTime3 = setTimeout(function(){
            slideTime2 = sliding();
        },3000);
    });
    $slide_li.on("mouseenter",function(){
        clearslideTime();
    })
    $slide_li.on("mouseleave",function(){
        clearslideTime();
        sliding();
    })
    $slide_left_button.on("click",function(){
        clearslideTime();
        slideindex = slideindex-2 ;
        if(slideindex < 0){
            slideindex = 7;
        }else if(slideindex > 7){
            slideindex = 0;
        }

        $slide_li.eq(slideindex).siblings().removeClass("slide_img_active");
        setTimeout(function(){
            $slide_li.eq(slideindex).addClass("slide_img_active");
            $slide_indicators_btn.eq(slideindex).siblings().removeClass("slide_indicators_active");
            $slide_indicators_btn.eq(slideindex).addClass("slide_indicators_active");
            slideindex++;
        },200)
        sliding();
    })
    $slide_right_button.on("click",function(){
        clearslideTime();
        if(slideindex < 0){
            slideindex = 7;
        }else if(slideindex > 7){
            slideindex = 0;
        }

        $slide_li.eq(slideindex).siblings().removeClass("slide_img_active");
        setTimeout(function(){
            $slide_li.eq(slideindex).addClass("slide_img_active");
            $slide_indicators_btn.eq(slideindex).siblings().removeClass("slide_indicators_active");
            $slide_indicators_btn.eq(slideindex).addClass("slide_indicators_active");
            slideindex++;
        },200)
        sliding();
    })
    function sliding(){
        slideTime = setInterval(function(){
            if(slideindex > 7){
                slideindex = 0;
            }else if(slideindex < 0){
                slideindex = 7;
            }
            $slide_li.eq(slideindex).siblings().removeClass("slide_img_active");
            setTimeout(function(){
                $slide_li.eq(slideindex).addClass("slide_img_active");
                $slide_indicators_btn.eq(slideindex).siblings().removeClass("slide_indicators_active");
                $slide_indicators_btn.eq(slideindex).addClass("slide_indicators_active");
                slideindex++;
            },200)
        },3000);
    }
    //清除轮循时间
    function clearslideTime(){
        clearInterval(slideTime);
        clearInterval(slideTime2);
        clearTimeout(slideTime3);
    }
}
//促销&&公告
$tab_head_item.on("mouseenter",function(){
    var tabindex = $(this).index();
    $tab_content_item.eq(tabindex).siblings().css("display","none");
    $tab_content_item.eq(tabindex).css("display","block");
    if(tabindex == 1){
        $news_tab_active.css("transform","translateX(58px)");
    }else if(tabindex == 0){
        $news_tab_active.css("transform","translateX(0)");
    }
})
/******************京东秒杀***************************/
var $cd_minute = $("#J_seckill .cd_minute span"),
    $cd_second = $("#J_seckill .cd_second span"),
    $seckill_btn_prev = $("#J_seckill .slider_control_prev"),
    $seckill_btn_next = $("#J_seckill .slider_control_next"),
    $slider_wrapper = $("#J_seckill .slider_wrapper"),
    $sk_chn_slideWrap = $("#J_seckill .sk_chn_slideWrap"),  //倒计时后面自动滚动轮播的包裹层
    $slider_indicators_btn = $("#J_seckill .slider_indicators_btn");

//倒计时
var timeflag = setInterval(function(){
    var second = parseInt($cd_second.text()),
        minute = parseInt($cd_minute.text());

        if(second == 00){
            if(minute == 00){
                clearInterval(timeflag);
            }else{
                $cd_minute.text(minute-1);
                var nowminute = parseInt($cd_minute.text());
                if(nowminute == 0){
                    $cd_minute.text("00");
                }
                $cd_second.text("60");
            }
        }else{
            var nowsecond = second-1;
            if(nowsecond <10){
                $cd_second.text("0"+nowsecond);
            }else{
                $cd_second.text(nowsecond);
            }
        }

},1000);


var positionindex = 1;
$seckill_btn_prev.on("click",function(){
    positionindex = positionindex -1;
    var range =  -800 * positionindex;
       $slider_wrapper.animate({left: range+'px'},"1s",function () {
           if(positionindex == 0){
               $slider_wrapper.css("left","-4000px");
               positionindex = 5;
           }
       });
})
$seckill_btn_next.on("click",function(){
    positionindex = positionindex + 1;
    var range =  -800 * positionindex;
    $slider_wrapper.animate({left: range+'px'},"1s",function () {
        if(positionindex == 6){
            $slider_wrapper.css("left","-800px");
            positionindex = 1;
        }
    });
})
//轮播
var seckillSlideindex = 0;
var seckillSlideTime1,
    seckillSlideTime2,
    seckillSlideBtnTime;

seckillSlideTime1 = setInterval(function(){
    seckillSlide();
},3000);
function seckillSlide(){
    seckillSlideindex = seckillSlideindex +1;
    var range =  -180 * seckillSlideindex;
    $sk_chn_slideWrap.animate({left: range+'px'},"3s",function () {
        if(seckillSlideindex == 2){
            $sk_chn_slideWrap.css("left","0px");
            seckillSlideindex = 0;
        }
        $slider_indicators_btn.eq(seckillSlideindex).siblings().removeClass("slider_indicators_btn_active");
        $slider_indicators_btn.eq(seckillSlideindex).addClass("slider_indicators_btn_active");
    });
}
$slider_indicators_btn.on("mouseenter",function(){
    seckillSlideClearTime();
    var $thisIndex = $(this).index(),
        thisrange = $thisIndex *180;

    seckillSlideindex = $thisIndex;

    $sk_chn_slideWrap.animate({left: -thisrange+'px'},"3s",function () {
        $slider_indicators_btn.eq($thisIndex).siblings().removeClass("slider_indicators_btn_active");
        $slider_indicators_btn.eq($thisIndex).addClass("slider_indicators_btn_active");
        seckillSlideBtnTime = setTimeout(function(){
            seckillSlideTime2 = setInterval(function(){
                seckillSlide();
            },3000);
        },4000);
    });
})

function seckillSlideClearTime(){
    clearInterval(seckillSlideTime1);
    clearInterval(seckillSlideTime2);
    clearTimeout(seckillSlideBtnTime);
}
