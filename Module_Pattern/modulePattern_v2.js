var service = function(){
    var obj = {};
    console.log("service called");

    obj.doSomething1 = function(){
        console.log("do 1");
    };
    obj.doSomething2 = function(){
        console.log("do 2");
    };
    return obj;
}()
service.doSomething1();
service.doSomething2();
