var winNumber;
var totalChance;
var chanceCount=0;
var message = document.getElementById("chances");
function setCount(){
    totalChance=3;
    var number = document.getElementById("ballCount").value;
    generate_ball(number);
}

function generate_ball(number){
    var buttonVDiv = document.getElementById("ballDiv");
    buttonVDiv.innerHTML=null;
    winNumber=Math.floor(randomNumber(0, number));
    console.log("winner number:"+winNumber);
    for(var i=0;i<number;i++){
        var btn = document.createElement("BUTTON");
        btn.id = i;
        btn.className = "button";
        btn.innerHTML = i;
        document.getElementById("ballDiv").appendChild(btn);
    }
}

function randomNumber(min, max) { 
    return Math.random() * (max - min) + min;
} 

document.getElementById("ballDiv").addEventListener("click",function(event){
    chanceCount+=1;
    
    message.innerHTML = "Chances Left:"+(totalChance-chanceCount);
    var checkCountQuery = $("#ballDiv :input");
    var checkWinNumber = event.target.id;
    var checkWinButton = document.getElementById(checkWinNumber);
    console.log(checkWinNumber);
    if(checkWinNumber==winNumber){
        checkWinButton.style.background="blue";
        message.innerHTML = "You Won!";
        checkCountQuery.attr("disabled", true)
        return;
    }
    checkWinNumber>winNumber? checkWinButton.style.background="red":checkWinButton.style.background="green";
    chanceCount>=totalChance? checkCountQuery.attr("disabled", true):checkCountQuery.attr("disabled",false);
    if(chanceCount>=totalChance){
        message.innerHTML="you loss!";
    }
    
});

function resetGame(){
    document.getElementById("ballDiv").innerHTML="";
    chanceCount=0;
    message.innerHTML="";
}