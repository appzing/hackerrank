process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function diagonalDifference(a) {
    // Complete this function
    let primarySum = 0;
    let secondarySum = 0;
    let noOfRows = a.length - 1;

    a.forEach((row, index) => {
        primarySum += row[index];
        secondarySum += row[noOfRows - index];
    });

    return Math.abs(primarySum - secondarySum);


}

function main() {
    let n = parseInt(readLine());
    let a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    let result = diagonalDifference(a);
    process.stdout.write("" + result + "\n");

}
