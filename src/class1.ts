// public protected private
// public 可以在类的外部被访问
// private 只允许在类的内部被访问
// protected 允许在类内和被继承的子类中被访问
class People {
    private name: string
    protected age: number
    constructor(name:any,age:any){
        this.name = name
        this.age = age
    }
    public sayName(): void {
        this.name = "nico"
        console.log(this.name)
    }
}
class Teacher extends People {
    sayMyAge(): void {
        this.age = 20;
        console.log(this.age)
    }
}
let t = new Teacher("nico",20)
t.sayMyAge()

export default t