let stars = [];
let spread = 100;
let speedSlider;

function setup(){
    createCanvas(windowWidth,windowHeight-50);
    speedSlider = createSlider(0, 50, 2, 0.1);
    for (let i = 0; i < 1000; i++) {
        stars[i] = createVector(
            random(-width*spread, width*spread),
            random(-height*spread, height*spread),
            random(width)
            );
            stars[i].pz = stars[i].z;
    }
    
}

function draw(){
    background(0);
    console.log("hello")
    translate(width / 2, height / 2);

    for (let star of stars) {
        let x = star.x / star.z;
        let y = star.y / star.z;
        let px = star.x / star.pz;
        let py = star.y / star.pz;   
        let d = map(star.z, 0, 400, 7, 0);
        fill('lightblue');
        noStroke();
        circle(x, y, d);
        stroke(255);
        line(x, y, px, py);
        star.pz = star.z;
        star.z -= speedSlider.value();
        if (star.z < 1) {
            random(-width*spread, width*spread),
            random(-height*spread, height*spread),
            star.z = 400;
            star.pz = 400;
        }
    }

}