let c: number = 1;
let s: string = "1";
let d: number = 3;
let a: String[] = ["1"];
const e = 1;
function getTotal(a: number, b: number): number {
    return a + b;
}
function sayHi(): void {
    console.log("hi");
}
function noOver(): never {
    while (true) {
        console.log(1)
    }
}
//函数参数是对象时
function Ofun({ a, b }: { a: number, b: number }): number {
    return a + b;
}
//定义数组
const stringArr: string[] = ["1", "2"];
const numberArr: number[] = [1, 2, 3];
const undefinedArr: undefined[] = [undefined, undefined];
const manyArr: (number | string)[] = ["1", 1]
//类型别名
type luan = { name: string, age: number };
type hao = { work: string, car: string }
const objectArr: (luan | hao)[] = [{ name: "luanhaoc", age: 20 }, { work: "programer", car: "benz" }]

class Man {
    name: string
    age: number
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
}

const manArr: Man[] = [new Man("nico",20)]

let arrowFunc = (str: string): string => {
    return str
}

let mnum: [string, number, string] = ["s", 1, "d"]

export default {};

