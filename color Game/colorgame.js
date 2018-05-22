
function pickColorF(){

    var random = Math.floor(Math.random()* colorsArray.length);

    return colorsArray[random];

}





var messageDisplay = document.getElementById("message");
var squareSelector = document.getElementsByClassName("square");
var headerSelect = document.getElementsByTagName("header");


var colorsArray = [
    "rgb(237, 31, 121)",
    "rgb(252, 186, 123)",
    "rgb(47, 60, 67)",
    "rgb(255, 0, 255)",
    "rgb(255, 207, 72)",
    "rgb(100, 100, 255)",
];

var colorPicker = pickColorF();
// colors dsiplay to choose

document.querySelector("#colordisplay").textContent = colorPicker;

for(i=0; i<squareSelector.length; i++){

    // Assigning the color to the sqaures
    squareSelector[i].style.backgroundColor = colorsArray[i];

    //adding the click event to the squares
    squareSelector[i].addEventListener("click", function(){
        var circleColor = this.style.backgroundColor;
        if(colorPicker === circleColor){
            messageDisplay.textContent = "Correct :)";
            headerSelect[0].style.backgroundColor = colorPicker;
            
            colorWinner(colorPicker);
            
        }else{
            this.style.backgroundColor = "#000";
            messageDisplay.textContent = "Try Again !"
        }

    });

}

// assigning winner color to all squares

function colorWinner(color){

for(var i=0; i<squareSelector.length; i++){

squareSelector[i].style.backgroundColor = color;



}


}