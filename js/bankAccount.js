var account = {
    balance : 0,
    message: 'great!'
};

function deposit(account, amount) {
    account.balance += amount;
};

function withdraw(account, amount) {
    if((account.balance - amount) >= 0)
        account.balance -= amount;
    else
        console.log('insufficient funds!');
};

function getBalance(account) {
    return account.balance;
};

deposit(account, 2000);
console.log(getBalance(account));
withdraw(account,300);
console.log(getBalance(account));
deposit(account, 2000);
console.log(getBalance(account));
withdraw(account,6000);
console.log(getBalance(account));
withdraw(account,300);
console.log(getBalance(account));

