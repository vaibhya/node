const arr= [1,2,3,4];
function square(no){
    return no*no;
}
function cube(no){
    return no*no*no;
}

function createArray(numArray,predicateFn){
    let result = [];
    for(let i=0;i<numArray.length;i++){
        let num = predicateFn(numArray[i]);
        result.push(num);
    }
    return result;
}
console.log(createArray(arr,square));
console.log(createArray(arr,cube));