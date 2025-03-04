const age: number = 14

// Abaixo de 18 anos é menor de idade
// Acima de 18 anos e menor de 65 anos é adulto
// Acima de 65 anos é idoso

if (age <= 17){
    console.log(`Sua idade é ${age}, você é menor de idade`)
} else if ((age >= 18) && (age < 65)){
    console.log(`Sua idade é ${age}, e você é adulto`)
} else{
    console.log(`Sua idade é ${age}, e você é idoso`)
}