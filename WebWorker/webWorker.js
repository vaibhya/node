var myWorker = new Worker("worker.js");
function printHello(){
    document.getElementById("hiMsg").innerHTML+="Hii There!";
    
}
function printSync(){
    var total=0
    for(var i=0;i<10000000000;i++){
        total+=i;
    }
    document.getElementById("result").innerHTML=total;
}
function printAsync(){
    
    myWorker.postMessage();
    myWorker.onmessage = function(e){
        document.getElementById("result").innerHTML=e.data;
    }
}