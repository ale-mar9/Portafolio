
/*Errores del formulario */
const formulario= document.getElementById("contenido")
const input = document.getElementsByName("input")

const expresiones ={
    nombre: /^[a-zA-z\s]{1,40}$/,
    apellido: /^[a-zA-z\s]{1,40}$/,
    correo: /\w+\@\w{1,7}\.com/gi,
    mensaje:/^[a-zA-z\s]{1,40}$/
}

const campos={
    nombre:false,
    apellido:false,
    correo:false,
    mensaje:false
}


const validarFormulario=(e)=>{
    switch(e.target.id){
        case "nombre":
            correctoIncorrecto(expresiones.nombre, e.target, "nombre")
        break;
        case "apellido":
            correctoIncorrecto(expresiones.apellido, e.target, "apellido")
        break;
        case "correo":
            correctoIncorrecto(expresiones.correo, e.target, "correo")
        break;
        case "mensaje":
            correctoIncorrecto(expresiones.mensaje, e.target, "mensaje")
        break;
    }
}

function correctoIncorrecto(expresion, input, campo){
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove("formulario_grupo_incorrecto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario_grupo_correcto");
        campos[campo]=true
    }else{
        document.getElementById(`grupo__${campo}`).classList.remove("formulario_grupo_correcto");
        document.getElementById(`grupo__${campo}`).classList.add("formulario_grupo_incorrecto");
        campos[campo]=false
    }
}

input.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
})

/*Boton enviar */
const cargando = document.getElementById("loading");
const boton = document.getElementById("boton");
const enviado = document.getElementById("enviado");


const mensaje=()=>{enviado.style.display="flex"; enviado.style.flexDirection="column"}; 

const cargar=()=>{
    if(campos.nombre && campos.apellido && campos.correo && campos.mensaje){
        document.getElementById("mensajeRellenar").classList.remove("mensajeIncorrecto")
        setTimeout(()=>{cargando.style.display="flex"; cargando.style.flexDirection="column"; boton.style.display="none"}, 600)
        setTimeout(mensaje,3000);
        boton.classList.add("botonCorrecto")
    } else if(campos.nombre | campos.apellido | campos.correo | campos.mensaje === false){
        document.getElementById("mensajeRellenar").classList.add("mensajeIncorrecto")
        boton.classList.remove("botonCorrecto");
        boton.classList.add("botonIncorrecto");
    }
}

boton.addEventListener("click", cargar);
