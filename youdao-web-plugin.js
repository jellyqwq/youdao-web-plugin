// ==UserScript==
// @name         youdao-web-plugin
// @namespace    https://github.com/jellyqwq/youdao-web-plugin
// @downloadURL  https://raw.githubusercontent.com/jellyqwq/youdao-web-plugin/main/youdao-web-plugin.js
// @updateURL    https://raw.githubusercontent.com/jellyqwq/youdao-web-plugin/main/youdao-web-plugin.js
// @version      1.1
// @description  More useful keyboard shortcuts to search words and automatically play audio. You just need to press the Enter key to use it effortlessly.
// @author       jellyqwq
// @match        https://www.youdao.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youdao.com
// @grant        none

// ==/UserScript==
const wait = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
function clickAudio () {
    const timerId = setInterval(function(){
        // Determine whether it is a word or a sentence.
        let pronounceElements = document.querySelectorAll(".trans-container .word-head .pronounce")
        switch (pronounceElements.length) {
            case 0:
                console.error("class 'pronounce' not found")
                break
            case 1:
                // Pronunciation of English word or sentence.
                pronounceElements[0].click()
                break
            case 2:
                // Pronunciation of American.
                pronounceElements[1].click()
                break
            default:
                console.error("class 'pronounce' too much")
                break
        }
        clearInterval(timerId);
    }, 500)
}
// function getLatestContext() {
//     return document.querySelector(".trans-container .word-head .title") == null ? document.querySelector(".trans-container .word-head .lj-title") : document.querySelector(".trans-container .word-head .title")
// }
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById("search_input").focus()
        async function doSomethingAfterDelay() {
            // Wait code loading.
            await wait(500);
            clickAudio()
        }doSomethingAfterDelay();
    }
});