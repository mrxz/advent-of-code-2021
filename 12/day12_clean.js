let input = [
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

// Parsing
const graph = {}
input.map(line => {
    [v, w] = line.split("-");
    graph[v] = graph[v] || [];
    graph[w] = graph[w] || [];
    
    graph[v].push(w);
    graph[w].push(v);
});

// Utils
isLower = (str) => str.toLowerCase() === str;

let queue = [
    {loc: 'start', path: [], double: null}
]
//let paths = [];
let paths = 0;

while(queue.length > 0) {
    let curr = queue.splice(0, 1)[0];

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
                // There is a double, so can't visit twice
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
            paths++;
        } else {
            queue.push({
                loc: neighbour,
                path: newPath,
                double: newDouble
            });
        }
    });
}

console.log(paths);