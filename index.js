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

  alunosDaEscola.push({ nome })
  console.log(`Aluno ${nome} inserido corretamente`);
};
//adicionarAluno('Rafael')


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
  return conteudo;
}
//console.log(listarAlunos())


function buscarAluno(nome) {

  return alunosDaEscola.find(alunos => alunos.nome === nome) != undefined ?
    alunosDaEscola.find(alunos => alunos.nome === nome) :
    `O aluno ${nome} não está cadastrado!`;
}
//console.log(buscarAluno('João'))


function matricularAluno(aluno, curso) {
  let alunoCadastrado = alunosDaEscola.findIndex(value => value.nome === aluno);
  if (alunoCadastrado != -1) {
    alunosDaEscola[alunoCadastrado].cursos.push(curso, new Date)
    return `O aluno ${aluno} foi cadastrado com sucesso!`
  } else {
    return `O aluno ${aluno} não está cadastrado!`
  }
}
//console.log(matricularAluno('Edson', 'sla'))


function aplicarFalta(aluno) {

  let alunoCadastrado = alunosDaEscola.findIndex(value => value.nome === aluno);

  if (JSON.stringify(alunosDaEscola[alunoCadastrado].cursos[0]) == undefined) {
    return `Aluno não está matriculado em um curso`
  }
  else if (alunoCadastrado != -1 && JSON.stringify(alunosDaEscola[alunoCadastrado].cursos[0]) != undefined) {
    alunosDaEscola[alunoCadastrado].faltas += 1
    return `Falta cadastrada com sucesso!`
    //return 
  } else {
    return `O aluno ${aluno} não está cadastrado!`
  }
}
//console.log(aplicarFalta('Guilherme'))


function aplicarNota(aluno) {

  let alunoCadastrado = alunosDaEscola.findIndex(value => value.nome === aluno);

  if (JSON.stringify(alunosDaEscola[alunoCadastrado].cursos[0]) == undefined) {
    return `Aluno não está matriculado em um curso`
  }
  else if (alunoCadastrado != -1 && JSON.stringify(alunosDaEscola[alunoCadastrado].cursos[0]) != undefined) {
    alunosDaEscola[alunoCadastrado].notas.push(10)
    return `Nota cadastrada com sucesso!`
    //return 
  } else {
    return `O aluno ${aluno} não está cadastrado!`
  }
}
//console.log(aplicarNota('Guilherme'))


function aprovarAluno(aluno) {

  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let alunoCadastrado = alunosDaEscola.findIndex(value => value.nome === aluno);
  let media = alunosDaEscola[alunoCadastrado].notas.toString() != "" ? alunosDaEscola[alunoCadastrado].notas.reduce(reducer) / 3 : 0;

  if (JSON.stringify(alunosDaEscola[alunoCadastrado].cursos[0]) == undefined) {
    return `Aluno não está matriculado em um curso`
  }
  else if (alunoCadastrado != -1
    && JSON.stringify(alunosDaEscola[alunoCadastrado].cursos[0]) != undefined &&
    alunosDaEscola[alunoCadastrado].faltas <= 3 &&
    media >= 7
  ) {
    return `Aprovado`
    //return 
  } else {
    return `Reprovado `
  }
}
//console.log(aprovarAluno('Bruno'))

