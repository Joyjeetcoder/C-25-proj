class Tanker {
  constructor(x, y, width, height) {
      var options = {
      isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.w = width;
      this.h = height;
      World.add(world,this.body)
     
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      rectMode(CENTER);
      rect(this.body.position.x,this.body.position.y, this.w,this.h)
    }
};
