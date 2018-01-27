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
    $fs_list_layout = $("#fs .fs_list #fs_list_layout_item .list_layout_item");

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
