 
let reciepes=[];
var form =document.querySelector("form");


function getValue(e){

   


    var reciepeName=document.getElementById("name").Value
    var reciepeIngridiants=document.getElementById("ingridients").Value
    var reciepeDescription=document.getElementById("description").Value
    var reciepeRemarks=document.getElementById("remarks").Value

    console.log(`${reciepeDescription}`);
    console.log(reciepeName);
}
form.addEventListener("submit",getValue());
