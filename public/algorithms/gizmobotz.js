let hash = tokenData.hash;
S = Uint32Array.from([0, 1, s = t = 2, 3].map(i => parseInt(tokenData.hash.substr(i * 8 + 2, 8), 16)));
R = _ => (t = S[3], S[3] = S[2], S[2] = S[1], S[1] = s = S[0], t ^= t << 11, S[0] ^= (t ^ t >>> 8) ^ (s >>> 19), S[0] / 2 ** 32);
'tx piter'

let gStart = [];
let col = [];
var Gz = [];
var gInc = [];
var gCol = [];
var mover = .05;
var spacer = 0.3;function setup() {
     sD = Math.floor(Math.min(window.innerWidth, window.innerHeight)), createCanvas(sD, sD), colorMode(HSB, 360, 100, 100, 1), rectMode(CENTER), strokeWeight(.025 * sD), strokeCap(SQUARE), background(360, 0, 0), col = ["#ffcbbf", "#ff8000", "#d9943b", "#e8c251", "#fa0", "#acc700", "#aeff00", "#80ff00", "#cbffb3", "#c6d9c3", "#52cca3", "#ff0", "#00c254", "#19faaf", "#e8a7a7", "#0ff", "#73e5ff", "#0095f2", "#006fff", "#5177e8", "#adb2f7", "#20f", "#b999ff", "#b77ff0", "#a44aff", "#e5a8ed", "#e312d5", "#ff59d6", "#c24c8f", "#fa005c", "#d10026", "#f00"], v1 = createVector(0, 0), v2 = createVector(0, .25 * sD), v3 = createVector(0, .5 * sD), v4 = createVector(.25 * sD, 0), v5 = createVector(.25 * sD, .25 * sD), v6 = createVector(.25 * sD, .5 * sD), v7 = createVector(.5 * sD, 0), v8 = createVector(.5 * sD, .25 * sD), v9 = createVector(.5 * sD, .5 * sD), Gz = [Waterpump, Cyclotron, Conveyor, BoxDance, Tumblers, Giza, Lunar, Luxor, Trapeze, Lattitudes, Plus3, Bowtie, FourWalls, SquarePeg, Clockwork, Atomic, PolloLoco, Flo, Daddio, FourEyes, Spike, Wiperbot, Bloopy, Grimbot, PieFace, Bones, Vinyl, SquareDance, CircleDance, Twisty, Angrybot, GridFace], mxDev(Gz), mxcol(col), x1 = 0, x2 = .15 * sD, Wt1 = .001 * sD;
     let e = subset(Gz, 0, 9),
          o = subset(col, 0, 9);
}

function draw() {
     scale(4 / 3), push(), translate(v1), fill(col[0]), ellipse(.12 * sD, .12 * sD, .25 * sD), Gz[0](), pop(), push(), translate(v2), fill(col[1]), ellipse(.12 * sD, .12 * sD, .25 * sD), Gz[1](), pop(), push(), translate(v3), fill(col[2]), ellipse(.12 * sD, .12 * sD, .25 * sD), Gz[2](), pop(), push(), translate(v4), fill(col[3]), ellipse(.12 * sD, .12 * sD, .25 * sD), Gz[3](), pop(), push(), translate(v5), fill(col[4]), ellipse(.12 * sD, .12 * sD, .25 * sD), Gz[4](), pop(), push(), translate(v6), fill(col[5]), ellipse(.12 * sD, .12 * sD, .25 * sD), Gz[5](), pop(), push(), translate(v7), fill(col[6]), ellipse(.12 * sD, .12 * sD, .25 * sD), Gz[6](), pop(), push(), translate(v8), fill(col[7]), ellipse(.12 * sD, .12 * sD, .25 * sD), Gz[7](), pop(), push(), translate(v9), fill(col[8]), ellipse(.12 * sD, .12 * sD, .25 * sD), Gz[8](), pop(), push(), diamonds(), pop()
}

function mxDev(r) {
     for (var n, o, t = r.length; t;) o = Math.floor(R() * t--), n = r[t], r[t] = r[o], r[o] = n;
     return r
}

function mxcol(r) {
     for (var n, o, t = r.length; t;) o = Math.floor(R() * t--), n = r[t], r[t] = r[o], r[o] = n;
     return r
}

function Waterpump() {
     stroke("#000"), line(.18 * sD, 0, .18 * sD, .25 * sD), line(0, .17 * sD, .17 * sD, .17 * sD), line(0, .07 * sD, .25 * sD, .07 * sD), stroke(lerpColor(color("#02fcfc"), color(col[17]), millis() % 8500 / 8500)), strokeWeight(.01 * sD), line(.02 * sD, .17 * sD, .18 * sD, .17 * sD), line(.18 * sD, .165 * sD, .18 * sD, .215 * sD), strokeWeight(.025 * sD), stroke("#000"), push(), translate(.09 * sD, .17 * sD), rotate(radians(1.5 * frameCount)), fill(lerpColor(color("#ff0303"), color(col[12]), millis() % 8e3 / 8e3)), square(0, 0, .06 * sD), pop()
}

function Cyclotron() {
     stroke("#000"), line(.18 * sD, 0, .18 * sD, .25 * sD), line(0, .17 * sD, .17 * sD, .17 * sD), line(0, .07 * sD, .25 * sD, .07 * sD), fill(lerpColor(color("#ff0303"), color(col[4]), millis() % 2e3 / 2e3)), square(.016 * sD, .12 * sD, .04 * sD), fill(lerpColor(color("#ff0303"), color(col[4]), millis() % 2200 / 2200)), square(.073 * sD, .12 * sD, .04 * sD), fill(lerpColor(color("#ff0303"), color(col[4]), millis() % 2300 / 2300)), square(.13 * sD, .12 * sD, .04 * sD), push(), translate(.12 * sD, .12 * sD), fill(col[6]), rotate(radians(8 * frameCount)), ellipse(.06 * sD, .06 * sD, .02 * sD, .02 * sD), pop()
}

function Conveyor() {
     stroke("#000"), line(.18 * sD, 0, .18 * sD, .18 * sD), line(.21 * sD, 0, .21 * sD, .22 * sD), line(0, .17 * sD, .19 * sD, .17 * sD), line(0, .17 * sD, .19 * sD, .17 * sD), line(0, .2 * sD, .25 * sD, .2 * sD), push(), translate(.09 * sD, .07 * sD), rotate(radians(frameCount)), fill(lerpColor(color("#ff0303"), color(col[15]), millis() % 6500 / 6500)), square(0, 0, .06 * sD), fill(lerpColor(color("#fff"), color(col[17]), millis() % 1500 / 1500)), ellipse(0, 0, .005 * sD), pop()
}

function BoxDance() {
     stroke("#000"), push(), translate(.075 * sD, .17 * sD), rotate(-radians(1.5 * frameCount)), fill(lerpColor(color("#ff0303"), color(col[12]), millis() % 7200 / 7200)), square(0, 0, .06 * sD), pop(), push(), translate(.165 * sD, .17 * sD), rotate(-radians(1.5 * frameCount)), fill(lerpColor(color("#ff0303"), color(col[13]), millis() % 7400 / 7400)), square(0, 0, .06 * sD), pop(), push(), translate(.075 * sD, .08 * sD), rotate(-radians(1.5 * frameCount)), fill(lerpColor(color("#ff0303"), color(col[14]), millis() % 7600 / 7600)), square(0, 0, .06 * sD), pop(), push(), translate(.165 * sD, .08 * sD), rotate(-radians(1.5 * frameCount)), fill(lerpColor(color("#ff0303"), color(col[15]), millis() % 7800 / 7800)), square(0, 0, .06 * sD), pop()
}

function Tumblers() {
     stroke("#000"), push(), noFill(), strokeWeight(.01 * sD), translate(.12 * sD, .12 * sD), rotate(radians(frameCount)), arc(0, 0, .2 * sD, .2 * sD, 0, PI + HALF_PI), rotate(radians(.2 * frameCount)), arc(0, 0, .17 * sD, .17 * sD, 0, PI + HALF_PI), rotate(radians(.3 * frameCount)), arc(0, 0, .14 * sD, .14 * sD, 0, PI + HALF_PI), rotate(radians(.4 * frameCount)), arc(0, 0, .11 * sD, .11 * sD, 0, PI + HALF_PI), rotate(radians(.5 * frameCount)), arc(0, 0, .08 * sD, .08 * sD, 0, PI + HALF_PI), rotate(radians(.6 * -frameCount)), arc(0, 0, .05 * sD, .05 * sD, 0, PI + HALF_PI), rotate(radians(.7 * -frameCount)), arc(0, 0, .02 * sD, .02 * sD, 0, PI + HALF_PI), pop()
}

function Giza() {
     stroke("#000"), push(), translate(.12 * sD, .12 * sD), rotate(radians(-frameCount)), strokeWeight(.005 * sD), line(-.125 * sD, 0, .125 * sD, 0), rotate(radians(.05 * -frameCount)), line(-.125 * sD, 0, .125 * sD, 0), rotate(radians(.05 * -frameCount)), line(-.125 * sD, 0, .125 * sD, 0), rotate(radians(.05 * -frameCount)), line(-.125 * sD, 0, .125 * sD, 0), rotate(radians(.05 * -frameCount)), line(-.125 * sD, 0, .125 * sD, 0), rotate(radians(.05 * -frameCount)), line(-.125 * sD, 0, .125 * sD, 0), rotate(radians(.05 * -frameCount)), line(-.125 * sD, 0, .125 * sD, 0), pop(), push(), fill(col[11]), strokeWeight(.01 * sD), triangle(.06 * sD, .17 * sD, .18 * sD, .17 * sD, .12 * sD, .065 * sD), line(.12 * sD, 0, .12 * sD, .04 * sD), line(.12 * sD, .2 * sD, .12 * sD, .25 * sD), fill(lerpColor(color("#fff"), color(col[10]), millis() % 2700 / 2700)), ellipse(.12 * sD, .135 * sD, .02 * sD, .02 * sD), pop(), push(), translate(.12 * sD, .12 * sD), rotate(radians(frameCount)), strokeWeight(.01 * sD), fill(col[14]), ellipse(.06 * sD, .06 * sD, .06 * sD, .06 * sD), pop()
}function Lunar() {
     stroke("#000"), line(.12 * sD, .05 * sD, .12 * sD, .25 * sD), line(0, .17 * sD, .25 * sD, .17 * sD), line(.12 * sD, 0, .12 * sD, .04 * sD), line(.12 * sD, .2 * sD, .12 * sD, .25 * sD), fill(lerpColor(color("#ff0303"), color(col[11]), millis() % 4700 / 4700)), ellipse(.12 * sD, .135 * sD, .1 * sD, .1 * sD), fill(lerpColor(color("#fff"), color(col[15]), millis() % 1500 / 1500)), ellipse(.12 * sD, .135 * sD, .04 * sD, .04 * sD), push(), translate(.12 * sD, .135 * sD), rotate(-radians(2 * frameCount)), ellipse(.055 * sD, .055 * sD, .03 * sD, .03 * sD), pop()
}

function Luxor() {
     stroke("#000"), line(.08 * sD, 0, .08 * sD, .14 * sD), line(.07 * sD, .2 * sD, .21 * sD, .2 * sD), fill(lerpColor(color("#ff0303"), color(col[8]), millis() % 4700 / 4700)), triangle(.12 * sD, .17 * sD, .2 * sD, .17 * sD, .16 * sD, .105 * sD), line(0, .07 * sD, .25 * sD, .07 * sD), push(), translate(.08 * sD, .07 * sD), rotate(-radians(frameCount)), line(.07 * -sD, 0, .07 * sD, 0), line(0, .07 * -sD, 0, .07 * sD), fill(lerpColor(color("#ff0303"), color(col[3]), millis() % 2700 / 2700)), ellipse(0, 0, .06 * sD, .06 * sD), pop()
}

function Trapeze() {
     stroke("#000"), push(), strokeWeight(.01 * sD), translate(.12 * sD, .12 * sD), rotate(radians(frameCount)), translate(0, 0), rotate(radians(2 * frameCount)), fill(lerpColor(color("#ff0303"), color(col[14]), millis() % 3500 / 3500)), ellipse(.015 * -sD, .015 * -sD, .04 * sD, .04 * sD), ellipse(.015 * sD, .015 * sD, .04 * sD, .04 * sD), push(), translate(-.05 * sD, -.05 * sD), rotate(radians(3 * frameCount)), ellipse(.013 * -sD, .013 * -sD, .02 * sD, .02 * sD), ellipse(.013 * sD, .013 * sD, .02 * sD, .02 * sD), pop(), push(), translate(.05 * sD, .05 * sD), rotate(radians(3 * frameCount)), ellipse(.013 * -sD, .013 * -sD, .02 * sD, .02 * sD), ellipse(.013 * sD, .013 * sD, .02 * sD, .02 * sD), pop(), pop()
}

function Lattitudes() {
     stroke("#000"), push(), strokeWeight(.01 * sD), fill(col[4]), translate(.12 * sD, .12 * sD), rotate(-radians(.25 * frameCount)), line(.05 * -sD, .09 * -sD, .05 * sD, .09 * -sD), rotate(-radians(.25 * frameCount)), line(.07 * -sD, .075 * -sD, .07 * sD, .075 * -sD), rotate(-radians(.25 * frameCount)), line(.09 * -sD, .06 * -sD, .09 * sD, .06 * -sD), rotate(-radians(.25 * frameCount)), line(.0975 * -sD, .045 * -sD, .0975 * sD, .045 * -sD), rotate(-radians(.25 * frameCount)), line(.105 * -sD, .03 * -sD, .105 * sD, .03 * -sD), rotate(-radians(.25 * frameCount)), line(.1075 * -sD, .015 * -sD, .1075 * sD, .015 * -sD), rotate(-radians(.25 * frameCount)), line(.11 * -sD, 0, .11 * sD, 0), rotate(-radians(.25 * frameCount)), line(.1075 * -sD, .015 * sD, .1075 * sD, .015 * sD), rotate(-radians(.25 * frameCount)), line(.105 * -sD, .03 * sD, .105 * sD, .03 * sD), rotate(-radians(.25 * frameCount)), line(.0975 * -sD, .045 * sD, .0975 * sD, .045 * sD), rotate(-radians(.25 * frameCount)), line(.09 * -sD, .06 * sD, .09 * sD, .06 * sD), rotate(-radians(.25 * frameCount)), line(.07 * -sD, .075 * sD, .07 * sD, .075 * sD), rotate(-radians(.25 * frameCount)), line(.05 * -sD, .09 * sD, .05 * sD, .09 * sD), pop()
}

function Plus3() {
     stroke("#000"), push(), translate(.12 * sD, .12 * sD), rotate(-radians(frameCount)), line(.06 * -sD, 0, .04 * -sD, 0), line(0, .06 * -sD, 0, .04 * -sD), line(.06 * sD, 0, .04 * sD, 0), line(0, .06 * sD, 0, .04 * sD), rotate(radians(2 * frameCount)), line(.03 * -sD, 0, .03 * sD, 0), line(0, .03 * -sD, 0, .03 * sD), rotate(radians(3 * -frameCount)), line(.1 * -sD, 0, .08 * -sD, 0), line(0, .1 * -sD, 0, .08 * -sD), line(.1 * sD, 0, .08 * sD, 0), line(0, .1 * sD, 0, .08 * sD), rotate(radians(.25 * frameCount)), line(.075 * -sD, 0, .065 * -sD, 0), line(0, .075 * -sD, 0, .065 * -sD), line(.075 * sD, 0, .065 * sD, 0), line(0, .075 * sD, 0, .065 * sD), pop()
}

function Bowtie() {
     stroke("#000"), push(), translate(.12 * sD, .12 * sD), rotate(radians(.5 * frameCount)), fill(lerpColor(color("#ff0303"), color(col[1]), millis() % 2500 / 2500)), triangle(0, 0, -.05 * sD, .04 * sD, .05 * sD, .04 * sD), rotate(-radians(.5 * frameCount)), triangle(0, 0, -.05 * sD, .04 * sD, .05 * sD, .04 * sD), rotate(-radians(.5 * frameCount)), triangle(0, 0, -.05 * sD, -.04 * sD, .05 * sD, -.04 * sD), rotate(-radians(.5 * frameCount)), triangle(0, 0, -.05 * sD, -.04 * sD, .05 * sD, -.04 * sD), rotate(radians(-.75 * frameCount)), line(0, .1 * -sD, 0, .08 * -sD), line(0, .1 * sD, 0, .08 * sD), pop()
}

function FourWalls() {
     stroke("#000"), push(), translate(.12 * sD, .12 * sD), rotate(radians(.5 * frameCount)), fill(lerpColor(color("#ff0303"), color(col[4]), millis() % 2500 / 2500)), rect(0, 0, .13 * sD, .13 * sD), rotate(radians(.5 * frameCount)), fill(lerpColor(color("#ff0303"), color(col[5]), millis() % 4700 / 4700)), rect(0, 0, .05 * sD, .05 * sD), pop()
}

function SquarePeg() {
     stroke("#000"), push(), translate(.12 * sD, .12 * sD), rotate(radians(frameCount)), fill(lerpColor(color("#ff0303"), color(col[0]), millis() % 1700 / 1700)), ellipse(.03 * sD, .03 * sD, .115 * sD, .115 * sD), push(), translate(.03 * sD, .03 * sD), rotate(-radians(4 * -frameCount)), fill(lerpColor(color("#ff0303"), color(col[1]), millis() % 2e3 / 2e3)), rect(0, 0, .035 * sD, .035 * sD), pop(), translate(-.05 * sD, -.05 * sD), rotate(-radians(4 * frameCount)), rect(0, 0, .035 * sD, .035 * sD), pop()
}

function Clockwork() {
     stroke("#000"), push(), strokeWeight(.01 * sD), translate(.12 * sD, .12 * sD), rotate(radians(.1 * frameCount)), line(0, 0, .05 * sD, .05 * sD), rotate(-radians(12 * -frameCount * .1)), fill(lerpColor(color("#ff0303"), color(col[8]), millis() % 7500 / 7500)), line(0, 0, .08 * sD, .08 * sD), ellipse(0, 0, .03 * sD, .03 * sD), fill(lerpColor(color("#ff0303"), color(col[7]), millis() % 7e3 / 7e3)), rotate(radians(-.05 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(-.05 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(-.05 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(-.05 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(-.05 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(-.05 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(-.05 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(-.05 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(-.05 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(-.05 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(-.05 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(-.05 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), pop()
}function Atomic() {
     stroke("#000"), push(), strokeWeight(.01 * sD), translate(.12 * sD, .12 * sD), rotate(radians(.1 * frameCount)), fill(col[5]), rotate(-radians(12 * -frameCount * .1)), fill(lerpColor(color("#fff"), color(col[5]), millis() % 3200 / 3200)), ellipse(0, 0, .03 * sD, .2 * sD), rotate(PI / 3), fill(lerpColor(color("#fff"), color(col[6]), millis() % 3300 / 3300)), ellipse(0, 0, .03 * sD, .2 * sD), fill(lerpColor(color("#fff"), color(col[7]), millis() % 3400 / 3400)), rotate(PI / 3), ellipse(0, 0, .03 * sD, .2 * sD), rotate(radians(-1 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(-.5 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(-.5 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(3.5 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(.5 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), rotate(radians(.5 * frameCount)), ellipse(.065 * sD, .065 * sD, .015 * sD, .015 * sD), pop()
}

function PolloLoco() {
     stroke("#000"), triangle(.0975 * sD, 0, .1025 * sD, 0, .1 * sD, .003 * sD), triangle(.1175 * sD, 0, .1225 * sD, 0, .12 * sD, .005 * sD), triangle(.1375 * sD, 0, .1425 * sD, 0, .14 * sD, .003 * sD), fill(lerpColor(color("#ff0303"), color(col[8]), millis() % 3600 / 3600)), ellipse(.07 * sD, .08 * sD, .1 * sD, .1 * sD), fill(lerpColor(color("#ff0303"), color(col[9]), millis() % 4700 / 4700)), ellipse(.17 * sD, .08 * sD, .1 * sD, .1 * sD), triangle(.11 * sD, .15 * sD, .13 * sD, .15 * sD, .12 * sD, .17 * sD), push(), translate(.07 * sD, .08 * sD), fill(125, 0, 0), ellipse(0, 0, .03 * sD, .001 * sD), pop(), translate(.17 * sD, .08 * sD), rotate(radians(4 * frameCount)), fill(125, 0, 0), ellipse(.015 * sD, 0, .018 * sD, .018 * sD)
}

function Flo() {
     stroke("#000"), line(.07 * sD, 0, .07 * sD, .18 * sD), line(.06 * sD, .17 * sD, .15 * sD, .17 * sD), line(.16 * sD, .17 * sD, .18 * sD, .17 * sD), line(.19 * sD, .17 * sD, .21 * sD, .17 * sD), line(0, .07 * sD, .27 * sD, .07 * sD), line(0, .09 * sD, .05 * sD, .09 * sD), line(0, .125 * sD, .05 * sD, .125 * sD), line(.07 * sD, .2 * sD, .21 * sD, .2 * sD), fill(lerpColor(color("#ff0303"), color(col[9]), millis() % 2900 / 2900)), ellipse(.15 * sD, .1 * sD, .06 * sD, .06 * sD), push(), translate(.15 * sD, .1 * sD), rotate(-radians(6 * frameCount)), ellipse(0, 0, .01 * sD, 15e-5 * sD), pop()
}

function Daddio() {
     stroke("#000"), line(.12 * sD, .05 * sD, .12 * sD, .15 * sD), line(.12 * sD, .19 * sD, .12 * sD, .22 * sD), line(.06 * sD, .17 * sD, .25 * sD, .17 * sD), fill(lerpColor(color("#ff0303"), color(col[9]), millis() % 7e3 / 7e3)), ellipse(.07 * sD, .08 * sD, .06 * sD, .06 * sD), ellipse(.17 * sD, .08 * sD, .06 * sD, .06 * sD), line(.1 * sD, .02 * sD, .1 * sD, .04 * sD), line(.14 * sD, .02 * sD, .14 * sD, .04 * sD), push(), translate(.07 * sD, .08 * sD), rotate(-radians(6 * frameCount)), ellipse(0, 0, .01 * sD, 15e-5 * sD), pop(), translate(.17 * sD, .08 * sD), rotate(radians(16 * frameCount)), ellipse(0, 0, .01 * sD, 15e-5 * sD)
}

function FourEyes() {
     stroke("#000"), strokeWeight(.01 * sD), line(.07 * sD, .2 * sD, .21 * sD, .2 * sD), push(), strokeWeight(.01 * sD), line(0, .07 * sD, .27 * sD, .07 * sD), fill(lerpColor(color("#ff0303"), color(col[9]), millis() % 4700 / 4700)), ellipse(.08 * sD, .07 * sD, .06 * sD, .06 * sD), ellipse(.16 * sD, .07 * sD, .06 * sD, .06 * sD), ellipse(.085 * sD, .075 * sD, .002 * sD, .002 * sD), ellipse(.165 * sD, .075 * sD, .002 * sD, .002 * sD), pop(), push(), translate(.12 * sD, .14 * sD), rotate(radians(10 * frameCount)), ellipse(.01 * -sD, .016 * -sD, .005 * sD, .005 * sD), ellipse(.01 * sD, .016 * sD, .005 * sD, .005 * sD), pop()
}

function Spike() {
     stroke("#000"), line(.1 * sD, .06 * sD, .1 * sD, .18 * sD), line(.07 * sD, .2 * sD, .21 * sD, .2 * sD), line(.09 * sD, .07 * sD, .21 * sD, .07 * sD), fill(lerpColor(color("#ff0303"), color(col[22]), millis() % 5700 / 5700)), ellipse(.05 * sD, .13 * sD, .06 * sD, .06 * sD), push(), translate(.16 * sD, .13 * sD), rotate(-radians(frameCount)), line(.03 * -sD, 0, .03 * sD, 0), line(0, .03 * -sD, 0, .03 * sD), pop(), push(), translate(.05 * sD, .13 * sD), strokeWeight(.02 * sD), rotate(radians(3 * frameCount)), line(.01 * -sD, 0, .01 * sD, 0), pop(), push(), stroke(lerpColor(color("#ff0303"), color(col[25]), millis() % 4700 / 4700)), triangle(.11 * sD, .01 * sD, .13 * sD, .01 * sD, .12 * sD, .025 * sD), pop()
}

function Wiperbot() {
     fill(col[23]), ellipse(.12 * sD, .12 * sD, .25 * sD), stroke("#000"), push(), translate(.08 * sD, .08 * sD), strokeWeight(.005 * sD), fill(360, 0, 100), ellipse(0, 0, .05 * sD, .05 * sD), rotate(radians(10 * frameCount)), line(0, 0, .04 * sD, .04 * sD), push(), translate(.04 * sD, .04 * sD), rotate(radians(10 * -frameCount)), line(.015 * -sD, 0, .015 * sD, 0), pop(), rotate(radians(20 * -frameCount)), fill(lerpColor(color("#ff0303"), color(col[22]), millis() % 4700 / 4700)), ellipse(.005 * sD, -.012 * sD, .015 * sD, .015 * sD), pop(), push(), translate(.16 * sD, .08 * sD), strokeWeight(.005 * sD), fill(360, 0, 100), ellipse(0, 0, .05 * sD, .05 * sD), rotate(radians(4 * frameCount)), line(0, 0, .04 * sD, .04 * sD), push(), translate(.04 * sD, .04 * sD), rotate(radians(4 * -frameCount)), line(.015 * -sD, 0, .015 * sD, 0), pop(), rotate(radians(8 * -frameCount)), fill(lerpColor(color("#ff0303"), color(col[22]), millis() % 4700 / 4700)), ellipse(.005 * sD, -.012 * sD, .015 * sD, .015 * sD), pop(), strokeWeight(.005 * sD), line(x1, .17 * sD, x1 + .1 * sD, .17 * sD), x1 += .01 * sD, x1 > .15 * sD && (x1 = 0), line(x2, .18 * sD, x1 + .15 * sD, .18 * sD), x2 -= .01 * sD, x2 < 0 && (x2 = .15 * sD), push(), translate(.12 * sD, .12 * sD), rotate(radians(frameCount)), fill(lerpColor(color("#ff0303"), color(col[20]), millis() % 700 / 700)), triangle(.01 * -sD, .01 * sD, .01 * sD, .01 * sD, 0, .01 * -sD), pop()
}

function Bloopy() {
     stroke("#000"), push(), strokeWeight(.005 * sD), line(.12 * sD, .05 * sD, .12 * sD, .18 * sD), line(.05 * sD, .06 * sD, .12 * sD, .04 * sD), line(.14 * sD, .04 * sD, .18 * sD, .06 * sD), push(), translate(.155 * sD, .09 * sD), rotate(-radians(2 * frameCount)), strokeWeight(.015 * sD), line(-.025 * sD, 0, .025 * sD, 0), line(0, -.025 * sD, 0, .025 * sD), pop(), push(), translate(.09 * sD, .09 * sD), rotate(-radians(2 * -frameCount)), strokeWeight(.015 * sD), line(-.025 * sD, 0, .025 * sD, 0), line(0, -.025 * sD, 0, .025 * sD), pop(), stroke(360, 0, 100), fill(360, 100, 100), ellipse(.12 * sD, .19 * sD, .1 * sD, .025 * sD), line(.08 * sD, .19 * sD, .16 * sD, .19 * sD), ellipse(.06 * sD, .12 * sD, .025 * sD, .025 * sD), ellipse(.185 * sD, .12 * sD, .025 * sD, .025 * sD), fill(lerpColor(color("#ff0303"), color(col[11]), millis() % 5e3 / 5e3)), ellipse(.12 * sD, .15 * sD, .05 * sD, .05 * sD), pop()
}

function Grimbot() {
     stroke("#000"), push(), strokeWeight(.005 * sD), fill(360, 100, 100), translate(.09 * sD, .09 * sD), ellipse(0, 0, .06 * sD, .06 * sD), fill(360, 0, 100), ellipse(0, 0, .02 * sD, .02 * sD), pop(), push(), strokeWeight(.005 * sD), fill(360, 100, 100), translate(.15 * sD, .09 * sD), ellipse(0, 0, .06 * sD, .06 * sD), fill(360, 0, 100), ellipse(0, 0, .02 * sD, .02 * sD), pop(), push(), translate(.12 * sD, .15 * sD), strokeWeight(.005 * sD), fill(360, 0, 100), rect(0, 0, .1 * sD, .04 * sD, 10), line(-.05 * sD, 0, .05 * sD, 0), line(-.01 * sD, -.02 * sD, -.01 * sD, .02 * sD), line(.01 * sD, -.02 * sD, .01 * sD, .02 * sD), line(-.03 * sD, -.02 * sD, -.03 * sD, .02 * sD), line(.03 * sD, -.02 * sD, .03 * sD, .02 * sD), pop(), push(), noFill(), strokeWeight(.01 * sD), translate(.12 * sD, .12 * sD), rotate(radians(frameCount)), arc(0, 0, .21 * sD, .21 * sD, 0, QUARTER_PI / 2), rotate(radians(.2 * frameCount)), arc(0, 0, .21 * sD, .2 * sD, 0, QUARTER_PI / 2), rotate(radians(.2 * frameCount)), arc(0, 0, .21 * sD, .2 * sD, 0, QUARTER_PI / 2), rotate(radians(.2 * frameCount)), arc(0, 0, .21 * sD, .2 * sD, 0, QUARTER_PI / 2), rotate(radians(.2 * frameCount)), arc(0, 0, .21 * sD, .2 * sD, 0, QUARTER_PI / 2), rotate(radians(.2 * frameCount)), arc(0, 0, .21 * sD, .2 * sD, 0, QUARTER_PI / 2), rotate(radians(.2 * frameCount)), arc(0, 0, .21 * sD, .2 * sD, 0, QUARTER_PI / 2), rotate(radians(.2 * frameCount)), arc(0, 0, .21 * sD, .2 * sD, 0, QUARTER_PI / 2), rotate(radians(.2 * frameCount)), arc(0, 0, .21 * sD, .2 * sD, 0, QUARTER_PI / 2), rotate(radians(.2 * frameCount)), arc(0, 0, .21 * sD, .2 * sD, 0, QUARTER_PI / 2), rotate(radians(.2 * frameCount)), arc(0, 0, .21 * sD, .2 * sD, 0, QUARTER_PI / 2), rotate(radians(.2 * frameCount)), arc(0, 0, .21 * sD, .2 * sD, 0, QUARTER_PI / 2), rotate(radians(.2 * frameCount)), arc(0, 0, .21 * sD, .2 * sD, 0, QUARTER_PI / 2), pop()
}

function PieFace() {
     stroke("#000"), push(), strokeWeight(Wt1), translate(.12 * sD, .12 * sD), push(), rotate(radians(3 * -frameCount)), line(-.125 * sD, 0, .125 * sD, 0), rotate(radians(.1 * -frameCount)), line(-.125 * sD, 0, .125 * sD, 0), rotate(radians(.1 * -frameCount)), line(-.125 * sD, 0, .125 * sD, 0), rotate(radians(.1 * -frameCount)), line(-.125 * sD, 0, .125 * sD, 0), rotate(radians(.1 * -frameCount)), line(-.125 * sD, 0, .125 * sD, 0), rotate(radians(.1 * -frameCount)), line(-.125 * sD, 0, .125 * sD, 0), rotate(radians(.1 * -frameCount)), line(-.125 * sD, 0, .125 * sD, 0), pop(), Wt1 < .03 * sD ? Wt1 += .001 * sD : Wt1 > .03 * sD && (Wt1 -= .001 * sD), pop(), push(), strokeWeight(.005 * sD), fill(160, 100, 100), translate(.09 * sD, .11 * sD), ellipse(0, 0, .06 * sD, .06 * sD), fill(360, 100, 0), ellipse(0, 0, .05 * sD, .02 * sD), pop(), push(), strokeWeight(.005 * sD), fill(160, 100, 100), translate(.15 * sD, .11 * sD), ellipse(0, 0, .06 * sD, .06 * sD), fill(360, 100, 0), ellipse(0, 0, .05 * sD, .02 * sD), pop(), push(), strokeWeight(.005 * sD), fill(lerpColor(color("#ff0303"), color(col[16]), millis() % 6e3 / 6e3)), ellipse(.12 * sD, .15 * sD, .05 * sD, .05 * sD), fill(250, 50, 100), ellipse(.12 * sD, .19 * sD, .15 * sD, .025 * sD), line(.08 * sD, .19 * sD, .16 * sD, .19 * sD), pop()
}function Bones() {
     translate(.12 * sD, .12 * sD), push(), stroke("#fff"), fill("#fff"), strokeWeight(.004 * sD), rect(0, -.02 * sD, .08 * sD, .08 * sD, 20), rect(.005 * -sD, .015 * sD, -.005 * sD, .04 * sD, .5), rect(.005 * sD, .015 * sD, .005 * sD, .04 * sD, .5), rect(.015 * -sD, .015 * sD, -.005 * sD, .04 * sD, .5), rect(.015 * sD, .015 * sD, .005 * sD, .04 * sD, .5), rect(.005 * -sD, .043 * sD, -.005 * sD, .005 * sD, .5), rect(.005 * sD, .043 * sD, .005 * sD, .005 * sD, .5), rect(.015 * -sD, .043 * sD, -.005 * sD, .005 * sD, .5), rect(.015 * sD, .043 * sD, .005 * sD, .005 * sD, .5), strokeWeight(.005 * sD), line(.015 * -sD, .045 * sD, .015 * sD, .045 * sD), rotate(radians(-frameCount)), line(-.094 * sD, -.02 * sD, -.076 * sD, .02 * sD), ellipse(-.092 * sD, -.02 * sD, .005 * sD), ellipse(-.078 * sD, .02 * sD, .005 * sD), line(-.098 * sD, -.02 * sD, -.074 * sD, .02 * sD), ellipse(-.098 * sD, -.02 * sD, .005 * sD), ellipse(-.072 * sD, .02 * sD, .005 * sD), rotate(radians(.2 * -frameCount)), line(-.076 * sD, -.02 * sD, -.094 * sD, .02 * sD), ellipse(-.078 * sD, -.02 * sD, .005 * sD), ellipse(-.092 * sD, .02 * sD, .005 * sD), line(-.074 * sD, -.02 * sD, -.098 * sD, .02 * sD), ellipse(-.072 * sD, -.02 * sD, .005 * sD), ellipse(-.098 * sD, .02 * sD, .005 * sD), rotate(radians(.2 * -frameCount)), line(-.094 * sD, -.02 * sD, -.076 * sD, .02 * sD), ellipse(-.092 * sD, -.02 * sD, .005 * sD), ellipse(-.078 * sD, .02 * sD, .005 * sD), line(-.098 * sD, -.02 * sD, -.074 * sD, .02 * sD), ellipse(-.098 * sD, -.02 * sD, .005 * sD), ellipse(-.072 * sD, .02 * sD, .005 * sD), rotate(radians(.2 * -frameCount)), line(-.076 * sD, -.02 * sD, -.094 * sD, .02 * sD), ellipse(-.078 * sD, -.02 * sD, .005 * sD), ellipse(-.092 * sD, .02 * sD, .005 * sD), line(-.074 * sD, -.02 * sD, -.098 * sD, .02 * sD), ellipse(-.072 * sD, -.02 * sD, .005 * sD), ellipse(-.098 * sD, .02 * sD, .005 * sD), pop(), push(), strokeWeight(.002 * sD), fill("#000"), ellipse(.02 * -sD, .01 * -sD, .03 * sD), ellipse(.02 * sD, .01 * -sD, .03 * sD), ellipse(.002 * -sD, .01 * sD, .004 * sD), ellipse(.002 * sD, .01 * sD, .004 * sD), ellipse(0, .0075 * sD, .003 * sD), fill("#000"), push(), fill("#fff"), translate(.02 * -sD, .01 * -sD), rotate(radians(-frameCount)), fill(lerpColor(color("#fff"), color(col[19]), millis() % 4700 / 4700)), ellipse(.007 * -sD, 0, .015 * sD), pop(), push(), fill("#fff"), translate(.02 * sD, .01 * -sD), rotate(radians(-frameCount)), fill(lerpColor(color("#fff"), color(col[19]), millis() % 4700 / 4700)), ellipse(.007 * -sD, 0, .015 * sD), pop(), pop()
}

function Vinyl() {
     translate(.12 * sD, .12 * sD), ellipse(0, 0, .24 * sD), rotate(radians(frameCount)), push(), translate(.0015 * sD, .0015 * sD), strokeWeight(.002 * sD), stroke("#fff");
     for (var s = 0; s < .22 * sD; s += .02 * sD) noFill(), ellipse(0, 0, s, s);
     pop(), rotate(radians(frameCount)), push(), translate(.0015 * -sD, .0015 * -sD), strokeWeight(.002 * sD), stroke("#000");
     for (s = 0; s < .24 * sD; s += .02 * sD) noFill(), ellipse(0, 0, s, s);
     pop(), push(), strokeWeight(.002 * sD), fill(lerpColor(color("#9effea"), color(col[18]), millis() % 6700 / 6700)), ellipse(0, 0, .06 * sD), fill("#000"), ellipse(0, 0, .01 * sD), line(.02 * -sD, 0, .01 * -sD, 0), line(.02 * sD, 0, .01 * sD, 0), textSize(.0092 * sD), text("Ethereum", .02 * -sD, .012 * sD), text("Rocks", .012 * -sD, .019 * sD), textSize(.02 * sD), text("AB", .015 * -sD, -.008 * sD), pop()
}

function SquareDance() {
     translate(.12 * sD, .12 * sD), fill(0, 0, 100, .5), ellipse(0, 0, .25 * sD), rotate(PI / 3), rotate(radians(.5 * -frameCount)), push(), translate(.03 * -sD, .03 * -sD), strokeWeight(.002 * sD), stroke("#000");
     for (var s = 0; s < .12 * sD; s += .01 * sD) noFill(), push(), rotate(radians(.5 * frameCount)), square(0, 0, s), pop();
     pop(), push(), translate(.03 * sD, .03 * -sD), strokeWeight(.002 * sD), stroke("#000");
     for (var r = 0; r < .12 * sD; r += .01 * sD) noFill(), push(), rotate(radians(.5 * frameCount)), square(0, 0, r), pop();
     pop(), push(), translate(.03 * sD, .03 * sD), strokeWeight(.002 * sD), stroke("#000");
     for (var a = 0; a < .12 * sD; a += .01 * sD) noFill(), push(), rotate(radians(.5 * frameCount)), square(0, 0, a), pop();
     pop(), push(), translate(.03 * -sD, .03 * sD), strokeWeight(.002 * sD), stroke("#000");
     for (var t = 0; t < .12 * sD; t += .01 * sD) noFill(), push(), rotate(radians(.5 * frameCount)), square(0, 0, t), pop();
     pop()
}

function CircleDance() {
     translate(.12 * sD, .12 * sD), fill(0, 0, 100, .5), ellipse(0, 0, .25 * sD), rotate(PI / 3), rotate(radians(.7 * -frameCount)), push(), translate(.03 * -sD, .03 * -sD), strokeWeight(.002 * sD), stroke("#000");
     for (var s = 0; s < .14 * sD; s += .015 * sD) noFill(), push(), rotate(radians(.5 * frameCount)), ellipse(0, 0, s, s), pop();
     pop(), push(), translate(.03 * sD, .03 * -sD), strokeWeight(.002 * sD), stroke("#000");
     for (var e = 0; e < .14 * sD; e += .015 * sD) noFill(), push(), rotate(radians(.5 * frameCount)), ellipse(0, 0, e, e), pop();
     pop(), push(), translate(.03 * sD, .03 * sD), strokeWeight(.002 * sD), stroke("#000");
     for (var r = 0; r < .14 * sD; r += .015 * sD) noFill(), push(), rotate(radians(.5 * frameCount)), ellipse(0, 0, r, r), pop();
     pop(), push(), translate(.03 * -sD, .03 * sD), strokeWeight(.002 * sD), stroke("#000");
     for (var t = 0; t < .14 * sD; t += .015 * sD) noFill(), push(), rotate(radians(.5 * frameCount)), ellipse(0, 0, t, t), pop();
     pop(), push(), strokeWeight(.002 * sD), stroke("#000");
     for (var o = 0; o < .18 * sD; o += .015 * sD) noFill(), push(), rotate(radians(1.2 * frameCount)), square(0, 0, o), pop();
     pop()
}

function Twisty() {
     push(), strokeWeight(.005 * sD), fill("fff"), ellipse(.06 * sD, .12 * sD, .025 * sD, .025 * sD), ellipse(.18 * sD, .12 * sD, .025 * sD, .025 * sD), fill("#f9d7ea"), translate(.09 * sD, .07 * sD), ellipse(0, 0, .06 * sD, .1 * sD), rotate(radians(frameCount)), fill(360, 100, 0), ellipse(0, 0, .05 * sD, .02 * sD), pop(), push(), strokeWeight(.005 * sD), fill("#f9d7ea"), translate(.15 * sD, .07 * sD), ellipse(0, 0, .06 * sD, .1 * sD), rotate(radians(-frameCount)), fill(360, 100, 0), ellipse(0, 0, .05 * sD, .02 * sD), pop(), push(), strokeWeight(.005 * sD), fill(180, 100, 100), ellipse(.12 * sD, .13 * sD, .05 * sD, .05 * sD), fill(lerpColor(color("#f90702"), color(col[17]), millis() % 4700 / 4700)), ellipse(.12 * sD, .125 * sD, .05 * sD, .05 * sD), fill("#f90702"), rect(.12 * sD, .19 * sD, .12 * sD, .03 * sD), line(.08 * sD, .19 * sD, .16 * sD, .19 * sD), pop()
}

function Angrybot() {
     push(), strokeWeight(.001 * sD), translate(.12 * sD, .12 * sD), fill("#fff"), rect(0, .04 * sD, .16 * sD, .06 * sD, 20), rect(.04 * -sD, .035 * -sD, .08 * sD, .08 * sD, 20), rect(.04 * sD, .035 * -sD, .08 * sD, .08 * sD, 20), fill("#000"), rect(.04 * -sD, .035 * -sD, .06 * sD, .06 * sD, 10), rect(.04 * sD, .035 * -sD, .06 * sD, .06 * sD, 10), push(), translate(.04 * -sD, .035 * -sD), rotate(-radians(2 * -frameCount)), stroke(lerpColor(color("#f90702"), color(col[14]), millis() % 1500 / 1500)), strokeWeight(.015 * sD), line(-.025 * sD, 0, .025 * sD, 0), line(0, -.025 * sD, 0, .025 * sD), pop(), push(), translate(.04 * sD, .035 * -sD), rotate(-radians(2 * frameCount)), stroke(lerpColor(color("#f90702"), color(col[14]), millis() % 1500 / 1500)), strokeWeight(.015 * sD), line(-.025 * sD, 0, .025 * sD, 0), line(0, -.025 * sD, 0, .025 * sD), pop(), pop(), push();
     var s = map(0, 0, .12 * sD, 5e-4 * sD, .002 * sD);
     mover -= s, mover > TWO_PI && (mover = 0);
     for (var D = 5e-4 * sD, e = .06 * sD; e < .18 * sD; e += .001 * sD) {
          D += spacer;
          var r = cos(mover + D) * (.008 * sD);
          fill(255, 60), ellipse(e + 1e-4 * sD, .16 * sD - r, 5e-4 * sD, 5e-4 * -sD)
     }
     pop()
}

function GridFace() {
     push(), translate(.12 * sD, .12 * sD), fill(0, 0, 100, .5), ellipse(0, 0, .25 * sD), rotate(radians(.5 * -frameCount)), push(), translate(.01 * -sD, .01 * -sD), strokeWeight(.002 * sD), stroke("#000");
     for (var s = 0; s < .2 * sD; s += .01 * sD) noFill(), push(), rotate(radians(.5 * frameCount)), square(0, 0, s), pop();
     pop(), push(), translate(.01 * sD, .01 * -sD), strokeWeight(.002 * sD), stroke("#000");
     for (var e = 0; e < .2 * sD; e += .01 * sD) noFill(), push(), rotate(radians(.5 * frameCount)), square(0, 0, e), pop();
     pop(), push(), translate(.01 * sD, .01 * sD), strokeWeight(.002 * sD), stroke("#000");
     for (var D = 0; D < .2 * sD; D += .01 * sD) noFill(), push(), rotate(radians(.5 * frameCount)), square(0, 0, D), pop();
     pop(), push(), translate(.01 * -sD, .01 * sD), strokeWeight(.002 * sD), stroke("#000");
     for (var t = 0; t < .2 * sD; t += .01 * sD) noFill(), push(), rotate(radians(.5 * frameCount)), square(0, 0, t), pop();
     pop(), pop(), push(), stroke("#fff"), strokeWeight(.005 * sD), fill("#fff"), ellipse(.09 * sD, .07 * sD, .025 * sD, .07 * sD), ellipse(.15 * sD, .07 * sD, .025 * sD, .07 * sD), fill("#f9d7ea"), translate(.09 * sD, .07 * sD), ellipse(0, 0, .06 * sD, .02 * sD), pop(), push(), strokeWeight(.005 * sD), stroke("#fff"), fill("#f9d7ea"), translate(.15 * sD, .07 * sD), fill("#f9d7ea"), stroke("#fff"), ellipse(0, 0, .06 * sD, .02 * sD), pop(), push(), strokeWeight(.005 * sD), stroke("#fff"), fill(360, 30, 100, .5), ellipse(.12 * sD, .125 * sD, .04 * sD, .07 * sD), rect(.12 * sD, .19 * sD, .08 * sD, .05 * sD, 10), line(.1 * sD, .19 * sD, .14 * sD, .19 * sD), pop(), push(), stroke("#000"), strokeWeight(.005 * sD), fill("#fff"), ellipse(.09 * sD, .07 * sD, .005 * sD, .005 * sD), ellipse(.15 * sD, .07 * sD, .005 * sD, .005 * sD), pop()
}

function diamonds() {
     push(), translate(v5), cnctr(), pop(), push(), translate(v6), cnctr(), pop(), push(), translate(v8), cnctr(), pop(), push(), translate(v9), cnctr(), pop()
}

function cnctr() {
     rotate(15), strokeWeight(.002 * sD), stroke(360, 0, 50), line(.05 * -sD, 0, .05 * sD, 0), line(0, .05 * -sD, 0, .05 * sD), noFill(), ellipse(0, 0, .04 * sD), ellipse(0, 0, .06 * sD), noStroke(), fill(col[13]), square(0, 0, .02 * sD), fill("#000"), ellipse(0, 0, .0085 * sD), fill(lerpColor(color("#ff0303"), color(col[11]), millis() % 4e3 / 4e3)), ellipse(0, 0, .0085 * sD), fill(360, 100 * R(), 100 * R()), ellipse(.02 * -sD, 0, .006 * sD), ellipse(0, .02 * -sD, .006 * sD), ellipse(.02 * sD, 0, .006 * sD), ellipse(0, .02 * sD, .006 * sD)
}