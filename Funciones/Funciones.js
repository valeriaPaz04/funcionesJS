function saludar(){
    let texto = document.getElementById('miInput').value;

    if (texto == ""){
        document.getElementById('resultado').innerText="Requiere un texto ❗"
        document.getElementById('miInput').style.backgroundColor='red';
    }
    else{
        document.getElementById('resultado').innerText=texto;
        document.getElementById('miInput').value="";

        //cambiar color al boton
        document.getElementById('boton').style.backgroundColor="#102c54"
        //cambiar color a la letra
        document.getElementById('boton').style.color="#fff"
        //cambiar texto del boton
        document.getElementById('boton').innerText="Funcionó ✅"
    }
}

function calcular(){
    let numero1 = parseInt(document.getElementById('n1').value);
    let numero2 = parseInt(document.getElementById('n2').value);

    let operacion = document.getElementById('operacion').value;

    if (operacion == "sumar"){
        document.getElementById('resultadoCalculadora').innerText=numero1 + numero2;
    }
    else if(operacion == "restar"){
        document.getElementById('resultadoCalculadora').innerText=numero1 - numero2;
    }
    else if(operacion == "multiplicar"){
        document.getElementById('resultadoCalculadora').innerText=numero1 * numero2;
    }
    else if(operacion == "dividir"){
        if(numero2 == 0){
            document.getElementById('resultadoCalculadora').innerText="No se puede dividir por 0 😢";
        }
        else{
            document.getElementById('resultadoCalculadora').innerText=numero1 / numero2;
        }
    }
    else{
        document.getElementById('resultadoCalculadora').innerText="Opción Invalida ❌"
    }
}