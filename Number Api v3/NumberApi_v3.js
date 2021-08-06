var stringArray = [];
var message;
var id;
var latestData;
window.onload = function(){
    if(!localStorage.getItem("message")){
        return;
    }
    stringArray = JSON.parse( localStorage.getItem("message"));
    for(var i=0;i<stringArray.length;i++){
        displayMessages(stringArray[i]);    
    }
    // displayMessages()
};
function storeDataToLocalstorage(){
    localStorage.setItem("message",JSON.stringify(stringArray));
}

function storeDataToArray(text){
    serverMessage={
        text,
        id:Date.now(),
        creationDate:Date,
    };
    stringArray.push(serverMessage);
    // id=Date.now();
    latestData = serverMessage;
    console.log(stringArray);
}

function getResposeFromServer(){
    console.log("start");
    var number = document.getElementById("numberInput").value;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load",function(){
        console.log(xhr.responseText);
        message = xhr.responseText;
        // createMessage(message);
        storeDataToArray(message);
        storeDataToLocalstorage();
        displayMessages(latestData);
    });
    xhr.open("GET","http://numbersapi.com/"+number);
    xhr.send();
    console.log("end of program");
    number="";
}

function displayMessages(message){
    var messageDiv = document.getElementById("messageDiv");
    // var id = Date.now();
    var time = moment(message.id).fromNow();;
    var node = document.createElement("li");
    node.setAttribute("data-key",message.id);
    node.innerHTML = `<span">${message.text}</span>
    <span>${time}</span>`;
    messageDiv.prepend(node);
}