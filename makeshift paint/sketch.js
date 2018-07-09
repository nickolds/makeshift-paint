function setup() {

	createCanvas(641,480);
	rect(0,0,200,40);
	textSize(32);
	text('full canvas', 10, 30);
	rect(200,0,180,40);
	textSize(32);
	text('random', 210, 30);
	rect(380,0,120,40);
	textSize(32);
	text('color:', 385, 30);
	rect(470,0,40,40);
	rect(510,0,130,40);
	textSize(32);
	text('size:', 520, 30);
	text(str(size), 0, 60);
}



var z = 0;
var x = 0;
var size = 10;
var co = color(225);

function keyTyped(){

  if(key === 'z'){
	if(z==0){
		z = 1;
		fill(225);
		rect(0,0,200,40);
		textSize(32);
		fill(0);
		text('spray', 10, 30);
	}
	else if(z==1){
		z = 2;
		fill(225);
		rect(0,0,200,40);
		textSize(32);
		fill(0);
		text('mouse point', 10, 30);
	}
	else if(z==2){
		z = 0;
		fill(225);
		rect(0,0,200,40);
		textSize(32);
		fill(0);
		text('full canvas', 10, 30);
	}
  }

  if(keyCode == 120){
	if(x==0){
		x = 1;
		fill(225);
		rect(200,0,180,40);
		textSize(32);
		fill(0);
		text('saved color', 210, 30);
	}
	else if(x==1){
		x = 0;
		fill(225);
		rect(200,0,180,40);
		textSize(32);
		fill(0);
		text('random', 210, 30);
	}
  }
  
  if(keyCode == 99){
	var co = color(random(0,255),random(0,255),random(0,255));
	fill(co);
	rect(470,0,40,40);	
  }
}

function draw() {

  if(mouseIsPressed){
	if(mouseButton == LEFT){
		if(z==1){
			if(x==0){
				var c = color(random(0,255),random(0,255),random(0,255));
				fill(c);
				rect(random(mouseX-20,mouseX+20),random(mouseY-20,mouseY+20),10,10);
			}
			if(x==1){
				rect(random(mouseX-20,mouseX+20),random(mouseY-20,mouseY+20),10,10);
			}
		}
		if(z==0){
			if(x==0){
				var c = color(random(0,255),random(0,255),random(0,255));
				fill(c);
				rect(random(0,640),random(40,480),40,40);
			}
			if(x==1){
				rect(random(0,640),random(40,480),40,40);
			}
		}
		if(z==2){
			if(x==0){
				var c = color(random(0,255),random(0,255),random(0,255));
				fill(c);
				rect(mouseX-10,mouseY-10,20,20);
			}
			if(x==1){
				rect(mouseX-10,mouseY-10,20,20);
			}
		}
	}
  } 
}