class ClassConcept {

    name1 = "akash"

    show(){
        console.log(this.name1); // "this" refer to class property :  name1 = "akash"
        if(this.name1 == "akash"){
            console.log("ok");
            
        }
        
    }

 
}

let c = new ClassConcept();
c.show();