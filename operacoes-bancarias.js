const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

let newTransaction =
    {
    type: "credit",
    value: 50.5
    }

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if(transaction.type == "credit") {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
    return user
}

console.log(createTransaction(newTransaction))