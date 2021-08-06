const arr= [10,20,30,40,51];
function isOdd(no){
    return no%2!=0;
}
function filterGreaterThan25(no){
    return no>25;
}
function filterNumbers(array,predicateFun){
    let result = []
    for(let i=0;i<array.length;i++){
        if(predicateFun(array[i])){
            result.push(array[i]);
        }
    }
    return result;
}
console.log(filterNumbers(arr,isOdd));
console.log(filterNumbers(arr,filterGreaterThan25));