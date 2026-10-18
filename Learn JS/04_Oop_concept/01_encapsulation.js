class demo {
    // to decalare private variable use "#"
    #name
    #mark

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;

    }

    getMarks() {
        return this.marks;
    }

    setMarks(marks) {
        this.marks = marks
    }
}

let d = new demo();
d.setName("Akash");
d.setMarks(96);

console.log(d.getName() + " , " + d.getMarks());
