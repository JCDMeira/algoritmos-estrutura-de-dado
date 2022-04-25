// * Aula 01 de arrays

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
