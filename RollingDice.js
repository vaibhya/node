// Create a js program to replicate rolling a dice 10 times and display frquency of each value . Executive through node
var min=1;
var max=6;
const result = {};
function rollDice(min,max) { 
    return Math.floor(Math.random() * (max - min) + min);
}
for(let i=0;i<10;i++){
    let number = rollDice(min,max);
    if(result[number]){
        result[number]+=1;
    }else{
        result[number]=1;
    }
}
console.log(result);