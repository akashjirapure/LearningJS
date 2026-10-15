class facebook {

    static setuser() {
        this.username = "Akash Jirapure"
        this.isLoggedIn = false
        this.password = 1234

    }

    static getUserDetails() {
        console.log(this.username,this.isLoggedIn,this.password);

    }

}

facebook.setuser();
facebook.getUserDetails();

