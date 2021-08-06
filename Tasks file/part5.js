var inputData = [];
var stringElement="";
var task;

window.onload = function(){
    if(!localStorage.getItem("input")){
        return;
    }
    inputData = JSON.parse(localStorage.getItem("input"));
    for(var i=0;i<inputData.length;i++){
        appendElement(inputData[i]);
    }
}
function saveData(){
    task = document.getElementById("input").value;
    if(task!=""){
        inputData.unshift(task);
        saveToLocalStorage();
        appendElement(task);
    }
}
function saveToLocalStorage(){
            
    localStorage.setItem("input",JSON.stringify(inputData));
}
// function appendElement(stringElement,time){
//     console.log(stringElement);
//     if(stringElement!=null){
//         var node = document.createElement("ul");
//         node.appendChild(document.createTextNode(stringElement));
//         var time = moment().startOf('minute').fromNow()
//         console.log("time: "+time);
//         node.appendChild(document.createTextNode(" "+time));
//         document.getElementById("para").prepend(node);
//         var btn = document.createElement("button");
//         btn.innerHTML = "x";
//         btn.addEventListener("click",function(){
//             document.getElementById("para").removeChild(node);
//             btn.remove();
//         });
//         document.getElementById("para").prepend(btn);
//     }
    
// }

function appendElement(stringElement){
    // console.log(stringElement);
    if(stringElement!=null){
        var id = Date.now();
        var node = document.createElement("ul");
        node.id = id;
        var time = moment().startOf('minute').fromNow();
        // var time = moment(id).fromNow();
        // node.appendChild(document.createTextNode(stringElement));

        node.innerHTML=`<span>${stringElement}</span>
        <span>(${time})</span>`;
        
        console.log("time: "+time);
        // node.appendChild(document.createTextNode(" "+time));
        document.getElementById("para").prepend(node);
        var btn = document.createElement("button");
        btn.innerHTML = "x";
        btn.addEventListener("click",function(){
            document.getElementById("para").removeChild(node);
            btn.remove();
        });
        document.getElementById("para").prepend(btn);
    }
    
}