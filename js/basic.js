console.log('Olá, Javascript');

// VARIÁVEIS//

/*declaração de variável
  - utiliza tipagem dinâmica, ou seja, não precisa declarar o tipo da variável
*/
// var nome = 'Mestre Yoda';
// var idade = 100;
// var jedi = true;

// variável undefined (indefinida)
// var filme;

// console.log(nome);
// console.log(idade);
// console.log(jedi);

// saber o tipo da variável
// console.log(typeof nome);
// console.log(typeof idade);
// console.log(typeof jedi);

//---------------------------------//

var userName = 'Priscyla!';

// para acessar a página html, utiliza document
// a propriedade innerHTML seta ou retorna o conteúdo HTML (html interno) de um elemento
// no caso abaixo, está setando a variável userName no id user-name
document.getElementById('user-name').innerHTML = userName;

// OPERADORES MATEMÁTICOS//

// var n1 = 5;
// var n2 = 5;

// var soma = n1 + n2;
// console.log(soma);

// var n1 = 5;
// var n2 = 5;

// var subtracao = n1 - n2;
// console.log(subtracao);

// var n1 = 5;
// var n2 = 5;

// var divisao = n1 / n2;
// console.log(divisao);

// var n1 = 5;
// var n2 = 5;

// var multiplicacao = n1 * n2;
// console.log(multiplicacao);

//OPERADORES DE COMPARAÇÃO//

// var v1 = 5;
// var v2 = 4;

// var resultado = v1 == v2;
// console.log(resultado);

//FUNÇÕES//

// function soma(n1, n2) {
//   console.log(n1 + n2);
// }

// //chamando a função
// soma(5, 100);

// function soma(n1, n2) {
//   return n1 + n2;
// }

// soma(5, 5);

// //não mostra o resultado, pq nesse caso está só somando e devolvendo o resultado, para imprimir esse valor, deve ser salvo numa variável

// var resultado = soma(5, 5);
// console.log(resultado);

// CONTROLE DE FLUXOS COM BDD//

// História de Usuário//
// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletrônicos
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito

// Cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

// var saldoCenario1 = 1000;

// function saqueCenario1(valor) {
//   saldoCenario1 = saldoCenario1 - valor;
// }

// saqueCenario1(500);
// console.log(saldoCenario1);

// Cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// var saldoCenario2 = 1000;

// function saqueCenario2(valor) {
//   if (valor > saldoCenario2) {
//     console.log('Valor do saque superior ao saldo!');
//   } else {
//     saldoCenario2 = saldoCenario2 - valor;
//   }
// }

// saqueCenario2(1001);
// console.log(saldoCenario2);

// Cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo por operação é de 700 reais
// Quando faço um saque no valor de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação

// var saldoCenario3 = 1000;

// function saqueCenario3(valor) {
//   if (valor > saldoCenario3) {
//     console.log('Valor do saque superior ao saldo!');
//   } else if (valor > 700) {
//     console.log('Valor do saque é superior ao máximo permitido por operação!');
//   } else {
//     saqueCenario3 = saqueCenario3 - valor;
//   }
// }

// saqueCenario3(701);
// console.log(saldoCenario3);

// ARRAYS //

//é um objeto onde é possível armazenar um conjunto de dados
//a primeira posição do array é 0

//declarando um array
// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos'];

// //mostrando o dado da posição no array
// console.log(gaveteiro[0]);

// //adicionar um novo elemento(posição) no final da lista
// gaveteiro.push('Cabos');

// //remover último elemento da lista
// gaveteiro.pop();

// //filtrar array para ignorar um elemento
// gaveteiro = gaveteiro.filter(function (p) {
//   return p !== 'Gravatas'
// })

// //filtrar array para trazer um elemento em específico
// gaveteiro = gaveteiro.filter(function (p) {
//   return p === 'Gravatas'
// })

// CONTROLES DE REPETIÇÃO (LOOPS) //

// var personagens = [
//   'Mestre Yoda',
//   'Luke Skywalker',
//   'Princesa Leia',
//   'Darth Vader',
// ];

// FOR EACH//

//percorre o array e imprime o dado de cada posição
// personagens.forEach(function (i) {
//   console.log(i);
// });

// FOR IN//

//percorre a propriedade de um objeto

// sintaxe
// for (var variavel in objeto) {
//   lógica
// }

//percorre a lista e imprime o número da posição
// for (var i in personagens) {
//   console.log(i);
// }

// //percorre a lista e imprime o dado da posição
// for (var i in personagens) {
//   console.log(personagens[i]);
// }

// FOR //

// percorre um bloco de código várias vezes até a determinada condição

// A expressão 1 define uma variável antes do início do loop(deixe i = 0).
// A expressão 2 define a condição para a execução do loop(i deve ser menor que 5).
// A expressão 3 aumenta um valor(i++) cada vez que o bloco de código no loop é executado.

// for (expression 1; expression 2; expression 3) {
//   // code block to be executed
// }

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

// OBJETOS //

//1º forma

// var yoda = {};

// yoda.nome = 'Mestre Yoda';
// yoda.idade = 100;
// yoda.jedi = true;
// yoda.outro_campo = 'alguma coisa';

// console.log(yoda);

//2º forma

// var yoda = {
//   nome: 'Mestre Yoda',
//   idade: 100,
//   jedi: true,
// };

// console.log(yoda);

//pode implementar uma função dentro do objeto

// var yoda = {
//   nome: 'Mestre Yoda',
//   idade: 100,
//   jedi: true,
//   mostraIdade: function () {
//     console.log(this.idade);
//   },
// };

// console.log(yoda);

// //invocar função
// yoda.mostraIdade();

// CONSTANTES //

// const nome = 'Darth Vade';
// console.log(nome);

// //não posso passar um novo valor para a variável nome, pq está declarada como const
// nome = 'Mestre Yoda';
// console.log(nome);
