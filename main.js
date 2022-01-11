function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}

function preload() {
    img = loadImage("tv.PNG");   
}

function draw() {
    image(img,0,0,640,420);
    fill('#FF0000')
    text('television',67,70);
    noFill();
    stroke('#FF0000');
    rect(20,25,400,380);
}
