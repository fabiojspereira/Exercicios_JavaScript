/*
let estasol = true;

if(estasol){
    console.log("Vou para a praia !");
}
else {
    console.log("Vou para a montanha...")
}
*/

/*
let numero = 7;

if (numero >0){
    console.log("Número positivo.");
}
else if (numero == 0){
    console.log("O número é ZERO.");
}
else {
    console.log("Número negativo")
}
*/

/*
let numero = 4;
let paridade = numero % 2 == 0 ? "par" : "impar";
console.log(paridade);
*/

/*
let sinal = "azul";

switch(sinal){
    case "verde":
        console.log("Pode passar.");
        break;
    case "amarelo":
        console.log("Prestes a fechar. Cuidado !");
        break;
    case "vermelho":
        console.log("Fechado. PARE !");
        break;
    default :
        console.log("Sinal inválido...")
}
*/

let hoje = new Date().getDay(); 
let dia;

switch (hoje) {
  case 0:
    dia = "Domingo";
    break;
  case 1:
    dia = "Segunda";
    break;
  case 2:
     dia = "Terça";
    break;
  case 3:
    dia = "Quarta";
    break;
  case 4:
    dia = "Quinta";
    break;
  case 5:
    dia = "Sexta";
    break;
  case 6:
    dia = "Sábado";
}
console.log(dia);
