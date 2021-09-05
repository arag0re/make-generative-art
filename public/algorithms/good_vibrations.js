let seed = parseInt(tokenData.hash.slice(0, 16), 16);
let MelodyNum, totalLine;
let melodys = [];
let lines = [];
let MelodyType, MelodydDistX, MelodydDistY;
let lineDist, cssbg;
let soundGo = 0;
let idX, idY, lineDir, ccinvert = false;
let inCircleIdx, xInvert, yInvert;
let grid, archRect, specialBg;
let DIM, rdn, pge, bgSpecial = 50;
let osc = [];
var keyz = [false, false, false, false]
let lineIDX = 0;
let reverb, snapNum = 0;
let frameId, FcolorLine;
let meta, metaCount = 500;
let features, Fcolor, FMelodyNum, FframeStyle, FframeColor, Fshape, FrectNum, Fsine, FTraingle, FSquare, FSaw, synthId, FbgShape, FspecialLine, ring, ringX, ringY, frameOutline = 0,
     colorsA = ["#3B5F88", "#C6C6C6", "#333d47", "#EAEAEA"],
     LineColorsA = ["#f78a6b", "#6bb26c", "#fbb03b", "#5D96C9"],
     colorsB = ["#CB5958", "#EAE4D9", "#553B31", "#8A7E6E"],
     LineColorsB = ["#BDCCD4", "#F3BD45", "#3B5F88", "#FF5E82"],
     colorsC = ["#C6C6C6", "#22441B", "#32683E", "#845F4E"],
     LineColorsC = ["#ECB4A4", "#3B5F88", "#FBB03B", "#A1AA3B"],
     colorsD = ["#A8AAE9", "#6A80CB", "#E05567", "#84E39D"],
     LineColorsD = ["#84E39D", "#6A80CB", "#E05567", "#E05567"],
     colorsF = ["#8E8E8E", "#6B6B6B", "#4C4C4C", "#262626"],
     LineColorsF = ["#FFFFFF", "#DBDBD9", "#AFAFAF", "#AFAFAF"],
     frqArray = [130.82, 146.83, 164.81, 174.61, 196, 220, 246.94, 261.6, 293.7, 329.6, 349.2, 392, 440, 493.9, 523.25, 587.33, 659.26, 698.46, 783.99, 880, 987.77],
     noteLength = [.8, 1.2, 1.6, 2],
     mSize = [2, 2, 2, 2, 4, 4, 4, 10, 4, 4, 4, 4, 10, 4, 4, 4, 6, 6, 16, 6, 6, 6, 6, 6, 6, 6, 6, 10, 10, 10, 16, 16],
     grad = [
          ["#686868", "#999999", "#444444", "#B5B5B4", "#D3D3D3"],
          ["#FCE355", "#FFCC3B", "#6D3503", "#B28E36", "#572600"],
          ["#232323", "#606060", "#3D3D3D", "#B5B5B4", "#3D3D3D"],
          ["#20326E", "#62E383", "#8083E9", "#3B5CCB", "#C23447"],
          ["#3B5F88", "#2D4F37", "#F3BD45", "#845F4E", "#CB5958"]
     ];

function setup() {
     (W = window.innerWidth), (H = window.innerHeight), (DIM = min(W, H));
     createCanvas(DIM, DIM);
     meta = createGraphics(500, 500);
     meta.pixelDensity(1);
     pixelDensity();
     imageMode(CENTER);
     smooth();
     frameRate(30);
     compose();
}

function compose() {
     rdn = new Random(seed);
     rdn.random_dec();
     colorSetting();
     defult();
}

function draw() {
     soundGo++;
     tint(255, 255);
     image(archRect, DIM / 2, DIM / 2, DIM, DIM);
     for (let i = 0; i < MelodyNum; i++)
          if (melodys[i].later == 3) melodys[i].showBg();
     for (let i = 0; i < MelodyNum; i++)
          if (melodys[i].later == 2) melodys[i].showBg();
     for (let i = 0; i < MelodyNum; i++)
          if (melodys[i].later == 1) melodys[i].showBg();
     for (let i = 0; i < MelodyNum; i++)
          if (melodys[i].later == 0) melodys[i].showBg();
     for (let i = 0; i < totalLine; i++)
          if (lines[i] != null) lines[i].display();
     for (let i = 0; i < MelodyNum; i++) melodys[i].run();
     drawframe();
     if (metaCount < 314) recordMeta(), showMeta();
}
class Melody {
     constructor(_id, _x, _y) {
          this.id = _id;
          this.circleStep = rdn.random_int(5, 15);
          this.sizeId = rdn.random_int(0, mSize.length);
          this.later = 10;
          if (mSize[this.sizeId] <= 4) this.later = 0;
          else if (mSize[this.sizeId] == 6) this.later = 1;
          else if (mSize[this.sizeId] == 10) this.later = 2;
          else this.later = 3;
          this.circleRadius = (mSize[this.sizeId] * DIM) / 20;
          this.circleX = _x;
          this.circleY = _y;
          this.quater = 45.0 * rdn.random_int(0, 8);
          this.angle = (this.quater / 360.0) * 6.28;
          this.tx = 0;
          this.ty = 0;
          this.speed = 0.02 * rdn.random_int(1, 3);
          this.brightness = [];
          this.scaleArray = [];
          this.angleRange = [PI, HALF_PI];
          this.angleId = rdn.random_int(0, 2);
          this.arcEnd = this.angleRange[this.angleId];
          this.angleRange2 = [0, QUARTER_PI, HALF_PI, PI];
          this.angleId2 = rdn.random_int(0, 4);
          this.arcStart = this.angleRange2[this.angleId2];
          this.finalEnd = (this.arcEnd + this.arcStart) % 6.28;
          if (this.sizeId < 25)(this.area = rdn.random_int(0, 5)), (this.shape = 0);
          else {
               this.shape = 1;
               if (this.arcStart < 0.1) this.area = 0;
               else if (this.arcStart > 0.1 && this.arcStart < 1.57) this.area = 1;
               else if (this.arcStart > 1.57 && this.arcStart < 3.14) this.area = 2;
               else if (this.arcStart > 3.14) this.area = 3;
          }
          for (let i = 0; i < this.circleStep; i++) this.brightness[i] = rdn.random_num(0.65, 0.95);
          for (let i = 0; i < this.circleStep; i++) this.scaleArray[i] = rdn.random_num(0.3, 0.95);

          this.colorIdx = rdn.random_int(0, MelodyColor.length);
          this.cc = color(MelodyColor[this.colorIdx]);
          this.clickIdx = rdn.random_int(0, LineColors.length);
          this.clickColor = color(LineColors[this.clickIdx]);
          this.colorH = hue(this.cc);
          this.colorS = saturation(this.cc);
          this.colorB = brightness(this.cc);
     }
     run() {
          this.showLine();
          this.intersection();
     }
     showBg() {
          if (MelodyColor == colorsD || MelodyColor == colorsF) {
               colorMode(HSB, 100);
               stroke(this.cc);
               noFill();
               strokeWeight(2.0);
               if (this.shape == 0) ellipse(this.circleX, this.circleY, this.circleRadius, this.circleRadius);
               else arc(this.circleX, this.circleY, this.circleRadius, this.circleRadius, this.arcStart, this.finalEnd);
               for (let i = 0; i < this.circleStep; i++) {
                    let radius = this.scaleArray[i] * 0.7 + 0.3;
                    stroke(this.colorH, this.colorS, this.colorB * this.brightness[i]);
                    strokeWeight(0.5);
                    if (this.shape == 0) ellipse(this.circleX, this.circleY, this.circleRadius * radius, this.circleRadius * radius);
                    else arc(this.circleX, this.circleY, this.circleRadius * radius, this.circleRadius * radius, this.arcStart, this.finalEnd);
               }
          } else {
               colorMode(HSB, 100);
               fill(this.cc);
               noStroke();
               if (this.shape == 0) ellipse(this.circleX, this.circleY, this.circleRadius, this.circleRadius);
               else arc(this.circleX, this.circleY, this.circleRadius, this.circleRadius, this.arcStart, this.finalEnd);
               for (let i = 0; i < this.circleStep; i++) {
                    let radius = this.scaleArray[i] * 0.7 + 0.3;
                    fill(this.colorH, this.colorS, this.colorB * this.brightness[i]);
                    if (this.shape == 0) ellipse(this.circleX, this.circleY, this.circleRadius * radius, this.circleRadius * radius);
                    else arc(this.circleX, this.circleY, this.circleRadius * radius, this.circleRadius * radius, this.arcStart, this.finalEnd);
               }
          }
     }

     showLine() {
          colorMode(RGB);
          if (ccinvert == false) fill(255, 200);
          else fill(0, 200);
          noStroke();
          ellipse(this.circleX, this.circleY, DIM / 60);
          this.tx = this.circleX + (cos(this.angle + this.arcStart) * this.circleRadius) / 2;
          this.ty = this.circleY + (sin(this.angle + this.arcStart) * this.circleRadius) / 2;
          ellipse(this.tx, this.ty, DIM / 80);
          noFill();
          if (ccinvert == false) stroke(255, 255);
          else stroke(0, 255);
          strokeWeight(1);
          line(this.circleX, this.circleY, this.tx, this.ty);
     }
     intersection() {
          strokeWeight(1);
          if (this.shape == 0) this.angle = (this.angle + this.speed) % 6.28;
          else this.angle = (this.angle + this.speed) % this.arcEnd;
          let p0 = createVector(this.circleX, this.circleY);
          let p1 = createVector(this.tx, this.ty);
          for (let i = 0; i < totalLine; i++) {
               let click = lines[i].intersection(p0, p1);
               if (click) {
                    noStroke();
                    colorMode(HSB, 100);
                    if (ccinvert == false) fill(this.clickColor);
                    else fill(0);
                    ellipse(click.x, click.y, DIM / 100, DIM / 100);
                    lines[i].strokeW = random(0.5, 4);
               }
               if (click && lines[i].out == false) {
                    lines[i].out = true;
                    lines[i].who = this.id;
                    if (soundGo > 12) {
                         if (lines[i].frq < 261)
                              play(lines[i].synth, lines[i].frq, 0.4, lines[i].leh);
                         else if (lines[i].frq > 261 && lines[i].frq < 523)
                              play(lines[i].synth, lines[i].frq, 0.1, lines[i].leh);
                         else play(lines[i].synth, lines[i].frq, 0.08, lines[i].leh);
                         soundGo = 0;
                    }
               }
               if (this.id == lines[i].who && click == null && lines[i].out) {
                    lines[i].out = false;
               }
          }
     }
}

class interLine {
     constructor(x, y, x1, y1, _synth, _lineIDX, lineId, _ccc) {
          this.p1 = createVector(x, y);
          this.p2 = createVector(x1, y1);
          this.dis = 0;
          this.click = false;
          this.synth = _synth;
          this.id = 0;
          this.out = false;
          this.who = 0;
          this.lineIdX = _lineIDX;
          this.pointLine = _ccc;
          if (this.synth == 0) this.radk = rdn.random_int(0, 7);
          else this.radk = rdn.random_int(7, 21);
          if (MelodyColor == colorsD || MelodyColor == colorsF)
               this.specL = rdn.random_int(0, 4);
          else this.specL = rdn.random_int(0, 15);
          this.strokeW = 3;
          this.frq = frqArray[this.radk];
          this.leh = noteLength[lineId];
     }
     display() {
          colorMode(RGB);
          noFill();
          this.lineColor = color(LineColors[this.synth]);
          if (this.specL == 0) {
               if (ccinvert == false) stroke(this.lineColor, 220);
               else stroke(0, 220);
               strokeWeight(this.strokeW);
               strokeCap(ROUND);
               line(this.p1.x, this.p1.y, this.p2.x, this.p2.y);
          } else {
               if (this.pointLine == 1) {
                    strokeWeight(DIM / 300);
                    if (ccinvert == false) stroke(this.lineColor);
                    else stroke(0, 200);
               } else {
                    strokeWeight(DIM / 450);
                    if (ccinvert == false) stroke(255, 200);
                    else stroke(0, 200);
               }

               this.dis = int(
                    dist(this.p1.x, this.p1.y, this.p2.x, this.p2.y) / (5 + this.strokeW)
               );
               beginShape(POINTS);
               for (let i = 0; i < this.dis; i++) {
                    let p3 = p5.Vector.lerp(this.p1, this.p2, (i / this.dis) * 1.0);
                    vertex(p3.x, p3.y);
               }
               endShape();
          }
          colorMode(HSB, 100);
          if (ccinvert == false) fill(this.lineColor);
          else fill(0, 0, 100);
          colorMode(RGB);
          if (this.synth != 3) {
               if (ccinvert == false) stroke(255, 200);
               else stroke(0, 200);
               strokeWeight(DIM / 600);
               let es = map(this.synth, 0, 3, 0.8, 1.6);
               ellipse(this.p1.x, this.p1.y, (DIM / 80) * es, (DIM / 80) * es);
          } else {
               noFill();
               if (ccinvert == false) stroke(255, 200);
               else stroke(0, 200);
               strokeWeight(DIM / 600);
               let es = map(this.synth, 0, 3, 0.8, 1.6);
               ellipse(this.p1.x, this.p1.y, (DIM / 60) * es, (DIM / 60) * es);
               ellipse(this.p1.x, this.p1.y, (DIM / 40) * es, (DIM / 40) * es);
          }
     }
     intersection(A, B) {
          let xab = B.x - A.x;
          let xcd = this.p2.x - this.p1.x;
          let yab = B.y - A.y;
          let ycd = this.p2.y - this.p1.y;
          let xac = A.x - this.p1.x;
          let yac = A.y - this.p1.y;
          let den = ycd * (B.x - A.x) - xcd * (B.y - A.y);
          let u0 = (xcd * yac - ycd * xac) / den;

          if (u0 < 0 || u0 > 1) {
               this.click = false;
               return null;
          }
          let u1 = (xab * yac - yab * xac) / den;

          if (u1 < 0 || u1 > 1) {
               this.click = false;
               return null;
          }

          this.click = true;
          return createVector(A.x + u0 * (B.x - A.x), A.y + u0 * (B.y - A.y));
     }
}
class Random {
     constructor(seed) {
          this.seed = seed;
     }
     random_dec() {
          /* Algorithm "xor" from p. 4 of Marsaglia, "Xorshift RNGs" */
          this.seed ^= this.seed << 13;
          this.seed ^= this.seed >> 17;
          this.seed ^= this.seed << 5;
          return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000;
     }
     random_num(a, b) {
          return a + (b - a) * this.random_dec();
     }
     random_int(a, b) {
          return Math.floor(this.random_num(a, b));
     }
}
class RND {
     constructor(seed) {
          this.seed = seed;
     }
     rd() {
          this.seed ^= this.seed << 13;
          this.seed ^= this.seed >> 17;
          this.seed ^= this.seed << 5;
          return ((this.seed < 0 ? ~this.seed + 1 : this.seed) % 1000) / 1000;
     }
     rb(a, b) {
          return a + (b - a) * this.rd();
     }
}

function colorSetting() {
     colorMode(HSB, 100);
     ccinvert = false;
     let rc = rdn.random_num(0, 1);
     if (rc > 0.97) {
          MelodyColor = colorsF;
          LineColors = LineColorsF;
          Fcolor = "Monochromical";
     } else if (rc > 0.92) {
          MelodyColor = colorsD;
          LineColors = LineColorsD;
          Fcolor = "Cosmological";
     } else if (rc > 0.62) {
          MelodyColor = colorsC;
          LineColors = LineColorsC;
          Fcolor = "Forest";
     } else if (rc > 0.31) {
          MelodyColor = colorsB;
          LineColors = LineColorsB;
          Fcolor = "Sunset";
     } else {
          MelodyColor = colorsA;
          LineColors = LineColorsA;
          Fcolor = "Ocean";
     }
     if (MelodyColor == colorsF) {
          if (rc > 0.99) ccinvert = true;
          else ccinvert = false;
          if (ccinvert) bgcolor = "#ffffff";
          else bgcolor = "#000000";

     } else if (MelodyColor == colorsD) {
          bgcolor = "#262E35";
     } else {
          specialBg = rdn.random_num(0, 1);
          if (specialBg > 0.1) {
               let k = int(rdn.random_num(0, 1) * MelodyColor.length);
               bgcolor = MelodyColor[k];
          } else {
               let k = int(rdn.random_num(0, 1) * LineColors.length);
               bgcolor = LineColors[k];
          }
     }
     frameId = rdn.random_int(0, 3);
}

function defult() {
     lineIDX = 0;
     FrectNum = 0;
     colorMode(HSB, 100);
     melodys = [];
     MelodyNum = rdn.random_int(2, 6);
     MelodydDistX = rdn.random_int(1, 5);
     MelodydDistY = rdn.random_int(1, 5);
     for (let i = 0; i < MelodyNum; i++) {
          let DistX = rdn.random_int(1, MelodydDistX + 1);
          let DistY = rdn.random_int(1, MelodydDistY + 1);
          let x = average(DIM, MelodydDistX, DistX - 1);
          let y = average(DIM, MelodydDistY, DistY - 1);
          melodys[i] = new Melody(i, x, y);
     }
     lines = [];
     for (let i = 0; i < MelodyNum; i++) {
          if (MelodyNum != 1) lineDir = rdn.random_int(0, 3);
          else lineDir = rdn.random_int(1, 3);
          if (melodys[i].shape == 0) {
               (xInvert = invert()), (yInvert = invert());
          } else {
               if (melodys[i].area == 0)(xInvert = 1), (yInvert = 1);
               else if (melodys[i].area == 1)(xInvert = -1), (yInvert = 1);
               else if (melodys[i].area == 2)(xInvert = -1), (yInvert = -1);
               else if (melodys[i].area == 3)(xInvert = -1), (yInvert = 1);
          }
          linesNum = rdn.random_int(1, 4);

          if (lineDir == 0) {
               if (xInvert == 1 && yInvert == 1) {
                    let an = [3, 5, 6];
                    angle = an[rdn.random_int(0, 3)] * 45;
               } else if (xInvert == 1 && yInvert == -1) {
                    let an = [2, 3, 5];
                    angle = an[rdn.random_int(0, 3)] * 45;
               } else if (xInvert == -1 && yInvert == 1) {
                    let an = [2, 6, 7];
                    angle = an[rdn.random_int(0, 3)] * 45;
               } else if (xInvert == -1 && yInvert == -1) {
                    let an = [1, 2, 3];
                    angle = an[rdn.random_int(0, 3)] * 45;
               }
          } else if (lineDir == 1) {
               if (xInvert == 1 && yInvert == 1) {
                    let an = [3, 4, 5];
                    angle = an[rdn.random_int(0, 3)] * 45;
               } else if (xInvert == 1 && yInvert == -1) {
                    let an = [3, 4, 5];
                    angle = an[rdn.random_int(0, 3)] * 45;
               } else if (xInvert == -1 && yInvert == 1) {
                    let an = [0, 7];
                    angle = an[rdn.random_int(0, 2)] * 45;
               } else if (xInvert == -1 && yInvert == -1) {
                    let an = [0, 1];
                    angle = an[rdn.random_int(0, 2)] * 45;
               }
          } else if (lineDir == 2) {
               if (xInvert == 1 && yInvert == 1) {
                    let an = [2, 3, 4, 6];
                    angle = an[rdn.random_int(0, 4)] * 45;
               } else if (xInvert == 1 && yInvert == -1) {
                    let an = [2, 4, 5];
                    angle = an[rdn.random_int(0, 3)] * 45;
               } else if (xInvert == -1 && yInvert == 1) {
                    let an = [0, 1, 6];
                    angle = an[rdn.random_int(0, 3)] * 45;
               } else if (xInvert == -1 && yInvert == -1) {
                    let an = [0, 2, 3];
                    angle = an[rdn.random_int(0, 3)] * 45;
               }
          }
          let distArray = [4.0, 8.0];
          let distId = rdn.random_int(0, 2);
          lineDist = distArray[distId];
          let lineArray = [
               (DIM / 40) * 8,
               (DIM / 40) * 16,
               (DIM / 40) * 32,
               (DIM / 40) * 64,
          ];
          let lineId = rdn.random_int(0, 4);
          lineLength = lineArray[lineId];
          let synthPer = rdn.random_num(0, 1);
          if (synthPer < 0.9) synthId = rdn.random_int(0, 3);
          else synthId = 3;

          let colorLineSet;
          let colorPer = rdn.random_int(0, 12);
          if (colorPer == 0) colorLineSet = 1;
          else colorLineSet = 0;

          for (let j = 0; j < linesNum; j++) {
               lineIDX++;
               let x = 0;
               let y = 0;
               if (lineDir == 0) {
                    x = average2(melodys[i].circleRadius, lineDist, j) * xInvert + melodys[i].circleX;
                    y = average2(melodys[i].circleRadius, lineDist, 0) * yInvert + melodys[i].circleY;
               } else if (lineDir == 1) {
                    x = average2(melodys[i].circleRadius, lineDist, 0) * xInvert + melodys[i].circleX;
                    y = average2(melodys[i].circleRadius, lineDist, j) * yInvert + melodys[i].circleY;
               } else if (lineDir == 2) {
                    x = average2(melodys[i].circleRadius, lineDist, j) * xInvert + melodys[i].circleX;
                    y = average2(melodys[i].circleRadius, lineDist, j) * yInvert + melodys[i].circleY;
               }
               let v = p5.Vector.fromAngle(radians(angle), lineLength);
               let temp = new interLine(x, y, x + v.x, y + v.y, synthId, lineIDX, lineId, colorLineSet);
               lines.push(temp);
          }
     }
     Fshape = 0;
     Fsine = 0;
     FSquare = 0;
     FTraingle = 0;
     FSaw = 0;
     FspecialLine = 0;
     FcolorLine = 0;
     totalLine = lines.length;
     for (let i = 0; i < MelodyNum; i++) Fshape += melodys[i].shape;

     for (let i = 0; i < totalLine; i++) {
          FcolorLine += lines[i].pointLine;
          if (lines[i].specL == 0) FspecialLine++;
          if (lines[i].synth == 0) Fsine++;
          else if (lines[i].synth == 1) FSquare++;
          else if (lines[i].synth == 2) FTraingle++;
          else if (lines[i].synth == 3) FSaw++;
     }

     let addFrameColor = 0;
     if (MelodyColor == colorsF) {
          let kkk = rdn.random_num(0, 1);
          if (kkk < 0.65) addFrameColor = 0;
          else addFrameColor = 1;
          if (ccinvert == false) {
               if (addFrameColor == 0) FframeColor = "Ether";
               else if (addFrameColor == 1) FframeColor = "Solar flare";
          } else {
               FframeColor = "Null";
          }

     } else if (MelodyColor == colorsD) {
          let kkk = rdn.random_num(0, 1);
          if (kkk < 0.4) addFrameColor = 2;
          else if (kkk >= 0.4 && kkk < 0.7) addFrameColor = 3;
          else addFrameColor = 4;

          if (addFrameColor == 2) FframeColor = "Event Horizon";
          else if (addFrameColor == 3) FframeColor = "Hawking radiation";
          else if (addFrameColor == 4) FframeColor = "EM radiation";

     } else {
          FframeColor = MelodyColor[frameId];
     }

     let bgsss = false;
     if (MelodyColor == colorsF || MelodyColor == colorsD) {
          bgSpecial = 50;
          ring = rdn.random_int(0, 4);
          ringX = (rdn.random_int(0, 3) - 1) * 16;
          ringY = (rdn.random_int(0, 3) - 1) * 16;
     } else {
          bgSpecial = rdn.random_int(0, 36);
          ring = rdn.random_int(0, 10);
          ringX = ((rdn.random_int(0, 3) - 1) * DIM) / 10;
          ringY = ((rdn.random_int(0, 3) - 1) * DIM) / 10;
     }
     if (bgSpecial < 8) bgsss = true;
     let ringYes = false;
     if (ring == 0) ringYes = true;

     specialFrame(addFrameColor);
     bufferarchRect();
     let tempShape = null;
     if (FbgShape <= 0.8) tempShape = "rect";
     else tempShape = "circle";

     let features = [
          "Surface:" + Fcolor,
          "GeoPos:" + MelodydDistX + "-" + MelodydDistY,
          "FrameColor:" + FframeColor,
          "BgSpecial:" + bgsss,
          "MelodyNum:" + MelodyNum,
          "LineNum:" + lines.length,
          "SpecialLine:" + FspecialLine,
          "ColorDots:" + FcolorLine,
          "ShapeWeight:" + Fshape,
          "BgObjShape:" + tempShape,
          "BgObjNum:" + FrectNum,
          "OscSine:" + Fsine,
          "OscSquare:" + FSquare,
          "OscTriangle:" + FTraingle,
          "OscSawtooth:" + FSaw,
          "Ring:" + ringYes,
     ];
     // console.log(features);
}

function bufferarchRect(_id) {
     FbgShape = rdn.random_num(0, 1);
     archRect = createGraphics(DIM / 2, DIM / 2);
     archRect.pixelDensity(1);
     archRect.noStroke();
     let gadch = MelodyColor;
     let ch, cs, cb;
     if (MelodyColor == colorsF) {
          archRect.colorMode(RGB);
          archRect.fill(bgcolor);
     } else {
          archRect.colorMode(HSB, 100);
          ch = hue(bgcolor);
          cs = saturation(bgcolor);
          cb = brightness(bgcolor);
          if (specialBg < 0.8) archRect.fill(ch, cs * 0.9, cb * 0.7);
          else archRect.fill(ch, cs * 0.9, cb * 0.6);
     }
     archRect.ellipse(DIM / 4, DIM / 4, DIM / 2);
     let sss = map(DIM, 1024, 100, 2, 0.005);
     if (bgSpecial < 3) {
          let radius = DIM / 2;
          for (let r = 0; r < 50; r++) {
               archRect.noFill();
               archRect.strokeWeight(sss);
               archRect.stroke(ch, cs * 0.9, cb * 0.4);
               let ss = map(r, 0, 50, 0, DIM / 2);
               archRect.ellipse(DIM / 4, DIM / 4, ss * 0.99);
          }
     } else if (bgSpecial == 3 || bgSpecial == 4 || bgSpecial == 5) {
          let radius = DIM / 2;
          let ll = rdn.random_num(0.5, 3);
          for (let r = 50; r > 0; --r) {
               let c1 = color(gadch[0]);
               let c2 = color(gadch[2]);

               let inter = lerpColor(c1, c2, (ll * abs((2 * (r / 50)) - 1.0)) % 1.0);
               let ch = hue(inter);
               let cs = saturation(inter);
               let cb = brightness(inter);
               archRect.fill(ch, cs * 0.9, cb * 0.8);
               archRect.noStroke();
               let ss = map(r, 0, 50, 0, DIM / 2);
               archRect.ellipse(DIM / 4, DIM / 4, ss * 0.99);
          }
     } else if (bgSpecial == 6 || bgSpecial == 7) {
          let radius = DIM / 2;

          for (let r = 50; r > 0; --r) {
               let c1 = color(gadch[2]);
               let c2 = color(gadch[3]);
               let ll = rdn.random_num(0.5, 3);
               let inter = lerpColor(c1, c2, (ll * abs((2 * (r / 50)) - 1.0)) % 1.0);
               let ch = hue(inter);
               let cs = saturation(inter);
               let cb = brightness(inter);
               archRect.fill(ch, cs * 0.9, cb * 0.8);
               archRect.noStroke();
               let ss = map(r, 0, 50, 0, DIM / 2);
               archRect.ellipse(DIM / 4, DIM / 4, ss * 0.99);
          }
     }
     let gridper = rdn.random_num(0, 1);
     let gridNum = 8;
     if (gridper > 0.8) gridNum = 8;
     else gridNum = 4;
     let gridLength = DIM / 2 / 10;
     frameOutline = rdn.random_num(0, 1);
     for (let i = 1; i < gridNum; i++) {
          for (let j = 1; j < gridNum; j++) {
               let x = (i * DIM) / 2.0 / gridNum;
               let y = (j * DIM) / 2.0 / gridNum;
               let ra = rdn.random_num(0, 1);
               if (MelodyColor == colorsF || MelodyColor == colorsD) {
                    if (ccinvert == false) archRect.stroke(255, 40);
                    else archRect.stroke(0, 40);
                    archRect.noFill();
                    archRect.strokeWeight(0.3);
               } else {
                    if (frameOutline > 0.8) {
                         archRect.stroke(255, 15);
                         archRect.noFill();
                         archRect.strokeWeight(0.3);
                    } else {
                         archRect.fill(255, 5);
                         archRect.noStroke();
                    }
               }
               archRect.rectMode(CENTER);
               archRect.push();
               archRect.translate(x, y);

               if (ra > 0.2) archRect.rotate(radians(45));
               else archRect.rotate(radians(135));
               let rc = rdn.random_num(0, 1);
               let ww = (rdn.random_num(1, 12) * DIM) / 20 / gridNum;
               let hh = (rdn.random_num(1, 12) * DIM) / 20 / gridNum;
               if (rc > 0.3) {
                    if (bgSpecial > 2 && bgSpecial < 8) {

                    } else {
                         if (FbgShape <= 0.8) archRect.rect(0, 0, ww, hh), FrectNum++;
                         else archRect.ellipse(0, 0, ww, ww), FrectNum++;
                    }
               }
               archRect.pop();
          }
     }
}

function drawframe() {
     noStroke();
     push();
     disc();
     pop();
     noFill();
     if (MelodyColor == colorsF) {
          push();
          tint(255, 255);
          if (ccinvert == false) image(pg, DIM / 2, DIM / 2, DIM, DIM);
          pop();
          FframeColor = MelodyColor[frameId];
          stroke(FframeColor);
          strokeWeight(DIM / 300);
          if (ring == 0 && ccinvert == false) {
               push();
               tint(255, 255);
               translate(DIM / ringX, DIM / ringY);
               image(pg, DIM / 2, DIM / 2, DIM * 0.7, DIM * 0.7);
               ellipse(DIM / 2, DIM / 2, DIM * 0.955 * 0.7, DIM * 0.955 * 0.7);
               pop();
          }

          ellipse(DIM / 2, DIM / 2, DIM * 0.955, DIM * 0.955);
          ellipse(DIM / 2, DIM / 2, DIM * 0.997, DIM * 0.997);
     } else if (MelodyColor == colorsD) {
          push();
          tint(255, 255);
          image(pg, DIM / 2, DIM / 2, DIM, DIM);
          pop();
          FframeColor = MelodyColor[frameId];
          stroke(FframeColor);
          strokeWeight(DIM / 300);
          if (ring == 0) {
               push();
               tint(255, 255);
               translate(DIM / ringX, DIM / ringY);
               image(pg, DIM / 2, DIM / 2, DIM * 0.7, DIM * 0.7);
               ellipse(DIM / 2, DIM / 2, DIM * 0.955 * 0.7, DIM * 0.955 * 0.7);
               pop();
          }

          ellipse(DIM / 2, DIM / 2, DIM * 0.955, DIM * 0.955);
          ellipse(DIM / 2, DIM / 2, DIM * 0.997, DIM * 0.997);
     } else {
          noFill();
          stroke(MelodyColor[frameId]);
          FframeColor = MelodyColor[frameId];
          strokeWeight(DIM / 40);
          ellipse(DIM / 2, DIM / 2, DIM * 0.975, DIM * 0.975);
          stroke(LineColors[frameId]);
          strokeWeight(DIM / 300);
          ellipse(DIM / 2, DIM / 2, DIM * 0.95, DIM * 0.95);

          if (ring == 0) {
               push();
               noFill();
               stroke(MelodyColor[frameId]);
               FframeColor = MelodyColor[frameId];
               strokeWeight(DIM / 42);
               ellipse(DIM / 2 + ringX, DIM / 2 + ringY, DIM * 0.975 * 0.705, DIM * 0.975 * 0.705);
               stroke(LineColors[frameId]);
               strokeWeight(DIM / 300);
               ellipse(DIM / 2 + ringX, DIM / 2 + ringY, DIM * 0.955 * 0.7, DIM * 0.955 * 0.7);
               pop();
          }
     }
}

function disc() {
     if (MelodyColor == colorsF) {

          fill(bgcolor);
          document.body.style.backgroundColor = bgcolor;
     } else if (MelodyColor == colorsD) {
          let ccc = color("#1d2125");
          fill(ccc);
          document.body.style.backgroundColor = "#1d2125";
     } else {
          if (bgSpecial < 8) {
               colorMode(HSB, 100);

               let ch = hue(bgcolor);
               let cs = saturation(bgcolor);
               let cb = brightness(bgcolor);
               fill(ch, cs * 0.9, cb * 0.5);
               let tempColor = color(ch, cs * 0.9, cb * 0.5);
               document.body.style.backgroundColor = tempColor;
          } else {
               let ccc = color("#f5f5f5");
               fill(ccc);
               document.body.style.backgroundColor = "#f5f5f5";
          }

     }
     noStroke();
     translate(DIM / 2, DIM / 2);
     disc4();
     rotate(HALF_PI);
     disc4();
     rotate(HALF_PI);
     disc4();
     rotate(HALF_PI);
     disc4();
}

function disc4() {
     noStroke();
     beginShape();
     vertex(-DIM / 2, -DIM / 2);
     vertex(0, -DIM / 2);
     let bdim = (-DIM / 2) * 0.552284749831;
     bezierVertex(bdim, -DIM / 2, -DIM / 2, bdim, -DIM / 2, 0);
     endShape();
}

function specialFrame(_id) {
     pg = createGraphics(DIM, DIM);
     pg.pixelDensity(1);
     let gadch;
     let gadScale = rdn.random_int(4, 10);
     if (MelodyColor == colorsD) gadch = grad[_id];
     else if (MelodyColor == colorsF) gadch = grad[_id];
     else gadch = grad[0];

     for (let i = 0; i < 720; i++) {
          let pos = i / 720.0;
          let x = (cos(2 * PI * pos) * DIM) / 2.05 + DIM / 2;
          let y = (sin(2 * PI * pos) * DIM) / 2.05 + DIM / 2;
          let pp = pos * gadScale - floor(pos * gadScale);
          pg.noStroke();
          lc = color(255, 0, 0);
          if (pp < 0.25) {
               let c1 = color(gadch[0]);
               let c2 = color(gadch[1]);
               lc = lerpColor(c1, c2, pp * 4);
               pg.fill(lc);
          } else if (pp >= 0.25 && pp < 0.6) {
               let c1 = color(gadch[1]);
               let c2 = color(gadch[2]);
               lc = lerpColor(c1, c2, (pp - 0.25) * 2.85);
               pg.fill(lc);
          } else if (pp >= 0.6 && pp < 0.8) {
               let c1 = color(gadch[2]);
               let c2 = color(gadch[3]);
               lc = lerpColor(c1, c2, (pp - 0.6) * 5);
               pg.fill(lc);
          } else if (pp >= 0.8 && pp < 0.9) {
               let c1 = color(gadch[3]);
               let c2 = color(gadch[4]);
               lc = lerpColor(c1, c2, (pp - 0.8) * 10);
               pg.fill(lc);
          } else {
               let c1 = color(gadch[4]);
               let c2 = color(gadch[0]);
               lc = lerpColor(c1, c2, (pp - 0.9) * 10);
               pg.fill(lc);
          }
          pg.ellipse(x, y, DIM / 50.0, DIM / 50.0);
     }
}

function invert() {
     let k = rdn.random_num(0, 1);
     if (k > 0.5) k = 1;
     else k = -1;
     return k;
}

function average(_DIM, num, id) {
     let p = (_DIM / (num + 1.0)) * (id + 1);
     return p;
}

function average2(w, num, id) {
     let p = (w / num) * (id + 1);
     return p;
}

function mousePressed() {
     play(1, 1000, 0.1, 0.2);
     compose();
     soundGo = 0;
}

function keyPressed() {
     if (keyCode == 65) keyz[0] = true;
     else if (keyCode == 83) keyz[1] = true;
     else if (keyCode == 68) keyz[2] = true;
     else if (keyCode == 70) keyz[3] = true;

     if (keyz[0] && keyz[1] && keyz[2] && keyz[3]) {
          drawMeta();
          metaCount = 0;
     }
}

function keyReleased() {
     if (keyCode == 65) keyz[0] = false;
     else if (keyCode == 83) keyz[1] = false;
     else if (keyCode == 68) keyz[2] = false;
     else if (keyCode == 70) keyz[3] = false;
}

function touchStarted() {
     play(1, 1000, 0.1, 0.2);
     compose();
     soundGo = 0;
}

var AudioContext = window.AudioContext || window.webkitAudioContext;
let context = new AudioContext();
let masterVolume = context.createGain();

masterVolume.connect(context.destination);
masterVolume.gain.setValueAtTime(0.1, 0);
masterVolume.gain.value = 0.3;

let delay = context.createDelay();
let feedback = context.createGain();
let delayAmountGain = context.createGain();

delay.delayTime.value = 0.2;
delayAmountGain.gain.value = 0.4;
feedback.gain.value = 0.5;

delayAmountGain.connect(delay);
delay.connect(feedback);
feedback.connect(delay);
delay.connect(masterVolume);

let waveforms = ["sine", "square", "triangle", "sawtooth"];
let waveform = 0;

let vibratoAmount = 0.6;
let vibratoSpeed = 8;
let attackTime = 0.4;
let releaseTime = 0.5;

function play(_w, _frq, _vol, _leh) {
     let osc = context.createOscillator();
     let noteGain = context.createGain();
     let lfo = context.createOscillator();
     let lfoGain = context.createGain();
     let vol = 0.0;
     if (_w == 0) vol = _vol * 1.0;
     else if (_w == 1) vol = _vol * 0.2;
     else if (_w == 2) vol = _vol * 0.8;
     else if (_w == 3) vol = _vol * 0.2;
     noteGain.gain.setValueAtTime(0, 0);
     noteGain.gain.linearRampToValueAtTime(
          vol,
          context.currentTime + _leh * attackTime
     );
     noteGain.gain.setValueAtTime(
          vol,
          context.currentTime + _leh - _leh * releaseTime
     );
     noteGain.gain.linearRampToValueAtTime(0, context.currentTime + _leh);

     lfo.frequency.setValueAtTime(vibratoSpeed, 0);
     lfo.connect(lfoGain);
     lfo.start(0);
     lfo.stop(context.currentTime + _leh);

     lfoGain.gain.setValueAtTime(vibratoAmount, 0);
     lfoGain.connect(osc.frequency);

     osc.type = waveforms[_w];
     osc.frequency.setValueAtTime(_frq, 0);
     osc.start(0);
     osc.stop(context.currentTime + _leh);
     osc.connect(noteGain);
     noteGain.connect(masterVolume);
     noteGain.connect(delay);
}

function showMeta() {
     tint(255, 255);
     imageMode(CENTER);
     image(meta, DIM / 2, DIM / 2, 500, 500);
}

function drawMeta() {
     meta.background(0);
     meta.strokeWeight(1);
     meta.noFill();
     for (let i = 0; i < MelodyNum; i++) {
          let c = i % 4;
          let cc = LineColors[c];
          meta.stroke(cc);
          let x = average(500, 5, 0);
          let y = average(500, MelodyNum, i);
          let s = ((melodys[i].circleRadius / DIM) * 500) / 4;
          meta.strokeWeight(1);
          meta.ellipse(x, y, s, s);
          if (melodys[i].shape == 1) {
               meta.strokeWeight(5);
               meta.arc(x, y, s, s, melodys[i].arcStart, melodys[i].finalEnd);
          }
     }
     meta.stroke(255);
     meta.strokeWeight(1);
     for (let i = 0; i < totalLine; i++) {
          let x = average(500, 12, 3);
          let x1 = average(500, 12, 11);
          let y = average(500, totalLine, i);
          meta.beginShape(POINTS);
          for (let i = 0; i < 78; i++) {
               let x2 = map(i, 0, 78, x, x1);
               meta.vertex(x2, y);
          }
          meta.endShape();
     }
     let cccc = MelodyColor[frameId];
     meta.stroke(cccc);
     meta.strokeWeight(20);
     meta.rectMode(CENTER);
     meta.rect(250, 250, 500, 500);
     meta.stroke(LineColors[frameId]);
     meta.strokeWeight(1.5);
     meta.rect(250, 250, 480, 480);
     meta.stroke(150);
     meta.textSize(12);
     meta.textAlign(LEFT, CENTER);
     meta.text(tokenData.tokenId, 25, 30);
}

function recordMeta() {
     meta.rectMode(CENTER);
     if (metaCount <= 314) {
          for (let i = 0; i < totalLine; i++) {
               let c = i % 4;
               let cc = MelodyColor[c];
               if (frameCount % 4 == 0) {
                    let x = average(500, 12, 3);
                    let x1 = average(500, 12, 11);
                    let x2 = map(metaCount, 0, 314, x, x1);
                    let y = average(500, totalLine, i);
                    if (lines[i].out) {
                         let dotSize =
                              ((melodys[lines[i].who].circleRadius / DIM) * 500) / 50 + 10;
                         meta.fill(cc);
                         meta.noStroke();
                         meta.rect(x2, y, 2, dotSize);
                    }
               }
          }
          metaCount++;
          if (metaCount == 314) save(meta, tokenData.tokenId + ".png");
     }
}