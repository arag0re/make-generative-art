!function(t,e,o,r,n,a,i,s,l){function c(t){let e,o=t.length;const n=this;let a=0,i=n.i=n.j=0;const s=n.S=[];for(o||(t=[o++]);r>a;)s[a]=a++;for(a=0;r>a;a++)s[a]=s[i=g&i+t[a%o]+(e=s[a])],s[i]=e;(n.g=function(t){for(var e,o=0,a=n.i,i=n.j,s=n.S;t--;)e=s[a=g&a+1],o=o*r+s[g&(s[a]=s[i=g&i+e])+(s[i]=e)];return n.i=a,n.j=i,o})(r)}function d(t,e){for(var o,r=t+"",n=0;n<r.length;)e[g&n]=g&(o^=19*e[g&n])+r.charCodeAt(n++);return h(e)}function f(o){try{return p?h(p.randomBytes(r)):(t.crypto.getRandomValues(o=new Uint8Array(r)),h(o))}catch(r){return[+new Date,t,(o=t.navigator)&&o.plugins,t.screen,h(e)]}}function h(t){return String.fromCharCode.apply(0,t)}let p;const w=o.pow(r,6),u=o.pow(2,52),m=2*u;var g=r-1;const x=o["seed"+l]=function(t,n,a){const i=[],s=d(function t(e,o){let r;const n=[],a=typeof e;if(o&&"object"==a)for(r in e)try{n.push(t(e[r],o-1))}catch(t){}return n.length?n:"string"==a?e:e+"\0"}((n=1==n?{entropy:!0}:n||{}).entropy?[t,h(e)]:null==t?f():t,3),i),p=new c(i);return d(h(p.S),e),(n.pass||a||function(t,e,r){return r?(o[l]=t,e):t})(function(){for(var t=p.g(6),e=w,o=0;u>t;)t=(t+o)*r,e*=r,o=p.g(1);for(;t>=m;)t/=2,e/=2,o>>>=1;return(t+o)/e},s,"global"in n?n.global:this==o)};if(d(o[l](),e),i&&i.exports){i.exports=x;try{p=require("crypto")}catch(t){}}else s&&s.amd&&s(function(){return x})}(this,[],Math,256,0,0,"object"==typeof module&&module,"function"==typeof define&&define,"random"),function(t){const e=t.noise={};function o(t,e,o){this.x=t,this.y=e,this.z=o}o.prototype.dot3=function(t,e,o){return this.x*t+this.y*e+this.z*o};const r=[new o(1,1,0),new o(-1,1,0),new o(1,-1,0),new o(-1,-1,0),new o(1,0,1),new o(-1,0,1),new o(1,0,-1),new o(-1,0,-1),new o(0,1,1),new o(0,-1,1),new o(0,1,-1),new o(0,-1,-1)],n=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],a=new Array(512),i=new Array(512);function s(t){return t*t*t*(t*(6*t-15)+10)}function l(t,e,o){return(1-o)*t+o*e}e.seed=function(t){t>0&&t<1&&(t*=65536),(t=Math.floor(t))<256&&(t|=t<<8);for(let o=0;o<256;o++){var e;e=1&o?n[o]^255&t:n[o]^t>>8&255,a[o]=a[o+256]=e,i[o]=i[o+256]=r[e%12]}},e.seed(0),Math.sqrt(3),Math.sqrt(3),e.perlin3=function(t,e,o){let r=Math.floor(t),n=Math.floor(e),c=Math.floor(o);t-=r,e-=n,o-=c;const d=i[(r&=255)+a[(n&=255)+a[c&=255]]].dot3(t,e,o),f=i[r+a[n+a[c+1]]].dot3(t,e,o-1),h=i[r+a[n+1+a[c]]].dot3(t,e-1,o),p=i[r+a[n+1+a[c+1]]].dot3(t,e-1,o-1),w=i[r+1+a[n+a[c]]].dot3(t-1,e,o),u=i[r+1+a[n+a[c+1]]].dot3(t-1,e,o-1),m=i[r+1+a[n+1+a[c]]].dot3(t-1,e-1,o),g=i[r+1+a[n+1+a[c+1]]].dot3(t-1,e-1,o-1),x=s(t),z=s(e),M=s(o);return l(l(l(d,w,x),l(f,u,x),M),l(l(h,m,x),l(p,g,x),M),z)}}(this);const shuffleArray=t=>{for(let e=t.length-1;e>0;e--){const o=Math.floor(Math.random()*(e+1)),r=t[e];t[e]=t[o],t[o]=r}return t},startTime=(new Date).getTime(),palettes=[];palettes.push(["f790ec","90def7"]),palettes.push(["90def7","90f7a8"]),palettes.push(["90f7a8","f7d890"]),palettes.push(["f7d890","f790ec"]);let scaled=!1;const resizeCanvas=t=>{const e={};for(e.canvas=document.getElementsByTagName("canvas")[0],e.ctx=e.canvas.getContext("2d"),e.def=2400,e.size=Math.min(window.innerWidth,window.innerHeight),e.canvas.width=e.size*devicePixelRatio,e.canvas.height=e.size*devicePixelRatio,e.canvas.style.width=e.size+"px",e.canvas.style.height=e.size+"px",e.sizeMod=e.size/e.def,scaled||e.ctx.scale(devicePixelRatio,devicePixelRatio),e.mkr=18*e.sizeMod*.8,s=260;s>0;s-=20)e.size<=s&&(e.mkr*=.95);return e.tileSize=e.size/t.tiles,e.step=e.tileSize/t.lines,e.stepOffset=e.step/2,e.midPoint=e.size/2-e.tileSize/2,e.cornerDistance=2*Math.pow(e.midPoint,2),e.midPoint=e.size/2,e},makeFeatures=t=>{const e={};Math.seedrandom(t);const o=Math.random(),r=Math.random();Math.random();e.tiles=Math.floor((o+r/2)/1.5*14+5),e.lines=Math.floor(9-(o+r)/2*8)+1,e.linesBoost=0,Math.random()<.1&&e.linesBoost--,Math.random()<.1&&(e.linesBoost-=2),Math.random()<.1&&e.linesBoost++,Math.random()<.1&&(e.linesBoost+=2),e.linesBoost<-2&&(e.linesBoost=-2),e.linesBoost>2&&(e.linesBoost=2),e.lines+=e.linesBoost,e.tiles>=16&&e.lines--,e.lines<1&&(e.lines=1),e.tiles>17&&e.lines>5&&(e.lines=6),chance=.5;Math.random();e.format="Normal",e.paletteIndex=Math.floor(Math.random()*palettes.length);const n=shuffleArray(JSON.parse(JSON.stringify(palettes[e.paletteIndex])));e.startCol=n[n.length-1],e.endCol=n[n.length-2],e.fill="Top-down",e.special="None";Math.random();return Math.random()<=4/64&&(e.special="waves"),e},drawCorner=(t,e,o,r,n,a,i,s,l)=>{a&&(l.ctx.beginPath(),l.ctx.moveTo(t,e),l.ctx.lineTo(o,r),l.ctx.arc(t,e,n,i*Math.PI,s*Math.PI),l.ctx.lineTo(t,e),l.ctx.fill()),l.ctx.beginPath(),l.ctx.arc(t,e,n,i*Math.PI,s*Math.PI),l.ctx.lineCap="round",l.ctx.stroke()},drawTL=(t,e,o,r)=>drawCorner(t.left,t.top,t.right,t.top,e,o,0,.5,r),drawTR=(t,e,o,r)=>drawCorner(t.right,t.top,t.right,t.bottom,e,o,.5,1,r),drawBR=(t,e,o,r)=>drawCorner(t.right,t.bottom,t.left,t.bottom,e,o,1,1.5,r),drawBL=(t,e,o,r)=>drawCorner(t.left,t.bottom,t.left,t.top,e,o,1.5,0,r),drawTile=(t,e,o,r,n)=>{r.ctx.fillRect(t.left,t.top,r.tileSize,r.tileSize);let a=!0;for(l=n.lines-1;l>=0;l--){e(t,l*r.step+r.stepOffset,a,r),a=!1}for(a=!0,l=n.lines-1;l>=0;l--){o(t,l*r.step+r.stepOffset,a,r),a=!1}},dc=(t,e,o,r)=>{drawTile(getPos(--t,--e,o,r),drawTL,drawBR,o,r),drawTile(getPos(t+1,e,o,r),drawTR,drawBL,o,r),drawTile(getPos(t+1,e+1,o,r),drawBR,drawTL,o,r),drawTile(getPos(t,e+1,o,r),drawBL,drawTR,o,r)},drawVert=(t,e,o)=>{for(l=0;l<o.lines;l++)e.ctx.beginPath(),e.ctx.moveTo(t.left+l*e.step+e.stepOffset,t.top-2),e.ctx.lineTo(t.left+l*e.step+e.stepOffset,t.bottom+2),e.ctx.lineCap="butt",e.ctx.stroke()},drawHorz=(t,e,o)=>{for(l=0;l<o.lines;l++)e.ctx.beginPath(),e.ctx.moveTo(t.left-2,t.top+l*e.step+e.stepOffset),e.ctx.lineTo(t.right+2,t.top+l*e.step+e.stepOffset),e.ctx.lineCap="butt",e.ctx.stroke()},getPos=(t,e,o)=>({left:o.tileSize*t,right:o.tileSize*(t+1),top:o.tileSize*e,bottom:o.tileSize*(e+1)}),makeTileHolders=(t,e)=>{const o=[];for(let r=0;r<e.tiles;r++)for(let n=0;n<e.tiles;n++){getPos(n,r,t);const a=Math.random();chance=.7-(noise.perlin3(n/20+a/721,r/20+a/883,a/1e3)+1)/2,chance<.1&&(chance=.1),chance>.9&&(chance=.9);let i=!1;if("waves"===e.special&&r>e.tiles/2&&(n%2?o.push([drawBR,drawTL]):o.push([drawBL,drawTR]),i=!0),!i)if(Math.random()>=chance){let t=drawTL,e=drawBR;Math.random()<.5?Math.random()<.5&&(t=drawBR,e=drawTL):(t=drawTR,e=drawBL,Math.random()<.5&&(t=drawBL,e=drawTR)),o.push([t,e])}else Math.random()<.5?o.push(["horz"]):o.push(["vert"])}return o},drawImage=(t,e,o)=>{let r=0;for(let n=0;n<e.tiles;n++)for(let a=0;a<e.tiles;a++){const i=o[r];r++;const s=getPos(a,n,t);if(2===i.length){let o=!0;for(l=e.lines-1;l>=0;l--){const e=l*t.step+t.stepOffset;i[0](s,e,o,t),o=!1}for(o=!0,l=e.lines-1;l>=0;l--){const e=l*t.step+t.stepOffset;i[1](s,e,o,t),o=!1}}else"horz"===i[0]?(drawHorz(s,t,e),t.ctx.beginPath(),t.ctx.rect(s.left+t.stepOffset,s.top,t.tileSize-t.step,t.tileSize),t.ctx.fill(),drawVert(s,t,e)):(drawVert(s,t,e),t.ctx.beginPath(),t.ctx.rect(s.left,s.top+t.stepOffset,t.tileSize,t.tileSize-t.step),t.ctx.fill(),drawHorz(s,t,e))}},makeGrd=(t,e)=>{let o=t.ctx.createLinearGradient(0,0,0,t.size);return o.addColorStop(0,`#${e.startCol}`),o.addColorStop(1,`#${e.endCol}`),o},drawTheThing=(t,e,o)=>{t.ctx.globalCompositeOperation="source-over",t.ctx.fillStyle="white",t.ctx.beginPath(),t.ctx.rect(0,0,t.size,t.size),t.ctx.fill(),t.ctx.lineWidth=t.mkr,drawImage(t,e,o),t.ctx.globalCompositeOperation="difference",t.ctx.fillStyle="white",t.ctx.beginPath(),t.ctx.rect(0,0,t.size,t.size),t.ctx.fill(),t.ctx.globalCompositeOperation="lighten",t.ctx.fillStyle=makeGrd(t,e),t.ctx.beginPath(),t.ctx.rect(0,0,t.size,t.size),t.ctx.fill()};window.onresize=(()=>{target=resizeCanvas(features),window.requestAnimationFrame(()=>{drawTheThing(target,features,tileHolders)})}),features=makeFeatures(tokenData.hash),target=resizeCanvas(features),tileHolders=makeTileHolders(target,features),window.requestAnimationFrame(()=>{drawTheThing(target,features,tileHolders)});