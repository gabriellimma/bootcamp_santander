// ************************************************************************** //
//                                                                            //
//                                                        :::      ::::::::   //
//   ex06.js                                            :+:      :+:    :+:   //
//                                                    +:+ +:+         +:+     //
//   By: gsilva-l <marvin@42.fr>                    +#+  +:+       +#+        //
//                                                +#+#+#+#+#+   +#+           //
//   Created: 2019/12/09 14:11:10 by gsilva-l          #+#    #+#             //
//   Updated: 2019/12/09 14:14:58 by gsilva-l         ###   ########.fr       //
//                                                                            //
// ************************************************************************** //

Melhor impossível. Agora que vimos como usar o if, é hora de um pequeno 
segredo: se você usa expressões booleanas corretamente, você não precisa 
usar essa estrutura de controle! 

Como isso funciona? Suponha que queremos definir a função eMaiorDeIdade, 
que nos diz se alguém tem 18 anos de idade ou mais. 
Talvez nossa primeira abordagem seja a seguinte:

function eMaiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

No entanto, se olharmos com mais detalhes, este if eelse são totalmente 
desnecessários, já que a expressão idade > = 18 já é uma expressão booleana, 
porque se pensarmos em idade como um número, o que estamos fazendo é perguntar 
se esse número é maior ou igual a 18. 
E essa pergunta tem apenas duas respostas possíveis, você adivinha quais são? 
Exatamente, 'true' ou 'false'. Portanto, poderíamos tornar nosso código 
mais fácil fazendo isso:

function eMaiorDeIdade(idade) {
  return idade >= 18;
}

Agora, o que aconteceria se quiséssemos ter mais condições para serem avaliadas, 
querendo que todas fossem atendidas? A única coisa que precisamos é usar o 
operador && (que é lido como 'e'). Vamos ver um exemplo:

function estaEntre(numero, base, limite) {
  return numero > base && numero < limite;
}

A função anterior retornará true senumero for maior quebase e por sua vez menor 
que limite. Caso contrário, se estas condições não forem cumpridas, 
retornaremos false.

Mas e se quiséssemos que uma função retornasse 'true' com apenas uma das 
condições sendo atendida? Para isso, podemos usar o operador 
|| (que é lido como 'ou'). Vamos ver isso:

function eMaiorOuMenor(numero1, numero2, numero3) {
  return numero2 > numero1 || numero2 < numero3;
}

Neste cenário, a função eMaiorOuMenor retornará true se numero2 for maior que 
numero1 ou se numero2 for menor que numero3. Com qualquer uma das condições sendo 
verdadeira, ela retornará true. Logicamente, se nenhuma das duas condições for 
verdadeira, a função retornará false.

Outro cenário possível é talvez aquele em que queremos perguntar se algo é 
diferente de outra coisa. Você se lembra do operador !? Isso é chamado de negação. 
Vamos ver isso um exemplo:

function eDiaDeTrabalho(diaDaSemana) {
  return diaDaSemana!= 'Sábado' && diaDaSemana!= 'Domingo';
}
A função diaDaSemana recebe um dia (string) por parâmetro e retornará true se 
diaDaSemana não for domingo e não for sábado. Caso contrário, 
se o dia for domingo ou sábado, ele retornará false.

Perfeito! Agora é a sua vez. Mostre que o texto acima foi completamente claro. 
Para fazer isso, ajude-nos a resolver o seguinte:

Podemos dizer que é um número da sorte se o número:

é positivo
é um múltiplo de 2 ou 3
não é 15
Escreva a função eNumeroDaSorte que, recebendo um número, diz a se é um número da sorte. 
Lembre-se de que o número deve obedecer às três condições mencionadas. 
Seu desafio adicional será: NÃO use o if.

-----------------------------------------------------------------------------------------

function eNumeroDaSorte(num1)
{
  return num1 > 0 && num1!= 15 && num1%3==0 || num1%2==0;
}
