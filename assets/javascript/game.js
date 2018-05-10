
var theAnswer = ["b", "r", "a", "d", "l", "e", "y"];
var Right = 0,
    NiceTry = 0,
    GuessesLeft = 10,
    Picks = null,
    answerArray = [];
    
document.onkeydown = function (event) {
    var yourGuess = event.key;
    console.log(theAnswer);
    console.log(yourGuess);
    var yourGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var myAnswer = theAnswer[Math.floor(Math.random() * theAnswer.length)];
    for (var o = 0; o < myAnswer.length; o++) {
        answerArray[o] = "_";
    }

    if ((yourGuess === myAnswer)) {
        Right++;
    } else {
        GuessesLeft--;
    } if ((GuessesLeft == 0)) {
        NiceTry++;
    } if ((GuessesLeft === 0)) {
        GuessesLeft = 10;

    } if ((Right === 5)) {
        document.body.style.backgroundImage = "url('http://m.memegen.com/ymurbu.jpg')";
        document.getElementById('sound').play();
     
    } else if ((NiceTry === 7)) {
        document.body.style.backgroundImage = "url('http://i.bettermeme.com/meme/img/0/0/u/m/00um.jpg')";
        document.getElementById('sound1').play();
    }


    var html =
        "<p>Your Guess: " + yourGuess + "</p>" +
        "<p>What I Was Thinking: " + myAnswer + "</p>" +
        "<p>Right: " + Right + "</p>" +
        "<p>Nice Try: " + NiceTry + "</p>" +
        "<p>Guesses Left: " + GuessesLeft + "</p>";

    document.querySelector("#game").innerHTML = html;



};
