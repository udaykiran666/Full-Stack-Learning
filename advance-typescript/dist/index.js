"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printUser(user, user1) {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
    console.log(`name :${user1.name}, age : ${user1.age}`);
}
function updateUser(user) {
    console.log(`Updating user with name: ${user.name}, age: ${user.age}`);
    //return {...user, age: user.age +1 ? user.age : undefined };
}
const uday = {
    name: "John Doe",
    age: 30,
};
//can give like above commeted or like below 
const uday1 = {
    name: "John Doe",
    age: 30,
};
//uday1.name = 'udays'
///////////////////
console.log(updateUser({ name: 'john', age: 23 }));
const user = {
    name: "John Doe",
    age: 30,
};
const user1 = {
    name: "Uday Kiran",
    age: 29,
};
printUser(user, user1);
const UserRecord = {
    admin: ['create', 'edit', 'delete'],
    editor: ['edit'],
    viewer: ['delete'],
};
console.log(UserRecord['admin']);
const UserRecord1 = { 'abcd': { name: 'uday', age: 23 } };
console.log(UserRecord1['abcd'].name);
/////////////////////////////// MAP  //////////////////////////////
const userMap = new Map();
userMap.set('uday', { name: 'uday', age: 23 });
userMap.set('kiran', { name: 'kiran', age: 25 });
console.log(userMap.get('uday'));
const userMap1 = new Map();
userMap1.set('neu', { name: 'uday', age: 23, email: 'udaykiranramaraju@gmail.com' });
console.log(userMap1.get('neu'));
const handle = (event) => {
    console.log('handling event', event);
};
//handle('click')//gives issue
handle('scroll');
//////////////////////////////////   TYPE INFER    //////////////////////////////
const zod_1 = require("zod");
const schema = zod_1.z.object({
    name: zod_1.z.string().min(1),
    age: zod_1.z.number().min(9)
});
const data = { name: 'uday', age: 23 };
schema.parse(data);
console.log(data.name);
