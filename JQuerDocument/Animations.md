# jQuery effects

##Basic Showing and Hiding
+ .show()
+ .hide()
+ .toggle()

##Fading Elements In and Out
+ .fadeIn()
+ .fadeOut()
+ .fadeToggle()
+ .fadeTo()

##Sliding Elements
+ .slideDown()
+ .slideUp()
+ .slideToggle()

##Animates
Syntax: 
<pre><code>.animate( properties [, duration ] [, easing ] [, complete ] )</code></pre>
EX.
<pre><code>
$('#message').animate(
{  left: '650px',   opacity: 0.5,  fontSize: '24px'  },  1500
);
</code></pre>

##Easings
+ jQuery can only use 'swing' or 'linear' effect
+ jQuery-UI have a lot more choices:[Easings](http://easings.net/zh-tw "Easings")
+ 參考範例 carousel


## 其他參考函示庫(圖表)
+ [Charts.js](http://www.chartjs.org/ "Charts.js")
+ [Morris.js](http://morrisjs.github.io/morris.js/index.html "Morris.js")

