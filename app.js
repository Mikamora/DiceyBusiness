let f = 0;
let con = document.querySelector(".con");
let sums = document.querySelector(".sum");
class Die {
    constructor() {
        let div = document.createElement("div"); //could have added this. instead of let to pretty much everything
        div.className = "die";
        let val = this.Roll();
        div.textContent = val;
        div.value = val;
        con.appendChild(div);
        div.addEventListener("click", () => {
            let val = this.Roll();
            div.textContent = val;
        })
        div.addEventListener("dblclick", () => {
            con.removeChild(div);
        })
        let btn2 = document.querySelector(".roll"); //rerolls
        btn2.addEventListener("click", () => {
            val = this.Roll();
            div.textContent = val;
            div.value = val;
        })
    }
    Roll() {
        return randomVal(1, 7);
    }
}

let btn1 = document.querySelector(".btn"); //adds die
btn1.addEventListener("click", () => {
    let create = new Die();
})

let btn3 = document.querySelector(".sumDice");
btn3.addEventListener("click", () => {
    if(f == 1){
        let g = document.querySelector(".sums");
        sums.removeChild(g);
    }
    let sum = 0;
    let die = document.querySelectorAll(".die");
    for(let i = 0; i < die.length; i++){
        sum += parseFloat(die[i].innerHTML);
    }
    let div = document.createElement("div");
    div.className = "sums";
    div.textContent = `Sum: ${sum}`;
    sums.appendChild(div);
    f = 1;
})


function randomVal(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; //random num in between 2 numbers
}