// Object

var student = {
    name: "akash",
    id: "13126",
    color: "red",
    height: "6ft",
    weight: "50kg"
}

console.log(student.name); 


//sudhu matro akta ke call kori tokhon --name dot key.

// agula ke read kora bole---

//abar variable niyeo korajay--- 

var studentWeight=student.weight;
    
console.log(studentWeight); 

// set a object poperty value-- 

// 1st 

student.name="Esa Mohhammad" ;
console.log(student); 


// 2nd

//diffrent way of set a object property value-- 

student["name"]="Abbajan" ;
console.log(student); 


// 3rd 

//variable diye set kore---- var newNameSet="name" ;
student[newNameSet] = "hasina bari"; 
console.log(student); 
