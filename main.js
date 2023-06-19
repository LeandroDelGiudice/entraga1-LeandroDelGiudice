/* conversor de distintos tipos de dolar */
/* este conversor solicita el monto en pesos a cambiar y el tipo de dolar y da el resultado  */
function conversor(monto, tipoDolar){
let blue= 487;
let mep= 480;
let oficial= 289;
if(tipoDolar == "blue") {
    console.log (Math.floor(monto / blue)+ " dolar/es")
}
if (tipoDolar == "mep"){
    console.log (Math.floor(monto / mep)+ " dolar/es")
}
if (tipoDolar == "oficial"){
    console.log (Math.floor(monto / oficial)+ " dolar/es")
}
}
let monto =Number( prompt ("ingrese un monto en pesos"));

let tipoDolar = prompt("¿que tipo de dolar desea cotizar: oficial, mep o blue?");

switch(tipoDolar){
    case "blue":
       console.log ("Seleccionaste dolar Blue");
       break;
    case "mep":
       console.log ("Seleccionaste dolar mep");
       break;
    case "oficial":
       console.log ("Seleccionaste dolar oficial");
       break;
    default:
        console.log("La divisa a cotizar no es valida")

}
conversor(monto, tipoDolar)





