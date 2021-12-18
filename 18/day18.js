function SNumber() {}
let n = (left, right) => {
    const result = new SNumber();
    result.left = left;
    result.right = right;
    result.parent = null;
    SNumber.prototype.toString = function() {
        return `[${this.left}, ${this.right}]`;
    }
    return result;
};
let input = [
    n(1,1),
    n(2,2),
    n(3,3),
    n(4,4),
    n(5,5),
    n(6,6)
]

input = [
    n(n(n(0,n(4,5)),n(0,0)),n(n(n(4,5),n(2,6)),n(9,5))),
    n(7,n(n(n(3,7),n(4,3)),n(n(6,3),n(8,8)))),
    n(n(2,n(n(0,8),n(3,4))),n(n(n(6,7),1),n(7,n(1,6)))),
    n(n(n(n(2,4),7),n(6,n(0,5))),n(n(n(6,8),n(2,8)),n(n(2,1),n(4,5)))),
    n(7,n(5,n(n(3,8),n(1,4)))),
    n(n(2,n(2,2)),n(8,n(8,1))),
    n(2,9),
    n(1,n(n(n(9,3),9),n(n(9,0),n(0,7)))),
    n(n(n(5,n(7,4)),7),1),
    n(n(n(n(4,2),2),6),n(8,7))
]

input = [
    n(n(n(0,n(5,8)),n(n(1,7),n(9,6))),n(n(4,n(1,2)),n(n(1,4),2))),
    n(n(n(5,n(2,8)),4),n(5,n(n(9,9),0))),
    n(6,n(n(n(6,2),n(5,6)),n(n(7,6),n(4,7)))),
    n(n(n(6,n(0,7)),n(0,9)),n(4,n(9,n(9,0)))),
    n(n(n(7,n(6,4)),n(3,n(1,3))),n(n(n(5,5),1),9)),
    n(n(6,n(n(7,3),n(3,2))),n(n(n(3,8),n(5,7)),4)),
    n(n(n(n(5,4),n(7,7)),8),n(n(8,3),8)),
    n(n(9,3),n(n(9,9),n(6,n(4,9)))),
    n(n(2,n(n(7,7),7)),n(n(5,8),n(n(9,3),n(0,2)))),
    n(n(n(n(5,2),5),n(8,n(3,7))),n(n(5,n(7,5)),n(4,4)))
]


input2 = [
    n(n(n(n(4,3),4),4),n(7,n(n(8,4),9))),
    n(1,1)
]

input = [
    n(n(2,n(2,3)),n(n(n(0,0),n(2,2)),n(n(3,3),n(3,5)))),
n(n(n(8,n(8,8)),6),n(9,5)),
n(n(n(n(5,2),3),n(n(5,8),n(1,1))),n(n(n(4,2),3),n(n(1,6),4))),
n(n(n(n(6,8),n(0,9)),8),n(n(n(9,4),6),n(8,6))),
n(9,n(n(6,7),4)),
n(n(1,n(3,6)),n(5,n(n(7,4),6))),
n(n(n(n(4,7),6),n(n(8,9),5)),n(n(n(6,2),n(2,7)),n(n(9,0),n(7,0)))),
n(n(n(n(7,3),4),n(7,n(7,4))),1),
n(4,n(6,6)),
n(n(3,n(3,2)),n(n(7,1),n(n(6,4),n(6,1)))),
n(n(n(n(8,7),4),8),n(n(n(8,9),5),n(6,n(2,7)))),
n(n(4,n(3,n(4,1))),8),
n(5,n(n(5,1),9)),
n(n(3,n(n(2,4),n(3,5))),n(3,n(8,6))),
n(n(n(1,9),n(n(4,0),n(8,5))),n(n(0,n(1,0)),n(5,n(8,7)))),
n(n(n(6,6),n(n(5,0),n(3,4))),n(n(3,7),6)),
n(n(n(n(0,7),n(6,3)),n(n(2,6),8)),n(n(n(3,0),8),n(n(4,0),n(6,8)))),
n(n(n(n(0,4),n(6,3)),n(1,n(9,1))),n(n(1,n(1,4)),9)),
n(n(n(n(8,3),2),n(0,n(6,8))),n(5,n(n(4,4),n(1,8)))),
n(n(n(n(1,0),n(7,8)),6),n(3,n(n(5,4),n(4,2)))),
n(2,n(9,5)),
n(n(4,n(2,n(0,0))),n(n(1,3),n(1,9))),
n(6,n(n(n(2,6),2),9)),
n(n(6,n(1,n(7,9))),n(n(n(7,6),n(8,8)),n(1,7))),
n(n(n(3,7),n(6,9)),n(5,2)),
n(n(n(6,1),9),n(n(9,7),n(2,n(9,1)))),
n(n(n(n(2,9),7),n(n(8,1),n(2,1))),n(4,n(n(3,0),9))),
n(n(n(0,0),n(n(8,9),n(2,8))),n(n(n(8,4),5),n(0,n(1,0)))),
n(n(n(n(6,5),n(3,6)),n(n(6,0),n(0,4))),n(n(n(4,1),n(4,2)),n(5,1))),
n(n(n(6,n(2,9)),n(0,7)),n(8,n(n(7,7),n(9,9)))),
n(3,n(n(7,n(5,7)),n(6,n(9,7)))),
n(n(0,n(3,n(9,9))),n(n(3,n(5,8)),n(3,n(6,5)))),
n(n(n(5,n(7,1)),n(n(9,9),n(7,0))),n(0,8)),
n(n(n(1,n(4,5)),n(5,n(4,6))),n(1,n(n(1,0),9))),
n(n(n(n(4,2),7),n(n(0,6),7)),n(8,n(n(6,8),0))),
n(9,n(3,n(n(7,3),9))),
n(n(7,6),n(n(1,n(2,8)),n(n(3,2),n(9,1)))),
n(n(n(0,5),n(3,n(6,6))),n(n(n(1,5),n(1,8)),n(n(8,9),8))),
n(n(8,n(n(1,6),n(2,0))),n(n(n(3,7),3),0)),
n(n(n(0,n(6,2)),n(9,n(5,8))),n(n(n(1,1),4),n(8,4))),
n(n(n(n(3,5),n(5,8)),7),n(n(3,6),8)),
n(n(5,n(1,0)),n(n(n(1,3),6),n(n(6,8),5))),
n(n(n(n(7,4),0),n(5,1)),n(n(8,7),4)),
n(n(3,n(8,3)),n(n(8,n(3,8)),6)),
n(n(1,n(n(0,7),n(2,7))),n(n(2,9),n(6,n(8,3)))),
n(n(n(5,n(1,9)),n(2,n(7,0))),n(n(n(5,3),2),n(1,n(9,1)))),
n(n(n(n(0,0),n(0,9)),n(n(0,8),4)),n(n(7,n(3,9)),4)),
n(n(4,0),n(0,4)),
n(1,n(n(n(5,5),4),n(n(7,7),3))),
n(n(n(n(0,0),n(9,9)),n(n(9,8),n(8,1))),n(n(n(1,4),n(0,2)),n(1,0))),
n(n(n(1,n(4,0)),1),n(4,n(6,5))),
n(2,n(n(n(3,3),4),n(n(2,9),n(3,9)))),
n(n(n(n(3,2),n(2,6)),n(n(5,8),n(1,1))),n(n(n(4,9),9),1)),
n(n(n(5,n(1,1)),2),n(n(n(2,9),3),n(3,4))),
n(n(n(0,n(6,2)),n(4,n(3,8))),n(n(n(3,5),n(6,5)),n(n(9,9),2))),
n(n(n(n(1,2),5),n(n(5,2),n(3,0))),n(n(6,n(0,1)),n(n(3,5),8))),
n(n(2,n(n(5,2),n(5,5))),n(3,n(n(1,1),2))),
n(n(n(n(4,1),n(8,8)),n(n(2,5),2)),n(n(n(1,4),n(3,3)),1)),
n(n(n(1,1),n(2,n(3,6))),n(n(n(0,8),n(3,1)),n(n(1,1),n(2,6)))),
n(n(0,n(n(5,1),5)),n(1,n(n(0,0),7))),
n(n(n(4,1),n(n(2,7),4)),n(n(n(8,1),n(2,2)),n(n(3,1),n(1,7)))),
n(n(n(1,n(7,4)),n(n(1,8),n(7,4))),n(n(2,3),n(7,n(9,6)))),
n(n(n(9,6),n(n(6,1),5)),n(n(n(9,2),3),n(n(2,4),8))),
n(n(n(n(8,8),2),9),n(5,0)),
n(n(n(8,5),n(2,1)),n(8,n(2,9))),
n(n(n(n(5,3),9),2),n(n(n(1,0),n(2,4)),5)),
n(n(n(n(0,8),0),1),n(n(5,n(4,1)),n(5,2))),
n(n(n(n(6,4),n(6,2)),n(3,n(4,0))),n(n(n(9,6),8),n(n(6,8),n(5,3)))),
n(n(9,9),n(1,1)),
n(n(0,n(n(9,2),1)),n(n(n(6,4),n(8,3)),6)),
n(n(n(8,9),n(4,3)),n(n(2,n(2,7)),n(n(2,3),8))),
n(n(n(n(8,4),n(7,5)),n(4,2)),n(n(n(9,4),0),n(n(9,2),n(7,9)))),
n(8,n(n(n(6,8),3),n(n(5,3),5))),
n(n(n(n(9,3),0),n(1,4)),n(n(7,n(4,7)),4)),
n(n(n(5,n(4,6)),6),n(n(n(8,0),1),n(n(1,8),0))),
n(n(n(n(0,9),n(1,7)),n(3,9)),n(n(n(2,7),n(5,2)),n(n(4,6),n(7,0)))),
n(n(n(5,n(0,5)),5),n(n(n(8,9),2),n(9,6))),
n(n(6,n(6,n(9,0))),n(n(n(7,3),n(5,0)),n(2,n(1,5)))),
n(2,n(n(9,6),n(3,n(3,7)))),
n(n(n(1,6),n(7,1)),9),
n(n(n(n(2,4),2),n(n(6,1),n(6,3))),n(n(6,n(9,7)),6)),
n(n(n(n(6,6),n(2,9)),n(n(9,6),n(3,5))),n(5,3)),
n(n(n(n(7,2),6),6),n(3,n(2,n(8,2)))),
n(n(n(n(6,9),n(6,9)),3),n(n(n(6,5),4),8)),
n(7,n(n(1,8),n(n(2,1),5))),
n(n(9,5),9),
n(n(n(8,9),n(6,4)),n(n(2,2),n(n(3,5),n(9,0)))),
n(n(n(n(2,3),8),n(1,8)),n(n(n(8,2),n(3,8)),n(n(0,3),2))),
n(n(0,n(2,n(1,9))),n(9,0)),
n(n(n(n(7,9),n(0,8)),7),n(5,n(n(3,8),n(0,4)))),
n(n(n(8,9),n(1,n(6,0))),n(n(5,3),4)),
n(7,n(n(9,9),7)),
n(n(n(n(6,8),2),n(n(4,4),n(4,6))),n(n(1,n(4,6)),n(2,7))),
n(n(6,2),n(5,n(2,1))),
n(n(n(6,0),n(n(0,9),n(8,3))),n(7,n(n(1,1),n(0,1)))),
n(n(n(0,n(0,6)),n(8,0)),0),
n(n(3,n(n(4,8),5)),n(n(7,3),n(5,0))),
n(n(6,n(8,n(0,2))),2),
n(n(n(7,2),6),3),
n(n(n(3,n(1,1)),3),n(n(7,9),n(2,n(2,3)))),

]

// Fix parents
const fixParents = (a, parent = null) => {
    if(typeof a === 'number') {
        return;
    }
    a.parent = parent;
    fixParents(a.left, a);
    fixParents(a.right, a);
}


const add = (a, b) => {
    let result = n(a, b);
    a.parent = result;
    b.parent = result;
    return result;
};
const depth = (a, d = 0) => {
    if(typeof a === 'number') {
        return undefined;
    } else if(d === 4) {
        return a;
    }
    let leftDepth = depth(a.left, d + 1);
    let rightDepth = depth(a.right, d + 1)

    if(leftDepth != undefined) {
        return leftDepth;
    }
    return rightDepth;
}
const splitNeeded = (a) => {
    if(typeof a === 'number') {
        return null;
    }
    if(a.left >= 10) {
        return a;
    }
    leftSplit = splitNeeded(a.left)
    if(leftSplit) {
        return leftSplit;
    }
    if(a.right >= 10) {
        return a;
    }
    rightSplit = splitNeeded(a.right);
    return rightSplit;
}

input.forEach(x => fixParents(x));
let compute = (input) => {
    let result = input[0];
    for(let i = 1; i < input.length; i++) {
        result = add(result, input[i]);

        let stable = true;
        do {
            stable = true;

            // Reduce
            let nested = depth(result)
            if(nested) {
                //console.log("Reducing  ", ''+result, ' ==> ', ''+nested);
                stable = false;

                // Explode
                const leftNum = nested.left;
                const rightNum = nested.right;
                const isLeftChild = nested === nested.parent.left;
                // Go up the tree
                let prev = nested;
                let curr = nested.parent;
                let goneLeft = false;
                // Left
                while(true) {
                    //console.log("|", ''+curr, goneLeft);
                    if(!goneLeft) {
                        // Reached the top?
                        if(curr === null) {
                            break;
                        } else if(curr.left === prev) { // Can we go left?
                            // Need to go up
                            prev = curr;
                            curr = curr.parent;
                        } else {
                            // Can go left
                            if(typeof curr.left === 'number') {
                                curr.left += leftNum;
                                break;
                            } else {
                                prev = curr;
                                curr = curr.left;
                                goneLeft = true;
                            }
                        }
                    } else {
                        // Can we go down?
                        if(typeof curr.right !== 'number') {
                            prev = curr;
                            curr = curr.right;
                        } else {
                            curr.right += leftNum;
                            break;
                        }
                    }
                }
                // Right
                prev = nested;
                curr = nested.parent;
                let goneRight = false;
                while(true) {
                    //console.log("|", ''+curr, goneRight);
                    if(!goneRight) {
                        // Reached the top?
                        if(curr === null) {
                            break;
                        } else if(curr.right === prev) { // Can we go right?
                            // Need to go up
                            prev = curr;
                            curr = curr.parent;
                        } else {
                            // Can go right
                            if(typeof curr.right === 'number') {
                                curr.right += rightNum;
                                break;
                            } else {
                                prev = curr;
                                curr = curr.right;
                                goneRight = true;
                            }
                        }
                    } else {
                        // Can we go down?
                        if(typeof curr.left !== 'number') {
                            prev = curr;
                            curr = curr.left;
                        } else {
                            curr.left += rightNum;
                            break;
                        }
                    }
                }

                if(isLeftChild) {
                    nested.parent.left = 0;
                } else {
                    nested.parent.right = 0;
                }
            } else {
                // Check for splitting
                let split = splitNeeded(result);
                if(split) {
                    stable = false;
                    //console.log("Splitting ", ''+result, ' ==> ', ''+split);
                    isLeft = split.left >= 10;
                    if(isLeft) {
                        let leftNum = Math.floor(split.left / 2);
                        let rightNum = Math.ceil(split.left / 2);
                        split.left = n(leftNum, rightNum);
                        split.left.parent = split;
                    } else {
                        let leftNum = Math.floor(split.right / 2);
                        let rightNum = Math.ceil(split.right / 2);
                        split.right = n(leftNum, rightNum);
                        split.right.parent = split;
                    }
                    
                }
            }
        } while(!stable);

        console.log('-----------------------------------------------------')

        console.log(' = '+result);
    }
    return result;
}


magnitute = (a) => {
    if(typeof a === 'number') {
        return a;
    }
    return magnitute(a.left) * 3 + magnitute(a.right) * 2;
}
clone = (a) => {
    if(typeof a === 'number') {
        return a;
    }
    const result = {
        left: clone(a.left),
        right: clone(a.right)
    }
    return result;
}

clonedInput = input.map(x => {
    let res = clone(x);
    fixParents(res);
    return res;
});

const result = compute(clonedInput);
console.log(magnitute(result));

// Check all pairs
let max = 0;
for(let i = 0; i < input.length; i++) {
    for(let j = 0; j < input.length; j++) {
        if(i === j) {
            continue;
        }
    
        let left = clone(input[i]);
        let right = clone(input[j]);
        fixParents(left);
        fixParents(right);
        let result = compute([left, right]);
        let mag = magnitute(result);
        if(mag > max) {
            //console.log(''+input[i], '+ '+input[j]);
            max = mag;
        }
    }
}
console.log(max);
