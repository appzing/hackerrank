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

function aVeryBigSum(n, ar) {
    return ar.reduce((sum, number) => sum + number,0);
}

function main() {
    let n = parseInt(readLine());
    ar = readLine().split(' ').map(Number);
    let result = aVeryBigSum(n, ar);
    process.stdout.write("" + result + "\n");

}
