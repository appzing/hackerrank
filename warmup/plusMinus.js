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

function plusMinus(arr) {
    // Complete this function
    let positives = 0;
    let negatives = 0;
    let zeroes = 0;
    const length = arr.length;
    for(let i=0; i<length; i++) {
        arr[i] === 0 && zeroes++;
        arr[i] > 0 && positives++;
        arr[i] < 0 && negatives++;

    }
    console.log(positives/length);
    console.log(negatives/length);
    console.log(zeroes/length);
}

function main() {
    let n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    plusMinus(arr);

}
