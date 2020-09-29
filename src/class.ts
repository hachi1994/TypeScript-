class Lady {
    name = "my Name"
    sayMyName(): string {
        return this.name;
    }
}
//继承
class XiaoJieJie extends Lady {
    sayLove(): void {
        console.log("love" + this.name);
    }
    //重写 super
    sayMyName(): string {
        return super.sayMyName() + "你好！";
    }
}
const l = new XiaoJieJie();

let a: string[] = ["1"];
export default {};
