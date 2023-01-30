

users = [
    {
        name: 'user one',
        email: 'userone@gmail.com',
        address: 'Kathmandu'
    },
    {
        name: 'user two',
        email: 'usertwo@gmail.com',
        address: 'Bhaktapur'
    },
    {
        name: 'user one',
        email: 'userone@gmail.com',
        address: 'Lalitpur'
    },
    {
        name: 'user one',
        email: 'userone@gmail.com',
        address: 'Kathmandu'
    },
];

let user_ktm = [];

user_ktm = users.filter((item) => item.address === "Kathmandu");

console.log(user_ktm);

// users.map((item)=>{
//     if(item.address ==='kathmandu'){
//         user_ktm.push(item)
//     }return;
// })
// console.log(user_ktm);


// const delayedFunction = () => {

//     setTimeout(() => {
//         console.log('I am number one');
//     }, 3000)
// }
// delayedFunction();
// console.log('I am number two');