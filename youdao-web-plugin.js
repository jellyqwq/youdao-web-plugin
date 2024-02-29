// ==UserScript==
// @name         youdao-web-plugin
// @namespace    https://github.com/jellyqwq
// @downloadURL  https://raw.githubusercontent.com/jellyqwq/youdao-web-plugin/main/youdao-web-plugin.js
// @updateURL    https://raw.githubusercontent.com/jellyqwq/youdao-web-plugin/main/youdao-web-plugin.js
// @version      0.2.1
// @description  Easy to use
// @author       jellyqwq
// @match        https://*.youdao.com/**/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youdao.com
// @grant        GM_addElement
// @require      https://raw.githubusercontent.com/jellyqwq/youdao-web-plugin/main/youdao-web-plugin.src.js#sha256=35303331323130333544373636423435454244373530413236353941354646314530343046453241384530444634383844323533423943463545314135323446


// ==/UserScript==

(function() {
    'use strict';
    GM_addElement('script', {
        src: "https://raw.githubusercontent.com/jellyqwq/youdao-web-plugin/main/youdao-web-plugin.src.js",
        type: 'text/javascript'
    })
})