const sayHello1 =()=>{
    return new Promise((res,rej)=>{
        res("Hello There");
    })
}

// const sayHello = async()=>{
//     return "Hello there"
// }

const sayHello = async () => {
    try {
       let result = await sayHello1()
            .then()
       // throw "Hello Rejection"
         return "Hello there"
    } catch (except) {
        throw except
    }
}

sayHello()
    .then((res) => {
        console.log(res);
    })
    .catch((rej) => {
        console.log(rej);
    })