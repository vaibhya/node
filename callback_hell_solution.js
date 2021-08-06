var data;
function getCustomer(details){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(details)
            if(details.isGold){
                data=details;
                resolve("Promise 1 resolved");
                return;
            }
        reject("promise 1 error");
        },3000);
        
    })
}
function getTopMovies(movies){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log(movies)
            if(movies.length!=0){
                resolve("promise 2 resolved");
                return;
            }
        reject("stoped at promise 2");
        },3000)
    })
}
function sendEmail(data){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            if(data.email!=null){ 
                resolve(data.email);
                return;
            }
            reject("stoped at promise 3");
        },3000)
    })
}
getCustomer({
    id:1,
    name:"vaibhav",
    isGold : true,
    email : "vk751999@gmail.com"
})
.then(function(message){
    console.log(message)
    return getTopMovies(["movie1","movie2"]);
})
.then(function(messgae){
    console.log(messgae);
    return sendEmail(data);
})
.then(function(email){
    console.log("email sent to "+email);
})
