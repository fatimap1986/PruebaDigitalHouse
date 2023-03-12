window.onload = function() {

let formulario = document.querySelector('.formLogin');

formulario.addEventListener("submit", (e) => { 
    e.preventDefault()

    let errores = [];

    let email = document.querySelector('#email')
    let password = document.querySelector('#password')

    if (email.value == ""){
        errores.push('El email no puede estar vacio')
        email.classList.add('is-invalid')
    }else{
        email.classList.remove('is-invalid')
    }
    
    if (password.value == ""){
        errores.push('El password no puede estar vacio')
        password.classList.add('is-invalid')
    }else{
        password.classList.remove('is-invalid')
    }


    if (errores.length > 0){
        let ulErrores = document.querySelector('.errores')
        ulErrores.classList.add("alert-warning")
        ulErrores.innerHTML = ""
        for (let i = 0; i < errores.length; i++) {
            ulErrores.innerHTML += `<li> ${errores[i]} </li>`
        }
    }
    else {
        formulario.submit()
    }

})
}