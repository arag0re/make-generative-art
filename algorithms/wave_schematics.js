function rounded(i, e) {
     return Number(Math.round(i + "e" + e) + "e-" + e)
}

function setShadowContext() {
     drawingContext.shadowOffsetX = 0 * multiplier, drawingContext.shadowOffsetY = 0 * multiplier, drawingContext.shadowBlur = 20 * multiplier, drawingContext.shadowColor = secondary
}

function revertShadowContext() {
     drawingContext.shadowOffsetX = 0, drawingContext.shadowOffsetY = 0, drawingContext.shadowBlur = 0
}

function setup() {
     createCanvas(windowWidth > windowHeight ? windowHeight : windowWidth, windowWidth > windowHeight ? windowHeight : windowWidth), multiplier = width / 1920, frameRate(30), colorMode(HSB, 255), rectMode(CENTER)
}

function drawTexture() {
     noFill();
     let i = color(secondary);
     i.setAlpha(10), stroke(i), strokeWeight(2 * multiplier);
     for (let i = 0; i < 1e3; i++) line(random(-canvasWidth, 2 * canvasWidth), random(-canvasHeight, 2 * canvasHeight), random(-canvasWidth, 2 * canvasWidth), random(-canvasHeight, 2 * canvasHeight))
}

function draw() {
     function i() {
          setShadowContext();
          let i = map(decPairs[0], 0, 255, 0, 100);
          i > 40 ? stroke(primary) : stroke(secondary);
          let e, l = Math.floor(map(decPairs[1], 0, 255, 0, 100)),
               o = Math.floor(map(decPairs[2], 0, 255, 100, 1e3)),
               m = Math.floor(map(decPairs[3], 0, 255, 25, 50));
          e = l < 25 ? Math.sin(millis() / o) * m * 10 : 0;
          let p = Math.floor(map(decPairs[4], 0, 255, 0, 400));
          strokeWeight(p * multiplier + e * multiplier), fill(t, r, a);
          let d = map(decPairs[5], 0, 255, 0, 100);
          d > 50 ? blendMode(HARD_LIGHT) : blendMode(SOFT_LIGHT), beginShape(TRIANGLE_STRIP);
          for (let i = 0; i < map(decPairs[6], 0, 255, 5, 50); i++) vertex(map(decPairs[7 + i], 0, 255, -width / 2, 2 * width), map(decPairs[8 + i], 0, 255, -height / 2, 2 * height));
          endShape(), blendMode(BLEND), revertShadowContext()
     }

     function e() {
          function i() {
               for (let i = 0; i < f; i++) {
                    push(), rotate(TWO_PI * i / f + millis() * w), P < 10 ? randomSeed(millis() / 100) : randomSeed(Math.floor(map(decPairs[25 - i], 0, 255, 0, 100))), beginShape();
                    for (let i = 0; i < 1; i++) {
                         beginShape(TRIANGLES);
                         for (let i = 0; i < 9; i++) vertex(random(0, height / 6) + i * n * multiplier, random(0, height / 6));
                         endShape()
                    }
                    pop()
               }
               pop()
          }

          function e() {
               for (let i = 0; i < f; i++) {
                    push(), rotate(TWO_PI * i / f + millis() * w), P < 10 ? randomSeed(millis() / 100) : randomSeed(Math.floor(map(decPairs[25 - i], 0, 255, 0, 100))), beginShape();
                    for (let i = 0; i < 1; i++) {
                         beginShape(TRIANGLES);
                         for (let i = 0; i < 9; i++) vertex(random(0, height / 6) + i * n * multiplier + (Math.cos(millis() * w / 4) - Math.sin(millis() * w * random(0, 10)) * M * multiplier), random(0, height / 6));
                         endShape()
                    }
                    pop()
               }
               pop()
          }

          function l() {
               for (let i = 0; i < f; i++) {
                    push(), rotate(TWO_PI * i / f + millis() * w), P < 10 ? randomSeed(millis() / 100) : randomSeed(Math.floor(map(decPairs[25 - i], 0, 255, 0, 100)));
                    for (let i = 0; i < 10; i++) circle(random(0, 100) * multiplier + i * n * multiplier, random(0, 100) * multiplier + i * h * multiplier, random(0, 100) * multiplier);
                    pop()
               }
               pop()
          }

          function o() {
               for (let i = 0; i < f; i++) {
                    push(), rotate(TWO_PI * i / f + millis() * w), P < 10 ? randomSeed(millis() / 100) : randomSeed(Math.floor(map(decPairs[25 - i], 0, 255, 0, 100)));
                    for (let i = 0; i < 10; i++) circle(random(0, 100) * multiplier + i * n * multiplier + (Math.cos(millis() * w / 4) - Math.sin(millis() * w * random(0, 10)) * M * multiplier), random(0, 100) * multiplier + i * h * multiplier, random(0, 100) * multiplier);
                    pop()
               }
               pop()
          }

          function m() {
               for (let i = 0; i < f; i++) {
                    push(), rotate(TWO_PI * i / f + millis() * w);
                    for (let i = 0; i < 10; i++) rect(0 * multiplier + i * n * multiplier, 0 * multiplier + i * h * multiplier, s * multiplier, 20 * multiplier + i * u * multiplier, c * multiplier);
                    pop()
               }
               pop()
          }

          function p() {
               for (let i = 0; i < f; i++) {
                    push(), rotate(TWO_PI * i / f + millis() * w);
                    for (let i = 0; i < 10; i++) rect(0 * multiplier + i * n * multiplier + Math.tan(millis() * w) * M * multiplier, 0 * multiplier + i * h * multiplier, s * multiplier, 20 * multiplier + i * u * multiplier, c * multiplier);
                    pop()
               }
               pop()
          }
          let d = map(decPairs[9], 0, 255, 0, 100);
          d < 25 ? (stroke(t, r, a), fill(secondary)) : (stroke(secondary), fill(t, r, a)), strokeWeight(4 * multiplier), push(), translate(width / 2, height / 2);
          let n = Math.floor(map(decPairs[10], 0, 255, 40, 60)),
               s = Math.floor(map(decPairs[11], 0, 255, 0, 120)),
               h = Math.floor(map(decPairs[12], 0, 255, -60, 60)),
               u = Math.floor(map(decPairs[13], 0, 255, 0, 30)),
               c = Math.floor(map(decPairs[14], 0, 255, 0, 50)),
               f = Math.floor(map(decPairs[15], 0, 255, 4, 32)),
               w = rounded(map(decPairs[16], 0, 255, 1e-4, 9e-4), 4),
               P = Math.floor(map(decPairs[17], 0, 255, 0, 100));
          P < 10 && (randomSeed(millis() / 100), h = random(-60, 60), s = random(0, 120), u = random(-40, 20));
          let g = Math.floor(map(decPairs[18], 0, 255, 0, 100)),
               M = map(decPairs[19], 0, 255, 50, 150);
          g < 25 ? m() : g >= 25 && g < 50 ? l() : g >= 50 && g < 75 ? i() : g >= 75 && g < 83 ? e() : g >= 83 && g < 91 ? o() : p()
     }

     function l() {
          stroke(secondary), strokeWeight(10 * multiplier), fill(t, r, a), setShadowContext();
          let i = map(decPairs[20], 0, 255, 0, 100);
          i < 25 ? rect(width / 2, height / 2, width / 4, height / 4, 100 * multiplier) : circle(width / 2, height / 2, width / 3);
          let e = Math.floor(map(decPairs[21], 0, 255, 1, 999999999));
          randomSeed(e);
          for (let i = 0; i < 3; i++)
               for (let e = 0; e < 3; e++) {
                    let l = random(0, 100);
                    l < 25 ? fill(secondary) : fill(t, r, a);
                    let o, m = random(0, 100);
                    o = m < 33 ? 120 * multiplier : m > 33 && m < 66 ? 60 * multiplier : 30 * multiplier, strokeWeight(3 * multiplier);
                    let p = random(0, 100);
                    p < 25 ? circle(840 * multiplier + 120 * i * multiplier, 840 * multiplier + 120 * e * multiplier, o) : p > 25 && p < 50 ? square(840 * multiplier + 120 * i * multiplier, 840 * multiplier + 120 * e * multiplier, o) : p > 50 && p < 60 ? line(780 * multiplier + 120 * i * multiplier, 780 * multiplier + 120 * e * multiplier, 900 * multiplier + 120 * i * multiplier, 900 * multiplier + 120 * e * multiplier) : p > 60 && p < 70 ? line(840 * multiplier + 120 * i * multiplier, 780 * multiplier + 120 * e * multiplier, 840 * multiplier + 120 * i * multiplier, 900 * multiplier + 120 * e * multiplier) : p > 70 && p < 80 && line(780 * multiplier + 120 * i * multiplier, 900 * multiplier + 120 * e * multiplier, 900 * multiplier + 120 * i * multiplier, 780 * multiplier + 120 * e * multiplier)
               }
          revertShadowContext()
     }
     let t = Math.floor(map(decPairs[22], 0, 255, 0, 255)),
          r = Math.floor(map(decPairs[23], 0, 255, 0, 125)),
          a = Math.floor(map(decPairs[24], 0, 255, 200, 255));
     background(t, r, a), i(), e(), l()
}
let canvasWidth = 1920,
     canvasHeight = 1920,
     secondary = "#111111",
     primary = "#eeeeee",
     xoff = 0,
     hashPairs = [];
for (let i = 0; i < 32; i++) hashPairs.push(tokenData.hash.slice(2 + 2 * i, 4 + 2 * i));
let multiplier, seed = parseInt(tokenData.hash.slice(48, 64), 16),
     decPairs = hashPairs.map(i => parseInt(i, 16));