let target = {
    x1: 70,
    x2: 96,
    y1: -179,
    y2: -124,
}

inside = (x, y) => 
    x >= target.x1 && x <= target.x2 && y >= target.y1 && y <= target.y2;

works = (xVel, yVel) => {
    let x = 0;
    let y = 0;
    let maxY = 0;
    while(y >= target.y1) {
        x += xVel;
        y += yVel;
        maxY = Math.max(maxY, y);

        xVel -= Math.sign(xVel);
        yVel--;

        if(inside(x, y)) {
            return maxY;
        }
    }
}

let maxY = 0;
let count = 0;
for(let xVel = 0; xVel <= target.x2; xVel++) {
    for(let yVel = -target.y1; yVel >= target.y1; yVel--) {
        let res = works(xVel, yVel);
        if(res == null) {
            continue;
        }
        count++;

        maxY = Math.max(maxY, res);
    }
}
console.log("Part 1:", maxY);
console.log("Part 2:", count);