class particle{


    constructor(x,y){
    this.particle=Bodies.circle(x,y,5,{Restitution:0.4})
    this.colour=color(random(0,255),random(0,255),random(0,255))
    World.add(world,this.particle)
    
    }
    
    display(){

    var pos=this.particle.position;
    var angle=this.particle.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    ellipseMode(RADIUS)
    
    fill(this.colour);
    ellipse(0,0,5,5)
    pop();
    
    }
    
    }