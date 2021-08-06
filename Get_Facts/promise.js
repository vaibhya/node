function getFacts(number){
    var message;
    return new Promise(function(resolve,reject){
        var xhr = new XMLHttpRequest();
        xhr.open("GET","http://numbersapi.com/"+number);
        xhr.send();
        console.log(xhr)
        if(xhr){
            console.log(xhr.status)
            xhr.addEventListener("load",function(){
                message = xhr.responseText;
                document.getElementById("httpGet").innerHTML=message;
            });
            
            resolve("Success");
            return;
        }
        reject("No response from server!")
    });
    
}
document.getElementById("submitBtn").addEventListener("click",function(){
    var number = document.getElementById("numberInput").value;
    getFacts(number)
        .then(function(text){
            console.log(text)
        })
        .catch(function(error){
            document.getElementById("httpGet").innerHTML=error;
        })
})
