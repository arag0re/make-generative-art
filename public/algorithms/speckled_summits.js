function sfc32(r,n,t,e){return function(){var p=((r|=0)+(n|=0)|0)+(e|=0)|0;return e=e+1|0,r=n^n>>>9,n=(t|=0)+(t<<3)|0,t=(t=t<<21|t>>>11)+p|0,(p>>>0)/4294967296}}let prng=new sfc32(parseInt(tokenData.hash.substr(2,8),16),parseInt(tokenData.hash.substr(10,8),16),parseInt(tokenData.hash.substr(18,8),16),parseInt(tokenData.hash.substr(27,8),16));function rI(r,n){return parseInt(n*r())}function rgbC(r){return"rgb("+r[0]+","+r[1]+","+r[2]+")"}function rgbCB(r,n,t,e){return"rgb("+parseInt(r[0]*t+n[0]*e)+","+parseInt(r[1]*t+n[1]*e)+","+parseInt(r[2]*t+n[2]*e)+")"}function genPal(){return[[[89,83,88],[168,172,61],[255,236,89],[252,127,49]],[[158,0,89],[93,127,218],[182,156,211],[239,121,138]],[[0,50,73],[98,144,195],[234,225,81],[240,135,0]],[[209,41,0],[245,221,82],[46,101,232],[82,184,0]],[[62,137,137],[232,221,181],[187,89,28],[255,204,0]],[[227,126,64],[255,240,203],[78,128,166],[171,212,113]],[[33,33,33],[237,237,237],[255,66,179],[90,255,87]],[[29,17,96],[229,95,32],[99,113,122],[249,160,27]],[[237,239,253],[182,192,247],[126,146,241],[53,83,233]]]}let p=genParams(),c=genColors();function genColors(){let r=genPal(),n=r.splice(rI(prng,r.length),1)[0],t=n.splice(rI(prng,4),1)[0],e=n.splice(rI(prng,3),1)[0],p=n.splice(rI(prng,2),1)[0],_=n.splice(rI(prng,1),1)[0],u=r.splice(rI(prng,r.length),1)[0],i=u.splice(rI(prng,4),1)[0],l=u.splice(rI(prng,3),1)[0],s=u.splice(rI(prng,2),1)[0],c=u.splice(rI(prng,1),1)[0],g=[rgbC(t),rgbC(t.map(function(r){return Math.min(r+15,240)})),rgbC(t.map(function(r){return Math.max(r-25,0)}))],f=[rgbC(i),rgbC(i.map(function(r){return Math.min(r+15,240)})),rgbC(i.map(function(r){return Math.max(r-25,0)}))];return{sk_CA:rgbC(e),sk_LCA:rgbC(e.map(function(r){return Math.min(r+65,240)})),mt1_CA:g.splice(rI(prng,3),1)[0],mt2_CA:g.splice(rI(prng,2),1)[0],mt3_CA:g.splice(rI(prng,1),1)[0],ea_CA:rgbC(p),ea_LCA:rgbC(p.map(function(r){return Math.min(r+65,240)})),mo_CA:rgbC(_),sk_CB:rgbC(l),sk_LCB:rgbC(l.map(function(r){return Math.min(r+65,240)})),mt1_CB:f.splice(rI(prng,3),1)[0],mt2_CB:f.splice(rI(prng,2),1)[0],mt3_CB:f.splice(rI(prng,1),1)[0],ea_CB:rgbC(s),mo_CB:rgbC(c)}}function genParams(){return{e_L:0==rI(prng,54),q_B:0==rI(prng,9),c_R:0==rI(prng,9),h_B:0==rI(prng,9),s_B:0==rI(prng,9),m_B:0==rI(prng,2),o_B:0==rI(prng,2),d_T:0==rI(prng,5),mt_O:[1,2,3].splice(rI(prng,3),1)[0],s_S:0==rI(prng,5),b_S:0==rI(prng,5),st_S:rI(prng,5)+3,st_D:rI(prng,1)+1}}function setup(){let r=Math.min(window.innerWidth,window.innerHeight);createCanvas(r,r),noLoop()}function draw(){background(255);let r,n,t,e=1/650,_=Math.min(window.innerWidth,window.innerHeight)/1e3;t=1e3/(n=(r=[1,2,4])[rI(prng,r.length)]);for(let r=0;r<n;r++)for(let u=0;u<n;u++){(!p.b_S||0==r&&0==u)&&(p.st_S=rI(prng,5)+3,p.st_D=rI(prng,1)+1);let n,i,l,s=parseInt(p.st_S*e*1e3),c=s+parseInt(p.st_D*e*1e3);for(let e=n=r*t;e<=n+t;e++)for(let r=i=u*t;r<=i+t;r++)(!p.e_L||wS(r,e,1e3)||wMT_A(r,e,1e3)||wMT_B(r,e,1e3)||wMT_C(r,e,1e3))&&(e%c||r%c||(strokeWeight(Math.trunc(_*s)),null!==(l=bSC(r,e,1e3))&&(stroke(l),point(Math.trunc(_*r),Math.trunc(_*e)))))}n=(r=[5,10,10,10,20,20,25,50])[rI(prng,r.length)];let u=[];for(let i=1;i<=3;i++){for(;u.includes(n);)n=r[rI(prng,r.length)];u.push(n),t=1e3/n;for(let r=0;r<n;r++)for(let u=0;u<n;u++){(!p.b_S||0==r&&0==u)&&(p.st_S=rI(prng,5)+3,p.st_D=rI(prng,1)+1);let n,l,s,c=parseInt(p.st_S*e*1e3),g=c+parseInt(p.st_D*e*1e3),f=p.q_B&&0==rI(prng,3);for(let e=n=r*t;e<=n+t;e++)for(let r=l=u*t;r<=l+t;r++)e%g||r%g||(strokeWeight(Math.trunc(_*c)),null!==(s=mSC(r,e,1e3,f,i))&&(stroke(s),point(Math.trunc(_*r),Math.trunc(_*e))))}}t=1e3/(n=(r=[10,10,25,50,100])[rI(prng,r.length)]);for(let r=0;r<n;r++)for(let u=0;u<n;u++){(!p.b_S||0==r&&0==u)&&(p.st_S=rI(prng,5)+3,p.st_D=rI(prng,1)+1),p.c_R&&!p.q_B&&(c=genColors());let n,i,l,s=parseInt(p.st_S*e*1e3),g=s+parseInt(p.st_D*e*1e3),f=p.q_B&&0==rI(prng,3);for(let e=n=r*t;e<=n+t;e++)for(let r=i=u*t;r<=i+t;r++)e%g||r%g||(strokeWeight(Math.trunc(_*s)),null!==(l=fSC(r,e,1e3,f))&&(stroke(l),point(Math.trunc(_*r),Math.trunc(_*e))))}}function bSC(r,n,t,e){if(wS(r,n,t))return null;if(wMT_A(r,n,t))return null;if(wMT_B(r,n,t))return null;if(wMT_C(r,n,t))return null;let _=p.m_B?r^n:r*n,u=p.o_B?r-n:r+n,i=p.h_B?_:u,l=i%20==0,s=i%20==0,g=(p.h_B||p.s_B)&&l;p.h_B||p.s_B;return wSB(r,n,t)?g?p.s_B?c.sk_CB:c.sk_LCA:c.sk_CA:wEB(r,n,t)?c.ea_CA:null}function fSC(r,n,t,e){return wS(r,n,t)?p.d_T?e?c.mt2_CB:c.mt2_CA:e?c.mo_CB:c.mo_CA:null}function mSC(r,n,t,e,_){if(1==p.mt_O){if(1==_&&wMT_A(r,n,t))return e?c.mt1_CB:c.mt1_CA;if(2==_){if(wMT_A(r,n,t))return null;if(wMT_B(r,n,t))return e?c.mt2_CB:c.mt2_CA}if(3==_){if(wMT_A(r,n,t))return null;if(wMT_C(r,n,t))return e?c.mt3_CB:c.mt3_CA}}else if(2==p.mt_O){if(2==_&&wMT_B(r,n,t))return e?c.mt2_CB:c.mt2_CA;if(1==_){if(wMT_B(r,n,t))return null;if(wMT_A(r,n,t))return e?c.mt1_CB:c.mt1_CA}if(3==_){if(wMT_A(r,n,t))return null;if(wMT_C(r,n,t))return e?c.mt3_CB:c.mt3_CA}}else{if(3==_&&wMT_C(r,n,t))return e?c.mt3_CB:c.mt3_CA;if(2==_){if(wMT_C(r,n,t))return null;if(wMT_B(r,n,t))return e?c.mt2_CB:c.mt2_CA}if(1==_){if(wMT_B(r,n,t))return null;if(wMT_C(r,n,t))return null;if(wMT_A(r,n,t))return e?c.mt1_CB:c.mt1_CA}}return null}function hL(r){return.88*r}function wSB(r,n,t){return n<=hL(t)}function wEB(r,n,t){return n>hL(t)}function wS(r,n,t){let e=(p.s_S?.164:.134)*t,_=r-t/2,u=n-(e+.1*t);return _*_+u*u<=e*e}function wMT_A(r,n,t){if(n>hL(t))return!1;let e,p;return r<.5*t?(e=1,p=-1):(e=0,p=1),n>p*r+e*t}function wMT_B(r,n,t){if(n>hL(t))return!1;let e,p;return r<.2*t?(e=.65,p=-1):(e=.25,p=1),n>p*r+e*t}function wMT_C(r,n,t){if(n>hL(t))return!1;let e,p;return r<.8*t?(e=1.25,p=-1):(e=-.35,p=1),n>p*r+e*t}