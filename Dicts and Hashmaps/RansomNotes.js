
const checkMagazine = (magazine, note ) => {
    let hashMap = {}
    let isValid = true

    // add all available words in magazine into a hashmap
    for (let i = 0 ; i < magazine.length; i++ ) {
        hashMap[ magazine[i]]  = ( hashMap[ magazine[i] ] || 0 ) + 1 
    }

    // if word in note exists in the hashmap decrement 
    // or set invalid is note contains a word the magazine does not
    for (let j = 0; j < note.length; j++ ) { 
        if ( hashMap[ note[j] ] ) { 
            hashMap[ note[j] ]--
        }
        else {
            isValid = false
        }
    }

    // check every entry in the map to see if they are negative
    for (let k in hashMap ) {
        if ( hashMap[k] < 0 ) {
            isValid = false
            break
        }
    }

    console.log( isValid ? 'Yes' : 'No')
}

// give me one grand today night
// give one grand today


// [ 'two', 'times', 'three', 'is',  'not', 'four' ],
// [ 'two',  'times',  'two',  'is',  'four' ]

// checkMagazine( [ 'two', 'times', 'three', 'is',  'not', 'four' ],
// [ 'two',  'times',  'two',  'is',  'four' ])

checkMagazine( [ 'ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts' ], 
[ 'ive', 'got', 'some', 'coconuts' ] ) 

// brutal force wayish
// let hashMap = {}
// let noteCount = 0;
// let isValid = true;

// for ( let i = 0; i < magazine.length; i++ ) {
//     if ( magazine[i] in hashMap ) {
//         continue
//     }
//     else {
//         hashMap[ magazine[i] ] = 1
//     }
// }

// for ( let j = 0; j < note.length; j++ ) {
//     if ( note[j] in hashMap ) {
//         hashMap[ note[j] ]-- 
//         if (hashMap[ note[j] ] < 0 ) {
//             isValid = false
//             console.log('No')
//         }
//         noteCount++
//     }
//     else {
//         isValid = false
//        console.log('No')
//     }
// }

// if ( noteCount === note.length && isValid ) {
//     console.log('Yes')
// }