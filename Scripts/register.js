try{
    function validateregister(){
      let fname = document.forms.register.fname.value;

      if(!fname){
        document.getElementById('fnameErr').innerHTML = "Firstname is required!";
        document.forms.register.fname.focus();
        return false;
      }
    }
}
  
catch(err){
    window.alert(err.message);
      }


try{
    function validateregister(){
        let lname = document.forms.register.lname.value;
    
      if(!lname){
        document.getElementById('lnameErr').innerHTML = "Lastname is required!";
        document.forms.register.lname.focus();
        return false;
      }
    }
}

catch(err){
    window.alert(err.message);
      }
    
try{   
function validatefname(){
let nampattern = /^[A-Za-z\s]*$/;
let  = document.forms.register.fname.value;

if(fname){
    let x = nampattern.test();
    if(x==false){
    document.getElementById('fname').innerHTML = "<br/>Name can only only contain letters";
    document.forms.register.fname.focus();
    }
    else{
    document.getElementById('fnameErr').innerHTML = "";
    document.forms.register.fname.style.borderColor = 'green';
    }
}
}
}

catch(err){
    window.alert(err.message);
      }


try{   
function validatelname(){
let nampattern = /^[A-Za-z\s]*$/;
let  = document.forms.register.lname.value;

if(lname){
    let x = nampattern.test();
    if(x==false){
    document.getElementById('lname').innerHTML = "<br/>Name can only only contain letters";
    document.forms.register.lname.focus();
    }
    else{
    document.getElementById('lnameErr').innerHTML = "";
    document.forms.register.lname.style.borderColor = 'green';
    }
}
}
}

catch(err){
    window.alert(err.message);
    }