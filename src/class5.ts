//普通函数
// function join(first:string|number,second:string|number):string {
//     return `${first}${second}`
// }
// join("lhc","ok")

//加入了泛型
// function join<needJoin>(first: needJoin, second: needJoin): any {
//     return `${first}${second}`
// }


//泛型一般可以用T表示，并且可以指定多个泛型
// function join<T, P>(first: T, second: P): any {
//     return `${first}${second}`
// }
// console.log(join<string, string>("1", "2"))

//泛型作用与参数时数组的情况

// function concat<T, P>(first: T[], second: P[]) {

//     return [...first, ...second]
// }
// console.log(concat<string, number>(["1", "2", "3"], [1, 2, 3]))

//泛型可以是任何类型

class Girls<T extends string | number>{
    constructor(private girls: T[]) { }
    getGirl(index: number): T {
        return this.girls[index];
    }
}
const girls = new Girls<string>(["1", "2", "3"])
console.log(girls.getGirl(1))
