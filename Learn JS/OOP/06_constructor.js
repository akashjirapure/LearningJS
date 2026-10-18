class Calculator {

    constructor (a,b){
       this.a = a
       this.b = b
    }

    constructor (a,b){
        this.a = a 
        this.b = b
    }

    add(){
        return this.a + this.b
    }
 
}

let c = new Calculator(10,20);
console.log(c.add());

