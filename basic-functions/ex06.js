// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ex06.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/07 18:53:21 by gsilva-l          #+#    #+#             //
//   Updated: 2019/12/07 18:54:05 by gsilva-l         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// Já vimos que podemos fazer cálculos matemáticos simples e de maior complexidade.

// Agora vamos para algo mais interessante.

// Queremos criar funções que nos permitam calcular a área e o perímetro de
// um círculo.

// Vamos criar uma função perimetro que nos diga o perímetro de um círculo quando
// damos a ele o raio como parâmetro.

// Também a função area que nos dá a área de um círculo quando recebe o raio
// como parâmetro.

// -------------------------------------------------------------------------------

function perimetro(raio) {
	return 3.14 * raio * 2;
}

function area(raio) {
	return 3.14 * raio * raio;
}
