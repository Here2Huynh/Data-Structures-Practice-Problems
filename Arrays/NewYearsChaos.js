// It's New Year's Day and everyone's in line for the Wonderland rollercoaster ride! 
// There are a number of people queued up, and each person wears a sticker indicating 
// their initial position in the queue. Initial positions increment by  from  at the 
// front of the line to  at the back.

// Any person in the queue can bribe the person directly in front of them to swap positions. 
// If two people swap positions, they still wear the same sticker denoting their original places 
// in line. One person can bribe at most two others. For example, if and  bribes , 
// the queue will look like this: .

// Fascinated by this chaotic queue, you decide you must know the minimum number 
// of bribes that took place to get the queue into its current state!

// Function Description

// Complete the function minimumBribes in the editor below. 
// It must print an integer representing the minimum number of 
// bribes necessary, or Too chaotic if the line configuration is not possible.

// minimumBribes has the following parameter(s):

// q: an array of integers
// Input Format

// The first line contains an integer , the number of test cases.

// Each of the next  pairs of lines are as follows: 
// - The first line contains an integer , the number of people in the queue 
// - The second line has  space-separated integers describing the final state of the queue.

// Constraints

// Subtasks

// For  score 
// For  score 

// Output Format

// Print an integer denoting the minimum number of bribes needed to get the queue 
// into its final state. Print Too chaotic if the state is invalid, i.e. it requires a person to have bribed more than  people.

// Sample Input

// 2
// 5
// 2 1 5 3 4
// 5
// 2 5 1 3 4
// Sample Output

// 3
// Too chaotic


const minimumBribes = (q) => {
    let bribesCount = []; 
    let highValue = 0;

    for (let i = 0; i < q.length; i++) {
        const value = q[i]
        // using hash map to keep track of the bribes made by each value
        bribesCount[value] = 0
        // keep track of the higher value
        highValue = Math.max(value, highValue) 
      
        // value is less than, increment that val's bribe
        if ( value < highValue) {
            for (let j = value+1; j < bribesCount.length; j++) {
                bribesCount[j]++
                if ( bribesCount[j] > 2) {
                    console.log('Too chaotic')
                    return
                }
            }

        }
    }
    let result = bribesCount.reduce( (a,b) => a + b, 0 )
    console.log(result)
}

minimumBribes([2, 1, 5, 3, 4])
minimumBribes([2, 5, 1, 3, 4])
minimumBribes([5, 1, 2, 3, 7, 8, 6, 4])
minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])
minimumBribes([1, 2, 5, 3, 4, 7, 8, 6])
minimumBribes([1, 4, 5, 6, 7, 8, 3, 2 ])



    // // generate orginal queue for comparison
    // let orginalQueue = [];
    // let totalBribes = 0 ;
    // let indexOfGivenQueue, indexOfOriginalQueue;
    // let bribeCount;
    // for (let i = 1; i < q.length + 1; i++) {
    //     orginalQueue.push(i);
    // }
    // for(let j = 0; j < q.length; j++) {
    //     if ( q[j] !== orginalQueue[j] ) {
    //         indexOfGivenQueue = q.indexOf(q[j])
    //         indexOfOriginalQueue = orginalQueue.indexOf(q[j])
    //         bribeCount = indexOfOriginalQueue - indexOfGivenQueue; 
    //         console.log(bribeCount)
    //         if (bribeCount < 3) {
    //             if (bribeCount > 0) {
    //                 totalBribes += bribeCount;
    //             }
    //             if (bribeCount < -2) {
    //                 totalBribes++;
    //             }
    //         }
    //         else {
    //             return 'Too chaotic'
    //         }
    //     }
    // }
    // return totalBribes;