const usuario = {
    nome: "Matheus",
    empresa: {
        nome: "Rocketseat",
        cor: "roxo",
        foco: "Programação",
        endereco: {
            rua: "Rua Guilherme Gembala",
            numero: 349
        }
    }
}

console.log(`A empresa ${usuario.empresa.nome} está localizada em: ${usuario.empresa.endereco.rua} ${usuario.empresa.endereco.numero}`)


const programador = {
    nome: "Matheus",
    idade: 25,
    tecnologias: [
        { nome: 'JavaScript', especialidade: 'Desktop' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)
