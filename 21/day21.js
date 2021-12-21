let score = [0, 0];
let pos = [8, 2] // -1
let turn = 0;

let die = (function() {
    let curr = 0;
    let mod = 100;
    let times = 0;
    return {
        roll: () => {
            times++;
            curr++;
            if(curr > mod) {
                curr = 1;
            }
            return curr;
        },
        times: () => times
    }
})();

while(score[0] < 1000 && score[1] < 1000) {
    // Rolls
    const rolls = [die.roll(), die.roll(), die.roll()];
    const sum = rolls.reduce((a,b) => a+b);

    pos[turn] += sum;
    pos[turn] %= 10;

    let scorez = pos[turn] + 1;
    score[turn] += scorez;

    if(turn === 0) {
        turn = 1;
    } else {
        turn = 0;
    }

    //console.log(rolls, pos, score)
}

console.log(score, die.times(), score[1] * die.times());

// Part 2
const hist = [1, 3, 6, 7, 6, 3, 1];
let state = {
    turn: 0, // Player 1,
    score: [0, 0],
    pos: [8, 2]
}

count = (state) => {
    if(state.score[0] >= 21) {
        return [1, 0];
    } else if(state.score[1] >= 21) {
        return [0, 1];
    }

    // A roll has 7 possible outcomes
    let result = [0, 0];
    [3, 4, 5, 6, 7, 8, 9].forEach((r, ri) => {
        const newScore = [...state.score];
        const newPos = [...state.pos];
        newPos[state.turn] += r;
        newPos[state.turn] %= 10;
        
        newScore[state.turn] += newPos[state.turn] + 1;
        const newState = {
            turn: state.turn === 1 ? 0 : 1,
            score: newScore,
            pos: newPos,
        }

        const subResult = count(newState);
        result[0] += subResult[0] * hist[ri];
        result[1] += subResult[1] * hist[ri];
    });

    return result;
}

console.log(count(state));