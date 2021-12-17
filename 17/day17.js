let target = {
    x1: 20,
    x2: 30,
    y1: -10,
    y2: -5
}

target = {
    x1: 70,
    x2: 96,
    y1: -179,
    y2: -124,
}

let xVel = 6;
let yVel = 9;

inside = (x, y) => {
    return x >= target.x1 && x <= target.x2 && y >= target.y1 && y <= target.y2;
} 

works = (xVel, yVel) => {
    let x = 0;
    let y = 0;
    let step = 0;
    let maxY = 0;
    let wasInside = false;
    while(y >= target.y1) {
        wasInside |= inside(x, y); 
        //console.log(step, x, y, wasInside);
        x += xVel;
        y += yVel;
        if(y > maxY) {
            maxY = y;
        }
        if(xVel > 0) {
            xVel--;
        } else if(xVel < 0) {
            xVel++;
        }
        yVel--;


        step++;
    }

    return wasInside ? maxY : null;
}

let totalMax = null;
let count = 0;
for(let xVel = 0; xVel <= target.x2; xVel++) {
    for(let yVel = 500; yVel > -500; yVel--) {
        let res = works(xVel, yVel);
        if(res == null) {
            continue;
        }
        count++;
        console.log(xVel, yVel, res);

        if(totalMax == null || res > totalMax.maxY) {
            totalMax = {
                maxY: res,
                xVel, yVel
            }
        }
    }
}
console.log(count, totalMax);