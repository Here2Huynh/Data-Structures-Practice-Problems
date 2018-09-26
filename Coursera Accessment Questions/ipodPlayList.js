// Mark likes to listen to music while travelling. 
// His iPod ™ contains N songs and he wants to listen to
//  L (not necessarily different) songs during a trip. 
//  So he creates a playlist such that: 
//  • Every song is played at least once. 
//  • A song can be played again only if at least K other songs have been played 
//  Mark wants to know how many different playlists are possible. 
//  Can you help Mark determine this number? 
//  As the number can be very large, display number modulo 1,000,000,007. You are given N, K and L.

// N = total songs 
// K = space between songs
// L = length of list 

// (N choose K)*(N-K)^(L-K)
// did not know how to solve this
// now given the math equation, implement the alogorithm 

const factorial = (number) => {
    
}

const findNumberOfPlayList = (N, K, L) => {
    for (let i = 0; i < L; K++) {

    }
}

console.log(findNumberOfPlayList(1,1,3))