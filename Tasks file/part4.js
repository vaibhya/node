var inputData = [];
var stringElement="";
var previousData = JSON.parse(localStorage.getItem("input"));
if(previousData.length!=0){
    inputData = previousData;    
    for(var i=inputData.length;i>=0;i--){
        appendElement(inputData[i]);    
    }
}
function saveData(){
    var task = document.getElementById("input").value;
    if(task!=""){
        inputData.unshift(task);
        saveToLocalStorage();
        appendElement(task);
    }
}
function saveToLocalStorage(){
            
    localStorage.setItem("input",JSON.stringify(inputData));
}
function appendElement(stringElement){
    console.log(stringElement);
    if(stringElement!=null){
        var node = document.createElement("ul");
        node.appendChild(document.createTextNode(stringElement));
        document.getElementById("para").prepend(node);
        var btn = document.createElement("button");
        btn.innerHTML = "x";
        btn.addEventListener("click",function(){
            document.getElementById("para").removeChild(node);
            btn.remove();
            // var taskIndex = inputData.indexOf(stringElement);
            // console.log(taskIndex);
            // inputData.splice(taskIndex)
            // console.log(localStorage);
        });
        document.getElementById("para").prepend(btn);
    }
    
}