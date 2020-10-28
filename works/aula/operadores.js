// DESAFIO 01
const idade = 22
// VERIFICAR SE A PESSOA É MAIOR DE 18 ANOS
if (idade >= 18) {
    // SE SIM, DEIXAR ENTRAR, SE NÃO, BLOQUEAR ENTRADA
    console.log('SEJA BEM VINDO!')
} else if (idade == 17) {
    // SE A PESSOA TIVER 17 ANOS:
    // AVISAR PARA VOLTAR QUANDO FIZER 18 ANOS
    console.log('Volte quando tiver 18!')
} else {
    console.log('Entrada apenas para maiores de idade.')
}