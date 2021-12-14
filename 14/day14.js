let input = [
    "NNCB",
    "",
    "CH -> B",
    "HH -> N",
    "CB -> H",
    "NH -> C",
    "HB -> C",
    "HC -> B",
    "HN -> C",
    "NN -> C",
    "BH -> H",
    "NC -> B",
    "NB -> B",
    "BN -> B",
    "BB -> N",
    "BC -> B",
    "CC -> N",
    "CN -> C"
]

input = [
    "VNVVKSNNFPBBBVSCVBBC",
"",
"SV -> C",
"SF -> P",
"BP -> V",
"HC -> B",
"PK -> B",
"NF -> C",
"SN -> N",
"PF -> S",
"ON -> S",
"FC -> C",
"PN -> P",
"SC -> B",
"KS -> V",
"OS -> S",
"NC -> C",
"VH -> N",
"OH -> C",
"BB -> H",
"KV -> V",
"HP -> S",
"CP -> H",
"SO -> F",
"KK -> N",
"OO -> C",
"SH -> O",
"PB -> S",
"KP -> H",
"OC -> K",
"BN -> F",
"HH -> S",
"CH -> B",
"PC -> V",
"SB -> N",
"KO -> H",
"BH -> B",
"SK -> K",
"KF -> S",
"NH -> O",
"HN -> V",
"VN -> F",
"BC -> V",
"VP -> C",
"KN -> H",
"PV -> S",
"HB -> V",
"VV -> O",
"PO -> B",
"FN -> H",
"PP -> B",
"BF -> S",
"CB -> S",
"NK -> F",
"NO -> B",
"CC -> S",
"OF -> C",
"HS -> H",
"SP -> C",
"VB -> V",
"BK -> S",
"CO -> O",
"NS -> K",
"PH -> O",
"BV -> B",
"CK -> F",
"VC -> S",
"HK -> B",
"BO -> K",
"HV -> F",
"KC -> V",
"CN -> H",
"FS -> V",
"VS -> N",
"CF -> K",
"VO -> F",
"FH -> H",
"NB -> N",
"PS -> P",
"OK -> N",
"CV -> O",
"CS -> K",
"HO -> C",
"KB -> P",
"NN -> V",
"KH -> C",
"OB -> V",
"BS -> O",
"FB -> H",
"FF -> K",
"HF -> P",
"FO -> F",
"VF -> F",
"OP -> S",
"VK -> K",
"OV -> N",
"FK -> H",
"FP -> H",
"NV -> H",
"NP -> N",
"SS -> C",
"FV -> N",
]

let template = input.splice(0, 2)[0];
let insertions = Object.fromEntries(input.map(x => x.split(" -> ")));

// Simulate first two
cached = {};
getExpansion = (pair, steps) => {
    if(steps == 1) {
        let inserted = insertions[pair];
        let counts = {};
        counts[inserted] = 1;
        return {
            left: pair[0],
            counts: counts,
            right: pair[1],
        };
    }

    //
    let key = `${steps}|${pair[0]}${pair[1]}`;
    if(cached[key]) {
        return cached[key];
    }

    let inserted = insertions[pair];
    let left = getExpansion(pair[0] + inserted, steps - 1);
    let right = getExpansion(inserted + pair[1], steps - 1);

    let counts = {};
    Object.entries(left.counts).forEach(x => {
        counts[x[0]] = x[1];
    });
    Object.entries(right.counts).forEach(x => {
        counts[x[0]] = (counts[x[0]] || 0) + x[1];
    });
    // Add left element to the counts
    counts[left.right] = (counts[left.right] || 0) + 1;

    let result = {
        left: left.left,
        counts: counts,
        right: right.right,
    };
    cached[key] = result;
    return result;
}

let sums = {};
for(let i = 0; i < template.length -1; i++) {
    let result = getExpansion(template[i] + template[i + 1], 40); // Change to 10 for part 1
    Object.entries(result.counts).forEach(x => {
        sums[x[0]] = (sums[x[0]] || 0) + x[1];
    });
}
for(let i = 0; i < template.length; i++) {
    sums[template[i]] = (sums[template[i]] || 0) + 1;
}
console.log(sums);
let max2 = Object.values(sums).reduce((a,b) => a>b ? a : b);
let min2 = Object.values(sums).reduce((a,b) => a<b ? a : b);
console.log(max2, min2, max2 - min2);

process.exit();

// Old part 1 solution
for(let step = 0; step < 10; step++) {
    let copy = [...template];
    for(let i = 0; i < copy.length - 1; i++) {
        let key = `${copy[i]}${copy[i + 1]}`;
        if(insertions[key]) {
            copy.splice(i + 1, 0, insertions[key]);
            i++;
        }
    }
    template = copy.join('');
    console.log(step, template.length);
}

counters = {};
[...template].forEach(x => {
    counters[x] = (counters[x] || 0) + 1;
});

let max = Object.values(counters).reduce((a,b) => a>b ? a : b);
let min = Object.values(counters).reduce((a,b) => a<b ? a : b);
console.log(max, min, max - min);

//console.log(template, insertions);