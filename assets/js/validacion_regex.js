export function validar (input){
  const tipoExprecion= input.dataset.tipo
  
  if(expresiones[tipoExprecion].test(input.value)){
    
    input.parentElement.classList.remove("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  }else {
    input.parentElement.classList.add("input-container--invalid");
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(input);
    }

}



function mostrarMensajeDeError (tipoDeInput){
    
  return errores[tipoDeInput.dataset.tipo]
   
}

const errores = {
  usuario: "Letras, numeros, guion y guion_bajo",
	nombre: "Letras y espacios, pueden llevar acentos",
	password: "4 a 12 digitos",
	correo: "El correo no es valido",
	telefono: " el telefono debe tener 10 numeros",
  mensaje: "Letras, numeros, guion y guion_bajo"
}


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10}$/, // 7 a 14 numeros.
  mensaje: /^[a-zA-Z0-9\_\-]{1,16}$/, // Letras, numeros, guion y guion_bajo
}