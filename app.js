var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "	https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input){
    return serverURL + "?" +"text=" + input
}

function errorHandler(error){
    console.log("error occurred",error);
    alert("something wrong with server");
}

function clickHandler(){

   var inputTxt= txtInput.value;//taking input

   //calling server 
   fetch(getTranslationURL(inputTxt))
   .then( response => response.json())
   .then(json => {
    var translateText =  json.contents.translated;
    outputDiv.innerText = translateText;
   })
   .catch(errorHandler)
};

btnTranslate.addEventListener("click",clickHandler)
