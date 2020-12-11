var population;
var nbCars = 100;
var lifespan = 400;
var counter = 0;
var lifespanDisplay;
var finishLine;

function setup(){
    createCanvas(900, 900);
    population = new Population();
    population.initPopulation();
    finishLine = createVector(width/2, 20);
}

function draw(){
    background(0);
    drawTxt();
    drawFinishLine();
    population.run();
    counter++;
    if(counter == lifespan){
        resetSimulation();
    }
}

function drawTxt(){
    push();
	strokeWeight(1);
	fill(0);
	stroke(0,0,255);
	rect(20,30,190,40);
	fill(255);
    textSize(18);
    if((lifespan - counter) > 0){
        text("Time remaining : " + (lifespan - counter), 30, 58);
    }else{
        strokeWeight(0);
        fill(255, 0, 0);
        text("Cars are dead ! :(", 30, 58);
    }
	pop();
}

function drawFinishLine(){
    var width = 100;    
    var height = 15;
    var nbSquares = 20;
    fill(255);
    rect(finishLine.x - (width/2), finishLine.y, width, height);
    for(var i = -(width/2); i <= width/2; i+=width/(nbSquares/2)){
        fill(0,0,255);
        rect(finishLine.x + i, finishLine.y, width/nbSquares, height);
    }
}

function resetSimulation(){
    counter = 0;
    population = new Population();
    population.initPopulation();
}