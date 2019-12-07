// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ex04.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/07 19:10:02 by gsilva-l          #+#    #+#             //
//   Updated: 2019/12/07 19:10:30 by gsilva-l         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

Ok, vamos ver outro exercício para reforçar o funcionamento do if eelse.

Defina a função eMaior, que recebe dois números por parâmetro, e retorna o 
maior entre eles.

Por exemplo, se passarmos 4 e 5, retornará 5 porque é o maior entre eles, 
e se passarmos 10 e 4, ele retornará 10.

-------------------------------------------------------------------------------

function eMaior(num1, num2)
{
  if (num1 > num2)
  {
    return num1;
  }

  else (num2 > num1)
  {
    return num2;
  }

}
