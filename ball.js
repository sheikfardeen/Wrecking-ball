class Ball {
    constructor(x,y,width,height,angle) {
      var options = {
         'restitution':0.8,
         'friction':1.0,
         'density':0.04
      }
      this.body = Bodies.rectangle(x,y,70,70,options);
      this.width = 70;
      this.height = 70;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("blue");
      strokeWeight(5);
      stroke("blue");
      ellipse(0, 0, this.width, this.height);
      pop()
    }
  };