function clickAudio (latestWord) {
    const timerId = setInterval(function(){
        if (latestWord != document.getElementsByClassName("title")[0].childNodes[0].textContent) {
            let audioElement = document.getElementsByClassName("title")[0].getElementsByClassName("pronounce")
            if (audioElement.length == 1) {
                audioElement[0].click()
            } else {
                document.getElementsByClassName("per-phone")[1].getElementsByClassName("pronounce")[0].click()
            }
            clearInterval(timerId);
        }
    }, 500)
}
const wait = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));
document.addEventListener('keydown', function(event) {
    // 检查按下的键是否是特定的快捷键
    if (event.key === 'Enter') {
        let latestWord = document.getElementsByClassName("title")[0].childNodes[0].textContent
        if (latestWord == document.getElementById("search_input").value) {
            document.getElementById("search_input").focus()
            return
        }
        async function doSomethingAfterDelay() {
            await wait(500);
            clickAudio(latestWord)
        }doSomethingAfterDelay();
    }
});