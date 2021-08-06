
    var inputData = [];
    
    function saveData(){
        var task = document.getElementById("input").value;
        if(task){
            inputData.unshift(task);
        }
        saveToLocalStorage();
        appendElement(task);
    }
    function saveToLocalStorage(){
            
        localStorage.setItem("input",JSON.stringify(inputData));
    }
    function appendElement(stringElement){
        if(stringElement!=null){
        var node = document.createElement("ul");
        node.appendChild(document.createTextNode(stringElement));
        document.getElementById("para").prepend(node);
        }
    }


