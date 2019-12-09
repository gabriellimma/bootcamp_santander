// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ex10.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/09 14:58:44 by gsilva-l          #+#    #+#             //
//   Updated: 2019/12/09 15:01:02 by gsilva-l         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

Precisamos criar uma função que verifica se duas pessoas são meio irmãos!

Para que você possa resolver este exercício, definimos para você as funções 
'maeDe' e 'paiDe', que, recebendo um 'filho (string)', retorna o 
'nome (string) da mãe ou pai' conforme apropriado. Exemplo:

 paiDe(cleoPires)
"Fábio Júnior"
 maeDe(cleoPires)
"Glória Pires"


Agora é a sua vez de criar as funções: 'temAMesmaMae' que tem dois filhos por 
parâmetro e retornará true ou false se eles realmente compartilharem a mesma mãe. 
Sabendo disso você pode usar a função que nós lhe damos 'maeDe'.

temOMesmoPai que como o anterior, pega dois filhos por parâmetro e retorne 
true oufalse se eles compartilharem o mesmo pai. Sabendo disso você pode 
usar a função que nós lhe damos paiDe.

E saoMeioIrmaos, que, recebendo dois filhos por parâmetro, nos diga se de 
fato são meio-irmãos. Você deve usar as duas funções anteriores aqui. Lembre-se 
que os meios irmãos são dados quando, dois filhos compartilham a mesma mãe, 
mas NÃO o mesmo pai ou vice-versa. Bem, se ambos têm a mesma mãe e o 
mesmo pai, nesse caso eles seriam irmãos! 

-------------------------------------------------------------------------------

function temAMesmaMae(filho1, filho2)
{
return maeDe(filho1) === maeDe(filho2);
}
function temOMesmoPai(filho1, filho2) {
return paiDe(filho1) === paiDe(filho2);
}
function saoMeioIrmaos(filho1, filho2) {
return maeDe(filho1) !== maeDe(filho2) && paiDe(filho1) === paiDe(filho2);
}
