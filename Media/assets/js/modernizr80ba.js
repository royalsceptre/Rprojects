!function(i,c,p){var a=[],e={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){a.push({name:e,fn:t,options:n})},addAsyncTest:function(e){a.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=e,Modernizr=new Modernizr;var d=[];function h(e,t){return typeof e===t}var s,n,v=c.documentElement,m="svg"===v.nodeName.toLowerCase();function l(e){var t=v.className,n=Modernizr._config.classPrefix||"";if(m&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),m?v.className.baseVal=t:v.className=t)}function u(e,t){if("object"==typeof e)for(var n in e)s(e,n)&&u(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),void 0!==o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),l([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function g(){return"function"!=typeof c.createElement?c.createElement(arguments[0]):m?c.createElementNS.call(c,"http://www.w3.org/2000/svg",arguments[0]):c.createElement.apply(c,arguments)}function o(e,t,n,r){var o,i,s,a,d,l="modernizr",u=g("div"),f=((d=c.body)||((d=g(m?"svg":"body")).fake=!0),d);if(parseInt(n,10))for(;n--;)(s=g("div")).id=r?r[n]:l+(n+1),u.appendChild(s);return(o=g("style")).type="text/css",o.id="s"+l,(f.fake?f:u).appendChild(o),f.appendChild(u),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(c.createTextNode(e)),u.id=l,f.fake&&(f.style.background="",f.style.overflow="hidden",a=v.style.overflow,v.style.overflow="hidden",v.appendChild(f)),i=t(u,e),f.fake?(f.parentNode.removeChild(f),v.style.overflow=a,v.offsetHeight):u.parentNode.removeChild(u),!!i}s=h(n={}.hasOwnProperty,"undefined")||h(n.call,"undefined")?function(e,t){return t in e&&h(e.constructor.prototype[t],"undefined")}:function(e,t){return n.call(e,t)},e._l={},e.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},e._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){e.addTest=u});var r,t=(r=i.matchMedia||i.msMatchMedia)?function(e){var t=r(e);return t&&t.matches||!1}:function(e){var t=!1;return o("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(i.getComputedStyle?i.getComputedStyle(e,null):e.currentStyle).position}),t};e.mq=t;var f=i.navigator.userAgent,y=f.toLowerCase();Modernizr.addTest("android",0<=y.indexOf("android")),Modernizr.addTest("android2",0<=y.indexOf("android 2.")),Modernizr.addTest("android3",0<=y.indexOf("android 3.")),Modernizr.addTest("android4",0<=y.indexOf("android 4.")),Modernizr.addTest("android5",0<=y.indexOf("android 5.")),Modernizr.addTest("android6",0<=y.indexOf("android 6.")),Modernizr.addTest("androidless",null!==f.match(/\sandroid\s([0-3]|4\.[0-3])/i)),Modernizr.addTest("intersectionobserver",function(){return"IntersectionObserver"in i&&"IntersectionObserverEntry"in i&&"intersectionRatio"in i.IntersectionObserverEntry.prototype&&("isIntersecting"in i.IntersectionObserverEntry.prototype||Object.defineProperty(i.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return 0<this.intersectionRatio}}),!0)}),Modernizr.addTest("ipad",0<=navigator.userAgent.toLowerCase().indexOf("ipad"));var T=!!~navigator.userAgent.toLowerCase().indexOf("iphone"),w=i.screen.width,x=i.screen.height;if(x<w){var C=x;x=w,w=C}Modernizr.addTest("iphone",T),Modernizr.addTest("iphone4",T&&320===w&&480===x),Modernizr.addTest("iphone5",T&&320===w&&568===x),Modernizr.addTest("iphone6",T&&375===w&&667===x),Modernizr.addTest("iphone6plus",T&&414===w&&736===x),Modernizr.addTest("ipod",0<=navigator.userAgent.toLowerCase().indexOf("ipod")),Modernizr.addTest("mobiledevice",function(){var e=a.filter(function(e){return"touchevents"===e.name});if(e){var t=e[0].fn(),n=i.navigator.userAgent.toLowerCase();return t&&!!(~n.indexOf("iphone")||~n.indexOf("ipod")||~n.indexOf("ipad")||~n.indexOf("android")||/\sEdgA\//i.test(n)||/\sEdgiOS\//i.test(n)||/Windows\sPhone/i.test(n))}return console.warn("Modernizr `touchevents` test is required to make test `mobiledevice`!"),!1}),Modernizr.addTest("moz","undefined"!=typeof InstallTrigger);var b=e._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];e._prefixes=b;var S=e.testStyles=o;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in i||i.DocumentTouch&&c instanceof DocumentTouch)t=!0;else{var e=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");S(e,function(e){t=9===e.offsetTop})}return t}),S("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+b.join("scrollbar{width:10px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px}",function(e){Modernizr.addTest("cssscrollbar","scrollWidth"in e&&30==e.scrollWidth)});var _="Moz O ms Webkit",O=e._config.usePrefixes?_.split(" "):[];e._cssomPrefixes=O;var z={elem:g("modernizr")};Modernizr._q.push(function(){delete z.elem});var P={style:z.elem.style};function E(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function j(e,t){var n=e.length;if("CSS"in i&&"supports"in i.CSS){for(;n--;)if(i.CSS.supports(E(e[n]),t))return!0;return!1}if("CSSSupportsRule"in i){for(var r=[];n--;)r.push("("+E(e[n])+":"+t+")");return o("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==function(e,t,n){var r;if("getComputedStyle"in i){r=getComputedStyle.call(i,e,t);var o=i.console;null!==r?n&&(r=r.getPropertyValue(n)):o&&o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!t&&e.currentStyle&&e.currentStyle[n];return r}(e,null,"position")})}return p}Modernizr._q.unshift(function(){delete P.style});var A=e._config.usePrefixes?_.toLowerCase().split(" "):[];function L(e,t){return function(){return e.apply(t,arguments)}}function I(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+O.join(i+" ")+i).split(" ");return h(t,"string")||h(t,"undefined")?function(e,t,n,r){if(r=!h(r,"undefined")&&r,!h(n,"undefined")){var o=j(e,n);if(!h(o,"undefined"))return o}for(var i,s,a,d,l,u=["modernizr","tspan","samp"];!P.style&&u.length;)i=!0,P.modElem=g(u.shift()),P.style=P.modElem.style;function f(){i&&(delete P.style,delete P.modElem)}for(a=e.length,s=0;s<a;s++)if(d=e[s],l=P.style[d],~(""+d).indexOf("-")&&(d=d.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")),P.style[d]!==p){if(r||h(n,"undefined"))return f(),"pfx"!=t||d;try{P.style[d]=n}catch(e){}if(P.style[d]!=l)return f(),"pfx"!=t||d}return f(),!1}(s,t,r,o):function(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:h(r=t[e[o]],"function")?L(r,n||t):r;return!1}(s=(e+" "+A.join(i+" ")+i).split(" "),t,n)}function k(e,t,n){return I(e,p,p,t,n)}e._domPrefixes=A,e.testAllProps=I,e.testAllProps=k,Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&k("transform","scale(1)",!0)});var q="CSS"in i&&"supports"in i.CSS,N="supportsCSS"in i;Modernizr.addTest("supports",q||N),Modernizr.addTest("csstransforms3d",function(){return!!k("perspective","1px",!0)}),Modernizr.addTest("csstransitions",k("transition","all",!0)),function(){var e,t,n,r,o,i;for(var s in a)if(a.hasOwnProperty(s)){if(e=[],(t=a[s]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=h(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?Modernizr[i[0]]=r:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=r),d.push((r?"":"no-")+i.join("-"))}}(),l(d),delete e.addTest,delete e.addAsyncTest;for(var M=0;M<Modernizr._q.length;M++)Modernizr._q[M]();i.Modernizr=Modernizr}(window,document);
//# sourceMappingURL=modernizr.js.map