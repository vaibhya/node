function getRespose(){
    console.log("start");
    var message;
    var number = document.getElementById("numberInput").value;
    var xhr = new XMLHttpRequest();
    xhr.open("GET","http://numbersapi.com/"+number);
    xhr.send();
    console.log(xhr);
    xhr.addEventListener("load",function(){
        console.log(xhr.responseText);
        message = xhr.responseText;
        document.getElementById("httpGet").innerHTML=message;
    });
    console.log("end of program");
}