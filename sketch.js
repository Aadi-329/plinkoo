
var divisionheight=300;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var divisions=[]
var particles=[]
var plinkoo=[];
	


function setup() {
	createCanvas(480,800);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(240,780,480,15)

	for (var k = 0; k<=width; k = k + 80) {
	    divisions.push(new Divisions(k,height-divisionheight/2,10,divisionheight));
		
	}

	

	for (var p = 15; p<=width; p=p+50) {
		plinkoo.push ( new plinko(p,175));
		
	}

	for (var p = 40; p<=width; p=p+50) {
		plinkoo.push ( new plinko(p,75));
		
	}

	for (var p = 40; p<=width; p=p+50) {
		plinkoo.push ( new plinko(p,275));
		
	}

	for (var p = 15; p<=width; p=p+50) {
		plinkoo.push ( new plinko(p,375));
		
	}

	

	



	console.log(plinkoo);
	Engine.run(engine);
  
}


function draw() {
	background(rgb(0,0,0))
console.log(particles)
  rectMode(CENTER);
  if (frameCount%60===0) {
		
	
	particles.push(new particle(random(width/2-5,width/2-5),10))
		}

  ground.display();
  for (var k=0; k< divisions.length; k++) {
	  divisions[k].display();
	  
  }

  

for (var p=0; p< plinkoo.length; p++) {
	plinkoo[p].display();
	
}

for (var pa=0; pa< particles.length; pa++) {
	particles[pa].display();
	
}
}




