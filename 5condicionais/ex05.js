// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ex05.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/07 19:11:05 by gsilva-l          #+#    #+#             //
//   Updated: 2019/12/07 19:11:37 by gsilva-l         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

Agora, precisamos de suas ótimas habilidades para definir a função sinal, 
que, dado um número, retorna apenas um dos seguintes valores:

1, se o número é positivo
0 se o número é zero
-1, se o número é negativo

Portanto, vamos definir a função sinal que recebe um número para 
alcançar o objetivo desejado. DICA: Lembre-se que você pode precisar 
usar mais de um if.

-------------------------------------------------------------------------------

function sinal(num1)
{
  if (num1 > 0)
  {
    return "1";
  }

  if (num1 == 0)
  {
    return "0";
  }

  else
  {
    return "-1";
  }
}
