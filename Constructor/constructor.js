// var id,__name;
function Customer(id,name){
    console.log(this);
    var __id,__name;

    if(id>0){
        __id = id;
    }
    if(checkLength(name)){
        __name = name;
    }
    this.foo = "i am foo, just for test";
    this.setName = function(name){
        if(checkLength(name)){
            __name = name;
        }
    }
    this.getName = function y(){
        return __name;
    }
    this.getId = function(){
        return __id;
    }
    
}
function checkLength(name){
    if(name.length>0){
        return true;
    }
}

var c1 = new Customer(101,"xyz");
console.log(c1);
console.log({c1});
c1.setName("vaibhav");
console.log({c1});
console.log(c1.getName);
console.log(c1.getId);
console.log(c1.foo);
console.log({c1});
var temp=c1.getName();
var tempId = c1.getId();
//change
console.log(tempId);
console.log(temp);