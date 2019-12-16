!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
/*!
 * VERSION: 2.1.2
 * DATE: 2019-03-01
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2019, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
/* eslint-disable */
var _gsScope = (typeof (module) !== "undefined" && module.exports && typeof (global) !== "undefined") ? global : this || window; //helps ensure compatibility with AMD/RequireJS and CommonJS/Node
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {

    "use strict";

    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (Animation, SimpleTimeline, TweenLite) {

        var _slice = function (a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
                var b = [],
                    l = a.length,
                    i;
                for (i = 0; i !== l; b.push(a[i++])) ;
                return b;
            },
            _applyCycle = function (vars, targets, i) {
                var alt = vars.cycle,
                    p, val;
                for (p in alt) {
                    val = alt[p];
                    vars[p] = (typeof (val) === "function") ? val(i, targets[i], targets) : val[i % val.length];
                }
                delete vars.cycle;
            },
            //for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
            _distribute = function (v) {
                if (typeof (v) === "function") {
                    return v;
                }
                var vars = (typeof (v) === "object") ? v : {each: v}, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
                    ease = vars.ease,
                    from = vars.from || 0,
                    base = vars.base || 0,
                    cache = {},
                    isFromKeyword = isNaN(from),
                    axis = vars.axis,
                    ratio = {center: 0.5, end: 1}[from] || 0;
                return function (i, target, a) {
                    var l = (a || vars).length,
                        distances = cache[l],
                        originX, originY, x, y, d, j, max, min, wrap;
                    if (!distances) {
                        wrap = (vars.grid === "auto") ? 0 : (vars.grid || [Infinity])[0];
                        if (!wrap) {
                            max = -Infinity;
                            while (max < (max = a[wrap++].getBoundingClientRect().left) && wrap < l) {
                            }
                            wrap--;
                        }
                        distances = cache[l] = [];
                        originX = isFromKeyword ? (Math.min(wrap, l) * ratio) - 0.5 : from % wrap;
                        originY = isFromKeyword ? l * ratio / wrap - 0.5 : (from / wrap) | 0;
                        max = 0;
                        min = Infinity;
                        for (j = 0; j < l; j++) {
                            x = (j % wrap) - originX;
                            y = originY - ((j / wrap) | 0);
                            distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs((axis === "y") ? y : x);
                            if (d > max) {
                                max = d;
                            }
                            if (d < min) {
                                min = d;
                            }
                        }
                        distances.max = max - min;
                        distances.min = min;
                        distances.v = l = vars.amount || (vars.each * (wrap > l ? l : !axis ? Math.max(wrap, l / wrap) : axis === "y" ? l / wrap : wrap)) || 0;
                        distances.b = (l < 0) ? base - l : base;
                    }
                    l = (distances[i] - distances.min) / distances.max;
                    return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
                };
            },
            TweenMax = function (target, duration, vars) {
                TweenLite.call(this, target, duration, vars);
                this._cycle = 0;
                this._yoyo = (this.vars.yoyo === true || !!this.vars.yoyoEase);
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                if (this._repeat) {
                    this._uncache(true); //ensures that if there is any repeat, the totalDuration will get recalculated to accurately report it.
                }
                this.render = TweenMax.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)
            },
            _tinyNum = 0.00000001,
            TweenLiteInternals = TweenLite._internals,
            _isSelector = TweenLiteInternals.isSelector,
            _isArray = TweenLiteInternals.isArray,
            p = TweenMax.prototype = TweenLite.to({}, 0.1, {}),
            _blankArray = [];

        TweenMax.version = "2.1.2";
        p.constructor = TweenMax;
        p.kill()._gc = false;
        TweenMax.killTweensOf = TweenMax.killDelayedCallsTo = TweenLite.killTweensOf;
        TweenMax.getTweensOf = TweenLite.getTweensOf;
        TweenMax.lagSmoothing = TweenLite.lagSmoothing;
        TweenMax.ticker = TweenLite.ticker;
        TweenMax.render = TweenLite.render;
        TweenMax.distribute = _distribute;

        p.invalidate = function () {
            this._yoyo = (this.vars.yoyo === true || !!this.vars.yoyoEase);
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._yoyoEase = null;
            this._uncache(true);
            return TweenLite.prototype.invalidate.call(this);
        };

        p.updateTo = function (vars, resetDuration) {
            var self = this,
                curRatio = self.ratio,
                immediate = self.vars.immediateRender || vars.immediateRender,
                p;
            if (resetDuration && self._startTime < self._timeline._time) {
                self._startTime = self._timeline._time;
                self._uncache(false);
                if (self._gc) {
                    self._enabled(true, false);
                } else {
                    self._timeline.insert(self, self._startTime - self._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
                }
            }
            for (p in vars) {
                self.vars[p] = vars[p];
            }
            if (self._initted || immediate) {
                if (resetDuration) {
                    self._initted = false;
                    if (immediate) {
                        self.render(0, true, true);
                    }
                } else {
                    if (self._gc) {
                        self._enabled(true, false);
                    }
                    if (self._notifyPluginsOfEnabled && self._firstPT) {
                        TweenLite._onPluginEvent("_onDisable", self); //in case a plugin like MotionBlur must perform some cleanup tasks
                    }
                    if (self._time / self._duration > 0.998) { //if the tween has finished (or come extremely close to finishing), we just need to rewind it to 0 and then render it again at the end which forces it to re-initialize (parsing the new vars). We allow tweens that are close to finishing (but haven't quite finished) to work this way too because otherwise, the values are so small when determining where to project the starting values that binary math issues creep in and can make the tween appear to render incorrectly when run backwards.
                        var prevTime = self._totalTime;
                        self.render(0, true, false);
                        self._initted = false;
                        self.render(prevTime, true, false);
                    } else {
                        self._initted = false;
                        self._init();
                        if (self._time > 0 || immediate) {
                            var inv = 1 / (1 - curRatio),
                                pt = self._firstPT, endValue;
                            while (pt) {
                                endValue = pt.s + pt.c;
                                pt.c *= inv;
                                pt.s = endValue - pt.c;
                                pt = pt._next;
                            }
                        }
                    }
                }
            }
            return self;
        };

        p.render = function (time, suppressEvents, force) {
            if (!this._initted) if (this._duration === 0 && this.vars.repeat) { //zero duration tweens that render immediately have render() called from TweenLite's constructor, before TweenMax's constructor has finished setting _repeat, _repeatDelay, and _yoyo which are critical in determining totalDuration() so we need to call invalidate() which is a low-kb way to get those set properly.
                this.invalidate();
            }
            var self = this,
                totalDur = (!self._dirty) ? self._totalDuration : self.totalDuration(),
                prevTime = self._time,
                prevTotalTime = self._totalTime,
                prevCycle = self._cycle,
                duration = self._duration,
                prevRawPrevTime = self._rawPrevTime,
                isComplete, callback, pt, cycleDuration, r, type, pow, rawPrevTime, yoyoEase;
            if (time >= totalDur - _tinyNum && time >= 0) { //to work around occasional floating point math artifacts.
                self._totalTime = totalDur;
                self._cycle = self._repeat;
                if (self._yoyo && (self._cycle & 1) !== 0) {
                    self._time = 0;
                    self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;
                } else {
                    self._time = duration;
                    self.ratio = self._ease._calcEnd ? self._ease.getRatio(1) : 1;
                }
                if (!self._reversed) {
                    isComplete = true;
                    callback = "onComplete";
                    force = (force || self._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
                }
                if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                    if (self._startTime === self._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
                        time = 0;
                    }
                    if (prevRawPrevTime < 0 || (time <= 0 && time >= -_tinyNum) || (prevRawPrevTime === _tinyNum && self.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
                        force = true;
                        if (prevRawPrevTime > _tinyNum) {
                            callback = "onReverseComplete";
                        }
                    }
                    self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                }

            } else if (time < _tinyNum) { //to work around occasional floating point math artifacts, round super small values to 0.
                self._totalTime = self._time = self._cycle = 0;
                self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;
                if (prevTotalTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
                    callback = "onReverseComplete";
                    isComplete = self._reversed;
                }
                if (time > -_tinyNum) {
                    time = 0;
                } else if (time < 0) {
                    self._active = false;
                    if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                        if (prevRawPrevTime >= 0) {
                            force = true;
                        }
                        self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                    }
                }
                if (!self._initted) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
                    force = true;
                }
            } else {
                self._totalTime = self._time = time;
                if (self._repeat !== 0) {
                    cycleDuration = duration + self._repeatDelay;
                    self._cycle = (self._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                    if (self._cycle !== 0) if (self._cycle === self._totalTime / cycleDuration && prevTotalTime <= time) {
                        self._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
                    }
                    self._time = self._totalTime - (self._cycle * cycleDuration);
                    if (self._yoyo) if ((self._cycle & 1) !== 0) {
                        self._time = duration - self._time;
                        yoyoEase = self._yoyoEase || self.vars.yoyoEase; //note: we don't set this._yoyoEase in _init() like we do other properties because it's TweenMax-specific and doing it here allows us to optimize performance (most tweens don't have a yoyoEase). Note that we also must skip the this.ratio calculation further down right after we _init() in this function, because we're doing it here.
                        if (yoyoEase) {
                            if (!self._yoyoEase) {
                                if (yoyoEase === true && !self._initted) { //if it's not initted and yoyoEase is true, this._ease won't have been populated yet so we must discern it here.
                                    yoyoEase = self.vars.ease;
                                    self._yoyoEase = yoyoEase = !yoyoEase ? TweenLite.defaultEase : (yoyoEase instanceof Ease) ? yoyoEase : (typeof (yoyoEase) === "function") ? new Ease(yoyoEase, self.vars.easeParams) : Ease.map[yoyoEase] || TweenLite.defaultEase;
                                } else {
                                    self._yoyoEase = yoyoEase = (yoyoEase === true) ? self._ease : (yoyoEase instanceof Ease) ? yoyoEase : Ease.map[yoyoEase];
                                }
                            }
                            self.ratio = yoyoEase ? 1 - yoyoEase.getRatio((duration - self._time) / duration) : 0;
                        }
                    }
                    if (self._time > duration) {
                        self._time = duration;
                    } else if (self._time < 0) {
                        self._time = 0;
                    }
                }
                if (self._easeType && !yoyoEase) {
                    r = self._time / duration;
                    type = self._easeType;
                    pow = self._easePower;
                    if (type === 1 || (type === 3 && r >= 0.5)) {
                        r = 1 - r;
                    }
                    if (type === 3) {
                        r *= 2;
                    }
                    if (pow === 1) {
                        r *= r;
                    } else if (pow === 2) {
                        r *= r * r;
                    } else if (pow === 3) {
                        r *= r * r * r;
                    } else if (pow === 4) {
                        r *= r * r * r * r;
                    }
                    self.ratio = (type === 1) ? 1 - r : (type === 2) ? r : (self._time / duration < 0.5) ? r / 2 : 1 - (r / 2);

                } else if (!yoyoEase) {
                    self.ratio = self._ease.getRatio(self._time / duration);
                }

            }

            if (prevTime === self._time && !force && prevCycle === self._cycle) {
                if (prevTotalTime !== self._totalTime) if (self._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
                    self._callback("onUpdate");
                }
                return;
            } else if (!self._initted) {
                self._init();
                if (!self._initted || self._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
                    return;
                } else if (!force && self._firstPT && ((self.vars.lazy !== false && self._duration) || (self.vars.lazy && !self._duration))) { //we stick it in the queue for rendering at the very end of the tick - this is a performance optimization because browsers invalidate styles and force a recalculation if you read, write, and then read style data (so it's better to read/read/read/write/write/write than read/write/read/write/read/write). The down side, of course, is that usually you WANT things to render immediately because you may have code running right after that which depends on the change. Like imagine running TweenLite.set(...) and then immediately after that, creating a nother tween that animates the same property to another value; the starting values of that 2nd tween wouldn't be accurate if lazy is true.
                    self._time = prevTime;
                    self._totalTime = prevTotalTime;
                    self._rawPrevTime = prevRawPrevTime;
                    self._cycle = prevCycle;
                    TweenLiteInternals.lazyTweens.push(self);
                    self._lazy = [time, suppressEvents];
                    return;
                }
                //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
                if (self._time && !isComplete && !yoyoEase) {
                    self.ratio = self._ease.getRatio(self._time / duration);
                } else if (isComplete && this._ease._calcEnd && !yoyoEase) {
                    self.ratio = self._ease.getRatio((self._time === 0) ? 0 : 1);
                }
            }
            if (self._lazy !== false) {
                self._lazy = false;
            }

            if (!self._active) if (!self._paused && self._time !== prevTime && time >= 0) {
                self._active = true; //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
            }
            if (prevTotalTime === 0) {
                if (self._initted === 2 && time > 0) {
                    self._init(); //will just apply overwriting since _initted of (2) means it was a from() tween that had immediateRender:true
                }
                if (self._startAt) {
                    if (time >= 0) {
                        self._startAt.render(time, true, force);
                    } else if (!callback) {
                        callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
                    }
                }
                if (self.vars.onStart) if (self._totalTime !== 0 || duration === 0) if (!suppressEvents) {
                    self._callback("onStart");
                }
            }

            pt = self._firstPT;
            while (pt) {
                if (pt.f) {
                    pt.t[pt.p](pt.c * self.ratio + pt.s);
                } else {
                    pt.t[pt.p] = pt.c * self.ratio + pt.s;
                }
                pt = pt._next;
            }

            if (self._onUpdate) {
                if (time < 0) if (self._startAt && self._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
                    self._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                }
                if (!suppressEvents) if (self._totalTime !== prevTotalTime || callback) {
                    self._callback("onUpdate");
                }
            }
            if (self._cycle !== prevCycle) if (!suppressEvents) if (!self._gc) if (self.vars.onRepeat) {
                self._callback("onRepeat");
            }
            if (callback) if (!self._gc || force) { //check gc because there's a chance that kill() could be called in an onUpdate
                if (time < 0 && self._startAt && !self._onUpdate && self._startTime) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
                    self._startAt.render(time, true, force);
                }
                if (isComplete) {
                    if (self._timeline.autoRemoveChildren) {
                        self._enabled(false, false);
                    }
                    self._active = false;
                }
                if (!suppressEvents && self.vars[callback]) {
                    self._callback(callback);
                }
                if (duration === 0 && self._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
                    self._rawPrevTime = 0;
                }
            }
        };

//---- STATIC FUNCTIONS -----------------------------------------------------------------------------------------------------------

        TweenMax.to = function (target, duration, vars) {
            return new TweenMax(target, duration, vars);
        };

        TweenMax.from = function (target, duration, vars) {
            vars.runBackwards = true;
            vars.immediateRender = (vars.immediateRender != false);
            return new TweenMax(target, duration, vars);
        };

        TweenMax.fromTo = function (target, duration, fromVars, toVars) {
            toVars.startAt = fromVars;
            toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
            return new TweenMax(target, duration, toVars);
        };

        TweenMax.staggerTo = TweenMax.allTo = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            var a = [],
                staggerFunc = _distribute(vars.stagger || stagger),
                cycle = vars.cycle,
                fromCycle = (vars.startAt || _blankArray).cycle,
                l, copy, i, p;
            if (!_isArray(targets)) {
                if (typeof (targets) === "string") {
                    targets = TweenLite.selector(targets) || targets;
                }
                if (_isSelector(targets)) {
                    targets = _slice(targets);
                }
            }
            targets = targets || [];
            l = targets.length - 1;
            for (i = 0; i <= l; i++) {
                copy = {};
                for (p in vars) {
                    copy[p] = vars[p];
                }
                if (cycle) {
                    _applyCycle(copy, targets, i);
                    if (copy.duration != null) {
                        duration = copy.duration;
                        delete copy.duration;
                    }
                }
                if (fromCycle) {
                    fromCycle = copy.startAt = {};
                    for (p in vars.startAt) {
                        fromCycle[p] = vars.startAt[p];
                    }
                    _applyCycle(copy.startAt, targets, i);
                }
                copy.delay = staggerFunc(i, targets[i], targets) + (copy.delay || 0);
                if (i === l && onCompleteAll) {
                    copy.onComplete = function () {
                        if (vars.onComplete) {
                            vars.onComplete.apply(vars.onCompleteScope || this, arguments);
                        }
                        onCompleteAll.apply(onCompleteAllScope || vars.callbackScope || this, onCompleteAllParams || _blankArray);
                    };
                }
                a[i] = new TweenMax(targets[i], duration, copy);
            }
            return a;
        };

        TweenMax.staggerFrom = TweenMax.allFrom = function (targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            vars.runBackwards = true;
            vars.immediateRender = (vars.immediateRender != false);
            return TweenMax.staggerTo(targets, duration, vars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
        };

        TweenMax.staggerFromTo = TweenMax.allFromTo = function (targets, duration, fromVars, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            toVars.startAt = fromVars;
            toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
            return TweenMax.staggerTo(targets, duration, toVars, stagger, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
        };

        TweenMax.delayedCall = function (delay, callback, params, scope, useFrames) {
            return new TweenMax(callback, 0, {
                delay: delay,
                onComplete: callback,
                onCompleteParams: params,
                callbackScope: scope,
                onReverseComplete: callback,
                onReverseCompleteParams: params,
                immediateRender: false,
                useFrames: useFrames,
                overwrite: 0
            });
        };

        TweenMax.set = function (target, vars) {
            return new TweenMax(target, 0, vars);
        };

        TweenMax.isTweening = function (target) {
            return (TweenLite.getTweensOf(target, true).length > 0);
        };

        var _getChildrenOf = function (timeline, includeTimelines) {
                var a = [],
                    cnt = 0,
                    tween = timeline._first;
                while (tween) {
                    if (tween instanceof TweenLite) {
                        a[cnt++] = tween;
                    } else {
                        if (includeTimelines) {
                            a[cnt++] = tween;
                        }
                        a = a.concat(_getChildrenOf(tween, includeTimelines));
                        cnt = a.length;
                    }
                    tween = tween._next;
                }
                return a;
            },
            getAllTweens = TweenMax.getAllTweens = function (includeTimelines) {
                return _getChildrenOf(Animation._rootTimeline, includeTimelines).concat(_getChildrenOf(Animation._rootFramesTimeline, includeTimelines));
            };

        TweenMax.killAll = function (complete, tweens, delayedCalls, timelines) {
            if (tweens == null) {
                tweens = true;
            }
            if (delayedCalls == null) {
                delayedCalls = true;
            }
            var a = getAllTweens((timelines != false)),
                l = a.length,
                allTrue = (tweens && delayedCalls && timelines),
                isDC, tween, i;
            for (i = 0; i < l; i++) {
                tween = a[i];
                if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
                    if (complete) {
                        tween.totalTime(tween._reversed ? 0 : tween.totalDuration());
                    } else {
                        tween._enabled(false, false);
                    }
                }
            }
        };

        TweenMax.killChildTweensOf = function (parent, complete) {
            if (parent == null) {
                return;
            }
            var tl = TweenLiteInternals.tweenLookup,
                a, curParent, p, i, l;
            if (typeof (parent) === "string") {
                parent = TweenLite.selector(parent) || parent;
            }
            if (_isSelector(parent)) {
                parent = _slice(parent);
            }
            if (_isArray(parent)) {
                i = parent.length;
                while (--i > -1) {
                    TweenMax.killChildTweensOf(parent[i], complete);
                }
                return;
            }
            a = [];
            for (p in tl) {
                curParent = tl[p].target.parentNode;
                while (curParent) {
                    if (curParent === parent) {
                        a = a.concat(tl[p].tweens);
                    }
                    curParent = curParent.parentNode;
                }
            }
            l = a.length;
            for (i = 0; i < l; i++) {
                if (complete) {
                    a[i].totalTime(a[i].totalDuration());
                }
                a[i]._enabled(false, false);
            }
        };

        var _changePause = function (pause, tweens, delayedCalls, timelines) {
            tweens = (tweens !== false);
            delayedCalls = (delayedCalls !== false);
            timelines = (timelines !== false);
            var a = getAllTweens(timelines),
                allTrue = (tweens && delayedCalls && timelines),
                i = a.length,
                isDC, tween;
            while (--i > -1) {
                tween = a[i];
                if (allTrue || (tween instanceof SimpleTimeline) || ((isDC = (tween.target === tween.vars.onComplete)) && delayedCalls) || (tweens && !isDC)) {
                    tween.paused(pause);
                }
            }
        };

        TweenMax.pauseAll = function (tweens, delayedCalls, timelines) {
            _changePause(true, tweens, delayedCalls, timelines);
        };

        TweenMax.resumeAll = function (tweens, delayedCalls, timelines) {
            _changePause(false, tweens, delayedCalls, timelines);
        };

        TweenMax.globalTimeScale = function (value) {
            var tl = Animation._rootTimeline,
                t = TweenLite.ticker.time;
            if (!arguments.length) {
                return tl._timeScale;
            }
            value = value || _tinyNum; //can't allow zero because it'll throw the math off
            tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
            tl = Animation._rootFramesTimeline;
            t = TweenLite.ticker.frame;
            tl._startTime = t - ((t - tl._startTime) * tl._timeScale / value);
            tl._timeScale = Animation._rootTimeline._timeScale = value;
            return value;
        };


//---- GETTERS / SETTERS ----------------------------------------------------------------------------------------------------------

        p.progress = function (value, suppressEvents) {
            return (!arguments.length) ? this._time / this.duration() : this.totalTime(this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
        };

        p.totalProgress = function (value, suppressEvents) {
            return (!arguments.length) ? this._totalTime / this.totalDuration() : this.totalTime(this.totalDuration() * value, suppressEvents);
        };

        p.time = function (value, suppressEvents) {
            if (!arguments.length) {
                return this._time;
            }
            if (this._dirty) {
                this.totalDuration();
            }
            var duration = this._duration,
                cycle = this._cycle,
                cycleDur = cycle * (duration + this._repeatDelay);
            if (value > duration) {
                value = duration;
            }
            return this.totalTime((this._yoyo && (cycle & 1)) ? duration - value + cycleDur : this._repeat ? value + cycleDur : value, suppressEvents);
        };

        p.duration = function (value) {
            if (!arguments.length) {
                return this._duration; //don't set _dirty = false because there could be repeats that haven't been factored into the _totalDuration yet. Otherwise, if you create a repeated TweenMax and then immediately check its duration(), it would cache the value and the totalDuration would not be correct, thus repeats wouldn't take effect.
            }
            return Animation.prototype.duration.call(this, value);
        };

        p.totalDuration = function (value) {
            if (!arguments.length) {
                if (this._dirty) {
                    //instead of Infinity, we use 999999999999 so that we can accommodate reverses
                    this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
                    this._dirty = false;
                }
                return this._totalDuration;
            }
            return (this._repeat === -1) ? this : this.duration((value - (this._repeat * this._repeatDelay)) / (this._repeat + 1));
        };

        p.repeat = function (value) {
            if (!arguments.length) {
                return this._repeat;
            }
            this._repeat = value;
            return this._uncache(true);
        };

        p.repeatDelay = function (value) {
            if (!arguments.length) {
                return this._repeatDelay;
            }
            this._repeatDelay = value;
            return this._uncache(true);
        };

        p.yoyo = function (value) {
            if (!arguments.length) {
                return this._yoyo;
            }
            this._yoyo = value;
            return this;
        };


        return TweenMax;

    }, true);


    /*
 * ----------------------------------------------------------------
 * TimelineLite
 * ----------------------------------------------------------------
 */
    _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (Animation, SimpleTimeline, TweenLite) {

        var TimelineLite = function (vars) {
                SimpleTimeline.call(this, vars);
                var self = this,
                    v = self.vars,
                    val, p;
                self._labels = {};
                self.autoRemoveChildren = !!v.autoRemoveChildren;
                self.smoothChildTiming = !!v.smoothChildTiming;
                self._sortChildren = true;
                self._onUpdate = v.onUpdate;
                for (p in v) {
                    val = v[p];
                    if (_isArray(val)) if (val.join("").indexOf("{self}") !== -1) {
                        v[p] = self._swapSelfInParams(val);
                    }
                }
                if (_isArray(v.tweens)) {
                    self.add(v.tweens, 0, v.align, v.stagger);
                }
            },
            _tinyNum = 0.00000001,
            TweenLiteInternals = TweenLite._internals,
            _internals = TimelineLite._internals = {},
            _isSelector = TweenLiteInternals.isSelector,
            _isArray = TweenLiteInternals.isArray,
            _lazyTweens = TweenLiteInternals.lazyTweens,
            _lazyRender = TweenLiteInternals.lazyRender,
            _globals = _gsScope._gsDefine.globals,
            _copy = function (vars) {
                var copy = {}, p;
                for (p in vars) {
                    copy[p] = vars[p];
                }
                return copy;
            },
            _applyCycle = function (vars, targets, i) {
                var alt = vars.cycle,
                    p, val;
                for (p in alt) {
                    val = alt[p];
                    vars[p] = (typeof (val) === "function") ? val(i, targets[i], targets) : val[i % val.length];
                }
                delete vars.cycle;
            },
            _pauseCallback = _internals.pauseCallback = function () {
            },
            _slice = function (a) { //don't use [].slice because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
                var b = [],
                    l = a.length,
                    i;
                for (i = 0; i !== l; b.push(a[i++])) ;
                return b;
            },
            _defaultImmediateRender = function (tl, toVars, fromVars, defaultFalse) { //default to immediateRender:true unless otherwise set in toVars, fromVars or if defaultFalse is passed in as true
                var ir = "immediateRender";
                if (!(ir in toVars)) {
                    toVars[ir] = !((fromVars && fromVars[ir] === false) || defaultFalse);
                }
                return toVars;
            },
            //for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
            _distribute = function (v) {
                if (typeof (v) === "function") {
                    return v;
                }
                var vars = (typeof (v) === "object") ? v : {each: v}, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
                    ease = vars.ease,
                    from = vars.from || 0,
                    base = vars.base || 0,
                    cache = {},
                    isFromKeyword = isNaN(from),
                    axis = vars.axis,
                    ratio = {center: 0.5, end: 1}[from] || 0;
                return function (i, target, a) {
                    var l = (a || vars).length,
                        distances = cache[l],
                        originX, originY, x, y, d, j, max, min, wrap;
                    if (!distances) {
                        wrap = (vars.grid === "auto") ? 0 : (vars.grid || [Infinity])[0];
                        if (!wrap) {
                            max = -Infinity;
                            while (max < (max = a[wrap++].getBoundingClientRect().left) && wrap < l) {
                            }
                            wrap--;
                        }
                        distances = cache[l] = [];
                        originX = isFromKeyword ? (Math.min(wrap, l) * ratio) - 0.5 : from % wrap;
                        originY = isFromKeyword ? l * ratio / wrap - 0.5 : (from / wrap) | 0;
                        max = 0;
                        min = Infinity;
                        for (j = 0; j < l; j++) {
                            x = (j % wrap) - originX;
                            y = originY - ((j / wrap) | 0);
                            distances[j] = d = !axis ? Math.sqrt(x * x + y * y) : Math.abs((axis === "y") ? y : x);
                            if (d > max) {
                                max = d;
                            }
                            if (d < min) {
                                min = d;
                            }
                        }
                        distances.max = max - min;
                        distances.min = min;
                        distances.v = l = vars.amount || (vars.each * (wrap > l ? l : !axis ? Math.max(wrap, l / wrap) : axis === "y" ? l / wrap : wrap)) || 0;
                        distances.b = (l < 0) ? base - l : base;
                    }
                    l = (distances[i] - distances.min) / distances.max;
                    return distances.b + (ease ? ease.getRatio(l) : l) * distances.v;
                };
            },
            p = TimelineLite.prototype = new SimpleTimeline();

        TimelineLite.version = "2.1.2";
        TimelineLite.distribute = _distribute;
        p.constructor = TimelineLite;
        p.kill()._gc = p._forcingPlayhead = p._hasPause = false;

        /* might use later...
		//translates a local time inside an animation to the corresponding time on the root/global timeline, factoring in all nesting and timeScales.
		function localToGlobal(time, animation) {
			while (animation) {
				time = (time / animation._timeScale) + animation._startTime;
				animation = animation.timeline;
			}
			return time;
		}

		//translates the supplied time on the root/global timeline into the corresponding local time inside a particular animation, factoring in all nesting and timeScales
		function globalToLocal(time, animation) {
			var scale = 1;
			time -= localToGlobal(0, animation);
			while (animation) {
				scale *= animation._timeScale;
				animation = animation.timeline;
			}
			return time * scale;
		}
		*/

        p.to = function (target, duration, vars, position) {
            var Engine = (vars.repeat && _globals.TweenMax) || TweenLite;
            return duration ? this.add(new Engine(target, duration, vars), position) : this.set(target, vars, position);
        };

        p.from = function (target, duration, vars, position) {
            return this.add(((vars.repeat && _globals.TweenMax) || TweenLite).from(target, duration, _defaultImmediateRender(this, vars)), position);
        };

        p.fromTo = function (target, duration, fromVars, toVars, position) {
            var Engine = (toVars.repeat && _globals.TweenMax) || TweenLite;
            toVars = _defaultImmediateRender(this, toVars, fromVars);
            return duration ? this.add(Engine.fromTo(target, duration, fromVars, toVars), position) : this.set(target, toVars, position);
        };

        p.staggerTo = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            var tl = new TimelineLite({
                    onComplete: onCompleteAll,
                    onCompleteParams: onCompleteAllParams,
                    callbackScope: onCompleteAllScope,
                    smoothChildTiming: this.smoothChildTiming
                }),
                staggerFunc = _distribute(vars.stagger || stagger),
                startAt = vars.startAt,
                cycle = vars.cycle,
                copy, i;
            if (typeof (targets) === "string") {
                targets = TweenLite.selector(targets) || targets;
            }
            targets = targets || [];
            if (_isSelector(targets)) { //if the targets object is a selector, translate it into an array.
                targets = _slice(targets);
            }
            for (i = 0; i < targets.length; i++) {
                copy = _copy(vars);
                if (startAt) {
                    copy.startAt = _copy(startAt);
                    if (startAt.cycle) {
                        _applyCycle(copy.startAt, targets, i);
                    }
                }
                if (cycle) {
                    _applyCycle(copy, targets, i);
                    if (copy.duration != null) {
                        duration = copy.duration;
                        delete copy.duration;
                    }
                }
                tl.to(targets[i], duration, copy, staggerFunc(i, targets[i], targets));
            }
            return this.add(tl, position);
        };

        p.staggerFrom = function (targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            vars.runBackwards = true;
            return this.staggerTo(targets, duration, _defaultImmediateRender(this, vars), stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
        };

        p.staggerFromTo = function (targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope) {
            toVars.startAt = fromVars;
            return this.staggerTo(targets, duration, _defaultImmediateRender(this, toVars, fromVars), stagger, position, onCompleteAll, onCompleteAllParams, onCompleteAllScope);
        };

        p.call = function (callback, params, scope, position) {
            return this.add(TweenLite.delayedCall(0, callback, params, scope), position);
        };

        p.set = function (target, vars, position) {
            return this.add(new TweenLite(target, 0, _defaultImmediateRender(this, vars, null, true)), position);
        };

        TimelineLite.exportRoot = function (vars, ignoreDelayedCalls) {
            vars = vars || {};
            if (vars.smoothChildTiming == null) {
                vars.smoothChildTiming = true;
            }
            var tl = new TimelineLite(vars),
                root = tl._timeline,
                hasNegativeStart, time, tween, next;
            if (ignoreDelayedCalls == null) {
                ignoreDelayedCalls = true;
            }
            root._remove(tl, true);
            tl._startTime = 0;
            tl._rawPrevTime = tl._time = tl._totalTime = root._time;
            tween = root._first;
            while (tween) {
                next = tween._next;
                if (!ignoreDelayedCalls || !(tween instanceof TweenLite && tween.target === tween.vars.onComplete)) {
                    time = tween._startTime - tween._delay;
                    if (time < 0) {
                        hasNegativeStart = 1;
                    }
                    tl.add(tween, time);
                }
                tween = next;
            }
            root.add(tl, 0);
            if (hasNegativeStart) { //calling totalDuration() will force the adjustment necessary to shift the children forward so none of them start before zero, and moves the timeline backwards the same amount, so the playhead is still aligned where it should be globally, but the timeline doesn't have illegal children that start before zero.
                tl.totalDuration();
            }
            return tl;
        };

        p.add = function (value, position, align, stagger) {
            var self = this,
                curTime, l, i, child, tl, beforeRawTime;
            if (typeof (position) !== "number") {
                position = self._parseTimeOrLabel(position, 0, true, value);
            }
            if (!(value instanceof Animation)) {
                if ((value instanceof Array) || (value && value.push && _isArray(value))) {
                    align = align || "normal";
                    stagger = stagger || 0;
                    curTime = position;
                    l = value.length;
                    for (i = 0; i < l; i++) {
                        if (_isArray(child = value[i])) {
                            child = new TimelineLite({tweens: child});
                        }
                        self.add(child, curTime);
                        if (typeof (child) !== "string" && typeof (child) !== "function") {
                            if (align === "sequence") {
                                curTime = child._startTime + (child.totalDuration() / child._timeScale);
                            } else if (align === "start") {
                                child._startTime -= child.delay();
                            }
                        }
                        curTime += stagger;
                    }
                    return self._uncache(true);
                } else if (typeof (value) === "string") {
                    return self.addLabel(value, position);
                } else if (typeof (value) === "function") {
                    value = TweenLite.delayedCall(0, value);
                } else {
                    throw("Cannot add " + value + " into the timeline; it is not a tween, timeline, function, or string.");
                }
            }

            SimpleTimeline.prototype.add.call(self, value, position);

            if (value._time || (!value._duration && value._initted)) { //in case, for example, the _startTime is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
                curTime = (self.rawTime() - value._startTime) * value._timeScale;
                if (!value._duration || Math.abs(Math.max(0, Math.min(value.totalDuration(), curTime))) - value._totalTime > 0.00001) {
                    value.render(curTime, false, false);
                }
            }

            //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
            if (self._gc || self._time === self._duration) if (!self._paused) if (self._duration < self.duration()) {
                //in case any of the ancestors had completed but should now be enabled...
                tl = self;
                beforeRawTime = (tl.rawTime() > value._startTime); //if the tween is placed on the timeline so that it starts BEFORE the current rawTime, we should align the playhead (move the timeline). This is because sometimes users will create a timeline, let it finish, and much later append a tween and expect it to run instead of jumping to its end state. While technically one could argue that it should jump to its end state, that's not what users intuitively expect.
                while (tl._timeline) {
                    if (beforeRawTime && tl._timeline.smoothChildTiming) {
                        tl.totalTime(tl._totalTime, true); //moves the timeline (shifts its startTime) if necessary, and also enables it.
                    } else if (tl._gc) {
                        tl._enabled(true, false);
                    }
                    tl = tl._timeline;
                }
            }

            return self;
        };

        p.remove = function (value) {
            if (value instanceof Animation) {
                this._remove(value, false);
                var tl = value._timeline = value.vars.useFrames ? Animation._rootFramesTimeline : Animation._rootTimeline; //now that it's removed, default it to the root timeline so that if it gets played again, it doesn't jump back into this timeline.
                value._startTime = (value._paused ? value._pauseTime : tl._time) - ((!value._reversed ? value._totalTime : value.totalDuration() - value._totalTime) / value._timeScale); //ensure that if it gets played again, the timing is correct.
                return this;
            } else if (value instanceof Array || (value && value.push && _isArray(value))) {
                var i = value.length;
                while (--i > -1) {
                    this.remove(value[i]);
                }
                return this;
            } else if (typeof (value) === "string") {
                return this.removeLabel(value);
            }
            return this.kill(null, value);
        };

        p._remove = function (tween, skipDisable) {
            SimpleTimeline.prototype._remove.call(this, tween, skipDisable);
            var last = this._last;
            if (!last) {
                this._time = this._totalTime = this._duration = this._totalDuration = 0;
            } else if (this._time > this.duration()) {
                this._time = this._duration;
                this._totalTime = this._totalDuration;
            }
            return this;
        };

        p.append = function (value, offsetOrLabel) {
            return this.add(value, this._parseTimeOrLabel(null, offsetOrLabel, true, value));
        };

        p.insert = p.insertMultiple = function (value, position, align, stagger) {
            return this.add(value, position || 0, align, stagger);
        };

        p.appendMultiple = function (tweens, offsetOrLabel, align, stagger) {
            return this.add(tweens, this._parseTimeOrLabel(null, offsetOrLabel, true, tweens), align, stagger);
        };

        p.addLabel = function (label, position) {
            this._labels[label] = this._parseTimeOrLabel(position);
            return this;
        };

        p.addPause = function (position, callback, params, scope) {
            var t = TweenLite.delayedCall(0, _pauseCallback, params, scope || this);
            t.vars.onComplete = t.vars.onReverseComplete = callback;
            t.data = "isPause";
            this._hasPause = true;
            return this.add(t, position);
        };

        p.removeLabel = function (label) {
            delete this._labels[label];
            return this;
        };

        p.getLabelTime = function (label) {
            return (this._labels[label] != null) ? this._labels[label] : -1;
        };

        p._parseTimeOrLabel = function (timeOrLabel, offsetOrLabel, appendIfAbsent, ignore) {
            var clippedDuration, i;
            //if we're about to add a tween/timeline (or an array of them) that's already a child of this timeline, we should remove it first so that it doesn't contaminate the duration().
            if (ignore instanceof Animation && ignore.timeline === this) {
                this.remove(ignore);
            } else if (ignore && ((ignore instanceof Array) || (ignore.push && _isArray(ignore)))) {
                i = ignore.length;
                while (--i > -1) {
                    if (ignore[i] instanceof Animation && ignore[i].timeline === this) {
                        this.remove(ignore[i]);
                    }
                }
            }
            clippedDuration = (typeof (timeOrLabel) === "number" && !offsetOrLabel) ? 0 : (this.duration() > 99999999999) ? this.recent().endTime(false) : this._duration; //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
            if (typeof (offsetOrLabel) === "string") {
                return this._parseTimeOrLabel(offsetOrLabel, (appendIfAbsent && typeof (timeOrLabel) === "number" && this._labels[offsetOrLabel] == null) ? timeOrLabel - clippedDuration : 0, appendIfAbsent);
            }
            offsetOrLabel = offsetOrLabel || 0;
            if (typeof (timeOrLabel) === "string" && (isNaN(timeOrLabel) || this._labels[timeOrLabel] != null)) { //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
                i = timeOrLabel.indexOf("=");
                if (i === -1) {
                    if (this._labels[timeOrLabel] == null) {
                        return appendIfAbsent ? (this._labels[timeOrLabel] = clippedDuration + offsetOrLabel) : offsetOrLabel;
                    }
                    return this._labels[timeOrLabel] + offsetOrLabel;
                }
                offsetOrLabel = parseInt(timeOrLabel.charAt(i - 1) + "1", 10) * Number(timeOrLabel.substr(i + 1));
                timeOrLabel = (i > 1) ? this._parseTimeOrLabel(timeOrLabel.substr(0, i - 1), 0, appendIfAbsent) : clippedDuration;
            } else if (timeOrLabel == null) {
                timeOrLabel = clippedDuration;
            }
            return Number(timeOrLabel) + offsetOrLabel;
        };

        p.seek = function (position, suppressEvents) {
            return this.totalTime((typeof (position) === "number") ? position : this._parseTimeOrLabel(position), (suppressEvents !== false));
        };

        p.stop = function () {
            return this.paused(true);
        };

        p.gotoAndPlay = function (position, suppressEvents) {
            return this.play(position, suppressEvents);
        };

        p.gotoAndStop = function (position, suppressEvents) {
            return this.pause(position, suppressEvents);
        };

        p.render = function (time, suppressEvents, force) {
            if (this._gc) {
                this._enabled(true, false);
            }
            var self = this,
                prevTime = self._time,
                totalDur = (!self._dirty) ? self._totalDuration : self.totalDuration(),
                prevStart = self._startTime,
                prevTimeScale = self._timeScale,
                prevPaused = self._paused,
                tween, isComplete, next, callback, internalForce, pauseTween, curTime, pauseTime;
            if (prevTime !== self._time) { //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                time += self._time - prevTime;
            }
            if (time >= totalDur - _tinyNum && time >= 0) { //to work around occasional floating point math artifacts.
                self._totalTime = self._time = totalDur;
                if (!self._reversed) if (!self._hasPausedChild()) {
                    isComplete = true;
                    callback = "onComplete";
                    internalForce = !!self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
                    if (self._duration === 0) if ((time <= 0 && time >= -_tinyNum) || self._rawPrevTime < 0 || self._rawPrevTime === _tinyNum) if (self._rawPrevTime !== time && self._first) {
                        internalForce = true;
                        if (self._rawPrevTime > _tinyNum) {
                            callback = "onReverseComplete";
                        }
                    }
                }
                self._rawPrevTime = (self._duration || !suppressEvents || time || self._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                time = totalDur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7.

            } else if (time < _tinyNum) { //to work around occasional floating point math artifacts, round super small values to 0.
                self._totalTime = self._time = 0;
                if (time > -_tinyNum) {
                    time = 0;
                }
                if (prevTime !== 0 || (self._duration === 0 && self._rawPrevTime !== _tinyNum && (self._rawPrevTime > 0 || (time < 0 && self._rawPrevTime >= 0)))) {
                    callback = "onReverseComplete";
                    isComplete = self._reversed;
                }
                if (time < 0) {
                    self._active = false;
                    if (self._timeline.autoRemoveChildren && self._reversed) { //ensures proper GC if a timeline is resumed after it's finished reversing.
                        internalForce = isComplete = true;
                        callback = "onReverseComplete";
                    } else if (self._rawPrevTime >= 0 && self._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
                        internalForce = true;
                    }
                    self._rawPrevTime = time;
                } else {
                    self._rawPrevTime = (self._duration || !suppressEvents || time || self._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                    if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
                        tween = self._first;
                        while (tween && tween._startTime === 0) {
                            if (!tween._duration) {
                                isComplete = false;
                            }
                            tween = tween._next;
                        }
                    }
                    time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
                    if (!self._initted) {
                        internalForce = true;
                    }
                }

            } else {

                if (self._hasPause && !self._forcingPlayhead && !suppressEvents) {
                    if (time >= prevTime) {
                        tween = self._first;
                        while (tween && tween._startTime <= time && !pauseTween) {
                            if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && self._rawPrevTime === 0)) {
                                pauseTween = tween;
                            }
                            tween = tween._next;
                        }
                    } else {
                        tween = self._last;
                        while (tween && tween._startTime >= time && !pauseTween) {
                            if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
                                pauseTween = tween;
                            }
                            tween = tween._prev;
                        }
                    }
                    if (pauseTween) {
                        self._time = self._totalTime = time = pauseTween._startTime;
                        pauseTime = self._startTime + (time / self._timeScale);
                    }
                }

                self._totalTime = self._time = self._rawPrevTime = time;
            }
            if ((self._time === prevTime || !self._first) && !force && !internalForce && !pauseTween) {
                return;
            } else if (!self._initted) {
                self._initted = true;
            }

            if (!self._active) if (!self._paused && self._time !== prevTime && time > 0) {
                self._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
            }

            if (prevTime === 0) if (self.vars.onStart) if (self._time !== 0 || !self._duration) if (!suppressEvents) {
                self._callback("onStart");
            }

            curTime = self._time;
            if (curTime >= prevTime) {
                tween = self._first;
                while (tween) {
                    next = tween._next; //record it here because the value could change after rendering...
                    if (curTime !== self._time || (self._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                        break;
                    } else if (tween._active || (tween._startTime <= curTime && !tween._paused && !tween._gc)) {
                        if (pauseTween === tween) {
                            self.pause();
                            self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
                        }
                        if (!tween._reversed) {
                            tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                        } else {
                            tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                        }
                    }
                    tween = next;
                }
            } else {
                tween = self._last;
                while (tween) {
                    next = tween._prev; //record it here because the value could change after rendering...
                    if (curTime !== self._time || (self._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                        break;
                    } else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
                        if (pauseTween === tween) {
                            pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
                            while (pauseTween && pauseTween.endTime() > self._time) {
                                pauseTween.render((pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
                                pauseTween = pauseTween._prev;
                            }
                            pauseTween = null;
                            self.pause();
                            self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
                        }
                        if (!tween._reversed) {
                            tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                        } else {
                            tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                        }
                    }
                    tween = next;
                }
            }

            if (self._onUpdate) if (!suppressEvents) {
                if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
                    _lazyRender();
                }
                self._callback("onUpdate");
            }

            if (callback) if (!self._gc) if (prevStart === self._startTime || prevTimeScale !== self._timeScale) if (self._time === 0 || totalDur >= self.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
                if (isComplete) {
                    if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
                        _lazyRender();
                    }
                    if (self._timeline.autoRemoveChildren) {
                        self._enabled(false, false);
                    }
                    self._active = false;
                }
                if (!suppressEvents && self.vars[callback]) {
                    self._callback(callback);
                }
            }
        };

        p._hasPausedChild = function () {
            var tween = this._first;
            while (tween) {
                if (tween._paused || ((tween instanceof TimelineLite) && tween._hasPausedChild())) {
                    return true;
                }
                tween = tween._next;
            }
            return false;
        };

        p.getChildren = function (nested, tweens, timelines, ignoreBeforeTime) {
            ignoreBeforeTime = ignoreBeforeTime || -9999999999;
            var a = [],
                tween = this._first,
                cnt = 0;
            while (tween) {
                if (tween._startTime < ignoreBeforeTime) {
                    //do nothing
                } else if (tween instanceof TweenLite) {
                    if (tweens !== false) {
                        a[cnt++] = tween;
                    }
                } else {
                    if (timelines !== false) {
                        a[cnt++] = tween;
                    }
                    if (nested !== false) {
                        a = a.concat(tween.getChildren(true, tweens, timelines));
                        cnt = a.length;
                    }
                }
                tween = tween._next;
            }
            return a;
        };

        p.getTweensOf = function (target, nested) {
            var disabled = this._gc,
                a = [],
                cnt = 0,
                tweens, i;
            if (disabled) {
                this._enabled(true, true); //getTweensOf() filters out disabled tweens, and we have to mark them as _gc = true when the timeline completes in order to allow clean garbage collection, so temporarily re-enable the timeline here.
            }
            tweens = TweenLite.getTweensOf(target);
            i = tweens.length;
            while (--i > -1) {
                if (tweens[i].timeline === this || (nested && this._contains(tweens[i]))) {
                    a[cnt++] = tweens[i];
                }
            }
            if (disabled) {
                this._enabled(false, true);
            }
            return a;
        };

        p.recent = function () {
            return this._recent;
        };

        p._contains = function (tween) {
            var tl = tween.timeline;
            while (tl) {
                if (tl === this) {
                    return true;
                }
                tl = tl.timeline;
            }
            return false;
        };

        p.shiftChildren = function (amount, adjustLabels, ignoreBeforeTime) {
            ignoreBeforeTime = ignoreBeforeTime || 0;
            var tween = this._first,
                labels = this._labels,
                p;
            while (tween) {
                if (tween._startTime >= ignoreBeforeTime) {
                    tween._startTime += amount;
                }
                tween = tween._next;
            }
            if (adjustLabels) {
                for (p in labels) {
                    if (labels[p] >= ignoreBeforeTime) {
                        labels[p] += amount;
                    }
                }
            }
            return this._uncache(true);
        };

        p._kill = function (vars, target) {
            if (!vars && !target) {
                return this._enabled(false, false);
            }
            var tweens = (!target) ? this.getChildren(true, true, false) : this.getTweensOf(target),
                i = tweens.length,
                changed = false;
            while (--i > -1) {
                if (tweens[i]._kill(vars, target)) {
                    changed = true;
                }
            }
            return changed;
        };

        p.clear = function (labels) {
            var tweens = this.getChildren(false, true, true),
                i = tweens.length;
            this._time = this._totalTime = 0;
            while (--i > -1) {
                tweens[i]._enabled(false, false);
            }
            if (labels !== false) {
                this._labels = {};
            }
            return this._uncache(true);
        };

        p.invalidate = function () {
            var tween = this._first;
            while (tween) {
                tween.invalidate();
                tween = tween._next;
            }
            return Animation.prototype.invalidate.call(this);
        };

        p._enabled = function (enabled, ignoreTimeline) {
            if (enabled === this._gc) {
                var tween = this._first;
                while (tween) {
                    tween._enabled(enabled, true);
                    tween = tween._next;
                }
            }
            return SimpleTimeline.prototype._enabled.call(this, enabled, ignoreTimeline);
        };

        p.totalTime = function (time, suppressEvents, uncapped) {
            this._forcingPlayhead = true;
            var val = Animation.prototype.totalTime.apply(this, arguments);
            this._forcingPlayhead = false;
            return val;
        };

        p.duration = function (value) {
            if (!arguments.length) {
                if (this._dirty) {
                    this.totalDuration(); //just triggers recalculation
                }
                return this._duration;
            }
            if (this.duration() !== 0 && value !== 0) {
                this.timeScale(this._duration / value);
            }
            return this;
        };

        p.totalDuration = function (value) {
            if (!arguments.length) {
                if (this._dirty) {
                    var max = 0,
                        self = this,
                        tween = self._last,
                        prevStart = 999999999999,
                        prev, end;
                    while (tween) {
                        prev = tween._prev; //record it here in case the tween changes position in the sequence...
                        if (tween._dirty) {
                            tween.totalDuration(); //could change the tween._startTime, so make sure the tween's cache is clean before analyzing it.
                        }
                        if (tween._startTime > prevStart && self._sortChildren && !tween._paused && !self._calculatingDuration) { //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                            self._calculatingDuration = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add(), like _parseTimeOrLabel().
                            self.add(tween, tween._startTime - tween._delay);
                            self._calculatingDuration = 0;
                        } else {
                            prevStart = tween._startTime;
                        }
                        if (tween._startTime < 0 && !tween._paused) { //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                            max -= tween._startTime;
                            if (self._timeline.smoothChildTiming) {
                                self._startTime += tween._startTime / self._timeScale;
                                self._time -= tween._startTime;
                                self._totalTime -= tween._startTime;
                                self._rawPrevTime -= tween._startTime;
                            }
                            self.shiftChildren(-tween._startTime, false, -9999999999);
                            prevStart = 0;
                        }
                        end = tween._startTime + (tween._totalDuration / tween._timeScale);
                        if (end > max) {
                            max = end;
                        }
                        tween = prev;
                    }
                    self._duration = self._totalDuration = max;
                    self._dirty = false;
                }
                return this._totalDuration;
            }
            return (value && this.totalDuration()) ? this.timeScale(this._totalDuration / value) : this;
        };

        p.paused = function (value) {
            if (value === false && this._paused) { //if there's a pause directly at the spot from where we're unpausing, skip it.
                var tween = this._first;
                while (tween) {
                    if (tween._startTime === this._time && tween.data === "isPause") {
                        tween._rawPrevTime = 0; //remember, _rawPrevTime is how zero-duration tweens/callbacks sense directionality and determine whether or not to fire. If _rawPrevTime is the same as _startTime on the next render, it won't fire.
                    }
                    tween = tween._next;
                }
            }
            return Animation.prototype.paused.apply(this, arguments);
        };

        p.usesFrames = function () {
            var tl = this._timeline;
            while (tl._timeline) {
                tl = tl._timeline;
            }
            return (tl === Animation._rootFramesTimeline);
        };

        p.rawTime = function (wrapRepeats) {
            return (wrapRepeats && (this._paused || (this._repeat && this.time() > 0 && this.totalProgress() < 1))) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(wrapRepeats) - this._startTime) * this._timeScale;
        };

        return TimelineLite;

    }, true);


    /*
 * ----------------------------------------------------------------
 * TimelineMax
 * ----------------------------------------------------------------
 */
    _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (TimelineLite, TweenLite, Ease) {

        var TimelineMax = function (vars) {
                TimelineLite.call(this, vars);
                this._repeat = this.vars.repeat || 0;
                this._repeatDelay = this.vars.repeatDelay || 0;
                this._cycle = 0;
                this._yoyo = !!this.vars.yoyo;
                this._dirty = true;
            },
            _tinyNum = 0.00000001,
            TweenLiteInternals = TweenLite._internals,
            _lazyTweens = TweenLiteInternals.lazyTweens,
            _lazyRender = TweenLiteInternals.lazyRender,
            _globals = _gsScope._gsDefine.globals,
            _easeNone = new Ease(null, null, 1, 0),
            p = TimelineMax.prototype = new TimelineLite();

        p.constructor = TimelineMax;
        p.kill()._gc = false;
        TimelineMax.version = "2.1.2";

        p.invalidate = function () {
            this._yoyo = !!this.vars.yoyo;
            this._repeat = this.vars.repeat || 0;
            this._repeatDelay = this.vars.repeatDelay || 0;
            this._uncache(true);
            return TimelineLite.prototype.invalidate.call(this);
        };

        p.addCallback = function (callback, position, params, scope) {
            return this.add(TweenLite.delayedCall(0, callback, params, scope), position);
        };

        p.removeCallback = function (callback, position) {
            if (callback) {
                if (position == null) {
                    this._kill(null, callback);
                } else {
                    var a = this.getTweensOf(callback, false),
                        i = a.length,
                        time = this._parseTimeOrLabel(position);
                    while (--i > -1) {
                        if (a[i]._startTime === time) {
                            a[i]._enabled(false, false);
                        }
                    }
                }
            }
            return this;
        };

        p.removePause = function (position) {
            return this.removeCallback(TimelineLite._internals.pauseCallback, position);
        };

        p.tweenTo = function (position, vars) {
            vars = vars || {};
            var copy = {ease: _easeNone, useFrames: this.usesFrames(), immediateRender: false, lazy: false},
                Engine = (vars.repeat && _globals.TweenMax) || TweenLite,
                duration, p, t;
            for (p in vars) {
                copy[p] = vars[p];
            }
            copy.time = this._parseTimeOrLabel(position);
            duration = (Math.abs(Number(copy.time) - this._time) / this._timeScale) || 0.001;
            t = new Engine(this, duration, copy);
            copy.onStart = function () {
                t.target.paused(true);
                if (t.vars.time !== t.target.time() && duration === t.duration() && !t.isFromTo) { //don't make the duration zero - if it's supposed to be zero, don't worry because it's already initting the tween and will complete immediately, effectively making the duration zero anyway. If we make duration zero, the tween won't run at all.
                    t.duration(Math.abs(t.vars.time - t.target.time()) / t.target._timeScale).render(t.time(), true, true); //render() right away to ensure that things look right, especially in the case of .tweenTo(0).
                }
                if (vars.onStart) { //in case the user had an onStart in the vars - we don't want to overwrite it.
                    vars.onStart.apply(vars.onStartScope || vars.callbackScope || t, vars.onStartParams || []); //don't use t._callback("onStart") or it'll point to the copy.onStart and we'll get a recursion error.
                }
            };
            return t;
        };

        p.tweenFromTo = function (fromPosition, toPosition, vars) {
            vars = vars || {};
            fromPosition = this._parseTimeOrLabel(fromPosition);
            vars.startAt = {onComplete: this.seek, onCompleteParams: [fromPosition], callbackScope: this};
            vars.immediateRender = (vars.immediateRender !== false);
            var t = this.tweenTo(toPosition, vars);
            t.isFromTo = 1; //to ensure we don't mess with the duration in the onStart (we've got the start and end values here, so lock it in)
            return t.duration((Math.abs(t.vars.time - fromPosition) / this._timeScale) || 0.001);
        };

        p.render = function (time, suppressEvents, force) {
            if (this._gc) {
                this._enabled(true, false);
            }
            var self = this,
                prevTime = self._time,
                totalDur = (!self._dirty) ? self._totalDuration : self.totalDuration(),
                dur = self._duration,
                prevTotalTime = self._totalTime,
                prevStart = self._startTime,
                prevTimeScale = self._timeScale,
                prevRawPrevTime = self._rawPrevTime,
                prevPaused = self._paused,
                prevCycle = self._cycle,
                tween, isComplete, next, callback, internalForce, cycleDuration, pauseTween, curTime, pauseTime;
            if (prevTime !== self._time) { //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                time += self._time - prevTime;
            }
            if (time >= totalDur - _tinyNum && time >= 0) { //to work around occasional floating point math artifacts.
                if (!self._locked) {
                    self._totalTime = totalDur;
                    self._cycle = self._repeat;
                }
                if (!self._reversed) if (!self._hasPausedChild()) {
                    isComplete = true;
                    callback = "onComplete";
                    internalForce = !!self._timeline.autoRemoveChildren; //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
                    if (self._duration === 0) if ((time <= 0 && time >= -_tinyNum) || prevRawPrevTime < 0 || prevRawPrevTime === _tinyNum) if (prevRawPrevTime !== time && self._first) {
                        internalForce = true;
                        if (prevRawPrevTime > _tinyNum) {
                            callback = "onReverseComplete";
                        }
                    }
                }
                self._rawPrevTime = (self._duration || !suppressEvents || time || self._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                if (self._yoyo && (self._cycle & 1)) {
                    self._time = time = 0;
                } else {
                    self._time = dur;
                    time = dur + 0.0001; //to avoid occasional floating point rounding errors - sometimes child tweens/timelines were not being fully completed (their progress might be 0.999999999999998 instead of 1 because when _time - tween._startTime is performed, floating point errors would return a value that was SLIGHTLY off). Try (999999999999.7 - 999999999999) * 1 = 0.699951171875 instead of 0.7. We cannot do less then 0.0001 because the same issue can occur when the duration is extremely large like 999999999999 in which case adding 0.00000001, for example, causes it to act like nothing was added.
                }

            } else if (time < _tinyNum) { //to work around occasional floating point math artifacts, round super small values to 0.
                if (!self._locked) {
                    self._totalTime = self._cycle = 0;
                }
                self._time = 0;
                if (time > -_tinyNum) {
                    time = 0;
                }
                if (prevTime !== 0 || (dur === 0 && prevRawPrevTime !== _tinyNum && (prevRawPrevTime > 0 || (time < 0 && prevRawPrevTime >= 0)) && !self._locked)) { //edge case for checking time < 0 && prevRawPrevTime >= 0: a zero-duration fromTo() tween inside a zero-duration timeline (yeah, very rare)
                    callback = "onReverseComplete";
                    isComplete = self._reversed;
                }
                if (time < 0) {
                    self._active = false;
                    if (self._timeline.autoRemoveChildren && self._reversed) {
                        internalForce = isComplete = true;
                        callback = "onReverseComplete";
                    } else if (prevRawPrevTime >= 0 && self._first) { //when going back beyond the start, force a render so that zero-duration tweens that sit at the very beginning render their start values properly. Otherwise, if the parent timeline's playhead lands exactly at this timeline's startTime, and then moves backwards, the zero-duration tweens at the beginning would still be at their end state.
                        internalForce = true;
                    }
                    self._rawPrevTime = time;
                } else {
                    self._rawPrevTime = (dur || !suppressEvents || time || self._rawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline or tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                    if (time === 0 && isComplete) { //if there's a zero-duration tween at the very beginning of a timeline and the playhead lands EXACTLY at time 0, that tween will correctly render its end values, but we need to keep the timeline alive for one more render so that the beginning values render properly as the parent's playhead keeps moving beyond the begining. Imagine obj.x starts at 0 and then we do tl.set(obj, {x:100}).to(obj, 1, {x:200}) and then later we tl.reverse()...the goal is to have obj.x revert to 0. If the playhead happens to land on exactly 0, without this chunk of code, it'd complete the timeline and remove it from the rendering queue (not good).
                        tween = self._first;
                        while (tween && tween._startTime === 0) {
                            if (!tween._duration) {
                                isComplete = false;
                            }
                            tween = tween._next;
                        }
                    }
                    time = 0; //to avoid occasional floating point rounding errors (could cause problems especially with zero-duration tweens at the very beginning of the timeline)
                    if (!self._initted) {
                        internalForce = true;
                    }
                }

            } else {
                if (dur === 0 && prevRawPrevTime < 0) { //without this, zero-duration repeating timelines (like with a simple callback nested at the very beginning and a repeatDelay) wouldn't render the first time through.
                    internalForce = true;
                }
                self._time = self._rawPrevTime = time;
                if (!self._locked) {
                    self._totalTime = time;
                    if (self._repeat !== 0) {
                        cycleDuration = dur + self._repeatDelay;
                        self._cycle = (self._totalTime / cycleDuration) >> 0; //originally _totalTime % cycleDuration but floating point errors caused problems, so I normalized it. (4 % 0.8 should be 0 but it gets reported as 0.79999999!)
                        if (self._cycle) if (self._cycle === self._totalTime / cycleDuration && prevTotalTime <= time) {
                            self._cycle--; //otherwise when rendered exactly at the end time, it will act as though it is repeating (at the beginning)
                        }
                        self._time = self._totalTime - (self._cycle * cycleDuration);
                        if (self._yoyo) if (self._cycle & 1) {
                            self._time = dur - self._time;
                        }
                        if (self._time > dur) {
                            self._time = dur;
                            time = dur + 0.0001; //to avoid occasional floating point rounding error
                        } else if (self._time < 0) {
                            self._time = time = 0;
                        } else {
                            time = self._time;
                        }
                    }
                }

                if (self._hasPause && !self._forcingPlayhead && !suppressEvents) {
                    time = self._time;
                    if (time >= prevTime || (self._repeat && prevCycle !== self._cycle)) {
                        tween = self._first;
                        while (tween && tween._startTime <= time && !pauseTween) {
                            if (!tween._duration) if (tween.data === "isPause" && !tween.ratio && !(tween._startTime === 0 && self._rawPrevTime === 0)) {
                                pauseTween = tween;
                            }
                            tween = tween._next;
                        }
                    } else {
                        tween = self._last;
                        while (tween && tween._startTime >= time && !pauseTween) {
                            if (!tween._duration) if (tween.data === "isPause" && tween._rawPrevTime > 0) {
                                pauseTween = tween;
                            }
                            tween = tween._prev;
                        }
                    }
                    if (pauseTween) {
                        pauseTime = self._startTime + (pauseTween._startTime / self._timeScale);
                        if (pauseTween._startTime < dur) {
                            self._time = self._rawPrevTime = time = pauseTween._startTime;
                            self._totalTime = time + (self._cycle * (self._totalDuration + self._repeatDelay));
                        }
                    }
                }

            }

            if (self._cycle !== prevCycle) if (!self._locked) {
                /*
				make sure children at the end/beginning of the timeline are rendered properly. If, for example,
				a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
				would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
				could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
				we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
				ensure that zero-duration tweens at the very beginning or end of the TimelineMax work.
				*/
                var backwards = (self._yoyo && (prevCycle & 1) !== 0),
                    wrap = (backwards === (self._yoyo && (self._cycle & 1) !== 0)),
                    recTotalTime = self._totalTime,
                    recCycle = self._cycle,
                    recRawPrevTime = self._rawPrevTime,
                    recTime = self._time;

                self._totalTime = prevCycle * dur;
                if (self._cycle < prevCycle) {
                    backwards = !backwards;
                } else {
                    self._totalTime += dur;
                }
                self._time = prevTime; //temporarily revert _time so that render() renders the children in the correct order. Without this, tweens won't rewind correctly. We could arhictect things in a "cleaner" way by splitting out the rendering queue into a separate method but for performance reasons, we kept it all inside this method.

                self._rawPrevTime = (dur === 0) ? prevRawPrevTime - 0.0001 : prevRawPrevTime;
                self._cycle = prevCycle;
                self._locked = true; //prevents changes to totalTime and skips repeat/yoyo behavior when we recursively call render()
                prevTime = (backwards) ? 0 : dur;
                self.render(prevTime, suppressEvents, (dur === 0));
                if (!suppressEvents) if (!self._gc) {
                    if (self.vars.onRepeat) {
                        self._cycle = recCycle; //in case the onRepeat alters the playhead or invalidates(), we shouldn't stay locked or use the previous cycle.
                        self._locked = false;
                        self._callback("onRepeat");
                    }
                }
                if (prevTime !== self._time) { //in case there's a callback like onComplete in a nested tween/timeline that changes the playhead position, like via seek(), we should just abort.
                    return;
                }
                if (wrap) {
                    self._cycle = prevCycle; //if there's an onRepeat, we reverted this above, so make sure it's set properly again. We also unlocked in that scenario, so reset that too.
                    self._locked = true;
                    prevTime = (backwards) ? dur + 0.0001 : -0.0001;
                    self.render(prevTime, true, false);
                }
                self._locked = false;
                if (self._paused && !prevPaused) { //if the render() triggered callback that paused this timeline, we should abort (very rare, but possible)
                    return;
                }
                self._time = recTime;
                self._totalTime = recTotalTime;
                self._cycle = recCycle;
                self._rawPrevTime = recRawPrevTime;
            }

            if ((self._time === prevTime || !self._first) && !force && !internalForce && !pauseTween) {
                if (prevTotalTime !== self._totalTime) if (self._onUpdate) if (!suppressEvents) { //so that onUpdate fires even during the repeatDelay - as long as the totalTime changed, we should trigger onUpdate.
                    self._callback("onUpdate");
                }
                return;
            } else if (!self._initted) {
                self._initted = true;
            }

            if (!self._active) if (!self._paused && self._totalTime !== prevTotalTime && time > 0) {
                self._active = true;  //so that if the user renders the timeline (as opposed to the parent timeline rendering it), it is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the timeline already finished but the user manually re-renders it as halfway done, for example.
            }

            if (prevTotalTime === 0) if (self.vars.onStart) if (self._totalTime !== 0 || !self._totalDuration) if (!suppressEvents) {
                self._callback("onStart");
            }

            curTime = self._time;
            if (curTime >= prevTime) {
                tween = self._first;
                while (tween) {
                    next = tween._next; //record it here because the value could change after rendering...
                    if (curTime !== self._time || (self._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                        break;
                    } else if (tween._active || (tween._startTime <= self._time && !tween._paused && !tween._gc)) {
                        if (pauseTween === tween) {
                            self.pause();
                            self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
                        }
                        if (!tween._reversed) {
                            tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                        } else {
                            tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                        }
                    }
                    tween = next;
                }
            } else {
                tween = self._last;
                while (tween) {
                    next = tween._prev; //record it here because the value could change after rendering...
                    if (curTime !== self._time || (self._paused && !prevPaused)) { //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                        break;
                    } else if (tween._active || (tween._startTime <= prevTime && !tween._paused && !tween._gc)) {
                        if (pauseTween === tween) {
                            pauseTween = tween._prev; //the linked list is organized by _startTime, thus it's possible that a tween could start BEFORE the pause and end after it, in which case it would be positioned before the pause tween in the linked list, but we should render it before we pause() the timeline and cease rendering. This is only a concern when going in reverse.
                            while (pauseTween && pauseTween.endTime() > self._time) {
                                pauseTween.render((pauseTween._reversed ? pauseTween.totalDuration() - ((time - pauseTween._startTime) * pauseTween._timeScale) : (time - pauseTween._startTime) * pauseTween._timeScale), suppressEvents, force);
                                pauseTween = pauseTween._prev;
                            }
                            pauseTween = null;
                            self.pause();
                            self._pauseTime = pauseTime; //so that when we resume(), it's starting from exactly the right spot (the pause() method uses the rawTime for the parent, but that may be a bit too far ahead)
                        }
                        if (!tween._reversed) {
                            tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                        } else {
                            tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                        }
                    }
                    tween = next;
                }
            }

            if (self._onUpdate) if (!suppressEvents) {
                if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
                    _lazyRender();
                }
                self._callback("onUpdate");
            }
            if (callback) if (!self._locked) if (!self._gc) if (prevStart === self._startTime || prevTimeScale !== self._timeScale) if (self._time === 0 || totalDur >= self.totalDuration()) { //if one of the tweens that was rendered altered this timeline's startTime (like if an onComplete reversed the timeline), it probably isn't complete. If it is, don't worry, because whatever call altered the startTime would complete if it was necessary at the new time. The only exception is the timeScale property. Also check _gc because there's a chance that kill() could be called in an onUpdate
                if (isComplete) {
                    if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onComplete on a timeline that reports/checks tweened values.
                        _lazyRender();
                    }
                    if (self._timeline.autoRemoveChildren) {
                        self._enabled(false, false);
                    }
                    self._active = false;
                }
                if (!suppressEvents && self.vars[callback]) {
                    self._callback(callback);
                }
            }
        };

        p.getActive = function (nested, tweens, timelines) {
            var a = [],
                all = this.getChildren(nested || (nested == null), tweens || (nested == null), !!timelines),
                cnt = 0,
                l = all.length,
                i, tween;
            for (i = 0; i < l; i++) {
                tween = all[i];
                if (tween.isActive()) {
                    a[cnt++] = tween;
                }
            }
            return a;
        };


        p.getLabelAfter = function (time) {
            if (!time) if (time !== 0) { //faster than isNan()
                time = this._time;
            }
            var labels = this.getLabelsArray(),
                l = labels.length,
                i;
            for (i = 0; i < l; i++) {
                if (labels[i].time > time) {
                    return labels[i].name;
                }
            }
            return null;
        };

        p.getLabelBefore = function (time) {
            if (time == null) {
                time = this._time;
            }
            var labels = this.getLabelsArray(),
                i = labels.length;
            while (--i > -1) {
                if (labels[i].time < time) {
                    return labels[i].name;
                }
            }
            return null;
        };

        p.getLabelsArray = function () {
            var a = [],
                cnt = 0,
                p;
            for (p in this._labels) {
                a[cnt++] = {time: this._labels[p], name: p};
            }
            a.sort(function (a, b) {
                return a.time - b.time;
            });
            return a;
        };

        p.invalidate = function () {
            this._locked = false; //unlock and set cycle in case invalidate() is called from inside an onRepeat
            return TimelineLite.prototype.invalidate.call(this);
        };


//---- GETTERS / SETTERS -------------------------------------------------------------------------------------------------------

        p.progress = function (value, suppressEvents) {
            return (!arguments.length) ? (this._time / this.duration()) || 0 : this.totalTime(this.duration() * ((this._yoyo && (this._cycle & 1) !== 0) ? 1 - value : value) + (this._cycle * (this._duration + this._repeatDelay)), suppressEvents);
        };

        p.totalProgress = function (value, suppressEvents) {
            return (!arguments.length) ? (this._totalTime / this.totalDuration()) || 0 : this.totalTime(this.totalDuration() * value, suppressEvents);
        };

        p.totalDuration = function (value) {
            if (!arguments.length) {
                if (this._dirty) {
                    TimelineLite.prototype.totalDuration.call(this); //just forces refresh
                    //Instead of Infinity, we use 999999999999 so that we can accommodate reverses.
                    this._totalDuration = (this._repeat === -1) ? 999999999999 : this._duration * (this._repeat + 1) + (this._repeatDelay * this._repeat);
                }
                return this._totalDuration;
            }
            return (this._repeat === -1 || !value) ? this : this.timeScale(this.totalDuration() / value);
        };

        p.time = function (value, suppressEvents) {
            if (!arguments.length) {
                return this._time;
            }
            if (this._dirty) {
                this.totalDuration();
            }
            var duration = this._duration,
                cycle = this._cycle,
                cycleDur = cycle * (duration + this._repeatDelay);
            if (value > duration) {
                value = duration;
            }
            return this.totalTime((this._yoyo && (cycle & 1)) ? duration - value + cycleDur : this._repeat ? value + cycleDur : value, suppressEvents);
        };

        p.repeat = function (value) {
            if (!arguments.length) {
                return this._repeat;
            }
            this._repeat = value;
            return this._uncache(true);
        };

        p.repeatDelay = function (value) {
            if (!arguments.length) {
                return this._repeatDelay;
            }
            this._repeatDelay = value;
            return this._uncache(true);
        };

        p.yoyo = function (value) {
            if (!arguments.length) {
                return this._yoyo;
            }
            this._yoyo = value;
            return this;
        };

        p.currentLabel = function (value) {
            if (!arguments.length) {
                return this.getLabelBefore(this._time + _tinyNum);
            }
            return this.seek(value, true);
        };

        return TimelineMax;

    }, true);


    /*
 * ----------------------------------------------------------------
 * BezierPlugin
 * ----------------------------------------------------------------
 */
    (function () {

        var _RAD2DEG = 180 / Math.PI,
            _r1 = [],
            _r2 = [],
            _r3 = [],
            _corProps = {},
            _globals = _gsScope._gsDefine.globals,
            Segment = function (a, b, c, d) {
                if (c === d) { //if c and d match, the final autoRotate value could lock at -90 degrees, so differentiate them slightly.
                    c = d - (d - b) / 1000000;
                }
                if (a === b) { //if a and b match, the starting autoRotate value could lock at -90 degrees, so differentiate them slightly.
                    b = a + (c - a) / 1000000;
                }
                this.a = a;
                this.b = b;
                this.c = c;
                this.d = d;
                this.da = d - a;
                this.ca = c - a;
                this.ba = b - a;
            },
            _correlate = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
            cubicToQuadratic = function (a, b, c, d) {
                var q1 = {a: a},
                    q2 = {},
                    q3 = {},
                    q4 = {c: d},
                    mab = (a + b) / 2,
                    mbc = (b + c) / 2,
                    mcd = (c + d) / 2,
                    mabc = (mab + mbc) / 2,
                    mbcd = (mbc + mcd) / 2,
                    m8 = (mbcd - mabc) / 8;
                q1.b = mab + (a - mab) / 4;
                q2.b = mabc + m8;
                q1.c = q2.a = (q1.b + q2.b) / 2;
                q2.c = q3.a = (mabc + mbcd) / 2;
                q3.b = mbcd - m8;
                q4.b = mcd + (d - mcd) / 4;
                q3.c = q4.a = (q3.b + q4.b) / 2;
                return [q1, q2, q3, q4];
            },
            _calculateControlPoints = function (a, curviness, quad, basic, correlate) {
                var l = a.length - 1,
                    ii = 0,
                    cp1 = a[0].a,
                    i, p1, p2, p3, seg, m1, m2, mm, cp2, qb, r1, r2, tl;
                for (i = 0; i < l; i++) {
                    seg = a[ii];
                    p1 = seg.a;
                    p2 = seg.d;
                    p3 = a[ii + 1].d;

                    if (correlate) {
                        r1 = _r1[i];
                        r2 = _r2[i];
                        tl = ((r2 + r1) * curviness * 0.25) / (basic ? 0.5 : _r3[i] || 0.5);
                        m1 = p2 - (p2 - p1) * (basic ? curviness * 0.5 : (r1 !== 0 ? tl / r1 : 0));
                        m2 = p2 + (p3 - p2) * (basic ? curviness * 0.5 : (r2 !== 0 ? tl / r2 : 0));
                        mm = p2 - (m1 + (((m2 - m1) * ((r1 * 3 / (r1 + r2)) + 0.5) / 4) || 0));
                    } else {
                        m1 = p2 - (p2 - p1) * curviness * 0.5;
                        m2 = p2 + (p3 - p2) * curviness * 0.5;
                        mm = p2 - (m1 + m2) / 2;
                    }
                    m1 += mm;
                    m2 += mm;

                    seg.c = cp2 = m1;
                    if (i !== 0) {
                        seg.b = cp1;
                    } else {
                        seg.b = cp1 = seg.a + (seg.c - seg.a) * 0.6; //instead of placing b on a exactly, we move it inline with c so that if the user specifies an ease like Back.easeIn or Elastic.easeIn which goes BEYOND the beginning, it will do so smoothly.
                    }

                    seg.da = p2 - p1;
                    seg.ca = cp2 - p1;
                    seg.ba = cp1 - p1;

                    if (quad) {
                        qb = cubicToQuadratic(p1, cp1, cp2, p2);
                        a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
                        ii += 4;
                    } else {
                        ii++;
                    }

                    cp1 = m2;
                }
                seg = a[ii];
                seg.b = cp1;
                seg.c = cp1 + (seg.d - cp1) * 0.4; //instead of placing c on d exactly, we move it inline with b so that if the user specifies an ease like Back.easeOut or Elastic.easeOut which goes BEYOND the end, it will do so smoothly.
                seg.da = seg.d - seg.a;
                seg.ca = seg.c - seg.a;
                seg.ba = cp1 - seg.a;
                if (quad) {
                    qb = cubicToQuadratic(seg.a, cp1, seg.c, seg.d);
                    a.splice(ii, 1, qb[0], qb[1], qb[2], qb[3]);
                }
            },
            _parseAnchors = function (values, p, correlate, prepend) {
                var a = [],
                    l, i, p1, p2, p3, tmp;
                if (prepend) {
                    values = [prepend].concat(values);
                    i = values.length;
                    while (--i > -1) {
                        if (typeof ((tmp = values[i][p])) === "string") if (tmp.charAt(1) === "=") {
                            values[i][p] = prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)); //accommodate relative values. Do it inline instead of breaking it out into a function for speed reasons
                        }
                    }
                }
                l = values.length - 2;
                if (l < 0) {
                    a[0] = new Segment(values[0][p], 0, 0, values[0][p]);
                    return a;
                }
                for (i = 0; i < l; i++) {
                    p1 = values[i][p];
                    p2 = values[i + 1][p];
                    a[i] = new Segment(p1, 0, 0, p2);
                    if (correlate) {
                        p3 = values[i + 2][p];
                        _r1[i] = (_r1[i] || 0) + (p2 - p1) * (p2 - p1);
                        _r2[i] = (_r2[i] || 0) + (p3 - p2) * (p3 - p2);
                    }
                }
                a[i] = new Segment(values[i][p], 0, 0, values[i + 1][p]);
                return a;
            },
            bezierThrough = function (values, curviness, quadratic, basic, correlate, prepend) {
                var obj = {},
                    props = [],
                    first = prepend || values[0],
                    i, p, a, j, r, l, seamless, last;
                correlate = (typeof (correlate) === "string") ? "," + correlate + "," : _correlate;
                if (curviness == null) {
                    curviness = 1;
                }
                for (p in values[0]) {
                    props.push(p);
                }
                //check to see if the last and first values are identical (well, within 0.05). If so, make seamless by appending the second element to the very end of the values array and the 2nd-to-last element to the very beginning (we'll remove those segments later)
                if (values.length > 1) {
                    last = values[values.length - 1];
                    seamless = true;
                    i = props.length;
                    while (--i > -1) {
                        p = props[i];
                        if (Math.abs(first[p] - last[p]) > 0.05) { //build in a tolerance of +/-0.05 to accommodate rounding errors.
                            seamless = false;
                            break;
                        }
                    }
                    if (seamless) {
                        values = values.concat(); //duplicate the array to avoid contaminating the original which the user may be reusing for other tweens
                        if (prepend) {
                            values.unshift(prepend);
                        }
                        values.push(values[1]);
                        prepend = values[values.length - 3];
                    }
                }
                _r1.length = _r2.length = _r3.length = 0;
                i = props.length;
                while (--i > -1) {
                    p = props[i];
                    _corProps[p] = (correlate.indexOf("," + p + ",") !== -1);
                    obj[p] = _parseAnchors(values, p, _corProps[p], prepend);
                }
                i = _r1.length;
                while (--i > -1) {
                    _r1[i] = Math.sqrt(_r1[i]);
                    _r2[i] = Math.sqrt(_r2[i]);
                }
                if (!basic) {
                    i = props.length;
                    while (--i > -1) {
                        if (_corProps[p]) {
                            a = obj[props[i]];
                            l = a.length - 1;
                            for (j = 0; j < l; j++) {
                                r = (a[j + 1].da / _r2[j] + a[j].da / _r1[j]) || 0;
                                _r3[j] = (_r3[j] || 0) + r * r;
                            }
                        }
                    }
                    i = _r3.length;
                    while (--i > -1) {
                        _r3[i] = Math.sqrt(_r3[i]);
                    }
                }
                i = props.length;
                j = quadratic ? 4 : 1;
                while (--i > -1) {
                    p = props[i];
                    a = obj[p];
                    _calculateControlPoints(a, curviness, quadratic, basic, _corProps[p]); //this method requires that _parseAnchors() and _setSegmentRatios() ran first so that _r1, _r2, and _r3 values are populated for all properties
                    if (seamless) {
                        a.splice(0, j);
                        a.splice(a.length - j, j);
                    }
                }
                return obj;
            },
            _parseBezierData = function (values, type, prepend) {
                type = type || "soft";
                var obj = {},
                    inc = (type === "cubic") ? 3 : 2,
                    soft = (type === "soft"),
                    props = [],
                    a, b, c, d, cur, i, j, l, p, cnt, tmp;
                if (soft && prepend) {
                    values = [prepend].concat(values);
                }
                if (values == null || values.length < inc + 1) {
                    throw "invalid Bezier data";
                }
                for (p in values[0]) {
                    props.push(p);
                }
                i = props.length;
                while (--i > -1) {
                    p = props[i];
                    obj[p] = cur = [];
                    cnt = 0;
                    l = values.length;
                    for (j = 0; j < l; j++) {
                        a = (prepend == null) ? values[j][p] : (typeof ((tmp = values[j][p])) === "string" && tmp.charAt(1) === "=") ? prepend[p] + Number(tmp.charAt(0) + tmp.substr(2)) : Number(tmp);
                        if (soft) if (j > 1) if (j < l - 1) {
                            cur[cnt++] = (a + cur[cnt - 2]) / 2;
                        }
                        cur[cnt++] = a;
                    }
                    l = cnt - inc + 1;
                    cnt = 0;
                    for (j = 0; j < l; j += inc) {
                        a = cur[j];
                        b = cur[j + 1];
                        c = cur[j + 2];
                        d = (inc === 2) ? 0 : cur[j + 3];
                        cur[cnt++] = tmp = (inc === 3) ? new Segment(a, b, c, d) : new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
                    }
                    cur.length = cnt;
                }
                return obj;
            },
            _addCubicLengths = function (a, steps, resolution) {
                var inc = 1 / resolution,
                    j = a.length,
                    d, d1, s, da, ca, ba, p, i, inv, bez, index;
                while (--j > -1) {
                    bez = a[j];
                    s = bez.a;
                    da = bez.d - s;
                    ca = bez.c - s;
                    ba = bez.b - s;
                    d = d1 = 0;
                    for (i = 1; i <= resolution; i++) {
                        p = inc * i;
                        inv = 1 - p;
                        d = d1 - (d1 = (p * p * da + 3 * inv * (p * ca + inv * ba)) * p);
                        index = j * resolution + i - 1;
                        steps[index] = (steps[index] || 0) + d * d;
                    }
                }
            },
            _parseLengthData = function (obj, resolution) {
                resolution = resolution >> 0 || 6;
                var a = [],
                    lengths = [],
                    d = 0,
                    total = 0,
                    threshold = resolution - 1,
                    segments = [],
                    curLS = [], //current length segments array
                    p, i, l, index;
                for (p in obj) {
                    _addCubicLengths(obj[p], a, resolution);
                }
                l = a.length;
                for (i = 0; i < l; i++) {
                    d += Math.sqrt(a[i]);
                    index = i % resolution;
                    curLS[index] = d;
                    if (index === threshold) {
                        total += d;
                        index = (i / resolution) >> 0;
                        segments[index] = curLS;
                        lengths[index] = total;
                        d = 0;
                        curLS = [];
                    }
                }
                return {length: total, lengths: lengths, segments: segments};
            },


            BezierPlugin = _gsScope._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.8",
                API: 2,
                global: true,

                //gets called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
                init: function (target, vars, tween) {
                    this._target = target;
                    if (vars instanceof Array) {
                        vars = {values: vars};
                    }
                    this._func = {};
                    this._mod = {};
                    this._props = [];
                    this._timeRes = (vars.timeResolution == null) ? 6 : parseInt(vars.timeResolution, 10);
                    var values = vars.values || [],
                        first = {},
                        second = values[0],
                        autoRotate = vars.autoRotate || tween.vars.orientToBezier,
                        p, isFunc, i, j, prepend;

                    this._autoRotate = autoRotate ? (autoRotate instanceof Array) ? autoRotate : [["x", "y", "rotation", ((autoRotate === true) ? 0 : Number(autoRotate) || 0)]] : null;
                    for (p in second) {
                        this._props.push(p);
                    }

                    i = this._props.length;
                    while (--i > -1) {
                        p = this._props[i];

                        this._overwriteProps.push(p);
                        isFunc = this._func[p] = (typeof (target[p]) === "function");
                        first[p] = (!isFunc) ? parseFloat(target[p]) : target[((p.indexOf("set") || typeof (target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3))]();
                        if (!prepend) if (first[p] !== values[0][p]) {
                            prepend = first;
                        }
                    }
                    this._beziers = (vars.type !== "cubic" && vars.type !== "quadratic" && vars.type !== "soft") ? bezierThrough(values, isNaN(vars.curviness) ? 1 : vars.curviness, false, (vars.type === "thruBasic"), vars.correlate, prepend) : _parseBezierData(values, vars.type, first);
                    this._segCount = this._beziers[p].length;

                    if (this._timeRes) {
                        var ld = _parseLengthData(this._beziers, this._timeRes);
                        this._length = ld.length;
                        this._lengths = ld.lengths;
                        this._segments = ld.segments;
                        this._l1 = this._li = this._s1 = this._si = 0;
                        this._l2 = this._lengths[0];
                        this._curSeg = this._segments[0];
                        this._s2 = this._curSeg[0];
                        this._prec = 1 / this._curSeg.length;
                    }

                    if ((autoRotate = this._autoRotate)) {
                        this._initialRotations = [];
                        if (!(autoRotate[0] instanceof Array)) {
                            this._autoRotate = autoRotate = [autoRotate];
                        }
                        i = autoRotate.length;
                        while (--i > -1) {
                            for (j = 0; j < 3; j++) {
                                p = autoRotate[i][j];
                                this._func[p] = (typeof (target[p]) === "function") ? target[((p.indexOf("set") || typeof (target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3))] : false;
                            }
                            p = autoRotate[i][2];
                            this._initialRotations[i] = (this._func[p] ? this._func[p].call(this._target) : this._target[p]) || 0;
                            this._overwriteProps.push(p);
                        }
                    }
                    this._startRatio = tween.vars.runBackwards ? 1 : 0; //we determine the starting ratio when the tween inits which is always 0 unless the tween has runBackwards:true (indicating it's a from() tween) in which case it's 1.
                    return true;
                },

                //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
                set: function (v) {
                    var segments = this._segCount,
                        func = this._func,
                        target = this._target,
                        notStart = (v !== this._startRatio),
                        curIndex, inv, i, p, b, t, val, l, lengths, curSeg;
                    if (!this._timeRes) {
                        curIndex = (v < 0) ? 0 : (v >= 1) ? segments - 1 : (segments * v) >> 0;
                        t = (v - (curIndex * (1 / segments))) * segments;
                    } else {
                        lengths = this._lengths;
                        curSeg = this._curSeg;
                        v *= this._length;
                        i = this._li;
                        //find the appropriate segment (if the currently cached one isn't correct)
                        if (v > this._l2 && i < segments - 1) {
                            l = segments - 1;
                            while (i < l && (this._l2 = lengths[++i]) <= v) {
                            }
                            this._l1 = lengths[i - 1];
                            this._li = i;
                            this._curSeg = curSeg = this._segments[i];
                            this._s2 = curSeg[(this._s1 = this._si = 0)];
                        } else if (v < this._l1 && i > 0) {
                            while (i > 0 && (this._l1 = lengths[--i]) >= v) {
                            }
                            if (i === 0 && v < this._l1) {
                                this._l1 = 0;
                            } else {
                                i++;
                            }
                            this._l2 = lengths[i];
                            this._li = i;
                            this._curSeg = curSeg = this._segments[i];
                            this._s1 = curSeg[(this._si = curSeg.length - 1) - 1] || 0;
                            this._s2 = curSeg[this._si];
                        }
                        curIndex = i;
                        //now find the appropriate sub-segment (we split it into the number of pieces that was defined by "precision" and measured each one)
                        v -= this._l1;
                        i = this._si;
                        if (v > this._s2 && i < curSeg.length - 1) {
                            l = curSeg.length - 1;
                            while (i < l && (this._s2 = curSeg[++i]) <= v) {
                            }
                            this._s1 = curSeg[i - 1];
                            this._si = i;
                        } else if (v < this._s1 && i > 0) {
                            while (i > 0 && (this._s1 = curSeg[--i]) >= v) {
                            }
                            if (i === 0 && v < this._s1) {
                                this._s1 = 0;
                            } else {
                                i++;
                            }
                            this._s2 = curSeg[i];
                            this._si = i;
                        }
                        t = ((i + (v - this._s1) / (this._s2 - this._s1)) * this._prec) || 0;
                    }
                    inv = 1 - t;

                    i = this._props.length;
                    while (--i > -1) {
                        p = this._props[i];
                        b = this._beziers[p][curIndex];
                        val = (t * t * b.da + 3 * inv * (t * b.ca + inv * b.ba)) * t + b.a;
                        if (this._mod[p]) {
                            val = this._mod[p](val, target);
                        }
                        if (func[p]) {
                            target[p](val);
                        } else {
                            target[p] = val;
                        }
                    }

                    if (this._autoRotate) {
                        var ar = this._autoRotate,
                            b2, x1, y1, x2, y2, add, conv;
                        i = ar.length;
                        while (--i > -1) {
                            p = ar[i][2];
                            add = ar[i][3] || 0;
                            conv = (ar[i][4] === true) ? 1 : _RAD2DEG;
                            b = this._beziers[ar[i][0]];
                            b2 = this._beziers[ar[i][1]];

                            if (b && b2) { //in case one of the properties got overwritten.
                                b = b[curIndex];
                                b2 = b2[curIndex];

                                x1 = b.a + (b.b - b.a) * t;
                                x2 = b.b + (b.c - b.b) * t;
                                x1 += (x2 - x1) * t;
                                x2 += ((b.c + (b.d - b.c) * t) - x2) * t;

                                y1 = b2.a + (b2.b - b2.a) * t;
                                y2 = b2.b + (b2.c - b2.b) * t;
                                y1 += (y2 - y1) * t;
                                y2 += ((b2.c + (b2.d - b2.c) * t) - y2) * t;

                                val = notStart ? Math.atan2(y2 - y1, x2 - x1) * conv + add : this._initialRotations[i];

                                if (this._mod[p]) {
                                    val = this._mod[p](val, target); //for modProps
                                }

                                if (func[p]) {
                                    target[p](val);
                                } else {
                                    target[p] = val;
                                }
                            }
                        }
                    }
                }
            }),
            p = BezierPlugin.prototype;


        BezierPlugin.bezierThrough = bezierThrough;
        BezierPlugin.cubicToQuadratic = cubicToQuadratic;
        BezierPlugin._autoCSS = true; //indicates that this plugin can be inserted into the "css" object using the autoCSS feature of TweenLite
        BezierPlugin.quadraticToCubic = function (a, b, c) {
            return new Segment(a, (2 * b + a) / 3, (2 * b + c) / 3, c);
        };

        BezierPlugin._cssRegister = function () {
            var CSSPlugin = _globals.CSSPlugin;
            if (!CSSPlugin) {
                return;
            }
            var _internals = CSSPlugin._internals,
                _parseToProxy = _internals._parseToProxy,
                _setPluginRatio = _internals._setPluginRatio,
                CSSPropTween = _internals.CSSPropTween;
            _internals._registerComplexSpecialProp("bezier", {
                parser: function (t, e, prop, cssp, pt, plugin) {
                    if (e instanceof Array) {
                        e = {values: e};
                    }
                    plugin = new BezierPlugin();
                    var values = e.values,
                        l = values.length - 1,
                        pluginValues = [],
                        v = {},
                        i, p, data;
                    if (l < 0) {
                        return pt;
                    }
                    for (i = 0; i <= l; i++) {
                        data = _parseToProxy(t, values[i], cssp, pt, plugin, (l !== i));
                        pluginValues[i] = data.end;
                    }
                    for (p in e) {
                        v[p] = e[p]; //duplicate the vars object because we need to alter some things which would cause problems if the user plans to reuse the same vars object for another tween.
                    }
                    v.values = pluginValues;
                    pt = new CSSPropTween(t, "bezier", 0, 0, data.pt, 2);
                    pt.data = data;
                    pt.plugin = plugin;
                    pt.setRatio = _setPluginRatio;
                    if (v.autoRotate === 0) {
                        v.autoRotate = true;
                    }
                    if (v.autoRotate && !(v.autoRotate instanceof Array)) {
                        i = (v.autoRotate === true) ? 0 : Number(v.autoRotate);
                        v.autoRotate = (data.end.left != null) ? [["left", "top", "rotation", i, false]] : (data.end.x != null) ? [["x", "y", "rotation", i, false]] : false;
                    }
                    if (v.autoRotate) {
                        if (!cssp._transform) {
                            cssp._enableTransforms(false);
                        }
                        data.autoRotate = cssp._target._gsTransform;
                        data.proxy.rotation = data.autoRotate.rotation || 0;
                        cssp._overwriteProps.push("rotation");
                    }
                    plugin._onInitTween(data.proxy, v, cssp._tween);
                    return pt;
                }
            });
        };

        p._mod = function (lookup) {
            var op = this._overwriteProps,
                i = op.length,
                val;
            while (--i > -1) {
                val = lookup[op[i]];
                if (val && typeof (val) === "function") {
                    this._mod[op[i]] = val;
                }
            }
        };

        p._kill = function (lookup) {
            var a = this._props,
                p, i;
            for (p in this._beziers) {
                if (p in lookup) {
                    delete this._beziers[p];
                    delete this._func[p];
                    i = a.length;
                    while (--i > -1) {
                        if (a[i] === p) {
                            a.splice(i, 1);
                        }
                    }
                }
            }
            a = this._autoRotate;
            if (a) {
                i = a.length;
                while (--i > -1) {
                    if (lookup[a[i][2]]) {
                        a.splice(i, 1);
                    }
                }
            }
            return this._super._kill.call(this, lookup);
        };

    }());


    /*
 * ----------------------------------------------------------------
 * CSSPlugin
 * ----------------------------------------------------------------
 */
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (TweenPlugin, TweenLite) {

        /** @constructor **/
        var CSSPlugin = function () {
                TweenPlugin.call(this, "css");
                this._overwriteProps.length = 0;
                this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
            },
            _globals = _gsScope._gsDefine.globals,
            _hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
            _suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
            _cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
            _overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
            _specialProps = {},
            p = CSSPlugin.prototype = new TweenPlugin("css");

        p.constructor = CSSPlugin;
        CSSPlugin.version = "2.1.0";
        CSSPlugin.API = 2;
        CSSPlugin.defaultTransformPerspective = 0;
        CSSPlugin.defaultSkewType = "compensated";
        CSSPlugin.defaultSmoothOrigin = true;
        p = "px"; //we'll reuse the "p" variable to keep file size down
        CSSPlugin.suffixMap = {
            top: p,
            right: p,
            bottom: p,
            left: p,
            width: p,
            height: p,
            fontSize: p,
            padding: p,
            margin: p,
            perspective: p,
            lineHeight: ""
        };


        var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            _relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            _valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
            _NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
            _suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
            _opacityExp = /opacity *= *([^)]*)/i,
            _opacityValExp = /opacity:([^;]*)/i,
            _alphaFilterExp = /alpha\(opacity *=.+?\)/i,
            _rgbhslExp = /^(rgb|hsl)/,
            _capsExp = /([A-Z])/g,
            _camelExp = /-([a-z])/gi,
            _urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
            _camelFunc = function (s, g) {
                return g.toUpperCase();
            },
            _horizExp = /(?:Left|Right|Width)/i,
            _ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            _ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            _commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
            _complexExp = /[\s,\(]/i, //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
            _DEG2RAD = Math.PI / 180,
            _RAD2DEG = 180 / Math.PI,
            _forcePT = {},
            _dummyElement = {style: {}},
            _doc = _gsScope.document || {
                createElement: function () {
                    return _dummyElement;
                }
            },
            _createElement = function (type, ns) {
                return (ns && _doc.createElementNS) ? _doc.createElementNS(ns, type) : _doc.createElement(type);
            },
            _tempDiv = _createElement("div"),
            _tempImg = _createElement("img"),
            _internals = CSSPlugin._internals = {_specialProps: _specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
            _agent = (_gsScope.navigator || {}).userAgent || "",
            _autoRound,
            _reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

            _isSafari,
            _isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
            _isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
            _ieVers,
            _supportsOpacity = (function () { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
                var i = _agent.indexOf("Android"),
                    a = _createElement("a");
                _isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i + 8, 2)) > 3));
                _isSafariLT6 = (_isSafari && (parseFloat(_agent.substr(_agent.indexOf("Version/") + 8, 2)) < 6));
                _isFirefox = (_agent.indexOf("Firefox") !== -1);
                if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
                    _ieVers = parseFloat(RegExp.$1);
                }
                if (!a) {
                    return false;
                }
                a.style.cssText = "top:1px;opacity:.55;";
                return /^0.55/.test(a.style.opacity);
            }()),
            _getIEOpacity = function (v) {
                return (_opacityExp.test(((typeof (v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "")) ? (parseFloat(RegExp.$1) / 100) : 1);
            },
            _log = function (s) {//for logging messages, but in a way that won't throw errors in old versions of IE.
                if (_gsScope.console) {
                    console.log(s);
                }
            },
            _target, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
            _index, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params

            _prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
            _prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

            // @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
            _checkPropPrefix = function (p, e) {
                e = e || _tempDiv;
                var s = e.style,
                    a, i;
                if (s[p] !== undefined) {
                    return p;
                }
                p = p.charAt(0).toUpperCase() + p.substr(1);
                a = ["O", "Moz", "ms", "Ms", "Webkit"];
                i = 5;
                while (--i > -1 && s[a[i] + p] === undefined) {
                }
                if (i >= 0) {
                    _prefix = (i === 3) ? "ms" : a[i];
                    _prefixCSS = "-" + _prefix.toLowerCase() + "-";
                    return _prefix + p;
                }
                return null;
            },

            _computedStyleScope = (typeof (window) !== "undefined" ? window : _doc.defaultView || {
                getComputedStyle: function () {
                }
            }),
            _getComputedStyle = function (e) {
                return _computedStyleScope.getComputedStyle(e); //to avoid errors in Microsoft Edge, we need to call getComputedStyle() from a specific scope, typically window.
            },

            /**
             * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
             * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
             *
             * @param {!Object} t Target element whose style property you want to query
             * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
             * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
             * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
             * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
             * @return {?string} The current property value
             */
            _getStyle = CSSPlugin.getStyle = function (t, p, cs, calc, dflt) {
                var rv;
                if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
                    return _getIEOpacity(t);
                }
                if (!calc && t.style[p]) {
                    rv = t.style[p];
                } else if ((cs = cs || _getComputedStyle(t))) {
                    rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
                } else if (t.currentStyle) {
                    rv = t.currentStyle[p];
                }
                return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
            },

            /**
             * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
             * @param {!Object} t Target element
             * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
             * @param {!number} v Value
             * @param {string=} sfx Suffix (like "px" or "%" or "em")
             * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
             * @return {number} value in pixels
             */
            _convertToPixels = _internals.convertToPixels = function (t, p, v, sfx, recurse) {
                if (sfx === "px" || (!sfx && p !== "lineHeight")) {
                    return v;
                }
                if (sfx === "auto" || !v) {
                    return 0;
                }
                var horiz = _horizExp.test(p),
                    node = t,
                    style = _tempDiv.style,
                    neg = (v < 0),
                    precise = (v === 1),
                    pix, cache, time;
                if (neg) {
                    v = -v;
                }
                if (precise) {
                    v *= 100;
                }
                if (p === "lineHeight" && !sfx) { //special case of when a simple lineHeight (without a unit) is used. Set it to the value, read back the computed value, and then revert.
                    cache = _getComputedStyle(t).lineHeight;
                    t.style.lineHeight = v;
                    pix = parseFloat(_getComputedStyle(t).lineHeight);
                    t.style.lineHeight = cache;
                } else if (sfx === "%" && p.indexOf("border") !== -1) {
                    pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
                } else {
                    style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
                    if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
                        node = t.parentNode || _doc.body;
                        if (_getStyle(node, "display").indexOf("flex") !== -1) { //Edge and IE11 have a bug that causes offsetWidth to report as 0 if the container has display:flex and the child is position:relative. Switching to position: absolute solves it.
                            style.position = "absolute";
                        }
                        cache = node._gsCache;
                        time = TweenLite.ticker.frame;
                        if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
                            return cache.width * v / 100;
                        }
                        style[(horiz ? "width" : "height")] = v + sfx;
                    } else {
                        style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
                    }
                    node.appendChild(_tempDiv);
                    pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
                    node.removeChild(_tempDiv);
                    if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
                        cache = node._gsCache = node._gsCache || {};
                        cache.time = time;
                        cache.width = pix / v * 100;
                    }
                    if (pix === 0 && !recurse) {
                        pix = _convertToPixels(t, p, v, sfx, true);
                    }
                }
                if (precise) {
                    pix /= 100;
                }
                return neg ? -pix : pix;
            },
            _calculateOffset = _internals.calculateOffset = function (t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
                if (_getStyle(t, "position", cs) !== "absolute") {
                    return 0;
                }
                var dim = ((p === "left") ? "Left" : "Top"),
                    v = _getStyle(t, "margin" + dim, cs);
                return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
            },

            // @private returns at object containing ALL of the style properties in camelCase and their associated values.
            _getAllStyles = function (t, cs) {
                var s = {},
                    i, tr, p;
                if ((cs = cs || _getComputedStyle(t, null))) {
                    if ((i = cs.length)) {
                        while (--i > -1) {
                            p = cs[i];
                            if (p.indexOf("-transform") === -1 || _transformPropCSS === p) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
                                s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
                            }
                        }
                    } else { //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
                        for (i in cs) {
                            if (i.indexOf("Transform") === -1 || _transformProp === i) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
                                s[i] = cs[i];
                            }
                        }
                    }
                } else if ((cs = t.currentStyle || t.style)) {
                    for (i in cs) {
                        if (typeof (i) === "string" && s[i] === undefined) {
                            s[i.replace(_camelExp, _camelFunc)] = cs[i];
                        }
                    }
                }
                if (!_supportsOpacity) {
                    s.opacity = _getIEOpacity(t);
                }
                tr = _getTransform(t, cs, false);
                s.rotation = tr.rotation;
                s.skewX = tr.skewX;
                s.scaleX = tr.scaleX;
                s.scaleY = tr.scaleY;
                s.x = tr.x;
                s.y = tr.y;
                if (_supports3D) {
                    s.z = tr.z;
                    s.rotationX = tr.rotationX;
                    s.rotationY = tr.rotationY;
                    s.scaleZ = tr.scaleZ;
                }
                if (s.filters) {
                    delete s.filters;
                }
                return s;
            },

            // @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
            _cssDif = function (t, s1, s2, vars, forceLookup) {
                var difs = {},
                    style = t.style,
                    val, p, mpt;
                for (p in s2) {
                    if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) if (p.indexOf("Origin") === -1) if (typeof (val) === "number" || typeof (val) === "string") {
                        difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof (s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
                        if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
                            mpt = new MiniPropTween(style, p, style[p], mpt);
                        }
                    }
                }
                if (vars) {
                    for (p in vars) { //copy properties (except className)
                        if (p !== "className") {
                            difs[p] = vars[p];
                        }
                    }
                }
                return {difs: difs, firstMPT: mpt};
            },
            _dimensions = {width: ["Left", "Right"], height: ["Top", "Bottom"]},
            _margins = ["marginLeft", "marginRight", "marginTop", "marginBottom"],

            /**
             * @private Gets the width or height of an element
             * @param {!Object} t Target element
             * @param {!string} p Property name ("width" or "height")
             * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
             * @return {number} Dimension (in pixels)
             */
            _getDimension = function (t, p, cs) {
                if ((t.nodeName + "").toLowerCase() === "svg") { //Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
                    return (cs || _getComputedStyle(t))[p] || 0;
                } else if (t.getCTM && _isSVG(t)) {
                    return t.getBBox()[p] || 0;
                }
                var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
                    a = _dimensions[p],
                    i = a.length;
                cs = cs || _getComputedStyle(t, null);
                while (--i > -1) {
                    v -= parseFloat(_getStyle(t, "padding" + a[i], cs, true)) || 0;
                    v -= parseFloat(_getStyle(t, "border" + a[i] + "Width", cs, true)) || 0;
                }
                return v;
            },

            // @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
            _parsePosition = function (v, recObj) {
                if (v === "contain" || v === "auto" || v === "auto auto") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
                    return v + " ";
                }
                if (v == null || v === "") {
                    v = "0 0";
                }
                var a = v.split(" "),
                    x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
                    y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1],
                    i;
                if (a.length > 3 && !recObj) { //multiple positions
                    a = v.split(", ").join(",").split(",");
                    v = [];
                    for (i = 0; i < a.length; i++) {
                        v.push(_parsePosition(a[i]));
                    }
                    return v.join(",");
                }
                if (y == null) {
                    y = (x === "center") ? "50%" : "0";
                } else if (y === "center") {
                    y = "50%";
                }
                if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
                    x = "50%";
                }
                v = x + " " + y + ((a.length > 2) ? " " + a[2] : "");
                if (recObj) {
                    recObj.oxp = (x.indexOf("%") !== -1);
                    recObj.oyp = (y.indexOf("%") !== -1);
                    recObj.oxr = (x.charAt(1) === "=");
                    recObj.oyr = (y.charAt(1) === "=");
                    recObj.ox = parseFloat(x.replace(_NaNExp, ""));
                    recObj.oy = parseFloat(y.replace(_NaNExp, ""));
                    recObj.v = v;
                }
                return recObj || v;
            },

            /**
             * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
             * @param {(number|string)} e End value which is typically a string, but could be a number
             * @param {(number|string)} b Beginning value which is typically a string but could be a number
             * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
             */
            _parseChange = function (e, b) {
                if (typeof (e) === "function") {
                    e = e(_index, _target);
                }
                return (typeof (e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : (parseFloat(e) - parseFloat(b)) || 0;
            },

            /**
             * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
             * @param {Object} v Value to be parsed
             * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
             * @return {number} Parsed value
             */
            _parseVal = function (v, d) {
                if (typeof (v) === "function") {
                    v = v(_index, _target);
                }
                var isRelative = (typeof (v) === "string" && v.charAt(1) === "=");
                if (typeof (v) === "string" && v.charAt(v.length - 2) === "v") { //convert vw and vh into px-equivalents.
                    v = (isRelative ? v.substr(0, 2) : 0) + (window["inner" + ((v.substr(-2) === "vh") ? "Height" : "Width")] * (parseFloat(isRelative ? v.substr(2) : v) / 100));
                }
                return (v == null) ? d : isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
            },

            /**
             * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
             * @param {Object} v Value to be parsed
             * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
             * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
             * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
             * @return {number} parsed angle in radians
             */
            _parseAngle = function (v, d, p, directionalEnd) {
                var min = 0.000001,
                    cap, split, dif, result, isRelative;
                if (typeof (v) === "function") {
                    v = v(_index, _target);
                }
                if (v == null) {
                    result = d;
                } else if (typeof (v) === "number") {
                    result = v;
                } else {
                    cap = 360;
                    split = v.split("_");
                    isRelative = (v.charAt(1) === "=");
                    dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
                    if (split.length) {
                        if (directionalEnd) {
                            directionalEnd[p] = d + dif;
                        }
                        if (v.indexOf("short") !== -1) {
                            dif = dif % cap;
                            if (dif !== dif % (cap / 2)) {
                                dif = (dif < 0) ? dif + cap : dif - cap;
                            }
                        }
                        if (v.indexOf("_cw") !== -1 && dif < 0) {
                            dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
                        } else if (v.indexOf("ccw") !== -1 && dif > 0) {
                            dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
                        }
                    }
                    result = d + dif;
                }
                if (result < min && result > -min) {
                    result = 0;
                }
                return result;
            },

            _colorLookup = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },

            _hue = function (h, m1, m2) {
                h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
                return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
            },

            /**
             * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
             * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
             * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
             * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
             */
            _parseColor = CSSPlugin.parseColor = function (v, toHSL) {
                var a, r, g, b, h, s, l, max, min, d, wasHSL;
                if (!v) {
                    a = _colorLookup.black;
                } else if (typeof (v) === "number") {
                    a = [v >> 16, (v >> 8) & 255, v & 255];
                } else {
                    if (v.charAt(v.length - 1) === ",") { //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
                        v = v.substr(0, v.length - 1);
                    }
                    if (_colorLookup[v]) {
                        a = _colorLookup[v];
                    } else if (v.charAt(0) === "#") {
                        if (v.length === 4) { //for shorthand like #9F0
                            r = v.charAt(1);
                            g = v.charAt(2);
                            b = v.charAt(3);
                            v = "#" + r + r + g + g + b + b;
                        }
                        v = parseInt(v.substr(1), 16);
                        a = [v >> 16, (v >> 8) & 255, v & 255];
                    } else if (v.substr(0, 3) === "hsl") {
                        a = wasHSL = v.match(_numExp);
                        if (!toHSL) {
                            h = (Number(a[0]) % 360) / 360;
                            s = Number(a[1]) / 100;
                            l = Number(a[2]) / 100;
                            g = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
                            r = l * 2 - g;
                            if (a.length > 3) {
                                a[3] = Number(a[3]);
                            }
                            a[0] = _hue(h + 1 / 3, r, g);
                            a[1] = _hue(h, r, g);
                            a[2] = _hue(h - 1 / 3, r, g);
                        } else if (v.indexOf("=") !== -1) { //if relative values are found, just return the raw strings with the relative prefixes in place.
                            return v.match(_relNumExp);
                        }
                    } else {
                        a = v.match(_numExp) || _colorLookup.transparent;
                    }
                    a[0] = Number(a[0]);
                    a[1] = Number(a[1]);
                    a[2] = Number(a[2]);
                    if (a.length > 3) {
                        a[3] = Number(a[3]);
                    }
                }
                if (toHSL && !wasHSL) {
                    r = a[0] / 255;
                    g = a[1] / 255;
                    b = a[2] / 255;
                    max = Math.max(r, g, b);
                    min = Math.min(r, g, b);
                    l = (max + min) / 2;
                    if (max === min) {
                        h = s = 0;
                    } else {
                        d = max - min;
                        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                        h = (max === r) ? (g - b) / d + (g < b ? 6 : 0) : (max === g) ? (b - r) / d + 2 : (r - g) / d + 4;
                        h *= 60;
                    }
                    a[0] = (h + 0.5) | 0;
                    a[1] = (s * 100 + 0.5) | 0;
                    a[2] = (l * 100 + 0.5) | 0;
                }
                return a;
            },
            _formatColors = function (s, toHSL) {
                var colors = s.match(_colorExp) || [],
                    charIndex = 0,
                    parsed = "",
                    i, color, temp;
                if (!colors.length) {
                    return s;
                }
                for (i = 0; i < colors.length; i++) {
                    color = colors[i];
                    temp = s.substr(charIndex, s.indexOf(color, charIndex) - charIndex);
                    charIndex += temp.length + color.length;
                    color = _parseColor(color, toHSL);
                    if (color.length === 3) {
                        color.push(1);
                    }
                    parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
                }
                return parsed + s.substr(charIndex);
            },
            _colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

        for (p in _colorLookup) {
            _colorExp += "|" + p + "\\b";
        }
        _colorExp = new RegExp(_colorExp + ")", "gi");

        CSSPlugin.colorStringFilter = function (a) {
            var combined = a[0] + " " + a[1],
                toHSL;
            if (_colorExp.test(combined)) {
                toHSL = (combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1);
                a[0] = _formatColors(a[0], toHSL);
                a[1] = _formatColors(a[1], toHSL);
            }
            _colorExp.lastIndex = 0;
        };

        if (!TweenLite.defaultStringFilter) {
            TweenLite.defaultStringFilter = CSSPlugin.colorStringFilter;
        }

        /**
         * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
         * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
         * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
         * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
         * @return {Function} formatter function
         */
        var _getFormatter = function (dflt, clr, collapsible, multi) {
                if (dflt == null) {
                    return function (v) {
                        return v;
                    };
                }
                var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
                    dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
                    pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
                    sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
                    delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
                    numVals = dVals.length,
                    dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
                    formatter;
                if (!numVals) {
                    return function (v) {
                        return v;
                    };
                }
                if (clr) {
                    formatter = function (v) {
                        var color, vals, i, a;
                        if (typeof (v) === "number") {
                            v += dSfx;
                        } else if (multi && _commasOutsideParenExp.test(v)) {
                            a = v.replace(_commasOutsideParenExp, "|").split("|");
                            for (i = 0; i < a.length; i++) {
                                a[i] = formatter(a[i]);
                            }
                            return a.join(",");
                        }
                        color = (v.match(_colorExp) || [dColor])[0];
                        vals = v.split(color).join("").match(_valuesExp) || [];
                        i = vals.length;
                        if (numVals > i--) {
                            while (++i < numVals) {
                                vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
                            }
                        }
                        return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
                    };
                    return formatter;

                }
                formatter = function (v) {
                    var vals, a, i;
                    if (typeof (v) === "number") {
                        v += dSfx;
                    } else if (multi && _commasOutsideParenExp.test(v)) {
                        a = v.replace(_commasOutsideParenExp, "|").split("|");
                        for (i = 0; i < a.length; i++) {
                            a[i] = formatter(a[i]);
                        }
                        return a.join(",");
                    }
                    vals = v.match(_valuesExp) || [];
                    i = vals.length;
                    if (numVals > i--) {
                        while (++i < numVals) {
                            vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
                        }
                    }
                    return pfx + vals.join(delim) + sfx;
                };
                return formatter;
            },

            /**
             * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
             * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
             * @return {Function} a formatter function
             */
            _getEdgeParser = function (props) {
                props = props.split(",");
                return function (t, e, p, cssp, pt, plugin, vars) {
                    var a = (e + "").split(" "),
                        i;
                    vars = {};
                    for (i = 0; i < 4; i++) {
                        vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
                    }
                    return cssp.parse(t, vars, pt, plugin);
                };
            },

            // @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
            _setPluginRatio = _internals._setPluginRatio = function (v) {
                this.plugin.setRatio(v);
                var d = this.data,
                    proxy = d.proxy,
                    mpt = d.firstMPT,
                    min = 0.000001,
                    val, pt, i, str, p;
                while (mpt) {
                    val = proxy[mpt.v];
                    if (mpt.r) {
                        val = mpt.r(val);
                    } else if (val < min && val > -min) {
                        val = 0;
                    }
                    mpt.t[mpt.p] = val;
                    mpt = mpt._next;
                }
                if (d.autoRotate) {
                    d.autoRotate.rotation = d.mod ? d.mod.call(this._tween, proxy.rotation, this.t, this._tween) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
                }
                //at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.
                if (v === 1 || v === 0) {
                    mpt = d.firstMPT;
                    p = (v === 1) ? "e" : "b";
                    while (mpt) {
                        pt = mpt.t;
                        if (!pt.type) {
                            pt[p] = pt.s + pt.xs0;
                        } else if (pt.type === 1) {
                            str = pt.xs0 + pt.s + pt.xs1;
                            for (i = 1; i < pt.l; i++) {
                                str += pt["xn" + i] + pt["xs" + (i + 1)];
                            }
                            pt[p] = str;
                        }
                        mpt = mpt._next;
                    }
                }
            },

            /**
             * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
             * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
             * @param {!string} p property name
             * @param {(number|string|object)} v value
             * @param {MiniPropTween=} next next MiniPropTween in the linked list
             * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
             */
            MiniPropTween = function (t, p, v, next, r) {
                this.t = t;
                this.p = p;
                this.v = v;
                this.r = r;
                if (next) {
                    next._prev = this;
                    this._next = next;
                }
            },

            /**
             * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
             * This method returns an object that has the following properties:
             *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
             *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
             *  - firstMPT: the first MiniPropTween in the linked list
             *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
             * @param {!Object} t target object to be tweened
             * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
             * @param {!CSSPlugin} cssp The CSSPlugin instance
             * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
             * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
             * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
             * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
             */
            _parseToProxy = _internals._parseToProxy = function (t, vars, cssp, pt, plugin, shallow) {
                var bpt = pt,
                    start = {},
                    end = {},
                    transform = cssp._transform,
                    oldForce = _forcePT,
                    i, p, xp, mpt, firstPT;
                cssp._transform = null;
                _forcePT = vars;
                pt = firstPT = cssp.parse(t, vars, pt, plugin);
                _forcePT = oldForce;
                //break off from the linked list so the new ones are isolated.
                if (shallow) {
                    cssp._transform = transform;
                    if (bpt) {
                        bpt._prev = null;
                        if (bpt._prev) {
                            bpt._prev._next = null;
                        }
                    }
                }
                while (pt && pt !== bpt) {
                    if (pt.type <= 1) {
                        p = pt.p;
                        end[p] = pt.s + pt.c;
                        start[p] = pt.s;
                        if (!shallow) {
                            mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
                            pt.c = 0;
                        }
                        if (pt.type === 1) {
                            i = pt.l;
                            while (--i > 0) {
                                xp = "xn" + i;
                                p = pt.p + "_" + xp;
                                end[p] = pt.data[xp];
                                start[p] = pt[xp];
                                if (!shallow) {
                                    mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
                                }
                            }
                        }
                    }
                    pt = pt._next;
                }
                return {proxy: start, end: end, firstMPT: mpt, pt: firstPT};
            },


            /**
             * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
             * CSSPropTweens have the following optional properties as well (not defined through the constructor):
             *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
             *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
             *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
             *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
             *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
             * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
             * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
             * @param {number} s Starting numeric value
             * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
             * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
             * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
             * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
             * @param {boolean=} r If true, the value(s) should be rounded
             * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
             * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
             * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
             */
            CSSPropTween = _internals.CSSPropTween = function (t, p, s, c, next, type, n, r, pr, b, e) {
                this.t = t; //target
                this.p = p; //property
                this.s = s; //starting value
                this.c = c; //change value
                this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
                if (!(t instanceof CSSPropTween)) {
                    _overwriteProps.push(this.n);
                }
                this.r = !r ? r : (typeof (r) === "function") ? r : Math.round; //round (boolean)
                this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
                if (pr) {
                    this.pr = pr;
                    _hasPriority = true;
                }
                this.b = (b === undefined) ? s : b;
                this.e = (e === undefined) ? s + c : e;
                if (next) {
                    this._next = next;
                    next._prev = this;
                }
            },

            _addNonTweeningNumericPT = function (target, prop, start, end, next, overwriteProp) { //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
                var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
                pt.b = start;
                pt.e = pt.xs0 = end;
                return pt;
            },

            /**
             * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
             * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
             * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
             * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
             *
             * @param {!Object} t Target whose property will be tweened
             * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
             * @param {string} b Beginning value
             * @param {string} e Ending value
             * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
             * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
             * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
             * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
             * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
             * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
             * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
             */
            _parseComplex = CSSPlugin.parseComplex = function (t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
                //DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
                b = b || dflt || "";
                if (typeof (e) === "function") {
                    e = e(_index, _target);
                }
                pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
                e += ""; //ensures it's a string
                if (clrs && _colorExp.test(e + b)) { //if colors are found, normalize the formatting to rgba() or hsla().
                    e = [b, e];
                    CSSPlugin.colorStringFilter(e);
                    b = e[0];
                    e = e[1];
                }
                var ba = b.split(", ").join(",").split(" "), //beginning array
                    ea = e.split(", ").join(",").split(" "), //ending array
                    l = ba.length,
                    autoRound = (_autoRound !== false),
                    i, xi, ni, bv, ev, bnums, enums, bn, hasAlpha, temp, cv, str, useHSL;
                if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
                    if ((e + b).indexOf("rgb") !== -1 || (e + b).indexOf("hsl") !== -1) { //keep rgb(), rgba(), hsl(), and hsla() values together! (remember, we're splitting on spaces)
                        ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
                        ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
                    } else {
                        ba = ba.join(" ").split(",").join(", ").split(" ");
                        ea = ea.join(" ").split(",").join(", ").split(" ");
                    }
                    l = ba.length;
                }
                if (l !== ea.length) {
                    //DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
                    ba = (dflt || "").split(" ");
                    l = ba.length;
                }
                pt.plugin = plugin;
                pt.setRatio = setRatio;
                _colorExp.lastIndex = 0;
                for (i = 0; i < l; i++) {
                    bv = ba[i];
                    ev = ea[i] + "";
                    bn = parseFloat(bv);
                    //if the value begins with a number (most common). It's fine if it has a suffix like px
                    if (bn || bn === 0) {
                        pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1) ? Math.round : false, true);

                        //if the value is a color
                    } else if (clrs && _colorExp.test(bv)) {
                        str = ev.indexOf(")") + 1;
                        str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.
                        useHSL = (ev.indexOf("hsl") !== -1 && _supportsOpacity);
                        temp = ev; //original string value so we can look for any prefix later.
                        bv = _parseColor(bv, useHSL);
                        ev = _parseColor(ev, useHSL);
                        hasAlpha = (bv.length + ev.length > 6);
                        if (hasAlpha && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
                            pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
                            pt.e = pt.e.split(ea[i]).join("transparent");
                        } else {
                            if (!_supportsOpacity) { //old versions of IE don't support rgba().
                                hasAlpha = false;
                            }
                            if (useHSL) {
                                pt.appendXtra(temp.substr(0, temp.indexOf("hsl")) + (hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true)
                                    .appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false)
                                    .appendXtra("", bv[2], _parseChange(ev[2], bv[2]), (hasAlpha ? "%," : "%" + str), false);
                            } else {
                                pt.appendXtra(temp.substr(0, temp.indexOf("rgb")) + (hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", Math.round, true)
                                    .appendXtra("", bv[1], ev[1] - bv[1], ",", Math.round)
                                    .appendXtra("", bv[2], ev[2] - bv[2], (hasAlpha ? "," : str), Math.round);
                            }

                            if (hasAlpha) {
                                bv = (bv.length < 4) ? 1 : bv[3];
                                pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
                            }
                        }
                        _colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.

                    } else {
                        bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

                        //if no number is found, treat it as a non-tweening value and just append the string to the current xs.
                        if (!bnums) {
                            pt["xs" + pt.l] += (pt.l || pt["xs" + pt.l]) ? " " + ev : ev;

                            //loop through all the numbers that are found and construct the extra values on the pt.
                        } else {
                            enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
                            if (!enums || enums.length !== bnums.length) {
                                //DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
                                return pt;
                            }
                            ni = 0;
                            for (xi = 0; xi < bnums.length; xi++) {
                                cv = bnums[xi];
                                temp = bv.indexOf(cv, ni);
                                pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px") ? Math.round : false, (xi === 0));
                                ni = temp + cv.length;
                            }
                            pt["xs" + pt.l] += bv.substr(ni);
                        }
                    }
                }
                //if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
                if (e.indexOf("=") !== -1) if (pt.data) {
                    str = pt.xs0 + pt.data.s;
                    for (i = 1; i < pt.l; i++) {
                        str += pt["xs" + i] + pt.data["xn" + i];
                    }
                    pt.e = str + pt["xs" + i];
                }
                if (!pt.l) {
                    pt.type = -1;
                    pt.xs0 = pt.e;
                }
                return pt.xfirst || pt;
            },
            i = 9;


        p = CSSPropTween.prototype;
        p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
        while (--i > 0) {
            p["xn" + i] = 0;
            p["xs" + i] = "";
        }
        p.xs0 = "";
        p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;


        /**
         * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
         * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
         * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
         * @param {string=} pfx Prefix (if any)
         * @param {!number} s Starting value
         * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
         * @param {string=} sfx Suffix (if any)
         * @param {boolean=} r Round (if true).
         * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
         * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
         */
        p.appendXtra = function (pfx, s, c, sfx, r, pad) {
            var pt = this,
                l = pt.l;
            pt["xs" + l] += (pad && (l || pt["xs" + l])) ? " " + pfx : pfx || "";
            if (!c) if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
                pt["xs" + l] += s + (sfx || "");
                return pt;
            }
            pt.l++;
            pt.type = pt.setRatio ? 2 : 1;
            pt["xs" + pt.l] = sfx || "";
            if (l > 0) {
                pt.data["xn" + l] = s + c;
                pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
                pt["xn" + l] = s;
                if (!pt.plugin) {
                    pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
                    pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
                }
                return pt;
            }
            pt.data = {s: s + c};
            pt.rxp = {};
            pt.s = s;
            pt.c = c;
            pt.r = r;
            return pt;
        };

        /**
         * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
         * @param {!string} p Property name (like "boxShadow" or "throwProps")
         * @param {Object=} options An object containing any of the following configuration options:
         *                      - defaultValue: the default value
         *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
         *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
         *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
         *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
         *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
         *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
         *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
         *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
         */
        var SpecialProp = function (p, options) {
                options = options || {};
                this.p = options.prefix ? _checkPropPrefix(p) || p : p;
                _specialProps[p] = _specialProps[this.p] = this;
                this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
                if (options.parser) {
                    this.parse = options.parser;
                }
                this.clrs = options.color;
                this.multi = options.multi;
                this.keyword = options.keyword;
                this.dflt = options.defaultValue;
                this.allowFunc = options.allowFunc;
                this.pr = options.priority || 0;
            },

            //shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
            _registerComplexSpecialProp = _internals._registerComplexSpecialProp = function (p, options, defaults) {
                if (typeof (options) !== "object") {
                    options = {parser: defaults}; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
                }
                var a = p.split(","),
                    d = options.defaultValue,
                    i, temp;
                defaults = defaults || [d];
                for (i = 0; i < a.length; i++) {
                    options.prefix = (i === 0 && options.prefix);
                    options.defaultValue = defaults[i] || d;
                    temp = new SpecialProp(a[i], options);
                }
            },

            //creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
            _registerPluginProp = _internals._registerPluginProp = function (p) {
                if (!_specialProps[p]) {
                    var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
                    _registerComplexSpecialProp(p, {
                        parser: function (t, e, p, cssp, pt, plugin, vars) {
                            var pluginClass = _globals.com.greensock.plugins[pluginName];
                            if (!pluginClass) {
                                _log("Error: " + pluginName + " js file not loaded.");
                                return pt;
                            }
                            pluginClass._cssRegister();
                            return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
                        }
                    });
                }
            };


        p = SpecialProp.prototype;

        /**
         * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
         * @param {!Object} t target element
         * @param {(string|number|object)} b beginning value
         * @param {(string|number|object)} e ending (destination) value
         * @param {CSSPropTween=} pt next CSSPropTween in the linked list
         * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
         * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
         * @return {CSSPropTween=} First CSSPropTween in the linked list
         */
        p.parseComplex = function (t, b, e, pt, plugin, setRatio) {
            var kwd = this.keyword,
                i, ba, ea, l, bi, ei;
            //if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
            if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
                ba = b.replace(_commasOutsideParenExp, "|").split("|");
                ea = e.replace(_commasOutsideParenExp, "|").split("|");
            } else if (kwd) {
                ba = [b];
                ea = [e];
            }
            if (ea) {
                l = (ea.length > ba.length) ? ea.length : ba.length;
                for (i = 0; i < l; i++) {
                    b = ba[i] = ba[i] || this.dflt;
                    e = ea[i] = ea[i] || this.dflt;
                    if (kwd) {
                        bi = b.indexOf(kwd);
                        ei = e.indexOf(kwd);
                        if (bi !== ei) {
                            if (ei === -1) { //if the keyword isn't in the end value, remove it from the beginning one.
                                ba[i] = ba[i].split(kwd).join("");
                            } else if (bi === -1) { //if the keyword isn't in the beginning, add it.
                                ba[i] += " " + kwd;
                            }
                        }
                    }
                }
                b = ba.join(", ");
                e = ea.join(", ");
            }
            return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
        };

        /**
         * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
         * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
         * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
         * @param {!Object} t Target object whose property is being tweened
         * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
         * @param {!string} p Property name
         * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
         * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
         * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
         * @param {Object=} vars Original vars object that contains the data for parsing.
         * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
         */
        p.parse = function (t, e, p, cssp, pt, plugin, vars) {
            return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
        };

        /**
         * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
         *  1) Target object whose property should be tweened (typically a DOM element)
         *  2) The end/destination value (could be a string, number, object, or whatever you want)
         *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
         *
         * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
         *
         * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
         *      var start = target.style.width;
         *      return function(ratio) {
         *              target.style.width = (start + value * ratio) + "px";
         *              console.log("set width to " + target.style.width);
         *          }
         * }, 0);
         *
         * Then, when I do this tween, it will trigger my special property:
         *
         * TweenLite.to(element, 1, {css:{myCustomProp:100}});
         *
         * In the example, of course, we're just changing the width, but you can do anything you want.
         *
         * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
         * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
         * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
         */
        CSSPlugin.registerSpecialProp = function (name, onInitTween, priority) {
            _registerComplexSpecialProp(name, {
                parser: function (t, e, p, cssp, pt, plugin, vars) {
                    var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
                    rv.plugin = plugin;
                    rv.setRatio = onInitTween(t, e, cssp._tween, p);
                    return rv;
                }, priority: priority
            });
        };


        //transform-related methods and properties
        CSSPlugin.useSVGTransformAttr = true; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
        var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
            _transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
            _transformPropCSS = _prefixCSS + "transform",
            _transformOriginProp = _checkPropPrefix("transformOrigin"),
            _supports3D = (_checkPropPrefix("perspective") !== null),
            Transform = _internals.Transform = function () {
                this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
                this.force3D = (CSSPlugin.defaultForce3D === false || !_supports3D) ? false : CSSPlugin.defaultForce3D || "auto";
            },
            _SVGElement = _gsScope.SVGElement,
            _useSVGTransformAttr,
            //Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.

            _createSVG = function (type, container, attributes) {
                var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
                    reg = /([a-z])([A-Z])/g,
                    p;
                for (p in attributes) {
                    element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
                }
                container.appendChild(element);
                return element;
            },
            _docElement = _doc.documentElement || {},
            _forceSVGTransformAttr = (function () {
                //IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
                var force = _ieVers || (/Android/i.test(_agent) && !_gsScope.chrome),
                    svg, rect, width;
                if (_doc.createElementNS && !force) { //IE8 and earlier doesn't support SVG anyway
                    svg = _createSVG("svg", _docElement);
                    rect = _createSVG("rect", svg, {width: 100, height: 50, x: 100});
                    width = rect.getBoundingClientRect().width;
                    rect.style[_transformOriginProp] = "50% 50%";
                    rect.style[_transformProp] = "scaleX(0.5)";
                    force = (width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D)); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
                    _docElement.removeChild(svg);
                }
                return force;
            })(),
            _parseSVGOrigin = function (e, local, decoratee, absolute, smoothOrigin, skipRecord) {
                var tm = e._gsTransform,
                    m = _getMatrix(e, true),
                    v, x, y, xOrigin, yOrigin, a, b, c, d, tx, ty, determinant, xOriginOld, yOriginOld;
                if (tm) {
                    xOriginOld = tm.xOrigin; //record the original values before we alter them.
                    yOriginOld = tm.yOrigin;
                }
                if (!absolute || (v = absolute.split(" ")).length < 2) {
                    b = e.getBBox();
                    if (b.x === 0 && b.y === 0 && b.width + b.height === 0) { //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
                        b = {
                            x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0,
                            y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        };
                    }
                    local = _parsePosition(local).split(" ");
                    v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x,
                        (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
                }
                decoratee.xOrigin = xOrigin = parseFloat(v[0]);
                decoratee.yOrigin = yOrigin = parseFloat(v[1]);
                if (absolute && m !== _identity2DMatrix) { //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
                    a = m[0];
                    b = m[1];
                    c = m[2];
                    d = m[3];
                    tx = m[4];
                    ty = m[5];
                    determinant = (a * d - b * c);
                    if (determinant) { //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
                        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + ((c * ty - d * tx) / determinant);
                        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - ((a * ty - b * tx) / determinant);
                        xOrigin = decoratee.xOrigin = v[0] = x;
                        yOrigin = decoratee.yOrigin = v[1] = y;
                    }
                }
                if (tm) { //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
                    if (skipRecord) {
                        decoratee.xOffset = tm.xOffset;
                        decoratee.yOffset = tm.yOffset;
                        tm = decoratee;
                    }
                    if (smoothOrigin || (smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false)) {
                        x = xOrigin - xOriginOld;
                        y = yOrigin - yOriginOld;
                        //originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
                        //tm.x -= x - (x * m[0] + y * m[2]);
                        //tm.y -= y - (x * m[1] + y * m[3]);
                        tm.xOffset += (x * m[0] + y * m[2]) - x;
                        tm.yOffset += (x * m[1] + y * m[3]) - y;
                    } else {
                        tm.xOffset = tm.yOffset = 0;
                    }
                }
                if (!skipRecord) {
                    e.setAttribute("data-svg-origin", v.join(" "));
                }
            },
            _getBBoxHack = function (swapIfPossible) { //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
                var svg = _createElement("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
                    oldParent = this.parentNode,
                    oldSibling = this.nextSibling,
                    oldCSS = this.style.cssText,
                    bbox;
                _docElement.appendChild(svg);
                svg.appendChild(this);
                this.style.display = "block";
                if (swapIfPossible) {
                    try {
                        bbox = this.getBBox();
                        this._originalGetBBox = this.getBBox;
                        this.getBBox = _getBBoxHack;
                    } catch (e) {
                    }
                } else if (this._originalGetBBox) {
                    bbox = this._originalGetBBox();
                }
                if (oldSibling) {
                    oldParent.insertBefore(this, oldSibling);
                } else {
                    oldParent.appendChild(this);
                }
                _docElement.removeChild(svg);
                this.style.cssText = oldCSS;
                return bbox;
            },
            _getBBox = function (e) {
                try {
                    return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
                } catch (error) {
                    return _getBBoxHack.call(e, true);
                }
            },
            _isSVG = function (e) { //reports if the element is an SVG on which getBBox() actually works
                return !!(_SVGElement && e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
            },
            _identity2DMatrix = [1, 0, 0, 1, 0, 0],
            _getMatrix = function (e, force2D) {
                var tm = e._gsTransform || new Transform(),
                    rnd = 100000,
                    style = e.style,
                    isDefault, s, m, n, dec, nextSibling, parent;
                if (_transformProp) {
                    s = _getStyle(e, _transformPropCSS, null, true);
                } else if (e.currentStyle) {
                    //for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
                    s = e.currentStyle.filter.match(_ieGetMatrixExp);
                    s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
                }
                isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
                if (_transformProp && isDefault && !e.offsetParent) { //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
                    //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
                    n = style.display;
                    style.display = "block";
                    parent = e.parentNode;
                    if (!parent || !e.offsetParent) {
                        dec = 1; //flag
                        nextSibling = e.nextSibling;
                        _docElement.appendChild(e); //we must add it to the DOM in order to get values properly
                    }
                    s = _getStyle(e, _transformPropCSS, null, true);
                    isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
                    if (n) {
                        style.display = n;
                    } else {
                        _removeProp(style, "display");
                    }
                    if (dec) {
                        if (nextSibling) {
                            parent.insertBefore(e, nextSibling);
                        } else if (parent) {
                            parent.appendChild(e);
                        } else {
                            _docElement.removeChild(e);
                        }
                    }
                }
                if (tm.svg || (e.getCTM && _isSVG(e))) {
                    if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) { //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
                        s = style[_transformProp];
                        isDefault = 0;
                    }
                    m = e.getAttribute("transform");
                    if (isDefault && m) {
                        m = e.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
                        s = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")";
                        isDefault = 0;
                    }
                }
                if (isDefault) {
                    return _identity2DMatrix;
                }
                //split the matrix values out into an array (m for matrix)
                m = (s || "").match(_numExp) || [];
                i = m.length;
                while (--i > -1) {
                    n = Number(m[i]);
                    m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
                }
                return (force2D && m.length > 6) ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
            },

            /**
             * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
             * @param {!Object} t target element
             * @param {Object=} cs computed style object (optional)
             * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
             * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
             * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
             */
            _getTransform = _internals.getTransform = function (t, cs, rec, parse) {
                if (t._gsTransform && rec && !parse) {
                    return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
                }
                var tm = rec ? t._gsTransform || new Transform() : new Transform(),
                    invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
                    min = 0.00002,
                    rnd = 100000,
                    zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin || 0 : 0,
                    defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
                    m, i, scaleX, scaleY, rotation, skewX;

                tm.svg = !!(t.getCTM && _isSVG(t));
                if (tm.svg) {
                    _parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
                    _useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
                }
                m = _getMatrix(t);
                if (m !== _identity2DMatrix) {

                    if (m.length === 16) {
                        //we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
                        var a11 = m[0], a21 = m[1], a31 = m[2], a41 = m[3],
                            a12 = m[4], a22 = m[5], a32 = m[6], a42 = m[7],
                            a13 = m[8], a23 = m[9], a33 = m[10],
                            a14 = m[12], a24 = m[13], a34 = m[14],
                            a43 = m[11],
                            angle = Math.atan2(a32, a33),
                            t1, t2, t3, t4, cos, sin;
                        //we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
                        if (tm.zOrigin) {
                            a34 = -tm.zOrigin;
                            a14 = a13 * a34 - m[12];
                            a24 = a23 * a34 - m[13];
                            a34 = a33 * a34 + tm.zOrigin - m[14];
                        }
                        //note for possible future consolidation: rotationX: Math.atan2(a32, a33), rotationY: Math.atan2(-a31, Math.sqrt(a33 * a33 + a32 * a32)), rotation: Math.atan2(a21, a11), skew: Math.atan2(a12, a22). However, it doesn't seem to be quite as reliable as the full-on backwards rotation procedure.
                        tm.rotationX = angle * _RAD2DEG;
                        //rotationX
                        if (angle) {
                            cos = Math.cos(-angle);
                            sin = Math.sin(-angle);
                            t1 = a12 * cos + a13 * sin;
                            t2 = a22 * cos + a23 * sin;
                            t3 = a32 * cos + a33 * sin;
                            a13 = a12 * -sin + a13 * cos;
                            a23 = a22 * -sin + a23 * cos;
                            a33 = a32 * -sin + a33 * cos;
                            a43 = a42 * -sin + a43 * cos;
                            a12 = t1;
                            a22 = t2;
                            a32 = t3;
                        }
                        //rotationY
                        angle = Math.atan2(-a31, a33);
                        tm.rotationY = angle * _RAD2DEG;
                        if (angle) {
                            cos = Math.cos(-angle);
                            sin = Math.sin(-angle);
                            t1 = a11 * cos - a13 * sin;
                            t2 = a21 * cos - a23 * sin;
                            t3 = a31 * cos - a33 * sin;
                            a23 = a21 * sin + a23 * cos;
                            a33 = a31 * sin + a33 * cos;
                            a43 = a41 * sin + a43 * cos;
                            a11 = t1;
                            a21 = t2;
                            a31 = t3;
                        }
                        //rotationZ
                        angle = Math.atan2(a21, a11);
                        tm.rotation = angle * _RAD2DEG;
                        if (angle) {
                            cos = Math.cos(angle);
                            sin = Math.sin(angle);
                            t1 = a11 * cos + a21 * sin;
                            t2 = a12 * cos + a22 * sin;
                            t3 = a13 * cos + a23 * sin;
                            a21 = a21 * cos - a11 * sin;
                            a22 = a22 * cos - a12 * sin;
                            a23 = a23 * cos - a13 * sin;
                            a11 = t1;
                            a12 = t2;
                            a13 = t3;
                        }

                        if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) { //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
                            tm.rotationX = tm.rotation = 0;
                            tm.rotationY = 180 - tm.rotationY;
                        }

                        //skewX
                        angle = Math.atan2(a12, a22);

                        //scales
                        tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31) * rnd + 0.5) | 0) / rnd;
                        tm.scaleY = ((Math.sqrt(a22 * a22 + a32 * a32) * rnd + 0.5) | 0) / rnd;
                        tm.scaleZ = ((Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33) * rnd + 0.5) | 0) / rnd;
                        a11 /= tm.scaleX;
                        a12 /= tm.scaleY;
                        a21 /= tm.scaleX;
                        a22 /= tm.scaleY;
                        if (Math.abs(angle) > min) {
                            tm.skewX = angle * _RAD2DEG;
                            a12 = 0; //unskews
                            if (tm.skewType !== "simple") {
                                tm.scaleY *= 1 / Math.cos(angle); //by default, we compensate the scale based on the skew so that the element maintains a similar proportion when skewed, so we have to alter the scaleY here accordingly to match the default (non-adjusted) skewing that CSS does (stretching more and more as it skews).
                            }

                        } else {
                            tm.skewX = 0;
                        }

                        /* //for testing purposes
						var transform = "matrix3d(",
							comma = ",",
							zero = "0";
						a13 /= tm.scaleZ;
						a23 /= tm.scaleZ;
						a31 /= tm.scaleX;
						a32 /= tm.scaleY;
						a33 /= tm.scaleZ;
						transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
						transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
						transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
						transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
						transform += a14 + comma + a24 + comma + a34 + comma + (tm.perspective ? (1 + (-a34 / tm.perspective)) : 1) + ")";
						console.log(transform);
						document.querySelector(".test").style[_transformProp] = transform;
						*/

                        tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
                        tm.x = a14;
                        tm.y = a24;
                        tm.z = a34;
                        if (tm.svg) {
                            tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
                            tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
                        }

                    } else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY))) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
                        var k = (m.length >= 6),
                            a = k ? m[0] : 1,
                            b = m[1] || 0,
                            c = m[2] || 0,
                            d = k ? m[3] : 1;
                        tm.x = m[4] || 0;
                        tm.y = m[5] || 0;
                        scaleX = Math.sqrt(a * a + b * b);
                        scaleY = Math.sqrt(d * d + c * c);
                        rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
                        skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
                        tm.scaleX = scaleX;
                        tm.scaleY = scaleY;
                        tm.rotation = rotation;
                        tm.skewX = skewX;
                        if (_supports3D) {
                            tm.rotationX = tm.rotationY = tm.z = 0;
                            tm.perspective = defaultTransformPerspective;
                            tm.scaleZ = 1;
                        }
                        if (tm.svg) {
                            tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
                            tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
                        }
                    }
                    if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
                        if (invX) {
                            tm.scaleX *= -1;
                            tm.skewX += (tm.rotation <= 0) ? 180 : -180;
                            tm.rotation += (tm.rotation <= 0) ? 180 : -180;
                        } else {
                            tm.scaleY *= -1;
                            tm.skewX += (tm.skewX <= 0) ? 180 : -180;
                        }
                    }
                    tm.zOrigin = zOrigin;
                    //some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
                    for (i in tm) {
                        if (tm[i] < min) if (tm[i] > -min) {
                            tm[i] = 0;
                        }
                    }
                }
                //DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
                if (rec) {
                    t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
                    if (tm.svg) { //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
                        if (_useSVGTransformAttr && t.style[_transformProp]) {
                            TweenLite.delayedCall(0.001, function () { //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
                                _removeProp(t.style, _transformProp);
                            });
                        } else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
                            TweenLite.delayedCall(0.001, function () {
                                t.removeAttribute("transform");
                            });
                        }
                    }
                }
                return tm;
            },

            //for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
            _setIETransformRatio = function (v) {
                var t = this.data, //refers to the element's _gsTransform object
                    ang = -t.rotation * _DEG2RAD,
                    skew = ang + t.skewX * _DEG2RAD,
                    rnd = 100000,
                    a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
                    b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
                    c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
                    d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
                    style = this.t.style,
                    cs = this.t.currentStyle,
                    filters, val;
                if (!cs) {
                    return;
                }
                val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
                b = -c;
                c = -val;
                filters = cs.filter;
                style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
                var w = this.t.offsetWidth,
                    h = this.t.offsetHeight,
                    clip = (cs.position !== "absolute"),
                    m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
                    ox = t.x + (w * t.xPercent / 100),
                    oy = t.y + (h * t.yPercent / 100),
                    dx, dy;

                //if transformOrigin is being used, adjust the offset x and y
                if (t.ox != null) {
                    dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
                    dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
                    ox += dx - (dx * a + dy * b);
                    oy += dy - (dx * c + dy * d);
                }

                if (!clip) {
                    m += ", sizingMethod='auto expand')";
                } else {
                    dx = (w / 2);
                    dy = (h / 2);
                    //translate to ensure that transformations occur around the correct origin (default is center).
                    m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
                }
                if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
                    style.filter = filters.replace(_ieSetMatrixExp, m);
                } else {
                    style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
                }

                //at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
                if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf("gradient(" && filters.indexOf("Alpha")) === -1) {
                    style.removeAttribute("filter");
                }

                //we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
                if (!clip) {
                    var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
                        marg, prop, dif;
                    dx = t.ieOffsetX || 0;
                    dy = t.ieOffsetY || 0;
                    t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
                    t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
                    for (i = 0; i < 4; i++) {
                        prop = _margins[i];
                        marg = cs[prop];
                        //we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
                        val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
                        if (val !== t[prop]) {
                            dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
                        } else {
                            dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
                        }
                        style[prop] = (t[prop] = Math.round(val - dif * ((i === 0 || i === 2) ? 1 : mult))) + "px";
                    }
                }
            },

            /* translates a super small decimal to a string WITHOUT scientific notation
			_safeDecimal = function(n) {
				var s = (n < 0 ? -n : n) + "",
					a = s.split("e-");
				return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
			},
			*/

            _setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function (v) {
                var t = this.data, //refers to the element's _gsTransform object
                    style = this.t.style,
                    angle = t.rotation,
                    rotationX = t.rotationX,
                    rotationY = t.rotationY,
                    sx = t.scaleX,
                    sy = t.scaleY,
                    sz = t.scaleZ,
                    x = t.x,
                    y = t.y,
                    z = t.z,
                    isSVG = t.svg,
                    perspective = t.perspective,
                    force3D = t.force3D,
                    skewY = t.skewY,
                    skewX = t.skewX,
                    t1, a11, a12, a13, a21, a22, a23, a31, a32, a33, a41, a42, a43,
                    zOrigin, min, cos, sin, t2, transform, comma, zero, skew, rnd;
                if (skewY) { //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
                    skewX += skewY;
                    angle += skewY;
                }

                //check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
                if (((((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1) || (_useSVGTransformAttr && isSVG) || !_supports3D) { //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.

                    //2D
                    if (angle || skewX || isSVG) {
                        angle *= _DEG2RAD;
                        skew = skewX * _DEG2RAD;
                        rnd = 100000;
                        a11 = Math.cos(angle) * sx;
                        a21 = Math.sin(angle) * sx;
                        a12 = Math.sin(angle - skew) * -sy;
                        a22 = Math.cos(angle - skew) * sy;
                        if (skew && t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
                            t1 = Math.tan(skew - skewY * _DEG2RAD);
                            t1 = Math.sqrt(1 + t1 * t1);
                            a12 *= t1;
                            a22 *= t1;
                            if (skewY) {
                                t1 = Math.tan(skewY * _DEG2RAD);
                                t1 = Math.sqrt(1 + t1 * t1);
                                a11 *= t1;
                                a21 *= t1;
                            }
                        }
                        if (isSVG) {
                            x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
                            y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
                            if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) { //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
                                min = this.t.getBBox();
                                x += t.xPercent * 0.01 * min.width;
                                y += t.yPercent * 0.01 * min.height;
                            }
                            min = 0.000001;
                            if (x < min) if (x > -min) {
                                x = 0;
                            }
                            if (y < min) if (y > -min) {
                                y = 0;
                            }
                        }
                        transform = (((a11 * rnd) | 0) / rnd) + "," + (((a21 * rnd) | 0) / rnd) + "," + (((a12 * rnd) | 0) / rnd) + "," + (((a22 * rnd) | 0) / rnd) + "," + x + "," + y + ")";
                        if (isSVG && _useSVGTransformAttr) {
                            this.t.setAttribute("transform", "matrix(" + transform);
                        } else {
                            //some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
                            style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
                        }
                    } else {
                        style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
                    }
                    return;

                }
                if (_isFirefox) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
                    min = 0.0001;
                    if (sx < min && sx > -min) {
                        sx = sz = 0.00002;
                    }
                    if (sy < min && sy > -min) {
                        sy = sz = 0.00002;
                    }
                    if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
                        perspective = 0;
                    }
                }
                if (angle || skewX) {
                    angle *= _DEG2RAD;
                    cos = a11 = Math.cos(angle);
                    sin = a21 = Math.sin(angle);
                    if (skewX) {
                        angle -= skewX * _DEG2RAD;
                        cos = Math.cos(angle);
                        sin = Math.sin(angle);
                        if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
                            t1 = Math.tan((skewX - skewY) * _DEG2RAD);
                            t1 = Math.sqrt(1 + t1 * t1);
                            cos *= t1;
                            sin *= t1;
                            if (t.skewY) {
                                t1 = Math.tan(skewY * _DEG2RAD);
                                t1 = Math.sqrt(1 + t1 * t1);
                                a11 *= t1;
                                a21 *= t1;
                            }
                        }
                    }
                    a12 = -sin;
                    a22 = cos;

                } else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) { //if we're only translating and/or 2D scaling, this is faster...
                    style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z + "px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
                    return;
                } else {
                    a11 = a22 = 1;
                    a12 = a21 = 0;
                }
                // KEY  INDEX   AFFECTS a[row][column]
                // a11  0       rotation, rotationY, scaleX
                // a21  1       rotation, rotationY, scaleX
                // a31  2       rotationY, scaleX
                // a41  3       rotationY, scaleX
                // a12  4       rotation, skewX, rotationX, scaleY
                // a22  5       rotation, skewX, rotationX, scaleY
                // a32  6       rotationX, scaleY
                // a42  7       rotationX, scaleY
                // a13  8       rotationY, rotationX, scaleZ
                // a23  9       rotationY, rotationX, scaleZ
                // a33  10      rotationY, rotationX, scaleZ
                // a43  11      rotationY, rotationX, perspective, scaleZ
                // a14  12      x, zOrigin, svgOrigin
                // a24  13      y, zOrigin, svgOrigin
                // a34  14      z, zOrigin
                // a44  15
                // rotation: Math.atan2(a21, a11)
                // rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
                // rotationX: Math.atan2(a32, a33)
                a33 = 1;
                a13 = a23 = a31 = a32 = a41 = a42 = 0;
                a43 = (perspective) ? -1 / perspective : 0;
                zOrigin = t.zOrigin;
                min = 0.000001; //threshold below which browsers use scientific notation which won't work.
                comma = ",";
                zero = "0";
                angle = rotationY * _DEG2RAD;
                if (angle) {
                    cos = Math.cos(angle);
                    sin = Math.sin(angle);
                    a31 = -sin;
                    a41 = a43 * -sin;
                    a13 = a11 * sin;
                    a23 = a21 * sin;
                    a33 = cos;
                    a43 *= cos;
                    a11 *= cos;
                    a21 *= cos;
                }
                angle = rotationX * _DEG2RAD;
                if (angle) {
                    cos = Math.cos(angle);
                    sin = Math.sin(angle);
                    t1 = a12 * cos + a13 * sin;
                    t2 = a22 * cos + a23 * sin;
                    a32 = a33 * sin;
                    a42 = a43 * sin;
                    a13 = a12 * -sin + a13 * cos;
                    a23 = a22 * -sin + a23 * cos;
                    a33 = a33 * cos;
                    a43 = a43 * cos;
                    a12 = t1;
                    a22 = t2;
                }
                if (sz !== 1) {
                    a13 *= sz;
                    a23 *= sz;
                    a33 *= sz;
                    a43 *= sz;
                }
                if (sy !== 1) {
                    a12 *= sy;
                    a22 *= sy;
                    a32 *= sy;
                    a42 *= sy;
                }
                if (sx !== 1) {
                    a11 *= sx;
                    a21 *= sx;
                    a31 *= sx;
                    a41 *= sx;
                }

                if (zOrigin || isSVG) {
                    if (zOrigin) {
                        x += a13 * -zOrigin;
                        y += a23 * -zOrigin;
                        z += a33 * -zOrigin + zOrigin;
                    }
                    if (isSVG) { //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
                        x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
                        y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
                    }
                    if (x < min && x > -min) {
                        x = zero;
                    }
                    if (y < min && y > -min) {
                        y = zero;
                    }
                    if (z < min && z > -min) {
                        z = 0; //don't use string because we calculate perspective later and need the number.
                    }
                }

                //optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
                transform = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(");
                transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
                transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
                if (rotationX || rotationY || sz !== 1) { //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
                    transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
                    transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
                } else {
                    transform += ",0,0,0,0,1,0,";
                }
                transform += x + comma + y + comma + z + comma + (perspective ? (1 + (-z / perspective)) : 1) + ")";

                style[_transformProp] = transform;
            };

        p = Transform.prototype;
        p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
        p.scaleX = p.scaleY = p.scaleZ = 1;

        _registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function (t, e, parsingProp, cssp, pt, plugin, vars) {
                if (cssp._lastParsedTransform === vars) {
                    return pt;
                } //only need to parse the transform once, and only if the browser supports it.
                cssp._lastParsedTransform = vars;
                var scaleFunc = (vars.scale && typeof (vars.scale) === "function") ? vars.scale : 0; //if there's a function-based "scale" value, swap in the resulting numeric value temporarily. Otherwise, if it's called for both scaleX and scaleY independently, they may not match (like if the function uses Math.random()).
                if (scaleFunc) {
                    vars.scale = scaleFunc(_index, t);
                }
                var originalGSTransform = t._gsTransform,
                    style = t.style,
                    min = 0.000001,
                    i = _transformProps.length,
                    v = vars,
                    endRotations = {},
                    transformOriginString = "transformOrigin",
                    m1 = _getTransform(t, _cs, true, v.parseTransform),
                    orig = v.transform && ((typeof (v.transform) === "function") ? v.transform(_index, _target) : v.transform),
                    m2, copy, has3D, hasChange, dr, x, y, matrix, p;
                m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
                cssp._transform = m1;
                if ("rotationZ" in v) {
                    v.rotation = v.rotationZ;
                }
                if (orig && typeof (orig) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
                    copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
                    copy[_transformProp] = orig;
                    copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
                    copy.position = "absolute";
                    if (orig.indexOf("%") !== -1) { //%-based translations will fail unless we set the width/height to match the original target...
                        copy.width = _getStyle(t, "width");
                        copy.height = _getStyle(t, "height");
                    }
                    _doc.body.appendChild(_tempDiv);
                    m2 = _getTransform(_tempDiv, null, false);
                    if (m1.skewType === "simple") { //the default _getTransform() reports the skewX/scaleY as if skewType is "compensated", thus we need to adjust that here if skewType is "simple".
                        m2.scaleY *= Math.cos(m2.skewX * _DEG2RAD);
                    }
                    if (m1.svg) { //if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
                        x = m1.xOrigin;
                        y = m1.yOrigin;
                        m2.x -= m1.xOffset;
                        m2.y -= m1.yOffset;
                        if (v.transformOrigin || v.svgOrigin) { //if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
                            orig = {};
                            _parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);
                            x = orig.xOrigin;
                            y = orig.yOrigin;
                            m2.x -= orig.xOffset - m1.xOffset;
                            m2.y -= orig.yOffset - m1.yOffset;
                        }
                        if (x || y) {
                            matrix = _getMatrix(_tempDiv, true);
                            m2.x -= x - (x * matrix[0] + y * matrix[2]);
                            m2.y -= y - (x * matrix[1] + y * matrix[3]);
                        }
                    }
                    _doc.body.removeChild(_tempDiv);
                    if (!m2.perspective) {
                        m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
                    }
                    if (v.xPercent != null) {
                        m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
                    }
                    if (v.yPercent != null) {
                        m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
                    }
                } else if (typeof (v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
                    m2 = {
                        scaleX: _parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
                        scaleY: _parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
                        scaleZ: _parseVal(v.scaleZ, m1.scaleZ),
                        x: _parseVal(v.x, m1.x),
                        y: _parseVal(v.y, m1.y),
                        z: _parseVal(v.z, m1.z),
                        xPercent: _parseVal(v.xPercent, m1.xPercent),
                        yPercent: _parseVal(v.yPercent, m1.yPercent),
                        perspective: _parseVal(v.transformPerspective, m1.perspective)
                    };
                    dr = v.directionalRotation;
                    if (dr != null) {
                        if (typeof (dr) === "object") {
                            for (copy in dr) {
                                v[copy] = dr[copy];
                            }
                        } else {
                            v.rotation = dr;
                        }
                    }
                    if (typeof (v.x) === "string" && v.x.indexOf("%") !== -1) {
                        m2.x = 0;
                        m2.xPercent = _parseVal(v.x, m1.xPercent);
                    }
                    if (typeof (v.y) === "string" && v.y.indexOf("%") !== -1) {
                        m2.y = 0;
                        m2.yPercent = _parseVal(v.y, m1.yPercent);
                    }

                    m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : m1.rotation, m1.rotation, "rotation", endRotations);
                    if (_supports3D) {
                        m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
                        m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
                    }
                    m2.skewX = _parseAngle(v.skewX, m1.skewX);
                    m2.skewY = _parseAngle(v.skewY, m1.skewY);
                }
                if (_supports3D && v.force3D != null) {
                    m1.force3D = v.force3D;
                    hasChange = true;
                }

                has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
                if (!has3D && v.scale != null) {
                    m2.scaleZ = 1; //no need to tween scaleZ.
                }

                while (--i > -1) {
                    p = _transformProps[i];
                    orig = m2[p] - m1[p];
                    if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
                        hasChange = true;
                        pt = new CSSPropTween(m1, p, m1[p], orig, pt);
                        if (p in endRotations) {
                            pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
                        }
                        pt.xs0 = 0; //ensures the value stays numeric in setRatio()
                        pt.plugin = plugin;
                        cssp._overwriteProps.push(pt.n);
                    }
                }

                orig = (typeof (v.transformOrigin) === "function") ? v.transformOrigin(_index, _target) : v.transformOrigin;
                if (m1.svg && (orig || v.svgOrigin)) {
                    x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
                    y = m1.yOffset;
                    _parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
                    pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
                    pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
                    if (x !== m1.xOffset || y !== m1.yOffset) {
                        pt = _addNonTweeningNumericPT(m1, "xOffset", (originalGSTransform ? x : m1.xOffset), m1.xOffset, pt, transformOriginString);
                        pt = _addNonTweeningNumericPT(m1, "yOffset", (originalGSTransform ? y : m1.yOffset), m1.yOffset, pt, transformOriginString);
                    }
                    orig = "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
                }
                if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
                    if (_transformProp) {
                        hasChange = true;
                        p = _transformOriginProp;
                        if (!orig) {
                            orig = (_getStyle(t, p, _cs, false, "50% 50%") + "").split(" ");
                            orig = orig[0] + " " + orig[1] + " " + m1.zOrigin + "px";
                        }
                        orig += "";
                        pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
                        pt.b = style[p];
                        pt.plugin = plugin;
                        if (_supports3D) {
                            copy = m1.zOrigin;
                            orig = orig.split(" ");
                            m1.zOrigin = ((orig.length > 2) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
                            pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
                            pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
                            pt.b = copy;
                            pt.xs0 = pt.e = m1.zOrigin;
                        } else {
                            pt.xs0 = pt.e = orig;
                        }

                        //for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
                    } else {
                        _parsePosition(orig + "", m1);
                    }
                }
                if (hasChange) {
                    cssp._transformType = (!(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3)) ? 3 : 2; //quicker than calling cssp._enableTransforms();
                }
                if (scaleFunc) {
                    vars.scale = scaleFunc;
                }
                return pt;
            }, allowFunc: true, prefix: true
        });

        _registerComplexSpecialProp("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: true,
            color: true,
            multi: true,
            keyword: "inset"
        });
        _registerComplexSpecialProp("clipPath", {
            defaultValue: "inset(0px)",
            prefix: true,
            multi: true,
            formatter: _getFormatter("inset(0px 0px 0px 0px)", false, true)
        });

        _registerComplexSpecialProp("borderRadius", {
            defaultValue: "0px", parser: function (t, e, p, cssp, pt, plugin) {
                e = this.format(e);
                var props = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    style = t.style,
                    ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
                w = parseFloat(t.offsetWidth);
                h = parseFloat(t.offsetHeight);
                ea1 = e.split(" ");
                for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
                    if (this.p.indexOf("border")) { //older browsers used a prefix
                        props[i] = _checkPropPrefix(props[i]);
                    }
                    bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
                    if (bs.indexOf(" ") !== -1) {
                        bs2 = bs.split(" ");
                        bs = bs2[0];
                        bs2 = bs2[1];
                    }
                    es = es2 = ea1[i];
                    bn = parseFloat(bs);
                    bsfx = bs.substr((bn + "").length);
                    rel = (es.charAt(1) === "=");
                    if (rel) {
                        en = parseInt(es.charAt(0) + "1", 10);
                        es = es.substr(2);
                        en *= parseFloat(es);
                        esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
                    } else {
                        en = parseFloat(es);
                        esfx = es.substr((en + "").length);
                    }
                    if (esfx === "") {
                        esfx = _suffixMap[p] || bsfx;
                    }
                    if (esfx !== bsfx) {
                        hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
                        vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
                        if (esfx === "%") {
                            bs = (hn / w * 100) + "%";
                            bs2 = (vn / h * 100) + "%";
                        } else if (esfx === "em") {
                            em = _convertToPixels(t, "borderLeft", 1, "em");
                            bs = (hn / em) + "em";
                            bs2 = (vn / em) + "em";
                        } else {
                            bs = hn + "px";
                            bs2 = vn + "px";
                        }
                        if (rel) {
                            es = (parseFloat(bs) + en) + esfx;
                            es2 = (parseFloat(bs2) + en) + esfx;
                        }
                    }
                    pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
                }
                return pt;
            }, prefix: true, formatter: _getFormatter("0px 0px 0px 0px", false, true)
        });
        _registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px", parser: function (t, e, p, cssp, pt, plugin) {
                return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
            }, prefix: true, formatter: _getFormatter("0px 0px", false, true)
        });
        _registerComplexSpecialProp("backgroundPosition", {
            defaultValue: "0 0", parser: function (t, e, p, cssp, pt, plugin) {
                var bp = "background-position",
                    cs = (_cs || _getComputedStyle(t, null)),
                    bs = this.format(((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
                    es = this.format(e),
                    ba, ea, i, pct, overlap, src;
                if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
                    src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
                    if (src && src !== "none") {
                        ba = bs.split(" ");
                        ea = es.split(" ");
                        _tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
                        i = 2;
                        while (--i > -1) {
                            bs = ba[i];
                            pct = (bs.indexOf("%") !== -1);
                            if (pct !== (ea[i].indexOf("%") !== -1)) {
                                overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
                                ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
                            }
                        }
                        bs = ba.join(" ");
                    }
                }
                return this.parseComplex(t.style, bs, es, pt, plugin);
            }, formatter: _parsePosition
        });
        _registerComplexSpecialProp("backgroundSize", {
            defaultValue: "0 0", formatter: function (v) {
                v += ""; //ensure it's a string
                return (v.substr(0, 2) === "co") ? v : _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong). Also remember that it could be "cover" or "contain" which we can't tween but should be able to set.
            }
        });
        _registerComplexSpecialProp("perspective", {defaultValue: "0px", prefix: true});
        _registerComplexSpecialProp("perspectiveOrigin", {defaultValue: "50% 50%", prefix: true});
        _registerComplexSpecialProp("transformStyle", {prefix: true});
        _registerComplexSpecialProp("backfaceVisibility", {prefix: true});
        _registerComplexSpecialProp("userSelect", {prefix: true});
        _registerComplexSpecialProp("margin", {parser: _getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
        _registerComplexSpecialProp("padding", {parser: _getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
        _registerComplexSpecialProp("clip", {
            defaultValue: "rect(0px,0px,0px,0px)", parser: function (t, e, p, cssp, pt, plugin) {
                var b, cs, delim;
                if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
                    cs = t.currentStyle;
                    delim = _ieVers < 8 ? " " : ",";
                    b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
                    e = this.format(e).split(",").join(delim);
                } else {
                    b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
                    e = this.format(e);
                }
                return this.parseComplex(t.style, b, e, pt, plugin);
            }
        });
        _registerComplexSpecialProp("textShadow", {defaultValue: "0px 0px 0px #999", color: true, multi: true});
        _registerComplexSpecialProp("autoRound,strictUnits", {
            parser: function (t, e, p, cssp, pt) {
                return pt;
            }
        }); //just so that we can ignore these properties (not tween them)
        _registerComplexSpecialProp("border", {
            defaultValue: "0px solid #000", parser: function (t, e, p, cssp, pt, plugin) {
                var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
                    end = this.format(e).split(" "),
                    esfx = end[0].replace(_suffixExp, "");
                if (esfx !== "px") { //if we're animating to a non-px value, we need to convert the beginning width to that unit.
                    bw = (parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx)) + esfx;
                }
                return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
            }, color: true, formatter: function (v) {
                var a = v.split(" ");
                return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
            }
        });
        _registerComplexSpecialProp("borderWidth", {parser: _getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
        _registerComplexSpecialProp("float,cssFloat,styleFloat", {
            parser: function (t, e, p, cssp, pt, plugin) {
                var s = t.style,
                    prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
                return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
            }
        });

        //opacity-related
        var _setIEOpacityRatio = function (v) {
            var t = this.t, //refers to the element's style property
                filters = t.filter || _getStyle(this.data, "filter") || "",
                val = (this.s + this.c * v) | 0,
                skip;
            if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
                if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
                    t.removeAttribute("filter");
                    skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
                } else {
                    t.filter = filters.replace(_alphaFilterExp, "");
                    skip = true;
                }
            }
            if (!skip) {
                if (this.xn1) {
                    t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
                }
                if (filters.indexOf("pacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
                    if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
                        t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
                    }
                } else {
                    t.filter = filters.replace(_opacityExp, "opacity=" + val);
                }
            }
        };
        _registerComplexSpecialProp("opacity,alpha,autoAlpha", {
            defaultValue: "1", parser: function (t, e, p, cssp, pt, plugin) {
                var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
                    style = t.style,
                    isAutoAlpha = (p === "autoAlpha");
                if (typeof (e) === "string" && e.charAt(1) === "=") {
                    e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
                }
                if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                    b = 0;
                }
                if (_supportsOpacity) {
                    pt = new CSSPropTween(style, "opacity", b, e - b, pt);
                } else {
                    pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
                    pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
                    style.zoom = 1; //helps correct an IE issue.
                    pt.type = 2;
                    pt.b = "alpha(opacity=" + pt.s + ")";
                    pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
                    pt.data = t;
                    pt.plugin = plugin;
                    pt.setRatio = _setIEOpacityRatio;
                }
                if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
                    pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
                    pt.xs0 = "inherit";
                    cssp._overwriteProps.push(pt.n);
                    cssp._overwriteProps.push(p);
                }
                return pt;
            }
        });


        var _removeProp = function (s, p) {
                if (p) {
                    if (s.removeProperty) {
                        if (p.substr(0, 2) === "ms" || p.substr(0, 6) === "webkit") { //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
                            p = "-" + p;
                        }
                        s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
                    } else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
                        s.removeAttribute(p);
                    }
                }
            },
            _setClassNameRatio = function (v) {
                this.t._gsClassPT = this;
                if (v === 1 || v === 0) {
                    this.t.setAttribute("class", (v === 0) ? this.b : this.e);
                    var mpt = this.data, //first MiniPropTween
                        s = this.t.style;
                    while (mpt) {
                        if (!mpt.v) {
                            _removeProp(s, mpt.p);
                        } else {
                            s[mpt.p] = mpt.v;
                        }
                        mpt = mpt._next;
                    }
                    if (v === 1 && this.t._gsClassPT === this) {
                        this.t._gsClassPT = null;
                    }
                } else if (this.t.getAttribute("class") !== this.e) {
                    this.t.setAttribute("class", this.e);
                }
            };
        _registerComplexSpecialProp("className", {
            parser: function (t, e, p, cssp, pt, plugin, vars) {
                var b = t.getAttribute("class") || "", //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
                    cssText = t.style.cssText,
                    difData, bs, cnpt, cnptLookup, mpt;
                pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
                pt.setRatio = _setClassNameRatio;
                pt.pr = -11;
                _hasPriority = true;
                pt.b = b;
                bs = _getAllStyles(t, _cs);
                //if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
                cnpt = t._gsClassPT;
                if (cnpt) {
                    cnptLookup = {};
                    mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
                    while (mpt) {
                        cnptLookup[mpt.p] = 1;
                        mpt = mpt._next;
                    }
                    cnpt.setRatio(1);
                }
                t._gsClassPT = pt;
                pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
                t.setAttribute("class", pt.e);
                difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
                t.setAttribute("class", b);
                pt.data = difData.firstMPT;
                t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
                pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
                return pt;
            }
        });


        var _setClearPropsRatio = function (v) {
            if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
                var s = this.t.style,
                    transformParse = _specialProps.transform.parse,
                    a, p, i, clearTransform, transform;
                if (this.e === "all") {
                    s.cssText = "";
                    clearTransform = true;
                } else {
                    a = this.e.split(" ").join("").split(",");
                    i = a.length;
                    while (--i > -1) {
                        p = a[i];
                        if (_specialProps[p]) {
                            if (_specialProps[p].parse === transformParse) {
                                clearTransform = true;
                            } else {
                                p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
                            }
                        }
                        _removeProp(s, p);
                    }
                }
                if (clearTransform) {
                    _removeProp(s, _transformProp);
                    transform = this.t._gsTransform;
                    if (transform) {
                        if (transform.svg) {
                            this.t.removeAttribute("data-svg-origin");
                            this.t.removeAttribute("transform");
                        }
                        delete this.t._gsTransform;
                    }
                }

            }
        };
        _registerComplexSpecialProp("clearProps", {
            parser: function (t, e, p, cssp, pt) {
                pt = new CSSPropTween(t, p, 0, 0, pt, 2);
                pt.setRatio = _setClearPropsRatio;
                pt.e = e;
                pt.pr = -10;
                pt.data = cssp._tween;
                _hasPriority = true;
                return pt;
            }
        });

        p = "bezier,throwProps,physicsProps,physics2D".split(",");
        i = p.length;
        while (i--) {
            _registerPluginProp(p[i]);
        }


        p = CSSPlugin.prototype;
        p._firstPT = p._lastParsedTransform = p._transform = null;

        //gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
        p._onInitTween = function (target, vars, tween, index) {
            if (!target.nodeType) { //css is only for dom elements
                return false;
            }
            this._target = _target = target;
            this._tween = tween;
            this._vars = vars;
            _index = index;
            _autoRound = vars.autoRound;
            _hasPriority = false;
            _suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
            _cs = _getComputedStyle(target, "");
            _overwriteProps = this._overwriteProps;
            var style = target.style,
                v, pt, pt2, first, last, next, zIndex, tpt, threeD;
            if (_reqSafariFix) if (style.zIndex === "") {
                v = _getStyle(target, "zIndex", _cs);
                if (v === "auto" || v === "") {
                    //corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
                    this._addLazySet(style, "zIndex", 0);
                }
            }

            if (typeof (vars) === "string") {
                first = style.cssText;
                v = _getAllStyles(target, _cs);
                style.cssText = first + ";" + vars;
                v = _cssDif(target, v, _getAllStyles(target)).difs;
                if (!_supportsOpacity && _opacityValExp.test(vars)) {
                    v.opacity = parseFloat(RegExp.$1);
                }
                vars = v;
                style.cssText = first;
            }

            if (vars.className) { //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
                this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
            } else {
                this._firstPT = pt = this.parse(target, vars, null);
            }

            if (this._transformType) {
                threeD = (this._transformType === 3);
                if (!_transformProp) {
                    style.zoom = 1; //helps correct an IE issue.
                } else if (_isSafari) {
                    _reqSafariFix = true;
                    //if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
                    if (style.zIndex === "") {
                        zIndex = _getStyle(target, "zIndex", _cs);
                        if (zIndex === "auto" || zIndex === "") {
                            this._addLazySet(style, "zIndex", 0);
                        }
                    }
                    //Setting WebkitBackfaceVisibility corrects 3 bugs:
                    // 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
                    // 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
                    // 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
                    //Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
                    if (_isSafariLT6) {
                        this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
                    }
                }
                pt2 = pt;
                while (pt2 && pt2._next) {
                    pt2 = pt2._next;
                }
                tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
                this._linkCSSP(tpt, null, pt2);
                tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
                tpt.data = this._transform || _getTransform(target, _cs, true);
                tpt.tween = tween;
                tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
                _overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
            }

            if (_hasPriority) {
                //reorders the linked list in order of pr (priority)
                while (pt) {
                    next = pt._next;
                    pt2 = first;
                    while (pt2 && pt2.pr > pt.pr) {
                        pt2 = pt2._next;
                    }
                    if ((pt._prev = pt2 ? pt2._prev : last)) {
                        pt._prev._next = pt;
                    } else {
                        first = pt;
                    }
                    if ((pt._next = pt2)) {
                        pt2._prev = pt;
                    } else {
                        last = pt;
                    }
                    pt = next;
                }
                this._firstPT = first;
            }
            return true;
        };


        p.parse = function (target, vars, pt, plugin) {
            var style = target.style,
                p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
            for (p in vars) {
                es = vars[p]; //ending value string
                sp = _specialProps[p]; //SpecialProp lookup.
                if (typeof (es) === "function" && !(sp && sp.allowFunc)) {
                    es = es(_index, _target);
                }
                if (sp) {
                    pt = sp.parse(target, es, p, this, pt, plugin, vars);
                } else if (p.substr(0, 2) === "--") { //for tweening CSS variables (which always start with "--"). To maximize performance and simplicity, we bypass CSSPlugin altogether and just add a normal property tween to the tween instance itself.
                    this._tween._propLookup[p] = this._addTween.call(this._tween, target.style, "setProperty", _getComputedStyle(target).getPropertyValue(p) + "", es + "", p, false, p);
                    continue;
                } else {
                    bs = _getStyle(target, p, _cs) + "";
                    isStr = (typeof (es) === "string");
                    if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
                        if (!isStr) {
                            es = _parseColor(es);
                            es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
                        }
                        pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

                    } else if (isStr && _complexExp.test(es)) {
                        pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

                    } else {
                        bn = parseFloat(bs);
                        bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

                        if (bs === "" || bs === "auto") {
                            if (p === "width" || p === "height") {
                                bn = _getDimension(target, p, _cs);
                                bsfx = "px";
                            } else if (p === "left" || p === "top") {
                                bn = _calculateOffset(target, p, _cs);
                                bsfx = "px";
                            } else {
                                bn = (p !== "opacity") ? 0 : 1;
                                bsfx = "";
                            }
                        }

                        rel = (isStr && es.charAt(1) === "=");
                        if (rel) {
                            en = parseInt(es.charAt(0) + "1", 10);
                            es = es.substr(2);
                            en *= parseFloat(es);
                            esfx = es.replace(_suffixExp, "");
                        } else {
                            en = parseFloat(es);
                            esfx = isStr ? es.replace(_suffixExp, "") : "";
                        }

                        if (esfx === "") {
                            esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
                        }

                        es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
                        //if the beginning/ending suffixes don't match, normalize them...
                        if (bsfx !== esfx) if (esfx !== "" || p === "lineHeight") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
                            bn = _convertToPixels(target, p, bn, bsfx);
                            if (esfx === "%") {
                                bn /= _convertToPixels(target, p, 100, "%") / 100;
                                if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
                                    bs = bn + "%";
                                }

                            } else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
                                bn /= _convertToPixels(target, p, 1, esfx);

                                //otherwise convert to pixels.
                            } else if (esfx !== "px") {
                                en = _convertToPixels(target, p, en, esfx);
                                esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
                            }
                            if (rel) if (en || en === 0) {
                                es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
                            }
                        }

                        if (rel) {
                            en += bn;
                        }

                        if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
                            pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
                            pt.xs0 = esfx;
                            //DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
                        } else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
                            _log("invalid " + p + " tween value: " + vars[p]);
                        } else {
                            pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
                            pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
                            //DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
                        }
                    }
                }
                if (plugin) if (pt && !pt.plugin) {
                    pt.plugin = plugin;
                }
            }
            return pt;
        };


        //gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
        p.setRatio = function (v) {
            var pt = this._firstPT,
                min = 0.000001,
                val, str, i;
            //at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
            if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
                while (pt) {
                    if (pt.type !== 2) {
                        if (pt.r && pt.type !== -1) {
                            val = pt.r(pt.s + pt.c);
                            if (!pt.type) {
                                pt.t[pt.p] = val + pt.xs0;
                            } else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
                                i = pt.l;
                                str = pt.xs0 + val + pt.xs1;
                                for (i = 1; i < pt.l; i++) {
                                    str += pt["xn" + i] + pt["xs" + (i + 1)];
                                }
                                pt.t[pt.p] = str;
                            }
                        } else {
                            pt.t[pt.p] = pt.e;
                        }
                    } else {
                        pt.setRatio(v);
                    }
                    pt = pt._next;
                }

            } else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
                while (pt) {
                    val = pt.c * v + pt.s;
                    if (pt.r) {
                        val = pt.r(val);
                    } else if (val < min) if (val > -min) {
                        val = 0;
                    }
                    if (!pt.type) {
                        pt.t[pt.p] = val + pt.xs0;
                    } else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
                        i = pt.l;
                        if (i === 2) {
                            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
                        } else if (i === 3) {
                            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
                        } else if (i === 4) {
                            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
                        } else if (i === 5) {
                            pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
                        } else {
                            str = pt.xs0 + val + pt.xs1;
                            for (i = 1; i < pt.l; i++) {
                                str += pt["xn" + i] + pt["xs" + (i + 1)];
                            }
                            pt.t[pt.p] = str;
                        }

                    } else if (pt.type === -1) { //non-tweening value
                        pt.t[pt.p] = pt.xs0;

                    } else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
                        pt.setRatio(v);
                    }
                    pt = pt._next;
                }

                //if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
            } else {
                while (pt) {
                    if (pt.type !== 2) {
                        pt.t[pt.p] = pt.b;
                    } else {
                        pt.setRatio(v);
                    }
                    pt = pt._next;
                }
            }
        };

        /**
         * @private
         * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
         * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
         * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
         * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
         * doesn't have any transform-related properties of its own. You can call this method as many times as you
         * want and it won't create duplicate CSSPropTweens.
         *
         * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
         */
        p._enableTransforms = function (threeD) {
            this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
            this._transformType = (!(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3)) ? 3 : 2;
        };

        var lazySet = function (v) {
            this.t[this.p] = this.e;
            this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
        };
        /** @private Gives us a way to set a value on the first render (and only the first render). **/
        p._addLazySet = function (t, p, v) {
            var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
            pt.e = v;
            pt.setRatio = lazySet;
            pt.data = this;
        };

        /** @private **/
        p._linkCSSP = function (pt, next, prev, remove) {
            if (pt) {
                if (next) {
                    next._prev = pt;
                }
                if (pt._next) {
                    pt._next._prev = pt._prev;
                }
                if (pt._prev) {
                    pt._prev._next = pt._next;
                } else if (this._firstPT === pt) {
                    this._firstPT = pt._next;
                    remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
                }
                if (prev) {
                    prev._next = pt;
                } else if (!remove && this._firstPT === null) {
                    this._firstPT = pt;
                }
                pt._next = next;
                pt._prev = prev;
            }
            return pt;
        };

        p._mod = function (lookup) {
            var pt = this._firstPT;
            while (pt) {
                if (typeof (lookup[pt.p]) === "function") { //only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally.
                    pt.r = lookup[pt.p];
                }
                pt = pt._next;
            }
        };

        //we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
        p._kill = function (lookup) {
            var copy = lookup,
                pt, p, xfirst;
            if (lookup.autoAlpha || lookup.alpha) {
                copy = {};
                for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
                    copy[p] = lookup[p];
                }
                copy.opacity = 1;
                if (copy.autoAlpha) {
                    copy.visibility = 1;
                }
            }
            if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
                xfirst = pt.xfirst;
                if (xfirst && xfirst._prev) {
                    this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
                } else if (xfirst === this._firstPT) {
                    this._firstPT = pt._next;
                }
                if (pt._next) {
                    this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
                }
                this._classNamePT = null;
            }
            pt = this._firstPT;
            while (pt) {
                if (pt.plugin && pt.plugin !== p && pt.plugin._kill) { //for plugins that are registered with CSSPlugin, we should notify them of the kill.
                    pt.plugin._kill(lookup);
                    p = pt.plugin;
                }
                pt = pt._next;
            }
            return TweenPlugin.prototype._kill.call(this, copy);
        };


        //used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
        var _getChildStyles = function (e, props, targets) {
            var children, i, child, type;
            if (e.slice) {
                i = e.length;
                while (--i > -1) {
                    _getChildStyles(e[i], props, targets);
                }
                return;
            }
            children = e.childNodes;
            i = children.length;
            while (--i > -1) {
                child = children[i];
                type = child.type;
                if (child.style) {
                    props.push(_getAllStyles(child));
                    if (targets) {
                        targets.push(child);
                    }
                }
                if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
                    _getChildStyles(child, props, targets);
                }
            }
        };

        /**
         * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
         * and then compares the style properties of all the target's child elements at the tween's start and end, and
         * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
         * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
         * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
         * is because it creates entirely new tweens that may have completely different targets than the original tween,
         * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
         * and it would create other problems. For example:
         *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
         *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
         *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
         *
         * @param {Object} target object to be tweened
         * @param {number} Duration in seconds (or frames for frames-based tweens)
         * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
         * @return {Array} An array of TweenLite instances
         */
        CSSPlugin.cascadeTo = function (target, duration, vars) {
            var tween = TweenLite.to(target, duration, vars),
                results = [tween],
                b = [],
                e = [],
                targets = [],
                _reservedProps = TweenLite._internals.reservedProps,
                i, difs, p, from;
            target = tween._targets || tween.target;
            _getChildStyles(target, b, targets);
            tween.render(duration, true, true);
            _getChildStyles(target, e);
            tween.render(0, true, true);
            tween._enabled(true);
            i = targets.length;
            while (--i > -1) {
                difs = _cssDif(targets[i], b[i], e[i]);
                if (difs.firstMPT) {
                    difs = difs.difs;
                    for (p in vars) {
                        if (_reservedProps[p]) {
                            difs[p] = vars[p];
                        }
                    }
                    from = {};
                    for (p in difs) {
                        from[p] = b[i][p];
                    }
                    results.push(TweenLite.fromTo(targets[i], duration, from, difs));
                }
            }
            return results;
        };

        TweenPlugin.activate([CSSPlugin]);
        return CSSPlugin;

    }, true);


    /*
 * ----------------------------------------------------------------
 * RoundPropsPlugin
 * ----------------------------------------------------------------
 */
    (function () {

        var RoundPropsPlugin = _gsScope._gsDefine.plugin({
                propName: "roundProps",
                version: "1.7.0",
                priority: -1,
                API: 2,

                //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
                init: function (target, value, tween) {
                    this._tween = tween;
                    return true;
                }

            }),
            _getRoundFunc = function (v) { //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
                var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1; //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed()
                return function (n) {
                    return ((Math.round(n / v) * v * p) | 0) / p;
                };
            },
            _roundLinkedList = function (node, mod) {
                while (node) {
                    if (!node.f && !node.blob) {
                        node.m = mod || Math.round;
                    }
                    node = node._next;
                }
            },
            p = RoundPropsPlugin.prototype;

        p._onInitAllProps = function () {
            var tween = this._tween,
                rp = tween.vars.roundProps,
                lookup = {},
                rpt = tween._propLookup.roundProps,
                pt, next, i, p;
            if (typeof (rp) === "object" && !rp.push) {
                for (p in rp) {
                    lookup[p] = _getRoundFunc(rp[p]);
                }
            } else {
                if (typeof (rp) === "string") {
                    rp = rp.split(",");
                }
                i = rp.length;
                while (--i > -1) {
                    lookup[rp[i]] = Math.round;
                }
            }

            for (p in lookup) {
                pt = tween._firstPT;
                while (pt) {
                    next = pt._next; //record here, because it may get removed
                    if (pt.pg) {
                        pt.t._mod(lookup);
                    } else if (pt.n === p) {
                        if (pt.f === 2 && pt.t) { //a blob (text containing multiple numeric values)
                            _roundLinkedList(pt.t._firstPT, lookup[p]);
                        } else {
                            this._add(pt.t, p, pt.s, pt.c, lookup[p]);
                            //remove from linked list
                            if (next) {
                                next._prev = pt._prev;
                            }
                            if (pt._prev) {
                                pt._prev._next = next;
                            } else if (tween._firstPT === pt) {
                                tween._firstPT = next;
                            }
                            pt._next = pt._prev = null;
                            tween._propLookup[p] = rpt;
                        }
                    }
                    pt = next;
                }
            }
            return false;
        };

        p._add = function (target, p, s, c, mod) {
            this._addTween(target, p, s, s + c, p, mod || Math.round);
            this._overwriteProps.push(p);
        };

    }());


    /*
 * ----------------------------------------------------------------
 * AttrPlugin
 * ----------------------------------------------------------------
 */

    (function () {

        _gsScope._gsDefine.plugin({
            propName: "attr",
            API: 2,
            version: "0.6.1",

            //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
            init: function (target, value, tween, index) {
                var p, end;
                if (typeof (target.setAttribute) !== "function") {
                    return false;
                }
                for (p in value) {
                    end = value[p];
                    if (typeof (end) === "function") {
                        end = end(index, target);
                    }
                    this._addTween(target, "setAttribute", target.getAttribute(p) + "", end + "", p, false, p);
                    this._overwriteProps.push(p);
                }
                return true;
            }

        });

    }());


    /*
 * ----------------------------------------------------------------
 * DirectionalRotationPlugin
 * ----------------------------------------------------------------
 */
    _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,

        //called when the tween renders for the first time. This is where initial values should be recorded and any setup routines should run.
        init: function (target, value, tween, index) {
            if (typeof (value) !== "object") {
                value = {rotation: value};
            }
            this.finals = {};
            var cap = (value.useRadians === true) ? Math.PI * 2 : 360,
                min = 0.000001,
                p, v, start, end, dif, split;
            for (p in value) {
                if (p !== "useRadians") {
                    end = value[p];
                    if (typeof (end) === "function") {
                        end = end(index, target);
                    }
                    split = (end + "").split("_");
                    v = split[0];
                    start = parseFloat((typeof (target[p]) !== "function") ? target[p] : target[((p.indexOf("set") || typeof (target["get" + p.substr(3)]) !== "function") ? p : "get" + p.substr(3))]());
                    end = this.finals[p] = (typeof (v) === "string" && v.charAt(1) === "=") ? start + parseInt(v.charAt(0) + "1", 10) * Number(v.substr(2)) : Number(v) || 0;
                    dif = end - start;
                    if (split.length) {
                        v = split.join("_");
                        if (v.indexOf("short") !== -1) {
                            dif = dif % cap;
                            if (dif !== dif % (cap / 2)) {
                                dif = (dif < 0) ? dif + cap : dif - cap;
                            }
                        }
                        if (v.indexOf("_cw") !== -1 && dif < 0) {
                            dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
                        } else if (v.indexOf("ccw") !== -1 && dif > 0) {
                            dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
                        }
                    }
                    if (dif > min || dif < -min) {
                        this._addTween(target, p, start, start + dif, p);
                        this._overwriteProps.push(p);
                    }
                }
            }
            return true;
        },

        //called each time the values should be updated, and the ratio gets passed as the only parameter (typically it's a value between 0 and 1, but it can exceed those when using an ease like Elastic.easeOut or Back.easeOut, etc.)
        set: function (ratio) {
            var pt;
            if (ratio !== 1) {
                this._super.setRatio.call(this, ratio);
            } else {
                pt = this._firstPT;
                while (pt) {
                    if (pt.f) {
                        pt.t[pt.p](this.finals[pt.p]);
                    } else {
                        pt.t[pt.p] = this.finals[pt.p];
                    }
                    pt = pt._next;
                }
            }
        }

    })._autoCSS = true;


    /*
 * ----------------------------------------------------------------
 * EasePack
 * ----------------------------------------------------------------
 */
    _gsScope._gsDefine("easing.Back", ["easing.Ease"], function (Ease) {

        var w = (_gsScope.GreenSockGlobals || _gsScope),
            gs = w.com.greensock,
            _2PI = Math.PI * 2,
            _HALF_PI = Math.PI / 2,
            _class = gs._class,
            _create = function (n, f) {
                var C = _class("easing." + n, function () {
                    }, true),
                    p = C.prototype = new Ease();
                p.constructor = C;
                p.getRatio = f;
                return C;
            },
            _easeReg = Ease.register || function () {
            }, //put an empty function in place just as a safety measure in case someone loads an OLD version of TweenLite.js where Ease.register doesn't exist.
            _wrap = function (name, EaseOut, EaseIn, EaseInOut, aliases) {
                var C = _class("easing." + name, {
                    easeOut: new EaseOut(),
                    easeIn: new EaseIn(),
                    easeInOut: new EaseInOut()
                }, true);
                _easeReg(C, name);
                return C;
            },
            EasePoint = function (time, value, next) {
                this.t = time;
                this.v = value;
                if (next) {
                    this.next = next;
                    next.prev = this;
                    this.c = next.v - value;
                    this.gap = next.t - time;
                }
            },

            //Back
            _createBack = function (n, f) {
                var C = _class("easing." + n, function (overshoot) {
                        this._p1 = (overshoot || overshoot === 0) ? overshoot : 1.70158;
                        this._p2 = this._p1 * 1.525;
                    }, true),
                    p = C.prototype = new Ease();
                p.constructor = C;
                p.getRatio = f;
                p.config = function (overshoot) {
                    return new C(overshoot);
                };
                return C;
            },

            Back = _wrap("Back",
                _createBack("BackOut", function (p) {
                    return ((p = p - 1) * p * ((this._p1 + 1) * p + this._p1) + 1);
                }),
                _createBack("BackIn", function (p) {
                    return p * p * ((this._p1 + 1) * p - this._p1);
                }),
                _createBack("BackInOut", function (p) {
                    return ((p *= 2) < 1) ? 0.5 * p * p * ((this._p2 + 1) * p - this._p2) : 0.5 * ((p -= 2) * p * ((this._p2 + 1) * p + this._p2) + 2);
                })
            ),


            //SlowMo
            SlowMo = _class("easing.SlowMo", function (linearRatio, power, yoyoMode) {
                power = (power || power === 0) ? power : 0.7;
                if (linearRatio == null) {
                    linearRatio = 0.7;
                } else if (linearRatio > 1) {
                    linearRatio = 1;
                }
                this._p = (linearRatio !== 1) ? power : 0;
                this._p1 = (1 - linearRatio) / 2;
                this._p2 = linearRatio;
                this._p3 = this._p1 + this._p2;
                this._calcEnd = (yoyoMode === true);
            }, true),
            p = SlowMo.prototype = new Ease(),
            SteppedEase, ExpoScaleEase, RoughEase, _createElastic;

        p.constructor = SlowMo;
        p.getRatio = function (p) {
            var r = p + (0.5 - p) * this._p;
            if (p < this._p1) {
                return this._calcEnd ? 1 - ((p = 1 - (p / this._p1)) * p) : r - ((p = 1 - (p / this._p1)) * p * p * p * r);
            } else if (p > this._p3) {
                return this._calcEnd ? (p === 1 ? 0 : 1 - (p = (p - this._p3) / this._p1) * p) : r + ((p - r) * (p = (p - this._p3) / this._p1) * p * p * p); //added p === 1 ? 0 to avoid floating point rounding errors from affecting the final value, like 1 - 0.7 = 0.30000000000000004 instead of 0.3
            }
            return this._calcEnd ? 1 : r;
        };
        SlowMo.ease = new SlowMo(0.7, 0.7);

        p.config = SlowMo.config = function (linearRatio, power, yoyoMode) {
            return new SlowMo(linearRatio, power, yoyoMode);
        };


        //SteppedEase
        SteppedEase = _class("easing.SteppedEase", function (steps, immediateStart) {
            steps = steps || 1;
            this._p1 = 1 / steps;
            this._p2 = steps + (immediateStart ? 0 : 1);
            this._p3 = immediateStart ? 1 : 0;
        }, true);
        p = SteppedEase.prototype = new Ease();
        p.constructor = SteppedEase;
        p.getRatio = function (p) {
            if (p < 0) {
                p = 0;
            } else if (p >= 1) {
                p = 0.999999999;
            }
            return (((this._p2 * p) | 0) + this._p3) * this._p1;
        };
        p.config = SteppedEase.config = function (steps, immediateStart) {
            return new SteppedEase(steps, immediateStart);
        };

        //ExpoScaleEase
        ExpoScaleEase = _class("easing.ExpoScaleEase", function (start, end, ease) {
            this._p1 = Math.log(end / start);
            this._p2 = end - start;
            this._p3 = start;
            this._ease = ease;
        }, true);
        p = ExpoScaleEase.prototype = new Ease();
        p.constructor = ExpoScaleEase;
        p.getRatio = function (p) {
            if (this._ease) {
                p = this._ease.getRatio(p);
            }
            return (this._p3 * Math.exp(this._p1 * p) - this._p3) / this._p2;
        };
        p.config = ExpoScaleEase.config = function (start, end, ease) {
            return new ExpoScaleEase(start, end, ease);
        };


        //RoughEase
        RoughEase = _class("easing.RoughEase", function (vars) {
            vars = vars || {};
            var taper = vars.taper || "none",
                a = [],
                cnt = 0,
                points = (vars.points || 20) | 0,
                i = points,
                randomize = (vars.randomize !== false),
                clamp = (vars.clamp === true),
                template = (vars.template instanceof Ease) ? vars.template : null,
                strength = (typeof (vars.strength) === "number") ? vars.strength * 0.4 : 0.4,
                x, y, bump, invX, obj, pnt;
            while (--i > -1) {
                x = randomize ? Math.random() : (1 / points) * i;
                y = template ? template.getRatio(x) : x;
                if (taper === "none") {
                    bump = strength;
                } else if (taper === "out") {
                    invX = 1 - x;
                    bump = invX * invX * strength;
                } else if (taper === "in") {
                    bump = x * x * strength;
                } else if (x < 0.5) {  //"both" (start)
                    invX = x * 2;
                    bump = invX * invX * 0.5 * strength;
                } else {				//"both" (end)
                    invX = (1 - x) * 2;
                    bump = invX * invX * 0.5 * strength;
                }
                if (randomize) {
                    y += (Math.random() * bump) - (bump * 0.5);
                } else if (i % 2) {
                    y += bump * 0.5;
                } else {
                    y -= bump * 0.5;
                }
                if (clamp) {
                    if (y > 1) {
                        y = 1;
                    } else if (y < 0) {
                        y = 0;
                    }
                }
                a[cnt++] = {x: x, y: y};
            }
            a.sort(function (a, b) {
                return a.x - b.x;
            });

            pnt = new EasePoint(1, 1, null);
            i = points;
            while (--i > -1) {
                obj = a[i];
                pnt = new EasePoint(obj.x, obj.y, pnt);
            }

            this._prev = new EasePoint(0, 0, (pnt.t !== 0) ? pnt : pnt.next);
        }, true);
        p = RoughEase.prototype = new Ease();
        p.constructor = RoughEase;
        p.getRatio = function (p) {
            var pnt = this._prev;
            if (p > pnt.t) {
                while (pnt.next && p >= pnt.t) {
                    pnt = pnt.next;
                }
                pnt = pnt.prev;
            } else {
                while (pnt.prev && p <= pnt.t) {
                    pnt = pnt.prev;
                }
            }
            this._prev = pnt;
            return (pnt.v + ((p - pnt.t) / pnt.gap) * pnt.c);
        };
        p.config = function (vars) {
            return new RoughEase(vars);
        };
        RoughEase.ease = new RoughEase();


        //Bounce
        _wrap("Bounce",
            _create("BounceOut", function (p) {
                if (p < 1 / 2.75) {
                    return 7.5625 * p * p;
                } else if (p < 2 / 2.75) {
                    return 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
                } else if (p < 2.5 / 2.75) {
                    return 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
                }
                return 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
            }),
            _create("BounceIn", function (p) {
                if ((p = 1 - p) < 1 / 2.75) {
                    return 1 - (7.5625 * p * p);
                } else if (p < 2 / 2.75) {
                    return 1 - (7.5625 * (p -= 1.5 / 2.75) * p + 0.75);
                } else if (p < 2.5 / 2.75) {
                    return 1 - (7.5625 * (p -= 2.25 / 2.75) * p + 0.9375);
                }
                return 1 - (7.5625 * (p -= 2.625 / 2.75) * p + 0.984375);
            }),
            _create("BounceInOut", function (p) {
                var invert = (p < 0.5);
                if (invert) {
                    p = 1 - (p * 2);
                } else {
                    p = (p * 2) - 1;
                }
                if (p < 1 / 2.75) {
                    p = 7.5625 * p * p;
                } else if (p < 2 / 2.75) {
                    p = 7.5625 * (p -= 1.5 / 2.75) * p + 0.75;
                } else if (p < 2.5 / 2.75) {
                    p = 7.5625 * (p -= 2.25 / 2.75) * p + 0.9375;
                } else {
                    p = 7.5625 * (p -= 2.625 / 2.75) * p + 0.984375;
                }
                return invert ? (1 - p) * 0.5 : p * 0.5 + 0.5;
            })
        );


        //CIRC
        _wrap("Circ",
            _create("CircOut", function (p) {
                return Math.sqrt(1 - (p = p - 1) * p);
            }),
            _create("CircIn", function (p) {
                return -(Math.sqrt(1 - (p * p)) - 1);
            }),
            _create("CircInOut", function (p) {
                return ((p *= 2) < 1) ? -0.5 * (Math.sqrt(1 - p * p) - 1) : 0.5 * (Math.sqrt(1 - (p -= 2) * p) + 1);
            })
        );


        //Elastic
        _createElastic = function (n, f, def) {
            var C = _class("easing." + n, function (amplitude, period) {
                    this._p1 = (amplitude >= 1) ? amplitude : 1; //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
                    this._p2 = (period || def) / (amplitude < 1 ? amplitude : 1);
                    this._p3 = this._p2 / _2PI * (Math.asin(1 / this._p1) || 0);
                    this._p2 = _2PI / this._p2; //precalculate to optimize
                }, true),
                p = C.prototype = new Ease();
            p.constructor = C;
            p.getRatio = f;
            p.config = function (amplitude, period) {
                return new C(amplitude, period);
            };
            return C;
        };
        _wrap("Elastic",
            _createElastic("ElasticOut", function (p) {
                return this._p1 * Math.pow(2, -10 * p) * Math.sin((p - this._p3) * this._p2) + 1;
            }, 0.3),
            _createElastic("ElasticIn", function (p) {
                return -(this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2));
            }, 0.3),
            _createElastic("ElasticInOut", function (p) {
                return ((p *= 2) < 1) ? -0.5 * (this._p1 * Math.pow(2, 10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (p -= 1)) * Math.sin((p - this._p3) * this._p2) * 0.5 + 1;
            }, 0.45)
        );


        //Expo
        _wrap("Expo",
            _create("ExpoOut", function (p) {
                return 1 - Math.pow(2, -10 * p);
            }),
            _create("ExpoIn", function (p) {
                return Math.pow(2, 10 * (p - 1)) - 0.001;
            }),
            _create("ExpoInOut", function (p) {
                return ((p *= 2) < 1) ? 0.5 * Math.pow(2, 10 * (p - 1)) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
            })
        );


        //Sine
        _wrap("Sine",
            _create("SineOut", function (p) {
                return Math.sin(p * _HALF_PI);
            }),
            _create("SineIn", function (p) {
                return -Math.cos(p * _HALF_PI) + 1;
            }),
            _create("SineInOut", function (p) {
                return -0.5 * (Math.cos(Math.PI * p) - 1);
            })
        );

        _class("easing.EaseLookup", {
            find: function (s) {
                return Ease.map[s];
            }
        }, true);

        //register the non-standard eases
        _easeReg(w.SlowMo, "SlowMo", "ease,");
        _easeReg(RoughEase, "RoughEase", "ease,");
        _easeReg(SteppedEase, "SteppedEase", "ease,");

        return Back;

    }, true);


});

if (_gsScope._gsDefine) {
    _gsScope._gsQueue.pop()();
} //necessary in case TweenLite was already loaded separately.


/*
 * ----------------------------------------------------------------
 * Base classes like TweenLite, SimpleTimeline, Ease, Ticker, etc.
 * ----------------------------------------------------------------
 */
(function (window, moduleName) {

    "use strict";
    var _exports = {},
        _doc = window.document,
        _globals = window.GreenSockGlobals = window.GreenSockGlobals || window,
        existingModule = _globals[moduleName];
    if (existingModule) {
        if (typeof (module) !== "undefined" && module.exports) { //node
            module.exports = existingModule;
        }
        return existingModule; //in case the core set of classes is already loaded, don't instantiate twice.
    }
    var _namespace = function (ns) {
            var a = ns.split("."),
                p = _globals, i;
            for (i = 0; i < a.length; i++) {
                p[a[i]] = p = p[a[i]] || {};
            }
            return p;
        },
        gs = _namespace("com.greensock"),
        _tinyNum = 0.00000001,
        _slice = function (a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
            var b = [],
                l = a.length,
                i;
            for (i = 0; i !== l; b.push(a[i++])) {
            }
            return b;
        },
        _emptyFunc = function () {
        },
        _isArray = (function () { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
            var toString = Object.prototype.toString,
                array = toString.call([]);
            return function (obj) {
                return obj != null && (obj instanceof Array || (typeof (obj) === "object" && !!obj.push && toString.call(obj) === array));
            };
        }()),
        a, i, p, _ticker, _tickerActive,
        _defLookup = {},

        /**
         * @constructor
         * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
         * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
         * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
         * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
         *
         * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
         * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
         * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
         * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
         * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
         * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
         * sandbox the banner one like:
         *
         * <script>
         *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
         * </script>
         * <script src="js/greensock/v1.7/TweenMax.js"></script>
         * <script>
         *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
         * </script>
         * <script src="js/greensock/v1.6/TweenMax.js"></script>
         * <script>
         *     gs.TweenLite.to(...); //would use v1.7
         *     TweenLite.to(...); //would use v1.6
         * </script>
         *
         * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
         * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
         * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
         * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
         */
        Definition = function (ns, dependencies, func, global) {
            this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
            _defLookup[ns] = this;
            this.gsClass = null;
            this.func = func;
            var _classes = [];
            this.check = function (init) {
                var i = dependencies.length,
                    missing = i,
                    cur, a, n, cl;
                while (--i > -1) {
                    if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
                        _classes[i] = cur.gsClass;
                        missing--;
                    } else if (init) {
                        cur.sc.push(this);
                    }
                }
                if (missing === 0 && func) {
                    a = ("com.greensock." + ns).split(".");
                    n = a.pop();
                    cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

                    //exports to multiple environments
                    if (global) {
                        _globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
                        if (typeof (module) !== "undefined" && module.exports) { //node
                            if (ns === moduleName) {
                                module.exports = _exports[moduleName] = cl;
                                for (i in _exports) {
                                    cl[i] = _exports[i];
                                }
                            } else if (_exports[moduleName]) {
                                _exports[moduleName][n] = cl;
                            }
                        } else if (typeof (define) === "function" && define.amd) { //AMD
                            define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function () {
                                return cl;
                            });
                        }
                    }
                    for (i = 0; i < this.sc.length; i++) {
                        this.sc[i].check();
                    }
                }
            };
            this.check(true);
        },

        //used to create Definition instances (which basically registers a class that has dependencies).
        _gsDefine = window._gsDefine = function (ns, dependencies, func, global) {
            return new Definition(ns, dependencies, func, global);
        },

        //a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
        _class = gs._class = function (ns, func, global) {
            func = func || function () {
            };
            _gsDefine(ns, [], function () {
                return func;
            }, global);
            return func;
        };

    _gsDefine.globals = _globals;


    /*
 * ----------------------------------------------------------------
 * Ease
 * ----------------------------------------------------------------
 */
    var _baseParams = [0, 0, 1, 1],
        Ease = _class("easing.Ease", function (func, extraParams, type, power) {
            this._func = func;
            this._type = type || 0;
            this._power = power || 0;
            this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
        }, true),
        _easeMap = Ease.map = {},
        _easeReg = Ease.register = function (ease, names, types, create) {
            var na = names.split(","),
                i = na.length,
                ta = (types || "easeIn,easeOut,easeInOut").split(","),
                e, name, j, type;
            while (--i > -1) {
                name = na[i];
                e = create ? _class("easing." + name, null, true) : gs.easing[name] || {};
                j = ta.length;
                while (--j > -1) {
                    type = ta[j];
                    _easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
                }
            }
        };

    p = Ease.prototype;
    p._calcEnd = false;
    p.getRatio = function (p) {
        if (this._func) {
            this._params[0] = p;
            return this._func.apply(null, this._params);
        }
        var t = this._type,
            pw = this._power,
            r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
        if (pw === 1) {
            r *= r;
        } else if (pw === 2) {
            r *= r * r;
        } else if (pw === 3) {
            r *= r * r * r;
        } else if (pw === 4) {
            r *= r * r * r * r;
        }
        return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
    };

    //create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
    a = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"];
    i = a.length;
    while (--i > -1) {
        p = a[i] + ",Power" + i;
        _easeReg(new Ease(null, null, 1, i), p, "easeOut", true);
        _easeReg(new Ease(null, null, 2, i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
        _easeReg(new Ease(null, null, 3, i), p, "easeInOut");
    }
    _easeMap.linear = gs.easing.Linear.easeIn;
    _easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


    /*
 * ----------------------------------------------------------------
 * EventDispatcher
 * ----------------------------------------------------------------
 */
    var EventDispatcher = _class("events.EventDispatcher", function (target) {
        this._listeners = {};
        this._eventTarget = target || this;
    });
    p = EventDispatcher.prototype;

    p.addEventListener = function (type, callback, scope, useParam, priority) {
        priority = priority || 0;
        var list = this._listeners[type],
            index = 0,
            listener, i;
        if (this === _ticker && !_tickerActive) {
            _ticker.wake();
        }
        if (list == null) {
            this._listeners[type] = list = [];
        }
        i = list.length;
        while (--i > -1) {
            listener = list[i];
            if (listener.c === callback && listener.s === scope) {
                list.splice(i, 1);
            } else if (index === 0 && listener.pr < priority) {
                index = i + 1;
            }
        }
        list.splice(index, 0, {c: callback, s: scope, up: useParam, pr: priority});
    };

    p.removeEventListener = function (type, callback) {
        var list = this._listeners[type], i;
        if (list) {
            i = list.length;
            while (--i > -1) {
                if (list[i].c === callback) {
                    list.splice(i, 1);
                    return;
                }
            }
        }
    };

    p.dispatchEvent = function (type) {
        var list = this._listeners[type],
            i, t, listener;
        if (list) {
            i = list.length;
            if (i > 1) {
                list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
            }
            t = this._eventTarget;
            while (--i > -1) {
                listener = list[i];
                if (listener) {
                    if (listener.up) {
                        listener.c.call(listener.s || t, {type: type, target: t});
                    } else {
                        listener.c.call(listener.s || t);
                    }
                }
            }
        }
    };


    /*
 * ----------------------------------------------------------------
 * Ticker
 * ----------------------------------------------------------------
 */
    var _reqAnimFrame = window.requestAnimationFrame,
        _cancelAnimFrame = window.cancelAnimationFrame,
        _getTime = Date.now || function () {
            return new Date().getTime();
        },
        _lastUpdate = _getTime();

    //now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
    a = ["ms", "moz", "webkit", "o"];
    i = a.length;
    while (--i > -1 && !_reqAnimFrame) {
        _reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
        _cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
    }

    _class("Ticker", function (fps, useRAF) {
        var _self = this,
            _startTime = _getTime(),
            _useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
            _lagThreshold = 500,
            _adjustedLag = 33,
            _tickWord = "tick", //helps reduce gc burden
            _fps, _req, _id, _gap, _nextTime,
            _tick = function (manual) {
                var elapsed = _getTime() - _lastUpdate,
                    overlap, dispatch;
                if (elapsed > _lagThreshold) {
                    _startTime += elapsed - _adjustedLag;
                }
                _lastUpdate += elapsed;
                _self.time = (_lastUpdate - _startTime) / 1000;
                overlap = _self.time - _nextTime;
                if (!_fps || overlap > 0 || manual === true) {
                    _self.frame++;
                    _nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
                    dispatch = true;
                }
                if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
                    _id = _req(_tick);
                }
                if (dispatch) {
                    _self.dispatchEvent(_tickWord);
                }
            };

        EventDispatcher.call(_self);
        _self.time = _self.frame = 0;
        _self.tick = function () {
            _tick(true);
        };

        _self.lagSmoothing = function (threshold, adjustedLag) {
            if (!arguments.length) { //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
                return (_lagThreshold < 1 / _tinyNum);
            }
            _lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
            _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
        };

        _self.sleep = function () {
            if (_id == null) {
                return;
            }
            if (!_useRAF || !_cancelAnimFrame) {
                clearTimeout(_id);
            } else {
                _cancelAnimFrame(_id);
            }
            _req = _emptyFunc;
            _id = null;
            if (_self === _ticker) {
                _tickerActive = false;
            }
        };

        _self.wake = function (seamless) {
            if (_id !== null) {
                _self.sleep();
            } else if (seamless) {
                _startTime += -_lastUpdate + (_lastUpdate = _getTime());
            } else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
                _lastUpdate = _getTime() - _lagThreshold + 5;
            }
            _req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function (f) {
                return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0);
            } : _reqAnimFrame;
            if (_self === _ticker) {
                _tickerActive = true;
            }
            _tick(2);
        };

        _self.fps = function (value) {
            if (!arguments.length) {
                return _fps;
            }
            _fps = value;
            _gap = 1 / (_fps || 60);
            _nextTime = this.time + _gap;
            _self.wake();
        };

        _self.useRAF = function (value) {
            if (!arguments.length) {
                return _useRAF;
            }
            _self.sleep();
            _useRAF = value;
            _self.fps(_fps);
        };
        _self.fps(fps);

        //a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
        setTimeout(function () {
            if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
                _self.useRAF(false);
            }
        }, 1500);
    });

    p = gs.Ticker.prototype = new gs.events.EventDispatcher();
    p.constructor = gs.Ticker;


    /*
 * ----------------------------------------------------------------
 * Animation
 * ----------------------------------------------------------------
 */
    var Animation = _class("core.Animation", function (duration, vars) {
        this.vars = vars = vars || {};
        this._duration = this._totalDuration = duration || 0;
        this._delay = Number(vars.delay) || 0;
        this._timeScale = 1;
        this._active = !!vars.immediateRender;
        this.data = vars.data;
        this._reversed = !!vars.reversed;

        if (!_rootTimeline) {
            return;
        }
        if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
            _ticker.wake();
        }

        var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
        tl.add(this, tl._time);

        if (this.vars.paused) {
            this.paused(true);
        }
    });

    _ticker = Animation.ticker = new gs.Ticker();
    p = Animation.prototype;
    p._dirty = p._gc = p._initted = p._paused = false;
    p._totalTime = p._time = 0;
    p._rawPrevTime = -1;
    p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
    p._paused = false;


    //some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
    var _checkTimeout = function () {
        if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) { //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
            _ticker.wake();
        }
        var t = setTimeout(_checkTimeout, 2000);
        if (t.unref) {
            // allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
            t.unref();
        }
    };
    _checkTimeout();


    p.play = function (from, suppressEvents) {
        if (from != null) {
            this.seek(from, suppressEvents);
        }
        return this.reversed(false).paused(false);
    };

    p.pause = function (atTime, suppressEvents) {
        if (atTime != null) {
            this.seek(atTime, suppressEvents);
        }
        return this.paused(true);
    };

    p.resume = function (from, suppressEvents) {
        if (from != null) {
            this.seek(from, suppressEvents);
        }
        return this.paused(false);
    };

    p.seek = function (time, suppressEvents) {
        return this.totalTime(Number(time), suppressEvents !== false);
    };

    p.restart = function (includeDelay, suppressEvents) {
        return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
    };

    p.reverse = function (from, suppressEvents) {
        if (from != null) {
            this.seek((from || this.totalDuration()), suppressEvents);
        }
        return this.reversed(true).paused(false);
    };

    p.render = function (time, suppressEvents, force) {
        //stub - we override this method in subclasses.
    };

    p.invalidate = function () {
        this._time = this._totalTime = 0;
        this._initted = this._gc = false;
        this._rawPrevTime = -1;
        if (this._gc || !this.timeline) {
            this._enabled(true);
        }
        return this;
    };

    p.isActive = function () {
        var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
            startTime = this._startTime,
            rawTime;
        return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - _tinyNum));
    };

    p._enabled = function (enabled, ignoreTimeline) {
        if (!_tickerActive) {
            _ticker.wake();
        }
        this._gc = !enabled;
        this._active = this.isActive();
        if (ignoreTimeline !== true) {
            if (enabled && !this.timeline) {
                this._timeline.add(this, this._startTime - this._delay);
            } else if (!enabled && this.timeline) {
                this._timeline._remove(this, true);
            }
        }
        return false;
    };


    p._kill = function (vars, target) {
        return this._enabled(false, false);
    };

    p.kill = function (vars, target) {
        this._kill(vars, target);
        return this;
    };

    p._uncache = function (includeSelf) {
        var tween = includeSelf ? this : this.timeline;
        while (tween) {
            tween._dirty = true;
            tween = tween.timeline;
        }
        return this;
    };

    p._swapSelfInParams = function (params) {
        var i = params.length,
            copy = params.concat();
        while (--i > -1) {
            if (params[i] === "{self}") {
                copy[i] = this;
            }
        }
        return copy;
    };

    p._callback = function (type) {
        var v = this.vars,
            callback = v[type],
            params = v[type + "Params"],
            scope = v[type + "Scope"] || v.callbackScope || this,
            l = params ? params.length : 0;
        switch (l) { //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
            case 0:
                callback.call(scope);
                break;
            case 1:
                callback.call(scope, params[0]);
                break;
            case 2:
                callback.call(scope, params[0], params[1]);
                break;
            default:
                callback.apply(scope, params);
        }
    };

//----Animation getters/setters --------------------------------------------------------

    p.eventCallback = function (type, callback, params, scope) {
        if ((type || "").substr(0, 2) === "on") {
            var v = this.vars;
            if (arguments.length === 1) {
                return v[type];
            }
            if (callback == null) {
                delete v[type];
            } else {
                v[type] = callback;
                v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
                v[type + "Scope"] = scope;
            }
            if (type === "onUpdate") {
                this._onUpdate = callback;
            }
        }
        return this;
    };

    p.delay = function (value) {
        if (!arguments.length) {
            return this._delay;
        }
        if (this._timeline.smoothChildTiming) {
            this.startTime(this._startTime + value - this._delay);
        }
        this._delay = value;
        return this;
    };

    p.duration = function (value) {
        if (!arguments.length) {
            this._dirty = false;
            return this._duration;
        }
        this._duration = this._totalDuration = value;
        this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
        if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
            this.totalTime(this._totalTime * (value / this._duration), true);
        }
        return this;
    };

    p.totalDuration = function (value) {
        this._dirty = false;
        return (!arguments.length) ? this._totalDuration : this.duration(value);
    };

    p.time = function (value, suppressEvents) {
        if (!arguments.length) {
            return this._time;
        }
        if (this._dirty) {
            this.totalDuration();
        }
        return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
    };

    p.totalTime = function (time, suppressEvents, uncapped) {
        if (!_tickerActive) {
            _ticker.wake();
        }
        if (!arguments.length) {
            return this._totalTime;
        }
        if (this._timeline) {
            if (time < 0 && !uncapped) {
                time += this.totalDuration();
            }
            if (this._timeline.smoothChildTiming) {
                if (this._dirty) {
                    this.totalDuration();
                }
                var totalDuration = this._totalDuration,
                    tl = this._timeline;
                if (time > totalDuration && !uncapped) {
                    time = totalDuration;
                }
                this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
                if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
                    this._uncache(false);
                }
                //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
                if (tl._timeline) {
                    while (tl._timeline) {
                        if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
                            tl.totalTime(tl._totalTime, true);
                        }
                        tl = tl._timeline;
                    }
                }
            }
            if (this._gc) {
                this._enabled(true, false);
            }
            if (this._totalTime !== time || this._duration === 0) {
                if (_lazyTweens.length) {
                    _lazyRender();
                }
                this.render(time, suppressEvents, false);
                if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
                    _lazyRender();
                }
            }
        }
        return this;
    };

    p.progress = p.totalProgress = function (value, suppressEvents) {
        var duration = this.duration();
        return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
    };

    p.startTime = function (value) {
        if (!arguments.length) {
            return this._startTime;
        }
        if (value !== this._startTime) {
            this._startTime = value;
            if (this.timeline) if (this.timeline._sortChildren) {
                this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
            }
        }
        return this;
    };

    p.endTime = function (includeRepeats) {
        return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
    };

    p.timeScale = function (value) {
        if (!arguments.length) {
            return this._timeScale;
        }
        var pauseTime, t;
        value = value || _tinyNum; //can't allow zero because it'll throw the math off
        if (this._timeline && this._timeline.smoothChildTiming) {
            pauseTime = this._pauseTime;
            t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
            this._startTime = t - ((t - this._startTime) * this._timeScale / value);
        }
        this._timeScale = value;
        t = this.timeline;
        while (t && t.timeline) { //must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
            t._dirty = true;
            t.totalDuration();
            t = t.timeline;
        }
        return this;
    };

    p.reversed = function (value) {
        if (!arguments.length) {
            return this._reversed;
        }
        if (value != this._reversed) {
            this._reversed = value;
            this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
        }
        return this;
    };

    p.paused = function (value) {
        if (!arguments.length) {
            return this._paused;
        }
        var tl = this._timeline,
            raw, elapsed;
        if (value != this._paused) if (tl) {
            if (!_tickerActive && !value) {
                _ticker.wake();
            }
            raw = tl.rawTime();
            elapsed = raw - this._pauseTime;
            if (!value && tl.smoothChildTiming) {
                this._startTime += elapsed;
                this._uncache(false);
            }
            this._pauseTime = value ? raw : null;
            this._paused = value;
            this._active = this.isActive();
            if (!value && elapsed !== 0 && this._initted && this.duration()) {
                raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
                this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
            }
        }
        if (this._gc && !value) {
            this._enabled(true, false);
        }
        return this;
    };


    /*
 * ----------------------------------------------------------------
 * SimpleTimeline
 * ----------------------------------------------------------------
 */
    var SimpleTimeline = _class("core.SimpleTimeline", function (vars) {
        Animation.call(this, 0, vars);
        this.autoRemoveChildren = this.smoothChildTiming = true;
    });

    p = SimpleTimeline.prototype = new Animation();
    p.constructor = SimpleTimeline;
    p.kill()._gc = false;
    p._first = p._last = p._recent = null;
    p._sortChildren = false;

    p.add = p.insert = function (child, position, align, stagger) {
        var prevTween, st;
        child._startTime = Number(position || 0) + child._delay;
        if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
            child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
        }
        if (child.timeline) {
            child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
        }
        child.timeline = child._timeline = this;
        if (child._gc) {
            child._enabled(true, true);
        }
        prevTween = this._last;
        if (this._sortChildren) {
            st = child._startTime;
            while (prevTween && prevTween._startTime > st) {
                prevTween = prevTween._prev;
            }
        }
        if (prevTween) {
            child._next = prevTween._next;
            prevTween._next = child;
        } else {
            child._next = this._first;
            this._first = child;
        }
        if (child._next) {
            child._next._prev = child;
        } else {
            this._last = child;
        }
        child._prev = prevTween;
        this._recent = child;
        if (this._timeline) {
            this._uncache(true);
        }
        return this;
    };

    p._remove = function (tween, skipDisable) {
        if (tween.timeline === this) {
            if (!skipDisable) {
                tween._enabled(false, true);
            }

            if (tween._prev) {
                tween._prev._next = tween._next;
            } else if (this._first === tween) {
                this._first = tween._next;
            }
            if (tween._next) {
                tween._next._prev = tween._prev;
            } else if (this._last === tween) {
                this._last = tween._prev;
            }
            tween._next = tween._prev = tween.timeline = null;
            if (tween === this._recent) {
                this._recent = this._last;
            }

            if (this._timeline) {
                this._uncache(true);
            }
        }
        return this;
    };

    p.render = function (time, suppressEvents, force) {
        var tween = this._first,
            next;
        this._totalTime = this._time = this._rawPrevTime = time;
        while (tween) {
            next = tween._next; //record it here because the value could change after rendering...
            if (tween._active || (time >= tween._startTime && !tween._paused && !tween._gc)) {
                if (!tween._reversed) {
                    tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
                } else {
                    tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
                }
            }
            tween = next;
        }
    };

    p.rawTime = function () {
        if (!_tickerActive) {
            _ticker.wake();
        }
        return this._totalTime;
    };

    /*
 * ----------------------------------------------------------------
 * TweenLite
 * ----------------------------------------------------------------
 */
    var TweenLite = _class("TweenLite", function (target, duration, vars) {
            Animation.call(this, duration, vars);
            this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

            if (target == null) {
                throw "Cannot tween a null target.";
            }

            this.target = target = (typeof (target) !== "string") ? target : TweenLite.selector(target) || target;

            var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
                overwrite = this.vars.overwrite,
                i, targ, targets;

            this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof (overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

            if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof (target[0]) !== "number") {
                this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
                this._propLookup = [];
                this._siblings = [];
                for (i = 0; i < targets.length; i++) {
                    targ = targets[i];
                    if (!targ) {
                        targets.splice(i--, 1);
                        continue;
                    } else if (typeof (targ) === "string") {
                        targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
                        if (typeof (targ) === "string") {
                            targets.splice(i + 1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
                        }
                        continue;
                    } else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
                        targets.splice(i--, 1);
                        this._targets = targets = targets.concat(_slice(targ));
                        continue;
                    }
                    this._siblings[i] = _register(targ, this, false);
                    if (overwrite === 1) if (this._siblings[i].length > 1) {
                        _applyOverwrite(targ, this, null, 1, this._siblings[i]);
                    }
                }

            } else {
                this._propLookup = {};
                this._siblings = _register(target, this, false);
                if (overwrite === 1) if (this._siblings.length > 1) {
                    _applyOverwrite(target, this, null, 1, this._siblings);
                }
            }
            if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
                this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
                this.render(Math.min(0, -this._delay)); //in case delay is negative
            }
        }, true),
        _isSelector = function (v) {
            return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
        },
        _autoCSS = function (vars, target) {
            var css = {},
                p;
            for (p in vars) {
                if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
                    css[p] = vars[p];
                    delete vars[p];
                }
            }
            vars.css = css;
        };

    p = TweenLite.prototype = new Animation();
    p.constructor = TweenLite;
    p.kill()._gc = false;

//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

    p.ratio = 0;
    p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
    p._notifyPluginsOfEnabled = p._lazy = false;

    TweenLite.version = "2.1.2";
    TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
    TweenLite.defaultOverwrite = "auto";
    TweenLite.ticker = _ticker;
    TweenLite.autoSleep = 120;
    TweenLite.lagSmoothing = function (threshold, adjustedLag) {
        _ticker.lagSmoothing(threshold, adjustedLag);
    };

    TweenLite.selector = window.$ || window.jQuery || function (e) {
        var selector = window.$ || window.jQuery;
        if (selector) {
            TweenLite.selector = selector;
            return selector(e);
        }
        if (!_doc) { //in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
            _doc = window.document;
        }
        return (!_doc) ? e : (_doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
    };

    var _lazyTweens = [],
        _lazyLookup = {},
        _numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
        _relExp = /[\+-]=-?[\.\d]/,
        //_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
        _setRatio = function (v) {
            var pt = this._firstPT,
                min = 0.000001,
                val;
            while (pt) {
                val = !pt.blob ? pt.c * v + pt.s : (v === 1 && this.end != null) ? this.end : v ? this.join("") : this.start;
                if (pt.m) {
                    val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
                } else if (val < min) if (val > -min && !pt.blob) { //prevents issues with converting very small numbers to strings in the browser
                    val = 0;
                }
                if (!pt.f) {
                    pt.t[pt.p] = val;
                } else if (pt.fp) {
                    pt.t[pt.p](pt.fp, val);
                } else {
                    pt.t[pt.p](val);
                }
                pt = pt._next;
            }
        },
        _blobRound = function (v) {
            return (((v * 1000) | 0) / 1000) + "";
        },
        //compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
        _blobDif = function (start, end, filter, pt) {
            var a = [],
                charIndex = 0,
                s = "",
                color = 0,
                startNums, endNums, num, i, l, nonNumbers, currentNum;
            a.start = start;
            a.end = end;
            start = a[0] = start + ""; //ensure values are strings
            end = a[1] = end + "";
            if (filter) {
                filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
                start = a[0];
                end = a[1];
            }
            a.length = 0;
            startNums = start.match(_numbersExp) || [];
            endNums = end.match(_numbersExp) || [];
            if (pt) {
                pt._next = null;
                pt.blob = 1;
                a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
            }
            l = endNums.length;
            for (i = 0; i < l; i++) {
                currentNum = endNums[i];
                nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex) - charIndex);
                s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                charIndex += nonNumbers.length;
                if (color) { //sense rgba() values and round them.
                    color = (color + 1) % 5;
                } else if (nonNumbers.substr(-5) === "rgba(") {
                    color = 1;
                }
                if (currentNum === startNums[i] || startNums.length <= i) {
                    s += currentNum;
                } else {
                    if (s) {
                        a.push(s);
                        s = "";
                    }
                    num = parseFloat(startNums[i]);
                    a.push(num);
                    a._firstPT = {
                        _next: a._firstPT,
                        t: a,
                        p: a.length - 1,
                        s: num,
                        c: ((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0,
                        f: 0,
                        m: (color && color < 4) ? Math.round : _blobRound
                    }; //limiting to 3 decimal places and casting as a string can really help performance when array.join() is called!
                    //note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
                }
                charIndex += currentNum.length;
            }
            s += end.substr(charIndex);
            if (s) {
                a.push(s);
            }
            a.setRatio = _setRatio;
            if (_relExp.test(end)) { //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
                a.end = null;
            }
            return a;
        },
        //note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
        _addPropTween = function (target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
            if (typeof (end) === "function") {
                end = end(index || 0, target);
            }
            var type = typeof (target[prop]),
                getterName = (type !== "function") ? "" : ((prop.indexOf("set") || typeof (target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3)),
                s = (start !== "get") ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
                isRelative = (typeof (end) === "string" && end.charAt(1) === "="),
                pt = {
                    t: target,
                    p: prop,
                    s: s,
                    f: (type === "function"),
                    pg: 0,
                    n: overwriteProp || prop,
                    m: (!mod ? 0 : (typeof (mod) === "function") ? mod : Math.round),
                    pr: 0,
                    c: isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0
                },
                blob;

            if (typeof (s) !== "number" || (typeof (end) !== "number" && !isRelative)) {
                if (funcParam || isNaN(s) || (!isRelative && isNaN(end)) || typeof (s) === "boolean" || typeof (end) === "boolean") {
                    //a blob (string that has multiple numbers in it)
                    pt.fp = funcParam;
                    blob = _blobDif(s, (isRelative ? (parseFloat(pt.s) + pt.c) + (pt.s + "").replace(/[0-9\-\.]/g, "") : end), stringFilter || TweenLite.defaultStringFilter, pt);
                    pt = {t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
                } else {
                    pt.s = parseFloat(s);
                    if (!isRelative) {
                        pt.c = (parseFloat(end) - pt.s) || 0;
                    }
                }
            }
            if (pt.c) { //only add it to the linked list if there's a change.
                if ((pt._next = this._firstPT)) {
                    pt._next._prev = pt;
                }
                this._firstPT = pt;
                return pt;
            }
        },
        _internals = TweenLite._internals = {
            isArray: _isArray,
            isSelector: _isSelector,
            lazyTweens: _lazyTweens,
            blobDif: _blobDif
        }, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
        _plugins = TweenLite._plugins = {},
        _tweenLookup = _internals.tweenLookup = {},
        _tweenLookupNum = 0,
        _reservedProps = _internals.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1,
            yoyoEase: 1,
            stagger: 1
        },
        _overwriteLookup = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            "true": 1,
            "false": 0
        },
        _rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
        _rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
        _nextGCFrame = 30,
        _lazyRender = _internals.lazyRender = function () {
            var l = _lazyTweens.length,
                i, tween;
            _lazyLookup = {};
            for (i = 0; i < l; i++) {
                tween = _lazyTweens[i];
                if (tween && tween._lazy !== false) {
                    tween.render(tween._lazy[0], tween._lazy[1], true);
                    tween._lazy = false;
                }
            }
            _lazyTweens.length = 0;
        };

    _rootTimeline._startTime = _ticker.time;
    _rootFramesTimeline._startTime = _ticker.frame;
    _rootTimeline._active = _rootFramesTimeline._active = true;
    setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

    Animation._updateRoot = TweenLite.render = function () {
        var i, a, p;
        if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
            _lazyRender();
        }
        _rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
        _rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
        if (_lazyTweens.length) {
            _lazyRender();
        }
        if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
            _nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
            for (p in _tweenLookup) {
                a = _tweenLookup[p].tweens;
                i = a.length;
                while (--i > -1) {
                    if (a[i]._gc) {
                        a.splice(i, 1);
                    }
                }
                if (a.length === 0) {
                    delete _tweenLookup[p];
                }
            }
            //if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
            p = _rootTimeline._first;
            if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
                while (p && p._paused) {
                    p = p._next;
                }
                if (!p) {
                    _ticker.sleep();
                }
            }
        }
    };

    _ticker.addEventListener("tick", Animation._updateRoot);

    var _register = function (target, tween, scrub) {
            var id = target._gsTweenID, a, i;
            if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
                _tweenLookup[id] = {target: target, tweens: []};
            }
            if (tween) {
                a = _tweenLookup[id].tweens;
                a[(i = a.length)] = tween;
                if (scrub) {
                    while (--i > -1) {
                        if (a[i] === tween) {
                            a.splice(i, 1);
                        }
                    }
                }
            }
            return _tweenLookup[id].tweens;
        },
        _onOverwrite = function (overwrittenTween, overwritingTween, target, killedProps) {
            var func = overwrittenTween.vars.onOverwrite, r1, r2;
            if (func) {
                r1 = func(overwrittenTween, overwritingTween, target, killedProps);
            }
            func = TweenLite.onOverwrite;
            if (func) {
                r2 = func(overwrittenTween, overwritingTween, target, killedProps);
            }
            return (r1 !== false && r2 !== false);
        },
        _applyOverwrite = function (target, tween, props, mode, siblings) {
            var i, changed, curTween, l;
            if (mode === 1 || mode >= 4) {
                l = siblings.length;
                for (i = 0; i < l; i++) {
                    if ((curTween = siblings[i]) !== tween) {
                        if (!curTween._gc) {
                            if (curTween._kill(null, target, tween)) {
                                changed = true;
                            }
                        }
                    } else if (mode === 5) {
                        break;
                    }
                }
                return changed;
            }
            //NOTE: Add tiny amount to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
            var startTime = tween._startTime + _tinyNum,
                overlaps = [],
                oCount = 0,
                zeroDur = (tween._duration === 0),
                globalStart;
            i = siblings.length;
            while (--i > -1) {
                if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
                    //ignore
                } else if (curTween._timeline !== tween._timeline) {
                    globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
                    if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
                        overlaps[oCount++] = curTween;
                    }
                } else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= _tinyNum * 2)) {
                    overlaps[oCount++] = curTween;
                }
            }

            i = oCount;
            while (--i > -1) {
                curTween = overlaps[i];
                l = curTween._firstPT; //we need to discern if there were property tweens originally; if they all get removed in the next line's _kill() call, the tween should be killed. See https://github.com/greensock/GreenSock-JS/issues/278
                if (mode === 2) if (curTween._kill(props, target, tween)) {
                    changed = true;
                }
                if (mode !== 2 || (!curTween._firstPT && curTween._initted && l)) {
                    if (mode !== 2 && !_onOverwrite(curTween, tween)) {
                        continue;
                    }
                    if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
                        changed = true;
                    }
                }
            }
            return changed;
        },
        _checkOverlap = function (tween, reference, zeroDur) {
            var tl = tween._timeline,
                ts = tl._timeScale,
                t = tween._startTime;
            while (tl._timeline) {
                t += tl._startTime;
                ts *= tl._timeScale;
                if (tl._paused) {
                    return -100;
                }
                tl = tl._timeline;
            }
            t /= ts;
            return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
        };


//---- TweenLite instance methods -----------------------------------------------------------------------------

    p._init = function () {
        var v = this.vars,
            op = this._overwrittenProps,
            dur = this._duration,
            immediate = !!v.immediateRender,
            ease = v.ease,
            startAt = this._startAt,
            i, initPlugins, pt, p, startVars, l;
        if (v.startAt) {
            if (startAt) {
                startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
                startAt.kill();
            }
            startVars = {};
            for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
                startVars[p] = v.startAt[p];
            }
            startVars.data = "isStart";
            startVars.overwrite = false;
            startVars.immediateRender = true;
            startVars.lazy = (immediate && v.lazy !== false);
            startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
            startVars.onUpdate = v.onUpdate;
            startVars.onUpdateParams = v.onUpdateParams;
            startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
            this._startAt = TweenLite.to(this.target || {}, 0, startVars);
            if (immediate) {
                if (this._time > 0) {
                    this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
                } else if (dur !== 0) {
                    return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                }
            }
        } else if (v.runBackwards && dur !== 0) {
            //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
            if (startAt) {
                startAt.render(-1, true);
                startAt.kill();
                this._startAt = null;
            } else {
                if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                    immediate = false;
                }
                pt = {};
                for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
                    if (!_reservedProps[p] || p === "autoCSS") {
                        pt[p] = v[p];
                    }
                }
                pt.overwrite = 0;
                pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                pt.lazy = (immediate && v.lazy !== false);
                pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                this._startAt = TweenLite.to(this.target, 0, pt);
                if (!immediate) {
                    this._startAt._init(); //ensures that the initial values are recorded
                    this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
                    if (this.vars.immediateRender) {
                        this._startAt = null;
                    }
                } else if (this._time === 0) {
                    return;
                }
            }
        }
        this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof (ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
        if (v.easeParams instanceof Array && ease.config) {
            this._ease = ease.config.apply(ease, v.easeParams);
        }
        this._easeType = this._ease._type;
        this._easePower = this._ease._power;
        this._firstPT = null;

        if (this._targets) {
            l = this._targets.length;
            for (i = 0; i < l; i++) {
                if (this._initProps(this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i)) {
                    initPlugins = true;
                }
            }
        } else {
            initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
        }

        if (initPlugins) {
            TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
        }
        if (op) if (!this._firstPT) if (typeof (this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
            this._enabled(false, false);
        }
        if (v.runBackwards) {
            pt = this._firstPT;
            while (pt) {
                pt.s += pt.c;
                pt.c = -pt.c;
                pt = pt._next;
            }
        }
        this._onUpdate = v.onUpdate;
        this._initted = true;
    };

    p._initProps = function (target, propLookup, siblings, overwrittenProps, index) {
        var p, i, initPlugins, plugin, pt, v;
        if (target == null) {
            return false;
        }
        if (_lazyLookup[target._gsTweenID]) {
            _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
        }

        if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
            _autoCSS(this.vars, target);
        }
        for (p in this.vars) {
            v = this.vars[p];
            if (_reservedProps[p]) {
                if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
                    this.vars[p] = v = this._swapSelfInParams(v, this);
                }

            } else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {

                //t - target 		[object]
                //p - property 		[string]
                //s - start			[number]
                //c - change		[number]
                //f - isFunction	[boolean]
                //n - name			[string]
                //pg - isPlugin 	[boolean]
                //pr - priority		[number]
                //m - mod           [function | 0]
                this._firstPT = pt = {
                    _next: this._firstPT,
                    t: plugin,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: p,
                    pg: 1,
                    pr: plugin._priority,
                    m: 0
                };
                i = plugin._overwriteProps.length;
                while (--i > -1) {
                    propLookup[plugin._overwriteProps[i]] = this._firstPT;
                }
                if (plugin._priority || plugin._onInitAllProps) {
                    initPlugins = true;
                }
                if (plugin._onDisable || plugin._onEnable) {
                    this._notifyPluginsOfEnabled = true;
                }
                if (pt._next) {
                    pt._next._prev = pt;
                }

            } else {
                propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
            }
        }

        if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
            return this._initProps(target, propLookup, siblings, overwrittenProps, index);
        }
        if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
            this._kill(propLookup, target);
            return this._initProps(target, propLookup, siblings, overwrittenProps, index);
        }
        if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
            _lazyLookup[target._gsTweenID] = true;
        }
        return initPlugins;
    };

    p.render = function (time, suppressEvents, force) {
        var self = this,
            prevTime = self._time,
            duration = self._duration,
            prevRawPrevTime = self._rawPrevTime,
            isComplete, callback, pt, rawPrevTime;
        if (time >= duration - _tinyNum && time >= 0) { //to work around occasional floating point math artifacts.
            self._totalTime = self._time = duration;
            self.ratio = self._ease._calcEnd ? self._ease.getRatio(1) : 1;
            if (!self._reversed) {
                isComplete = true;
                callback = "onComplete";
                force = (force || self._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
            }
            if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                if (self._startTime === self._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
                    time = 0;
                }
                if (prevRawPrevTime < 0 || (time <= 0 && time >= -_tinyNum) || (prevRawPrevTime === _tinyNum && self.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
                    force = true;
                    if (prevRawPrevTime > _tinyNum) {
                        callback = "onReverseComplete";
                    }
                }
                self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
            }

        } else if (time < _tinyNum) { //to work around occasional floating point math artifacts, round super small values to 0.
            self._totalTime = self._time = 0;
            self.ratio = self._ease._calcEnd ? self._ease.getRatio(0) : 0;
            if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
                callback = "onReverseComplete";
                isComplete = self._reversed;
            }
            if (time > -_tinyNum) {
                time = 0;
            } else if (time < 0) {
                self._active = false;
                if (duration === 0) if (self._initted || !self.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
                    if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && self.data === "isPause")) {
                        force = true;
                    }
                    self._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
                }
            }
            if (!self._initted || (self._startAt && self._startAt.progress())) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
                force = true;
            }
        } else {
            self._totalTime = self._time = time;

            if (self._easeType) {
                var r = time / duration, type = self._easeType, pow = self._easePower;
                if (type === 1 || (type === 3 && r >= 0.5)) {
                    r = 1 - r;
                }
                if (type === 3) {
                    r *= 2;
                }
                if (pow === 1) {
                    r *= r;
                } else if (pow === 2) {
                    r *= r * r;
                } else if (pow === 3) {
                    r *= r * r * r;
                } else if (pow === 4) {
                    r *= r * r * r * r;
                }
                self.ratio = (type === 1) ? 1 - r : (type === 2) ? r : (time / duration < 0.5) ? r / 2 : 1 - (r / 2);
            } else {
                self.ratio = self._ease.getRatio(time / duration);
            }
        }

        if (self._time === prevTime && !force) {
            return;
        } else if (!self._initted) {
            self._init();
            if (!self._initted || self._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
                return;
            } else if (!force && self._firstPT && ((self.vars.lazy !== false && self._duration) || (self.vars.lazy && !self._duration))) {
                self._time = self._totalTime = prevTime;
                self._rawPrevTime = prevRawPrevTime;
                _lazyTweens.push(self);
                self._lazy = [time, suppressEvents];
                return;
            }
            //_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
            if (self._time && !isComplete) {
                self.ratio = self._ease.getRatio(self._time / duration);
            } else if (isComplete && self._ease._calcEnd) {
                self.ratio = self._ease.getRatio((self._time === 0) ? 0 : 1);
            }
        }
        if (self._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
            self._lazy = false;
        }
        if (!self._active) if (!self._paused && self._time !== prevTime && time >= 0) {
            self._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
        }
        if (prevTime === 0) {
            if (self._startAt) {
                if (time >= 0) {
                    self._startAt.render(time, true, force);
                } else if (!callback) {
                    callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
                }
            }
            if (self.vars.onStart) if (self._time !== 0 || duration === 0) if (!suppressEvents) {
                self._callback("onStart");
            }
        }
        pt = self._firstPT;
        while (pt) {
            if (pt.f) {
                pt.t[pt.p](pt.c * self.ratio + pt.s);
            } else {
                pt.t[pt.p] = pt.c * self.ratio + pt.s;
            }
            pt = pt._next;
        }

        if (self._onUpdate) {
            if (time < 0) if (self._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
                self._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
            }
            if (!suppressEvents) if (self._time !== prevTime || isComplete || force) {
                self._callback("onUpdate");
            }
        }
        if (callback) if (!self._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
            if (time < 0 && self._startAt && !self._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
                self._startAt.render(time, true, force);
            }
            if (isComplete) {
                if (self._timeline.autoRemoveChildren) {
                    self._enabled(false, false);
                }
                self._active = false;
            }
            if (!suppressEvents && self.vars[callback]) {
                self._callback(callback);
            }
            if (duration === 0 && self._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
                self._rawPrevTime = 0;
            }
        }
    };

    p._kill = function (vars, target, overwritingTween) {
        if (vars === "all") {
            vars = null;
        }
        if (vars == null) if (target == null || target === this.target) {
            this._lazy = false;
            return this._enabled(false, false);
        }
        target = (typeof (target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
        var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
            firstPT = this._firstPT,
            i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
        if ((_isArray(target) || _isSelector(target)) && typeof (target[0]) !== "number") {
            i = target.length;
            while (--i > -1) {
                if (this._kill(vars, target[i], overwritingTween)) {
                    changed = true;
                }
            }
        } else {
            if (this._targets) {
                i = this._targets.length;
                while (--i > -1) {
                    if (target === this._targets[i]) {
                        propLookup = this._propLookup[i] || {};
                        this._overwrittenProps = this._overwrittenProps || [];
                        overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
                        break;
                    }
                }
            } else if (target !== this.target) {
                return false;
            } else {
                propLookup = this._propLookup;
                overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
            }

            if (propLookup) {
                killProps = vars || propLookup;
                record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof (vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
                if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
                    for (p in killProps) {
                        if (propLookup[p]) {
                            if (!killed) {
                                killed = [];
                            }
                            killed.push(p);
                        }
                    }
                    if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
                        return false;
                    }
                }

                for (p in killProps) {
                    if ((pt = propLookup[p])) {
                        if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
                            if (pt.f) {
                                pt.t[pt.p](pt.s);
                            } else {
                                pt.t[pt.p] = pt.s;
                            }
                            changed = true;
                        }
                        if (pt.pg && pt.t._kill(killProps)) {
                            changed = true; //some plugins need to be notified so they can perform cleanup tasks first
                        }
                        if (!pt.pg || pt.t._overwriteProps.length === 0) {
                            if (pt._prev) {
                                pt._prev._next = pt._next;
                            } else if (pt === this._firstPT) {
                                this._firstPT = pt._next;
                            }
                            if (pt._next) {
                                pt._next._prev = pt._prev;
                            }
                            pt._next = pt._prev = null;
                        }
                        delete propLookup[p];
                    }
                    if (record) {
                        overwrittenProps[p] = 1;
                    }
                }
                if (!this._firstPT && this._initted && firstPT) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
                    this._enabled(false, false);
                }
            }
        }
        return changed;
    };

    p.invalidate = function () {
        if (this._notifyPluginsOfEnabled) {
            TweenLite._onPluginEvent("_onDisable", this);
        }
        var t = this._time;
        this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
        this._notifyPluginsOfEnabled = this._active = this._lazy = false;
        this._propLookup = (this._targets) ? {} : [];
        Animation.prototype.invalidate.call(this);
        if (this.vars.immediateRender) {
            this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
            this.render(t, false, this.vars.lazy !== false);
        }
        return this;
    };

    p._enabled = function (enabled, ignoreTimeline) {
        if (!_tickerActive) {
            _ticker.wake();
        }
        if (enabled && this._gc) {
            var targets = this._targets,
                i;
            if (targets) {
                i = targets.length;
                while (--i > -1) {
                    this._siblings[i] = _register(targets[i], this, true);
                }
            } else {
                this._siblings = _register(this.target, this, true);
            }
        }
        Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
        if (this._notifyPluginsOfEnabled) if (this._firstPT) {
            return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
        }
        return false;
    };


//----TweenLite static methods -----------------------------------------------------

    TweenLite.to = function (target, duration, vars) {
        return new TweenLite(target, duration, vars);
    };

    TweenLite.from = function (target, duration, vars) {
        vars.runBackwards = true;
        vars.immediateRender = (vars.immediateRender != false);
        return new TweenLite(target, duration, vars);
    };

    TweenLite.fromTo = function (target, duration, fromVars, toVars) {
        toVars.startAt = fromVars;
        toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
        return new TweenLite(target, duration, toVars);
    };

    TweenLite.delayedCall = function (delay, callback, params, scope, useFrames) {
        return new TweenLite(callback, 0, {
            delay: delay,
            onComplete: callback,
            onCompleteParams: params,
            callbackScope: scope,
            onReverseComplete: callback,
            onReverseCompleteParams: params,
            immediateRender: false,
            lazy: false,
            useFrames: useFrames,
            overwrite: 0
        });
    };

    TweenLite.set = function (target, vars) {
        return new TweenLite(target, 0, vars);
    };

    TweenLite.getTweensOf = function (target, onlyActive) {
        if (target == null) {
            return [];
        }
        target = (typeof (target) !== "string") ? target : TweenLite.selector(target) || target;
        var i, a, j, t;
        if ((_isArray(target) || _isSelector(target)) && typeof (target[0]) !== "number") {
            i = target.length;
            a = [];
            while (--i > -1) {
                a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
            }
            i = a.length;
            //now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
            while (--i > -1) {
                t = a[i];
                j = i;
                while (--j > -1) {
                    if (t === a[j]) {
                        a.splice(i, 1);
                    }
                }
            }
        } else if (target._gsTweenID) {
            a = _register(target).concat();
            i = a.length;
            while (--i > -1) {
                if (a[i]._gc || (onlyActive && !a[i].isActive())) {
                    a.splice(i, 1);
                }
            }
        }
        return a || [];
    };

    TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function (target, onlyActive, vars) {
        if (typeof (onlyActive) === "object") {
            vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
            onlyActive = false;
        }
        var a = TweenLite.getTweensOf(target, onlyActive),
            i = a.length;
        while (--i > -1) {
            a[i]._kill(vars, target);
        }
    };


    /*
 * ----------------------------------------------------------------
 * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
 * ----------------------------------------------------------------
 */
    var TweenPlugin = _class("plugins.TweenPlugin", function (props, priority) {
        this._overwriteProps = (props || "").split(",");
        this._propName = this._overwriteProps[0];
        this._priority = priority || 0;
        this._super = TweenPlugin.prototype;
    }, true);

    p = TweenPlugin.prototype;
    TweenPlugin.version = "1.19.0";
    TweenPlugin.API = 2;
    p._firstPT = null;
    p._addTween = _addPropTween;
    p.setRatio = _setRatio;

    p._kill = function (lookup) {
        var a = this._overwriteProps,
            pt = this._firstPT,
            i;
        if (lookup[this._propName] != null) {
            this._overwriteProps = [];
        } else {
            i = a.length;
            while (--i > -1) {
                if (lookup[a[i]] != null) {
                    a.splice(i, 1);
                }
            }
        }
        while (pt) {
            if (lookup[pt.n] != null) {
                if (pt._next) {
                    pt._next._prev = pt._prev;
                }
                if (pt._prev) {
                    pt._prev._next = pt._next;
                    pt._prev = null;
                } else if (this._firstPT === pt) {
                    this._firstPT = pt._next;
                }
            }
            pt = pt._next;
        }
        return false;
    };

    p._mod = p._roundProps = function (lookup) {
        var pt = this._firstPT,
            val;
        while (pt) {
            val = lookup[this._propName] || (pt.n != null && lookup[pt.n.split(this._propName + "_").join("")]);
            if (val && typeof (val) === "function") { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
                if (pt.f === 2) {
                    pt.t._applyPT.m = val;
                } else {
                    pt.m = val;
                }
            }
            pt = pt._next;
        }
    };

    TweenLite._onPluginEvent = function (type, tween) {
        var pt = tween._firstPT,
            changed, pt2, first, last, next;
        if (type === "_onInitAllProps") {
            //sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
            while (pt) {
                next = pt._next;
                pt2 = first;
                while (pt2 && pt2.pr > pt.pr) {
                    pt2 = pt2._next;
                }
                if ((pt._prev = pt2 ? pt2._prev : last)) {
                    pt._prev._next = pt;
                } else {
                    first = pt;
                }
                if ((pt._next = pt2)) {
                    pt2._prev = pt;
                } else {
                    last = pt;
                }
                pt = next;
            }
            pt = tween._firstPT = first;
        }
        while (pt) {
            if (pt.pg) if (typeof (pt.t[type]) === "function") if (pt.t[type]()) {
                changed = true;
            }
            pt = pt._next;
        }
        return changed;
    };

    TweenPlugin.activate = function (plugins) {
        var i = plugins.length;
        while (--i > -1) {
            if (plugins[i].API === TweenPlugin.API) {
                _plugins[(new plugins[i]())._propName] = plugins[i];
            }
        }
        return true;
    };

    //provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
    _gsDefine.plugin = function (config) {
        if (!config || !config.propName || !config.init || !config.API) {
            throw "illegal plugin definition.";
        }
        var propName = config.propName,
            priority = config.priority || 0,
            overwriteProps = config.overwriteProps,
            map = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_mod",
                mod: "_mod",
                initAll: "_onInitAllProps"
            },
            Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
                function () {
                    TweenPlugin.call(this, propName, priority);
                    this._overwriteProps = overwriteProps || [];
                }, (config.global === true)),
            p = Plugin.prototype = new TweenPlugin(propName),
            prop;
        p.constructor = Plugin;
        Plugin.API = config.API;
        for (prop in map) {
            if (typeof (config[prop]) === "function") {
                p[map[prop]] = config[prop];
            }
        }
        Plugin.version = config.version;
        TweenPlugin.activate([Plugin]);
        return Plugin;
    };


    //now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
    a = window._gsQueue;
    if (a) {
        for (i = 0; i < a.length; i++) {
            a[i]();
        }
        for (p in _defLookup) {
            if (!_defLookup[p].func) {
                window.console.log("GSAP encountered missing dependency: " + p);
            }
        }
    }

    _tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

})((typeof (module) !== "undefined" && module.exports && typeof (global) !== "undefined") ? global : this || window, "TweenMax");

/*
*   Wavify
*   JavaScript library to make some nice waves
*   by peacepostman @ crezeo
 */
function wavify(wave_element, options) {
    if ("undefined" === typeof options) options = {};

    //  Options
    //
    //
    var settings = Object.assign(
        {},
        {
            container: options.container ? options.container : "body",
            // Height of wave
            height: 200,
            // Amplitude of wave
            amplitude: 100,
            // Animation speed
            speed: 0.15,
            // Total number of articulation in wave
            bones: 3,
            // Color
            color: "rgba(255,255,255, 0.20)"
        },
        options
    );

    var wave = wave_element,
        width = document.querySelector(settings.container).getBoundingClientRect().width,
        height = document.querySelector(settings.container).getBoundingClientRect().height,
        points = [],
        lastUpdate,
        totalTime = 0,
        animationInstance = false,
        tweenMaxInstance = false;

    //  Allow new settings, avoid setting new container for logic purpose please :)
    //
    function rebuilSettings(params) {
        settings = Object.assign({}, settings, params);
    }

    function drawPoints(factor) {
        var points = [];

        for (var i = 0; i <= settings.bones; i++) {
            var x = (i / settings.bones) * width;
            var sinSeed = (factor + (i + (i % settings.bones))) * settings.speed * 100;
            var sinHeight = Math.sin(sinSeed / 100) * settings.amplitude;
            var yPos = Math.sin(sinSeed / 100) * sinHeight + settings.height;
            points.push({x: x, y: yPos});
        }

        return points;
    }

    function drawPath(points) {
        var SVGString = "M " + points[0].x + " " + points[0].y;

        var cp0 = {
            x: (points[1].x - points[0].x) / 2,
            y: points[1].y - points[0].y + points[0].y + (points[1].y - points[0].y)
        };

        SVGString +=
            " C " +
            cp0.x +
            " " +
            cp0.y +
            " " +
            cp0.x +
            " " +
            cp0.y +
            " " +
            points[1].x +
            " " +
            points[1].y;

        var prevCp = cp0;
        var inverted = -1;

        for (var i = 1; i < points.length - 1; i++) {
            var cpLength = Math.sqrt(prevCp.x * prevCp.x + prevCp.y * prevCp.y);
            var cp1 = {
                x: points[i].x - prevCp.x + points[i].x,
                y: points[i].y - prevCp.y + points[i].y
            };

            SVGString +=
                " C " +
                cp1.x +
                " " +
                cp1.y +
                " " +
                cp1.x +
                " " +
                cp1.y +
                " " +
                points[i + 1].x +
                " " +
                points[i + 1].y;
            prevCp = cp1;
            inverted = -inverted;
        }

        SVGString += " L " + width + " " + height;
        SVGString += " L 0 " + height + " Z";
        return SVGString;
    }

    //  Draw function
    //
    //
    function draw() {
        var now = window.Date.now();

        if (lastUpdate) {
            var elapsed = (now - lastUpdate) / 1000;
            lastUpdate = now;

            totalTime += elapsed;

            var factor = totalTime * Math.PI;
            tweenMaxInstance = TweenMax.to(wave, settings.speed, {
                attr: {
                    d: drawPath(drawPoints(factor))
                },
                ease: Power1.easeInOut
            });
        } else {
            lastUpdate = now;
        }

        animationInstance = requestAnimationFrame(draw);
    }

    //  Pure js debounce function to optimize resize method
    //
    //
    function debounce(func, wait, immediate) {
        var timeout;
        return function () {
            var context = this,
                args = arguments;
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            }, wait);
            if (immediate && !timeout) func.apply(context, args);
        };
    }

    //  Redraw for resize with debounce
    //
    var redraw = debounce(function () {
        pause();
        points = [];
        totalTime = 0;
        width = document.querySelector(settings.container).getBoundingClientRect().width;
        height = document.querySelector(settings.container).getBoundingClientRect().height;
        lastUpdate = false;
        play();
    }, 250);

    function boot() {
        if (!animationInstance) {
            tweenMaxInstance = TweenMax.set(wave, {attr: {fill: settings.color}});
            play();
            window.addEventListener("resize", redraw);
        }
    }

    function reboot(options) {
        kill();
        if (typeof options !== undefined) {
            rebuilSettings(options);
        }
        tweenMaxInstance = TweenMax.set(wave, {attr: {fill: settings.color}});
        play();
        window.addEventListener("resize", redraw);
    }

    function play() {
        if (!animationInstance) {
            animationInstance = requestAnimationFrame(draw);
        }
    }

    function pause() {
        if (animationInstance) {
            cancelAnimationFrame(animationInstance);
            animationInstance = false;
        }
    }

    function updateColor(options) {
        if (typeof options.timing === undefined) {
            options.timing = 1;
        }
        if (typeof options.color === undefined) {
            options.color = settings.color;
        }
        tweenMaxInstance = TweenMax.to(wave, parseInt(options.timing), {
            attr: {fill: options.color},
            onComplete: function () {
                if (
                    typeof options.onComplete !== undefined &&
                    {}.toString.call(options.onComplete) === "[object Function]"
                ) {
                    options.onComplete();
                }
            }
        });
    }

    function kill() {
        if (animationInstance) {
            pause();
            tweenMaxInstance.kill();
            tweenMaxInstance = TweenMax.set(wave, {
                x: 0,
                y: 0,
                rotation: 0,
                opacity: 0,
                clearProps: "all",
                attr: {
                    d: "M0,0",
                    fill: ""
                }
            });
            window.removeEventListener("resize", redraw);
            animationInstance = false;
        }
    }

    //  Boot Wavify
    //
    boot();

    return {
        reboot: reboot,
        play: play,
        pause: pause,
        kill: kill,
        updateColor: updateColor
    };
}

/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.10.7
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
/******/
(function (modules) { // webpackBootstrap
    /******/    // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/    // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/        // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/        // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {}
            /******/
        };
        /******/
        /******/        // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/        // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/        // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/
    /******/    // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/    // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/    // define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {enumerable: true, get: getter});
            /******/
        }
        /******/
    };
    /******/
    /******/    // define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {value: true});
        /******/
    };
    /******/
    /******/    // create a fake namespace object
    /******/    // mode & 1: value is a module id, require it
    /******/    // mode & 2: merge all properties of value into the ns
    /******/    // mode & 4: return value when already ns object
    /******/    // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {enumerable: true, value: value});
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/    // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/    // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/    // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/    // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 11);
    /******/
})
/************************************************************************/
/******/([
    /* 0 */,
    /* 1 */,
    /* 2 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        module.exports = function (callback) {

            if (document.readyState === 'complete' || document.readyState === 'interactive') {
                // Already ready or interactive, execute callback
                callback.call();
            } else if (document.attachEvent) {
                // Old browsers
                document.attachEvent('onreadystatechange', function () {
                    if (document.readyState === 'interactive') callback.call();
                });
            } else if (document.addEventListener) {
                // Modern browsers
                document.addEventListener('DOMContentLoaded', callback);
            }
        };

        /***/
    }),
    /* 3 */,
    /* 4 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function (global) {

            var win;

            if (typeof window !== "undefined") {
                win = window;
            } else if (typeof global !== "undefined") {
                win = global;
            } else if (typeof self !== "undefined") {
                win = self;
            } else {
                win = {};
            }

            module.exports = win;
            /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(5)))

        /***/
    }),
    /* 5 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        var g;

// This works in non-strict mode
        g = function () {
            return this;
        }();

        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (1, eval)("this");
        } catch (e) {
            // This works if the window reference is available
            if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
        }

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
    }),
    /* 6 */,
    /* 7 */,
    /* 8 */,
    /* 9 */,
    /* 10 */,
    /* 11 */
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(12);


        /***/
    }),
    /* 12 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        var _liteReady = __webpack_require__(2);

        var _liteReady2 = _interopRequireDefault(_liteReady);

        var _global = __webpack_require__(4);

        var _jarallax = __webpack_require__(13);

        var _jarallax2 = _interopRequireDefault(_jarallax);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

// no conflict
        var oldPlugin = _global.window.jarallax;
        _global.window.jarallax = _jarallax2.default;
        _global.window.jarallax.noConflict = function () {
            _global.window.jarallax = oldPlugin;
            return this;
        };

// jQuery support
        if (typeof _global.jQuery !== 'undefined') {
            var jQueryPlugin = function jQueryPlugin() {
                var args = arguments || [];
                Array.prototype.unshift.call(args, this);
                var res = _jarallax2.default.apply(_global.window, args);
                return (typeof res === 'undefined' ? 'undefined' : _typeof(res)) !== 'object' ? res : this;
            };
            jQueryPlugin.constructor = _jarallax2.default.constructor;

            // no conflict
            var oldJqPlugin = _global.jQuery.fn.jarallax;
            _global.jQuery.fn.jarallax = jQueryPlugin;
            _global.jQuery.fn.jarallax.noConflict = function () {
                _global.jQuery.fn.jarallax = oldJqPlugin;
                return this;
            };
        }

// data-jarallax initialization
        (0, _liteReady2.default)(function () {
            (0, _jarallax2.default)(document.querySelectorAll('[data-jarallax]'));
        });

        /***/
    }),
    /* 13 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function (global) {

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _slicedToArray = function () {
                function sliceIterator(arr, i) {
                    var _arr = [];
                    var _n = true;
                    var _d = false;
                    var _e = undefined;
                    try {
                        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                            _arr.push(_s.value);
                            if (i && _arr.length === i) break;
                        }
                    } catch (err) {
                        _d = true;
                        _e = err;
                    } finally {
                        try {
                            if (!_n && _i["return"]) _i["return"]();
                        } finally {
                            if (_d) throw _e;
                        }
                    }
                    return _arr;
                }

                return function (arr, i) {
                    if (Array.isArray(arr)) {
                        return arr;
                    } else if (Symbol.iterator in Object(arr)) {
                        return sliceIterator(arr, i);
                    } else {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance");
                    }
                };
            }();

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
                return typeof obj;
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };

            var _liteReady = __webpack_require__(2);

            var _liteReady2 = _interopRequireDefault(_liteReady);

            var _rafl = __webpack_require__(14);

            var _rafl2 = _interopRequireDefault(_rafl);

            var _global = __webpack_require__(4);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : {default: obj};
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var isIE = navigator.userAgent.indexOf('MSIE ') > -1 || navigator.userAgent.indexOf('Trident/') > -1 || navigator.userAgent.indexOf('Edge/') > -1;

            var supportTransform = function () {
                var prefixes = 'transform WebkitTransform MozTransform'.split(' ');
                var div = document.createElement('div');
                for (var i = 0; i < prefixes.length; i++) {
                    if (div && div.style[prefixes[i]] !== undefined) {
                        return prefixes[i];
                    }
                }
                return false;
            }();

// Window data
            var wndW = void 0;
            var wndH = void 0;
            var wndY = void 0;
            var forceResizeParallax = false;
            var forceScrollParallax = false;

            function updateWndVars(e) {
                wndW = _global.window.innerWidth || document.documentElement.clientWidth;
                wndH = _global.window.innerHeight || document.documentElement.clientHeight;
                if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object' && (e.type === 'load' || e.type === 'dom-loaded')) {
                    forceResizeParallax = true;
                }
            }

            updateWndVars();
            _global.window.addEventListener('resize', updateWndVars);
            _global.window.addEventListener('orientationchange', updateWndVars);
            _global.window.addEventListener('load', updateWndVars);
            (0, _liteReady2.default)(function () {
                updateWndVars({
                    type: 'dom-loaded'
                });
            });

// list with all jarallax instances
// need to render all in one scroll/resize event
            var jarallaxList = [];

// Animate if changed window size or scrolled page
            var oldPageData = false;

            function updateParallax() {
                if (!jarallaxList.length) {
                    return;
                }

                if (_global.window.pageYOffset !== undefined) {
                    wndY = _global.window.pageYOffset;
                } else {
                    wndY = (document.documentElement || document.body.parentNode || document.body).scrollTop;
                }

                var isResized = forceResizeParallax || !oldPageData || oldPageData.width !== wndW || oldPageData.height !== wndH;
                var isScrolled = forceScrollParallax || isResized || !oldPageData || oldPageData.y !== wndY;

                forceResizeParallax = false;
                forceScrollParallax = false;

                if (isResized || isScrolled) {
                    jarallaxList.forEach(function (item) {
                        if (isResized) {
                            item.onResize();
                        }
                        if (isScrolled) {
                            item.onScroll();
                        }
                    });

                    oldPageData = {
                        width: wndW,
                        height: wndH,
                        y: wndY
                    };
                }

                (0, _rafl2.default)(updateParallax);
            }

// ResizeObserver
            var resizeObserver = global.ResizeObserver ? new global.ResizeObserver(function (entry) {
                if (entry && entry.length) {
                    (0, _rafl2.default)(function () {
                        entry.forEach(function (item) {
                            if (item.target && item.target.jarallax) {
                                if (!forceResizeParallax) {
                                    item.target.jarallax.onResize();
                                }
                                forceScrollParallax = true;
                            }
                        });
                    });
                }
            }) : false;

            var instanceID = 0;

// Jarallax class

            var Jarallax = function () {
                function Jarallax(item, userOptions) {
                    _classCallCheck(this, Jarallax);

                    var self = this;

                    self.instanceID = instanceID++;

                    self.$item = item;

                    self.defaults = {
                        type: 'scroll', // type of parallax: scroll, scale, opacity, scale-opacity, scroll-opacity
                        speed: 0.5, // supported value from -1 to 2
                        imgSrc: null,
                        imgElement: '.jarallax-img',
                        imgSize: 'cover',
                        imgPosition: '50% 50%',
                        imgRepeat: 'no-repeat', // supported only for background, not for <img> tag
                        keepImg: false, // keep <img> tag in it's default place
                        elementInViewport: null,
                        zIndex: -100,
                        disableParallax: false,
                        disableVideo: false,
                        automaticResize: true, // use ResizeObserver to recalculate position and size of parallax image

                        // video
                        videoSrc: null,
                        videoStartTime: 0,
                        videoEndTime: 0,
                        videoVolume: 0,
                        videoLoop: true,
                        videoPlayOnlyVisible: true,

                        // events
                        onScroll: null, // function(calculations) {}
                        onInit: null, // function() {}
                        onDestroy: null, // function() {}
                        onCoverImage: null // function() {}
                    };

                    // DEPRECATED: old data-options
                    var deprecatedDataAttribute = self.$item.getAttribute('data-jarallax');
                    var oldDataOptions = JSON.parse(deprecatedDataAttribute || '{}');
                    if (deprecatedDataAttribute) {
                        // eslint-disable-next-line no-console
                        console.warn('Detected usage of deprecated data-jarallax JSON options, you should use pure data-attribute options. See info here - https://github.com/nk-o/jarallax/issues/53');
                    }

                    // prepare data-options
                    var dataOptions = self.$item.dataset || {};
                    var pureDataOptions = {};
                    Object.keys(dataOptions).forEach(function (key) {
                        var loweCaseOption = key.substr(0, 1).toLowerCase() + key.substr(1);
                        if (loweCaseOption && typeof self.defaults[loweCaseOption] !== 'undefined') {
                            pureDataOptions[loweCaseOption] = dataOptions[key];
                        }
                    });

                    self.options = self.extend({}, self.defaults, oldDataOptions, pureDataOptions, userOptions);
                    self.pureOptions = self.extend({}, self.options);

                    // prepare 'true' and 'false' strings to boolean
                    Object.keys(self.options).forEach(function (key) {
                        if (self.options[key] === 'true') {
                            self.options[key] = true;
                        } else if (self.options[key] === 'false') {
                            self.options[key] = false;
                        }
                    });

                    // fix speed option [-1.0, 2.0]
                    self.options.speed = Math.min(2, Math.max(-1, parseFloat(self.options.speed)));

                    // deprecated noAndroid and noIos options
                    if (self.options.noAndroid || self.options.noIos) {
                        // eslint-disable-next-line no-console
                        console.warn('Detected usage of deprecated noAndroid or noIos options, you should use disableParallax option. See info here - https://github.com/nk-o/jarallax/#disable-on-mobile-devices');

                        // prepare fallback if disableParallax option is not used
                        if (!self.options.disableParallax) {
                            if (self.options.noIos && self.options.noAndroid) {
                                self.options.disableParallax = /iPad|iPhone|iPod|Android/;
                            } else if (self.options.noIos) {
                                self.options.disableParallax = /iPad|iPhone|iPod/;
                            } else if (self.options.noAndroid) {
                                self.options.disableParallax = /Android/;
                            }
                        }
                    }

                    // prepare disableParallax callback
                    if (typeof self.options.disableParallax === 'string') {
                        self.options.disableParallax = new RegExp(self.options.disableParallax);
                    }
                    if (self.options.disableParallax instanceof RegExp) {
                        var disableParallaxRegexp = self.options.disableParallax;
                        self.options.disableParallax = function () {
                            return disableParallaxRegexp.test(navigator.userAgent);
                        };
                    }
                    if (typeof self.options.disableParallax !== 'function') {
                        self.options.disableParallax = function () {
                            return false;
                        };
                    }

                    // prepare disableVideo callback
                    if (typeof self.options.disableVideo === 'string') {
                        self.options.disableVideo = new RegExp(self.options.disableVideo);
                    }
                    if (self.options.disableVideo instanceof RegExp) {
                        var disableVideoRegexp = self.options.disableVideo;
                        self.options.disableVideo = function () {
                            return disableVideoRegexp.test(navigator.userAgent);
                        };
                    }
                    if (typeof self.options.disableVideo !== 'function') {
                        self.options.disableVideo = function () {
                            return false;
                        };
                    }

                    // custom element to check if parallax in viewport
                    var elementInVP = self.options.elementInViewport;
                    // get first item from array
                    if (elementInVP && (typeof elementInVP === 'undefined' ? 'undefined' : _typeof(elementInVP)) === 'object' && typeof elementInVP.length !== 'undefined') {
                        var _elementInVP = elementInVP;

                        var _elementInVP2 = _slicedToArray(_elementInVP, 1);

                        elementInVP = _elementInVP2[0];
                    }
                    // check if dom element
                    if (!(elementInVP instanceof Element)) {
                        elementInVP = null;
                    }
                    self.options.elementInViewport = elementInVP;

                    self.image = {
                        src: self.options.imgSrc || null,
                        $container: null,
                        useImgTag: false,

                        // position fixed is needed for the most of browsers because absolute position have glitches
                        // on MacOS with smooth scroll there is a huge lags with absolute position - https://github.com/nk-o/jarallax/issues/75
                        // on mobile devices better scrolled with absolute position
                        position: /iPad|iPhone|iPod|Android/.test(navigator.userAgent) ? 'absolute' : 'fixed'
                    };

                    if (self.initImg() && self.canInitParallax()) {
                        self.init();
                    }
                }

                // add styles to element


                _createClass(Jarallax, [{
                    key: 'css',
                    value: function css(el, styles) {
                        if (typeof styles === 'string') {
                            return _global.window.getComputedStyle(el).getPropertyValue(styles);
                        }

                        // add transform property with vendor prefix
                        if (styles.transform && supportTransform) {
                            styles[supportTransform] = styles.transform;
                        }

                        Object.keys(styles).forEach(function (key) {
                            el.style[key] = styles[key];
                        });
                        return el;
                    }

                    // Extend like jQuery.extend

                }, {
                    key: 'extend',
                    value: function extend(out) {
                        var _arguments = arguments;

                        out = out || {};
                        Object.keys(arguments).forEach(function (i) {
                            if (!_arguments[i]) {
                                return;
                            }
                            Object.keys(_arguments[i]).forEach(function (key) {
                                out[key] = _arguments[i][key];
                            });
                        });
                        return out;
                    }

                    // get window size and scroll position. Useful for extensions

                }, {
                    key: 'getWindowData',
                    value: function getWindowData() {
                        return {
                            width: wndW,
                            height: wndH,
                            y: wndY
                        };
                    }

                    // Jarallax functions

                }, {
                    key: 'initImg',
                    value: function initImg() {
                        var self = this;

                        // find image element
                        var $imgElement = self.options.imgElement;
                        if ($imgElement && typeof $imgElement === 'string') {
                            $imgElement = self.$item.querySelector($imgElement);
                        }
                        // check if dom element
                        if (!($imgElement instanceof Element)) {
                            $imgElement = null;
                        }

                        if ($imgElement) {
                            if (self.options.keepImg) {
                                self.image.$item = $imgElement.cloneNode(true);
                            } else {
                                self.image.$item = $imgElement;
                                self.image.$itemParent = $imgElement.parentNode;
                            }
                            self.image.useImgTag = true;
                        }

                        // true if there is img tag
                        if (self.image.$item) {
                            return true;
                        }

                        // get image src
                        if (self.image.src === null) {
                            self.image.src = self.css(self.$item, 'background-image').replace(/^url\(['"]?/g, '').replace(/['"]?\)$/g, '');
                        }
                        return !(!self.image.src || self.image.src === 'none');
                    }
                }, {
                    key: 'canInitParallax',
                    value: function canInitParallax() {
                        return supportTransform && !this.options.disableParallax();
                    }
                }, {
                    key: 'init',
                    value: function init() {
                        var self = this;
                        var containerStyles = {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            overflow: 'hidden',
                            pointerEvents: 'none'
                        };
                        var imageStyles = {};

                        if (!self.options.keepImg) {
                            // save default user styles
                            var curStyle = self.$item.getAttribute('style');
                            if (curStyle) {
                                self.$item.setAttribute('data-jarallax-original-styles', curStyle);
                            }
                            if (self.image.useImgTag) {
                                var curImgStyle = self.image.$item.getAttribute('style');
                                if (curImgStyle) {
                                    self.image.$item.setAttribute('data-jarallax-original-styles', curImgStyle);
                                }
                            }
                        }

                        // set relative position and z-index to the parent
                        if (self.css(self.$item, 'position') === 'static') {
                            self.css(self.$item, {
                                position: 'relative'
                            });
                        }
                        if (self.css(self.$item, 'z-index') === 'auto') {
                            self.css(self.$item, {
                                zIndex: 0
                            });
                        }

                        // container for parallax image
                        self.image.$container = document.createElement('div');
                        self.css(self.image.$container, containerStyles);
                        self.css(self.image.$container, {
                            'z-index': self.options.zIndex
                        });

                        // fix for IE https://github.com/nk-o/jarallax/issues/110
                        if (isIE) {
                            self.css(self.image.$container, {
                                opacity: 0.9999
                            });
                        }

                        self.image.$container.setAttribute('id', 'jarallax-container-' + self.instanceID);
                        self.$item.appendChild(self.image.$container);

                        // use img tag
                        if (self.image.useImgTag) {
                            imageStyles = self.extend({
                                'object-fit': self.options.imgSize,
                                'object-position': self.options.imgPosition,
                                // support for plugin https://github.com/bfred-it/object-fit-images
                                'font-family': 'object-fit: ' + self.options.imgSize + '; object-position: ' + self.options.imgPosition + ';',
                                'max-width': 'none'
                            }, containerStyles, imageStyles);

                            // use div with background image
                        } else {
                            self.image.$item = document.createElement('div');
                            if (self.image.src) {
                                imageStyles = self.extend({
                                    'background-position': self.options.imgPosition,
                                    'background-size': self.options.imgSize,
                                    'background-repeat': self.options.imgRepeat,
                                    'background-image': 'url("' + self.image.src + '")'
                                }, containerStyles, imageStyles);
                            }
                        }

                        if (self.options.type === 'opacity' || self.options.type === 'scale' || self.options.type === 'scale-opacity' || self.options.speed === 1) {
                            self.image.position = 'absolute';
                        }

                        // check if one of parents have transform style (without this check, scroll transform will be inverted if used parallax with position fixed)
                        // discussion - https://github.com/nk-o/jarallax/issues/9
                        if (self.image.position === 'fixed') {
                            var parentWithTransform = 0;
                            var $itemParents = self.$item;
                            while ($itemParents !== null && $itemParents !== document && parentWithTransform === 0) {
                                var parentTransform = self.css($itemParents, '-webkit-transform') || self.css($itemParents, '-moz-transform') || self.css($itemParents, 'transform');
                                if (parentTransform && parentTransform !== 'none') {
                                    parentWithTransform = 1;
                                    self.image.position = 'absolute';
                                }
                                $itemParents = $itemParents.parentNode;
                            }
                        }

                        // add position to parallax block
                        imageStyles.position = self.image.position;

                        // insert parallax image
                        self.css(self.image.$item, imageStyles);
                        self.image.$container.appendChild(self.image.$item);

                        // set initial position and size
                        self.onResize();
                        self.onScroll(true);

                        // ResizeObserver
                        if (self.options.automaticResize && resizeObserver) {
                            resizeObserver.observe(self.$item);
                        }

                        // call onInit event
                        if (self.options.onInit) {
                            self.options.onInit.call(self);
                        }

                        // remove default user background
                        if (self.css(self.$item, 'background-image') !== 'none') {
                            self.css(self.$item, {
                                'background-image': 'none'
                            });
                        }

                        self.addToParallaxList();
                    }

                    // add to parallax instances list

                }, {
                    key: 'addToParallaxList',
                    value: function addToParallaxList() {
                        jarallaxList.push(this);

                        if (jarallaxList.length === 1) {
                            updateParallax();
                        }
                    }

                    // remove from parallax instances list

                }, {
                    key: 'removeFromParallaxList',
                    value: function removeFromParallaxList() {
                        var self = this;

                        jarallaxList.forEach(function (item, key) {
                            if (item.instanceID === self.instanceID) {
                                jarallaxList.splice(key, 1);
                            }
                        });
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var self = this;

                        self.removeFromParallaxList();

                        // return styles on container as before jarallax init
                        var originalStylesTag = self.$item.getAttribute('data-jarallax-original-styles');
                        self.$item.removeAttribute('data-jarallax-original-styles');
                        // null occurs if there is no style tag before jarallax init
                        if (!originalStylesTag) {
                            self.$item.removeAttribute('style');
                        } else {
                            self.$item.setAttribute('style', originalStylesTag);
                        }

                        if (self.image.useImgTag) {
                            // return styles on img tag as before jarallax init
                            var originalStylesImgTag = self.image.$item.getAttribute('data-jarallax-original-styles');
                            self.image.$item.removeAttribute('data-jarallax-original-styles');
                            // null occurs if there is no style tag before jarallax init
                            if (!originalStylesImgTag) {
                                self.image.$item.removeAttribute('style');
                            } else {
                                self.image.$item.setAttribute('style', originalStylesTag);
                            }

                            // move img tag to its default position
                            if (self.image.$itemParent) {
                                self.image.$itemParent.appendChild(self.image.$item);
                            }
                        }

                        // remove additional dom elements
                        if (self.$clipStyles) {
                            self.$clipStyles.parentNode.removeChild(self.$clipStyles);
                        }
                        if (self.image.$container) {
                            self.image.$container.parentNode.removeChild(self.image.$container);
                        }

                        // call onDestroy event
                        if (self.options.onDestroy) {
                            self.options.onDestroy.call(self);
                        }

                        // delete jarallax from item
                        delete self.$item.jarallax;
                    }

                    // it will remove some image overlapping
                    // overlapping occur due to an image position fixed inside absolute position element

                }, {
                    key: 'clipContainer',
                    value: function clipContainer() {
                        // needed only when background in fixed position
                        if (this.image.position !== 'fixed') {
                            return;
                        }

                        var self = this;
                        var rect = self.image.$container.getBoundingClientRect();
                        var width = rect.width,
                            height = rect.height;


                        if (!self.$clipStyles) {
                            self.$clipStyles = document.createElement('style');
                            self.$clipStyles.setAttribute('type', 'text/css');
                            self.$clipStyles.setAttribute('id', 'jarallax-clip-' + self.instanceID);
                            var head = document.head || document.getElementsByTagName('head')[0];
                            head.appendChild(self.$clipStyles);
                        }

                        var styles = '#jarallax-container-' + self.instanceID + ' {\n           clip: rect(0 ' + width + 'px ' + height + 'px 0);\n           clip: rect(0, ' + width + 'px, ' + height + 'px, 0);\n        }';

                        // add clip styles inline (this method need for support IE8 and less browsers)
                        if (self.$clipStyles.styleSheet) {
                            self.$clipStyles.styleSheet.cssText = styles;
                        } else {
                            self.$clipStyles.innerHTML = styles;
                        }
                    }
                }, {
                    key: 'coverImage',
                    value: function coverImage() {
                        var self = this;

                        var rect = self.image.$container.getBoundingClientRect();
                        var contH = rect.height;
                        var speed = self.options.speed;

                        var isScroll = self.options.type === 'scroll' || self.options.type === 'scroll-opacity';
                        var scrollDist = 0;
                        var resultH = contH;
                        var resultMT = 0;

                        // scroll parallax
                        if (isScroll) {
                            // scroll distance and height for image
                            if (speed < 0) {
                                scrollDist = speed * Math.max(contH, wndH);

                                if (wndH < contH) {
                                    scrollDist -= speed * (contH - wndH);
                                }
                            } else {
                                scrollDist = speed * (contH + wndH);
                            }

                            // size for scroll parallax
                            if (speed > 1) {
                                resultH = Math.abs(scrollDist - wndH);
                            } else if (speed < 0) {
                                resultH = scrollDist / speed + Math.abs(scrollDist);
                            } else {
                                resultH += (wndH - contH) * (1 - speed);
                            }

                            scrollDist /= 2;
                        }

                        // store scroll distance
                        self.parallaxScrollDistance = scrollDist;

                        // vertical center
                        if (isScroll) {
                            resultMT = (wndH - resultH) / 2;
                        } else {
                            resultMT = (contH - resultH) / 2;
                        }

                        // apply result to item
                        self.css(self.image.$item, {
                            height: resultH + 'px',
                            marginTop: resultMT + 'px',
                            left: self.image.position === 'fixed' ? rect.left + 'px' : '0',
                            width: rect.width + 'px'
                        });

                        // call onCoverImage event
                        if (self.options.onCoverImage) {
                            self.options.onCoverImage.call(self);
                        }

                        // return some useful data. Used in the video cover function
                        return {
                            image: {
                                height: resultH,
                                marginTop: resultMT
                            },
                            container: rect
                        };
                    }
                }, {
                    key: 'isVisible',
                    value: function isVisible() {
                        return this.isElementInViewport || false;
                    }
                }, {
                    key: 'onScroll',
                    value: function onScroll(force) {
                        var self = this;

                        var rect = self.$item.getBoundingClientRect();
                        var contT = rect.top;
                        var contH = rect.height;
                        var styles = {};

                        // check if in viewport
                        var viewportRect = rect;
                        if (self.options.elementInViewport) {
                            viewportRect = self.options.elementInViewport.getBoundingClientRect();
                        }
                        self.isElementInViewport = viewportRect.bottom >= 0 && viewportRect.right >= 0 && viewportRect.top <= wndH && viewportRect.left <= wndW;

                        // stop calculations if item is not in viewport
                        if (force ? false : !self.isElementInViewport) {
                            return;
                        }

                        // calculate parallax helping variables
                        var beforeTop = Math.max(0, contT);
                        var beforeTopEnd = Math.max(0, contH + contT);
                        var afterTop = Math.max(0, -contT);
                        var beforeBottom = Math.max(0, contT + contH - wndH);
                        var beforeBottomEnd = Math.max(0, contH - (contT + contH - wndH));
                        var afterBottom = Math.max(0, -contT + wndH - contH);
                        var fromViewportCenter = 1 - 2 * (wndH - contT) / (wndH + contH);

                        // calculate on how percent of section is visible
                        var visiblePercent = 1;
                        if (contH < wndH) {
                            visiblePercent = 1 - (afterTop || beforeBottom) / contH;
                        } else if (beforeTopEnd <= wndH) {
                            visiblePercent = beforeTopEnd / wndH;
                        } else if (beforeBottomEnd <= wndH) {
                            visiblePercent = beforeBottomEnd / wndH;
                        }

                        // opacity
                        if (self.options.type === 'opacity' || self.options.type === 'scale-opacity' || self.options.type === 'scroll-opacity') {
                            styles.transform = 'translate3d(0,0,0)';
                            styles.opacity = visiblePercent;
                        }

                        // scale
                        if (self.options.type === 'scale' || self.options.type === 'scale-opacity') {
                            var scale = 1;
                            if (self.options.speed < 0) {
                                scale -= self.options.speed * visiblePercent;
                            } else {
                                scale += self.options.speed * (1 - visiblePercent);
                            }
                            styles.transform = 'scale(' + scale + ') translate3d(0,0,0)';
                        }

                        // scroll
                        if (self.options.type === 'scroll' || self.options.type === 'scroll-opacity') {
                            var positionY = self.parallaxScrollDistance * fromViewportCenter;

                            // fix if parallax block in absolute position
                            if (self.image.position === 'absolute') {
                                positionY -= contT;
                            }

                            styles.transform = 'translate3d(0,' + positionY + 'px,0)';
                        }

                        self.css(self.image.$item, styles);

                        // call onScroll event
                        if (self.options.onScroll) {
                            self.options.onScroll.call(self, {
                                section: rect,

                                beforeTop: beforeTop,
                                beforeTopEnd: beforeTopEnd,
                                afterTop: afterTop,
                                beforeBottom: beforeBottom,
                                beforeBottomEnd: beforeBottomEnd,
                                afterBottom: afterBottom,

                                visiblePercent: visiblePercent,
                                fromViewportCenter: fromViewportCenter
                            });
                        }
                    }
                }, {
                    key: 'onResize',
                    value: function onResize() {
                        this.coverImage();
                        this.clipContainer();
                    }
                }]);

                return Jarallax;
            }();

// global definition


            var plugin = function plugin(items) {
                // check for dom element
                // thanks: http://stackoverflow.com/questions/384286/javascript-isdom-how-do-you-check-if-a-javascript-object-is-a-dom-object
                if ((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? items instanceof HTMLElement : items && (typeof items === 'undefined' ? 'undefined' : _typeof(items)) === 'object' && items !== null && items.nodeType === 1 && typeof items.nodeName === 'string') {
                    items = [items];
                }

                var options = arguments[1];
                var args = Array.prototype.slice.call(arguments, 2);
                var len = items.length;
                var k = 0;
                var ret = void 0;

                for (k; k < len; k++) {
                    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' || typeof options === 'undefined') {
                        if (!items[k].jarallax) {
                            items[k].jarallax = new Jarallax(items[k], options);
                        }
                    } else if (items[k].jarallax) {
                        // eslint-disable-next-line prefer-spread
                        ret = items[k].jarallax[options].apply(items[k].jarallax, args);
                    }
                    if (typeof ret !== 'undefined') {
                        return ret;
                    }
                }

                return items;
            };
            plugin.constructor = Jarallax;

            exports.default = plugin;
            /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(5)))

        /***/
    }),
    /* 14 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        var global = __webpack_require__(4);

        /**
         * `requestAnimationFrame()`
         */

        var request = global.requestAnimationFrame || global.webkitRequestAnimationFrame || global.mozRequestAnimationFrame || fallback;

        var prev = +new Date();

        function fallback(fn) {
            var curr = +new Date();
            var ms = Math.max(0, 16 - (curr - prev));
            var req = setTimeout(fn, ms);
            return prev = curr, req;
        }

        /**
         * `cancelAnimationFrame()`
         */

        var cancel = global.cancelAnimationFrame || global.webkitCancelAnimationFrame || global.mozCancelAnimationFrame || clearTimeout;

        if (Function.prototype.bind) {
            request = request.bind(global);
            cancel = cancel.bind(global);
        }

        exports = module.exports = request;
        exports.cancel = cancel;

        /***/
    })
    /******/]);

/*!
 * Name    : Elements Extension for Jarallax
 * Version : 1.0.0
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
/******/
(function (modules) { // webpackBootstrap
    /******/    // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/    // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/        // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/        // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/            i: moduleId,
            /******/            l: false,
            /******/            exports: {}
            /******/
        };
        /******/
        /******/        // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/        // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/        // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }

    /******/
    /******/
    /******/    // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/    // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/    // define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {enumerable: true, get: getter});
            /******/
        }
        /******/
    };
    /******/
    /******/    // define __esModule on exports
    /******/
    __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {value: true});
        /******/
    };
    /******/
    /******/    // create a fake namespace object
    /******/    // mode & 1: value is a module id, require it
    /******/    // mode & 2: merge all properties of value into the ns
    /******/    // mode & 4: return value when already ns object
    /******/    // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {enumerable: true, value: value});
        /******/
        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
            return value[key];
        }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/    // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/            function getDefault() {
                return module['default'];
            } :
            /******/            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/    // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/    // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/
    /******/    // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
})
/************************************************************************/
/******/([
    /* 0 */
    /***/ (function (module, exports, __webpack_require__) {

        module.exports = __webpack_require__(1);


        /***/
    }),
    /* 1 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        var _liteReady = __webpack_require__(2);

        var _liteReady2 = _interopRequireDefault(_liteReady);

        var _jarallaxElement = __webpack_require__(3);

        var _jarallaxElement2 = _interopRequireDefault(_jarallaxElement);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        (0, _jarallaxElement2.default)();

// data-jarallax-element initialization
        (0, _liteReady2.default)(function () {
            if (typeof jarallax !== 'undefined') {
                jarallax(document.querySelectorAll('[data-jarallax-element]'));
            }
        });

        /***/
    }),
    /* 2 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        module.exports = function (callback) {

            if (document.readyState === 'complete' || document.readyState === 'interactive') {
                // Already ready or interactive, execute callback
                callback.call();
            } else if (document.attachEvent) {
                // Old browsers
                document.attachEvent('onreadystatechange', function () {
                    if (document.readyState === 'interactive') callback.call();
                });
            } else if (document.addEventListener) {
                // Modern browsers
                document.addEventListener('DOMContentLoaded', callback);
            }
        };

        /***/
    }),
    /* 3 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.default = jarallaxElement;

        var _global = __webpack_require__(4);

        var _global2 = _interopRequireDefault(_global);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {default: obj};
        }

        function jarallaxElement() {
            var jarallax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _global2.default.jarallax;

            if (typeof jarallax === 'undefined') {
                return;
            }

            var Jarallax = jarallax.constructor;

            // redefine default methods
            ['initImg', 'canInitParallax', 'init', 'destroy', 'clipContainer', 'coverImage', 'isVisible', 'onScroll', 'onResize'].forEach(function (key) {
                var def = Jarallax.prototype[key];
                Jarallax.prototype[key] = function () {
                    var self = this;
                    var args = arguments || [];

                    if (key === 'initImg' && self.$item.getAttribute('data-jarallax-element') !== null) {
                        self.options.type = 'element';
                        self.pureOptions.speed = self.$item.getAttribute('data-jarallax-element') || self.pureOptions.speed;
                    }
                    if (self.options.type !== 'element') {
                        return def.apply(self, args);
                    }

                    self.pureOptions.threshold = self.$item.getAttribute('data-threshold') || '';

                    switch (key) {
                        case 'init':
                            var speedArr = self.pureOptions.speed.split(' ');
                            self.options.speed = self.pureOptions.speed || 0;
                            self.options.speedY = speedArr[0] ? parseFloat(speedArr[0]) : 0;
                            self.options.speedX = speedArr[1] ? parseFloat(speedArr[1]) : 0;

                            var thresholdArr = self.pureOptions.threshold.split(' ');
                            self.options.thresholdY = thresholdArr[0] ? parseFloat(thresholdArr[0]) : null;
                            self.options.thresholdX = thresholdArr[1] ? parseFloat(thresholdArr[1]) : null;
                            break;
                        case 'onResize':
                            var defTransform = self.css(self.$item, 'transform');
                            self.css(self.$item, {transform: ''});
                            var rect = self.$item.getBoundingClientRect();
                            self.itemData = {
                                width: rect.width,
                                height: rect.height,
                                y: rect.top + self.getWindowData().y,
                                x: rect.left
                            };
                            self.css(self.$item, {transform: defTransform});
                            break;
                        case 'onScroll':
                            var wnd = self.getWindowData();
                            var centerPercent = (wnd.y + wnd.height / 2 - self.itemData.y - self.itemData.height / 2) / (wnd.height / 2);
                            var moveY = centerPercent * self.options.speedY;
                            var moveX = centerPercent * self.options.speedX;
                            var my = moveY;
                            var mx = moveX;
                            if (self.options.thresholdY !== null && moveY > self.options.thresholdY) my = 0;
                            if (self.options.thresholdX !== null && moveX > self.options.thresholdX) mx = 0;
                            self.css(self.$item, {transform: 'translate3d(' + mx + 'px,' + my + 'px,0)'});
                            break;
                        case 'initImg':
                        case 'isVisible':
                        case 'clipContainer':
                        case 'coverImage':
                            return true;
                        // no default
                    }
                    return def.apply(self, args);
                };
            });
        } /* eslint no-case-declarations: "off" */

        /***/
    }),
    /* 4 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function (global) {

            var win;

            if (typeof window !== "undefined") {
                win = window;
            } else if (typeof global !== "undefined") {
                win = global;
            } else if (typeof self !== "undefined") {
                win = self;
            } else {
                win = {};
            }

            module.exports = win;
            /* WEBPACK VAR INJECTION */
        }.call(this, __webpack_require__(5)))

        /***/
    }),
    /* 5 */
    /***/ (function (module, exports, __webpack_require__) {

        "use strict";


        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
            return typeof obj;
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };

        var g;

// This works in non-strict mode
        g = function () {
            return this;
        }();

        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (1, eval)("this");
        } catch (e) {
            // This works if the window reference is available
            if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
        }

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

        module.exports = g;

        /***/
    })
    /******/]);

var VanillaTilt = (function () {
    'use strict';

    var classCallCheck = function (instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    };

    /**
     * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
     * Original idea: https://github.com/gijsroge/tilt.js
     * MIT License.
     * Version 1.7.0
     */

    var VanillaTilt = function () {
        function VanillaTilt(element) {
            var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            classCallCheck(this, VanillaTilt);

            if (!(element instanceof Node)) {
                throw "Can't initialize VanillaTilt because " + element + " is not a Node.";
            }

            this.width = null;
            this.height = null;
            this.clientWidth = null;
            this.clientHeight = null;
            this.left = null;
            this.top = null;

            // for Gyroscope sampling
            this.gammazero = null;
            this.betazero = null;
            this.lastgammazero = null;
            this.lastbetazero = null;

            this.transitionTimeout = null;
            this.updateCall = null;
            this.event = null;

            this.updateBind = this.update.bind(this);
            this.resetBind = this.reset.bind(this);

            this.element = element;
            this.settings = this.extendSettings(settings);

            this.reverse = this.settings.reverse ? -1 : 1;
            this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
            this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
            this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
            this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
            this.gyroscopeSamples = this.settings.gyroscopeSamples;

            this.elementListener = this.getElementListener();

            if (this.glare) {
                this.prepareGlare();
            }

            if (this.fullPageListening) {
                this.updateClientSize();
            }

            this.addEventListeners();
            this.updateInitialPosition();
        }

        VanillaTilt.isSettingTrue = function isSettingTrue(setting) {
            return setting === "" || setting === true || setting === 1;
        };

        /**
         * Method returns element what will be listen mouse events
         * @return {Node}
         */


        VanillaTilt.prototype.getElementListener = function getElementListener() {
            if (this.fullPageListening) {
                return window.document;
            }

            if (typeof this.settings["mouse-event-element"] === "string") {
                var mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);

                if (mouseEventElement) {
                    return mouseEventElement;
                }
            }

            if (this.settings["mouse-event-element"] instanceof Node) {
                return this.settings["mouse-event-element"];
            }

            return this.element;
        };

        /**
         * Method set listen methods for this.elementListener
         * @return {Node}
         */


        VanillaTilt.prototype.addEventListeners = function addEventListeners() {
            this.onMouseEnterBind = this.onMouseEnter.bind(this);
            this.onMouseMoveBind = this.onMouseMove.bind(this);
            this.onMouseLeaveBind = this.onMouseLeave.bind(this);
            this.onWindowResizeBind = this.onWindowResize.bind(this);
            this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);

            this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
            this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
            this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);

            if (this.glare || this.fullPageListening) {
                window.addEventListener("resize", this.onWindowResizeBind);
            }

            if (this.gyroscope) {
                window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
            }
        };

        /**
         * Method remove event listeners from current this.elementListener
         */


        VanillaTilt.prototype.removeEventListeners = function removeEventListeners() {
            this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
            this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
            this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);

            if (this.gyroscope) {
                window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
            }

            if (this.glare || this.fullPageListening) {
                window.removeEventListener("resize", this.onWindowResizeBind);
            }
        };

        VanillaTilt.prototype.destroy = function destroy() {
            clearTimeout(this.transitionTimeout);
            if (this.updateCall !== null) {
                cancelAnimationFrame(this.updateCall);
            }

            this.reset();

            this.removeEventListeners();
            this.element.vanillaTilt = null;
            delete this.element.vanillaTilt;

            this.element = null;
        };

        VanillaTilt.prototype.onDeviceOrientation = function onDeviceOrientation(event) {
            if (event.gamma === null || event.beta === null) {
                return;
            }

            this.updateElementPosition();

            if (this.gyroscopeSamples > 0) {
                this.lastgammazero = this.gammazero;
                this.lastbetazero = this.betazero;

                if (this.gammazero === null) {
                    this.gammazero = event.gamma;
                    this.betazero = event.beta;
                } else {
                    this.gammazero = (event.gamma + this.lastgammazero) / 2;
                    this.betazero = (event.beta + this.lastbetazero) / 2;
                }

                this.gyroscopeSamples -= 1;
            }

            var totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
            var totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;

            var degreesPerPixelX = totalAngleX / this.width;
            var degreesPerPixelY = totalAngleY / this.height;

            var angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
            var angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);

            var posX = angleX / degreesPerPixelX;
            var posY = angleY / degreesPerPixelY;

            if (this.updateCall !== null) {
                cancelAnimationFrame(this.updateCall);
            }

            this.event = {
                clientX: posX + this.left,
                clientY: posY + this.top
            };

            this.updateCall = requestAnimationFrame(this.updateBind);
        };

        VanillaTilt.prototype.onMouseEnter = function onMouseEnter() {
            this.updateElementPosition();
            this.element.style.willChange = "transform";
            this.setTransition();
        };

        VanillaTilt.prototype.onMouseMove = function onMouseMove(event) {
            if (this.updateCall !== null) {
                cancelAnimationFrame(this.updateCall);
            }

            this.event = event;
            this.updateCall = requestAnimationFrame(this.updateBind);
        };

        VanillaTilt.prototype.onMouseLeave = function onMouseLeave() {
            this.setTransition();

            if (this.settings.reset) {
                requestAnimationFrame(this.resetBind);
            }
        };

        VanillaTilt.prototype.reset = function reset() {
            this.event = {
                clientX: this.left + this.width / 2,
                clientY: this.top + this.height / 2
            };

            if (this.element && this.element.style) {
                this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(0deg) " + "rotateY(0deg) " + "scale3d(1, 1, 1)";
            }

            this.resetGlare();
        };

        VanillaTilt.prototype.resetGlare = function resetGlare() {
            if (this.glare) {
                this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
                this.glareElement.style.opacity = "0";
            }
        };

        VanillaTilt.prototype.updateInitialPosition = function updateInitialPosition() {
            if (this.settings.startX === 0 && this.settings.startY === 0) {
                return;
            }

            this.onMouseEnter();

            if (this.fullPageListening) {
                this.event = {
                    clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
                    clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
                };
            } else {
                this.event = {
                    clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
                    clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
                };
            }

            var backupScale = this.settings.scale;
            this.settings.scale = 1;
            this.update();
            this.settings.scale = backupScale;
            this.resetGlare();
        };

        VanillaTilt.prototype.getValues = function getValues() {
            var x = void 0,
                y = void 0;

            if (this.fullPageListening) {
                x = this.event.clientX / this.clientWidth;
                y = this.event.clientY / this.clientHeight;
            } else {
                x = (this.event.clientX - this.left) / this.width;
                y = (this.event.clientY - this.top) / this.height;
            }

            x = Math.min(Math.max(x, 0), 1);
            y = Math.min(Math.max(y, 0), 1);

            var tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
            var tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
            var angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);

            return {
                tiltX: tiltX,
                tiltY: tiltY,
                percentageX: x * 100,
                percentageY: y * 100,
                angle: angle
            };
        };

        VanillaTilt.prototype.updateElementPosition = function updateElementPosition() {
            var rect = this.element.getBoundingClientRect();

            this.width = this.element.offsetWidth;
            this.height = this.element.offsetHeight;
            this.left = rect.left;
            this.top = rect.top;
        };

        VanillaTilt.prototype.update = function update() {
            var values = this.getValues();

            this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " + "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " + "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";

            if (this.glare) {
                this.glareElement.style.transform = "rotate(" + values.angle + "deg) translate(-50%, -50%)";
                this.glareElement.style.opacity = "" + values.percentageY * this.settings["max-glare"] / 100;
            }

            this.element.dispatchEvent(new CustomEvent("tiltChange", {
                "detail": values
            }));

            this.updateCall = null;
        };

        /**
         * Appends the glare element (if glarePrerender equals false)
         * and sets the default style
         */


        VanillaTilt.prototype.prepareGlare = function prepareGlare() {
            // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
            if (!this.glarePrerender) {
                // Create glare element
                var jsTiltGlare = document.createElement("div");
                jsTiltGlare.classList.add("js-tilt-glare");

                var jsTiltGlareInner = document.createElement("div");
                jsTiltGlareInner.classList.add("js-tilt-glare-inner");

                jsTiltGlare.appendChild(jsTiltGlareInner);
                this.element.appendChild(jsTiltGlare);
            }

            this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
            this.glareElement = this.element.querySelector(".js-tilt-glare-inner");

            if (this.glarePrerender) {
                return;
            }

            Object.assign(this.glareElementWrapper.style, {
                "position": "absolute",
                "top": "0",
                "left": "0",
                "width": "100%",
                "height": "100%",
                "overflow": "hidden",
                "pointer-events": "none"
            });

            Object.assign(this.glareElement.style, {
                "position": "absolute",
                "top": "50%",
                "left": "50%",
                "pointer-events": "none",
                "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                "width": this.element.offsetWidth * 2 + "px",
                "height": this.element.offsetWidth * 2 + "px",
                "transform": "rotate(180deg) translate(-50%, -50%)",
                "transform-origin": "0% 0%",
                "opacity": "0"
            });
        };

        VanillaTilt.prototype.updateGlareSize = function updateGlareSize() {
            if (this.glare) {
                Object.assign(this.glareElement.style, {
                    "width": "" + this.element.offsetWidth * 2,
                    "height": "" + this.element.offsetWidth * 2
                });
            }
        };

        VanillaTilt.prototype.updateClientSize = function updateClientSize() {
            this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        };

        VanillaTilt.prototype.onWindowResize = function onWindowResize() {
            this.updateGlareSize();
            this.updateClientSize();
        };

        VanillaTilt.prototype.setTransition = function setTransition() {
            var _this = this;

            clearTimeout(this.transitionTimeout);
            this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
            if (this.glare) this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing;

            this.transitionTimeout = setTimeout(function () {
                _this.element.style.transition = "";
                if (_this.glare) {
                    _this.glareElement.style.transition = "";
                }
            }, this.settings.speed);
        };

        /**
         * Method return patched settings of instance
         * @param {boolean} settings.reverse - reverse the tilt direction
         * @param {number} settings.max - max tilt rotation (degrees)
         * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
         * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
         * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
         * @param {string} settings.easing - Easing on enter/exit
         * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
         * @param {number} settings.speed - Speed of the enter/exit transition
         * @param {boolean} settings.transition - Set a transition on enter/exit
         * @param {string|null} settings.axis - What axis should be disabled. Can be X or Y
         * @param {boolean} settings.glare - What axis should be disabled. Can be X or Y
         * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
         * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
         * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
         * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
         * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
         * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
         * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
         * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
         */


        VanillaTilt.prototype.extendSettings = function extendSettings(settings) {
            var defaultSettings = {
                reverse: false,
                max: 15,
                startX: 0,
                startY: 0,
                perspective: 1000,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                scale: 1,
                speed: 300,
                transition: true,
                axis: null,
                glare: false,
                "max-glare": 1,
                "glare-prerender": false,
                "full-page-listening": false,
                "mouse-event-element": null,
                reset: true,
                gyroscope: true,
                gyroscopeMinAngleX: -45,
                gyroscopeMaxAngleX: 45,
                gyroscopeMinAngleY: -45,
                gyroscopeMaxAngleY: 45,
                gyroscopeSamples: 10
            };

            var newSettings = {};
            for (var property in defaultSettings) {
                if (property in settings) {
                    newSettings[property] = settings[property];
                } else if (this.element.hasAttribute("data-tilt-" + property)) {
                    var attribute = this.element.getAttribute("data-tilt-" + property);
                    try {
                        newSettings[property] = JSON.parse(attribute);
                    } catch (e) {
                        newSettings[property] = attribute;
                    }
                } else {
                    newSettings[property] = defaultSettings[property];
                }
            }

            return newSettings;
        };

        VanillaTilt.init = function init(elements, settings) {
            if (elements instanceof Node) {
                elements = [elements];
            }

            if (elements instanceof NodeList) {
                elements = [].slice.call(elements);
            }

            if (!(elements instanceof Array)) {
                return;
            }

            elements.forEach(function (element) {
                if (!("vanillaTilt" in element)) {
                    element.vanillaTilt = new VanillaTilt(element, settings);
                }
            });
        };

        return VanillaTilt;
    }();

    if (typeof document !== "undefined") {
        /* expose the class to window */
        window.VanillaTilt = VanillaTilt;

        /**
         * Auto load
         */
        VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
    }

    return VanillaTilt;

}());

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.9.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function ($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function () {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function (slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function () {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

        var _ = this;

        if (typeof (index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof (index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function (targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function (now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function () {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function () {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function () {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function (index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && typeof asNavFor === 'object') {
            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function (slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function () {

        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function () {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function () {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {

            if (_.options.infinite === false) {

                if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) {
                    _.direction = 0;
                } else if (_.direction === 0) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler(slideTo);

        }

    };

    Slick.prototype.buildArrows = function () {

        var _ = this;

        if (_.options.arrows === true) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if (_.slideCount > _.options.slidesToShow) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add(_.$nextArrow)

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function () {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function () {

        var _ = this;

        _.$slides =
            _.$slider
                .children(_.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function (index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function () {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width': (100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function (initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function (event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function (index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function () {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function () {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function () {

        var _ = this, originalSlides;

        if (_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function (event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function (refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.$prevArrow.length) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display', '');

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display', '');

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function () {
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function (slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function (slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function () {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function (slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function () {

        var _ = this;

        // If any child element receives focus within the slider we need to pause the autoplay
        _.$slider
            .off('focus.slick blur.slick')
            .on(
                'focus.slick',
                '*',
                function (event) {
                    var $sf = $(this);

                    setTimeout(function () {
                        if (_.options.pauseOnFocus) {
                            if ($sf.is(':focus')) {
                                _.focussed = true;
                                _.autoPlay();
                            }
                        }
                    }, 0);
                }
            ).on(
            'blur.slick',
            '*',
            function (event) {
                var $sf = $(this);

                // When a blur occurs on any elements within the slider we become unfocused
                if (_.options.pauseOnFocus) {
                    _.focussed = false;
                    _.autoPlay();
                }
            }
        );
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function () {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function (slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1;

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function () {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function () {

        return this;

    };

    Slick.prototype.getSlideCount = function () {

        var _ = this,
            slidesTraversed, swipedSlide, swipeTarget, centerOffset;

        centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
        swipeTarget = (_.swipeLeft * -1) + centerOffset;

        if (_.options.swipeToSlide === true) {

            _.$slideTrack.find('.slick-slide').each(function (index, slide) {

                var slideOuterWidth, slideOffset, slideRightBoundary;
                slideOuterWidth = $(slide).outerWidth();
                slideOffset = slide.offsetLeft;
                if (_.options.centerMode !== true) {
                    slideOffset += (slideOuterWidth / 2);
                }

                slideRightBoundary = slideOffset + (slideOuterWidth);

                if (swipeTarget < slideRightBoundary) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function (creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function () {
        var _ = this,
            numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
            tabControlIndexes = _.getNavigableIndexes().filter(function (val) {
                return (val >= 0) && (val < _.slideCount);
            });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                    var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex;
                    if ($('#' + ariaButtonControl).length) {
                        $(this).attr({
                            'aria-describedby': ariaButtonControl
                        });
                    }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i = _.currentSlide, max = i + _.options.slidesToShow; i < max; i++) {
            if (_.options.focusOnChange) {
                _.$slides.eq(i).attr({'tabindex': '0'});
            } else {
                _.$slides.eq(i).removeAttr('tabindex');
            }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'previous'
                }, _.changeSlide);
            _.$nextArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'next'
                }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function () {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function () {

        var _ = this;

        if (_.options.pauseOnHover) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function () {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function (event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function () {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function () {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function () {

                    image
                        .animate({opacity: 0}, 100, function () {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet);

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes);
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({opacity: 1}, 200, function () {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function () {

                    image
                        .removeAttr('data-lazy')
                        .removeClass('slick-loading')
                        .addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function () {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function () {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function () {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function () {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function (index) {

        var _ = this;

        if (!_.unslicked) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function (event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function (tryCount) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ($imgsToLoad.length) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function () {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet);

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes);
                    }
                }

                image
                    .attr('src', imageSource)
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function () {

                if (tryCount < 3) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function () {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);

                } else {

                    image
                        .removeAttr('data-lazy')
                        .removeClass('slick-loading')
                        .addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [_]);

        }

    };

    Slick.prototype.refresh = function (initializing) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, {currentSlide: currentSlide});

        _.init();

        if (!initializing) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function () {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

            _.respondTo = _.options.respondTo || 'window';

            for (breakpoint in responsiveSettings) {

                l = _.breakpoints.length - 1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function (a, b) {
                return (_.options.mobileFirst) ? a - b : b - a;
            });

        }

    };

    Slick.prototype.reinit = function () {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function () {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) {
                    _.setPosition();
                }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

        var _ = this;

        if (typeof (index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function (position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function () {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function () {

        var _ = this,
            targetLeft;

        _.$slides.each(function (index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function () {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
        Slick.prototype.slickSetOption = function () {

            /**
             * accepts arguments in format of:
             *
             *  - for changing a single option's value:
             *     .slick("setOption", option, value, refresh )
             *
             *  - for changing a set of responsive options:
             *     .slick("setOption", 'responsive', [{}, ...], refresh )
             *
             *  - for updating multiple values at once (not responsive)
             *     .slick("setOption", { 'option': value, ... }, refresh )
             */

            var _ = this, l, item, option, value, refresh = false, type;

            if ($.type(arguments[0]) === 'object') {

                option = arguments[0];
                refresh = arguments[1];
                type = 'multiple';

            } else if ($.type(arguments[0]) === 'string') {

                option = arguments[0];
                value = arguments[1];
                refresh = arguments[2];

                if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

                    type = 'responsive';

                } else if (typeof arguments[1] !== 'undefined') {

                    type = 'single';

                }

            }

            if (type === 'single') {

                _.options[option] = value;


            } else if (type === 'multiple') {

                $.each(option, function (opt, val) {

                    _.options[opt] = val;

                });


            } else if (type === 'responsive') {

                for (item in value) {

                    if ($.type(_.options.responsive) !== 'array') {

                        _.options.responsive = [value[item]];

                    } else {

                        l = _.options.responsive.length - 1;

                        // loop through the responsive object and splice out duplicates.
                        while (l >= 0) {

                            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                                _.options.responsive.splice(l, 1);

                            }

                            l--;

                        }

                        _.options.responsive.push(value[item]);

                    }

                }

            }

            if (refresh) {

                _.unload();
                _.reinit();

            }

        };

    Slick.prototype.setPosition = function () {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function () {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function (index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function () {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                    infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function (toggle) {

        var _ = this;

        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function (event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function () {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function (event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            direction = _.swipeDirection();

            switch (direction) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable(_.currentSlide + _.getSlideCount()) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable(_.currentSlide - _.getSlideCount()) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if (direction != 'vertical') {

                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);

            }

        } else {

            if (_.touchObject.startX !== _.touchObject.curX) {

                _.slideHandler(_.currentSlide);
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function (event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function (event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function (event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function () {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function (fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function () {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function () {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function () {

        var _ = this;

        if (_.options.autoplay) {

            if (document[_.hidden]) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function () {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

/* https://github.com/mhuggins/jquery-countTo
   CountTo */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    var CountTo = function (element, options) {
        this.$element = $(element);
        this.options = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
        this.init();
    };

    CountTo.DEFAULTS = {
        from: 0,               // the number the element should start at
        to: 0,                 // the number the element should end at
        speed: 1000,           // how long it should take to count between the target numbers
        refreshInterval: 100,  // how often the element should be updated
        decimals: 0,           // the number of decimal places to show
        formatter: formatter,  // handler for formatting the value before rendering
        onUpdate: null,        // callback method for every time the element is updated
        onComplete: null       // callback method for when the element finishes updating
    };

    CountTo.prototype.init = function () {
        this.value = this.options.from;
        this.loops = Math.ceil(this.options.speed / this.options.refreshInterval);
        this.loopCount = 0;
        this.increment = (this.options.to - this.options.from) / this.loops;
    };

    CountTo.prototype.dataOptions = function () {
        var options = {
            from: this.$element.data('from'),
            to: this.$element.data('to'),
            speed: this.$element.data('speed'),
            refreshInterval: this.$element.data('refresh-interval'),
            decimals: this.$element.data('decimals')
        };

        var keys = Object.keys(options);

        for (var i in keys) {
            var key = keys[i];

            if (typeof (options[key]) === 'undefined') {
                delete options[key];
            }
        }

        return options;
    };

    CountTo.prototype.update = function () {
        this.value += this.increment;
        this.loopCount++;

        this.render();

        if (typeof (this.options.onUpdate) == 'function') {
            this.options.onUpdate.call(this.$element, this.value);
        }

        if (this.loopCount >= this.loops) {
            clearInterval(this.interval);
            this.value = this.options.to;

            if (typeof (this.options.onComplete) == 'function') {
                this.options.onComplete.call(this.$element, this.value);
            }
        }
    };

    CountTo.prototype.render = function () {
        var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
        this.$element.text(formattedValue);
    };

    CountTo.prototype.restart = function () {
        this.stop();
        this.init();
        this.start();
    };

    CountTo.prototype.start = function () {
        this.stop();
        this.render();
        this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
    };

    CountTo.prototype.stop = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
    };

    CountTo.prototype.toggle = function () {
        if (this.interval) {
            this.stop();
        } else {
            this.start();
        }
    };

    function formatter(value, options) {
        return value.toFixed(options.decimals);
    }

    $.fn.countTo = function (option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('countTo');
            var init = !data || typeof (option) === 'object';
            var options = typeof (option) === 'object' ? option : {};
            var method = typeof (option) === 'string' ? option : 'start';

            if (init) {
                if (data) data.stop();
                $this.data('countTo', data = new CountTo(this, options));
            }

            data[method].call(data);
        });
    };
}));

/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {
    // universal module definition
    /*jshint strict: false */ /* globals define, module, require */
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('jquery-bridget/jquery-bridget', ['jquery'], function (jQuery) {
            return factory(window, jQuery);
        });
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory(
            window,
            require('jquery')
        );
    } else {
        // browser global
        window.jQueryBridget = factory(
            window,
            window.jQuery
        );
    }

}(window, function factory(window, jQuery) {
    'use strict';

// ----- utils ----- //

    var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
    var console = window.console;
    var logError = typeof console == 'undefined' ? function () {
        } :
        function (message) {
            console.error(message);
        };

// ----- jQueryBridget ----- //

    function jQueryBridget(namespace, PluginClass, $) {
        $ = $ || jQuery || window.jQuery;
        if (!$) {
            return;
        }

        // add option method -> $().plugin('option', {...})
        if (!PluginClass.prototype.option) {
            // option setter
            PluginClass.prototype.option = function (opts) {
                // bail out if not an object
                if (!$.isPlainObject(opts)) {
                    return;
                }
                this.options = $.extend(true, this.options, opts);
            };
        }

        // make jQuery plugin
        $.fn[namespace] = function (arg0 /*, arg1 */) {
            if (typeof arg0 == 'string') {
                // method call $().plugin( 'methodName', { options } )
                // shift arguments by 1
                var args = arraySlice.call(arguments, 1);
                return methodCall(this, arg0, args);
            }
            // just $().plugin({ options })
            plainCall(this, arg0);
            return this;
        };

        // $().plugin('methodName')
        function methodCall($elems, methodName, args) {
            var returnValue;
            var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

            $elems.each(function (i, elem) {
                // get instance
                var instance = $.data(elem, namespace);
                if (!instance) {
                    logError(namespace + ' not initialized. Cannot call methods, i.e. ' +
                        pluginMethodStr);
                    return;
                }

                var method = instance[methodName];
                if (!method || methodName.charAt(0) == '_') {
                    logError(pluginMethodStr + ' is not a valid method');
                    return;
                }

                // apply method, get return value
                var value = method.apply(instance, args);
                // set return value if value is returned, use only first value
                returnValue = returnValue === undefined ? value : returnValue;
            });

            return returnValue !== undefined ? returnValue : $elems;
        }

        function plainCall($elems, options) {
            $elems.each(function (i, elem) {
                var instance = $.data(elem, namespace);
                if (instance) {
                    // set options & init
                    instance.option(options);
                    instance._init();
                } else {
                    // initialize new instance
                    instance = new PluginClass(elem, options);
                    $.data(elem, namespace, instance);
                }
            });
        }

        updateJQuery($);

    }

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
    function updateJQuery($) {
        if (!$ || ($ && $.bridget)) {
            return;
        }
        $.bridget = jQueryBridget;
    }

    updateJQuery(jQuery || window.jQuery);

// -----  ----- //

    return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

(function (global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */
    if (typeof define == 'function' && define.amd) {
        // AMD - RequireJS
        define('ev-emitter/ev-emitter', factory);
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS - Browserify, Webpack
        module.exports = factory();
    } else {
        // Browser globals
        global.EvEmitter = factory();
    }

}(typeof window != 'undefined' ? window : this, function () {


    function EvEmitter() {
    }

    var proto = EvEmitter.prototype;

    proto.on = function (eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        // set events hash
        var events = this._events = this._events || {};
        // set listeners array
        var listeners = events[eventName] = events[eventName] || [];
        // only add once
        if (listeners.indexOf(listener) == -1) {
            listeners.push(listener);
        }

        return this;
    };

    proto.once = function (eventName, listener) {
        if (!eventName || !listener) {
            return;
        }
        // add event
        this.on(eventName, listener);
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {};
        // set onceListeners object
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
        // set flag
        onceListeners[listener] = true;

        return this;
    };

    proto.off = function (eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        var index = listeners.indexOf(listener);
        if (index != -1) {
            listeners.splice(index, 1);
        }

        return this;
    };

    proto.emitEvent = function (eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) {
            return;
        }
        // copy over to avoid interference if .off() in listener
        listeners = listeners.slice(0);
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[eventName];

        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
            }
            // trigger listener
            listener.apply(this, args);
        }

        return this;
    };

    proto.allOff = function () {
        delete this._events;
        delete this._onceEvents;
    };

    return EvEmitter;

}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

(function (window, factory) {
    /* jshint strict: false */ /* globals define, module */
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('get-size/get-size', factory);
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory();
    } else {
        // browser global
        window.getSize = factory();
    }

})(window, function factory() {
    'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
    function getStyleSize(value) {
        var num = parseFloat(value);
        // not a percent like '100%', and a number
        var isValid = value.indexOf('%') == -1 && !isNaN(num);
        return isValid && num;
    }

    function noop() {
    }

    var logError = typeof console == 'undefined' ? noop :
        function (message) {
            console.error(message);
        };

// -------------------------- measurements -------------------------- //

    var measurements = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
    ];

    var measurementsLength = measurements.length;

    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            size[measurement] = 0;
        }
        return size;
    }

// -------------------------- getStyle -------------------------- //

    /**
     * getStyle, get style of element, check for Firefox bug
     * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
     */
    function getStyle(elem) {
        var style = getComputedStyle(elem);
        if (!style) {
            logError('Style returned ' + style +
                '. Are you running this code in a hidden iframe on Firefox? ' +
                'See https://bit.ly/getsizebug1');
        }
        return style;
    }

// -------------------------- setup -------------------------- //

    var isSetup = false;

    var isBoxSizeOuter;

    /**
     * setup
     * check isBoxSizerOuter
     * do on first getSize() rather than on page load for Firefox bug
     */
    function setup() {
        // setup once
        if (isSetup) {
            return;
        }
        isSetup = true;

        // -------------------------- box sizing -------------------------- //

        /**
         * Chrome & Safari measure the outer-width on style.width on border-box elems
         * IE11 & Firefox<29 measures the inner-width
         */
        var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';

        var body = document.body || document.documentElement;
        body.appendChild(div);
        var style = getStyle(div);
        // round value for browser zoom. desandro/masonry#928
        isBoxSizeOuter = Math.round(getStyleSize(style.width)) == 200;
        getSize.isBoxSizeOuter = isBoxSizeOuter;

        body.removeChild(div);
    }

// -------------------------- getSize -------------------------- //

    function getSize(elem) {
        setup();

        // use querySeletor if elem is string
        if (typeof elem == 'string') {
            elem = document.querySelector(elem);
        }

        // do not proceed on non-objects
        if (!elem || typeof elem != 'object' || !elem.nodeType) {
            return;
        }

        var style = getStyle(elem);

        // if hidden, everything is 0
        if (style.display == 'none') {
            return getZeroSize();
        }

        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;

        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

        // get all measurements
        for (var i = 0; i < measurementsLength; i++) {
            var measurement = measurements[i];
            var value = style[measurement];
            var num = parseFloat(value);
            // any 'auto', 'medium' value will be 0
            size[measurement] = !isNaN(num) ? num : 0;
        }

        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;

        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

        // overwrite width and height if we can get it from style
        var styleWidth = getStyleSize(style.width);
        if (styleWidth !== false) {
            size.width = styleWidth +
                // add padding and border unless it's already including it
                (isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth);
        }

        var styleHeight = getStyleSize(style.height);
        if (styleHeight !== false) {
            size.height = styleHeight +
                // add padding and border unless it's already including it
                (isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight);
        }

        size.innerWidth = size.width - (paddingWidth + borderWidth);
        size.innerHeight = size.height - (paddingHeight + borderHeight);

        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;

        return size;
    }

    return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

(function (window, factory) {
    /*global define: false, module: false */
    'use strict';
    // universal module definition
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('desandro-matches-selector/matches-selector', factory);
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory();
    } else {
        // browser global
        window.matchesSelector = factory();
    }

}(window, function factory() {
    'use strict';

    var matchesMethod = (function () {
        var ElemProto = window.Element.prototype;
        // check for the standard method name first
        if (ElemProto.matches) {
            return 'matches';
        }
        // check un-prefixed
        if (ElemProto.matchesSelector) {
            return 'matchesSelector';
        }
        // check vendor prefixes
        var prefixes = ['webkit', 'moz', 'ms', 'o'];

        for (var i = 0; i < prefixes.length; i++) {
            var prefix = prefixes[i];
            var method = prefix + 'MatchesSelector';
            if (ElemProto[method]) {
                return method;
            }
        }
    })();

    return function matchesSelector(elem, selector) {
        return elem[matchesMethod](selector);
    };

}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

(function (window, factory) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */

    if (typeof define == 'function' && define.amd) {
        // AMD
        define('fizzy-ui-utils/utils', [
            'desandro-matches-selector/matches-selector'
        ], function (matchesSelector) {
            return factory(window, matchesSelector);
        });
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory(
            window,
            require('desandro-matches-selector')
        );
    } else {
        // browser global
        window.fizzyUIUtils = factory(
            window,
            window.matchesSelector
        );
    }

}(window, function factory(window, matchesSelector) {


    var utils = {};

// ----- extend ----- //

// extends objects
    utils.extend = function (a, b) {
        for (var prop in b) {
            a[prop] = b[prop];
        }
        return a;
    };

// ----- modulo ----- //

    utils.modulo = function (num, div) {
        return ((num % div) + div) % div;
    };

// ----- makeArray ----- //

    var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
    utils.makeArray = function (obj) {
        if (Array.isArray(obj)) {
            // use object if already an array
            return obj;
        }
        // return empty array if undefined or null. #6
        if (obj === null || obj === undefined) {
            return [];
        }

        var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
        if (isArrayLike) {
            // convert nodeList to array
            return arraySlice.call(obj);
        }

        // array of single index
        return [obj];
    };

// ----- removeFrom ----- //

    utils.removeFrom = function (ary, obj) {
        var index = ary.indexOf(obj);
        if (index != -1) {
            ary.splice(index, 1);
        }
    };

// ----- getParent ----- //

    utils.getParent = function (elem, selector) {
        while (elem.parentNode && elem != document.body) {
            elem = elem.parentNode;
            if (matchesSelector(elem, selector)) {
                return elem;
            }
        }
    };

// ----- getQueryElement ----- //

// use element as selector string
    utils.getQueryElement = function (elem) {
        if (typeof elem == 'string') {
            return document.querySelector(elem);
        }
        return elem;
    };

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
    utils.handleEvent = function (event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };

// ----- filterFindElements ----- //

    utils.filterFindElements = function (elems, selector) {
        // make array of elems
        elems = utils.makeArray(elems);
        var ffElems = [];

        elems.forEach(function (elem) {
            // check that elem is an actual element
            if (!(elem instanceof HTMLElement)) {
                return;
            }
            // add elem if no selector
            if (!selector) {
                ffElems.push(elem);
                return;
            }
            // filter & find items if we have a selector
            // filter
            if (matchesSelector(elem, selector)) {
                ffElems.push(elem);
            }
            // find children
            var childElems = elem.querySelectorAll(selector);
            // concat childElems to filterFound array
            for (var i = 0; i < childElems.length; i++) {
                ffElems.push(childElems[i]);
            }
        });

        return ffElems;
    };

// ----- debounceMethod ----- //

    utils.debounceMethod = function (_class, methodName, threshold) {
        threshold = threshold || 100;
        // original method
        var method = _class.prototype[methodName];
        var timeoutName = methodName + 'Timeout';

        _class.prototype[methodName] = function () {
            var timeout = this[timeoutName];
            clearTimeout(timeout);

            var args = arguments;
            var _this = this;
            this[timeoutName] = setTimeout(function () {
                method.apply(_this, args);
                delete _this[timeoutName];
            }, threshold);
        };
    };

// ----- docReady ----- //

    utils.docReady = function (callback) {
        var readyState = document.readyState;
        if (readyState == 'complete' || readyState == 'interactive') {
            // do async to allow for other scripts to run. metafizzy/flickity#441
            setTimeout(callback);
        } else {
            document.addEventListener('DOMContentLoaded', callback);
        }
    };

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
    utils.toDashed = function (str) {
        return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
            return $1 + '-' + $2;
        }).toLowerCase();
    };

    var console = window.console;
    /**
     * allow user to initialize classes via [data-namespace] or .js-namespace class
     * htmlInit( Widget, 'widgetName' )
     * options are parsed from data-namespace-options
     */
    utils.htmlInit = function (WidgetClass, namespace) {
        utils.docReady(function () {
            var dashedNamespace = utils.toDashed(namespace);
            var dataAttr = 'data-' + dashedNamespace;
            var dataAttrElems = document.querySelectorAll('[' + dataAttr + ']');
            var jsDashElems = document.querySelectorAll('.js-' + dashedNamespace);
            var elems = utils.makeArray(dataAttrElems)
                .concat(utils.makeArray(jsDashElems));
            var dataOptionsAttr = dataAttr + '-options';
            var jQuery = window.jQuery;

            elems.forEach(function (elem) {
                var attr = elem.getAttribute(dataAttr) ||
                    elem.getAttribute(dataOptionsAttr);
                var options;
                try {
                    options = attr && JSON.parse(attr);
                } catch (error) {
                    // log error, do not initialize
                    if (console) {
                        console.error('Error parsing ' + dataAttr + ' on ' + elem.className +
                            ': ' + error);
                    }
                    return;
                }
                // initialize
                var instance = new WidgetClass(elem, options);
                // make available via $().data('namespace')
                if (jQuery) {
                    jQuery.data(elem, namespace, instance);
                }
            });

        });
    };

// -----  ----- //

    return utils;

}));

/**
 * Outlayer Item
 */

(function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */
    if (typeof define == 'function' && define.amd) {
        // AMD - RequireJS
        define('outlayer/item', [
                'ev-emitter/ev-emitter',
                'get-size/get-size'
            ],
            factory
        );
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS - Browserify, Webpack
        module.exports = factory(
            require('ev-emitter'),
            require('get-size')
        );
    } else {
        // browser global
        window.Outlayer = {};
        window.Outlayer.Item = factory(
            window.EvEmitter,
            window.getSize
        );
    }

}(window, function factory(EvEmitter, getSize) {
    'use strict';

// ----- helpers ----- //

    function isEmptyObj(obj) {
        for (var prop in obj) {
            return false;
        }
        prop = null;
        return true;
    }

// -------------------------- CSS3 support -------------------------- //


    var docElemStyle = document.documentElement.style;

    var transitionProperty = typeof docElemStyle.transition == 'string' ?
        'transition' : 'WebkitTransition';
    var transformProperty = typeof docElemStyle.transform == 'string' ?
        'transform' : 'WebkitTransform';

    var transitionEndEvent = {
        WebkitTransition: 'webkitTransitionEnd',
        transition: 'transitionend'
    }[transitionProperty];

// cache all vendor properties that could have vendor prefix
    var vendorProperties = {
        transform: transformProperty,
        transition: transitionProperty,
        transitionDuration: transitionProperty + 'Duration',
        transitionProperty: transitionProperty + 'Property',
        transitionDelay: transitionProperty + 'Delay'
    };

// -------------------------- Item -------------------------- //

    function Item(element, layout) {
        if (!element) {
            return;
        }

        this.element = element;
        // parent layout class, i.e. Masonry, Isotope, or Packery
        this.layout = layout;
        this.position = {
            x: 0,
            y: 0
        };

        this._create();
    }

// inherit EvEmitter
    var proto = Item.prototype = Object.create(EvEmitter.prototype);
    proto.constructor = Item;

    proto._create = function () {
        // transition objects
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        };

        this.css({
            position: 'absolute'
        });
    };

// trigger specified handler for event type
    proto.handleEvent = function (event) {
        var method = 'on' + event.type;
        if (this[method]) {
            this[method](event);
        }
    };

    proto.getSize = function () {
        this.size = getSize(this.element);
    };

    /**
     * apply CSS styles to element
     * @param {Object} style
     */
    proto.css = function (style) {
        var elemStyle = this.element.style;

        for (var prop in style) {
            // use vendor property if available
            var supportedProp = vendorProperties[prop] || prop;
            elemStyle[supportedProp] = style[prop];
        }
    };

    // measure position, and sets it
    proto.getPosition = function () {
        var style = getComputedStyle(this.element);
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        var xValue = style[isOriginLeft ? 'left' : 'right'];
        var yValue = style[isOriginTop ? 'top' : 'bottom'];
        var x = parseFloat(xValue);
        var y = parseFloat(yValue);
        // convert percent to pixels
        var layoutSize = this.layout.size;
        if (xValue.indexOf('%') != -1) {
            x = (x / 100) * layoutSize.width;
        }
        if (yValue.indexOf('%') != -1) {
            y = (y / 100) * layoutSize.height;
        }
        // clean up 'auto' or other non-integer values
        x = isNaN(x) ? 0 : x;
        y = isNaN(y) ? 0 : y;
        // remove padding from measurement
        x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
        y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

        this.position.x = x;
        this.position.y = y;
    };

// set settled position, apply padding
    proto.layoutPosition = function () {
        var layoutSize = this.layout.size;
        var style = {};
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');

        // x
        var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
        var xProperty = isOriginLeft ? 'left' : 'right';
        var xResetProperty = isOriginLeft ? 'right' : 'left';

        var x = this.position.x + layoutSize[xPadding];
        // set in percentage or pixels
        style[xProperty] = this.getXValue(x);
        // reset other property
        style[xResetProperty] = '';

        // y
        var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
        var yProperty = isOriginTop ? 'top' : 'bottom';
        var yResetProperty = isOriginTop ? 'bottom' : 'top';

        var y = this.position.y + layoutSize[yPadding];
        // set in percentage or pixels
        style[yProperty] = this.getYValue(y);
        // reset other property
        style[yResetProperty] = '';

        this.css(style);
        this.emitEvent('layout', [this]);
    };

    proto.getXValue = function (x) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && !isHorizontal ?
            ((x / this.layout.size.width) * 100) + '%' : x + 'px';
    };

    proto.getYValue = function (y) {
        var isHorizontal = this.layout._getOption('horizontal');
        return this.layout.options.percentPosition && isHorizontal ?
            ((y / this.layout.size.height) * 100) + '%' : y + 'px';
    };

    proto._transitionTo = function (x, y) {
        this.getPosition();
        // get current x & y from top/left
        var curX = this.position.x;
        var curY = this.position.y;

        var didNotMove = x == this.position.x && y == this.position.y;

        // save end position
        this.setPosition(x, y);

        // if did not move and not transitioning, just go to layout
        if (didNotMove && !this.isTransitioning) {
            this.layoutPosition();
            return;
        }

        var transX = x - curX;
        var transY = y - curY;
        var transitionStyle = {};
        transitionStyle.transform = this.getTranslate(transX, transY);

        this.transition({
            to: transitionStyle,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: true
        });
    };

    proto.getTranslate = function (x, y) {
        // flip cooridinates if origin on right or bottom
        var isOriginLeft = this.layout._getOption('originLeft');
        var isOriginTop = this.layout._getOption('originTop');
        x = isOriginLeft ? x : -x;
        y = isOriginTop ? y : -y;
        return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
    };

// non transition + transform support
    proto.goTo = function (x, y) {
        this.setPosition(x, y);
        this.layoutPosition();
    };

    proto.moveTo = proto._transitionTo;

    proto.setPosition = function (x, y) {
        this.position.x = parseFloat(x);
        this.position.y = parseFloat(y);
    };

// ----- transition ----- //

    /**
     * @param {Object} style - CSS
     * @param {Function} onTransitionEnd
     */

// non transition, just trigger callback
    proto._nonTransition = function (args) {
        this.css(args.to);
        if (args.isCleaning) {
            this._removeStyles(args.to);
        }
        for (var prop in args.onTransitionEnd) {
            args.onTransitionEnd[prop].call(this);
        }
    };

    /**
     * proper transition
     * @param {Object} args - arguments
     *   @param {Object} to - style to transition to
     *   @param {Object} from - style to start transition from
     *   @param {Boolean} isCleaning - removes transition styles after transition
     *   @param {Function} onTransitionEnd - callback
     */
    proto.transition = function (args) {
        // redirect to nonTransition if no transition duration
        if (!parseFloat(this.layout.options.transitionDuration)) {
            this._nonTransition(args);
            return;
        }

        var _transition = this._transn;
        // keep track of onTransitionEnd callback by css property
        for (var prop in args.onTransitionEnd) {
            _transition.onEnd[prop] = args.onTransitionEnd[prop];
        }
        // keep track of properties that are transitioning
        for (prop in args.to) {
            _transition.ingProperties[prop] = true;
            // keep track of properties to clean up when transition is done
            if (args.isCleaning) {
                _transition.clean[prop] = true;
            }
        }

        // set from styles
        if (args.from) {
            this.css(args.from);
            // force redraw. http://blog.alexmaccaw.com/css-transitions
            var h = this.element.offsetHeight;
            // hack for JSHint to hush about unused var
            h = null;
        }
        // enable transition
        this.enableTransition(args.to);
        // set styles that are transitioning
        this.css(args.to);

        this.isTransitioning = true;

    };

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
    function toDashedAll(str) {
        return str.replace(/([A-Z])/g, function ($1) {
            return '-' + $1.toLowerCase();
        });
    }

    var transitionProps = 'opacity,' + toDashedAll(transformProperty);

    proto.enableTransition = function (/* style */) {
        // HACK changing transitionProperty during a transition
        // will cause transition to jump
        if (this.isTransitioning) {
            return;
        }

        // make `transition: foo, bar, baz` from style object
        // HACK un-comment this when enableTransition can work
        // while a transition is happening
        // var transitionValues = [];
        // for ( var prop in style ) {
        //   // dash-ify camelCased properties like WebkitTransition
        //   prop = vendorProperties[ prop ] || prop;
        //   transitionValues.push( toDashedAll( prop ) );
        // }
        // munge number to millisecond, to match stagger
        var duration = this.layout.options.transitionDuration;
        duration = typeof duration == 'number' ? duration + 'ms' : duration;
        // enable transition styles
        this.css({
            transitionProperty: transitionProps,
            transitionDuration: duration,
            transitionDelay: this.staggerDelay || 0
        });
        // listen for transition end event
        this.element.addEventListener(transitionEndEvent, this, false);
    };

// ----- events ----- //

    proto.onwebkitTransitionEnd = function (event) {
        this.ontransitionend(event);
    };

    proto.onotransitionend = function (event) {
        this.ontransitionend(event);
    };

// properties that I munge to make my life easier
    var dashedVendorProperties = {
        '-webkit-transform': 'transform'
    };

    proto.ontransitionend = function (event) {
        // disregard bubbled events from children
        if (event.target !== this.element) {
            return;
        }
        var _transition = this._transn;
        // get property name of transitioned property, convert to prefix-free
        var propertyName = dashedVendorProperties[event.propertyName] || event.propertyName;

        // remove property that has completed transitioning
        delete _transition.ingProperties[propertyName];
        // check if any properties are still transitioning
        if (isEmptyObj(_transition.ingProperties)) {
            // all properties have completed transitioning
            this.disableTransition();
        }
        // clean style
        if (propertyName in _transition.clean) {
            // clean up style
            this.element.style[event.propertyName] = '';
            delete _transition.clean[propertyName];
        }
        // trigger onTransitionEnd callback
        if (propertyName in _transition.onEnd) {
            var onTransitionEnd = _transition.onEnd[propertyName];
            onTransitionEnd.call(this);
            delete _transition.onEnd[propertyName];
        }

        this.emitEvent('transitionEnd', [this]);
    };

    proto.disableTransition = function () {
        this.removeTransitionStyles();
        this.element.removeEventListener(transitionEndEvent, this, false);
        this.isTransitioning = false;
    };

    /**
     * removes style property from element
     * @param {Object} style
     **/
    proto._removeStyles = function (style) {
        // clean up transition styles
        var cleanStyle = {};
        for (var prop in style) {
            cleanStyle[prop] = '';
        }
        this.css(cleanStyle);
    };

    var cleanTransitionStyle = {
        transitionProperty: '',
        transitionDuration: '',
        transitionDelay: ''
    };

    proto.removeTransitionStyles = function () {
        // remove transition
        this.css(cleanTransitionStyle);
    };

// ----- stagger ----- //

    proto.stagger = function (delay) {
        delay = isNaN(delay) ? 0 : delay;
        this.staggerDelay = delay + 'ms';
    };

// ----- show/hide/remove ----- //

// remove element from DOM
    proto.removeElem = function () {
        this.element.parentNode.removeChild(this.element);
        // remove display: none
        this.css({display: ''});
        this.emitEvent('remove', [this]);
    };

    proto.remove = function () {
        // just remove element if no transition support or no transition
        if (!transitionProperty || !parseFloat(this.layout.options.transitionDuration)) {
            this.removeElem();
            return;
        }

        // start transition
        this.once('transitionEnd', function () {
            this.removeElem();
        });
        this.hide();
    };

    proto.reveal = function () {
        delete this.isHidden;
        // remove display: none
        this.css({display: ''});

        var options = this.layout.options;

        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
        onTransitionEnd[transitionEndProperty] = this.onRevealTransitionEnd;

        this.transition({
            from: options.hiddenStyle,
            to: options.visibleStyle,
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };

    proto.onRevealTransitionEnd = function () {
        // check if still visible
        // during transition, item may have been hidden
        if (!this.isHidden) {
            this.emitEvent('reveal');
        }
    };

    /**
     * get style property use for hide/reveal transition end
     * @param {String} styleProperty - hiddenStyle/visibleStyle
     * @returns {String}
     */
    proto.getHideRevealTransitionEndProperty = function (styleProperty) {
        var optionStyle = this.layout.options[styleProperty];
        // use opacity
        if (optionStyle.opacity) {
            return 'opacity';
        }
        // get first property
        for (var prop in optionStyle) {
            return prop;
        }
    };

    proto.hide = function () {
        // set flag
        this.isHidden = true;
        // remove display: none
        this.css({display: ''});

        var options = this.layout.options;

        var onTransitionEnd = {};
        var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
        onTransitionEnd[transitionEndProperty] = this.onHideTransitionEnd;

        this.transition({
            from: options.visibleStyle,
            to: options.hiddenStyle,
            // keep hidden stuff hidden
            isCleaning: true,
            onTransitionEnd: onTransitionEnd
        });
    };

    proto.onHideTransitionEnd = function () {
        // check if still hidden
        // during transition, item may have been un-hidden
        if (this.isHidden) {
            this.css({display: 'none'});
            this.emitEvent('hide');
        }
    };

    proto.destroy = function () {
        this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: ''
        });
    };

    return Item;

}));

/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

(function (window, factory) {
    'use strict';
    // universal module definition
    /* jshint strict: false */ /* globals define, module, require */
    if (typeof define == 'function' && define.amd) {
        // AMD - RequireJS
        define('outlayer/outlayer', [
                'ev-emitter/ev-emitter',
                'get-size/get-size',
                'fizzy-ui-utils/utils',
                './item'
            ],
            function (EvEmitter, getSize, utils, Item) {
                return factory(window, EvEmitter, getSize, utils, Item);
            }
        );
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS - Browserify, Webpack
        module.exports = factory(
            window,
            require('ev-emitter'),
            require('get-size'),
            require('fizzy-ui-utils'),
            require('./item')
        );
    } else {
        // browser global
        window.Outlayer = factory(
            window,
            window.EvEmitter,
            window.getSize,
            window.fizzyUIUtils,
            window.Outlayer.Item
        );
    }

}(window, function factory(window, EvEmitter, getSize, utils, Item) {
    'use strict';

// ----- vars ----- //

    var console = window.console;
    var jQuery = window.jQuery;
    var noop = function () {
    };

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
    var GUID = 0;
// internal store of all Outlayer intances
    var instances = {};


    /**
     * @param {Element, String} element
     * @param {Object} options
     * @constructor
     */
    function Outlayer(element, options) {
        var queryElement = utils.getQueryElement(element);
        if (!queryElement) {
            if (console) {
                console.error('Bad element for ' + this.constructor.namespace +
                    ': ' + (queryElement || element));
            }
            return;
        }
        this.element = queryElement;
        // add jQuery
        if (jQuery) {
            this.$element = jQuery(this.element);
        }

        // options
        this.options = utils.extend({}, this.constructor.defaults);
        this.option(options);

        // add id for Outlayer.getFromElement
        var id = ++GUID;
        this.element.outlayerGUID = id; // expando
        instances[id] = this; // associate via id

        // kick it off
        this._create();

        var isInitLayout = this._getOption('initLayout');
        if (isInitLayout) {
            this.layout();
        }
    }

// settings are for internal use only
    Outlayer.namespace = 'outlayer';
    Outlayer.Item = Item;

// default options
    Outlayer.defaults = {
        containerStyle: {
            position: 'relative'
        },
        initLayout: true,
        originLeft: true,
        originTop: true,
        resize: true,
        resizeContainer: true,
        // item options
        transitionDuration: '0.4s',
        hiddenStyle: {
            opacity: 0,
            transform: 'scale(0.001)'
        },
        visibleStyle: {
            opacity: 1,
            transform: 'scale(1)'
        }
    };

    var proto = Outlayer.prototype;
// inherit EvEmitter
    utils.extend(proto, EvEmitter.prototype);

    /**
     * set options
     * @param {Object} opts
     */
    proto.option = function (opts) {
        utils.extend(this.options, opts);
    };

    /**
     * get backwards compatible option value, check old name
     */
    proto._getOption = function (option) {
        var oldOption = this.constructor.compatOptions[option];
        return oldOption && this.options[oldOption] !== undefined ?
            this.options[oldOption] : this.options[option];
    };

    Outlayer.compatOptions = {
        // currentName: oldName
        initLayout: 'isInitLayout',
        horizontal: 'isHorizontal',
        layoutInstant: 'isLayoutInstant',
        originLeft: 'isOriginLeft',
        originTop: 'isOriginTop',
        resize: 'isResizeBound',
        resizeContainer: 'isResizingContainer'
    };

    proto._create = function () {
        // get items from children
        this.reloadItems();
        // elements that affect layout, but are not laid out
        this.stamps = [];
        this.stamp(this.options.stamp);
        // set container style
        utils.extend(this.element.style, this.options.containerStyle);

        // bind resize method
        var canBindResize = this._getOption('resize');
        if (canBindResize) {
            this.bindResize();
        }
    };

// goes through all children again and gets bricks in proper order
    proto.reloadItems = function () {
        // collection of item elements
        this.items = this._itemize(this.element.children);
    };


    /**
     * turn elements into Outlayer.Items to be used in layout
     * @param {Array or NodeList or HTMLElement} elems
     * @returns {Array} items - collection of new Outlayer Items
     */
    proto._itemize = function (elems) {

        var itemElems = this._filterFindItemElements(elems);
        var Item = this.constructor.Item;

        // create new Outlayer Items for collection
        var items = [];
        for (var i = 0; i < itemElems.length; i++) {
            var elem = itemElems[i];
            var item = new Item(elem, this);
            items.push(item);
        }

        return items;
    };

    /**
     * get item elements to be used in layout
     * @param {Array or NodeList or HTMLElement} elems
     * @returns {Array} items - item elements
     */
    proto._filterFindItemElements = function (elems) {
        return utils.filterFindElements(elems, this.options.itemSelector);
    };

    /**
     * getter method for getting item elements
     * @returns {Array} elems - collection of item elements
     */
    proto.getItemElements = function () {
        return this.items.map(function (item) {
            return item.element;
        });
    };

// ----- init & layout ----- //

    /**
     * lays out all items
     */
    proto.layout = function () {
        this._resetLayout();
        this._manageStamps();

        // don't animate first layout
        var layoutInstant = this._getOption('layoutInstant');
        var isInstant = layoutInstant !== undefined ?
            layoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, isInstant);

        // flag for initalized
        this._isLayoutInited = true;
    };

// _init is alias for layout
    proto._init = proto.layout;

    /**
     * logic before any new layout
     */
    proto._resetLayout = function () {
        this.getSize();
    };


    proto.getSize = function () {
        this.size = getSize(this.element);
    };

    /**
     * get measurement from option, for columnWidth, rowHeight, gutter
     * if option is String -> get element from selector string, & get size of element
     * if option is Element -> get size of element
     * else use option as a number
     *
     * @param {String} measurement
     * @param {String} size - width or height
     * @private
     */
    proto._getMeasurement = function (measurement, size) {
        var option = this.options[measurement];
        var elem;
        if (!option) {
            // default to 0
            this[measurement] = 0;
        } else {
            // use option as an element
            if (typeof option == 'string') {
                elem = this.element.querySelector(option);
            } else if (option instanceof HTMLElement) {
                elem = option;
            }
            // use size of element, if element
            this[measurement] = elem ? getSize(elem)[size] : option;
        }
    };

    /**
     * layout a collection of item elements
     * @api public
     */
    proto.layoutItems = function (items, isInstant) {
        items = this._getItemsForLayout(items);

        this._layoutItems(items, isInstant);

        this._postLayout();
    };

    /**
     * get the items to be laid out
     * you may want to skip over some items
     * @param {Array} items
     * @returns {Array} items
     */
    proto._getItemsForLayout = function (items) {
        return items.filter(function (item) {
            return !item.isIgnored;
        });
    };

    /**
     * layout items
     * @param {Array} items
     * @param {Boolean} isInstant
     */
    proto._layoutItems = function (items, isInstant) {
        this._emitCompleteOnItems('layout', items);

        if (!items || !items.length) {
            // no items, emit event with empty array
            return;
        }

        var queue = [];

        items.forEach(function (item) {
            // get x/y object from method
            var position = this._getItemLayoutPosition(item);
            // enqueue
            position.item = item;
            position.isInstant = isInstant || item.isLayoutInstant;
            queue.push(position);
        }, this);

        this._processLayoutQueue(queue);
    };

    /**
     * get item layout position
     * @param {Outlayer.Item} item
     * @returns {Object} x and y position
     */
    proto._getItemLayoutPosition = function ( /* item */) {
        return {
            x: 0,
            y: 0
        };
    };

    /**
     * iterate over array and position each item
     * Reason being - separating this logic prevents 'layout invalidation'
     * thx @paul_irish
     * @param {Array} queue
     */
    proto._processLayoutQueue = function (queue) {
        this.updateStagger();
        queue.forEach(function (obj, i) {
            this._positionItem(obj.item, obj.x, obj.y, obj.isInstant, i);
        }, this);
    };

// set stagger from option in milliseconds number
    proto.updateStagger = function () {
        var stagger = this.options.stagger;
        if (stagger === null || stagger === undefined) {
            this.stagger = 0;
            return;
        }
        this.stagger = getMilliseconds(stagger);
        return this.stagger;
    };

    /**
     * Sets position of item in DOM
     * @param {Outlayer.Item} item
     * @param {Number} x - horizontal position
     * @param {Number} y - vertical position
     * @param {Boolean} isInstant - disables transitions
     */
    proto._positionItem = function (item, x, y, isInstant, i) {
        if (isInstant) {
            // if not transition, just set CSS
            item.goTo(x, y);
        } else {
            item.stagger(i * this.stagger);
            item.moveTo(x, y);
        }
    };

    /**
     * Any logic you want to do after each layout,
     * i.e. size the container
     */
    proto._postLayout = function () {
        this.resizeContainer();
    };

    proto.resizeContainer = function () {
        var isResizingContainer = this._getOption('resizeContainer');
        if (!isResizingContainer) {
            return;
        }
        var size = this._getContainerSize();
        if (size) {
            this._setContainerMeasure(size.width, true);
            this._setContainerMeasure(size.height, false);
        }
    };

    /**
     * Sets width or height of container if returned
     * @returns {Object} size
     *   @param {Number} width
     *   @param {Number} height
     */
    proto._getContainerSize = noop;

    /**
     * @param {Number} measure - size of width or height
     * @param {Boolean} isWidth
     */
    proto._setContainerMeasure = function (measure, isWidth) {
        if (measure === undefined) {
            return;
        }

        var elemSize = this.size;
        // add padding and border width if border box
        if (elemSize.isBorderBox) {
            measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
                elemSize.borderLeftWidth + elemSize.borderRightWidth :
                elemSize.paddingBottom + elemSize.paddingTop +
                elemSize.borderTopWidth + elemSize.borderBottomWidth;
        }

        measure = Math.max(measure, 0);
        this.element.style[isWidth ? 'width' : 'height'] = measure + 'px';
    };

    /**
     * emit eventComplete on a collection of items events
     * @param {String} eventName
     * @param {Array} items - Outlayer.Items
     */
    proto._emitCompleteOnItems = function (eventName, items) {
        var _this = this;

        function onComplete() {
            _this.dispatchEvent(eventName + 'Complete', null, [items]);
        }

        var count = items.length;
        if (!items || !count) {
            onComplete();
            return;
        }

        var doneCount = 0;

        function tick() {
            doneCount++;
            if (doneCount == count) {
                onComplete();
            }
        }

        // bind callback
        items.forEach(function (item) {
            item.once(eventName, tick);
        });
    };

    /**
     * emits events via EvEmitter and jQuery events
     * @param {String} type - name of event
     * @param {Event} event - original event
     * @param {Array} args - extra arguments
     */
    proto.dispatchEvent = function (type, event, args) {
        // add original event to arguments
        var emitArgs = event ? [event].concat(args) : args;
        this.emitEvent(type, emitArgs);

        if (jQuery) {
            // set this.$element
            this.$element = this.$element || jQuery(this.element);
            if (event) {
                // create jQuery event
                var $event = jQuery.Event(event);
                $event.type = type;
                this.$element.trigger($event, args);
            } else {
                // just trigger with type if no event available
                this.$element.trigger(type, args);
            }
        }
    };

// -------------------------- ignore & stamps -------------------------- //


    /**
     * keep item in collection, but do not lay it out
     * ignored items do not get skipped in layout
     * @param {Element} elem
     */
    proto.ignore = function (elem) {
        var item = this.getItem(elem);
        if (item) {
            item.isIgnored = true;
        }
    };

    /**
     * return item to layout collection
     * @param {Element} elem
     */
    proto.unignore = function (elem) {
        var item = this.getItem(elem);
        if (item) {
            delete item.isIgnored;
        }
    };

    /**
     * adds elements to stamps
     * @param {NodeList, Array, Element, or String} elems
     */
    proto.stamp = function (elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }

        this.stamps = this.stamps.concat(elems);
        // ignore
        elems.forEach(this.ignore, this);
    };

    /**
     * removes elements to stamps
     * @param {NodeList, Array, or Element} elems
     */
    proto.unstamp = function (elems) {
        elems = this._find(elems);
        if (!elems) {
            return;
        }

        elems.forEach(function (elem) {
            // filter out removed stamp elements
            utils.removeFrom(this.stamps, elem);
            this.unignore(elem);
        }, this);
    };

    /**
     * finds child elements
     * @param {NodeList, Array, Element, or String} elems
     * @returns {Array} elems
     */
    proto._find = function (elems) {
        if (!elems) {
            return;
        }
        // if string, use argument as selector string
        if (typeof elems == 'string') {
            elems = this.element.querySelectorAll(elems);
        }
        elems = utils.makeArray(elems);
        return elems;
    };

    proto._manageStamps = function () {
        if (!this.stamps || !this.stamps.length) {
            return;
        }

        this._getBoundingRect();

        this.stamps.forEach(this._manageStamp, this);
    };

// update boundingLeft / Top
    proto._getBoundingRect = function () {
        // get bounding rect for container element
        var boundingRect = this.element.getBoundingClientRect();
        var size = this.size;
        this._boundingRect = {
            left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
            top: boundingRect.top + size.paddingTop + size.borderTopWidth,
            right: boundingRect.right - (size.paddingRight + size.borderRightWidth),
            bottom: boundingRect.bottom - (size.paddingBottom + size.borderBottomWidth)
        };
    };

    /**
     * @param {Element} stamp
     **/
    proto._manageStamp = noop;

    /**
     * get x/y position of element relative to container element
     * @param {Element} elem
     * @returns {Object} offset - has left, top, right, bottom
     */
    proto._getElementOffset = function (elem) {
        var boundingRect = elem.getBoundingClientRect();
        var thisRect = this._boundingRect;
        var size = getSize(elem);
        var offset = {
            left: boundingRect.left - thisRect.left - size.marginLeft,
            top: boundingRect.top - thisRect.top - size.marginTop,
            right: thisRect.right - boundingRect.right - size.marginRight,
            bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
        };
        return offset;
    };

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
    proto.handleEvent = utils.handleEvent;

    /**
     * Bind layout to window resizing
     */
    proto.bindResize = function () {
        window.addEventListener('resize', this);
        this.isResizeBound = true;
    };

    /**
     * Unbind layout to window resizing
     */
    proto.unbindResize = function () {
        window.removeEventListener('resize', this);
        this.isResizeBound = false;
    };

    proto.onresize = function () {
        this.resize();
    };

    utils.debounceMethod(Outlayer, 'onresize', 100);

    proto.resize = function () {
        // don't trigger if size did not change
        // or if resize was unbound. See #9
        if (!this.isResizeBound || !this.needsResizeLayout()) {
            return;
        }

        this.layout();
    };

    /**
     * check if layout is needed post layout
     * @returns Boolean
     */
    proto.needsResizeLayout = function () {
        var size = getSize(this.element);
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var hasSizes = this.size && size;
        return hasSizes && size.innerWidth !== this.size.innerWidth;
    };

// -------------------------- methods -------------------------- //

    /**
     * add items to Outlayer instance
     * @param {Array or NodeList or Element} elems
     * @returns {Array} items - Outlayer.Items
     **/
    proto.addItems = function (elems) {
        var items = this._itemize(elems);
        // add items to collection
        if (items.length) {
            this.items = this.items.concat(items);
        }
        return items;
    };

    /**
     * Layout newly-appended item elements
     * @param {Array or NodeList or Element} elems
     */
    proto.appended = function (elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        // layout and reveal just the new items
        this.layoutItems(items, true);
        this.reveal(items);
    };

    /**
     * Layout prepended elements
     * @param {Array or NodeList or Element} elems
     */
    proto.prepended = function (elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        // add items to beginning of collection
        var previousItems = this.items.slice(0);
        this.items = items.concat(previousItems);
        // start new layout
        this._resetLayout();
        this._manageStamps();
        // layout new stuff without transition
        this.layoutItems(items, true);
        this.reveal(items);
        // layout previous items
        this.layoutItems(previousItems);
    };

    /**
     * reveal a collection of items
     * @param {Array of Outlayer.Items} items
     */
    proto.reveal = function (items) {
        this._emitCompleteOnItems('reveal', items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function (item, i) {
            item.stagger(i * stagger);
            item.reveal();
        });
    };

    /**
     * hide a collection of items
     * @param {Array of Outlayer.Items} items
     */
    proto.hide = function (items) {
        this._emitCompleteOnItems('hide', items);
        if (!items || !items.length) {
            return;
        }
        var stagger = this.updateStagger();
        items.forEach(function (item, i) {
            item.stagger(i * stagger);
            item.hide();
        });
    };

    /**
     * reveal item elements
     * @param {Array}, {Element}, {NodeList} items
     */
    proto.revealItemElements = function (elems) {
        var items = this.getItems(elems);
        this.reveal(items);
    };

    /**
     * hide item elements
     * @param {Array}, {Element}, {NodeList} items
     */
    proto.hideItemElements = function (elems) {
        var items = this.getItems(elems);
        this.hide(items);
    };

    /**
     * get Outlayer.Item, given an Element
     * @param {Element} elem
     * @param {Function} callback
     * @returns {Outlayer.Item} item
     */
    proto.getItem = function (elem) {
        // loop through items to get the one that matches
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (item.element == elem) {
                // return item
                return item;
            }
        }
    };

    /**
     * get collection of Outlayer.Items, given Elements
     * @param {Array} elems
     * @returns {Array} items - Outlayer.Items
     */
    proto.getItems = function (elems) {
        elems = utils.makeArray(elems);
        var items = [];
        elems.forEach(function (elem) {
            var item = this.getItem(elem);
            if (item) {
                items.push(item);
            }
        }, this);

        return items;
    };

    /**
     * remove element(s) from instance and DOM
     * @param {Array or NodeList or Element} elems
     */
    proto.remove = function (elems) {
        var removeItems = this.getItems(elems);

        this._emitCompleteOnItems('remove', removeItems);

        // bail if no items to remove
        if (!removeItems || !removeItems.length) {
            return;
        }

        removeItems.forEach(function (item) {
            item.remove();
            // remove item from collection
            utils.removeFrom(this.items, item);
        }, this);
    };

// ----- destroy ----- //

// remove and disable Outlayer instance
    proto.destroy = function () {
        // clean up dynamic styles
        var style = this.element.style;
        style.height = '';
        style.position = '';
        style.width = '';
        // destroy items
        this.items.forEach(function (item) {
            item.destroy();
        });

        this.unbindResize();

        var id = this.element.outlayerGUID;
        delete instances[id]; // remove reference to instance by id
        delete this.element.outlayerGUID;
        // remove data for jQuery
        if (jQuery) {
            jQuery.removeData(this.element, this.constructor.namespace);
        }

    };

// -------------------------- data -------------------------- //

    /**
     * get Outlayer instance from element
     * @param {Element} elem
     * @returns {Outlayer}
     */
    Outlayer.data = function (elem) {
        elem = utils.getQueryElement(elem);
        var id = elem && elem.outlayerGUID;
        return id && instances[id];
    };


// -------------------------- create Outlayer class -------------------------- //

    /**
     * create a layout class
     * @param {String} namespace
     */
    Outlayer.create = function (namespace, options) {
        // sub-class Outlayer
        var Layout = subclass(Outlayer);
        // apply new options and compatOptions
        Layout.defaults = utils.extend({}, Outlayer.defaults);
        utils.extend(Layout.defaults, options);
        Layout.compatOptions = utils.extend({}, Outlayer.compatOptions);

        Layout.namespace = namespace;

        Layout.data = Outlayer.data;

        // sub-class Item
        Layout.Item = subclass(Item);

        // -------------------------- declarative -------------------------- //

        utils.htmlInit(Layout, namespace);

        // -------------------------- jQuery bridge -------------------------- //

        // make into jQuery plugin
        if (jQuery && jQuery.bridget) {
            jQuery.bridget(namespace, Layout);
        }

        return Layout;
    };

    function subclass(Parent) {
        function SubClass() {
            Parent.apply(this, arguments);
        }

        SubClass.prototype = Object.create(Parent.prototype);
        SubClass.prototype.constructor = SubClass;

        return SubClass;
    }

// ----- helpers ----- //

// how many milliseconds are in each unit
    var msUnits = {
        ms: 1,
        s: 1000
    };

// munge time-like parameter into millisecond number
// '0.4s' -> 40
    function getMilliseconds(time) {
        if (typeof time == 'number') {
            return time;
        }
        var matches = time.match(/(^\d*\.?\d*)(\w*)/);
        var num = matches && matches[1];
        var unit = matches && matches[2];
        if (!num.length) {
            return 0;
        }
        num = parseFloat(num);
        var mult = msUnits[unit] || 1;
        return num * mult;
    }

// ----- fin ----- //

// back in global
    Outlayer.Item = Item;

    return Outlayer;

}));

/**
 * Isotope Item
 **/

(function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('isotope-layout/js/item', [
                'outlayer/outlayer'
            ],
            factory);
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory(
            require('outlayer')
        );
    } else {
        // browser global
        window.Isotope = window.Isotope || {};
        window.Isotope.Item = factory(
            window.Outlayer
        );
    }

}(window, function factory(Outlayer) {
    'use strict';

// -------------------------- Item -------------------------- //

// sub-class Outlayer Item
    function Item() {
        Outlayer.Item.apply(this, arguments);
    }

    var proto = Item.prototype = Object.create(Outlayer.Item.prototype);

    var _create = proto._create;
    proto._create = function () {
        // assign id, used for original-order sorting
        this.id = this.layout.itemGUID++;
        _create.call(this);
        this.sortData = {};
    };

    proto.updateSortData = function () {
        if (this.isIgnored) {
            return;
        }
        // default sorters
        this.sortData.id = this.id;
        // for backward compatibility
        this.sortData['original-order'] = this.id;
        this.sortData.random = Math.random();
        // go thru getSortData obj and apply the sorters
        var getSortData = this.layout.options.getSortData;
        var sorters = this.layout._sorters;
        for (var key in getSortData) {
            var sorter = sorters[key];
            this.sortData[key] = sorter(this.element, this);
        }
    };

    var _destroy = proto.destroy;
    proto.destroy = function () {
        // call super
        _destroy.apply(this, arguments);
        // reset display, #741
        this.css({
            display: ''
        });
    };

    return Item;

}));

/**
 * Isotope LayoutMode
 */

(function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('isotope-layout/js/layout-mode', [
                'get-size/get-size',
                'outlayer/outlayer'
            ],
            factory);
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory(
            require('get-size'),
            require('outlayer')
        );
    } else {
        // browser global
        window.Isotope = window.Isotope || {};
        window.Isotope.LayoutMode = factory(
            window.getSize,
            window.Outlayer
        );
    }

}(window, function factory(getSize, Outlayer) {
    'use strict';

    // layout mode class
    function LayoutMode(isotope) {
        this.isotope = isotope;
        // link properties
        if (isotope) {
            this.options = isotope.options[this.namespace];
            this.element = isotope.element;
            this.items = isotope.filteredItems;
            this.size = isotope.size;
        }
    }

    var proto = LayoutMode.prototype;

    /**
     * some methods should just defer to default Outlayer method
     * and reference the Isotope instance as `this`
     **/
    var facadeMethods = [
        '_resetLayout',
        '_getItemLayoutPosition',
        '_manageStamp',
        '_getContainerSize',
        '_getElementOffset',
        'needsResizeLayout',
        '_getOption'
    ];

    facadeMethods.forEach(function (methodName) {
        proto[methodName] = function () {
            return Outlayer.prototype[methodName].apply(this.isotope, arguments);
        };
    });

    // -----  ----- //

    // for horizontal layout modes, check vertical size
    proto.needsVerticalResizeLayout = function () {
        // don't trigger if size did not change
        var size = getSize(this.isotope.element);
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var hasSizes = this.isotope.size && size;
        return hasSizes && size.innerHeight != this.isotope.size.innerHeight;
    };

    // ----- measurements ----- //

    proto._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
    };

    proto.getColumnWidth = function () {
        this.getSegmentSize('column', 'Width');
    };

    proto.getRowHeight = function () {
        this.getSegmentSize('row', 'Height');
    };

    /**
     * get columnWidth or rowHeight
     * segment: 'column' or 'row'
     * size 'Width' or 'Height'
     **/
    proto.getSegmentSize = function (segment, size) {
        var segmentName = segment + size;
        var outerSize = 'outer' + size;
        // columnWidth / outerWidth // rowHeight / outerHeight
        this._getMeasurement(segmentName, outerSize);
        // got rowHeight or columnWidth, we can chill
        if (this[segmentName]) {
            return;
        }
        // fall back to item of first element
        var firstItemSize = this.getFirstItemSize();
        this[segmentName] = firstItemSize && firstItemSize[outerSize] ||
            // or size of container
            this.isotope.size['inner' + size];
    };

    proto.getFirstItemSize = function () {
        var firstItem = this.isotope.filteredItems[0];
        return firstItem && firstItem.element && getSize(firstItem.element);
    };

    // ----- methods that should reference isotope ----- //

    proto.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
    };

    proto.getSize = function () {
        this.isotope.getSize();
        this.size = this.isotope.size;
    };

    // -------------------------- create -------------------------- //

    LayoutMode.modes = {};

    LayoutMode.create = function (namespace, options) {

        function Mode() {
            LayoutMode.apply(this, arguments);
        }

        Mode.prototype = Object.create(proto);
        Mode.prototype.constructor = Mode;

        // default options
        if (options) {
            Mode.options = options;
        }

        Mode.prototype.namespace = namespace;
        // register in Isotope
        LayoutMode.modes[namespace] = Mode;

        return Mode;
    };

    return LayoutMode;

}));

/*!
 * Masonry v4.2.1
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

(function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('masonry-layout/masonry', [
                'outlayer/outlayer',
                'get-size/get-size'
            ],
            factory);
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory(
            require('outlayer'),
            require('get-size')
        );
    } else {
        // browser global
        window.Masonry = factory(
            window.Outlayer,
            window.getSize
        );
    }

}(window, function factory(Outlayer, getSize) {


// -------------------------- masonryDefinition -------------------------- //

    // create an Outlayer layout class
    var Masonry = Outlayer.create('masonry');
    // isFitWidth -> fitWidth
    Masonry.compatOptions.fitWidth = 'isFitWidth';

    var proto = Masonry.prototype;

    proto._resetLayout = function () {
        this.getSize();
        this._getMeasurement('columnWidth', 'outerWidth');
        this._getMeasurement('gutter', 'outerWidth');
        this.measureColumns();

        // reset column Y
        this.colYs = [];
        for (var i = 0; i < this.cols; i++) {
            this.colYs.push(0);
        }

        this.maxY = 0;
        this.horizontalColIndex = 0;
    };

    proto.measureColumns = function () {
        this.getContainerWidth();
        // if columnWidth is 0, default to outerWidth of first item
        if (!this.columnWidth) {
            var firstItem = this.items[0];
            var firstItemElem = firstItem && firstItem.element;
            // columnWidth fall back to item of first element
            this.columnWidth = firstItemElem && getSize(firstItemElem).outerWidth ||
                // if first elem has no width, default to size of container
                this.containerWidth;
        }

        var columnWidth = this.columnWidth += this.gutter;

        // calculate columns
        var containerWidth = this.containerWidth + this.gutter;
        var cols = containerWidth / columnWidth;
        // fix rounding errors, typically with gutters
        var excess = columnWidth - containerWidth % columnWidth;
        // if overshoot is less than a pixel, round up, otherwise floor it
        var mathMethod = excess && excess < 1 ? 'round' : 'floor';
        cols = Math[mathMethod](cols);
        this.cols = Math.max(cols, 1);
    };

    proto.getContainerWidth = function () {
        // container is parent if fit width
        var isFitWidth = this._getOption('fitWidth');
        var container = isFitWidth ? this.element.parentNode : this.element;
        // check that this.size and size are there
        // IE8 triggers resize on body size change, so they might not be
        var size = getSize(container);
        this.containerWidth = size && size.innerWidth;
    };

    proto._getItemLayoutPosition = function (item) {
        item.getSize();
        // how many columns does this brick span
        var remainder = item.size.outerWidth % this.columnWidth;
        var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
        // round if off by 1 pixel, otherwise use ceil
        var colSpan = Math[mathMethod](item.size.outerWidth / this.columnWidth);
        colSpan = Math.min(colSpan, this.cols);
        // use horizontal or top column position
        var colPosMethod = this.options.horizontalOrder ?
            '_getHorizontalColPosition' : '_getTopColPosition';
        var colPosition = this[colPosMethod](colSpan, item);
        // position the brick
        var position = {
            x: this.columnWidth * colPosition.col,
            y: colPosition.y
        };
        // apply setHeight to necessary columns
        var setHeight = colPosition.y + item.size.outerHeight;
        var setMax = colSpan + colPosition.col;
        for (var i = colPosition.col; i < setMax; i++) {
            this.colYs[i] = setHeight;
        }

        return position;
    };

    proto._getTopColPosition = function (colSpan) {
        var colGroup = this._getTopColGroup(colSpan);
        // get the minimum Y value from the columns
        var minimumY = Math.min.apply(Math, colGroup);

        return {
            col: colGroup.indexOf(minimumY),
            y: minimumY,
        };
    };

    /**
     * @param {Number} colSpan - number of columns the element spans
     * @returns {Array} colGroup
     */
    proto._getTopColGroup = function (colSpan) {
        if (colSpan < 2) {
            // if brick spans only one column, use all the column Ys
            return this.colYs;
        }

        var colGroup = [];
        // how many different places could this brick fit horizontally
        var groupCount = this.cols + 1 - colSpan;
        // for each group potential horizontal position
        for (var i = 0; i < groupCount; i++) {
            colGroup[i] = this._getColGroupY(i, colSpan);
        }
        return colGroup;
    };

    proto._getColGroupY = function (col, colSpan) {
        if (colSpan < 2) {
            return this.colYs[col];
        }
        // make an array of colY values for that one group
        var groupColYs = this.colYs.slice(col, col + colSpan);
        // and get the max value of the array
        return Math.max.apply(Math, groupColYs);
    };

    // get column position based on horizontal index. #873
    proto._getHorizontalColPosition = function (colSpan, item) {
        var col = this.horizontalColIndex % this.cols;
        var isOver = colSpan > 1 && col + colSpan > this.cols;
        // shift to next row if item can't fit on current row
        col = isOver ? 0 : col;
        // don't let zero-size items take up space
        var hasSize = item.size.outerWidth && item.size.outerHeight;
        this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

        return {
            col: col,
            y: this._getColGroupY(col, colSpan),
        };
    };

    proto._manageStamp = function (stamp) {
        var stampSize = getSize(stamp);
        var offset = this._getElementOffset(stamp);
        // get the columns that this stamp affects
        var isOriginLeft = this._getOption('originLeft');
        var firstX = isOriginLeft ? offset.left : offset.right;
        var lastX = firstX + stampSize.outerWidth;
        var firstCol = Math.floor(firstX / this.columnWidth);
        firstCol = Math.max(0, firstCol);
        var lastCol = Math.floor(lastX / this.columnWidth);
        // lastCol should not go over if multiple of columnWidth #425
        lastCol -= lastX % this.columnWidth ? 0 : 1;
        lastCol = Math.min(this.cols - 1, lastCol);
        // set colYs to bottom of the stamp

        var isOriginTop = this._getOption('originTop');
        var stampMaxY = (isOriginTop ? offset.top : offset.bottom) +
            stampSize.outerHeight;
        for (var i = firstCol; i <= lastCol; i++) {
            this.colYs[i] = Math.max(stampMaxY, this.colYs[i]);
        }
    };

    proto._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var size = {
            height: this.maxY
        };

        if (this._getOption('fitWidth')) {
            size.width = this._getContainerFitWidth();
        }

        return size;
    };

    proto._getContainerFitWidth = function () {
        var unusedCols = 0;
        // count unused columns
        var i = this.cols;
        while (--i) {
            if (this.colYs[i] !== 0) {
                break;
            }
            unusedCols++;
        }
        // fit container to columns that have been used
        return (this.cols - unusedCols) * this.columnWidth - this.gutter;
    };

    proto.needsResizeLayout = function () {
        var previousWidth = this.containerWidth;
        this.getContainerWidth();
        return previousWidth != this.containerWidth;
    };

    return Masonry;

}));

/*!
 * Masonry layout mode
 * sub-classes Masonry
 * https://masonry.desandro.com
 */

(function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('isotope-layout/js/layout-modes/masonry', [
                '../layout-mode',
                'masonry-layout/masonry'
            ],
            factory);
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory(
            require('../layout-mode'),
            require('masonry-layout')
        );
    } else {
        // browser global
        factory(
            window.Isotope.LayoutMode,
            window.Masonry
        );
    }

}(window, function factory(LayoutMode, Masonry) {
    'use strict';

// -------------------------- masonryDefinition -------------------------- //

    // create an Outlayer layout class
    var MasonryMode = LayoutMode.create('masonry');

    var proto = MasonryMode.prototype;

    var keepModeMethods = {
        _getElementOffset: true,
        layout: true,
        _getMeasurement: true
    };

    // inherit Masonry prototype
    for (var method in Masonry.prototype) {
        // do not inherit mode methods
        if (!keepModeMethods[method]) {
            proto[method] = Masonry.prototype[method];
        }
    }

    var measureColumns = proto.measureColumns;
    proto.measureColumns = function () {
        // set items, used if measuring first item
        this.items = this.isotope.filteredItems;
        measureColumns.call(this);
    };

    // point to mode options for fitWidth
    var _getOption = proto._getOption;
    proto._getOption = function (option) {
        if (option == 'fitWidth') {
            return this.options.isFitWidth !== undefined ?
                this.options.isFitWidth : this.options.fitWidth;
        }
        return _getOption.apply(this.isotope, arguments);
    };

    return MasonryMode;

}));

/**
 * fitRows layout mode
 */

(function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('isotope-layout/js/layout-modes/fit-rows', [
                '../layout-mode'
            ],
            factory);
    } else if (typeof exports == 'object') {
        // CommonJS
        module.exports = factory(
            require('../layout-mode')
        );
    } else {
        // browser global
        factory(
            window.Isotope.LayoutMode
        );
    }

}(window, function factory(LayoutMode) {
    'use strict';

    var FitRows = LayoutMode.create('fitRows');

    var proto = FitRows.prototype;

    proto._resetLayout = function () {
        this.x = 0;
        this.y = 0;
        this.maxY = 0;
        this._getMeasurement('gutter', 'outerWidth');
    };

    proto._getItemLayoutPosition = function (item) {
        item.getSize();

        var itemWidth = item.size.outerWidth + this.gutter;
        // if this element cannot fit in the current row
        var containerWidth = this.isotope.size.innerWidth + this.gutter;
        if (this.x !== 0 && itemWidth + this.x > containerWidth) {
            this.x = 0;
            this.y = this.maxY;
        }

        var position = {
            x: this.x,
            y: this.y
        };

        this.maxY = Math.max(this.maxY, this.y + item.size.outerHeight);
        this.x += itemWidth;

        return position;
    };

    proto._getContainerSize = function () {
        return {height: this.maxY};
    };

    return FitRows;

}));

/**
 * vertical layout mode
 */

(function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == 'function' && define.amd) {
        // AMD
        define('isotope-layout/js/layout-modes/vertical', [
                '../layout-mode'
            ],
            factory);
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory(
            require('../layout-mode')
        );
    } else {
        // browser global
        factory(
            window.Isotope.LayoutMode
        );
    }

}(window, function factory(LayoutMode) {
    'use strict';

    var Vertical = LayoutMode.create('vertical', {
        horizontalAlignment: 0
    });

    var proto = Vertical.prototype;

    proto._resetLayout = function () {
        this.y = 0;
    };

    proto._getItemLayoutPosition = function (item) {
        item.getSize();
        var x = (this.isotope.size.innerWidth - item.size.outerWidth) *
            this.options.horizontalAlignment;
        var y = this.y;
        this.y += item.size.outerHeight;
        return {x: x, y: y};
    };

    proto._getContainerSize = function () {
        return {height: this.y};
    };

    return Vertical;

}));

/*!
 * Isotope v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */

(function (window, factory) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if (typeof define == 'function' && define.amd) {
        // AMD
        define([
                'outlayer/outlayer',
                'get-size/get-size',
                'desandro-matches-selector/matches-selector',
                'fizzy-ui-utils/utils',
                'isotope-layout/js/item',
                'isotope-layout/js/layout-mode',
                // include default layout modes
                'isotope-layout/js/layout-modes/masonry',
                'isotope-layout/js/layout-modes/fit-rows',
                'isotope-layout/js/layout-modes/vertical'
            ],
            function (Outlayer, getSize, matchesSelector, utils, Item, LayoutMode) {
                return factory(window, Outlayer, getSize, matchesSelector, utils, Item, LayoutMode);
            });
    } else if (typeof module == 'object' && module.exports) {
        // CommonJS
        module.exports = factory(
            window,
            require('outlayer'),
            require('get-size'),
            require('desandro-matches-selector'),
            require('fizzy-ui-utils'),
            require('isotope-layout/js/item'),
            require('isotope-layout/js/layout-mode'),
            // include default layout modes
            require('isotope-layout/js/layout-modes/masonry'),
            require('isotope-layout/js/layout-modes/fit-rows'),
            require('isotope-layout/js/layout-modes/vertical')
        );
    } else {
        // browser global
        window.Isotope = factory(
            window,
            window.Outlayer,
            window.getSize,
            window.matchesSelector,
            window.fizzyUIUtils,
            window.Isotope.Item,
            window.Isotope.LayoutMode
        );
    }

}(window, function factory(window, Outlayer, getSize, matchesSelector, utils,
                           Item, LayoutMode) {


// -------------------------- vars -------------------------- //

    var jQuery = window.jQuery;

// -------------------------- helpers -------------------------- //

    var trim = String.prototype.trim ?
        function (str) {
            return str.trim();
        } :
        function (str) {
            return str.replace(/^\s+|\s+$/g, '');
        };

// -------------------------- isotopeDefinition -------------------------- //

    // create an Outlayer layout class
    var Isotope = Outlayer.create('isotope', {
        layoutMode: 'masonry',
        isJQueryFiltering: true,
        sortAscending: true
    });

    Isotope.Item = Item;
    Isotope.LayoutMode = LayoutMode;

    var proto = Isotope.prototype;

    proto._create = function () {
        this.itemGUID = 0;
        // functions that sort items
        this._sorters = {};
        this._getSorters();
        // call super
        Outlayer.prototype._create.call(this);

        // create layout modes
        this.modes = {};
        // start filteredItems with all items
        this.filteredItems = this.items;
        // keep of track of sortBys
        this.sortHistory = ['original-order'];
        // create from registered layout modes
        for (var name in LayoutMode.modes) {
            this._initLayoutMode(name);
        }
    };

    proto.reloadItems = function () {
        // reset item ID counter
        this.itemGUID = 0;
        // call super
        Outlayer.prototype.reloadItems.call(this);
    };

    proto._itemize = function () {
        var items = Outlayer.prototype._itemize.apply(this, arguments);
        // assign ID for original-order
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.id = this.itemGUID++;
        }
        this._updateItemsSortData(items);
        return items;
    };


    // -------------------------- layout -------------------------- //

    proto._initLayoutMode = function (name) {
        var Mode = LayoutMode.modes[name];
        // set mode options
        // HACK extend initial options, back-fill in default options
        var initialOpts = this.options[name] || {};
        this.options[name] = Mode.options ?
            utils.extend(Mode.options, initialOpts) : initialOpts;
        // init layout mode instance
        this.modes[name] = new Mode(this);
    };


    proto.layout = function () {
        // if first time doing layout, do all magic
        if (!this._isLayoutInited && this._getOption('initLayout')) {
            this.arrange();
            return;
        }
        this._layout();
    };

    // private method to be used in layout() & magic()
    proto._layout = function () {
        // don't animate first layout
        var isInstant = this._getIsInstant();
        // layout flow
        this._resetLayout();
        this._manageStamps();
        this.layoutItems(this.filteredItems, isInstant);

        // flag for initalized
        this._isLayoutInited = true;
    };

    // filter + sort + layout
    proto.arrange = function (opts) {
        // set any options pass
        this.option(opts);
        this._getIsInstant();
        // filter, sort, and layout

        // filter
        var filtered = this._filter(this.items);
        this.filteredItems = filtered.matches;

        this._bindArrangeComplete();

        if (this._isInstant) {
            this._noTransition(this._hideReveal, [filtered]);
        } else {
            this._hideReveal(filtered);
        }

        this._sort();
        this._layout();
    };
    // alias to _init for main plugin method
    proto._init = proto.arrange;

    proto._hideReveal = function (filtered) {
        this.reveal(filtered.needReveal);
        this.hide(filtered.needHide);
    };

    // HACK
    // Don't animate/transition first layout
    // Or don't animate/transition other layouts
    proto._getIsInstant = function () {
        var isLayoutInstant = this._getOption('layoutInstant');
        var isInstant = isLayoutInstant !== undefined ? isLayoutInstant :
            !this._isLayoutInited;
        this._isInstant = isInstant;
        return isInstant;
    };

    // listen for layoutComplete, hideComplete and revealComplete
    // to trigger arrangeComplete
    proto._bindArrangeComplete = function () {
        // listen for 3 events to trigger arrangeComplete
        var isLayoutComplete, isHideComplete, isRevealComplete;
        var _this = this;

        function arrangeParallelCallback() {
            if (isLayoutComplete && isHideComplete && isRevealComplete) {
                _this.dispatchEvent('arrangeComplete', null, [_this.filteredItems]);
            }
        }

        this.once('layoutComplete', function () {
            isLayoutComplete = true;
            arrangeParallelCallback();
        });
        this.once('hideComplete', function () {
            isHideComplete = true;
            arrangeParallelCallback();
        });
        this.once('revealComplete', function () {
            isRevealComplete = true;
            arrangeParallelCallback();
        });
    };

    // -------------------------- filter -------------------------- //

    proto._filter = function (items) {
        var filter = this.options.filter;
        filter = filter || '*';
        var matches = [];
        var hiddenMatched = [];
        var visibleUnmatched = [];

        var test = this._getFilterTest(filter);

        // test each item
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.isIgnored) {
                continue;
            }
            // add item to either matched or unmatched group
            var isMatched = test(item);
            // item.isFilterMatched = isMatched;
            // add to matches if its a match
            if (isMatched) {
                matches.push(item);
            }
            // add to additional group if item needs to be hidden or revealed
            if (isMatched && item.isHidden) {
                hiddenMatched.push(item);
            } else if (!isMatched && !item.isHidden) {
                visibleUnmatched.push(item);
            }
        }

        // return collections of items to be manipulated
        return {
            matches: matches,
            needReveal: hiddenMatched,
            needHide: visibleUnmatched
        };
    };

    // get a jQuery, function, or a matchesSelector test given the filter
    proto._getFilterTest = function (filter) {
        if (jQuery && this.options.isJQueryFiltering) {
            // use jQuery
            return function (item) {
                return jQuery(item.element).is(filter);
            };
        }
        if (typeof filter == 'function') {
            // use filter as function
            return function (item) {
                return filter(item.element);
            };
        }
        // default, use filter as selector string
        return function (item) {
            return matchesSelector(item.element, filter);
        };
    };

    // -------------------------- sorting -------------------------- //

    /**
     * @params {Array} elems
     * @public
     */
    proto.updateSortData = function (elems) {
        // get items
        var items;
        if (elems) {
            elems = utils.makeArray(elems);
            items = this.getItems(elems);
        } else {
            // update all items if no elems provided
            items = this.items;
        }

        this._getSorters();
        this._updateItemsSortData(items);
    };

    proto._getSorters = function () {
        var getSortData = this.options.getSortData;
        for (var key in getSortData) {
            var sorter = getSortData[key];
            this._sorters[key] = mungeSorter(sorter);
        }
    };

    /**
     * @params {Array} items - of Isotope.Items
     * @private
     */
    proto._updateItemsSortData = function (items) {
        // do not update if no items
        var len = items && items.length;

        for (var i = 0; len && i < len; i++) {
            var item = items[i];
            item.updateSortData();
        }
    };

    // ----- munge sorter ----- //

    // encapsulate this, as we just need mungeSorter
    // other functions in here are just for munging
    var mungeSorter = (function () {
        // add a magic layer to sorters for convienent shorthands
        // `.foo-bar` will use the text of .foo-bar querySelector
        // `[foo-bar]` will use attribute
        // you can also add parser
        // `.foo-bar parseInt` will parse that as a number
        function mungeSorter(sorter) {
            // if not a string, return function or whatever it is
            if (typeof sorter != 'string') {
                return sorter;
            }
            // parse the sorter string
            var args = trim(sorter).split(' ');
            var query = args[0];
            // check if query looks like [an-attribute]
            var attrMatch = query.match(/^\[(.+)\]$/);
            var attr = attrMatch && attrMatch[1];
            var getValue = getValueGetter(attr, query);
            // use second argument as a parser
            var parser = Isotope.sortDataParsers[args[1]];
            // parse the value, if there was a parser
            sorter = parser ? function (elem) {
                    return elem && parser(getValue(elem));
                } :
                // otherwise just return value
                function (elem) {
                    return elem && getValue(elem);
                };

            return sorter;
        }

        // get an attribute getter, or get text of the querySelector
        function getValueGetter(attr, query) {
            // if query looks like [foo-bar], get attribute
            if (attr) {
                return function getAttribute(elem) {
                    return elem.getAttribute(attr);
                };
            }

            // otherwise, assume its a querySelector, and get its text
            return function getChildText(elem) {
                var child = elem.querySelector(query);
                return child && child.textContent;
            };
        }

        return mungeSorter;
    })();

    // parsers used in getSortData shortcut strings
    Isotope.sortDataParsers = {
        'parseInt': function (val) {
            return parseInt(val, 10);
        },
        'parseFloat': function (val) {
            return parseFloat(val);
        }
    };

    // ----- sort method ----- //

    // sort filteredItem order
    proto._sort = function () {
        if (!this.options.sortBy) {
            return;
        }
        // keep track of sortBy History
        var sortBys = utils.makeArray(this.options.sortBy);
        if (!this._getIsSameSortBy(sortBys)) {
            // concat all sortBy and sortHistory, add to front, oldest goes in last
            this.sortHistory = sortBys.concat(this.sortHistory);
        }
        // sort magic
        var itemSorter = getItemSorter(this.sortHistory, this.options.sortAscending);
        this.filteredItems.sort(itemSorter);
    };

    // check if sortBys is same as start of sortHistory
    proto._getIsSameSortBy = function (sortBys) {
        for (var i = 0; i < sortBys.length; i++) {
            if (sortBys[i] != this.sortHistory[i]) {
                return false;
            }
        }
        return true;
    };

    // returns a function used for sorting
    function getItemSorter(sortBys, sortAsc) {
        return function sorter(itemA, itemB) {
            // cycle through all sortKeys
            for (var i = 0; i < sortBys.length; i++) {
                var sortBy = sortBys[i];
                var a = itemA.sortData[sortBy];
                var b = itemB.sortData[sortBy];
                if (a > b || a < b) {
                    // if sortAsc is an object, use the value given the sortBy key
                    var isAscending = sortAsc[sortBy] !== undefined ? sortAsc[sortBy] : sortAsc;
                    var direction = isAscending ? 1 : -1;
                    return (a > b ? 1 : -1) * direction;
                }
            }
            return 0;
        };
    }

    // -------------------------- methods -------------------------- //

    // get layout mode
    proto._mode = function () {
        var layoutMode = this.options.layoutMode;
        var mode = this.modes[layoutMode];
        if (!mode) {
            // TODO console.error
            throw new Error('No layout mode: ' + layoutMode);
        }
        // HACK sync mode's options
        // any options set after init for layout mode need to be synced
        mode.options = this.options[layoutMode];
        return mode;
    };

    proto._resetLayout = function () {
        // trigger original reset layout
        Outlayer.prototype._resetLayout.call(this);
        this._mode()._resetLayout();
    };

    proto._getItemLayoutPosition = function (item) {
        return this._mode()._getItemLayoutPosition(item);
    };

    proto._manageStamp = function (stamp) {
        this._mode()._manageStamp(stamp);
    };

    proto._getContainerSize = function () {
        return this._mode()._getContainerSize();
    };

    proto.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
    };

    // -------------------------- adding & removing -------------------------- //

    // HEADS UP overwrites default Outlayer appended
    proto.appended = function (elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        // filter, layout, reveal new items
        var filteredItems = this._filterRevealAdded(items);
        // add to filteredItems
        this.filteredItems = this.filteredItems.concat(filteredItems);
    };

    // HEADS UP overwrites default Outlayer prepended
    proto.prepended = function (elems) {
        var items = this._itemize(elems);
        if (!items.length) {
            return;
        }
        // start new layout
        this._resetLayout();
        this._manageStamps();
        // filter, layout, reveal new items
        var filteredItems = this._filterRevealAdded(items);
        // layout previous items
        this.layoutItems(this.filteredItems);
        // add to items and filteredItems
        this.filteredItems = filteredItems.concat(this.filteredItems);
        this.items = items.concat(this.items);
    };

    proto._filterRevealAdded = function (items) {
        var filtered = this._filter(items);
        this.hide(filtered.needHide);
        // reveal all new items
        this.reveal(filtered.matches);
        // layout new items, no transition
        this.layoutItems(filtered.matches, true);
        return filtered.matches;
    };

    /**
     * Filter, sort, and layout newly-appended item elements
     * @param {Array or NodeList or Element} elems
     */
    proto.insert = function (elems) {
        var items = this.addItems(elems);
        if (!items.length) {
            return;
        }
        // append item elements
        var i, item;
        var len = items.length;
        for (i = 0; i < len; i++) {
            item = items[i];
            this.element.appendChild(item.element);
        }
        // filter new stuff
        var filteredInsertItems = this._filter(items).matches;
        // set flag
        for (i = 0; i < len; i++) {
            items[i].isLayoutInstant = true;
        }
        this.arrange();
        // reset flag
        for (i = 0; i < len; i++) {
            delete items[i].isLayoutInstant;
        }
        this.reveal(filteredInsertItems);
    };

    var _remove = proto.remove;
    proto.remove = function (elems) {
        elems = utils.makeArray(elems);
        var removeItems = this.getItems(elems);
        // do regular thing
        _remove.call(this, elems);
        // bail if no items to remove
        var len = removeItems && removeItems.length;
        // remove elems from filteredItems
        for (var i = 0; len && i < len; i++) {
            var item = removeItems[i];
            // remove item from collection
            utils.removeFrom(this.filteredItems, item);
        }
    };

    proto.shuffle = function () {
        // update random sortData
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            item.sortData.random = Math.random();
        }
        this.options.sortBy = 'random';
        this._sort();
        this._layout();
    };

    /**
     * trigger fn without transition
     * kind of hacky to have this in the first place
     * @param {Function} fn
     * @param {Array} args
     * @returns ret
     * @private
     */
    proto._noTransition = function (fn, args) {
        // save transitionDuration before disabling
        var transitionDuration = this.options.transitionDuration;
        // disable transition
        this.options.transitionDuration = 0;
        // do it
        var returnValue = fn.apply(this, args);
        // re-enable transition for reveal
        this.options.transitionDuration = transitionDuration;
        return returnValue;
    };

    // ----- helper methods ----- //

    /**
     * getter method for getting filtered item elements
     * @returns {Array} elems - collection of item elements
     */
    proto.getFilteredItemElements = function () {
        return this.filteredItems.map(function (item) {
            return item.element;
        });
    };

    // -----  ----- //

    return Isotope;

}));


// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
(function (window, document, $, undefined) {
    "use strict";

    window.console = window.console || {
        info: function (stuff) {
        }
    };

    // If there's no jQuery, fancyBox can't work
    // =========================================

    if (!$) {
        return;
    }

    // Check if fancyBox is already initialized
    // ========================================

    if ($.fn.fancybox) {
        console.info("fancyBox already initialized");

        return;
    }

    // Private default settings
    // ========================

    var defaults = {
        // Close existing modals
        // Set this to false if you do not need to stack multiple instances
        closeExisting: false,

        // Enable infinite gallery navigation
        loop: false,

        // Horizontal space between slides
        gutter: 50,

        // Enable keyboard navigation
        keyboard: true,

        // Should allow caption to overlap the content
        preventCaptionOverlap: true,

        // Should display navigation arrows at the screen edges
        arrows: true,

        // Should display counter at the top left corner
        infobar: true,

        // Should display close button (using `btnTpl.smallBtn` template) over the content
        // Can be true, false, "auto"
        // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
        smallBtn: "auto",

        // Should display toolbar (buttons at the top)
        // Can be true, false, "auto"
        // If "auto" - will be automatically hidden if "smallBtn" is enabled
        toolbar: "auto",

        // What buttons should appear in the top right corner.
        // Buttons will be created using templates from `btnTpl` option
        // and they will be placed into toolbar (class="fancybox-toolbar"` element)
        buttons: [
            "zoom",
            //"share",
            "slideShow",
            //"fullScreen",
            //"download",
            "thumbs",
            "close"
        ],

        // Detect "idle" time in seconds
        idleTime: 3,

        // Disable right-click and use simple image protection for images
        protect: false,

        // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
        modal: false,

        image: {
            // Wait for images to load before displaying
            //   true  - wait for image to load and then display;
            //   false - display thumbnail and load the full-sized image over top,
            //           requires predefined image dimensions (`data-width` and `data-height` attributes)
            preload: false
        },

        ajax: {
            // Object containing settings for ajax request
            settings: {
                // This helps to indicate that request comes from the modal
                // Feel free to change naming
                data: {
                    fancybox: true
                }
            }
        },

        iframe: {
            // Iframe template
            tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',

            // Preload iframe before displaying it
            // This allows to calculate iframe content width and height
            // (note: Due to "Same Origin Policy", you can't get cross domain data).
            preload: true,

            // Custom CSS styling for iframe wrapping element
            // You can use this to set custom iframe dimensions
            css: {},

            // Iframe tag attributes
            attr: {
                scrolling: "auto"
            }
        },

        // For HTML5 video only
        video: {
            tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' +
                '<source src="{{src}}" type="{{format}}" />' +
                'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
                "</video>",
            format: "", // custom video format
            autoStart: true
        },

        // Default content type if cannot be detected automatically
        defaultType: "image",

        // Open/close animation type
        // Possible values:
        //   false            - disable
        //   "zoom"           - zoom images from/to thumbnail
        //   "fade"
        //   "zoom-in-out"
        //
        animationEffect: "zoom",

        // Duration in ms for open/close animation
        animationDuration: 366,

        // Should image change opacity while zooming
        // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
        zoomOpacity: "auto",

        // Transition effect between slides
        //
        // Possible values:
        //   false            - disable
        //   "fade'
        //   "slide'
        //   "circular'
        //   "tube'
        //   "zoom-in-out'
        //   "rotate'
        //
        transitionEffect: "fade",

        // Duration in ms for transition animation
        transitionDuration: 366,

        // Custom CSS class for slide element
        slideClass: "",

        // Custom CSS class for layout
        baseClass: "",

        // Base template for layout
        baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' +
            '<div class="fancybox-bg"></div>' +
            '<div class="fancybox-inner">' +
            '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' +
            '<div class="fancybox-toolbar">{{buttons}}</div>' +
            '<div class="fancybox-navigation">{{arrows}}</div>' +
            '<div class="fancybox-stage"></div>' +
            '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' +
            "</div>" +
            "</div>",

        // Loading indicator template
        spinnerTpl: '<div class="fancybox-loading"></div>',

        // Error message template
        errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',

        btnTpl: {
            download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' +
                "</a>",

            zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' +
                "</button>",

            close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
                "</button>",

            // Arrows
            arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
                '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
                "</button>",

            arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
                '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
                "</button>",

            // This small close button will be appended to your html/inline/ajax content by default,
            // if "smallBtn" option is not set to false
            smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' +
                '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' +
                "</button>"
        },

        // Container is injected into this element
        parentEl: "body",

        // Hide browser vertical scrollbars; use at your own risk
        hideScrollbar: true,

        // Focus handling
        // ==============

        // Try to focus on the first focusable element after opening
        autoFocus: true,

        // Put focus back to active element after closing
        backFocus: true,

        // Do not let user to focus on element outside modal content
        trapFocus: true,

        // Module specific options
        // =======================

        fullScreen: {
            autoStart: false
        },

        // Set `touch: false` to disable panning/swiping
        touch: {
            vertical: true, // Allow to drag content vertically
            momentum: true // Continue movement after releasing mouse/touch when panning
        },

        // Hash value when initializing manually,
        // set `false` to disable hash change
        hash: null,

        // Customize or add new media types
        // Example:
        /*
      media : {
        youtube : {
          params : {
            autoplay : 0
          }
        }
      }
    */
        media: {},

        slideShow: {
            autoStart: false,
            speed: 3000
        },

        thumbs: {
            autoStart: false, // Display thumbnails on opening
            hideOnClose: true, // Hide thumbnail grid when closing animation starts
            parentEl: ".fancybox-container", // Container is injected into this element
            axis: "y" // Vertical (y) or horizontal (x) scrolling
        },

        // Use mousewheel to navigate gallery
        // If 'auto' - enabled for images only
        wheel: "auto",

        // Callbacks
        //==========

        // See Documentation/API/Events for more information
        // Example:
        /*
      afterShow: function( instance, current ) {
        console.info( 'Clicked element:' );
        console.info( current.opts.$orig );
      }
    */

        onInit: $.noop, // When instance has been initialized

        beforeLoad: $.noop, // Before the content of a slide is being loaded
        afterLoad: $.noop, // When the content of a slide is done loading

        beforeShow: $.noop, // Before open animation starts
        afterShow: $.noop, // When content is done loading and animating

        beforeClose: $.noop, // Before the instance attempts to close. Return false to cancel the close.
        afterClose: $.noop, // After instance has been closed

        onActivate: $.noop, // When instance is brought to front
        onDeactivate: $.noop, // When other instance has been activated

        // Interaction
        // ===========

        // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
        // each option can be string or method that returns value.
        //
        // Possible values:
        //   "close"           - close instance
        //   "next"            - move to next gallery item
        //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
        //   "toggleControls"  - show/hide controls
        //   "zoom"            - zoom image (if loaded)
        //   false             - do nothing

        // Clicked on the content
        clickContent: function (current, event) {
            return current.type === "image" ? "zoom" : false;
        },

        // Clicked on the slide
        clickSlide: "close",

        // Clicked on the background (backdrop) element;
        // if you have not changed the layout, then most likely you need to use `clickSlide` option
        clickOutside: "close",

        // Same as previous two, but for double click
        dblclickContent: false,
        dblclickSlide: false,
        dblclickOutside: false,

        // Custom options when mobile device is detected
        // =============================================

        mobile: {
            preventCaptionOverlap: false,
            idleTime: false,
            clickContent: function (current, event) {
                return current.type === "image" ? "toggleControls" : false;
            },
            clickSlide: function (current, event) {
                return current.type === "image" ? "toggleControls" : "close";
            },
            dblclickContent: function (current, event) {
                return current.type === "image" ? "zoom" : false;
            },
            dblclickSlide: function (current, event) {
                return current.type === "image" ? "zoom" : false;
            }
        },

        // Internationalization
        // ====================

        lang: "en",
        i18n: {
            en: {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                PLAY_START: "Start slideshow",
                PLAY_STOP: "Pause slideshow",
                FULL_SCREEN: "Full screen",
                THUMBS: "Thumbnails",
                DOWNLOAD: "Download",
                SHARE: "Share",
                ZOOM: "Zoom"
            },
            de: {
                CLOSE: "Schlie&szlig;en",
                NEXT: "Weiter",
                PREV: "Zur&uuml;ck",
                ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
                PLAY_START: "Diaschau starten",
                PLAY_STOP: "Diaschau beenden",
                FULL_SCREEN: "Vollbild",
                THUMBS: "Vorschaubilder",
                DOWNLOAD: "Herunterladen",
                SHARE: "Teilen",
                ZOOM: "Vergr&ouml;&szlig;ern"
            }
        }
    };

    // Few useful variables and methods
    // ================================

    var $W = $(window);
    var $D = $(document);

    var called = 0;

    // Check if an object is a jQuery object and not a native JavaScript object
    // ========================================================================
    var isQuery = function (obj) {
        return obj && obj.hasOwnProperty && obj instanceof $;
    };

    // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
    // ===============================================================================
    var requestAFrame = (function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            // if all else fails, use setTimeout
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            }
        );
    })();

    var cancelAFrame = (function () {
        return (
            window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            function (id) {
                window.clearTimeout(id);
            }
        );
    })();

    // Detect the supported transition-end event property name
    // =======================================================
    var transitionEnd = (function () {
        var el = document.createElement("fakeelement"),
            t;

        var transitions = {
            transition: "transitionend",
            OTransition: "oTransitionEnd",
            MozTransition: "transitionend",
            WebkitTransition: "webkitTransitionEnd"
        };

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }

        return "transitionend";
    })();

    // Force redraw on an element.
    // This helps in cases where the browser doesn't redraw an updated element properly
    // ================================================================================
    var forceRedraw = function ($el) {
        return $el && $el.length && $el[0].offsetHeight;
    };

    // Exclude array (`buttons`) options from deep merging
    // ===================================================
    var mergeOpts = function (opts1, opts2) {
        var rez = $.extend(true, {}, opts1, opts2);

        $.each(opts2, function (key, value) {
            if ($.isArray(value)) {
                rez[key] = value;
            }
        });

        return rez;
    };

    // How much of an element is visible in viewport
    // =============================================

    var inViewport = function (elem) {
        var elemCenter, rez;

        if (!elem || elem.ownerDocument !== document) {
            return false;
        }

        $(".fancybox-container").css("pointer-events", "none");

        elemCenter = {
            x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
            y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
        };

        rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;

        $(".fancybox-container").css("pointer-events", "");

        return rez;
    };

    // Class definition
    // ================

    var FancyBox = function (content, opts, index) {
        var self = this;

        self.opts = mergeOpts({
            index: index
        }, $.fancybox.defaults);

        if ($.isPlainObject(opts)) {
            self.opts = mergeOpts(self.opts, opts);
        }

        if ($.fancybox.isMobile) {
            self.opts = mergeOpts(self.opts, self.opts.mobile);
        }

        self.id = self.opts.id || ++called;

        self.currIndex = parseInt(self.opts.index, 10) || 0;
        self.prevIndex = null;

        self.prevPos = null;
        self.currPos = 0;

        self.firstRun = true;

        // All group items
        self.group = [];

        // Existing slides (for current, next and previous gallery items)
        self.slides = {};

        // Create group elements
        self.addContent(content);

        if (!self.group.length) {
            return;
        }

        self.init();
    };

    $.extend(FancyBox.prototype, {
        // Create DOM structure
        // ====================

        init: function () {
            var self = this,
                firstItem = self.group[self.currIndex],
                firstItemOpts = firstItem.opts,
                $container,
                buttonStr;

            if (firstItemOpts.closeExisting) {
                $.fancybox.close(true);
            }

            // Hide scrollbars
            // ===============

            $("body").addClass("fancybox-active");

            if (
                !$.fancybox.getInstance() &&
                firstItemOpts.hideScrollbar !== false &&
                !$.fancybox.isMobile &&
                document.body.scrollHeight > window.innerHeight
            ) {
                $("head").append(
                    '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' +
                    (window.innerWidth - document.documentElement.clientWidth) +
                    "px;}</style>"
                );

                $("body").addClass("compensate-for-scrollbar");
            }

            // Build html markup and set references
            // ====================================

            // Build html code for buttons and insert into main template
            buttonStr = "";

            $.each(firstItemOpts.buttons, function (index, value) {
                buttonStr += firstItemOpts.btnTpl[value] || "";
            });

            // Create markup from base template, it will be initially hidden to
            // avoid unnecessary work like painting while initializing is not complete
            $container = $(
                self.translate(
                    self,
                    firstItemOpts.baseTpl
                        .replace("{{buttons}}", buttonStr)
                        .replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight)
                )
            )
                .attr("id", "fancybox-container-" + self.id)
                .addClass(firstItemOpts.baseClass)
                .data("FancyBox", self)
                .appendTo(firstItemOpts.parentEl);

            // Create object holding references to jQuery wrapped nodes
            self.$refs = {
                container: $container
            };

            ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (item) {
                self.$refs[item] = $container.find(".fancybox-" + item);
            });

            self.trigger("onInit");

            // Enable events, deactive previous instances
            self.activate();

            // Build slides, load and reveal content
            self.jumpTo(self.currIndex);
        },

        // Simple i18n support - replaces object keys found in template
        // with corresponding values
        // ============================================================

        translate: function (obj, str) {
            var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;

            return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
                return arr[n] === undefined ? match : arr[n];
            });
        },

        // Populate current group with fresh content
        // Check if each object has valid type and content
        // ===============================================

        addContent: function (content) {
            var self = this,
                items = $.makeArray(content),
                thumbs;

            $.each(items, function (i, item) {
                var obj = {},
                    opts = {},
                    $item,
                    type,
                    found,
                    src,
                    srcParts;

                // Step 1 - Make sure we have an object
                // ====================================

                if ($.isPlainObject(item)) {
                    // We probably have manual usage here, something like
                    // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

                    obj = item;
                    opts = item.opts || item;
                } else if ($.type(item) === "object" && $(item).length) {
                    // Here we probably have jQuery collection returned by some selector
                    $item = $(item);

                    // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
                    opts = $item.data() || {};
                    opts = $.extend(true, {}, opts, opts.options);

                    // Here we store clicked element
                    opts.$orig = $item;

                    obj.src = self.opts.src || opts.src || $item.attr("href");

                    // Assume that simple syntax is used, for example:
                    //   `$.fancybox.open( $("#test"), {} );`
                    if (!obj.type && !obj.src) {
                        obj.type = "inline";
                        obj.src = item;
                    }
                } else {
                    // Assume we have a simple html code, for example:
                    //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
                    obj = {
                        type: "html",
                        src: item + ""
                    };
                }

                // Each gallery object has full collection of options
                obj.opts = $.extend(true, {}, self.opts, opts);

                // Do not merge buttons array
                if ($.isArray(opts.buttons)) {
                    obj.opts.buttons = opts.buttons;
                }

                if ($.fancybox.isMobile && obj.opts.mobile) {
                    obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
                }

                // Step 2 - Make sure we have content type, if not - try to guess
                // ==============================================================

                type = obj.type || obj.opts.type;
                src = obj.src || "";

                if (!type && src) {
                    if ((found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))) {
                        type = "video";

                        if (!obj.opts.video.format) {
                            obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
                        }
                    } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
                        type = "image";
                    } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
                        type = "iframe";
                        obj = $.extend(true, obj, {
                            contentType: "pdf",
                            opts: {
                                iframe: {
                                    preload: false
                                }
                            }
                        });
                    } else if (src.charAt(0) === "#") {
                        type = "inline";
                    }
                }

                if (type) {
                    obj.type = type;
                } else {
                    self.trigger("objectNeedsType", obj);
                }

                if (!obj.contentType) {
                    obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
                }

                // Step 3 - Some adjustments
                // =========================

                obj.index = self.group.length;

                if (obj.opts.smallBtn == "auto") {
                    obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
                }

                if (obj.opts.toolbar === "auto") {
                    obj.opts.toolbar = !obj.opts.smallBtn;
                }

                // Find thumbnail image, check if exists and if is in the viewport
                obj.$thumb = obj.opts.$thumb || null;

                if (obj.opts.$trigger && obj.index === self.opts.index) {
                    obj.$thumb = obj.opts.$trigger.find("img:first");

                    if (obj.$thumb.length) {
                        obj.opts.$orig = obj.opts.$trigger;
                    }
                }

                if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
                    obj.$thumb = obj.opts.$orig.find("img:first");
                }

                if (obj.$thumb && !obj.$thumb.length) {
                    obj.$thumb = null;
                }

                obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);

                // "caption" is a "special" option, it can be used to customize caption per gallery item
                if ($.type(obj.opts.caption) === "function") {
                    obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
                }

                if ($.type(self.opts.caption) === "function") {
                    obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
                }

                // Make sure we have caption as a string or jQuery object
                if (!(obj.opts.caption instanceof $)) {
                    obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
                }

                // Check if url contains "filter" used to filter the content
                // Example: "ajax.html #something"
                if (obj.type === "ajax") {
                    srcParts = src.split(/\s+/, 2);

                    if (srcParts.length > 1) {
                        obj.src = srcParts.shift();

                        obj.opts.filter = srcParts.shift();
                    }
                }

                // Hide all buttons and disable interactivity for modal items
                if (obj.opts.modal) {
                    obj.opts = $.extend(true, obj.opts, {
                        trapFocus: true,
                        // Remove buttons
                        infobar: 0,
                        toolbar: 0,

                        smallBtn: 0,

                        // Disable keyboard navigation
                        keyboard: 0,

                        // Disable some modules
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,

                        // Disable click event handlers
                        clickContent: false,
                        clickSlide: false,
                        clickOutside: false,
                        dblclickContent: false,
                        dblclickSlide: false,
                        dblclickOutside: false
                    });
                }

                // Step 4 - Add processed object to group
                // ======================================

                self.group.push(obj);
            });

            // Update controls if gallery is already opened
            if (Object.keys(self.slides).length) {
                self.updateControls();

                // Update thumbnails, if needed
                thumbs = self.Thumbs;

                if (thumbs && thumbs.isActive) {
                    thumbs.create();

                    thumbs.focus();
                }
            }
        },

        // Attach an event handler functions for:
        //   - navigation buttons
        //   - browser scrolling, resizing;
        //   - focusing
        //   - keyboard
        //   - detecting inactivity
        // ======================================

        addEvents: function () {
            var self = this;

            self.removeEvents();

            // Make navigation elements clickable
            // ==================================

            self.$refs.container
                .on("click.fb-close", "[data-fancybox-close]", function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    self.close(e);
                })
                .on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    self.previous();
                })
                .on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    self.next();
                })
                .on("click.fb", "[data-fancybox-zoom]", function (e) {
                    // Click handler for zoom button
                    self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
                });

            // Handle page scrolling and browser resizing
            // ==========================================

            $W.on("orientationchange.fb resize.fb", function (e) {
                if (e && e.originalEvent && e.originalEvent.type === "resize") {
                    if (self.requestId) {
                        cancelAFrame(self.requestId);
                    }

                    self.requestId = requestAFrame(function () {
                        self.update(e);
                    });
                } else {
                    if (self.current && self.current.type === "iframe") {
                        self.$refs.stage.hide();
                    }

                    setTimeout(
                        function () {
                            self.$refs.stage.show();

                            self.update(e);
                        },
                        $.fancybox.isMobile ? 600 : 250
                    );
                }
            });

            $D.on("keydown.fb", function (e) {
                var instance = $.fancybox ? $.fancybox.getInstance() : null,
                    current = instance.current,
                    keycode = e.keyCode || e.which;

                // Trap keyboard focus inside of the modal
                // =======================================

                if (keycode == 9) {
                    if (current.opts.trapFocus) {
                        self.focus(e);
                    }

                    return;
                }

                // Enable keyboard navigation
                // ==========================

                if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
                    return;
                }

                // Backspace and Esc keys
                if (keycode === 8 || keycode === 27) {
                    e.preventDefault();

                    self.close(e);

                    return;
                }

                // Left arrow and Up arrow
                if (keycode === 37 || keycode === 38) {
                    e.preventDefault();

                    self.previous();

                    return;
                }

                // Righ arrow and Down arrow
                if (keycode === 39 || keycode === 40) {
                    e.preventDefault();

                    self.next();

                    return;
                }

                self.trigger("afterKeydown", e, keycode);
            });

            // Hide controls after some inactivity period
            if (self.group[self.currIndex].opts.idleTime) {
                self.idleSecondsCounter = 0;

                $D.on(
                    "mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",
                    function (e) {
                        self.idleSecondsCounter = 0;

                        if (self.isIdle) {
                            self.showControls();
                        }

                        self.isIdle = false;
                    }
                );

                self.idleInterval = window.setInterval(function () {
                    self.idleSecondsCounter++;

                    if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
                        self.isIdle = true;
                        self.idleSecondsCounter = 0;

                        self.hideControls();
                    }
                }, 1000);
            }
        },

        // Remove events added by the core
        // ===============================

        removeEvents: function () {
            var self = this;

            $W.off("orientationchange.fb resize.fb");
            $D.off("keydown.fb .fb-idle");

            this.$refs.container.off(".fb-close .fb-prev .fb-next");

            if (self.idleInterval) {
                window.clearInterval(self.idleInterval);

                self.idleInterval = null;
            }
        },

        // Change to previous gallery item
        // ===============================

        previous: function (duration) {
            return this.jumpTo(this.currPos - 1, duration);
        },

        // Change to next gallery item
        // ===========================

        next: function (duration) {
            return this.jumpTo(this.currPos + 1, duration);
        },

        // Switch to selected gallery item
        // ===============================

        jumpTo: function (pos, duration) {
            var self = this,
                groupLen = self.group.length,
                firstRun,
                isMoved,
                loop,
                current,
                previous,
                slidePos,
                stagePos,
                prop,
                diff;

            if (self.isDragging || self.isClosing || (self.isAnimating && self.firstRun)) {
                return;
            }

            // Should loop?
            pos = parseInt(pos, 10);
            loop = self.current ? self.current.opts.loop : self.opts.loop;

            if (!loop && (pos < 0 || pos >= groupLen)) {
                return false;
            }

            // Check if opening for the first time; this helps to speed things up
            firstRun = self.firstRun = !Object.keys(self.slides).length;

            // Create slides
            previous = self.current;

            self.prevIndex = self.currIndex;
            self.prevPos = self.currPos;

            current = self.createSlide(pos);

            if (groupLen > 1) {
                if (loop || current.index < groupLen - 1) {
                    self.createSlide(pos + 1);
                }

                if (loop || current.index > 0) {
                    self.createSlide(pos - 1);
                }
            }

            self.current = current;
            self.currIndex = current.index;
            self.currPos = current.pos;

            self.trigger("beforeShow", firstRun);

            self.updateControls();

            // Validate duration length
            current.forcedDuration = undefined;

            if ($.isNumeric(duration)) {
                current.forcedDuration = duration;
            } else {
                duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
            }

            duration = parseInt(duration, 10);

            // Check if user has swiped the slides or if still animating
            isMoved = self.isMoved(current);

            // Make sure current slide is visible
            current.$slide.addClass("fancybox-slide--current");

            // Fresh start - reveal container, current slide and start loading content
            if (firstRun) {
                if (current.opts.animationEffect && duration) {
                    self.$refs.container.css("transition-duration", duration + "ms");
                }

                self.$refs.container.addClass("fancybox-is-open").trigger("focus");

                // Attempt to load content into slide
                // This will later call `afterLoad` -> `revealContent`
                self.loadSlide(current);

                self.preload("image");

                return;
            }

            // Get actual slide/stage positions (before cleaning up)
            slidePos = $.fancybox.getTranslate(previous.$slide);
            stagePos = $.fancybox.getTranslate(self.$refs.stage);

            // Clean up all slides
            $.each(self.slides, function (index, slide) {
                $.fancybox.stop(slide.$slide, true);
            });

            if (previous.pos !== current.pos) {
                previous.isComplete = false;
            }

            previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");

            // If slides are out of place, then animate them to correct position
            if (isMoved) {
                // Calculate horizontal swipe distance
                diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);

                $.each(self.slides, function (index, slide) {
                    slide.$slide.removeClass("fancybox-animated").removeClass(function (index, className) {
                        return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                    });

                    // Make sure that each slide is in equal distance
                    // This is mostly needed for freshly added slides, because they are not yet positioned
                    var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;

                    $.fancybox.setTranslate(slide.$slide, {
                        top: 0,
                        left: leftPos - stagePos.left + diff
                    });

                    if (slide.pos !== current.pos) {
                        slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
                    }

                    // Redraw to make sure that transition will start
                    forceRedraw(slide.$slide);

                    // Animate the slide
                    $.fancybox.animate(
                        slide.$slide, {
                            top: 0,
                            left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
                        },
                        duration,
                        function () {
                            slide.$slide
                                .css({
                                    transform: "",
                                    opacity: ""
                                })
                                .removeClass("fancybox-slide--next fancybox-slide--previous");

                            if (slide.pos === self.currPos) {
                                self.complete();
                            }
                        }
                    );
                });
            } else if (duration && current.opts.transitionEffect) {
                // Set transition effect for previously active slide
                prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;

                previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));

                $.fancybox.animate(
                    previous.$slide,
                    prop,
                    duration,
                    function () {
                        previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
                    },
                    false
                );
            }

            if (current.isLoaded) {
                self.revealContent(current);
            } else {
                self.loadSlide(current);
            }

            self.preload("image");
        },

        // Create new "slide" element
        // These are gallery items  that are actually added to DOM
        // =======================================================

        createSlide: function (pos) {
            var self = this,
                $slide,
                index;

            index = pos % self.group.length;
            index = index < 0 ? self.group.length + index : index;

            if (!self.slides[pos] && self.group[index]) {
                $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);

                self.slides[pos] = $.extend(true, {}, self.group[index], {
                    pos: pos,
                    $slide: $slide,
                    isLoaded: false
                });

                self.updateSlide(self.slides[pos]);
            }

            return self.slides[pos];
        },

        // Scale image to the actual size of the image;
        // x and y values should be relative to the slide
        // ==============================================

        scaleToActual: function (x, y, duration) {
            var self = this,
                current = self.current,
                $content = current.$content,
                canvasWidth = $.fancybox.getTranslate(current.$slide).width,
                canvasHeight = $.fancybox.getTranslate(current.$slide).height,
                newImgWidth = current.width,
                newImgHeight = current.height,
                imgPos,
                posX,
                posY,
                scaleX,
                scaleY;

            if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
                return;
            }

            self.isAnimating = true;

            $.fancybox.stop($content);

            x = x === undefined ? canvasWidth * 0.5 : x;
            y = y === undefined ? canvasHeight * 0.5 : y;

            imgPos = $.fancybox.getTranslate($content);

            imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
            imgPos.left -= $.fancybox.getTranslate(current.$slide).left;

            scaleX = newImgWidth / imgPos.width;
            scaleY = newImgHeight / imgPos.height;

            // Get center position for original image
            posX = canvasWidth * 0.5 - newImgWidth * 0.5;
            posY = canvasHeight * 0.5 - newImgHeight * 0.5;

            // Make sure image does not move away from edges
            if (newImgWidth > canvasWidth) {
                posX = imgPos.left * scaleX - (x * scaleX - x);

                if (posX > 0) {
                    posX = 0;
                }

                if (posX < canvasWidth - newImgWidth) {
                    posX = canvasWidth - newImgWidth;
                }
            }

            if (newImgHeight > canvasHeight) {
                posY = imgPos.top * scaleY - (y * scaleY - y);

                if (posY > 0) {
                    posY = 0;
                }

                if (posY < canvasHeight - newImgHeight) {
                    posY = canvasHeight - newImgHeight;
                }
            }

            self.updateCursor(newImgWidth, newImgHeight);

            $.fancybox.animate(
                $content, {
                    top: posY,
                    left: posX,
                    scaleX: scaleX,
                    scaleY: scaleY
                },
                duration || 366,
                function () {
                    self.isAnimating = false;
                }
            );

            // Stop slideshow
            if (self.SlideShow && self.SlideShow.isActive) {
                self.SlideShow.stop();
            }
        },

        // Scale image to fit inside parent element
        // ========================================

        scaleToFit: function (duration) {
            var self = this,
                current = self.current,
                $content = current.$content,
                end;

            if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
                return;
            }

            self.isAnimating = true;

            $.fancybox.stop($content);

            end = self.getFitPos(current);

            self.updateCursor(end.width, end.height);

            $.fancybox.animate(
                $content, {
                    top: end.top,
                    left: end.left,
                    scaleX: end.width / $content.width(),
                    scaleY: end.height / $content.height()
                },
                duration || 366,
                function () {
                    self.isAnimating = false;
                }
            );
        },

        // Calculate image size to fit inside viewport
        // ===========================================

        getFitPos: function (slide) {
            var self = this,
                $content = slide.$content,
                $slide = slide.$slide,
                width = slide.width || slide.opts.width,
                height = slide.height || slide.opts.height,
                maxWidth,
                maxHeight,
                minRatio,
                aspectRatio,
                rez = {};

            if (!slide.isLoaded || !$content || !$content.length) {
                return false;
            }

            maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
            maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;

            maxWidth -=
                parseFloat($slide.css("paddingLeft")) +
                parseFloat($slide.css("paddingRight")) +
                parseFloat($content.css("marginLeft")) +
                parseFloat($content.css("marginRight"));

            maxHeight -=
                parseFloat($slide.css("paddingTop")) +
                parseFloat($slide.css("paddingBottom")) +
                parseFloat($content.css("marginTop")) +
                parseFloat($content.css("marginBottom"));

            if (!width || !height) {
                width = maxWidth;
                height = maxHeight;
            }

            minRatio = Math.min(1, maxWidth / width, maxHeight / height);

            width = minRatio * width;
            height = minRatio * height;

            // Adjust width/height to precisely fit into container
            if (width > maxWidth - 0.5) {
                width = maxWidth;
            }

            if (height > maxHeight - 0.5) {
                height = maxHeight;
            }

            if (slide.type === "image") {
                rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
                rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
            } else if (slide.contentType === "video") {
                // Force aspect ratio for the video
                // "I say the whole world must learn of our peaceful ways… by force!"
                aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;

                if (height > width / aspectRatio) {
                    height = width / aspectRatio;
                } else if (width > height * aspectRatio) {
                    width = height * aspectRatio;
                }
            }

            rez.width = width;
            rez.height = height;

            return rez;
        },

        // Update content size and position for all slides
        // ==============================================

        update: function (e) {
            var self = this;

            $.each(self.slides, function (key, slide) {
                self.updateSlide(slide, e);
            });
        },

        // Update slide content position and size
        // ======================================

        updateSlide: function (slide, e) {
            var self = this,
                $content = slide && slide.$content,
                width = slide.width || slide.opts.width,
                height = slide.height || slide.opts.height,
                $slide = slide.$slide;

            // First, prevent caption overlap, if needed
            self.adjustCaption(slide);

            // Then resize content to fit inside the slide
            if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
                $.fancybox.stop($content);

                $.fancybox.setTranslate($content, self.getFitPos(slide));

                if (slide.pos === self.currPos) {
                    self.isAnimating = false;

                    self.updateCursor();
                }
            }

            // Then some adjustments
            self.adjustLayout(slide);

            if ($slide.length) {
                $slide.trigger("refresh");

                if (slide.pos === self.currPos) {
                    self.$refs.toolbar
                        .add(self.$refs.navigation.find(".fancybox-button--arrow_right"))
                        .toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
                }
            }

            self.trigger("onUpdate", slide, e);
        },

        // Horizontally center slide
        // =========================

        centerSlide: function (duration) {
            var self = this,
                current = self.current,
                $slide = current.$slide;

            if (self.isClosing || !current) {
                return;
            }

            $slide.siblings().css({
                transform: "",
                opacity: ""
            });

            $slide
                .parent()
                .children()
                .removeClass("fancybox-slide--previous fancybox-slide--next");

            $.fancybox.animate(
                $slide, {
                    top: 0,
                    left: 0,
                    opacity: 1
                },
                duration === undefined ? 0 : duration,
                function () {
                    // Clean up
                    $slide.css({
                        transform: "",
                        opacity: ""
                    });

                    if (!current.isComplete) {
                        self.complete();
                    }
                },
                false
            );
        },

        // Check if current slide is moved (swiped)
        // ========================================

        isMoved: function (slide) {
            var current = slide || this.current,
                slidePos,
                stagePos;

            if (!current) {
                return false;
            }

            stagePos = $.fancybox.getTranslate(this.$refs.stage);
            slidePos = $.fancybox.getTranslate(current.$slide);

            return (
                !current.$slide.hasClass("fancybox-animated") &&
                (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5)
            );
        },

        // Update cursor style depending if content can be zoomed
        // ======================================================

        updateCursor: function (nextWidth, nextHeight) {
            var self = this,
                current = self.current,
                $container = self.$refs.container,
                canPan,
                isZoomable;

            if (!current || self.isClosing || !self.Guestures) {
                return;
            }

            $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");

            canPan = self.canPan(nextWidth, nextHeight);

            isZoomable = canPan ? true : self.isZoomable();

            $container.toggleClass("fancybox-is-zoomable", isZoomable);

            $("[data-fancybox-zoom]").prop("disabled", !isZoomable);

            if (canPan) {
                $container.addClass("fancybox-can-pan");
            } else if (
                isZoomable &&
                (current.opts.clickContent === "zoom" || ($.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom"))
            ) {
                $container.addClass("fancybox-can-zoomIn");
            } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
                $container.addClass("fancybox-can-swipe");
            }
        },

        // Check if current slide is zoomable
        // ==================================

        isZoomable: function () {
            var self = this,
                current = self.current,
                fitPos;

            // Assume that slide is zoomable if:
            //   - image is still loading
            //   - actual size of the image is smaller than available area
            if (current && !self.isClosing && current.type === "image" && !current.hasError) {
                if (!current.isLoaded) {
                    return true;
                }

                fitPos = self.getFitPos(current);

                if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
                    return true;
                }
            }

            return false;
        },

        // Check if current image dimensions are smaller than actual
        // =========================================================

        isScaledDown: function (nextWidth, nextHeight) {
            var self = this,
                rez = false,
                current = self.current,
                $content = current.$content;

            if (nextWidth !== undefined && nextHeight !== undefined) {
                rez = nextWidth < current.width && nextHeight < current.height;
            } else if ($content) {
                rez = $.fancybox.getTranslate($content);
                rez = rez.width < current.width && rez.height < current.height;
            }

            return rez;
        },

        // Check if image dimensions exceed parent element
        // ===============================================

        canPan: function (nextWidth, nextHeight) {
            var self = this,
                current = self.current,
                pos = null,
                rez = false;

            if (current.type === "image" && (current.isComplete || (nextWidth && nextHeight)) && !current.hasError) {
                rez = self.getFitPos(current);

                if (nextWidth !== undefined && nextHeight !== undefined) {
                    pos = {
                        width: nextWidth,
                        height: nextHeight
                    };
                } else if (current.isComplete) {
                    pos = $.fancybox.getTranslate(current.$content);
                }

                if (pos && rez) {
                    rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
                }
            }

            return rez;
        },

        // Load content into the slide
        // ===========================

        loadSlide: function (slide) {
            var self = this,
                type,
                $slide,
                ajaxLoad;

            if (slide.isLoading || slide.isLoaded) {
                return;
            }

            slide.isLoading = true;

            if (self.trigger("beforeLoad", slide) === false) {
                slide.isLoading = false;

                return false;
            }

            type = slide.type;
            $slide = slide.$slide;

            $slide
                .off("refresh")
                .trigger("onReset")
                .addClass(slide.opts.slideClass);

            // Create content depending on the type
            switch (type) {
                case "image":
                    self.setImage(slide);

                    break;

                case "iframe":
                    self.setIframe(slide);

                    break;

                case "html":
                    self.setContent(slide, slide.src || slide.content);

                    break;

                case "video":
                    self.setContent(
                        slide,
                        slide.opts.video.tpl
                            .replace(/\{\{src\}\}/gi, slide.src)
                            .replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "")
                            .replace("{{poster}}", slide.thumb || "")
                    );

                    break;

                case "inline":
                    if ($(slide.src).length) {
                        self.setContent(slide, $(slide.src));
                    } else {
                        self.setError(slide);
                    }

                    break;

                case "ajax":
                    self.showLoading(slide);

                    ajaxLoad = $.ajax(
                        $.extend({}, slide.opts.ajax.settings, {
                            url: slide.src,
                            success: function (data, textStatus) {
                                if (textStatus === "success") {
                                    self.setContent(slide, data);
                                }
                            },
                            error: function (jqXHR, textStatus) {
                                if (jqXHR && textStatus !== "abort") {
                                    self.setError(slide);
                                }
                            }
                        })
                    );

                    $slide.one("onReset", function () {
                        ajaxLoad.abort();
                    });

                    break;

                default:
                    self.setError(slide);

                    break;
            }

            return true;
        },

        // Use thumbnail image, if possible
        // ================================

        setImage: function (slide) {
            var self = this,
                ghost;

            // Check if need to show loading icon
            setTimeout(function () {
                var $img = slide.$image;

                if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
                    self.showLoading(slide);
                }
            }, 50);

            //Check if image has srcset
            self.checkSrcset(slide);

            // This will be wrapper containing both ghost and actual image
            slide.$content = $('<div class="fancybox-content"></div>')
                .addClass("fancybox-is-hidden")
                .appendTo(slide.$slide.addClass("fancybox-slide--image"));

            // If we have a thumbnail, we can display it while actual image is loading
            // Users will not stare at black screen and actual image will appear gradually
            if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
                slide.width = slide.opts.width;
                slide.height = slide.opts.height;

                ghost = document.createElement("img");

                ghost.onerror = function () {
                    $(this).remove();

                    slide.$ghost = null;
                };

                ghost.onload = function () {
                    self.afterLoad(slide);
                };

                slide.$ghost = $(ghost)
                    .addClass("fancybox-image")
                    .appendTo(slide.$content)
                    .attr("src", slide.thumb);
            }

            // Start loading actual image
            self.setBigImage(slide);
        },

        // Check if image has srcset and get the source
        // ============================================
        checkSrcset: function (slide) {
            var srcset = slide.opts.srcset || slide.opts.image.srcset,
                found,
                temp,
                pxRatio,
                windowWidth;

            // If we have "srcset", then we need to find first matching "src" value.
            // This is necessary, because when you set an src attribute, the browser will preload the image
            // before any javascript or even CSS is applied.
            if (srcset) {
                pxRatio = window.devicePixelRatio || 1;
                windowWidth = window.innerWidth * pxRatio;

                temp = srcset.split(",").map(function (el) {
                    var ret = {};

                    el.trim()
                        .split(/\s+/)
                        .forEach(function (el, i) {
                            var value = parseInt(el.substring(0, el.length - 1), 10);

                            if (i === 0) {
                                return (ret.url = el);
                            }

                            if (value) {
                                ret.value = value;
                                ret.postfix = el[el.length - 1];
                            }
                        });

                    return ret;
                });

                // Sort by value
                temp.sort(function (a, b) {
                    return a.value - b.value;
                });

                // Ok, now we have an array of all srcset values
                for (var j = 0; j < temp.length; j++) {
                    var el = temp[j];

                    if ((el.postfix === "w" && el.value >= windowWidth) || (el.postfix === "x" && el.value >= pxRatio)) {
                        found = el;
                        break;
                    }
                }

                // If not found, take the last one
                if (!found && temp.length) {
                    found = temp[temp.length - 1];
                }

                if (found) {
                    slide.src = found.url;

                    // If we have default width/height values, we can calculate height for matching source
                    if (slide.width && slide.height && found.postfix == "w") {
                        slide.height = (slide.width / slide.height) * found.value;
                        slide.width = found.value;
                    }

                    slide.opts.srcset = srcset;
                }
            }
        },

        // Create full-size image
        // ======================

        setBigImage: function (slide) {
            var self = this,
                img = document.createElement("img"),
                $img = $(img);

            slide.$image = $img
                .one("error", function () {
                    self.setError(slide);
                })
                .one("load", function () {
                    var sizes;

                    if (!slide.$ghost) {
                        self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);

                        self.afterLoad(slide);
                    }

                    if (self.isClosing) {
                        return;
                    }

                    if (slide.opts.srcset) {
                        sizes = slide.opts.sizes;

                        if (!sizes || sizes === "auto") {
                            sizes =
                                (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round((slide.width / slide.height) * 100)) +
                                "vw";
                        }

                        $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
                    }

                    // Hide temporary image after some delay
                    if (slide.$ghost) {
                        setTimeout(function () {
                            if (slide.$ghost && !self.isClosing) {
                                slide.$ghost.hide();
                            }
                        }, Math.min(300, Math.max(1000, slide.height / 1600)));
                    }

                    self.hideLoading(slide);
                })
                .addClass("fancybox-image")
                .attr("src", slide.src)
                .appendTo(slide.$content);

            if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
                $img.trigger("load");
            } else if (img.error) {
                $img.trigger("error");
            }
        },

        // Computes the slide size from image size and maxWidth/maxHeight
        // ==============================================================

        resolveImageSlideSize: function (slide, imgWidth, imgHeight) {
            var maxWidth = parseInt(slide.opts.width, 10),
                maxHeight = parseInt(slide.opts.height, 10);

            // Sets the default values from the image
            slide.width = imgWidth;
            slide.height = imgHeight;

            if (maxWidth > 0) {
                slide.width = maxWidth;
                slide.height = Math.floor((maxWidth * imgHeight) / imgWidth);
            }

            if (maxHeight > 0) {
                slide.width = Math.floor((maxHeight * imgWidth) / imgHeight);
                slide.height = maxHeight;
            }
        },

        // Create iframe wrapper, iframe and bindings
        // ==========================================

        setIframe: function (slide) {
            var self = this,
                opts = slide.opts.iframe,
                $slide = slide.$slide,
                $iframe;

            slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>')
                .css(opts.css)
                .appendTo($slide);

            $slide.addClass("fancybox-slide--" + slide.contentType);

            slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime()))
                .attr(opts.attr)
                .appendTo(slide.$content);

            if (opts.preload) {
                self.showLoading(slide);

                // Unfortunately, it is not always possible to determine if iframe is successfully loaded
                // (due to browser security policy)

                $iframe.on("load.fb error.fb", function (e) {
                    this.isReady = 1;

                    slide.$slide.trigger("refresh");

                    self.afterLoad(slide);
                });

                // Recalculate iframe content size
                // ===============================

                $slide.on("refresh.fb", function () {
                    var $content = slide.$content,
                        frameWidth = opts.css.width,
                        frameHeight = opts.css.height,
                        $contents,
                        $body;

                    if ($iframe[0].isReady !== 1) {
                        return;
                    }

                    try {
                        $contents = $iframe.contents();
                        $body = $contents.find("body");
                    } catch (ignore) {
                    }

                    // Calculate content dimensions, if it is accessible
                    if ($body && $body.length && $body.children().length) {
                        // Avoid scrolling to top (if multiple instances)
                        $slide.css("overflow", "visible");

                        $content.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        });

                        if (frameWidth === undefined) {
                            frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
                        }

                        $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");

                        if (frameHeight === undefined) {
                            frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
                        }

                        $content.css("height", frameHeight ? frameHeight : "");

                        $slide.css("overflow", "auto");
                    }

                    $content.removeClass("fancybox-is-hidden");
                });
            } else {
                self.afterLoad(slide);
            }

            $iframe.attr("src", slide.src);

            // Remove iframe if closing or changing gallery item
            $slide.one("onReset", function () {
                // This helps IE not to throw errors when closing
                try {
                    $(this)
                        .find("iframe")
                        .hide()
                        .unbind()
                        .attr("src", "//about:blank");
                } catch (ignore) {
                }

                $(this)
                    .off("refresh.fb")
                    .empty();

                slide.isLoaded = false;
                slide.isRevealed = false;
            });
        },

        // Wrap and append content to the slide
        // ======================================

        setContent: function (slide, content) {
            var self = this;

            if (self.isClosing) {
                return;
            }

            self.hideLoading(slide);

            if (slide.$content) {
                $.fancybox.stop(slide.$content);
            }

            slide.$slide.empty();

            // If content is a jQuery object, then it will be moved to the slide.
            // The placeholder is created so we will know where to put it back.
            if (isQuery(content) && content.parent().length) {
                // Make sure content is not already moved to fancyBox
                if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
                    content.parents(".fancybox-slide").trigger("onReset");
                }

                // Create temporary element marking original place of the content
                slide.$placeholder = $("<div>")
                    .hide()
                    .insertAfter(content);

                // Make sure content is visible
                content.css("display", "inline-block");
            } else if (!slide.hasError) {
                // If content is just a plain text, try to convert it to html
                if ($.type(content) === "string") {
                    content = $("<div>")
                        .append($.trim(content))
                        .contents();
                }

                // If "filter" option is provided, then filter content
                if (slide.opts.filter) {
                    content = $("<div>")
                        .html(content)
                        .find(slide.opts.filter);
                }
            }

            slide.$slide.one("onReset", function () {
                // Pause all html5 video/audio
                $(this)
                    .find("video,audio")
                    .trigger("pause");

                // Put content back
                if (slide.$placeholder) {
                    slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();

                    slide.$placeholder = null;
                }

                // Remove custom close button
                if (slide.$smallBtn) {
                    slide.$smallBtn.remove();

                    slide.$smallBtn = null;
                }

                // Remove content and mark slide as not loaded
                if (!slide.hasError) {
                    $(this).empty();

                    slide.isLoaded = false;
                    slide.isRevealed = false;
                }
            });

            $(content).appendTo(slide.$slide);

            if ($(content).is("video,audio")) {
                $(content).addClass("fancybox-video");

                $(content).wrap("<div></div>");

                slide.contentType = "video";

                slide.opts.width = slide.opts.width || $(content).attr("width");
                slide.opts.height = slide.opts.height || $(content).attr("height");
            }

            slide.$content = slide.$slide
                .children()
                .filter("div,form,main,video,audio,article,.fancybox-content")
                .first();

            slide.$content.siblings().hide();

            // Re-check if there is a valid content
            // (in some cases, ajax response can contain various elements or plain text)
            if (!slide.$content.length) {
                slide.$content = slide.$slide
                    .wrapInner("<div></div>")
                    .children()
                    .first();
            }

            slide.$content.addClass("fancybox-content");

            slide.$slide.addClass("fancybox-slide--" + slide.contentType);

            self.afterLoad(slide);
        },

        // Display error message
        // =====================

        setError: function (slide) {
            slide.hasError = true;

            slide.$slide
                .trigger("onReset")
                .removeClass("fancybox-slide--" + slide.contentType)
                .addClass("fancybox-slide--error");

            slide.contentType = "html";

            this.setContent(slide, this.translate(slide, slide.opts.errorTpl));

            if (slide.pos === this.currPos) {
                this.isAnimating = false;
            }
        },

        // Show loading icon inside the slide
        // ==================================

        showLoading: function (slide) {
            var self = this;

            slide = slide || self.current;

            if (slide && !slide.$spinner) {
                slide.$spinner = $(self.translate(self, self.opts.spinnerTpl))
                    .appendTo(slide.$slide)
                    .hide()
                    .fadeIn("fast");
            }
        },

        // Remove loading icon from the slide
        // ==================================

        hideLoading: function (slide) {
            var self = this;

            slide = slide || self.current;

            if (slide && slide.$spinner) {
                slide.$spinner.stop().remove();

                delete slide.$spinner;
            }
        },

        // Adjustments after slide content has been loaded
        // ===============================================

        afterLoad: function (slide) {
            var self = this;

            if (self.isClosing) {
                return;
            }

            slide.isLoading = false;
            slide.isLoaded = true;

            self.trigger("afterLoad", slide);

            self.hideLoading(slide);

            // Add small close button
            if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
                slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
            }

            // Disable right click
            if (slide.opts.protect && slide.$content && !slide.hasError) {
                slide.$content.on("contextmenu.fb", function (e) {
                    if (e.button == 2) {
                        e.preventDefault();
                    }

                    return true;
                });

                // Add fake element on top of the image
                // This makes a bit harder for user to select image
                if (slide.type === "image") {
                    $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
                }
            }

            self.adjustCaption(slide);

            self.adjustLayout(slide);

            if (slide.pos === self.currPos) {
                self.updateCursor();
            }

            self.revealContent(slide);
        },

        // Prevent caption overlap,
        // fix css inconsistency across browsers
        // =====================================

        adjustCaption: function (slide) {
            var self = this,
                current = slide || self.current,
                caption = current.opts.caption,
                preventOverlap = current.opts.preventCaptionOverlap,
                $caption = self.$refs.caption,
                $clone,
                captionH = false;

            $caption.toggleClass("fancybox-caption--separate", preventOverlap);

            if (preventOverlap && caption && caption.length) {
                if (current.pos !== self.currPos) {
                    $clone = $caption.clone().appendTo($caption.parent());

                    $clone
                        .children()
                        .eq(0)
                        .empty()
                        .html(caption);

                    captionH = $clone.outerHeight(true);

                    $clone.empty().remove();
                } else if (self.$caption) {
                    captionH = self.$caption.outerHeight(true);
                }

                current.$slide.css("padding-bottom", captionH || "");
            }
        },

        // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
        // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
        // ====================================================================================

        adjustLayout: function (slide) {
            var self = this,
                current = slide || self.current,
                scrollHeight,
                marginBottom,
                inlinePadding,
                actualPadding;

            if (current.isLoaded && current.opts.disableLayoutFix !== true) {
                current.$content.css("margin-bottom", "");

                // If we would always set margin-bottom for the content,
                // then it would potentially break vertical align
                if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
                    inlinePadding = current.$slide[0].style["padding-bottom"];
                    actualPadding = current.$slide.css("padding-bottom");

                    if (parseFloat(actualPadding) > 0) {
                        scrollHeight = current.$slide[0].scrollHeight;

                        current.$slide.css("padding-bottom", 0);

                        if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
                            marginBottom = actualPadding;
                        }

                        current.$slide.css("padding-bottom", inlinePadding);
                    }
                }

                current.$content.css("margin-bottom", marginBottom);
            }
        },

        // Make content visible
        // This method is called right after content has been loaded or
        // user navigates gallery and transition should start
        // ============================================================

        revealContent: function (slide) {
            var self = this,
                $slide = slide.$slide,
                end = false,
                start = false,
                isMoved = self.isMoved(slide),
                isRevealed = slide.isRevealed,
                effect,
                effectClassName,
                duration,
                opacity;

            slide.isRevealed = true;

            effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
            duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];

            duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);

            if (isMoved || slide.pos !== self.currPos || !duration) {
                effect = false;
            }

            // Check if can zoom
            if (effect === "zoom") {
                if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
                    end = self.getFitPos(slide);
                } else {
                    effect = "fade";
                }
            }

            // Zoom animation
            // ==============
            if (effect === "zoom") {
                self.isAnimating = true;

                end.scaleX = end.width / start.width;
                end.scaleY = end.height / start.height;

                // Check if we need to animate opacity
                opacity = slide.opts.zoomOpacity;

                if (opacity == "auto") {
                    opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
                }

                if (opacity) {
                    start.opacity = 0.1;
                    end.opacity = 1;
                }

                // Draw image at start position
                $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);

                forceRedraw(slide.$content);

                // Start animation
                $.fancybox.animate(slide.$content, end, duration, function () {
                    self.isAnimating = false;

                    self.complete();
                });

                return;
            }

            self.updateSlide(slide);

            // Simply show content if no effect
            // ================================
            if (!effect) {
                slide.$content.removeClass("fancybox-is-hidden");

                if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
                    slide.$content.hide().fadeIn("fast");
                }

                if (slide.pos === self.currPos) {
                    self.complete();
                }

                return;
            }

            // Prepare for CSS transiton
            // =========================
            $.fancybox.stop($slide);

            //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
            effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;

            $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);

            slide.$content.removeClass("fancybox-is-hidden");

            // Force reflow
            forceRedraw($slide);

            if (slide.type !== "image") {
                slide.$content.hide().show(0);
            }

            $.fancybox.animate(
                $slide,
                "fancybox-slide--current",
                duration,
                function () {
                    $slide.removeClass(effectClassName).css({
                        transform: "",
                        opacity: ""
                    });

                    if (slide.pos === self.currPos) {
                        self.complete();
                    }
                },
                true
            );
        },

        // Check if we can and have to zoom from thumbnail
        //================================================

        getThumbPos: function (slide) {
            var rez = false,
                $thumb = slide.$thumb,
                thumbPos,
                btw,
                brw,
                bbw,
                blw;

            if (!$thumb || !inViewport($thumb[0])) {
                return false;
            }

            thumbPos = $.fancybox.getTranslate($thumb);

            btw = parseFloat($thumb.css("border-top-width") || 0);
            brw = parseFloat($thumb.css("border-right-width") || 0);
            bbw = parseFloat($thumb.css("border-bottom-width") || 0);
            blw = parseFloat($thumb.css("border-left-width") || 0);

            rez = {
                top: thumbPos.top + btw,
                left: thumbPos.left + blw,
                width: thumbPos.width - brw - blw,
                height: thumbPos.height - btw - bbw,
                scaleX: 1,
                scaleY: 1
            };

            return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
        },

        // Final adjustments after current gallery item is moved to position
        // and it`s content is loaded
        // ==================================================================

        complete: function () {
            var self = this,
                current = self.current,
                slides = {},
                $el;

            if (self.isMoved() || !current.isLoaded) {
                return;
            }

            if (!current.isComplete) {
                current.isComplete = true;

                current.$slide.siblings().trigger("onReset");

                self.preload("inline");

                // Trigger any CSS transiton inside the slide
                forceRedraw(current.$slide);

                current.$slide.addClass("fancybox-slide--complete");

                // Remove unnecessary slides
                $.each(self.slides, function (key, slide) {
                    if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
                        slides[slide.pos] = slide;
                    } else if (slide) {
                        $.fancybox.stop(slide.$slide);

                        slide.$slide.off().remove();
                    }
                });

                self.slides = slides;
            }

            self.isAnimating = false;

            self.updateCursor();

            self.trigger("afterShow");

            // Autoplay first html5 video/audio
            if (!!current.opts.video.autoStart) {
                current.$slide
                    .find("video,audio")
                    .filter(":visible:first")
                    .trigger("play")
                    .one("ended", function () {
                        if (Document.exitFullscreen) {
                            Document.exitFullscreen();
                        } else if (this.webkitExitFullscreen) {
                            this.webkitExitFullscreen();
                        }

                        self.next();
                    });
            }

            // Try to focus on the first focusable element
            if (current.opts.autoFocus && current.contentType === "html") {
                // Look for the first input with autofocus attribute
                $el = current.$content.find("input[autofocus]:enabled:visible:first");

                if ($el.length) {
                    $el.trigger("focus");
                } else {
                    self.focus(null, true);
                }
            }

            // Avoid jumping
            current.$slide.scrollTop(0).scrollLeft(0);
        },

        // Preload next and previous slides
        // ================================

        preload: function (type) {
            var self = this,
                prev,
                next;

            if (self.group.length < 2) {
                return;
            }

            next = self.slides[self.currPos + 1];
            prev = self.slides[self.currPos - 1];

            if (prev && prev.type === type) {
                self.loadSlide(prev);
            }

            if (next && next.type === type) {
                self.loadSlide(next);
            }
        },

        // Try to find and focus on the first focusable element
        // ====================================================

        focus: function (e, firstRun) {
            var self = this,
                focusableStr = [
                    "a[href]",
                    "area[href]",
                    'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
                    "select:not([disabled]):not([aria-hidden])",
                    "textarea:not([disabled]):not([aria-hidden])",
                    "button:not([disabled]):not([aria-hidden])",
                    "iframe",
                    "object",
                    "embed",
                    "video",
                    "audio",
                    "[contenteditable]",
                    '[tabindex]:not([tabindex^="-"])'
                ].join(","),
                focusableItems,
                focusedItemIndex;

            if (self.isClosing) {
                return;
            }

            if (e || !self.current || !self.current.isComplete) {
                // Focus on any element inside fancybox
                focusableItems = self.$refs.container.find("*:visible");
            } else {
                // Focus inside current slide
                focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
            }

            focusableItems = focusableItems.filter(focusableStr).filter(function () {
                return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
            });

            if (focusableItems.length) {
                focusedItemIndex = focusableItems.index(document.activeElement);

                if (e && e.shiftKey) {
                    // Back tab
                    if (focusedItemIndex < 0 || focusedItemIndex == 0) {
                        e.preventDefault();

                        focusableItems.eq(focusableItems.length - 1).trigger("focus");
                    }
                } else {
                    // Outside or Forward tab
                    if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
                        if (e) {
                            e.preventDefault();
                        }

                        focusableItems.eq(0).trigger("focus");
                    }
                }
            } else {
                self.$refs.container.trigger("focus");
            }
        },

        // Activates current instance - brings container to the front and enables keyboard,
        // notifies other instances about deactivating
        // =================================================================================

        activate: function () {
            var self = this;

            // Deactivate all instances
            $(".fancybox-container").each(function () {
                var instance = $(this).data("FancyBox");

                // Skip self and closing instances
                if (instance && instance.id !== self.id && !instance.isClosing) {
                    instance.trigger("onDeactivate");

                    instance.removeEvents();

                    instance.isVisible = false;
                }
            });

            self.isVisible = true;

            if (self.current || self.isIdle) {
                self.update();

                self.updateControls();
            }

            self.trigger("onActivate");

            self.addEvents();
        },

        // Start closing procedure
        // This will start "zoom-out" animation if needed and clean everything up afterwards
        // =================================================================================

        close: function (e, d) {
            var self = this,
                current = self.current,
                effect,
                duration,
                $content,
                domRect,
                opacity,
                start,
                end;

            var done = function () {
                self.cleanUp(e);
            };

            if (self.isClosing) {
                return false;
            }

            self.isClosing = true;

            // If beforeClose callback prevents closing, make sure content is centered
            if (self.trigger("beforeClose", e) === false) {
                self.isClosing = false;

                requestAFrame(function () {
                    self.update();
                });

                return false;
            }

            // Remove all events
            // If there are multiple instances, they will be set again by "activate" method
            self.removeEvents();

            $content = current.$content;
            effect = current.opts.animationEffect;
            duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;

            current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");

            if (e !== true) {
                $.fancybox.stop(current.$slide);
            } else {
                effect = false;
            }

            // Remove other slides
            current.$slide
                .siblings()
                .trigger("onReset")
                .remove();

            // Trigger animations
            if (duration) {
                self.$refs.container
                    .removeClass("fancybox-is-open")
                    .addClass("fancybox-is-closing")
                    .css("transition-duration", duration + "ms");
            }

            // Clean up
            self.hideLoading(current);

            self.hideControls(true);

            self.updateCursor();

            // Check if possible to zoom-out
            if (
                effect === "zoom" &&
                !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))
            ) {
                effect = "fade";
            }

            if (effect === "zoom") {
                $.fancybox.stop($content);

                domRect = $.fancybox.getTranslate($content);

                start = {
                    top: domRect.top,
                    left: domRect.left,
                    scaleX: domRect.width / end.width,
                    scaleY: domRect.height / end.height,
                    width: end.width,
                    height: end.height
                };

                // Check if we need to animate opacity
                opacity = current.opts.zoomOpacity;

                if (opacity == "auto") {
                    opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
                }

                if (opacity) {
                    end.opacity = 0;
                }

                $.fancybox.setTranslate($content, start);

                forceRedraw($content);

                $.fancybox.animate($content, end, duration, done);

                return true;
            }

            if (effect && duration) {
                $.fancybox.animate(
                    current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),
                    "fancybox-animated fancybox-fx-" + effect,
                    duration,
                    done
                );
            } else {
                // If skip animation
                if (e === true) {
                    setTimeout(done, duration);
                } else {
                    done();
                }
            }

            return true;
        },

        // Final adjustments after removing the instance
        // =============================================

        cleanUp: function (e) {
            var self = this,
                instance,
                $focus = self.current.opts.$orig,
                x,
                y;

            self.current.$slide.trigger("onReset");

            self.$refs.container.empty().remove();

            self.trigger("afterClose", e);

            // Place back focus
            if (!!self.current.opts.backFocus) {
                if (!$focus || !$focus.length || !$focus.is(":visible")) {
                    $focus = self.$trigger;
                }

                if ($focus && $focus.length) {
                    x = window.scrollX;
                    y = window.scrollY;

                    $focus.trigger("focus");

                    $("html, body")
                        .scrollTop(y)
                        .scrollLeft(x);
                }
            }

            self.current = null;

            // Check if there are other instances
            instance = $.fancybox.getInstance();

            if (instance) {
                instance.activate();
            } else {
                $("body").removeClass("fancybox-active compensate-for-scrollbar");

                $("#fancybox-style-noscroll").remove();
            }
        },

        // Call callback and trigger an event
        // ==================================

        trigger: function (name, slide) {
            var args = Array.prototype.slice.call(arguments, 1),
                self = this,
                obj = slide && slide.opts ? slide : self.current,
                rez;

            if (obj) {
                args.unshift(obj);
            } else {
                obj = self;
            }

            args.unshift(self);

            if ($.isFunction(obj.opts[name])) {
                rez = obj.opts[name].apply(obj, args);
            }

            if (rez === false) {
                return rez;
            }

            if (name === "afterClose" || !self.$refs) {
                $D.trigger(name + ".fb", args);
            } else {
                self.$refs.container.trigger(name + ".fb", args);
            }
        },

        // Update infobar values, navigation button states and reveal caption
        // ==================================================================

        updateControls: function () {
            var self = this,
                current = self.current,
                index = current.index,
                $container = self.$refs.container,
                $caption = self.$refs.caption,
                caption = current.opts.caption;

            // Recalculate content dimensions
            current.$slide.trigger("refresh");

            // Set caption
            if (caption && caption.length) {
                self.$caption = $caption;

                $caption
                    .children()
                    .eq(0)
                    .html(caption);
            } else {
                self.$caption = null;
            }

            if (!self.hasHiddenControls && !self.isIdle) {
                self.showControls();
            }

            // Update info and navigation elements
            $container.find("[data-fancybox-count]").html(self.group.length);
            $container.find("[data-fancybox-index]").html(index + 1);

            $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
            $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);

            if (current.type === "image") {
                // Re-enable buttons; update download button source
                $container
                    .find("[data-fancybox-zoom]")
                    .show()
                    .end()
                    .find("[data-fancybox-download]")
                    .attr("href", current.opts.image.src || current.src)
                    .show();
            } else if (current.opts.toolbar) {
                $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
            }

            // Make sure focus is not on disabled button/element
            if ($(document.activeElement).is(":hidden,[disabled]")) {
                self.$refs.container.trigger("focus");
            }
        },

        // Hide toolbar and caption
        // ========================

        hideControls: function (andCaption) {
            var self = this,
                arr = ["infobar", "toolbar", "nav"];

            if (andCaption || !self.current.opts.preventCaptionOverlap) {
                arr.push("caption");
            }

            this.$refs.container.removeClass(
                arr
                    .map(function (i) {
                        return "fancybox-show-" + i;
                    })
                    .join(" ")
            );

            this.hasHiddenControls = true;
        },

        showControls: function () {
            var self = this,
                opts = self.current ? self.current.opts : self.opts,
                $container = self.$refs.container;

            self.hasHiddenControls = false;
            self.idleSecondsCounter = 0;

            $container
                .toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons))
                .toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1))
                .toggleClass("fancybox-show-caption", !!self.$caption)
                .toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1))
                .toggleClass("fancybox-is-modal", !!opts.modal);
        },

        // Toggle toolbar and caption
        // ==========================

        toggleControls: function () {
            if (this.hasHiddenControls) {
                this.showControls();
            } else {
                this.hideControls();
            }
        }
    });

    $.fancybox = {
        version: "3.5.7",
        defaults: defaults,

        // Get current instance and execute a command.
        //
        // Examples of usage:
        //
        //   $instance = $.fancybox.getInstance();
        //   $.fancybox.getInstance().jumpTo( 1 );
        //   $.fancybox.getInstance( 'jumpTo', 1 );
        //   $.fancybox.getInstance( function() {
        //       console.info( this.currIndex );
        //   });
        // ======================================================

        getInstance: function (command) {
            var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                args = Array.prototype.slice.call(arguments, 1);

            if (instance instanceof FancyBox) {
                if ($.type(command) === "string") {
                    instance[command].apply(instance, args);
                } else if ($.type(command) === "function") {
                    command.apply(instance, args);
                }

                return instance;
            }

            return false;
        },

        // Create new instance
        // ===================

        open: function (items, opts, index) {
            return new FancyBox(items, opts, index);
        },

        // Close current or all instances
        // ==============================

        close: function (all) {
            var instance = this.getInstance();

            if (instance) {
                instance.close();

                // Try to find and close next instance
                if (all === true) {
                    this.close(all);
                }
            }
        },

        // Close all instances and unbind all events
        // =========================================

        destroy: function () {
            this.close(true);

            $D.add("body").off("click.fb-start", "**");
        },

        // Try to detect mobile devices
        // ============================

        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),

        // Detect if 'translate3d' support is available
        // ============================================

        use3d: (function () {
            var div = document.createElement("div");

            return (
                window.getComputedStyle &&
                window.getComputedStyle(div) &&
                window.getComputedStyle(div).getPropertyValue("transform") &&
                !(document.documentMode && document.documentMode < 11)
            );
        })(),

        // Helper function to get current visual state of an element
        // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
        // =====================================================================

        getTranslate: function ($el) {
            var domRect;

            if (!$el || !$el.length) {
                return false;
            }

            domRect = $el[0].getBoundingClientRect();

            return {
                top: domRect.top || 0,
                left: domRect.left || 0,
                width: domRect.width,
                height: domRect.height,
                opacity: parseFloat($el.css("opacity"))
            };
        },

        // Shortcut for setting "translate3d" properties for element
        // Can set be used to set opacity, too
        // ========================================================

        setTranslate: function ($el, props) {
            var str = "",
                css = {};

            if (!$el || !props) {
                return;
            }

            if (props.left !== undefined || props.top !== undefined) {
                str =
                    (props.left === undefined ? $el.position().left : props.left) +
                    "px, " +
                    (props.top === undefined ? $el.position().top : props.top) +
                    "px";

                if (this.use3d) {
                    str = "translate3d(" + str + ", 0px)";
                } else {
                    str = "translate(" + str + ")";
                }
            }

            if (props.scaleX !== undefined && props.scaleY !== undefined) {
                str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
            } else if (props.scaleX !== undefined) {
                str += " scaleX(" + props.scaleX + ")";
            }

            if (str.length) {
                css.transform = str;
            }

            if (props.opacity !== undefined) {
                css.opacity = props.opacity;
            }

            if (props.width !== undefined) {
                css.width = props.width;
            }

            if (props.height !== undefined) {
                css.height = props.height;
            }

            return $el.css(css);
        },

        // Simple CSS transition handler
        // =============================

        animate: function ($el, to, duration, callback, leaveAnimationName) {
            var self = this,
                from;

            if ($.isFunction(duration)) {
                callback = duration;
                duration = null;
            }

            self.stop($el);

            from = self.getTranslate($el);

            $el.on(transitionEnd, function (e) {
                // Skip events from child elements and z-index change
                if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
                    return;
                }

                self.stop($el);

                if ($.isNumeric(duration)) {
                    $el.css("transition-duration", "");
                }

                if ($.isPlainObject(to)) {
                    if (to.scaleX !== undefined && to.scaleY !== undefined) {
                        self.setTranslate($el, {
                            top: to.top,
                            left: to.left,
                            width: from.width * to.scaleX,
                            height: from.height * to.scaleY,
                            scaleX: 1,
                            scaleY: 1
                        });
                    }
                } else if (leaveAnimationName !== true) {
                    $el.removeClass(to);
                }

                if ($.isFunction(callback)) {
                    callback(e);
                }
            });

            if ($.isNumeric(duration)) {
                $el.css("transition-duration", duration + "ms");
            }

            // Start animation by changing CSS properties or class name
            if ($.isPlainObject(to)) {
                if (to.scaleX !== undefined && to.scaleY !== undefined) {
                    delete to.width;
                    delete to.height;

                    if ($el.parent().hasClass("fancybox-slide--image")) {
                        $el.parent().addClass("fancybox-is-scaling");
                    }
                }

                $.fancybox.setTranslate($el, to);
            } else {
                $el.addClass(to);
            }

            // Make sure that `transitionend` callback gets fired
            $el.data(
                "timer",
                setTimeout(function () {
                    $el.trigger(transitionEnd);
                }, duration + 33)
            );
        },

        stop: function ($el, callCallback) {
            if ($el && $el.length) {
                clearTimeout($el.data("timer"));

                if (callCallback) {
                    $el.trigger(transitionEnd);
                }

                $el.off(transitionEnd).css("transition-duration", "");

                $el.parent().removeClass("fancybox-is-scaling");
            }
        }
    };

    // Default click handler for "fancyboxed" links
    // ============================================

    function _run(e, opts) {
        var items = [],
            index = 0,
            $target,
            value,
            instance;

        // Avoid opening multiple times
        if (e && e.isDefaultPrevented()) {
            return;
        }

        e.preventDefault();

        opts = opts || {};

        if (e && e.data) {
            opts = mergeOpts(e.data.options, opts);
        }

        $target = opts.$target || $(e.currentTarget).trigger("blur");
        instance = $.fancybox.getInstance();

        if (instance && instance.$trigger && instance.$trigger.is($target)) {
            return;
        }

        if (opts.selector) {
            items = $(opts.selector);
        } else {
            // Get all related items and find index for clicked one
            value = $target.attr("data-fancybox") || "";

            if (value) {
                items = e.data ? e.data.items : [];
                items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
            } else {
                items = [$target];
            }
        }

        index = $(items).index($target);

        // Sometimes current item can not be found
        if (index < 0) {
            index = 0;
        }

        instance = $.fancybox.open(items, opts, index);

        // Save last active element
        instance.$trigger = $target;
    }

    // Create a jQuery plugin
    // ======================

    $.fn.fancybox = function (options) {
        var selector;

        options = options || {};
        selector = options.selector || false;

        if (selector) {
            // Use body element instead of document so it executes first
            $("body")
                .off("click.fb-start", selector)
                .on("click.fb-start", selector, {
                    options: options
                }, _run);
        } else {
            this.off("click.fb-start").on(
                "click.fb-start", {
                    items: this,
                    options: options
                },
                _run
            );
        }

        return this;
    };

    // Self initializing plugin for all elements having `data-fancybox` attribute
    // ==========================================================================

    $D.on("click.fb-start", "[data-fancybox]", _run);

    // Enable "trigger elements"
    // =========================

    $D.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
        $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]')
            .eq($(this).attr("data-fancybox-index") || 0)
            .trigger("click.fb-start", {
                $trigger: $(this)
            });
    });

    // Track focus event for better accessibility styling
    // ==================================================
    (function () {
        var buttonStr = ".fancybox-button",
            focusStr = "fancybox-focus",
            $pressed = null;

        $D.on("mousedown mouseup focus blur", buttonStr, function (e) {
            switch (e.type) {
                case "mousedown":
                    $pressed = $(this);
                    break;
                case "mouseup":
                    $pressed = null;
                    break;
                case "focusin":
                    $(buttonStr).removeClass(focusStr);

                    if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
                        $(this).addClass(focusStr);
                    }
                    break;
                case "focusout":
                    $(buttonStr).removeClass(focusStr);
                    break;
            }
        });
    })();
})(window, document, jQuery);
// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
(function ($) {
    "use strict";

    // Object containing properties for each media type
    var defaults = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {
                autoplay: 1,
                autohide: 1,
                fs: 1,
                rel: 0,
                hd: 1,
                wmode: "transparent",
                enablejsapi: 1,
                html5: 1
            },
            paramPlace: 8,
            type: "iframe",
            url: "https://www.youtube-nocookie.com/embed/$4",
            thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
        },

        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {
                autoplay: 1,
                hd: 1,
                show_title: 1,
                show_byline: 1,
                show_portrait: 0,
                fullscreen: 1
            },
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },

        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },

        // Examples:
        // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
        // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
        // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
        // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function (rez) {
                return (
                    "//maps.google." +
                    rez[2] +
                    "/?ll=" +
                    (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") +
                    "&output=" +
                    (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
                );
            }
        },

        // Examples:
        // https://www.google.com/maps/search/Empire+State+Building/
        // https://www.google.com/maps/search/?api=1&query=centurylink+field
        // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function (rez) {
                return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
            }
        }
    };

    // Formats matching url to final form
    var format = function (url, rez, params) {
        if (!url) {
            return;
        }

        params = params || "";

        if ($.type(params) === "object") {
            params = $.param(params, true);
        }

        $.each(rez, function (key, value) {
            url = url.replace("$" + key, value || "");
        });

        if (params.length) {
            url += (url.indexOf("?") > 0 ? "&" : "?") + params;
        }

        return url;
    };

    $(document).on("objectNeedsType.fb", function (e, instance, item) {
        var url = item.src || "",
            type = false,
            media,
            thumb,
            rez,
            params,
            urlParams,
            paramObj,
            provider;

        media = $.extend(true, {}, defaults, item.opts.media);

        // Look for any matching media type
        $.each(media, function (providerName, providerOpts) {
            rez = url.match(providerOpts.matcher);

            if (!rez) {
                return;
            }

            type = providerOpts.type;
            provider = providerName;
            paramObj = {};

            if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
                urlParams = rez[providerOpts.paramPlace];

                if (urlParams[0] == "?") {
                    urlParams = urlParams.substring(1);
                }

                urlParams = urlParams.split("&");

                for (var m = 0; m < urlParams.length; ++m) {
                    var p = urlParams[m].split("=", 2);

                    if (p.length == 2) {
                        paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
                    }
                }
            }

            params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);

            url =
                $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);

            thumb =
                $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);

            if (providerName === "youtube") {
                url = url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s) {
                    return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
                });
            } else if (providerName === "vimeo") {
                url = url.replace("&%23", "#");
            }

            return false;
        });

        // If it is found, then change content type and update the url

        if (type) {
            if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
                item.opts.thumb = thumb;
            }

            if (type === "iframe") {
                item.opts = $.extend(true, item.opts, {
                    iframe: {
                        preload: false,
                        attr: {
                            scrolling: "no"
                        }
                    }
                });
            }

            $.extend(item, {
                type: type,
                src: url,
                origSrc: item.src,
                contentSource: provider,
                contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
            });
        } else if (url) {
            item.type = item.opts.defaultType;
        }
    });

    // Load YouTube/Video API on request to detect when video finished playing
    var VideoAPILoader = {
        youtube: {
            src: "https://www.youtube.com/iframe_api",
            class: "YT",
            loading: false,
            loaded: false
        },

        vimeo: {
            src: "https://player.vimeo.com/api/player.js",
            class: "Vimeo",
            loading: false,
            loaded: false
        },

        load: function (vendor) {
            var _this = this,
                script;

            if (this[vendor].loaded) {
                setTimeout(function () {
                    _this.done(vendor);
                });
                return;
            }

            if (this[vendor].loading) {
                return;
            }

            this[vendor].loading = true;

            script = document.createElement("script");
            script.type = "text/javascript";
            script.src = this[vendor].src;

            if (vendor === "youtube") {
                window.onYouTubeIframeAPIReady = function () {
                    _this[vendor].loaded = true;
                    _this.done(vendor);
                };
            } else {
                script.onload = function () {
                    _this[vendor].loaded = true;
                    _this.done(vendor);
                };
            }

            document.body.appendChild(script);
        },
        done: function (vendor) {
            var instance, $el, player;

            if (vendor === "youtube") {
                delete window.onYouTubeIframeAPIReady;
            }

            instance = $.fancybox.getInstance();

            if (instance) {
                $el = instance.current.$content.find("iframe");

                if (vendor === "youtube" && YT !== undefined && YT) {
                    player = new YT.Player($el.attr("id"), {
                        events: {
                            onStateChange: function (e) {
                                if (e.data == 0) {
                                    instance.next();
                                }
                            }
                        }
                    });
                } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
                    player = new Vimeo.Player($el);

                    player.on("ended", function () {
                        instance.next();
                    });
                }
            }
        }
    };

    $(document).on({
        "afterShow.fb": function (e, instance, current) {
            if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
                VideoAPILoader.load(current.contentSource);
            }
        }
    });
})(jQuery);
// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
(function (window, document, $) {
    "use strict";

    var requestAFrame = (function () {
        return (
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            // if all else fails, use setTimeout
            function (callback) {
                return window.setTimeout(callback, 1000 / 60);
            }
        );
    })();

    var cancelAFrame = (function () {
        return (
            window.cancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.oCancelAnimationFrame ||
            function (id) {
                window.clearTimeout(id);
            }
        );
    })();

    var getPointerXY = function (e) {
        var result = [];

        e = e.originalEvent || e || window.e;
        e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];

        for (var key in e) {
            if (e[key].pageX) {
                result.push({
                    x: e[key].pageX,
                    y: e[key].pageY
                });
            } else if (e[key].clientX) {
                result.push({
                    x: e[key].clientX,
                    y: e[key].clientY
                });
            }
        }

        return result;
    };

    var distance = function (point2, point1, what) {
        if (!point1 || !point2) {
            return 0;
        }

        if (what === "x") {
            return point2.x - point1.x;
        } else if (what === "y") {
            return point2.y - point1.y;
        }

        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    };

    var isClickable = function ($el) {
        if (
            $el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') ||
            $.isFunction($el.get(0).onclick) ||
            $el.data("selectable")
        ) {
            return true;
        }

        // Check for attributes like data-fancybox-next or data-fancybox-close
        for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
            if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
                return true;
            }
        }

        return false;
    };

    var hasScrollbars = function (el) {
        var overflowY = window.getComputedStyle(el)["overflow-y"],
            overflowX = window.getComputedStyle(el)["overflow-x"],
            vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
            horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;

        return vertical || horizontal;
    };

    var isScrollable = function ($el) {
        var rez = false;

        while (true) {
            rez = hasScrollbars($el.get(0));

            if (rez) {
                break;
            }

            $el = $el.parent();

            if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
                break;
            }
        }

        return rez;
    };

    var Guestures = function (instance) {
        var self = this;

        self.instance = instance;

        self.$bg = instance.$refs.bg;
        self.$stage = instance.$refs.stage;
        self.$container = instance.$refs.container;

        self.destroy();

        self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
    };

    Guestures.prototype.destroy = function () {
        var self = this;

        self.$container.off(".fb.touch");

        $(document).off(".fb.touch");

        if (self.requestId) {
            cancelAFrame(self.requestId);
            self.requestId = null;
        }

        if (self.tapped) {
            clearTimeout(self.tapped);
            self.tapped = null;
        }
    };

    Guestures.prototype.ontouchstart = function (e) {
        var self = this,
            $target = $(e.target),
            instance = self.instance,
            current = instance.current,
            $slide = current.$slide,
            $content = current.$content,
            isTouchDevice = e.type == "touchstart";

        // Do not respond to both (touch and mouse) events
        if (isTouchDevice) {
            self.$container.off("mousedown.fb.touch");
        }

        // Ignore right click
        if (e.originalEvent && e.originalEvent.button == 2) {
            return;
        }

        // Ignore taping on links, buttons, input elements
        if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
            return;
        }
        // Ignore clicks on the scrollbar
        if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
            return;
        }

        // Ignore clicks while zooming or closing
        if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
            e.stopPropagation();
            e.preventDefault();

            return;
        }

        self.realPoints = self.startPoints = getPointerXY(e);

        if (!self.startPoints.length) {
            return;
        }

        // Allow other scripts to catch touch event if "touch" is set to false
        if (current.touch) {
            e.stopPropagation();
        }

        self.startEvent = e;

        self.canTap = true;
        self.$target = $target;
        self.$content = $content;
        self.opts = current.opts.touch;

        self.isPanning = false;
        self.isSwiping = false;
        self.isZooming = false;
        self.isScrolling = false;
        self.canPan = instance.canPan();

        self.startTime = new Date().getTime();
        self.distanceX = self.distanceY = self.distance = 0;

        self.canvasWidth = Math.round($slide[0].clientWidth);
        self.canvasHeight = Math.round($slide[0].clientHeight);

        self.contentLastPos = null;
        self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
            top: 0,
            left: 0
        };
        self.sliderStartPos = $.fancybox.getTranslate($slide);

        // Since position will be absolute, but we need to make it relative to the stage
        self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);

        self.sliderStartPos.top -= self.stagePos.top;
        self.sliderStartPos.left -= self.stagePos.left;

        self.contentStartPos.top -= self.stagePos.top;
        self.contentStartPos.left -= self.stagePos.left;

        $(document)
            .off(".fb.touch")
            .on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend"))
            .on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));

        if ($.fancybox.isMobile) {
            document.addEventListener("scroll", self.onscroll, true);
        }

        // Skip if clicked outside the sliding area
        if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
            if ($target.is(".fancybox-image")) {
                e.preventDefault();
            }

            if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
                return;
            }
        }

        self.isScrollable = isScrollable($target) || isScrollable($target.parent());

        // Check if element is scrollable and try to prevent default behavior (scrolling)
        if (!($.fancybox.isMobile && self.isScrollable)) {
            e.preventDefault();
        }

        // One finger or mouse click - swipe or pan an image
        if (self.startPoints.length === 1 || current.hasError) {
            if (self.canPan) {
                $.fancybox.stop(self.$content);

                self.isPanning = true;
            } else {
                self.isSwiping = true;
            }

            self.$container.addClass("fancybox-is-grabbing");
        }

        // Two fingers - zoom image
        if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
            self.canTap = false;
            self.isSwiping = false;
            self.isPanning = false;

            self.isZooming = true;

            $.fancybox.stop(self.$content);

            self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
            self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();

            self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
            self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;

            self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
        }
    };

    Guestures.prototype.onscroll = function (e) {
        var self = this;

        self.isScrolling = true;

        document.removeEventListener("scroll", self.onscroll, true);
    };

    Guestures.prototype.ontouchmove = function (e) {
        var self = this;

        // Make sure user has not released over iframe or disabled element
        if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
            self.ontouchend(e);
            return;
        }

        if (self.isScrolling) {
            self.canTap = false;
            return;
        }

        self.newPoints = getPointerXY(e);

        if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
            return;
        }

        if (!(self.isSwiping && self.isSwiping === true)) {
            e.preventDefault();
        }

        self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
        self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");

        self.distance = distance(self.newPoints[0], self.startPoints[0]);

        // Skip false ontouchmove events (Chrome)
        if (self.distance > 0) {
            if (self.isSwiping) {
                self.onSwipe(e);
            } else if (self.isPanning) {
                self.onPan();
            } else if (self.isZooming) {
                self.onZoom();
            }
        }
    };

    Guestures.prototype.onSwipe = function (e) {
        var self = this,
            instance = self.instance,
            swiping = self.isSwiping,
            left = self.sliderStartPos.left || 0,
            angle;

        // If direction is not yet determined
        if (swiping === true) {
            // We need at least 10px distance to correctly calculate an angle
            if (Math.abs(self.distance) > 10) {
                self.canTap = false;

                if (instance.group.length < 2 && self.opts.vertical) {
                    self.isSwiping = "y";
                } else if (instance.isDragging || self.opts.vertical === false || (self.opts.vertical === "auto" && $(window).width() > 800)) {
                    self.isSwiping = "x";
                } else {
                    angle = Math.abs((Math.atan2(self.distanceY, self.distanceX) * 180) / Math.PI);

                    self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
                }

                if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
                    self.isScrolling = true;

                    return;
                }

                instance.isDragging = self.isSwiping;

                // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
                self.startPoints = self.newPoints;

                $.each(instance.slides, function (index, slide) {
                    var slidePos, stagePos;

                    $.fancybox.stop(slide.$slide);

                    slidePos = $.fancybox.getTranslate(slide.$slide);
                    stagePos = $.fancybox.getTranslate(instance.$refs.stage);

                    slide.$slide
                        .css({
                            transform: "",
                            opacity: "",
                            "transition-duration": ""
                        })
                        .removeClass("fancybox-animated")
                        .removeClass(function (index, className) {
                            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
                        });

                    if (slide.pos === instance.current.pos) {
                        self.sliderStartPos.top = slidePos.top - stagePos.top;
                        self.sliderStartPos.left = slidePos.left - stagePos.left;
                    }

                    $.fancybox.setTranslate(slide.$slide, {
                        top: slidePos.top - stagePos.top,
                        left: slidePos.left - stagePos.left
                    });
                });

                // Stop slideshow
                if (instance.SlideShow && instance.SlideShow.isActive) {
                    instance.SlideShow.stop();
                }
            }

            return;
        }

        // Sticky edges
        if (swiping == "x") {
            if (
                self.distanceX > 0 &&
                (self.instance.group.length < 2 || (self.instance.current.index === 0 && !self.instance.current.opts.loop))
            ) {
                left = left + Math.pow(self.distanceX, 0.8);
            } else if (
                self.distanceX < 0 &&
                (self.instance.group.length < 2 ||
                    (self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop))
            ) {
                left = left - Math.pow(-self.distanceX, 0.8);
            } else {
                left = left + self.distanceX;
            }
        }

        self.sliderLastPos = {
            top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
            left: left
        };

        if (self.requestId) {
            cancelAFrame(self.requestId);

            self.requestId = null;
        }

        self.requestId = requestAFrame(function () {
            if (self.sliderLastPos) {
                $.each(self.instance.slides, function (index, slide) {
                    var pos = slide.pos - self.instance.currPos;

                    $.fancybox.setTranslate(slide.$slide, {
                        top: self.sliderLastPos.top,
                        left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
                    });
                });

                self.$container.addClass("fancybox-is-sliding");
            }
        });
    };

    Guestures.prototype.onPan = function () {
        var self = this;

        // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
        if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
            self.startPoints = self.newPoints;
            return;
        }

        self.canTap = false;

        self.contentLastPos = self.limitMovement();

        if (self.requestId) {
            cancelAFrame(self.requestId);
        }

        self.requestId = requestAFrame(function () {
            $.fancybox.setTranslate(self.$content, self.contentLastPos);
        });
    };

    // Make panning sticky to the edges
    Guestures.prototype.limitMovement = function () {
        var self = this;

        var canvasWidth = self.canvasWidth;
        var canvasHeight = self.canvasHeight;

        var distanceX = self.distanceX;
        var distanceY = self.distanceY;

        var contentStartPos = self.contentStartPos;

        var currentOffsetX = contentStartPos.left;
        var currentOffsetY = contentStartPos.top;

        var currentWidth = contentStartPos.width;
        var currentHeight = contentStartPos.height;

        var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;

        if (currentWidth > canvasWidth) {
            newOffsetX = currentOffsetX + distanceX;
        } else {
            newOffsetX = currentOffsetX;
        }

        newOffsetY = currentOffsetY + distanceY;

        // Slow down proportionally to traveled distance
        minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
        minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);

        maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
        maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);

        //   ->
        if (distanceX > 0 && newOffsetX > minTranslateX) {
            newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
        }

        //    <-
        if (distanceX < 0 && newOffsetX < maxTranslateX) {
            newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
        }

        //   \/
        if (distanceY > 0 && newOffsetY > minTranslateY) {
            newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
        }

        //   /\
        if (distanceY < 0 && newOffsetY < maxTranslateY) {
            newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
        }

        return {
            top: newOffsetY,
            left: newOffsetX
        };
    };

    Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
        var self = this;

        var canvasWidth = self.canvasWidth;
        var canvasHeight = self.canvasHeight;

        if (newWidth > canvasWidth) {
            newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
            newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
        } else {
            // Center horizontally
            newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
        }

        if (newHeight > canvasHeight) {
            newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
            newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
        } else {
            // Center vertically
            newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
        }

        return {
            top: newOffsetY,
            left: newOffsetX
        };
    };

    Guestures.prototype.onZoom = function () {
        var self = this;

        // Calculate current distance between points to get pinch ratio and new width and height
        var contentStartPos = self.contentStartPos;

        var currentWidth = contentStartPos.width;
        var currentHeight = contentStartPos.height;

        var currentOffsetX = contentStartPos.left;
        var currentOffsetY = contentStartPos.top;

        var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);

        var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

        var newWidth = Math.floor(currentWidth * pinchRatio);
        var newHeight = Math.floor(currentHeight * pinchRatio);

        // This is the translation due to pinch-zooming
        var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
        var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

        // Point between the two touches
        var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
        var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();

        // And this is the translation due to translation of the centerpoint
        // between the two fingers
        var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
        var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

        // The new offset is the old/current one plus the total translation
        var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
        var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);

        var newPos = {
            top: newOffsetY,
            left: newOffsetX,
            scaleX: pinchRatio,
            scaleY: pinchRatio
        };

        self.canTap = false;

        self.newWidth = newWidth;
        self.newHeight = newHeight;

        self.contentLastPos = newPos;

        if (self.requestId) {
            cancelAFrame(self.requestId);
        }

        self.requestId = requestAFrame(function () {
            $.fancybox.setTranslate(self.$content, self.contentLastPos);
        });
    };

    Guestures.prototype.ontouchend = function (e) {
        var self = this;

        var swiping = self.isSwiping;
        var panning = self.isPanning;
        var zooming = self.isZooming;
        var scrolling = self.isScrolling;

        self.endPoints = getPointerXY(e);
        self.dMs = Math.max(new Date().getTime() - self.startTime, 1);

        self.$container.removeClass("fancybox-is-grabbing");

        $(document).off(".fb.touch");

        document.removeEventListener("scroll", self.onscroll, true);

        if (self.requestId) {
            cancelAFrame(self.requestId);

            self.requestId = null;
        }

        self.isSwiping = false;
        self.isPanning = false;
        self.isZooming = false;
        self.isScrolling = false;

        self.instance.isDragging = false;

        if (self.canTap) {
            return self.onTap(e);
        }

        self.speed = 100;

        // Speed in px/ms
        self.velocityX = (self.distanceX / self.dMs) * 0.5;
        self.velocityY = (self.distanceY / self.dMs) * 0.5;

        if (panning) {
            self.endPanning();
        } else if (zooming) {
            self.endZooming();
        } else {
            self.endSwiping(swiping, scrolling);
        }


    };

    Guestures.prototype.endSwiping = function (swiping, scrolling) {
        var self = this,
            ret = false,
            len = self.instance.group.length,
            distanceX = Math.abs(self.distanceX),
            canAdvance = swiping == "x" && len > 1 && ((self.dMs > 130 && distanceX > 10) || distanceX > 50),
            speedX = 300;

        self.sliderLastPos = null;

        // Close if swiped vertically / navigate if horizontally
        if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
            // Continue vertical movement
            $.fancybox.animate(
                self.instance.current.$slide, {
                    top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
                    opacity: 0
                },
                200
            );
            ret = self.instance.close(true, 250);
        } else if (canAdvance && self.distanceX > 0) {
            ret = self.instance.previous(speedX);
        } else if (canAdvance && self.distanceX < 0) {
            ret = self.instance.next(speedX);
        }

        if (ret === false && (swiping == "x" || swiping == "y")) {
            self.instance.centerSlide(200);
        }

        self.$container.removeClass("fancybox-is-sliding");
    };

    // Limit panning from edges
    // ========================
    Guestures.prototype.endPanning = function () {
        var self = this,
            newOffsetX,
            newOffsetY,
            newPos;

        if (!self.contentLastPos) {
            return;
        }

        if (self.opts.momentum === false || self.dMs > 350) {
            newOffsetX = self.contentLastPos.left;
            newOffsetY = self.contentLastPos.top;
        } else {
            // Continue movement
            newOffsetX = self.contentLastPos.left + self.velocityX * 500;
            newOffsetY = self.contentLastPos.top + self.velocityY * 500;
        }

        newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);

        newPos.width = self.contentStartPos.width;
        newPos.height = self.contentStartPos.height;

        $.fancybox.animate(self.$content, newPos, 366);
    };

    Guestures.prototype.endZooming = function () {
        var self = this;

        var current = self.instance.current;

        var newOffsetX, newOffsetY, newPos, reset;

        var newWidth = self.newWidth;
        var newHeight = self.newHeight;

        if (!self.contentLastPos) {
            return;
        }

        newOffsetX = self.contentLastPos.left;
        newOffsetY = self.contentLastPos.top;

        reset = {
            top: newOffsetY,
            left: newOffsetX,
            width: newWidth,
            height: newHeight,
            scaleX: 1,
            scaleY: 1
        };

        // Reset scalex/scaleY values; this helps for perfomance and does not break animation
        $.fancybox.setTranslate(self.$content, reset);

        if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
            self.instance.scaleToFit(150);
        } else if (newWidth > current.width || newHeight > current.height) {
            self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
        } else {
            newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);

            $.fancybox.animate(self.$content, newPos, 150);
        }
    };

    Guestures.prototype.onTap = function (e) {
        var self = this;
        var $target = $(e.target);

        var instance = self.instance;
        var current = instance.current;

        var endPoints = (e && getPointerXY(e)) || self.startPoints;

        var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
        var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;

        var where;

        var process = function (prefix) {
            var action = current.opts[prefix];

            if ($.isFunction(action)) {
                action = action.apply(instance, [current, e]);
            }

            if (!action) {
                return;
            }

            switch (action) {
                case "close":
                    instance.close(self.startEvent);

                    break;

                case "toggleControls":
                    instance.toggleControls();

                    break;

                case "next":
                    instance.next();

                    break;

                case "nextOrClose":
                    if (instance.group.length > 1) {
                        instance.next();
                    } else {
                        instance.close(self.startEvent);
                    }

                    break;

                case "zoom":
                    if (current.type == "image" && (current.isLoaded || current.$ghost)) {
                        if (instance.canPan()) {
                            instance.scaleToFit();
                        } else if (instance.isScaledDown()) {
                            instance.scaleToActual(tapX, tapY);
                        } else if (instance.group.length < 2) {
                            instance.close(self.startEvent);
                        }
                    }

                    break;
            }
        };

        // Ignore right click
        if (e.originalEvent && e.originalEvent.button == 2) {
            return;
        }

        // Skip if clicked on the scrollbar
        if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
            return;
        }

        // Check where is clicked
        if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
            where = "Outside";
        } else if ($target.is(".fancybox-slide")) {
            where = "Slide";
        } else if (
            instance.current.$content &&
            instance.current.$content
                .find($target)
                .addBack()
                .filter($target).length
        ) {
            where = "Content";
        } else {
            return;
        }

        // Check if this is a double tap
        if (self.tapped) {
            // Stop previously created single tap
            clearTimeout(self.tapped);
            self.tapped = null;

            // Skip if distance between taps is too big
            if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
                return this;
            }

            // OK, now we assume that this is a double-tap
            process("dblclick" + where);
        } else {
            // Single tap will be processed if user has not clicked second time within 300ms
            // or there is no need to wait for double-tap
            self.tapX = tapX;
            self.tapY = tapY;

            if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
                self.tapped = setTimeout(function () {
                    self.tapped = null;

                    if (!instance.isAnimating) {
                        process("click" + where);
                    }
                }, 500);
            } else {
                process("click" + where);
            }
        }

        return this;
    };

    $(document)
        .on("onActivate.fb", function (e, instance) {
            if (instance && !instance.Guestures) {
                instance.Guestures = new Guestures(instance);
            }
        })
        .on("beforeClose.fb", function (e, instance) {
            if (instance && instance.Guestures) {
                instance.Guestures.destroy();
            }
        });
})(window, document, jQuery);
// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
(function (document, $) {
    "use strict";

    $.extend(true, $.fancybox.defaults, {
        btnTpl: {
            slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' +
                "</button>"
        },
        slideShow: {
            autoStart: false,
            speed: 3000,
            progress: true
        }
    });

    var SlideShow = function (instance) {
        this.instance = instance;
        this.init();
    };

    $.extend(SlideShow.prototype, {
        timer: null,
        isActive: false,
        $button: null,

        init: function () {
            var self = this,
                instance = self.instance,
                opts = instance.group[instance.currIndex].opts.slideShow;

            self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                self.toggle();
            });

            if (instance.group.length < 2 || !opts) {
                self.$button.hide();
            } else if (opts.progress) {
                self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
            }
        },

        set: function (force) {
            var self = this,
                instance = self.instance,
                current = instance.current;

            // Check if reached last element
            if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
                if (self.isActive && current.contentType !== "video") {
                    if (self.$progress) {
                        $.fancybox.animate(self.$progress.show(), {
                            scaleX: 1
                        }, current.opts.slideShow.speed);
                    }

                    self.timer = setTimeout(function () {
                        if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
                            instance.jumpTo(0);
                        } else {
                            instance.next();
                        }
                    }, current.opts.slideShow.speed);
                }
            } else {
                self.stop();
                instance.idleSecondsCounter = 0;
                instance.showControls();
            }
        },

        clear: function () {
            var self = this;

            clearTimeout(self.timer);

            self.timer = null;

            if (self.$progress) {
                self.$progress.removeAttr("style").hide();
            }
        },

        start: function () {
            var self = this,
                current = self.instance.current;

            if (current) {
                self.$button
                    .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP)
                    .removeClass("fancybox-button--play")
                    .addClass("fancybox-button--pause");

                self.isActive = true;

                if (current.isComplete) {
                    self.set(true);
                }

                self.instance.trigger("onSlideShowChange", true);
            }
        },

        stop: function () {
            var self = this,
                current = self.instance.current;

            self.clear();

            self.$button
                .attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START)
                .removeClass("fancybox-button--pause")
                .addClass("fancybox-button--play");

            self.isActive = false;

            self.instance.trigger("onSlideShowChange", false);

            if (self.$progress) {
                self.$progress.removeAttr("style").hide();
            }
        },

        toggle: function () {
            var self = this;

            if (self.isActive) {
                self.stop();
            } else {
                self.start();
            }
        }
    });

    $(document).on({
        "onInit.fb": function (e, instance) {
            if (instance && !instance.SlideShow) {
                instance.SlideShow = new SlideShow(instance);
            }
        },

        "beforeShow.fb": function (e, instance, current, firstRun) {
            var SlideShow = instance && instance.SlideShow;

            if (firstRun) {
                if (SlideShow && current.opts.slideShow.autoStart) {
                    SlideShow.start();
                }
            } else if (SlideShow && SlideShow.isActive) {
                SlideShow.clear();
            }
        },

        "afterShow.fb": function (e, instance, current) {
            var SlideShow = instance && instance.SlideShow;

            if (SlideShow && SlideShow.isActive) {
                SlideShow.set();
            }
        },

        "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
            var SlideShow = instance && instance.SlideShow;

            // "P" or Spacebar
            if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
                keypress.preventDefault();

                SlideShow.toggle();
            }
        },

        "beforeClose.fb onDeactivate.fb": function (e, instance) {
            var SlideShow = instance && instance.SlideShow;

            if (SlideShow) {
                SlideShow.stop();
            }
        }
    });

    // Page Visibility API to pause slideshow when window is not active
    $(document).on("visibilitychange", function () {
        var instance = $.fancybox.getInstance(),
            SlideShow = instance && instance.SlideShow;

        if (SlideShow && SlideShow.isActive) {
            if (document.hidden) {
                SlideShow.clear();
            } else {
                SlideShow.set();
            }
        }
    });
})(document, jQuery);
// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
(function (document, $) {
    "use strict";

    // Collection of methods supported by user browser
    var fn = (function () {
        var fnMap = [
            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
            // new WebKit
            [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            // old WebKit (Safari 5.1)
            [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror"
            ],
            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
        ];

        var ret = {};

        for (var i = 0; i < fnMap.length; i++) {
            var val = fnMap[i];

            if (val && val[1] in document) {
                for (var j = 0; j < val.length; j++) {
                    ret[fnMap[0][j]] = val[j];
                }

                return ret;
            }
        }

        return false;
    })();

    if (fn) {
        var FullScreen = {
            request: function (elem) {
                elem = elem || document.documentElement;

                elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
            },
            exit: function () {
                document[fn.exitFullscreen]();
            },
            toggle: function (elem) {
                elem = elem || document.documentElement;

                if (this.isFullscreen()) {
                    this.exit();
                } else {
                    this.request(elem);
                }
            },
            isFullscreen: function () {
                return Boolean(document[fn.fullscreenElement]);
            },
            enabled: function () {
                return Boolean(document[fn.fullscreenEnabled]);
            }
        };

        $.extend(true, $.fancybox.defaults, {
            btnTpl: {
                fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' +
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' +
                    "</button>"
            },
            fullScreen: {
                autoStart: false
            }
        });

        $(document).on(fn.fullscreenchange, function () {
            var isFullscreen = FullScreen.isFullscreen(),
                instance = $.fancybox.getInstance();

            if (instance) {
                // If image is zooming, then force to stop and reposition properly
                if (instance.current && instance.current.type === "image" && instance.isAnimating) {
                    instance.isAnimating = false;

                    instance.update(true, true, 0);

                    if (!instance.isComplete) {
                        instance.complete();
                    }
                }

                instance.trigger("onFullscreenChange", isFullscreen);

                instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);

                instance.$refs.toolbar
                    .find("[data-fancybox-fullscreen]")
                    .toggleClass("fancybox-button--fsenter", !isFullscreen)
                    .toggleClass("fancybox-button--fsexit", isFullscreen);
            }
        });
    }

    $(document).on({
        "onInit.fb": function (e, instance) {
            var $container;

            if (!fn) {
                instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();

                return;
            }

            if (instance && instance.group[instance.currIndex].opts.fullScreen) {
                $container = instance.$refs.container;

                $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
                    e.stopPropagation();
                    e.preventDefault();

                    FullScreen.toggle();
                });

                if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
                    FullScreen.request();
                }

                // Expose API
                instance.FullScreen = FullScreen;
            } else if (instance) {
                instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
            }
        },

        "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
            // "F"
            if (instance && instance.FullScreen && keycode === 70) {
                keypress.preventDefault();

                instance.FullScreen.toggle();
            }
        },

        "beforeClose.fb": function (e, instance) {
            if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
                FullScreen.exit();
            }
        }
    });
})(document, jQuery);
// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
(function (document, $) {
    "use strict";

    var CLASS = "fancybox-thumbs",
        CLASS_ACTIVE = CLASS + "-active";

    // Make sure there are default values
    $.fancybox.defaults = $.extend(
        true, {
            btnTpl: {
                thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' +
                    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' +
                    "</button>"
            },
            thumbs: {
                autoStart: false, // Display thumbnails on opening
                hideOnClose: true, // Hide thumbnail grid when closing animation starts
                parentEl: ".fancybox-container", // Container is injected into this element
                axis: "y" // Vertical (y) or horizontal (x) scrolling
            }
        },
        $.fancybox.defaults
    );

    var FancyThumbs = function (instance) {
        this.init(instance);
    };

    $.extend(FancyThumbs.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: false,
        isActive: false,

        init: function (instance) {
            var self = this,
                group = instance.group,
                enabled = 0;

            self.instance = instance;
            self.opts = group[instance.currIndex].opts.thumbs;

            instance.Thumbs = self;

            self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");

            // Enable thumbs if at least two group items have thumbnails
            for (var i = 0, len = group.length; i < len; i++) {
                if (group[i].thumb) {
                    enabled++;
                }

                if (enabled > 1) {
                    break;
                }
            }

            if (enabled > 1 && !!self.opts) {
                self.$button.removeAttr("style").on("click", function () {
                    self.toggle();
                });

                self.isActive = true;
            } else {
                self.$button.hide();
            }
        },

        create: function () {
            var self = this,
                instance = self.instance,
                parentEl = self.opts.parentEl,
                list = [],
                src;

            if (!self.$grid) {
                // Create main element
                self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(
                    instance.$refs.container
                        .find(parentEl)
                        .addBack()
                        .filter(parentEl)
                );

                // Add "click" event that performs gallery navigation
                self.$grid.on("click", "a", function () {
                    instance.jumpTo($(this).attr("data-index"));
                });
            }

            // Build the list
            if (!self.$list) {
                self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
            }

            $.each(instance.group, function (i, item) {
                src = item.thumb;

                if (!src && item.type === "image") {
                    src = item.src;
                }

                list.push(
                    '<a href="javascript:;" tabindex="0" data-index="' +
                    i +
                    '"' +
                    (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') +
                    "></a>"
                );
            });

            self.$list[0].innerHTML = list.join("");

            if (self.opts.axis === "x") {
                // Set fixed width for list element to enable horizontal scrolling
                self.$list.width(
                    parseInt(self.$grid.css("padding-right"), 10) +
                    instance.group.length *
                    self.$list
                        .children()
                        .eq(0)
                        .outerWidth(true)
                );
            }
        },

        focus: function (duration) {
            var self = this,
                $list = self.$list,
                $grid = self.$grid,
                thumb,
                thumbPos;

            if (!self.instance.current) {
                return;
            }

            thumb = $list
                .children()
                .removeClass(CLASS_ACTIVE)
                .filter('[data-index="' + self.instance.current.index + '"]')
                .addClass(CLASS_ACTIVE);

            thumbPos = thumb.position();

            // Check if need to scroll to make current thumb visible
            if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
                $list.stop().animate({
                        scrollTop: $list.scrollTop() + thumbPos.top
                    },
                    duration
                );
            } else if (
                self.opts.axis === "x" &&
                (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))
            ) {
                $list
                    .parent()
                    .stop()
                    .animate({
                            scrollLeft: thumbPos.left
                        },
                        duration
                    );
            }
        },

        update: function () {
            var that = this;
            that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);

            if (that.isVisible) {
                if (!that.$grid) {
                    that.create();
                }

                that.instance.trigger("onThumbsShow");

                that.focus(0);
            } else if (that.$grid) {
                that.instance.trigger("onThumbsHide");
            }

            // Update content position
            that.instance.update();
        },

        hide: function () {
            this.isVisible = false;
            this.update();
        },

        show: function () {
            this.isVisible = true;
            this.update();
        },

        toggle: function () {
            this.isVisible = !this.isVisible;
            this.update();
        }
    });

    $(document).on({
        "onInit.fb": function (e, instance) {
            var Thumbs;

            if (instance && !instance.Thumbs) {
                Thumbs = new FancyThumbs(instance);

                if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
                    Thumbs.show();
                }
            }
        },

        "beforeShow.fb": function (e, instance, item, firstRun) {
            var Thumbs = instance && instance.Thumbs;

            if (Thumbs && Thumbs.isVisible) {
                Thumbs.focus(firstRun ? 0 : 250);
            }
        },

        "afterKeydown.fb": function (e, instance, current, keypress, keycode) {
            var Thumbs = instance && instance.Thumbs;

            // "G"
            if (Thumbs && Thumbs.isActive && keycode === 71) {
                keypress.preventDefault();

                Thumbs.toggle();
            }
        },

        "beforeClose.fb": function (e, instance) {
            var Thumbs = instance && instance.Thumbs;

            if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
                Thumbs.$grid.hide();
            }
        }
    });
})(document, jQuery);
//// ==========================================================================
//
// Share
// Displays simple form for sharing current url
//
// ==========================================================================
(function (document, $) {
    "use strict";

    $.extend(true, $.fancybox.defaults, {
        btnTpl: {
            share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' +
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' +
                "</button>"
        },
        share: {
            url: function (instance, item) {
                return (
                    (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location
                );
            },
            tpl: '<div class="fancybox-share">' +
                "<h1>{{SHARE}}</h1>" +
                "<p>" +
                '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' +
                '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' +
                "<span>Facebook</span>" +
                "</a>" +
                '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' +
                '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' +
                "<span>Twitter</span>" +
                "</a>" +
                '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' +
                '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' +
                "<span>Pinterest</span>" +
                "</a>" +
                "</p>" +
                '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' +
                "</div>"
        }
    });

    function escapeHtml(string) {
        var entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        };

        return String(string).replace(/[&<>"'`=\/]/g, function (s) {
            return entityMap[s];
        });
    }

    $(document).on("click", "[data-fancybox-share]", function () {
        var instance = $.fancybox.getInstance(),
            current = instance.current || null,
            url,
            tpl;

        if (!current) {
            return;
        }

        if ($.type(current.opts.share.url) === "function") {
            url = current.opts.share.url.apply(current, [instance, current]);
        }

        tpl = current.opts.share.tpl
            .replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "")
            .replace(/\{\{url\}\}/g, encodeURIComponent(url))
            .replace(/\{\{url_raw\}\}/g, escapeHtml(url))
            .replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");

        $.fancybox.open({
            src: instance.translate(instance, tpl),
            type: "html",
            opts: {
                touch: false,
                animationEffect: false,
                afterLoad: function (shareInstance, shareCurrent) {
                    // Close self if parent instance is closing
                    instance.$refs.container.one("beforeClose.fb", function () {
                        shareInstance.close(null, 0);
                    });

                    // Opening links in a popup window
                    shareCurrent.$content.find(".fancybox-share__button").click(function () {
                        window.open(this.href, "Share", "width=550, height=450");
                        return false;
                    });
                },
                mobile: {
                    autoFocus: false
                }
            }
        });
    });
})(document, jQuery);
// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
(function (window, document, $) {
    "use strict";

    // Simple $.escapeSelector polyfill (for jQuery prior v3)
    if (!$.escapeSelector) {
        $.escapeSelector = function (sel) {
            var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
            var fcssescape = function (ch, asCodePoint) {
                if (asCodePoint) {
                    // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                    if (ch === "\0") {
                        return "\uFFFD";
                    }

                    // Control characters and (dependent upon position) numbers get escaped as code points
                    return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                }

                // Other potentially-special ASCII characters get backslash-escaped
                return "\\" + ch;
            };

            return (sel + "").replace(rcssescape, fcssescape);
        };
    }

    // Get info about gallery name and current index from url
    function parseUrl() {
        var hash = window.location.hash.substr(1),
            rez = hash.split("-"),
            index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
            gallery = rez.join("-");

        return {
            hash: hash,
            /* Index is starting from 1 */
            index: index < 1 ? 1 : index,
            gallery: gallery
        };
    }

    // Trigger click evnt on links to open new fancyBox instance
    function triggerFromUrl(url) {
        if (url.gallery !== "") {
            // If we can find element matching 'data-fancybox' atribute,
            // then triggering click event should start fancyBox
            $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']")
                .eq(url.index - 1)
                .focus()
                .trigger("click.fb-start");
        }
    }

    // Get gallery name from current instance
    function getGalleryID(instance) {
        var opts, ret;

        if (!instance) {
            return false;
        }

        opts = instance.current ? instance.current.opts : instance.opts;
        ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");

        return ret === "" ? false : ret;
    }

    // Start when DOM becomes ready
    $(function () {
        // Check if user has disabled this module
        if ($.fancybox.defaults.hash === false) {
            return;
        }

        // Update hash when opening/closing fancyBox
        $(document).on({
            "onInit.fb": function (e, instance) {
                var url, gallery;

                if (instance.group[instance.currIndex].opts.hash === false) {
                    return;
                }

                url = parseUrl();
                gallery = getGalleryID(instance);

                // Make sure gallery start index matches index from hash
                if (gallery && url.gallery && gallery == url.gallery) {
                    instance.currIndex = url.index - 1;
                }
            },

            "beforeShow.fb": function (e, instance, current, firstRun) {
                var gallery;

                if (!current || current.opts.hash === false) {
                    return;
                }

                // Check if need to update window hash
                gallery = getGalleryID(instance);

                if (!gallery) {
                    return;
                }

                // Variable containing last hash value set by fancyBox
                // It will be used to determine if fancyBox needs to close after hash change is detected
                instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");

                // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
                if (window.location.hash === "#" + instance.currentHash) {
                    return;
                }

                if (firstRun && !instance.origHash) {
                    instance.origHash = window.location.hash;
                }

                if (instance.hashTimer) {
                    clearTimeout(instance.hashTimer);
                }

                // Update hash
                instance.hashTimer = setTimeout(function () {
                    if ("replaceState" in window.history) {
                        window.history[firstRun ? "pushState" : "replaceState"]({},
                            document.title,
                            window.location.pathname + window.location.search + "#" + instance.currentHash
                        );

                        if (firstRun) {
                            instance.hasCreatedHistory = true;
                        }
                    } else {
                        window.location.hash = instance.currentHash;
                    }

                    instance.hashTimer = null;
                }, 300);
            },

            "beforeClose.fb": function (e, instance, current) {
                if (!current || current.opts.hash === false) {
                    return;
                }

                clearTimeout(instance.hashTimer);

                // Goto previous history entry
                if (instance.currentHash && instance.hasCreatedHistory) {
                    window.history.back();
                } else if (instance.currentHash) {
                    if ("replaceState" in window.history) {
                        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
                    } else {
                        window.location.hash = instance.origHash;
                    }
                }

                instance.currentHash = null;
            }
        });

        // Check if need to start/close after url has changed
        $(window).on("hashchange.fb", function () {
            var url = parseUrl(),
                fb = null;

            // Find last fancyBox instance that has "hash"
            $.each(
                $(".fancybox-container")
                    .get()
                    .reverse(),
                function (index, value) {
                    var tmp = $(value).data("FancyBox");

                    if (tmp && tmp.currentHash) {
                        fb = tmp;
                        return false;
                    }
                }
            );

            if (fb) {
                // Now, compare hash values
                if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
                    fb.currentHash = null;

                    fb.close();
                }
            } else if (url.gallery !== "") {
                triggerFromUrl(url);
            }
        });

        // Check current hash and trigger click event on matching element to start fancyBox, if needed
        setTimeout(function () {
            if (!$.fancybox.getInstance()) {
                triggerFromUrl(parseUrl());
            }
        }, 50);
    });
})(window, document, jQuery);
// ==========================================================================
//
// Wheel
// Basic mouse weheel support for gallery navigation
//
// ==========================================================================
(function (document, $) {
    "use strict";

    var prevTime = new Date().getTime();

    $(document).on({
        "onInit.fb": function (e, instance, current) {
            instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
                var current = instance.current,
                    currTime = new Date().getTime();

                if (instance.group.length < 2 || current.opts.wheel === false || (current.opts.wheel === "auto" && current.type !== "image")) {
                    return;
                }

                e.preventDefault();
                e.stopPropagation();

                if (current.$slide.hasClass("fancybox-animated")) {
                    return;
                }

                e = e.originalEvent || e;

                if (currTime - prevTime < 250) {
                    return;
                }

                prevTime = currTime;

                instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
            });
        }
    });
})(document, jQuery);

/// <reference path='lib/aos.js' />
/// <reference path='lib/TweenMax.js' />
/// <reference path='lib/wavify.js' />
/// <reference path='lib/jarallax.js' />
/// <reference path='lib/jarallax-element.js' />
/// <reference path='lib/vanilla-tilt.babel.js' />
/// <reference path='lib/slick.js' />
/// <reference path='lib/jquery.countTo.js' />
/// <reference path='lib/isotope.pkgd.js' />
/// <reference path='lib/jquery.fancybox.js' />

(function ($) {

    /*-- Strict mode enabled --*/
    'use strict';

    /*-- Global variables --*/
    var nHtmlNode = document.documentElement,
        nBodyNode = document.body || document.getElementsByTagName('body')[0],
        nAppNode = document.getElementById('app'),
        nHeader = document.getElementById('top-bar'),
        nHero = document.getElementById('start-screen') || document.getElementById('hero'),

        jWindow = $(window),
        jBodyNode = $(nBodyNode),
        jAppNode = $(nAppNode),
        jHeader = $(nHeader),
        jHero = $(nHero),

        iHeaderHeight = 0,
        bNavAnchor = jHeader.data('nav-anchor') === true ? true : false,
        bMenuOpen = false,

        animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',

        rAF = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (callback) {
                setTimeout(callback, 1000 / 60);
            };

    var scrollBarWidth = parseInt(window.innerWidth - nHtmlNode.clientWidth);

    function _showScroll() {
        nHtmlNode.style.overflow = '';
        nHeader.style.right = '';
    }

    function _hideScroll() {
        nHtmlNode.style.overflow = 'hidden';
        nHeader.style.right = scrollBarWidth + 'px';
    }

    /* scroll animate
    ================================================== */
    AOS.init({
        offset: 120,
        delay: 100,
        duration: 450, // or 200, 250, 300, 350.....
        easing: 'ease-in-out-quad',
        once: true,
        disable: 'mobile'
    });

    /* header
    ================================================== */
    function _header() {
        var nMenu = document.getElementById('top-bar__navigation'),
            nMenuToggler = document.getElementById('top-bar__navigation-toggler'),

            jMenu = $(nMenu),
            jMenuToggler = $(nMenuToggler),

            jMenuLink = jMenu.find('li a'),
            jSubmenu = jMenu.find('.submenu'),
            bHeaderSticky = false,
            updatePosition = function () {
                var iTop = jHero.innerHeight() - iHeaderHeight;

                if ((window.pageYOffset || document.documentElement.scrollTop) >= iTop) {
                    if (!bHeaderSticky) {
                        jHeader
                            .off(animationEnd)
                            .addClass('is-sticky in')
                            .one(animationEnd, function (e) {
                                jHeader.removeClass('in');
                            });

                        bHeaderSticky = !bHeaderSticky;
                    }
                } else if (bHeaderSticky) {
                    jHeader
                        .addClass('out')
                        .off(animationEnd)
                        .one(animationEnd, function (e) {
                            jHeader.removeClass('is-sticky out');
                        });

                    bHeaderSticky = !bHeaderSticky;
                }
            },
            hideMobileMenu = function () {
                if (window.innerWidth > 1199 && bMenuOpen) {

                    jHeader.removeClass('is-expanded');
                    jMenuToggler.removeClass('is-active');
                    jSubmenu.removeAttr('style');
                    nHtmlNode.style.overflow = '';
                    bMenuOpen = false;
                }
            };

        iHeaderHeight = jMenuToggler.is(':visible') ? 65 : 90;

        if (bNavAnchor) {
            jBodyNode.scrollspy({
                target: nHeader,
                offset: iHeaderHeight + 1
            });
        }
        if (jSubmenu.length > 0) {
            jSubmenu.parent('li').addClass('has-submenu');
        }
        jMenuToggler.on('touchend click', function (e) {
            e.preventDefault();

            var $this = $(this);

            if (bMenuOpen) {
                $this.removeClass('is-active');
                jHeader.removeClass('is-expanded');
                nHtmlNode.style.overflow = '';
                bMenuOpen = !bMenuOpen;
            } else {
                $this.addClass('is-active');
                jHeader.addClass('is-expanded');
                nHtmlNode.style.overflow = 'hidden';
                bMenuOpen = !bMenuOpen;
            }
            return false;
        });

        jMenuLink.on('click', function (e) {

            var $this = $(this),
                $parent = $this.parent(),
                bHasSubmenu = $this.next(jSubmenu).length ? true : false;

            if (bMenuOpen && bHasSubmenu) {
                if ($this.next().is(':visible')) {
                    $parent.removeClass('drop_active');
                    $this.next().slideUp('fast');

                } else {

                    $this.closest('ul').find('li').removeClass('drop_active');
                    $this.closest('ul').find('.submenu').slideUp('fast');
                    $parent.addClass('drop_active');
                    $this.next().slideDown('fast');
                }
                return false;
            }
        });

        jWindow
            .on('scroll', throttle(updatePosition, 100)).scroll()
            .on('resize', debounce(hideMobileMenu, 100));
    }

    /* choose lang
    ================================================== */
    function _chooseLang() {
        var chooseLang = $('.js-choose-lang');

        if (chooseLang.length > 0) {
            var currLang = chooseLang.children('.current-lang'),
                currFlag = currLang.find('img'),
                currName = currLang.find('span'),

                langList = chooseLang.children('.list-wrap'),
                listItem = langList.find('li');

            currLang.on('click', function (e) {
                var $this = $(this),
                    img = $this.find('img');

                chooseLang.addClass('is-active');

                langList.slideToggle();
            });

            // Removed because the animation collides with the lang folder change.

            // listItem.on('click', function (e) {
            //     var $this = $(this),
            //         name = $this.attr('data-short-name'),
            //         flag = $this.attr('data-img');
            //     listItem.removeClass('is-active');
            //     $this.addClass('is-active');
            //
            //     currFlag.attr('src', flag);
            //     currName.text(name);
            //
            //     langList.delay(300).slideUp(function () {
            //         chooseLang.removeClass('is-active')
            //     });
            //
            //     return false;
            // })
        }
    }

    /* side menu toggle
    ================================================== */
    function _sideMenuToggle() {
        var isVisible = false,
            isActive = false,
            nSideMenu = document.getElementById('side-menu'),

            jSideMenu = $(nSideMenu),
            jBtnOpen = $('.js-side-menu-open'),
            jBtnClose = $('.js-side-menu-close');

        jBtnOpen.on('touchend click', function () {

            if (!isVisible) {
                // first click
                jSideMenu.removeClass('d-none').delay(100).queue(function () {
                    $(this).addClass('is-active').dequeue();
                });
            } else {
                jSideMenu.addClass('is-active');
            }

            isVisible = true;
            isActive = true;

            return false;
        });

        jBtnClose.on('touchend click', function () {

            jSideMenu.removeClass('is-active');

            isActive = false;

            return false;
        });

        jWindow.on('scroll', throttle(function () {

            if (isActive) {
                jSideMenu.removeClass('is-active');

                isActive = false;
            }
        }, 500));
    }

    /* tilt
    ================================================== */
    function _tilt() {
        if ('function' !== typeof VanillaTilt) return console.error("Error: VanillaTilt is not a function. Be sure to include 'vanilla-tilt.js'");

        var nTilt = document.querySelectorAll(".js-tilt");

        if (device.desktop() && nTilt.length > 0) {
            VanillaTilt.init(nTilt);
        }
    }

    /* parallax
    ================================================== */
    function _parallax() {
        if ('function' !== typeof jarallax) return console.error("Error: jarallax is not a function. Be sure to include 'jarallax.js'");

        var nJarallax = document.querySelectorAll('.jarallax');

        if (device.desktop() && nJarallax.length > 0) {
            jarallax(nJarallax, {
                type: 'scroll', // scroll, scale, opacity, scroll-opacity, scale-opacity
                zIndex: -20
            });
        }
    }

    /* isotope sorting
    ================================================== */
    function _isotopeSorting() {
        var jOptionSets = $('.js-isotope-sort');

        if (jOptionSets.length > 0) {
            jOptionSets.each(function (i, optionSet) {
                var $this = $(optionSet),
                    jOptionLinks = $this.find('a'),
                    jIsoContainer = $this.siblings('.js-isotope');

                jOptionLinks.on('click', function (e) {
                    var currentLink = $(this),
                        currentOption = currentLink.data('cat');

                    $this.find('.selected').removeClass('selected');
                    currentLink.addClass('selected');

                    if (currentOption !== '*') {
                        currentOption = '.' + currentOption;
                    }

                    jIsoContainer.isotope({filter: currentOption});

                    return false;
                });
            });
        }
    }

    /* slick slider
    ================================================== */
    function _slickSlider() {
        if (!$.fn.slick) return console.error("Error: slick is not a function. Be sure to include 'slick.js'");

        var jSlider = $('.js-slick');

        if (jSlider.length > 0) {
            jSlider.each(function (i, slider) {
                var $this = $(slider);

                $this.on('init', function (event, slick) {

                }).slick({
                    autoplay: true,
                    autoplaySpeed: 3000,
                    adaptiveHeight: true,
                    dots: true,
                    arrows: false,
                    speed: 800,
                    mobileFirst: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    touchThreshold: 15,
                    prevArrow: '<i class="fontello-angle-left slick-prev"></i>',
                    nextArrow: '<i class="fontello-angle-right slick-next"></i>'
                });
            });
        }
    }

    /* lightbox
    ================================================== */
    function _fancybox() {
        if (!$.fn.fancybox) return console.error("Error: fancybox is not a function. Be sure to include 'fancybox.js'");

        var galleryElement = $("a[data-fancybox]");

        if (galleryElement.length > 0) {
            $("[data-fancybox]").fancybox({
                parentEl: nAppNode,
                buttons: [
                    'slideShow',
                    'fullScreen',
                    'thumbs',
                    'close'
                ],
                loop: true,
                protect: true,
                wheel: false,
                transitionEffect: "tube",
                onInit: function (instance, slide, e) {

                    _hideScroll();
                },
                afterClose: function (instance, slide, e) {

                    _showScroll();
                }
            });
        }
    }

    /* accordion
    ================================================== */
    function _accordion() {
        var oAccordion = $('.accordion-container');

        if (oAccordion.length > 0) {

            var oAccItem = oAccordion.find('.accordion-item'),
                oAccTrigger = oAccordion.find('.accordion-toggler');

            oAccordion.each(function (i, accordion) {
                $(accordion).find('.accordion-item:eq(0)').addClass('active');
            });

            oAccTrigger.on('click', function (j) {
                j.preventDefault();

                var $this = $(this),
                    parent = $this.parent(),
                    dropDown = $this.next('article');

                parent.toggleClass('active').siblings(oAccItem).removeClass('active').find('article').not(dropDown).slideUp();

                dropDown.stop(false, true).slideToggle();

                return false;
            });
        }
    }

    /* tabs
    ================================================== */
    function _tabs() {
        var oTab = $('.tab-container');

        if (oTab.length > 0) {

            var oTabTrigger = oTab.find('.tab-nav__item');

            oTab.each(function (i, tab) {

                $(tab)
                    .find('.tab-nav__item:eq(0)').addClass('active').end()
                    .find('.tab-content__item:eq(0)').addClass('is-visible');
            });

            oTabTrigger.on('click', function (g) {
                g.preventDefault();

                var $this = $(this),
                    index = $this.index(),
                    parent = $this.closest('.tab-container');

                $this.addClass('active').siblings(oTabTrigger).removeClass('active');

                parent
                    .find('.tab-content__item.is-visible').removeClass('is-visible').end()
                    .find('.tab-content__item:eq(' + index + ')').addClass('is-visible');

                return false;
            });
        }
    }

    /* counters
    ================================================== */
    function _counters() {
        var jCounter = $('.js-count');

        function _countInit() {
            jCounter.each(function (i, counter) {
                var $this = $(counter);

                if ($this.is_on_screen() && !$this.hasClass('animate')) {
                    $this
                        .addClass('animate')
                        .countTo({
                            from: 0,
                            speed: 2000,
                            refreshInterval: 100
                        });
                }
            });
        }

        if (jCounter.length > 0) {
            _countInit();

            jWindow.on('scroll', throttle(function (e) {

                // _countInit();

                if (rAF) {
                    rAF(function () {
                        _countInit();
                    });
                } else {
                    _countInit();
                }

            }, 400));
        }
    }

    /* google map
    ================================================== */
    function _g_map() {
        var maps = $('.g_map');

        if (maps.length > 0) {
            var apiKey = maps.attr('data-api-key'),
                apiURL;

            if (apiKey) {
                apiURL = 'http://maps.google.com/maps/api/js?key=' + apiKey + ' &sensor=false';
            } else {
                apiURL = 'http://maps.google.com/maps/api/js?sensor=false';
            }

            $.getScript(apiURL, function (data, textStatus, jqxhr) {

                maps.each(function () {
                    var current_map = $(this),
                        latlng = new google.maps.LatLng(current_map.attr('data-longitude'), current_map.attr('data-latitude')),
                        point = current_map.attr('data-marker'),

                        myOptions = {
                            zoom: 14,
                            center: latlng,
                            mapTypeId: google.maps.MapTypeId.ROADMAP,
                            mapTypeControl: false,
                            scrollwheel: false,
                            draggable: true,
                            panControl: false,
                            zoomControl: false,
                            disableDefaultUI: true
                        },

                        stylez = [
                            {
                                featureType: "all",
                                elementType: "all",
                                stylers: [
                                    {saturation: -100} // <-- THIS
                                ]
                            }
                        ];

                    var map = new google.maps.Map(current_map[0], myOptions);

                    var mapType = new google.maps.StyledMapType(stylez, {name: "Grayscale"});
                    map.mapTypes.set('Grayscale', mapType);
                    map.setMapTypeId('Grayscale');

                    var marker = new google.maps.Marker({
                        map: map,
                        icon: {
                            size: new google.maps.Size(59, 69),
                            origin: new google.maps.Point(0, 0),
                            anchor: new google.maps.Point(0, 69),
                            url: point
                        },
                        position: latlng
                    });

                    google.maps.event.addDomListener(window, "resize", function () {
                        var center = map.getCenter();
                        google.maps.event.trigger(map, "resize");
                        map.setCenter(center);
                    });
                });
            });
        }
    }

    /* scrollTo
    ================================================== */
    function _scrollTo() {
        var jLink = $('a[href*="#"]').not('[href="#"]').not('[href="#0"]'),
            nMenuToggler = document.getElementById('top-bar__navigation-toggler'),
            jMenuToggler = $(nMenuToggler);

        jLink.on('touchend click', function (e) {

            var $this = $(this).blur();

            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);

                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                if (target.length) {
                    $('html,body').stop().animate({
                        scrollTop: target.offset().top - iHeaderHeight
                    }, 1000);
                }
                if (bNavAnchor && bMenuOpen) {
                    jMenuToggler.click();
                }
                return false;
            }
        });
    }

    /* scroll to top
    ================================================== */
    function _scrollTop() {
        var nBtnToTopWrap = document.getElementById('btn-to-top-wrap'),
            jBtnToTopWrap = $(nBtnToTopWrap);

        if (jBtnToTopWrap.length > 0) {
            var nBtnToTop = document.getElementById('btn-to-top'),
                jBtnToTop = $(nBtnToTop),
                iOffset = jBtnToTop.data('visible-offset');

            jBtnToTop.on('click', function (e) {
                e.preventDefault();

                $('body,html').stop().animate({scrollTop: 0}, 1500);

                return false;
            });

            jWindow.on('scroll', throttle(function (e) {

                if (jWindow.scrollTop() > iOffset) {
                    if (jBtnToTopWrap.is(":hidden")) {
                        jBtnToTopWrap.fadeIn();
                    }
                } else {
                    if (jBtnToTopWrap.is(":visible")) {
                        jBtnToTopWrap.fadeOut();
                    }
                }
            }, 400)).scroll();
        }
    }

    /* wavify
    ================================================== */
    function _wavify() {
        if ('function' !== typeof wavify) return console.error("Error: wavify is not a function. Be sure to include 'wavify.js'");

        var nWave = document.querySelectorAll('.js-wave');

        if (device.desktop() && nWave.length > 0) {
            var defaultOptions = {
                // Height of wave
                height: 100,
                // Amplitude of wave
                amplitude: 90,
                // Animation speed
                speed: 0.15,
                // Total number of articulation in wave
                bones: 3,
                // Color
                color: "rgba(255,255,255, 1)"
            };

            [].forEach.call(nWave, function (wave, index, arr) {
                var element = wave.getElementsByTagName('path'),
                    oData = wave.getAttribute('data-wave') || {},
                    myWave;

                if (oData.length) {
                    var dataOptions = JSON.parse(oData);

                    wave.options = Object.assign({}, defaultOptions, dataOptions);
                } else {
                    wave.options = Object.assign({}, defaultOptions);
                }
                myWave = wavify(element, wave.options);
            });
        }
    }

    $(document).ready(function () {

        /* header
        ================================================== */
        _header();

        /* choose lang
        ================================================== */
        _chooseLang();

        /* side menu toggle
        ================================================== */
        _sideMenuToggle();

        /* tilt
        ================================================== */
        _tilt();

        /* parallax
        ================================================== */
        _parallax();

        /* isotope sorting
        ================================================== */
        _isotopeSorting();

        /* slick slider
        ================================================== */
        _slickSlider();

        /* lightbox
        ================================================== */
        _fancybox();

        /* accordion
        ================================================== */
        _accordion();

        /* tabs
        ================================================== */
        _tabs();

        /* counters
        ================================================== */
        _counters();

        /* scroll to top
        ================================================== */
        _scrollTop();
    });

    jWindow.on('load', function () {

        var jMasonry = $('.js-masonry');

        if (jMasonry.length > 0 && $.fn.isotope) {
            jMasonry.masonry('layout');
        }
        /* scrollTo
        ================================================== */
        _scrollTo();

        /* wavify
        ================================================== */
        _wavify();

        /* google map
        ================================================== */
        _g_map();
    });

    $.fn.is_on_screen = function () {
        var viewport = {
            top: jWindow.scrollTop(),
            left: jWindow.scrollLeft()
        };
        viewport.right = viewport.left + jWindow.width();
        viewport.bottom = viewport.top + jWindow.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left ||
            viewport.left > bounds.right ||
            viewport.bottom < bounds.top ||
            viewport.top > bounds.bottom
        ));
    };

    // Create a safe reference to the Underscore object for use below.
    function now() {
        return new Date().getTime();
    }

    function throttle(func, wait, options) {
        var timeout, context, args, result;
        var previous = 0;

        if (!options) options = {};

        var later = function later() {
            previous = options.leading === false ? 0 : now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };

        var throttled = function throttled() {
            var at = now();
            if (!previous && options.leading === false) previous = at;
            var remaining = wait - (at - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = at;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };

        throttled.cancel = function () {
            clearTimeout(timeout);
            previous = 0;
            timeout = context = args = null;
        };

        return throttled;
    }

    //  Pure js debounce function to optimize resize method
    function debounce(func, wait, immediate) {
        var timeout;

        return function () {
            var context = this,
                args = arguments;

            clearTimeout(timeout);

            timeout = setTimeout(function () {
                timeout = null;

                if (!immediate) func.apply(context, args);
            }, wait);

            if (immediate && !timeout) func.apply(context, args);
        };
    }
}(jQuery));
