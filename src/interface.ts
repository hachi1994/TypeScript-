interface Driver {
    driver(): void
}
interface Man extends Driver {
    name: string
    age: number
    height: number
    weight?: number
    [propname: string]: any
    sayHi(): string
}
const m: Man = {
    name: "lhc",
    age: 20,
    height: 10,
    weight: 90,
    sex: "man",
    sayHi: function () {
        return "hi"
    },
    driver() {
        console.log("dirver")
    }
}
function f(man: Man): void {
    console.dir(man);
}
f(m)

export default {};