let input = [
    "start-A",
    "start-b",
    "A-c",
    "A-b",
    "b-d",
    "A-end",
    "b-end"
]

input2 = [
    "fs-end",
"he-DX",
"fs-he",
"start-DX",
"pj-DX",
"end-zg",
"zg-sl",
"zg-pj",
"pj-he",
"RW-he",
"fs-DX",
"pj-RW",
"zg-RW",
"start-pj",
"he-WI",
"zg-he",
"pj-fs",
"start-RW"
]

input = [
    "pq-GX",
"GX-ah",
"mj-PI",
"ey-start",
"end-PI",
"YV-mj",
"ah-iw",
"te-GX",
"te-mj",
"ZM-iw",
"te-PI",
"ah-ZM",
"ey-te",
"ZM-end",
"end-mj",
"te-iw",
"te-vc",
"PI-pq",
"PI-start",
"pq-ey",
"PI-iw",
"ah-ey",
"pq-iw",
"pq-start",
"mj-GX",
]

graph = {}

input.map(line => {
    line = line.split("-");
    graph[line[0]] = graph[line[0]] || [];
    graph[line[1]] = graph[line[1]] || [];
    
    graph[line[0]].push(line[1]);
    graph[line[1]].push(line[0]);
})

isLower = (str) => str.toLowerCase() === str;
getKey = (node) => `${node.path.join("-")}-${node.loc}|${node.double}`;

let queue = [
    {loc: 'start', path: [], double: null}
]
let next_queue = [];
let paths = [];
let visisted = {};

while(queue.length > 0) {
    for(let i = 0; i < queue.length; ++i) {
        let curr = queue[i];
        let key = getKey(curr); 
        if(visisted[key]) {
            continue;
        }
        visisted[key] = true;

        // Check for neighbours.
        let neighbours = graph[curr.loc]
            .filter(n => {
                if(isLower(n)) {
                    if(n == 'start') {
                        return false;
                    }
                    // Only allowed if there is no double
                    if(curr.double == null) {
                        return true;
                    }
                    // There is a double, so tough luck
                    return curr.path.indexOf(n) === -1;
                }
                // Not lower
                return true;
            });

        neighbours.forEach(neighbour => {
            newPath = [...curr.path, curr.loc];
            newDouble = curr.double;
            if(newDouble === null && isLower(neighbour) && curr.path.indexOf(neighbour) !== -1) {
                newDouble = neighbour;
            }
            if(neighbour === 'end') {
                paths.push(newPath.join('-'))
            } else {
                next_queue.push({
                    loc: neighbour,
                    path: newPath,
                    double: newDouble
                });
            }
        });
    }

    queue = next_queue;
    next_queue = [];
}

console.log(paths);
console.log(paths.length);