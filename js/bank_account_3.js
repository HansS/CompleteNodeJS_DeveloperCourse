var account, accounts = [];

function getAccount(username) {
    var  matchedAccount, i = 0;
    for (i; i < accounts.length; i++) {
        if (accounts[i].username === username) {
            matchedAccount = accounts[i];
            break;
        };
    };
    return matchedAccount;
}
function createAccount(account) {
    accounts.push(account);
    return account;
}
function deposit(account, amount) {
    if(typeof amount === 'number') {
        account.balance += amount;
    } else {
        console.log('You can only deposit $\'s');
    }
}
function withdraw(account, amount) {
    if (typeof amount === 'number') {
        if ((account.balance - amount) >= 0 )
            account.balance -= amount;
        else
            console.log('insufficient funds!');
    } else {
        console.log('You can only withdraw $\'s');
    }
}
function getBalance(account) {
    return account.balance;
}
function getMyBalance (account) {
    return function () {
        return account.balance;
    }
}

function createBalanceGetter (account) {
    return function () {
        return account.balance;
    }
}


var RickAct = createAccount({'username':'Rick', 'balance':1000});
var SamAct = createAccount({'username':'Sam,', 'balance':100});
var JoeAct = createAccount({'username':'Joe', 'balance':1111});

console.log(accounts);
deposit(RickAct, 2000);
withdraw(RickAct, 34);
deposit(SamAct,1000);
withdraw(SamAct, 134);
deposit(JoeAct, 200);
withdraw(JoeAct, 534);

var r_act =  getAccount('Rick');
console.log(r_act  );
var r_bal = createBalanceGetter(r_act);

console.log('\r\n');
console.log(r_bal());
console.log(accounts);