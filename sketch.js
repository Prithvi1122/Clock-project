var h,m,s;
function setup() {
  createCanvas(800,400);
  h=hour();
  m=minute();
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(400,200);
  rotate(-90);

  noFill(); 
  strokeWeight(5);
  
  
  
  s=second();
  
  //console.log(h);
  //console.log(m);
  console.log(s);

  
  sAngle=map(s,0,60,0,360)
  mAngle=map(m,0,60,0,360)
  hAngle=map(h,0,12,0,360)
  
  push();
  rotate(sAngle);
  stroke("red")
  line(0,0,120,0);
  pop();
  
  push();
  rotate(mAngle);
  stroke("yellow")
  line(0,0,90,0);
  pop();

  push();
  rotate(hAngle);
  stroke("green")
  line(0,0,70,0);
  pop();
  
  
  strokeWeight(10);
  stroke("orange")
  arc(0, 0, 260, 260, 0,sAngle);


}