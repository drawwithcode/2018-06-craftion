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
var myData;
var datas = [];


function preload(){
  myData = loadJSON('assets/oscar.json');
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  background(255);
  //console.log(myData);

}

function draw() {
  // put drawing code here

  for(var i = 0; i < 10; i++){
      var csv = myData[i];
      var yea = csv.Year;
      var mov = csv.Movie;
      var name = csv.Name;
      //console.log(name);

        noStroke();
        textFont('Georgia');
        push();
        textAlign(CENTER);
        textSize(40);
        fill('black');
        text('Oscar Winners 1928-1936', width/2, 100);
        pop();
        textSize(25);
        fill('black');
        text(yea, (width/10)*(i+1), 170);
        textSize(12);
        text(mov, (width/10)*(i+1), 200);
        textSize(18);

        text(name, (width/10)*(i+1), 570);

    }

    stun1 = new stun(width/10,height/3,30,150);
    push.stun1;
    stun2 = new stun((width/10)*2,height/3,30,150);
    push.stun2;
    stun3 = new stun((width/10)*3,height/3,30,150);
    push.stun3;
    stun4 = new stun((width/10)*4,height/3,30,150);
    push.stun4;
    stun5 = new stun((width/10)*5,height/3,30,150);
    push.stun5;
    stun6 = new stun((width/10)*5,height/3,30,150);
    push.stun6;
    stun7 = new stun((width/10)*6,height/3,30,150);
    push.stun7;
    stun8 = new stun((width/10)*7,height/3,30,150);
    push.stun8;
    stun9 = new stun((width/10)*8,height/3,30,150);
    push.stun9;
    stun10 = new stun((width/10)*9,height/3,30,150);
    push.stun10;

}


function stun(_x,_y,_w,_h,_yea,_mov) {
  this.x= _x;
  this.y= _y;
  this.w= _w;
  this.h= _h
  this.s= _x+_w
  this.p= _y+ _h
  this.yea= _yea;
  this.mov = _mov;
  // this.year =
  noStroke();
  fill('white');
  if (mouseX> this.x && mouseX< this.s || mouseY> this.y && mouseY< this.p ) {
    fill('yellow')
    rect(this.x, this.y, this.w, this.h*2);

  } else {
    rect(this.x, this.y, this.w, this.h);
    fill('white');

  }

  print(mouseIsPressed);
}
