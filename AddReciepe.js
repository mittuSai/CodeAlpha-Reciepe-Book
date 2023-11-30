
function handleSubmit(){
    count=localStorage.getItem("num");
    var nameInput =document.querySelector('#name').value;
   
    var descriptionInput=document.querySelector('#description').value;
    
var ingridientsInput=document.querySelector('#ingridients').value;
 
  var remarksInput=document.querySelector('#remarks').value;
 
  var category=document.querySelector('#category').value;

  var author=document.querySelector('#author').value;

  var steps=document.querySelector('#steps').value;

  var url=document.querySelector('#imgurl').value;


  if(nameInput &&steps &&url&& descriptionInput.length>0){
   
     var values={nameInput,descriptionInput,ingridientsInput,remarksInput,category,author,steps,url};
     localStorage.setItem(`reciepe${nameInput}`,JSON.stringify(values));
     window.alert("Rciepe Added")
  
  }
  else{
    
    window.alert("Please enter all information about reciepie")
  }




  
  
  

}








 


