let hall = ['', '', '', '', '', '', '', '', '', '', '']
//let chambers = [['B', 'A'], ['C', 'D'], ['B', 'C'], ['D', 'A']] // Example
//let chambers = [['D', 'D'], ['C', 'C'], ['A', 'B'], ['B', 'A']] // Input
//let chambers = [['B', 'D', 'D', 'A'], ['C', 'C', 'B', 'D'], ['B', 'B', 'A', 'C'], ['D', 'A', 'C', 'A']]
let chambers = [['D', 'D', 'D', 'D'], ['C', 'C', 'B', 'C'], ['A', 'B', 'A', 'B'], ['B', 'A', 'C', 'A']] // Input
const doors = [2, 4, 6, 8];
const doorLookup = {
    'A': 2,
    'B': 4,
    'C': 6,
    'D': 8
}
const costLookup = {
    'A': 1,
    'B': 10,
    'C': 100,
    'D': 1000
}
chamberIndex = (actor) => (doorLookup[actor] / 2) - 1;
doorPos = (chamberIndex) => (chamberIndex + 1) * 2;

print = (state) => {
    console.log("#############");
    let line = state.hall.map(x => x === "" ? "." : x).join('');
    console.log("#" + line + "#");
    for(let cd = 0; cd < state.chambers[0].length; cd++) {
        if(cd === 0) {
            line = state.chambers.map(x => x[cd] === "" ? "." : x[cd]).join('#');
            console.log("###" + line + "###");
        } else {
            line = state.chambers.map(x => x[cd] === "" ? "." : x[cd]).join('#');
            console.log("  #" + line + "#  ");
        }
    }
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
    return chamber.some(x => x === '') // Some empty spot
        && chamber.every(x => x === '' || x === actor) // Matching amphipods
}

cloneChambers = (chambers) => chambers.map(c => c.map(x => x));

moveOut = (state, chamberIndex, chamberDepth, actor) => {
    const pos = doorPos(chamberIndex);
    const targetPositions = freePositionsInHall(state, actor, pos);

    const results = [];
    let newChambers = cloneChambers(state.chambers);
    newChambers[chamberIndex][chamberDepth] = '';
    for(let x of targetPositions) {
        let newHall = [...state.hall];
        newHall[x] = actor;

        let steps = (chamberDepth + 1) + Math.abs(x - pos);
        results.push({
            hall: newHall,
            chambers: newChambers,
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
        if(!state.chambers[ci].every(x => x === expected[ci])) {
            return false;
        }
    }

    return true;
}

// Iterate over each target configuration
const queue = [
    {
        hall,
        chambers,
        cost: 0
    }
]

let leastCost = Number.MAX_VALUE;
while(queue.length) {
    let newQueue = queue;
    const curr = queue.pop();
    //print(curr);
    //for(let curr of queue) {

        if(curr.cost > leastCost) {
            // This is a lost cause 
            // Note: already handled before pushing new states.
            continue;
        }

        if(isComplete(curr)) {
            if(curr.cost < leastCost) {
                leastCost = curr.cost;
                print(curr);
                console.log(leastCost);
            }
        }

        // Check the chambers
        chamber:
        for(let x = 0; x < curr.chambers.length; x++) {
            for(let cd = 0; cd < curr.chambers[0].length; cd++) {
                let actor = curr.chambers[x][cd];
                const pos = doorPos(x);
                
                if(actor != '') {
                    // Check if it can move:
                    // Mustn't already be done
                    let targetChamberIndex = chamberIndex(actor);
                    if(targetChamberIndex === x) {
                        // Is everyone below the actor the same?
                        let ready = true;
                        for(let cd2 = cd; cd2 < curr.chambers[0].length; cd2++) {
                            ready = ready && curr.chambers[x][cd2] === actor;
                        }
                        if(ready) {
                            // Already at the right spot!
                            continue chamber;
                        }
                    }
        
                    const states = moveOut(curr, x, cd, actor);
                    for(let state of states) {
                        if(state.cost < leastCost) {
                            newQueue.push(state);
                        }
                    }

                    // Since actor is in first layer of chamber, second layer can never move from this state.
                    continue chamber;
                }
            }
        }

        // Check the hallway
        for(let x = 0; x < curr.hall.length; x++) {
            if(curr.hall[x] == '') {
                continue;
            }

            let actor = curr.hall[x];

            // Check if their target chamber is suitable
            let ci = chamberIndex(actor);
            if(isChamberSuitable(curr, ci, actor)) {
                // Check if the actor can walk to the chamber
                if(freeToChamber(curr, ci, x)) {
                    let newChambers = cloneChambers(curr.chambers);
                    let chamberDepth = curr.chambers[ci].lastIndexOf('');
                    newChambers[ci][chamberDepth] = actor;
                    let newHall = [...curr.hall];
                    newHall[x] = '';
                
                    let steps = (chamberDepth + 1) + Math.abs(x - doorPos(ci));
                    let newCost = curr.cost + steps * costLookup[actor];
                    if(newCost < leastCost) {
                        newQueue.push({
                            hall: newHall,
                            chambers: newChambers,
                            cost: newCost,
                        })
                    }
                }
            }
        }

    //}
    //queue = newQueue;
    //newQueue = [];
}
console.log('done');