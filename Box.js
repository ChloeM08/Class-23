class Box{

constructor(x, y, width, height){
    var options = {
      restitution: 1.0, 
      density: 0.6,
      friction: 0.7
    }
    this.body = Bodies.rectangle(x,y,width,height, options);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    World.add(world, this.body);
}

display(){

var pos = this.body. position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
rotate(angle);
fill("purple");
rectMode(CENTER);
rect(0,0, this.width, this.height);
pop();


}

}