//类的构造函数
class People {
    constructor(public name: string, public age: number) {

    }
}
class Teacher extends People {
    constructor(public height: number) {
        super("nico", 20)
    }
}
let t = new Teacher(180)
console.dir(t)
export default {}