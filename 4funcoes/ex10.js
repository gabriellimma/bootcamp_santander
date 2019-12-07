// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ex10.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/07 19:00:06 by gsilva-l          #+#    #+#             //
//   Updated: 2019/12/07 19:00:55 by gsilva-l         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

Além das funções vistas no exercício anterior, existe uma função já definida 
em JavaScript que é muito importante: Math.random (). Essa função gera um 
número aleatório decimal entre 0 e 1, e é a base para muitos cálculos usados 
na programação.

  Math.random()
 0.056

  Math.random()
 0.178

Escreva uma função gerarProbabilidade(), que não recebe parâmetros e 
retorna a porcentagem de probabilidade de chuva, calculada aleatoriamente 
usando Math.random ().

-------------------------------------------------------------------------------

function gerarProbabilidade()
{
  return Math.random();
}
