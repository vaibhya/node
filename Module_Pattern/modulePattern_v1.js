function makeCustomer(){
    var customer={}
    var __id,__name;
    customer.setId=function(id){
        this.__id=id;
    }
    customer.setName = function(name){
        this.__name=name;
    }
    customer.getDetails = function(){
        return "id: "+this.__id+" name: "+this.__name;
    }
    return customer;
}
var c1=makeCustomer();
c1.setId(101);
c1.setName("vaibhav");
console.log(c1.getDetails())
console.log(c1);