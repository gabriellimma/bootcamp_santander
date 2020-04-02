// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ex12.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/09 15:48:13 by gsilva-l          #+#    #+#             //
//   Updated: 2019/12/09 15:49:34 by gsilva-l         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// Chegamos longe o suficiente para entender que as funções temAMesmaMae e
// temOMesmoPai são proposições genéricas A e B. Além disso, se representarmos
// a operação que executa saoMeioIrmaos com o símbolo ⊻ o que temos é ...
// uma nova tabela verdade!

// A	B	A ⊻ B
// V	V	F
// V	F	V
// F	V	V
// F	F	F

// Este comportamento existe como um operador dentro da lógica e é
// chamado xor ou disjunção lógica exclusiva.
// Ao contrário de e eou, o xor geralmente não é definido nas linguagens
// de programação.  No entanto, agora que você sabe como funciona, se precisar,
// você pode defini-lo manualmente.

// Vamos ver se você entendeu: Defina a função xor, que pega dois valores booleanos
// como parâmetro e retorna o valor correspondente de acordo com a tabela.
// DICA: é mais simples do que você pensa, você pode resolvê-lo na mesma
// linha do return e talvez você tenha que usar o símbolo de negação !.

// -------------------------------------------------------------------------------

function xor(a, b) {
	return a != b;
}
