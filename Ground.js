class ground{
  constructor(x,y,width,height){
 var options = {
   isStatic:true
 }
 this.body=Bodies.rectangle(x,y,width,height,options);
 this.w=width;
 this.h=height;

 World.add(world,this.body);
  }
  display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill(225);
    rect(pos.x,pos.y,this.width,this.height);

  }
};