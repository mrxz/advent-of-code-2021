let input = [
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

// Utils
let board = {}
setValue = (board, x, y, value) => board[`${x}x${y}`] = value;
increaseValue = (board, x, y) => board[`${x}x${y}`] = (board[`${x}x${y}`] || 0) + 1;
getValue = (board, x, y) => board[`${x}x${y}`];

// Parsing
let width = input[0].length;
let height = input.length;
for(let y = 0; y < input.length; y++) {
    line = input[y];
    line.split("").map(x => +x)
        .forEach((val, x) => setValue(board, x, y, val));
}

// Display util
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
increasedLevels = (board) => {
    // Important: a new board is created for each step
    // This is done because the flashes increases energy for cells
    // outside of the board, which at one point will flash themselves :-|
    let newBoard = {};
    for(let x = 0; x < width; x++) {
        for(let y = 0; y < height; y++) {
            setValue(newBoard, x, y, getValue(board, x, y) + 1);
        }
    }
    return newBoard;
}

let sum_flashes = 0;
let sync = false;
let step = 1;
while(!sync) {
    // Prepare new board.
    console.log(" --------- Step ", step, " ------------")
    
    // Increase energy levels
    board = increasedLevels(board);
    
    // Find flashes
    let allFlashes = {}
    while((flashes = Object.entries(board).filter(x => x[1] > 9)).length > 0) {
        flashes.forEach(flash => {
            // Skip already flashed ones.
            if(allFlashes[flash[0]]) {
                return; 
            }
            let pos = flash[0].split("x").map(x => +x);;
            increaseValue(board, pos[0] - 1, pos[1] - 1);
            increaseValue(board, pos[0], pos[1] - 1);
            increaseValue(board, pos[0] + 1, pos[1] - 1);

            increaseValue(board, pos[0] - 1, pos[1]);
            increaseValue(board, pos[0], pos[1]);
            increaseValue(board, pos[0] + 1, pos[1]);

            increaseValue(board, pos[0] - 1, pos[1] + 1);
            increaseValue(board, pos[0], pos[1] + 1);
            increaseValue(board, pos[0] + 1, pos[1] + 1);

            allFlashes[flash[0]] = true;
        });

        Object.keys(allFlashes).forEach(flash => {
            let pos = flash.split("x").map(x => +x);
            setValue(board, pos[0], pos[1], 0);
        })
    }
    print(board);

    // Keep track of the flashes
    if(step <= 100) {
        sum_flashes += Object.keys(allFlashes).length;
    }

    // Check sync
    if(Object.keys(allFlashes).length === width * height) {
        sync = true;
    }

    // Advance to the next step
    step++;
}

console.log("Part 1:", sum_flashes);
console.log("Part 2:", step - 1);