console.log("test");
function setup(){
    noCanvas();
    let bgpage = chrome.extension.getBackgroundPage();
    let word = bgpage.word;
    console.log(word);
}