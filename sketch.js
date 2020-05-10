// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground,tank,tank2//,tank3;
var world,engine;
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas = createCanvas(400,400);
engine = Engine.create();
world = engine.world;

ground = new Ground(400,20);
tank1 = new Tanker(200,370,50,20)
tank2 = new Tanker(200,350,30,20);
tank3 = new Tanker(240,350,50,10);

}

function draw() {
// Remember to update the Matter Engine and set the background.
background(0);
    Engine.update(engine);

ground.display();
tank1.display();
tank2.display();
tank3.display();
}


function keyReleased() {
    // Call the shoot method for the cannon.
}