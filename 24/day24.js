let input = [
"inp z",
"inp x",
"mul z 3",
"eql z x"
]

input = [
    "inp w",
    "mul x 0",  // No-op
    "add x z",  // No-op
    "mod x 26", // No-op
    "div z 1",  // No-op
    "add x 10", // X = 10
    "eql x w",  // if w === 10 -> x
    "eql x 0",  // x == 0 (^ if w !== 10)   // W can't be 10, no-op
    "mul y 0",  // No-op
    "add y 25", // y = 25
    "mul y x",  // no-op ( y - still 25)
    "add y 1",  // Y+=1 (26)
    "mul z y",  // no-op
    "mul y 0",  // no-op
    "add y w",
    "add y 15", // y += 15 (=16)
    "mul y x",   
    "add z y",  // z = 16

    "inp w",
    "mul x 0",
    "add x z",
    "mod x 26",
    "div z 1",
    "add x 12", // X = 12
    "eql x w",
    "eql x 0",
    "mul y 0",
    "add y 25", // Y = 25
    "mul y x",
    "add y 1",
    "mul z y",
    "mul y 0",
    "add y w",
    "add y 8", // y += 8 (=9)
    "mul y x",
    "add z y", // z = 

    "inp w",
    "mul x 0",
    "add x z",
    "mod x 26",
    "div z 1",
    "add x 15",
    "eql x w",
    "eql x 0",
    "mul y 0",
    "add y 25",
    "mul y x",
    "add y 1",
    "mul z y",
    "mul y 0",
    "add y w",
    "add y 2",
    "mul y x",
    "add z y",

    "inp w",
    "mul x 0",
    "add x z",
    "mod x 26",
    "div z 26",
    "add x -9",
    "eql x w",
    "eql x 0",
    "mul y 0",
    "add y 25",
    "mul y x",
    "add y 1",
    "mul z y",
    "mul y 0",
    "add y w",
    "add y 6",
    "mul y x",
    "add z y",

    "inp w",
    "mul x 0",
    "add x z",
    "mod x 26",
    "div z 1",
    "add x 15",
    "eql x w",
    "eql x 0",
    "mul y 0",
    "add y 25",
    "mul y x",
    "add y 1",
    "mul z y",
    "mul y 0",
    "add y w",
    "add y 13",
    "mul y x",
    "add z y",

    "inp w",
    "mul x 0",
    "add x z",
    "mod x 26",
    "div z 1",
    "add x 10",
    "eql x w",
    "eql x 0",
    "mul y 0",
    "add y 25",
    "mul y x",
    "add y 1",
    "mul z y",
    "mul y 0",
    "add y w",
    "add y 4",
    "mul y x",
    "add z y",

    "inp w",
    "mul x 0",
    "add x z",
    "mod x 26",
    "div z 1",
    "add x 14",
    "eql x w",
    "eql x 0",
    "mul y 0",
    "add y 25",
    "mul y x",
    "add y 1",
    "mul z y",
    "mul y 0",
    "add y w",
    "add y 1",
    "mul y x",
    "add z y",

    "inp w",
    "mul x 0",
    "add x z",
    "mod x 26",
    "div z 26",
    "add x -5",
    "eql x w",
    "eql x 0",
    "mul y 0",
    "add y 25",
    "mul y x",
    "add y 1",
    "mul z y",
    "mul y 0",
    "add y w",
    "add y 9",
    "mul y x",
    "add z y",

    "inp w",
    "mul x 0",
    "add x z",
    "mod x 26",
    "div z 1",
    "add x 14",
    "eql x w",
    "eql x 0",
    "mul y 0",
    "add y 25",
    "mul y x",
    "add y 1",
    "mul z y",
    "mul y 0",
    "add y w",
    "add y 5",
    "mul y x",
    "add z y",

    "inp w",
    "mul x 0",
    "add x z",
    "mod x 26",
    "div z 26",
    "add x -7",
    "eql x w",
    "eql x 0",
    "mul y 0",
    "add y 25",
    "mul y x",
    "add y 1",
    "mul z y",
    "mul y 0",
    "add y w",
    "add y 13",
    "mul y x",
    "add z y",

    "inp w",
    "mul x 0",
    "add x z",
    "mod x 26",
    "div z 26",
    "add x -12",
    "eql x w",
    "eql x 0",
    "mul y 0",
    "add y 25",
    "mul y x",
    "add y 1",
    "mul z y",
    "mul y 0",
    "add y w",
    "add y 9",
    "mul y x",
    "add z y",

    "inp w",
    "mul x 0",
    "add x z",
    "mod x 26",
    "div z 26",
    "add x -10",
    "eql x w",
    "eql x 0",
    "mul y 0",
    "add y 25",
    "mul y x",
    "add y 1",
    "mul z y",
    "mul y 0",
    "add y w",
    "add y 6",    
    "mul y x",
    "add z y",

    "inp w",
    "mul x 0",
    "add x z",
    "mod x 26",
    "div z 26",
    "add x -1",
    "eql x w",
    "eql x 0",
    "mul y 0",
    "add y 25",
    "mul y x",
    "add y 1",
    "mul z y",
    "mul y 0",
    "add y w",
    "add y 2",
    "mul y x",
    "add z y",

    "inp w",
    "mul x 0",
    "add x z",
    "mod x 26",
    "div z 26",
    "add x -11",
    "eql x w",
    "eql x 0",
    "mul y 0",
    "add y 25",
    "mul y x",
    "add y 1",
    "mul z y",
    "mul y 0",
    "add y w",
    "add y 2",
    "mul y x",
    "add z y",
]

input2 = [
    "inp x",
    "mul x -1"
]

input3 = [
    "inp w",
    "add z w",
    "mod z 2",
    "div w 2",
    "add y w",
    "mod y 2",
    "div w 2",
    "add x w",
    "mod x 2",
    "div w 2",
    "mod w 2"
]

let instructions = input.map(line => {
    let parts = line.split(" ");

    let operand2 = null;
    if(parts.length == 3) {
        operand2 = +parts[2]
        if(isNaN(operand2)) {
            operand2 = parts[2];
        }
    }

    return {
        op: parts[0],
        operand1: parts[1],
        operand2
    }
})

function freeze(time) {
    const stop = new Date().getTime() + time;
    while(new Date().getTime() < stop);       
}


const compute = (serial, instructions) => {
    let variables = {
        'w': 0,
        'x': 0,
        'y': 0,
        'z': 0
    }
    
    let stdinIndex = 0;
    let stdin = serial.split("").map(x => +x);
    readStdin = () => {
        return stdin[stdinIndex++];
    }

    for(let ins of instructions) {
        const lhs = variables[ins.operand1];
        const rhs = Number.isInteger(ins.operand2) ? ins.operand2 : variables[ins.operand2];
        switch(ins.op) {
            case "inp":
                const value = readStdin();
                if(value === undefined) {
                    return value;
                }
                variables[ins.operand1] = value;
                break;
            case "add":
                variables[ins.operand1] += rhs;
                break;
            case "mul":
                variables[ins.operand1] *= rhs;
                break;
            case "div":
                variables[ins.operand1] = ~~(lhs / rhs);
                break;
            case "mod":
                variables[ins.operand1] %= rhs;
                break;
            case "eql":
                variables[ins.operand1] = (lhs == rhs) ? 1 : 0;
                break;
        }

        let x = ins;
        console.log(`\t--- ${x.op} ${x.operand1} ${x.operand2 == undefined ? '' : x.operand2} ---`);
        console.log(variables);
    }



    return variables;
}

const optimize = (instructions) => {
    const result = []
    // Optimize
    for(let i = 0; i < instructions.length; i++) {
        const ins = instructions[i];
        const nextIns = instructions[i + 1];
        if(ins.op === 'mul' && ins.operand2 === 0 && nextIns.op === 'add' && ins.operand1 === nextIns.operand1) {
            result.push({
                op: 'set',
                operand1: ins.operand1,
                operand2: nextIns.operand2
            })
            i++;
        } else if(ins.op === 'div' && ins.operand2 === 1) {
            // No-op
        } else if(ins.op === 'eql' && nextIns.op === 'eql' && ins.operand1 === nextIns.operand1 && nextIns.operand2 === 0) {
            result.push({
                op: 'neql',
                operand1: ins.operand1,
                operand2: ins.operand2
            })
            i++;
        } else {
            result.push(ins);
        }
    }

    // convert neql- to ifs
    for(let i = 0; i < result.length; i++) {
        const ins = result[i];
        if(ins.op === 'inp' && i > 0) {
            result.splice(i, 0, {
                op: 'end'
            })
            i++;
        } else if(ins.op === 'neql') {
            ins.op = 'neql-if';

            // Re-write contents
            /*
            result.splice(i + 1, 4,
                {op: 'mul', operand1: 'z', operand2: 26});
            const increment = result[i + 3].operand2
            result.splice(i + 2, 4,
                {op: 'add2', operand1: 'z', operand2: 'w', operand3: increment});*/
            const increment = result[i + 6].operand2
            result.splice(i + 1, 8,
                {op: 'muladd2', operand1: 'z', operand2: 'w', operand3: increment, operand4: 26});

        }
    }
    result.push({op: 'end'})

    // Set followed by mod is, modset
    for(let i = 0; i < result.length; i++) {
        const ins = result[i];
        const nextIns = result[i + 1];
        const tIns = result[i + 2];
        if(ins.op === 'set' && nextIns.op === 'mod' && ins.operand1 === nextIns.operand1 && nextIns.operand1 === tIns.operand1 && tIns.op === 'add') {
            ins.op = 'modsetadd';
            ins.operand3 = nextIns.operand2;
            ins.operand4 = tIns.operand2;
            result.splice(i + 1, 2);
        } else if(ins.op === 'set' && nextIns.op === 'mod' && ins.operand1 === nextIns.operand1) {
            ins.op = 'modset';
            ins.operand3 = nextIns.operand2;
            result.splice(i + 1, 1);
        }
    }

    const code = [];
    for(let i = 0; i < result.length; i++) {
        const ins = result[i];
        if(ins.op === 'inp') {
            code.push('');
            code.push("w = stdin[stdinIndex++]");
        } else if(ins.op === 'add') {
            code.push(`${ins.operand1} += ${ins.operand2}`)
        } else if(ins.op === 'mod') {
            code.push(`${ins.operand1} %= ${ins.operand2}`)
        } else if(ins.op === 'div') {
            code.push(`${ins.operand1} = ~~(${ins.operand1} / ${ins.operand2})`)
        } else if(ins.op === 'mul') {
            code.push(`${ins.operand1} *= ${ins.operand2}`)
        } else if(ins.op === 'neql') {
            code.push(`${ins.operand1} = ${ins.operand1} !== ${ins.operand2} ? 1 : 0`)
        } else if(ins.op === 'eql') {
            code.push(`${ins.operand1} = ${ins.operand1} === ${ins.operand2} ? 1 : 0`)
        } else if(ins.op === 'modset') {
            code.push(`${ins.operand1} = ${ins.operand2} % ${ins.operand3}`);
        } else if(ins.op === 'modsetadd') {
            code.push(`${ins.operand1} = (${ins.operand2} % ${ins.operand3}) + ${ins.operand4}`);
        } else if(ins.op === 'set') {
            code.push(`${ins.operand1} = ${ins.operand2}`);
            /*
            if(result[i].op === 'set' && result[i].operand1 === 'y' && result[i].operand2 === 25) {
                result[i].op = 'Y=26 (if x), Z *= 26'
                result.splice(i + 1, 3);
            } else {

            }*/
        } else if(ins.op === 'neql-if') {
            code.push(`if(${ins.operand1} !== ${ins.operand2}) {`);
        } else if(ins.op === 'end') {
            code.push('}')
        } else if(ins.op === 'add2') {
            code.push(`${ins.operand1} += ${ins.operand2} + ${ins.operand3}`)
        } else if(ins.op === 'muladd2') {
            code.push(`\t${ins.operand1} = (${ins.operand1} * ${ins.operand4}) + ${ins.operand2} + ${ins.operand3}`)
        } else {
            console.log(ins);
            process.exit()
        }

    }

    return code;
}


//let serial = "13579246899999";
let serial = "111";
let variables = compute(serial, instructions);
console.log(variables);


let stdinIndex = 0;
let stdin = serial.split("").map(x => +x);


let minimal = optimize(instructions);
minimal.forEach(x => console.log(x));
//minimal.map(x => `${x.op} ${x.operand1} ${x.operand2 == undefined ? '' : x.operand2}`).forEach(x => console.log(x));
//eval(minimal.join('\n'))

serial = "11811951311485".split("").map(x => +x);


// i0 + 4 = i13     = i0: 1 - 5     i13: 5-9
// ii + 7 = i12     = i1: 1 - 2     i12: 8-9
// i2 - 7 = i3      = i2: 8 - 9     i3 : 1-2
// i4 + 3 = i11     = i4: 1 - 6     i11: 4-9
// i5 - 8 = i10     = i5: 9         i10: 1         
// i6 - 4 = i7      = i6: 5 - 9     i7 : 1-5
// i8 - 2 = i9      = i8: 3 - 9     i9 : 1-7   


const test = (stdin) => {
    let w = x = y = z = 0;
    let stdinIndex = 0;
    w = stdin[stdinIndex++]
    z = (z * 26) + w + 15

    w = stdin[stdinIndex++]
    z = (z * 26) + w + 8

    // i2 - i3 (locked)
    // (i2 + 2) - 9 = (i3)
    // i2 - 7 = i3
    w = stdin[stdinIndex++]
    z = (z * 26) + w + 2

    w = stdin[stdinIndex++]
    x = (z % 26) - 9 
    z = ~~(z / 26)
    if(x !== w) {
        z = (z * 26) + w + 6
        return false;
    }


    w = stdin[stdinIndex++]
    z = (z * 26) + w + 13


    w = stdin[stdinIndex++]
    z = (z * 26) + w + 4


    // i6 - i7 locked
    // (i6 + 1) - 5 = i7
    // i6 - 4 = i7
    w = stdin[stdinIndex++]
    z = (z * 26) + w + 1

    w = stdin[stdinIndex++]
    x = (z % 26) - 5
    z = ~~(z / 26)
    if(x !== w) {
        z = (z * 26) + w + 9
        return false;
    }

    // i8 - i9 locked
    // (i8 + 5) - 7 = i9
    // i8 - 2 = i9
    w = stdin[stdinIndex++]
    z = (z * 26) + w + 5

    w = stdin[stdinIndex++]
    x = (z % 26 - 7)
    z = ~~(z / 26)
    if(x !== w) {
            z = (z * 26) + w + 13
    }

    // i5 - i10 locked
    // i5 + 4 - 12 = i9
    // i5 - 8 = i9
    w = stdin[stdinIndex++]
    x = (z % 26 - 12)
    z = ~~(z / 26)
    if(x !== w) {
        z = (z * 26) + w + 9
        return false;
    }


    // i4 - i11 locked
    // i4 + 13 - 10 = i11
    // i4 + 3 = i11
    w = stdin[stdinIndex++]
    x = (z % 26 - 10)
    z = ~~(z / 26)
    if(x !== w) {
        z = (z * 26) + w + 6
        return false;
    }

    // i1 = i12 locked
    // i1 + 8 - 1 = i12
    // ii + 7 = i12
    w = stdin[stdinIndex++]
    x = (z % 26 - 1)
    z = ~~(z / 26)
    if(x !== w) {
        z = (z * 26) + w + 2
        return false;
    }

    // i0 - i13 locked
    // i0 + 15 - 11 = i13
    // i0 + 4 = i13
    w = stdin[stdinIndex++]
    x = (z % 26) - 11           // Z[12-21]
    z = ~~(z / 26)
    if(x !== w) {
        z = (z * 26) + w + 2
        return false;
    }

    return z;
}

console.log(test(serial));