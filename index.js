

var container=document.getElementById("container");

//function for displaying the entered reciepe in front page
function displayReciepes(){
     
  let keys=Object.keys(localStorage);
  
    

  keys.forEach(index=>{
       if(keys.length!=0)
{

    document.getElementById("noReciepe").style.display="none";
        var data=localStorage.getItem(index)
        var reciepe=JSON.parse(data);
      
        var div=document.createElement('div');
       

        if(reciepe.url!=null){
            div.style.backgroundImage=`url(${reciepe.url})`;
            div.style.backgroundPosition="center";
            div.style.backgroundRepeat="no-repeate"
            div.style.backgroundSize="100%"
            
        }
        else{
            div.style.background=` linear-gradient(90deg, #fc466aa5 0%, #3f5efb9b 100%)`;

        }
             div.innerHTML=`<h1 id="reciepeName" class="reciepeName">${reciepe.nameInput}</h1>
             
             <h3 id="author" class="author"> author :${reciepe.author}</h3>
             <p id="category" class="category"> category   :${reciepe.category}</p><br>
             <p id="ingridiants" class="ingridiants"> ingridiants  :${reciepe.ingridientsInput}</p>
             
             <br>
             <p id="description" class="description"> Description   :${reciepe.descriptionInput}</p><br>
             
             
             <p id="steps" class="steps"> steps :${reciepe.steps}</p>
             <em id="remarks" class="remarks"> remarks :${reciepe.remarksInput}</em><br>
             <button id="delete" class="delete bg bg-danger" onclick="deleteReciepe('${index}')" >Delete</button>`
             div.classList="reciepeContainer"
// container for viewiing thwe full details
            //  var fullDiv=document.createElement('div');
            //  fullDiv.id=`${index}`
            //  fullDiv.classList="fullview";
            //  fullDiv.innerHTML=`
            //  <button class="close">x</button>
            //  <p id="ingridiants" class="ingridiants"> ingridiants  :${reciepe.ingridientsInput}</p>
            //  <br>
            //  <p id="description" class="description"> Description   :${reciepe.descriptionInput}</p><br>
             
            //  <p id="category" class="category"> category   :${reciepe.category}</p><br>
            //  <p id="steps" class="steps"> steps :${reciepe.steps}</p>
            //  <em id="remarks" class="remarks"> remarks :${reciepe.remarksInput}</em><br>
            //  <button id="delete" class="delete bg bg-danger">Delete</button>`
             

            // container.append(fullDiv);
            
            container.appendChild(div);
            
             
             

       }
       else{
        document.getElementById("noReciepe").style.display="flex";
       }
    

  })
}










 // for gallery 
 var num=0;
var imgArray=[0,1,2,3,4,5,6,7,8,9,10];
 var gallery=document.querySelector("#gallery")

 function autoChange()
{
     if(num==0){
        gallery.style.backgroundImage= `url("./images/1.jpg")`
     
     }
    num++;
    if(num>=0 && num<=imgArray.length-1)
    {
        gallery.style.backgroundImage=`url(./images/${imgArray[num]}.jpg)`
        gallery.style.backgroundSize="100% 100vh"
    }
    else{
        num=0;
    }
    setTimeout(autoChange,4000)
}
autoChange();

//delete function

 function deleteReciepe(keyValue){
   localStorage.removeItem(keyValue);

location.reload();

 }


