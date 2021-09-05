let type;
let bars_used = false;
let grid_used = false;
let sprinkles_used = false;
let checkerEven = false;
let two_straight = false;
let worms_used = false;
let ss_circle = false;
var frameShape;
var bgType;
var floatingShapeType;
var centeredShapeType;
var framingShapeType;
var framingShape_failsafe = 0;
var hash;
var clrs;
var palettes;
var globalBlack;
var globalWhite;
var DEFAULT_SIZE = 1024.0
var WIDTH = window.innerWidth
var HEIGHT = window.innerHeight
var DIM = Math.min(WIDTH, HEIGHT)
var M = DIM / DEFAULT_SIZE

function setup() {
     createCanvas(DIM, DIM);
     globalBlack = color('#000000');
     globalWhite = color('#FFFFFF');
     clrs = [color(000000), color(000000), color(000000), color(000000), color(000000)];
     palettes = [
          [
               [color('#FFFFFF'), color('#ec89b5'), color('#7ecfbc'), color('#f4ef94'), color('#acd6d4')],
               [color('#000000'), color('#ec89b5'), color('#7ecfbc'), color('#f4ef94'), color('#acd6d4')],
               [color('#554bf9'), color('#34ffec'), color('#ffbeff'), color('#f3abae'), color('#fc6f00')],
               [color('#ffeb84'), color('#f2d8db'), color('#ffbae0'), color('#9fe6d6'), color('#000000')],
               [color('#b2a3c5'), color('#8bcfc0'), color('#2a68b1'), color('#ff605d'), color('#fbcb21')],
               [color('#000000'), color('#ffd9e4'), color('#fc635d'), color('#aee6cd'), color('#faca1e')],
               [color('#000000'), color('#f1a9bf'), color('#4bcac1'), color('#e66494'), color('#f6df53')],
               [color('#000000'), color('#f27998'), color('#04b7e2'), color('#f2fa66'), color('#a885a6')],
               [color('#000000'), color('#dcb710'), color('#ff7c62'), color('#c62781'), color('#3babad')],
               [color('#000000'), color('#6dfee1'), color('#ff9fe4'), color('#69cfff'), color('#fff59c')],
               [color('#000000'), color('#f6c7bf'), color('#fdef96'), color('#88cac6'), color('#d2a5e0')],
               [color('#000000'), color('#f41651'), color('#ff3fb2'), color('#ffa624'), color('#00a5b2')],
               [color('#000000'), color('#fec3b5'), color('#2cae8c'), color('#ffe44f'), color('#c539a4')],
               [color('#000000'), color('#03bcd8'), color('#e7b949'), color('#f25a35'), color('#eb9bbe')],
               [color('#000000'), color('#dbeded'), color('#99d4e4'), color('#f8bee4'), color('#faff7a')],
               [color('#000000'), color('#fe2284'), color('#fbf650'), color('#0fc2d6'), color('#01d4b1')],
               [color('#000000'), color('#f9ce80'), color('#fb8372'), color('#6cdabf'), color('#0ebf6f')],
               [color('#dc787a'), color('#fff681'), color('#0df7fe'), color('#ff7170'), color('#8383ff')],
               [color('#000000'), color('#01aaad'), color('#bfaad3'), color('#9dd9d7'), color('#f59cb0')],
               [color('#000000'), color('#f7bfda'), color('#fdeb3f'), color('#82d2e9'), color('#0050a3')],
               [color('#000000'), color('#f7cbe2'), color('#904762'), color('#fce935'), color('#75e8bf')],
               [color('#3fda65'), color('#ff5aa9'), color('#fe9bc7'), color('#00d7ec'), color('#fddd0c')],
               [color('#000000'), color('#89d0c0'), color('#f87980'), color('#b2a4c8'), color('#eed55e')],
               [color('#000000'), color('#e0378a'), color('#eb7b4d'), color('#13a1b7'), color('#e9b955')],
               [color('#542f63'), color('#deb505'), color('#fd5d5d'), color('#0069ad'), color('#7ba1c6')],
               [color('#fff44d'), color('#f7a5bb'), color('#ed008c'), color('#01babc'), color('#00b7f1')]
          ],
          [
               [color('#FFFFFF'), color('#eee30f'), color('#65fadc'), color('#f37990'), color('#3b3ff7')],
               [color('#FFFFFF'), color('#eee30f'), color('#65fadc'), color('#f37990'), color('#3b3ff7')],
               [color('#000000'), color('#ff3396'), color('#2cd6cb'), color('#ffde02'), color('#ff7ef1')],
               [color('#0f6ced'), color('#fbf259'), color('#efa7b3'), color('#6aecbe'), color('#ffffff')],
               [color('#000000'), color('#fff757'), color('#e969fe'), color('#2bfbff'), color('#ffffff')],
               [color('#ff7e36'), color('#ec0d77'), color('#13abdc'), color('#deea7c'), color('#56fdc5')],
               [color('#000000'), color('#fe47b3'), color('#5bcdff'), color('#fee229'), color('#ffffff')],
               [color('#d7d30f'), color('#fa4d83'), color('#df7a2a'), color('#3bbda1'), color('#9c68b3')],
               [color('#e14f8e'), color('#84931c'), color('#e8d403'), color('#639fde'), color('#ea9ac1')],
               [color('#000000'), color('#69479d'), color('#ee3f76'), color('#4687c7'), color('#fce500')],
               [color('#e4018c'), color('#96cce4'), color('#29ace4'), color('#fecf0d'), color('#ffffff')],
               [color('#ed7193'), color('#f3e86c'), color('#47b375'), color('#87dcd7'), color('#e2ff6b')],
               [color('#ff2e7f'), color('#9421ff'), color('#ff8e48'), color('#9df27b'), color('#ffe65a')],
               [color('#d123d0'), color('#ff528b'), color('#015bf0'), color('#45fbc0'), color('#fe3a48')],
               [color('#54bcbf'), color('#f6df43'), color('#e85d9e'), color('#e49cb2'), color('#ffffff')],
               [color('#000000'), color('#fec3b5'), color('#01b9c3'), color('#885dd3'), color('#ffe44f')],
               [color('#ec6da0'), color('#00b2a4'), color('#f2bb20'), color('#e9031d'), color('#ffffff')],
               [color('#000000'), color('#feaab9'), color('#3ecabf'), color('#fcde58'), color('#fe8364')],
               [color('#000000'), color('#ff4aa9'), color('#21adba'), color('#ffcb7b'), color('#ff80b7')],
               [color('#44d0ff'), color('#b8f363'), color('#f91794'), color('#f4ad41'), color('#78289b')],
               [color('#36e8da'), color('#f4f10e'), color('#e78f4f'), color('#f080e4'), color('#ffffff')],
               [color('#ff44ad'), color('#feca16'), color('#8614c1'), color('#34e1db'), color('#00bed4')],
               [color('#ff7785'), color('#000000'), color('#44e5d5'), color('#fdf9af'), color('#ffbcc3')],
               [color('#d1ef1f'), color('#000000'), color('#28cbc8'), color('#ee56ad'), color('#b28dec')],
               [color('#ffed0c'), color('#000000'), color('#036089'), color('#e30994'), color('#a6be50')],
               [color('#02ffc9'), color('#000000'), color('#ff00a4'), color('#f0ea60'), color('#1701d2')],
          ],
          [
               [color('#7eb8da'), color('#92ddea'), color('#ffa5d8'), color('#be9ddf'), color('#9579d1')]
          ]
     ];
}

function draw() {
     frameShape = "";
     type = "based";
     bgType = "";
     bars_used = false;
     sprinkles_used = false;
     floatingShapeType = "";
     centeredShapeType = "";
     framingShapeType = "";
     framingShape_failsafe = 0;
     checkerEven = false;
     two_straight = false;
     worms_used = false;

     let chars = "abcdef1234567890";
     hash = "0x";
     while (hash.length < 64) hash = hash + chars.charAt(Math.floor(random(0, 16)));

     hash = tokenData.hash
     randomSeed(hash);
     type = xx(2) == 69 ? "based" : xx(2) < 200 ? "light" : "dark";

     let palette_select = Math.floor(xx(4) / 10);
     if (palette_select == 0) {
          palette_select = 25;
     }
     let palette = palettes[2][0];
     if (type == "light") palette = palettes[0][palette_select];
     if (type == "dark") palette = palettes[1][palette_select];

     var sortCols = [0, 0, 0, 0, 0];
     for (var i = 0; i < 5; i++) {
          let j = i - 1;
          while (j >= 0 && xx(6 + 2 * i) < sortCols[j]) {
               sortCols[j + 1] = sortCols[j];
               clrs[j + 1] = clrs[j];
               j--;
          }
          sortCols[j + 1] = xx(6 + 2 * i);
          clrs[j + 1] = palette[i];

     }

     let randomOffset = xxs(16);
     if (xx(16) < 63) {
          randomOffset *= -5;
     } else if (xx(16) < 126) {
          randomOffset *= 2;
     } else if (xx(16) < 189) {
          randomOffset *= -3;
          randomOffset /= 2;
     } else {
          randomOffset /= 2;
     }
     let randomOffset2 = xx(26) < 165 ? 0 - xxs(26) : xxs(26);
     let randomOffset3 = xx(46) < 165 ? 0 - xxs(46) : xxs(46);
     let randomOffset4 = xx(48) % 2 == 0 ? 0 - xxs(48) : xxs(48);
     let randomOffset5 = xx(52) % 2 == 0 ? 0 - xxs(52) : xxs(52);
     let bgSelect = xx(3);


     if (type == "light") {
          if (bgSelect < 6) {
               background(255, 255, 255);
          }
          if (bgSelect > 5 && bgSelect < 50) {
               dotsbg();
          }
          if (bgSelect > 49 && bgSelect < 100) {
               gridbg();
          }
          if (bgSelect > 99 && bgSelect < 126) {
               notebookbg(width);
          }
          if (bgSelect > 125 && bgSelect < 160) {
               grid3Dbg();
          }
          if (bgSelect > 159 && bgSelect < 180) {
               horizonbg();
          }
          if (bgSelect > 179 && bgSelect < 190) {
               sprinklesbg();
          }
          if (bgSelect > 189 && bgSelect < 200) {
               sprinklesGradientbg();
          }
          if (bgSelect > 199 && bgSelect < 226) {
               wormsbg();
          }
          if (bgSelect > 225) {
               fakegridbg();
          }
     }
     if (type == "dark") {
          if (bgSelect < 8) {
               dotsbg();
          }
          if (bgSelect > 7 && bgSelect < 17) {
               background(00, 00, 00);
          }
          if (bgSelect > 16 && bgSelect < 26) {
               starscapebg(randomOffset4, randomOffset5);
          }
          if (bgSelect > 25 && bgSelect < 100) {
               gridbg();
          }
          if (bgSelect > 99 && bgSelect < 126) {
               grid3Dbg();
          }
          if (bgSelect > 125 && bgSelect < 176) {
               horizonbg();
          }
          if (bgSelect > 175 && bgSelect < 227) {
               notebookbg();
          }
          if (bgSelect > 226) {
               fakegridbg();
          }
     }
     if (type == "based") {
          bgType = "based";
          let x_lerp = 0;
          let y_lerp = 0;
          let w_lerp = DIM + (bgSelect < 128 ? 4 : 0);
          let h_lerp = DIM;
          let based_bg1 = bgSelect < 128 ? color('#00b0d7') : color('#ffb7af');
          let based_bg2 = bgSelect < 128 ? color('#ffb7af') : color('#00b0d7');
          let basedGradient;
          basedGradient = createGraphics(DIM, DIM);
          for (var i = y_lerp; i <= y_lerp + h_lerp; i++) {
               let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
               let c = lerpColor(based_bg1, based_bg2, inter);
               basedGradient.strokeWeight(2);
               basedGradient.stroke(c);
               basedGradient.line(x_lerp - 2, i, x_lerp + w_lerp, i);
          }
          image(basedGradient, 0, 0);
     }
     let framingShape = xx(22) + framingShape_failsafe;
     if (framingShape > -1 && framingShape < 8 && bgType != "notebook") {
          if (type == "based") {
               blendMode(ADD);
          }
          frameShape = "ellipse";
          framingShapeType = "notebook";
          let notebookFrameEllipse;
          let notebookFrameEllipseMask;
          notebookFrameEllipse = createGraphics(DIM, DIM);
          let f = 0.02;
          'use strict'
          let grid = []
          let notebook = []
          var seed = floor(xx(18))
          noiseSeed(seed)
          notebook[0] = color(0, 0, 0);
          notebook[1] = color(255, 255, 255);
          let ratio = .5;
          if (type == "light") {
               ratio = .39
          } else {
               ratio = .58
          }
          notebookFrameEllipse.noStroke();
          for (var y = 0; y < DIM; y++) {
               for (var x = 0; x < DIM; x++) {
                    let i = noise(x * f, y * f) < ratio ? 1 : 0;
                    grid.push({
                         x,
                         y,
                         i
                    });
               }
          }
          grid.forEach((g, index) => {
               notebookFrameEllipse.fill(notebook[g.i])
               notebookFrameEllipse.rect(g.x, g.y, 1, 1);
          });
          notebookFrameEllipseMask = createGraphics(DIM, DIM);
          notebookFrameEllipseMask.noStroke();
          notebookFrameEllipseMask.fill(255);
          let frameOffset = randomOffset / 3;
          let frameOffset2 = randomOffset2 / 3;
          notebookFrameEllipseMask.ellipse(DIM / 2.0 + frameOffset, DIM / 2.0 + frameOffset2, DIM - s(456) - frameOffset, DIM - s(456) - frameOffset);
          applyMask(notebookFrameEllipse, notebookFrameEllipseMask);
          noFill();
          stroke(clrs[4]);
          strokeWeight(s(16));
          ellipse(s(512) + frameOffset, s(512) + frameOffset2, DIM - s(456) - frameOffset, DIM - s(456) - frameOffset);
          blendMode(BLEND);
     }
     if (framingShape > 7 && framingShape < 16) {
          frameShape = "ellipse";
          noFill();
          strokeWeight(s(16));
          stroke(nonBGColor(4));
          let frameOffset = xsBetween(19, -100, 100)
          let frameOffset2 = xsBetween(20, -100, 100)
          let diameter = xsBetween(21, 550, 800)
          ellipse(s(512) + frameOffset, s(512) + frameOffset2, diameter, diameter);
     }
     if (framingShape > 15 && framingShape < 26) {
          frameShape = "square";
          noFill();
          strokeWeight(s(16));
          stroke(nonBGColor(4));
          let frameOffset = Math.floor(randomOffset / 3);
          let frameOffset2 = Math.floor(randomOffset2 / 3);
          square(s(256) + frameOffset, s(256) + frameOffset2, DIM / 2 - frameOffset);
     }
     if (framingShape > 25 && framingShape < 41) {
          frameShape = "default_triangle";
          noFill();
          strokeWeight(s(16));
          stroke(nonBGColor(4));
          let frameOffset = randomOffset / 3;
          let frameOffset2 = randomOffset2 / 3;
          triangle(s(128) + frameOffset, s(768) + frameOffset, s(768) + frameOffset2, s(128) + frameOffset2, s(720) + frameOffset, s(940) + frameOffset);
     }
     if (framingShape > 40 && framingShape < 50) {
          frameShape = "gradient_default_triangle";
          let sourceDefaultFramingTriangle;
          let maskDefaultFramingTriangle;
          sourceDefaultFramingTriangle = createGraphics(DIM, DIM);
          let x_lerp = 0;
          let y_lerp = 0;
          let w_lerp = DIM;
          let h_lerp = DIM;
          for (var i = y_lerp; i <= y_lerp + h_lerp; i++) {
               let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
               let c = lerpColor(clrs[0], clrs[1], inter);
               sourceDefaultFramingTriangle.strokeWeight(2);
               sourceDefaultFramingTriangle.stroke(c);
               sourceDefaultFramingTriangle.line(x_lerp, i, x_lerp + w_lerp, i);
          }
          maskDefaultFramingTriangle = createGraphics(DIM, DIM);
          maskDefaultFramingTriangle.noFill();
          maskDefaultFramingTriangle.strokeWeight(s(16));
          maskDefaultFramingTriangle.stroke(255);
          let frameOffset = randomOffset / 3;
          let frameOffset2 = randomOffset2 / 3;
          maskDefaultFramingTriangle.triangle(s(128) + frameOffset, s(768) + frameOffset, s(768) + frameOffset2, s(128) + frameOffset2, s(720) + frameOffset, s(940) + frameOffset);
          applyMask(sourceDefaultFramingTriangle, maskDefaultFramingTriangle);
     }
     if (framingShape > 249 && bgType == "grid") framingShape = 50;
     if (framingShape > 49 && framingShape < 75) {
          frameShape = "gradient_flipped_triangle";
          let sourceFlippedFramingTriangle;
          let maskFlippedFramingTriangle;
          sourceFlippedFramingTriangle = createGraphics(DIM, DIM);
          let x_lerp = 0;
          let y_lerp = 0;
          let w_lerp = DIM;
          let h_lerp = DIM;
          for (var i = y_lerp; i <= y_lerp + h_lerp; i++) {
               let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);

               let c = lerpColor(clrs[0], clrs[1], inter);
               sourceFlippedFramingTriangle.strokeWeight(2);
               sourceFlippedFramingTriangle.stroke(c);
               sourceFlippedFramingTriangle.line(x_lerp, i, x_lerp + w_lerp, i);
          }
          maskFlippedFramingTriangle = createGraphics(DIM, DIM);
          maskFlippedFramingTriangle.noFill();
          maskFlippedFramingTriangle.strokeWeight(s(16));
          maskFlippedFramingTriangle.stroke(255);
          let frameOffset = randomOffset / 3;
          let frameOffset2 = randomOffset2 / 3;
          maskFlippedFramingTriangle.triangle(s(900) - frameOffset, s(738) + frameOffset, s(400) + frameOffset, s(128) + frameOffset2, s(256) + frameOffset, s(938) + frameOffset);
          applyMask(sourceFlippedFramingTriangle, maskFlippedFramingTriangle);
     }
     if (framingShape > 74 && framingShape < 120) {
          frameShape = "flipped_triangle";
          noFill();
          strokeWeight(s(16));
          stroke(clrs[4]);
          if (type == "dark" && clrs[4] == color('#000000')) stroke(clrs[3]);
          if (type == "light" && clrs[4] == color('#FFFFFF')) stroke(clrs[3]);
          let frameOffset = randomOffset / 3;
          let frameOffset2 = randomOffset2 / 3;
          triangle(s(900) - frameOffset, s(738) + frameOffset, s(400) + frameOffset, s(128) + frameOffset2, s(256) + frameOffset, s(938) + frameOffset);
     }
     if (framingShape > 119 && framingShape < 150) {
          frameShape = "gradientellipse";
          let sourceGradientFrameEllipse;
          let maskGradientFrameEllipse;
          sourceGradientFrameEllipse = createGraphics(DIM, DIM);
          let x_lerp = 0;
          let y_lerp = 0;
          let w_lerp = DIM;
          let h_lerp = DIM;
          for (var i = y_lerp; i <= y_lerp + h_lerp; i++) {
               let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
               let c = lerpColor(clrs[3], clrs[4], inter);
               sourceGradientFrameEllipse.strokeWeight(2);
               sourceGradientFrameEllipse.stroke(c);
               sourceGradientFrameEllipse.line(i, x_lerp, i, x_lerp + w_lerp);
          }
          maskGradientFrameEllipse = createGraphics(DIM, DIM);
          maskGradientFrameEllipse.noFill();
          maskGradientFrameEllipse.strokeWeight(s(16));
          maskGradientFrameEllipse.stroke(255);
          let frameOffset = randomOffset / 3;
          let frameOffset2 = randomOffset2 / 3;
          maskGradientFrameEllipse.ellipse(s(512) + frameOffset, s(512) + frameOffset2, DIM - s(456) - frameOffset, DIM - s(456) - frameOffset);
          applyMask(sourceGradientFrameEllipse, maskGradientFrameEllipse);
     }
     if (framingShape > 149 && framingShape < 225) {
          frameShape = "inverse_flipped_triangle";
          noFill();
          strokeWeight(s(16));
          stroke(nonBGColor(4));
          let frameOffset = randomOffset / 3;
          let frameOffset2 = randomOffset2 / 3;
          triangle(s(900) - frameOffset, s(256) + frameOffset, s(600) - frameOffset, s(800) + frameOffset2, s(128) + frameOffset, s(256) + frameOffset2);
     }
     if (framingShape > 224 && framingShape < 250) {
          frameShape = "default_flipped_triangle";
          noFill();
          strokeWeight(s(16));
          stroke(nonBGColor(4));
          let frameOffset = randomOffset / 3;
          let frameOffset2 = randomOffset2 / 3;
          triangle(s(128) + frameOffset, s(128) + frameOffset2, s(512) + frameOffset2, s(940) - frameOffset2, s(720) + frameOffset, s(128) + frameOffset);
     }
     if (framingShape > 249 && bgType != "grid") {
          if (type == "based") {
               blendMode(ADD);
          }
          frameShape = "gridTriangle";
          grid_used = true;
          let sourceDiagGrid;
          let maskDiagGrid;
          let diagLineCounter = (-1) * DIM;
          sourceDiagGrid = createGraphics(DIM, DIM);
          if (type == "light") {
               sourceDiagGrid.background(255);
               sourceDiagGrid.stroke(0);
          }
          if (type == "dark") {
               sourceDiagGrid.background(0);
               sourceDiagGrid.stroke(255);
          }
          while (diagLineCounter < DIM) {
               sourceDiagGrid.line(0, 0 + diagLineCounter, DIM, DIM + diagLineCounter);
               sourceDiagGrid.line(DIM, 0 + diagLineCounter, 0, DIM + diagLineCounter);
               diagLineCounter = diagLineCounter + s(64);
          }
          maskDiagGrid = createGraphics(DIM, DIM);
          let frameOffset = randomOffset / 3;
          let frameOffset2 = randomOffset2 / 3;
          maskDiagGrid.triangle(s(128) + frameOffset, s(128) + frameOffset2, s(512) + frameOffset2, s(940) - frameOffset2, s(720) + frameOffset, s(128) + frameOffset);
          applyMask(sourceDiagGrid, maskDiagGrid);
          noFill();
          strokeWeight(s(16));
          stroke(nonBGColor(4));
          triangle(s(128) + frameOffset, s(128) + frameOffset2, s(512) + frameOffset2, s(940) - frameOffset2, s(720) + frameOffset, s(128) + frameOffset);
          blendMode(BLEND);     }

     let centeredShape = xx(6);
     let xPos = s(512);
     let yPos = s(512);

     if (centeredShape < 24 && frameShape != "square") {
          if (frameShape == "square") centeredShape = (28);
          noStroke();
          fill(clrs[0]);
          let rect_mover = randomOffset / 2;
          let rect_mover2 = randomOffset2 / 2;
          let rect_size = 0;
          if (abs(randomOffset2) < 100) rect_size = 2 * (abs(randomOffset2));
          if (abs(randomOffset2) > 99) rect_size = abs(randomOffset2) / 2;
          rect_size = s(rect_size);
          rect(s(480) + rect_mover, s(220) + rect_mover2, rect_size + s(160), rect_size * 2 + s(320));
     }
     if (centeredShape > 23 && centeredShape < 65 && frameShape != "ellipse" && bgType != "horizon") {
          if (type == "based") {
               blendMode(ADD);
          }
          centeredShapeType = "horizon";
          let SourceRetroSun;
          let MaskRetroSun;
          SourceRetroSun = createGraphics(DIM, DIM);
          SourceRetroSun.background(0, 0, 0);
          let horizon = 0;
          SourceRetroSun.strokeWeight(s(1));

          while (horizon < DIM / 3) {
               SourceRetroSun.stroke(diffColor(globalBlack, 0));
               SourceRetroSun.strokeWeight(s(horizon / 1.5));
               SourceRetroSun.line(0, s(400) + s(15) * horizon, DIM, s(400) + s(15) * horizon);
               horizon = horizon + 1;
          }
          MaskRetroSun = createGraphics(DIM, DIM);
          if (centeredShape < 10) {
               centeredShape = centeredShape + 11;
          }
          if (centeredShape > 100) {
               centeredShape = centeredShape - 30;
          }
          centeredShape = s(centeredShape);
          MaskRetroSun.ellipse(xPos, yPos, centeredShape * 7 + (centeredShape), centeredShape * 7 + (centeredShape));
          applyMask(SourceRetroSun, MaskRetroSun);
          blendMode(BLEND);
     }
     if (centeredShape > 64 && centeredShape < 128 && frameShape != "ellipse") {
          centeredShapeType = "solid";
          noStroke();
          let centEllipseScaler = random(72, 97);
          fill(clrs[0]);
          ellipse(s(512), s(512), s(centEllipseScaler * 7 + (centEllipseScaler / 2)), s(centEllipseScaler * 7 + (centEllipseScaler / 3)));
     }
     if (centeredShape > 127 && centeredShape < 226) {
          centeredShapeType = "solid";
          if (centeredShapeType == "solid") {
               noStroke();
               fill(clrs[0]);
               triangle(DIM / 6 + (s(centeredShape) / 5), DIM / 6 + (s(centeredShape) / 5), DIM / 2 + (s(centeredShape) / 5), DIM / 2 + (s(centeredShape) / 5), DIM / 3 + (s(centeredShape) / 5), DIM / 1.5 + (s(centeredShape) / 5));
          }
     }
     if (centeredShape > 224 && frameShape != "square" && type == "dark") {
          if (frameShape == "square") centeredShape = xx(28);
          let sourceGradientRect;
          let maskGradientRect;
          let rect_mover = Math.floor(randomOffset / 2);
          let rect_mover2 = Math.floor(randomOffset2 / 2);
          let rect_size = 0;
          sourceGradientRect = createGraphics(DIM, DIM);
          let y_lerp = 0;
          let gradientShapePosX = int(srandom(228, 724));
          let gradientShapePosY = int(srandom(128, 724));
          let w_lerp = gradientShapePosX + s(340);
          let h_lerp = gradientShapePosY + s(340);
          for (var i = (s(320) + rect_mover2); i <= ((s(320) + rect_mover2) + (rect_size * 2 + s(320))) * 2; i++) {
               let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
               let c = lerpColor(clrs[2], clrs[0], inter);
               sourceGradientRect.strokeWeight(2);
               sourceGradientRect.stroke(c);
               sourceGradientRect.line(0, i, DIM + w_lerp, i);
          }
          maskGradientRect = createGraphics(DIM, DIM);
          if (abs(randomOffset2) < s(100)) rect_size = 2 * (abs(randomOffset2));
          if (abs(randomOffset2) > s(99)) rect_size = abs(randomOffset2) / 2;
          rect_size = s(rect_size);
          maskGradientRect.rect(s(480) + rect_mover, s(320) + rect_mover2, rect_size + s(160), rect_size * 2 + s(320));
          applyMask(sourceGradientRect, maskGradientRect);
     }

     let floatingShape1 = xx(14);
     if (floatingShape1 < 65 && floatingShape1 > 31) {
          noStroke();
          fill(clrs[1]);
          triangle(s(128) + DIM / 2 + randomOffset, DIM / 2 + randomOffset, DIM / 3, DIM / 1.5, DIM / 4 + randomOffset, DIM / 4);
     }

     if (floatingShape1 < 32 && floatingShape1 > 16) {
          strokeWeight(s(16));
          fill(clrs[1]);
          stroke(clrs[3]);
          triangle(s(128) + DIM / 2 + randomOffset, DIM / 2 + randomOffset, DIM / 3, DIM / 1.5, DIM / 4 + randomOffset, DIM / 4);
     }
     if (floatingShape1 < 16) {
          strokeWeight(s(16));
          fill(clrs[1]);
          triangle(s(128) + DIM / 2 + randomOffset, DIM / 2 + randomOffset, DIM / 3, DIM / 1.5, DIM / 4 + randomOffset, DIM / 4);
     }
     if (floatingShape1 > 64 && floatingShape1 < 230) {
          noStroke();
          fill(clrs[3]);
          triangle(s(768) + randomOffset / 4, s(420) + randomOffset2 / 2, s(626) + randomOffset2 / 2, s(824) + randomOffset3 / 3, s(400) + randomOffset3 / 3, s(512) + randomOffset / 2);
     }
     if (floatingShape1 > 229 && sprinkles_used == false) {
          sprinkles_used = true;
          let sourceSprinklesTriangle;
          let maskSprinklesTriangle;
          sourceSprinklesTriangle = createGraphics(DIM, DIM);
          sourceSprinklesTriangle.background(clrs[1]);
          sourceSprinklesTriangle.strokeCap(ROUND);
          sourceSprinklesTriangle.strokeWeight(s(6));
          sourceSprinklesTriangle.stroke(clrs[3]);
          let sprinkle_column = 0;
          let sprinkle_row = 0;
          let sprinkle_switch = 0;

          while (sprinkle_row < (round(1.1953125 * DIM))) {
               while (sprinkle_column < DIM) {
                    sourceSprinklesTriangle.line(s(-6) + sprinkle_row, s(16) + sprinkle_column, s(4) + sprinkle_row, s(30) + sprinkle_column);
                    sourceSprinklesTriangle.line(s(-8) + sprinkle_row, s(48) + sprinkle_column, s(8) + sprinkle_row, s(48) + sprinkle_column);
                    sourceSprinklesTriangle.line(s(0) + sprinkle_row, s(72) + sprinkle_column, s(0) + sprinkle_row, s(88) + sprinkle_column);
                    sourceSprinklesTriangle.line(s(4) + sprinkle_row, s(108) + sprinkle_column, s(-6) + sprinkle_row, s(124) + sprinkle_column);
                    sourceSprinklesTriangle.line(s(-8) + sprinkle_row, s(148) + sprinkle_column, s(8) + sprinkle_row, s(148) + sprinkle_column);
                    sprinkle_column = sprinkle_column + s(158);
               }
               sprinkle_switch++;
               sprinkle_row = sprinkle_row + s(32);
               if (sprinkle_switch % 2 == 0) {
                    sprinkle_column = s(0);
               }
               if (sprinkle_switch % 2 != 0) {
                    sprinkle_column = s(-79);
               }
               if (sprinkle_switch % 3 == 0) {
                    sprinkle_column = s(-128);
               }
          }
          maskSprinklesTriangle = createGraphics(DIM, DIM);
          maskSprinklesTriangle.noStroke();
          maskSprinklesTriangle.fill(255);
          maskSprinklesTriangle.triangle(s(768) + randomOffset / 4, s(420) + randomOffset2 / 2, s(626) + randomOffset2 / 2, s(824) + randomOffset / 3, s(400) + randomOffset / 3, s(512) + randomOffset / 2);
          applyMask(sourceSprinklesTriangle, maskSprinklesTriangle);
     }
     if (floatingShape1 > 64 && floatingShape1 < 80 && bgType != "notebook" && framingShapeType != "notebook") {
          let sourceNotebook;
          let maskNotebook;
          sourceNotebook = createGraphics(DIM, DIM);
          'use strict'
          let grid = [];
          let notebook = [];
          let f = 0.02;
          let seed = floor(xx(17));
          noiseSeed(seed);
          notebook[0] = color(0, 0, 0);
          notebook[1] = color(255, 255, 255);
          let ratio = .5;
          if (type == "light") {
               ratio = .39
          } else {
               ratio = .58
          }
          for (let y = 0; y < DIM; y++) {
               for (let x = 0; x <= DIM; x++) {
                    let i = noise(x * f, y * f) < ratio ? 1 : 0;
                    grid.push({
                         x,
                         y,
                         i
                    });
               }
          }
          sourceNotebook.noStroke();
          grid.forEach((g, index) => {
               sourceNotebook.fill(notebook[g.i])
               sourceNotebook.rect(g.x, g.y, 1, 1);
          });
          maskNotebook = createGraphics(DIM, DIM);
          maskNotebook.noStroke();
          maskNotebook.fill(255);
          let notebookellipse_failsafe = 0;
          let notebookellipseX_failsafe = 0;
          let notebookellipseSize_failsafe = 0;
          if (abs(randomOffset * 2) < s(256)) notebookellipse_failsafe = s(480);
          if (abs(randomOffset2 * 2) > s(400)) notebookellipseSize_failsafe = s(-100);
          if (abs(randomOffset2 * 2) < s(65)) notebookellipseSize_failsafe = s(256);
          if (abs(randomOffset * 3) < s(256)) notebookellipseX_failsafe = s(256);
          maskNotebook.ellipse(abs(randomOffset * 3) + notebookellipseX_failsafe, abs(randomOffset * 2) + notebookellipse_failsafe, abs(randomOffset2 * 2) + notebookellipseSize_failsafe, abs(randomOffset2 * 2) + notebookellipseSize_failsafe);
          if (type == "based") {
               blendMode(ADD);
          }

          applyMask(sourceNotebook, maskNotebook);

          blendMode(BLEND);
     }
     if (floatingShape1 > 79 && floatingShape1 < 100) {

          ss_circle = true;
          sprinkles_used = true;
          let sourceSprinksCircle;
          let maskSprinksCircle;
          sourceSprinksCircle = createGraphics(DIM, DIM);
          sourceSprinksCircle.background(clrs[2]);
          sourceSprinksCircle.strokeCap(ROUND);
          sourceSprinksCircle.strokeWeight(s(6));
          sourceSprinksCircle.stroke(clrs[3]);
          let sprinkle_column = 0;
          let sprinkle_row = 0;
          let sprinkle_switch = 0;
          while (sprinkle_row < (round(1.1953125 * DIM))) {
               while (sprinkle_column < DIM) {
                    sourceSprinksCircle.line(s(-6) + sprinkle_row, s(16) + sprinkle_column, s(4) + sprinkle_row, s(30) + sprinkle_column);
                    sourceSprinksCircle.line(s(-8) + sprinkle_row, s(48) + sprinkle_column, s(8) + sprinkle_row, s(48) + sprinkle_column);
                    sourceSprinksCircle.line(s(0) + sprinkle_row, s(72) + sprinkle_column, s(0) + sprinkle_row, s(88) + sprinkle_column);
                    sourceSprinksCircle.line(s(4) + sprinkle_row, s(108) + sprinkle_column, s(-6) + sprinkle_row, s(124) + sprinkle_column);
                    sourceSprinksCircle.line(s(-8) + sprinkle_row, s(148) + sprinkle_column, s(8) + sprinkle_row, s(148) + sprinkle_column);
                    sprinkle_column = sprinkle_column + s(158);
               }
               sprinkle_switch++;
               sprinkle_row = sprinkle_row + s(32);
               if (sprinkle_switch % 2 == 0) {
                    sprinkle_column = s(0);
               }
               if (sprinkle_switch % 2 != 0) {
                    sprinkle_column = s(-79);
               }
               if (sprinkle_switch % 3 == 0) {
                    sprinkle_column = s(-128);
               }
          }
          maskSprinksCircle = createGraphics(DIM, DIM);
          maskSprinksCircle.ellipse(s(512) + randomOffset, s(512) + randomOffset, floatingShape1 * s(2), floatingShape1 * s(2));
          applyMask(sourceSprinksCircle, maskSprinksCircle);
     }
     if (floatingShape1 > 69 && floatingShape1 < 150 && bgType != "horizon" && bgType != "grid" && bgType != "fakegrid" && bgType != "3Dgrid" && centeredShapeType != "horizon" && bars_used == false && grid_used == false) {
          bars_used = true;
          let gridSize = xx(42);
          gridSize = gridSize * 2;
          if (gridSize < 65) {
               gridSize = gridSize + 64;
          }
          if (gridSize > 500) {
               gridSize = Math.floor(gridSize / 2);
          }
          gridSize = s(gridSize);
          let floatingGridCounter = s(32);
          let floatingGridCounterH = s(32);
          let floatingGrid_height_failsafe = 0;
          if (s(340) + randomOffset2 + floatingGridCounterH > s(512) && gridSize > s(200)) {
               floatingGrid_height_failsafe = s(-200);
          }
          noFill();
          strokeWeight(s(2));
          if (type == "light") {
               stroke(0);
          }
          if (type == "dark") {
               stroke(255);
          }
          while (floatingGridCounterH < gridSize) {
               while (floatingGridCounter < gridSize) {

                    square(s(300) + randomOffset3 + floatingGridCounter, s(340) + randomOffset2 + floatingGridCounterH + floatingGrid_height_failsafe, s(32));
                    floatingGridCounter = floatingGridCounter + s(32);
               }
               floatingGridCounterH = floatingGridCounterH + s(32);
               floatingGridCounter = s(32);
          }
     }
     if (floatingShape1 > 149 && floatingShape1 < 175 && bgType != "horizon" && bgType != "grid" && bgType != "fakegrid" && bgType != "3Dgrid" && centeredShapeType != "horizon" && bars_used == false) {
          if (type == "based") {
               blendMode(ADD);
          }
          bars_used = true;
          let gridSize = xx(40) * 2;
          gridSize = gridSize * 2;
          if (gridSize < s(65)) {
               gridSize = gridSize + s(64);
          }
          if (gridSize > s(500)) {
               gridSize = Math.floor(gridSize / 2);
          }
          gridSize = s(gridSize);
          let floatingGridCounter = s(32);
          let floatingGridCounterH = s(32);
          let floatingGrid_height_failsafe = 0;
          if (s(340) + randomOffset2 + floatingGridCounterH > s(512) && gridSize > s(200)) {
               floatingGrid_height_failsafe = s(-200);
          }
          noFill();
          strokeWeight(s(2));
          if (type == "light") {
               stroke(0);
          }
          if (type == "dark") {
               stroke(255);
          }
          let blackSquareStart = true;
          while (floatingGridCounterH < gridSize) {
               currSquareBlack = blackSquareStart;
               while (floatingGridCounter < gridSize) {
                    fill(currSquareBlack ? 0 : 255);
                    square(s(300) + randomOffset3 + floatingGridCounter, s(340) + randomOffset2 + floatingGridCounterH + floatingGrid_height_failsafe, s(32));
                    floatingGridCounter += s(32);
                    currSquareBlack = !currSquareBlack;
               }
               blackSquareStart = !blackSquareStart;
               floatingGridCounterH += s(32);
               floatingGridCounter = s(32);
          }
          blendMode(BLEND);
     }
     if (floatingShape1 > 174 && floatingShape1 < 200 && bgType != "horizon" && centeredShapeType != "horizon") {
          bars_used = true;
          stroke(nonBGColor(2));
          strokeWeight(s(4));
          strokeCap(ROUND);
          let radius = s(xx(30));
          if (radius < s(100)) {
               radius += s(76);
          }
          if (radius > s(200)) {
               radius -= s(55);
          }
          let lineH = radius * (-1);
          let firstlastline = 16;
          let venetian_circle_failsafe = 0;
          while (lineH < radius) {
               let chord = pow(radius, 2) - pow(lineH, 2);
               if (lineH + s(32) >= radius) {
                    firstlastline = (-4);
               }
               if (randomOffset < s(-100)) {
                    venetian_circle_failsafe = s(250);
               }

               line(s(412) + randomOffset2, s(356) + lineH + randomOffset + venetian_circle_failsafe, s(412) + firstlastline + sqrt(chord) + randomOffset2, s(356) + lineH + randomOffset + venetian_circle_failsafe);
               line(s(412) + randomOffset2, s(356) + lineH + randomOffset + venetian_circle_failsafe, s(412) - firstlastline - sqrt(chord) + randomOffset2, s(356) + lineH + randomOffset + venetian_circle_failsafe);
               lineH = lineH + s(16);
               firstlastline = 0;
          }
     }

     if (floatingShape1 > 99 && floatingShape1 < 125) {
          strokeWeight(s(32));
          noFill();
          stroke(nonBGColor(2));
          strokeCap(SQUARE);
          let arcBegin = radians(random(0, 200) + 10);
          let arcEnd = radians(random(0, 200) + 10);
          arcBegin = arcBegin / 4;
          arcEnd = arcEnd * 2;
          if (arcEnd - arcBegin < radians(50)) {
               arcEnd = arcEnd * 4;
          }
          if (arcEnd - arcBegin > radians(330)) {
               arcEnd = arcEnd / 3;
          }
          if (randomOffset4 > 125) {
               arcBegin = arcBegin + radians(180);
               arcEnd = arcEnd + radians(180);
          }
          let arcSize = abs(randomOffset4) + s(100);
          arc(s(512), s(512), arcSize, arcSize, arcBegin, arcEnd);
     }

     if (floatingShape1 > 124 && floatingShape1 < 150 && bars_used == false) {
          if (type == "based") {
               blendMode(ADD);
          }
          worms_used = true;
          let sourceWormsCircle;
          let maskWormsCircle;
          sourceWormsCircle = createGraphics(DIM, DIM);
          sourceWormsCircle.background(255);
          sourceWormsCircle.noFill();
          sourceWormsCircle.strokeCap(ROUND);
          sourceWormsCircle.strokeWeight(s(5));
          sourceWormsCircle.stroke(0);
          let worm_column = 0;
          let worm_row = 0;
          let worm_switch = 0;
          let bezX1 = s(16);
          let bezX2 = s(4);
          let bezY1 = s(32);
          while (worm_row < s(1224)) {
               while (worm_column < DIM) {
                    sourceWormsCircle.beginShape();
                    sourceWormsCircle.curveVertex(s(int(random(0, 12) - bezX1)) + worm_row, s(int(random(0, 24)) - bezY1) + worm_column);
                    sourceWormsCircle.curveVertex(s(int(random(0, 24))) + worm_row, s(int(random(0, 24))) + worm_column);
                    sourceWormsCircle.curveVertex(s(int(random(0, 26))) + worm_row, s(int(random(0, 24))) + worm_column);
                    sourceWormsCircle.curveVertex(s(int(random(0, 32))) + worm_row, int(random(0, 24)) + worm_column);
                    sourceWormsCircle.curveVertex(s(int(random(0, 36))) + bezX2 + worm_row, s(int(random(0, 24))) + bezY1 + worm_column);
                    sourceWormsCircle.endShape();
                    worm_column = worm_column + s(24);
               }
               worm_column = worm_column + s(158);
               worm_switch++;
               worm_row = worm_row + s(32);
               if (worm_switch % 2 == 0) {
                    worm_column = 0;
               }
               if (worm_switch % 2 != 0) {
                    worm_column = s(-79);
               }
               if (worm_switch % 3 == 0) {
                    worm_column = s(-128);
               }
          }
          maskWormsCircle = createGraphics(DIM, DIM);
          maskWormsCircle.ellipse(s(512) + randomOffset, s(512) + randomOffset, s(floatingShape1 * 2), s(floatingShape1 * 2));
          applyMask(sourceWormsCircle, maskWormsCircle);
          blendMode(BLEND);
     }
     if (floatingShape1 > 200 && floatingShape1 < 241 && bgType != "dots") {
          floatingShapeType = "dots_circle";
          let sourceDotsCircle;
          let maskDotsCircle;
          sourceDotsCircle = createGraphics(DIM, DIM);
          let dots_circle_counter = 0;
          let dots_height_counter = 0;
          if (type == "light") {
               sourceDotsCircle.background(255, 255, 255);
          }
          if (type == "dark") {
               sourceDotsCircle.background(0, 0, 0);
          }
          if (type == "based") {
               sourceDotsCircle.background(clrs[0]);
          }
          while (dots_height_counter < DIM) {
               while (dots_circle_counter < DIM) {
                    sourceDotsCircle.noStroke();
                    sourceDotsCircle.fill(clrs[1]);
                    sourceDotsCircle.ellipse(dots_circle_counter, dots_height_counter, s(4), s(4));
                    dots_circle_counter = dots_circle_counter + s(8);
               }
               dots_height_counter = dots_height_counter + s(8);
               dots_circle_counter = 0;          }
          maskDotsCircle = createGraphics(DIM, DIM);
          maskDotsCircle.ellipse(s(512) + randomOffset, s(512) + randomOffset, s(floatingShape1), s(floatingShape1));
          applyMask(sourceDotsCircle, maskDotsCircle);
     }
     let curveWiggler1 = s(xx(16));
     let curveWiggler2 = s(xx(18));
     let curveWiggler4 = s(xx(20));
     let curveWiggler5 = s(xx(22));
     let curveType = xx(14);
     if (curveType < 16) {
          let sourceGradientCurve;
          let maskGradientCurve;
          sourceGradientCurve = createGraphics(DIM, DIM);
          let x_lerp = 0;
          let y_lerp = 0;
          let w_lerp = DIM;
          let h_lerp = DIM;
          for (let i = y_lerp; i <= y_lerp + h_lerp; i++) {
               let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
               let c = lerpColor(clrs[0], clrs[1], inter);
               sourceGradientCurve.strokeWeight(2);
               sourceGradientCurve.stroke(c);
               sourceGradientCurve.line(i, x_lerp, i, x_lerp + w_lerp);
          }
          maskGradientCurve = createGraphics(DIM, DIM);

          if (curveWiggler1 > s(170)) {
               curveWiggler1 = curveWiggler1 - s(100);
          }
          if (curveWiggler2 > s(120)) {
               curveWiggler2 = curveWiggler2 - s(100);
          }
          if (curveWiggler4 > s(170)) {
               curveWiggler4 = curveWiggler4 - s(100);
          }
          if (curveWiggler5 > s(170)) {
               curveWiggler5 = curveWiggler5 - s(100);
          }
          let curveHeightInt = s(xx(24));
          let curveHeightOffset = 0;
          let curveOffset = s(xx(26));
          curveHeightOffset = curveHeightInt;
          curveHeightOffset = curveHeightOffset * (-2);
          if (xx(26) > 63 && xx(26) < 100) {
               curveOffset *= 4;
          }
          if (xx(26) < 64) {
               curveOffset = curveOffset * (-1);
          }
          if (xx(26) > 100) {
               curveOffset = curveOffset / 5;
          }
          if (xx(26) < 165) {
               curveHeightOffset = curveHeightInt;
               curveHeightOffset = curveHeightOffset * (-2);
          }
          maskGradientCurve.noFill();
          maskGradientCurve.strokeWeight(s(8));
          maskGradientCurve.stroke(255);
          let failsafe_flourish_mover = 0;
          maskGradientCurve.beginShape();
          if ((s(64) + curveOffset * 4) < 1) {
               failsafe_flourish_mover = s(200);
          }
          let flourishOffset = s(-320);
          if (curveHeightOffset < s(-300)) {
               curveHeightOffset += s(300);
          }
          maskGradientCurve.curveVertex(flourishOffset + s(120) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(256) + curveWiggler2 + curveOffset + curveHeightOffset);
          maskGradientCurve.curveVertex(flourishOffset + s(360) + curveOffset * 4 + failsafe_flourish_mover, s(550) + curveWiggler2 + curveOffset + curveHeightOffset);
          maskGradientCurve.curveVertex(flourishOffset + s(480) + curveOffset * 4 + curveWiggler2 + failsafe_flourish_mover, s(256) + curveWiggler1 + curveWiggler2 + curveOffset + curveHeightOffset);
          maskGradientCurve.curveVertex(flourishOffset + s(520) + curveOffset * 4 + failsafe_flourish_mover, s(740) + curveWiggler4 + (curveWiggler2 / 2) + curveOffset + curveHeightOffset);
          maskGradientCurve.curveVertex(flourishOffset + s(660) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(460) + curveWiggler5 + curveWiggler2 + 2 * curveOffset + curveHeightOffset);
          maskGradientCurve.curveVertex(flourishOffset + s(860) + curveOffset * 4 + failsafe_flourish_mover, s(512) + curveWiggler5 + 4 * curveOffset + curveHeightOffset);
          maskGradientCurve.curveVertex(flourishOffset + s(1060) + curveOffset * 4 + failsafe_flourish_mover, s(512) + curveWiggler1 + curveOffset + curveHeightOffset);
          maskGradientCurve.curveVertex(flourishOffset + s(2400) + curveOffset * 4 + failsafe_flourish_mover, s(800) + curveWiggler4 + (curveWiggler2 / 2) + curveOffset + curveHeightOffset - s(600));
          maskGradientCurve.endShape();
          applyMask(sourceGradientCurve, maskGradientCurve);
     }
     if (curveType > 15 && curveType < 65) {
          if (curveWiggler1 > s(170)) {
               curveWiggler1 -= s(100);
          }
          if (curveWiggler2 > s(120)) {
               curveWiggler2 -= s(100);
          }
          if (curveWiggler4 > s(170)) {
               curveWiggler4 -= s(100);
          }
          if (curveWiggler5 > s(170)) {
               curveWiggler5 -= s(100);
          }
          let curveHeightInt = s(xx(24));
          let curveHeightOffset = 0;
          let curveOffset = s(xx(26));
          curveHeightOffset = curveHeightInt;
          curveHeightOffset = curveHeightOffset * (-2);
          if (curveOffset > s(63) && curveOffset < s(100)) {
               curveOffset = curveOffset * 4;
          }
          if (curveOffset < s(64)) {
               curveOffset = curveOffset * (-1);
          }
          if (curveOffset > s(100)) {
               curveOffset = curveOffset / 5;
          }
          if (curveOffset < s(165)) {
               curveHeightOffset = curveHeightInt;
               curveHeightOffset = curveHeightOffset * (-2);
          }
          noFill();
          strokeWeight(s(8));
          stroke(clrs[2]);
          if (type == "dark" && clrs[2] == color('#000000')) {
               stroke(clrs[4]);
          }
          let failsafe_flourish_mover = 0;
          beginShape();
          if ((s(64) + curveOffset * 4) < 1) {
               failsafe_flourish_mover = s(200);
          }
          let flourishOffset = s(-320);
          if (curveHeightOffset < s(-300)) {
               curveHeightOffset = curveHeightOffset + s(300);
          }
          curveVertex(flourishOffset + s(120) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(256) + curveWiggler2 + curveOffset + curveHeightOffset);
          curveVertex(flourishOffset + s(360) + curveOffset * 4 + failsafe_flourish_mover, s(550) + curveWiggler2 + curveOffset + curveHeightOffset);
          curveVertex(flourishOffset + s(480) + curveOffset * 4 + curveWiggler2 + failsafe_flourish_mover, s(256) + curveWiggler1 + curveWiggler2 + curveOffset + curveHeightOffset);
          curveVertex(flourishOffset + s(520) + curveOffset * 4 + failsafe_flourish_mover, s(740) + curveWiggler4 + (curveWiggler2 / 2) + curveOffset + curveHeightOffset);
          curveVertex(flourishOffset + s(660) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(460) + curveWiggler5 + curveWiggler2 + 2 * curveOffset + curveHeightOffset);
          curveVertex(flourishOffset + s(860) + curveOffset * 4 + failsafe_flourish_mover, s(512) + curveWiggler5 + 4 * curveOffset + curveHeightOffset);
          curveVertex(flourishOffset + s(1060) + curveOffset * 4 + failsafe_flourish_mover, s(512) + curveWiggler1 + curveOffset + curveHeightOffset);
          curveVertex(flourishOffset + s(2400) + curveOffset * 4 + failsafe_flourish_mover, s(800) + curveWiggler4 + (curveWiggler2 / 2) + curveOffset + curveHeightOffset - s(600));
          endShape();
     }
     if (curveType > 64 && curveType < 128) {
          let curveOffset = xxs(26);
          let curveHeightOffset = 0;
          if (curveOffset > s(63) && curveOffset < s(100)) {
               curveOffset = curveOffset * 4;
          }
          if (curveOffset < s(64)) {
               curveOffset = curveOffset * (-1);
          }
          if (curveOffset > s(100)) {
               curveOffset = curveOffset / 5;
          }
          if (curveOffset < s(165)) {
               curveHeightOffset = 0 - s(xx(24));
          }
          noFill();
          strokeWeight(s(10));
          stroke(clrs[2]);
          if (type == "dark" && clrs[2] == color('#000000')) {
               stroke(clrs[4]);
          }
          let failsafe_flourish_mover = 0;
          beginShape();
          if ((s(64) + curveOffset * 4) < 1) {
               failsafe_flourish_mover = s(200);
          }
          curveVertex(s(64) + curveOffset * 4 + failsafe_flourish_mover, s(320) + curveWiggler1 + curveOffset + curveHeightOffset);
          curveVertex(s(128) + curveOffset * 4 + failsafe_flourish_mover, s(640) + curveWiggler4 + curveOffset + curveHeightOffset);
          curveVertex(s(160) + curveOffset * 4 + failsafe_flourish_mover, s(420) + curveWiggler2 + curveOffset + curveHeightOffset);
          curveVertex(s(200) + curveOffset * 4 + failsafe_flourish_mover, s(600) + curveWiggler1 + curveOffset + curveHeightOffset);
          curveVertex(s(260) + curveOffset * 4 + failsafe_flourish_mover, s(400) + curveWiggler5 + curveOffset + curveHeightOffset);
          curveVertex(s(512) + curveOffset * 4 + failsafe_flourish_mover, s(560) + curveWiggler2 + curveOffset + curveHeightOffset);
          curveVertex(s(768) + curveOffset * 4 + failsafe_flourish_mover, s(128) + curveWiggler1 + curveOffset + curveHeightOffset);
          endShape();
     }
     if (curveType > 129 && curveType < 241) {
          noFill();
          strokeWeight(s(10));
          stroke(nonBGColor(2));
          let curveOffset = s(xx(26));
          if (curveWiggler1 > s(170)) {
               curveWiggler1 -= s(100);
          }
          if (curveWiggler2 > s(120)) {
               curveWiggler2 -= s(100);
          }
          if (curveWiggler4 > s(170)) {
               curveWiggler4 -= s(100);
          }
          if (curveWiggler5 > s(170)) {
               curveWiggler5 -= s(100);
          }
          let curveHeightOffset = 0;
          if (curveOffset > s(63) && curveOffset < s(100)) {
               curveOffset *= 4;
          }
          if (curveOffset < s(64)) {
               curveOffset *= (-1);
          }
          if (curveOffset > s(100)) {
               curveOffset /= 5;
          }
          if (curveOffset < s(165)) {
               curveHeightOffset = s(xx(24) * -2);
          }
          noFill();
          strokeWeight(s(8));
          let failsafe_flourish_mover = 0;
          beginShape();
          if ((s(64) + curveOffset * 4) < 1) {
               failsafe_flourish_mover = s(200);
          }
          curveVertex(DIM + curveOffset * 4 + failsafe_flourish_mover, 0 + curveWiggler1 + curveOffset + curveHeightOffset);
          curveVertex(s(120) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(450) + curveWiggler2 + curveOffset + curveHeightOffset);
          curveVertex(s(640) + curveOffset * 4 + failsafe_flourish_mover, s(550) + curveWiggler2 + curveOffset + curveHeightOffset);
          curveVertex(s(200) + curveOffset * 4 + curveWiggler2 + failsafe_flourish_mover, s(650) + curveWiggler1 + curveWiggler2 + curveOffset + curveHeightOffset);
          curveVertex(s(528) + curveOffset * 4 + failsafe_flourish_mover, s(740) + curveWiggler4 + (curveWiggler2 / 2) + curveOffset + curveHeightOffset);
          curveVertex(s(128) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(875) + curveWiggler5 + curveWiggler2 + 2 * curveOffset + curveHeightOffset);
          curveVertex(0 + curveOffset * 4 + failsafe_flourish_mover, s(912) + curveWiggler5 + 4 * curveOffset + curveHeightOffset);
          endShape();
     }
     if (curveType > 240) {
          let sourceCurve;
          let maskCurve;
          sourceCurve = createGraphics(DIM, DIM);
          let x_lerp = 0;
          let y_lerp = 0;
          let w_lerp = DIM;
          let h_lerp = DIM;
          for (let i = y_lerp; i <= y_lerp + h_lerp; i++) {
               let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
               let c = lerpColor(clrs[0], clrs[1], inter);
               sourceCurve.strokeWeight(2);
               sourceCurve.stroke(c);
               sourceCurve.line(x_lerp, i, x_lerp + w_lerp, i);
          }
          maskCurve = createGraphics(DIM, DIM);
          maskCurve.noFill();
          maskCurve.strokeWeight(s(10));
          maskCurve.stroke(255);
          let curveOffset = xxs(26);
          if (curveWiggler1 > s(170)) {
               curveWiggler1 = curveWiggler1 - s(100);
          }
          if (curveWiggler2 > s(120)) {
               curveWiggler2 = curveWiggler2 - s(100);
          }
          if (curveWiggler4 > s(170)) {
               curveWiggler4 = curveWiggler4 - s(100);
          }
          if (curveWiggler5 > s(170)) {
               curveWiggler5 = curveWiggler5 - s(100);
          }
          let curveHeightOffset = 0;
          if (curveOffset > s(63) && curveOffset < s(100)) {
               curveOffset = curveOffset * 4;
          }
          if (curveOffset < s(64)) {
               curveOffset = curveOffset * (-1);
          }
          if (curveOffset > s(100)) {
               curveOffset = curveOffset / 5;
          }
          if (curveOffset < s(165)) {
               curveHeightOffset = xxs(24) * (-2);
          }
          maskCurve.noFill();
          maskCurve.strokeWeight(s(8));
          let failsafe_flourish_mover = 0;
          maskCurve.beginShape();
          if ((s(64) + curveOffset * 4) < 1) {
               failsafe_flourish_mover = s(200);
          }
          maskCurve.curveVertex(DIM + curveOffset * 4 + failsafe_flourish_mover, 0 + curveWiggler1 + curveOffset + curveHeightOffset);
          maskCurve.curveVertex(s(120) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(450) + curveWiggler2 + curveOffset + curveHeightOffset);
          maskCurve.curveVertex(s(640) + curveOffset * 4 + failsafe_flourish_mover, s(550) + curveWiggler2 + curveOffset + curveHeightOffset);
          maskCurve.curveVertex(s(200) + curveOffset * 4 + curveWiggler2 + failsafe_flourish_mover, s(650) + curveWiggler1 + curveWiggler2 + curveOffset + curveHeightOffset);
          maskCurve.curveVertex(s(528) + curveOffset * 4 + failsafe_flourish_mover, s(740) + curveWiggler4 + (curveWiggler2 / 2) + curveOffset + curveHeightOffset);
          maskCurve.curveVertex(s(128) + curveOffset * 4 + curveWiggler1 + failsafe_flourish_mover, s(875) + curveWiggler5 + curveWiggler2 + 2 * curveOffset + curveHeightOffset);
          maskCurve.curveVertex(0 + curveOffset * 4 + failsafe_flourish_mover, s(912) + curveWiggler5 + 4 * curveOffset + curveHeightOffset);
          maskCurve.endShape();
          applyMask(sourceCurve, maskCurve);
     }
     let floatingShape2 = xx(18);
     if (floatingShape2 > 128 && floatingShape2 < 156) {
          let bar_triangle;
          bar_triangle = createGraphics(DIM, DIM);
          let barp = 0;
          bar_triangle.stroke(getColor(2));
          bar_triangle.strokeWeight(s(10));
          bar_triangle.noFill();
          while (barp < s(1424)) {
               bar_triangle.line(s(-100), s(-400) + barp, s(3400), s(800) + barp);
               barp += s(16);
          }
          let bar_triangle_mask;
          bar_triangle_mask = createGraphics(DIM, DIM);
          bar_triangle_mask.triangle(
               xsBetween(8, 100, 400), xsBetween(18, 100, 400),
               xsBetween(7, 400, 550), xsBetween(19, 400, 550),
               xsBetween(17, 750, 950), s(512) - xsBetween(9, 100, 120));
          applyMask(bar_triangle, bar_triangle_mask);
     }
     if (floatingShape2 < 7) {
          noStroke();
          fill(clrs[2]);
          rect(s(512) - randomOffset, s(300) - randomOffset / 2, s(floatingShape2 + 16), s(floatingShape2 + 16) * 8);
          rect(s(512) - randomOffset + s(64), s(300) - randomOffset / 2 - s(64), s(floatingShape2 + 16), s(floatingShape2 + 16) * 8);
          rect(s(512) - randomOffset + s(128), s(300) - randomOffset / 2 - s(128), s(floatingShape2 + 16), s(floatingShape2 + 16) * 8);
     }
     if (floatingShape2 > 7 && floatingShape2 < 17 && bars_used == false && bgType != "horizon") {
          strokeCap(ROUND);
          strokeWeight(s(4));
          stroke(nonBGColor(3));
          bars_used = true;
          let halfway_point = false;
          let line_circle_var = s(Math.floor(floatingShape2 / 2));
          let line_circle_height = s(floatingShape2);
          let line_circle_counter = 0;
          let height_adder = 0;
          let line_anchorX = s(512) + randomOffset;
          let line_anchorY = s(128) + randomOffset2;
          let line_triangle_height_failsafe = 0;
          if ((line_anchorY + (line_circle_counter + height_adder) * line_circle_height) < s(128)) {
               line_triangle_height_failsafe = s(256);
          }
          while (line_circle_counter < 16 && line_circle_counter > -1 && height_adder < 16) {
               if (halfway_point == false) {
                    line(line_anchorX - line_circle_counter * line_circle_var, line_anchorY + (line_circle_counter + height_adder) * line_circle_height + line_triangle_height_failsafe, line_anchorX + line_circle_counter * line_circle_var, line_anchorY + (line_circle_counter + height_adder) * line_circle_height + line_triangle_height_failsafe);
                    line_circle_counter++;
               }
          }
     }
     if (floatingShape2 > 16 && floatingShape2 < 32) {
          noStroke();
          fill(clrs[2]);
          rect(s(512) - randomOffset, s(300) - randomOffset / 2, s(floatingShape2), s(floatingShape2) * 8);
          rect(s(512) - randomOffset + s(64), s(300) - randomOffset / 2 + s(64), s(floatingShape2), s(floatingShape2) * 8);
          rect(s(512) - randomOffset + s(128), s(300) - randomOffset / 2 + s(128), s(floatingShape2), s(floatingShape2) * 8);
     }

     if (floatingShape2 < 50 && type == "dark" && clrs[2] != color('#000000') && clrs[3] != color('#000000')) {
          let sourceGradient;
          let maskGradient;
          sourceGradient = createGraphics(DIM, DIM);
          let x_lerp = 0;
          let y_lerp = 0;
          let gradientShapePosX = int(srandom(128, 824));
          let gradientShapePosY = int(srandom(128, 824));
          let w_lerp = gradientShapePosX + gradientShapePosX;
          let h_lerp = gradientShapePosY + gradientShapePosY;
          for (let i = y_lerp; i <= y_lerp + h_lerp; i++) {
               let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
               let c = lerpColor(clrs[2], clrs[3], inter);
               sourceGradient.strokeWeight(2);
               sourceGradient.stroke(c);
               sourceGradient.line(x_lerp, i, x_lerp + w_lerp, i);
          }
          maskGradient = createGraphics(DIM, DIM);
          maskGradient.triangle(gradientShapePosX, gradientShapePosY + s(128),
               gradientShapePosX - gradientShapePosX * (0.5),
               Math.floor(gradientShapePosY / 3) + s(128),
               gradientShapePosX + gradientShapePosX * (0.25), Math.floor(gradientShapePosY / 2) + s(128));
          applyMask(sourceGradient, maskGradient);
     }
     if (floatingShape2 > 50 && type == "dark" && clrs[2] != color('#000000') && clrs[3] != color('#000000')) {
          let sourceGradient;
          let maskGradient;
          sourceGradient = createGraphics(DIM, DIM);
          let x_lerp = 0;
          let y_lerp = 0;
          let gradientShapePosX = int(srandom(228, 724));
          let gradientShapePosY = int(srandom(228, 724));
          if (floatingShapeType == "dots_circle" && (s(512) + randomOffset) < s(500)) {
               gradientShapePosX += s(300);
          }
          if (ss_circle == true && (s(512) + randomOffset) < s(500)) {
               shift_gEllipse = gradientShapePosX += s(300);
          }
          if (gradientShapePosX > s(700)) {
               gradientShapePosX -= s(200);
          }
          let w_lerp = gradientShapePosX + s(340);
          let h_lerp = gradientShapePosY + s(340);
          for (let i = y_lerp; i <= y_lerp + h_lerp; i++) {
               let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
               let c = lerpColor(clrs[2], clrs[3], inter);
               sourceGradient.strokeWeight(2);
               sourceGradient.stroke(c);
               sourceGradient.line(x_lerp, i, x_lerp + w_lerp, i);
          }
          maskGradient = createGraphics(DIM, DIM);
          maskGradient.fill('#000000');
          maskGradient.ellipse(gradientShapePosX, gradientShapePosY, s(340), s(340));
          applyMask(sourceGradient, maskGradient);
     }
     if (floatingShape2 > 50 && floatingShape2 < 75) {
          let arc_counter = 0;
          let arcPosx = 0;
          let shiftNoodle = s(-512);
          let arcPosy = s(-712);
          let ellipse_constant = s(15);
          let noodleWaveOffset = srandom(-128, 128);
          let noodleWaveOffset2 = srandom(-100, 100);
          strokeWeight(s(6));
          strokeCap(SQUARE);
          stroke(clrs[4]);
          noFill();
          let rotateRAD = (3 * PI / 4.0);
          rotate(rotateRAD);
          while (arc_counter <= (6)) {
               stroke(clrs[4]);
               while (arcPosx < s(512)) {
                    arc(arcPosx + shiftNoodle + noodleWaveOffset, arcPosy + noodleWaveOffset2, ellipse_constant, ellipse_constant - s(6), PI, TWO_PI, OPEN);
                    arc(arcPosx + ellipse_constant + shiftNoodle + noodleWaveOffset, (arcPosy - 3) + noodleWaveOffset2, ellipse_constant, ellipse_constant - s(6), 0, PI, OPEN);
                    arcPosx = arcPosx + 2 * ellipse_constant;
               }
               arcPosx = 0;
               arcPosy = arcPosy - s(15);
               arc_counter += 1;
          }
          rotate(-rotateRAD);
     }
     if (floatingShape2 > 74 && floatingShape2 < 101) {
          noStroke();
          fill(clrs[4]);
          let zotOffset = srandom(-128, 128);
          let zotOffset2 = srandom(-100, 100);
          beginShape();
          vertex(s(728) + zotOffset, s(240) + zotOffset2);
          vertex(s(800) + zotOffset, s(240) + zotOffset2);
          vertex(s(768) + zotOffset, s(320) + zotOffset2);
          vertex(s(820) + zotOffset, s(320) + zotOffset2);
          vertex(s(778) + zotOffset, s(400) + zotOffset2);
          vertex(s(820) + zotOffset, s(400) + zotOffset2);
          vertex(s(738) + zotOffset, s(540) + zotOffset2);
          vertex(s(768) + zotOffset, s(440) + zotOffset2);
          vertex(s(720) + zotOffset, s(440) + zotOffset2);
          vertex(s(748) + zotOffset, s(360) + zotOffset2);
          vertex(s(680) + zotOffset, s(360) + zotOffset2);
          vertex(s(728) + zotOffset, s(240) + zotOffset2);
          endShape();
     }
     if (floatingShape2 > 100 && floatingShape2 < 128) {
          two_straight = true;
          noFill();
          stroke(clrs[1]);
          strokeWeight(s(16));
          strokeCap(SQUARE);
          let straightLineLength = abs(randomOffset3) * 2;
          let shift_right = 0;
          if (straightLineLength > s(300)) {
               straightLineLength = straightLineLength / 3;
          } if (floatingShape2 > 112) {
               shift_right = s(256);
          }
          line(s(530) + randomOffset3 + shift_right, s(360) + randomOffset2, straightLineLength + randomOffset3 + shift_right, s(360) + randomOffset2);
          line(s(530) + randomOffset3 + shift_right, s(392) + randomOffset2, straightLineLength + randomOffset3 + shift_right, s(392) + randomOffset2);
     }
     if (floatingShape2 > 99 && floatingShape2 < 128 && two_straight == false) {
          noFill();
          stroke(clrs[1]);
          strokeWeight(s(32));
          strokeCap(SQUARE);
          let noodle_failsafe = 0;
          if (randomOffset < 0) {
               noodle_failsafe = s(250);
          }
          let arcPosx = s(256) + randomOffset + noodle_failsafe;
          let arcPosy = s(512) + randomOffset;
          arc(arcPosx, arcPosy, s(128), s(128), PI, TWO_PI, OPEN);
          arc(arcPosx + s(128), (arcPosy - 1), s(128), s(128), 0, PI, OPEN);
          arcPosx = arcPosx + 2 * s(128);
          arc(arcPosx, arcPosy, s(128), s(128), PI, TWO_PI, OPEN);
          arc(arcPosx + s(128), (arcPosy - 1), s(128), s(128), 0, PI, OPEN);
     }
     if (floatingShape2 > 127 && floatingShape2 < 160 && two_straight == false) {
          noFill();
          stroke(clrs[1]);
          strokeWeight(s(32));
          strokeCap(SQUARE);
          let arcPosx = s(512) + randomOffset;
          let arcPosy = s(512) + randomOffset;
          arc(arcPosx, arcPosy, s(64), s(64), PI, TWO_PI, OPEN);
          arc(arcPosx + s(64), (arcPosy - 1), s(64), s(64), 0, PI, OPEN);
          arcPosx = arcPosx + 2 * s(64);
          arc(arcPosx, arcPosy, s(64), s(64), PI, TWO_PI, OPEN);
          arc(arcPosx + s(64), (arcPosy - 1), s(64), s(64), 0, PI, OPEN);
     }
     if (floatingShape2 > 160 && floatingShape2 < 180 && two_straight == false) {
          noFill();
          stroke(nonBGColor(1));
          strokeWeight(s(32));
          strokeCap(SQUARE);
          let noodle_failsafe = 0;
          if (randomOffset < 0) {
               noodle_failsafe = s(250);
          }
          let arcPosx = s(256) + randomOffset + noodle_failsafe;
          let arcPosy = s(512) + randomOffset;
          arc(arcPosx, arcPosy, s(128), s(128), PI, TWO_PI, OPEN);
          arc(arcPosx + s(128), (arcPosy - 1), s(128), s(128), 0, PI, OPEN);
          arcPosx = arcPosx + 2 * s(128);
          arc(arcPosx, arcPosy, s(128), s(128), PI, TWO_PI, OPEN);
          arc(arcPosx + s(128), (arcPosy - 1), s(128), s(128), 0, PI, OPEN);
          arcPosy = arcPosy + s(128);
          arcPosx = s(256) + randomOffset + noodle_failsafe;
          arc(arcPosx, arcPosy, s(128), s(128), PI, TWO_PI, OPEN);
          arc(arcPosx + s(128), (arcPosy - 1), s(128), s(128), 0, PI, OPEN);
          arcPosx = arcPosx + 2 * s(128);
          arc(arcPosx, arcPosy, s(128), s(128), PI, TWO_PI, OPEN);
          arc(arcPosx + s(128), (arcPosy - 1), s(128), s(128), 0, PI, OPEN);
     }
     if (floatingShape2 > 179 && floatingShape2 < 241) {
          noStroke();
          fill(clrs[4]);
          let quote_gap = 0 + randomOffset2;
          let quote_mover = s(-256);
          let quote_moverH = int(srandom(-256, 100));
          quad(quote_mover + s(680) + quote_gap, quote_moverH + s(420) + quote_gap + (randomOffset / 4), quote_mover + s(712) + quote_gap, quote_moverH + s(432) + quote_gap + (randomOffset / 4), quote_mover + s(684) + quote_gap, quote_moverH + s(500) + quote_gap + (randomOffset / 4), quote_mover + s(658) + quote_gap, quote_moverH + s(488) + quote_gap + (randomOffset / 4));
          quote_gap = s(32) + randomOffset2;
          quad(quote_mover + s(680) + quote_gap, quote_moverH + s(420) + quote_gap + (randomOffset / 4), quote_mover + s(712) + quote_gap, quote_moverH + s(432) + quote_gap + (randomOffset / 4), quote_mover + s(684) + quote_gap, quote_moverH + s(500) + quote_gap + (randomOffset / 4), quote_mover + s(658) + quote_gap, quote_moverH + s(488) + quote_gap + (randomOffset / 4));
     }
     if (floatingShape2 > 240 && floatingShape2 < 250 && two_straight == false) {
          strokeWeight(s(24));
          strokeCap(SQUARE);
          stroke(nonBGColor(1));
          noFill();
          let crispy_noodle = s(24);
          beginShape();
          vertex(s(400) + crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
          vertex(s(400) + 2 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
          vertex(s(400) + 3 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
          vertex(s(400) + 4 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
          vertex(s(400) + 5 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
          vertex(s(400) + 6 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
          vertex(s(400) + 7 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
          vertex(s(400) + 8 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
          vertex(s(400) + 9 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
          vertex(s(400) + 10 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
          vertex(s(400) + 11 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
          endShape();
     }
     if (floatingShape2 > 249) {
          strokeWeight(s(24));
          strokeCap(SQUARE);
          stroke(nonBGColor(1));
          noFill();
          let crispy_noodle = s(24);
          beginShape();
          vertex(s(400) + crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
          vertex(s(400) + 2 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
          vertex(s(400) + 3 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
          vertex(s(400) + 4 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
          vertex(s(400) + 5 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
          vertex(s(400) + 6 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
          vertex(s(400) + 7 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
          vertex(s(400) + 8 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
          vertex(s(400) + 9 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
          vertex(s(400) + 10 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset);
          vertex(s(400) + 11 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset);
          endShape();
          let noodle_spacer = s(64);
          beginShape();
          vertex(s(400) + crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset + noodle_spacer);
          vertex(s(400) + 2 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset + noodle_spacer);
          vertex(s(400) + 3 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset + noodle_spacer);
          vertex(s(400) + 4 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset + noodle_spacer);
          vertex(s(400) + 5 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset + noodle_spacer);
          vertex(s(400) + 6 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset + noodle_spacer);
          vertex(s(400) + 7 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset + noodle_spacer);
          vertex(s(400) + 8 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset + noodle_spacer);
          vertex(s(400) + 9 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset + noodle_spacer);
          vertex(s(400) + 10 * crispy_noodle + randomOffset, s(400) + crispy_noodle * 2 + randomOffset + noodle_spacer);
          vertex(s(400) + 11 * crispy_noodle + randomOffset, s(400) + crispy_noodle + randomOffset + noodle_spacer);
          endShape();
     }
     if (floatingShape2 > 64 && floatingShape2 < 100 && floatingShapeType != "dots_circle" && bars_used == false && worms_used == false) {
          let bars_square_counter = 0;
          bars_used = true;
          while (bars_square_counter < DIM / 4) {
               noFill();
               stroke(clrs[2]);
               strokeWeight(s(5));
               let bar_length = s(floatingShape2);
               line(bar_length * 2, bar_length * 2 + bars_square_counter, bar_length * 6, bar_length * 2 + bars_square_counter);
               bars_square_counter = bars_square_counter + s(16);
          }
     }
     if (floatingShape1 < 16) {
          strokeWeight(s(16));
          noFill();
          stroke(diffColor(clrs[1], 3));
          triangle(s(128) + DIM / 2 + randomOffset, DIM / 2 + randomOffset, DIM / 3, DIM / 1.5, DIM / 4 + randomOffset, DIM / 4);
     }
     noLoop();

}

function xx(a) {
     return unhex(hash.substring(a, a + 2));
}

function xxs(a) {
     return ((unhex(hash.substring(a, a + 2)) / DEFAULT_SIZE) * DIM);
}

function s(a) {
     scaled_val = Math.ceil((a / DEFAULT_SIZE) * DIM);
     return scaled_val == 0 ? 1 : scaled_val;
}

function xBetween(x, a, b) {
     return (int)(a + (xx(x) / 255.0 * (b - a)));
}

function xsBetween(x, a, b) {
     a = s(a);
     b = s(b);
     return (int)(a + (xx(x) / 255.0 * (b - a)));
}

function srandom(a, b) {
     a = s(a);
     b = s(b);
     return random(a, b)
}

function dotsbg() {

     let dots_circle_counter = 0;
     let dots_height_counter = 0;
     if (type == "light") {
          background(255, 255, 255);
     }
     if (type == "dark") {
          background(0, 0, 0);
     }
     while (dots_height_counter < 8 * DIM) {
          while (dots_circle_counter < 8 * DIM) {
               noStroke();
               if (type == "light") {
                    fill(0);
               }
               if (type == "dark") {
                    fill(255);
               }
               ellipse(dots_circle_counter, dots_height_counter, s(3), s(3));
               dots_circle_counter = dots_circle_counter + s(64);
          }
          dots_height_counter = dots_height_counter + s(64);
          dots_circle_counter = 0;
     }
}

function notebookbg(width) {
     'use strict'
     let grid = []
     let notebook = []
     let f = 0.02;
     let seed = floor(xx(17))
     noiseSeed(seed)
     notebook[0] = color(0, 0, 0);
     notebook[1] = color(255, 255, 255);
     let ratio = .5;
     if (type == "light") {
          ratio = .58
     } else {
          ratio = .39
     }
     for (let y = 0; y < DIM; y++) {
          for (let x = 0; x <= DIM; x++) {
               let i = noise(x * f, y * f) < ratio ? 1 : 0;
               grid.push({
                    x,
                    y,
                    i
               });
          }
     }
     noStroke();
     grid.forEach((g, index) => {
          fill(notebook[g.i])
          rect(g.x, g.y, 1, 1);
     });
}

function grid3Dbg() {
     bgType = "3Dgrid";
     background(type == "light" ? 255 : 0);
     strokeWeight(1);
     let GridCounter = 4;
     let GridwCounter = 0 - DIM;
     let GridLoop = 24;
     stroke(type == "light" ? 0 : 255);
     while (GridCounter < DIM) {
          line(0, s(512) + GridCounter, DIM, s(512) + GridCounter);
          GridCounter *= 1.1;
     }
     while (GridwCounter < DIM) {
          line(GridwCounter, s(512) + 4, GridwCounter - (s(64) * GridLoop), DIM);
          GridLoop -= 1;
          GridwCounter += s(64);
     }
}

function horizonbg() {
     bgType = "horizon";
     if (type == "light") {
          background(255);
     } else {
          background(0, 0, 0);
     }
     let horizon = 0;
     strokeWeight(1);
     while (horizon < DIM) {
          stroke(type == "light" ? 0 : 255);
          strokeWeight(horizon / 1.5);
          line(0, s(512) + 20 * horizon, DIM, s(512) + 20 * horizon);
          horizon += 1;
     }
}

function fakegridbg() {
     bgType = "fakegrid";
     let x_lerp = 0;
     let y_lerp = 0;
     let w_lerp = DIM;
     let h_lerp = DIM;
     let fake_grid_counter = 0;
     let fake_grid_counter_h = 0;
     let fakeGrid;
     fakeGrid = createGraphics(DIM, DIM);
     for (var i = y_lerp; i <= y_lerp + h_lerp; i++) {
          let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
          let c = lerpColor(clrs[0], clrs[1], inter);
          fakeGrid.strokeWeight(2);
          fakeGrid.stroke(c);
          fakeGrid.line(x_lerp, i, x_lerp + w_lerp, i);
     }
     image(fakeGrid, 0, 0);
     while (fake_grid_counter_h < DIM + s(32)) {
          while (fake_grid_counter < DIM + s(32)) {
               fill(type == "light" ? 255 : 0);
               noStroke();
               square(fake_grid_counter - s(16), fake_grid_counter_h - s(16), s(64));
               fake_grid_counter = fake_grid_counter + s(66);
          }
          fake_grid_counter_h = fake_grid_counter_h + s(66);
          fake_grid_counter = 0;
     }
}

function gridbg() {
     bgType = "grid";
     if (type == "light") {
          background(255, 255, 255);
     } else {
          background(0, 0, 0);
     }
     let n = 0;
     while (n < DIM) {
          noFill();
          strokeWeight(s(2));
          if (type == "light") {
               stroke(0);
          } else {
               stroke(255, 255, 255);
          }
          line(0, s(64) + n, DIM, s(64) + n);
          line(s(64) + n, 0, s(64) + n, DIM);
          n += s(64);
     }
}

function wormsbg() {
     worms_used = true;
     background(255);
     noFill();
     strokeCap(ROUND);
     strokeWeight(s(5));
     stroke(0, 0, 0, 25);
     let worm_column = 0;
     let worm_row = 0;
     let worm_switch = 0;
     let bezX1 = s(16);
     let bezX2 = s(4);
     let bezY1 = s(32);
     while (worm_row < s(1224)) {
          while (worm_column < DIM) {
               beginShape();
               curveVertex(int(srandom(0, 12) - bezX1) + worm_row, int(srandom(0, 24)) - bezY1 + worm_column);
               curveVertex(int(srandom(0, 24)) + worm_row, int(srandom(0, 24)) + worm_column);
               curveVertex(int(srandom(0, 26)) + worm_row, int(srandom(0, 24)) + worm_column);
               curveVertex(int(srandom(0, 32)) + worm_row, int(srandom(0, 24)) + worm_column);
               curveVertex(int(srandom(0, 36)) + bezX2 + worm_row, int(srandom(0, 24)) + bezY1 + worm_column);
               endShape();
               worm_column = worm_column + s(24);
          }
          worm_column = worm_column + s(158);
          worm_switch++;
          worm_row = worm_row + s(32);
          if (worm_switch % 2 == 0) {
               worm_column = 0;
          }
          if (worm_switch % 2 != 0) {
               worm_column = s(-79);
          }
          if (worm_switch % 3 == 0) {
               worm_column = s(-128);
          }
     }
}

function starscapebg(randomOffset4, randomOffset5) {
     bgType = "starscape";
     let starAmt = abs(randomOffset5) * 40;
     let bigBang = 0;
     let starPosX = random(0, DIM);
     let starPosY = random(0, DIM);
     let starSize = 1;
     noStroke();
     fill(255);
     background(0);
     while (bigBang < starAmt) {
          ellipse(starPosX, starPosY, starSize, starSize);
          starPosX = random(0, DIM);
          starPosY = random(0, DIM);
          starSize = starSize + 1;
          if (starSize > s(5)) {
               starSize = 1;
          }
          bigBang += 1;
     }
}

function sprinklesbg() {
     background(255);
     strokeCap(ROUND);
     strokeWeight(s(6));
     stroke(0);
     let sprinkle_column = 0;
     let sprinkle_row = 0;
     let sprinkle_switch = 0;
     while (sprinkle_row < (round(1.1953125 * DIM))) {
          while (sprinkle_column < DIM) {
               line(s(-6) + sprinkle_row, s(16) + sprinkle_column, s(4) + sprinkle_row, s(30) + sprinkle_column);
               line(s(-8) + sprinkle_row, s(48) + sprinkle_column, s(8) + sprinkle_row, s(48) + sprinkle_column);
               line(0 + sprinkle_row, s(72) + sprinkle_column, 0 + sprinkle_row, s(88) + sprinkle_column);
               line(s(4) + sprinkle_row, s(108) + sprinkle_column, s(-6) + sprinkle_row, s(124) + sprinkle_column);
               line(s(-8) + sprinkle_row, s(148) + sprinkle_column, s(8) + sprinkle_row, s(148) + sprinkle_column);
               sprinkle_column = sprinkle_column + s(158);
          }
          sprinkle_switch++;
          sprinkle_row = sprinkle_row + s(32);
          if (sprinkle_switch % 2 == 0) {
               sprinkle_column = 0;
          }
          if (sprinkle_switch % 2 != 0) {
               sprinkle_column = s(-79);
          }
          if (sprinkle_switch % 3 == 0) {
               sprinkle_column = s(-128);
          }
     }
     noStroke();
     fill('rgba(255,255,255, 0.85)');
     rect(0, 0, DIM, DIM);
}

function sprinklesGradientbg() {
     sprinkles_used = true;
     let sourceSprinklesGradient;
     let maskSprinkles;

     sourceSprinklesGradient = createGraphics(DIM, DIM);
     let x_lerp = 0;
     let y_lerp = 0;
     let w_lerp = DIM;
     let h_lerp = DIM;
     for (var i = y_lerp; i <= y_lerp + h_lerp; i++) {
          let inter = map(i, y_lerp, y_lerp + h_lerp, 0, 1);
          let c = lerpColor(clrs[0], clrs[1], inter);
          sourceSprinklesGradient.strokeWeight(2);
          sourceSprinklesGradient.stroke(c);
          sourceSprinklesGradient.line(x_lerp, i, x_lerp + w_lerp, i);
     }
     maskSprinkles = createGraphics(DIM, DIM);
     maskSprinkles.strokeCap(ROUND);
     maskSprinkles.strokeWeight(s(6));
     maskSprinkles.stroke(0);
     let sprinkle_column = 0;
     let sprinkle_row = 0;
     let sprinkle_switch = 0;
     while (sprinkle_row < (round(1.1953125 * DIM))) {
          while (sprinkle_column < DIM) {
               maskSprinkles.line(s(-6) + sprinkle_row, s(16) + sprinkle_column, s(4) + sprinkle_row, s(30) + sprinkle_column);
               maskSprinkles.line(s(-8) + sprinkle_row, s(48) + sprinkle_column, s(8) + sprinkle_row, s(48) + sprinkle_column);
               maskSprinkles.line(0 + sprinkle_row, s(72) + sprinkle_column, 0 + sprinkle_row, s(88) + sprinkle_column);
               maskSprinkles.line(s(4) + sprinkle_row, s(108) + sprinkle_column, s(-6) + sprinkle_row, s(124) + sprinkle_column);
               maskSprinkles.line(s(-8) + sprinkle_row, s(148) + sprinkle_column, s(8) + sprinkle_row, s(148) + sprinkle_column);
               sprinkle_column = sprinkle_column + s(158);
          }
          sprinkle_switch++;
          sprinkle_row = sprinkle_row + s(32);
          if (sprinkle_switch % 2 == 0) {
               sprinkle_column = 0;
          }
          if (sprinkle_switch % 2 != 0) {
               sprinkle_column = s(-79);
          }
          if (sprinkle_switch % 3 == 0) {
               sprinkle_column = s(-128);
          }
     }
     applyMask(sourceSprinklesGradient, maskSprinkles);
}

function applyMask(source, target) {
     let clone;
     (clone = source.get()).mask(target.get());
     image(clone, 0, 0);
}

function nonBGColor(i) {
     if (type == "light") {
          return clrs[i].toString() != globalWhite.toString() ? clrs[i] : clrs[(i + 1) % clrs.length];
     } else if (type == "dark") {
          return clrs[i].toString() != globalBlack.toString() ? clrs[i] : clrs[(i + 1) % clrs.length];
     }
     return clrs[i];
}

function diffColor(col, i) {
     return clrs[i].toString() != col.toString() ? clrs[i] : clrs[(i + 1) % clrs.length];
}

function getColor(i) {
     while (clrs[i].toString() == globalWhite.toString() || clrs[i].toString() == globalBlack.toString()) {
          i = (i + 1) % clrs.length;
     }
     return clrs[i];
}