
// Fórmulas matemáticas úteis para programas ➕➖📈📋📊


//Área do círculo 
var areaCirculo = (raio) => Math.PI * (raio * raio); 
/*No exemplo abaixo basta descomentar a linha e substituir o número pelo valor do raio*/
//console.log(areaCirculo(3));

//Área do retângulo/quadrado 
var areaRetangulo = (base, altura) => (base * altura);
/*No exemplo abaixo basta descomentar a linha e substituir os números pelos valores
 da base e altura*/
//console.log(areaRetangulo(10,10));

//Cosseno
Math.cos(10);

//Fatorial
var fatorial = (numero) => 
{
 let resultado = numero;
 for (let i = 1; i < numero; i++) {resultado *= i;}
 return resultado;
}
//console.log(fatorial(5));

//Média aritimética
var media = (array) => {
    let resposta = array.reduce(function(acumulador,valor){return (acumulador + valor);});
    return resposta/array.length;
}
/*No exemplo abaixo basta descomentar a linha e substituir os números do array 
pelos valores a serem calculados*/
//console.log(media([1,2,3,4,5,6]));

//Média ponderal
var mediaPonderal = (valores,pesos) => {
 var resultado = 0;
 var dividendo = 0;
 var divisor = 0;
 for (const i in valores){dividendo += (valores[i] * pesos[i]);}
 for (const i of pesos) {divisor += i;}
 return dividendo/divisor;
}
//Adicone os valores dentro do 1º array e o peso de cada valor dentro do 2º array
//console.log(mediaPonderal([8,9.2,7.9,8],[1,2,3,4]))


//Perímetro do círculo
var perimetroCirculo = (raio) => 2 * Math.PI * raio; 
/*No exemplo abaixo basta descomentar a linha e substituir o número pelo valor do raio*/
//console.log(perimetroCirculo(3));

//Perímetro do retângulo
var perimetroRetangulo = (base, altura) => (base + altura)*2;
/*No exemplo abaixo basta descomentar a linha e substituir os números pelos valores
 da base e altura*/
//console.log(perimetroRetangulo(10,10));

//Porcentagem
//Para saber quanto porcento um valor é em relação a  um total
var porcento = (valor,total) => (10 * valor)/(0.1 * total);
//Exemplo: 810 é quanto porcento de 4500?
//console.log(porcento(810,4500)+"%");

//Potência
/*Descomentado a linha seguinte temos a primeiro valor elevado ao segundo valor*/
//console.log(Math.pow(10,0.5));

//Raiz quadrada √
/*Como o JS já tem uma função para o uso de raiz quadrada podemos apenas colocar o valor dentro da função.*/
//console.log(Math.sqrt(144.5));

//Seno
Math.sin(10);
//Tangente
Math.tan(10);

