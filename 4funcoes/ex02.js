// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ex02.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/07 18:46:15 by gsilva-l          #+#    #+#             //
//   Updated: 2019/12/07 18:48:32 by gsilva-l         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

Vamos começar com o básico:

As funções consistem em 4 partes. A palavra reservada function, o nome com 
o qual vamos chamar a função, os parênteses onde irá os parâmetros 
(Caso a função não precise de parâmetros, ainda sim, devemos colocar os parenteses),
as {} chaves que dentro teremos o código que queremos que a função execute .

Se quisermos que uma função retorne um valor, precisaremos da palavra-chave return. 
Depois disso, tudo o que queremos irá retornar.

Com as funções, podemos fazer muitas coisas, mas vamos começar com algo fácil. 
Veja esse exemplo onde a função a seguir dobra o valor do número que passamos para ela:

function dobro(numero) {
   return numero*2;
}
Como podemos ver, acima nós declaramos uma função com a palavra reservada 
function e o nome dobro. Entre os parênteses, colocamos o parâmetro numero que 
será substituído pelo número que damos ao fazer a chamada da função. 
Para terminar, com a palavra return dizemos que queremos que a função retorne 
2 vezes o numero que lhe demos.

Para executar a função e fazer o que queremos, 
nós precisamos chamá-la pelo nome e digitar o número que 
desejamos usar entre os parênteses.

dobro(5);   //Isto irá devolver 10
dobro(1.5); //E isto irá devolver 3

-------------------------------------------------------------------------------

//function(){return}
