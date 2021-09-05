var seed = parseInt(tokenData.hash.slice(50, 66), 16);
let hash = [];
let brush, inkDensity, inkLoad, v, radius;
for (let i = 0; i < (tokenData.hash.length - 2) / 2; i++) {
     hash.push(parseInt(tokenData.hash.slice(2 + i * 2, 4 + i * 2), 16));
}

function setup() {
     dim = Math.min(window.innerWidth, window.innerHeight);
     createCanvas(dim, dim);
     delta = 1600;
     m = dim / (4 * delta);
     noFill();
     colorMode(HSB, 360, 100, 100, 1);
     angleMode(DEGREES);
     isDrawn = false;
     showSig = true;
     features = [];
     s = dim / 250;
     sX = 230 * s;
     sY = 215 * s;
}

function mouseClicked() {
     if (showSig === true) {
          showSig = false;
     } else {
          showSig = true;
     }
}

function draw() {
     while (isDrawn === false) {
          choosePaper();
          brush = chooseBrush();
          var inkDensity = getVal(1, 6);
          inkLoad = getVal(1, 6);
          v = getVal(1, 6);
          var brushPath = choosePath();
          var ink = dipIntoInk();
          paintStroke(brushPath);
          var sigInk = getVal(0, 2);
          isDrawn = true;
          set();
     }
     if (showSig === true) {
          signature();
     } else {
          set(sX, sY);
          updatePixels();
     }

     function choosePaper() {
          colorH = 60 * getVal(1, 6);
          colorS = 4;
          if (getVal(0, 100) > 95) {
               colorH = 0;
               colorS = 0;
          }
          background(colorH, colorS, 95, 1);
          let paperTexture = getVal(1, 6);
          translate(dim / 2, dim / 2);
          for (let l = 0; l < 2400; l++) {
               let area = dim * 1.25;
               let c = [];
               for (let k = 0; k < 8; k++) {
                    c.push(rnd(-area, area));
               }
               strokeWeight(rnd(m, paperTexture * m));
               stroke(0, 0, 100, rnd(0, 1));
               bezier(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7]);
          }
     }

     function chooseBrush() {
          let ringCount = getVal(9, 15);
          let bristleDensity = getVal(1, 8);
          let b = [
               [
                    [0, 0]
               ]
          ];
          for (let i = 1; i < ringCount; i++) {
               b[i] = circumferencePoints(
                    (1 + bristleDensity / 10) * ringCount * i,
                    2 * ringCount * i * m,
                    1,
                    1
               );
          }
          return b;
     }

     function dipIntoInk() {
          let inkedBrush = [];
          for (let r = 0; r < brush.length; r++) {
               let inkedRing = [];
               let ringInkMax = 1 - r / ((inkLoad / 5 + 0.8) * brush.length);
               for (let bristle = 0; bristle < brush[r].length; bristle++) {
                    let inkedBristle = [];
                    let currentInk = ringInkMax * rnd(0.5, 2.25);
                    let cond = 0;
                    for (let t = 0; t < delta; t++) {
                         inkedBristle.push(currentInk);
                         let rand = rnd(0, v) / delta;
                         if (cond == 0) {
                              currentInk = currentInk - rand;
                              if (currentInk < -0.01) {
                                   if (rnd(0, 1) > 0.979) {
                                        currentInk = 0;
                                        cond = 1;
                                   } else {
                                        cond = 3;
                                   }
                              }
                         } else if (cond == 1) {
                              currentInk = currentInk + 3 * rand;
                              if (currentInk > rnd(0.4, 0.8)) {
                                   cond = 2;
                              }
                         } else if (cond == 2) {
                              currentInk = currentInk - 1.5 * rand;
                              if (currentInk < -0.01) {
                                   cond = 3;
                              }
                         } else if (cond == 3) {
                              currentInk = 0;
                         }
                    }
                    inkedRing.push(inkedBristle);
               }
               inkedBrush.push(inkedRing);
          }
          return inkedBrush;
     }

     function choosePath() {
          let rotation = getVal(0, 20);
          rotate(-90 + 18 * rotation);
          radius = dim / getVal(4, 7);
          let stretchX = getVal(19, 26) / 20;
          let stretchY = getVal(19, 26) / 20;
          var path = circumferencePoints(delta, radius, stretchX, stretchY);
          return path;
     }

     function paintStroke(path) {
          for (let j = 0; j < path.length; j++) {
               for (let ring = 0; ring < brush.length; ring++) {
                    for (let b = 0; b < brush[ring].length; b++) {
                         if (rnd(0, 1) < j / 10) {
                              let inkFlow = ink[ring][b][j] / (61 - inkDensity * 10);
                              stroke(0, 0, 3.9, inkFlow);
                              strokeWeight(35 * m - (10 * j * m) / path.length);
                              point(
                                   path[j][0] + brush[ring][b][0],
                                   path[j][1] + brush[ring][b][1]
                              );
                         }
                    }
               }
          }
     }

     function signature() {
          get(sX, sY, sX + 10 * s, sY + 24 * s);
          strokeWeight(s * 0.8);
          if (colorH == 60) {
               stroke(colorH, 85, 80 - (sigInk * 15), 1);
          } else {
               stroke(colorH, 85, 70 - (sigInk * 15), 1);
          }
          L(0, 0, 0, 24);
          L(0, 0, 5, 3);
          L(5, 3, 10, 0);
          L(0, 24, 1, 24);
          L(9, 24, 10, 24);
          L(10, 0, 10, 24);
          L(5, 3, 2, 10.5);
          L(5, 3, 8, 10.5);
          L(3.5, 7, 6.5, 7);
          L(0, 10.5, 10, 10.5);
          L(3, 10.5, 3, 17);
          L(7, 10.5, 7, 17);
          circle(sX + 5 * s, sY + 20 * s, 7 * s);

          function L(x1, y1, x2, y2) {
               line(sX + x1 * s, sY + y1 * s, sX + x2 * s, sY + y2 * s);
          }
     }

     function getVal(min, max) {
          max = max - 0.001;
          let x = Math.floor((hash[0] * (max - min)) / 255 + min);
          hash.shift();
          return x;
     }

     function rnd(min, max) {
          max = max - 0.001;
          seed ^= seed << 13;
          seed ^= seed >> 17;
          seed ^= seed << 5;
          return (((((seed < 0) ? ~seed + 1 : seed) % 1000) / 1000) * (max - min)) / 1 + min;
     }

     function circumferencePoints(steps, r, stretchX, stretchY) {
          let direction = 1;
          if (steps == delta) {
               if (getVal(0, 3) == 0) {
                    direction = -1;
               }
          }
          var points = [];
          for (var i = 0; i < steps; i++) {
               let pathX =
                    r * stretchY * Math.cos((direction * 2 * Math.PI * i) / steps);
               let pathY =
                    r * stretchX * Math.sin((direction * 2 * Math.PI * i) / steps);
               points.push([pathX, pathY]);
          }
          return points;
     }
}