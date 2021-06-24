var platform1,platform2
var countDistanceX=0
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  
 for(var i=0; i<24; i++){
platform1=new Platform(countDistanceX);
countDistanceX=countDistanceX+platform1.rw
gap= random ([80,100,220,50,0])

 }




}

function draw() {
  background('skyblue'); 
 drawSprites();
}

