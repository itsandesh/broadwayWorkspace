// class User {
//     name;
//     email;
//     password;
// }

// class Admin {
//     name;
//     email;
//     password;
//     role = "Admin"
// }
// class Student {
//     name;
//     email;
//     address;
//     role = "student"
// }

class User {
    name;
    email;
    password;

    constructor(_name) {
        this.name = _name
        console.log("I am always first to execute");

    }

    getName = () => {
        return this.name
    }
}

// parent ma vayeko constructer lai child le over load garna parxa overriding ma 
class Admin extends User {

    role = "Admin"

    constructor() {
        super("Sandesh");
        console.log("I am always first to execute");
    }

    // getName=()=>{
    getName() {
        super.getName();
    }



}


const admin_obj = new Admin();
console.log(admin_obj);
console.log(admin_obj.getName);










