// Part 1
{
    const score = [0, 0];
    const pos = [3, 7] // -1
    let turn = 0;

    const die = (function() {
        let curr = 0;
        let times = 0;
        return {
            roll: () => {
                times++;
                return curr = (curr + 1) % 100;
            },
            times: () => times
        }
    })();

    while(score[0] < 1000 && score[1] < 1000) {
        // Roll die
        const sum = die.roll() + die.roll() + die.roll();

        // Move pawn
        pos[turn] = (pos[turn] + sum) % 10;

        // Give points
        score[turn] += pos[turn] + 1;

        // Switch turn
        turn = turn ? 0 : 1;
    }

    const losingScore = Math.min(...score);
    console.log("Part 1:", losingScore * die.times());
}

// Part 2
const hist = [1, 3, 6, 7, 6, 3, 1];
const state = {
    turn: 0,
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
    const result = [0, 0];
    [3, 4, 5, 6, 7, 8, 9].forEach((r, ri) => {
        const newScore = [...state.score];
        const newPos = [...state.pos];
        newPos[state.turn] += r;
        newPos[state.turn] %= 10;
        
        const latestScore = newScore[state.turn] += newPos[state.turn] + 1;
        if(latestScore >= 21) {
            result[state.turn] += hist[ri];
            return;
        }

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