class plinko{


constructor(x,y){
this.plinko=Bodies.circle(x,y,10,{isStatic:true})
World.add(world,this.plinko)

}

display(){
var pos=this.plinko.position;
ellipseMode(RADIUS)
fill("white");
ellipse(pos.x,pos.y,10,10)


}

}
