window.onload = function(){
    if(localStorage)
    {
        populate(); 
        const form =document.getElementById('personalinfo');
        form.addEventListener('submit', store);
    }
    else{
        window.alert('localstorage is not supported')
    }
    }
    
    function store(){
        let fn = document.forms.register.fn.value;
        let ln = document.forms.register.ln.value;
        let mn = document.forms.register.mn.value;
        let tel = document.forms.register.tel.value;
        let email = document.forms.register.email.value;
        let mn = document.forms.register.mn.value;
        let cop = document.forms.register.cop.value;
        let sex_1 = document.forms.register.sex_1.value;
        let cp = document.forms.register.cp.value;
        let sexorient_1 = document.forms.register.sexorient_1.value;
        let dob = document.forms.register.dob.value;
        localStorage.setItem('fn', fn);
        localStorage.setItem('mn', mn);
        localStorage.setItem('ln', ln);
        localStorage.setItem('tel', tel);
        localStorage.setItem('email', email);
        localStorage.setItem('ln', ln);
        localStorage.setItem('cop', cop);
        localStorage.setItem('sex_1', sex_1);
        localStorage.setItem('cp', cp);
        localStorage.setItem('sexorient_1', sexorient_1)
        localStorage.setItem('dob', dob);
    } 
    function populate(){
        let fn = document.forms.register.fn;
        let mn = document.forms.register.mn;
        let ln = document.forms.register.ln;
        let tel = document.forms.register.tel;
        let email = document.forms.register.email;
        let ln = document.forms.register.ln;
        let cop = document.forms.register.cop;
        let sex_1= document.forms.register.sex_1;
        let cp= document.forms.register.cp;
        let pgn = document.forms.register.pgn;
        let dob= document.forms.register.dob;
    
    if(localStorage.getItem('fn')!=null){
        fn.value=localStorage.getItem('fn')
    }
    
    if(localStorage.getItem('mn')!=null){
        mn.value=localStorage.getItem('mn')
    }
    
    if(localStorage.getItem('ln')!=null){
        ln.value=localStorage.getItem('ln')
    }

    if(localStorage.getItem('tel')!=null){
        tel .value=localStorage.getItem('tel')
    }

    if(localStorage.getItem('email')!=null){
        email.value=localStorage.getItem('email')
    }

    if(localStorage.getItem('ln')!=null){
        ln.value=localStorage.getItem('ln')
    }
    
    if(localStorage.getItem('cop')!=null){
        cop.value=localStorage.getItem('cop')
    }
    
    if(localStorage.getItem('sex_1')!=null){
        sex_1.value=localStorage.getItem('sex_1')
    }
    
    if(localStorage.getItem('cp')!=null){
        cp.value=localStorage.getItem('cp')
    }
    
    if(localStorage.getItem('pgn')!=null){
        pgn.value=localStorage.getItem('pgn')
    }
    
    if(localStorage.getItem('dob')!=null){
        dob.value=localStorage.getItem('dob')
    }
    }
    