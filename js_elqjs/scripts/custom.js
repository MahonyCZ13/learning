function secondChapter() {

    // Looping a triangle
    function triangel() {
        for (var line = "#"; line.length < 8; line += "#") {
            console.log(line);
        }
    }
    triangel();

    // Fizz Buzz
    function fizzBuzz(incNumber) {
        for (var i = 0; i < incNumber; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('FizzBuzz');
            }
            else if (i % 3 === 0) {
                console.log('Fizz');
            }
            else if (i % 5 === 0) {
                console.log('Buzz');
            }
            else {
                console.log(i);
            }
        }
    }
    fizzBuzz(100);

    // Chess board
    function chess() {
        var size = 8;
        var board = "";
        for (var y = 0; y < size; y++) {
            for (var x = 0; x < size; x++) {
                if ((x + y) % 2 === 0) {
                    board += " ";
                }
                else {
                    board += "#";
                }
            }
            board += '\n';
        }
        console.log(board);
    }
    chess();
}

function thirdChapter() {

    // Minimum
    function min(x, y) {
        if (x < y) {
            console.log(x);
        }
        else {
            console.log(y);
        }
    }
    min(456, 223);

    // Recursion
    function recursion() {
        
    }
    recursion();

    // Bean counting
    function beans() {

    }
    beans();
}