const input = [
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

const template = input.splice(0, 2)[0];
const insertions = Object.fromEntries(input.map(x => x.split(" -> ")));

const steps = 40; // Change to 10 for part 1
const cached = [...new Array(steps + 1)].map(x => ({}));
getExpansion = (pair, steps) => {
    if(steps == 1) {
        const inserted = insertions[pair];
        return {
            [inserted]: 1
        };
    }

    // Make sure we haven't already computed this result
    if(cached[steps][pair]) {
        return cached[steps][pair];
    }

    const inserted = insertions[pair];
    const left = getExpansion(pair[0] + inserted, steps - 1);
    const right = getExpansion(inserted + pair[1], steps - 1);

    const counts = {...left};
    Object.entries(right).forEach(x => counts[x[0]] = (counts[x[0]] || 0) + x[1]);
    counts[inserted] = (counts[inserted] || 0) + 1;

    return cached[steps][pair] = counts
}

const sums = {};
for(let i = 0; i < template.length -1; i++) {
    let result = getExpansion(template.substr(i, 2), steps);
    Object.entries(result).forEach(x => {
        sums[x[0]] = (sums[x[0]] || 0) + x[1];
    });
}
for(let i = 0; i < template.length; i++) {
    sums[template[i]] = (sums[template[i]] || 0) + 1;
}
console.log(sums);

let max = Object.values(sums).reduce((a,b) => a>b ? a : b);
let min = Object.values(sums).reduce((a,b) => a<b ? a : b);
console.log(max, min, max - min);
