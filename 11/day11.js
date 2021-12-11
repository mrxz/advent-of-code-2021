let input = [
"11111",
"19991",
"19191",
"19991",
"11111"
]

input = [
"5483143223",
"2745854711",
"5264556173",
"6141336146",
"6357385478",
"4167524645",
"2176841721",
"6882881134",
"4846848554",
"5283751526"
]

input = [
"6227618536",
"2368158384",
"5385414113",
"4556757523",
"6746486724",
"4881323884",
"4648263744",
"4871332872",
"4724128228",
"4316512167",
]

let board = {}
setValue = (board, x, y, value) => board[`${x}x${y}`] = value;
increaseValue = (board, x, y) => board[`${x}x${y}`] = (board[`${x}x${y}`] || 0) + 1;
getValue = (board, x, y) => board[`${x}x${y}`];
getNeighbour = (board, x, y, dir) => {
    switch(dir) {
        case 0: // North
            return getValue(board, x, y - 1);
        case 1: // East
            return getValue(board, x + 1, y);
        case 2: // South
            return getValue(board, x, y + 1);
        case 3: // West
            return getValue(board, x - 1, y);
    }
}
getNeighbourSafe = (board, x, y, dir, def) => {
    let val = getNeighbour(x, y, dir);
    if(val === undefined) {
        return def;
    }
    return val;
}

let width = input[0].length;
let height = input.length;
for(let y = 0; y < input.length; y++) {
    line = input[y];
    let values = line.split("").map(x => +x)
        .forEach((val, x) => setValue(board, x, y, val));
}

console.log(board);

print = (board) => {
    for(let y = 0; y < height; y++) {
        let line = "";
        for(let x = 0; x < width; x++) {
            let val = getValue(board, x, y);;
            if(val <= 9) {
                line += " " + val + " ";
            } else {
                line += " " + val;
            }
        }
        console.log(line);
    }
}

// Part 1
print(board);

increasedLevels = (board) => {
    let newBoard = {};
    for(let x = 0; x < width; x++) {
        for(let y = 0; y < height; y++) {
            setValue(newBoard, x, y, getValue(board, x, y) + 1);
        }
    }
    return newBoard;
}

add = (a, b) => {
    let newBoard = {};
    for(let x = 0; x < width; x++) {
        for(let y = 0; y < height; y++) {
            setValue(newBoard, x, y, getValue(a, x, y) + (getValue(b, x, y) || 0));
        }
    }
    return newBoard;
}

let sum_flashes = 0;
let sync = false;
let step = 0;
while(!sync) {
//for(let step = 0; step < 100; step++) {

    // Prepare new board.
    console.log(" --------- Step ", step, " ------------")
    
    // Increase energy levels
    let newBoard = increasedLevels(board);
    
    // Find flashes
    let allFlashes = {}
    do {
        let increaseMask = {};
        let flashes = Object.entries(newBoard).filter(x => x[1] > 9);
        flashes.forEach(flash => {
            // Skip already flashed ones.
            if(allFlashes[flash[0]]) {
                return; 
            }
            let pos = flash[0].split("x").map(x => +x);;
            increaseValue(increaseMask, pos[0] - 1, pos[1] - 1);
            increaseValue(increaseMask, pos[0], pos[1] - 1);
            increaseValue(increaseMask, pos[0] + 1, pos[1] - 1);

            increaseValue(increaseMask, pos[0] - 1, pos[1]);
            increaseValue(increaseMask, pos[0], pos[1]);
            increaseValue(increaseMask, pos[0] + 1, pos[1]);

            increaseValue(increaseMask, pos[0] - 1, pos[1] + 1);
            increaseValue(increaseMask, pos[0], pos[1] + 1);
            increaseValue(increaseMask, pos[0] + 1, pos[1] + 1);
        });
        flashes.forEach(x => allFlashes[x[0]] = true);

        //console.log();
        //print(increaseMask);
        //console.log();
        newBoard = add(newBoard, increaseMask);

        Object.keys(allFlashes).forEach(flash => {
            let pos = flash.split("x").map(x => +x);
            setValue(newBoard, pos[0], pos[1], 0);
        })
        //print(newBoard);
    } while(Object.entries(newBoard).filter(x => x[1] > 9).length > 0);
    print(newBoard);

    board = newBoard;
    sum_flashes += Object.keys(allFlashes).length;
    step ++;

    if(step == 100) {
        console.log(sum_flashes);
        //break;
    }

    // Check sync
    if(Object.keys(allFlashes).length === width * height) {
        sync = true;
    }
}

