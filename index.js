// Q1. Create a Function----------------------------------------------------------------------

function createObjectWithSetter(name){
    let obj = {
        name: name,
        setter: function(){
            console.log(this.name);
        }
    };
    return obj;
}
let inputName = "Rishu Singh";
let myobject = createObjectWithSetter(inputName);
myobject.setter();


// Q2. Delete a Parameter-------------------------------------------------------------------

function deleteRollnoPeoperty(name, rollno) {
    let obj = {
        name: name,
        rollno: rollno
    };
    let isDeleted = delete obj.rollno;
    if (isDeleted && !("rollno" in obj)){
        console.log("True");
    } else {
        console.log("False");
    }
    return obj;
}
let inputName1 = "Rishu";
let inputRollno = 129;
deleteRollnoPeoperty(inputName1, inputRollno);


// Q3. Check whether the Package is Dream Package or not-----------------------------------------

function checkDreamPackage(obj) {
    if (obj.salary > 500000) {
        return "Dream";
    }else {
        return "NotDream";
    }
}
let inputPackage = { salary: 100000};
console.log(checkDreamPackage(inputPackage));


// Q4. Check whether the Object has a parameter or not----------------------------------------

function hasParameter(obj) {
    if (Object.keys(obj).length === 0) {
        return "false";
    } else {
        return "true";
    }
}
// let inputObject = {}; 
// console.log(hasParameter(inputObject)); 

inputObject = { name: "Utkarsh" }; 
console.log(hasParameter(inputObject)); 



// Q5. Merge the Objects-----------------------------------------------------------------------

function mergeObjects(obj1, obj2) {
    let mergedObject = { ...obj1, ...obj2 };
    return mergedObject;
}
let obj1 = { name: "Rishu", id: 129 }; 
let obj2 = { state: "U.P", code: 201301 }; 
let result = mergeObjects(obj1, obj2);
console.log(result);

console.log(result.name); 
console.log(result.id);  
console.log(result.state); 
console.log(result.code); 


// Q6. Object Multiplyer-------------------------------------------------------------------------

function objectMultiplier(obj, N) {
    obj.id *= N;
    obj.houseno *= N;
    
}
let N = 2; 
let inputObject1 = { id: 12, houseno: 146 }; 

objectMultiplier(inputObject1, N);
console.log(inputObject1.id);     
console.log(inputObject1.houseno);


// Q7. Find the sum of Object Members------------------------------------------------------------

function Check(obj) {
    return obj.p1 + obj.p2 + obj.p3;
}
let inputObject2 = { p1: 1, p2: 2, p3: 3 }; 
console.log(Check(inputObject2)); 


// Q8. Check whether the Objects are same or not.-------------------------------------------------

function areObjectsSame(obj, new_name, new_id) {
    return obj.name === new_name && obj.id === new_id;
}
let obj = { name: "Utkarsh", id: 2 }; 
let new_name = "Prepbytes"; 
let new_id = 3; 
console.log(areObjectsSame(obj, new_name, new_id)); 

