// QUESTAO 1 //

const populacaoA = 80000;
const populacaoB = 200000;
const taxaCrescimentoA = 0.03;
const taxaCrescimentoB = 0.015;

function calcularPopulacao(populacao, taxaCrescimento, anos) {
  return populacao * Math.pow((1 + taxaCrescimento), anos);
}
function calcularAnos(populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB) {
  let anos = 0;

  while (calcularPopulacao(populacaoA, taxaCrescimentoA, anos) < calcularPopulacao(populacaoB, taxaCrescimentoB, anos)) {
    anos++;
  }

  return anos;
}
console.log(calcularAnos(populacaoA, populacaoB, taxaCrescimentoA, taxaCrescimentoB));

// QUESTAO 2 //

let quantidadePares = 0;
let quantidadeImpares = 0;

for (let i = 1; i <= 10; i++) {
  const numero = parseInt(prompt(`Digite o ${i}º número inteiro:`));

  if (numero % 2 === 0) {
    quantidadePares++;
  } else {
    quantidadeImpares++;
  }
}

console.log(`Quantidade de números pares: ${quantidadePares}`);
console.log(`Quantidade de números ímpares: ${quantidadeImpares}`);

// QUESTAO 3 //

function determinarValores(numeros) {
    let menorValor = numeros[0];
    let maiorValor = numeros[0];
    let somaValores = 0;
  
    for (let i = 1; i < numeros.length; i++) {
      if (numeros[i] < menorValor) {
        menorValor = numeros[i];
      }
      if (numeros[i] > maiorValor) {
        maiorValor = numeros[i];
      }
      somaValores += numeros[i];
    }
  
    console.log("Menor valor: " + menorValor);
    console.log("Maior valor: " + maiorValor);
    console.log("Soma dos valores: " + somaValores);
  }
  
  let numeros = [5, 2, 9, 1, 5, 6];
  determinarValores(numeros);

  // QUESTAO 4 //

function calcularSalarioAtual(salarioInicial, anoAtual) {
    let salario = salarioInicial;
    let percentualAumento = 0.015; 

    for (let ano = 1996; ano <= anoAtual; ano++) {
        salario += salario * percentualAumento; 
        percentualAumento *= 2;
    }

    return salario;
}

function main() {
    const salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário:"));

    if (isNaN(salarioInicial)) {
        console.log("Digite um valor válido.");
        return;
    }

    const anoAtual = new Data().getAnoInteiro();
    const salarioAtual = calcularSalarioAtual(salarioInicial, anoAtual);
    console.log(`O salário atual do funcionário é R$ ${salarioAtual.toFixed(2)}.`);
}
main();

// QUESTAO 5 //

function calcularAreaEPerimetro(raio) {
    const area = Math.PI * raio ** 2;
    const perimetro = 2 * Math.PI * raio;
    return {
        area: area,
        perimetro: perimetro
    };
}

function main() {
    const raio = parseFloat(prompt("Digite o raio do círculo:"));
    if (isNaN(raio) || raio <= 0) {
        console.log("Digite um valor válido.");
        return;
    }
    const resultado = calcularAreaEPerimetro(raio);
    console.log(`Área do círculo: ${resultado.area.toFixed(2)}`);
    console.log(`Perímetro do círculo: ${resultado.perimetro.toFixed(2)}`);
}
main();

// QUESTAO 6 //

function calcularMontante(capitalInicial, taxaJuros, tempoMeses) {
    const taxaDecimal = taxaJuros / 100;
    const montante = capitalInicial * Math.pow((1 + taxaDecimal), tempoMeses);
    return montante.toFixed(2);
}

function main() {
    const capitalInicial = parseFloat(prompt("Digite o capital inicial investido:"));
    const taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (%):"));
    const tempoMeses = parseInt(prompt("Digite o tempo do investimento em meses:"));
    if (isNaN(capitalInicial) || isNaN(taxaJuros) || isNaN(tempoMeses) || capitalInicial <= 0 || taxaJuros < 0 || tempoMeses <= 0) {
        console.log("Digite um valor válido.");
        return;
    }
    const montante = calcularMontante(capitalInicial, taxaJuros, tempoMeses);
    console.log(`O montante após ${tempoMeses} meses de investimento é R$ ${montante}`);
}
main();

// QUESTAO 7 //

var alunos = [
    { nome: "Maria Joaquinha", notas: [8, 7.5, 9], curso: "Sistemas para Internet" },
    { nome: "João Ricardo", notas: [8, 8.5, 5], curso: "Direito" },
    { nome: "José Henrique", notas: [4, 10, 7], curso: "Administração" },
    { nome: "Pedro da Silva", notas: [6, 7.6, 7.5], curso: "Sistemas para Internet" },
    { nome: "Silvana Morais", notas: [6, 7.5, 9.5], curso: "Sistemas de Informação" },
    { nome: "Patricia Castro", notas: [1, 9, 10], curso: "Arquitetura" },
    { nome: "Joana Ribeiro", notas: [8, 9, 9], curso: "Contabilidade" },
    { nome: "Rafael Rocha", notas: [4, 4, 9], curso: "Sistemas para Internet" },
    { nome: "Gustavo Henrique", notas: [8, 7.5, 5], curso: "Sistemas para Internet" }
];
function calcularMedia(notas) {
    const totalNotas = notas.length;
    const somaNotas = notas.reduce((soma, nota) => soma + nota, 0);
    return somaNotas / totalNotas;
}
function imprimirAlunosAprovados(alunos) {
    console.log("Alunos aprovados:");

    alunos.forEach(aluno => {
        const media = calcularMedia(aluno.notas);
        if (media >= 7) {
            console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}, Curso: ${aluno.curso}`);
        }
    });
}
imprimirAlunosAprovados(alunos);




