// localstorage键值对
var strKey = "BackgroudImg"; 
var storage = window.localStorage;
var lightKey = "colorOption";
var lightStorage = window.localStorage;
//存储色彩方案
function storeBackgroundPic(strImg,light){
    if(storage) {
        localStorage.strImg = strImg;
        localStorage.light = light;
    } 
}

// 对顶部栏设置深色样式主题
function setDark(){
    var logo = $(".logo-wrap img");

    $("header").css({
        "background-color": "transparent",
        "border-bottom-color": "transparent"
    });

    $(".header-wd").each(function(index){
        $(this).css("color","white");
    });
    //bg-logo change
    logo.attr("src","imgs/logo_white.png");
}
// 对顶部栏设置浅色系主题
function setLight(){
    //alert(1);
    var logo = $(".logo-wrap img");
    
    $("header").css({
        "background-color": "#919198",
        "border-bottom": "1px solid #919198"
    });
    $(".header-wd").each(function(index){
        $(this).css("color","white");
    });
    //bg-logo change
    // console.log(logo);
    logo.attr("src","imgs/logo_white.png");
}
// 读取本地存储颜色方案
function getPreload(){
    var strImg = localStorage.strImg;
    var light = localStorage.light;
    if(strImg){
        $("body").css({ "background": strImg, "background-size": "cover" });
        if(light == 1){
            setLight();
        }else{
            setDark();
        }
    }
    return;
}

$(document).ready(function() {
    getPreload();
    // 控制换肤界面滑动
    $('#changeSkin').click(function() {
        $('.skin-container').slideDown(500);
    });
    $('.slide-up-wrap').click(function() {
        $('.skin-container').slideUp(500);
    });
    // 换肤界面中的标签页切换
    $('.skin-kind-list li').each(function(index) {
        var liNode = $(this);
        liNode.click(function() {
            $('.skin-kind-list .sk-chosen').removeClass("sk-chosen");
            $('.pics-wrap .pp-chosen').removeClass("pp-chosen");
            liNode.addClass("sk-chosen");
            $('.pics-preview').eq(index).addClass("pp-chosen");
        });

    });
    // 换肤特效
    $('.pic-box').each(function(index) {
        var picBox = $(this);
        var logo = $(".logo-wrap img");
        picBox.click(function() {
            $('.pic-chosen').removeClass("pic-chosen");
            picBox.addClass("pic-chosen");
            var img = $(".pic-chosen img");
            var str = "url(" + img.attr("src") + ")no-repeat";
            //console.log(str);
            $("body").css({ "background": str, "background-size": "cover" });
            
            // 按色系更换header样式
            var hdlr = img.attr("alt");
            if (hdlr == "light") {
                // 浅色系主题
                setLight();
                // 存储背景方案
                storeBackgroundPic(str, 1);
            } else {
                // 深色系
                setDark();
                storeBackgroundPic(str, 0);
            }

        });
    });
    // 取消皮肤
    $(".no-skin-wrap").click(function(){
    	var logo = $(".logo-wrap img");
    	// logo change back
        logo.attr("src","imgs/bd_logo.png");

    	$('.pp-chosen .pic-chosen').removeClass("pic-chosen");
    	$("body").css({ "background": "none"});
    	$("header").css({
            "background-color": "white",
            "border-bottom-color": "#eee"
        });
        $(".header-wd").each(function(index){
            $(this).css("color","#555");
        });
        // 更新本地背景方案
        storeBackgroundPic("",0);
    });
    //内容标签切换
    $('.content-nav .content-tab').each(function(index) {
        var tab = $(this);
        // var icon = tab.children("i");
        // console.log(icon);
        tab.click(function() {
            $('.content-tab-chosen').children("i").css("background-position","-13px 0px");
            $('.content-tab-chosen').removeClass("content-tab-chosen");
            $('.sorted-content-chosen').removeClass("sorted-content-chosen");

            tab.addClass("content-tab-chosen");
            $('.content-tab-chosen').children("i").css("background-position","-142px 0px");
            $('.sorted-content').eq(index).addClass("sorted-content-chosen");
        });

    });

});
