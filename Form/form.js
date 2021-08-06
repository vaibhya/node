function validation(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("test");
    if(username=="" || password==""){
        alert("enter something");
    }
}