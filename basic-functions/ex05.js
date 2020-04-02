// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ex05.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/07 18:50:21 by gsilva-l          #+#    #+#             //
//   Updated: 2019/12/07 18:50:58 by gsilva-l         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// Tendo essas pequenas funções, podemos combiná-las para fazer coisas
// mais complexas.

// Por exemplo, se quisermos adicionar dois números e depois multiplicá-los
// por 3, poderíamos fazê-lo da seguinte maneira:

function somaPorTres(num1, num2) {
	var resultadoDaSoma = add(num1, num2);
	return resultadoDaSoma * 3;
}
// Aqui vemos que tendo a função somar() definida, podemos
// chamá-la dentro de outra função e tornar o trabalho mais fácil.

// Crie função dobroDoProximo() que recebe um parâmetro e nos
// retorna duas vezes mais que o próximo, ou seja, parâmetro + 1.

// -------------------------------------------------------------------------------

function dobroDoProximo(numero1) {
	return numero1 + numero1 + 2;
}
