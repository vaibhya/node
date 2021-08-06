var empArrayList;
var selectedText;
var selectedValue;
function getRespose(){
    return new Promise(function(resolve,reject){
        var empList = new XMLHttpRequest();
        empList.addEventListener("load",function(){
            var stop_list = empList.responseText.split(/\n+/);
            if(stop_list.length!=0){
                resolve(stop_list)
                return
            }
            reject({error:"something is wrong!"})
        })
        empList.open("GET","dataFile.txt",false);
        empList.send();
    })
}
getRespose()
    .then(function(data){
        empNameDropDown(data)
    })
    .catch(function(error){
        console.log("error"+error);
    })

function empNameDropDown(empList){
    var empSelectDiv = document.getElementById("empNames");
    empArrayList=empList;
    for(var i=0;i<empList.length;i++){
        var name = getName(empList[i]);
        var empId = getEmpId(empList[i]);
        console.log(name);
        
        var option = document.createElement("option");
        option.text=name;
        option.value = empId;
        empSelectDiv.appendChild(option);
        
    }
}
function findJuniorEmp(){
    var dropDown = document.getElementById("empNames");
    var juniorEmpDiv = document.getElementById("juniorEmp");
    juniorEmpDiv.innerHTML="";
    selectedText = dropDown.options[dropDown.selectedIndex].innerHTML;
    selectedValue = dropDown.value;
    
    console.log(selectedText+" "+selectedValue);
    for(var i=0;i<empArrayList.length;i++){
        var managerId = getManagerId(empArrayList[i]);
        if(managerId==selectedValue){
            console.log(empArrayList[i]);
            var node = document.createElement("li");
            node.setAttribute("data-Key",selectedValue);
            node.innerHTML = `<span>Name: ${getName(empArrayList[i])}  </span>
            <span> id: ${getEmpId(empArrayList[i])}  </span>
            <span> Designation: ${getDesignation(empArrayList[i])}</span>`;
            juniorEmpDiv.append(node);
        }
    }
    findEmpSalary();
}
function findEmpSalary(){
    var salaryDiv = document.getElementById("salaryDiv");
    salaryDiv.innerHTML="";

    for(var i=0;i<empArrayList.length;i++){
        var empId = getEmpId(empArrayList[i]);
        if(empId==selectedValue){
            salaryDiv.innerHTML=getSalary(empArrayList[i]);
        }
        
    }

}
function getEmpId(emp){
    var empArray = emp.split(",");
    return empArray[0]; 
}
function getManagerId(emp){
    var empArray = emp.split(",");
    return empArray[3];
}
function getName(emp){
    var empArray = emp.split(",");
    return empArray[1];
}
function getDesignation(emp){
    var empArray = emp.split(",");
    return empArray[2];
}
function getSalary(emp){
    var empArray = emp.split(",");
    return empArray[5];
}