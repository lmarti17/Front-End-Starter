// Paramètres
var fieldIntensity = 10;
var fieldScale = 300;
var agentCount = 1000;
var agentSize = 1.5;
var agentAlpha = 90;
var stepSize = 10;
/////////////

var field;
var agents;

function setup() {
    createCanvas(document.documentElement.clientWidth, document.documentElement.clientHeight);
    field = createPerlinField(fieldIntensity, fieldScale);
    agents = [];
    var a;
    for (var i = agentCount - 1; i >= 0; i--) {
        a = createAgent();
        a.stepSize = stepSize;
        agents.push(a);
    };
	console.log("hello");
    background(255);
}

function draw() {
    agents.forEach(function(a) {
        a.angle = field.getFieldValue(a.position); // Utilisation de la valeur du champ à l'endroit où se trouve l'agent comme nouvelle valeur de l'angle.
        a.updatePosition();
        stroke(0, agentAlpha);
        strokeWeight(agentSize);
        line(a.previousPosition.x, a.previousPosition.y, a.position.x, a.position.y);
    });
}

function refreshBackground() {
    background(255);
}
