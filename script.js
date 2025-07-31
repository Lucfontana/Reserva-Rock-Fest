// Se trae el formulario desde el HTML con su ID
const formulario = document.getElementById("formulario");

// Se crea una escucha para cuando se envíe el formulario,
// cuando esto ocurra, se previene que se envíe y se comienzan
// a traer las variables obtenidas desde los formularios

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    // Se traen los resultados de las variables

    // trim() se usa para sacar los espacios al inicio y final del 
    // input ingresado por el usuario
    const nombre = String(document.getElementById("nombre").value.trim());
    const numEntradas = Number(document.getElementById("numero-entradas").value);
    const tipoEntrada = String(document.getElementById("tipo-entrada").value);
    const codDescuento = String(document.getElementById("codigo-descuento").value);

    //Elementos de los mensajes posibles a mostrar
    const error = document.getElementById("error");
    const confirmacion = document.getElementById("confirmacion");
    const msj = document.getElementById("mensaje");

    //Se declaran variables que serán usadas para el calculo
    //de los precios
    let precioFinal;
    let descuento;


    error.textContent="";
    msj.textContent="";
    confirmacion.textContent="";
    //Validaciones para cuando algo esta mal
    if (nombre == ""){
        error.textContent +="Su nombre no debe estar vacío; ";
        return;
    }
    if (numEntradas == ""){
        error.textContent+="No ingresó cantidad de entradas; "; 
        return;
    }
    if (codDescuento !== "" && codDescuento !== "ROCK10" ) {
        error.textContent+="Código inválido, vuelva a intentar";
        return;
    } else {



    //Si no hay errores se va al siguiente paso; comienza a realizar los calculos
    if  (nombre !== "" && numEntradas !== "" && tipoEntrada !== "" && (codDescuento === "" || codDescuento === "ROCK10")) {
        
        //Switch para diferenciar los distintos tipos de valores
        //que pueden ser ingresados
        switch (tipoEntrada) { 
            case "General":
                precioFinal = numEntradas * 1000;   
                break;
            case "VIP":
                precioFinal = numEntradas * 2000
                break;
            case "Platino":
                precioFinal = numEntradas * 3000;
                break;
            default:
                error.textContent = "Tipo de entrada no reconocido";
        }
        confirmacion.textContent = "Su transacción se ha realizado correctamente";  

    //Caso opcional donde el codigo es correcto, se calcula el descuento,
    //se cambia el precio final y se suma otro valor a confirmacion
    if (codDescuento === "ROCK10") {
        descuento = (10 * precioFinal) / 100;
        precioFinal = precioFinal - descuento;
        confirmacion.textContent += ". Se le ha aplicado descuento del 10%.";  
    }  
    msj.textContent = "Hola, " + nombre + ", has comprado " + numEntradas + " entradas de tipo " + tipoEntrada + " con un precio total de: " + precioFinal + " pesos uruguayos.";
    error.textContent = ""; //Se pone vacío porque todo funciona
    } 
    }
    
});