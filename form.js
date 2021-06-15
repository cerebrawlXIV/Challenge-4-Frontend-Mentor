let form = document.querySelector('form');
form.addEventListener('submit', validateForm, true);

function validateForm(e){
    e.preventDefault();
    let valid = true
    let fields = document.querySelectorAll("input[required]");

    for(let i = 0; i < fields.length; i++){
        let spanSibling = fields[i].nextElementSibling;
        let message = document.createTextNode(fields[i].title);
        if(!fields[i].checkValidity()){
            valid = false;
            fields[i].className = 'invalid';
            if(!spanSibling.innerHTML){
                spanSibling.appendChild(message);
            }
            if(fields[i].type == 'email'){
                fields[i].value = "email@example/com";
            }
        } else {
            spanSibling.innerHTML = '';
            fields[i].removeAttribute('class');
        }      
    }
    if(valid){
        e.target.submit();
    }
}