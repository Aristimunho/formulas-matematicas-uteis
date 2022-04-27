// Fórmulas matemáticas úteis para programas ➕➖📈📋📊



//Área do retângulo/quadrado 
var areaRetangulo = (base, altura) => (base * altura);
/*No exemplo abaixo basta descomentar a linha e substituir os números pelos valores
 da base e altura*/
//console.log(areaRetangulo(10,10));


//Perímetro de retângulos 
var perimetroRetangulo = (base, altura) => (base + altura)*2;
/*No exemplo abaixo basta descomentar a linha e substituir os números pelos valores
 da base e altura*/
//console.log(perimetroRetangulo(10,10));

//Área do círculo 
var areaCirculo = (raio) => Math.PI * (raio * raio); 
/*No exemplo abaixo basta descomentar a linha e substituir o número pelo valor do raio*/
//console.log(areaCirculo(3));

//Perímetro de círculos 
var perimetroCirculo = (raio) => 2 * Math.PI * raio; 
/*No exemplo abaixo basta descomentar a linha e substituir o número pelo valor do raio*/
//console.log(perimetroCirculo(3));

//Raiz quadrada √
/*Como o JS já tem uma função para o uso de raiz quadrada podemos apenas colocar o valor dentro da função.*/
//console.log(Math.sqrt(144.5));

//Potências
/*Descomentado a linha seguinte temos a primeiro valor elevado ao segundo valor*/
//console.log(Math.pow(10,0.5));

//Porcentagem
//Para saber quanto porcento um valor é em relação a um total
var porcento = (valor,total) => (10 * valor)/(0.1 * total);
//Exemplo: 810 é quanto porcento de 4500?
console.log(porcento(810,4500)+"%");

//Seno
Math.sin(10);
//Cosseno
Math.cos(10);
//Tangente
Math.tan(10);

//Fatorial
var fatorial = (numero) => 
{
 let resultado = numero;
 for (let i = 1; i < numero; i++) {resultado *= i;}
 return resultado;
}
//console.log(fatorial(5));

//Logarítmo


//Média aritimética

var media = (array) => {
    let resposta = array.reduce(function(acumulador,valor){return (acumulador + valor);});
    return resposta/array.length;
}
/*No exemplo abaixo basta descomentar a linha e substituir os números do array 
pelos valores a serem calculados*/
//console.log(media([1,2,3,4,5,6]));

//Média ponderal

//Moda 

//Mediana

//Regra de  três

//Conversão de decimal para binário

//Conversão de binário para decimal


