//a javascript object (json) stores multiple values in an object and can be used to store different aspects for a sprite or game object
var ball = {
  x_val:100,
  y_val:100,
  radius:20,
  x_speed:3,
  y_speed:4,
  ball_color: ["blue","red","yellow","green"],

};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x_val,ball.y_val,ball.radius);
  fill(ball.ball_color[0]);
  ball.x_val = ball.x_val+ball.x_speed
}