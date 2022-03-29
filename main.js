canvas = document.getElementById("myCanvas")
var contexto = canvas.getContext("2d");

carroverde_largura = 75;
carroverde_altura = 100;

backgroundImage = "parkingLot.jpg";
greencarImage = "car2.png";

carroverde_x = 5;
carroverde_y = 225;

function add() {
	fundo_imagem = new Image();
	fundo_imagem.onload = uploadBackground;
	fundo_imagem.src = backgroundImage;
	carro_imagem = new Image();
	carro_imagem.onload = uploadGreenCar;
	carro_imagem.src = greencarImage;
}

function uploadBackground() {
	contexto.drawImage(fundo_imagem, 0, 0, canvas.width, canvas.height);
}

function uploadGreenCar() {
	contexto.drawImage(carro_imagem, carroverde_x, carroverde_y, carroverde_largura, carroverde_altura);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up() {
	if (carroverde_y >= 0) {
		carroverde_y = carroverde_y - 10;
		console.log("Seta para cima pressionada");
		uploadBackground();
		uploadGreenCar();
	}
}

function down() {
	if (carroverde_y <= 350) {
		carroverde_y = carroverde_y + 10;
		console.log("Seta para baixo pressionada");
		uploadBackground();
		uploadGreenCar();
	}
}

function left() {
	if (carroverde_x >= 0) {
		carroverde_x = carroverde_x - 10;
		console.log("Seta para esquerda pressionada");
		uploadBackground();
		uploadGreenCar();
	}
}

function right() {
	if (carroverde_x <= 750) {
		carroverde_x = carroverde_x + 10;
		console.log("Seta para direita pressionada");
		uploadBackground();
		uploadGreenCar();
	}
}
