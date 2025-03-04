const numero = 6
const par_ou_impar = numero % 2

// if (par_ou_impar == 0){
//     console.log(`O número ${numero} é PAR`)
// } else{
//     console.log(`O número ${numero} é ÍMPAR`)
// }

// TERNÁRIO - É a abreviação da condição else/if

par_ou_impar == 0 ? console.log(`O número ${numero} é PAR`) : console.log(`O número ${numero} é ÍMPAR`)

// Um outro exemplo de ternário logo abaixo, sem o console.log()

// let resultado = par_ou_impar == 0 ? `O número ${numero} é PAR` : `O número ${numero} é ÍMPAR`
// console.log(resultado)