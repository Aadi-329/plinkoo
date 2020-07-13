class plinko{


constructor(x,y){
this.plinko=Bodies.circle(x,y,5,{isStatic:true})
World.add(world,this.plinko)

}

display(){
var pos=this.plinko.position;
ellipseMode(CENTER)
fill("red");
circle(pos.x,pos.y,10)


}

}