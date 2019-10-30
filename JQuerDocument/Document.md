# jQuery Document

### Add jquery to web page in Chrome DevTools

```js
var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);

jQuery.noConflict();
```

### different with document.ready

+ $(function)
```js
$(function() {
    //dosomething
});

$(document).ready(function(){
    //something
});
```
說明: 以上兩個是相同的意思，意指在DOM tree載入完成後再執行方法，這個方式主要是用在前端UI要操作DOM tree時使用，但無法回傳任何jQuery相關物件。

### 立即函式 IIFE

+ (function($))(jQuery) 立即函式（匿名函式）IIFE(Immediately Invoked Function Expression)
```js
(function($){
    //something
})(jQuery);
```
說明: 
1. 在程式邏輯上是『製造一個匿名的函數並且立刻執行』，其目的主要在於產生一個私有的scope，使在其內宣告的變數不會與外界混淆。
2. 這個方式主要是用在jQuery plugin，實際上是執行了一個匿名的function並回傳jQuery物件，當jQuery載入完成後便會開始執行，但無法操作DOM tree。
3. 基本上是()(para)匿名方法(anonymous function)，傳承jQuery的函式庫，jQuery plugins都是用這樣的架構。

#### 補充

```js

function  foo () { .. }

// `foo`是函數引用表達式，然後用`()`執行它
foo ();

// `IIFE`是函數表達式，然後用`()`執行它 
( function  IIFE (){ .. })();

```
說明: 
1. 圍繞在函數表達式(function IIFE(){ .. })外部的( .. )只是一個微妙的JS文法，我們需要它來防止函數表達式被看作一個普通的函數聲明。
2. 在表達式末尾的最後的()—— })();這一行——才是實際立即執行它前面的函數表達式的東西。

### Plugin 樣版
```js
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

+ jQuery(window).load()
```js
$(window).on('load', function() {
    $('body').addClass('loaded');
});
```
說明 :  jQuery(document).ready() 與 jQuery(window).load() 的差異
1. 當 document 物件下所有 DOM 物件都可以正確取得時，就會觸發 jQuery.ready() 註冊的 function，這時雖然後 ```<img src="…" />``` 定義的圖片正在下載，但由於 ```<img>``` 這個 DOM 物件已經都 ready 了，所以 jQuery 並不會等圖片全部下載完畢才執行 ready 事件。
2. 而使用 window 的 load 事件，卻是完全不同的行為，jQuery 裡的 window 的 load 事件與 JavaScript 裡的 window.onload 事件一模一樣，註冊在這裡面的事件都會等到整個視窗裡所有資源都已經全部下載後才會執行，例如該頁面有 100 張圖片就會等 100 圖片都下載完才會執行，其中也包括所有 iframe 子頁面的內容必須完整載入。

[參考](http://blog.miniasp.com/post/2010/07/24/jQuery-ready-vs-load-vs-window-onload-event.aspx "參考")


## 函式種類

### 具名函式宣告 (function variable)
```
function testFunction(){
    $('div').hide();
}

ex:

testFunction();
```

### 具名函式表達式 (function expression)
```
var myFunction = function(){
    $('div').show();
}

ex: 

$('#myApp').click(myFunction);
```

### 匿名函式 (self-executing)
```
$(document).ready(function(){
    $('div').show();
});
```


## use strict (嚴格模式) strict mode

根據你擺放strict模式註解的位置，你可以為一個單獨的函數，或者是整個一個文件切換到strict模式：
```js
"use strict";

function testFunction(){
    var testvar = 4;
    return testvar;
}
// This causes a syntax error.
testvar = 5;
```

```js
function  foo () {
	 " use strict " ;

	//這部分代碼是strict模式的

	function  bar () {
		 //這部分代碼是strict模式的
	}
}

//這部分代碼不是strict模式的
```
[參考](https://msdn.microsoft.com/library/br230269(v=vs.94).aspx "參考")

## 模組

當程式碼愈寫愈多，應用程式的規模愈來愈大時，我們需要一個用於組織與管理程式碼的方式，這個需求相當明確，或許不只是應用程式發展到一定程度才會考慮這些，而是應該在開發程式之前的規劃就需要考量進來。

```js

function  CoolModule () {
	 var something =  " cool " ;
	 var another = [ 1 , 2 , 3 ];

	function  doSomething () {
		 console . log ( something );
	}

	function  doAnother () {
		 console . log ( another . join ( " ! " ) );
	}

	return {
		doSomething : doSomething,
		doAnother : doAnother
	};
}

var foo =  CoolModule ();

foo . doSomething (); // cool 
foo . doAnother (); // 1 ! 2 ! 3

```

+ 必須有一個外部的外圍函數，而且它必須至少被調用一次（每次創建一個新的模塊實例）。
+ 外圍的函數必須至少返回一個內部函數，這樣這個內部函數才擁有私有作用域的閉包，並且可以訪問和/或修改這個私有狀態。

```js

var foo = ( function  CoolModule () {
	 var something =  " cool " ;
	 var another = [ 1 , 2 , 3 ];

	function  doSomething () {
		 console . log ( something );
	}

	function  doAnother () {
		 console . log ( another . join ( " ! " ) );
	}

	return {
		doSomething : doSomething,
		doAnother : doAnother
	};
})();

foo . doSomething (); // cool 
foo . doAnother (); // 1 ! 2 ! 3

```
這裡，我們將模塊放進一個IIFE中，而且我們立即調用它，並把它的返回值直接賦值給我們單獨的模塊實例標識符foo。



