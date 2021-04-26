class Plinko {
    constructor(x,y,radius){
        var options ={
            isStatic: true,
        }
        this.body = Bodies.circle(x,y,this.r,options)
        this.x = x;
        this.y = y
        this.r = radius
        World.add(world,this.body)
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rectMode(CENTER);
        fill("white");
    }
}