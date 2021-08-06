(function(){
    document.getElementById("myRange").addEventListener("mouseup",function(e){
        document.getElementById("outputDiv").innerHTML = e.target.value;
    
    });
})();