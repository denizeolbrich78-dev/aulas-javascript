let alunos = [
    { nome: "Karina", nota: 1 },
    { nome: "Yasmin", nota: 5 }, 
    { nome: "Rafaela", nota: 7 }, 
    { nome: "Denize", nota: 9 },
    { nome: "Ryan", nota: 1 },
    { nome: "Lucas", nota: 10 },
    { nome: "Douglas", nota: 9 }
    ]
const verificarAlunos = array => {
    for (aluno of array) {
        if (aluno.nota >= 7) {
            console.log(`Aluno: ${aluno.nome} Nota: ${aluno.nota}`)
        }
    }
}
verificarAlunos(alunos)