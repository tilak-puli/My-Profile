/*! @license ScrollReveal v4.0.9

	Copyright 2021 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).ScrollReveal=t()}(this,function(){"use strict";var e={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var t={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",function(){document.body.style.height="100%"})},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};
/*! @license is-dom-node v1.0.4

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/function n(e){return"object"==typeof window.Node?e instanceof window.Node:null!==e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName}
/*! @license is-dom-node-list v1.2.1

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/
/*! @license Tealight v0.3.6

		Copyright 2018 Fisssion LLC.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.

	*/
function i(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(n);if(n(e))return[e];if(i=e,r=Object.prototype.toString.call(i),"object"==typeof window.NodeList?i instanceof window.NodeList:null!==i&&"object"==typeof i&&"number"==typeof i.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(r)&&(0===i.length||n(i[0])))return Array.prototype.slice.call(e);var i,r;if("string"==typeof e)try{var o=t.querySelectorAll(e);return Array.prototype.slice.call(o)}catch(e){return[]}return[]}function r(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function o(e,t){if(r(e))return Object.keys(e).forEach(function(n){return t(e[n],n,e)});if(e instanceof Array)return e.forEach(function(n,i){return t(n,i,e)});throw new TypeError("Expected either an array or object literal.")}function s(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach(function(e){return i+="\n \u2014 "+e}),console.log(i,"color: #ea654b;")}}function a(){var e=this,t={active:[],stale:[]},n={active:[],stale:[]},r={active:[],stale:[]};try{o(i("[data-sr-id]"),function(e){var n=parseInt(e.getAttribute("data-sr-id"));t.active.push(n)})}catch(e){throw e}o(this.store.elements,function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)}),o(t.stale,function(t){return delete e.store.elements[t]}),o(this.store.elements,function(e){-1===r.active.indexOf(e.containerId)&&r.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===n.active.indexOf(e.sequence.id)&&n.active.push(e.sequence.id)}),o(this.store.containers,function(e){-1===r.active.indexOf(e.id)&&r.stale.push(e.id)}),o(r.stale,function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]}),o(this.store.sequences,function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)}),o(n.stale,function(t){return delete e.store.sequences[t]})}
/*! @license Rematrix v0.3.0

		Copyright 2018 Julian Lloyd.

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in
		all copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
		THE SOFTWARE.
	*/function c(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=l();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function l(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function d(e,t){for(var n=c(e),i=c(t),r=[],o=0;o<4;o++)for(var s=[n[o],n[o+4],n[o+8],n[o+12]],a=0;a<4;a++){var l=4*a,d=[i[l],i[l+1],i[l+2],i[l+3]],u=s[0]*d[0]+s[1]*d[1]+s[2]*d[2]+s[3]*d[3];r[o+l]=u}return r}function u(e){if("string"==typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return c(t[2].split(", ").map(parseFloat))}return l()}function f(e,t){var n=l();return n[0]=e,n[5]="number"==typeof t?t:e,n}var h=function(){var e={},t=document.documentElement.style;function n(n,i){if(void 0===i&&(i=t),n&&"string"==typeof n){if(e[n])return e[n];if("string"==typeof i[n])return e[n]=n;if("string"==typeof i["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function p(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,r={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map(function(e){return e.trim()}).join("; ")+";":"",r.generated=o.some(function(e){return e.match(/visibility\s?:\s?visible/i)})?r.computed:o.concat(["visibility: visible"]).map(function(e){return e.trim()}).join("; ")+";";var s,a,c,p=parseFloat(t.opacity),m=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),v={computed:p!==m?"opacity: "+p+";":"",generated:p!==m?"opacity: "+m+";":""},y=[];if(parseFloat(i.distance)){var g="top"===i.origin||"bottom"===i.origin?"Y":"X",b=i.distance;"top"!==i.origin&&"left"!==i.origin||(b=/^-/.test(b)?b.substr(1):"-"+b);var w=b.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),E=w[0];switch(w[1]){case"em":b=parseInt(t.fontSize)*E;break;case"px":b=E;break;case"%":b="Y"===g?e.node.getBoundingClientRect().height*E/100:e.node.getBoundingClientRect().width*E/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===g?y.push(function(e){var t=l();return t[13]=e,t}(b)):y.push(function(e){var t=l();return t[12]=e,t}(b))}i.rotate.x&&y.push((s=i.rotate.x,a=Math.PI/180*s,(c=l())[5]=c[10]=Math.cos(a),c[6]=c[9]=Math.sin(a),c[9]*=-1,c)),i.rotate.y&&y.push(function(e){var t=Math.PI/180*e,n=l();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}(i.rotate.y)),i.rotate.z&&y.push(function(e){var t=Math.PI/180*e,n=l();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}(i.rotate.z)),1!==i.scale&&(0===i.scale?y.push(f(2e-4)):y.push(f(i.scale)));var j={};if(y.length){j.property=h("transform"),j.computed={raw:t[j.property],matrix:u(t[j.property])},y.unshift(j.computed.matrix);var T=y.reduce(d);j.generated={initial:j.property+": matrix3d("+T.join(", ")+");",final:j.property+": matrix3d("+j.computed.matrix.join(", ")+");"}}else j.generated={initial:"",final:""};var k={};if(v.generated||j.generated.initial){k.property=h("transition"),k.computed=t[k.property],k.fragments=[];var O=i.delay,x=i.duration,R=i.easing;v.generated&&k.fragments.push({delayed:"opacity "+x/1e3+"s "+R+" "+O/1e3+"s",instant:"opacity "+x/1e3+"s "+R+" 0s"}),j.generated.initial&&k.fragments.push({delayed:j.property+" "+x/1e3+"s "+R+" "+O/1e3+"s",instant:j.property+" "+x/1e3+"s "+R+" 0s"}),k.computed&&!k.computed.match(/all 0s|none 0s/)&&k.fragments.unshift({delayed:k.computed,instant:k.computed});var q=k.fragments.reduce(function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e},{delayed:"",instant:""});k.generated={delayed:k.property+": "+q.delayed+";",instant:k.property+": "+q.instant+";"}}else k.generated={delayed:"",instant:""};return{inline:r,opacity:v,position:n,transform:j,transition:k}}function m(e,t){t.split(";").forEach(function(t){var n=t.split(":"),i=n[0],r=n.slice(1);i&&r&&(e.style[i.trim()]=r.join(":"))})}function v(e){var t,n=this;try{o(i(e),function(e){var i=e.getAttribute("data-sr-id");if(null!==i){t=!0;var r=n.store.elements[i];r.callbackTimer&&window.clearTimeout(r.callbackTimer.clock),m(r.node,r.styles.inline.generated),e.removeAttribute("data-sr-id"),delete n.store.elements[i]}})}catch(e){return s.call(this,"Clean failed.",e.message)}if(t)try{a.call(this)}catch(e){return s.call(this,"Clean failed.",e.message)}}function y(){var e=this;o(this.store.elements,function(e){m(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")}),o(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)}),this.store={containers:{},elements:{},history:[],sequences:{}}}function g(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(r(e))return o(t,function(t){o(t,function(t,n){r(t)?(e[n]&&r(e[n])||(e[n]={}),g(e[n],t)):e[n]=t})}),e;throw new TypeError("Target must be an object literal.")}function b(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var w,E=(w=0,function(){return w++});function j(){var e=this;a.call(this),o(this.store.elements,function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),m(e.node,t.filter(function(e){return""!==e}).join(" "))}),o(this.store.containers,function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)}),this.delegate(),this.initTimeout=null}function T(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?k.call(this,e,i):t.reset||o?O.call(this,e):void 0}function k(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,m(e.node,n.filter(function(e){return""!==e}).join(" ")),x.call(this,e,t)}function O(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,m(e.node,t.filter(function(e){return""!==e}).join(" ")),x.call(this,e)}function x(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout(function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&v.call(n,e.node)},i-s)}}function R(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return T.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new A(n,"visible",this.store),o=new A(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var s=n.members[r.body[0]],a=this.store.elements[s];if(a)return P.call(this,n,r.body[0],-1,t),P.call(this,n,r.body[0],1,t),T.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return P.call(this,n,i,-1,t),T.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return P.call(this,n,i,1,t),T.call(this,e,{reveal:!0,pristine:t})}}function q(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=E(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function A(e,t,n){var i=this;this.head=[],this.body=[],this.foot=[],o(e.members,function(e,r){var o=n.elements[e];o&&o[t]&&i.body.push(r)}),this.body.length&&o(e.members,function(e,r){var o=n.elements[e];o&&!o[t]&&(r<i.body[0]?i.head.push(r):i.foot.push(r))})}function P(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],s=e.members[t+n],a=this.store.elements[s];e.blocked[o]=!0,setTimeout(function(){e.blocked[o]=!1,a&&R.call(r,a,i)},e.interval)}function L(t,n,r){var a=this;void 0===n&&(n={}),void 0===r&&(r=!1);var c,l=[],d=n.interval||e.interval;try{d&&(c=new q(d));var u=i(t);if(!u.length)throw new Error("Invalid reveal target.");var f=u.reduce(function(e,t){var r={},s=t.getAttribute("data-sr-id");s?(g(r,a.store.elements[s]),m(r.node,r.styles.inline.computed)):(r.id=E(),r.node=t,r.seen=!1,r.revealed=!1,r.visible=!1);var d=g({},r.config||a.defaults,n);if(!d.mobile&&b()||!d.desktop&&!b())return s&&v.call(a,r),e;var u,f=i(d.container)[0];if(!f)throw new Error("Invalid container.");return f.contains(t)?(null===(u=function(e){var t=[],n=arguments.length-1;for(;n-- >0;)t[n]=arguments[n+1];var i=null;return o(t,function(t){o(t,function(t){null===i&&t.node===e&&(i=t.id)})}),i}(f,l,a.store.containers))&&(u=E(),l.push({id:u,node:f})),r.config=d,r.containerId=u,r.styles=p(r),c&&(r.sequence={id:c.id,index:c.members.length},c.members.push(r.id)),e.push(r),e):e},[]);o(f,function(e){a.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)})}catch(e){return s.call(this,"Reveal failed.",e.message)}o(l,function(e){a.store.containers[e.id]={id:e.id,node:e.node}}),c&&(this.store.sequences[c.id]=c),!0!==r&&(this.store.history.push({target:t,options:n}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(j.bind(this),0))}function M(){var e=this;o(this.store.history,function(t){L.call(e,t.target,t.options,!0)}),j.call(this)}var I,N=Math.sign||function(e){return(e>0)-(e<0)||+e},z=(I=Date.now(),function(e){var t=Date.now();t-I>16?(I=t,e(t)):setTimeout(function(){return z(e)},0)}),F=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||z;function D(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,s=e.node;do{isNaN(s.offsetTop)||(r+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent}while(s);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function S(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function C(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,s=e.geometry.bounds.bottom-e.geometry.height*n,a=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,l=t.geometry.bounds.right+t.scroll.left-i.right,d=t.geometry.bounds.bottom+t.scroll.top-i.bottom,u=t.geometry.bounds.left+t.scroll.left+i.left;return r<d&&o>u&&s>c&&a<l||"fixed"===e.styles.position}}function W(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),F(function(){var i="init"===e.type||"resize"===e.type;o(n.store.containers,function(e){i&&(e.geometry=D.call(n,e,!0));var t=S.call(n,e);e.scroll&&(e.direction={x:N(t.left-e.scroll.left),y:N(t.top-e.scroll.top)}),e.scroll=t}),o(t,function(e){(i||void 0===e.geometry)&&(e.geometry=D.call(n,e)),e.visible=C.call(n,e)}),o(t,function(e){e.sequence?R.call(n,e):T.call(n,e)}),n.pristine=!1})}var Y,$,H,B,U,X,G,J;function K(n){var r;if(void 0===n&&(n={}),void 0===this||Object.getPrototypeOf(this)!==K.prototype)return new K(n);if(!K.isSupported())return s.call(this,"Instantiation failed.","This browser is not supported."),t.failure();try{r=g({},X||e,n)}catch(e){return s.call(this,"Invalid configuration.",e.message),t.failure()}try{if(!i(r.container)[0])throw new Error("Invalid container.")}catch(e){return s.call(this,e.message),t.failure()}return!(X=r).mobile&&b()||!X.desktop&&!b()?(s.call(this,"This device is disabled.","desktop: "+X.desktop,"mobile: "+X.mobile),t.failure()):(t.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,Y=Y||W.bind(this),$=$||y.bind(this),H=H||L.bind(this),B=B||v.bind(this),U=U||M.bind(this),Object.defineProperty(this,"delegate",{get:function(){return Y}}),Object.defineProperty(this,"destroy",{get:function(){return $}}),Object.defineProperty(this,"reveal",{get:function(){return H}}),Object.defineProperty(this,"clean",{get:function(){return B}}),Object.defineProperty(this,"sync",{get:function(){return U}}),Object.defineProperty(this,"defaults",{get:function(){return X}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),J||(J=this))}return K.isSupported=function(){return function(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}()&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}()},Object.defineProperty(K,"debug",{get:function(){return G||!1},set:function(e){return G="boolean"==typeof e?e:G}}),K(),K});