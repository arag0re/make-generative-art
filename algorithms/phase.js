const hashPairs=[];for(let e=0;e<32;e++)hashPairs.push(tokenData.hash.slice(2+2*e,4+2*e));const decPairs=hashPairs.map(e=>parseInt(e,16));var baseHue=decPairs[0]/256,DEFAULT_SIZE=Math.pow(2,Math.floor(decPairs[31]/256*7)+4),DIM=Math.min(window.innerWidth,window.innerHeight),M=DIM/DEFAULT_SIZE,tick=0,canDraw=!0;const canvas=document.getElementsByTagName("canvas")[0];canvas.width=DIM,canvas.height=DIM;const gl=canvas.getContext("webgl"),positionsData=new Float32Array([1,1,-1,1,1,-1,-1,-1]),textureData=new Float32Array([1,1,0,1,1,0,0,0]);var texture=gl.createTexture();const targetTexture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,targetTexture),texBind();const targetTexture2=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,targetTexture2),texBind();const bT=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,bT),texBind();const cT=gl.createTexture();function texBind(){gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,DIM,DIM,0,gl.RGBA,gl.UNSIGNED_BYTE,null),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE),gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE)}gl.bindTexture(gl.TEXTURE_2D,cT),texBind();const fb=gl.createFramebuffer();gl.bindFramebuffer(gl.FRAMEBUFFER,fb);var attachmentPoint=gl.COLOR_ATTACHMENT0,level=0;gl.framebufferTexture2D(gl.FRAMEBUFFER,attachmentPoint,gl.TEXTURE_2D,targetTexture,level);let palettes=[["#f9de59","#e8a628","#f98365","#c33124","#a1dffb"],["#ff6d69","#fecc50","#0be7fb","#010b8b","#1e0521"],["#e9ff88","#fe0ab7","#e50185","#111010","#d0ccd1"],["#b3e7dc","#a6b401","#eff67b","#d50102","#6c0102"],["#007b00","#24e0b8","#ffcc51","#ff8b76","#ff3031"],["#a94300","#ffb000","#ffdf00","#5b9b37","#153d02"],["#a10532","#ff6fa9","#ffd0cc","#00b7cc","#005f81"],["#5fa55a","#01b4bc","#f6d51f","#fa8925","#fa5457"],["#631a11","#bb602f","#efd883","#cb8214","#444065"],["#30043d","#8e1f51","#e54059","#de837f","#fdb36a"],["#fffbc4","#b6bef6","#351ebf","#10015d","#0a0030"],["#8c0714","#fc407c","#1b4e88","#05081e","#faf0e4"],["#00003f","#01008e","#9001f5","#fe00ea","#ff0178"],["#082c44","#72eaf5","#fee6e2","#ffa94c","#fe2c89"],["#01638d","#abcecc","#fff2cd","#ff004c","#610d4b"],["#227dac","#443988","#9f0052","#ff3f20","#ffbe00"],["#81edf7","#00a4c0","#02748f","#f70110","#6e0516"],["#fffe01","#ff8606","#e83b36","#600538","#460a40"],["#333333","#cccccc","#303030","#dddddd","#000000"],["#D7005F","#D7D700","#262626","#AF005F","#00FFFF"],["#55FFFF","#FF55FF","#FFFF55","#AA0000","#0000AA"],["#AA00AA","#AA0000","#FFFF55","#AA5500","#00AA00"],["#AA0000","#AA0000","#FF5555","#FFFF55","#5555FF"],["#FF5555","#55FF55","#FFFF55","#555555","#55FFFF"],["#000000","#ff55ff","#55ffff","#ff00ff","#ffffff"],["#000000","#00aa00","#aa0000","#aa5500","#005500"]],pPool;pPool=DEFAULT_SIZE<=64?palettes.length:DEFAULT_SIZE<=256?palettes.length-3:palettes.length-7;let pID=Math.floor(decPairs[0]/256*pPool),palette=palettes[pID],phaseLevel=Math.floor(decPairs[15]/256*5),processedHues=[],processedSats=[],processedBrights=[],basicTiming=["ac += tick;","ac += tick * 2.0;"],cABP=["ac += 0.0;","ac += 0.0;","ac *= ps.x;","ac += ps.y;","ac += ps.x + ps.y;","ac += ps.x + ps.x;","ac += ps.y + ps.y;"],circA=["ac += 0.0;","ac += 0.0;","ac += dis / tick;","ac += 0.0;","ac += 0.0;","ac += tick / dis;","ac += 0.0;","ac += 0.0;","ac += 0.0;","ac *= tick / dis;","ac += 0.0;","ac += 0.0;","ac += 0.0;","ac *= dis;"],circB=["ac += 0.0;","ac += 0.0;","ac += 0.0;","ac += 0.0;","ac += 0.0;",`if (dis < fWMax / 2.) {
      ac += tick + ps.x;
    }
    else {
      ac /= dis;
    }
  `,"ac += 0.0;","ac += 0.0;","ac += 0.0;","ac += 0.0;","ac += 0.0;",`if (dis < fWMax * 2.) {
      ac += tick + ps.x;
    }
    else {
      ac /= dis;
    }
  `,`if (dis < fWMax / 2.0) {
      ac += (ps.x * ps.y) / fWMax + tick;
    }
    else {
      ac /= dis;
    }
  `,`if (dis < fWMax / 4.0) {
      ac += (ps.x * ps.y) / fWMax + tick;
    }
    else {
      ac /= dis;
    }
  `,"ac += 0.0;","ac += 0.0;",`if (dis < fWMax) {
      ac += (ps.x * ps.y) / fWMax + tick;
    }
    else {
      ac /= dis;
    }
  `,"ac += 0.0;"],sliceSizes=[".05",".1",".2",".25",".3333333",".5"],sliceTicks=["0.","tick/10.","tick/50.","tick/100.","tick/250.","tick/500.","tick/1000."],slices=["ac *= floor(((fWMax * oSS) + ps.x) / (fWMax * oSS)) + sT;","ac *= floor(((fWMax * oSS) + ps.y) / (fWMax * oSS)) + sT;","ac *= floor(((fWMax * oSS) + (ps.y * ps.x)) + (fWMax * oSS)) + sT;"],rSC=["ac *= ps.x + tick;","ac *= ps.y + tick;","ac *= floor(fWMax / ps.x) + tick;","ac *= fWMax - ps.y + tick;","ac *= ps.x / ps.y + tick;","ac *= ps.x + (tick / 2.0);","ac *= ps.x + ps.y / tick;","ac /= sqrt(ps.x * ps.y) + tick;","ac *= sqrt(ps.x * ps.y) - tick;"],dSC=["ac += abs((fWMax / 2.) - ps.x) + tick;","ac += abs((fWMax / 2.) + ps.x) + tick;","ac += abs((fWMax / 2.) - ps.y) + tick;","ac += abs((fWMax / 2.) + ps.y) + tick;","ac += abs((fWMax / 2.) / ps.y) + tick;","ac += abs((fWMax / 2.) / ps.x) + tick;","ac /= dis + tick;","ac /= dis + tick;"],dSC2=["ac *= dis / fWMax + (tick / .1); ","ac += dis / fWMax + (tick / .5); ","ac -= dis * fWMax + (tick / 2.); "],wp=["ac *= (floor(ps.x * ps.y) + tick)/2.;","ac *= (ps.x + tick) / 2.;","ac *= (floor(ps.x) * floor(ps.y)) / 2.;","ac *= (floor(ps.y) * floor(ps.y)) / 2.;","ac *= (floor((fWMax - ps.y) * ps.x) + tick) / 2.;","ac *= (floor((fWMax - ps.y) * (fWMax - ps.x)) + tick) / 2.;"],sectionSizes=[".1",".2",".25",".3333333"],rectSections=["","","",`if (ps.x >= min && ps.x <= max) {
    `+rSC[Math.floor(decPairs[13]/256*rSC.length)]+`
  }`,"","",`if (ps.y >= min && ps.y <= max) {
    `+rSC[Math.floor(decPairs[13]/256*rSC.length)]+`
  }`,"",""],xCO=["10.","100.","1000.","tick"],xC=["","if (fWMax - floor(ps.x) >= floor(ps.y)) {ac *=  "+gDR(xCO,18)+";}","","","","if (floor(ps.y) >= floor(ps.x)) {ac *= "+gDR(xCO,18)+";}","","","","if (floor(ps.x) >= floor(ps.y)) {ac *=  "+gDR(xCO,18)+";}","","","","if (floor(ps.x) >= floor(ps.y)) {ac *=  "+gDR(xCO,18)+`;}
   if (fWMax - floor(ps.x) >= floor(ps.y)) {ac *=  `+gDR(xCO,18)+`;}
  `,"","","",""];32==DEFAULT_SIZE&&7<decPairs[17]&&60<=decPairs[1]&&4==phaseLevel&&(xC=[""]);let movement=["ac *= floor(((fWMax * .4) + (ps.y * ps.x)) + (fWMax * .2)) + tick;","ac *= floor(((fWMax * .2) * ps.x) / (fWMax * .2));","ac *= ps.x + tick;","ac *= ps.y + tick;"],pf=["","","ac += (ps.x - ps.y) * (fWMax * "+gDR(sliceSizes,13)+") * (dis / tick);","","","ac -= (ps.x + ps.y) * (fWMax * "+gDR(sliceSizes,13)+") * (dis / tick);","","","ac += (ps.x + ps.y) * (fWMax * "+gDR(sliceSizes,13)+") / (dis - tick);","",""],st0=["ac += ","ac += fWMax * "],st1=["ps.x + ","ps.x - ","ps.y + ","ps.y - "],st2=["tick + ","tick * "],st3=["ps.x + fWMax;","ps.y + fWMax * 2.;","fWMax / 2.;"],ec=["ac += (fWMax - ps.x) + tick;","ac += ps.y + tick;","ac += (fWMax - ps.y) + tick;","ac += ps.y + tick;","ac -= (fWMax - ps.x) + tick;","ac -= ps.y + tick;","ac -= (fWMax - ps.y) + tick;","ac -= ps.y + tick;"],ps=["vec2 ps = st / M;","vec2 ps = vec2(fWMax - (st.x / M), st.y / M);","vec2 ps = vec2(st.x / M, fWMax - (st.y / M));","vec2 ps = vec2(fWMax - (st.y / M), st.x / M);","vec2 ps = vec2(st.y / M, fWMax - (st.x / M));","vec2 ps = vec2(st.y / M, st.x / M);","vec2 ps = fWMax - (st / M);"];32==DEFAULT_SIZE&&7<decPairs[17]&&60<=decPairs[1]&&4==phaseLevel&&(ps=["vec2 ps = vec2(st.x / M * 1.75, st.y / M);"]);let st=gDR(st0,28)+gDR(st1,29)+gDR(st2,30)+gDR(st3,31),useMovement=decPairs[0]>decPairs[30];function checkMovement(){return useMovement?gDR(wp,22):gDR(cABP,2)}let bVL=".075";2!=phaseLevel&&3!=phaseLevel||(bVL=.07);let centerPoint="vec2 centerPoint = vec2(fWMax * float("+decPairs[2]/256+"),fWMax * float("+decPairs[3]/256+"));",paletteOverride=130<decPairs[1]&&135<decPairs[11]&&140<decPairs[21],cP2="vec2 cP2 = vec2(fWMax * float("+decPairs[21]/256+"),fWMax * float("+decPairs[22]/256+"));",cal=!paletteOverride&&165<decPairs[10]&&165<decPairs[20]&&165<decPairs[30],kp=Math.floor(decPairs[25]/256*5),s=decPairs[25]/256*.8+.2,bOffset=Math.floor(decPairs[26]/256*20)+5;bOffset/=20;let rad="tColor /= "+(decPairs[21]/256*1.9+.8)+";";if(cal&&(rad="tColor /= "+(decPairs[21]/256*3.1+.15)+";"),paletteOverride)for(let t=0;t<5;t++){let e=1-t*bOffset;processedHues.push(Math.floor(100*baseHue)/100),processedSats.push(Math.floor(100*s)/100),processedBrights.push(Math.floor(100*e)/100)}else for(let t=0;t<palette.length;t++){let e=hexToHSV(palette[t]);cal&&t!=kp?(e.s=0,e.v=.0125*t):(cal&&t==kp&&(e.v=2),e.v=Math.min(Math.max(e.v,0),1)),processedHues.push(e.h),processedSats.push(e.s),processedBrights.push(e.v)}function gDI(e,t){return Math.floor(decPairs[t]/256*e.length)}function gDR(e,t){return e[gDI(e,t)]}processedHues.push(0),processedSats.push(0),processedBrights.push(cal?.3:.1);var paletteInit=`
const int paletteSize = 6;
uniform float hues[6];
uniform float sats[6];
uniform float brights[6];
`;let pL=Math.floor(decPairs[10]/256*2e3)+1e3;function hexToHSV(e){let t=0,r=0,a=0;4==e.length?(t="0x"+e[1]+e[1],r="0x"+e[2]+e[2],a="0x"+e[3]+e[3]):7==e.length&&(t="0x"+e[1]+e[2],r="0x"+e[3]+e[4],a="0x"+e[5]+e[6]),t/=255,r/=255,a/=255;let o=Math.min(t,r,a),c=Math.max(t,r,a),l=c-o,i=0,s=0,g=0;return i=0==l?0:c==t?(r-a)/l%6:c==r?(a-t)/l+2:(t-r)/l+4,i=Math.round(60*i),i<0&&(i+=360),i/=360,g=(c+o)/2,s=0==l?0:l/(1-Math.abs(2*g-1)),s=+s.toFixed(1),g=+g.toFixed(1),HSLtoHSV(i,s,g)}function HSLtoHSV(e,t,r){return 1===arguments.length&&(t=e.s,r=e.l,e=e.h),{h:e,s:(r*=2)+(t*=r<=1?r:2-r)==0?0:2*t/(r+t),v:(r+t)/2}}var gridOffset=decPairs[1]<30?"ps.x":decPairs[1]<60?"ps.y":"ps.x + ps.y",aDt={},bDt={},bDta={},compositeData={},fDt={};function compileShader(e,t){t=gl.createShader(t);if(gl.shaderSource(t,e),gl.compileShader(t),!gl.getShaderParameter(t,gl.COMPILE_STATUS))throw"Shader compile failed with: "+gl.getShaderInfoLog(t);return t}function drawArt(){gl.useProgram(aPg),gl.bindFramebuffer(gl.FRAMEBUFFER,fb),gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,targetTexture,level),gl.bindBuffer(gl.ARRAY_BUFFER,buffer),gl.vertexAttribPointer(aDt.positionAttribute,2,gl.FLOAT,!1,8,0),gl.enableVertexAttribArray(aDt.positionAttribute),gl.uniform1fv(aDt.hues,processedHues),gl.uniform1fv(aDt.sats,processedSats),gl.uniform1fv(aDt.brights,processedBrights),gl.uniform1f(aDt.tickSet,tick),gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,texture),gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}function blurArt(e,t,r){gl.useProgram(blPg),gl.bindFramebuffer(gl.FRAMEBUFFER,fb),gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,t,level);t=gl.FLOAT;gl.bindBuffer(gl.ARRAY_BUFFER,buffer),gl.vertexAttribPointer(bDt.positionAttribute,2,t,!1,0,0),gl.enableVertexAttribArray(bDt.positionAttribute),gl.uniform1i(bDt.pLv,r),gl.bindBuffer(gl.ARRAY_BUFFER,texcoordBuffer),gl.vertexAttribPointer(bDt.textureAttribute,2,t,!1,0,0),gl.enableVertexAttribArray(bDt.textureAttribute),gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,e),gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}function blendArt(e,t){gl.useProgram(bldPg),gl.bindFramebuffer(gl.FRAMEBUFFER,fb),gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,t,level);t=gl.FLOAT;gl.bindBuffer(gl.ARRAY_BUFFER,buffer),gl.vertexAttribPointer(bDta.positionAttribute,2,t,!1,0,0),gl.enableVertexAttribArray(bDta.positionAttribute),gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,e),gl.uniform1i(bDta.freshTexture,0),gl.activeTexture(gl.TEXTURE1),gl.bindTexture(gl.TEXTURE_2D,cT),gl.uniform1i(bDta.cT,1),gl.bindBuffer(gl.ARRAY_BUFFER,texcoordBuffer),gl.vertexAttribPointer(bDta.textureAttribute,2,t,!1,0,0),gl.enableVertexAttribArray(bDta.textureAttribute),gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}function compositeArt(e){gl.useProgram(compositeProgram),gl.bindFramebuffer(gl.FRAMEBUFFER,fb),gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,cT,level);var t=gl.FLOAT;gl.bindBuffer(gl.ARRAY_BUFFER,buffer),gl.vertexAttribPointer(bDt.positionAttribute,2,t,!1,0,0),gl.enableVertexAttribArray(bDt.positionAttribute),gl.bindBuffer(gl.ARRAY_BUFFER,texcoordBuffer),gl.vertexAttribPointer(bDt.textureAttribute,2,t,!1,0,0),gl.enableVertexAttribArray(bDt.textureAttribute),gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,e),gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}function renderFinal(e){gl.useProgram(fPg),gl.bindFramebuffer(gl.FRAMEBUFFER,null);var t=gl.FLOAT;gl.bindBuffer(gl.ARRAY_BUFFER,buffer),gl.vertexAttribPointer(bDt.positionAttribute,2,t,!1,0,0),gl.enableVertexAttribArray(bDt.positionAttribute),gl.bindBuffer(gl.ARRAY_BUFFER,texcoordBuffer),gl.vertexAttribPointer(bDt.textureAttribute,2,t,!1,0,0),gl.enableVertexAttribArray(bDt.textureAttribute),gl.activeTexture(gl.TEXTURE0),gl.bindTexture(gl.TEXTURE_2D,e),gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}let blurFSS=`
precision highp float;
varying highp vec2 vTextureCoord;
uniform sampler2D u_texture;
uniform int pLv;
uniform float M;
int wMax = ${DIM};
float fWMax;
float scaleOffset;

void main() {
  vec2 resultCoords = vec2(vTextureCoord.x, vTextureCoord.y);

  float a = texture2D(u_texture, resultCoords).a;
  vec3 tColor = texture2D(u_texture, resultCoords).rgb;

  for (int i = 0;i<5;i++) {
    float bV = float(i) * ${bVL};
    vec2 d0 = vec2(0.,.1 * float(i));
    vec2 d1 = vec2(.1 * float(i),0.);
    vec2 d2 = vec2(.1 * float(i), .1 * float(i));
    vec2 d3 = vec2(.1 * float(i),-.1 * float(i));
    if (pLv == 0) {
      tColor += texture2D(u_texture, resultCoords + d0).rgb * bV;
      tColor += texture2D(u_texture, resultCoords - d0).rgb * bV;
    }
    else if (pLv == 1) {
      tColor += texture2D(u_texture, resultCoords + d1).rgb * bV;
      tColor += texture2D(u_texture, resultCoords - d1).rgb * bV;
    }
    else if (pLv == 2) {
      tColor += texture2D(u_texture, resultCoords + d0).rgb * bV;
      tColor += texture2D(u_texture, resultCoords - d0).rgb * bV;
      tColor += texture2D(u_texture, resultCoords + d1).rgb * bV;
      tColor += texture2D(u_texture, resultCoords - d1).rgb * bV;
    }
    else if (pLv == 3) {
      tColor += texture2D(u_texture, resultCoords + d2).rgb * bV;
      tColor += texture2D(u_texture, resultCoords - d2).rgb * bV;
      tColor += texture2D(u_texture, resultCoords + d3).rgb * bV;
      tColor += texture2D(u_texture, resultCoords - d3).rgb * bV;
    }
  }
  if (!${cal} && (pLv == 0 || pLv == 1)) {
    if (${pID} == 0) {
      tColor /= 1.5;
    }
    else {
      tColor /= 1.2;
    }
  }
  if (!${cal} && (pLv == 3 || pLv == 2)) {
    if (${pID} == 0) {
      tColor /= 2.5;
    }
    else {
      tColor /= 2.1;
    }
  }
  ${rad}
  if (${cal}){
    tColor.x = mod(tColor.x,1.);
    tColor.y = mod(tColor.y,1.);
    tColor.z = mod(tColor.z,1.);
  }
  gl_FragColor = vec4(tColor, a);
}
`,blurFragmentShader=compileShader(blurFSS,gl.FRAGMENT_SHADER),blendFSS=`
precision highp float;
varying highp vec2 vTextureCoord;
uniform sampler2D freshTexture;
uniform sampler2D compTexture;
void main() {
  vec3 blend0 = texture2D(freshTexture, vTextureCoord).rgb;
  vec3 blend1 = texture2D(compTexture, vTextureCoord).rgb;
  vec3 compBlend = mix(blend0,blend1,.9);
  gl_FragColor = vec4(compBlend ,1.0);
}
`,blendFragmentShader=compileShader(blendFSS,gl.FRAGMENT_SHADER),finalFSS=`
precision highp float;
varying highp vec2 vTextureCoord;
uniform sampler2D u_texture;
float M = float(${M});
int wMax = ${DIM};
float fWMax;
float scaleOffset;
vec3 rgb2hsv(vec3 c)
{
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}
vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
void main() {
  fWMax = float(wMax) / M;
  float scale = fWMax / 2.0;
  scaleOffset = ((float(${DEFAULT_SIZE}) / M)/scale);
  vec2 st = gl_FragCoord.xy/scaleOffset;
  vec2 ps = floor(st / M);
  vec2 resultCoords = vec2(vTextureCoord.x, vTextureCoord.y);
  vec4 tColor = texture2D(u_texture, resultCoords);
  vec3 cBase = rgb2hsv(vec3(tColor.x,tColor.y,tColor.z));
  float cbOff;
  cbOff = mod(${gridOffset},2.);
  cBase.z *= clamp(cbOff * 10.0,0.0,1.0);
  vec3 cAdjust = hsv2rgb(vec3(cBase.x,cBase.y,cBase.z));
  gl_FragColor = vec4(cAdjust,tColor.a);
}
`,finalFragmentShader=compileShader(finalFSS,gl.FRAGMENT_SHADER),baseVertexString=`
attribute vec2 position;
attribute vec2 texcoord;
varying highp vec2 vTextureCoord;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
  vTextureCoord = texcoord;
}
`,baseVertShader=compileShader(baseVertexString,gl.VERTEX_SHADER),compFragmentShaderString=`
precision highp float;
varying highp vec2 vTextureCoord;
uniform sampler2D u_texture;
void main() {
  gl_FragColor = texture2D(u_texture, vTextureCoord);
}
`,compFragmentShader=compileShader(compFragmentShaderString,gl.FRAGMENT_SHADER),artFragmentString=`
precision highp float;
varying highp vec2 vTextureCoord;
uniform sampler2D u_texture;
uniform float tick;
float M = float(${M});
${paletteInit}
int wMax = ${DIM};
float fWMax;
float scaleOffset;
vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float gCV(float cProp[paletteSize], int idx) {
  for (int i = 0;i<paletteSize;i++) {
    if (idx == i) {
      return cProp[i];
    }
  }
  return 0.0;
}

void main()
{
  fWMax = float(${DEFAULT_SIZE});
  vec2 st = gl_FragCoord.xy;
  ${gDR(ps,6)}
  vec2 psO = floor(st);
  ps = floor(ps);
  ${centerPoint}
  ${cP2}
  float dis = distance(centerPoint,ps);
  float sBase = 1.;
  float vBase = 1.;
  float oSS = 0.;
  float sT = 0.;
  float minPercent = ${gDR(sectionSizes,11)};
  float min = fWMax * minPercent;
  float max = fWMax * (1. - minPercent);
  float pL = float(${pL});

  float ac = 0.0;

  ${gDR(basicTiming,1)}
  ${gDR(rectSections,12)}
  oSS = ${gDR(sliceSizes,7)};
  sT = ${gDR(sliceTicks,26)};
  ${gDR(slices,8)}
  ${st}
  ${gDR(circA,23)}
  ${gDR(circB,24)}
  ${checkMovement()}
  dis = distance(cP2,ps);
  ${gDR(circA,3)}
  ${gDR(circB,4)}
  ${gDR(dSC2,30)}
  ${gDR(ec,25)}
  oSS = ${gDR(sliceSizes,9)};
  sT = ${gDR(sliceTicks,27)};
  ${gDR(slices,10)}
  ${gDR(xC,19)}
  ${gDR(pf,20)}

  int cI = 0;

  ac *= tick;

  ac = abs(ac);


  ac = sqrt(ac / (pL - tick));


  if (abs(ac) > 10000000000000000.) {
    ac = abs(ac) / 100000000000.;
  }
  if (abs(ac) * abs(ac) < 100000000.) {
    ac *= 50000000000.0;
  }
  else {
    ac *= 100000.0;
  }

  ac = sqrt(abs(ac));
  int cC = int(mod(abs(ac),1000000.));

  if (cC > 50000 && cC < 100000) {
    cI = 0;
  }
  else if (cC > 0 && cC < 200000) {
    cI = 1;
  }
  else if (cC > 0 && cC < 350000) {
    cI = 2;
  }
  else if (cC > 0 && cC < 450000) {
    cI = 3;
  }
  else if (cC > 0 && cC < 700000) {
    cI = 4;
  }
  else if (cC > 0 && cC < 900000) {
    cI = 5;
  }
  else {
    cI = int((float(tick) / pL) * 5.);
  }

  float mVa = 2.;

  vec3 rgbConvert = hsv2rgb(vec3(gCV(hues,cI),gCV(sats,cI),gCV(brights,cI)));

  if (psO.x < mVa) {
    rgbConvert = hsv2rgb(vec3(gCV(hues,0),gCV(sats,0),gCV(brights,0)));
  }
  if (psO.y < mVa) {
    rgbConvert = hsv2rgb(vec3(gCV(hues,1),gCV(sats,1),gCV(brights,1)));
  }
  if (float(${DIM}) - psO.y < mVa) {
    rgbConvert = hsv2rgb(vec3(gCV(hues,2),gCV(sats,2),gCV(brights,2)));
  }
  if (float(${DIM}) - psO.x < mVa) {
    rgbConvert = hsv2rgb(vec3(gCV(hues,3),gCV(sats,3),gCV(brights,3)));
  }
  gl_FragColor = vec4(rgbConvert,1.0);
}
`;var artFragmentShader=compileShader(artFragmentString,gl.FRAGMENT_SHADER);const aPg=gl.createProgram();gl.attachShader(aPg,baseVertShader),gl.attachShader(aPg,artFragmentShader),gl.linkProgram(aPg);const blPg=gl.createProgram();gl.attachShader(blPg,baseVertShader),gl.attachShader(blPg,blurFragmentShader),gl.linkProgram(blPg);const bldPg=gl.createProgram();gl.attachShader(bldPg,baseVertShader),gl.attachShader(bldPg,blendFragmentShader),gl.linkProgram(bldPg);const compositeProgram=gl.createProgram();gl.attachShader(compositeProgram,baseVertShader),gl.attachShader(compositeProgram,compFragmentShader),gl.linkProgram(compositeProgram);const fPg=gl.createProgram();if(gl.attachShader(fPg,baseVertShader),gl.attachShader(fPg,finalFragmentShader),gl.linkProgram(fPg),!gl.getProgramParameter(aPg,gl.LINK_STATUS))throw console.error(gl.getProgramInfoLog(aPg)),new Error("Failed to link art program");if(!gl.getProgramParameter(blPg,gl.LINK_STATUS))throw console.error(gl.getProgramInfoLog(blPg)),new Error("Failed to link blur program");if(!gl.getProgramParameter(bldPg,gl.LINK_STATUS))throw console.error(gl.getProgramInfoLog(bldPg)),new Error("Failed to link blend program");if(!gl.getProgramParameter(compositeProgram,gl.LINK_STATUS))throw console.error(gl.getProgramInfoLog(compositeProgram)),new Error("Failed to link composite program");if(!gl.getProgramParameter(fPg,gl.LINK_STATUS))throw console.error(gl.getProgramInfoLog(fPg)),new Error("Failed to link final program");const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer),gl.bufferData(gl.ARRAY_BUFFER,positionsData,gl.STATIC_DRAW);var texcoordBuffer=gl.createBuffer();function draw(){if(canDraw){switch(drawArt(),phaseLevel){case 0:blurArt(targetTexture,targetTexture2,0),blendArt(targetTexture2,bT);break;case 1:blurArt(targetTexture,targetTexture2,1),blendArt(targetTexture2,bT);break;case 2:blurArt(targetTexture,targetTexture2,2),blendArt(targetTexture2,bT);break;case 3:blurArt(targetTexture,targetTexture2,3),blendArt(targetTexture2,bT);break;case 4:blendArt(targetTexture,bT)}compositeArt(bT),renderFinal(cT),tick%=pL,tick++}requestAnimationFrame(draw)}gl.bindBuffer(gl.ARRAY_BUFFER,texcoordBuffer),gl.bufferData(gl.ARRAY_BUFFER,textureData,gl.STATIC_DRAW),aDt.positionAttribute=gl.getAttribLocation(aPg,"position"),aDt.colorOffset=gl.getUniformLocation(aPg,"colorOffset"),aDt.hues=gl.getUniformLocation(aPg,"hues"),aDt.sats=gl.getUniformLocation(aPg,"sats"),aDt.brights=gl.getUniformLocation(aPg,"brights"),aDt.tickSet=gl.getUniformLocation(aPg,"tick"),bDt.positionAttribute=gl.getAttribLocation(blPg,"position"),bDt.textureAttribute=gl.getAttribLocation(blPg,"texcoord"),bDt.pLv=gl.getUniformLocation(blPg,"pLv"),bDta.positionAttribute=gl.getAttribLocation(bldPg,"position"),bDta.textureAttribute=gl.getAttribLocation(bldPg,"texcoord"),bDta.cT=gl.getUniformLocation(bldPg,"compTexture"),bDta.freshTexture=gl.getUniformLocation(bldPg,"freshTexture"),fDt.positionAttribute=gl.getAttribLocation(fPg,"position"),fDt.textureAttribute=gl.getAttribLocation(fPg,"texcoord"),fDt.positionAttribute=gl.getAttribLocation(fPg,"position"),requestAnimationFrame(draw),document.body.addEventListener("click",function(e){canDraw=!canDraw}),document.addEventListener("keydown",function(e){canDraw=!canDraw});
