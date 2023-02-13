let figura = prompt ("Escriba 'TRIANGULO' , 'CUADRADO' o 'CIRCULO', dependiendo del área que desea calcular. Para salir escriba 'fin'");
const pi = 3.14;

function areatriangular(base, altura){
        
    console.log("la base mide " + base +"cm");
    console.log("la altura mide " + altura+"cm");
    return (base * altura)/2;
}

function areacuadrado(base, altura){
        
    console.log("la base mide " + base +"cm");
    console.log("la altura mide " + altura +"cm");
    return (base * altura);
}

function areacirculo(a, radio){
        
    console.log("el radio mide " + radio +"cm");
    return (pi * (radio*radio));
}

while (figura.toUpperCase() != "FIN"){
    
    switch (figura.toUpperCase()) {

        case "TRIANGULO": 
            alert("Calcularemos el área de su triángulo");        
            let base = Number(prompt("ingrese el valor de la base expresado en cm"));
            let altura = Number(prompt("ingrese el valor de la altura expresada en cm"));
            let triangulo = areatriangular(base, altura);
            alert("el área de su triángulo mide: " + triangulo + "cm2");
            console.log("el área de su triángulo mide: " + triangulo + "cm2");
            break;

        case "CUADRADO":
            alert("Calcularemos el área de su cuadrado");
            let base1 = Number(prompt("ingrese el valor de la base expresado en cm"));
            let altura1 = Number(prompt("ingrese el valor de la altura expresada en cm"));
            let cuadrado = areacuadrado(base1, altura1);
            alert("el área de su cuadrado mide: " + cuadrado + "cm2");
            console.log("el área de su cuadrado mide: " + cuadrado + "cm2");
            break;

        case "CIRCULO":
            alert("Calcularemos el área de su círculo");
            let radio = Number(prompt("ingrese el valor del radio expresado cm"));
            let circulo = areacirculo(pi,radio);
            alert("el área de su círculo mide: " + circulo + "cm2");
            console.log("el área de su círculo mide: " + circulo + "cm2");
            break;
        
        case "FIN":
            figura = "FIN"
            break;

        default:
            alert ("Lo sentimos. La figura " + "(" + figura + ")" + ", no fue reconocida");
            break;
            
    }

    figura = prompt ("Escriba 'TRIANGULO' , 'CUADRADO' o 'CIRCULO', dependiendo del área que desea calcular. Para salir escriba 'fin'");

}