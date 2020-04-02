// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ex11.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/07 18:32:47 by gsilva-l          #+#    #+#             //
//   Updated: 2019/12/07 18:34:05 by gsilva-l         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

// O poder real dos booleanos é que eles podem surgir ao fazer comparações de
// valores diferentes com alguns operadores matemáticos.

// Por exemplo, sabemos que se perguntarmos a alguém "2 é maior que 1?"
// a pessoa nos dirá "Sim é verdade, 2 é maior que 1", o mesmo acontece em
// JavaScript quando escrevemos o seguinte:

// console.log(2 > 1) // Isso imprimirá "true" na tela
// Isso significa que "2 > 1" tem um valor de true. Nós também poderíamos
// ter escrito o mesmo código da seguinte forma

// var valorVerdade  = 2 > 1;
// // Como vimos 2> 1, ele retorna um valor de verdade e o atribuímos a uma variável
// console.log (valorVerdade) // Isso imprimirá "true" na tela
// E se perguntarmos a alguém "2 é menor que 1?" a pessoa dirá
// "Isso é falso, 2 não é menor que 1", o mesmo acontece em JavaScript
// quando escrevemos o seguinte:

// console.log(2 < 1) // Isso imprimirá "false" na tela

// Para continuar, defina duas variáveis: umNumeroPequeno e umNumeroGrande,
// e atribua a elas valores numéricos diferentes de acordo com seus nomes.
// Então defina a variável eMenor e atribua o resultado da comparação se
// umNumeroPequeno é menor do que umNumeroGrande; e defina a variável eMaior,
// com o resultado da comparação umNumeroPequeno é maior que aNumeroGrande.

// -------------------------------------------------------------------------------
var umNumeroPequeno = 2;
var umNumeroGrande = 30;
var eMenor = umNumeroPequeno < umNumeroGrande;
var eMaior = umNumeroGrande > umNumeroPequeno;
