
// Crie uma variável canvas
var canvas = new fabric.Canvas('myCanvas');
//Defina as posições iniciais da bola e do buraco.
ballY =0;
ballX =0;
holeY =400;
holeX =800;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png", function (Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			 top: holeY, 
			 left: holeX 
			
			}); 

			canvas.add(hole_obj); 
		});
	
			newImage();
}

function newImage()
{

		fabric.Image.fromURL("ball.png", function (Img) {
			ball_obj = Img;
			ball_obj.scaleToWidth(50);
			ball_obj.scaleToHeight(50);
			ball_obj.set({
				 top: ballY, 
				 left: ballX 
				
				}); 
	
				canvas.add(ball_obj); 
			});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
if ((ballX == holeX) && (ballY == holeY)) { 
	canvas.remove(ball_obj);
	 console.log("Você atingiu o objetivo!!!");
	  document.getElementById("hd3").innerHTML = "Você atingiu o objetivo!!!";
	   document.getElementById("myCanvas").style.borderColor = "red"; 
	}
	
	else{
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
			right();+
			console.log("right");
		}
	}
	
	function up()
	{
		if(ballY > =5){
		ballY = ballY - blockImageHeight;
		console.log("block image heigth = " +blockImageHeight);
		console.log("Quando a tecla de seta para cima é pressionada, X = " + ballX + " , Y = " + ballY);
		canva.remove(ball_obj);
		newImage(); 
	}

	function down()
	{
		if(ballY > =450){
			ballY = ballY + blockImageHeight;
			console.log("block image heigth = " +blockImageHeight);
			console.log("Quando a tecla de seta para baixo é pressionada, X = " + ballX + " , Y = " + ballY);
			canva.remove(ball_obj);
			newImage(); }
	}

	function left()
	{
	
		{
			if(ballX > 5){
				ballX = ballX - blockImageWhidth;
				console.log("block image whidth = " +blockImageWhidth);
				console.log("Quando a tecla de seta para esquerda é pressionada, X = " + ballX + " , Y = " + ballY);
				canva.remove(ball_obj);
				newImage(); }
		}
	}

	function right()
	{
	
		{
			if(ballX > =1050){
				ballX = ballX + blockImageWhidth;
				console.log("block image whidth = " +blockImageWhidth);
				console.log("Quando a tecla de seta para direita é pressionada, X = " + ballX + " , Y = " + ballY);
				canva.remove(ball_obj);
				newImage(); }
		}
	}

}

