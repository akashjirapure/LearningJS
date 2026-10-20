class A {

    dog() {
        return "this dog is good"
    }
}

class B extends A {
    dog() {
        console.log(super.dog())
        return "this dog is bad"
    }
}

let boj = new B();

console.log(boj.dog());