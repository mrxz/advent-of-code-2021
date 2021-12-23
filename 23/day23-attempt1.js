let hall = ['', '', '', '', '', '', '', '', '', '', '']
let chambers = [['B', 'A'], ['C', 'D'], ['b', 'c'], ['d', 'a']] // Example
// let chambers = [['D', 'd'], ['C', 'c'], ['A', 'B'], ['a', 'b']] // Input
const doors = [2, 4, 6, 8];
const doorLookup = {
    'a': 2,
    'A': 2,
    'b': 4,
    'B': 4,
    'c': 6,
    'C': 6,
    'd': 8,
    'D': 8
}
const costLookup = {
    'a': 1,
    'A': 1,
    'b': 10,
    'B': 10,
    'c': 100,
    'C': 100,
    'd': 1000,
    'D': 1000
}
chamberIndex = (actor) => (doorLookup[actor] / 2) - 1;
doorPos = (chamberIndex) => (chamberIndex + 1) * 2;

// Iterate over each target configuration
let queue = [
    {
        hall, chambers, actor: '', cost: 0
    }
]

print = (state) => {
    console.log("#############");
    let line = state.hall.map(x => x === "" ? "." : x).join('');
    console.log("#" + line + "#");
    line = state.chambers.map(x => x[0] === "" ? "." : x[0]).join('#');
    console.log("###" + line + "###");
    line = state.chambers.map(x => x[1] === "" ? "." : x[1]).join('#');
    console.log("  #" + line + "#  ");
    console.log("  #########  ");
}

freePositionsInHall = (state, actor, x) => {
    const result = [];

    // Check to the left
    let tmpX = x;
    while(state.hall[tmpX] === '') {
        if(tmpX != 2 && tmpX != 4 && tmpX != 6 && tmpX != 8) {
            result.push(tmpX);
        }
        tmpX--;
    }

    // Check to the right
    tmpX = x;
    while(state.hall[tmpX] === '') {
        if(tmpX != 2 && tmpX != 4 && tmpX != 6 && tmpX != 8) {
            result.push(tmpX);
        }
        tmpX++;
    }

    return result;
}

isChamberSuitable = (state, chamberIndex, actor) => {
    const chamber = state.chambers[chamberIndex];
    if(chamber[0] !== '') {
        // No space
        return false;
    }

    if(chamber[1] === '' || chamber[1].toUpperCase() === actor.toUpperCase()) {
        // Completely empty, or matching amphipod
        return true;
    }
    return false;
}

moveOut = (state, chamberIndex, chamberDepth, actor) => {
    const pos = doorPos(chamberIndex);
    const targetPositions = freePositionsInHall(state, actor, pos);

    const results = [];
    let newChambers = JSON.parse(JSON.stringify(state.chambers));
    newChambers[chamberIndex][chamberDepth] = '';
    for(let x of targetPositions) {
        let newHall = [...state.hall];
        newHall[x] = actor;

        let steps = (chamberDepth + 1) + Math.abs(x - pos);
        results.push({
            hall: newHall,
            chambers: newChambers,
            actor: actor,
            cost: state.cost + steps * costLookup[actor],
        })
    }

    return results;
}

freeToChamber = (state, chamberIndex, actorPos) => {
    const door = doorPos(chamberIndex);
    let x = actorPos;
    if(x > door) {
        do {
            x--;
        } while(state.hall[x] == '' && x !== door);
    } else if(x < door) {
        do {
            x++;
        } while(state.hall[x] == '' && x !== door);
    }

    return x === door;
}

isComplete = (state) => {
    for(let x = 0; x < state.hall.length; x++) {
        if(state.hall[x] != '') {
            return false;
        }
    }
    const expected = 'ABCD';
    for(let ci = 0; ci < state.chambers.length; ci++) {
        if(state.chambers[ci][0].toUpperCase() != state.chambers[ci][1].toUpperCase()) {
            return false;
        }
        if(state.chambers[ci][0].toUpperCase() !== expected[ci]) {
            return false;
        }
    }

    return true;
}

keyState = (state) => {
    return `${state.hall.join('.')}${state.chambers.map(c => c.join('.')).join('.')}`
}

const seen = {};

let leastCost = Number.MAX_VALUE;
let depth = 0;
while(queue.length) {
    let newQueue = [];
    for(let curr of queue) {
        const key = keyState(curr);
        if(seen[key]) {
            //console.log('SEEN ', key);
            //continue;
        }
        seen[key] = true;

        if(curr.cost > leastCost) {
            // This is a lost cause
            continue;
        }

        if(isComplete(curr)) {
            if(curr.cost < leastCost) {
                leastCost = curr.cost;
                print(curr);
                console.log(leastCost);
            }
        }

        // Find out who can move
        const canMove = [];
        for(let x = 0; x < curr.hall.length; x++) {
            if(curr.hall[x] == '') {
                continue;
            }

            let actor = curr.hall[x];
            if(curr.actor == actor) {
                continue; // This actor was the last one to move, so can't move again
            }

            // Check if their target chamber is suitable
            let ci = chamberIndex(actor);
            if(isChamberSuitable(curr, ci, actor)) {
                canMove.push(actor);
                
                // TODO: check if we can move to the chamber
                if(freeToChamber(curr, ci, x)) {
                    let newChambers = JSON.parse(JSON.stringify(curr.chambers));
                    let chamberDepth = curr.chambers[ci][1] === '' ? 1 : 0;
                    newChambers[ci][chamberDepth] = actor;
                    let newHall = [...curr.hall];
                    newHall[x] = '';
                
                    let steps = (chamberDepth + 1) + Math.abs(x - doorPos(ci));
                    newQueue.push({
                        hall: newHall,
                        chambers: newChambers,
                        actor: actor,
                        cost: curr.cost + steps * costLookup[actor],
                    })
                }
            }
        }

        // Check the chambers
        for(let x = 0; x < curr.chambers.length; x++) {
            let actor = curr.chambers[x][0];
            const pos = doorPos(x);
            const targetPositions = freePositionsInHall(curr, actor, pos);
            
            if(actor != '') {
                // Check if it can move:
                // Mustn't already be done
                let targetChamberIndex = chamberIndex(actor);
                if(targetChamberIndex === x && actor.toUpperCase() === curr.chambers[x][1].toUpperCase()) {
                    // Already at the right spot!
                    continue;
                }
                
                curr.chambers[x][1].toLowerCase()
                //console.log('freePositionsInHall for', actor, targetPositions);

                const states = moveOut(curr, x, 0, actor);
                newQueue.push(...states);

                canMove.push(actor);
                continue;
            }

            actor = curr.chambers[x][1];
            if(actor != '') {
                // Check if it can move:
                //   1. This mustn't be their target chamber
                if(chamberIndex(actor) !== x) {
                    const states = moveOut(curr, x, 1, actor);
                    newQueue.push(...states);
    
                    canMove.push(actor);
                }
            }
        }

        //console.log(canMove);
    }
    queue = newQueue;
    newQueue = [];

}
