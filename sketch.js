var stun1;
var stun2;
var stun3;
var stun4;
var stun5;
var stun6;
var stun7;
var stun8;
var stun9;
var stun10;
var myData
function preload(){
  // put preload code here
    myData = loadJSON('assets/oscar.json');
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  background(255);


}

function draw() {
  // put drawing code here
  for( var i=0 ; i< width; i++ ){
    var dat = myData[i];
    var yea= dat.Year;
    var mov = dat.Movie;
    var name= dat.Name;
    console.log(name);
  }
  stun1 = new stun(width/6,height/3,20,100);
  push.stun1;
  stun2 = new stun(width/6+50,height/3,20,100);
  push.stun2;
  stun3 = new stun(width/6+100,height/3,20,100);
  push.stun3;
  stun4 = new stun(width/6+150,height/3,20,100);
  push.stun4;
  stun5 = new stun(width/6+200,height/3,20,100);
  push.stun5;
  stun6 = new stun(width/6+250,height/3,20,100);
  push.stun6;
  stun7 = new stun(width/6+300,height/3,20,100);
  push.stun7;
  stun8 = new stun(width/6+350,height/3,20,100);
  push.stun8;
  stun9 = new stun(width/6+400,height/3,20,100);
  push.stun9;
  stun10 = new stun(width/6+450,height/3,20,100);
  push.stun10;

}

function stun(_x,_y,_w,_h) {
  this.x= _x;
  this.y= _y;
  this.w= _w;
  this.h= _h
  this.s= _x+_w
  this.p= _y+ _h
  // this.year =
  noStroke();
  fill('white');
  if (mouseX> this.x && mouseX< this.s || mouseY> this.y && mouseY< this.p ) {
    fill('yellow')
    rect(this.x, this.y, this.w, this.h*2);
    // text(myText, )
  } else {
    rect(this.x, this.y, this.w, this.h);
  }

  print(mouseIsPressed);
}
