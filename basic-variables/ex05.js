//# **************************************************************************** #
//#                                                                              #
//#                                                         :::      ::::::::    #
//#    ex05                                               :+:      :+:    :+:    #
//#                                                     +:+ +:+         +:+      #
//#    By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+         #
//#                                                 +#+#+#+#+#+   +#+            #
//#    Created: 2019/12/07 18:17:16 by gsilva-l          #+#    #+#              #
//#    Updated: 2019/12/07 18:19:29 by gsilva-l         ###   ########.fr        #
//#                                                                              #
//# **************************************************************************** #

// Vimos como declarar uma variável e atribuir um valor a ela e, provavelmente,
//  agora você se pergunta, e qual é a utilidade de armazenar dados em variáveis?

// As variáveis nos permitem reutilizar os dados atribuídos, s
// implesmente invocando seu nome.

// var numero  = 124;
// console.log(numero);
// // Podemos usar console.log para imprimir o valor que tem atribuído à variável numero.
// E seu resultado será 124.
// Algo muito importante também, é, assim como podemos fazer operações matemáticas
// como adicionar (+) ou subtrair (-) números, podemos fazer o mesmo com as variáveis
// que os referenciam.

// Por exemplo:

// var numero = 124;
// var numeroSeguinte = numero + 1;
// console.log(numeroSeguinte);
// // O resultado que será impresso na tela será o valor atribuído a variável
// numero somado a 1, portanto, o valor atribuído a numeroSeguinte será 125.
// Vamos ver se está entendido:
// Declare e atribua duas variáveis, numeroA e numeroB,
// e então nas variáveis resultadoSoma,resultadoSubtracao,
// resultadoMultiplicacao eresultadoDivisao armazene os cálculos
// feitos utilizando numeroA e numeroB nas variáveis de resultado,
// de modo que o cálculo matemático se altere de acordo com o título da variável,
// por exemplo.

// Exemplo var resultadoSoma = (numeroA + numeroB) Como nossa variável resultadoSoma
// indica nós devemos fazer uma soma utilizando as variáveis numeroA e numeroB.
//  Lembre-se, você pode mostrar os resultados imprimindo cada um deles na aba _Consola
//  ao lado da aba Solução, usando console.log ().

// Exemplos:
// soma: a + b
// subtração: a - b
// multiplicação: a * b
// divisão: a / b

// ------------------------------------------------------------------------------------------------------------
var numeroA = 10;
var numeroB = 5;

var resultadoSoma = numeroA + numeroB;
var resultadoSubtracao = numeroA - numeroB;
var resultadoMultiplicacao = numeroA * numeroB;
var resultadoDivisao = numeroA / numeroB;
