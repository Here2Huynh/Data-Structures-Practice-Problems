let arr = [
[1 ,1, 1, 0, 0, 0],
[0 ,1 ,0 ,0 ,0 ,0],
[1, 1, 1, 0, 0, 0],
[0 ,0 ,2 ,4 ,4 ,0],
[0 ,0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0]
];

const hourglassSum = (arr) => {
    let listOfSums = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // console.log(arr[i][j])
            if ( arr[i+2] && arr[j+2]) {
                let sum = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]);
                listOfSums.push(sum);
            }
        } 
    }
    // console.log(listOfSums)
    return Math.max(...listOfSums);   
}

console.log(hourglassSum(arr))