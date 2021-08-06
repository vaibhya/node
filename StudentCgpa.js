const students = [{name:"vaibhav",id:1,cgpa:7.9},{name:"harish",id:2,cgpa:8.9},{name:"atul",id:3,cgpa:7.2},
                    {name:"aarti",id:4,cgpa:7.0},{name:"monu",id:5,cgpa:8.0}];

var sum = 0,max=0,min,avg=0,count=0;
students.map(function(value,index){
    console.log(value.cgpa,index);
    sum+=value.cgpa;
    count+=1;
    if(value.cgpa>max){
        max=value.cgpa;
    }
    if(min){
        if(value.cgpa<min){
            min=value.cgpa;
            return
        }
    }
    min=value.cgpa;

})


console.log("sum",sum);
console.log("min",min);
console.log("max",max);
console.log("count",count);
console.log("Avg",sum/count);

