(function(){
    document.getElementById("myRange").addEventListener("mouseup",function(e){
        var numberOfButtons = e.target.value;
        
        createButtons(numberOfButtons);
    });
    function createButtons(numberOfButtons){
        var buttonVDiv = document.getElementById("outputDiv");
        buttonVDiv.innerHTML=null;
        for(var i=0;i<numberOfButtons;i++){
            var btn = document.createElement("BUTTON");
            btn.id = i;
            btn.innerHTML = i;
            document.getElementById("outputDiv").appendChild(btn);
        }
    }
})();


// document.getElementById("myRange").addEventListener("mouseup",function(e){
//     var numberOfButtons = e.target.value;
    
//     createButtons(numberOfButtons);
// });
// function createButtons(numberOfButtons){
//     var buttonVDiv = document.getElementById("outputDiv");
//     buttonVDiv.innerHTML=null;
//     for(var i=0;i<numberOfButtons;i++){
//         var btn = document.createElement("BUTTON");
//         btn.id = i;
//         btn.innerHTML = i;
//         document.getElementById("outputDiv").appendChild(btn);
//     }
// }