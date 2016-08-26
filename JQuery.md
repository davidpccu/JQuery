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

#Ajax
待續....



