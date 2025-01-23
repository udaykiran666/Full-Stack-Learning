interface User {
    name: string;
    age: number;
}
//pick
type UpdatedProsp = Pick<User, 'name' | 'age' >
//partial
type PartialUpdatedProsp = Partial<UpdatedProsp>
function printUser(user: User, user1:User): void {
    console.log(`Name: ${user.name}, Age: ${user.age}`);
    console.log(`name :${user1.name}, age : ${user1.age}`);
}

function updateUser(user: PartialUpdatedProsp){
    console.log(`Updating user with name: ${user.name}, age: ${user.age}`);
    //return {...user, age: user.age +1 ? user.age : undefined };
}

// read only
type User1 = {
    readonly name: string;
    readonly age: number;
}

const uday: User1 = {
    name: "John Doe",
    age: 30,
}
//can give like above commeted or like below 
const uday1: Readonly<User1> = {
    name: "John Doe",
    age: 30,
}

//uday1.name = 'udays'
///////////////////

console.log(updateUser({name:'john', age:23}))
const user: User = {
    name: "John Doe",
    age: 30,
};

const user1: User = {
    name: "Uday Kiran",
    age: 29,
};

printUser(user, user1);

///////////// Record(similar to dict in python)

type userRoles = 'admin' | 'editor' | 'viewer';

const UserRecord: Record<userRoles, string[]> = {
    admin: ['create', 'edit', 'delete'],
    editor: ['edit'],
    viewer: ['delete'],
}

console.log(UserRecord['admin']);
 
type Uday = Record<string, {name: string, age: number}>
const UserRecord1 : Uday = {'abcd' : {name:'uday', age:23}}
console.log(UserRecord1['abcd'].name);

/////////////////////////////// MAP  //////////////////////////////

const userMap = new Map();
userMap.set('uday', {name: 'uday', age: 23});
userMap.set('kiran', {name: 'kiran', age: 25});

console.log(userMap.get('uday'));

type Ram = {name:string, age:number, email:string}
const userMap1 = new Map<string, Ram>();
userMap1.set('neu', {name:'uday', age:23, email:'udaykiranramaraju@gmail.com'});
console.log(userMap1.get('neu'));
// encrypt the files which we store..cause its customer's IP..


/////////////////////////////// EXCLUDE ///////////////////////////
type Event1 = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event1, 'click'>

const handle = (event: ExcludeEvent) =>{
    console.log('handling event', event)
}

//handle('click')//gives issue
handle('scroll')

//////////////////////////////////   TYPE INFER    //////////////////////////////
import {z} from "zod"

const schema = z.object({
    name:z.string().min(1),
    age:z.number().min(9)
})

type data = z.infer<typeof schema>
const UdayKiran:data = {
    name: 'uday',
    age: 23
}
////////////////////////////////////////////////////////////////////////////////////////