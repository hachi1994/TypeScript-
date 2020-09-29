//readolny 属性
class People {
    public readonly name: string
    constructor(name: string) {
        this.name = name
    }
}

let p = new People("nico")
//抽象类
abstract class BasketballPlayer {
    abstract play(): any
}

class NbaPlayer extends BasketballPlayer {
    play(): void {
        console.log("在nba打球")
    }
}
class CbaPlayer extends BasketballPlayer {
    play(): void {
        console.log("在cba打球")
    }
}
class WnbaPlayer extends BasketballPlayer {
    play(): void {
        console.log("在wnba打球")
    }
}

function foo(value:(WnbaPlayer|CbaPlayer)):any{
    (value as WnbaPlayer).play()
    if("play" in value){
        value.play()
    }
    if(value instanceof WnbaPlayer){
        value.play()
    }
}
enum PLAYER {
    WADE,
    DURANT,
    JAMES
}
console.log(PLAYER.WADE)