var ctr = 0, accounts = [];

function getAccount(username){
    var  matchedAccount;
    
    accounts.forEach(function(account){
        if(account.name === username){
            matchedAccount = account;
        }
    });
    return matchedAccount;
}; 

function createAccount(account){
    accounts.push(account);
    return account;
};

function deposit(account, amount) {
    account.balance =+ amount;
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

var RickAct = createAccount({'username':'Rick', 'balance':1000});
var BobAct = createAccount({'username':'Bob','balance': 100});
var Sam = createAccount({'username':'Sam','balance': 2000});
console.log(accounts);
deposit(RickAct, 2000);
withdraw(BobAct, 34);
console.log(accounts);






