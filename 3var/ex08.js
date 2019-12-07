/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   ex08.c                                             :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2019/12/07 18:25:34 by gsilva-l          #+#    #+#             */
/*   Updated: 2019/12/07 18:26:45 by gsilva-l         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

//E o que acontece se eu adicionar números com textos?

var rua = "Av Paulista";
var numero = 1578;
console.log (rua + " " + numero)
// O resultado seria: "Av Paulista 1578"
Como você viu, se eu adicionar um número e um texto, ele se tornará parte
da string.

Declarar e atribuir três variáveis, uma com o seu 'nome', 
outra com o seu 'sobrenome' 
e outra com a sua 'idade'. Então, declare uma variável com nome resultado e atribua
uma string unindo suas variaveis da seguinte forma: " João Silva terá 30 anos". 
Respeite os espaços!

----------------------------------------------------------------------------------------

var nome = "João";
var sobrenome = "Silva";
var idade = 30;
var resultado = nome + " " + sobrenome + " " + "terá" + " " + idade + " " + "anos";
