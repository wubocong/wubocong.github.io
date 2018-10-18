!function(e,n,t){function o(e,n){return typeof e===n}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):$?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(){var e=n.body;return e||(e=i($?"svg":"body"),e.fake=!0),e}function r(e,t,o,r){var a,l,u,d,f="modernizr",c=i("div"),p=s();if(parseInt(o,10))for(;o--;)u=i("div"),u.id=r?r[o]:f+(o+1),c.appendChild(u);return a=i("style"),a.type="text/css",a.id="s"+f,(p.fake?p:c).appendChild(a),p.appendChild(c),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",d=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),l=t(c,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=d,C.offsetHeight):c.parentNode.removeChild(c),!!l}function a(e,n){return!!~(""+e).indexOf(n)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function d(e,n,t){var i;for(var s in e)if(e[s]in n)return!1===t?e[s]:(i=n[e[s]],o(i,"function")?u(i,t||n):i);return!1}function f(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(n,o){var i=n.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(f(n[i]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+f(n[i])+":"+o+")");return s=s.join(" or "),r("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function p(e,n,s,r){function u(){f&&(delete E.style,delete E.modElem)}if(r=!o(r,"undefined")&&r,!o(s,"undefined")){var d=c(e,s);if(!o(d,"undefined"))return d}for(var f,p,h,m,w,v=["modernizr","tspan","samp"];!E.style&&v.length;)f=!0,E.modElem=i(v.shift()),E.style=E.modElem.style;for(h=e.length,p=0;h>p;p++)if(m=e[p],w=E.style[m],a(m,"-")&&(m=l(m)),E.style[m]!==t){if(r||o(s,"undefined"))return u(),"pfx"!=n||m;try{E.style[m]=s}catch(e){}if(E.style[m]!=w)return u(),"pfx"!=n||m}return u(),!1}function h(e,n,t,i,s){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+_.join(r+" ")+r).split(" ");return o(n,"string")||o(n,"undefined")?p(a,n,i,s):(a=(e+" "+z.join(r+" ")+r).split(" "),d(a,n,t))}function m(e,n,o){return h(e,t,t,n,o)}var w=[],v=[],g={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){v.push({name:e,fn:n,options:t})},addAsyncTest:function(e){v.push({name:null,fn:e})}},y=function(){};y.prototype=g,y=new y;var C=n.documentElement,$="svg"===C.nodeName.toLowerCase(),b=g._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];g._prefixes=b;var S=g.testStyles=r;y.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");S(o,function(e){t=9===e.offsetTop})}return t});var x="Moz O ms Webkit",_=g._config.usePrefixes?x.split(" "):[];g._cssomPrefixes=_;var z=g._config.usePrefixes?x.toLowerCase().split(" "):[];g._domPrefixes=z;var T={elem:i("modernizr")};y._q.push(function(){delete T.elem});var E={style:T.elem.style};y._q.unshift(function(){delete E.style}),g.testAllProps=h,g.testAllProps=m,y.addTest("cssanimations",m("animationName","a",!0)),function(){var e,n,t,i,s,r,a;for(var l in v)if(v.hasOwnProperty(l)){if(e=[],n=v[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)r=e[s],a=r.split("."),1===a.length?y[a[0]]=i:(!y[a[0]]||y[a[0]]instanceof Boolean||(y[a[0]]=new Boolean(y[a[0]])),y[a[0]][a[1]]=i),w.push((i?"":"no-")+a.join("-"))}}(),function(e){var n=C.className,t=y._config.classPrefix||"";if($&&(n=n.baseVal),y._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}y._config.enableClasses&&(n+=" "+t+e.join(" "+t),$?C.className.baseVal=n:C.className=n)}(w),delete g.addTest,delete g.addAsyncTest;for(var A=0;A<y._q.length;A++)y._q[A]();e.Modernizr=y}(window,document),function(e){function n(e){this.el=$(e.el),this.audio=this.el.find("audio").get(0),this.animation=this.el.find(".animation"),this.reset(),this.audio.oncanplay=e.onAudioLoad}n.prototype.reset=function(){this.cloned=this.animation.clone(!0),this.animation.remove(),this.animation=this.cloned,$(window).trigger("resize")},n.prototype.resetAudio=function(){this.audio.pause(),this.audio.currentTime=0},n.prototype.play=function(){$(".page-hide").hide(),$(".page-loader").hide(),$("body").removeClass("running"),$("body").addClass("running"),$("body").scrollTop(0),this.audio.play(),this.el.append(this.animation);var e=$(".titles > div",this.animation).get(0);if(e.offsetHeight>1977){for(var n,t=e.offsetHeight-1977,o=20-.04041570438799076*t,i=document.styleSheets,s=0;s<i.length;++s)for(var r=0;r<i[s].cssRules.length;++r){var a=i[s].cssRules[r];"titles"==a.name&&a.type==CSSRule.KEYFRAMES_RULE&&(n=a)}n&&n.appendRule("100% { top: "+o+"% }")}},e.StarWarsOpening=n}(this),function(){function e(){t?$(".page-loader").hide():$(".page-loader").show(),t=!t}function n(){var e=$(window).width();$("#logoimg").css("width",e),$("#logosvg").css("width",e)}if(!Modernizr.cssanimations)return sweetAlert("Incompatible Explorer Detected","This website is not compatible with Internet Explorer 9 and below, please use higher version or Chrome. Sorry for the inconvenience.","error"),void $(".page-loader").hide();sweetAlert.setDefaults({customClass:"star-wars-alert"}),$(window).on("keydown",function(e){[32,37,38,39,40].indexOf(e.keyCode)>-1&&e.preventDefault()});var t=!0,o=!1,i=new StarWarsOpening({el:".starwars",onAudioLoad:function(){function n(){$(window).off("focus"),$(window).off("touchend"),e(),i.play(),$("#read").on("click",function(){window.location="./blog"})}o=!0,Modernizr.touchevents?$(window).on("touchend",n):document.hasFocus()?n():$(window).on("focus",n)}});i.audio.load(),i.audio.onended=function(){$("article").hide(),$(".page-later").show()},$(window).on("resize",n),$(window).on("load",n)}();