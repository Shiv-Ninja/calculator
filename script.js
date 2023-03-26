let person = prompt("Please enter your name");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hello " + person + "! what do u want to calculate?";
}
 let equation="";
 let buttons=document.querySelectorAll('.button');
 Array.from(buttons).forEach((button)=>{

  button.addEventListener('click',(e)=>{
      
if(e.target.innerHTML == '='){
  equation=eval(equation);
  document.querySelector('input').value=equation;
}

else if(e.target.innerHTML == 'C'){
equation=""
document.querySelector('input').value=equation;
}
else if(e.target.innerHTML== 'del'){
  equation=equation.slice(0,-1);
  document.querySelector('input').value=equation;
}
else{
  console.log(e.target)
  equation=equation+e.target.innerHTML;
  document.querySelector('input').value=equation;
}

  })
 })
 //  keyboard

