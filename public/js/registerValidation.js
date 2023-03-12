window.onload = function() {

    let form = document.querySelector('.registerForm')

    form.addEventListener('submit', (e) => {
        e.preventDefault()

        let errores = [];

        let usuario = document.querySelector('#usuario')
        let nombre = document.querySelector('#nombre')
        let apellido = document.querySelector('#apellido')
        let email = document.querySelector('#email')
        let password = document.querySelector('#password')
        let direccion = document.querySelector('#direccion')
        let fecha = document.querySelector('#fecha')
        let imagen = document.querySelector('#imagenPerfil')
       
        if (usuario.value == ""){
            errores.push('El usuario no puede estar vacio')
            usuario.classList.add('is-invalid')
        }else{
            usuario.classList.remove('is-invalid')
        }

        if (usuario.value.length < 2){
            errores.push('El usuario debe tener 2 o mas caracteres')
            usuario.classList.add('is-invalid')
        }else{
            usuario.classList.remove('is-invalid')
        }


        if (nombre.value == ""){
            errores.push('El nombre no puede estar vacio')
            nombre.classList.add('is-invalid')
        }else{
            nombre.classList.remove('is-invalid')
        }

        if (nombre.value.length < 2){
            errores.push('El nombre debe tener 2 o mas caracteres')
            nombre.classList.add('is-invalid')
        }else{
            nombre.classList.remove('is-invalid')
        }

        if (apellido.value == ""){
            errores.push('El apellido no puede estar vacio')
            apellido.classList.add('is-invalid')
        }else{
            apellido.classList.remove('is-invalid')
        }

        if (apellido.value.length < 2){
            errores.push('El apellido debe tener 2 o mas caracteres')
            apellido.classList.add('is-invalid')
        }else{
            apellido.classList.remove('is-invalid')
        }

        if (email.value == ""){
            errores.push('El email no puede estar vacio')
            email.classList.add('is-invalid')
        }else{
            email.classList.remove('is-invalid')
        }

        if (direccion.value == ""){
            errores.push('La dirección no puede estar vacia')
            direccion.classList.add('is-invalid')
        }else{
            direccion.classList.remove('is-invalid')
        }
        
        if (password.value == ""){
            errores.push('El password no puede estar vacio')
            password.classList.add('is-invalid')
        }else{
            password.classList.remove('is-invalid')
        }

        if (fecha.value == ""){
            errores.push('La fecha no puede estar vacia')
            fecha.classList.add('is-invalid')
        }else{
            fecha.classList.remove('is-invalid')
        }

        if (imagen.value == ""){
            errores.push('Debes seleccionar una imagen')
            imagen.classList.add('is-invalid')
        } else{
            imagen.classList.remove('is-invalid')}

        if (errores.length > 0){
            let ulErrores = document.querySelector('.errores')
            ulErrores.classList.add("alert-warning")
            ulErrores.innerHTML = ""
            for (let i = 0; i < errores.length; i++) {
                ulErrores.innerHTML += `<li> ${errores[i]} </li>`
            }
        }
        else {
            form.submit()
        }

    })
}