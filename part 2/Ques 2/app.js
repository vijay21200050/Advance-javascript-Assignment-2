class QueenAttack {
    constructor(qs = {w: [0, 0], b: [6, 7]}) {
        if (qs.w[0] === qs.b[0] &&
            qs.w[1] === qs.b[1])
            return 'you can not have 2 Queens on the same location on chess board';
        this.qs = qs;
    }
    canAttack() {
        let [x1, y1] = this.qs.w;
        let [x2, y2] = this.qs.b;
        return (x1 === x2 || y1 === y2 || Math.abs(x1 - x2) === Math.abs(y1 - y2));
    }
}

let game = new QueenAttack();

if(game.canAttack())
    console.log("2 Queens at the given locations can attack each other");
else
    console.log("2 Queens at the given locations can not attack each other");
