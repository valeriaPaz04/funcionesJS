// Saludar - Ejercicio 1
document.getElementById('miBoton').addEventListener('click', ()=>{

    let saludo = document.getElementById('miInput').value;

    if (saludo == ""){
        document.getElementById('resultado').innerText="Requiere un nombre ❗";
        document.getElementById('miInput').style.backgroundColor='red';
    }
    else{
        document.getElementById('resultado').innerText="Hola" + " " + saludo;
        document.getElementById('miInput').value="";
    }

});

// Sumar - Ejercicio 2
document.getElementById('botonSumar').addEventListener('click', ()=>{
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    if(isNaN(numero1) || isNaN(numero2)){
        document.getElementById('resultadoSuma').innerText='Ingrese números válidos ❌';
        document.getElementById('resultadoSuma').style.background="red";
        document.getElementById('resultadoSuma').style.color="#fff";
    }
    else{
        document.getElementById('resultadoSuma').innerText=(numero1+numero2).toLocaleString();
    }
});

//Utilizamos Función Flecha - Ejercicio 3
document.getElementById('botonCompra').addEventListener('click', ()=>{

    let producto=document.getElementById('producto').value;
    let cantidad=parseInt(document.getElementById('cantidad').value);
    let precio=parseFloat(document.getElementById('precio').value);

    if(producto=="" || cantidad=="" || precio==""){
        document.getElementById('resultado_Compra').value='Llene todos los campos ❌';
        document.getElementById('resultado_Compra').style.background="red"
        document.getElementById('resultado_Compra').style.color="#fff"
    }
    else{
        if(cantidad<1){
            document.getElementById('resultado_Compra').value='La cantidad no puede ser cero ❌';
            document.getElementById('resultado_Compra').style.background="red"
            document.getElementById('resultado_Compra').style.color="#fff"
        }
        else if(precio<1){
            document.getElementById('resultado_Compra').value='El precio no puede ser cero ❌';
            document.getElementById('resultado_Compra').style.background="red"
            document.getElementById('resultado_Compra').style.color="#fff"
        }
        else{
            document.getElementById('resultado_Compra').value=(cantidad*precio).toLocaleString();
        }
    }
});