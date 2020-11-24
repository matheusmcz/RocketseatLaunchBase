// transacoes bancarias
const user = {
    name: "Matheus",
    transactions: [],
    balance: 0
}

function createTransaction(movimentacao) {

    user.transactions.push(movimentacao)
    if (movimentacao.type === "credit") {
        user.balance = user.balance + movimentacao.value
    } else {
        user.balance = user.balance - movimentacao.value
    }

}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "debit", value: 30 })
createTransaction({ type: "credit", value: 33 })
createTransaction({ type: "debit", value: 33 })

console.log(user.balance)
console.log(user.transactions)


// relatiorios
function getHigherTransactionByType(transacoes) {
    let higherCredit = 0
    let higherDebit = 0
    for (let t of transacoes) {
        if (t.type === "credit" && t.value > higherCredit) {
            higherCredit = t.value
        } else {
            if (t.value > higherDebit) {
                higherDebit = t.value
            }
        }
    }
    console.log(`Maior credito ${higherCredit}`)
    console.log(`Maior debito ${higherDebit}`)
}


function getAverageTransactionValue(average) {
    let sum = 0
    let averageTransactions = 0
    for (let v of average) {
        sum = sum + v.value
    }
    averageTransactions = sum / average.length
    console.log(averageTransactions)

}

getHigherTransactionByType(user.transactions)

getAverageTransactionValue(user.transactions)


function getTransactionCount(transactionsType) {
    let creditLength = 0
    let debitLength = 0
    for (let c of transactionsType) {
        if (c.type === "credit") {
            creditLength = creditLength + 1
        } else {
            debitLength = debitLength + 1
        }
    }
    const transactionCount = {
        credit: creditLength,
        debit: debitLength
    }

    console.log(transactionCount)
}

getTransactionCount(user.transactions)