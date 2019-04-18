/**
 * ES6
 */

const promise1 = Promise.resolve('Hello World');
const promise2 = Promise.resolve(20);
const promise3 = new Promise(function(resolve,reject){
    setTimeout(resolve,2000,'Goodbye');
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

Promise.all([promise1,promise2,promise3,promise4]).then(plist=>{
    console.log(plist);
});