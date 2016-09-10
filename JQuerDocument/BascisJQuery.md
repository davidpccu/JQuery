# JQuery 學習筆記 
###Write less, do more

Select an element on a page<br>
Do something with the element<br>
Change a property of the element<br>
1. Add new content<br>
2. Remove the element<br>
3. Extract information from the element<br>
4. Add/remove a class attribute<br>

##Basic selectors
+ Element selectors : $('p')
+ Class selectors   : $('.intro')
+ ID selectors      : $('#demo')

##Advanced selectors
+ Descendant selectors : $('#navBar a')
+ Child selectors : $('body > p')
+ Adjacent sibling : $('h2 + div') or $('h2 ~ div')

##Attribute selectors
+ [attribute] : $('a[href]')
+ [attribute="value"] : $('input[type="text"]')
+ [attribute^="value"] : $('a[href^="https://"]')
+ [attribute$="value"] : $('a[href$=".pdf"]')
+ [attribute*="value"] : $('a[href*="missingmanuals.com"]')

##jQuery filters
+ :even / :odd **: $('.striped tr:even')**
+ :first / **:last : $('p:first')**
+ :not() **: $('a:not(.navButton)')**
+ :has() **: $('li:has(a)')**
+ :contains() **: $('a:contains(Click Me!)')**
+ :hidden / :visible **: $('div:hidden').show()**

#Operations
##Adding Content to a Page
+ .html()
+ .append() / .prepend()
+ .before() / .after()
+ .text()

##Setting and Reading css attributes
+ .addClass()
+ .removeClass()
+ .toggleClass()
+ .css()

##Setting and Reading html attributes
+ .attr()
+ .removeAttr()

#Events
##Mouse event
+ .click()
+ .dbclick()
+ .mouseup() / .mousedown()
+ .mouseover() / .mouseout() **.hover(function1,  function2)**
+ .mousemove()

##Window event
+ .load()
+ .resize()
+ .scroll()
+ .unload()

##Form event
+ .submit()
+ .reset()
+ .change()
+ .focus() / .blur()

##Keyboard event 
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

#Advanced Events
##Waiting for the HTML to Load
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

##Stopping an Event’s Normal Behavior
<pre><code>
$('#menu').click(function(evt){
evt.preventDefault(); 	// don't follow the link
return false;  			// don't follow the link
});
</code></pre>

##Off Events
Syntax:
<pre><code>$('selector).off( events [, selector ] [, functionName ] );</code></pre>

EX:
<pre><code>
$('#menu').off('click');
$('#menu').off();
</code></pre>

##On Events
Syntax:
<pre><code>$('selector).on( events [, selector ] [, myData ] [, functionName ] );</code></pre>

EX:
<pre><code>
$('selector).on('click', function(){...});
$('selector).click(function(){...})
</code></pre>

##Other Ways to Use the on() Function
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

##Delegation
Syntax:
<pre><code>$('selector_A').on('click', selector_B, myData, functionName);</code></pre>
EX:
<pre><code>
( "#bind" ).click(function() {
 	$( "body" ).on( "click", "#theone", flash )
});
</code></pre>
