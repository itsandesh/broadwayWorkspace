class User {
    name;
    email;
    address;
    phone;

    setName = (_name) => {
        this.name = _name
    }

    //constructer
    constructor(_name, _email, _address, _phone) {
        this.name = _name
        this.email = _email
        this.address = _address
        this.phone = _phone
        console.log("I am always First to execute");
    }

}

const user_obj = new User("SANDESH kHANAL", "KHANALSANDESH88@GMAIL.COM", "kATHMANDU", "9876443243545");
console.log(user_obj);
// const user_obj = new User();
// user_obj.setName("Test user")

// console.log(user_obj);
// console.log(user_obj.name);