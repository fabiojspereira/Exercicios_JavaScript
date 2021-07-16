/* VETORES */
/*
let vetor_001 = [10,20,30,40,50];
vetor_001[2] = 60;
vetor_001[2] = "30";
console.log(vetor_001[2]);
*/

/*
let vetor_002 = [];
for (let contador = 0; contador < 100; contador ++){
    vetor_002.push(contador);
}

console.log(vetor_002);
*/

/*
let vetor_003 = [10,20,30,40,50,60,70,80,90,100];

for (let contador = 0 ; contador < vetor_003.length; contador ++){
    console.log(vetor_003[contador]);
}
console.log("Tamanho do Vetor_003 = ",vetor_003.length);
*/

let vetor_004 = [10,20,30,40,50,60,70,80,90,100];
/* Imprime o valor percorrendo todo o vetor */
console.log("INÍCIO DO PROGRAMA")
console.log("Imprimindo usando let of")
for (let valor of vetor_004){
    console.log(valor);
}

/* Imprime o valor percorrendo todo os índices */
console.log("Imprimindo usando let in")
for (let indice in vetor_004){
    console.log(indice);
    console.log(vetor_004[indice]);
}

console.log("INÍCIO DO EXEMPLO DE MATRIZ")
let matriz_001 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let linha of matriz_001){
    for (let elemento of linha){
        /* console.log("LINHA : ",linha); */
        /* console.log("ELEMENTO : ",elemento);*/
        console.log(linha);
        console.log(elemento);
    }

}