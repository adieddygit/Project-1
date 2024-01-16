try{
  function validateregister(){
    let fn = document.forms.register.fn.value;
    let ln = document.forms.register.ln.value;
    // let pfn = document.forms.pd3.pfn.value;
    // let cae = document.forms.pd3.cae.value;
    // let cp = document.forms.pd3.cp.value;
    // let cop = document.forms.pd3.cop.value;

  if(!fn){
  document.getElementById('fnErr').innerHTML = "<br/>FIRSTNAME IS REQUIRED!";
  alert('FIRSTNAME IS REQUIRED!');
  document.forms.register.fn.focus();
  return false;
}
else{
  document.getElementById('fnErr').innerHTML = "";
}

if(!ln){
document.getElementById('lnErr').innerHTML = "<br/>LASTNAME IS REQUIRED!";
alert('LASTNAME IS REQUIRED!');
document.forms.register.ln.focus();
return false;
}
else{
document.getElementById('lnErr').innerHTML = "";
}

}
}
  catch(err){
    window.alert(err.message);
  }

// if(!cae){
// document.getElementById('caeErr').innerHTML = "<br/>PLEASE CREATE AN EMAIL!";
// alert('CREATE AN EMAIL!');
// document.forms.pd3.cae.focus();
// return false;
// }
// else{
// document.getElementById('caeErr').innerHTML = "";
// }

// if(!cp){
// document.getElementById('cpErr').innerHTML = "<br/>PLEASE CREATE A PASSWORD!";
// alert('CREATE A PASSWORD!');
// document.forms.pd3.cp.focus();
// return false;
// }
// else{
// document.getElementById('cpErr').innerHTML = "";
// }

// if(!pfn){
// document.getElementById('pfnErr').innerHTML = "<br/>YOUR PETS FIRSTNAME IS REQUIRED!";
// alert('YOUR PETS FIRSTNAME IS REQUIRED!');
// document.forms.pd3.pfn.focus();
// return false;
// }
// else{
// document.getElementById('pfnErr').innerHTML = "";
// }



// try{   
// function validatefname(){
// let nampattern = /^[A-Za-z\s]*$/;
// let  = document.forms.register.fname.value;

// if(fname){
//     let x = nampattern.test();
//     if(x==false){
//     document.getElementById('fname').innerHTML = "<br/>Name can only only contain letters";
//     document.forms.register.fname.focus();
//     }
//     else{
//     document.getElementById('fnameErr').innerHTML = "";
//     document.forms.register.fname.style.borderColor = 'green';
//     }
// }
// }
// }

// catch(err){
//     window.alert(err.message);
//       }


// try{   
// function validatelname(){
// let nampattern = /^[A-Za-z\s]*$/;
// let  = document.forms.register.lname.value;

// if(lname){
//     let x = nampattern.test();
//     if(x==false){
//     document.getElementById('lname').innerHTML = "<br/>Name can only only contain letters";
//     document.forms.register.lname.focus();
//     }
//     else{
//     document.getElementById('lnameErr').innerHTML = "";
//     document.forms.register.lname.style.borderColor = 'green';
//     }
// }
// }
// }

// catch(err){
//     window.alert(err.message);
//     }