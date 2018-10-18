!function(e,n,t){function o(e,n){return typeof e===n}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):S?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(){var e=n.body;return e||(e=i(S?"svg":"body"),e.fake=!0),e}function r(e,t,o,r){var a,l,u,f,d="modernizr",p=i("div"),c=s();if(parseInt(o,10))for(;o--;)u=i("div"),u.id=r?r[o]:d+(o+1),p.appendChild(u);return a=i("style"),a.type="text/css",a.id="s"+d,(c.fake?c:p).appendChild(a),c.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,c.fake&&(c.style.background="",c.style.overflow="hidden",f=w.style.overflow,w.style.overflow="hidden",w.appendChild(c)),l=t(p,e),c.fake?(c.parentNode.removeChild(c),w.style.overflow=f,w.offsetHeight):p.parentNode.removeChild(p),!!l}function a(e,n){return!!~(""+e).indexOf(n)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function u(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var i;for(var s in e)if(e[s]in n)return!1===t?e[s]:(i=n[e[s]],o(i,"function")?u(i,t||n):i);return!1}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(n,o){var i=n.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(d(n[i]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+d(n[i])+":"+o+")");return s=s.join(" or "),r("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function c(e,n,s,r){function u(){d&&(delete P.style,delete P.modElem)}if(r=!o(r,"undefined")&&r,!o(s,"undefined")){var f=p(e,s);if(!o(f,"undefined"))return f}for(var d,c,h,m,v,y=["modernizr","tspan","samp"];!P.style&&y.length;)d=!0,P.modElem=i(y.shift()),P.style=P.modElem.style;for(h=e.length,c=0;h>c;c++)if(m=e[c],v=P.style[m],a(m,"-")&&(m=l(m)),P.style[m]!==t){if(r||o(s,"undefined"))return u(),"pfx"!=n||m;try{P.style[m]=s}catch(e){}if(P.style[m]!=v)return u(),"pfx"!=n||m}return u(),!1}function h(e,n,t,i,s){var r=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+T.join(r+" ")+r).split(" ");return o(n,"string")||o(n,"undefined")?c(a,n,i,s):(a=(e+" "+z.join(r+" ")+r).split(" "),f(a,n,t))}function m(e,n,o){return h(e,t,t,n,o)}var v=[],y=[],g={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){y.push({name:e,fn:n,options:t})},addAsyncTest:function(e){y.push({name:null,fn:e})}},C=function(){};C.prototype=g,C=new C;var w=n.documentElement,S="svg"===w.nodeName.toLowerCase(),b=g._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];g._prefixes=b;var x=g.testStyles=r;C.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");x(o,function(e){t=9===e.offsetTop})}return t});var _="Moz O ms Webkit",T=g._config.usePrefixes?_.split(" "):[];g._cssomPrefixes=T;var z=g._config.usePrefixes?_.toLowerCase().split(" "):[];g._domPrefixes=z;var E={elem:i("modernizr")};C._q.push(function(){delete E.elem});var P={style:E.elem.style};C._q.unshift(function(){delete P.style}),g.testAllProps=h,g.testAllProps=m,C.addTest("cssanimations",m("animationName","a",!0)),function(){var e,n,t,i,s,r,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],n=y[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)r=e[s],a=r.split("."),1===a.length?C[a[0]]=i:(!C[a[0]]||C[a[0]]instanceof Boolean||(C[a[0]]=new Boolean(C[a[0]])),C[a[0]][a[1]]=i),v.push((i?"":"no-")+a.join("-"))}}(),function(e){var n=w.className,t=C._config.classPrefix||"";if(S&&(n=n.baseVal),C._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}C._config.enableClasses&&(n+=" "+t+e.join(" "+t),S?w.className.baseVal=n:w.className=n)}(v),delete g.addTest,delete g.addAsyncTest;for(var $=0;$<C._q.length;$++)C._q[$]();e.Modernizr=C}(window,document),function(e){function n(e){this.el=$(e.el),this.audio=this.el.find("audio").get(0),this.animation=this.el.find(".animation"),this.reset(),this.audio.oncanplay=e.onAudioLoad}n.prototype.reset=function(){this.cloned=this.animation.clone(!0),this.animation.remove(),this.animation=this.cloned,$(window).trigger("resize")},n.prototype.resetAudio=function(){this.audio.pause(),this.audio.currentTime=0},n.prototype.play=function(){$(".page-hide").hide(),$(".page-loader").hide(),$("body").removeClass("running"),$("body").addClass("running"),$("body").scrollTop(0),this.audio.play(),this.el.append(this.animation);var e=$(".titles > div",this.animation).get(0);if(e.offsetHeight>1977){for(var n,t=e.offsetHeight-1977,o=20-.04041570438799076*t,i=document.styleSheets,s=0;s<i.length;++s)for(var r=0;r<i[s].cssRules.length;++r){var a=i[s].cssRules[r];"titles"==a.name&&a.type==CSSRule.KEYFRAMES_RULE&&(n=a)}n&&n.appendRule("100% { top: "+o+"% }")}},e.StarWarsOpening=n}(this);