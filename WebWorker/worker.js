onmessage = function(e){
    var total = 0;
    for(var i=0;i<10000000000;i++){
        total+=i;
    }
    this.postMessage(total);
}