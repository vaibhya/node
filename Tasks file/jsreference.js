var inputData = [];
        var previousData = JSON.parse(localStorage.getItem("input"));
        var task;
        if(previousData.length!=0){
            inputData = previousData;    
        } 
        function saveData(){
            task = document.getElementById("input").value;
            if(checkNullValue()){
                inputData.unshift(task);
            }
            saveToLocalStorage();
            displayValues(); 
            // appendElements(inputValue);
        }
        function saveToLocalStorage(){
            
            localStorage.setItem("input",JSON.stringify(inputData));
        }
        function checkNullValue(){
            if(task==""){
                return false;
            }
            return true;
        }
        function displayValues(){
            data = localStorage.getItem("input");
            document.getElementById("para").innerHTML = inputData.join("\r\n");
        }
        var btnlabel = 0; 
        if(previousData.length!=0){
            var btnlabel = previousData.length;    
        }
        function appendElements(stringElement){
            btnlabel+=1;
            let div = document.createElement('div');
            div.id = btnlabel;
            div.innerHTML = stringElement;
            document.body.appendChild(div);
            // div.onclick=function(){alert("test")}
            // div.onclick=function (){
                // div.getElementById()
            // };
            // div.addEventListener("click",function (e){
            //     var id = e.get
            // });
            // div.onclick = visibility = "hidden";
            // document.body.unshift.appendChild(div);
             
        }