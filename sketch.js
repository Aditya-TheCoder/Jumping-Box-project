var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
edges = createEdgeSprites();
    //create 4 different surfaces
surface1 = createSprite(100,500,200,20);
surface2 = createSprite(300,500,200,20);
surface3 = createSprite(500,500,200,20);
surface4 = createSprite(700,500,200,20);

surface1.shapeColor = ("blue");
surface2.shapeColor = ("orange");
surface3.shapeColor = ("red");
surface4.shapeColor = ("green");

    //create box sprite and give velocity
box = createSprite(400,50,20,20);
box.shapeColor = ("white");
box.velocityX = 5;
box.velocityY = 5;
music.play();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
box.bounceOff(edges);

if(box.isTouching(surface1)){
    box.shapeColor = ("white");
    box.collide(surface1);
    box.velocityX = 0
    music.stop();
}
if(box.isTouching(surface2)){
    box.shapeColor = ("orange");
    box.bounceOff(surface2);
}
if(box.isTouching(surface3)){
    box.shapeColor = ("red");
    box.bounceOff(surface3);
}
if(box.isTouching(surface4)){
    box.shapeColor = ("green");
    box.bounceOff(surface4);
}

    //add condition to check if box touching surface and make it box
    drawSprites();
}
