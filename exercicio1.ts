// Descrição do exercício: criar um programa que avalia a média escolar e imprime um resultado.
// Condições de aprovação/reprovação baseadas na média.
// Caso a média seja menor que 4: "Reprovado".
// Caso a média seja maior ou igual a 4 e menor que 7: "Recuperação".
// Caso a média seja maior ou igual a 7: "Aprovado".
// Exemplos práticos com médias e resultados correspondentes.
// Passos para resolver o exercício: declarar variável "média", aplicar condições e imprimir resultado.
// Exemplo de aplicação do programa com diferentes valores de média: 3, 5, 7.

let n1: number = 8
let n2: number = 9

let media: number = (n1 + n2) / 2

if ((media < 4) && (media >= 0)){
    console.log(`Sua média foi ${media}, e você está reprovado!`)
} else if ((media >= 4) && (media < 7)){
    console.log(`Sua média foi ${media}, e você está em recuperação!`)
} else if ((media >= 7) && (media <= 10)){ 
    console.log(`Sua média foi ${media}, e você foi aprovado!`)
} // Usei o else if no final para determinar um limite, sendo no máximo 10 de média