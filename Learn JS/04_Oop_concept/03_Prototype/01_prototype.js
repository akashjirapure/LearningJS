function employee(eid,ename){
    this.eid = "011"
    this.ename = "Jophn"
}

employee.prototype.age = 25
e = new employee();

console.log(e.eid,e.ename,e.age);

t = new employee();
console.log(t.eid,t.ename,t.age);


