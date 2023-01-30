// console.log("Ready to begin")

// //document.getElementById('first').innerHTML = "Hello world"

// let a = "Madar.kulli";

// let b =a.split(".");

// // console.log(b);

// let c = a.toUpperCase();

// // console.log(c)

// let all_students = [];
// let first_student= {
//     name: "sandesh Khanal ",
//     email: "sandesh@gmail.com"

// };
// let sec_student= {
//     name: "Binay Karki ",
//     email: "binay@gmail.com"

// };
// let third_student= {
//     name: "Barsha Bokhrel",
//     email: "binay@gmail.com"

// };
// all_students.push(first_student);
// console.log(all_students)

// all_students.unshift(sec_student);

// let size = all_students.length;
// all_students[size]=third_student;


// all_students[2].name = "Barsha Karki"

// console.log(all_students)

// let fourth = all_students.shift();



// console.log(all_students)

// //slice
// //splice
// //include



// let m = [1,2,3,4,5]
// let n = 1

// m.includes(n);

// console.log(m.includes(n))

//operator
//types and usage
//control statement 



let product = [];
let iphone_12 = {
    name: "iphone 12",
    colour: "black",
    price: "12k"
}
let iphone_13 = {
    name: "iphone 13",
    colour: "black",
    price: "13k"
}
let iphone_14 = {
    name: "iphone 14",
    colour: "black",
    price: "14k"
}
let iphone_15 = {
    name: "iphone 15",
    colour: "black",
    price: "15k"
}
let iphone_16 = {
    name: "iphone 16",
    colour: "black",
    price: "12k"
}
let iphone_17 = {
    name: "iphone 17",
    colour: "black",
    price: "13k"
}
let iphone_18 = {
    name: "iphone 18",
    colour: "black",
    price: "14k"
}
let iphone_19 = {
    name: "iphone 19",
    colour: "black",
    price: "15k"
}

//add
product.push(iphone_12)
product.push(iphone_16)
product.push(iphone_17)
product.push(iphone_18)
product.push(iphone_19)

product.push(iphone_12)
console.log(product);

product.unshift(iphone_13)
console.log(product);

let length = product.length
product[length] = iphone_14;
console.log(product);

// update
product[0] = iphone_15;
console.log(product);

//retrive
let index_1 = product.shift()
console.log(product);

let index_0 = product.pop()
console.log(product);

let index_3 = product.splice(0, 1);
console.log(index_3);

let index_4 = product.slice(0, 4);
console.log(index_4);


console.log(admin?.name)


let Student_details = [
    {
        name: 'Sandesh Khanal',
        age: '12',
        address: 'baneshwor'
    }
]