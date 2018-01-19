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

function solve(a0, a1, a2, b0, b1, b2){
    let result = [0, 0];

    let alice = [a0, a1, a2];
    let bob = [b0, b1, b2];

    alice.forEach((aRating, index) => {
        let bRating = bob[index];
        aRating > bRating && result[0]++;
        bRating > aRating && result[1]++;
    })

    return result;

}

function main() {
    let a0_temp = readLine().split(' ');
    let a0 = parseInt(a0_temp[0]);
    let a1 = parseInt(a0_temp[1]);
    let a2 = parseInt(a0_temp[2]);
    let b0_temp = readLine().split(' ');
    let b0 = parseInt(b0_temp[0]);
    let b1 = parseInt(b0_temp[1]);
    let b2 = parseInt(b0_temp[2]);
    let result = solve(a0, a1, a2, b0, b1, b2);
    console.log(result.join(" "));



}
