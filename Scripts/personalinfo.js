window.onload = function(){
    if(localStorage)
    {
        populate(); 
        const form =document.getElementById('personalinfo');
        form.addEventListener('submit', store);
    }
    else{
        window.alert('personalinfostorage is not supported')
    }
    }
    
    function store(){
        let fn = document.forms.register.fn.value;
        let ln = document.forms.register.ln.value;
        let mn = document.forms.register.mn.value;
        let sex1 = document.forms.register.sex1.value;
        let email = document.forms.register.email.value; 
        let cop = document.forms.register.cop.value;
        let recommend= document.forms.register.recommend.value;
        let g_p= document.forms.register.g_p.value;
        let dob= document.forms.register.dob.value;
        localStorage.setItem('fn', fn);
        localStorage.setItem('mn', mn);
        localStorage.setItem('ln', ln);
        localStorage.setItem('sex1', sex1);
        localStorage.setItem('dob', dob);
        localStorage.setItem('recommend', recommend);
        localStorage.setItem('p_g', p_g)
        localStorage.setItem('email', email)
        localStorage.setItem('cp', cp);
        localStorage.setItem('cop', cop);
    } 
    function populate(){
        let fn = document.forms.register.fn;
        let mn = document.forms.register.mn;
        let ln = document.forms.register.ln;
        let sex1= document.forms.register.sex1;
        let dob= document.forms.register.dob;
        let recommend= document.forms.register.recommend;
        let p_g = document.forms.register.p_g;
        let email = document.forms.register.email;
        let cop= document.forms.register.cop;
        let cp= document.forms.register.cp;
        let tel= document.forms.register.tel;
       
    if(localStorage.getItem('fn')!=null){
        fn.value=localStorage.getItem('fn')
    }
    
    if(localStorage.getItem('mn')!=null){
        mn.value=localStorage.getItem('mn')
    }
    
    if(localStorage.getItem('ln')!=null){
        ln.value=localStorage.getItem('ln')
    }

    if(localStorage.getItem('sex1')!=null){
        sex1.value=localStorage.getItem('sex1')
    }

    if(localStorage.getItem('recommend')!=null){
        recommend.value=localStorage.getItem('recommend')
    }

    if(localStorage.getItem('p_g')!=null){
        p_g.value=localStorage.getItem('p_g')
    }

    if(localStorage.getItem('email')!=null){
        email.value=localStorage.getItem('email')
    }

    if(localStorage.getItem('tel')!=null){
        tel.value=localStorage.getItem('tel')
    }
    
    if(localStorage.getItem('cp')!=null){
        cp.value=localStorage.getItem('cp')
    }

    if(localStorage.getItem('cop')!=null){
        cop.value=localStorage.getItem('cop')
    }

    if(localStorage.getItem('dob')!=null){
        dob.value=localStorage.getItem('dob')
    }
    }
    