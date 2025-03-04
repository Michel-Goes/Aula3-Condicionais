// Exercício de programação: impressão de mensagem de saldo em um sistema financeiro.
// Identificação do problema na exibição da moeda de forma errada mesmo com saldo igual a R$ 1.
// Definição da variável de saldo.
// Criar a mensagem com operador ternário para exibir a moeda corretamente ("real" ou "reais").
// Exemplos de mensagens corretas para diferentes saldos.
// Explicação sobre inferência de tipos no TypeScript e a importância de tipar a variável.
// Correção do erro na comparação do saldo com 1 e a necessidade de tipagem.
// Teste do código com diferentes valores de saldo para validar a funcionalidade da mensagem.

let saldo: number = 50
let msg = `Você possui ${saldo}`
let plural_ou_singular = saldo == 1 ? ' real em sua conta' : ' reais em sua conta' 
console.log(msg + plural_ou_singular)