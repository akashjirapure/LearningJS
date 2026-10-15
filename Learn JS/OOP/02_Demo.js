class students{

    setDetails(){
        this.sid = 123
        this.sname = "John"
    }

    getDetails(){
        console.log(this.sid,this.sname);
        
    }
}

let s1 = new students();
s1.setDetails();
s1.getDetails();