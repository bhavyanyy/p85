canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


greencarWidth=75;
greencarHeight=100;
greencarX=5;
greencarY=225;

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	backgroundImg=new Image();
    backgroundImg.onload=uploadBackground;
    backgroundImg.src=background_image;

    greencarImg=new Image();
    greencarImg.onload=uploadgreencar;
   greencarImg.src=greencar_image;
}

function uploadBackground() {
	ctx.drawImage(backgroundImg,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencarImg,greencarX,greencarY,greencarWidth,greencarHeight);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
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

function up(){
    if(greencarY >= 10){
        greencarY=greencarY-10;
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if(greencarY <= 350){
        greencarY=greencarY+10;
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if(greencarX >= 10){
        greencarX=greencarX-10;
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	if(greencarX <= 750){
        greencarX=greencarX+10;
        uploadBackground();
        uploadgreencar();
    }
}
