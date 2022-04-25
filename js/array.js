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