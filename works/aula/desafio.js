// CALCULO IMC

const pacient = [
    {
        nome: "Gustavo",
        idade: 27,
        altura: 1.75,
        sexo: "M",
        peso: 135
    },

    {
        nome: "Rita",
        idade: 45,
        altura: 1.56,
        sexo: "F",
        peso: 49
    },
    {
        nome: "Matheus",
        idade: 25,
        altura: 1.70,
        sexo: "M",
        peso: 70
    }

]


function imc(peso, altura) {
    return peso / (Math.pow(altura, 2))
}

function pacientList(pacientList) {
    for (let pacient of pacientList) {
        const peso = pacient.peso;
        const altura = pacient.altura;
        const resultado = imc(peso, altura)

        if (resultado >= 30) {
            console.log(`${pacient.nome} você está acima do peso!`)
        } else {
            console.log(`${pacient.nome} você não está acima do peso!`)
        }
    }

}

// pacientList(pacient)

// CALCULO DE APOSENTADORIA

const pessoas = [
    {
        nome: "Gustavo",
        idade: 62,
        sexo: "M",
        contribuicao: 33
    },

    {
        nome: "Rita",
        idade: 65,
        sexo: "F",
        contribuicao: 15
    },
    {
        nome: "Matheus",
        idade: 60,
        sexo: "M",
        contribuicao: 38
    }

]

function calculoTempoDeServico(nome, idade, tempoDeServico, sexo) {
    const calculo = idade + tempoDeServico
    if (sexo === "F" && calculo >= 85) {
        console.log(`${nome} pode se aposentar.`)
    } else if (sexo === "F") {
        console.log(`${nome} ainda nao tem tempo suficiente.`)
    }
    if (sexo === "M" && calculo >= 95) {
        console.log(`${nome} pode se aposentar.`)

    } else if (sexo === "M") {
        console.log(`${nome} ainda nao tem tempo suficiente.`)

    }
}


function listaPessoas(pessoas) {
    for (let pessoa of pessoas) {
        const nome = pessoa.nome
        const idade = pessoa.idade
        const contribuicao = pessoa.contribuicao
        const sexo = pessoa.sexo
        calculoTempoDeServico(nome, idade, contribuicao, sexo)
    }
}

listaPessoas(pessoas)
