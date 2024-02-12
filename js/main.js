let precioCompra;
let monedaCompra;

while (true) {
    precioCompra = parseInt(prompt("Ingrese el monto por el que pagó el producto online"));
    if (!isNaN(precioCompra) && precioCompra != null && precioCompra != ""){
        break;
    }else{
        alert("El valor ingresado no es válido, debe poner un número.");
        continue; 
    }
}
while(true){
    monedaCompra = prompt("En qué moneda se realiza la compra (Disponibles: USD, EUR, REAL, PESOS)");

    if (
        monedaCompra != "" &&
        (monedaCompra === "USD" || monedaCompra === "EUR" || monedaCompra === "REAL" || monedaCompra === "PESOS")
    ) {
        break;
    } else {
        alert("Por favor, asegúrese de poner una moneda disponible. Escríbalo igual que en el aviso. Ejemplo: USD");
        continue;
    }
}
let precioEnPesos;
switch(monedaCompra){
    case "USD":
        precioEnPesos = precioCompra * 850;
        break;
    case "EUR":
        precioEnPesos = precioCompra * 896;
        break;
    case "REAL":
        precioEnPesos = precioCompra * 168;
        break;
    case "PESOS":
        precioEnPesos = precioCompra * 1;
        break;
    default:
        precioEnPesos = precioCompra * 1;
        break;
}
document.write("El valor de su compra sin impuestos es de: " + precioEnPesos + " ARS" + "<br/>");
console.log("El valor de su compra sin impuestos es de: " + precioEnPesos + " ARS");
//APLICO IMPUESTOS
let impuestoPais = 0.3;
let impuestoGanancia = 0.45;
function calculoPais(){
    return (precioEnPesos * impuestoPais)
}
document.write("De impuesto país se le cobrará: " + calculoPais() + " ARS" + "<br/>");
console.log("De impuesto país se le cobrará: " + calculoPais() + " ARS")
function calculoGanancia(){
    return (precioEnPesos * impuestoGanancia)
}
document.write("De impuesto a las ganancias se le cobrará: " + calculoGanancia() + " ARS" + "<br/>");
console.log("De impuesto a las ganancias se le cobrará: " + calculoGanancia() + " ARS")
function sumaImpuestosProducto(){
    return (precioEnPesos + calculoGanancia() + calculoPais());
}
document.write("Para dar un total de: " + sumaImpuestosProducto() + " ARS" + "<br/>");
console.log("Para dar un total de: " + sumaImpuestosProducto() + " ARS");