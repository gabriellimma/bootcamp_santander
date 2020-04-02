// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ex08.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/07 18:56:29 by gsilva-l          #+#    #+#             //
//   Updated: 2019/12/07 18:57:01 by gsilva-l         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// Para uma conferência importante, os organizadores nos pediram para escrever
// os cartões de identificação que cada participante terá.

// Para isso, temos que colocar seu nome, seu sobrenome e seu título
// (dr., dra., lic., etc) e montar uma única string.
// Escreva a função escreverCartao, que recebe como parâmetros um título,
// um nome e um sobrenome e retorna uma única string como resultado. Por exemplo:

escreverCartao("Dra.", "Ana", "Pérez");
("Dr. Ana Pérez");

// -------------------------------------------------------------------------------

function escreverCartao(titulo, nome, sobre) {
	return titulo + " " + nome + " " + sobre;
}
