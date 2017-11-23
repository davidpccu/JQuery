# JQuery 學習筆記 

### Write less, do more
Select an element on a page<br>
Do something with the element<br>
Change a property of the element<br>
1. Add new content<br>
2. Remove the element<br>
3. Extract information from the element<br>
4. Add/remove a class attribute<br>

## Basic selectors
+ Element selectors : <pre><code> $('p') </code></pre>
+ Class selectors   : <pre><code> $('.intro') </code></pre>
+ ID selectors      : <pre><code> $('#demo') </code></pre>

## Advanced selectors
+ Descendant selectors : <pre><code> $('#navBar a') </code></pre>
+ Child selectors : <pre><code> $('body > p') </code></pre>
+ Adjacent sibling : <pre><code> $('h2 + div') or $('h2 ~ div') </code></pre>

## Attribute selectors
+ [attribute] : <pre><code> $('a[href]') </code></pre>
+ [attribute="value"] : <pre><code> $('input[type="text"]') </code></pre>
+ [attribute^="value"] : <pre><code> $('a[href^="https://"]') </code></pre>
+ [attribute$="value"] : <pre><code> $('a[href$=".pdf"]') </code></pre>
+ [attribute*="value"] : <pre><code> $('a[href*="missingmanuals.com"]') </code></pre>

[Attribute Starts With Selector ](https://api.jquery.com/attribute-starts-with-selector/ "Attribute Starts With Selector ")
 
+  


## jQuery filters
+ :even / :odd : <pre><code> $('.striped tr:even') </code></pre>
+ :first / :last: 
EX:
<pre><code>
$('.menu_list').children().first(); 
$('.menu_list').children().last();
</code></pre>
+ :eq
<pre><code>
//過濾掉一組被選取元素，只留下其索引值的元素
$('.menu_list').children().eq(0);  
</code></pre>

+ :since 
<pre><code>
//過濾掉一組被選擇元素，只留下索引值範圍內元素
$('.menu_list').children().slice(1, 3);  
</code></pre>
+ :filter
<pre><code>
//過濾掉一組被選擇元素，只留下選擇器的元素
$('.menu_list').children().filter('.organic');  
</code></pre>
+ :not :
<pre><code>
//過濾掉一組被選擇元素，留下『不』符合元素
$('.menu_list').children().not('.organic');  
</code></pre>
+ :has() : <pre><code> $('li:has(a)')** </code></pre>
+ [ :contains() ](https://api.jquery.com/contains-selector/ ":contains() ") : <pre><code> $('a:contains(Click Me!)') //選擇器選取包含指定字符串的元素 </code></pre>
+ :hidden / :visible : <pre><code> $('div:hidden').show() </code></pre>

# Operations
## Adding Content to a Page
+ .html()
+ .append() / .prepend()
+ .before() / .after()
+ .text()
+ [.wrap](http://www.w3school.com.cn/jquery/manipulation_wrap.asp ".wrap") / .unwrap  //把每個被選元素放置在指定的HTML 內容或元素中。

##  Replace element
+ .ReplaceWith() //替換元素

## Setting and Reading css attributes
+ .addClass()
+ .removeClass()
+ .toggleClass()
+ .css()

## Setting and Reading html attributes
+ .attr()
+ .removeAttr()

# Events
## Mouse event
+ .click()
+ .dbclick()
+ .mouseup() / .mousedown()
+ .mouseover() / .mouseout() **.hover(function1,  function2)**
+ .mousemove()

## Window event
+ .load()
+ .resize()
+ .scroll()
+ .unload()

## Form event
+ .submit()
+ .reset()
+ .change()
+ .focus() / .blur()
+ .append()

## Keyboard event 
+ .keypress()
+ .keydown()
+ .keyup()

EX:
<pre><code>
//點擊txtbox後，模擬鍵盤事件
$('#TextBox1').click(function () {
    var e = $.Event('keyup');
    e.which = 40; 
    $('#TextBox1').trigger(e);
});

$('#TextBox1').keyup(function (event) {
    if (event.which == 40) {
        alert("按下了↓");
    }
});
</code></pre>

# Advanced Events
## Waiting for the HTML to Load
<pre><code>
$(document).ready(function() {
// all of your JavaScript goes in here
});
</code></pre>
or
<pre><code>
$(function() {
// shorthand way of writing
});
</code></pre>

## Stopping an Event’s Normal Behavior
<pre><code>
$('#menu').click(function(evt){
evt.preventDefault(); 	// don't follow the link
return false;  			// don't follow the link
});
</code></pre>

## Off Events
Syntax:
<pre><code>$('selector).off( events [, selector ] [, functionName ] );</code></pre>

EX:
<pre><code>
$('#menu').off('click');
$('#menu').off();
</code></pre>

## On Events
Syntax:
<pre><code>$('selector).on( events [, selector ] [, myData ] [, functionName ] );</code></pre>

EX:
<pre><code>
$('selector).on('click', function(){...});
$('selector).click(function(){...})
</code></pre>

## Other Ways to Use the on() Function
<pre><code>
$(document).on( 'click keypress', function() {
  $('#lightbox').hide();
});

$('#theElement').on({ 
  'click' : function() {
    // do something interesting
  },
  'mouseover' : function() {
    // do something interesting
  }
});
</code></pre>

## Delegation
Syntax:
<pre><code>$('selector_A').on('click', selector_B, myData, functionName);</code></pre>
EX:
<pre><code>
( "#bind" ).click(function() {
 	$( "body" ).on( "click", "#theone", flash )
});
</code></pre>

# Element

## each
Syntax:
<pre><code>$('ul li').each( Integer index, Element element );</code></pre>
EX:
<pre><code>
$('ul li').each(function(index, el) {
                $(this).hide();
            });
</code></pre>

## remove
Remove the set of matched elements from the DOM
<pre><code>$('#img').remove();</code></pre>

## empty
<pre><code>$("#div1").empty();</code></pre>

+ remove() - 刪除被選元素（及其子元素）
+ empty() - 從被選元素中刪除子元素

## detach
detach() 除了將元素移除之外，會將 jQuery 中所有與該元素有關的資料屬性保存著，也因此後續可以將被移除的元素回復。
<pre><code>
var p;
$( "button" ).click(function() {
  if ( p ) {
    p.appendTo( "body" );
    p = null;
  } else {
    p = $( "p" ).detach();
  }
</code></pre>


## 取得表單資料、單選 Radio 與多選 Checkbox 的方法

[Will 保哥blog](https://blog.miniasp.com/post/2011/04/26/jQuery-get-form-value-Checkbox-Radio.aspx "")

判斷checkbox 是否已被勾選
<pre><code>
    $("#check").prop("checked")     // prop  才會回傳 true 或 false
</code></pre>

## Iframe中 取得 parent物件的方法

<pre><code>
    $('#parentPrice', window.parent.document).html();
</code></pre>
