
var nome = "Erik";
console.log(nome) //exemplo do var

if(true){
    var cidade = "Joinville";
}
console.log(cidade) //Funciona!
 //Var nao respeita o escopo de bloco, só escopo de função




let idade = "17"; //nao deixa redeclaração no mesmo escopo, deve ser declarado antes de ser usado,
console.log(idade)





const genero = "Masculino" // A variável const é eterna, nao pode ser redeclarada nem reatribuida dentro do mesmo escopo
console.log(genero)


if(true){
let JogoFavorito = "Terraria";
const SagaFavorita = "Resident Evil";
console.log(JogoFavorito); //Funcional
console.log(SagaFavorita);  //funcional
}
console.log(JogoFavorito); //ERRO! variável JogoFavorito nao esta definida fora do bloco
console.log(SagaFavorita); //ERRO! vairável SagaFavorita nao esta definida fora do bloco
//para evitar erros, essas variáveis apenas funcionam em seus escopos/blocos, diferente do var