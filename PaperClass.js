class PaperClass{
    constructor(x,y,r){
    var options = {
    restitution:0.3,
    friction:0.5,
    density:1

    }
  //  this.x=x;
    //this.y=y;
    this.r=r
    this.image=loadImage("paper.png");
    this.body=Bodies.circle(x,y,r,options);
    World.add(world, this.body);

}
display()
{
        
        var paperpos=this.body.position;		

        push()
        translate(paperpos.x, paperpos.y);
        rotate (this.body.angle);
        //ellipseMode(CENTER);
        //strokeWeight(4);
        fill(255,0,255)
        imageMode(CENTER);
        image(this.image, 0,0,this.r*2, this.r*2)
        //ellipse(0,0,this.r*2, this.r*2);
        pop()
        
}
}
