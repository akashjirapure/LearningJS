class Bank{

    #intailBalance = 1000;

    getBalance(){
        return this.#intailBalance
    }

    setBalance(balance){
        if(balance >=0){throw new Error ("Balance not valid!")} 
            this.#intailBalance += balance;
        
    }
}

let l = new Bank()
l.setBalance(-1)
console.log(l.getBalance());
