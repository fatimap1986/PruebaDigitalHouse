window.onload = function() {

    let formulario = document.querySelector('.formLogin');
    
    formulario.addEventListener("submit", (e) => { 
        e.preventDefault()
    
        let errores = [];
    
        let usuario = document.querySelector('#usuario')
        let direccion = document.querySelector('#direccion')
    
        if (usuario.value == ""){
            errores.push('Este campo no debe estar vacio')
            usuario.classList.add('is-invalid')
        }else{
            usuario.classList.remove('is-invalid')
        }
        
        if (direccion.value == ""){
            errores.push('Este campo no debe estar vacio')
            direccion.classList.add('is-invalid')
        }else{
            direccion.classList.remove('is-invalid')
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