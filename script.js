const errormessage = document.querySelector('.errormess');

function validateform(){
    let x = document.forms["myform"]["email"].value;
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(x.match(mailformat)){
        document.myform.email.focus();
        errormessage.classList.remove('active');
        return true;
    }else{
        errormessage.classList.add('active');
        return false;
    }
}