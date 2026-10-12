window._wpemojiSettings={"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"http:\/\/localhost\/wordpress\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.0"}};
/*! This file is auto-generated */
!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode,e=(p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0),i.toDataURL());return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([129777,127995,8205,129778,127999],[129777,127995,8203,129778,127999])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(e=t.source||{}).concatemoji?c(e.concatemoji):e.wpemoji&&e.twemoji&&(c(e.twemoji),c(e.wpemoji)))}(window,document,window._wpemojiSettings)
;(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create','UA-227468073-1','auto');ga('require','displayfeatures');ga('require','linkid');ga('set','anonymizeIp',!0);ga('set','forceSSL',!0);ga('send','pageview')
;/**
 * @preserve SelectNav.js (v. 0.1)
 * Converts your <ul>/<ol> navigation into a dropdown list for small screens
 * https://github.com/lukaszfiszer/selectnav.js
 */window.selectnav=(function(){"use strict";var selectnav=function(element,options){element=document.getElementById(element);if(!element){return}
if(!islist(element)){return}
if(!('insertAdjacentHTML' in window.document.documentElement)){return}
document.documentElement.className+=" js";var o=options||{},activeclass=o.activeclass||'active',autoselect=typeof(o.autoselect)==="boolean"?o.autoselect:!0,nested=typeof(o.nested)==="boolean"?o.nested:!0,indent=o.indent||"→",label=o.label||"- Navigation -",level=0,selected=" selected ";element.insertAdjacentHTML('afterend',parselist(element));var nav=document.getElementById(id());if(nav.addEventListener){nav.addEventListener('change',goTo)}
if(nav.attachEvent){nav.attachEvent('onchange',goTo)}
return nav;function goTo(e){var targ;if(!e)e=window.event;if(e.target)targ=e.target;else if(e.srcElement)targ=e.srcElement;if(targ.nodeType===3)
targ=targ.parentNode;if(targ.value)window.location.href=targ.value}
function islist(list){var n=list.nodeName.toLowerCase();return(n==='ul'||n==='ol')}
function id(nextId){for(var j=1;document.getElementById('selectnav'+j);j++);return(nextId)?'selectnav'+j:'selectnav'+(j-1)}
function parselist(list){level++;var length=list.children.length,html='',prefix='',k=level-1;if(!length){return}
if(k){while(k--){prefix+=indent}
prefix+=" "}
for(var i=0;i<length;i++){var link=list.children[i].children[0];if(typeof(link)!=='undefined'){var text=link.innerText||link.textContent;var isselected='';if(activeclass){isselected=link.className.search(activeclass)!==-1||link.parentNode.className.search(activeclass)!==-1?selected:''}
if(autoselect&&!isselected){isselected=link.href===document.URL?selected:''}
html+='<option value="'+link.href+'" '+isselected+'>'+prefix+text+'</option>';if(nested){var subElement=list.children[i].children[1];if(subElement&&islist(subElement)){html+=parselist(subElement)}}}}
if(level===1&&label){html='<option value="">'+label+'</option>'+html}
if(level===1){html='<select class="selectnav" id="'+id(!0)+'">'+html+'</select>'}
level--;return html}};return function(element,options){selectnav(element,options)}})();selectnav('menu-top',{label:'Menu',nested:!0,indent:'-'})
;