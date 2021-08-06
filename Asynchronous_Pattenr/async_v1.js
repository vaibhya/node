function doSomething(number){
    var result = Math.random()*number;
    console.log(result)
    if(result>5){
        return {success:result}
    }
    return {error:"something is wrong"}
}
console.log(doSomething(10))
console.log("end")