import { validar} from "./validacion_regex.js";
import { validarFormulario } from "./validar-validity.js";





const formulario = document.getElementById("form");
const inputs = document.querySelectorAll("form [data-tipo]")

formulario.addEventListener("focusout" , (e) => {
   e.preventDefault();
   if(e.target && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA")){
        validar(e.target);
        
   }
   
})

formulario.addEventListener("submit", (e)=>{
      e.preventDefault();
      validarFormulario(inputs);
})



  
      




// formulario.forEach((e)=>{
//     e.addEventListener("blur" , (e) =>{
//         validar(e)
//     })
// })

