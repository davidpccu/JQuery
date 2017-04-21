# jQuery Document

## different with document.ready

+ $(function)
```
$(function() {
    //dosomething
});

$(document).ready(function(){
    //something
});
```
說明: 以上兩個是相同的意思，意指在DOM tree載入完成後再執行方法，這個方式主要是用在前端UI要操作DOM tree時使用，但無法回傳任何jQuery相關物件。


+ (function($))(jQuery)
```
(function($){
    //something
})(jQuery);
```
說明: 
1. 這個方式主要是用在jQuery plugin，實際上是執行了一個匿名的function並回傳jQuery物件，當jQuery載入完成後便會開始執行，但無法操作DOM tree。
2. 基本上是()(para)匿名方法(anonymous function)，傳承jQuery的函式庫，jQuery plugins都是用這樣的架構。

### Plugin 樣版
```
(function( $ ){

    $.fn.mytoolbox = function() {
       return this.each(function() {
             alert("this.innerHTML:"+this.innerHTML);
       });
    };

})(jQuery)

$(document).ready( function() {
        $('#myDIV').mytoolbox();
})

<div id="myDIV">Hello jQuery Plugin</div>
```
[參考](http://expect7.pixnet.net/blog/post/38085270-%5B%E7%A8%8B%E5%BC%8F%5D%5Bjquery%5D-%E8%87%AA%E5%B7%B1%E7%9A%84%E7%AC%AC%E4%B8%80%E5%80%8Bjquery-plugin!-hello-worl "參考")

## use strict (嚴格模式) strict mode
```
"use strict";

function testFunction(){
    var testvar = 4;
    return testvar;
}
// This causes a syntax error.
testvar = 5;
```
[參考](https://msdn.microsoft.com/library/br230269(v=vs.94).aspx "參考")







