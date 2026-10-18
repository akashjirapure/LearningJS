class student{
    #name
    #marks

    setName(name){
        this.#name = name;
    }
    
    getName(){
        return this.#name
    }

     setMarks(marks){
        if(marks <=0 || marks >= 100){
            throw new Error (" Error: Invalid marks")
        }
        this.#marks = marks;
    }
    
    getMarks(){
        return this.#marks
    }

}

let obj = new student();
obj.setName("akash jirapure");
obj.setMarks(30);

console.log(obj.getName()+ ", "+ obj.getMarks());
