var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listener
    setupModeButtons();
    setupSquares();
    reset();
}

//This function set the different color squares and display the message of winning, losing, try again 
function setupSquares() {
    for (var i = 0; i < squares.length; i++) {

        // add click listner to square
        squares[i].addEventListener("click", function () {

            //grab color of clicked square
            var clickedColor = this.style.backgroundColor;

            //compare color to clicked
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        });
    }

}

//This function will set up the buttons of the easy and hard
function setupModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            //if textcontent is easy than numsquare is 3 else 6
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}

//This function reset to the 3 square from 6 and 6 to 3
function reset() {
    colors = generateRandomColors(numSquares);
    //pick new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //changing the playagain text to new color 
    resetButton.textContent = "New Colors";
    //no message after win
    messageDisplay.textContent = "";
    // change color of sqaures on page
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            //getting back 6 squares after selecting easy
            squares[i].style.display = "block";
            // add initial colors to the square
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function () {
    reset();
})

//This function change the colors of the square
function changeColors(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

//this function will pick any one color from the array (i.e index of colors)
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//this function will generate different six colors squares
function generateRandomColors(num) {
    //make an array
    var arr = []
    //add num random color to array
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor())
    }
    //return that array on screen
    return arr;
}

//this function generates different rgb color
function randomColor() {
    //pick a "red" from 0 to 255 
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 to 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 to 255
    var b = Math.floor(Math.random() * 256);
    "rgb(r, g, b)"
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
