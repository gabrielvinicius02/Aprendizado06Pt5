let nomes = [];
let notas = [];
let contador = 0;
let condicao = 1;
let somaNotas = 0;
let totalAlunos = 0;

while (condicao == 1) {
  var nome = prompt("Insira o nome do aluno: ");
  var nota = parseInt(prompt("Insira a nota do aluno: "));
  nomes[contador] = nome;
  notas[contador] = nota;
  contador++;
  somaNotas += nota;
  totalAlunos++;
  
  condicao = parseInt(prompt("Deseja continunar?\nInsira\n 1 - Sim\n 2 - Não ")); 
  
}

for (let i = 0; i < nomes.length; i++) {
  console.log("Aluno(a) " + nomes[i] + ", nota: " + notas[i]);
}

let mediaGeral = somaNotas / totalAlunos;

console.log("Soma das notas: " + somaNotas);
console.log("Média geral: " + mediaGeral);
