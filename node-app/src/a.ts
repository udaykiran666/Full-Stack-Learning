// ts compiler(tsc -b) looks at multiple files. so you should not have samr function name in saame directory

function greet(name:string){
    console.log("Hello" + " " + name);
}
greet('uday');

// type infrence
function sum(number1:number, number2:number):number{
    return number1 + number2;
}
console.log( sum(10,20));

function isLegal(age:number):boolean {
    if(age>2){
        return true;
    }
    else{
        return false;
    }
}
console.log(isLegal(10));

// here we given below as void..cause execute does not return anything..if returns anything like number, string or what ever we'll kepp the ame over here..
function runsafter1sec(fn:()=> string){
    setTimeout(() => {
        fn();
    }, 1000);
}

function execute(){
    console.log("hello world");
    return 'a';
}

runsafter1sec(execute);

interface User {
    name:string,
    age:number,
    address:String,
    email?:String //? basically refers to optional one..they can pass this attribute or not..
}

function interfaceCheck(user:User):boolean{
    console.log(user.email)
    return (true? user.age > 18 : false)
}

console.log(interfaceCheck({
    name: "uday",
    age: 25,
    address: "delhi",
    email:"delhi@gmail.com"
}))

// this type ande interface were almost similar..but the thing is in type is we can add union operatot like it can be withe this ot that.. 
type Typee = {
    name: string,
    age: number,
    address: string,
    email?: string
}

// like below, we can use uniuon
type Typee1 = number | string

function unionCheck(user:Typee):any{
    console.log(user.email)
    return (true? user.age > 18 : false) ? user.age : user.email
}

console.log(unionCheck({name: 'uday', age:22, email: 'uday@gmail.com', address: 'Eluru'}))

// intersection..means if we want to create a type that has properties from multiple types/interfaces..
// not only type & type for we can do for type & interface and  interface & interface..same goes for operator as well..
type Employee = {
    id: number;
    name: string;
    age: number;
    department: string;
}

type Manager = {
    department: string;
    name: string;
    startDate: number;
    loginTime: number;
    salary: number;
}
type TechLead = Employee & Manager;

const t: TechLead = {
    id: 1,
    name: 'uday',
    age: 23,
    department: 'IT',
    startDate: new Date().getTime(),
    loginTime: new Date().getTime(),
    salary: 50000
}
console.log(t)

// arrays in type script for  type one
type Array1  = number[];

// how to use arrays for interface
interface Employee1 {
    id: number;
    name: string;
    age: number;
    department: string;
}

function filterUsers(users: Employee1[]){
    return users.filter(user => user.age > 25);
}

const employees: Employee1[] =[
    {id: 1, name: 'uday', age: 22, department: 'IT'},
    {id: 2, name: 'kiran', age: 29, department: 'CS'}
]
console.log(filterUsers(employees))


interface X{
    name:string;
}

interface Y{
    age:number;
}

type Z = X & Y

// enums is way to organize and use a collection of related constants.. these can either string or numeric based 

enum Direction {
    North = "NORTH",
    South = "SOUTH",
    East = "EAST",
    West = "WEST"
  }
  
  type ABC = {
    name:string;
  }
  let direction: ABC ={name: 'uday'}
  let direction1: Direction = Direction.East
  console.log(direction1); // Output: "EAST"
  
  enum Config {
    BaseUrl = "https://api.example.com",
    Timeout = 5000
  }
  
  function getConfigValue(key: Config):any {
    return key;
  }
  
  console.log(getConfigValue(Config.BaseUrl)); // Output: "https://api.example.com"
  
enum Directions {
    Up = "Up",
    Down = "Down",
    Left = "Left",
    Right = "Right",
  
}

function move(key: Directions): void {
    if(key == Directions.Up) {
        console.log("Move up");
    } else if(key == Directions.Down) {
        console.log("Move down");
    } else if(key == Directions.Left) {
        console.log("Move left");
    } else if(key == Directions.Right) {
        console.log("Move right");
    }
}
console.log(move(Directions.Down),1)
console.log(Directions.Down)

// GENERICS
// interface Input1 { // can't be termed as below type..we need give object instead of arr
//     id: number;
//     name: string;
// }
// type Input = number | string;
// function firstElem(arr: Input[]):Input{
//     return arr[0];
// }

// const value = firstElem(["bujjis", "hello", 3.14]) 
// console.log(value.toUpperCase());

//above will create an issue so here the thing is we need to use generics from typescript..type of value is inout and it is either string or number..whiich creates issue for number in touppercase.
//if we use any in above then no point of using typescript..it is same as js then..
type Input2 = number | string;
interface user {
    name:string;
}
function Generic<T>(arr : T[]): T{
    return  arr[0];
}

const value1 = Generic<string>(['uday', 'kiran']);
const value2 = Generic<number>([1,2,3])
const value3 = Generic<boolean>([true, false])
const value4 = Generic<user>([{name: 'uday'}, {name: 'kiran'}])
console.log(value1.toUpperCase(), value1.toLowerCase());
console.log(value2);
console.log(value3);
console.log(value4);