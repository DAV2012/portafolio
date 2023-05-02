export function validarFormulario(input) {

    input.forEach(input => {
        
        const tipoDeInput = input.dataset.tipo
        if(input.validity.valid){
            input.parentElement.classList.remove("input-container--invalid");
            input.parentElement.querySelector(".input-message-error").innerHTML = "";
        }else{
            input.parentElement.classList.add("input-container--invalid");
            input.parentElement.querySelector(".input-message-error").innerHTML =
              mostrarMensajeDeError(tipoDeInput, input); 
        }
    });
  

}



const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];


function mostrarMensajeDeError(tipoDeInput , input){
    let mensaje = ""
    tipoDeErrores.forEach((error)=>{

        if(input.validity[error]){
            console.log(error + " " +input.validity[error] + tipoDeInput)
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje
}

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
    },
    correo: {
        valueMissing: "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },
    
    telefono: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El formato requerido es XXX XXX XXXX 10 números",
    },

    mensaje: {
        valueMissing: "Este campo no puede estar vacío",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres.",
    },
};
