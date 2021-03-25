let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t",
"h", "a", "t", "y", "o", "u", "s", "h", "o", "u", "l", "d", "b",
"u", "y", "t", "h", "e", "y", "a", "r", "e", "c", "h", "e", "a",
"p", "a", "n", "d", "w", "o", "n", "d", "e", "r", "f", "u", "l",
 "f", "o", "r", "t", "h", "e", "s", "u", "m", "m", "e", "r"]

 let note = "hand me the ferbie or else"


const buildHistogram = (mag) => {

    let map = new Map()

    for ( let i = 0; i < mag.length; i++) {
        let letter = mag[i]
        if (letter === " ") {
            continue
        } else {
            map[letter] = (map[letter] + 1) || 1;
        }
    }

    return map
}





const canBuildNote = (mag, note) => {
    let map = buildHistogram(mag)

    for ( let i = 0; i < note.length; i++ ) {
        let letter = note[i]
        if (letter === ' ') {
            continue
        } else {
            if ( letter in map && map[letter] > 0 ) {
                let value = map[letter]
                map[letter] = --value
            } else {
                return false;
            }
        }
    }

    return true;
}



buildHistogram(magazine)




