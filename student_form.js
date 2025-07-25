function validation(event){
    event.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const contact=document.getElementById("contact").value.trim();
    const result=document.getElementById("result");
    
    const namerules=/^[A-Za-z]{8,}$/;
    const emailrules=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactrules=/^[6-9]\d{9}$/;

    if(!namerules.test(name)){
        result.textContent="Invalid name";
        return false;
    }
    if(!emailrules.test(email)){
        result.textContent="Invalid email";
        return false;
    }
    if(!contactrules.test(contact)){
        result.textContent="Invalid Number";
        return false;
    }
    result.textContent="Registered Successfully";
    return false;
}