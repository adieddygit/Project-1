try{
  function validateregister2(){
    let fn = document.forms.register.fn.value;
    let ln = document.forms.register.ln.value;
    let cae = document.forms.register.cae.value;
    let cp = document.forms.register.cp.value;
    let cop = document.forms.register.cop.value;

  if(!fn){
  document.getElementById('fnErr').innerHTML = "<br/>FIRSTNAME IS REQUIRED!";
  document.forms.register.fn.focus();
  return false;
}
else{
  document.getElementById('fnErr').innerHTML = "";
}

if(!ln){
document.getElementById('lnErr').innerHTML = "<br/>LASTNAME IS REQUIRED!";
document.forms.register.ln.focus();
return false;
}
else{
document.getElementById('lnErr').innerHTML = "";
}

if(!cae){
document.getElementById('caeErr').innerHTML = "<br/>PLEASE CREATE AN EMAIL!";
document.forms.register.cae.focus();
return false;
}
else{
document.getElementById('caeErr').innerHTML = "";
}

if(!cp){
document.getElementById('cpErr').innerHTML = "<br/>PLEASE CREATE A PASSWORD!";
document.forms.register.cp.focus();
return false;
}
else{
document.getElementById('cpErr').innerHTML = "";
}

if(!cop){
document.getElementById('copErr').innerHTML = "<br/>CONFIRM YOUR PASSWORD!";
document.forms.register.cop.focus();
return false;
}
else{
document.getElementById('copErr').innerHTML = "";
}
}
}

catch(err){
  window.alert(err.message);
}

// function validatefn(){
//   let namepattern = /^[A-Za-z\s]*$/;
//   let  = document.forms.register.fn.value;
//   if(fn){
//     let x = namepattern.test(fn);
//     if(x==false){
//       document.getElementById('fn').innerHTML = "<br/>Name can only contain letters";
//       document.forms.register.fn.focus();
//     }

//     else{
//       document.getElementById('fnErr').innerHTML = "";
//       document.forms.register.fn.style.borderColor = 'green';
//     }
//   }
// }
  
