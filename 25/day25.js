let input = [
    "v...>>.vv>",
    ".vv>>.vv..",
    ">>.>v>...v",
    ">>v>>.>.v.",
    "v>v.vv.v..",
    ">.>>..v...",
    ".vv..>.>v.",
    "v.v..>>v.v",
    "....v..v.>"
]

input = [
    ">.v>vv>>..vv>..v.v......>v>>>v.>v.>..v...v......v>....>.vv..>>..>>vv.>..vv>>.>...v...v.....>.vv..>v...>.>>...v>.>>..vv....>>.v.v>v>v>vvv.vv",
"...vvv.v.vvvv>.v.>..>.>>>v..>v...>..v..>.v>>.v..v.....>v..v.....>vv..vv...vv.v...vv>.v.>..v..v.>>.v>>>v.>>>.v..vv>>.....v.....v.v>>v......v",
"..v>..v>.>>vvv>>...v.v..>>....>vv>.>v>v..>>>v...>.......>.>>>v.>>v..vvvv...v.v.v.v...>.vv.>>v>...>.....>>....v>..v...v.....v..v>>...>.vv.v>",
"..>.....>v>.>vv.v..>>>.>...v>.>.v.>.>vvv....v...v..>.......>v>vvvv>>vv>>>.v>v....vv..v..>>.v>>v.>..vv..v.>..>...>....>.>.>.>..vvvv>.>>..>>.",
"....>.>vv.>.>>.>..vvv.>vv......>...v.v..v..v>...v.v>>..>...vv..>>.>..>v>..>..>...vv.v..v>..v..vvvv..>.v>>.>..>>v.>v>v....>..v..v..>..v>...v",
"vvvvv.v.v.....v>.vvv.............>vv.vv>v.v..>>v.>..>v>v...>v>v.>vv.>.>......v>vv>.>.>v..v>>>.v>v>.>.v>>.>>.vv.v>>>vvv..>>>v...>.>..>.>.v.v",
".v..v>..>.>v.vv.>v>v>.v.v>.>v>>v..>.....v..>>...>v>..>.>>.v>v>v.>>>.>...v>>>.v>>....>v...>.>.>.v>>v.v..>.>v..v>.vv.v..v>.>..v....v>.......v",
"...>..v.v.v>v.>..>..>.>>>v..vvvv>...>.vv>>..v....>.....>.v>>>v.vv.>v>..v..>>>..vv..>.v..v>..vv.>>.v>v.v>.....vvv>v>v>....>>......v..vv.v>.v",
"...v.v>..vv>.v.v>v..>.....>v..>>...>>v..v....>v.>v...v.>>..v>..>>..vv......v.>.>...v>.>v...v.v.v.......>..>.v>>..v..v>vv>.v>v.v>v....>..vv.",
"....>.v..>..vv..>>.>.v>>>.....>>v..v..>.v>...>....vvvv>.v..>.....>..>>v>>>vv....>.v>>.>>.>.v>vv..v....v.>>>.v>.vv...>.>.>>vv.>>.v>....v...>",
".>.v>>v>.>.......v.v>v>v..v...v..>>>v.vv.v.vv...v....v>.>>.v..>>>v.>>..vvv.v...v.>vv..>v.v...>..>>vvvv........>v.>....>.v.>...vv..>>....>.>",
"v>>.v...>v.>....>>.vv...>.>.v....>v.>..v.....v>.v>v.>>.....v>>>v...v..v..>v>.>>.>>.vv.>.v>v>>>>v.>>v.v.v...v....vv...>..v..v>v.>.v>....>>v.",
".vv.v.v...>vv..vv.vv.vvv>.>....v....>.>..v..>.v>.vvv.vv>v..v.....v>.v..>..>..v>>...vv>..>...>>.........>..v...v>........v...>....>..>>>vv>.",
".>v....>..>v>>.>>>...vv>.v.vv..v....>>>..v.>>>>v.v.>..vv.v.>v.v....>.>vvv.v..v...>vvv>.v.>vv.v..>>>.v>.>...>v.>..v>.vv...>....>>.>v>.vvv>.v",
"..>.....>v.v..v>.vv...>..vv..v.v>.>.vv.....>.vv..>v>v..v.v.v....>...v.vv.....v.>...>>.>..vv.v.vvv....>v..vv.>....vvvv.v..>v.>...v>>..>>.>..",
"v.>>..>.vv.>.>....v.vvv.v...vv....vvv..>..v.vv..>>>...>.....v.>>....v.>>>.>>.vv.v.v.v>.v>>.>vvvvv>.>....v>>.>>.v.>.v...v.v>.....vvv>v..vvv>",
"..v>v.v>.v..v..>.>vvv..vv.>..>v....>....>..>v>v..>>.v>v..v..>v.>>>>.>..v.v.vvv>.>....v.>v...v>>..>..>vv...v.>..>..vv..v.vv..>v.>..>>>>.>>.>",
"v.>vv..>..v.>vv>....>..v..v>v.vvvv.>..v.v.>v..>..>>....>.vvv>.>>>.v>.v..vvv....>.v.v>v.vv>vv>..v.>v..v..>>...>.....v.>>v.>>>vv>>>v.....v.>v",
">>>v>.>>.v>>..>.>>>..>>>.>..v.v.>.......>v>vv>v>.v.vv>v>.>v..v.>v>vv.v.>....>vvv>v.v....v.vv>.v...>>v.>v>>>..vv...>..vv...v.v.v.vv....>>vvv",
".>.v..>...>...vv.>v..>..v.>v..v.v>.>...v..vvv.v>>.>vvv>v.v.v>>..>.v>.>.v.vv...v.v>.vvv>..>.>>..vv>....>>.v.>..>...>.>>v.v.v..v.>>..v>.>..v.",
".>>.v>>..v>>.>.....v>vv>>>v.....v....v>>..v.v>v.v>vv.>>....v>....>v..>>.......>.>.vv>...>.>>>..v.....>.v.>>>..>v..>>.vv>.>vvv>>vvv........v",
"...>v>>vv..v.vv>v...v..v.....>>>>.v>>>v>v...>.>v..v.>.....v>..>.v..>>vv..v...>>>vv.>v..v.>>..>....>>.v..>>>.....v..v>>v.>...v>..>>.v.vv.>.v",
".vvv...>.v>>..>.....>.>..v>.>.v...v>>..>.>>v..>...>.v.>vvvv....>.v....>.v.....vvvv>v.>.>v..>...v...>>>>...>vv.>>v.v>.v.v.>vv..v.>v.>v>>v.>.",
">v.v>..v...>.>>>v.>.>.>v....>v...v.v.....>.>.vvv>.....vv>...vv>...>>.v.v.........>vv>v>..>.v.v>>v>v>.>..v......v>.>>>>>vv..>v.>...>>v..>v..",
">..>v.vv..v>>>..>>>v>.>v.vv.vv.>>...v>.vvv..>...>>.vvv.v......v...vvv.v.vv.>.>.>>v>>..v>>...>>>v.v.>....v>.vvvv>>>.vv.v>..v...v.>.vv.v>.>v.",
">>v.>>vv>v..v....v>v.>>.>...>.>v...>>..vv...vvvvvv...>..v>...>v.v..>>.>.v>.v.v.>>>.v.>v>>..>.vvv>vv..>v>>..v...>...v.v.>.v...vv...>v>.v..>>",
".>.v......>>.v>.>..>..v>vv>...vv.>>v..>..vv.vv..>>..v..vvv..v..vvvv.>.>>......>>.v>>....v....>>.v.v...v.>......>..v>.v.>v>..v.>..v.vvv.v>>.",
">..>.v>>.>vv...>>v>>...v.>v.v.>>v.>..>>..>.v..v.vvv>>..>>.v..>..v....v.......>>....vv>.....>>.>.vv......v>vv.v..v>v.......v..>>..v.v>>>v>>v",
"vvv..>..v>>..v>.v..>.>...>vvv.v.vvv....>.v.>>.>v.v.>.>v.>>vv>v>.v>>..>..>..v.>v.v>..v>>..>.vvv..>v.>.v.v.>vvvv.......v>.>.>..v>>>>>>..vv.>.",
"....v..vv....>v.>>v.v.>.>v.>..>.>v.v.v>.v...>>v..>..>.vvvvv.>vv.>>>v.v.v..vv.>>.>.>.v.v>..v.>vv..>v..>.v>..>.>v.>v.v...>v.v.>v...v..>vv>v.>",
".....>.v.v>>vv.......>.>>.vv>..v...v..>>>..>>v>>...>>..vv>>>..>...v>>>vv...v...>>...v..vv.>v..v>.v>..v..v.>>>.....vv..v...v...>vv..>..v>...",
">.>v>.>>.>v>>v.>v.>>>....>.....>>..v>.v.vvvv..>..>v......>...>..vv...>vv.>>..vv..v....>.v..vvv..v>v>...>.v.....>..>.>.>>..>.....>....v>>.>>",
"vv.vv>>>...>>...>...>..>....v>v.v>.v>v>.>vv>..>.v..>v.>v.v..v..>v..>vv>..v.>.>v.v..>>>v>v.>v...>.vvv>.>>v.>>v>.v>..>..v>....>vv...>v.>>....",
">vv.v>v>v>v.>v>v.>v..>vv.v>>.>...v>.v>...v>.vv>......>.v.>....v.vv..v>>...v......vv..>..>v.v>>>......v....>.>>....>.v>vvv.>>........>.vv...",
"vvv>......v>..>..v>..vv.>...>.>>.v..v>.v.v>v..>.....v..>..>.>>...vvv.>>.vv..v>>...>.>.v..>.>>v..>>.>>v.>.>.v>>>>v.v.v.v>.v....>v..v....v>>.",
"...v.>vv..>.v.vv>..v..vv..v..v..v..v....>..>v.....v>....vv.>vv>v>...v.>..>...v.>v.>>.v>vv>v>...v>v>>...>..v>.>.>>vv>.v..>>>vvv>..v......>vv",
"v.v..>v.....>v..>vv...>>..>.v....v>v.v.v..v>>...>>.v.v>...>>>v...>>.>vv...v.v>v....v.v.v...>...vv..>....v>>v>v>.v....v.>>..>>>>>.>.>.>v>.>.",
">.v>.vv.>..v...v>>...>vv....v>.>v>v>>v.v.>>v.>>..v...v.........vvv....>.>.....vv.v...>>v.vv.>>vv.>..>.v.>>...>v..v>v.v>>vvv>v.v.>v>.>v>...>",
"v..v.v.vv...>>.v>..v.....vv>>v>>>>v...v..v..>...>..v>..>>.>>>v...vv.v.v>..>.vv>....v>.v>..vv..>>vv..v..>...>>>v>v.v..>..>>vv..v>.v..v>v.v>>",
"v...v>v...>v>v>...>..v.>v...v..>>>v>..v.....vv..>....vvv>>v.......>..>>>.v>v.v.vv>.>>>>>vv>>>v.v.>>.v>>.>..v>v.v..>.>>.>v...v.v.>.>.>...>v>",
".v.>v..v.v.>.v...>v...>..v>>>v..v>.>v.>v.>...>v.v..>.v>v>>v>.......>>..>v.>>.......>v>..v>.vvv..vvv.v.......>....>v>.....>...v>.v>>>.>v.>.v",
"vv....>v.....vvv.>.>vvv..>......v>>v.>v>.v.v.vv.v>v.v......v.>v>>vvv>v.v.>..v>vv.>.v........>...vv>v>......v.v>>>.>.v>>>v.vv...>>...v>.>..>",
".v..vv.>.vv....vvv>.v.....v>v>.v>..vvv..v...>>..v..>>.>>v..v.>vv...>>>....vv>.v..v..vv..>.>>>...>>v..>..>.v>.vv>..v.>v...>.v>.>..>vv.v...vv",
">....>>>v..v>v..>v......v>>>.>..>.vv.>...>.>>>>>v..>v>..>>v......v>v...v>...v...>.>.>.v.v>v...v...v>..v>>v...>.v>>...v...>>..>.>vv>..>..vv.",
".v..v........v>.>.v>v.v>.>v.v.>>>..>..>.v>.>v>vv.v.>v....>.v.vv.>..>v>vv.>v.>..>.v..v..>v....v>vv....v.>>.>....v.>>.v...>v>..>...>...v.v>..",
">>.v.>.v>.>vv...v>>v>..v.v.>v>.>....>>>..>.v>>v.v.....v.v.....>>...v>>.vv>......v>>>.>.>v>v........>....v>..v.>.>..>>.....>v>vvv.>..v.>>..v",
".v.v..>>.vvvv..vv.>.v.v....>.v>..>v.>v.v>..v....>>>.>>>>.....>.v.v>>v>.v>>v>..>.vvvvv.v>vv.>.>v>v>>v.>........v>.v>.>>v..>.vv>>>>.>.v..>.>.",
".v...>v.v..>v.>v.>>..vv>v>.>v>.v.>v....>.....v>...vv>v.v>v>..>v>.v.>...>>.v...>>vv>..v.>>v>......v...v.........v.>v>..vv..>.>..v......v>...",
"......v..>v..>...v>.>vv>...v.v..v.vv.v.>..>v.vvvvv.>..vvvv..>vv...v>...v>>>.......vv.>.>.>>....>..v.>>..>>...>>>.>.vv.vv>v>>..v>.>..vv.....",
"..>v.......v.>vvv>..v.v...v>.vvv.>v.v.>...v>v>>.>.....v>>vv.>.>...>v..>.v.vvv>>.vv.>v...>v.>..v.v.>.v>.>.>.v.v>v..>..>...vv>>vv.>>>..>v..vv",
".>>.>v>>>....v>...>.v>v>>>.....v.v>..v.v..v.v>>v.v>v..>v..v>..v>v>.v.>>.v.>>v>.>v.vvv>..v.v.......v.>>.vv>>>>v...v.>>....>.>>vv>v..vvvv>..v",
".....>...v..v.......v.vvvv>v.v..v..v>>v>..v.v...v>..>..>>v.....>>...v.vvv.>v.v...v>>..>v.>.vvv..vv..>vv......v.v..>..>...>v>>v.v..v....>..>",
"....>..>....v....vv>..>..>v>.>>>v...>v>>..v>.>v...vv>.>.v.>.vv...v>.....v.....v.v..v..>..v>v....v.v>>>>..v...v.vv..>...v.>>..v>.v.v.>.>>.>.",
".vv....v.>>>>v>..v..>vvvv.v.>v.vv.v>..v...>..v...>>>.v>.vv>.>>.v.>v.>..>v>...v..v.>...v>.v...>>.>...>....>..v.>...>>.>.v>.vv.v>v.vvv.>.>v>.",
">vv..v>.v....v.vv..v>v.v...>.>...>v..v>>.vv.vv.>..>>.>..v...>v..>v>......>.>...>v>>vv.vv>v.v>vvv>...>......>>.....vvv....v>.vvvvv>>vvv>.>v>",
">vv>v.....>.v.>.>v..v.v.>..>.>>...v.v.vvv.>..>>..v...>vv.>.v>.v.v>....v..v.>v>...>>.v...v.vv>.>v.v..v.v.>..>>.vv.v>vv...v>v..>..>>.vv>..vv.",
".vv.vvv>..vv.>>...>..v...v..v.....>>..>>v..>vv.>...>>...v>>v.>.v..v>v>vv.>.v>v..v.>vv.v.>>>>v>...>..v..>>>.>..v>.>..vv..>>.v.>vv.vv.>>.>..v",
"v>..v>.v.....v......v..>...v>....v>v.>...v...>.>>.....>v....>v...vv>>v>>..>v.>>.v..v....v.vv..v>..v>v>.v.v.v>v....>..>vvv.vv>v>>..>.>.vv>.v",
".>.>..>>....v>...v..>v.>v..>.v>v...>v>..>>v>...............>vv.>>.>..>..v.>.>.>..v>>v>.>.>>>>v>..v.>>>v.v.>v>v.v.....v>>..v>..v.>.....>v.v>",
"v..vvv..>>v.>v>...>....vvvv...>v..vv.v>.v>.v>>>.v.v.v..v..v.v.>..>>.v..v...v.v.....>.>..v..vv.......>v>.>>..vv>>>v.>.>..v..vv.vv.>.>v>.....",
">......>.>.>v..v>vv.v..v>.>..v.......v...v..>v>>>>v>.v.v....v..>.>>v...v.vv..v..v>>>....v...v.>>>>vv..>..>v.......>.>>...>v>>v>..>v..v..v.>",
">..v..v>.....>v>.>v...v.>>vv..v.vvv...v..v.....v.v.v>>..v..vv.v>v.v.v...>...>.>.....v>..>..vv>vv....>v.....>..>..v>>v.v...v.>>v....v>>>.>>>",
">v>>>v.....v.v.v.v.>v.>.>.v.......vv.>>.vv...>...vv..v..>.v..>.>>...vvv.>vv>..vv.v.>>>v>>vvvv>>v.>.....>>v....v..v....>.v>.>.>>v>.v>..>.>v.",
"v...vvvv...vv>.v.v...vvv>.v>>...v..........>.v>>..>v..>>v..v.v>.v.vv.>.vv...v....v..>...>..>..>v.>vv>v.vv>.....vvv.vv......>.v.......v.>v.>",
"...v..>v..>...>>>vv..vv>>.>.>>vvv..vvv..vv.v>v.v..>....>>..>.v.v>..>>>v>>.v...v.>.v...vv..>>>.v>..>..v>>v>..>..>..vv..>..>.vv..v..>>.v.v...",
"v>>>.vv>.vv.>v......v..>v..>>..v>v..v..vv.>>.>>v....vv>v>.>>.v>>>>.v>....vv>>v.>...>v.>>vv.....>....v..vv.v.>.>>.v.>v.vv.>>.v...>vv.v>>>...",
">vv.>v..>..>>.>>>.v...v...v.>.v..v>..>>>v>..v.v.>.>..>..>.>>>>.>v...>.>...>.....v..vvvv.vv>>....v>..v..vv>..v.....>>...>.v...>.>>.v...vv...",
"v>>>...v.vv..vv..vvv...>.>v.v.>>...>...>.v...>v>v.>>>..vv>>v.>>>.....vv.>..>.>v>>v>>..>.>>.v.v.>.>.v.>>..>>>..v.>...v...vv.v>.v>.>.......v.",
".....>..>..>>.....>.>>v.v>>..>>v>>.v..v..vvvv.>.v.v...>..v.v>....vv>>.>.>v..v..v...v..vv>>..v....>..>.v...v.v....v.....vv>>>>v......>..>.vv",
">..>..v.v>.>>v>...>v..vv>.vv>v.>vvvvv>.v.v.v...v.>v.>..v...>.>.>.v>>.>.....>>.>.v.v>.v....>.vv.v.>.>v>>v.v>>>>.>v.>>..>vv.vv..v>v.>v.v.v.v>",
"...vvv>>v>>.v>....>.v.vv..>vvvv.>.>>.v.>>.v....>..>v.>vvvvv.....v>>v..>>v..>..vv..>vvv>.>>>..>.v...vvvv.v..v..v..vvv.v....>v...>.v.>......>",
">..v.....>.>.>.>..vvv.>>>.....>.vv>.v>.v>.>.>>>..v..vv.v.>vv..v>..>.v.v.v..vv..>.>.>.v..vv.vv...vv>v>.>>.>>>vv....>..>v>.>.v>.>>....v...>..",
"...v.v..>>.v..v.v>.v>>....vvv.>v.....>.v>>.>>...>.>....>..>>>...v>vv.v>..v>v.>>v...>v>.v>v>>>>.vv...v..>>..>.>...>..>.vv...>.>..vvvv.>..>.v",
">v.v.v..v.v.v..vv.>.>...>.v>>.>.>vv>.>>v>.>>.v.>.v.v>..v.vv.>.v...v..vvv...vv..>.>>.>v.vv...>vv>.v>>>.>>..>...>.>v..v>v>..v..v.v...v.>v>.vv",
"..v.v...v....v..>vv>vv>v.>vv>....>.>>.v>..v.>v...>>>v.>...>...>..>.>...vv..v>v.>>>v...>...v.v.>...vv....vv.v.>.vv...>v.v..vv..>v.....>>>vv.",
">.>.>>>..>>>.>>>v>...>.v>vv.....vv>..v...>.v.v>>v.>>........>>.v>v>v.....vv......>.v.>.>>>v>..v>.v...v..vv>.v.v>>....>.v>...>..v>v>v>...>..",
"v>>vv.>>>>>v>>.>v.vv>.>.>.v>vv..>v.>vv.>v....>.>...>>>v..vvv.....vv..>v...vvv..>v..vv>.>>>>.>...>>...>>>.v....v.vv>..vv.v..>v...v.>.v.vv..>",
">.>>>v........>.v>...v>..>.>.>>vv..>..vv.>.v..v>vv>..>...v..>.>v>vvvv>>v.>>.>..v..>v..v.>>.v>v>..vv>.>v.>.....>.v>>.vv.v..>..>....v.v....>.",
".v>...>.v.>.>.>v.>>......vv.v>>.v>.v...>>>...v..v..>.....>.v.vv.v..v.v>..v>......>.v.>>..vvv.v.>v.>..v>vvvv>>.v.v.v.v......v...v.v..>v...>v",
">>.vv..>.v.>>>>>..v...>.>.v.>>.>vvv.>>>.>..>v......>>v.>.>.v>>.v...>v>v..v..vv..>....v..v...>>...>v.v.>>..v>v...v..v>..>.v.>.>.>v.>.>.>.>v>",
".v.>.>>vv..>...>..v.v.>.v>v>v>....>>>>.>>....v.v>v.>v...v.v..>v>>.>.>..v.>>.vv.vvv.v..v>>>>v...>v>>.>......v...>.>....vvv.>..>.>...>..>.>vv",
".vv...v.v.>v>...v.vv..vvv>>.......>.>....>vv.v.......>vv>v.>....>.v>.>.>.v.v.v..v.v.>...v>..v.vv...>v..>v>v.>v>.v.vv..v>.v..v.v>....vv.vvv>",
"vv.>....vv.v>.v.v.vv..>v.vv>..v.v>..v.vv.v..v.v.>.>.....v>.>....v>.>v...vv>.v>.v>...v>>..v>>....vv.>....v>.>>...vv>..>.>...v..>......v.vvvv",
"..v.>vvv.>.v.>>.>.v.>.v>>...>>..v>>vv>.vv.vv>.v.vv>>.vv.v>..vv>>v....v.>...v>>..v..>v.>>v>v.>...v......v...>v.>........v.>>...>vv...>.>v.v.",
">.>>v>.v>>>..>v..>v>>v.>.vvv..v.>..>.v..v.........v>v.>..>v>.>v.>v>.vv....v..vvv........>>.>>.>>>>..>.vv>..v...>.>....vv>v...>v.vv>>>>>....",
".vvvv>..v>.v.v.....v>vv..v.vv>vv>v.v.>v...v>>v..>..>.vv>vvv>.v..>v>vv>......v>.>.v.v...vvv.v>>>.>..>vv>>.v.>v.>...>>.v>>v>>.v.v>>.v>v..>.v.",
"v.v...vvvv..v.v.>v>...v>.>..vv.vvv>>>....>v.....v>.>vvvv>vv>>.>.v>>.v.v..>..>v>>>vvv>.>>..>.>>..>vv.>v.v...vv.>v>vv..v.>>>.>v>..v..vv>....>",
".vv..>vv..>..>.>.v>.>.>>..>..>.>...>>v.>>.>.>vvv>..>v.>.>v......>>.>....>.v.>>vv.v.>vv....>vv..v.>v.v.>v>>.vv..>.v>>..v.......>.v>>.>..>v.>",
">v>..>.v>>.>.v..>vvv....v.>..>.vv.>...v>>..>..v..vvv>v>>.v.vv>>>v>>>>>.v.>vv.>..v>.>...vv.vvvv>vv.>vv..vvv..v...>.>.v..>..>v>>>v....v>>.>.>",
"v.v.vv>.>vv.>>....vvv.v>.>.>..v.>.vv..v>>..>>v>>.vv..v..>vv>>.>.>..>>.v>..>..vvv.>..vv.....v>>>.>.v..v.....>..v>>..v.vvv.>.vv....>>v..v>.v.",
">>>...v...v.vv..v..vv..>.>..v....vv...>vv>>>v..v>..>v.....>vv.v..vv>.vvv..vv>.v>v>.v....>v...>.vv..>....v.>vv>.>vv..>.vv>...>v.>v..>v>..>.>",
"..>.....>.>..>v.>..v>>.v>.>....>..>....>vv.v...v..>>v..>.>.>>.>....v.>>v.....>.>....v.v>..v.....>.>.....v>>.>v>.v.vv.v>v>...>.vv>..vv...v>.",
".v.....>>v...>vv>>v.v..>..>.>v>.>.>>>vv.v>.v>v......>.v....>.>>vv..>v..>..v...v.>..v>v..>..v...>.>.v>.v>..v.....vv.vvv>..v>v...vv.>.>...>.>",
">.......>..v.v...v>v.v..v>v.vv..>.>>>...v..v..>>>.v..>..v>..>..v..>.>.>.v..>>.v>.v..>vv>v.v.vv>..>.v..vv>vv.v.......>.v.>...>vv..>.vv.....>",
".>.>..>.>vv.>v.vvvv.>>>.v.>.v..vvv>>>>...v..v>v..v.>.>.v.v.vv....vv......vv..>.>>>>..vv..>>v>..v>>>>v.>>..>.>v.v.>...>>>..v.v.>.vv.>vv.v>..",
"..v...v>...>..>.>...>v.>v.........v..>>v....>>>.v.>v>.v..v>>>v....vv..>..>v.v.>.>....v..vvvvv..v.v.vv...v.>vv...v>>>>..vvvv..>>>v..>vv>...v",
".>v>.>.>.v>>.>>..v>...vv.......>..>...v.>v.>.v>.>vv>>.v.v.vv...v>....vv>v.v...>v..v.v.v>>v>v>>>......>v..>...vv..>.>.>..v.>>>v....>v.>.>.vv",
">v....v.v..v...>>.>v.>>.v>v>....>>.v>>v.v>>v>vv>v.>>..>..>v....>vvv.......v..v>.>>v.>>v.>...v>..v..>vv>v.v>.v......v.>.vv>>>.......>v....vv",
".v>>.>>>.>.v.>...v..>>>.v>v.>.vvv>.>..>..v..>v.v..>.>...>vv.v.v.>..>>v>.>v>.v...>>>>v.vv.vv>>>v.v.>vvvvv>>>..v>>....vv>v.>v>.v..v...v..v>v>",
"...vv.>......v..>v..>..>.>.v>.>>.vvv>>>v>v..>.vv....>>v>..v..v>.v>>.>>.>..>v.>>.v>.>.>.....v..v..v.>>....>v..>.v......v>.v..>>vv...>vvv.vvv",
"v.>......v>.>.v..>vv>v>.>v>...v..v>>v.vv....v>vvv>.v.v....v.v>....>.>v.vv.v>>>.>>>>v>>v...v...v..v>.v>>vvv>vv.v.v..v.>v..vv>.v.>.v..>vv.>..",
"..>>>v>>...>.>.....>v>vv>v...>v.v>v>>.v>>>v>..>v.....vvvv...v..>>.v.v>..>.>.>vv...vv...>>.>....>>v.>v.>.>...>v.....vv...v>....>v....v..v>..",
"..>v..vv.>...v..v.v..v.v>vv......vv.v.....v.>....>...>v......v...v>>...>..>......>>.>>..vv>...v.>.v.v>>>v.....>>.>>...vv.>.>.>vvv...>>>.v..",
"......v.>>.v>>vvv.v>..>v.>.vv....>v>>..>vv>>>.>.>..>....v..>vv.v..>v>..>..v..>v.>.>.......>>>v.vvv...>..v....>>v.>>>....>v..>.v>>>..vv>>v.>",
".>....v.vvvvv>>v..v...vv.>.>.v.>>...>.>.>v.>v...v.v>.>.>>>..vv>.v>vv..v.....v.v.v.>>vv>v>>.v....v...v>v...v>v.v>>..>...>v.v.v.v...>v.v..v.v",
"...>...>.vvv.v.>..>v>..>v.>>.>v..v.vvvv...v..v.v.>vv.vv.v.>...v...vv....>v>.v.>>v.v.>>>v.v.>...v>>..>v.>v..>......v>>.>..v.v>>v>v..>..>>.>.",
".v..v.v.v>.>...vv.v...>.>vvv>...vv......>v.v......v...>..v...>..v>..vv>v>>v>>.v>...vv>.>.v.>vv>v..>v.>.v..v.>..>..>...v.>v.v..v.>>vv.vv>..>",
".v...v...>vv...>v.v>>v.v.>v>.v>>v...>vv......>......>..v.vv...v.>>..v..v>>.v.v>v.>>.vv>>..>..vvv...>.v.>>v...vv>v...>.>.v.....vvv.vvvvv>.v.",
"v>>>>..>.v>>>v>...v..>..>>>v>>..v>.>vv...>v>>.>.v.....>v..>vv...>v.>v....>vv>...vvv.....v..>vv.v.v.v>.>v....v....vvv>.>>..>v.....>v>.v.v>..",
".>..v..>>v.vvvv>>.>>>vvvv.>>.v....>.>>.>vv...>.....v..v..v.vvv..>>..>.vv>v...v..v>>v>>.v.vvv>v>.>.v>...v..v.vv....>>.>.......>..v.>>v>...v>",
".>..v.vv>.v.>.v.>v.>v..v>..>.>.vvv..v>>..>.>v.vv>v....>v>..>.v>v>..>v........v.>vv...>.vvv>......>>.v.v...>v...v..>v...>v>.v..>.>>>.>.>....",
"...>...vv.>v>..>.>.v.v>>>>>>vv>...>v.>.>v...>>.>.>v..v.v.>......v.vvv..>...v>>v>..vv>.....>..>>v...>>>..>.>..v..v>v.vv.>...v.v>>.>v....>>..",
"....>.vv.v....v.v>.v>v.vv...v>.....v>.>v.vv.>v.>..>vv..v.vv..v>.v>....>..vv>v>v>v..>>.v....v.v>..>..v.>>..vv>>v.........>v>.>>.v.>..>.vv>..",
">.v..v.>...v...v>>v>>.v.vv>>>........>v>>.vv.v>.>.>.>..v....>vv.>.>....v.>..>.v.v.>..v.v.>v>v.>>>..>>.>.vv>v.>>>.........>..v>v.v.>>v.>>>.>",
"..v..v..v.v>...v>v..>....>........>v.v>v.>>..v...vvv....>.>>v....>.>..>.>...vv..>>v>v>.>>v..>>...>....vvvv>...v.v.v.>...>>........>.>...>..",
"...>.vv.>>....>.>.v>...>>>>>v..v....>..v.>..v...>....v..>.v>.v>vv.>v>....>...>.vv..vvv.>vvv>>.vv.>>>.v.......v.>>>>..>...v.v..v...v.v..>v>v",
"vv....>..vv>>>>vv..>>>.>....v..vv....v>..vv.>.>>..vv.>.v.....>.>.v>...>.v.>v..>.>..>>>..>.vv>>v>.v>.>>.....>.>.v.>..>..vv.>....vv>>>>>>.v>v",
".v>>v.vv......v.>>v....>.>.>v..v>v..>>.>>>.vvv>...>...v..>..>>.vv>.>...>>..>>.>.v..>>v..>>..>.v.v>v>.>......>v>v.>.v>v>..v>......v...>v..vv",
".v.v.v..v.v..vv>v..........>....vv>v>.v.v>...v>v>>.....v...vv>..vvv>.>....v.v...>>.v....vvv>.vv....>.>>..v.>.vvv>..v..v.>.>..>v....>.>>>>>.",
"vv..v.........>>v.v.v.>vv>>.v.vv....>v.>>>>v...>>vv.>.v>...vvvvv..>.>>vv.>v>vv...>..v..vv>..>>>v>.v.>vv.>.>.>..>..vv..v>..>>.v..>.>vvv.>...",
".vvv>>vvv.>>..>...>v>>.vv.>>..>>v.vv.vvvv.v>vvv.>...>>....>..v..v>>v.v..>>>...>.v.v>vv...>>..vvvv.>v>v.v..>.>...v..v>v.v>..>...vv>..>....>.",
".v>.>.>>>.>.v.vvvv>.>v>..>.vv.>.>>...vvv.v.....v>..>.>.>vvvv>>.>.>.v.v>>vvv>..>..vvv>>vv>>.v..vv>>v...>>>..v..>>..>vv....>>.v>.....vv......",
".v.>v.>vv.v.v..v>....vv.>.v.v>>>.......v.>.>>.v...v>.>...>....vvv>.vv>v.....v...v..>..>....vv.>.....v>.v.>.>..>vvv.v.>..vvv.>vv...v......v>",
"v>....v>>.v>.vv>vv.>.>..>>...>v>..v..v......>v>...v..v>..>.>....>.>.v.v...v.v>>.vv.vv..>.v>...>>..>.>v.....v..>>..>>>..v..>...>v.v.v.>>.v..",
">..vv.v.>.....>...>v>>>...v>>.vvv..>.>.>...vv>>....>.>.>v>>>.v..>v>vvvv>..v>v.v..>v>.v>>>.>>..v.v.>...v..v.v.>>.>.vv..v.vv>v..v......>v.v>.",
"vv.>....>.>v..v>.vv.>...>.......v>.>v.>.>.....v.v.>.>.>v.>>vv...>.v>.v...vv>.v.vv.v..>vv.>...v>.>..>>>v>.>v..>v.......>>v>v.v....v..v>.>.>.",
"v.>>..>vv.v>.>....v..>>>.>>...>.......>v.v.>>.>.>..v.v..>>v.>v.vv...>>......vv>>.v.v>..v>.>..>....v>>.>v...v.vv.>.>>.>>>vv>...v.>...v......",
".....v.>.v....v...>..v>v..>.v>..>.>v.>>>vv.>>v>.vv.>....>v.>.v..vvv>.>.>.vv.>...v>>.>.vv>.v.....>v..>v.v...>.>>v...v>vv.v.v.v>>>v>...>.>.>>",
"v.>....v>>..>v.>.vv.>vv.......v..>.>v.>.>.v..v.v>vv.....v....vv.>>..v.>v...v>.v>.vvv.....>>v>.>.>v............v.>.....>.>...>>.....>.v.>>v.",
"...>>>>>v..>...v...>.vv.>..vv.v..>.>>..vv.v.>>.>>....v.>vv>..v.>>>.v.>.>.v>..vvvvvv..v>>>..>>...v>.>v..vv........>>v>>.>v>..>v>.>..>...v.v.",
"vv.>v>v>>>v.v.v.>v>>vv..v>.>v.>..v>....>.vvv........>>v>..>v>.v..v.v>v>.v>.vv.vv>v>>v..v.v>.v>>v...>>.>>>...>>>v.vvv>.....>...v.vv>..>v>.v.",
"...v...v..v....v.>v.>v.v>..>vvv...vvv..>>v.>.>.>.v.....v>vv.>v.v>>.vvv.v>v.vv.vvvv..>.>...vv.>....vv.>v.>..v......vv>.v>.>..>v.v>v...vv.v.v",
"vvv>.v>......v.v.v..vv.>v..vv>.....v.>.vvvv>.v..>v..v>v>vv>.>.vvv.>>v....v>>>v>vv>v.......>....>.>...v..v.v....v..>>v...>>>.v.v..v..>v>vv..",
">>v..v..vv.vv>.>...v>>>.vvv>>>v..v>>.>>v..>.>>.v.v.v..v.>v..v.>.>v>>.v...>v>>....>vvv>>v>v>.>.v...v.v.>>>....>.>>v>...v.>.>....>.vv.>...v.>",
"v.vv.......vv.>......v>....v..>v......vv>.v.....v.....>..v...>v>.vvv.vv.....vv>.v>v>..v....>v....>>....v..vv>.v..>>.>>...>.>.vv...v>>..vv.v",
"v..>>>...>>.v>>...>..>.v>v>vv.>......vv...>>...>v>....>v>.>.>.v>.>....v..v.v.........>>>.....v.vv.....>v>>v>vv.>>..v.>v>...v>>v.vv.v.>.>.>v",
"...v.vv>..>vv...v>.>v.v>v...vv.>v..v.....v...>....>>>>>..v.v>...>..>.vvv.vvvv>..>.>.v>.vvvvv...v.>v....>.v>vvv..v.v...>.v>vv>>..v.....v>>>."
]

// Parsing
let board = {}
let width = input[0].length;
let height = input.length;

// Utils
setValue = (board, x, y, value) => {
    const key = `${(x + width) % width}x${(y + height) % height}`;
    if(board[key] === undefined) {
        board[key] = value
    }
};
getValue = (board, x, y) => board[`${(x + width) % width}x${(y + height) % height}`] || '.'

for(let y = 0; y < input.length; y++) {
    line = input[y];
    line.split("").forEach((val, x) => setValue(board, x, y, val));
}


// Display util
print = (board) => {
    for(let y = 0; y < height; y++) {
        let line = "";
        for(let x = 0; x < width; x++) {
            let val = getValue(board, x, y);
            if(val <= 9) {
                line += val + " ";
            } else {
                line += " " + val;
            }
        }
        console.log(line);
    }
}

//print(board);

// Simulate
let moved;
let steps = 0;
do {
    moved = false;
    console.log('---------- Step', steps, '----------')
    //print(board);

    let newBoard = {};
    // Horizontal
    for(let x = 0; x < width; x++) {
        for(let y = 0; y < height; y++) {
            const value = getValue(board, x, y);
            const right = getValue(board, x + 1, y);
            if(value === '>' && right === '.') {
                setValue(newBoard, x + 1, y, '>');
                setValue(newBoard, x, y, '.');
                moved = true;
            }
        }
    }

    for(let x = 0; x < width; x++) {
        for(let y = 0; y < height; y++) {
            setValue(newBoard, x, y, getValue(board, x, y));
        }
    }
    
    board = newBoard;
    newBoard = {}

    // Vertical
    for(let x = 0; x < width; x++) {
        for(let y = 0; y < height; y++) {
            const value = getValue(board, x, y);
            const down = getValue(board, x, y + 1);
            if(value === 'v' && down === '.') {
                setValue(newBoard, x, y + 1, 'v');
                setValue(newBoard, x, y, '.');
                moved = true;
            }
        }
    }

    for(let x = 0; x < width; x++) {
        for(let y = 0; y < height; y++) {
            setValue(newBoard, x, y, getValue(board, x, y));
        }
    }

    board = newBoard;

    steps++;
} while(moved) 

//console.log(input);