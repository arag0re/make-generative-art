let hashPairs = [];

for (let j = 0; j < 32; j++) {
     hashPairs.push(tokenData.hash.slice(2 + (j * 2), 4 + (j * 2)));
}


let seed = parseInt(tokenData.hash.slice(48, 64), 16);

let decPairs = hashPairs.map(x => {
     return parseInt(x, 16);
});

let multiplier;

function setup() {
     const dim = Math.min(windowWidth, windowHeight);
     createCanvas(dim, dim);
     multiplier = width / 2400;



     noLoop()
}

function draw() {
     noFill()
     let a = 400 * multiplier;
     let b = 1800 * multiplier;
     let m = map(decPairs[0], 0, 255, 10 * multiplier, 30 * multiplier);
     let x1 = map(decPairs[1], 0, 255, a, b);
     let y1 = map(decPairs[2], 0, 255, a, b);
     let x2 = map(decPairs[3], 0, 255, a, b)
     let y2 = map(decPairs[4], 0, 255, a, b)
     let x3 = map(decPairs[5], 0, 255, a, b)
     let y3 = map(decPairs[6], 0, 255, a, b)
     let x4 = map(decPairs[7], 0, 255, a, b)
     let y4 = map(decPairs[8], 0, 255, a, b)
     let x5 = map(decPairs[9], 0, 255, a, b)
     let y5 = map(decPairs[10], 0, 255, a, b)
     let x6 = map(decPairs[11], 0, 255, a, b)
     let y6 = map(decPairs[12], 0, 255, a, b)
     let x7 = map(decPairs[13], 0, 255, a, b)
     let y7 = map(decPairs[14], 0, 255, a, b)
     let x8 = map(decPairs[15], 0, 255, a, b)
     let y8 = map(decPairs[16], 0, 255, a, b)
     stroke("#111111")
     colorMode(HSB, 255)
     let colorH = map(decPairs[18], 0, 255, 0, 255)
     let colorS = map(decPairs[19], 0, 255, 0, 150)
     let colorB = map(decPairs[20], 0, 255, 210, 255)
     background(colorH, colorS, colorB)
     for (let i = 0; i <= map(decPairs[17], 0, 255, 5, 15); i++) {
          strokeWeight(5 * multiplier)
          line(x1 + i * m, y1 + i * m, x2 + i * m, y2 + i * m)
          line(x3 + i * m, y3 + i * m, x4 + i * m, y4 + i * m)
          line(x5 + i * m, y5 + i * m, x6 + i * m, y6 + i * m)
          line(x7 + i * m, y7 + i * m, x8 + i * m, y8 + i * m)
     }

     for (let i = 0; i < map(decPairs[18], 0, 255, 10, 30); i++) {
          strokeWeight(map(decPairs[19], 0, 255, 1, 10) * multiplier)
          circle(x1, y1, map(rnd(), 0, 1, 10 * multiplier, 200 * multiplier));
     }
     strokeWeight(10 * multiplier)
     drawingContext.shadowOffsetX = 0;
     drawingContext.shadowOffsetY = 0;
     drawingContext.shadowBlur = 40 * multiplier;
     drawingContext.shadowColor = "#111111";
     circle(1200 * multiplier, 1200 * multiplier, 2000 * multiplier)
     drawingContext.shadowOffsetX = 0;
     drawingContext.shadowOffsetY = 0;
     drawingContext.shadowBlur = 0;
     strokeWeight(0.08 * multiplier)
     stroke("pink")
     for (let i = 0; i < 7500 * multiplier; i++) {
          line(map(rnd(), 0, 1, -1200 * multiplier, 3600 * multiplier), map(rnd(), 0, 1, -1200 * multiplier, 3600 * multiplier), map(rnd(), 0, 1, -1200 * multiplier, 3600 * multiplier), map(rnd(), 0, 1, -1200 * multiplier, 3600 * multiplier))
     }
}



function rnd() {


     seed ^= seed << 13;

     seed ^= seed >> 17;

     seed ^= seed << 5;

     return (((seed < 0) ? ~seed + 1 : seed) % 1000000) / 1000000;
}