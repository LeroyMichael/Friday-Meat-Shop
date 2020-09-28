console.log("Background running");
// chrome.browserAction.onClicked.addListener(buttonClicked);

// function buttonClicked(tab){
//     let msg = {
//         txt: "clicked"
//     }
//     chrome.tabs.sendMessage(tab.id, msg);
//     // console.log("button clicked!");
// }

chrome.tabs.getSelected(null, function(tab){
    chrome.tabs.executeScript(
      tab.id,
      {code: "console.log(document.querySelector('.is-open'));"},
      function(response) {
        // do something after the code's been executed
      }
    );
  });

chrome.runtime.onMessage.addListener(receiver);

window.word = "test";

function receiver (request, sender, sendResponse){
    console.log(request);
    window.word =  request.text;
    // chrome.runtime.sendMessage(word);
}
