function setup() {
     const e = Math.min(windowWidth, windowHeight);
     cnv = createCanvas(e, e), cnv.mouseClicked(controls), multiplier = width / 2400, frameRate(60), background(primary), rectMode(CENTER), drawCircuitGrid(), noLoop()
}

function controls() {
     "off" == state ? (background(primary), loop(), state = "on") : "on" == state ? (noLoop(), state = "paused") : "paused" == state && (background(primary), loop(), state = "on", setShadowContext())
}

function setGridSize() {
     let e, i, t, l = map(decPairs[0], 0, 255, 0, 100);
     return l <= 33 ? (gridArea = 60, i = 40, strokeWeight(3 * multiplier), t = 40, e = "Start Screen Grid Size: Small") : l > 33 && l <= 69 ? (gridArea = 240, strokeWeight(3 * multiplier), i = 10, t = 10, e = "Start Screen Grid Size: Medium") : l < 69 && l <= 84 ? (gridArea = 600, strokeWeight(3 * multiplier), i = 4, t = 4, e = "Start Screen Grid Size: Large") : (gridArea = 1200, strokeWeight(3 * multiplier), i = 2, t = 2, e = "Start Screen Grid Size: Large"), features.push(e), featuresReduced.push(e), [gridArea, i, t, e]
}

function getGridOutputs() {
     let e = setGridSize();
     gridArea = e[0], rMax = e[1], cMax = e[2]
}

function drawCircuitGrid() {
     getGridOutputs(), stroke(secondary), fill(primary);
     for (let e = 0; e < rMax; e++)
          for (let i = 0; i < cMax; i++) {
               let t, l, r, a, u, m, p, o = map(rnd(), 0, 1, 0, 100);
               o < 33 ? (t = 0 + i * gridArea * multiplier, l = 0 + e * gridArea * multiplier, r = gridArea * multiplier + i * gridArea * multiplier, a = gridArea * multiplier + e * gridArea * multiplier, line(t, l, r, a)) : o > 66 ? (t = gridArea * multiplier + i * gridArea * multiplier, l = gridArea * multiplier + e * gridArea * multiplier, r = gridArea * multiplier + i * gridArea * multiplier, a = 0 * multiplier + e * gridArea * multiplier, line(t, l, r, a)) : (u = gridArea / 2 * multiplier + i * gridArea * multiplier, m = gridArea / 2 * multiplier + e * gridArea * multiplier, p = gridArea / 4 * multiplier, circle(u, m, p))
          }
}

function setPalette() {
     let e, i, t, l, r, a = mapRange(decPairs[1], 0, 255, 1, 100);
     a <= 8 ? (e = "#eeeeee", i = "#111111", t = "#111111", l = "#eeeeee", r = "Light Palette") : a > 8 && a <= 16 ? (e = "#111111", i = "#eeeeee", t = "#111111", l = "#111111", r = "Dark Palette") : a > 16 && a <= 20 ? (e = "#127475", i = "#F5DFBB", t = "#111111", l = "#127457", r = "Emerald Palette") : a > 20 && a <= 25 ? (e = "#6f3ddb", i = "#c4c0ba", t = "#111111", l = "#111111", r = "Cream Palette") : a > 25 && a <= 30 ? (e = "#eeeeee", i = "#3786ad", t = "#111111", l = "#111111", r = "Sky Palette") : a > 30 && a <= 35 ? (e = "#eeeeee", i = "#b27077", t = "#eeeeee", l = "#eeeeee", r = "Rose Palette") : a > 35 && a <= 40 ? (e = "#B8C7C4", i = "#435060", t = "#111111", l = "#111111", r = "Overcast Palette") : a > 40 && a <= 45 ? (e = "#435060", i = "#CDD1C4", t = "#111111", l = "#111111", r = "Steel Palette") : a > 45 && a <= 50 ? (e = "#001427", i = "#F4D58D", t = "#111111", l = "#111111", r = "Jasmine Palette") : a > 50 && a <= 52 ? (e = "#41FF00", i = "#111111", t = "#41FF00", l = "#41FF00", r = "Terminal Palette") : a > 52 && a <= 57 ? (e = "#ED8B8A", i = "#0A2044", t = "white", l = "white", r = "Bubblegum Palette") : a > 57 && a <= 62 ? (e = "#BE00FF", i = "#FFFFFF", t = "#BE00FF", l = "#BE00FF", r = "Neon Palette") : a > 62 && a <= 67 ? (e = "#111111", i = "#4D8F88", t = "#111111", l = "#111111", r = "Ice Palette") : a > 67 && a <= 72 ? (e = "#ffebd8", i = "#516E5A", t = "#eeeeee", l = "#eeeeee", r = "Forest Palette") : a > 72 && a <= 76 ? (e = "#47383B", i = "#BCAF9F", t = "#BCAF9F", l = "#BCAF9F", r = "Adobe Palette") : a > 76 && a <= 82 ? (e = "#BCAF9F", i = "#322E3B", t = "#322E3B", l = "#eeeeee", r = "Muted Violet Palette") : a > 82 && a <= 85 ? (e = "#ffebd8", i = "#0b2a72", t = "#41FF00", l = "#41FF00", r = "Terminal Blue Palette") : a > 85 && a <= 90 ? (e = "#111111", i = "#F2B7C6", t = "#41FF00", l = "#41FF00", r = "Unicorn Palette") : a > 90 && a <= 95 ? (e = "#FFB697", i = "#404040", t = "#eeeeee", l = "#eeeeee", r = "Dusted Orange Palette") : (e = "#111111", i = "#FCEA08", t = "#111111", l = "#FCEA08", r = "Bumblebee Palette"), features.push("Color: " + r), featuresReduced.push("Color: " + r);
     let u = [e, i, t, l];
     return u
}

function drawAvatar() {
     function e() {
          let e = map(decPairs[2], 0, 255, 1, 16);
          for (let i = 0; i < e; i++) {
               blendMode(DIFFERENCE), rectMode(CENTER), strokeWeight(random(1, 12) * multiplier), stroke(avatarStroke), fill(avatarFill), t = map(decPairs[4 * i] || 0, 0, 255, 1920 * multiplier, 2225 * multiplier), l = map(decPairs[5 * i] || 0, 0, 255, height - 300 * multiplier, height - 480 * multiplier), r = map(decPairs[6 * i] || 0, 0, 255, 25 * multiplier, 75 * multiplier), a = map(decPairs[7 * i] || 0, 0, 255, 25 * multiplier, 75 * multiplier);
               let e = map(decPairs[8], 0, 255, 0 * multiplier, 25 * multiplier);
               rect(t, l, r, a, e), rect(4080 * multiplier - t, l, r, a, e)
          }
     }

     function i() {
          for (let e = 0; e < map(decPairs[8], 0, 255, 1, 10); e++) {
               strokeWeight(map(decPairs[9], 0, 255, 1 * multiplier, 3 * multiplier));
               let i = map(decPairs[10 + e], 0, 255, 1820 * multiplier, 2040 * multiplier),
                    t = map(decPairs[11 + e], 0, 255, 1880 * multiplier, 2040 * multiplier),
                    l = i,
                    r = 2040 * multiplier;
               line(i, t, l, r), line(4080 * multiplier - i, t, 4080 * multiplier - l, r), line(i, 4080 * multiplier - t, l, r), line(4080 * multiplier - i, 4080 * multiplier - t, 4080 * multiplier - l, r), i = map(decPairs[12 + e], 0, 255, 1840 * multiplier, 2040 * multiplier), t = map(decPairs[13 + e], 0, 255, 1840 * multiplier, 2040 * multiplier), l = 2040 * multiplier, r = t, line(i, t, l, r), line(4080 * multiplier - i, t, 4080 * multiplier - l, r), line(i, 4080 * multiplier - t, l, 4080 * multiplier - r), line(4080 * multiplier - i, 4080 * multiplier - t, 4080 * multiplier - l, 4080 * multiplier - r)
          }
     }
     let t, l, r, a;
     e(), blendMode(BLEND), n = map(decPairs[14], 0, 255, 0, 99), n < 40 ? stroke(secondary) : stroke(primary), i()
}

function mapRange(e, i, t, l, r) {
     return e = (e - i) / (t - i), l + e * (r - l)
}

function drawImage() {
     function e() {
          let e = color(secondary);
          e.setAlpha(10), stroke(e), strokeWeight(1 * multiplier)
     }

     function i() {
          e();
          for (let e = 0; e < 15; e++) D = 200 * multiplier, W = Math.cos(.001 * millis()), G = 500 * multiplier, z = 1.1 * e * multiplier, circle(g, B, D + W * G + z)
     }

     function l() {
          e();
          for (let e = 0; e < 15; e++) D = 200 * multiplier, W = Math.cos(.001 * millis()), G = 500 * multiplier, z = 1.1 * e * multiplier, circle(g, B, D + W * G + z), D = 100 * multiplier, W = Math.cos(.001 * millis()), G = 250 * multiplier, z = 1.1 * e * multiplier, square(g, B, D + W * G + z)
     }

     function r() {
          e();
          for (let e = 0; e < 15; e++) D = 100 * multiplier, W = Math.tan(.01 * millis()), G = 0 * multiplier, z = 2 * e * multiplier, circle(g, B, D + W * G + z), circle(P, C, D + W * G + z), circle(F, y, D + W * G + z), D = 0 * multiplier, W = Math.cos(.005 * millis()), G = 40 * multiplier, z = 1 * e * multiplier, triangle(g, B, P, C, F, y + D + W * G + z)
     }

     function a() {
          e();
          for (let e = 0; e < 15; e++) D = 0 * multiplier, W = Math.cos(.001 * millis()), G = 100 * multiplier, z = 1 * e * multiplier, circle(g, B, D + W * G + z), circle(P, C, D + W * G + z), circle(F, y, D + W * G + z), D = 0 * multiplier, W = Math.cos(.005 * millis()), G = 40 * multiplier, z = 2 * e * multiplier, triangle(g, B, P, C, F, y + D + W * G + z)
     }

     function u() {
          e();
          for (let e = 0; e < 20; e++) D = 0 * multiplier, W = Math.tan(1e-4 * millis()), G = 10 * multiplier, z = 4 * e * multiplier, line(g, B, P, C, F, y + D + W * G + z), D = 0 * multiplier, W = Math.cos(.001 * millis()), G = 20 * multiplier, z = 1 * e * multiplier, circle(g, B, w + D + W * G + z)
     }

     function m() {
          e();
          for (let e = 0; e < 20; e++) D = 0 * multiplier, W = Math.sin(1e-4 * millis()), G = 10 * multiplier, z = 4 * e * multiplier, line(g, B, P, C + D + W * G + z), D = 0 * multiplier, W = Math.cos(.001 * millis()), G = 2 * multiplier, z = 8 * e * multiplier, line(w, E, F, y)
     }

     function p() {
          e();
          for (let e = 0; e < 15; e++) D = 0 * multiplier, W = Math.tan(.01 * millis()), G = 50 * multiplier, z = 2 * e * multiplier, circle(g, B, D + W * G + z), circle(P, C, D + W * G + z), circle(F, y, D + W * G + z), D = 0 * multiplier, W = Math.cos(.005 * millis()), G = 40 * multiplier, z = 1 * e * multiplier, triangle(g, B, P, C, F, y + D + W * G + z)
     }

     function o() {
          e();
          for (let e = 0; e < 20; e++) D = 0 * multiplier, W = Math.tan(3e-4 * millis()), G = 500 * multiplier, z = 2 * e * multiplier, circle(g, B, D + W * G + z)
     }

     function n() {
          e();
          for (let e = 0; e < 20; e++) D = 0 * multiplier, W = Math.sin(.001 * millis()), G = 20 * multiplier, z = 1.1 * e * multiplier, line(g, B, P, C + D + W * G + z), line(g, B, F, y + D + W * G + z), line(g, B, w, E + D + W * G + z)
     }

     function s() {
          e();
          for (let e = 0; e < 10; e++) D = 100 * multiplier, W = Math.tan(.01 * millis()), G = 10 * multiplier, z = 1 * e * multiplier, circle(g, B, D + W * G + z), circle(P, C, D + W * G + z), circle(F, y, D + W * G + z), D = 0 * multiplier, W = Math.cos(.005 * millis()), G = 40 * multiplier, z = 1 * e * multiplier, triangle(g, B, P, C, F, y + D + W * G + z)
     }

     function c() {
          e();
          for (let e = 0; e < 10; e++) D = 0 * multiplier, W = Math.tan(.01 * millis()), G = 10 * multiplier, z = 2 * e * multiplier, circle(S, v, D + W * G + z), circle(A, b, D + W * G + z), circle(k, x, D + W * G + z), circle(M, R, D + W * G + z)
     }

     function d() {
          e();
          for (let e = 0; e < 15; e++) D = 0 * multiplier, W = Math.cos(.01 * millis()), G = 20 * multiplier, z = 1 * e * multiplier, ellipse(S, v, D + W * G + z), ellipse(A, b, D + W * G + z), ellipse(k, x, D + W * G + z), ellipse(M, R, D + W * G + z)
     }

     function h() {
          e();
          for (let e = 0; e < 15; e++) D = 200 * multiplier, W = Math.cos(5e-4 * millis()), G = 1e3 * multiplier, z = 100 * e * multiplier, circle(g, B, D + W * G - z)
     }

     function f() {
          return "none"
     }
     var g = width * noise(t + 100 * multiplier),
          P = width * noise(t + 200 * multiplier),
          F = width * noise(t + 300 * multiplier),
          w = width * noise(t + 400 * multiplier),
          S = width * noise(t + 500 * multiplier),
          A = width * noise(t + 600 * multiplier),
          k = width * noise(t + 700 * multiplier),
          M = width * noise(t + 800 * multiplier),
          B = height * noise(t + 900 * multiplier),
          C = height * noise(t + 1e3 * multiplier),
          y = height * noise(t + 1100 * multiplier),
          E = height * noise(t + 1200 * multiplier),
          v = height * noise(t + 130 * multiplier),
          b = height * noise(t + 1400 * multiplier),
          x = height * noise(t + 1500 * multiplier),
          R = height * noise(t + 1600 * multiplier);
     let D, W, G, z, I = featurePrimaryBrushStroke,
          L = featureSecondaryBrushStroke,
          O = [i, l, r, a, u, m, p, o, n, s],
          N = [c, d, h, f];
     t += map(decPairs[17], 0, 255, .001, .005), stroke(secondary), noFill(), O[I](), N[L]()
}

function draw() {
     frameCount <= 2 && setShadowContext(), noFill(), resetMatrix(), frameCount > 1 && drawImage(), stroke(secondary), strokeWeight(360 * multiplier), rect(width / 2, height / 2, width, height), stroke(secondary), strokeWeight(40 * multiplier), strokeWeight(10 * multiplier), fill(secondary), stroke(primary), circle(width - 360 * multiplier, height - 360 * multiplier, width / 4), revertShadowContext(), randomSeed(avatarSeed), drawAvatar()
}

function setShadowContext() {
     drawingContext.shadowBlur = 40 * multiplier, drawingContext.shadowColor = secondary
}

function revertShadowContext() {
     drawingContext.shadowOffsetX = 0, drawingContext.shadowOffsetY = 0, drawingContext.shadowBlur = 0
}

function rnd() {
     return seed ^= seed << 13, seed ^= seed >> 17, seed ^= seed << 5, (seed < 0 ? 1 + ~seed : seed) % 1e6 / 1e6
}
let hashPairs = [];
for (let e = 0; e < 32; e++) hashPairs.push(tokenData.hash.slice(2 + 2 * e, 4 + 2 * e));
let seed = parseInt(tokenData.hash.slice(48, 64), 16),
     decPairs = hashPairs.map(e => parseInt(e, 16));
var multiplier, cnv, gridArea = 60,
     primary = "#111111",
     secondary = "#eeeeee",
     features = [],
     featuresReduced = [];
let palette = setPalette();
primary = palette[0], secondary = palette[1];
let t, avatarStroke = palette[2],
     avatarFill = palette[3],
     state = "off";
t = 0;
let featurePrimaryBrushStroke = Math.floor(mapRange(decPairs[15], 0, 255, 0, 9)),
     featureSecondaryBrushStroke = Math.floor(mapRange(decPairs[16], 0, 255, 0, 3));
features.push("Primary Brush Variant: " + featurePrimaryBrushStroke), featuresReduced.push("Primary Brush Variant: " + featurePrimaryBrushStroke), features.push("Secondary Brush Variant: " + featureSecondaryBrushStroke), featuresReduced.push("Secondary Brush Variant: " + featureSecondaryBrushStroke);
let avatarSeed = Math.floor(decPairs[18], 0, 255, 1, 1e4);