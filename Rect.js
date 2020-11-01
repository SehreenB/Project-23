class Rect{

constructor(x,y,width,height){


    var options = {

        restitution: 1
    }

    this.body = Bodies.rectangle(x,y,width,height);
    World.add(world, this.body);

}

display(){

var pos = this.body.position;
rectMode(CENTER);
fill("red");

rect(0,0,this.width, this.height);
}




}