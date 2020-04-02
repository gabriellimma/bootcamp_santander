// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ex09.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/09 14:34:28 by gsilva-l          #+#    #+#             //
//   Updated: 2019/12/09 14:38:51 by gsilva-l         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// Seguindo as abordagens filosóficas e analisando a seguinte tabela,
// podemos concluir que, na lógica booleana, o comportamento de uma expressão
// pode ser definido por meio de uma tabela de verdade. Onde A e B são expressões
// que avaliam true oufalse e usam o símbolo ^ (que representa a conjunção deles),
// podemos determinar se a união deles gera True ou False.

//	A |	B |	A ^ B
//	---------------------
//	V |	V |	 V  |
//	V |	F |	 F  |
//	F |	V |	 F  |
//	F |	F |	 F  |

// No mundo da lógica, essas expressões são chamadas de proposições.
// Mas ... o que pode ser uma proposição? Eles só precisam ter um valor de verdade,
// isto é, qualquer expressão booleana pode ser uma proposição.

// Teste sua função filosofoHipster no console com os seguintes
// valores e verifique se ela se comporta como na tabela:

filosofoHipster("Músico", "Brasil", 5); // true
filosofoHipster("Jogador de Futebol", "Alemanha", 12); // false
filosofoHipster("Músico", "Argentina", 1); // false
filosofoHipster("Docente", "Canadá", 12); // false
