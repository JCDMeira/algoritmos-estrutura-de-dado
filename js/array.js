// * Aula 01 de arrays

console.log("------------- * Aula 01 de arrays----------------");
/*
  - Em js se pode ter array de vários tipos, mas no geral se fala de uma estrutura com um tipo de dados
*/
const avgTemp = []; // # declarou como array, porém vazio

// _ A declaração de um por mês é inviável, pode gerar uma dificuldade de acesso e diversos aspectos.

// const avgTempJan = 31.9;
// const avgTempFev = 35.3;
// const avgTempMar = 42;
// const avgTempApr = 38;
// const avgTempMay = 25.5;

// _ podendo ser atribuído ao array, sendo que as posições começam em zero
avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5;

console.log("array de médias de temperatura", avgTemp);
console.log("temperatura de janeiro", avgTemp[0]);
console.log("temperatura de fevereiro", avgTemp[1]);

console.log("------------- * Aula 02 de arrays----------------");

/*
  _ O js não obriga o tamanho do array ser declarado junto ao inicializar.
  _ isso é dinâmico, ao contrário de outras linguagens, e há métodos que podem alterar o tamanho do array.
  _ Ao inserir ou remover elementos o tamanho acompanha.
*/

const daysOfWeek = new Array();
const daysOfWeekWithLenght = new Array(7);
const daysOfWeekWithDays = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

daysOfWeek[0] = "Sunday";

console.log("daysOfWeek primeira posição : ", daysOfWeek[0]);
console.log("daysOfWeek lenght : ", daysOfWeek.length);
console.log(
  "daysOfWeekWithLenght : ",
  daysOfWeekWithLenght,
  "daysOfWeekWithLenght length : ",
  daysOfWeekWithLenght.length
);
console.log(
  "daysOfWeekWithDays : ",
  daysOfWeekWithLenght,
  "length : ",
  daysOfWeekWithDays.length
);

console.log("------------- * Aula 03 de arrays----------------");

/*
  _ Para mostrar todos os elementos um por um se deve iterar sobre o array.
  _ Usando uma estrutura de repetição por exemplo.
*/

const newDaysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

for (let i = 0; i < newDaysOfWeek.length; i++) {
  console.log("imprimindo os elementos do array por for : ", newDaysOfWeek[i]);
}

const fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(fibonacci);

for (let i = 0; i < fibonacci.length; i++) {
  console.log(`Fibonacci na posição ${i} :`, fibonacci[i]);
}

console.log("------------- * Aula 04 de arrays----------------");

/*
  _ Possibilita adicionar pelo length, pois sempre vai ser 1 número maior que a
  _ última possição, graças a contagem começar em zero. Porém, esse modo não
  _ é o melhor meio para dicionar elementos.
  _ O push adiciona um elemento na última possição do array
  _ o unshift adiciona um novo elemento na primeira posição do array, empurrando
  _ todos os elementos em uma posição na contagem do indíce
*/

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[numbers.length] = 10;
numbers[numbers.length] = 11;

numbers.push(12);
numbers.push(13);
numbers.push(14);
numbers.push(15);
numbers.push(16);

numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-3);
numbers.unshift(-4);

numbers[0] = -40; // # pegando posição que já existe ele sobrepõe

console.log(numbers);

console.log("------------- * Aula 05 de arrays----------------");

/*
  _ Pop remove o último elemento
  _ shift remove do começo
  _ ambos não precisam passar um valor, pois removem o que já existe
*/

numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();

numbers.shift();
numbers.shift();
numbers.shift();
numbers.shift();

console.log(numbers);

console.log("------------- * Aula 06 de arrays----------------");

/*
  _ o splice remove uma fatia do array, a partir de uma posição indicada
  # splice(posição de início, número de posições)
  ! o número indicado como posição já conta como a primeira remoção
  _ splice também pode indicar adições.
  # splice(posição de início, número de posições, elementos para adicionar separados por vígula)
  _ pode inserir quantas quiser
*/

numbers.splice(3, 3);

console.log(numbers);

numbers.splice(3, 0, 3, 4, 5);

console.log(numbers);

console.log("------------- * Aula 07 de arrays----------------");

/*
  _ Nada mais são que arrays dentro de arrays. Isso permite o array ter duas dimensões.
*/

const avgTempWeek = [];

const avgTempWeek1 = [33, 25.2, 19, 27, 23.4, 41.6, 25];
const avgTempWeek2 = [41, 29, 33.2, 21.2, 19.5, 17, 33.8];

avgTempWeek[0] = avgTempWeek1;
avgTempWeek[1] = avgTempWeek2;

console.log(avgTempWeek[1][2]);

console.log("------------- * Aula 08 de arrays----------------");

/*
_ Percorrer ou iterar sobre um array de duas dimensões precisa ter dois laços
_ para iterar as duas camadas/dimensões do array
*/

for (let i = 0; i < avgTempWeek.length; i++) {
  for (let j = 0; j < avgTempWeek[i].length; j++) {
    console.log(`posição ${i},${j} :`, avgTempWeek[i][j]);
  }
}

console.log("------------- * Aula 09 de arrays----------------");

/*
_ Arrays multidimensionais são com várias dimensões, podendo ser por exemplo um tridimensional.
*/

const month = [];
const firstWeeks = [];
const lastWeeks = [];

const avgTempWeek3 = [34, 33, 36, 16, 24, 19, 26];
const avgTempWeek4 = [19, 27, 14, 31, 29, 15, 21];

firstWeeks.splice(0, 0, avgTempWeek1, avgTempWeek2);
lastWeeks.splice(0, 0, avgTempWeek3, avgTempWeek4);
month.splice(0, 0, firstWeeks, lastWeeks);

console.log(month[1][1][4]);

for (let i = 0; i < month.length; i++) {
  for (let j = 0; j < month[i].length; j++) {
    for (let k = 0; k < month[i][j].length; k++) {
      console.log(`posição ${i},${j},${k}  :`, month[i][j][k]);
    }
  }
}
