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
說明: 這個方式主要是用在jQuery plugin，實際上是執行了一個匿名的function並回傳jQuery物件，當jQuery載入完成後便會開始執行，但無法操作DOM tree。

Syntax: 


## 其他參考函示庫(圖表)
+ [Charts.js](http://www.chartjs.org/ "Charts.js")
+ [Morris.js](http://morrisjs.github.io/morris.js/index.html "Morris.js")

