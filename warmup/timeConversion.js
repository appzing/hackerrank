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

const timeConversion = (time) => {
    const timeArray = time.split(':');
    const amPm = timeArray[2].substring(2);

    timeArray[0] = timeArray[0];
    timeArray[2] = timeArray[2].slice(0,2);

    if (amPm === 'PM' && timeArray[0] !== '12') {
        timeArray[0] = 12 + parseInt(timeArray[0]);
    } else if (amPm === 'AM' && timeArray[0] === '12') {
        timeArray[0] = '00';
    }

    return timeArray.join(':');
}

const main = () => {
    const time = readLine();
    console.log(timeConversion(time));

};
