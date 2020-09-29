//getter setter，用于对私有属性进行处理
class People {
    constructor(private _name: string) { }
    get name() {
        return this._name + "hello"
    }
    set name(name: string) {
        this._name = (name + "nihao");
    }
}

let p = new People("nico")
p.name = "momo"
//staitc修饰符修饰的属性，方法，不需要new 即可使用s
class Dog {
    static sayWang():void{
        console.log("wang")
    }
}

Dog.sayWang();
export default {}