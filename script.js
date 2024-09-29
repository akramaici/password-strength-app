let result=document.createElement("p");
let container=document.getElementsByClassName("result")[0];
let Passwordinput=document.getElementById("password");
function ChekPassword(){
    let Password=document.getElementById("password").value;
    if(Password.length==0){
      result.style.display="none";
    }
    else if(Password.length<=3){
       result.textContent="password is weak";
       result.style.color="red";
       result.style.display="block";
       Passwordinput.style.borderColor="red"; 
    }
    else if (Password.length>3 && Password.length<=7){
        result.textContent="password is medium";
        result.style.color="orange";
        Passwordinput.style.borderColor="orange"; 
        result.style.display="block";
     }
     else if (Password.length>7){
        result.textContent="password is Strong";
        result.style.color="green";
        Passwordinput.style.borderColor="green"; 
        result.style.display="block";
     }
     container.appendChild(result);
}