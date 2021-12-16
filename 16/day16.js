const { resolveObjectURL } = require("buffer");

let input = "EE00D40C823060";
//input = "D2FE28";
//input = "38006F45291200"
input = "E20D41802B2984BD00540010F82D09E35880350D61A41D3004E5611E585F40159ED7AD7C90CF6BD6BE49C802DEB00525272CC1927752698693DA7C70029C0081002140096028C5400F6023C9C00D601ED88070070030005C2201448400E400F40400C400A50801E20004C1000809D14700B67676EE661137ADC64FF2BBAD745B3F2D69026335E92A0053533D78932A9DFE23AC7858C028920A973785338832CFA200F47C81D2BBBC7F9A9E1802FE00ACBA44F4D1E775DDC19C8054D93B7E72DBE7006AA200C41A8510980010D8731720CB80132918319804738AB3A8D3E773C4A4015A498E680292B1852E753E2B29D97F0DE6008CB3D4D031802D2853400D24DEAE0137AB8210051D24EB600844B95C56781B3004F002B99D8F635379EDE273AF26972D4A5610BA51004C12D1E25D802F32313239377B37100105343327E8031802B801AA00021D07231C2F10076184668693AC6600BCD83E8025231D752E5ADE311008A4EA092754596C6789727F069F99A4645008247D2579388DCF53558AE4B76B257200AAB80107947E94789FE76E36402868803F0D62743F00043A1646288800084C3F8971308032996A2BD8023292DF8BE467BB3790047F2572EF004A699E6164C013A007C62848DE91CC6DB459B6B40087E530AB31EE633BD23180393CBF36333038E011CBCE73C6FB098F4956112C98864EA1C2801D2D0F319802D60088002190620E479100622E4358952D84510074C0188CF0923410021F1CE1146E3006E3FC578EE600A4B6C4B002449C97E92449C97E92459796EB4FF874400A9A16100A26CEA6D0E5E5EC8841C9B8FE37109C99818023A00A4FD8BA531586BB8B1DC9AE080293B6972B7FA444285CC00AE492BC910C1697B5BDD8425409700562F471201186C0120004322B42489A200D4138A71AA796D00374978FE07B2314E99BFB6E909678A0"
//input = "9C0141080250320F1802104A08"
const lookup = {
    "0": "0000",
"1": "0001",
"2": "0010",
"3": "0011",
"4": "0100",
"5": "0101",
"6": "0110",
"7": "0111",
"8": "1000",
"9": "1001",
"A": "1010",
"B": "1011",
"C": "1100",
"D": "1101",
"E": "1110",
"F": "1111"
}

let binary = [...input].flatMap(x => [...lookup[x]]).join('')


let newReader = ((binary) => {
    let index = 0

    return {
        end: () => index >= binary.length,
        readBit: () => binary[index++],
        readBits: (amount) => {
            let result = binary.slice(index, index + amount);
            index += amount;
            return result;
        },
        readNumber: (amount) => {
            let result = binary.slice(index, index + amount);
            index += amount;
            return parseInt(result, 2);
        },
        pos: () => index
    }

});

console.log(input, binary);

let reader = newReader(binary);

// Read packet
readPacket = (reader) => {
    // Version
    let version = reader.readNumber(3);
    let type = reader.readNumber(3);
    console.log("Packet<", version, " ", type, ">")
    let subPackets = [];
    let value = null;
    let operator = ["sum", "product", "minimum", "maximum", null, "gt", "lt", "eq"][type];
    if(type == 4) {
        let bits = [];
        let finalSegment;
        do {
            finalSegment = reader.readBit();
            bits.push(...reader.readBits(4));
        } while(finalSegment != 0)
        console.log(bits);
        // Read final bits

        value = parseInt(bits.join(''), 2);
        console.log("\tValue = ", value);
    } else {
        // Operator
        let lengthType = reader.readBit();
        console.log("\tlengthType=", lengthType)
        if(lengthType == 1) {
            // Sub-packet count
            let subPacketCount = reader.readNumber(11);
            console.log("Subpackets:", subPacketCount);
            while(subPacketCount--) {
                subPackets.push(readPacket(reader));
            }
        } else {
            let subPacketBitLength = reader.readNumber(15);
            console.log(subPacketBitLength);
            let start = reader.pos();
            while(reader.pos() - start < subPacketBitLength) {
                subPackets.push(readPacket(reader));
            }
        }
    }

    return {
        version, type, subPackets, value, operator
    }
}

let result = readPacket(reader);
console.log(result);

sumVersions = (packet) => {
    return packet.version + packet.subPackets.map(x => sumVersions(x)).reduce((a,b) => a+b, 0);
}
evaluate = (packet) => {
    if(packet.value) {
        return packet.value;
    }

    let subPacketValues = packet.subPackets.map(x => evaluate(x));
    switch(packet.operator) {
        case "sum":
            return subPacketValues.reduce((a,b) => a+b)
        case "product":
            return subPacketValues.reduce((a,b) => a*b)
        case "minimum":
            return subPacketValues.reduce((a,b) => a<b?a:b)
        case "maximum":
            return subPacketValues.reduce((a,b) => a>b?a:b)
        case "gt":
            return subPacketValues[0] > subPacketValues[1] ? 1 : 0
        case "lt":
            return subPacketValues[0] < subPacketValues[1] ? 1 : 0
        case "eq":
            return subPacketValues[0] == subPacketValues[1] ? 1 : 0
    }
}
console.log(sumVersions(result));
console.log(evaluate(result));