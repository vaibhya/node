var stringArray = [];
var message;
window.onload = function(){
    if(!localStorage.getItem("message")){
        return;
    }
    stringArray = JSON.parse( localStorage.getItem("message"));
    for(var i=0;i<stringArray.length;i++){
        displayMessages(stringArray[i]);    
    }
    displayMessages()
};
function storeDataToLocalstorage(){
    localStorage.setItem("message",JSON.stringify(stringArray));
}

function storeDataToArray(message){
    stringArray.push(message);
    console.log(stringArray);
}

function getResposeFromServer(){
    console.log("start");
    var number = document.getElementById("numberInput").value;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load",function(){
        console.log(xhr.responseText);
        message = xhr.responseText;
        storeDataToArray(message);
        storeDataToLocalstorage();
        displayMessages(message);
    });
    xhr.open("GET","http://numbersapi.com/"+number);
    xhr.send();
    console.log("end of program");
    number="";
}

function displayMessages(message){
    var messageDiv = document.getElementById("messageDiv");
    
    var node = document.createElement("li");
    node.id=Date.now();
    node.innerHTML = `<span>${message}</span>`;
    messageDiv.prepend(node);
}