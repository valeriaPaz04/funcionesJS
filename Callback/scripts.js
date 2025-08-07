//Función flecha
//crear flecha: se declara con const nombre_funcion =() =>{}

const calcular = () =>{

    //declarar variables
    let cantidad=parseInt(document.getElementById('cantidad').value);
    let precio=parseFloat(document.getElementById('precio').value);
    let producto=document.getElementById('producto').value;

    //validadciones
    if(isNaN(cantidad) || isNaN(precio) || producto==""){
        alert("Llene todos los campos ❗");
    }
    else{
        //crear Variable calculos
        let subtotal=(cantidad*precio);
        let iva=subtotal*0.19;
        let total=(subtotal+iva).toLocaleString();

        document.getElementById('iva').value=iva.toLocaleString();
        document.getElementById('total').value=total;
    }
}

//se usa callback
document.getElementById('calcular').addEventListener("click", calcular);

// callback es usar un evento para llamar una función

const calcularEdad = () =>{

    //declarar variables
    let añoUser = parseInt(document.getElementById('año').value);
    let fechaActual = new Date();
    let añoActual = fechaActual.getFullYear();

    //validaciones
    if(isNaN(añoUser)){
        alert("Debe ser entero.")
    }
    else{
        let edad=añoActual-añoUser
        document.getElementById('edadPersona').innerText="Edad:" + " " + edad;
    }
}

document.getElementById('edad').addEventListener("click", calcularEdad)