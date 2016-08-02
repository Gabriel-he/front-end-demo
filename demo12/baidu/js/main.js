
/**
 * [单例模式,用于处理主题相关的背景及颜色样式操作]
 */
var theme = (function (){

    var themeInstance;
    //生成实例
    function init (arg1,arg2){
        console.log('init');
        
        this.strImg =  "";
        this.clrStyle =  0;

        //实例方法
        //存储方案
        this.storeTheme = function (){
            if(window.localStorage) {
                localStorage.strImg = this.strImg;
                localStorage.clrStyle = this.clrStyle;
            }
        };
        //获取方案
        this.getTheme = function (){
            if (window.localStorage) {
                this.strImg = localStorage.strImg;
                this.clrStyle = localStorage.clrStyle;
            }
            //以便链式调用
            return this;
        };
        //应用方案
        this.applyTheme = function (){
            // 正则检查入参
            var reg = /^url/i;
            if(reg.test(this.strImg)){
                $("body").css({ "background": this.strImg, "background-size": "cover" });
                setBarClr(this.clrStyle);
            }
        };
    }
    //获取实例
    return {
        getInstance: function(arguments) {
            if (themeInstance === undefined){
                themeInstance = new init(arguments);
            }
            console.log(themeInstance);
            return themeInstance;
        }
    };
    
})();

/**
 * [setBarClr description设置页首颜色样式]
 * @param  style {[字符串]} [深或浅颜色]
 */
function setBarClr(style){
    var logo = $("#bd-logo-container");
    if (style == 'light'){
        // 对顶部栏设置浅色系主题
        $("header").css({
            "background-color": "#919198",
            "border-bottom": "1px solid #919198"
        });


    } else {
        // 默认对顶部栏设置深色样式主题，故无需检查入参
        $("header").css({
            "background-color": "transparent",
            "border-bottom-color": "transparent"
        });
    }
    $(".header-wd").each(function(index){
    $(this).css("color","white");
    });
    logo.removeClass('bd-logo-pic-origin');
    logo.addClass('bd-logo-pic-light'); 
}
/**
 * [DOM操作主函数,在其中处理各类click事件]
 * @param  null
 * @return null
 */
$(document).ready(function() {
    //获取单例对象
    var objTheme = theme.getInstance();
    //应用存储于本地的主题方案
    objTheme.getTheme().applyTheme();

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
        var logo = $("#bd-logo-container");
        picBox.click(function() {
            $('.pic-chosen').removeClass("pic-chosen");
            picBox.addClass("pic-chosen");
            var img = $(".pic-chosen img");
            var str = "url(" + img.attr("src") + ")no-repeat";
            //console.log(str);
            $("body").css({ "background": str, "background-size": "cover" });
            
            // 按色系更换header样式
            var hdlr = img.attr("alt");
            setBarClr(hdlr);
            // 存储背景方案
            objTheme.strImg = str;
            objTheme.clrStyle = hdlr;
            objTheme.storeTheme();
        });
    });
    // 取消皮肤
    $(".no-skin-wrap").click(function(){
    	var logo = $("#bd-logo-container");
    	// logo change back
        logo.removeClass('bd-logo-pic-light');
        logo.addClass('bd-logo-pic-origin'); 

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
        objTheme.strImg = "";
        objTheme.clrStyle = 0;
        objTheme.storeTheme();
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
