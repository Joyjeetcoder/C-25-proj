class Ground {
  constructor(width, height) {
    var options ={
      isStatic : true
    }
    this.g = Bodies.rectangle(200,390,width,height,options);
    this.g
    this.width = width;
    this.height = height;
    World.add(world,this.g);

  };

  display(){
    rectMode(CENTER);
    fill("brown");
    rect(this.g.position.x,this.g.position.y,this.width,this.height);
  }
}
