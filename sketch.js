
function Wave() {
  
  //using a pre existing code to start but adapting it
  this.xspacing = 2;    // Distance between each horizontal location
  this.w = width+12;                // Width of entire wave
  this.theta = 270.0;      // Start angle at 0
  this.amplitude = 50; // Height of wave
  this.period = 75.0;   // How many pixels before the wave repeats
  this.dx = (QUARTER_PI / this.period) * this.xspacing;               // Value for incrementing x
  this.yvalues = new Array(floor(this.w / this.xspacing));  // Using an array to store height values for the wave
 
  
  this.angle = 0;
  this.c = color(255,0,0);
  
  
  this.calcWave = function() {
   
    this.theta += 0.0175;
  
    // For every x value, calculate a y value with sine function
    var x = this.theta;
    for (var i = 0; i < this.yvalues.length; i++) {
      this.yvalues[i] = sin(x)*this.amplitude;
      x += this.dx;
    }
  }
  
  this.renderWave = function() {
    push();
    rotate(radians(this.angle));
    noStroke();
    fill(this.c);
    // A simple way to draw the wave with an ellipse at each location
    for (var x = 0; x < this.yvalues.length; x++) {
      ellipse(x * this.xspacing, height/2 + this.yvalues[x], 16, 16);
    }
    
    
    pop()
  }
}

var wave;
var wave2;
var wave3;
var wave4;



function setup() {
  createCanvas(1000, 700);
  
  wave = new Wave();
  wave.amplitude = -80;
  wave.angle = 20;
  
  wave2 = new Wave();
  wave2.amplitude = 85;
 wave2.angle = 5;
 
 wave3 = new Wave();
  wave3.amplitude = 4;
  wave3.angle = 10;
 
  wave4 = new Wave();
  wave4.amplitude = 270;
  wave4.angle = 30;
 
 
  
  // w = width+12;
  // dx = (QUARTER_PI / period) * xspacing;
  // yvalues = new Array(floor(w/xspacing));
}


function draw() {
  background(0, 102, 51);
  wave.calcWave();
  wave.renderWave();
  wave.c = color(156, 42, 0);//red
  
  wave2.calcWave();
  wave2.renderWave();
  wave2.c = color(255,255,51);//yellow
  wave3.calcWave();
  wave3.renderWave();
  wave3.c = color(255, 102, 0);//orange
 
  wave4.calcWave();
  wave4.renderWave();
  wave4.c = color(0, 51, 102); //blue
  
}

