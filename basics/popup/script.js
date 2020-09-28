console.log("test");
function setup(){
    noCanvas();
    let bgpage = chrome.extension.getBackgroundPage();
    let word = bgpage.word;
    createP(word);
}

// chrome.runtime.onMessage.addListener(
//     function(request, sender, sendResponse) {
//             console.log(request);
//             document.write(request);
//     }
// );