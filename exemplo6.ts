// Operador lógico && (AND)
/* Este operador verifica se todas as variáveis introduzidas são 
verdadeiras*/
// ---------------------------------------------------------------------
// Operador lógico || (OR)
/*Este operador verifica se pelo menos uma das variáveis introduzidas é 
verdadeira*/

let possui_ingresso: boolean = true
let idade_minima = 16
let pais_acompanhando: boolean = false
let minha_idade = 21

if ((possui_ingresso && (minha_idade >= 16) || (possui_ingresso && pais_acompanhando))){
    console.log("Boa festa!")
} else{
    console.log("Infelizmente eu não posso te deixar entrar")
}