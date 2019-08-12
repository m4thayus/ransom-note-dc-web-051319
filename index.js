let magazine = ["h", "e", "r", "e", "a", "r", "e", "s", "o", "m",
"e", "n", "i", "c", "e", "c", "l", "o", "t", "h", "e", "s", "t",
"h", "a", "t", "y", "o", "u", "s", "h", "o", "u", "l", "d", "b",
"u", "y", "t", "h", "e", "y", "a", "r", "e", "c", "h", "e", "a",
"p", "a", "n", "d", "w", "o", "n", "d", "e", "r", "f", "u", "l",
 "f", "o", "r", "t", "h", "e", "s", "u", "m", "m", "e", "r"]

let note = "give me the ferbie or else"

function ransomable(letter_array, note_string) {
    if (note_string.length < 1) {
        return true
    } else if (letter_array.length < 1) {
        return false
    } else if (letter_array.includes(note_string[0])) {
        i = letter_array.findIndex(letter => letter === note_string[0])
        letter_array.splice(i, 1)

        let note_array = note_string.split(" ").join("").split("")
        note_array.shift()

        return ransomable(letter_array, note_array.join(""))
    } else { 
        return false
    }
}

console.log(ransomable(magazine, note))

note = "hand me the ferbie or else"

console.log(ransomable(magazine, note))

let short_magazine = ["t", "h"]
let short_note = "the"

console.log(ransomable(short_magazine, short_note))

short_magazine = ["t", "h", "e"]
short_note = "the"

console.log(ransomable(short_magazine, short_note))