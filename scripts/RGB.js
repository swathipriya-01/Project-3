//alert("connected");
var numOfSquares = 6;
var squareColor = generateRandomColor(numOfSquares);
var pickedColor = randomColor();
var displayColor = document.getElementById('displayColor');
var squares = document.querySelectorAll(".square");
var resultDisplay = document.getElementById("resultDisplay");
var h1 = document.querySelector("h1");
var buttonReset = document.getElementById("refClr");
var esyBtn = document.getElementById("esybtn");
var hrdBtn = document.getElementById("hrdbtn");

esyBtn.addEventListener("click", function(){
	numOfSquares = 3;
	hrdBtn.classList.remove("selected");
	esyBtn.classList.add("selected");
	squareColor = generateRandomColor(numOfSquares);
	pickedColor = randomColor();
	displayColor.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(squareColor[i]){
			squares[i].style.backgroundColor = squareColor[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	//alert("easy button clicked");
});

hrdBtn.addEventListener("click", function(){
	//alert("hard button clicked");
	numOfSquares = 6;
	hrdBtn.classList.add("selected");
	esyBtn.classList.remove("selected");
	squareColor = generateRandomColor(numOfSquares);
	pickedColor = randomColor();
	displayColor.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = squareColor[i];
		squares[i].style.display = "block";
		}
});

buttonReset.addEventListener("click",function(){
	//alert("button clicked");
	squareColor = generateRandomColor(numOfSquares);
	pickedColor = randomColor();
	displayColor.textContent = pickedColor;
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = squareColor[i];	
	}
	h1.style.backgroundColor = "black";
});


displayColor.textContent = pickedColor;


for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = squareColor[i];
	squares[i].addEventListener("click", function(){
	var Clickedcolor = this.style.backgroundColor;
	if (Clickedcolor === pickedColor){
		resultDisplay.textContent = "Correct";
		buttonReset.textContent = "PLAY AGAIN";
		sqrColor(Clickedcolor);
		h1.style.backgroundColor = Clickedcolor;
	}
	else{
		this.style.backgroundColor = "black";
		resultDisplay.textContent = "Try Again!!";
	}
	});
}

function sqrColor(color){
		for(var i=0; i<squares.length; i++){
			squares[i].style.backgroundColor = color;
		}
	}

function randomColor(){
	var ranClr = Math.floor(Math.random()*squareColor.length);
	return squareColor[ranClr];
}

function generateRandomColor(num){
	arr = [];
	for(var i = 0; i < num; i++){
		arr.push(getRandomColor())
	}

	return arr;
}

function getRandomColor() {
	var r = Math.floor(Math.random() * 255 + 1);
	var g = Math.floor(Math.random() * 255 + 1);
	var b = Math.floor(Math.random() * 255 + 1);
	return "rgb(" + r + ", " + g +", " + b +")";
}


