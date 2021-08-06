function doSomething(number,successFun,errorFun){
    setTimeout(function(){
        var result = Math.random()*number;
        console.log(result)
        if(result>5){
            return successFun(result)
        }
        return errorFun(result)
    },0)
    
}


doSomething(10,
    function(data){
        console.log(data)
    },
    function(data){
        console.log(data)
    }
);
console.log("end")