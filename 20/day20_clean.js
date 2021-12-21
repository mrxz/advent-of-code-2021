const input = [ 
    "#..###.##....#.#.#...#.#.#...##...####......##.##..###...#.####..#..#..#####..#.##.....#..#.###.##...#.#.....#...##.##.##...#####.#.#.#.##.###.#.##..#.##.##.#..#...####.#.#.....#..#.....###.#..#.#.#.#...#.###..#.###..##.#..#...##...####.#.........###..#.##.#..#.#...##.#.#.##.####.###....#####..###...##..#####..###..##..#.#.#..###.##.###..#.#######.####..#....###.##...#.####..#.#######...###...##.##.###...##..#.....#.###....#..#.#..###.#...#######.#...##..#.#..##.#...##.#..##.##..#...#.#.##.####........#..#.",
    "",
    "#.###...#..#...###..#..#.#....#####.#...#..#####...#.##...#....#.#.#..#.#.........#..##..#..#.#..#..",
    "###.#..##.#.##.#......#.###.##..###.#..#.###..####.#...#.....#...#.#.#..#######..#.#.##.#.#####..###",
    ".....##...#..#.#..#....###.##..######.#..#.###.###.###.#.#.##.####.#..#.#....##..#.##.#.........#.#.",
    ".#####...##...###..####.##.##.#..###.#.#..##..###...##.#..#...###.###.#.##.#.#....##.#.##.#.#..##.#.",
    "..#.....#####.#.###.###..#..##.##...#######.#...#...#.##.#.###....#.....####..#.....##.#####.###..##",
    ".###.#####.#..#...#.#....####.#..###.##...##..#..##..#........###..#..###....###.#.#..##..#...#.#..#",
    "##.##.#.##.#...###.###.###....#...##.#.#..#.##...#..#.#.#..####.#.###....#.##.#.##.#..#.#.....###.#.",
    "..#..#.###..##..#####.##.#.#..#..##...##..#..##..##....###..#.###..##..#.#..#..#..#.##.#..##.##.....",
    "###.#.#.#...#.#...#.###..#.###....##..#.##.###.....###.#..#..#####.##.#.##..#..##..###.###..###....#",
    "###......##.##..#.......####...##.#......#.#.....#..#.#.###........##.#.####.#.#.##...#..###.#.#....",
    ".##.##...#.#..#...#####.#####..#.......##..##.#.....####.###.#..#...##.#.###.#..##.##..####..#..##.#",
    ".#...#.#.#.#....###......##.....#...##...###...##....#..##.#..##.#.##.#...##.#.#.......##.#....#.#.#",
    "#..#....####...#.#.#.####...###.###.######..#.#...##.#...#.##......#.#...#.#.###.#.#.#..####..#.#...",
    "..#..##....##.##...###..###.#...#.#...#.##..#..#.#.####..#...#..#.#.##....#....#.##..#.#..#.#....#.#",
    ".#.#.########.##.#....##.#..###....#.#.###.#...##....###......##########.#..#.#.####...#..##...#..##",
    "#..##..#..#.#.#####..#####...#.###..####..##.#.#.####.#..#.#..####......#..#..##....##...#..###.#.##",
    "..###.#.#.##.##.#.#...###.#..#....####..###.##..##.#..##....###.#####.#..#...###.#.#..##...#...#####",
    "#.##.##.#..##.###.#.#.##..#...#...###..#..##.#..##....#####...#.#.#.##...####.##....#.#.##.#.##.#...",
    "##...##.#.###.####.##......##...#..#..#.....##..##..#.###.#..##.#.##.##..#..####.#########...##..#..",
    ".###..#.#..##..##..#..#...#.#..###.....#.#####..##.####...#.#...######.........####...........#..#.#",
    "#..#...##.#.##...##..##..........#..#...#..#..#.#..#.........######..####.#.##...##.##.##.....##..##",
    "#..##.#.###..##..####.#..######....#....####...##.#.#.#.#..#.##..#..#..###..#.#.#.#.#....#..##.#.#..",
    ".....##.......#.#.##.......##.##.#..###...###....##.###....##.#.####.###.##..##.#..##...###........#",
    "##..##....#.###..###.##.....##.#...##....##..#....#....###...#..#...###..#.####....#.......##.....##",
    "#..#..#.#..#...##.#.##.##...#.#.##..##..#.##..#.#...#...#.###.####..#....#####...#.###.##.####..#.##",
    "..##..##....####..#...###.############.##.#.##.####.#..#.##.#..##....#####..#.#####...###.#..#.##...",
    "...#.##.#.###.....###.#.#...##.#.#.##.##.#..##.#.##.#.##.#..#.###...#####.#..#.#..##...#.####..##..#",
    "#.#.###.####..#.#.###...##...###..#......#..##.....###.....#.##...##.#..#.#.####.#..#.#.#.##.####.##",
    ".###...####..##..#..###.#.#.#.##..##.##.#..#..##.##.#..#....#.#.###...#...#....##..##.#.##.######.##",
    "###.##....##.#.####..#########.....#.###...######.#.#....#...##...####.##.#.#.#####.....##....#.#.##",
    "######.#..#......#......###.##.#.###.#####..#.###.......####.#.###.#.#.##.##.....####...#..#.#.#####",
    "....##.#.#.#.##..##.###..#.###.##.##..###..#..#####.#####........#..##.#..##........#.##..#..#..#...",
    ".###..###.##.###.#.##.####.##.#.#...####.#..#.######.#.#####.#......#####.##..##.#.#.#.##.#..###.#.#",
    "#.##....###...#.....#..##.##.##.#..#.#..#.#.#...##..####.#..#.......####.###.#.####..#.#..##..##.#..",
    "##.#########..#....#....##...##.###..##.......####...####.#..#...###..##..##.#.#####..##.#....#..###",
    "..#..#####..####.####...#..#.#...####...#..###..#...#...########..#.#.#..###....####.....###.##...#.",
    "##.###.##..###.#.#..#..#.####...#.#...###..##...#.###.....##.#.#.#.##.#.#...###..###.###..#.#..#.#.#",
    "#.##..#.##..##.##...#.##.....##.#..#..###.##..##.#.##..#####..#####.###.##..###...#.#.#.##.##...###.",
    "..#.##.###.##.###.##.##.##......###..#.##.#..#...##.##.###..#..###.#......#.#..##..#.#..#####.......",
    "..##.#.###.###.###.##..####.#..####.#.##.#..#.######.#..##.#.#.#...#######.##..###..####.##..#..###.",
    ".####.##...#.#..#...##..#.#....#.#.##.##.#.#.#..##.#.#......####....###.####..#######.##.#....#.#.#.",
    "###.#.##.......#...###...##.#.##.##...#..#.#..###.####.#.###.#.#.##.#.#.###....#....#.#....#..#.#..#",
    ".#......#...#.#...#.##.#.###...#...##...#.###.#..#..#...#.#.#.###.##...###..##..###..#.#.##.#...####",
    "##.##...##..##...##..#...###...###..##.##.#......#..###.....##..#.#.#####...#######.#.####.#........",
    "#..#.....##..##.#.##..#.####......###..#...#.###.######..#.###..#.##..#.#....###..#..########..#.#..",
    "##.#..#......###.#.##....#.#...##...##.#..##......###..####.###.###.#.....#...##....#####.###..##..#",
    "###.......#.#.##....##..#.#..####.#.#..#.#..#...###.#.#.###.#####...####.#..#.##..#.....#.#.....#...",
    ".##.#..###....#.#####..###...##.#...####.###...#.######.#..###...#...#######.#.##.#....##.#.##...###",
    "#....#..#.#.#####..###.##..#.####..##.#.#....#.#.##.....##...#..#.###.#...#....#..#....###.#..#.###.",
    "#..#.#######.##..#.#..#.##..#######..####....#.#.###..###......###.####.#.....##..#.##.#.....###..##",
    ".###.#..##.......###..#.##....#......#.##..#.##..##.####.....###.#...#.#..##....#.#.###.###.#.#.##.#",
    "...#####.#.###....#..#.....###.#.....#..#..#..###...###.###..#....#####.#.###..#.....#..######....#.",
    "#..####...#...##..##.####..###.....##.###..#.###.#.#.##..#..#####...##.#...##.#..##.##.##.#....#....",
    "#...#.####......#.##..##.#.##.#.#####..#######.##.##.#.#.......#.#.#...##.####.###..#..#....#####.##",
    "..##...###...##.#..##..#...##.#.......#..#...#.#....#.###..##.#.###..##.#..####.######..#..#.##.#..#",
    ".##.....#.##..#..##......###.###.#......####..####.#.#.#...#..#..#..###..#..#...#.####.#.##..###.###",
    "........###.####...#...##..##..#.###..##..##.#...#..##.##....###.##.#.#..###.#.####....##..#.####.##",
    ".#..#...###.##.#....#.#.##...#..##..#.##...#...#.######.##.##.#####....##.###..####.....#.#..#...#.#",
    "#.#....##....#.######.##..#...##.##.#..#..#.#...#.##..##....###.#.#.#.#.#.######...##..###.#.##...#.",
    "..#....####.#.#############.####...#####......####.##.##.##..#..##.#....####..####.#..####.#.#..#.##",
    "#.##.#..#..####...#######....#...####.#..####....#####..##..#######..#.#....##.......#.#..#..####.#.",
    "#.#..#.#.#...####..#.....####.#...###...###.#.##.##.#.##.#........#.##..##.###.##.......#.###.....##",
    "..#.#.###.#.###.#.....###.#...##...#..#.....###.#..#..#..#...##..#..#.##..#..#.#.##..##.....#...##..",
    "..##.###.##.##..##.##.####..##..#.#.##.##.#...##...##....###..##...#..###.##.##.....###.#.##.##.#.##",
    "#.####...##.###..####...#.##.#####.#....#.#..#.....#......##..##.######...#....####...#..#.#..#..#.#",
    ".###..#.#.##.#.....###.#..#..#..#...####.#.####.#...###.##....###..##.##..#.##.#...#.#.#...####..##.",
    "##..##..####.####.#.##.#.#..####..##.######.###...##.##..#.#####.###..##...#.....##.##..#..###..####",
    "#..##.####.#.#.#####.....##.####..##..###...##...##...##....#.#.#...######...#...........##..###.##.",
    "...###.##...#.#.##...####...#..#.######.####.##.##.#....#.#.###..#.##...###.#...##.....##...###..##.",
    ".....#.###.##.....##.###.#.#..###..##..#..#.#.###..####......#.#####..##.####..###..##.#######.##.##",
    "#...#..#...##..#...####.##...#.#..##.......#.#...#.##.####.....#########...##....####.......#.###.##",
    ".#.....#.....####...#####..###.#.........##..##.##.#...#.#..#.#.#.#.#.###.#####..####..#......##.#.#",
    "#..#..###.#..#######.#..###.##..#..##.#..#..#.##.###.#..###.###..........#.###.#####.#.##.#.#...##..",
    ".##..###.#.#####.##.####.#.#..#..###....##.#.#..###.#.##..#.#..###..##.#.##.....#.#.#.#.#.####.#.##.",
    "..##.###...#....##.##.#####.##....#..##.######....###..#.#.##.###.#.......######.#..#..#..###.##....",
    "#.#..#.##.###...#..#####.##.#.###.#.###.......#######....#.####...####.##..#.#.###.##..#..#..###..#.",
    "#......#.##.##....##.#..#.#....##..#.###.....#.##...#.#..#...##.####......##..#.#.#...#...#.....#.##",
    "#....##.#.##.#.......#.##.#.###..#...###.#.###.##......#..#####..##.#..#....######.##.#..#...##..##.",
    "######.#.....#.#..##.##.....##.#..####.###..#.#.###....#..###..#..##.#..#.###..#.##...####....#.#...",
    "#.#..###..#####..#....#.#...##....###..##....#.##.#......#.#.###.....#.#.#..#.#..###.#....####......",
    "#..#.###.###.#.#.#..#.##..#.#.###.#...........#.#...#.##..#....##..#.#.##..##.#...##..#.##.##.#..#.#",
    "#.....#..#.#..##.##.######.#######....###.###...#####..#.....#..##.#.##.#.###...#..##.....###...#...",
    "#####.#.#..#.#.##..#.####.#...###.##.#....##.##.####.#...####.##.#...####..#..#.####.###....###.....",
    "#...#.......##.#...#..####...#.#..#.##.###..#.#.#.##...#.###......##....########..##.####.##.####.##",
    "#..#...##.###....##.##.#.##.##..#.#.#...###..#.#........###########.##..###.###.#..#....#.###....##.",
    ".#.#..##..##.##.#....##....###.##..###..#.###.#.###.#.###..######..###...####.....#.#...#.#.#..##.#.",
    "##...#..######.#.#...#.##....#...#..#..#.##.######.#..#..#.#...##..#..#...###..###.#.#......#....#.#",
    ".#.......#...#..#####.#####.#########..#......#..#.#.##.#.#.##.#.#.........####.##.#.###...#.##..#..",
    "..###.#.....###..#..#.#..#.#..####..###.....#.####.##...#.#..#.#.#.#.#.#..###..#......#..#####.#.#..",
    "#...#....###..####...#.##.#......###.#.##.###.#..###..##....##....#..#.....#...###.##.#......#..####",
    "#.####....######.####.#.####..#.#..#..#...####..#.#####..#..##.##..#.##...###...###.#.#..###.#.##.#.",
    ".####.###.#.##...###........#...##.#.#.######..#...##.###.##..#.#.######.#####..###....##...##.##...",
    "#.###.#.###..#.#.##..####.##..#...###...####..#..####.#.######.#####..#.##.##.##.##..#.#.##..#.##...",
    ".#.......#....##..#.#.##.#.#.##..###..#..##.....####.#...###....##.##......#....#.......#...##.##...",
    ".####.###..####.#.##..#.#.#..#...#..#.##.###..######.##.##.#.####.##.##.#..#..##..######.####..#..##",
    "#.###.##..#.#......##.#...#..#..#.##.#....##.....#......#..#...#..##....#.#####..####.#.#..#..##.##.",
    "#.#....#.#.#....#.#####.......#..#..#..#.##...#.#########..##..##...####.##..##.##.##..#.##...#.#.##",
    ".####....#..#.####.###.#.##########.###.#...#..##.##.#.####.##.###.##.#..#..#.##.##....###.#...##.#.",
    "...####.#.......#......#.######.#.##...###....####.##...##...##.#..#.##..##......#...####.#..##...##",
    ".#####...#....#....##.#.####....###..#.##...#.##..##..###.#.##.##.##...#.###..###.###...###...##.#..",
]

const lookup = [...input[0]].map(x => x === '#');

// Utils
setValue = (board, x, y, value) => board[x * 10000 + y] = value;
getValue = (board, x, y, step) => {
    const key = x * 10000 + y;
    const val = board[key];
    return val === undefined ? (step % 2 === 1) : val;
};
getNeighbourValue = (board, x, y, step) => {
    // Create binary number
    let result = 0;
    result += getValue(board, x - 1, y - 1, step) ? 1 : 0;
    result <<= 1;
    result += getValue(board, x, y - 1, step) ? 1 : 0;
    result <<= 1;
    result += getValue(board, x + 1, y - 1, step) ? 1 : 0;
    result <<= 1;
    result += getValue(board, x - 1, y, step) ? 1 : 0;
    result <<= 1;
    result += getValue(board, x, y, step) ? 1 : 0;
    result <<= 1;
    result += getValue(board, x + 1, y, step) ? 1 : 0;
    result <<= 1;
    result += getValue(board, x - 1, y + 1, step) ? 1 : 0;
    result <<= 1;
    result += getValue(board, x, y + 1, step) ? 1 : 0;
    result <<= 1;
    result += getValue(board, x + 1, y + 1, step) ? 1 : 0;
    return result;
}

// Parsing
let board = {}
let width = input[2].length;
let height = input.length - 2;
for(let y = 2; y < input.length; y++) {
    line = input[y];
    line.split("").forEach((val, x) => setValue(board, x, y - 2, val === '#'));
}

// Steps
let lit = 0;
let minX = minY = 0;
let maxX = width;
let maxY = height;
for(let step = 0; step < 50; step++) {
    lit = 0;
    const newBoard = {};
    
    // Update bounds
    minX -= 1;
    minY -= 1;
    maxX += 1;
    maxY += 1;

    for(let x = minX; x <= maxX; x++) {
        for(let y = minY; y <= maxY; y++) {
            const lookupValue = getNeighbourValue(board, x, y, step);
            const val = lookup[lookupValue];
            setValue(newBoard, x, y, val)
            if(val) {
                lit++;
            }
        }
    }
    board = newBoard;
    if(step == 1) {
        console.log("Part 1:", lit);
    }
}
console.log("Part 2:", lit);