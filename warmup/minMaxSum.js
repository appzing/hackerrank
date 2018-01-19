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

function miniMaxSum(arr) {
    // Complete this function
    const length = arr.length;
    let sorted = arr.sort();
    const sum = arr.reduce((total, number) => total + number, 0)
    console.log(sum - arr[length-1], sum - arr[0]);

}

function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);
    miniMaxSum(arr);

}
