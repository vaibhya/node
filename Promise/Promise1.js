function doSomething(input){
    console.log("testing")
    return new Promise(function(resolve,reject){
        console.log("inside promise");
        var result = Math.random()*input;
        console.log(result);
        if(result>5){
            resolve(result)
            return
        }
        reject({error:"something wrong"})
    })
}

doSomething(10)
    .then(function(result){
    console.log("success happend"+result);
    })
    .catch(function(error){
        console.log("error happend"+result);
    })

console.log("end");