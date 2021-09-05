const hP=[],cA=[[[0,0,12],[0,0,78],[32,75,100],[135,57,48],[358,63,92],[196,65,67]],[[146,60,43],[146,49,58],[60,11,100],[14,27,100],[29,68,84]],[[41,38,81],[240,6,100],[200,38,69],[200,38,69],[338,34,87],[355,74,67],[96,31,54]],[[190,18,13],[190,24,43],[333,99,54],[342,58,92],[358,15,100]],[[218,37,25],[214,52,50],[202,30,85],[182,11,99],[12,68,93]],[[40,71,99],[40,47,99],[181,100,55],[187,88,51],[201,64,44]],[[95,13,88],[129,18,76],[172,34,66],[195,54,55],[194,49,24]],[[355,75,90],[105,5,98],[182,24,86],[203,56,62],[215,67,34]],[[14,29,88],[50,2,96],[38,6,74],[21,10,54],[25,17,27]],[[24,100,100],[0,0,92],[0,0,75],[211,65,65],[209,100,60]],[[74,18,84],[67,15,93],[52,12,100],[29,26,96],[6,58,97]],[[21,30,100],[12,36,100],[358,34,90],[348,28,71],[263,11,46]],[[195,91,30],[195,90,70],[164,97,84],[42,60,100],[346,70,94]],[[289,65,32],[328,63,58],[341,63,87],[30,61,92],[228,58,79],[224,49,93]],[[59,56,65],[39,18,89],[345,44,95],[71,41,73],[4,69,64],[176,10,63]],[[211,69,16],[219,60,33],[212,45,47],[75,2,88],[214,30,66]]];let cl=[],tD=tokenData.hash;for(let s=0;s<32;s++)hP.push(tD.slice(2+2*s,4+2*s));const dP=hP.map((s=>parseInt(s,16))),se=parseInt(tD.slice(0,16),16),rs=parseInt(tD.slice(16,31),15);let scl,bs,l,r,up,res,len,cols,rows,mA,mxA,pd,bg,sc,sF,sAm,sB,iv,scn,sSc,gr,w,h,grid=[];function setup(){noLoop(),colorMode(HSB,360,100,100,1);const s=windowWidth<windowHeight?windowWidth:windowHeight;createCanvas(s,s),w=10*round(s/10),h=10*round(s/10),noiseSeed(se),randomSeed(rs),sF=[grO,grO,grO,aR,bl,cls,rts,ros,sn,stp,rSp,gW,ol,ccA,bF,brs],qB=dP[0]>252,spB=dP[0]<252&&dP[0]>245,scn=sSc?"DS":mpr(1,0,sF.length-1),iv=!(dP[2]>30),cl=sCo(dP[3]),sB=!(dP[4]>70),bs=1e3,l=-1*w,up=-1*h,res=int(.1*w),scl=int(w/map(180,0,bs,0,w)),cols=180,rows=180;const t=sB?.022:.035;pd=mp(6,.06*w,.15*w),mA=mpr(7,80,150),len=mp(8,.01*w,w*t),miA=mp(9,0,6*PI),mxA=mp(10,miA,22*PI),gr=mp(11,.04,.07),sAm=int(30-map(mA,60,160,10,20));for(let s=0;s<cols;s++){grid.push([]);for(let t=0;t<rows;t++){const e=noise(.005*s,.005*t),o=map(e,0,1,miA,mxA);grid[s].push(o)}}}function draw(){background(bg),spB?(sF.splice(12,4),dS()):qB?(sF.splice(12,4),qS()):sF[scn]();const s=w>bs?bs:w;bT=createGraphics(s,s),bT.loadPixels();for(let t=0;t<s;t++)for(let e=0;e<s;e++){const s=map(noise(t/3,e/3,t*e/50)*random([0,50,100]),0,100,0,.8);bT.set(t,e,color(0,0,75,s))}bT.updatePixels(),tex=createGraphics(w,h),tex.image(bT,0,0,w,h),tex=createGraphics(w,h),tex.loadPixels();for(let s=0;s<w;s++)for(let t=0;t<h;t++){const e=map(noise(s/3,t/3,s*t/50)*random([0,50,100]),0,100,0,.75);tex.set(s,t,color(0,0,75,e))}tex.updatePixels(),push(),blendMode(MULTIPLY),image(tex,0,0),pop()}function sCo(s){const t=round(map(s,0,255,0,cA.length-1));let e=cA[t];return iv&&0!=t&&2!=t&&14!=t&&e.reverse(),bg=e[0],sc=e[1],e.splice(0,2),e}function gKs(){let s=round(random(sF.length-1));sF[s](),0==s||1==s||2==s?sF.splice(0,3):sF.splice(s,1)}function dS(){translate(-w/2.5,0),gKs(),translate(.85*w,0),gKs(),translate(-w/2.25,0)}function qS(){scale(.5),gKs(),translate(w,0),gKs(),translate(0,h),gKs(),translate(-w,0),gKs(),translate(0,-h),scale(2)}function ros(){let s=.3*w;fill(sc),noStroke(),ellipse(w/2,h/2,.15*w);let t=mpr(20,4,6);for(let e=0;e<TAU;e+=TAU/t)strokeWeight(.05*w),stroke(sc),noFill(),ellipse(w/2+s*sin(e),h/2+s*cos(e),.2*w),dF(mA/t,sAm)}function ol(){let s=mp(17,5,8);for(let t=0;t<s;t++)dF(mA,sAm)}function rSp(){let s=mpr(18,2,5),t=.09-map(s,2,6,.03,.055),e=.15*w,o=ceil((w-2*e)/s);stroke(sc),strokeWeight(w*t),dF(mA/2,sAm);for(let s=e;s<w-e;s+=o)for(let t=e;t<h-e;t+=o)0==floor(random(2))?line(s,t,s+o,t+o):line(s,t+o,s+o,t);dF(mA/2,sAm)}function sn(){const s=360/mpr(21,5,10),t=.5*w;dF(mA/2,sAm);for(let e=0;e<360;e+=s){const s=cos(radians(e))*(.4*w),o=sin(radians(e))*(.4*w);stroke(sc),strokeWeight(.06*w),line(s+t,o+t,t,t)}dF(mA/2,sAm)}function bF(){const s=.8*w,t=.05*s,e=(s-3*t)/4,o=dP[22]<220;for(let s=0;s<4;s++){o?(fill(sc),noStroke()):(noFill(),strokeWeight(.03*w),stroke(sc));rect(.1*w+e*s+t*s,(1==s||3==s?.025*w:.025*w*-1)+.2*h,e,.6*h),dF(mA/4,sAm)}}function rts(){const s=mpr(23,2,4),t=(.8*w-.1*w)/s/w;for(let e=0;e<s;e++){const o=w*(.15+e*t*1.2);rectMode(CENTER),stroke(sc),strokeWeight(w*(.03+.005*e)),noFill(),rect(w/2,h/2,o,o),dF(mA/s,sAm)}}function cls(){noStroke(),fill(sc);const s=mpr(24,2,4),t=.01-map(s,2,4,.003,.005),e=(.5*w-.1*w)/s/w;circle(w/2,h/2,.08*w);for(let o=0;o<s;o++)dD(w*(.11+o*e),w*(.025+o*t)),dF(mA/s,sAm)}function grO(){const s=dP[25]>120,t=dP[27]>120,e=mpr(27,4,6),o=.05*w,r=(.8*w-o*(e-1))/e;dP[26]>120?(fill(sc),noStroke()):(strokeWeight(.03*w),stroke(sc),noFill());for(let n=0;n<e;n++)for(let l=0;l<e;l++){let c=n%2==0?.05*h:-.05*h;c=t?c:0,s?rect(.1*w+o*n+r*n,c+.1*h+o*l+r*l,r,r):ellipse(.1*w+o*n+r*n+r/2,c+.1*h+o*l+r*l+r/2,r,r),dF(mA/(e*e),sAm)}}function aR(){const s=mpr(27,2,6),t=.8*w/s,e=.1*w-map(s,2,6,.02*w,.055*w);noFill(),strokeCap(SQUARE),strokeWeight(e),stroke(sc);for(let e=0;e<s;e++){const o=random(0,TAU),r=random(o+PI/2,o+TAU);arc(.5*w,.5*h,t+t*e,t+t*e,o,r),dF(mA/s,sAm)}}function ccA(){dP[30]<200?(noStroke(),fill(sc)):(noFill(),strokeWeight(.05*w),stroke(sc)),dF(.25*mA,10);for(let s=0;s<100;s+=25)push(),rotate(radians(s)),circle(w/2,0,.2*w),pop();dF(.25*mA,sAm);for(let s=0;s<120;s+=15)push(),rotate(radians(s)),circle(w,0,.2*w),pop();dF(.25*mA,sAm)}function gW(){const s=mpr(31,2,4),t=.09-map(s,2,4,.03,.06),e=.15*w,o=(w-2*e)/s;strokeWeight(w*t),stroke(sc),dF(mA/2,sAm);for(let t=0;t<s+1;t++)line(e+o*t,e,e+o*t,h-e),line(e,e+o*t,h-e,e+o*t);dF(mA/2,sAm)}function stp(){strokeWeight(.08*w),stroke(sc);const s=mp(28,1,30);for(let t=0;t<3;t++)if(s<10)line(.2*w+t*(.2*w),.15*h,.35*w+t*(.2*w),.85*h),dF(mA/3,sAm);else for(let e=0;e<=s;e++)point(lerp(.2*w+t*(.2*w),.3*w+t*(.2*w),e/s)+s,lerp(.15*h,.85*h,e/s)+s),dF(mA/(3*s),sAm)}function brs(){let s=mpr(29,3,6),t=dP[29]<230,e=.6*h/s;for(let o=0;o<s;o++){let r=o%2==0?.08:.04;t?(fill(sc),noStroke()):(noFill(),strokeWeight(.02*w),stroke(sc));let n=h*r;rect(.1*w,.2*h+o*e+e/2-n/2,w-.2*w,n),dF(mA/s,sAm)}}function bl(){const s=dP[19]<125;function t(s){return s?.25*w:.75*w}fill(sc),noStroke(),dF(.25*mA,sAm),circle(t(s),.25*w,.25*w),dF(.25*mA,sAm),dD(.2*w,.07*w),dF(.25*mA,sAm),circle(t(!s),.75*w,.25*w),dF(.25*mA,sAm)}function dD(s,t){noFill(),stroke(sc),strokeWeight(t),circle(w/2,h/2,2*s)}function dF(s,t){for(let e=0;e<s;e++){dC(t,map(random(0,bs),0,bs,pd,w-pd),map(random(0,bs),0,bs,pd,h-pd))}}function dC(s,t,e){let o=t,r=e,n=random(cl);for(let t=0;t<s;t++){let e=int((o-l)/res*scl),c=int((r-up)/res*scl),i=grid[e][c],m=abs(t*(w*gr)-s*(.03*w)/2);o<w-pd&&o>pd&&r<h-pd&&r>pd&&(push(),noStroke(),fill(n[0]+2*t,n[1]+t,n[2]-2*t),translate(o,r),rotate(i),sB?circle(0,0,.02*w+.01*m):rect(0,0,.03*w,.012*w+.01*m),pop(),o+=len*cos(i),r+=len*sin(i))}}function mpr(s,t,e){return round(map(dP[s],0,255,t,e))}function mp(s,t,e){return map(dP[s],0,255,t,e)}