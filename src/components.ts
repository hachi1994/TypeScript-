    export class Header {
        constructor() {
            let div = document.createElement("div")
            div.innerHTML = "<p>header</p>"
            document.body.appendChild(div)
        }
    }
    export class Body {
        constructor() {
            let div = document.createElement("div")
            div.innerHTML = "<div>body</div>"
            document.body.appendChild(div)
        }
    }
    export class Footer {
        constructor() {
            let div = document.createElement("div")
            div.innerHTML = "<div>footer</div>"
            document.body.appendChild(div)
        }
    }
