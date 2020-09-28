console.log("Start");
// let paragraphs = document.getElementsByTagName('body');

// chrome.runtime.onMessage.addListener(gotMessage);
// function gotMessage(message, sender, sendResponse){
//     console.log(message.txt);
//     if(message.txt=='clicked'){
//         for (elt of paragraphs){
//             elt.style['color']= '#FF00FF';
//         }
//     }
// }

// window.addEventListener('mouseup', wordSelected);
// window.getElementsByClassName('seller-notes-btn css-8rvftn-unf-btn e1ggruw00').addEventListener("click",buttonClicked);
// function wordSelected(){
//     console.log('wordselect');
//     let selectedText = window.getSelection().toString();
    
//     console.log(selectedText);
//     if(selectedText.length > 0){
//         let message = {
//             text: selectedText
//         };
//         chrome.runtime.sendMessage(message);
//     }
// }
// function buttonClicked(){
//     console.log('clicked');
// }

// document.getElementsByTagName("button")[0].addEventListener("click", btnclicked);
// document.getElementsByClassName("content-container")[0].addEventListener("click", btnclicked);
// document.getElementsById("order-status").addEventListener("click", btnclicked);
// var div= document.getElementsByTagName("button");
// var seller= document.getElementsByClassName("seller-container");
// var merch = seller[0].getElementsByClassName("maincontent-admin");
// console.log(seller[0]);
// console.log(merch[0]);
// for(var i = 0, l = div.length; i<l; i++){
//     console.log(div[i]);
//     console.log(march[i]);
// }
console.log(document.querySelector('.maincontent-admin'));
var merch = document.querySelector('#merchant-root');
console.log(merch.querySelector('div'));

document.querySelector('.css-1x67e3h-unf-btn.e1ggruw00').addEventListener('click', btnclicked);
function btnclicked(){
    console.log('btncliekc');
}