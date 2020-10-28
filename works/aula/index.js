// Criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do calculo da media

const turmaA = [
    {
        nome: 'Matheus',
        nota: 5.5
    },

    {
        nome: 'Gustavo',
        nota: 4.75
    },

    {
        nome: 'Otacilio',
        nota: 4.77
    }
]

const turmaB = [
    {
        nome: 'Herta',
        nota: 10
    },

    {
        nome: 'Beatriz',
        nota: 4.99
    },

    {
        nome: 'Taleessa',
        nota: 10
    },
    {
        nome: 'Sofia',
        nota: 6.5
    }
]

function calculoMedia(alunos) {
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {

        soma = soma + alunos[i].nota
    }
    const media = soma / alunos.length
    return media.toFixed(1)
}

const mediaTurmaA = calculoMedia(turmaA)
const mediaTurmaB = calculoMedia(turmaB)



function mensagem(media, turma) {
    // Se a media for maior que 5, parabenizar a turma
    if (media >= 7) {
        // faz alguma coisa
        console.log(`A media da ${turma} foi de ${media} Paranbéns!`)
    } else {
        // faz outra coisa
        console.log(`A media da ${turma} foi menor que 7!`)
    }
}




// Marcar aluno reprovado
// se a nota for menor que 5
// e, tambem, enviar mensagem

function marcarComoReprovado(aluno) {

    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true;
    }

}



function enviarMensagemReprovado(aluno) {
    // como aluno.reprovado já é true OU false, não precisamos 
    // de verificaçao para o if. Se o aluno estiver reprovado,
    // true ativa o if | se o aluno nao estiver reprovado: false
    // nao entrará no if
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado!`)
    }
}

function alunosReprovados(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno);

    }
}

mensagem(mediaTurmaA, 'Turma A')
mensagem(mediaTurmaB, 'Turma B')

alunosReprovados(turmaA);
alunosReprovados(turmaB);