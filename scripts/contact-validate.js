/* Este script funciona como validacion de formularios en la seccion Contacto */

function validarDatos(){
    
    let nombre=document.getElementById("nombre").value;    
    let correo=document.getElementById("email").value;    
    let pais=document.getElementById("pais").value;
    let asunto=document.getElementById("titulo").value;    
    let mensaje=document.getElementById("subject").value;    

    if(nombre.length==0 && correo.length==0 && asunto.length==0 && mensaje.length==0){
        alert("Todos los campos están vacíos. No se enviaron datos por su seguridad.");
        console.log("Ningun dato fue enviado.");
        return;
    }
    else{
        if(nombre.length==0){
            alert("El nombre esta vacio");
            console.log("El campo nombre esta vacio.");
            return;
        }
        else{
            if(nombre.length>50){
                alert("No se puede registrar el nombre. Supera los 50 caracteres.");
                console.log("Nombre supera los 50 caracteres.");
            }
        }

        if(correo.length==0){
            alert("El correo electronico esta vacio.");
            console.log("El campo Correo esta vacio.");
            return;
        }
        else{
            /* Campos requeridos en el correo. Arreglar*/
            const arroba = "@";
            const punto = ".";
            for(car=0; car<correo.length; car++){
                console.log("El correo tiene "+correo.length+" caracteres");
                if(!correo.includes(arroba) || !correo.includes(punto)){
                    alert("Digite @ o . en el campo Correo. Este campo es requerido. Tiene formato: ejemplo@correo.com");
                    console.log("Falta @ y/o . en el campo Correo. ");
                    return;
                }                
            }
            if(correo.length>50){
                alert("El nombre esta vacio");
                console.log("El campo nombre esta vacio.");
                return;
            }
        }

        if(asunto.length==0){
            alert("No contiene asunto. Este campo es requerido.");
            console.log("El campo Asunto esta vacio.");
            return;
        }
        else{
            if(asunto.length>50){
                alert("El nombre esta vacio");
                console.log("El campo Asunto excede los 50 caracteres.");
                return;
            }
        }

        if(mensaje.length==0){
            alert("El mensaje esta vacio. Los datos no fueron enviados.");
            console.log("El campo Mensaje esta vacio.");
            return;
        }
        else{
            if(mensaje.length>300){
                alert("El mensaje supera los 300 caracteres.");
                console.log("El campo Mensaje tiene mas de 300 caracteres. Los datos ingresados no fueron enviados");
                return;
            }
        }
        console.log("Los datos fueron enviados. ");
        document.submit
    }
}
