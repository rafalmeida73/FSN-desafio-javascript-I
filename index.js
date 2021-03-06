const alunosDaEscola = [
  { nome: "Henrique", notas: [], cursos: [], faltas: 5 },
  { nome: "Edson", notas: [], cursos: [], faltas: 2 },
  { nome: "Bruno", notas: [10, 9.8, 9.6], cursos: [], faltas: 0 },
  { nome: "Guilherme", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "Full Stack", dataMatricula: new Date }], faltas: 0 },
  { nome: "Carlos", notas: [], cursos: [], faltas: 0 },
  { nome: "Lucca", notas: [10, 9.8, 9.6], cursos: [{ nomeDoCurso: "UX", dataMatricula: new Date }], faltas: 0 }
];


// implementação
function adicionarAluno(nome) {

  alunosDaEscola.push( {nome: nome, notas: [], cursos: [], faltas: 0} )
  console.log(`Aluno ${nome} inserido corretamente`);
};
adicionarAluno('Rafael')


function listarAlunos() {
  let conteudo = "";

  alunosDaEscola.forEach(function (alunos) {
    conteudo += `
        -----------------------
        Nome do aluno: ${alunos.nome} 
        Nota do aluno: ${alunos.notas.toString()}
        Curso do aluno: ${JSON.stringify(alunos.cursos[0])}
        Faltas do aluno: ${alunos.faltas}
        `
  })
  console.log(conteudo);
};
//listarAlunos()


function buscarAluno(nome) {
  if (alunosDaEscola.find(alunos => alunos.nome === nome) == undefined) {
    console.log(`O aluno ${nome} não está cadastrado!`)
  } else {
    console.log(alunosDaEscola.find(alunos => alunos.nome === nome));
  }
};
//buscarAluno('Edson')


function matricularAluno(aluno, curso) {
  let alunoCadastrado = alunosDaEscola.findIndex(value => value.nome === aluno);
  if (alunoCadastrado != -1) {
    alunosDaEscola[alunoCadastrado].cursos.push({ nomeDoCurso: curso, dataMatricula: new Date })
    console.log(`O aluno ${aluno} foi cadastrado com sucesso!`);
  } else {
    console.log(`O aluno ${aluno} não está cadastrado!`);
  }
};
//matricularAluno('Edson', 'sla')


function aplicarFalta(aluno) {

  let alunoCadastrado = alunosDaEscola.findIndex(value => value.nome === aluno);

  if (JSON.stringify(alunosDaEscola[alunoCadastrado].cursos[0]) == undefined) {
    console.log('Aluno não está matriculado em um curso');
  }
  else if (alunoCadastrado != -1 && JSON.stringify(alunosDaEscola[alunoCadastrado].cursos[0]) != undefined) {
    alunosDaEscola[alunoCadastrado].faltas += 1
    console.log('Falta cadastrada com sucesso!');
    //return 
  } else {
    console.log(`O aluno ${aluno} não está cadastrado!`);
  }
};
//aplicarFalta('Guilherme')


function aplicarNota(aluno) {

  let alunoCadastrado = alunosDaEscola.findIndex(value => value.nome === aluno);

  if (JSON.stringify(alunosDaEscola[alunoCadastrado].cursos[0]) == undefined) {
    console.log('Aluno não está matriculado em um curso');
  }
  else if (alunoCadastrado != -1 && JSON.stringify(alunosDaEscola[alunoCadastrado].cursos[0]) != undefined) {
    alunosDaEscola[alunoCadastrado].notas.push(10)
    console.log('Nota cadastrada com sucesso!');
    //return 
  } else {
    console.log(`O aluno ${aluno} não está cadastrado!`);
  }
};
//aplicarNota('Guilherme')


function aprovarAluno(aluno) {

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let alunoCadastrado = alunosDaEscola.findIndex(value => value.nome === aluno);
  let quantidadeNotas = alunosDaEscola[alunoCadastrado].notas.length;
  let media = alunosDaEscola[alunoCadastrado].notas.toString() != "" ?
    alunosDaEscola[alunoCadastrado].notas.reduce(reducer) / quantidadeNotas : 0;

  if (JSON.stringify(alunosDaEscola[alunoCadastrado].cursos[0]) == undefined) {
    console.log('Aluno não está matriculado em um curso');
  }
  else if (alunoCadastrado != -1
    && JSON.stringify(alunosDaEscola[alunoCadastrado].cursos[0]) != undefined &&
    alunosDaEscola[alunoCadastrado].faltas <= 3 &&
    media >= 7
  ) {
    console.log('Aprovado');
    //console.log() 
  } else {
    console.log('Reprovado');
  }
};
//aprovarAluno('Guilherme')

